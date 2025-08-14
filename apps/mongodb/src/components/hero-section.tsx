import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
  const content =
    dict[lang].hero[variation as keyof typeof dict.en.hero] ||
    dict[lang].hero["back-to-school"];

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="font-medium text-green-600 text-sm uppercase tracking-wide">
                MONGODB ATLAS
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="font-bold text-5xl text-gray-900 leading-tight lg:text-6xl">
                Loved by developers.{" "}
                <span className="block">Built for modern</span>
                <span className="block">applications.</span>
              </h1>

              <p className="max-w-lg text-gray-600 text-lg leading-relaxed">
                You don't need a separate database to handle transactions, rich
                search, or generative AI. The world's most popular modern
                database adapts and scales to handle all your application
                requirements.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="bg-green-500 px-8 py-3 font-medium text-base text-white hover:bg-green-600"
              >
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="group p-0 font-medium text-base text-gray-700 hover:text-gray-900"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
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
