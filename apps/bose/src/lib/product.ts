export interface Product {
  title: string;
  slug: string;
  price: number;
  rating: number;
  reviews: number;
  colors: { name: string; hex: string; image: string }[];
  description: {
    en: string;
    es: string;
  };
  category?: string;
  discount?: number;
}

export async function getProducts() {
  if (process.env.EDGE_CONFIG == null) {
    throw new Error(
      "Edge config not found. Please set the EDGE_CONFIG environment variable.",
    );
  }

  const data = await fetch(process.env.EDGE_CONFIG, {
    // FIXME: add data cache and revalidate api route
    // next: {
    //   revalidate: 60 * 60 * 24 * 365,
    //   tags: ["products"],
    // },
  }).then(async (res) => await res.json());

  return data.items.products as Product[];
}
