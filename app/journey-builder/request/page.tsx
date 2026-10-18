"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function JourneyRequest() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f5f1e8] text-[#171914]">
          <div className="flex min-h-screen items-center justify-center">
            <p className="text-xs tracking-[0.2em] text-[#171914]/45">
              LOADING JOURNEY...
            </p>
          </div>
        </main>
      }
    >
      <JourneyRequestForm />
    </Suspense>
  );
}

function JourneyRequestForm() {
  const searchParams = useSearchParams();

  const journey = searchParams.get("journey") ?? "Your Savanna Journey";
  const destination = searchParams.get("destination") ?? "";
  const duration = searchParams.get("duration") ?? "";
  const travelStyle = searchParams.get("style") ?? "";
  const accommodation = searchParams.get("accommodation") ?? "";
  const experience = searchParams.get("experience") ?? "";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/journey-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        departureDate: formData.get("dates"),
        destination,
        experience,
        duration,
        travelStyle,
        accommodation,
        message: formData.get("message"),
      }),
    });

    if (!response.ok) {
      console.error("Failed to submit journey request.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f5f1e8] text-[#171914]">
        <header className="border-b border-[#171914]/10 px-6 py-6 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <Link
              href="/"
              className="text-lg font-semibold tracking-[0.28em]"
            >
              SAVANNA
            </Link>
          </div>
        </header>

        <section className="flex min-h-[70vh] items-center px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-3xl">
            <p className="mb-5 text-xs font-medium tracking-[0.3em] text-[#806a4a]">
              REQUEST RECEIVED
            </p>

            <h1 className="font-display text-6xl font-medium leading-[0.9] sm:text-7xl lg:text-8xl">
              Your journey is taking shape.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#171914]/55">
              Thank you for sharing your plans. A Savanna journey specialist
              will review your preferences and help shape the final itinerary
              with you.
            </p>

            <Link
              href="/"
              className="mt-10 inline-flex bg-[#263528] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#344536]"
            >
              RETURN TO SAVANNA
            </Link>
          </div>
        </section>
      </main>
    );
  }

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
            JOURNEY REQUEST
          </span>
        </div>
      </header>

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-xs font-medium tracking-[0.3em] text-[#806a4a]">
              START YOUR JOURNEY
            </p>

            <h1 className="font-display text-6xl font-medium leading-[0.9] sm:text-7xl">
              Tell us a little about yourself.
            </h1>

            <p className="mt-7 max-w-md text-sm leading-6 text-[#171914]/55">
              Share your details and we&apos;ll use your preferences as the
              starting point for shaping your journey.
            </p>

            <div className="mt-12 border-t border-[#171914]/10 pt-7">
              <p className="mb-4 text-[10px] font-medium tracking-[0.25em] text-[#171914]/40">
                YOUR JOURNEY
              </p>

              <h2 className="font-display text-3xl font-medium">
                {journey}
              </h2>

              <div className="mt-6 flex flex-col gap-3 text-sm text-[#171914]/55">
                <p>{destination}</p>
                <p>{duration}</p>
                <p>{travelStyle}</p>
                <p>{accommodation}</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-7 sm:p-10"
          >
            <div className="grid gap-6">
              <label className="grid gap-2">
                <span className="text-xs font-medium tracking-[0.15em]">
                  FULL NAME
                </span>

                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="border border-[#171914]/15 bg-transparent px-4 py-3.5 outline-none transition-colors focus:border-[#344536]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-medium tracking-[0.15em]">
                  EMAIL
                </span>

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="border border-[#171914]/15 bg-transparent px-4 py-3.5 outline-none transition-colors focus:border-[#344536]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-medium tracking-[0.15em]">
                  PHONE
                </span>

                <input
                  name="phone"
                  type="tel"
                  placeholder="+254 ..."
                  className="border border-[#171914]/15 bg-transparent px-4 py-3.5 outline-none transition-colors focus:border-[#344536]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-medium tracking-[0.15em]">
                  TRAVEL DATES
                </span>

                <input
                  name="dates"
                  type="date"
                  placeholder="When would you like to travel?"
                  className="border border-[#171914]/15 bg-transparent px-4 py-3.5 outline-none transition-colors focus:border-[#344536]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-medium tracking-[0.15em]">
                  TELL US MORE
                </span>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Anything else you&apos;d like us to know?"
                  className="resize-none border border-[#171914]/15 bg-transparent px-4 py-3.5 outline-none transition-colors focus:border-[#344536]"
                />
              </label>

              <button
                type="submit"
                className="mt-2 bg-[#263528] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#344536]"
              >
                SEND JOURNEY REQUEST →
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}