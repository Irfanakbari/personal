import { google } from "@ai-sdk/google";
import { convertToModelMessages, createUIMessageStreamResponse, streamText, toUIMessageStream, type UIMessage } from "ai";
import { SYSTEM_PROMPT } from "@/lib/knowledge";

export const maxDuration = 30;

const MAX_MESSAGES = 12;
const MAX_CHARS = 800;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 20;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS;
}

function textOf(m: UIMessage) {
  return m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
}

const json = (status: number, error: string) => Response.json({ error }, { status });

export async function POST(req: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return json(503, "The AI assistant isn't configured yet. Please email me instead.");
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) return json(429, "Too many questions in a short time — please try again in a few minutes.");

  let messages: UIMessage[];
  try {
    ({ messages } = (await req.json()) as { messages: UIMessage[] });
  } catch {
    return json(400, "Invalid request.");
  }
  if (!Array.isArray(messages) || messages.length === 0) return json(400, "Invalid request.");

  const trimmed = messages
    .slice(-MAX_MESSAGES)
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ ...m, parts: [{ type: "text" as const, text: textOf(m).slice(0, MAX_CHARS) }] }));

  const result = streamText({
    model: google(process.env.GEMINI_MODEL || "gemini-flash-latest"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(trimmed),
    maxOutputTokens: 500,
    temperature: 0.3,
  });

  return createUIMessageStreamResponse({ stream: toUIMessageStream({ stream: result.stream }) });
}
