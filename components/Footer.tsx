import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink">
      <div className="container-c px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-4xl uppercase leading-none tracking-tight text-bone md:text-6xl"
            >
              Convert Studios
            </Link>
            <p className="mt-4 text-sm text-bone/45">
              © Convert Studios 2026. All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <Link
              href="/privacy"
              className="link-underline font-semibold text-bone"
            >
              Privacy Policy
            </Link>
            <span className="text-bone/70">hello@convertstudios.au</span>
            <span className="text-bone/70">+61 497 962 046</span>
            <div className="mt-1 flex items-center gap-4 text-bone/70 md:justify-end">
              <a
                href="https://instagram.com/convert.studios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Convert Studios on Instagram"
                className="transition hover:text-bone"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/convertstudios/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Convert Studios on Facebook"
                className="transition hover:text-bone"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 9V7.5c0-.7.5-1 1-1h1.5V3.5H14c-2.2 0-3.5 1.4-3.5 3.7V9H8.5v3h2V21h3.5v-9h2.3l.5-3H14z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
