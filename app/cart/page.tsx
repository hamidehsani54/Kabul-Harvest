"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatMoney } from "@/lib/format";
import { useLanguage } from "@/components/LanguageProvider";
import { products } from "@/lib/products";
export default function CartPage() {
  const { items, subtotal } = useCart();
  const { localizeProduct, t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-black">{t("cart.title")}</h1>
        {items.length === 0 ? (
          <div className="mt-6 card">
            <p className="text-slate-600">{t("cart.empty")}</p>
            <Link href="/shop" className="btn-dark mt-4">
              {t("cart.continueShopping")}
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_340px]">
            <div className="space-y-4">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id);
                if (!product) return null;
                const localized = localizeProduct(product);
                return (
                  <div key={item.id} className="card flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-bold">{localized.name}</p>
                      <p className="text-sm text-slate-600">{t("cart.qty", { n: item.qty })}</p>
                    </div>
                    <p className="font-semibold">{formatMoney(localized.price * item.qty)}</p>
                  </div>
                );
              })}
            </div>
            <aside className="card h-fit">
              <h2 className="text-xl font-bold">{t("cart.summaryTitle")}</h2>
              <p className="mt-4 flex justify-between">
                <span>{t("cart.subtotal")}</span>
                <span>{formatMoney(subtotal)}</span>
              </p>
              <button className="btn-primary mt-5 w-full">{t("cart.checkout")}</button>
              <p className="mt-3 text-xs text-slate-500">{t("cart.secureNote")}</p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
