"use client";

import { useCart } from "@/components/CartProvider";
import { formatMoney } from "@/lib/format";
import { useLanguage } from "@/components/LanguageProvider";
import { primaryProduct } from "@/lib/products";

export default function StickyAddToCart() {
  const { addToCart } = useCart();
  const { localizeProduct, t } = useLanguage();
  const product = localizeProduct(primaryProduct);

  return (
    <div className="fixed bottom-0 start-0 end-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="container flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{product.name}</p>
          <p className="text-xs text-slate-500">
            {formatMoney(product.price)} · {t("stickyCart.shipsFresh")}
          </p>
        </div>
        <button onClick={() => addToCart(primaryProduct.id)} className="btn-primary px-4 py-2 text-sm">
          {t("productCard.addToCart")}
        </button>
      </div>
    </div>
  );
}
