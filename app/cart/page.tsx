"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { products } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal } = useCart();

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-black">Your Cart</h1>
        {items.length === 0 ? (
          <div className="mt-6 card">
            <p className="text-slate-600">Your cart is empty.</p>
            <Link href="/shop" className="btn-dark mt-4">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_340px]">
            <div className="space-y-4">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id);
                if (!product) return null;
                return (
                  <div key={item.id} className="card flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold">{product.name}</p>
                      <p className="text-sm text-slate-600">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold">${(product.price * item.qty).toFixed(2)}</p>
                  </div>
                );
              })}
            </div>
            <aside className="card h-fit">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <p className="mt-4 flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </p>
              <button className="btn-primary mt-5 w-full">Checkout</button>
              <p className="mt-3 text-xs text-slate-500">Secure checkout. Free returns for 30 days.</p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
