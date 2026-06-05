"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-bone/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-c flex items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" aria-label="Convert Studios home" className="flex items-center">
          <Logo tone="light" priority className="h-10 w-auto md:h-11" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition ${
                isActive(link.href)
                  ? "text-bone after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-aqua"
                  : "text-bone/60 hover:text-bone"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <SocialIcons />
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-6 bg-bone transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-bone transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-bone transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-bone/10 bg-ink md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-0"
        } transition-all duration-300`}
      >
        <nav className="flex flex-col px-6 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-bone/5 py-3.5 font-display text-lg text-bone"
            >
              {link.label}
            </Link>
          ))}
          <div className="py-4">
            <SocialIcons />
          </div>
        </nav>
      </div>
    </header>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-4 text-bone/60">
      <a
        href="https://instagram.com/convert.studios"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Convert Studios on Instagram"
        className="transition hover:text-bone"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
      </a>
      <a
        href="https://facebook.com/convert.studios"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Convert Studios on Facebook"
        className="transition hover:text-bone"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 9V7.5c0-.7.5-1 1-1h1.5V3.5H14c-2.2 0-3.5 1.4-3.5 3.7V9H8.5v3h2V21h3.5v-9h2.3l.5-3H14z" />
        </svg>
      </a>
    </div>
  );
}
