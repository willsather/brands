import Link from "next/link";

export default function PromoSectionSandals() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-8 font-light text-3xl text-gray-800 tracking-widest md:text-4xl">
          RISE IN STYLE
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base text-gray-700 leading-relaxed md:text-lg">
          Atop the ladder of relaxation, the sandal reigns supreme. Contemporary
          and light, it exudes effortless elegance, convinced that no other shoe
          can match its stride.
        </p>
        <div className="flex justify-center">
          <Link
            href="/category/mens-shoes"
            className="group inline-block font-light text-gray-800 text-sm tracking-wider"
            prefetch
          >
            <span>AIM FOR ELEGANCE</span>
            <div className="mt-1 h-px w-full bg-gray-400 transition-all group-hover:bg-black" />
          </Link>
        </div>
      </div>
    </section>
  );
}
