"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Locale, type TranslationKey } from "@/lib/translations";

const RTL_LOCALES: Locale[] = ["ar", "he"];

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationKey;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "fr",
  setLocale: () => {},
  t: translations.fr as TranslationKey,
  isRTL: false,
});

export function LanguageProvider({
  children,
  defaultLocale = "fr",
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale] as TranslationKey,
        isRTL: RTL_LOCALES.includes(locale),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
