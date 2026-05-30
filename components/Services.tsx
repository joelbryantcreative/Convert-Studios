"use client";

import { useState } from "react";
import { BookCallButton } from "@/components/Booking";

const services = [
  {
    title: "Strategy",
    body: "Every project starts with a clear plan. We learn your business, your ideal customer, and your point of difference, then build a content strategy designed to attract attention, build trust, and convert.",
  },
  {
    title: "Content",
    body: "Cinematic, story-led content that shows your expertise and earns trust. Not just beautiful — strategically built to move your audience toward a decision.",
  },
  {
    title: "Lead Generation",
    body: "Great content only works if the right people see it. We run targeted paid distribution and lead capture systems that put your story in front of qualified prospects.",
  },
  {
    title: "Optimisation",
    body: "We track what's working, refine what isn't, and continuously improve performance. Real measurement, real results, real return on investment.",
  },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-noir">
      {/* Soft cinematic backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 bg-cover bg-center opacity-20 blur-sm"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-0 bg-noir/70" aria-hidden="true" />

      <div className="container-c relative z-10 grid gap-14 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
        <div>
          <h2 className="display-lg text-white">We handle everything.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            From strategy and storytelling to filming and paid distribution, we
            run the full system so you stay focused on running your business.
          </p>
          <div className="mt-10">
            <BookCallButton>Work With Us!</BookCallButton>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <div key={service.title} className="border-t border-white/20 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-xl text-white md:text-2xl">
                    {service.title}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center text-2xl font-light text-sage transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-md leading-relaxed text-white/65">
                      {service.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
