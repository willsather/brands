import type React from "react";

import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { PromotionalBanner } from "@/components/promotional-banner";
import { flags } from "@/lib/flags";
import { LangSchema } from "@/lib/types";

import { deserialize } from "flags/next";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    flagged: string;
    lang: string;
    locale: string;
    postalCode: string;
  }>;
}) {
  const { flagged, lang } = await params;
  const decisions = await deserialize(flags, flagged);

  const validLang = LangSchema.parse(lang);

  return (
    <>
      <PromotionalBanner
        text={decisions["banner-text-variation"]}
        lang={validLang}
      />

      <div className="pt-12">
        <Navbar lang={validLang} />
        {children}
        <Footer lang={validLang} />
      </div>
    </>
  );
}
