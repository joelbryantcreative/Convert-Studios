"use client";

import Image from "next/image";
import { useState } from "react";

// Placeholder testimonials — first name + last initial. Swap for real ones.
const testimonials = [
  {
    quote:
      "They didn't just make us look good — they made us money. Within three months our enquiries doubled and we finally knew which content was actually working.",
    name: "Sarah M.",
    role: "Founder, allied health clinic",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "It felt less like hiring an agency and more like adding a partner who genuinely cared whether the numbers moved.",
    name: "James T.",
    role: "Director, building & construction",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "The quality of the films is on another level. But the part that surprised me was how strategic it all was underneath the beauty.",
    name: "Priya N.",
    role: "Owner, boutique hospitality group",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "We'd burned money on ads before with nothing to show for it. Convert Studios gave us a system, not just a campaign.",
    name: "Daniel K.",
    role: "GM, professional services",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Every month we get a clear read on what's landing. No fluff, no vanity metrics — just leads and revenue.",
    name: "Amara O.",
    role: "Marketing lead, e-commerce brand",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "They understood our story before they ever picked up a camera. That's why the work converts.",
    name: "Tom R.",
    role: "Co-founder, fitness studio",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export function Testimonials() {
  const [start, setStart] = useState(0);
  const perView = 3;
  const maxStart = Math.max(0, testimonials.length - perView);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  return (
    <section id="testimonials" className="section-pad bg-noir">
      <div className="container-c">
        <h2 className="text-center font-display text-3xl uppercase tracking-tight text-white md:text-5xl">
          Testimonials
        </h2>

        {/* Desktop / tablet: 3-up window */}
        <div className="mt-16 hidden md:block">
          <div className="grid grid-cols-3 gap-10">
            {testimonials.slice(start, start + perView).map((t) => (
              <Card key={t.name} {...t} />
            ))}
          </div>
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t) => (
            <div key={t.name} className="w-[78%] shrink-0 snap-center">
              <Card {...t} />
            </div>
          ))}
        </div>

        {/* Arrows (desktop) */}
        <div className="mt-12 hidden items-center justify-center gap-4 md:flex">
          <Arrow dir="left" onClick={prev} disabled={start === 0} />
          <Arrow dir="right" onClick={next} disabled={start === maxStart} />
        </div>
      </div>
    </section>
  );
}

function Card({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <figure className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/15">
        <Image
          src={avatar}
          alt={name}
          fill
          loading="lazy"
          sizes="112px"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-6 font-display text-lg text-white">
        {name}
      </figcaption>
      <p className="mt-1 text-xs uppercase tracking-widest2 text-sage">{role}</p>
      <blockquote className="mt-5 max-w-xs leading-relaxed text-white/70">
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
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-noir transition hover:bg-sage disabled:cursor-not-allowed disabled:opacity-30"
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
