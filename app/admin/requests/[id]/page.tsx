import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/auth";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RequestDetailsPage({
  params,
}: PageProps) {
  if (!(await verifyAdminSession())) {
    redirect("/admin/login");
  }

  const { id } = await params;

  const request = await prisma.journeyRequest.findUnique({
    where: {
      id,
    },
  });

  if (!request) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#171914]">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/requests"
          className="text-xs tracking-[0.2em] text-[#806a4a] transition-opacity hover:opacity-60"
        >
          ← BACK TO REQUESTS
        </Link>

        <div className="mt-8">
          <p className="mb-3 text-xs tracking-[0.25em] text-[#806a4a]">
            JOURNEY REQUEST
          </p>

          <h1 className="font-serif text-5xl">
            {request.name}
          </h1>

          <p className="mt-3 text-sm text-[#171914]/50">
            Submitted {request.createdAt.toLocaleString()}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl bg-white p-7">
            <p className="mb-5 text-xs tracking-[0.2em] text-[#806a4a]">
              TRAVELER
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-[#171914]/45">NAME</p>
                <p className="mt-1">{request.name}</p>
              </div>

              <div>
                <p className="text-xs text-[#171914]/45">EMAIL</p>
                <p className="mt-1">{request.email}</p>
              </div>

              <div>
                <p className="text-xs text-[#171914]/45">PHONE</p>
                <p className="mt-1">{request.phone ?? "Not provided"}</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-7">
            <p className="mb-5 text-xs tracking-[0.2em] text-[#806a4a]">
              JOURNEY
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-[#171914]/45">DESTINATION</p>
                <p className="mt-1">{request.destination}</p>
              </div>

              <div>
                <p className="text-xs text-[#171914]/45">EXPERIENCE</p>
                <p className="mt-1">{request.experience}</p>
              </div>

              <div>
                <p className="text-xs text-[#171914]/45">DURATION</p>
                <p className="mt-1">{request.duration}</p>
              </div>

              <div>
                <p className="text-xs text-[#171914]/45">TRAVEL STYLE</p>
                <p className="mt-1">{request.travelStyle}</p>
              </div>

              <div>
                <p className="text-xs text-[#171914]/45">ACCOMMODATION</p>
                <p className="mt-1">{request.accommodation}</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-7">
            <p className="mb-5 text-xs tracking-[0.2em] text-[#806a4a]">
              TRAVEL DATES
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-[#171914]/45">DEPARTURE</p>
                <p className="mt-1">
                  {request.departureDate
                    ? request.departureDate.toLocaleDateString()
                    : "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#171914]/45">RETURN</p>
                <p className="mt-1">
                  {request.returnDate
                    ? request.returnDate.toLocaleDateString()
                    : "Not provided"}
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-7">
            <p className="mb-5 text-xs tracking-[0.2em] text-[#806a4a]">
              STATUS
            </p>

            <span className="rounded-full bg-[#263528]/10 px-4 py-2 text-xs font-medium">
              {request.status}
            </span>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-7">
          <p className="mb-5 text-xs tracking-[0.2em] text-[#806a4a]">
            TRAVELER MESSAGE
          </p>

          <p className="whitespace-pre-wrap text-sm leading-7 text-[#171914]/70">
            {request.message || "No message provided."}
          </p>
        </section>
      </div>
    </main>
  );
}