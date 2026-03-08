import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;
    const googleMapsLink = formData.get("googleMapsLink") as string;
    const landSize = formData.get("landSize") as string;
    const powerAvailability = formData.get("powerAvailability") as string;
    const earningModel = formData.get("earningModel") as string;
    const expectedRent = (formData.get("expectedRent") as string) || "N/A";

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
      expectedRent,
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
