import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-8 font-light text-3xl text-gray-800 tracking-widest md:text-4xl">
          AN ODE TO AUDACITY
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base text-gray-700 leading-relaxed md:text-lg">
          The H of Hermès takes hold of the wrist, daring it with a bold
          challenge: to make every gesture a new confession of audacity. All
          jewelry is allowed, as long as brilliance prevails.
        </p>
        <div className="flex justify-center">
          <Link
            href="/category/jewelry"
            className="group inline-block font-light text-gray-800 text-sm tracking-wider"
            prefetch
          >
            <span>ADORN YOURSELF</span>
            <div className="mt-1 h-px w-full bg-gray-400 transition-all group-hover:bg-black" />
          </Link>
        </div>
      </div>
    </section>
  );
}
