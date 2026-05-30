import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { BookCallButton } from "@/components/Booking";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study" };
  return {
    title: `${study.client} — Case study`,
    description: `${study.client}: ${study.outcome}.`,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="pt-36 md:pt-44">
      <div className="container-c px-6 md:px-10">
        <Link
          href="/work"
          className="link-underline text-sm text-ink/55 hover:text-ink"
        >
          ← Back to work
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-oxblood" />
            <span className="text-xs uppercase tracking-widest2 text-ink/45">
              {study.category}
            </span>
          </div>
          <h1 className="mt-4 font-serif text-5xl font-300 leading-[1.05] tracking-tight text-ink md:text-6xl">
            {study.client}
          </h1>
          <p className="mt-5 font-serif text-2xl italic text-oxblood">
            {study.outcome}
          </p>
        </header>
      </div>

      <div className="container-c mt-12 px-6 md:px-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={study.image}
            alt={study.client}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="container-c px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-ink/70">
            <p className="text-xs uppercase tracking-widest2 text-ink/45">
              Case study — placeholder
            </p>
            <p>
              This is a stubbed case study page. The full write-up — the brief,
              the strategy, the films we made and the numbers they moved — will
              live here once the project detail is finalised.
            </p>
            <p>
              For now, it demonstrates the structure: a cinematic hero, the
              headline outcome, and room for the story of how strategy, content,
              lead generation and optimisation came together to deliver{" "}
              {study.outcome.toLowerCase()}.
            </p>
          </div>

          <aside className="space-y-6 rounded-2xl border border-ink/10 bg-bone/30 p-7">
            <div>
              <p className="eyebrow mb-2">Client</p>
              <p className="font-serif text-lg text-ink">{study.client}</p>
            </div>
            <div className="rule" />
            <div>
              <p className="eyebrow mb-2">Sector</p>
              <p className="text-ink/70">{study.category}</p>
            </div>
            <div className="rule" />
            <div>
              <p className="eyebrow mb-2">Headline result</p>
              <p className="text-ink/70">{study.outcome}</p>
            </div>
          </aside>
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-ink/10 bg-bone/30 p-12 text-center">
          <h2 className="font-serif text-3xl font-300 text-ink md:text-4xl">
            Want results like these?
          </h2>
          <BookCallButton />
        </div>
      </div>
    </article>
  );
}
