import { BookCallButton } from "@/components/Booking";

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
    <section className="section-pad bg-noir">
      <div className="container-c">
        <h2 className="text-center display-lg text-sage">
          A proven process to attract the clients you want.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-white/70">
          Our strategic process transforms your brand story into content that
          attracts attention, builds trust, and converts viewers into customers.
        </p>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="flex aspect-square items-center justify-center bg-sage">
                <span className="font-serif text-6xl italic text-white">
                  {step.num}
                </span>
              </div>
              <div className="bg-white px-3 py-3 text-center">
                <p className="font-sans text-sm font-semibold text-ink">
                  {step.title}
                </p>
              </div>
              <p className="mt-5 text-center text-sm leading-relaxed text-white/65">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <BookCallButton>Work With Us!</BookCallButton>
        </div>
      </div>
    </section>
  );
}
