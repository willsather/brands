import { flags } from "@/lib/flags";
import { LangSchema } from "@/lib/types";
import { precompute } from "flags/next";
import { type NextRequest, NextResponse } from "next/server";

function getLanguage(request: NextRequest) {
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

function getPostalCode(request: NextRequest) {
  const postalCode = request.headers.get("x-vercel-ip-postal-code");
  return postalCode || "undefined";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // skip Next.js internal paths and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|js|css)$/)
  ) {
    return NextResponse.next();
  }

  // get the preferred language and postal code
  const language = getLanguage(request);
  const postalCode = getPostalCode(request);

  // compute our flags
  const flagged = await precompute(flags);

  const newUrl = new URL(request.nextUrl);
  newUrl.pathname = `/${flagged}/${language}/${postalCode}${pathname}`;

  // rewrite the request (internal only, URL doesn't change for the user)
  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|img|.well-known|.*\\..*).*)"],
};
