"use client";

import { useCart } from "@/components/CartProvider";
import { primaryProduct } from "@/lib/products";

export default function StickyAddToCart() {
  const { addToCart } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="container flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{primaryProduct.name}</p>
          <p className="text-xs text-slate-500">${primaryProduct.price} · ships fresh</p>
        </div>
        <button onClick={() => addToCart(primaryProduct.id)} className="btn-primary px-4 py-2 text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
}
