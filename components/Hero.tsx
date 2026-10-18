export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#171914]">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="w-full max-w-[1440px] px-6 pb-20 pt-40 lg:px-10 lg:pt-48">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-medium tracking-[0.3em] text-white/70">
              PRIVATE AFRICAN JOURNEYS
            </p>

            <h1 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              The wild,
              <br />
              beautifully experienced.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
              Bespoke journeys through Africa&apos;s most extraordinary
              landscapes.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/journey-builder"
                className="bg-white px-6 py-4 text-sm font-medium text-[#171914] transition-colors duration-300 hover:bg-white/85"
              >
                Plan Your Journey
              </a>

              <a
                href="#journeys"
                className="border border-white/50 px-6 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                Explore Journeys
              </a>
            </div>
          </div>

          {/* Location Detail */}
          <div className="mt-14 flex items-center gap-3 text-xs tracking-[0.25em] text-white/60">
            <span className="h-px w-8 bg-white/40" />
            KENYA · EAST AFRICA
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] tracking-[0.3em] text-white/50 lg:flex">
        SCROLL
        <span className="h-10 w-px bg-white/30" />
      </div>
    </section>
  );
}