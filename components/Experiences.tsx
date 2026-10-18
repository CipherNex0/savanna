import Image from "next/image";

const experiences = [
  {
    number: "01",
    title: "Wildlife",
    description:
      "Follow the rhythm of the wild across some of East Africa's most remarkable landscapes.",
    image: "/images/experiences/wildlife.jpg",
  },
  {
    number: "02",
    title: "Photography",
    description:
      "Slow down, find the light, and experience extraordinary moments through the lens.",
    image: "/images/experiences/photography.jpg",
  },
  {
    number: "03",
    title: "Adventure",
    description:
      "From remote wilderness to mountain trails, experience Africa beyond the expected.",
    image: "/images/experiences/adventure.jpg",
  },
  {
    number: "04",
    title: "Romance",
    description:
      "Private escapes, unforgettable sunsets, and time designed entirely around you.",
    image: "/images/experiences/romance.jpg",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="bg-[#171914] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Introduction */}
        <div className="mb-16 max-w-3xl lg:mb-20">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-[#d8c6a3]">
            EXPERIENCES
          </p>

          <h2 className="text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Travel with intention.
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Every journey begins with what you want to feel, discover, and
            remember. Choose the experience that speaks to you.
          </p>
        </div>

        {/* Experience List */}
        <div className="border-t border-white/15">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group grid border-b border-white/15 py-8 lg:grid-cols-[80px_1fr_1.2fr] lg:items-center lg:gap-10 lg:py-10"
            >
              {/* Number */}
              <span className="mb-5 text-xs tracking-[0.2em] text-white/35 lg:mb-0">
                {experience.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-4xl font-medium transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                {experience.title}
              </h3>

              {/* Description + Image */}
              <div className="mt-5 flex items-center gap-8 lg:mt-0">
                <div className="relative hidden h-24 w-36 shrink-0 overflow-hidden sm:block">
                  <Image
                    src={experience.image}
                    alt=""
                    width={144}
                    height={96}
                    sizes="144px"
                    className="h-24 w-36 object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <p className="max-w-md text-sm leading-6 text-white/55">
                  {experience.description}
                </p>

                <span className="ml-auto hidden text-2xl text-white/40 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white sm:block">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Builder CTA */}
        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-6 text-white/50">
            Not sure where to begin? Tell us what you&apos;re looking for and
            we&apos;ll help shape the journey.
          </p>

          <a
            href="/journey-builder"
            className="w-fit bg-[#f5f1e8] px-6 py-4 text-sm font-medium text-[#171914] transition-colors duration-300 hover:bg-[#d8c6a3]"
          >
            Design Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}