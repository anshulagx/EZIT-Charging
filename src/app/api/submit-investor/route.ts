import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, budgetRange, preferredCities, investmentTimeline, preferredModel } = body;

    if (!fullName || !phone || !budgetRange || !preferredCities || !investmentTimeline || !preferredModel) {
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

    await appendToSheet("investor", [
      fullName,
      phone,
      budgetRange,
      preferredCities,
      investmentTimeline,
      preferredModel,
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Investor submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
