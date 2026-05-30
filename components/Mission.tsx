import Image from "next/image";
import Link from "next/link";

export function Mission() {
  return (
    <section id="mission" className="scroll-mt-20 bg-noir">
      <div className="grid items-stretch md:grid-cols-2">
        {/* Copy */}
        <div className="flex items-center px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="max-w-lg">
            <h2 className="display-lg text-sage">
              We believe in content that moves the needle.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/75">
              <p>
                Most content is made to fill a feed. We make content that moves
                your business forward — measured in leads, in revenue, and in how
                often you stop having to chase.
              </p>
              <p>
                We come from documentary filmmaking, which means we treat every
                piece of work as a story worth watching. That&apos;s the
                standard. The business outcomes follow.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/work" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Cinematic image */}
        <div className="relative min-h-[360px] md:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop"
            alt="A filmmaker framing a shot on a cinema camera"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
