import Image from "next/image";
import Link from "next/link";

type CategoryItem = {
  title: string;
  image: string;
  slug: string;
};

const categories: CategoryItem[] = [
  {
    title: "WOMEN'S SILK",
    image: "https://assets.hermes.com/is/image/hermesedito/893933S%2003",
    slug: "/category/womens-silk",
  },
  {
    title: "WOMEN'S SHOES",
    image: "https://assets.hermes.com/is/image/hermesedito/212010Z%20AY%20zoom",
    slug: "/category/womens-shoes",
  },
  {
    title: "TABLEWARE",
    image: "https://assets.hermes.com/is/image/hermesedito/103978M%2006",
    slug: "/category/tableware",
  },
  {
    title: "FASHION JEWELRY",
    image: "https://assets.hermes.com/is/image/hermesedito/100053FOE8",
    slug: "/category/jewelry",
  },
  {
    title: "WOMEN'S READY-TO-WEAR",
    image: "https://assets.hermes.com/is/image/hermesedito/5E3737D1AY",
    slug: "/category/ready-to-wear",
  },
  {
    title: "SMALL LEATHER GOODS",
    image: "https://assets.hermes.com/is/image/hermesedito/039790CCQ0",
    slug: "/category/leather",
  },
  {
    title: "HAIR ACCESSORIES",
    image: "https://assets.hermes.com/is/image/hermesedito/241015G%20RA",
    slug: "/category/hair",
  },
  {
    title: "MEN'S SHOES",
    image: "https://assets.hermes.com/is/image/hermesedito/222858ZHVT",
    slug: "/category/mens-shoes",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto grid grid-cols-2 gap-4 bg-background px-4 py-16 md:grid-cols-4 md:px-8">
      {categories.map((category) => (
        <Link
          href={category.slug}
          key={category.slug}
          className="group block transition-opacity hover:opacity-90"
          prefetch
        >
          <div className="aspect-square overflow-hidden bg-[#f8f8f6]">
            <div className="relative h-full w-full">
              <Image
                src={category.image}
                alt={category.title}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <h3 className="mt-3 font-light text-gray-800 text-xs tracking-wider">
            {category.title}
          </h3>
        </Link>
      ))}
    </section>
  );
}
