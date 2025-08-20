"use client";

import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";
import { Button } from "@brands/ui/components/button";
import type { Lang } from "@brands/utils";

import { GetStartedButton } from "@/components/get-started-button";
import dict from "@/lib/dict.json";

interface HeroCTAButtonsProps {
  showPrimaryButton: boolean;
  showSecondaryButton: boolean;
  variation: string;
  lang: Lang;
}

export default function HeroCTAButtons({
  showPrimaryButton,
  showSecondaryButton,
  variation,
  lang,
}: HeroCTAButtonsProps) {
  const t = dict[lang];

  const handlePrimaryButtonClick = () => {
    track("hero_primary_cta_click", {
      button_text: t.buttons.getStarted,
      hero_variation: variation,
      language: lang,
      section: "hero",
      button_type: "primary",
    });
  };

  const handleSecondaryButtonClick = () => {
    track("hero_secondary_cta_click", {
      button_text: t.hero.learnMore,
      hero_variation: variation,
      language: lang,
      section: "hero",
      button_type: "secondary",
    });
  };

  return (
    <div className="flex items-center gap-4">
      {showPrimaryButton && (
        <div onClick={handlePrimaryButtonClick}>
          <GetStartedButton lang={lang} />
        </div>
      )}

      {showSecondaryButton && (
        <Button
          variant="ghost"
          size="lg"
          className="group flex p-0 font-medium text-base text-gray-700 hover:text-gray-900"
          onClick={handleSecondaryButtonClick}
        >
          {t.hero.learnMore}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      )}
    </div>
  );
}