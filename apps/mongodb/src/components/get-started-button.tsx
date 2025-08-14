import Link from "next/link";

import dict from "@/lib/dict.json";
import type { Lang } from "@/lib/types";

export function GetStartedButton({ lang }: { lang?: Lang }) {
  const t = dict[lang || "en"];
  return (
    <Link
      href="/#get-started"
      className="rounded-xl border border-[#001E2B] bg-[#00ED64] px-4 py-2 font-medium text-sm transition-colors duration-200 hover:rounded-full"
    >
      {t.buttons.getStarted}
    </Link>
  );
}
