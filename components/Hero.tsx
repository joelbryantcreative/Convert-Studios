import { BookCallButton } from "@/components/Booking";

// Vimeo background clip. `background=1` gives a muted, looping, controls-free
// autoplay embed. The video's Vimeo privacy must allow embedding for it to show.
const VIMEO_ID = "1195077840";
const VIMEO_SRC = `https://player.vimeo.com/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1`;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-bone">
      {/* Full-bleed cinematic background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <iframe
          src={VIMEO_SRC}
          title="Convert Studios showreel"
          allow="autoplay; fullscreen; picture-in-picture"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100svh] w-screen min-w-[177.78svh] -translate-x-1/2 -translate-y-1/2 border-0"
        />
        {/* Cream scrims keep the dark headline legible over the footage */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/20" />
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
