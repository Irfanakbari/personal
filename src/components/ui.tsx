import type { ReactNode } from "react";

export function Section({ id, code, title, intro, children }: { id: string; code: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="mb-8 flex flex-col gap-2 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">{code}</p>
          <h2 id={`${id}-title`} className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        {intro && <p className="max-w-md text-sm text-muted">{intro}</p>}
      </header>
      {children}
    </section>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-md border border-line bg-panel ${className}`}>{children}</div>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line bg-panel-2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function Led({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
      <span className="led led-pulse" aria-hidden />
      {label}
    </span>
  );
}
