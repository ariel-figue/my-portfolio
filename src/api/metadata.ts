import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const metadataType = req.headers.get("x-metadata") || "global";
  return NextResponse.json({ metadataType });
}
