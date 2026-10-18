import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#171914] text-white">
      {/* Final CTA */}
      <section className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-xs font-medium tracking-[0.3em] text-[#d8c6a3]">
            YOUR JOURNEY STARTS HERE
          </p>

          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl font-display text-6xl font-medium leading-[0.9] tracking-tight sm:text-7xl lg:text-9xl">
              Go somewhere
              <br />
              extraordinary.
            </h2>

            <a
              href="/journey-builder"
              className="group inline-flex w-fit shrink-0 items-center gap-4 bg-[#f5f1e8] px-7 py-4 text-sm font-medium text-[#171914] transition-colors duration-300 hover:bg-[#d8c6a3]"
            >
              PLAN YOUR JOURNEY
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="border-t border-white/10 px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-[0.28em]"
            >
              SAVANNA
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
              Bespoke journeys through Africa&apos;s most extraordinary
              landscapes.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-5 text-[10px] font-medium tracking-[0.25em] text-white/35">
              EXPLORE
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/65">
              <a href="#journeys" className="transition-colors hover:text-white">
                Journeys
              </a>
              <a
                href="#destinations"
                className="transition-colors hover:text-white"
              >
                Destinations
              </a>
              <a
                href="#experiences"
                className="transition-colors hover:text-white"
              >
                Experiences
              </a>
              <a href="#stays" className="transition-colors hover:text-white">
                Stays
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="mb-5 text-[10px] font-medium tracking-[0.25em] text-white/35">
              COMPANY
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/65">
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
              <a href="#about" className="transition-colors hover:text-white">
                Our Approach
              </a>
              <a href="mailto:hello@savanna.travel" className="transition-colors hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[10px] font-medium tracking-[0.25em] text-white/35">
              CONTACT
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/65">
              <a
                href="mailto:hello@savanna.travel"
                className="transition-colors hover:text-white"
              >
                hello@savanna.travel
              </a>

              <p>Kenya · East Africa</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 border-t border-white/10 py-6 text-[10px] tracking-[0.12em] text-white/30 sm:flex-row">
          <p>© 2026 SAVANNA. ALL RIGHTS RESERVED.</p>

          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-white/60">
              PRIVACY
            </a>
            <a href="/terms" className="transition-colors hover:text-white/60">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}