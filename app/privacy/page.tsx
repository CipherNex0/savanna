
import Link from "next/link";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <p className="mt-6 text-sm text-[#806A4A]">
          Last updated: October 2026
        </p>

        <div className="mt-12 space-y-8 text-sm leading-7 text-[#494A42]">
          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              1. Introduction
            </h2>
            <p>
              Savanna respects your privacy. This policy explains how
              information may be collected, used, and protected when you visit
              this website or submit a journey request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              2. Information We Collect
            </h2>
            <p>
              If you submit a journey request, we may collect details such as
              your name, email address, travel dates, destination preferences,
              group size, and other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              3. How Information Is Used
            </h2>
            <p>
              Information may be used to review travel preferences, prepare
              proposed itineraries, respond to enquiries, and improve the
              website and its services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              4. Storage and Security
            </h2>
            <p>
              Information submitted through the website may be stored
              electronically. Reasonable safeguards should be used to protect
              it, although no method of transmission or storage can guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              5. Sharing of Information
            </h2>
            <p>
              Personal information should not be sold. It may be shared with
              service providers where necessary to operate the website or
              respond to requests, or where disclosure is required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              6. Cookies and Third-Party Services
            </h2>
            <p>
              This website may use technical features or third-party services
              that process limited usage information. Any analytics, advertising,
              or non-essential cookies should be disclosed and managed
              appropriately if introduced.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              7. Your Privacy Rights
            </h2>
            <p>
              Depending on applicable law, you may have rights to request
              access to, correction of, or deletion of your personal
              information. Contact us to make a privacy enquiry.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-medium text-[#171914]">
              8. Contact
            </h2>
            <p>
              For privacy enquiries, email{" "}
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
          <Link href="/terms" className="hover:text-[#171914]">
            TERMS OF SERVICE →
          </Link>
        </div>
      </div>
    </main>
  );
}
