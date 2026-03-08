import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      city,
      googleMapsLink,
      landSize,
      powerAvailability,
      earningModel,
      expectedRent,
      sitePhotoLink,
    } = body;

    if (
      !fullName ||
      !phone ||
      !city ||
      !googleMapsLink ||
      !landSize ||
      !powerAvailability ||
      !earningModel
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const phoneClean = phone.replace(/\D/g, "");
    if (phoneClean.length < 10 || phoneClean.length > 13) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    await appendToSheet("landowner", [
      fullName,
      phone,
      city,
      googleMapsLink,
      landSize,
      powerAvailability,
      earningModel,
      expectedRent || "N/A",
      sitePhotoLink || "N/A",
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Landowner submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
