import type { NextRequest } from "next/server";
import { z } from "zod";

export const LocaleSchema = z
  .enum(["us", "mx", "ca", "uk", "de", "jp"])
  .default("us");

export type Locale = z.infer<typeof LocaleSchema>;

export function getLocale(request: NextRequest) {
  // check if there's a cookie with locale preference
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale) {
    return LocaleSchema.parse(cookieLocale);
  }

  // default to US
  return "us";
}
