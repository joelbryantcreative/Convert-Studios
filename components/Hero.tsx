import Image from "next/image";
import { BookCallButton } from "@/components/Booking";

// Vimeo background clip. `background=1` gives a muted, looping, controls-free
// autoplay embed. The video's Vimeo privacy must allow embedding for it to show.
const VIMEO_ID = "1195077840";
const VIMEO_SRC = `https://player.vimeo.com/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1`;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-center">
      {/* Full-bleed cinematic background video (z-0 so the section's content,
          at z-10, sits above it — and nothing paints over the video). */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-noir">
        {/* Poster fallback shown until the video loads / if embedding is blocked */}
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <iframe
          src={VIMEO_SRC}
          title="Convert Studios showreel"
          allow="autoplay; fullscreen; picture-in-picture"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100svh] w-screen min-w-[177.78svh] -translate-x-1/2 -translate-y-1/2 border-0"
        />
        {/* Lighter scrims keep the headline legible while showing the footage */}
        <div className="absolute inset-0 bg-noir/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-noir/10 to-noir/70" />
      </div>

      <div className="container-c relative z-10 px-6 py-32 md:px-10">
        <p className="mb-7 animate-fade-up text-xs font-medium uppercase tracking-widest2 text-white/80">
          Trusted by industry leaders across Australia
        </p>
        <h1 className="mx-auto max-w-5xl animate-fade-up display-xl text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
          Content that converts attention into customers.
        </h1>
        <p
          className="mx-auto mt-7 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] md:text-xl"
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
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <span className="block h-2 w-9 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
