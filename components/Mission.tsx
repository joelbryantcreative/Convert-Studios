import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Mission() {
  return (
    <section
      id="mission"
      className="scroll-mt-20 border-y border-ink/10 bg-bone/40"
    >
      <div className="container-c grid items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">Our belief</p>
          <h2 className="font-serif text-4xl font-300 leading-[1.1] tracking-tight text-ink md:text-5xl">
            We believe in content that moves the needle.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/70">
            <p>
              Most content is made to fill a feed. We make content that moves
              your business forward — measured in leads, in revenue, and in how
              often you stop having to chase.
            </p>
            <p>
              We come from documentary filmmaking, which means we treat every
              piece of work as a story worth watching. That&apos;s the standard.
              The business outcomes follow.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1400&auto=format&fit=crop"
              alt="A filmmaker framing a shot on a cinema camera"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
          </div>
          {/* Fine letterpress caption rule */}
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-10 bg-oxblood" />
            <span className="text-xs uppercase tracking-widest2 text-ink/50">
              The sibling studio to Lineage Films
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
