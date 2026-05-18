"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getLocalizedProduct } from "@/lib/i18n/getLocalizedProduct";
import { getMessages } from "@/lib/i18n/messages";
import { createTranslator, type TFunction } from "@/lib/i18n/translate";
import {
  defaultLocale,
  isLocale,
  isRtl,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/types";
import type { Product } from "@/lib/products";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TFunction;
  localizeProduct: (product: Product) => Product;
  translateBadge: (badge: string | undefined) => string | undefined;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored && isLocale(stored) ? stored : defaultLocale;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale === "fa" ? "fa-AF" : locale;
    document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
  }, [locale, isReady]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const messages = useMemo(() => getMessages(locale), [locale]);
  const t = useMemo(() => createTranslator(messages), [messages]);

  const localizeProduct = useCallback(
    (product: Product) => getLocalizedProduct(product, locale),
    [locale]
  );

  const translateBadge = useCallback(
    (badge: string | undefined) => {
      if (!badge) return undefined;
      const translated = messages.badges[badge as keyof typeof messages.badges];
      return translated ?? badge;
    },
    [messages]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, localizeProduct, translateBadge }),
    [locale, setLocale, t, localizeProduct, translateBadge]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
