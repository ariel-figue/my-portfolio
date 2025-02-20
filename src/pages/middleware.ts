import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0] || "0.0.0.0";

  try {
    const locationResponse = await fetch(`https://ipapi.co/${forwardedFor}/json/`);
    const locationData = await locationResponse.json();

    const isFlorida = locationData.region_code === "FL"; // Check if user is in Florida
    const response = NextResponse.next();
    
    // Set a custom header that will be used in the layout
    response.headers.set("x-metadata", isFlorida ? "florida" : "global");

    return response;
  } catch (error) {
    console.error("Location API failed:", error);
    return NextResponse.next();
  }
}

// Middleware should run on all routes
export const config = {
  matcher: "/:path*",
};
