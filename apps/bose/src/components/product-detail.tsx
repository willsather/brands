"use client";

import { ArrowLeft, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";

import { addToCart } from "@/app/actions/cart";
import type { Product } from "@/lib/product";
import { formatPrice } from "@/lib/utils";
import { Button } from "@brands/ui/components/button";

import { useCart } from "./cart-provider";

export default function ProductDetail({
  product,
  lang,
  locale,
  postalCode,
  showDeliveryText = true,
}: {
  product: Product;
  lang: string;
  locale: string;
  postalCode: string;
  showDeliveryText?: boolean;
}) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { refreshCart } = useCart();

  if (product?.colors == null || product.colors[0] == null) {
    return null;
  }

  const selectedColor = product.colors[selectedColorIndex];

  const handleAddToCart = () => {
    const formData = new FormData();
    formData.append("productId", product.slug);
    formData.append("quantity", "1");
    formData.append("locale", locale);
    formData.append("color", selectedColor?.name ?? "Default");

    // analytics context
    formData.append("section", "product_detail");
    formData.append("productTitle", product.title);
    formData.append("productPrice", product.price.toString());
    formData.append("productCategory", product.category || "audio");

    startTransition(async () => {
      await addToCart(formData);
      await refreshCart();
    });
  };

  return (
    <div className="mx-auto max-w-6xl">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {lang === "en"
          ? "Back to all products"
          : "Volver a todos los productos"}
      </Link>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg">
          <Image
            src={selectedColor?.image ?? product.colors[0].image}
            alt={`${product.title} in ${selectedColor?.name ?? "Default"}`}
            width={750}
            height={750}
            className="object-cover transition-all duration-300"
            priority
          />
        </div>

        <div className="space-y-6">
          <h1 className="font-bold font-serif text-4xl">{product.title}</h1>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`text-lg ${i <= Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {product.rating} out of 5
            </span>
          </div>

          <div className="border-t border-b py-4">
            <p className="text-gray-700">
              {product.description[lang as keyof typeof product.description] ||
                product.description.en}
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-medium text-gray-700 text-sm">
              Color: {selectedColor?.name ?? "Default"}
            </p>

            <div className="flex items-center gap-3">
              {product.colors.map((color, index) => (
                <Button
                  key={color.name}
                  onClick={() => setSelectedColorIndex(index)}
                  className={`h-10 w-10 rounded-full border-2 transition-all ${
                    selectedColorIndex === index
                      ? "border-gray-900 ring-2 ring-gray-200"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          <div className="text-gray-900 text-lg transition-opacity group-hover:opacity-0">
            {product.discount ? (
              <div className="flex items-center gap-3">
                <span className="font-medium text-xl">
                  {formatPrice(product.price - product.discount, locale)}
                </span>
                <div className="flex items-baseline justify-center gap-3 text-sm">
                  <span className="text-red-500 line-through">
                    {formatPrice(product.price, locale)}
                  </span>
                  <span className="text-green-600">
                    Save{" "}
                    {formatPrice(product.discount, locale).replace(/\.00$/, "")}
                  </span>
                </div>
              </div>
            ) : (
              <span className="font-medium text-xl">
                {formatPrice(product.price, locale)}
              </span>
            )}
          </div>

          {showDeliveryText && postalCode && postalCode !== "undefined" && (
            <p className="text-gray-600 text-sm">
              Order now for delivery as soon as Thursday, August 14 to{" "}
              <span className="cursor-pointer text-blue-600 underline hover:text-blue-800">
                {postalCode}
              </span>
            </p>
          )}

          <div className="flex items-center space-x-4">
            <button
              className="flex items-center space-x-2 rounded-md bg-black px-24 py-2 text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
              onClick={handleAddToCart}
              disabled={isPending}
              type="button"
            >
              <span>
                {isPending
                  ? lang === "en"
                    ? "Adding..."
                    : "Añadiendo..."
                  : lang === "en"
                    ? "Add to Cart"
                    : "Añadir al Carrito"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
