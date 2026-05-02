export interface Source {
  label: string;
  url: string;
  verifiedAt?: string;
}

export interface HistoricalRevision {
  year: number;
  pdfUrl: string;
}

export type FilingMethod = "paper" | "efile" | "fax";

export interface TaxForm {
  id: string;
  slug: string;
  country: string;
  authority: string;
  formNumber: string;
  formName: string;
  description: string;
  category: string;
  currentRevisionYear: number;
  pdfUrl: string;
  instructionsUrl: string | null;
  filingMethod: FilingMethod[];
  whoMustFile: string;
  dueDates: Array<{
    description: string;
    date: string;
    extension: string | null;
  }>;
  penalty: string | null;
  practicalOverview?: string;
  practicalSteps?: string[];
  relatedForms: string[];
  relatedGuides: string[];
  historicalRevisions: HistoricalRevision[];
  lastUpdated: string;
  storageKey?: string;
  sources: Source[];
}

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
  filingStatus?: "single" | "mfj" | "mfs" | "hoh";
}

export interface SubnationalTax {
  id: string;
  country: string;
  state: string;
  code: string;
  slug?: string;
  authority: {
    name: string;
    url: string;
  };
  individualTax: {
    hasOwnTax: boolean;
    type: "flat" | "progressive" | "none";
    brackets?: TaxBracket[];
    standardDeduction?: number;
    currency: string;
    notes?: string;
  };
  corporateTax: {
    hasOwnTax: boolean;
    rate?: number;
    notes: string;
  };
  salesTax: {
    hasOwnTax: boolean;
    rate?: number;
    type: "VAT" | "GST" | "sales" | "use" | "none";
    nexusRules: string;
    notes?: string;
  };
  propertyTax: {
    rate: string;
    notes: string;
  };
  inheritanceTax: {
    hasOwnTax: boolean;
    rate?: number;
  };
  filingDeadline: string;
  overview?: string;
  practicalPointers?: string[];
  forms: string[];
  taxYear: string;
  storageKey?: string;
  sources: Source[];
}

export interface HistoricalRate {
  id: string;
  country: string;
  taxType: string;
  year: number;
  brackets: TaxBracket[];
  inflationAdjustedTo2026: TaxBracket[];
  tableHeaders?: string[];
  tableRows?: string[][];
  enactingLegislation: {
    name: string;
    citation: string;
    url: string;
  };
  notes: string;
  sources: Source[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  slug?: string;
  shortDefinition: string;
  fullDefinition: string;
  examples: string[];
  relatedTerms: string[];
  translations: Record<string, string>;
  jurisdictions: string[];
  cites: Array<{ statute: string; section: string }>;
  sources: Source[];
}

export interface ComplianceDeadline {
  id: string;
  country: string;
  jurisdiction: string;
  taxType: string;
  description: string;
  dueDate: string;
  affectedTaxpayers: string[];
  formsRequired: string[];
  extensionAvailable: boolean;
  extensionForm: string | null;
  penalty: string;
  sources: Source[];
}

export interface TaxTreaty {
  id: string;
  slug?: string;
  countryA: string;
  countryB: string;
  signedDate: string;
  effectiveDate: string;
  protocolDates: string[];
  fullTextUrl: string;
  fullTextHtmlUrl: string | null;
  withholdingMatrix: {
    dividends: { individualRate: number; corporateRate: number; conditions: string };
    interest: { rate: number; exceptions: string };
    royalties: { rate: number; type: string };
    technicalServices: number | null;
  };
  articles: Array<{
    number: number;
    title: string;
    summary: string;
    fullText: string;
  }>;
  permanentEstablishment: {
    constructionThreshold: string;
    serviceThreshold: string | null;
    dependentAgentRules: string;
  };
  capitalGains: {
    realEstateCarveOut: boolean;
    substantialShareholding: boolean;
  };
  pensions: {
    taxedIn: "source" | "residence" | "split";
    notes: string;
  };
  studentClause: boolean;
  teachersClause: boolean;
  exchangeOfInformation: boolean;
  mli: {
    covered: boolean;
    mliEffectiveDate: string | null;
  };
  lastUpdated: string;
  sources: Source[];
}

export interface StatuteSection {
  id: string;
  slug?: string;
  country: string;
  statute: string;
  section: string;
  subsection: string | null;
  title: string;
  fullText: string;
  effectiveDate: string | null;
  amendmentHistory: Array<{
    date: string;
    publicLaw?: string;
    description: string;
  }>;
  crossReferences: string[];
  treasuryRegs: string[];
  caseLaw: string[];
  guidesOnSite: string[];
  lastUpdated: string;
  sources: Source[];
}

export interface TaxCase {
  id: string;
  slug?: string;
  country: string;
  court: string;
  citation: string;
  caseName: string;
  decisionDate: string;
  judges: string[];
  parties: {
    taxpayer: string;
    respondent: string;
  };
  taxYears: number[];
  amountInDispute: number | null;
  holding: string;
  facts: string;
  reasoning: string;
  outcome: "for-taxpayer" | "for-government" | "split" | "remanded";
  statutesApplied: string[];
  formsInvolved: string[];
  topics: string[];
  fullDecisionUrl: string;
  fullDecisionPdfUrl: string | null;
  appealHistory: Array<{ court: string; outcome: string; citation: string }>;
  citingCases: string[];
  citedCases: string[];
  sources: Source[];
}

export interface IndustryGuide {
  id: string;
  slug?: string;
  country: string;
  industry: string;
  naicsCode?: string;
  title: string;
  sections: Array<{ heading: string; body: string }>;
  keyForms: string[];
  keyDeductions: string[];
  commonPitfalls: string[];
  recentChanges: Array<{ date: string; description: string }>;
  sources: Source[];
}

export interface Practitioner {
  id: string;
  fullName: string;
  firmName: string;
  credentials: string[];
  countries: string[];
  states: string[];
  specialties: string[];
  languages: string[];
  contact: {
    email?: string;
    phone?: string;
    website?: string;
  };
  registryUrl: string;
  registryStatus: "active" | "inactive" | "suspended";
  yearsLicensed: number;
  fees: {
    hourly?: string;
    flatFee?: string;
  };
  reviewCount: number;
  averageRating: number | null;
}

export interface CalculatorDefinition {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  formulas: string[];
  caution: string;
  sources: Source[];
}

export interface DirectoryRegistry {
  id: string;
  slug: string;
  country: string;
  authority: string;
  name: string;
  officialUrl: string;
  description: string;
  coverage: string;
  whatToCapture: string[];
  caveats: string[];
  updateCadence: string;
  sources: Source[];
}

export interface CountryCollectionSummary {
  code: string;
  name: string;
  count: number;
}

export interface HistoricalSeriesSummary {
  country: string;
  countryName: string;
  taxType: string;
  label: string;
  years: number[];
  latestYear: number;
  count: number;
}
