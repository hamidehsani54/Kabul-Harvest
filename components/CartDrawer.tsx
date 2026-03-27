"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { products } from "@/lib/products";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeFromCart, subtotal } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <button
        onClick={closeDrawer}
        className={`absolute inset-0 bg-black/40 transition ${isDrawerOpen ? "opacity-100" : "opacity-0"}`}
        aria-label="Close cart"
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 shadow-soft transition-transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold">Your Cart</h3>
          <button onClick={closeDrawer} className="text-sm text-slate-500">
            Close
          </button>
        </div>
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-slate-500">Your cart is empty. Add your first bag of Afghan dry fruits.</p>
          ) : (
            items.map((item) => {
              const product = products.find((p) => p.id === item.id);
              if (!product) return null;
              return (
                <div key={item.id} className="flex gap-3 rounded-xl border border-slate-200 p-3">
                  <Image src={product.image} alt={product.name} width={60} height={60} className="rounded-lg" />
                  <div className="flex-1">
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-slate-600">
                      ${product.price} x {item.qty}
                    </p>
                    <button className="text-xs text-red-600" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="mt-6 border-t border-slate-200 pt-4">
          <p className="mb-4 flex items-center justify-between font-semibold">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>
          <Link href="/cart" className="btn-primary w-full" onClick={closeDrawer}>
            Go to Cart
          </Link>
        </div>
      </aside>
    </div>
  );
}
