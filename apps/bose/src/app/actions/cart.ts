"use server";

import { track } from "@vercel/analytics/server";
import { cookies } from "next/headers";

export type CartItem = {
  productId: string;
  color: string;
  quantity: number;
};

export type CartData = {
  items: CartItem[];
  locale: string;
};

export async function getCart(): Promise<CartData> {
  const cartCookie = (await cookies()).get("cart");

  if (!cartCookie) {
    return { items: [], locale: "us" };
  }

  try {
    return JSON.parse(cartCookie.value) as CartData;
  } catch (error) {
    return { items: [], locale: "us" };
  }
}

export async function addToCart(formData: FormData): Promise<CartData> {
  const productId = formData.get("productId") as string;
  const quantity = Number(formData.get("quantity") || 1);
  const locale = (formData.get("locale") as string) || "us";
  const color = (formData.get("color") as string) || "Default";

  // Get current cart
  const currentCart = await getCart();

  // Find existing item with same product and color
  const existingItemIndex = currentCart.items.findIndex(
    (item) => item.productId === productId && item.color === color,
  );

  let updatedItems: CartItem[];

  // update existing item quantity
  if (existingItemIndex >= 0) {
    updatedItems = [...currentCart.items];
    const existingItem = updatedItems[existingItemIndex];
    if (existingItem) {
      existingItem.quantity += quantity;
    }
  } else {
    // add new item
    updatedItems = [
      ...currentCart.items,
      {
        productId,
        color,
        quantity,
      },
    ];
  }

  // Update cart
  const updatedCart: CartData = {
    items: updatedItems,
    locale,
  };

  // Save to cookie
  (await cookies()).set({
    name: "cart",
    value: JSON.stringify(updatedCart),
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  await track("Added to Cart", {
    productId,
    quantity,
  });

  return updatedCart;
}

export async function removeFromCart(
  productId: string,
  color: string,
): Promise<CartData> {
  const currentCart = await getCart();

  const updatedItems = currentCart.items.filter(
    (item) => !(item.productId === productId && item.color === color),
  );

  const updatedCart: CartData = {
    items: updatedItems,
    locale: currentCart.locale,
  };

  // save to cookie
  (await cookies()).set({
    name: "cart",
    value: JSON.stringify(updatedCart),
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  await track("Removed from Cart", {
    productId,
    color,
  });

  return updatedCart;
}

export async function updateCartItemQuantity(
  productId: string,
  color: string,
  quantity: number,
): Promise<CartData> {
  const currentCart = await getCart();

  if (quantity <= 0) {
    return removeFromCart(productId, color);
  }

  const updatedItems = currentCart.items.map((item) => {
    if (item.productId === productId && item.color === color) {
      return { ...item, quantity };
    }
    return item;
  });

  const updatedCart: CartData = {
    items: updatedItems,
    locale: currentCart.locale,
  };

  // Save to cookie
  (await cookies()).set({
    name: "cart",
    value: JSON.stringify(updatedCart),
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  await track("Updated Cart Quantity", {
    productId,
    color,
    quantity,
  });

  return updatedCart;
}
