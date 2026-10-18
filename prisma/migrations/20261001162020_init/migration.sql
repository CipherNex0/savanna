-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('NEW', 'CONTACTED', 'PLANNING', 'CONFIRMED', 'CANCELLED');

-- CreateTable
CREATE TABLE "JourneyRequest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "departureDate" TIMESTAMP(3),
    "returnDate" TIMESTAMP(3),
    "destination" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "travelStyle" TEXT NOT NULL,
    "accommodation" TEXT NOT NULL,
    "message" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JourneyRequest_pkey" PRIMARY KEY ("id")
);
