import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, areaPincode, type, approxEvCount } = body;

    if (!fullName || !phone || !areaPincode || !type) {
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

    await appendToSheet("demand", [
      fullName,
      phone,
      areaPincode,
      type,
      approxEvCount || "N/A",
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Demand submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
