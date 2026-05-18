"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { BRAND_NAME } from "@/lib/products";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container py-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {BRAND_NAME}. {t("footer.tagline")}
          </p>
          <div className="flex gap-4 text-sm text-slate-600">
            <Link href="/shop">{t("footer.shop")}</Link>
            <Link href="/about">{t("footer.about")}</Link>
            <Link href="/contact">{t("footer.contact")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
