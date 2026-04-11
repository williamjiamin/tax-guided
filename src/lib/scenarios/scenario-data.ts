export interface ScenarioCheckpoint {
  headline: string;
  detail: string;
}

export interface OfficialLink {
  label: string;
  url: string;
}

export interface Scenario {
  id: string;
  title: string;
  formatLabel: string;
  audienceLabel: string;
  triggerQuestion: string;
  summary: string;
  whyThisMatters: string;
  commonMistake: string;
  nextMove: string;
  tags: string[];
  filters: string[];
  checkpoints: ScenarioCheckpoint[];
  officialLinks: OfficialLink[];
}

export const SCENARIO_FILTERS = [
  { id: "all", label: "All scenarios" },
  { id: "forms", label: "Forms" },
  { id: "platforms", label: "Platforms" },
  { id: "payouts", label: "Payouts" },
  { id: "records", label: "Records" },
  { id: "cross-border", label: "Cross-border" },
  { id: "year-round", label: "Year-round" },
];

export const SCENARIOS: Scenario[] = [
  {
    id: "youtube-us-tax-info",
    title: "YouTube creator outside the U.S. gets a tax form prompt",
    formatLabel: "Platform scenario",
    audienceLabel: "Non-U.S. YouTubers and AdSense creators",
    triggerQuestion: "Google is asking for U.S. tax info even though I do not live in the U.S. What am I actually supposed to do?",
    summary: "This is usually a platform-tax workflow problem before it becomes a filing problem. The right move is to identify which profile, form, and treaty path Google is asking for before guessing through the prompt.",
    whyThisMatters: "A rushed platform tax submission can create avoidable withholding, rejected forms, or a documentation mess later.",
    commonMistake: "Treating the YouTube prompt like a generic settings screen instead of a tax interview tied to specific IRS forms and year-end reporting.",
    nextMove: "Start with the YouTube help article and confirm which individual or entity tax form path applies before submitting anything.",
    tags: ["Creators", "Platforms", "Cross-border"],
    filters: ["platforms", "forms", "cross-border"],
    checkpoints: [
      { headline: "Confirm which Google payments profile is involved", detail: "The request is tied to the revenue-generating account and its legal profile, not just your public channel identity." },
      { headline: "Check whether Google is asking for W-9, W-8BEN, or another path", detail: "The correct tax form depends on whether the payee is a U.S. person, a non-U.S. individual, or an entity using a different IRS form workflow." },
      { headline: "Review treaty or withholding implications before submitting", detail: "If a treaty benefit could apply, you want the official instructions in front of you before accepting the default withholding result." },
      { headline: "Know which year-end form may arrive later", detail: "The submission step and the year-end reporting step are related but different. You may later need a 1042-S or another U.S. tax form for records." },
    ],
    officialLinks: [
      { label: "YouTube Help: submitting U.S. tax info", url: "https://support.google.com/youtube/answer/10390801" },
      { label: "YouTube Help: request year-end U.S. tax forms", url: "https://support.google.com/youtube/troubleshooter/7542675" },
      { label: "IRS Form W-8BEN", url: "https://www.irs.gov/forms-pubs/about-form-w-8-ben" },
      { label: "IRS Form 1042-S", url: "https://www.irs.gov/forms-pubs/about-form-1042-s" },
    ],
  },
  {
    id: "brand-deal-paperwork",
    title: "A sponsor asks for a W-9 before paying a creator",
    formatLabel: "Paperwork scenario",
    audienceLabel: "Creators landing brand deals and freelance campaigns",
    triggerQuestion: "Why is the brand asking for a W-9 now, and how is that different from whatever tax form shows up later?",
    summary: "This is the most common creator paperwork mix-up. The W-9 is usually setup information for the payer, while year-end reporting and your own recordkeeping happen on different clocks.",
    whyThisMatters: "Getting the setup form wrong can trigger backup withholding, corrected reporting, or a long cleanup loop when the payer prepares the year-end form.",
    commonMistake: "Assuming the W-9 is the final tax form or waiting for a platform or brand to reconstruct your income history for you.",
    nextMove: "Verify the W-9 and the likely year-end reporting form, then keep your own payment ledger instead of relying on the payer to explain your taxes.",
    tags: ["Creators", "Forms", "Payouts"],
    filters: ["forms", "payouts"],
    checkpoints: [
      { headline: "Treat the W-9 as a setup form", detail: "The payer is usually collecting your legal name and TIN so they can report payments correctly if a reporting form is required later." },
      { headline: "Separate the setup step from the reporting step", detail: "The W-9 does not calculate your tax. A later 1099-NEC or 1099-K may report payment activity depending on the workflow." },
      { headline: "Match names and taxpayer information exactly", detail: "Accuracy matters at the front door because mismatches can create corrected forms, withholding issues, or payout delays." },
      { headline: "Maintain your own gross receipts log", detail: "Even when a payer reports later, your own records should still show each invoice, payment date, and business purpose." },
    ],
    officialLinks: [
      { label: "IRS Form W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" },
      { label: "IRS Form 1099-NEC", url: "https://www.irs.gov/forms-pubs/about-form-1099-nec" },
      { label: "IRS Form 1099-K FAQs", url: "https://www.irs.gov/newsroom/form-1099-k-faqs" },
    ],
  },
  {
    id: "patreon-gross-vs-net",
    title: "Platform payout says one number, tax reporting may show another",
    formatLabel: "Payout scenario",
    audienceLabel: "Patreon and multi-platform subscription creators",
    triggerQuestion: "Patreon fees came out of the payout, so why might the tax form still reflect a bigger gross number?",
    summary: "Platform creators often focus on cash received, but some tax reporting workflows emphasize gross payments before fees, refunds, or platform deductions are netted down.",
    whyThisMatters: "If you only track the bank deposit amount, your books can stop matching platform dashboards and year-end forms.",
    commonMistake: "Using the bank deposit as the only tax record and forgetting that platform fees and gross receipts may need separate tracking.",
    nextMove: "Reconcile platform gross payments, fees, refunds, and net payouts in one ledger before filing season forces you to backfill it.",
    tags: ["Creators", "Platforms", "Records"],
    filters: ["platforms", "payouts", "records"],
    checkpoints: [
      { headline: "Start from the platform transaction report", detail: "Look for gross receipts, fees, taxes collected by the platform, chargebacks, and net payout timing in the dashboard export." },
      { headline: "Compare that report with 1099-K guidance", detail: "The reporting form can focus on gross payment amounts for goods or services rather than the smaller net number that hit your bank." },
      { headline: "Track fees as expenses instead of invisible shrinkage", detail: "When fees disappear into the net payout, you still need a record showing what was earned and what was paid out as expense." },
      { headline: "Document unusual items early", detail: "Refunds, failed charges, and cross-platform payouts are easier to explain when the reconciliation was done during the year instead of at filing time." },
    ],
    officialLinks: [
      { label: "Patreon creator tax FAQ", url: "https://support.patreon.com/hc/en-us/articles/207477063-Taxes-101-How-do-taxes-work-on-Patreon-" },
      { label: "IRS Form 1099-K FAQs", url: "https://www.irs.gov/newsroom/form-1099-k-faqs" },
      { label: "IRS self-employed tax center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" },
    ],
  },
  {
    id: "quarterly-cashflow",
    title: "A creator starts earning mid-year and nobody is withholding",
    formatLabel: "Cash-flow scenario",
    audienceLabel: "First-year creators, freelancers, and side-hustlers",
    triggerQuestion: "If no one is withholding taxes from my creator income, do I really need to think about tax before April?",
    summary: "This is the classic creator tax shock. The income looks spendable, but the tax system still expects a pay-as-you-go mindset once enough untaxed income starts landing.",
    whyThisMatters: "Quarterly tax habits reduce underpayment risk and prevent the year-end scramble that turns every payout into a surprise.",
    commonMistake: "Waiting until filing season to learn estimated taxes exist, then trying to reverse-engineer a year of income and cash spending.",
    nextMove: "Open the estimated tax guidance now, then create a same-day tax reserve habit for every untaxed payout.",
    tags: ["Creators", "Year-round", "Self-employed"],
    filters: ["year-round", "payouts"],
    checkpoints: [
      { headline: "Identify which payouts are landing without withholding", detail: "Creator platforms, sponsorships, and freelance invoices often show up as fully spendable cash even though tax still sits inside the payment." },
      { headline: "Check estimated tax guidance before the next quarter turns over", detail: "The relevant question is not whether you feel ready to file. It is whether the pay-as-you-go system expects a payment cycle earlier." },
      { headline: "Create a tax reserve rule", detail: "A separate tax bucket and a repeatable transfer habit are usually more useful than trying to perfectly forecast the final return all at once." },
      { headline: "Keep the records that support the cash story", detail: "Quarterly planning gets much easier when income and expenses are logged continuously instead of rebuilt from memory." },
    ],
    officialLinks: [
      { label: "IRS Form 1040-ES", url: "https://www.irs.gov/forms-pubs/about-form-1040-es" },
      { label: "IRS self-employed tax center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" },
      { label: "IRS filing and paying business taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/filing-and-paying-your-business-taxes" },
    ],
  },
  {
    id: "gear-writeoff-boundaries",
    title: "Creator gear, software, and home setups are not automatic write-offs",
    formatLabel: "Deduction scenario",
    audienceLabel: "Creators buying cameras, software, lighting, and home office gear",
    triggerQuestion: "If I use it to create content or it appears on camera, can I just deduct it?",
    summary: "Creator work makes personal and business use blur together fast. The safest starting point is to separate business purpose, exclusive-use rules, and documentation before assuming the write-off exists.",
    whyThisMatters: "Creators often mix personal lifestyle purchases with genuine business tools. The tax answer turns on facts and records, not on how expensive the purchase felt.",
    commonMistake: "Assuming every camera, trip, phone, room, or software subscription becomes deductible the second content is involved.",
    nextMove: "Start by documenting business use, then verify ordinary and necessary expense treatment and home office eligibility before claiming anything.",
    tags: ["Creators", "Records", "Deductions"],
    filters: ["records", "year-round"],
    checkpoints: [
      { headline: "Ask whether the expense has a clear business purpose", detail: "The more mixed the personal and business use story is, the more important contemporaneous documentation becomes." },
      { headline: "Separate equipment from workspace rules", detail: "A camera purchase and a home office claim rely on different analyses. A creator can have one without automatically qualifying for the other." },
      { headline: "Check exclusive-use rules before claiming home office", detail: "Working from home or filming in a room is not the same thing as meeting the business-use standard for the deduction." },
      { headline: "Keep invoices, usage notes, and records now", detail: "The tax story is stronger when the documentation existed when you made the purchase, not after you decided you wanted the deduction." },
    ],
    officialLinks: [
      { label: "IRS Publication 535", url: "https://www.irs.gov/forms-pubs/about-publication-535" },
      { label: "IRS simplified home office method", url: "https://www.irs.gov/businesses/small-businesses-self-employed/simplified-option-for-home-office-deduction" },
      { label: "IRS Publication 587", url: "https://www.irs.gov/publications/p587" },
    ],
  },
];
