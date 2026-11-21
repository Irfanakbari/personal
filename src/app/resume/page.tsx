import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { caseStudies } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { certifications, education } from "@/content/credentials";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}, ${profile.role}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-[210mm] px-4 py-10 print:p-0">
      <div data-print-hide className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs text-muted">Resume · A4 · prints cleanly</p>
        <PrintButton />
      </div>

      <article className="rounded-md border border-line bg-white p-8 text-[13px] leading-snug text-neutral-900 shadow-sm print:border-0 print:p-0 print:shadow-none">
        <header className="border-b-2 border-neutral-900 pb-3">
          <h1 className="text-2xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-sm font-medium">{profile.role}</p>
          <p className="mt-1 text-xs text-neutral-600">
            {profile.location} · {profile.email} · linkedin.com/in/irfanakbarihabibi · github.com/Irfanakbari
          </p>
        </header>

        <section className="mt-4">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Summary</h2>
          <p className="mt-1">{profile.about[0]}</p>
        </section>

        <section className="mt-4">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Experience</h2>
          <div className="mt-1 space-y-3">
            {experience.slice(0, 5).map((e) => (
              <div key={`${e.role}-${e.period}`} className="break-inside-avoid">
                <div className="flex justify-between gap-4">
                  <p className="font-semibold">
                    {e.role} — {e.company}
                  </p>
                  <p className="shrink-0 text-xs text-neutral-600">{e.period}</p>
                </div>
                <ul className="mt-0.5 list-disc pl-4">
                  {(e.bullets.length ? e.bullets : [e.summary]).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4 break-inside-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Selected systems</h2>
          <ul className="mt-1 grid grid-cols-2 gap-x-6 gap-y-1">
            {caseStudies.map((c) => (
              <li key={c.slug}>
                <span className="font-semibold">{c.title}</span> — {c.short}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-4 break-inside-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Skills</h2>
          <dl className="mt-1 space-y-0.5">
            {skillGroups.map((g) => (
              <div key={g.group} className="grid grid-cols-[9rem_1fr] gap-2">
                <dt className="font-semibold">{g.group}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-6 break-inside-avoid">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Education</h2>
            <ul className="mt-1 space-y-1">
              {education.map((e) => (
                <li key={e.school}>
                  <span className="font-semibold">{e.school}</span> — {e.degree} ({e.period})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Certifications</h2>
            <ul className="mt-1 space-y-0.5">
              {certifications.slice(0, 4).map((c) => (
                <li key={c.name}>
                  {c.name} — {c.issuer} ({c.date})
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
