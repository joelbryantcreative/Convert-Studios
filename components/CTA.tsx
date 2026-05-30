import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-noir">
      <div className="container-c flex flex-col items-center justify-center gap-6 px-6 py-24 text-center md:flex-row md:gap-10 md:px-10 md:py-28">
        <h2 className="font-display text-4xl uppercase tracking-tight text-sage md:text-6xl">
          Let&apos;s Connect!
        </h2>
        <Link href="/contact" className="btn-primary uppercase tracking-widest2">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
