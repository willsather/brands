import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/products";

type ProductShowcaseProps = {
  products: Product[];
  backgroundColor?: string;
};

export default function ProductShowcase({
  products,
  backgroundColor = "#F6F1EB",
}: ProductShowcaseProps) {
  return (
    <section className="w-full py-16" style={{ backgroundColor }}>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group block transition-opacity hover:opacity-90"
            prefetch
          >
            <div className="aspect-square overflow-hidden bg-[#e9e9e7]">
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
              <h3 className="font-light text-gray-800 text-sm">
                {product.name}
              </h3>
              <p className="mt-1 text-gray-600 text-sm">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
