import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { TextureBg } from "@/components/TextureBg";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Interested in working together? Tell us about your business and what you want from your content, and we'll be in touch shortly.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 pb-24 pt-36 md:px-10 md:pt-44">
      <TextureBg overlay="bg-ink/55" />

      <div className="container-c relative z-10">
        <div className="mb-14 text-center">
          <h1 className="display-lg text-bone">Let&apos;s talk!</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bone/75">
            Interested in working together? Fill out some info and we&apos;ll be
            in touch shortly. We can&apos;t wait to hear from you!
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
