import HeroSection from "@/components/hero-section";
import { flags } from "@/lib/flags";
import { LangSchema, LocaleSchema } from "@/lib/types";
import { deserialize } from "flags/next";

export function generateStaticParams() {
  return [];
}

export default async function Home({
  params,
}: {
  params: Promise<{
    flagged: string;
    lang: string;
    locale: string;
    postalCode: string;
  }>;
}) {
  const { flagged, lang, locale } = await params;
  const decisions = await deserialize(flags, flagged);

  const validLang = LangSchema.parse(lang);
  const validLocale = LocaleSchema.parse(locale);

  return (
    <div className="space-y-8">
      <HeroSection
        lang={validLang}
        showPrimaryButton={decisions["show-hero-primary-button"]}
        showSecondaryButton={decisions["show-hero-secondary-button"]}
        variation={decisions["hero-variation"]}
      />

      <main className="container mx-auto px-4 py-8">
        <p>FIXME: Add components</p>
      </main>
    </div>
  );
}
