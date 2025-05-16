import { delay, shuffleArray } from "@/lib/utils";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  size?: string;
  category: string;
  description?: string;
  featured?: boolean;
};

export async function getProducts(): Promise<Product[]> {
  if (process.env.EDGE_CONFIG == null) {
    throw new Error(
      "Edge config not found. Please set the EDGE_CONFIG environment variable.",
    );
  }

  const data = await fetch(process.env.EDGE_CONFIG, {
    cache: "no-store", // force cache to demonstrate ppr
  }).then(async (res) => await res.json());

  return data.items.products as Product[];
}

export async function getCategories(): Promise<string[]> {
  if (process.env.EDGE_CONFIG == null) {
    throw new Error(
      "Edge config not found. Please set the EDGE_CONFIG environment variable.",
    );
  }

  const data = await fetch(process.env.EDGE_CONFIG, {
    cache: "no-store", // force cache to demonstrate ppr
  }).then(async (res) => await res.json());

  const categoryMap = data.items.categories as { [key: string]: string[] };

  return Object.keys(categoryMap);
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const products = await getProducts();

  return products.filter((product) => product.category === category);
}

export async function getCategoryName(
  category: string,
): Promise<string | undefined> {
  const categories = await getCategories();

  return categories.find((c) => c === category);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((p) => p.id === id);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const products = await getProducts();

  const lowerCaseQuery = query.toLowerCase();

  const nameMatches: Product[] = [];
  const idMatches: Product[] = [];
  const descriptionMatches: Product[] = [];

  for (const product of products) {
    if (product.name.toLowerCase().includes(lowerCaseQuery)) {
      nameMatches.push(product);
    } else if (product.id.toLowerCase().includes(lowerCaseQuery)) {
      idMatches.push(product);
    } else if (product?.description?.toLowerCase().includes(lowerCaseQuery)) {
      descriptionMatches.push(product);
    }
  }

  await delay(500);

  return [...nameMatches, ...idMatches, ...descriptionMatches];
}

export async function getFeaturedProducts(
  categoryId: string,
): Promise<Product[]> {
  const categoryProducts = await getProductsByCategory(categoryId);

  return categoryProducts.filter((product) => product.featured);
}

export async function getPartnerProducts(): Promise<Product[]> {
  const allProducts = await getProducts();
  const shuffled = shuffleArray(allProducts);

  return shuffled.slice(0, 4);
}
