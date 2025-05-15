import ProductShowcase from "@/components/product-showcase";
import { getPartnerProducts } from "@/lib/products";

export function PerfectPartnerSkeleton() {
  return (
    <div className="mt-16">
      <h3 className="text-3xl">The perfect partner</h3>
      <section className="w-full py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="group block animate-pulse">
              <div className="aspect-square overflow-hidden bg-muted-foreground/10">
                <div className="relative h-full w-full" />
              </div>

              <div className="mt-4">
                <div className="h-5 w-3/4 animate-pulse rounded bg-muted-foreground/10" />
                <div className="mt-1 h-4 w-1/4 animate-pulse rounded bg-muted-foreground/10" />
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
