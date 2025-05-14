import Link from "next/link";

export type Product = {
  name: string;
  price: string;
  image: string;
  slug: string;
};

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
      <div className="mx-auto max-w-[1800px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              href={product.slug}
              key={product.slug}
              className="group block"
            >
              <div className="aspect-square overflow-hidden bg-[#e9e9e7]">
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
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
      </div>
    </section>
  );
}
