import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Convert Studios. Tell us about your business and what you need — content, ads, or a full growth system.",
};

export default function ContactPage() {
  return (
    <section className="section-pad pt-36 md:pt-44">
      <div className="container-c">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-5">Get in touch</p>
            <h1 className="font-serif text-5xl font-300 leading-[1.05] tracking-tight text-ink md:text-6xl">
              Let&apos;s talk about your growth.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">
              Tell us a little about your business and what you&apos;re after.
              We read every message and reply personally — usually within a
              business day.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-oxblood" />
                <a
                  href="mailto:hello@convert.studios"
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  hello@convert.studios
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-oxblood" />
                <a
                  href="https://instagram.com/convert.studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink/80 hover:text-ink"
                >
                  Instagram — @convert.studios
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
