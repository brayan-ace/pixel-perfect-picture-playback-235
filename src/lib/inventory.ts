import sport from "@/assets/sled-sport.jpg";
import touring from "@/assets/sled-touring.jpg";
import utility from "@/assets/sled-utility.jpg";
import trail from "@/assets/sled-trail.jpg";
import mountain from "@/assets/sled-mountain.jpg";
import hero from "@/assets/hero.jpg";

export const CATEGORIES = ["Mountain", "Trail", "Touring", "Sport", "Utility"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Product = {
  id: string;
  manufacturer: string;
  model: string;
  category: Category;
  description: string;
  images: string[];
  /** Leave undefined until confirmed by the seller — it is hidden when absent. */
  price?: number;
  availability?: string;
  specs?: { label: string; value: string }[];
};

/**
 * SAMPLE INVENTORY — placeholders only. Replace with real stock.
 * Do not add prices, availability or specs until they are confirmed.
 */
export const PRODUCTS: Product[] = [
  {
    id: "sample-mountain-01",
    manufacturer: "Sample Manufacturer A",
    model: "Sample Mountain Model",
    category: "Mountain",
    description:
      "Placeholder listing for a deep-snow mountain snowmobile. Replace this text with the real model description once inventory is confirmed.",
    images: [mountain, hero, sport],
  },
  {
    id: "sample-trail-01",
    manufacturer: "Sample Manufacturer B",
    model: "Sample Trail Model",
    category: "Trail",
    description:
      "Placeholder listing for a trail-focused snowmobile. Replace with the real description, specifications and pricing when supplied.",
    images: [trail, touring, hero],
  },
  {
    id: "sample-touring-01",
    manufacturer: "Sample Manufacturer C",
    model: "Sample Touring Model",
    category: "Touring",
    description:
      "Placeholder listing for a two-up touring snowmobile. Replace with real model information once available.",
    images: [touring, trail, mountain],
  },
  {
    id: "sample-sport-01",
    manufacturer: "Sample Manufacturer A",
    model: "Sample Sport Model",
    category: "Sport",
    description:
      "Placeholder listing for a sport snowmobile. Replace with confirmed details from the seller.",
    images: [sport, hero, mountain],
  },
  {
    id: "sample-utility-01",
    manufacturer: "Sample Manufacturer B",
    model: "Sample Utility Model",
    category: "Utility",
    description:
      "Placeholder listing for a utility / work snowmobile. Replace with confirmed details from the seller.",
    images: [utility, touring, trail],
  },
  {
    id: "sample-mountain-02",
    manufacturer: "Sample Manufacturer C",
    model: "Sample Backcountry Model",
    category: "Mountain",
    description:
      "Placeholder listing for a backcountry snowmobile. Replace with confirmed details from the seller.",
    images: [hero, mountain, sport],
  },
];

export const MANUFACTURERS = Array.from(new Set(PRODUCTS.map((p) => p.manufacturer))).sort();

export const productName = (p: Product) => `${p.manufacturer} ${p.model}`;
export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);
