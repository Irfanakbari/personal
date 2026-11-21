"use client";

import { emit, toggleTheme } from "@/lib/events";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => emit("open-chat")}
        className="rounded-sm border border-line px-3 py-1.5 font-mono text-xs hover:border-accent"
      >
        Ask AI
      </button>
      <button
        type="button"
        onClick={() => toggleTheme()}
        aria-label="Toggle dark mode"
        className="grid h-8 w-8 place-items-center rounded-sm border border-line hover:border-accent"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
    </div>
  );
}
