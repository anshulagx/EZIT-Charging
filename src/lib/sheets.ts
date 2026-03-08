import { google } from "googleapis";
import path from "path";
import fs from "fs";
import { Readable } from "stream";

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
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;

const SHEET_NAMES = {
  landowner: "Land Listings",
  investor: "Investors",
  demand: "Demand Requests",
  cpo: "CPO Interest",
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

export async function uploadToDrive(file: File): Promise<string> {
  const auth = getAuth();
  const drive = google.drive({ version: "v3", auth });

  const buffer = Buffer.from(await file.arrayBuffer());
  const stream = Readable.from(buffer);

  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  const response = await drive.files.create({
    requestBody: {
      name: `${Date.now()}_${file.name}`,
      ...(folderId ? { parents: [folderId] } : {}),
    },
    media: {
      mimeType: file.type,
      body: stream,
    },
    fields: "id",
  });

  await drive.permissions.create({
    fileId: response.data.id!,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  return `https://drive.google.com/file/d/${response.data.id}/view`;
}
