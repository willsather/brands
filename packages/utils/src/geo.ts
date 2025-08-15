import type { NextRequest } from "next/server";

export function getPostalCode(request: NextRequest) {
  const postalCode = request.headers.get("x-vercel-ip-postal-code");
  return postalCode || "undefined";
}
