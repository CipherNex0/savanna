"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    title: "Where do you want to go?",
    subtitle: "Choose your destination.",
    options: ["Kenya", "Tanzania", "Rwanda", "Uganda"],
  },
  {
    title: "What do you want to experience?",
    subtitle: "Choose what matters most to you.",
    options: [
      "Wildlife",
      "Photography",
      "Adventure",
      "Culture",
      "Romance",
      "Relaxation",
    ],
  },
  {
    title: "How long will you travel?",
    subtitle: "Choose the pace of your journey.",
    options: ["3 days", "5 days", "7 days", "10+ days"],
  },
  {
    title: "How do you want to travel?",
    subtitle: "Tell us who you're travelling with.",
    options: ["Private", "Couples", "Family", "Small group", "Solo"],
  },
  {
    title: "Where would you like to stay?",
    subtitle: "Choose the kind of accommodation that fits your journey.",
    options: [
      "Luxury Lodge",
      "Safari Camp",
      "Private Villa",
      "Boutique Hotel",
    ],
  },
];

const journeyData = {
  Kenya: {
    title: "Wild Kenya",
    locations: "Maasai Mara · Amboseli",
    description:
      "A carefully shaped journey through Kenya's defining wildernesses, combining remarkable landscapes, wildlife, and time to slow down.",
    basePrice: 4200,
  },
  Tanzania: {
    title: "The Great Wilderness",
    locations: "Serengeti · Ngorongoro",
    description:
      "A journey through Tanzania's extraordinary landscapes, built around wildlife, open spaces, and unforgettable encounters.",
    basePrice: 4600,
  },
  Rwanda: {
    title: "Rwanda, Unfiltered",
    locations: "Volcanoes · Kigali",
    description:
      "A refined journey through Rwanda's volcanic landscapes, rich culture, and extraordinary wildlife.",
    basePrice: 4400,
  },
  Uganda: {
    title: "Into the Wild",
    locations: "Bwindi · Queen Elizabeth",
    description:
      "A deeper journey into Uganda's forests, wildlife, and dramatic landscapes.",
    basePrice: 4000,
  },
};

const itineraryData = {
  Kenya: [
    {
      day: "01",
      title: "Arrival in Nairobi",
      description:
        "Arrive in Kenya and settle into a carefully selected Nairobi stay before beginning your journey into the wild.",
    },
    {
      day: "02",
      title: "Into the Maasai Mara",
      description:
        "Travel into the Maasai Mara and settle into camp. Your first afternoon introduces you to the rhythm of the reserve.",
    },
    {
      day: "03",
      title: "A Day in the Wild",
      description:
        "Spend the day exploring the Mara with morning and afternoon game drives shaped around wildlife and photography.",
    },
    {
      day: "04",
      title: "The Mara, Slowly",
      description:
        "A slower day in the reserve with time for another game drive, a private experience, or simply enjoying your surroundings.",
    },
    {
      day: "05",
      title: "Beyond the Mara",
      description:
        "Continue deeper into Kenya, travelling through changing landscapes toward your next wilderness experience.",
    },
    {
      day: "06",
      title: "Amboseli",
      description:
        "Explore Amboseli's open plains and wildlife with Mount Kilimanjaro rising beyond the horizon.",
    },
    {
      day: "07",
      title: "The Journey Home",
      description:
        "Enjoy a final morning before your transfer onward, carrying the memories of Kenya with you.",
    },
  ],

  Tanzania: [
    {
      day: "01",
      title: "Arrival in Arusha",
      description:
        "Arrive in Tanzania and settle into Arusha before beginning your journey into the northern wilderness.",
    },
    {
      day: "02",
      title: "Into the Serengeti",
      description:
        "Travel toward the Serengeti, arriving in time for your first glimpse of Tanzania's extraordinary plains.",
    },
    {
      day: "03",
      title: "The Serengeti",
      description:
        "Spend the day exploring the Serengeti with game drives shaped around wildlife and the changing light.",
    },
    {
      day: "04",
      title: "The Great Plains",
      description:
        "Continue exploring the Serengeti, allowing the day to unfold at the pace of the wilderness.",
    },
    {
      day: "05",
      title: "Ngorongoro",
      description:
        "Journey toward the Ngorongoro Conservation Area and settle into the dramatic highland landscape.",
    },
    {
      day: "06",
      title: "Into the Crater",
      description:
        "Descend into the Ngorongoro Crater for a full day among one of Africa's most remarkable concentrations of wildlife.",
    },
    {
      day: "07",
      title: "The Journey Home",
      description:
        "Enjoy a final morning before your onward transfer.",
    },
  ],

  Rwanda: [
    {
      day: "01",
      title: "Arrival in Kigali",
      description:
        "Arrive in Kigali and settle into the city before beginning your journey into Rwanda's landscapes.",
    },
    {
      day: "02",
      title: "Into the Volcanoes",
      description:
        "Travel north toward the volcanic landscapes of Rwanda and settle into your lodge.",
    },
    {
      day: "03",
      title: "Mountain Wilderness",
      description:
        "Explore the remarkable landscapes around Volcanoes National Park.",
    },
    {
      day: "04",
      title: "Into the Forest",
      description:
        "Spend the day discovering Rwanda's forests, wildlife, and extraordinary biodiversity.",
    },
    {
      day: "05",
      title: "Rwanda Slowly",
      description:
        "A slower day to experience the landscape, local culture, and surroundings at your own pace.",
    },
    {
      day: "06",
      title: "Back to Kigali",
      description:
        "Return toward Kigali with time to experience the city and its creative energy.",
    },
    {
      day: "07",
      title: "The Journey Home",
      description:
        "Enjoy a final morning before your onward transfer.",
    },
  ],

  Uganda: [
    {
      day: "01",
      title: "Arrival in Entebbe",
      description:
        "Arrive in Uganda and settle into your first stay before heading toward the wilderness.",
    },
    {
      day: "02",
      title: "Into the Wild",
      description:
        "Travel toward Uganda's extraordinary landscapes and settle into the rhythm of the wilderness.",
    },
    {
      day: "03",
      title: "Queen Elizabeth",
      description:
        "Explore Queen Elizabeth National Park through wildlife drives and changing landscapes.",
    },
    {
      day: "04",
      title: "The Forest",
      description:
        "Continue toward Uganda's forest landscapes and discover a very different side of the country.",
    },
    {
      day: "05",
      title: "Bwindi",
      description:
        "Arrive around Bwindi and settle into your surroundings among ancient forest.",
    },
    {
      day: "06",
      title: "Forest Wilderness",
      description:
        "Spend the day experiencing the extraordinary biodiversity of the region.",
    },
    {
      day: "07",
      title: "The Journey Home",
      description:
        "Enjoy a final morning before your onward transfer.",
    },
  ],
};

