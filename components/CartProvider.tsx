"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { products } from "@/lib/products";

type CartItem = {
  id: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  isDrawerOpen: boolean;
  cartCount: number;
  subtotal: number;
  openDrawer: () => void;
  closeDrawer: () => void;
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCart = (id: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { id, qty }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = items.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = items.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.id);
    return acc + (product ? product.price * item.qty : 0);
  }, 0);

  const value = useMemo(
    () => ({
      items,
      isDrawerOpen,
      cartCount,
      subtotal,
      openDrawer: () => setIsDrawerOpen(true),
      closeDrawer: () => setIsDrawerOpen(false),
      addToCart,
      removeFromCart
    }),
    [items, isDrawerOpen, cartCount, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
