// Single source of truth for all navigation items.
// Used by: MegaMenu, Header (mobile), ToolsPageClient, ServicesPageClient

export interface NavItem {
  labelKey: string;
  descKey: string;
  href: string;
  price?: string;
  badge?: string;
}

export interface NavCategory {
  id: string;
  labelKey: string;
  items: NavItem[];
}

// ── Mega Menu categories (desktop dropdown) ──
// Balanced 3 columns, max ~7 items each. Curated for quick access.
export const MEGA_MENU_CATEGORIES: NavCategory[] = [
  {
    id: "tools",
    labelKey: "nav.catTools",
    items: [
      { labelKey: "nav.quickCheckTitle", descKey: "nav.quickCheckDesc", href: "/tools/quick-tax-check", badge: "Popular" },
      { labelKey: "nav.selfEmployedHubTitle", descKey: "nav.selfEmployedHubDesc", href: "/tools/self-employed-tax-hub", badge: "New" },
      { labelKey: "nav.quizTitle", descKey: "nav.quizDesc", href: "/quiz" },
      { labelKey: "nav.formsWizardTitle", descKey: "nav.formsWizardDesc", href: "/tools/forms-wizard" },
      { labelKey: "nav.eciAssessmentTitle", descKey: "nav.eciAssessmentDesc", href: "/tools/eci-assessment" },
      { labelKey: "nav.extensionFastTrackTitle", descKey: "nav.extensionFastTrackDesc", href: "/tools/file-tax-extension" },
      { labelKey: "nav.salesTaxNexusTitle", descKey: "nav.salesTaxNexusDesc", href: "/tools/sales-tax-nexus" },
      { labelKey: "nav.itinOrEinTitle", descKey: "nav.itinOrEinDesc", href: "/tools/itin-or-ein" },
    ],
  },
  {
    id: "calculators",
    labelKey: "nav.catCalculators",
    items: [
      { labelKey: "nav.penaltyTitle", descKey: "nav.penaltyDesc", href: "/tools/penalty-calculator" },
      { labelKey: "nav.gigTaxTitle", descKey: "nav.gigTaxDesc", href: "/tools/gig-tax-set-aside", badge: "New" },
      { labelKey: "nav.withholdingTitle", descKey: "nav.withholdingDesc", href: "/tools/withholding-calculator" },
      { labelKey: "nav.costTitle", descKey: "nav.costDesc", href: "/tools/cost-comparison" },
      { labelKey: "nav.treatyTitle", descKey: "nav.treatyDesc", href: "/tools/treaty-lookup" },
      { labelKey: "nav.taxCalendarTitle", descKey: "nav.taxCalendarDesc", href: "/tools/tax-calendar" },
      { labelKey: "nav.checklistTitle", descKey: "nav.checklistDesc", href: "/tools/compliance-checklist" },
    ],
  },
  {
    id: "guides",
    labelKey: "nav.catGuides",
    items: [
      { labelKey: "nav.startBusinessTitle", descKey: "nav.startBusinessDesc", href: "/guides/start-your-business", badge: "Popular" },
      { labelKey: "nav.einTitle", descKey: "nav.einDesc", href: "/tools/ein-guide" },
      { labelKey: "nav.submitForm5472Title", descKey: "nav.submitForm5472Desc", href: "/guides/how-to-submit-form-5472" },
      { labelKey: "nav.boiReportTitle", descKey: "nav.boiReportDesc", href: "/guides/boi-report" },
      { labelKey: "nav.catchUpTitle", descKey: "nav.catchUpDesc", href: "/tools/catch-up" },
      { labelKey: "nav.form5472MistakesTitle", descKey: "nav.form5472MistakesDesc", href: "/guides/form-5472-common-mistakes", badge: "New" },
      { labelKey: "nav.filingSeasonTitle", descKey: "nav.filingSeasonDesc", href: "/guides/filing-season-playbook", badge: "New" },
      { labelKey: "nav.registerUsCompanyTitle", descKey: "nav.registerUsCompanyDesc", href: "/guides/register-us-company", badge: "New" },
    ],
  },
];

