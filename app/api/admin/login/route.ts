
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createAdminSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (
      typeof password !== "string" ||
      !process.env.ADMIN_PASSWORD_HASH
    ) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 },
      );
    }

    const valid = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASH,
    );

    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 },
      );
    }

    await createAdminSession();

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to log in." },
      { status: 500 },
    );
  }
}
