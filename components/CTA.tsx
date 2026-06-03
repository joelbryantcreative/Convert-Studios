import Link from "next/link";
import { TextureBg } from "@/components/TextureBg";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-bone">
      <TextureBg overlay="bg-bone/40" />
      <div className="container-c relative z-10 flex flex-col items-center justify-center gap-6 px-6 py-24 text-center md:flex-row md:gap-10 md:px-10 md:py-28">
        <h2 className="font-display text-4xl uppercase tracking-tight text-oxblood md:text-6xl">
          Let&apos;s Connect!
        </h2>
        <Link href="/contact" className="btn-primary uppercase tracking-widest2">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
