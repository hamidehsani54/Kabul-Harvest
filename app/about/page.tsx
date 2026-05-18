"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{t("about.eyebrow")}</p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">{t("about.title")}</h1>
          <p className="mt-4 text-slate-600">{t("about.p1")}</p>
          <p className="mt-4 text-slate-600">{t("about.p2")}</p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold">{t("about.whyTitle")}</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>- {t("about.why1")}</li>
            <li>- {t("about.why2")}</li>
            <li>- {t("about.why3")}</li>
            <li>- {t("about.why4")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
