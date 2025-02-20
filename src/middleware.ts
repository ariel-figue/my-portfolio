import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/:path*", // Ensure middleware runs on all routes
};

// In-memory cache for location lookups
const cache = new Map<string, { metadataType: string; expires: number }>();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour cache expiration

export async function middleware(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0] || "0.0.0.0";

  // Check if location is in cache
  const cachedData = cache.get(forwardedFor);
  if (cachedData && cachedData.expires > Date.now()) {
    const response = NextResponse.next();
    response.headers.set("x-metadata", cachedData.metadataType);
    return response;
  }

  let metadataType = "global"; // Default metadata type

  try {
    const locationResponse = await fetch(`https://ipapi.co/${forwardedFor}/json/`);
    const locationData = await locationResponse.json();

    if (locationData.region_code === "FL") {
      metadataType = "florida"; // Set metadata based on location
    }

    // Store the result in cache
    cache.set(forwardedFor, { metadataType, expires: Date.now() + CACHE_TTL });
  } catch (error) {
    console.error("Location API failed:", error);
  }

  // Create response and set headers
  const response = NextResponse.next();
  response.headers.set("x-metadata", metadataType);

  return response;
}
