"use client";

import Image from "next/image";
import { formatMoney, FREE_SHIPPING_THRESHOLD } from "@/lib/format";
import { primaryProduct, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import StickyAddToCart from "@/components/StickyAddToCart";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductPage() {
  const { localizeProduct, t } = useLanguage();
  const featured = localizeProduct(primaryProduct);
  const shippingAmount = formatMoney(FREE_SHIPPING_THRESHOLD);

  const reviews = [t("product.review1"), t("product.review2"), t("product.review3")];

  return (
    <>
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <Image
              src={featured.image}
              alt={featured.name}
              width={800}
              height={800}
              className="w-full rounded-2xl bg-slate-100"
            />
            <div className="grid grid-cols-3 gap-3">
              {products.slice(1, 4).map((p) => {
                const localized = localizeProduct(p);
                return (
                  <Image
                    key={p.id}
                    src={localized.image}
                    alt={localized.name}
                    width={200}
                    height={200}
                    className="h-24 w-full rounded-xl object-cover sm:h-28"
                    sizes="(max-width: 768px) 33vw, 200px"
                  />
                );
              })}
            </div>
          </div>
          <div>
            <p className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              {t("product.limitedBadge")}
            </p>
            <h1 className="text-4xl font-black">{featured.name}</h1>
            <p className="mt-2 text-slate-600">{featured.subtitle}</p>
            <p className="mt-4 text-3xl font-bold">{formatMoney(featured.price)}</p>
            <p className="mt-1 text-sm text-green-700">{t("product.freeShipping", { amount: shippingAmount })}</p>
            <ul className="mt-6 space-y-2">
              {featured.benefits.map((benefit) => (
                <li key={benefit} className="text-slate-700">
                  - {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-bold">{t("product.detailsTitle")}</h2>
              <p className="mt-2 text-slate-600">{featured.ingredients.join(" • ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-black">{t("product.bundleTitle")}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-black">{t("product.reviewsTitle")}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review} className="card">
                <p>{review}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <StickyAddToCart />
    </>
  );
}
