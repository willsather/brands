import Image from "next/image";
import Link from "next/link";

import CategoryGrid from "@/components/category-grid";
import FullWidthImage from "@/components/full-width-image";
import ProductShowcase from "@/components/product-showcase";
import PromoSection from "@/components/promo-section";
import PromoSectionSandals from "@/components/promo-section-sandals";
import { getFeaturedProducts } from "@/lib/products";

export async function generateStaticParams() {
  const params = [];

  params.push({
    postalCode: "undefined",
  });

  return params;
}

export default async function Home() {
  const shoeProducts = await getFeaturedProducts("mens-shoes");
  const jewelryProducts = await getFeaturedProducts("jewelry");

  return (
    <main>
      <div className="relative h-[90vh] w-full">
        <Image
          src="https://assets.hermes.com/is/image/hermesedito/P_169_PE25_CROSS_NF_2?fit=wrap,0&wid=3840"
          alt="Hero background"
          width={3000}
          height={3000}
          priority
          className="h-full w-full bg-muted-foreground/10 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-16 left-8 max-w-xl text-white md:left-16">
          <h1 className="mb-4 font-light font-mono text-4xl tracking-wider md:text-5xl">
            HATS OFF TO THE ARTIST
          </h1>
          <p className="mb-8 font-light text-lg leading-relaxed">
            Lightweight sculptures, hats crown our thoughts with a breath of
            countryside charm. With a touch of ease, they define a floral
            silhouette from wrist to head.
          </p>
          <Link
            href="#"
            className="inline-block border-white border-b pb-1 font-light text-sm tracking-wider transition-all hover:border-orange-500 hover:text-orange-500"
            prefetch
          >
            TURN HEADS
          </Link>
        </div>
      </div>

      <CategoryGrid />

      <PromoSectionSandals />

      <div className="mx-auto max-w-[1800px] px-4 md:px-8">
        <ProductShowcase products={shoeProducts} />
      </div>

      <PromoSection />

      <FullWidthImage
        src="https://assets.hermes.com/is/image/hermesedito/P_169_PE25_CROSS_Z_5?fit=wrap,0&wid=3840"
        alt="Hermès lifestyle image"
      />

      <div className="mx-auto max-w-[1800px] px-4 md:px-8">
        <ProductShowcase products={jewelryProducts} />
      </div>
    </main>
  );
}
