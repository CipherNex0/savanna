import Image from "next/image";

const journeys = [
  {
    number: "01",
    title: "The Mara in Motion",
    location: "MAASAI MARA · KENYA",
    duration: "5 DAYS",
    description:
      "A focused safari through the Maasai Mara, built around wildlife, open landscapes, and unhurried time in the bush.",
    image: "/images/experiences/wildlife.jpg",
  },
  {
    number: "02",
    title: "Wild Kenya",
    location: "KENYA",
    duration: "7 DAYS",
    description:
      "From the open plains of the Mara to the dramatic landscapes of Amboseli, experience two of Kenya's defining wildernesses.",
    image: "/images/experiences/adventure.jpg",
  },
  {
    number: "03",
    title: "Beyond the Mara",
    location: "KENYA",
    duration: "10 DAYS",
    description:
      "A deeper exploration of Kenya combining wildlife, remarkable landscapes, intimate stays, and time away from the expected.",
    image: "/images/experiences/photography.jpg",
  },
];

export default function SignatureJourneys() {
  return (
    <section
      id="journeys"
      className="bg-[#f5f1e8] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Introduction */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.3em] text-[#806a4a]">
              SIGNATURE JOURNEYS
            </p>

            <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight text-[#171914] sm:text-6xl lg:text-7xl">
              Journeys worth
              <br />
              taking slowly.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#171914]/60">
            Thoughtfully designed itineraries for travelers who want to
            experience more than simply see a destination.
          </p>
        </div>

        {/* Journey Cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {journeys.map((journey) => (
            <article
              key={journey.number}
              className="group overflow-hidden bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={journey.image}
                  alt={journey.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-7">
                  <div className="mb-10 flex items-center justify-between text-[10px] font-medium tracking-[0.25em] text-white/60">
                    <span>{journey.number}</span>
                    <span>{journey.duration}</span>
                  </div>

                  <p className="mb-2 text-[10px] font-medium tracking-[0.25em] text-white/65">
                    {journey.location}
                  </p>

                  <h3 className="font-display text-4xl font-medium leading-none sm:text-5xl">
                    {journey.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <p className="text-sm leading-6 text-[#171914]/60">
                  {journey.description}
                </p>

                <a
                  href="/journey-builder"
                  className="mt-7 inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] text-[#171914]"
                >
                  VIEW JOURNEY
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Journey CTA */}
        <div
          id="journey-builder"
          className="mt-20 overflow-hidden bg-[#263528] px-7 py-12 text-white sm:px-10 lg:mt-24 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14"
        >
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.3em] text-[#d8c6a3]">
              YOUR JOURNEY, YOUR WAY
            </p>

            <h3 className="max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              Start with what matters to you.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
              Choose your destination, experiences, pace, and travel style.
              We&apos;ll help shape the journey around you.
            </p>
          </div>

          <a
            href="/journey-builder"
            className="mt-8 inline-flex shrink-0 bg-[#f5f1e8] px-6 py-4 text-sm font-medium text-[#171914] transition-colors duration-300 hover:bg-[#d8c6a3] lg:mt-0"
          >
            Design Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}