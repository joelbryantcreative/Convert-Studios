import { Reveal } from "@/components/Reveal";

// Placeholder testimonials — first name + last initial. Swap for real ones.
const testimonials = [
  {
    quote:
      "They didn't just make us look good — they made us money. Within three months our enquiries doubled and we finally knew which content was actually working.",
    name: "Sarah M.",
    role: "Founder, allied health clinic",
  },
  {
    quote:
      "It felt less like hiring an agency and more like adding a partner who genuinely cared whether the numbers moved.",
    name: "James T.",
    role: "Director, building & construction",
  },
  {
    quote:
      "The quality of the films is on another level. But the part that surprised me was how strategic it all was underneath the beauty.",
    name: "Priya N.",
    role: "Owner, boutique hospitality group",
  },
  {
    quote:
      "We'd burned money on ads before with nothing to show for it. Convert Studios gave us a system, not just a campaign.",
    name: "Daniel K.",
    role: "GM, professional services",
  },
  {
    quote:
      "Every month we get a clear read on what's landing. No fluff, no vanity metrics — just leads and revenue.",
    name: "Amara O.",
    role: "Marketing lead, e-commerce brand",
  },
  {
    quote:
      "They understood our story before they ever picked up a camera. That's why the work converts.",
    name: "Tom R.",
    role: "Co-founder, fitness studio",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad scroll-mt-20">
      <div className="container-c">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">In their words</p>
          <h2 className="font-serif text-4xl font-300 leading-tight tracking-tight text-ink md:text-5xl">
            What our clients say.
          </h2>
        </Reveal>

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 80}
              className="break-inside-avoid rounded-2xl border border-ink/10 bg-bone/30 p-7"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="mb-4 text-oxblood/70"
              >
                <path
                  d="M9.5 6C6.5 7.5 5 10 5 13v5h5v-5H7.5c0-2 1-3.5 3-4.5L9.5 6zm9 0c-3 1.5-4.5 4-4.5 7v5h5v-5h-2.5c0-2 1-3.5 3-4.5L18.5 6z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-serif text-lg leading-relaxed text-ink/85">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-6 bg-ink/25" />
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
