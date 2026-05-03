// Editorial content aggregator for long-form guides, scenarios, shorts, and news

import {
  COUNTRY_AND_COMPARISON_GUIDES,
  type EditorialGuide,
} from "./guides-country-comparison";
import { BUSINESS_AND_TREATY_GUIDES } from "./guides-business-treaties";
import { FORMS_RATES_AND_NICHE_GUIDES } from "./guides-forms-rates-niche";
import { TAX_SCENARIOS, type TaxScenario } from "./scenarios-v2";
import { TAX_SHORTS, type TaxShort } from "./shorts-v2";
import { TAX_NEWS_AND_COMMENTARY, type NewsCommentaryItem } from "./news-commentary";
// AUTO-GENERATED daily by scripts/cross-project-drip.ts — fed by the
// foreignllctax.com cross-project router. See ./auto-news.ts header + CLAUDE.md.
import { AUTO_NEWS_COMMENTARY } from "./auto-news";

export type { EditorialGuide, TaxScenario, TaxShort, NewsCommentaryItem };

export const ALL_EDITORIAL_GUIDES: EditorialGuide[] = [
  ...COUNTRY_AND_COMPARISON_GUIDES,
  ...BUSINESS_AND_TREATY_GUIDES,
  ...FORMS_RATES_AND_NICHE_GUIDES,
];

export const ALL_TAX_SCENARIOS: TaxScenario[] = [...TAX_SCENARIOS];
export const ALL_TAX_SHORTS: TaxShort[] = [...TAX_SHORTS];
export const ALL_NEWS_COMMENTARY: NewsCommentaryItem[] = [
  ...TAX_NEWS_AND_COMMENTARY,
  ...AUTO_NEWS_COMMENTARY,
];

export function getEditorialGuideBySlug(slug: string): EditorialGuide | undefined {
  return ALL_EDITORIAL_GUIDES.find((g) => g.slug === slug);
}

export function getTaxScenarioBySlug(slug: string): TaxScenario | undefined {
  return ALL_TAX_SCENARIOS.find((s) => s.slug === slug);
}

export function getTaxShortBySlug(slug: string): TaxShort | undefined {
  return ALL_TAX_SHORTS.find((s) => s.slug === slug);
}

export function getNewsCommentaryBySlug(slug: string): NewsCommentaryItem | undefined {
  return ALL_NEWS_COMMENTARY.find((n) => n.slug === slug);
}
