import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone">
      <div className="container-c px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-4xl uppercase leading-none tracking-tight text-ink md:text-6xl"
            >
              Convert Studios
            </Link>
            <p className="mt-4 text-sm text-slate">
              © Convert Studios 2026. All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <Link
              href="/privacy"
              className="link-underline font-semibold text-ink"
            >
              Privacy Policy
            </Link>
            <span className="text-slate">hello@convertstudios.au</span>
            <a
              href="https://instagram.com/convert.studios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Convert Studios on Instagram"
              className="mt-1 inline-flex text-slate transition hover:text-ink md:justify-end"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
