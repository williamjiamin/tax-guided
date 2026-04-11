"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Locale } from "./types";
import { LOCALE_META } from "./types";
import { detectLocale, saveLocale } from "./detect";
import en from "./en";

type Translations = Record<string, unknown>;

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  dir: "ltr" | "rtl";
}

const LocaleCtx = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
  dir: "ltr",
});

/** Cache loaded translation modules so we don't re-import */
const translationCache: Partial<Record<Locale, Translations>> = {};

async function loadTranslations(locale: Locale): Promise<Translations> {
  if (locale === "en") return en as unknown as Translations;
  if (translationCache[locale]) return translationCache[locale]!;
  try {
    const mod = await import(`./locales/${locale}.json`);
    const data = mod.default ?? mod;
    translationCache[locale] = data;
    return data;
  } catch {
    return en as unknown as Translations;
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [translations, setTranslations] = useState<Translations>(
    en as unknown as Translations
  );
  const [hydrated, setHydrated] = useState(false);

  // Detect locale on mount (client only)
  useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    setHydrated(true);
  }, []);

  // Load translations when locale changes
  useEffect(() => {
    if (!hydrated) return;
    loadTranslations(locale).then(setTranslations);
    // Update document dir for RTL
    const dir = LOCALE_META[locale].dir;
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale, hydrated]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    saveLocale(l);
  }, []);

  const dir = LOCALE_META[locale].dir;

  return (
    <LocaleCtx.Provider value={{ locale, setLocale, dir }}>
      <TranslationProvider translations={translations} locale={locale}>
        {children}
      </TranslationProvider>
    </LocaleCtx.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleCtx);
}

// ── Translation context ──

interface TranslationContextValue {
  t: (key: string, vars?: Record<string, string | number>) => string;
  tDual: (key: string, vars?: Record<string, string | number>) => {
    original: string;
    translated: string;
  };
  locale: Locale;
}

const TranslationCtx = createContext<TranslationContextValue>({
  t: (key) => key,
  tDual: (key) => ({ original: key, translated: key }),
  locale: "en",
});

function getNestedValue(obj: unknown, path: string): string | undefined {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === "string" ? current : undefined;
}

function interpolate(
  str: string,
  vars?: Record<string, string | number>
): string {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] != null ? String(vars[key]) : `{${key}}`
  );
}

function TranslationProvider({
  translations,
  locale,
  children,
}: {
  translations: Translations;
  locale: Locale;
  children: ReactNode;
}) {
  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const translated = getNestedValue(translations, key);
      if (translated) return interpolate(translated, vars);
      // Fallback to English
      const fallback = getNestedValue(en, key);
      return fallback ? interpolate(fallback, vars) : key;
    },
    [translations]
  );

  const tDual = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const original = getNestedValue(en, key);
      const translated = getNestedValue(translations, key);
      return {
        original: original ? interpolate(original, vars) : key,
        translated: translated
          ? interpolate(translated, vars)
          : original
            ? interpolate(original, vars)
            : key,
      };
    },
    [translations]
  );

  return (
    <TranslationCtx.Provider value={{ t, tDual, locale }}>
      {children}
    </TranslationCtx.Provider>
  );
}

export function useT() {
  return useContext(TranslationCtx);
}
