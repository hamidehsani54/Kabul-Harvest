"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatMoney } from "@/lib/format";
import { useLanguage } from "@/components/LanguageProvider";
import { products } from "@/lib/products";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeFromCart, subtotal } = useCart();
  const { localizeProduct, t, locale } = useLanguage();
  const isRtl = locale === "fa";

  return (
    <div className={`fixed inset-0 z-50 ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <button
        onClick={closeDrawer}
        className={`absolute inset-0 bg-black/40 transition ${isDrawerOpen ? "opacity-100" : "opacity-0"}`}
        aria-label={t("cartDrawer.closeLabel")}
      />
      <aside
        className={`absolute top-0 h-full w-full max-w-md bg-white p-6 shadow-soft transition-transform ${
          isRtl ? "left-0" : "right-0"
        } ${isDrawerOpen ? "translate-x-0" : isRtl ? "-translate-x-full" : "translate-x-full"}`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold">{t("cartDrawer.title")}</h3>
          <button onClick={closeDrawer} className="text-sm text-slate-500">
            {t("cartDrawer.close")}
          </button>
        </div>
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-slate-500">{t("cartDrawer.empty")}</p>
          ) : (
            items.map((item) => {
              const product = products.find((p) => p.id === item.id);
              if (!product) return null;
              const localized = localizeProduct(product);
              return (
                <div key={item.id} className="flex gap-3 rounded-xl border border-slate-200 p-3">
                  <Image src={localized.image} alt={localized.name} width={60} height={60} className="rounded-lg" />
                  <div className="flex-1">
                    <p className="font-semibold">{localized.name}</p>
                    <p className="text-sm text-slate-600">
                      {formatMoney(localized.price)} x {item.qty}
                    </p>
                    <button className="text-xs text-red-600" onClick={() => removeFromCart(item.id)}>
                      {t("cartDrawer.remove")}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="mt-6 border-t border-slate-200 pt-4">
          <p className="mb-4 flex items-center justify-between font-semibold">
            <span>{t("cartDrawer.subtotal")}</span>
            <span>{formatMoney(subtotal)}</span>
          </p>
          <Link href="/cart" className="btn-primary w-full" onClick={closeDrawer}>
            {t("cartDrawer.goToCart")}
          </Link>
        </div>
      </aside>
    </div>
  );
}
