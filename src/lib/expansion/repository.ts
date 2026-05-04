import formsData from "../../../data/expansion/forms.json";
import statesData from "../../../data/expansion/states.json";
import historicalRatesData from "../../../data/expansion/historical-rates.json";
import glossaryData from "../../../data/expansion/glossary.json";
import complianceCalendarData from "../../../data/expansion/compliance-calendar.json";
import calculatorsData from "../../../data/expansion/calculators.json";
import treatiesData from "../../../data/expansion/treaties.json";
import statutesData from "../../../data/expansion/statutes.json";
import caseLawData from "../../../data/expansion/case-law.json";
import industryGuidesData from "../../../data/expansion/industry-guides.json";
import directoryRegistriesData from "../../../data/expansion/directory-registries.json";
import { getCountryName, getTaxTypeLabel } from "./constants";
import type {
  CalculatorDefinition,
  ComplianceDeadline,
  CountryCollectionSummary,
  DirectoryRegistry,
  GlossaryTerm,
  HistoricalRate,
  HistoricalSeriesSummary,
  IndustryGuide,
  StatuteSection,
  SubnationalTax,
  TaxCase,
  TaxForm,
  TaxTreaty,
} from "./types";

const FORMS = formsData as TaxForm[];
const STATES = statesData as SubnationalTax[];
const HISTORICAL_RATES = historicalRatesData as HistoricalRate[];
const GLOSSARY_TERMS = glossaryData as GlossaryTerm[];
const COMPLIANCE_DEADLINES = complianceCalendarData as ComplianceDeadline[];
const CALCULATORS = calculatorsData as CalculatorDefinition[];
const TREATIES = treatiesData as TaxTreaty[];
const STATUTES = statutesData as StatuteSection[];
const TAX_CASES = caseLawData as TaxCase[];
const INDUSTRY_GUIDES = industryGuidesData as IndustryGuide[];
const DIRECTORY_REGISTRIES = directoryRegistriesData as DirectoryRegistry[];

function sortByName<T extends { name?: string; state?: string; term?: string }>(
  left: T,
  right: T
): number {
  const leftLabel = left.name ?? left.state ?? left.term ?? "";
  const rightLabel = right.name ?? right.state ?? right.term ?? "";
  return leftLabel.localeCompare(rightLabel);
}

export function getForms(): TaxForm[] {
  return [...FORMS].sort((left, right) =>
    left.formNumber.localeCompare(right.formNumber, undefined, { numeric: true })
  );
}

