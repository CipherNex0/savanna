"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Journeys", href: "#journeys" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "px-4 pt-4 sm:px-6 lg:px-8" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "max-w-[1400px] rounded-full border border-white/15 bg-black/20 px-5 py-3.5 backdrop-blur-md sm:px-6 lg:px-7"
            : "w-full border-b border-white/10 bg-transparent px-6 py-6 lg:px-10"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="shrink-0 text-lg font-semibold tracking-[0.28em] text-white"
        >
          SAVANNA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/journey-builder"
            className={`text-sm font-medium transition-all duration-500 ${
              scrolled
                ? "rounded-full bg-white px-5 py-2.5 text-[#171914] hover:bg-white/85"
                : "border border-white/50 px-5 py-2.5 text-white hover:bg-white/10"
            }`}
          >
            Plan Your Journey
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Menu</span>

          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-4 right-4 top-4 min-h-[calc(100vh-2rem)] rounded-3xl border border-white/10 bg-[#171914]/95 px-6 pb-10 pt-28 backdrop-blur-xl sm:left-6 sm:right-6 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-5 text-2xl font-light text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/journey-builder"
              onClick={() => setMenuOpen(false)}
              className="mt-8 w-fit rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#171914]"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
      )}
    </header>
  );
}