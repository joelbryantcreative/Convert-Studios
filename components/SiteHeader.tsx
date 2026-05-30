"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookCallButton } from "@/components/Booking";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#mission", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-c flex items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Convert Studios home"
        >
          <Image
            src="/logo-ink.png"
            alt="Convert Studios"
            width={66}
            height={48}
            priority
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-ink/75 transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <BookCallButton className="!px-5 !py-2.5 text-xs">
            Book a Call
          </BookCallButton>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-cream md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-0"
        } transition-all duration-300`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-ink/5 py-3 font-serif text-lg text-ink"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <BookCallButton className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
