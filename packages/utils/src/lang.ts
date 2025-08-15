import type { NextRequest } from "next/server";
import { z } from "zod";

export const LangSchema = z.enum(["en", "es"]).default("en");

export type Lang = z.infer<typeof LangSchema>;

export function getLanguage(request: NextRequest) {
  // check if there's a cookie with language preference
  const cookieLang = request.cookies.get("NEXT_LANGUAGE")?.value;
  if (cookieLang) {
    return LangSchema.parse(cookieLang);
  }

  // check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const parsedLanguages = acceptLanguage
      .split(",")
      .map((l) => l.split(";")[0]?.trim())
      .filter((l): l is string => Boolean(l));

    const language = parsedLanguages.find((l) => {
      const { success } = LangSchema.safeParse(l.substring(0, 2));
      return success;
    });

    if (language) {
      return language.substring(0, 2);
    }
  }

  // default to English
  return "es";
}
