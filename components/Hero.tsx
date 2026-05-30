import Image from "next/image";
import { BookCallButton } from "@/components/Booking";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Cinematic still placeholder */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Cream wash so the type stays the hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/30" />
      </div>

      <div className="container-c px-6 pt-32 pb-20 md:px-10 md:pt-40">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 animate-fade-up">
            Filmmaker-led content marketing
          </p>
          <h1 className="animate-fade-up font-serif text-[2.75rem] font-300 leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Content that converts{" "}
            <span className="italic text-oxblood">attention</span> into
            customers.
          </h1>
          <p
            className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-ink/70 md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            We help businesses turn the way they show up online into a
            measurable engine for growth — through story-led content,
            beautifully made and strategically distributed.
          </p>
          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "220ms" }}
          >
            <BookCallButton />
            <a href="/work" className="btn-ghost">
              See our work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/40">
        <span className="block h-12 w-px animate-pulse bg-ink/30" />
      </div>
    </section>
  );
}
