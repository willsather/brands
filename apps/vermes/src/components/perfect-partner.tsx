import ProductShowcase from "@/components/product-showcase";
import { getPartnerProducts } from "@/lib/products";

export function PerfectPartnerSkeleton() {
  return (
    <div className="mt-16">
      <h3 className="text-3xl">The perfect partner</h3>
      <section className="w-full py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="group block animate-pulse">
              <div className="aspect-square overflow-hidden bg-[#e9e9e7]">
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function PerfectPartner({ id }: { id: string }) {
  const recommendedProducts = await getPartnerProducts(id);

  return (
    <div className="mt-16">
      <h3 className="text-3xl">The perfect partner</h3>
      <ProductShowcase products={recommendedProducts} />
    </div>
  );
}
