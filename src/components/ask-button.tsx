"use client";

import { emit } from "@/lib/events";

export function AskButton({ question, label = "Ask AI about me" }: { question?: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={() => emit("open-chat", question)}
      className="rounded-sm border border-line bg-panel px-5 py-2.5 text-sm font-medium hover:border-accent"
    >
      {label}
    </button>
  );
}
