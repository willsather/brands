"use client";

import { useEffect, useState } from "react";

interface StoreLocatorProps {
  lang: string;
  postalCode?: string;
}

export default function StoreLocator({ lang, postalCode }: StoreLocatorProps) {
  const [location, setLocation] = useState("");

  // Set the initial location from the postal code if available
  useEffect(() => {
    if (postalCode && postalCode !== "undefined") {
      setLocation(postalCode);
    }
  }, [postalCode]);

  // Brand colors
  const backgroundColorFrosted = "#2563eb";
  const buttonColorClassic = "#059669";

  // Translations
  const texts = {
    en: {
      heading: "Find Stores Near You",
      placeholder: "Enter your zip code or city",
      button: "Find Stores",
      alert: "TODO: Implement store search functionality",
    },
    es: {
      heading: "Encuentra Tiendas Cerca de Ti",
      placeholder: "Ingresa tu código postal o ciudad",
      button: "Buscar Tiendas",
      alert: "TODO: Implementar funcionalidad de búsqueda de tiendas",
    },
  };

  const t = texts[lang as keyof typeof texts] || texts.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.alert);
  };

  return (
    <section
      className="rounded-xl px-6 py-10"
      style={{ backgroundColor: backgroundColorFrosted }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="mb-6 font-bold font-serif text-2xl md:text-3xl"
          style={{
            color: "white",
          }}
        >
          {t.heading}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 rounded-md bg-white px-4 py-3 text-black"
            aria-label={t.placeholder}
          />
          <button
            type="submit"
            className="rounded-md px-6 py-3 font-medium text-black"
            style={{ backgroundColor: buttonColorClassic }}
          >
            {t.button}
          </button>
        </form>
      </div>
    </section>
  );
}