export function getFormCountries(): CountryCollectionSummary[] {
  const counts = new Map<string, number>();
  for (const form of FORMS) {
    counts.set(form.country, (counts.get(form.country) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([code, count]) => ({
      code,
      name: getCountryName(code),
      count,
    }))
    .sort(sortByName);
}

export function getFormsByCountry(country: string): TaxForm[] {
  return getForms().filter((form) => form.country === country.toLowerCase());
}

export function getFormByCountryAndSlug(country: string, slug: string): TaxForm | null {
  return (
    FORMS.find(
      (form) =>
        form.country === country.toLowerCase() && form.slug.toLowerCase() === slug.toLowerCase()
    ) ?? null
  );
}

export function getStateCountries(): CountryCollectionSummary[] {
  const counts = new Map<string, number>();
  for (const state of STATES) {
    counts.set(state.country, (counts.get(state.country) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([code, count]) => ({
      code,
      name: getCountryName(code),
      count,
    }))
    .sort(sortByName);
}

export function getStates(): SubnationalTax[] {
  return [...STATES].sort((left, right) => left.state.localeCompare(right.state));
}

export function getStatesByCountry(country: string): SubnationalTax[] {
  return getStates().filter((state) => state.country === country.toLowerCase());
}

export function getStateById(id: string): SubnationalTax | null {
  return STATES.find((state) => state.id === id.toLowerCase()) ?? null;
}

export function isStateCountrySlug(slug: string): boolean {
  return getStatesByCountry(slug).length > 0;
}

export function getHistoricalSeriesSummaries(): HistoricalSeriesSummary[] {
  const seriesMap = new Map<string, HistoricalSeriesSummary>();

  for (const item of HISTORICAL_RATES) {
    const key = `${item.country}:${item.taxType}`;
    const existing = seriesMap.get(key);
    if (existing) {
      existing.years.push(item.year);
      existing.latestYear = Math.max(existing.latestYear, item.year);
      existing.count += 1;
      continue;
    }

    seriesMap.set(key, {
      country: item.country,
      countryName: getCountryName(item.country),
      taxType: item.taxType,
      label: getTaxTypeLabel(item.taxType),
      years: [item.year],
      latestYear: item.year,
      count: 1,
    });
  }

  return Array.from(seriesMap.values())
    .map((series) => ({
      ...series,
      years: series.years.sort((left, right) => left - right),
    }))
    .sort((left, right) => {
      if (left.countryName !== right.countryName) {
        return left.countryName.localeCompare(right.countryName);
      }

      return left.label.localeCompare(right.label);
    });
}

export function getHistoricalTimeline(country: string, taxType: string): HistoricalRate[] {
  return HISTORICAL_RATES.filter(
    (entry) => entry.country === country.toLowerCase() && entry.taxType === taxType
  ).sort((left, right) => left.year - right.year);
}

export function getHistoricalEntry(
  country: string,
  taxType: string,
  year: number
): HistoricalRate | null {
  return (
    HISTORICAL_RATES.find(
      (entry) =>
        entry.country === country.toLowerCase() &&
        entry.taxType === taxType &&
        entry.year === year
    ) ?? null
  );
}

export function getGlossaryTerms(): GlossaryTerm[] {
  return [...GLOSSARY_TERMS].sort((left, right) => left.term.localeCompare(right.term));
}

export function getGlossaryTerm(id: string): GlossaryTerm | null {
  return GLOSSARY_TERMS.find((term) => term.id === id) ?? null;
}

export function getComplianceDeadlines(): ComplianceDeadline[] {
  return [...COMPLIANCE_DEADLINES].sort((left, right) =>
    left.dueDate.localeCompare(right.dueDate)
  );
}

export function getComplianceDeadlinesByCountry(country: string): ComplianceDeadline[] {
  return getComplianceDeadlines().filter(
    (deadline) => deadline.country === country.toLowerCase()
  );
}

export function getComplianceCountries(): CountryCollectionSummary[] {
  const counts = new Map<string, number>();
  for (const deadline of COMPLIANCE_DEADLINES) {
    counts.set(deadline.country, (counts.get(deadline.country) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([code, count]) => ({
      code,
      name: getCountryName(code),
      count,
    }))
    .sort(sortByName);
}

export function getCalculators(): CalculatorDefinition[] {
  return [...CALCULATORS].sort((left, right) => left.title.localeCompare(right.title));
}

export function getCalculatorBySlug(slug: string): CalculatorDefinition | null {
  return CALCULATORS.find((calculator) => calculator.slug === slug.toLowerCase()) ?? null;
}

export function getTreaties(): TaxTreaty[] {
  return [...TREATIES].sort((left, right) => {
    const leftLabel = `${getCountryName(left.countryA)} ${getCountryName(left.countryB)}`;
    const rightLabel = `${getCountryName(right.countryA)} ${getCountryName(right.countryB)}`;
    return leftLabel.localeCompare(rightLabel);
  });
}

export function getTreatyBySlug(slug: string): TaxTreaty | null {
  return TREATIES.find((treaty) => (treaty.slug ?? treaty.id) === slug.toLowerCase()) ?? null;
}

export function getStatuteCountries(): CountryCollectionSummary[] {
  const counts = new Map<string, number>();
  for (const section of STATUTES) {
    counts.set(section.country, (counts.get(section.country) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([code, count]) => ({
      code,
      name: getCountryName(code),
      count,
    }))
    .sort(sortByName);
}

export function getStatutes(): StatuteSection[] {
  return [...STATUTES].sort((left, right) => {
    if (left.country !== right.country) {
      return left.country.localeCompare(right.country);
    }
    if (left.statute !== right.statute) {
      return left.statute.localeCompare(right.statute);
    }
    return left.section.localeCompare(right.section, undefined, { numeric: true });
  });
}

export function getStatuteCodesByCountry(country: string): string[] {
  return Array.from(
    new Set(
      STATUTES.filter((section) => section.country === country.toLowerCase()).map(
        (section) => section.statute
      )
    )
  ).sort();
}

export function getStatuteSections(country: string, statute: string): StatuteSection[] {
  return getStatutes().filter(
    (section) =>
      section.country === country.toLowerCase() && section.statute === statute.toLowerCase()
  );
}

export function getStatuteSection(
  country: string,
  statute: string,
  sectionId: string
): StatuteSection | null {
  return (
    STATUTES.find(
      (section) =>
        section.country === country.toLowerCase() &&
        section.statute === statute.toLowerCase() &&
        (section.slug ?? section.section).toLowerCase() === sectionId.toLowerCase()
    ) ?? null
  );
}

export function getTaxCases(): TaxCase[] {
  return [...TAX_CASES].sort((left, right) => left.decisionDate.localeCompare(right.decisionDate));
}

export function getCaseCourtsByCountry(country: string): CountryCollectionSummary[] {
  const counts = new Map<string, number>();
  for (const item of TAX_CASES.filter((entry) => entry.country === country.toLowerCase())) {
    counts.set(item.court, (counts.get(item.court) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({
      code: name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      name,
      count,
    }))
    .sort(sortByName);
}

function normalizeCourtSlug(court: string): string {
  return court.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getCasesByCourt(country: string, courtSlug: string): TaxCase[] {
  return getTaxCases().filter(
    (entry) =>
      entry.country === country.toLowerCase() && normalizeCourtSlug(entry.court) === courtSlug
  );
}

export function getCaseByPath(
  country: string,
  courtSlug: string,
  year: string,
  caseSlug: string
): TaxCase | null {
  return (
    TAX_CASES.find(
      (entry) =>
        entry.country === country.toLowerCase() &&
        normalizeCourtSlug(entry.court) === courtSlug &&
        entry.decisionDate.slice(0, 4) === year &&
        (entry.slug ?? entry.id).toLowerCase() === caseSlug.toLowerCase()
    ) ?? null
  );
}

export function getTaxCaseById(id: string): TaxCase | null {
  return TAX_CASES.find((entry) => entry.id === id) ?? null;
}

export function getIndustryCountries(): CountryCollectionSummary[] {
  const counts = new Map<string, number>();
  for (const guide of INDUSTRY_GUIDES) {
    counts.set(guide.country, (counts.get(guide.country) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([code, count]) => ({
      code,
      name: getCountryName(code),
      count,
    }))
    .sort(sortByName);
}

export function getIndustryGuides(): IndustryGuide[] {
  return [...INDUSTRY_GUIDES].sort((left, right) => left.title.localeCompare(right.title));
}

export function getIndustryGuidesByCountry(country: string): IndustryGuide[] {
  return getIndustryGuides().filter((guide) => guide.country === country.toLowerCase());
}

export function getIndustryGuide(
  country: string,
  industry: string
): IndustryGuide | null {
  return (
    INDUSTRY_GUIDES.find(
      (guide) =>
        guide.country === country.toLowerCase() &&
        (guide.slug ?? guide.industry).toLowerCase() === industry.toLowerCase()
    ) ?? null
  );
}

export function getDirectoryCountries(): CountryCollectionSummary[] {
  const counts = new Map<string, number>();
  for (const registry of DIRECTORY_REGISTRIES) {
    counts.set(registry.country, (counts.get(registry.country) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([code, count]) => ({
      code,
      name: getCountryName(code),
      count,
    }))
    .sort(sortByName);
}

export function getDirectoryRegistries(): DirectoryRegistry[] {
  return [...DIRECTORY_REGISTRIES].sort((left, right) => left.name.localeCompare(right.name));
}

export function getDirectoryRegistriesByCountry(country: string): DirectoryRegistry[] {
  return getDirectoryRegistries().filter((registry) => registry.country === country.toLowerCase());
}

export function getDirectoryRegistry(country: string, slug: string): DirectoryRegistry | null {
  return (
    DIRECTORY_REGISTRIES.find(
      (registry) =>
        registry.country === country.toLowerCase() && registry.slug === slug.toLowerCase()
    ) ?? null
  );
}

export function getExpansionCoverageSummary() {
  return {
    forms: FORMS.length,
    states: STATES.length,
    historicalRates: HISTORICAL_RATES.length,
    glossaryTerms: GLOSSARY_TERMS.length,
    deadlines: COMPLIANCE_DEADLINES.length,
    calculators: CALCULATORS.length,
    treaties: TREATIES.length,
    statutes: STATUTES.length,
    cases: TAX_CASES.length,
    industryGuides: INDUSTRY_GUIDES.length,
    directoryRegistries: DIRECTORY_REGISTRIES.length,
  };
}
