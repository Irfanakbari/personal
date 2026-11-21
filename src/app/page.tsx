import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Panel, Section, Tag } from "@/components/ui";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { caseStudies, moreSystems } from "@/content/projects";
import { capabilities, skillGroups } from "@/content/skills";
import { certifications, education, sideProjects } from "@/content/credentials";

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="about" code="01 / Profile" title="Analyst, builder, operator" intro={profile.location}>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <Panel className="p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent-ink">Results</p>
            <ul className="mt-4 space-y-3">
              {profile.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
        <Panel className="mt-10 overflow-hidden">
          <p className="border-b border-line px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted">Coverage map — systems I built and run, by area</p>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3">
            {profile.coverage.map((c) => (
              <div key={c.area} className="border-b border-line px-4 py-3 sm:border-r">
                <dt className="flex items-center gap-2 text-sm font-semibold">
                  <span className="led" aria-hidden />
                  {c.area}
                </dt>
                <dd className="mt-1 pl-4 text-sm text-muted">{c.systems}</dd>
              </div>
            ))}
          </dl>
        </Panel>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((c) => (
            <Panel key={c.title} className="p-4">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.text}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section id="work" code="02 / Work" title="Selected systems" intro="Customer and internal system names are kept confidential; screenshots are redacted.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="group">
              <Panel className="flex h-full flex-col overflow-hidden transition-colors group-hover:border-accent">
                {c.shots[0] ? (
                  <Image src={c.shots[0].src} alt={c.shots[0].alt} width={1519} height={784} className="aspect-[16/9] w-full border-b border-line object-cover object-left-top" />
                ) : (
                  <div className="grid-bg flex aspect-[16/9] items-center justify-center border-b border-line font-mono text-xs uppercase tracking-widest text-muted">
                    {c.category}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent-ink">
                    {c.code} · {c.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{c.short}</p>
                  <span className="mt-4 font-mono text-xs text-fg group-hover:text-accent-ink">Read case study →</span>
                </div>
              </Panel>
            </Link>
          ))}
        </div>

        <h3 className="mt-14 font-mono text-xs uppercase tracking-wider text-muted">Also built &amp; maintained</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreSystems.map((s) => (
            <li key={s.title} className="border-l-2 border-accent pl-3">
              <p className="font-medium">{s.title}</p>
              <p className="text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" code="03 / Experience" title="Where I've worked">
        <ol className="relative space-y-8 border-l border-line pl-6">
          {experience.map((e) => (
            <li key={`${e.role}-${e.period}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" aria-hidden />
              <p className="font-mono text-xs text-muted">
                {e.period} · {e.type}
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                {e.role} <span className="font-normal text-muted">· {e.company}</span>
              </h3>
              <p className="mt-2 text-sm text-muted">{e.summary}</p>
              {e.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm marker:text-accent">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" code="04 / Skills" title="Toolbox">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <Panel key={g.group} className="p-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent-ink">{g.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li key={i}>
                    <Tag>{i}</Tag>
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>
      </Section>

      <Section id="credentials" code="05 / Credentials" title="Certifications & education">
        <div className="grid gap-8 lg:grid-cols-2">
          <ul className="divide-y divide-line border-y border-line">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4 py-3">
                <span>
                  <span className="font-medium">{c.name}</span>
                  <span className="block text-sm text-muted">{c.issuer}</span>
                </span>
                <span className="font-mono text-xs text-muted">{c.date}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            {education.map((e) => (
              <Panel key={e.school} className="p-4">
                <p className="font-mono text-xs text-muted">{e.period}</p>
                <p className="mt-1 font-semibold">{e.school}</p>
                <p className="text-sm text-muted">{e.degree}</p>
              </Panel>
            ))}
          </div>
        </div>
      </Section>

      <Section id="side-projects" code="06 / Lab" title="Side projects">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sideProjects.map((s) => (
            <Panel key={s.name} className="flex flex-col p-4">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{s.text}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {s.url && (
                <a href={s.url} target="_blank" rel="noreferrer" className="mt-3 font-mono text-xs text-accent-ink hover:underline">
                  Visit →
                </a>
              )}
            </Panel>
          ))}
        </div>
      </Section>

      <Section id="contact" code="07 / Contact" title="Let's talk">
        <Panel className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="max-w-xl text-lg text-muted">
            Open to full-stack, system analyst and manufacturing digitalization roles. The fastest way to reach me is email.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-black">
              {profile.email}
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="rounded-sm border border-line px-4 py-2.5 text-sm hover:border-accent">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="rounded-sm border border-line px-4 py-2.5 text-sm hover:border-accent">
              GitHub
            </a>
          </div>
        </Panel>
      </Section>
    </>
  );
}
