import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/auth";

export default async function AdminRequestsPage() {
  if (!(await verifyAdminSession())) {
    redirect("/admin/login");
  }

  const requests = await prisma.journeyRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#171914]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-xs tracking-[0.25em] text-[#806a4a]">
            SAVANNA ADMIN
          </p>

          <h1 className="font-serif text-5xl">
            Journey Requests
          </h1>

          <p className="mt-3 text-sm text-[#171914]/60">
            Review incoming journey enquiries.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#171914]/10 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="border-b border-[#171914]/10 bg-[#f5f1e8]/60">
                <tr>
                  <th className="px-6 py-4 font-medium">Traveler</th>
                  <th className="px-6 py-4 font-medium">Destination</th>
                  <th className="px-6 py-4 font-medium">Experience</th>
                  <th className="px-6 py-4 font-medium">Duration</th>
                  <th className="px-6 py-4 font-medium">Style</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Received</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr
                    key={request.id}
                    className="border-b border-[#171914]/10 last:border-0"
                  >
                    <td className="px-6 py-5">
                      <Link href={`/admin/requests/${request.id}`} className="group">
                      <div className="font-medium transition-opacity group-hover:opacity-60">{request.name}</div>
                      <div className="mt-1 text-xs text-[#171914]/50">{request.email}</div>
                      </Link>
                    </td>

                    <td className="px-6 py-5">
                      {request.destination}
                    </td>

                    <td className="px-6 py-5">
                      {request.experience}
                    </td>

                    <td className="px-6 py-5">
                      {request.duration}
                    </td>

                    <td className="px-6 py-5">
                      {request.travelStyle}
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-[#263528]/10 px-3 py-1 text-xs font-medium">
                        {request.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-xs text-[#171914]/50">
                      {request.createdAt.toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {requests.length === 0 && (
            <div className="px-6 py-16 text-center text-sm text-[#171914]/50">
              No journey requests yet.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}