"use client";

import Link from "next/link";
import { formatMoney, FREE_SHIPPING_THRESHOLD } from "@/lib/format";
import { useLanguage } from "@/components/LanguageProvider";

export default function LandingPage() {
  const { t } = useLanguage();
  const shippingAmount = formatMoney(FREE_SHIPPING_THRESHOLD);

  return (
    <section className="section bg-midnight text-white">
      <div className="container text-center">
        <p className="mx-auto inline-block rounded-full bg-amber-500/20 px-4 py-1 text-sm font-semibold text-amber-100">
          {t("landing.badge")}
        </p>
        <h1 className="mt-5 text-4xl font-black md:text-6xl">{t("landing.title")}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">{t("landing.subtitle")}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/shop" className="btn-primary animate-pulseGlow">
            {t("landing.claim")}
          </Link>
          <Link href="/product" className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
            {t("landing.viewProduct")}
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-400">{t("landing.socialProof", { amount: shippingAmount })}</p>
      </div>
    </section>
  );
}
