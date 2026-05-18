import type { Product } from "@/lib/products";
import type { Locale } from "./types";
import { productTranslations } from "./productTranslations";

export function getLocalizedProduct(product: Product, locale: Locale): Product {
  if (locale === "en") return product;

  const translation = productTranslations[locale][product.id];
  if (!translation) return product;

  return {
    ...product,
    name: translation.name,
    subtitle: translation.subtitle,
    benefits: translation.benefits,
    ingredients: translation.ingredients,
  };
}
