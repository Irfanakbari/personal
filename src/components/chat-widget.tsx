"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

const suggestions = ["What has Irfan built?", "Does he know SAP Business One?", "What infrastructure has he managed?", "How does he use AI?"];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error, clearError } = useChat();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const busy = status === "submitted" || status === "streaming";

  const ask = (q: string) => {
    const text = q.trim();
    if (!text || busy) return;
    if (error) clearError();
    sendMessage({ text });
    setInput("");
  };

  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const q = (e as CustomEvent<string | undefined>).detail;
      if (q) setInput(q);
      setTimeout(() => inputRef.current?.focus(), 50);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("open-chat", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-chat", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, status]);

  return (
    <div data-print-hide>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2.5 font-mono text-xs shadow-lg hover:border-accent"
        >
          <span className="led led-pulse" aria-hidden /> Ask about Irfan
        </button>
      )}
      {open && (
        <section
          role="dialog"
          aria-label="Ask about Irfan"
          className="fixed inset-x-2 bottom-2 z-50 flex max-h-[80dvh] flex-col rounded-md border border-line bg-panel shadow-2xl sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-[380px]"
        >
          <header className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Ask about Irfan</p>
              <p className="font-mono text-[11px] text-muted">AI answers from this portfolio only</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="font-mono text-sm text-muted hover:text-fg">
              ✕
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm" aria-live="polite">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-muted">Hi! Ask me anything about Irfan&apos;s work, skills or availability.</p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((s) => (
                    <button key={s} type="button" onClick={() => ask(s)} className="rounded-sm border border-line px-2 py-1 text-left text-xs hover:border-accent">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m) => (
              <div key={m.id} className={m.role === "user" ? "ml-8 rounded-md bg-accent/15 px-3 py-2" : "mr-4 whitespace-pre-wrap"}>
                {m.parts.map((p, i) => (p.type === "text" ? <span key={i}>{p.text}</span> : null))}
              </div>
            ))}
            {status === "submitted" && <p className="font-mono text-xs text-muted">thinking…</p>}
            {error && <p className="rounded-sm border border-line px-3 py-2 text-xs text-muted">{readError(error)}</p>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex gap-2 border-t border-line p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={800}
              placeholder="Type a question…"
              aria-label="Your question"
              className="min-w-0 flex-1 rounded-sm border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button type="submit" disabled={busy || !input.trim()} className="rounded-sm bg-accent px-3 py-2 text-sm font-semibold text-black disabled:opacity-50">
              Send
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

function readError(error: Error) {
  try {
    const parsed = JSON.parse(error.message) as { error?: string };
    if (parsed.error) return parsed.error;
  } catch {
    /* not JSON */
  }
  return "The assistant is unavailable right now — please email me instead.";
}
