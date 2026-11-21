import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/projects";
import { Panel, Tag } from "@/components/ui";
import { AskButton } from "@/components/ask-button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  if (!c) return {};
  return { title: c.title, description: c.short, alternates: { canonical: `/work/${c.slug}` } };
}

export default async function CaseStudyPage({ params }: Props) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();
  const i = caseStudies.findIndex((x) => x.slug === c.slug);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/#work" className="font-mono text-xs text-muted hover:text-fg">
        ← All work
      </Link>
      <header className="mt-6 border-b border-line pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">
          {c.code} · {c.category} · {c.period}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{c.title}</h1>
        <p className="mt-4 text-lg text-muted">{c.short}</p>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">My role</dt>
            <dd className="mt-1">{c.role}</dd>
          </div>
          {c.outcome && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">Outcome</dt>
              <dd className="mt-1 font-medium text-accent-ink">{c.outcome}</dd>
            </div>
          )}
        </dl>
      </header>

      <div className="mt-10 grid gap-10">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent-ink">Context</h2>
          <p className="mt-3 text-lg leading-relaxed">{c.context}</p>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent-ink">Problem</h2>
          <p className="mt-3 leading-relaxed text-muted">{c.problem}</p>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent-ink">What I built</h2>
          <ol className="mt-4 space-y-3">
            {c.built.map((b, n) => (
              <li key={b} className="grid grid-cols-[2rem_1fr] gap-2 leading-relaxed">
                <span className="font-mono text-sm text-muted">{String(n + 1).padStart(2, "0")}</span>
                <span>{b}</span>
              </li>
            ))}
          </ol>
        </section>

        {c.shots.map((s) => (
          <figure key={s.src}>
            <Panel className="overflow-hidden">
              <Image src={s.src} alt={s.alt} width={1519} height={784} sizes="(min-width: 896px) 896px, 100vw" className="w-full" />
            </Panel>
            <figcaption className="mt-2 font-mono text-xs text-muted">{s.caption}</figcaption>
          </figure>
        ))}

        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent-ink">Highlights</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {c.highlights.map((h) => (
              <li key={h}>
                <Panel className="h-full p-4 text-sm">{h}</Panel>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-accent-ink">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </section>
        <div className="flex flex-wrap items-center gap-3 border-t border-line pt-8">
          <AskButton question={`Tell me more about Irfan's work on the ${c.title}.`} label="Ask AI about this project" />
        </div>
      </div>

      <nav aria-label="More case studies" className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        <Link href={`/work/${prev.slug}`} className="group">
          <p className="font-mono text-xs text-muted">← Previous</p>
          <p className="font-medium group-hover:text-accent-ink">{prev.title}</p>
        </Link>
        <Link href={`/work/${next.slug}`} className="group sm:text-right">
          <p className="font-mono text-xs text-muted">Next →</p>
          <p className="font-medium group-hover:text-accent-ink">{next.title}</p>
        </Link>
      </nav>
    </article>
  );
}
