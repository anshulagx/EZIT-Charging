import { google } from "googleapis";
import path from "path";
import fs from "fs";

function getAuth() {
  let credentials;

  const keyFilePath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE;
  if (keyFilePath) {
    const absPath = path.resolve(keyFilePath);
    credentials = JSON.parse(fs.readFileSync(absPath, "utf-8"));
  } else {
    const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}";
    credentials = JSON.parse(raw.replace(/\n/g, "\\n"));
  }

  return new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;

const SHEET_NAMES = {
  landowner: "Land Listings",
  investor: "Investors",
  demand: "Demand Requests",
  cpo: "CPO Interest",
  contact: "Contact",
} as const;

export async function appendToSheet(
  sheetType: keyof typeof SHEET_NAMES,
  values: string[]
) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const sheetName = SHEET_NAMES[sheetType];

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  const row = [timestamp, ...values, "New"];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A:Z`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}
