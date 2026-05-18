"use client";

import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import { products } from "@/lib/products";

export default function ShopPage() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{t("shop.eyebrow")}</p>
        <h1 className="mt-2 text-4xl font-black md:text-5xl">{t("shop.title")}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">{t("shop.subtitle")}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
