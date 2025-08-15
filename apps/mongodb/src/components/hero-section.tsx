import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { GetStartedButton } from "@/components/get-started-button";
import dict from "@/lib/dict.json";
import type { Lang } from "@/lib/types";
import { Button } from "@brands/ui/components/button";

export default function HeroSection({
  lang,
  showPrimaryButton = true,
  showSecondaryButton = true,
  variation = "back-to-school",
}: {
  lang: Lang;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  variation?: string;
}) {
  const t = dict[lang];

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="container mx-auto flex h-full min-h-[90vh] items-center py-8 lg:py-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-6 w-0.5 bg-[#00ED64]"></div>
                <div className="font-mono font-medium text-[#00684A] text-sm uppercase tracking-widest">
                  {t.hero.atlas}
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                {t.hero.title}{" "}
                <span className="block">{t.hero.titleLine2}</span>
                <span className="block">{t.hero.titleLine3}</span>
              </h1>

              <p className="max-w-lg text-gray-600 text-base leading-relaxed lg:text-lg">
                {t.hero.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {showPrimaryButton && <GetStartedButton lang={lang} />}

              {showSecondaryButton && (
                <Button
                  variant="ghost"
                  size="lg"
                  className="group flex p-0 font-medium text-base text-gray-700 hover:text-gray-900"
                >
                  {t.hero.learnMore}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              )}
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://zlbmkgaohavraaed.public.blob.vercel-storage.com/hero/hero-code.svg"
              alt="MongoDB Atlas vector search code"
              width={600}
              height={400}
              className="h-auto w-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
