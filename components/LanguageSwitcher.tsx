"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { localeLabels, locales, type Locale } from "@/lib/i18n/types";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm font-medium text-slate-700 outline-none focus:border-midnight"
        aria-label="Select language"
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
