import Image from "next/image";

const destinations = [
  {
    name: "Kenya",
    region: "East Africa",
    description: "The Maasai Mara, Amboseli and beyond.",
    image: "/images/destinations/kenya.jpg",
  },
  {
    name: "Tanzania",
    region: "East Africa",
    description: "From the Serengeti to the shores of Zanzibar.",
    image: "/images/destinations/tanzania.jpg",
  },
  {
    name: "Rwanda",
    region: "East Africa",
    description: "Volcanic landscapes and extraordinary encounters.",
    image: "/images/destinations/rwanda.jpg",
  },
];

export default function FeaturedDestinations() {
  return (
    <section
      id="destinations"
      className="bg-[#f5f1e8] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Introduction */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.3em] text-[#806a4a]">
              WHERE WILL YOU GO?
            </p>

            <h2 className="max-w-2xl text-5xl font-medium leading-[0.95] tracking-tight text-[#171914] sm:text-6xl lg:text-7xl">
              Extraordinary places.
              <br />
              Thoughtfully experienced.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#171914]/60">
            Discover remarkable landscapes and carefully considered journeys
            across East Africa.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={`${destination.name} safari`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-7">
                  <p className="mb-2 text-[10px] font-medium tracking-[0.3em] text-white/65">
                    {destination.region.toUpperCase()}
                  </p>

                  <h3 className="font-display text-4xl font-medium">
                    {destination.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-5 text-white/75">
                    {destination.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em]">
                    EXPLORE
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}