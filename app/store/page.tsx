import type { Metadata } from "next";
import { BookCallButton } from "@/components/Booking";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Productised content packages from Convert Studios — coming soon. Book a Game Plan Call in the meantime.",
};

export default function StorePage() {
  return (
    <section className="flex min-h-[70vh] items-center bg-noir px-6 pt-36 md:px-10 md:pt-44">
      <div className="container-c text-center">
        <p className="eyebrow mb-5">Coming soon</p>
        <h1 className="display-lg text-white">The Studio Store.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          We&apos;re putting together productised content packages you can book
          in a few clicks — fixed scope, fixed price, built to convert. Want
          first access? Book a call and we&apos;ll keep you posted.
        </p>
        <div className="mt-10 flex justify-center">
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}
