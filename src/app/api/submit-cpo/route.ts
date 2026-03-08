import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companyName, contactPerson, phone, citiesOfInterest } = body;

    if (!companyName || !contactPerson || !phone || !citiesOfInterest) {
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

    await appendToSheet("cpo", [
      companyName,
      contactPerson,
      phone,
      citiesOfInterest,
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CPO submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
