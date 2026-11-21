import Link from "next/link";
import { profile } from "@/content/profile";
import { Led } from "./ui";
import { AskButton } from "./ask-button";

const modules = [
  { name: "MES / WMS", state: "running" },
  { name: "SAP Business One sync", state: "in sync" },
  { name: "HRIS & Payroll", state: "running" },
  { name: "Single Sign-On", state: "secured" },
  { name: "PLC pick-to-light", state: "0 miss-picks" },
  { name: "AI assistants", state: "online" },
];

export function Hero() {
  return (
    <section className="grid-bg border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <Led label={profile.availability} />
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            <span className="font-medium text-fg">{profile.name}</span> — {profile.role}. {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#work" className="rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:brightness-95">
              View work
            </Link>
            <Link href="/resume" className="rounded-sm border border-line bg-panel px-5 py-2.5 text-sm font-medium hover:border-accent">
              Resume
            </Link>
            <AskButton />
            <a href={`mailto:${profile.email}`} className="px-2 py-2.5 text-sm font-medium text-muted underline-offset-4 hover:text-fg hover:underline">
              Contact
            </a>
          </div>
        </div>

        <div className="rounded-md border border-line bg-panel shadow-sm" aria-label="System status board">
          <div className="hazard h-1.5 rounded-t-md opacity-80" aria-hidden />
          <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted">
            <span>Plant systems · status</span>
            <span>Bekasi, ID</span>
          </div>
          <ul className="divide-y divide-line font-mono text-sm">
            {modules.map((m) => (
              <li key={m.name} className="flex items-center justify-between px-4 py-3">
                <span className="flex items-center gap-3">
                  <span className="led" aria-hidden />
                  {m.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-accent-ink">{m.state}</span>
              </li>
            ))}
          </ul>
          <p className="border-t border-line px-4 py-3 font-mono text-[11px] text-muted">
            Analysis → build → deploy → operate. One owner, end to end.
          </p>
        </div>
      </div>
    </section>
  );
}
