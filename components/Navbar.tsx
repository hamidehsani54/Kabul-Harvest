"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { BRAND_NAME } from "@/lib/products";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/landing", label: "Offers" }
];

export default function Navbar() {
  const { cartCount, openDrawer } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tight text-midnight">
          {BRAND_NAME.toUpperCase()}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-midnight">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
          <button onClick={openDrawer} className="btn-dark px-4 py-2 text-sm">
            Cart ({cartCount})
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="container flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-midnight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
