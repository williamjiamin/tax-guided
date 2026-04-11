import { SUPPORTED_LOCALES, isLocale, type Locale } from "./types";

const COOKIE_KEY = "locale";
const LS_KEY = "locale";

/** Read saved locale from cookie or localStorage */
export function getSavedLocale(): Locale | null {
  // Cookie first
  if (typeof document !== "undefined") {
    const match = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE_KEY}=`));
    if (match) {
      const val = match.split("=")[1];
      if (isLocale(val)) return val;
    }
  }
  // localStorage fallback
  if (typeof localStorage !== "undefined") {
    const val = localStorage.getItem(LS_KEY);
    if (val && isLocale(val)) return val as Locale;
  }
  return null;
}

/** Persist locale choice */
export function saveLocale(locale: Locale) {
  if (typeof document !== "undefined") {
    document.cookie = `${COOKIE_KEY}=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
  }
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(LS_KEY, locale);
  }
}

/** Detect from browser navigator.language(s) */
export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const langs = navigator.languages ?? [navigator.language];
  for (const lang of langs) {
    const primary = lang.split("-")[0].toLowerCase();
    if (isLocale(primary)) return primary;
    // Handle zh-CN, zh-TW → zh
    if (primary === "zh") return "zh";
  }
  return "en";
}

/** Full detection chain: saved → browser → fallback "en" */
export function detectLocale(): Locale {
  return getSavedLocale() ?? detectBrowserLocale();
}
