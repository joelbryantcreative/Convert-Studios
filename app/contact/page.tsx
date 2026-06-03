import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Interested in working together? Tell us about your business and what you want from your content, and we'll be in touch shortly.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-noir px-6 pb-24 pt-36 md:px-10 md:pt-44">
      {/* Soft cinematic backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 bg-cover bg-center opacity-20 blur-sm"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-0 bg-noir/70" aria-hidden="true" />

      <div className="container-c relative z-10">
        <div className="mb-14 text-center">
          <h1 className="display-lg text-white">Let&apos;s talk!</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Interested in working together? Fill out some info and we&apos;ll be
            in touch shortly. We can&apos;t wait to hear from you!
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
