import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/products";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="min-h-[50vh] w-full">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group block transition-opacity hover:opacity-90"
            prefetch
          >
            <div className="aspect-square overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full bg-muted-foreground/10 object-cover object-center"
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
  );
}