// ── Full categories (for /tools page, mobile nav, SEO) ──
// Contains ALL tools/guides including country and transfer guides.
export const TOOL_CATEGORIES: NavCategory[] = [
  {
    id: "assessments",
    labelKey: "nav.catAssessments",
    items: [
      { labelKey: "nav.quickCheckTitle", descKey: "nav.quickCheckDesc", href: "/tools/quick-tax-check", badge: "Popular" },
      { labelKey: "nav.selfEmployedHubTitle", descKey: "nav.selfEmployedHubDesc", href: "/tools/self-employed-tax-hub", badge: "New" },
      { labelKey: "nav.extensionFastTrackTitle", descKey: "nav.extensionFastTrackDesc", href: "/tools/file-tax-extension" },
      { labelKey: "nav.salesTaxNexusTitle", descKey: "nav.salesTaxNexusDesc", href: "/tools/sales-tax-nexus" },
      { labelKey: "nav.itinOrEinTitle", descKey: "nav.itinOrEinDesc", href: "/tools/itin-or-ein" },
      { labelKey: "nav.quizTitle", descKey: "nav.quizDesc", href: "/quiz", badge: "Popular" },
      { labelKey: "nav.formsWizardTitle", descKey: "nav.formsWizardDesc", href: "/tools/forms-wizard" },
      { labelKey: "nav.eciAssessmentTitle", descKey: "nav.eciAssessmentDesc", href: "/tools/eci-assessment" },
      { labelKey: "nav.entityAdvisorTitle", descKey: "nav.entityAdvisorDesc", href: "/tools/entity-advisor" },
      { labelKey: "nav.checklistTitle", descKey: "nav.checklistDesc", href: "/tools/compliance-checklist" },
    ],
  },
  {
    id: "calculators",
    labelKey: "nav.catCalculators",
    items: [
      { labelKey: "nav.gigTaxTitle", descKey: "nav.gigTaxDesc", href: "/tools/gig-tax-set-aside", badge: "New" },
      { labelKey: "nav.penaltyTitle", descKey: "nav.penaltyDesc", href: "/tools/penalty-calculator" },
      { labelKey: "nav.withholdingTitle", descKey: "nav.withholdingDesc", href: "/tools/withholding-calculator" },
      { labelKey: "nav.costTitle", descKey: "nav.costDesc", href: "/tools/cost-comparison" },
      { labelKey: "nav.treatyTitle", descKey: "nav.treatyDesc", href: "/tools/treaty-lookup" },
      { labelKey: "nav.taxCalendarTitle", descKey: "nav.taxCalendarDesc", href: "/tools/tax-calendar" },
    ],
  },
  {
    id: "guides",
    labelKey: "nav.catGuides",
    items: [
      { labelKey: "nav.einTitle", descKey: "nav.einDesc", href: "/tools/ein-guide" },
      { labelKey: "nav.refundStatusTitle", descKey: "nav.refundStatusDesc", href: "/tools/refund-status" },
      { labelKey: "nav.txCatTitle", descKey: "nav.txCatDesc", href: "/tools/transaction-categorizer" },
      { labelKey: "nav.catchUpTitle", descKey: "nav.catchUpDesc", href: "/tools/catch-up" },
      { labelKey: "nav.deadlineTitle", descKey: "nav.deadlineDesc", href: "/tools/deadline-reminder" },
      { labelKey: "nav.stateReportTitle", descKey: "nav.stateReportDesc", href: "/tools/state-report-guide" },
      { labelKey: "nav.startBusinessTitle", descKey: "nav.startBusinessDesc", href: "/guides/start-your-business" },
      { labelKey: "nav.boiReportTitle", descKey: "nav.boiReportDesc", href: "/guides/boi-report" },
      { labelKey: "nav.bankAccountTitle", descKey: "nav.bankAccountDesc", href: "/guides/us-bank-account" },
      { labelKey: "nav.submitForm5472Title", descKey: "nav.submitForm5472Desc", href: "/guides/how-to-submit-form-5472" },
      { labelKey: "nav.dissolutionTitle", descKey: "nav.dissolutionDesc", href: "/guides/llc-dissolution" },
      { labelKey: "nav.fbarTitle", descKey: "nav.fbarDesc", href: "/guides/fbar" },
      { labelKey: "nav.transferPricingTitle", descKey: "nav.transferPricingDesc", href: "/guides/transfer-pricing" },
      { labelKey: "nav.amendmentTitle", descKey: "nav.amendmentDesc", href: "/guides/form-5472-amendment" },
      { labelKey: "nav.b1VisaTitle", descKey: "nav.b1VisaDesc", href: "/guides/b1-visa" },
      { labelKey: "nav.e2VisaTitle", descKey: "nav.e2VisaDesc", href: "/guides/e2-visa" },
      { labelKey: "nav.greenCardTitle", descKey: "nav.greenCardDesc", href: "/guides/green-card-tax-transition" },
      // New guides
      { labelKey: "nav.bestStatesTitle", descKey: "nav.bestStatesDesc", href: "/guides/best-states-foreign-llc", badge: "New" },
      { labelKey: "nav.diyVsCpaTitle", descKey: "nav.diyVsCpaDesc", href: "/guides/diy-vs-cpa", badge: "New" },
      { labelKey: "nav.form5472MistakesTitle", descKey: "nav.form5472MistakesDesc", href: "/guides/form-5472-common-mistakes", badge: "New" },
      { labelKey: "nav.bookkeepingTitle", descKey: "nav.bookkeepingDesc", href: "/guides/foreign-llc-bookkeeping", badge: "New" },
      { labelKey: "nav.monthlyComplianceTitle", descKey: "nav.monthlyComplianceDesc", href: "/guides/monthly-compliance-routine", badge: "New" },
      { labelKey: "nav.filingSeasonTitle", descKey: "nav.filingSeasonDesc", href: "/guides/filing-season-playbook", badge: "New" },
      { labelKey: "nav.multipleLlcsTitle", descKey: "nav.multipleLlcsDesc", href: "/guides/multiple-llcs", badge: "New" },
      { labelKey: "nav.privacyGuideTitle", descKey: "nav.privacyGuideDesc", href: "/guides/llc-privacy-guide", badge: "New" },

      // Advanced / risk-awareness guides
      { labelKey: "nav.ustbRiskTitle", descKey: "nav.ustbRiskDesc", href: "/guides/ustb-risk", badge: "New" },
      { labelKey: "nav.form1120CCorpTitle", descKey: "nav.form1120CCorpDesc", href: "/guides/form-1120-c-corp", badge: "New" },
      { labelKey: "nav.w8benTrapTitle", descKey: "nav.w8benTrapDesc", href: "/guides/w8ben-brokerage-trap", badge: "New" },
      { labelKey: "nav.irsCountryCodesTitle", descKey: "nav.irsCountryCodesDesc", href: "/guides/irs-country-codes", badge: "New" },
      { labelKey: "nav.recordKeeping5472Title", descKey: "nav.recordKeeping5472Desc", href: "/guides/record-keeping-5472", badge: "New" },
      { labelKey: "nav.protectiveFiling1120fTitle", descKey: "nav.protectiveFiling1120fDesc", href: "/guides/protective-filing-1120f", badge: "New" },
      { labelKey: "nav.form5472NuancesTitle", descKey: "nav.form5472NuancesDesc", href: "/guides/form-5472-nuances", badge: "New" },

      // State compliance guides
      { labelKey: "nav.delawareFranchiseTaxTitle", descKey: "nav.delawareFranchiseTaxDesc", href: "/guides/delaware-franchise-tax", badge: "New" },
      { labelKey: "nav.wyomingAnnualReportTitle", descKey: "nav.wyomingAnnualReportDesc", href: "/guides/wyoming-annual-report", badge: "New" },

      // Business operations guides
      { labelKey: "nav.registerUsCompanyTitle", descKey: "nav.registerUsCompanyDesc", href: "/guides/register-us-company", badge: "New" },
      { labelKey: "nav.mercuryBankTitle", descKey: "nav.mercuryBankDesc", href: "/guides/mercury-bank-guide", badge: "New" },
      { labelKey: "nav.usPhoneNumberTitle", descKey: "nav.usPhoneNumberDesc", href: "/guides/us-phone-number", badge: "New" },
      { labelKey: "nav.stripeSetupTitle", descKey: "nav.stripeSetupDesc", href: "/guides/stripe-setup", badge: "New" },
      { labelKey: "nav.stripeAccountTipsTitle", descKey: "nav.stripeAccountTipsDesc", href: "/guides/stripe-account-tips", badge: "New" },
      { labelKey: "nav.crossBorderPaymentsTitle", descKey: "nav.crossBorderPaymentsDesc", href: "/guides/cross-border-payments", badge: "New" },
      { labelKey: "nav.companyWithdrawalTitle", descKey: "nav.companyWithdrawalDesc", href: "/guides/company-to-personal-withdrawal", badge: "New" },

      // 1040-NR expansion guides
      { labelKey: "nav.investVsBusinessTitle", descKey: "nav.investVsBusinessDesc", href: "/guides/investment-vs-business-llc", badge: "New" },
      { labelKey: "nav.when1040NrTitle", descKey: "nav.when1040NrDesc", href: "/guides/when-1040-nr", badge: "New" },
      { labelKey: "nav.combined1040Nr5472Title", descKey: "nav.combined1040Nr5472Desc", href: "/guides/1040nr-5472-combined", badge: "New" },
      { labelKey: "nav.fedSupportStmtTitle", descKey: "nav.fedSupportStmtDesc", href: "/guides/federal-supporting-statements", badge: "New" },
      { labelKey: "nav.form1042STitle", descKey: "nav.form1042SDesc", href: "/guides/form-1042-s", badge: "New" },
      { labelKey: "nav.itin1040NrTitle", descKey: "nav.itin1040NrDesc", href: "/guides/itin-1040nr-connection", badge: "New" },
    ],
  },
  {
    id: "country-guides",
    labelKey: "nav.catCountryGuides",
    items: [
      { labelKey: "nav.llcTaxChinaTitle", descKey: "nav.llcTaxChinaDesc", href: "/guides/llc-tax-china" },
      { labelKey: "nav.llcTaxIndiaTitle", descKey: "nav.llcTaxIndiaDesc", href: "/guides/llc-tax-india" },
      { labelKey: "nav.llcTaxUkTitle", descKey: "nav.llcTaxUkDesc", href: "/guides/llc-tax-uk" },
      { labelKey: "nav.llcTaxCanadaTitle", descKey: "nav.llcTaxCanadaDesc", href: "/guides/llc-tax-canada" },
      { labelKey: "nav.llcTaxGermanyTitle", descKey: "nav.llcTaxGermanyDesc", href: "/guides/llc-tax-germany" },
      { labelKey: "nav.llcTaxBrazilTitle", descKey: "nav.llcTaxBrazilDesc", href: "/guides/llc-tax-brazil" },
      { labelKey: "nav.llcTaxAustraliaTitle", descKey: "nav.llcTaxAustraliaDesc", href: "/guides/llc-tax-australia" },
      { labelKey: "nav.llcTaxJapanTitle", descKey: "nav.llcTaxJapanDesc", href: "/guides/llc-tax-japan" },
      { labelKey: "nav.llcTaxSouthKoreaTitle", descKey: "nav.llcTaxSouthKoreaDesc", href: "/guides/llc-tax-south-korea" },
      { labelKey: "nav.llcTaxMexicoTitle", descKey: "nav.llcTaxMexicoDesc", href: "/guides/llc-tax-mexico" },
    ],
  },
  {
    id: "transfer-guides",
    labelKey: "nav.catTransferGuides",
    items: [
      { labelKey: "nav.transferChinaTitle", descKey: "nav.transferChinaDesc", href: "/guides/transfer-china" },
      { labelKey: "nav.transferIndiaTitle", descKey: "nav.transferIndiaDesc", href: "/guides/transfer-india" },
      { labelKey: "nav.transferUkTitle", descKey: "nav.transferUkDesc", href: "/guides/transfer-uk" },
      { labelKey: "nav.transferCanadaTitle", descKey: "nav.transferCanadaDesc", href: "/guides/transfer-canada" },
      { labelKey: "nav.transferJapanTitle", descKey: "nav.transferJapanDesc", href: "/guides/transfer-japan" },
      { labelKey: "nav.transferAustraliaTitle", descKey: "nav.transferAustraliaDesc", href: "/guides/transfer-australia" },
      { labelKey: "nav.transferSingaporeTitle", descKey: "nav.transferSingaporeDesc", href: "/guides/transfer-singapore" },
      { labelKey: "nav.transferGermanyTitle", descKey: "nav.transferGermanyDesc", href: "/guides/transfer-germany" },
      { labelKey: "nav.transferBrazilTitle", descKey: "nav.transferBrazilDesc", href: "/guides/transfer-brazil" },
      { labelKey: "nav.transferMexicoTitle", descKey: "nav.transferMexicoDesc", href: "/guides/transfer-mexico" },
    ],
  },
];

export const FILING_SERVICES: NavItem[] = [
  { labelKey: "nav.svcSingleTitle", descKey: "nav.svcSingleDesc", href: "/filer", price: "$49", badge: "Most Popular" },
  { labelKey: "nav.svcPartnershipTitle", descKey: "nav.svcPartnershipDesc", href: "/services/partnership-filing", price: "$199" },
  { labelKey: "nav.svcEciTitle", descKey: "nav.svcEciDesc", href: "/services/eci-filing", price: "$99" },
  { labelKey: "nav.svcItinTitle", descKey: "nav.svcItinDesc", href: "/services/itin-application", price: "$99" },
  { labelKey: "nav.svcSs4Title", descKey: "nav.svcSs4Desc", href: "/services/ss4-application", price: "$49" },
];

export const OTHER_SERVICES: NavItem[] = [
  { labelKey: "nav.svcReminderTitle", descKey: "nav.svcReminderDesc", href: "/services/annual-reminder", price: "$19/yr" },
  { labelKey: "nav.svcConsultTitle", descKey: "nav.svcConsultDesc", href: "/consultation", price: "$50" },
];
