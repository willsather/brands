"use client";

import { Check, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

import dict from "@/lib/dict.json";
import type { Lang } from "@/lib/types";
import { Button } from "@brands/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@brands/ui/components/dropdown-menu";

export default function LocaleSelector({
  lang,
}: {
  lang: Lang;
}) {
  const router = useRouter();
  const t = dict[lang];

  // Language options with display names
  const languageOptions: { code: Lang; name: string; flag?: string }[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  // Get current language and locale display info
  const currentLanguage =
    languageOptions.find(({ code }) => code === lang) || languageOptions[0];

  // Handle selection change
  const handleChange = (type: "language", value: string) => {
    // Update the selection
    const newLang = type === "language" ? value : lang;

    // Set cookies for future requests
    document.cookie = `NEXT_LANGUAGE=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}`;

    // Refresh the current page to apply the new language/locale
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
          aria-label={`${currentLanguage?.name || "Language"}`}
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-lg">{currentLanguage?.flag || "🌍"}</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 p-2" align="start">
        <DropdownMenuLabel className="font-medium text-sm">
          {t.localeSelector.language}
        </DropdownMenuLabel>

        <div className="mb-2 space-y-1">
          {languageOptions.map(({ code, name }) => (
            <DropdownMenuItem
              key={code}
              className="flex cursor-pointer items-center justify-between"
              onClick={() => handleChange("language", code)}
            >
              <span>{name}</span>
              {lang === code && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
