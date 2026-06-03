import type { Metadata } from "next";
import Image from "next/image";
import { ProcessSteps } from "@/components/ProcessSteps";
import { VideoTrigger } from "@/components/VideoProvider";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Story-led short-form videos and cinematic brand films from Convert Studios, crafted to capture attention, build trust, and convert viewers into customers.",
};

// Real Vimeo showreel. Swap per-reel IDs for individual clips as they're added.
const VIMEO_ID = "1195077840";

// Brand films, two per row. Real Vimeo embeds.
const films = [
  { client: "Bytropic Nutrition", id: "1078502850" },
  { client: "Rogue Watches", id: "1052845867" },
  { client: "Fat Fish Bikes", id: "1181474237" },
  { client: "Craved This", id: "1181461629" },
];

// Placeholder reel posters. Swap for real short-form clips + their own IDs.
const reels = [
  { poster: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop", duration: "0:47" },
  { poster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop", duration: "0:51" },
  { poster: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop", duration: "0:41" },
  { poster: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop", duration: "0:42" },
  { poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop", duration: "0:55" },
];

export default function WorkPage() {
  return (
    <>
      {/* Short-form reels */}
      <section className="bg-bone px-6 pb-20 pt-36 md:px-10 md:pt-44">
        <div className="container-c text-center">
          <h1 className="display-lg text-oxblood">Visual stories that deliver results.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            Short-form videos crafted to capture attention, build trust, and
            convert viewers into customers.
          </p>

          <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-5 md:overflow-visible [&::-webkit-scrollbar]:hidden">
            {reels.map((reel, i) => (
              <VideoTrigger
                key={i}
                videoId={VIMEO_ID}
                label="Play short-form video"
                className="group relative aspect-[9/16] w-[70%] shrink-0 snap-center overflow-hidden rounded-2xl bg-mist text-left ring-1 ring-ink/10 md:w-auto"
              >
                <Image
                  src={reel.poster}
                  alt="Short-form video still"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 70vw, 18vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <PlayBadge />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[11px] text-white/80">
                  <span>0:00 / {reel.duration}</span>
                  <div className="flex items-center gap-2 opacity-80">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 9v6h4l5 5V4L8 9H4z" /></svg>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
                  </div>
                </div>
              </VideoTrigger>
            ))}
          </div>
        </div>
      </section>

      {/* Brand films: real Vimeo embeds, two per row */}
      <section className="bg-bone pb-12">
        <div className="container-c px-6 md:px-10">
          <h2 className="mx-auto max-w-3xl pb-12 text-center font-display text-2xl leading-snug text-ink md:text-4xl">
            Powerful brand stories crafted to showcase who you are, what you do,
            and why clients choose you.
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {films.map((film) => (
              <figure key={film.id}>
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-mist ring-1 ring-ink/10">
                  <iframe
                    src={`https://player.vimeo.com/video/${film.id}?title=0&byline=0&portrait=0&dnt=1`}
                    title={`${film.client} brand film`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <figcaption className="mt-4 text-center text-xs uppercase tracking-widest2 text-oxblood">
                  {film.client}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
    </>
  );
}

function PlayBadge() {
  return (
    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition group-hover:bg-white/30">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}
