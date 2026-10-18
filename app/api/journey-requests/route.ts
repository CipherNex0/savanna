import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      departureDate,
      returnDate,
      destination,
      experience,
      duration,
      travelStyle,
      accommodation,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !destination ||
      !experience ||
      !duration ||
      !travelStyle ||
      !accommodation
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const journeyRequest = await prisma.journeyRequest.create({
      data: {
        name,
        email,
        phone: phone || null,
        departureDate: departureDate ? new Date(departureDate) : null,
        returnDate: returnDate ? new Date(returnDate) : null,
        destination,
        experience,
        duration,
        travelStyle,
        accommodation,
        message: message || null,
      },
    });

    return NextResponse.json(
      {
        message: "Journey request created successfully.",
        id: journeyRequest.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Journey request error:", error);

    return NextResponse.json(
      { error: "Unable to create journey request." },
      { status: 500 },
    );
  }
}