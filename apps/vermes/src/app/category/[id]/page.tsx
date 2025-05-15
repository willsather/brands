import Link from "next/link";

import {
  getAllCategories,
  getCategoryName,
  getProductsByCategory,
} from "@/lib/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((id) => ({
    id,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const category = getCategoryName(id);

  if (category == null) {
    notFound();
  }

  const products = getProductsByCategory(id);

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
          {/* Product Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="group block transition-opacity hover:opacity-90"
                >
                  <div className="aspect-square overflow-hidden">
                    <div className="relative h-full w-full">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-light">
                      {product.name} {product.size && `${product.size}`}
                    </h3>
                    <p className="mt-1 text-muted-foreground text-sm">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
