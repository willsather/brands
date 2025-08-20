import { Suspense } from "react";
import { getRelatedProducts, type Product } from "@/lib/product";
import ProductCard from "@/components/product-card";

interface PersonalizedProductsProps {
  currentProductSlug: string;
  lang: string;
  locale: string;
}

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="group relative flex h-full flex-col bg-gray-50 p-6 min-h-[500px]">
          <div className="flex flex-1 flex-col">
            <div className="flex-1">
              <div className="relative mb-6 h-64" />
              <div className="mb-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-3" />
                <div className="w-full max-w-full">
                  <div className="flex w-max items-center gap-2 p-0.5 pb-3">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="size-9 flex-shrink-0 bg-gray-200 rounded-full animate-pulse" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-32 mb-4" />
            </div>
            <div className="relative mt-6">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function RelatedProductsList({ currentProductSlug, lang, locale }: PersonalizedProductsProps) {
  const relatedProducts = await getRelatedProducts(currentProductSlug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedProducts.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          lang={lang}
          locale={locale}
        />
      ))}
    </div>
  );
}

export default function PersonalizedProducts({ currentProductSlug, lang, locale }: PersonalizedProductsProps) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personalized for You</h2>
      <Suspense fallback={<ProductSkeleton />}>
        <RelatedProductsList currentProductSlug={currentProductSlug} lang={lang} locale={locale} />
      </Suspense>
    </section>
  );
}