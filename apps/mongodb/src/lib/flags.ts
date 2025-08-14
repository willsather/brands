import { flag } from "flags/next";

export const showHeroPrimaryButton = flag<boolean>({
  key: "show-hero-primary-button",
  description: "show/hide hero primary button (SHOP SALE)",
  defaultValue: true,
  decide() {
    return true;
  },
});

export const showHeroSecondaryButton = flag<boolean>({
  key: "show-hero-secondary-button",
  description: "show/hide hero secondary button (VIEW GIFT GUIDE)",
  defaultValue: true,
  decide() {
    return true;
  },
});

export const promoBannerFlag = flag<string>({
  key: "banner-text-variation",
  description: "change the promo banner text",
  defaultValue: "conference",
  options: [
    {
      value: "conference",
      label: "NYC Conference",
    },
    {
      value: "mcp-server",
      label: "MCP Server Preview",
    },
    {
      value: "mongo-8.0",
      label: "MongoDB 8.0 Release",
    },
    {
      value: "voyage",
      label: "Voyage Announcement",
    },
  ],
  decide() {
    const variations = [
      "conference",
      "mcp-server",
      "mongo-8.0",
      "voyage",
    ] as const;

    return (
      variations[Math.floor(Math.random() * variations.length)] ?? "mongo-8.0"
    );
  },
});

export const heroVariation = flag<string>({
  key: "hero-variation",
  description: "hero section variation with different images and content",
  defaultValue: "back-to-school",
  options: [
    {
      value: "back-to-school",
      label: "Back-to-School Sale",
    },
    {
      value: "ultra-open-earbuds",
      label: "Ultra Open Earbuds Promo",
    },
    {
      value: "bose-heritage",
      label: "Bose Heritage Story",
    },
  ],
  decide() {
    const variations = [
      "back-to-school",
      "ultra-open-earbuds",
      "bose-heritage",
    ] as const;
    return (
      variations[Math.floor(Math.random() * variations.length)] ??
      "back-to-school"
    );
  },
});

export const showDeliveryText = flag<boolean>({
  key: "show-delivery-text",
  description: "enable delivery date text on product page",
  defaultValue: true,
  decide() {
    return true;
  },
});

export const flags = [
  showHeroPrimaryButton,
  showHeroSecondaryButton,
  heroVariation,
  promoBannerFlag,
  showDeliveryText,
] as const;
