export const SUPPORTED_LOCALES = [
  "en",
  "zh",
  "es",
  "pt",
  "hi",
  "ar",
  "fr",
  "de",
  "ja",
  "ko",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_META: Record<
  Locale,
  { label: string; nativeName: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", nativeName: "English", dir: "ltr" },
  zh: { label: "Chinese", nativeName: "中文", dir: "ltr" },
  es: { label: "Spanish", nativeName: "Español", dir: "ltr" },
  pt: { label: "Portuguese", nativeName: "Português", dir: "ltr" },
  hi: { label: "Hindi", nativeName: "हिन्दी", dir: "ltr" },
  ar: { label: "Arabic", nativeName: "العربية", dir: "rtl" },
  fr: { label: "French", nativeName: "Français", dir: "ltr" },
  de: { label: "German", nativeName: "Deutsch", dir: "ltr" },
  ja: { label: "Japanese", nativeName: "日本語", dir: "ltr" },
  ko: { label: "Korean", nativeName: "한국어", dir: "ltr" },
};

export function isLocale(val: string): val is Locale {
  return SUPPORTED_LOCALES.includes(val as Locale);
}
