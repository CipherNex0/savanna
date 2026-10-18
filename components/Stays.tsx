import Image from "next/image";

const stays = [
  {
    name: "Wildwood Camp",
    type: "PRIVATE SAFARI CAMP",
    location: "MAASAI MARA · KENYA",
    image: "/images/stays/wildwood.jpg",
  },
  {
    name: "Olive House",
    type: "BOUTIQUE LODGE",
    location: "LAIKIPIA · KENYA",
    image: "/images/stays/olive-house.jpg",
  },
  {
    name: "The Tented House",
    type: "PRIVATE VILLA",
    location: "AMBOSELI · KENYA",
    image: "/images/stays/tented-house.jpg",
  },
];

export default function Stays() {
  return (
    <section
      id="stays"
      className="bg-[#f5f1e8] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.3em] text-[#806a4a]">
              STAYS
            </p>

            <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight text-[#171914] sm:text-6xl lg:text-7xl">
              Places worth
              <br />
              staying for.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#171914]/60">
            Carefully selected properties that become part of the journey,
            from intimate camps to private wilderness retreats.
          </p>
        </div>

        {/* Featured Stay */}
        <article className="group relative overflow-hidden">
          <div className="relative min-h-[560px] overflow-hidden lg:min-h-[680px]">
            <Image
              src={stays[0].image}
              alt={stays[0].name}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-8 p-7 text-white lg:flex-row lg:items-end lg:p-10">
              <div>
                <p className="mb-3 text-[10px] font-medium tracking-[0.3em] text-white/60">
                  {stays[0].type}
                </p>

                <h3 className="font-display text-5xl font-medium leading-none sm:text-6xl lg:text-7xl">
                  {stays[0].name}
                </h3>

                <p className="mt-4 text-xs tracking-[0.2em] text-white/60">
                  {stays[0].location}
                </p>
              </div>

              <span
                className="inline-flex w-fit items-center gap-3 border border-white/40 px-5 py-3 text-xs font-medium tracking-[0.15em] transition-colors duration-300 hover:bg-white hover:text-[#171914]"
              >
                EXPLORE STAY
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>
        </article>

        {/* Supporting Stays */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {stays.slice(1).map((stay) => (
            <article key={stay.name} className="group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-6 border-b border-[#171914]/15 py-5">
                <div>
                  <p className="mb-2 text-[10px] font-medium tracking-[0.25em] text-[#806a4a]">
                    {stay.type}
                  </p>

                  <h3 className="font-display text-3xl font-medium text-[#171914]">
                    {stay.name}
                  </h3>

                  <p className="mt-1 text-xs tracking-[0.15em] text-[#171914]/45">
                    {stay.location}
                  </p>
                </div>

                <span className="pt-2 text-lg text-[#171914]/40 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}