export interface CountryTaxData {
  name: string;
  slug: string;
  flag: string;
  hasTreaty: boolean;
  treatySummary: string;
  dividendRate: string;
  interestRate: string;
  royaltyRate: string;
  itinNeeded: string;
  localReporting: string;
  specialNotes: string;
  commonStates: string[];
  e2Eligible: boolean;
  localTaxAuthority: string;
}

export const COUNTRY_TAX_DATA: Record<string, CountryTaxData> = {
  china: {
    name: "China",
    slug: "china",
    flag: "\u{1F1E8}\u{1F1F3}",
    hasTreaty: true,
    treatySummary:
      "The US-China tax treaty covers business profits, dividends, interest, and royalties. Key provisions reduce withholding rates on cross-border income and provide mechanisms to avoid double taxation on business profits.",
    dividendRate: "10%",
    interestRate: "10%",
    royaltyRate: "10%",
    itinNeeded:
      "Usually needed. Chinese residents cannot obtain a US SSN, so an ITIN is required for US tax filing obligations.",
    localReporting:
      "China requires worldwide income reporting for tax residents. US LLC income must be reported to Chinese tax authorities (State Taxation Administration). A foreign tax credit may apply to offset US taxes paid against Chinese tax liability.",
    specialNotes:
      "Capital controls in China make transferring money to the US more complex. Chinese residents commonly use services like doola or Firstbase for LLC formation. Yuan-to-USD exchange considerations and SAFE (State Administration of Foreign Exchange) reporting requirements apply to cross-border fund transfers.",
    commonStates: ["Delaware", "Wyoming"],
    e2Eligible: false,
    localTaxAuthority: "State Taxation Administration (STA)",
  },
  india: {
    name: "India",
    slug: "india",
    flag: "\u{1F1EE}\u{1F1F3}",
    hasTreaty: true,
    treatySummary:
      "The US-India tax treaty (DTAA) provides relief from double taxation on dividends, interest, and royalties. It is one of the most commonly used treaties by foreign LLC owners due to the large number of Indian entrepreneurs forming US LLCs.",
    dividendRate: "15\u201325%",
    interestRate: "10\u201315%",
    royaltyRate: "10\u201315%",
    itinNeeded:
      "Usually needed. Indian residents typically do not have a US SSN and must apply for an ITIN to file US tax returns.",
    localReporting:
      "India taxes worldwide income of its residents. US LLC income must be reported in your Indian Income Tax Return (ITR). DTAA (Double Taxation Avoidance Agreement) relief is available. The Liberalized Remittance Scheme (LRS) allows fund transfers up to $250,000 per financial year.",
    specialNotes:
      "India is one of the most popular markets for US LLC formation, especially for IT services and SaaS businesses. RBI (Reserve Bank of India) reporting requirements apply to foreign investments. LRS limits and TCS (Tax Collected at Source) on foreign remittances should be factored into planning.",
    commonStates: ["Delaware", "Wyoming"],
    e2Eligible: false,
    localTaxAuthority: "Income Tax Department of India",
  },
  uk: {
    name: "United Kingdom",
    slug: "uk",
    flag: "\u{1F1EC}\u{1F1E7}",
    hasTreaty: true,
    treatySummary:
      "The US-UK tax treaty is one of the most comprehensive bilateral tax agreements. It provides strong protections against double taxation with favorable rates on dividends, and eliminates withholding on interest and royalties in many cases.",
    dividendRate: "0\u201315%",
    interestRate: "0%",
    royaltyRate: "0%",
    itinNeeded:
      "Usually needed. UK residents generally do not have a US SSN and must apply for an ITIN for US filing purposes.",
    localReporting:
      "HMRC (Her Majesty\u2019s Revenue and Customs) requires worldwide income reporting. US LLC income must be included in your Self-Assessment tax return. A US single-member LLC is treated as a transparent (disregarded) entity by HMRC.",
    specialNotes:
      "UK citizens are eligible for the E-2 Treaty Investor visa, which allows living and working in the US to manage a US business. The US-UK treaty offers some of the strongest benefits of any US tax treaty. UK residents can visit the US on ESTA for short business trips.",
    commonStates: ["Delaware", "Wyoming"],
    e2Eligible: true,
    localTaxAuthority: "HMRC (His Majesty\u2019s Revenue and Customs)",
  },
  canada: {
    name: "Canada",
    slug: "canada",
    flag: "\u{1F1E8}\u{1F1E6}",
    hasTreaty: true,
    treatySummary:
      "The US-Canada tax treaty is one of the strongest bilateral tax agreements. It provides comprehensive relief from double taxation with favorable rates across all income categories, reflecting the deep economic ties between the two countries.",
    dividendRate: "5\u201315%",
    interestRate: "0\u201310%",
    royaltyRate: "0\u201310%",
    itinNeeded:
      "Usually needed. Some Canadian residents may already have a US SSN if they previously worked in the US, but most will need an ITIN.",
    localReporting:
      "CRA (Canada Revenue Agency) requires worldwide income reporting. US LLC income is reported on your T1 return, and foreign income taxes paid are claimed via Form T2209. IMPORTANT: CRA may treat a US LLC as a corporation (not a flow-through entity), which can create different tax consequences than in the US.",
    specialNotes:
      "Geographic proximity means more frequent US business travel for Canadian LLC owners. TN visa is available for certain professions under USMCA. CRITICAL: CRA may classify a US LLC as a corporation rather than a pass-through entity, potentially creating double taxation. Canadian LLC owners should consult a cross-border CPA familiar with both US and Canadian tax treatment of LLCs.",
    commonStates: ["Delaware", "Wyoming"],
    e2Eligible: false,
    localTaxAuthority: "CRA (Canada Revenue Agency)",
  },
  germany: {
    name: "Germany",
    slug: "germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    hasTreaty: true,
    treatySummary:
      "The US-Germany tax treaty provides robust protection against double taxation. It offers favorable rates on dividends and eliminates withholding on interest and royalties in most cases.",
    dividendRate: "5\u201315%",
    interestRate: "0%",
    royaltyRate: "0%",
    itinNeeded:
      "Usually needed. German residents typically do not have a US SSN and must apply for an ITIN.",
    localReporting:
      "The Finanzamt (local tax office) requires worldwide income reporting. US LLC income must be reported in your Einkommensteuererkl\u00E4rung (income tax return). The Progressionsvorbehalt rule may apply, meaning foreign income can increase the tax rate on your German income even if it is exempt from German tax.",
    specialNotes:
      "German citizens are eligible for the E-2 Treaty Investor visa. Germany has a strong entrepreneur culture with growing interest in US LLC formation. If selling to EU customers from a US LLC, VAT (Mehrwertsteuer) considerations apply. German tax advisors (Steuerberater) familiar with US structures are recommended.",
    commonStates: ["Delaware", "Wyoming"],
    e2Eligible: true,
    localTaxAuthority: "Finanzamt (Local Tax Office)",
  },
  brazil: {
    name: "Brazil",
    slug: "brazil",
    flag: "\u{1F1E7}\u{1F1F7}",
    hasTreaty: false,
    treatySummary:
      "Brazil is one of the few major economies that does NOT have a tax treaty with the United States. This means there is no bilateral mechanism to reduce withholding rates or provide automatic relief from double taxation. Brazilian LLC owners face a higher risk of being taxed on the same income by both countries.",
    dividendRate: "N/A (no treaty)",
    interestRate: "N/A (no treaty)",
    royaltyRate: "N/A (no treaty)",
    itinNeeded:
      "Usually needed. Brazilian residents do not have a US SSN and must apply for an ITIN for US filing obligations.",
    localReporting:
      "Receita Federal (Brazilian Federal Revenue Service) requires worldwide income reporting. US LLC income must be declared in your IRPF (Imposto de Renda Pessoa F\u00EDsica) return. The marginal tax rate on foreign income can reach 27.5%. Without a treaty, there is no automatic foreign tax credit mechanism.",
    specialNotes:
      "The absence of a US-Brazil tax treaty is the most critical factor for Brazilian LLC owners. This creates a significant risk of double taxation that must be carefully managed with professional tax advice. Currency transfers to the US require Central Bank (Banco Central) reporting. The E-2 investor visa is NOT available to Brazilian nationals because there is no bilateral investment treaty.",
    commonStates: ["Delaware", "Wyoming", "Florida"],
    e2Eligible: false,
    localTaxAuthority: "Receita Federal (Federal Revenue Service)",
  },
  australia: {
    name: "Australia",
    slug: "australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    hasTreaty: true,
    treatySummary:
      "The US-Australia tax treaty provides comprehensive protection against double taxation with defined rates on dividends, interest, and royalties. Australia is a strong US ally with favorable treaty provisions.",
    dividendRate: "5\u201315%",
    interestRate: "10%",
    royaltyRate: "5%",
    itinNeeded:
      "Usually needed. Australian residents generally do not have a US SSN and must apply for an ITIN.",
    localReporting:
      "The ATO (Australian Taxation Office) requires worldwide income reporting. US LLC income must be included in your individual tax return. A foreign income tax offset is available to reduce Australian tax by the amount of US tax paid on the same income.",
    specialNotes:
      "Australian citizens are eligible for the E-2 Treaty Investor visa. The significant timezone difference (14\u201317 hours) can present challenges for real-time US business operations. Australia has a strong entrepreneurial market with growing interest in US LLC structures for international SaaS and e-commerce businesses.",
    commonStates: ["Delaware", "Wyoming"],
    e2Eligible: true,
    localTaxAuthority: "ATO (Australian Taxation Office)",
  },
  japan: {
    name: "Japan",
    slug: "japan",
    flag: "\u{1F1EF}\u{1F1F5}",
    hasTreaty: true,
    treatySummary:
      "The US-Japan tax treaty is a modern, comprehensive agreement that provides strong protections against double taxation. It offers some of the lowest withholding rates of any US tax treaty, with 0% on royalties and favorable rates on dividends and interest.",
    dividendRate: "0\u201310%",
    interestRate: "0\u201310%",
    royaltyRate: "0%",
    itinNeeded:
      "Usually needed. Japanese residents typically do not have a US SSN and must apply for an ITIN.",
    localReporting:
      "The NTA (National Tax Agency) requires worldwide income reporting. US LLC income must be reported through Kakutei Shinkoku (\u78BA\u5B9A\u7533\u544A) \u2014 the annual tax return. A foreign tax credit is available to offset US taxes paid.",
    specialNotes:
      "Japanese citizens are eligible for the E-2 Treaty Investor visa. Japan is a very active market for US LLC formation, particularly for e-commerce and digital service businesses. Language barriers may require bilingual tax professionals. Japanese tax advisors (Zeirishi) experienced with US structures are recommended.",
    commonStates: ["Delaware", "Wyoming"],
    e2Eligible: true,
    localTaxAuthority: "NTA (National Tax Agency / \u56FD\u7A0E\u5E81)",
  },
  "south-korea": {
    name: "South Korea",
    slug: "south-korea",
    flag: "\u{1F1F0}\u{1F1F7}",
    hasTreaty: true,
    treatySummary:
      "The US-Korea tax treaty provides protection against double taxation with defined withholding rates on dividends, interest, and royalties. It facilitates cross-border business between the two countries.",
    dividendRate: "10\u201315%",
    interestRate: "12%",
    royaltyRate: "10\u201315%",
    itinNeeded:
      "Usually needed. South Korean residents typically do not have a US SSN and must apply for an ITIN.",
    localReporting:
      "The NTS (National Tax Service) requires worldwide income reporting. US LLC income must be reported through \uC885\uD569\uC18C\uB4DD\uC138 \uC2E0\uACE0 (Comprehensive Income Tax Return). A foreign tax credit is available to offset US taxes paid on the same income.",
    specialNotes:
      "South Korean citizens are eligible for the E-2 Treaty Investor visa. South Korea has an active e-commerce and SaaS market, and Korean residents commonly form US LLCs for international business operations. Korean tax professionals (Segmusa) experienced with US structures can help navigate dual reporting requirements.",
    commonStates: ["Delaware", "Wyoming"],
    e2Eligible: true,
    localTaxAuthority: "NTS (National Tax Service / \uAD6D\uC138\uCCAD)",
  },
  mexico: {
    name: "Mexico",
    slug: "mexico",
    flag: "\u{1F1F2}\u{1F1FD}",
    hasTreaty: true,
    treatySummary:
      "The US-Mexico tax treaty provides protection against double taxation with defined rates on dividends, interest, and royalties. Geographic proximity and USMCA strengthen the economic relationship between the two countries.",
    dividendRate: "5\u201310%",
    interestRate: "4.9\u201315%",
    royaltyRate: "10%",
    itinNeeded:
      "Usually needed. Some Mexican residents may already have a US SSN if they previously worked in the US, but most will need an ITIN.",
    localReporting:
      "SAT (Servicio de Administraci\u00F3n Tributaria) requires worldwide income reporting. US LLC income must be declared in your ISR (Impuesto Sobre la Renta) return. A foreign tax credit is available to offset US taxes paid.",
    specialNotes:
      "Geographic proximity makes Mexico one of the most common countries for cross-border US business. TN visa is available for certain professions under USMCA. E-1 (Treaty Trader) and E-2 (Treaty Investor) visas are both available to Mexican nationals. Mexican residents near the border often maintain physical presence in both countries, which requires careful tax residency analysis.",
    commonStates: ["Delaware", "Wyoming", "Texas", "New Mexico"],
    e2Eligible: true,
    localTaxAuthority: "SAT (Servicio de Administraci\u00F3n Tributaria)",
  },
};

/** Get data for a country by slug, or undefined if not found */
export function getCountryTaxData(slug: string): CountryTaxData | undefined {
  return COUNTRY_TAX_DATA[slug];
}

/** Get all country slugs for generating static routes */
export function getAllCountrySlugs(): string[] {
  return Object.keys(COUNTRY_TAX_DATA);
}

/** Get all country data entries */
export function getAllCountryData(): CountryTaxData[] {
  return Object.values(COUNTRY_TAX_DATA);
}
