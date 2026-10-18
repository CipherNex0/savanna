
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError(
          response.status === 401
            ? "Incorrect password."
            : "Login failed. Please try again.",
        );
        return;
      }

      router.replace("/admin/requests");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f1e8] px-6 py-12 text-[#171914]">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="text-xs tracking-[0.2em] text-[#806a4a] transition-colors hover:text-[#344536]"
        >
          ← BACK TO SAVANNA
        </Link>

        <div className="mt-12 rounded-2xl border border-[#171914]/10 bg-white p-8 sm:p-10">
          <p className="text-xs tracking-[0.25em] text-[#806a4a]">
            SAVANNA ADMIN
          </p>

          <h1 className="mt-4 font-serif text-4xl">
            Welcome back
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#171914]/60">
            Sign in to review journey requests.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-medium tracking-wide"
              >
                ADMIN PASSWORD
              </label>

              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-[#171914]/15 bg-[#f5f1e8]/40 px-4 py-3 text-base outline-none transition focus:border-[#806a4a]"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full rounded-lg bg-[#263528] px-4 py-3 text-xs font-medium tracking-[0.15em] text-white transition hover:bg-[#344536] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "SIGNING IN..." : "SIGN IN"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
