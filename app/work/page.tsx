import type { Metadata } from "next";
import { FilmCard } from "@/components/FilmCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ReelCard } from "@/components/ReelCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Story-led short-form videos and cinematic brand films from Convert Studios, crafted to capture attention, build trust, and convert viewers into customers.",
};

// Brand films, two per row. Real Vimeo embeds with custom thumbnails.
const films = [
  { client: "Bytropic Nutrition", id: "1078502850", poster: "/films/bytropic-nutrition.webp" },
  { client: "Rogue Watches", id: "1052845867", poster: "/films/rogue-watches.webp" },
  { client: "Fat Fish Bikes", id: "1181474237", poster: "/films/fat-fish-bikes.webp" },
  { client: "Craved This", id: "1181461629", poster: "/films/craved-this.webp" },
];

// Top-five short-form ads (vertical), with their real poster frames.
const reels = [
  { poster: "/reels/ad-1.webp", duration: "0:47", id: "1198616005" },
  { poster: "/reels/ad-2.webp", duration: "0:51", id: "1198616064" },
  { poster: "/reels/ad-3.webp", duration: "0:41", id: "1198616119" },
  { poster: "/reels/ad-4.webp", duration: "0:42", id: "1198616150" },
  { poster: "/reels/ad-5.webp", duration: "0:55", id: "1198616184" },
];

export default function WorkPage() {
  return (
    <>
      {/* Short-form reels */}
      <section className="bg-ink px-6 pb-20 pt-36 md:px-10 md:pt-44">
        <div className="container-c text-center">
          <h1 className="display-lg text-bone">Visual stories that deliver results.</h1>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-bone/75">
            Short-form videos crafted to capture attention, build trust, and
            convert viewers into customers.
          </p>

          <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-5 md:overflow-visible [&::-webkit-scrollbar]:hidden">
            {reels.map((reel, i) => (
              <ReelCard key={i} {...reel} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand films: flush 2-up grid, no captions */}
      <section className="bg-ink pb-12">
        <div className="container-c px-6 md:px-10">
          <h2 className="mx-auto max-w-3xl pb-12 text-center font-display text-2xl leading-snug text-bone md:text-4xl">
            Powerful brand stories crafted to showcase who you are, what you do,
            and why clients choose you.
          </h2>
        </div>
        <div className="container-c px-6 md:px-10">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {films.map((film) => (
              <FilmCard key={film.id} {...film} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
    </>
  );
}
