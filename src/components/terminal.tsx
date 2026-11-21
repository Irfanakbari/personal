"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { caseStudies } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { emit, toggleTheme } from "@/lib/events";

type Line = { id: number; node: ReactNode };

const HELP = [
  ["help", "list commands"],
  ["about", "who is Irfan"],
  ["work", "list case studies"],
  ["open <n|slug>", "open a case study"],
  ["experience", "work history"],
  ["skills", "toolbox"],
  ["contact", "how to reach me"],
  ["resume", "open the resume"],
  ["ask <question>", "ask the AI assistant"],
  ["theme", "toggle dark / light"],
  ["clear", "clear the screen"],
  ["exit", "close the terminal"],
];

function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
}

export function Terminal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const idRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const typed = useRef("");

  const print = (...nodes: ReactNode[]) =>
    setLines((l) => [...l, ...nodes.map((node) => ({ id: ++idRef.current, node }))]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "`" && !isTyping(e.target)) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "Escape") setOpen(false);
      if (!isTyping(e.target) && e.key.length === 1) {
        typed.current = (typed.current + e.key).slice(-4);
        if (typed.current === "sudo") setOpen(true);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-terminal", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-terminal", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    if (lines.length === 0) {
      print(
        <span className="text-[var(--accent)]">plant-os v2 · {profile.name}</span>,
        <span>Type <b>help</b> to see what you can do. Esc to close.</span>,
      );
    }
    setTimeout(() => inputRef.current?.focus(), 30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const run = (raw: string) => {
    const input = raw.trim();
    print(
      <span>
        <span className="text-[var(--ok)]">irfan@plant</span>:~$ {input}
      </span>,
    );
    if (!input) return;
    setHistory((h) => [input, ...h].slice(0, 50));
    const [cmd, ...rest] = input.split(/\s+/);
    const arg = rest.join(" ");

    switch (cmd.toLowerCase()) {
      case "help":
        print(
          ...HELP.map(([c, d]) => (
            <span key={c}>
              <span className="inline-block w-36 text-[var(--accent)]">{c}</span>
              {d}
            </span>
          )),
        );
        break;
      case "about":
      case "whoami":
        print(`${profile.name} — ${profile.role}`, profile.tagline, profile.intro);
        break;
      case "work":
      case "ls":
        print(...caseStudies.map((c, i) => `${String(i + 1).padStart(2, " ")}. ${c.title} — ${c.short}`), "Tip: open 1");
        break;
      case "open":
      case "cd": {
        const n = Number(arg);
        const target = Number.isInteger(n) && n > 0 ? caseStudies[n - 1] : caseStudies.find((c) => c.slug === arg);
        if (!target) {
          print("Usage: open <number|slug>. Run `work` for the list.");
          break;
        }
        print(`Opening ${target.title}…`);
        router.push(`/work/${target.slug}`);
        setOpen(false);
        break;
      }
      case "experience":
        print(...experience.map((e) => `${e.period.padEnd(22, " ")} ${e.role} · ${e.company}`));
        break;
      case "skills":
        print(...skillGroups.map((g) => `${g.group}: ${g.items.join(", ")}`));
        break;
      case "contact":
        print(`email     ${profile.email}`, `linkedin  ${profile.links.linkedin}`, `github    ${profile.links.github}`);
        break;
      case "resume":
        print("Opening resume…");
        router.push("/resume");
        setOpen(false);
        break;
      case "ask":
        setOpen(false);
        emit("open-chat", arg || undefined);
        break;
      case "theme":
        print(`Theme: ${toggleTheme() ? "dark" : "light"}`);
        break;
      case "sudo":
        print("Nice try. This incident will be reported to the plant manager. 🦺");
        break;
      case "clear":
        setLines([]);
        break;
      case "exit":
        setOpen(false);
        break;
      default:
        print(`command not found: ${cmd}. Type help.`);
    }
  };

  if (!open) return null;

  return (
    <div data-print-hide className="fixed inset-0 z-[60] grid place-items-end bg-black/50 p-2 sm:place-items-center sm:p-6" onClick={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Terminal"
        onClick={(e) => e.stopPropagation()}
        className="flex h-[70dvh] w-full max-w-3xl flex-col overflow-hidden rounded-md border border-[#262b33] bg-[#0c0e11] font-mono text-[13px] text-[#e8eaee] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[#262b33] px-4 py-2 text-xs text-[#9aa1ad]">
          <span>irfan@plant: ~</span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close terminal" className="hover:text-white">
            ✕
          </button>
        </div>
        <div ref={bodyRef} className="flex-1 space-y-1 overflow-y-auto whitespace-pre-wrap p-4" onClick={() => inputRef.current?.focus()}>
          {lines.map((l) => (
            <div key={l.id}>{l.node}</div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            run(value);
            setValue("");
            setCursor(-1);
          }}
          className="flex items-center gap-2 border-t border-[#262b33] px-4 py-3"
        >
          <span className="text-[var(--ok)]">$</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp" && history.length) {
                e.preventDefault();
                const c = Math.min(cursor + 1, history.length - 1);
                setCursor(c);
                setValue(history[c]);
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                const c = Math.max(cursor - 1, -1);
                setCursor(c);
                setValue(c === -1 ? "" : history[c]);
              }
            }}
            aria-label="Terminal command"
            autoComplete="off"
            spellCheck={false}
            autoFocus
            className="flex-1 bg-transparent outline-none focus-visible:outline-none"
          />
        </form>
      </div>
    </div>
  );
}
