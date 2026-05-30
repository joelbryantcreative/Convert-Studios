import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BookCallButton } from "@/components/Booking";

export function CTA() {
  return (
    <section id="contact-cta" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>

      <div className="container-c relative z-10 px-6 py-28 text-center md:px-10 md:py-36">
        <Reveal className="mx-auto max-w-2xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-widest2 text-cream/50">
            Let&apos;s talk
          </p>
          <h2 className="font-serif text-4xl font-300 leading-[1.1] tracking-tight text-cream md:text-6xl">
            Ready to build something that converts?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
            Book a Game Plan Call. We&apos;ll walk through your business, your
            goals, and whether we&apos;re the right fit.
          </p>
          <div className="mt-10 flex justify-center">
            <BookCallButton className="!bg-cream !text-ink hover:!bg-oxblood hover:!text-cream" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
