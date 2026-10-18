
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] px-6 py-20 text-[#171914] md:px-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-xs tracking-[0.2em] text-[#806A4A] hover:text-[#344536]"
        >
          ← BACK TO SAVANNA
        </Link>

        <p className="mt-16 text-xs tracking-[0.25em] text-[#806A4A]">
          LEGAL
        </p>

        <h1 className="mt-4 font-serif text-5xl md:text-6xl">
          Terms of Service
        </h1>

        <p className="mt-6 text-sm text-[#806A4A]">
          Last updated: October 2026
        </p>

        <div className="mt-12 space-y-8 text-sm leading-7 text-[#494A42]">
          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              1. About This Website
            </h2>
            <p>
              Savanna presents safari destinations, travel experiences, and
              sample journeys. Information on this website is provided for
              general informational and planning purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              2. Journey Requests
            </h2>
            <p>
              Submitting a journey request is an enquiry, not a confirmed
              booking. Any proposed itinerary, availability, price, or travel
              arrangement must be reviewed and confirmed separately before
              travel commitments are made.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              3. Prices and Estimates
            </h2>
            <p>
              Prices or estimates shown by the journey builder are illustrative
              and may not reflect current supplier rates, seasonal changes,
              taxes, availability, or additional charges. A final quotation
              would need to specify what is included and excluded.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              4. Travel Arrangements
            </h2>
            <p>
              Actual travel arrangements may depend on third-party providers,
              accommodation operators, transport services, parks, and other
              suppliers. Their own terms and requirements may apply where
              bookings are offered.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              5. Website Use
            </h2>
            <p>
              You agree not to misuse the website, attempt unauthorized access,
              interfere with its operation, or submit information that is
              knowingly false or unlawful.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              6. Accuracy and Availability
            </h2>
            <p>
              Destination descriptions, images, sample itineraries, and other
              content may be illustrative. We do not guarantee that all
              information is complete, current, or available at all times.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              7. Intellectual Property
            </h2>
            <p>
              Website text, branding, design, and other materials may be
              protected by intellectual property laws. You may not reproduce
              or commercially use materials without the relevant permission.
              Third-party names, images, and materials remain subject to their
              respective rights.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              8. Limitation of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, Savanna is not
              responsible for losses arising from reliance on illustrative
              website content or from interruptions to website access. Nothing
              in these terms excludes liability that cannot legally be
              excluded.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              9. Changes to These Terms
            </h2>
            <p>
              These terms may be updated as the website or its services change.
              The latest version will be published on this page with its
              revision date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              10. Contact
            </h2>
            <p>
              For questions about these terms, email{" "}
              <a
                href="mailto:hello@savanna.travel"
                className="underline underline-offset-4"
              >
                hello@savanna.travel
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-[#D8C6A3] pt-6 text-xs text-[#806A4A]">
          <Link href="/privacy" className="hover:text-[#171914]">
            PRIVACY POLICY →
          </Link>
        </div>
      </div>
    </main>
  );
}
