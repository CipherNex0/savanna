export default function TravelWithPurpose() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#263528] px-6 py-28 text-white lg:px-10 lg:py-40"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Main Statement */}
          <div>
            <p className="mb-6 text-xs font-medium tracking-[0.3em] text-[#d8c6a3]">
              TRAVEL WITH PURPOSE
            </p>

            <h2 className="max-w-4xl font-display text-5xl font-medium leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
              The places we love
              <br />
              are worth protecting.
            </h2>
          </div>

          {/* Supporting Copy */}
          <div className="max-w-md lg:pb-2">
            <p className="text-base leading-7 text-white/65">
              We believe meaningful travel should leave something behind
              beyond memories. Our journeys are designed with respect for the
              landscapes, wildlife, and communities that make them possible.
            </p>

            <a
              href="#experiences"
              className="mt-8 inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] text-white"
            >
              OUR APPROACH
              <span className="transition-transform duration-300 hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="mt-20 grid border-t border-white/15 pt-7 sm:grid-cols-3 sm:gap-8">
          <div>
            <p className="text-2xl font-display text-[#d8c6a3]">01</p>
            <p className="mt-2 text-xs tracking-[0.15em] text-white/45">
              CONSERVATION
            </p>
          </div>

          <div>
            <p className="text-2xl font-display text-[#d8c6a3]">02</p>
            <p className="mt-2 text-xs tracking-[0.15em] text-white/45">
              LOCAL COMMUNITIES
            </p>
          </div>

          <div>
            <p className="text-2xl font-display text-[#d8c6a3]">03</p>
            <p className="mt-2 text-xs tracking-[0.15em] text-white/45">
              RESPONSIBLE TRAVEL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}