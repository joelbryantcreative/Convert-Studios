"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextureBg } from "@/components/TextureBg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image?: string;
  initials?: string;
  color?: string;
};

// Real client testimonials + a few placeholders. Swap placeholders as more
// reviews come in.
const testimonials: Testimonial[] = [
  {
    quote:
      "Convert Studios shot the paid ad campaigns for my Buyers Agent Institute and the results spoke for themselves. More qualified leads at a lower cost, with creative that actually converted. They understand both the storytelling and the numbers behind it all.",
    name: "Ben Handler",
    role: "Founder, Buyers Agent Institute",
    image: "/testimonials/ben-handler.jpg",
  },
  {
    quote:
      "The team created content for our watch company and we couldn't be happier! The quality of the videos was excellent, and they captured our watches in a way that felt professional, premium, and true to our brand. Easy to work with, great communication, and everything was delivered promptly. Highly recommend.",
    name: "Rogue Watches",
    role: "Premium watch brand",
    image: "/testimonials/rogue-watches.jpg",
  },
  {
    quote:
      "We secured you guys for a summer campaign video for our supplement company, Bytropic Nutrition. From the very first meeting you understood the creative direction, and the attention to detail was second to none. The outcome exceeded all expectations. You guys are some of the most talented and strategic thinkers in the Northern Rivers.",
    name: "Nathan Tanner",
    role: "Founder, Bytropic Nutrition",
    image: "/testimonials/nathan-tanner.jpg",
  },
  {
    quote:
      "It felt less like hiring an agency and more like adding a partner who genuinely cared whether the numbers moved.",
    name: "James T.",
    role: "Director, building & construction",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "The quality of the films is on another level. But the part that surprised me was how strategic it all was underneath the beauty.",
    name: "Priya N.",
    role: "Owner, boutique hospitality group",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Every month we get a clear read on what's landing. No fluff, no vanity metrics, just leads and revenue.",
    name: "Amara O.",
    role: "Marketing lead, e-commerce brand",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
  },
];

export function Testimonials() {
  const [perView, setPerView] = useState(3);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxStart = Math.max(0, testimonials.length - perView);
  useEffect(() => {
    setStart((s) => Math.min(s, maxStart));
  }, [maxStart]);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  return (
    <section id="testimonials" className="relative overflow-hidden bg-bone section-pad">
      <TextureBg />
      <div className="container-c relative z-10">
        <h2 className="text-center font-display text-3xl uppercase tracking-tight text-ink md:text-5xl">
          Testimonials
        </h2>

        {/* Sliding track */}
        <div className="mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${start * (100 / perView)}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="shrink-0 px-4"
                style={{ flexBasis: `${100 / perView}%` }}
              >
                <Card {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <Arrow dir="left" onClick={prev} disabled={start === 0} />
          <Arrow dir="right" onClick={next} disabled={start === maxStart} />
        </div>
      </div>
    </section>
  );
}

function Card({ quote, name, role, image, initials, color }: Testimonial) {
  return (
    <figure className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-ink/10">
        {image ? (
          <Image src={image} alt={name} fill loading="lazy" sizes="112px" className="scale-105 object-cover" />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ backgroundColor: color ?? "#6B2737" }}
          >
            <span className="font-display text-3xl text-bone">{initials}</span>
          </div>
        )}
      </div>
      <figcaption className="mt-6 font-display text-lg text-ink">{name}</figcaption>
      <p className="mt-1 text-xs uppercase tracking-widest2 text-oxblood">{role}</p>
      <blockquote className="mt-5 max-w-xs leading-relaxed text-ink/75">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  );
}

function Arrow({
  dir,
  onClick,
  disabled,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Previous testimonials" : "Next testimonials"}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-bone transition hover:bg-oxblood disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {dir === "left" ? (
          <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}
