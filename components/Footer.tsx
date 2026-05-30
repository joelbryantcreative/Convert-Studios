import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="container-c px-6 md:px-10">
        <div className="rule" />
        <div className="grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Wordmark */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-500 tracking-tight text-ink"
            >
              Convert<span className="text-oxblood">.</span>Studios
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/55">
              Content that converts attention into customers. The
              performance-marketing sibling to Lineage Films.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm text-ink/65">
              <li>
                <Link href="/#services" className="link-underline hover:text-ink">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="link-underline hover:text-ink">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-underline hover:text-ink">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="link-underline hover:text-ink">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5 text-sm text-ink/65">
              <li>
                <a
                  href="https://instagram.com/convert.studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-ink"
                >
                  Instagram — @convert.studios
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/convert-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@convert.studios"
                  className="link-underline hover:text-ink"
                >
                  hello@convert.studios
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule" />
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-ink/45 sm:flex-row">
          <p>© Convert Studios 2026. All rights reserved.</p>
          <p className="uppercase tracking-widest2">Made with intent.</p>
        </div>
      </div>
    </footer>
  );
}