export default function JourneyBuilder() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [generated, setGenerated] = useState(false);

  const currentStep = steps[step];
  const selected = selections[step];

  const chooseOption = (option: string) => {
    const updated = [...selections];
    updated[step] = option;
    setSelections(updated);
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const generateJourney = () => {
    if (selections.length === steps.length && selections.every(Boolean)) {
      setGenerated(true);
    }
  };

  const destination = selections[0] as keyof typeof journeyData;
  const journey = destination ? journeyData[destination] : null;

  if (generated && journey) {
    return (
      <main className="min-h-screen bg-[#f5f1e8] text-[#171914]">
        <header className="border-b border-[#171914]/10 px-6 py-6 lg:px-10">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold tracking-[0.28em]"
            >
              SAVANNA
            </Link>

            <span className="text-xs tracking-[0.2em] text-[#171914]/45">
              YOUR JOURNEY
            </span>
          </div>
        </header>

        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1100px]">
            <p className="mb-5 text-xs font-medium tracking-[0.3em] text-[#806a4a]">
              YOUR JOURNEY IS READY
            </p>

            <h1 className="max-w-4xl font-display text-6xl font-medium leading-[0.9] sm:text-7xl lg:text-8xl">
              {journey.title}
            </h1>

            <p className="mt-5 text-sm tracking-[0.2em] text-[#171914]/45">
              {journey.locations}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#171914]/60">
              {journey.description}
            </p>

            <div className="mt-16 grid gap-4 border-y border-[#171914]/10 py-8 sm:grid-cols-2 lg:grid-cols-5">
              {selections.map((selection, index) => (
                <div key={`${selection}-${index}`}>
                  <p className="mb-2 text-[10px] font-medium tracking-[0.2em] text-[#171914]/35">
                    {steps[index].title}
                  </p>

                  <p className="font-display text-2xl">
                    {selection}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16">
                <div className="mb-8">
                    <p className="mb-3 text-xs font-medium tracking-[0.3em] text-[#806a4a]">
                    YOUR ITINERARY
                    </p>

                    <h2 className="font-display text-5xl font-medium leading-none sm:text-6xl">
                    A journey shaped around you.
                    </h2>
                </div>

                <div className="border-t border-[#171914]/10">
                    {itineraryData[destination]
                    .slice(
                        0,
                        selections[2] === "3 days"
                        ? 3
                        : selections[2] === "5 days"
                            ? 5
                            : 7,
                    )
                    .map((day) => (
                        <article
                        key={day.day}
                        className="grid gap-4 border-b border-[#171914]/10 py-7 sm:grid-cols-[80px_1fr]"
                        >
                        <p className="text-xs font-medium tracking-[0.2em] text-[#806a4a]">
                            DAY {day.day}
                        </p>

                        <div>
                            <h3 className="font-display text-3xl font-medium sm:text-4xl">
                            {day.title}
                            </h3>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#171914]/55">
                            {day.description}
                            </p>
                        </div>
                        </article>
                    ))}
                </div>
                </div>

            <div className="mt-14 flex flex-col justify-between gap-8 bg-[#263528] p-8 text-white sm:p-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] font-medium tracking-[0.25em] text-[#d8c6a3]">
                  ESTIMATED FROM
                </p>

                <p className="mt-3 font-display text-5xl">
                  ${journey.basePrice.toLocaleString()}
                </p>

                <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                  Estimated starting price based on your selected journey.
                  Your final itinerary and pricing will be confirmed with you.
                </p>
              </div>

              <a
                href={`/journey-builder/request?journey=${encodeURIComponent(journey.title)}&destination=${encodeURIComponent(selections[0])}&experience=${encodeURIComponent(selections[1])}&duration=${encodeURIComponent(selections[2])}&style=${encodeURIComponent(selections[3])}&accommodation=${encodeURIComponent(selections[4])}`}
                className="w-fit bg-[#f5f1e8] px-7 py-4 text-sm font-medium text-[#171914] transition-colors duration-300 hover:bg-[#d8c6a3]"
                >
                  REQUEST THIS JOURNEY
              </a>
            </div>

            <button
              type="button"
              onClick={() => setGenerated(false)}
              className="mt-8 text-xs font-medium tracking-[0.15em] text-[#171914]/45 transition-colors hover:text-[#171914]"
            >
              ← EDIT MY JOURNEY
            </button>
          </div>
        </section>
      </main>
    );
  }

  const isLastStep = step === steps.length - 1;

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#171914]">
      <header className="border-b border-[#171914]/10 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.28em]"
          >
            SAVANNA
          </Link>

          <span className="text-xs tracking-[0.2em] text-[#171914]/45">
            JOURNEY BUILDER
          </span>
        </div>
      </header>

      <section className="px-6 py-16 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-16 flex items-center gap-3">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 transition-colors duration-500 ${
                  index <= step ? "bg-[#344536]" : "bg-[#171914]/10"
                }`}
              />
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.3em] text-[#806a4a]">
              STEP {step + 1} OF {steps.length}
            </p>

            <h1 className="font-display text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl">
              {currentStep.title}
            </h1>

            <p className="mt-5 text-base text-[#171914]/55">
              {currentStep.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {currentStep.options.map((option) => {
              const isSelected = selected === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => chooseOption(option)}
                  className={`group flex min-h-28 items-end justify-between border p-5 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-[#344536] bg-[#344536] text-white"
                      : "border-[#171914]/15 bg-transparent hover:border-[#344536]/50 hover:bg-white"
                  }`}
                >
                  <span className="font-display text-2xl">
                    {option}
                  </span>

                  <span
                    className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                      isSelected ? "text-[#d8c6a3]" : "text-[#171914]/35"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-[#171914]/10 pt-7">
            <button
              type="button"
              onClick={previousStep}
              disabled={step === 0}
              className="text-xs font-medium tracking-[0.15em] text-[#171914]/50 transition-colors hover:text-[#171914] disabled:cursor-not-allowed disabled:opacity-20"
            >
              ← BACK
            </button>

            <button
              type="button"
              onClick={isLastStep ? generateJourney : nextStep}
              disabled={!selected}
              className="bg-[#171914] px-7 py-4 text-xs font-medium tracking-[0.15em] text-white transition-colors hover:bg-[#344536] disabled:cursor-not-allowed disabled:opacity-30"
            >
              {isLastStep ? "GENERATE JOURNEY →" : "CONTINUE →"}
            </button>
          </div>

          {selections.length > 0 && (
            <div className="mt-16 border-t border-[#171914]/10 pt-7">
              <p className="mb-5 text-xs font-medium tracking-[0.2em] text-[#171914]/40">
                YOUR JOURNEY SO FAR
              </p>

              <div className="flex flex-wrap gap-3">
                {selections.map(
                  (selection, index) =>
                    selection && (
                      <span
                        key={`${selection}-${index}`}
                        className="border border-[#171914]/15 px-4 py-2 text-xs"
                      >
                        {selection}
                      </span>
                    ),
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}