/**
 * Dynamic article translation loading system.
 * Loads per-locale article translations from JSON files.
 * Falls back to English content when translations are unavailable.
 */
import type { ArticleContent } from "./articles";
import type { Locale } from "../i18n/types";

/** Cache loaded translation modules so we don't re-import */
const translationCache: Partial<
  Record<string, Record<string, ArticleContent>>
> = {};

/**
 * Load translated article content for a given video ID and locale.
 * Returns the English fallback if no translation is available.
 */
export async function loadTranslatedArticle(
  videoId: string,
  locale: Locale,
  englishFallback: ArticleContent
): Promise<ArticleContent> {
  if (locale === "en") return englishFallback;

  // Check cache first
  if (translationCache[locale]) {
    return translationCache[locale]![videoId] ?? englishFallback;
  }

  try {
    const res = await fetch(`/translations/${locale}.json`);
    if (!res.ok) return englishFallback;
    const data: Record<string, ArticleContent> = await res.json();
    translationCache[locale] = data;
    return data[videoId] ?? englishFallback;
  } catch {
    // No translation file for this locale — use English
    return englishFallback;
  }
}
