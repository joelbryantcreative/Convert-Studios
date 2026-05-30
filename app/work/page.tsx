import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";
import { Reveal } from "@/components/Reveal";
import { BookCallButton } from "@/components/Booking";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from Convert Studios — story-led content campaigns built to generate measurable leads and revenue for businesses across Australia.",
};

export default function WorkPage() {
  return (
    <>
      <section className="section-pad pt-36 md:pt-44">
        <div className="container-c">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-5">Selected work</p>
            <h1 className="font-serif text-5xl font-300 leading-[1.05] tracking-tight text-ink md:text-6xl">
              Work that earns its keep.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
              A look at what happens when documentary-grade storytelling meets a
              system built to convert. Every project is measured by the same
              thing: results.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-ink/10 bg-bone/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.client} — ${study.category}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-6 bg-oxblood" />
                      <span className="text-xs uppercase tracking-widest2 text-ink/45">
                        {study.category}
                      </span>
                    </div>
                    <h2 className="mt-3 font-serif text-2xl text-ink">
                      {study.client}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {study.outcome}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 flex flex-col items-center gap-5 rounded-2xl border border-ink/10 bg-bone/30 p-12 text-center">
            <h2 className="font-serif text-3xl font-300 text-ink md:text-4xl">
              Your project could be next.
            </h2>
            <BookCallButton />
          </Reveal>
        </div>
      </section>
    </>
  );
}
