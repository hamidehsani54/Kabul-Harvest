export const locales = ["en", "sv", "fa"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  sv: "Svenska",
  fa: "فارسی / دری",
};

export const defaultLocale: Locale = "en";
export const LOCALE_STORAGE_KEY = "kabul-harvest-locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isRtl(locale: Locale): boolean {
  return locale === "fa";
}
