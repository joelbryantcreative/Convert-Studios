import { BookCallButton } from "@/components/Booking";

// Vimeo background clip. `background=1` gives a muted, looping, controls-free
// autoplay embed. The video's Vimeo privacy must allow embedding for it to show.
const VIMEO_ID = "1195077840";
const VIMEO_SRC = `https://player.vimeo.com/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1`;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-noir text-center">
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
        {/* Dark scrims keep the white headline legible over the footage */}
        <div className="absolute inset-0 bg-noir/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-noir/60" />
      </div>

      <div className="container-c px-6 py-32 md:px-10">
        <p className="mb-7 animate-fade-up text-xs font-medium uppercase tracking-widest2 text-white/70">
          Trusted by industry leaders across Australia
        </p>
        <h1 className="mx-auto max-w-5xl animate-fade-up display-xl text-white">
          Content that converts attention into customers.
        </h1>
        <p
          className="mx-auto mt-7 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/75 md:text-xl"
          style={{ animationDelay: "120ms" }}
        >
          We help businesses turn the way they show up online into a measurable
          engine for growth — through story-led content, beautifully made and
          strategically distributed.
        </p>
        <div
          className="mt-10 flex animate-fade-up justify-center"
          style={{ animationDelay: "220ms" }}
        >
          <BookCallButton />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <span className="block h-2 w-9 rounded-full bg-white/30" />
      </div>
    </section>
  );
}
