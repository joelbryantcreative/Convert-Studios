import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-noir">
      <div className="container-c px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-4xl uppercase leading-none tracking-tight text-white md:text-6xl"
            >
              Convert Studios
            </Link>
            <p className="mt-4 text-sm text-white/45">
              © Convert Studios 2026 — All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <Link
              href="/privacy"
              className="link-underline font-semibold text-white"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:hello@convert.studios"
              className="link-underline text-white/70 hover:text-white"
            >
              hello@convert.studios
            </a>
            <a
              href="https://instagram.com/convert.studios"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-white/70 hover:text-white"
            >
              @convert.studios
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
