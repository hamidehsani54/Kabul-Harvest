"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { formatMoney } from "@/lib/format";
import { useCart } from "@/components/CartProvider";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { localizeProduct, translateBadge, t } = useLanguage();
  const localized = localizeProduct(product);
  const badge = translateBadge(product.badge);

  return (
    <article className="card hover-lift">
      <div className="relative mb-4 overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={localized.image}
          alt={localized.name}
          width={640}
          height={640}
          className="h-56 w-full object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge ? (
          <span className="absolute start-3 top-3 rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="text-xl font-bold">{localized.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{localized.subtitle}</p>
      <div className="mt-4 flex items-center justify-between gap-2">
        <p className="text-lg font-bold">{formatMoney(localized.price)}</p>
        <button className="btn-primary px-4 py-2 text-sm" onClick={() => addToCart(product.id)}>
          {t("productCard.addToCart")}
        </button>
      </div>
    </article>
  );
}
