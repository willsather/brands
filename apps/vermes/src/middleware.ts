import { geolocation } from "@vercel/functions";
import { type NextRequest, NextResponse } from "next/server";

// Get postal code from Vercel request
function getPostalCode(request: NextRequest) {
  const geo = geolocation(request);

  console.log(geo);

  return geo?.postalCode ?? "undefined";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // skip next.js internal paths and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|js|css)$/)
  ) {
    return NextResponse.next();
  }

  const postalCode = getPostalCode(request);

  const newUrl = new URL(request.nextUrl);
  newUrl.pathname = `/${postalCode}${pathname}`;

  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|img|.well-known|.*\\..*).*)"],
};
