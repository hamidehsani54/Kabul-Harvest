"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/components/CartProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { BRAND_NAME } from "@/lib/products";

export default function Navbar() {
  const { cartCount, openDrawer } = useCart();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "/", label: t("nav.home") },
      { href: "/shop", label: t("nav.shop") },
      { href: "/product", label: t("nav.product") },
      { href: "/about", label: t("nav.about") },
      { href: "/contact", label: t("nav.contact") },
      { href: "/landing", label: t("nav.offers") },
    ],
    [t]
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3">
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
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={t("nav.toggleMenu")}
          >
            {t("nav.menu")}
          </button>
          <button onClick={openDrawer} className="btn-dark px-4 py-2 text-sm">
            {t("nav.cart")} ({cartCount})
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="container flex flex-col py-3">
            <LanguageSwitcher className="mb-3 sm:hidden" />
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
