import { BookCallButton } from "@/components/Booking";
import { TextureBg } from "@/components/TextureBg";

const steps = [
  {
    num: "01",
    title: "Brand Deep Dive",
    body: "We immerse ourselves in your business to uncover your real value, your ideal client, and your growth goals, so every piece of content is built to attract the right audience.",
  },
  {
    num: "02",
    title: "Script & Strategy",
    body: "With a clear plan in place, we craft the story and the messaging that communicate what you do with clarity, confidence, and purpose.",
  },
  {
    num: "03",
    title: "Film & Edit",
    body: "Our team handles every part of production: directing, filming, and editing cinematic content that reflects your brand and moves your audience.",
  },
  {
    num: "04",
    title: "Distribute",
    body: "We run the paid distribution and lead capture so your content reaches qualified prospects while you stay focused on running your business.",
  },
  {
    num: "05",
    title: "Track & Grow",
    body: "We measure performance, analyse what's working, and continuously optimise so your content keeps driving real, compounding business growth.",
  },
];

export function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-ink section-pad">
      <TextureBg overlay="bg-ink/55" />
      <div className="relative z-10">
        <h2 className="text-center font-display text-3xl leading-[1.05] text-bone md:text-4xl">
          A proven process to attract the clients you want.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl px-6 text-center text-lg leading-relaxed text-bone/75">
          Our strategic process transforms your brand story into content that
          attracts attention, builds trust, and converts viewers into customers.
        </p>

        <ol className="container-c mt-16 grid gap-y-10 md:grid-cols-5 md:gap-y-0">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li
                key={step.num}
                className="relative flex items-start gap-5 md:flex-col md:items-center md:gap-4 md:px-3 md:text-center"
              >
                {/* connector: vertical on mobile, horizontal on desktop */}
                {!last && (
                  <span
                    aria-hidden
                    className="absolute left-7 top-7 h-[calc(100%+2.5rem)] w-px bg-bone/15 md:left-[calc(50%+28px)] md:h-px md:w-[calc(100%-56px)]"
                  />
                )}

                {/* node */}
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center bg-ink font-serif text-3xl italic text-aqua md:bg-transparent md:text-4xl">
                  {step.num}
                </span>

                {/* content */}
                <div className="md:mt-1">
                  <h3 className="font-display text-base text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-bone/65">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-16 flex justify-center">
          <BookCallButton>Work With Us!</BookCallButton>
        </div>
      </div>
    </section>
  );
}
