import { Reveal } from "@/components/Reveal";

const services = [
  {
    num: "01",
    title: "Strategy",
    body: "Every project starts with a clear plan. We learn your business, your ideal customer, and your point of difference, then build a content strategy designed to attract attention, build trust, and convert.",
  },
  {
    num: "02",
    title: "Content",
    body: "Cinematic, story-led content that shows your expertise and earns trust. Not just beautiful — strategically built to move your audience toward a decision.",
  },
  {
    num: "03",
    title: "Lead Generation",
    body: "Great content only works if the right people see it. We run targeted paid distribution and lead capture systems that put your story in front of qualified prospects.",
  },
  {
    num: "04",
    title: "Optimisation",
    body: "We track what's working, refine what isn't, and continuously improve performance. Real measurement, real results, real return on investment.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-20">
      <div className="container-c">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">What we do</p>
          <h2 className="font-serif text-4xl font-300 leading-tight tracking-tight text-ink md:text-5xl">
            We handle everything.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/65">
            From strategy and storytelling to filming and paid distribution, we
            run the full system so you stay focused on running your business.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.num}
              delay={i * 80}
              className="group bg-cream p-8 transition-colors duration-300 hover:bg-bone/50 md:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-oxblood">
                  {service.num}
                </span>
                <span className="h-px flex-1 bg-ink/15" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-ink md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink/65">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
