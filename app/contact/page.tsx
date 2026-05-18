"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { BRAND_NAME } from "@/lib/products";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-black md:text-5xl">{t("contact.title", { brand: BRAND_NAME })}</h1>
          <p className="mt-3 text-slate-600">{t("contact.subtitle")}</p>
          <div className="mt-6 space-y-2 text-slate-700">
            <p>{t("contact.email")}</p>
            <p>{t("contact.phone")}</p>
            <p>{t("contact.hours")}</p>
          </div>
        </div>
        <form className="card space-y-4">
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-midnight"
            placeholder={t("contact.namePlaceholder")}
          />
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-midnight"
            placeholder={t("contact.emailPlaceholder")}
          />
          <textarea
            rows={5}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-midnight"
            placeholder={t("contact.messagePlaceholder")}
          />
          <button className="btn-dark">{t("contact.send")}</button>
        </form>
      </div>
    </section>
  );
}
