import ProductDetail from "@/components/product-detail";
import PersonalizedProducts from "@/components/personalized-products";
import { getProducts } from "@/lib/product";
import { LangSchema, LocaleSchema } from "@brands/utils";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    flagged: string;
    lang: string;
    locale: string;
    postalCode: string;
    slug: string;
  }>;
}) {
  const { lang, locale, slug } = await params;
  const products = await getProducts();

  const validLang = LangSchema.parse(lang);
  const validLocale = LocaleSchema.parse(locale);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <ProductDetail
          product={product}
          lang={validLang}
          locale={validLocale}
        />
        <PersonalizedProducts currentProductSlug={slug} lang={validLang} locale={validLocale} />
      </div>
    </main>
  );
}
