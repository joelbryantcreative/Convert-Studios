import { BookCallButton } from "@/components/Booking";

// Vimeo background clip. `background=1` gives a muted, looping, controls-free
// autoplay embed. The video's Vimeo privacy must allow embedding for it to show.
const VIMEO_ID = "1197941576";
const VIMEO_SRC = `https://player.vimeo.com/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1`;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-center">
      {/* Full-bleed cinematic background video (z-0 so the section's content,
          at z-10, sits above it, and nothing paints over the video).
          Loads on ink, then the video fades in. */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
        <iframe
          src={VIMEO_SRC}
          title="Convert Studios showreel"
          allow="autoplay; fullscreen; picture-in-picture"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100svh] w-screen min-w-[177.78svh] -translate-x-1/2 -translate-y-1/2 border-0"
        />
        {/* Ink scrims keep the bone headline legible while showing the footage */}
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/15 to-ink/70" />
      </div>

      <div className="container-c relative z-10 px-6 py-32 md:px-10">
        <p className="mb-7 animate-fade-up text-sm font-normal uppercase tracking-normal text-bone/70">
          Trusted by industry leaders across Australia
        </p>
        <h1 className="mx-auto max-w-5xl animate-fade-up display-xl text-bone [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
          Content That Converts
        </h1>
        <p
          className="mx-auto mt-7 max-w-4xl animate-fade-up text-balance text-lg leading-relaxed text-bone/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] md:text-xl"
          style={{ animationDelay: "120ms" }}
        >
          We help businesses turn how they show up online into a measurable engine
          for growth, with story-led content that&apos;s beautifully made and
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
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <span className="block h-2 w-9 rounded-full bg-bone/40" />
      </div>
    </section>
  );
}
