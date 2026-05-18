"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function EmailCapture() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <div className="rounded-3xl bg-midnight p-8 text-white md:p-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan">{t("emailCapture.eyebrow")}</p>
          <h2 className="text-3xl font-black md:text-4xl">{t("emailCapture.title")}</h2>
          <p className="mt-3 max-w-2xl text-slate-300">{t("emailCapture.subtitle")}</p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder={t("emailCapture.placeholder")}
              className="w-full rounded-full border border-slate-500 bg-transparent px-5 py-3 outline-none placeholder:text-slate-400 focus:border-lime"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              {t("emailCapture.cta")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
