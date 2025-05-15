import { redirect } from "next/navigation";

import { ProductGrid } from "@/components/product-grid";
import { searchProducts } from "@/lib/products";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const { q: query } = sp as { [key: string]: string };

  if (query == null) {
    redirect("/");
  }

  const products = await searchProducts(query);

  return (
    <main className="mt-32 bg-background pb-16 md:mt-48">
      {/* Search Header */}
      <div className="px-4 md:px-8">
        <h1 className="mb-2 font-light text-3xl tracking-wider">{query}</h1>
        <p className="mb-8 font-light text-gray-600 text-sm">
          {products.length} {products.length === 1 ? "item" : "items"}
        </p>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8">
        <div className="flex flex-col md:flex-row">
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  );
}
