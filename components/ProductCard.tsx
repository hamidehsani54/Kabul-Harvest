"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="card hover-lift">
      <div className="relative mb-4 overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          width={640}
          height={640}
          className="h-56 w-full object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-midnight px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        ) : null}
      </div>
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{product.subtitle}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-lg font-bold">${product.price}</p>
        <button className="btn-primary px-4 py-2 text-sm" onClick={() => addToCart(product.id)}>
          Add to cart
        </button>
      </div>
    </article>
  );
}
