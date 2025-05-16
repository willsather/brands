import { notFound } from "next/navigation";

import { ProductGrid } from "@/components/product-grid";
import {
  getCategories,
  getCategoryName,
  getProductsByCategory,
} from "@/lib/products";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((id) => ({
    id,
    postalCode: "undefined",
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const category = await getCategoryName(id);

  if (category == null) {
    notFound();
  }

  const products = await getProductsByCategory(id);

  return (
    <main className="mt-32 bg-background pb-16 md:mt-48">
      {/* Category Header */}
      <div className="px-4 md:px-8">
        <h1 className="mb-2 font-light text-3xl tracking-wider">{category}</h1>
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
