import { Reveal } from "@/components/Reveal";

// Placeholder client wordmarks — swap for real logo assets when available.
const logos = [
  "Harbourline",
  "Meridian Co.",
  "Field & Fold",
  "Northbound",
  "Saltwater",
  "Atelier 9",
  "Brightwater",
  "The Maker's Row",
  "Verge Studio",
  "Coastline Co.",
];

export function LogoBar() {
  return (
    <section className="border-y border-ink/10 bg-bone/40 py-12">
      <div className="container-c px-6 md:px-10">
        <Reveal>
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest2 text-ink/45">
            Trusted by businesses across Australia
          </p>
        </Reveal>
      </div>

      {/* Edge-to-edge scrolling marquee */}
      <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-serif text-xl text-ink/35 transition-colors duration-300 hover:text-ink/70"
              aria-hidden={i >= logos.length}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
