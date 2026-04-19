// Editorial tax scenarios — auto-extracted from Codex output
export interface TaxScenario {
  id: string;
  slug: string;
  title: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  situation: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  actionChecklist: string[];
  sources: Array<{
    label: string;
    url: string;
  }>;
}

export const TAX_SCENARIOS: TaxScenario[] = [
  {
    id: "sc-us-france-feie-ftc",
    slug: "us-citizen-in-france-feie-vs-foreign-tax-credit",
    title: "U.S. citizen in France trying to decide between the foreign earned income exclusion and the foreign tax credit",
    summary: "A U.S. citizen moved to France for a salaried role, has French payroll tax withholding, and assumes the French tax bill automatically solves the U.S. side too.",
    seoTitle: "Scenario: U.S. citizen in France choosing FEIE vs foreign tax credit",
    seoDescription: "A practical U.S.-France expat scenario explaining when FEIE and the foreign tax credit differ and why the U.S. return still matters.",
    situation: "Taylor moved from Austin to Paris in January 2025, works for a French employer, and will clearly pay French tax through payroll. Taylor's first instinct is to ignore the U.S. side because France is already taxing the salary and the employer is withholding there.",
    sections: [
      {
        heading: "What matters first",
        body: `The IRS does not start from the idea that foreign payroll withholding switches off the U.S. return. Publication 54 starts from worldwide taxation for U.S. citizens abroad. That means Taylor still has a U.S. filing problem to solve even before choosing a relief method. The relief choice comes after that starting point, not instead of it.`,
      },
      {
        heading: "What the decision really is",
        body: `The practical fork is between excluding qualifying foreign earned income under the FEIE rules or using foreign tax paid to reduce U.S. tax through the foreign tax credit. The IRS makes clear that these are different mechanisms, and Publication 514 matters because the same excluded income cannot also support a foreign tax credit. Taylor is not choosing between two identical coupons. Taylor is choosing between two different ways of dealing with the same cross-border salary stream.`,
      },
      {
        heading: "What the next step should look like",
        body: `Taylor needs to run the same salary facts through both methods before filing. If the French tax is high relative to the U.S. result, the credit route may be more compelling. If the key fact is qualifying foreign earned income and the relevant exclusion tests are met, the FEIE may matter more. Either way, the annual U.S. return still has to be handled properly rather than being abandoned because France taxed the wages first.`,
      },
    ],
    actionChecklist: [
      "Confirm whether the taxpayer qualifies for the FEIE rules under the IRS tests in Publication 54.",
      "Model the salary once under the FEIE approach and once under the foreign tax credit approach.",
      "Do not claim a foreign tax credit on income already excluded under the FEIE.",
      "Treat the U.S. return as required compliance, not as optional paperwork after foreign withholding.",
    ],
    sources: [
      {
        label: "Publication 54",
        url: "https://www.irs.gov/publications/p54",
      },
      {
        label: "Foreign Tax Credit",
        url: "https://www.irs.gov/individuals/international-taxpayers/foreign-tax-credit",
      },
      {
        label: "Publication 514",
        url: "https://www.irs.gov/publications/p514",
      },
    ],
  },
  {
    id: "sc-non-eu-saas-oss",
    slug: "non-eu-saas-company-using-eu-oss",
    title: "Non-EU SaaS company selling subscriptions to consumers in France, Germany and Spain",
    summary: "A software founder outside the EU wants one VAT registration and assumes that means one VAT rate as well.",
    seoTitle: "Scenario: Non-EU SaaS company using the EU VAT OSS",
    seoDescription: "A practical scenario for non-EU SaaS founders using the EU VAT OSS while still charging VAT at the customer's country rate.",
    situation: "A Singapore SaaS business sells low-ticket subscriptions directly to consumers in several EU countries. The founder wants to avoid multiple VAT registrations and assumes the one-stop shop means there is now one EU-wide VAT percentage to charge everyone.",
    sections: [
      {
        heading: "What matters first",
        body: `The official EU guidance is clear that a non-EU business with no EU fixed establishment can use the non-Union OSS for covered B2C services supplied to EU consumers. So the founder is right that the EU offers an administrative simplification. But the same guidance also says VAT is charged at the rate of the customer's country. The reporting portal becomes centralised. The VAT destination rule does not.`,
      },
      {
        heading: "Where founders usually get this wrong",
        body: `The misunderstanding is treating OSS as if it solves the tax analysis itself. It does not. The business still has to identify whether the sale is B2C rather than B2B, whether the supply falls within the scope of the scheme being used, and which member state's VAT rate applies based on the customer's location. One registration helps with filing and payment. It does not erase place-of-supply thinking.`,
      },
      {
        heading: "What the next step should look like",
        body: `The founder should choose the member state of identification, set up invoicing and evidence collection around customer location, and build a quarterly reporting routine around the non-Union OSS. The operational mindset is one portal, many consumer-country VAT obligations. That framing is much safer than assuming the EU now behaves like one domestic tax jurisdiction for the SaaS business.`,
      },
    ],
    actionChecklist: [
      "Confirm the business has no EU fixed establishment and that the non-Union OSS is the right scheme.",
      "Separate B2C sales from B2B sales before deciding what goes into OSS.",
      "Charge VAT at the customer's member-state rate, not one self-invented EU average rate.",
      "Keep scheme records long enough to satisfy the EU OSS retention rules.",
    ],
    sources: [
      {
        label: "EU VAT One Stop Shop (OSS)",
        url: "https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm",
      },
      {
        label: "One-Stop Shop portal information",
        url: "https://vat-one-stop-shop.ec.europa.eu/one-stop-shop_en",
      },
    ],
  },
  {
    id: "sc-uk-marketplace-stock",
    slug: "overseas-marketplace-seller-with-stock-in-the-uk",
    title: "Overseas e-commerce seller using a marketplace while some stock is already in the UK",
    summary: "A non-UK seller thinks the marketplace completely takes over VAT once the products are listed on a major platform.",
    seoTitle: "Scenario: Overseas seller using a UK marketplace with stock already in the UK",
    seoDescription: "A practical marketplace VAT scenario showing when HMRC treats the platform as liable and what the overseas seller still has to handle.",
    situation: "A seller based in Hong Kong uses a marketplace to sell small consumer goods to UK customers. Some goods are shipped directly per order, but some are already stored in the UK through a fulfilment arrangement. The founder keeps repeating that 'the marketplace does the VAT now' and has stopped thinking about the rest of the workflow.",
    sections: [
      {
        heading: "What matters first",
        body: `HMRC's guidance splits the problem by inventory location and consignment structure. For consignments of £135 or less sold through a marketplace, the marketplace often accounts for VAT at the point of sale. HMRC also says online marketplaces are liable for VAT on goods already in the UK at the point of sale when sold by a seller not established in the UK. So the founder is partly right that the platform can carry the VAT-accounting burden in important cases.`,
      },
      {
        heading: "What still does not disappear",
        body: `The same HMRC material also says the seller can still be liable for import VAT and customs duty at the point goods are imported into the UK. It also leaves open registration and exemption questions for overseas sellers depending on their facts. That means marketplace liability for output VAT on a sale does not automatically clean up everything upstream and downstream.`,
      },
      {
        heading: "What the next step should look like",
        body: `The founder needs a map of where stock sits, how consignments are structured, whether sales are marketplace sales or direct sales, and who the customer is. This is not a one-sentence marketplace problem. It is an inventory, import and VAT-liability workflow. Once the founder sees it that way, the UK compliance picture becomes much less mysterious.`,
      },
    ],
    actionChecklist: [
      "Map stock held outside the UK separately from stock already in the UK.",
      "Test whether the sale falls within the marketplace rules for consignments of £135 or less.",
      "Check import VAT and customs obligations separately from sale-stage VAT treatment.",
      "Do not assume marketplace liability means the overseas seller has no registration or compliance tasks left.",
    ],
    sources: [
      {
        label: "VAT and overseas goods sold to customers in the UK using online marketplaces",
        url: "https://www.gov.uk/guidance/vat-and-overseas-goods-sold-to-customers-in-the-uk-using-online-marketplaces",
      },
      {
        label: "Businesses selling goods in the UK using online marketplaces",
        url: "https://www.gov.uk/guidance/vat-overseas-businesses-using-an-online-marketplace-to-sell-goods-in-the-uk",
      },
    ],
  },
  {
    id: "sc-uk-crypto-receipt-disposal",
    slug: "uk-crypto-user-receives-and-later-sells-tokens",
    title: "UK crypto user receives staking rewards and later disposes of part of the holding",
    summary: "A taxpayer thinks crypto will only be taxed once, at the moment cash finally hits the bank account.",
    seoTitle: "Scenario: UK crypto user receiving and later selling tokens",
    seoDescription: "A UK crypto scenario showing how HMRC can tax receipt as income and later disposal as a capital gains event.",
    situation: "A UK resident receives tokens through staking in 2025, leaves them in the wallet, and later sells part of the holding in 2026 after the price rises. The taxpayer thinks only the sale matters because no pounds sterling were received when the tokens first appeared.",
    sections: [
      {
        heading: "What matters first",
        body: `HMRC's guidance does not wait for a bank withdrawal to take tax seriously. If tokens are received through staking and the person is not carrying on a trade, HMRC generally treats the value on receipt as taxable income. So the tax lifecycle may begin at the point of receipt, not only at the point of disposal.`,
      },
      {
        heading: "Why the later sale is still a second tax event",
        body: `When the taxpayer later sells, exchanges or otherwise disposes of the tokens, HMRC says Capital Gains Tax may apply to the increase in value since acquisition. That means one set of tokens can pass through two different tax moments over time: income treatment on receipt and capital-gains treatment on disposal. The events are connected, but they are not collapsed into one simple 'cash-out tax'.`,
      },
      {
        heading: "What the next step should look like",
        body: `The taxpayer needs to rebuild a clean record trail from receipt date to disposal date, including sterling values, token types and pooled-cost implications. The practical fix is not to wait for exchange exports at year-end. It is to keep records from the moment tokens are received so the later disposal can be analysed properly.`,
      },
    ],
    actionChecklist: [
      "Record the sterling value when tokens are first received.",
      "Do not assume later sale is the only tax event in the crypto lifecycle.",
      "Track pooling and disposal calculations separately from receipt-side income treatment.",
      "Keep direct records rather than relying only on exchange summaries.",
    ],
    sources: [
      {
        label: "Cryptoassets Manual",
        url: "https://www.gov.uk/hmrc-internal-manuals/cryptoassets-manual",
      },
      {
        label: "Check if you need to pay tax when you receive cryptoassets",
        url: "https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-receive-cryptoassets",
      },
      {
        label: "Check if you need to pay tax when you sell cryptoassets",
        url: "https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-sell-cryptoassets",
      },
    ],
  },
  {
    id: "sc-us-short-term-rental-mixed-use",
    slug: "us-short-term-rental-with-personal-use-days",
    title: "U.S. short-term rental host using the property personally as well",
    summary: "A host assumes every expense can be treated as a rental deduction because the property was listed on a platform for part of the year.",
    seoTitle: "Scenario: U.S. short-term rental with personal use days",
    seoDescription: "A practical IRS short-term rental scenario covering the 14-day rule, mixed-use expense allocation, and hospitality-style service risk.",
    situation: "A family owns a mountain cabin, rents it on weekends and school breaks, and also uses it for several private holidays during the same year. The owner wants to run all the property costs through the rental side because there was genuine guest income and the platform reports look busy.",
    sections: [
      {
        heading: "What matters first",
        body: `The IRS starts with usage patterns, not platform branding. Topic 415 says the residence test compares personal use with the greater of 14 days or 10% of the days rented at fair rental value. The same topic also sets out the special under-15-day rental rule for a dwelling unit used as a residence. So the calendar of use is the tax engine here, not the host's feeling that the property is 'mainly an Airbnb'.`,
      },
      {
        heading: "Why mixed use changes the deduction picture",
        body: `Publication 527 explains that expenses generally need to be divided between rental use and personal use when both exist. That makes this much more nuanced than a normal full-year rental property. Once personal use is material, expense limits and allocation questions take over. The owner cannot simply point to booking revenue and claim every cost as a rental deduction.`,
      },
      {
        heading: "When the activity starts to look more like hospitality than passive space rental",
        body: `Publication 334 matters because substantial guest services can pull the activity toward a more active business posture. If the owner is supplying something closer to a hospitality experience than a bare rental, the tax posture can shift. So the real scenario analysis has two tracks: mixed personal use and the level of services being provided to guests.`,
      },
    ],
    actionChecklist: [
      "Track personal-use days and fair-rental days carefully before preparing the return.",
      "Test whether the special under-15-day rental rule or the residence test changes the result.",
      "Allocate expenses between personal and rental use rather than assuming full rental deductibility.",
      "Consider whether the guest-service model looks more like hospitality operations than passive rental activity.",
    ],
    sources: [
      {
        label: "Topic no. 415, Renting residential and vacation property",
        url: "https://www.irs.gov/taxtopics/tc415",
      },
      {
        label: "Publication 527",
        url: "https://www.irs.gov/publications/p527",
      },
      {
        label: "Publication 334",
        url: "https://www.irs.gov/publications/p334",
      },
    ],
  },
  {
    id: "sc-id-startup-monthly-tax-calendar",
    slug: "indonesia-startup-needs-monthly-tax-calendar",
    title: "Indonesian company founder who thinks tax only becomes urgent at annual return time",
    summary: "A PT founder is focused on product and fundraising, but the real tax pressure is building monthly through income-tax installments and VAT reporting.",
    seoTitle: "Scenario: Indonesia startup founder building a real tax calendar",
    seoDescription: "An Indonesia startup scenario explaining Article 25 installments, annual filing dates, and monthly VAT reporting discipline.",
    situation: "A Jakarta-based company has started billing real customers, expects meaningful revenue this year, and has just crossed the point where tax is no longer a theoretical topic. The founder is treating tax as a future annual-return project and has not yet built a monthly compliance calendar.",
    sections: [
      {
        heading: "What matters first",
        body: `Indonesia's tax system is not designed for founders who only look up in March or April. The Directorate General of Taxes says corporate taxpayers generally face a 22% headline rate, but Article 25 monthly installments mean that the company is already living inside the tax system during the year. This is the first mindset shift the founder needs.`,
      },
      {
        heading: "Why the annual return is only one deadline in a bigger calendar",
        body: `The DGT due-date guidance says the annual corporate return is due within four months after year-end, while Article 25 installments are generally paid by the 15th of the following month. Periodic Article 25 return timing and month-end VAT return timing add more moving parts. So the founder is not facing one filing season. The founder is facing a calendar with several different compliance clocks.`,
      },
      {
        heading: "What the next step should look like",
        body: `The company needs a tax calendar that separates monthly income-tax payments, periodic income-tax filings, VAT reporting, and the annual corporate return. That is a far more realistic operating tool than a vague note to 'sort tax later'. Once the calendar exists, bookkeeping and cash planning can finally line up with how the Indonesian system actually works.`,
      },
    ],
    actionChecklist: [
      "Treat the 22% corporate rate as a year-end measure layered on top of monthly compliance, not as the whole system.",
      "Build a calendar for Article 25 payments, periodic filings, VAT return timing and the annual corporate return.",
      "Check whether the business has moved into monthly VAT reporting obligations as well as corporate income-tax obligations.",
      "Align bookkeeping and cash planning with the real DGT deadline structure before year-end pressure arrives.",
    ],
    sources: [
      {
        label: "Income Tax Calculation Mechanism Entity",
        url: "https://pajak.go.id/en/income-tax-calculation-mechanism-entity",
      },
      {
        label: "Due Date for Tax Return Filing",
        url: "https://www.pajak.go.id/en/due-date-tax-return-filing",
      },
      {
        label: "Calculation of Article 25 Income Tax Installment",
        url: "https://pajak.go.id/en/calculation-article-25-income-tax-installment",
      },
      {
        label: "Periodic Value-Added Tax Return Filing",
        url: "https://stats.pajak.go.id/en/periodic-value-added-tax-return-filing",
      },
    ],
  },
  {
    id: "sc-uk-vat-threshold-midyear",
    slug: "uk-sole-trader-crosses-vat-threshold-midyear",
    title: "UK sole trader crosses the VAT threshold mid-year and keeps invoicing as if nothing changed",
    summary: "A UK consultant tracks profit carefully but ignores taxable turnover, then discovers that VAT registration works off the rolling threshold rather than year-end instinct.",
    seoTitle: "Scenario: UK sole trader crossing the VAT threshold mid-year",
    seoDescription: "A UK VAT scenario explaining why the rolling threshold matters, when registration becomes urgent, and why late reactions create avoidable mess.",
    situation: "A freelance designer in Manchester has had a strong run of invoices over several months and suddenly realises annualised turnover now looks high. Because the business is small and unincorporated, the owner assumes VAT can wait until the next tax year or until an accountant raises it during Self Assessment season.",
    sections: [
      {
        heading: "What matters first",
        body: `HMRC does not frame VAT registration as a once-a-year reflection exercise. The UK threshold guidance focuses on taxable turnover, and the registration obligation can arise when the rolling 12-month total goes over the compulsory threshold. That means the designer's legal problem is tied to turnover movement across months, not to whether the business feels 'established enough' for VAT yet.`,
      },
      {
        heading: "Why founders often misread this moment",
        body: `Many small operators watch profit, cash and income-tax bills while barely tracking taxable turnover. That is how the VAT threshold sneaks up on them. HMRC's guidance on how much VAT must be charged only becomes useful once registration status has been handled correctly. If the business should have registered and kept billing as if nothing had changed, the practical risk is not only a missed form. It is the possibility that prices, margins and invoices were all being built on the wrong tax posture.`,
      },
      {
        heading: "What the next step should look like",
        body: `The consultant needs to rebuild the rolling turnover picture, identify when the threshold was crossed, and work out the correct registration timing from that point. Future pricing also needs a reset because VAT is an operating design issue, not merely a filing task. The lesson is not that UK VAT is unusually harsh. It is that turnover monitoring has to be built into the business before growth arrives.`,
      },
    ],
    actionChecklist: [
      "Recalculate taxable turnover on a rolling 12-month basis rather than relying on tax-year instinct.",
      "Identify the point at which compulsory registration was triggered under HMRC's threshold rules.",
      "Review invoices and pricing from the registration trigger point onward.",
      "Treat VAT monitoring as a monthly operating control, not a year-end clean-up job.",
    ],
    sources: [
      {
        label: "How VAT works: how much VAT you must charge",
        url: "https://www.gov.uk/how-vat-works/how-much-vat-you-must-charge",
      },
      {
        label: "How VAT works: VAT thresholds",
        url: "https://www.gov.uk/how-vat-works/vat-thresholds",
      },
    ],
  },
  {
    id: "sc-ie-company-cro-revenue-gap",
    slug: "ireland-founder-incorporates-but-does-not-finish-tax-setup",
    title: "Irish founder incorporates a company and assumes the CRO filing finished the tax setup",
    summary: "A new Irish company has a registration number and a bank account, but the founder has not yet handled the Revenue side or worked out which tax heads actually apply.",
    seoTitle: "Scenario: Irish founder incorporates but misses the Revenue setup",
    seoDescription: "An Ireland setup scenario showing why CRO registration does not complete the tax launch and why Revenue registrations depend on the real business model.",
    situation: "A Dublin founder forms a company, receives the incorporation documents and starts negotiating contracts immediately. Because the entity now exists, the founder assumes the tax side is effectively complete and plans to deal with Revenue once trading feels more serious.",
    sections: [
      {
        heading: "What matters first",
        body: `Irish incorporation and Irish tax registration are connected, but they are not the same event. Revenue's startup guidance says a new company needs a CRO number before it can be registered for tax, which is precisely why founders so often think the CRO step finished everything. In reality, the CRO step creates the entity. Revenue registration determines which tax obligations the entity is actually ready to meet.`,
      },
      {
        heading: "Why the delay becomes expensive fast",
        body: `The business model decides which tax heads matter. A company with staff may need PAYE. A company with sufficient taxable supplies may need VAT. A company trading in its own right will need its corporation-tax posture sorted from the start. The practical damage comes from the gap between legal formation and tax readiness. Contracts can be signed and invoices can be issued while the compliance architecture is still half-built.`,
      },
      {
        heading: "What the next step should look like",
        body: `The founder should stop treating tax registration as a generic afterthought and instead map the actual company workflow. Who gets paid, who gets hired, what gets sold, and when turnover is likely to build all change the registration list. The clean Irish launch is not 'company formed, tax later'. It is CRO and Revenue handled as two different parts of the same project.`,
      },
    ],
    actionChecklist: [
      "Separate CRO incorporation from Revenue tax registration in the launch checklist.",
      "Identify whether corporation tax, VAT, PAYE or other tax heads apply to the real operating model.",
      "Do not assume the company is tax-ready just because the legal entity exists.",
      "Align first contracts and first invoices with the tax registrations that should already be in place.",
    ],
    sources: [
      {
        label: "What is a business?",
        url: "https://www.revenue.ie/en/starting-a-business/what-is-a-business/index.aspx",
      },
      {
        label: "How to register for tax as a new company",
        url: "https://www.revenue.ie/en/starting-a-business/registering-for-tax/how-to-register-for-tax-as-a-new-company.aspx",
      },
      {
        label: "Registration",
        url: "https://cro.ie/registration/",
      },
    ],
  },
  {
    id: "sc-ae-natural-person-threshold",
    slug: "uae-consultant-crosses-natural-person-corporate-tax-threshold",
    title: "UAE consultant trading in a personal name discovers natural-person corporate tax is not always zero",
    summary: "A solo consultant in Dubai repeats the old no-tax slogan until turnover gets big enough that the natural-person corporate-tax rules finally matter.",
    seoTitle: "Scenario: UAE consultant crossing the natural-person corporate tax threshold",
    seoDescription: "A UAE natural-person corporate tax scenario explaining why business turnover can matter even when the owner has been operating in a personal name.",
    situation: "A consultant based in the UAE has been invoicing personally for strategy work and digital projects. Because the work is not run through a company and wages in the UAE are generally outside income tax, the consultant assumes there is no business-tax story to think about at all.",
    sections: [
      {
        heading: "What matters first",
        body: `The UAE now has to be read more carefully than the old tax-free shorthand suggests. The Federal Tax Authority's natural-person guidance says the corporate-tax issue for a natural person turns on whether business or business-activity turnover exceeds AED 1 million in a calendar year. So the consultant's legal form being 'personal' does not end the analysis. The turnover question comes first.`,
      },
      {
        heading: "Where the slogan breaks down",
        body: `The Ministry of Finance guidance is still helpful because it frames the broader corporate-tax system around taxable business income rather than around a vague myth that everyone in the UAE is simply outside tax. That matters here because the consultant has mixed together two true ideas into one false conclusion: many kinds of personal income are outside the natural-person corporate-tax trigger, but qualifying business turnover above the threshold can still bring a natural person into the system.`,
      },
      {
        heading: "What the next step should look like",
        body: `The consultant needs to separate wages, passive investment income and real estate investment income from business-activity turnover and then track the business figure properly. Once that line is clear, registration and compliance questions become much easier to answer. The real fix is not panic. It is replacing the old UAE tax slogan with a turnover-based operating rule.`,
      },
    ],
    actionChecklist: [
      "Separate business turnover from wages and passive income before testing the threshold.",
      "Track whether business-activity turnover exceeds AED 1 million in the calendar year.",
      "Use current FTA natural-person guidance instead of older 'no tax in the UAE' marketing language.",
      "Build registration timing around the actual turnover facts rather than around legal-form assumptions alone.",
    ],
    sources: [
      {
        label: "Corporate Tax in the UAE",
        url: "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/",
      },
      {
        label: "Basis of Taxation - Natural Person",
        url: "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx",
      },
    ],
  },
  {
    id: "sc-hk-offshore-assumption",
    slug: "hong-kong-founder-assumes-foreign-clients-mean-offshore-profits",
    title: "Hong Kong founder invoices foreign clients and assumes the profits are automatically offshore and untaxed",
    summary: "A service business sells outside Hong Kong and starts treating territorial taxation like an automatic exemption instead of a fact-driven analysis.",
    seoTitle: "Scenario: Hong Kong founder assuming foreign clients mean offshore profits",
    seoDescription: "A Hong Kong profits tax scenario explaining why overseas customers do not automatically make profits offshore for tax purposes.",
    situation: "A Hong Kong company provides design and strategy work to clients in Australia, Singapore and the UK. Because the invoices go abroad, the founder has started describing the income as obviously offshore and outside Hong Kong profits tax without looking closely at where the work is actually arranged and performed.",
    sections: [
      {
        heading: "What matters first",
        body: `Hong Kong's territorial model is real, but it is not the same thing as a destination-of-customer rule. The official profits-tax overview is careful about this. Liability turns on whether profits arise in or are derived from Hong Kong from a trade, profession or business carried on in Hong Kong. That wording makes the source question factual. It does not let the founder skip the source analysis just because the client addresses are overseas.`,
      },
      {
        heading: "Why this misconception is so common",
        body: `Hong Kong is often marketed internationally using shorthand, and shorthand survives because it feels directionally true. But the founder's mistake is moving from 'Hong Kong uses a territorial system' to 'foreign clients mean untaxed profits'. The place where contracts are managed, services are delivered, and core profit-generating operations occur still matters. Territoriality is a framework. It is not a one-word exemption.`,
      },
      {
        heading: "What the next step should look like",
        body: `The company needs a practical source memo built from the real business facts: who works in Hong Kong, where contracts are negotiated, where service delivery is performed and where the core profit-producing activities sit. That is much more defensible than relying on customer geography alone. The founder should treat offshore status as something to evidence, not something to assume.`,
      },
    ],
    actionChecklist: [
      "Stop using customer location as a shortcut for profits-tax source analysis.",
      "Map where the core profit-generating activities actually occur.",
      "Document who negotiates, manages and performs the income-producing work.",
      "Treat Hong Kong territoriality as a facts-and-evidence question rather than a marketing slogan.",
    ],
    sources: [
      {
        label: "Profits Tax overview",
        url: "https://www.gov.hk/en/residents/taxes/profits/index.htm",
      },
    ],
  },
  {
    id: "sc-ch-vat-old-rate",
    slug: "swiss-business-still-invoicing-at-old-vat-rate",
    title: "Swiss business still invoicing at 7.7% and misses the reporting timetable as well",
    summary: "A small Swiss business updated its products but not its tax settings, and the stale VAT rate is now being paired with weak filing discipline.",
    seoTitle: "Scenario: Swiss business still invoicing at the old VAT rate",
    seoDescription: "A Swiss VAT scenario explaining why stale rate assumptions and missed 60-day filing discipline create avoidable problems for small businesses.",
    situation: "A Swiss e-commerce business has been using the same invoicing setup for years. Nobody revisited the tax settings after the rate changes, and the finance lead also treats VAT filing as a loose administrative task to finish whenever there is time after quarter-end.",
    sections: [
      {
        heading: "What matters first",
        body: `The Federal Tax Administration says the standard Swiss VAT rate is 8.1%, not 7.7%. That means the problem here is already live at the invoice level. This is not a technicality. If the business is still pricing and charging on the old assumption, the gap can flow directly into under-collected tax or margin distortion depending on how customer pricing was presented.`,
      },
      {
        heading: "Why the timetable matters as much as the rate",
        body: `The same authority says VAT returns and payment are generally due within 60 days after the end of the reporting period. So stale VAT settings and casual filing behaviour reinforce each other. A business that does not refresh rates on time often also fails to build the discipline needed for the reporting cycle. The operational weakness is broader than one wrong percentage.`,
      },
      {
        heading: "What the next step should look like",
        body: `The business should audit historic invoices, update tax settings immediately and then rebuild the reporting calendar around the 60-day rule. The better lesson is organisational: Swiss VAT is manageable, but only when somebody owns the live rate and the live timetable at the same time.`,
      },
    ],
    actionChecklist: [
      "Confirm that invoicing systems now use the live Swiss VAT rate for the supplies involved.",
      "Review past invoices to identify how far the stale-rate problem spread.",
      "Rebuild the reporting calendar around the 60-day filing and payment timetable.",
      "Treat VAT settings and VAT filing as one control system rather than two separate chores.",
    ],
    sources: [
      {
        label: "Current Swiss VAT rates",
        url: "https://www.estv.admin.ch/estv/en/home/value-added-tax/vat-rates-switzerland.html",
      },
      {
        label: "Paying VAT",
        url: "https://www.estv.admin.ch/estv/en/home/value-added-tax/paying-vat.html",
      },
    ],
  },
  {
    id: "sc-us-fbar-form-8938-gap",
    slug: "us-taxpayer-filed-form-8938-but-missed-fbar",
    title: "U.S. taxpayer files the tax return and Form 8938 but forgets the separate FBAR filing",
    summary: "A U.S. person with foreign accounts assumes the return package solved the disclosure problem, then learns that the Treasury-side reporting obligation runs on a different track.",
    seoTitle: "Scenario: U.S. taxpayer filed Form 8938 but missed the FBAR",
    seoDescription: "A practical scenario explaining why Form 8938 does not automatically replace the FBAR and how foreign-account reporting can split across two filing systems.",
    situation: "A U.S. citizen living in Singapore keeps several foreign bank and brokerage accounts, gives the annual account figures to a preparer, and feels relieved after the federal tax return is filed with Form 8938 attached. Months later, the taxpayer hears someone mention the FBAR and realises nobody ever filed anything through FinCEN.",
    sections: [
      {
        heading: "What matters first",
        body: `The IRS is clear that Form 8938 and the FBAR are not the same filing. The FBAR is a Treasury reporting obligation filed electronically through FinCEN, while Form 8938 is filed with the federal income tax return if its own thresholds are met. That means the taxpayer's first mistake was assuming one disclosure system automatically satisfied the other.`,
      },
      {
        heading: "Why the confusion happens so often",
        body: `The facts overlap just enough to create false confidence. Both regimes can involve foreign accounts or foreign financial assets, and both are discussed in international-tax conversations. But the IRS comparison page exists precisely because taxpayers keep conflating them. Once that happens, the return can be filed cleanly and the separate Treasury filing can still be missing.`,
      },
      {
        heading: "What the next step should look like",
        body: `The taxpayer needs to reconstruct the annual maximum balances for the relevant foreign accounts, test the FBAR threshold separately and treat the missing filing as its own compliance problem. The better long-term fix is procedural: every year, foreign-account reporting should be checked under both systems instead of being lumped into a single mental box labeled 'international disclosure.'`,
      },
    ],
    actionChecklist: [
      "Test the FBAR obligation separately from the Form 8938 obligation.",
      "Reconstruct annual maximum foreign-account balances rather than relying only on year-end statements.",
      "Do not assume a tax-return attachment automatically solved the Treasury-side filing duty.",
      "Build a yearly foreign-account checklist that includes both filing systems.",
    ],
    sources: [
      {
        label: "Report of Foreign Bank and Financial Accounts (FBAR)",
        url: "https://www.irs.gov/fbar",
      },
      {
        label: "Comparison of Form 8938 and FBAR requirements",
        url: "https://www.irs.gov/Businesses/Comparison-of-Form-8938-and-FBAR-Requirements",
      },
    ],
  },
  {
    id: "sc-us-resident-uk-royalties-treaty-claim",
    slug: "us-resident-receives-uk-royalties-without-treaty-claim-paperwork",
    title: "U.S. resident receives UK royalties and assumes the treaty rate applies automatically",
    summary: "A U.S. resident knows there is a UK-US treaty, but nobody has actually filed the HMRC form or lined up the evidence that would make the claim real.",
    seoTitle: "Scenario: U.S. resident with UK royalties but no treaty claim paperwork",
    seoDescription: "A practical treaty scenario showing why a UK-US treaty rate does not simply apply by default and why HMRC process still matters.",
    situation: "An author based in California licenses content to a UK payer. Everyone in the deal casually agrees that the treaty should reduce UK withholding, so the taxpayer assumes the paperwork is a formality that can be dealt with later if needed.",
    sections: [
      {
        heading: "What matters first",
        body: `The existence of a treaty is only the beginning of the analysis. HMRC's own guidance treats treaty relief as a claim process, not as an automatic consequence of a taxpayer being resident in the United States. The relevant treaty article still needs to match the income, and the claim route still matters.`,
      },
      {
        heading: "Why the taxpayer's assumption is risky",
        body: `HMRC's UK-USA form page shows that for certain categories such as interest and royalties, form US-Individual 2002 is part of the practical route for relief at source or repayment claims. That means 'the treaty exists' is not enough on its own. The income, the form, and the supporting evidence have to line up. If they do not, domestic withholding can happen first and cleanup can become slower and more expensive later.`,
      },
      {
        heading: "What the next step should look like",
        body: `The taxpayer should stop treating documentation as secondary and instead build a treaty file: the relevant treaty article, the HMRC claim form where required, and the supporting residence position. The operational lesson is simple. In cross-border withholding, paperwork is not separate from the tax result. It is part of the tax result.`,
      },
    ],
    actionChecklist: [
      "Match the income stream to the relevant UK-US treaty article before assuming a reduced rate.",
      "Use the correct HMRC claim route rather than relying on verbal agreement between payer and recipient.",
      "Organize residence and treaty-support evidence before the withholding issue becomes urgent.",
      "Treat relief-at-source paperwork as part of the tax workflow, not as optional admin.",
    ],
    sources: [
      {
        label: "HS304 Non-residents — relief under double taxation agreements (2024)",
        url: "https://www.gov.uk/government/publications/non-residents-relief-under-double-taxation-agreements-hs304-self-assessment-helpsheet/hs304-non-residents-relief-under-double-taxation-agreements-2024",
      },
      {
        label: "Double Taxation: UK-USA (form US-Individual 2002)",
        url: "https://www.gov.uk/government/publications/double-taxation-united-kingdomunited-states-of-america-si-2002-number-2848-form-us-individual-2002",
      },
    ],
  },
  {
    id: "sc-ie-service-firm-vat-threshold",
    slug: "ireland-service-business-uses-the-wrong-vat-threshold",
    title: "Irish service business uses the goods threshold and misses the earlier VAT question",
    summary: "A consultant hears the bigger Irish VAT threshold quoted online, assumes the business is still safely below it, and only later learns that the relevant threshold depends on what is actually being sold.",
    seoTitle: "Scenario: Irish service business using the wrong VAT threshold",
    seoDescription: "A practical Ireland VAT scenario showing why a services business cannot rely on the goods threshold and why registration affects pricing early.",
    situation: "A two-person consulting company in Cork is growing quickly. The founder remembers seeing an Irish VAT threshold online and feels comfortable that the business is not there yet. The trouble is that the remembered number belongs to a different type of business activity.",
    sections: [
      {
        heading: "What matters first",
        body: `Revenue's VAT-threshold guidance does not offer one universal registration number for everyone. It separates the thresholds by activity. That means the founder's first real task is classification, not arithmetic. If the business is selling services, using the goods threshold as a comfort blanket can delay the VAT conversation too long.`,
      },
      {
        heading: "Why this becomes a commercial problem, not just a filing problem",
        body: `Once a business should be thinking about VAT registration, pricing and invoicing assumptions start to matter as much as compliance timing. A firm that has quoted clients on a non-VAT basis while reading the wrong threshold may find that the tax issue later spills into margins, contract language and client relationships. That is why Revenue's threshold page and current-rate page belong in the same decision process.`,
      },
      {
        heading: "What the next step should look like",
        body: `The company should identify the correct threshold for its activity, rebuild turnover tracking around that number and then test future pricing as if registration could become live sooner than expected. The broader lesson is that Irish VAT starts with the business model. A founder who skips that step ends up doing the math on the wrong question.`,
      },
    ],
    actionChecklist: [
      "Confirm whether the business is primarily selling services or goods before quoting any Irish VAT threshold.",
      "Track turnover against the correct threshold for that activity.",
      "Review pricing and invoices if the business is closer to registration than previously thought.",
      "Treat threshold analysis and current VAT rates as one connected planning exercise.",
    ],
    sources: [
      {
        label: "What are the VAT thresholds?",
        url: "https://www.revenue.ie/en/vat/vat-registration/who-should-register-for-vat/vat-thresholds.aspx",
      },
      {
        label: "Current VAT rates",
        url: "https://www.revenue.ie/en/vat/vat-rates/search-vat-rates/current-VAT-rates.aspx",
      },
    ],
  },
  {
    id: "sc-ee-founder-first-dividend",
    slug: "estonia-founder-takes-first-dividend-after-retaining-profits",
    title: "Estonia founder retains profit for growth, then takes a first dividend and expects the tax to behave like a normal annual company tax",
    summary: "An OÜ founder understands that Estonia is different, but not enough to predict what happens when retained earnings finally get distributed.",
    seoTitle: "Scenario: Estonia founder taking a first dividend after retained profits",
    seoDescription: "A practical Estonia scenario showing why retained profit and distributed profit are taxed differently and why old dividend summaries can mislead founders.",
    situation: "A founder has left profit inside an Estonian OÜ for two years while the business reinvested in product and hiring. Now the founder wants to distribute money for the first time and assumes the company has effectively already dealt with most of the tax burden in the same way a normal corporate system would.",
    sections: [
      {
        heading: "What matters first",
        body: `Estonia's company-tax logic starts in a different place. EMTA explains that corporate tax is tied to distribution rather than to the earning of profit in the usual annual way. That means the founder's mental model needs to shift before the dividend calculation even starts. Retained profit and distributed profit do not sit in the same tax posture.`,
      },
      {
        heading: "Why older Estonia summaries can make this worse",
        body: `EMTA's current materials also matter because legacy Estonia content still circulates widely. From 2025, the general distributed-profit rate is 22/78 and the older reduced rate for regularly paid dividends no longer applies. A founder using an outdated summary may be wrong on both timing and rate structure at exactly the moment cash is finally being taken out.`,
      },
      {
        heading: "What the next step should look like",
        body: `The founder should rebuild the decision around the current distribution rules, check the amounts available for dividend, and stop treating Estonia as a tax-free black box simply because profit was retained. The better lesson is strategic: Estonia rewards founders who think deliberately about when money stays inside the company and when it leaves.`,
      },
    ],
    actionChecklist: [
      "Treat the distribution decision as the key Estonia tax trigger, not just an accounting afterthought.",
      "Use current EMTA dividend-rate guidance rather than older Estonia summaries.",
      "Check the company's retained earnings and planned distribution amount under the current rules.",
      "Build founder cash-extraction planning around timing, not just around profit existence.",
    ],
    sources: [
      {
        label: "Income and social taxes",
        url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes",
      },
      {
        label: "Taxation of dividends",
        url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/taxation-dividends",
      },
      {
        label: "Tax rates",
        url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/tax-rates",
      },
    ],
  },
  {
    id: "sc-hk-agency-offshore-assumption",
    slug: "hong-kong-agency-assumes-foreign-clients-make-profits-offshore",
    title: "Hong Kong agency assumes all-foreign clients automatically mean offshore profits",
    summary: "A Hong Kong service business has no local customers and starts treating that customer mix as if it solved the profits-tax source question by itself.",
    seoTitle: "Scenario: Hong Kong agency assuming foreign clients mean offshore profits",
    seoDescription: "A Hong Kong profits-tax scenario explaining why overseas clients do not automatically create offshore profits for a service business.",
    situation: "A Hong Kong marketing agency serves only clients in Australia, the UK and Singapore. Because every invoice goes abroad, the founder keeps describing the profits as obviously offshore and does not think much more about where the underlying work, management and contract activity actually happen.",
    sections: [
      {
        heading: "What matters first",
        body: `Hong Kong's official profits-tax guidance does not ask only where the customers are. It asks whether profits arise in or are derived from Hong Kong from a trade, profession or business carried on in Hong Kong. That means the source question is still grounded in business facts rather than in the passports or postal addresses of the clients.`,
      },
      {
        heading: "Why the founder's shortcut is risky",
        body: `The territorial model is one reason Hong Kong attracts service businesses, but it also encourages oversimplified advice. A service agency creates value through staff, creative direction, project management and delivery. If those functions are carried on in Hong Kong, the source analysis may point somewhere much more complex than the founder's one-line 'all clients are foreign' summary suggests.`,
      },
      {
        heading: "What the next step should look like",
        body: `The agency should map where contracts are negotiated, where work is managed, where staff perform the value-creating functions and how the profit story would actually be described if tested. The operational lesson is that Hong Kong can still be attractive, but only when the tax position rests on facts rather than on exported invoices alone.`,
      },
    ],
    actionChecklist: [
      "Do not use foreign customer location as a substitute for profits-tax source analysis.",
      "Map where management, delivery and contract activity actually take place.",
      "Document the real profit-generating functions of the agency.",
      "Treat Hong Kong territoriality as a factual test, not as an automatic offshore label.",
    ],
    sources: [
      {
        label: "Profits Tax overview",
        url: "https://www.gov.hk/en/residents/taxes/profits/index.htm",
      },
    ],
  },
  {
    id: "sc-us-owner-401k-2026-refresh",
    slug: "us-owner-manager-uses-old-retirement-limits-for-2026",
    title: "U.S. owner-manager uses last year's retirement limits when setting 2026 payroll and personal savings targets",
    summary: "A founder rolls a familiar payroll and retirement-savings setup into 2026 without refreshing the IRS contribution limits first.",
    seoTitle: "Scenario: U.S. owner-manager using old retirement limits for 2026",
    seoDescription: "A practical U.S. planning scenario showing why 2026 retirement contribution limits need a fresh payroll and cash-flow review.",
    situation: "A small-business owner in the U.S. has automatic salary deferrals already running, contributes to an IRA personally, and assumes the same settings can simply continue into 2026. No one has yet checked the live IRS limits or the wider COLA update.",
    sections: [
      {
        heading: "What matters first",
        body: `The IRS did not leave the 2026 retirement landscape unchanged. The elective deferral limit for 401(k)-type plans increased to $24,500 and the IRA contribution limit increased to $7,500. That means the founder's existing settings are not neutral defaults. They are potentially stale settings being carried into a new planning year.`,
      },
      {
        heading: "Why this becomes a business-planning issue, not just a savings issue",
        body: `For an owner-manager, retirement limits affect more than personal investing. They can influence payroll settings, cash-flow planning and the way owner compensation is discussed with advisers. The COLA material matters because the wider retirement-limit framework changes alongside the headline caps. A business that never refreshes those inputs can make 2026 decisions on the wrong operating numbers.`,
      },
      {
        heading: "What the next step should look like",
        body: `The founder should review the live 2026 limits, compare them with current payroll elections and personal saving goals, and then decide whether the existing mix still makes sense. The clean lesson is that retirement planning should be reset deliberately each year, not inherited by inertia from the prior one.`,
      },
    ],
    actionChecklist: [
      "Refresh the 2026 401(k) and IRA limits before leaving payroll settings untouched.",
      "Check whether catch-up or other age-related limits are relevant for the taxpayer.",
      "Re-test owner cash flow and salary-deferral assumptions using live IRS numbers.",
      "Treat retirement settings as annual planning inputs, not permanent defaults.",
    ],
    sources: [
      {
        label: "401(k) limit increases to $24,500 for 2026, IRA limit increases to $7,500",
        url: "https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500",
      },
      {
        label: "COLA increases for dollar limitations on benefits and contributions",
        url: "https://www.irs.gov/retirement-plans/cola-increases-for-dollar-limitations-on-benefits-and-contributions",
      },
    ],
  },
  {
    id: "sc-ie-vat-modernisation-waiting",
    slug: "ireland-business-sees-no-rate-change-and-ignores-vat-modernisation",
    title: "Irish business sees no VAT-rate change and assumes Revenue's VAT modernisation project can wait",
    summary: "A finance lead hears that VAT rates are unchanged and wrongly treats Ireland's eInvoicing programme as distant policy rather than an operational readiness issue.",
    seoTitle: "Scenario: Irish business ignoring VAT modernisation because rates did not change",
    seoDescription: "A practical Ireland scenario showing why VAT modernisation is a systems and invoicing issue even when VAT rates stay the same.",
    situation: "An Irish company has stable VAT reporting, familiar invoice processes and no immediate legislative panic around VAT rates. Because the tax amount itself is not changing, the finance lead keeps postponing any conversation about Revenue's eInvoicing and real-time reporting roadmap.",
    sections: [
      {
        heading: "What matters first",
        body: `Revenue's implementation paper says the programme is about structured eInvoicing and real-time reporting, while VAT rates, payment rules and liability calculations remain unchanged. That means the company's calm reaction to 'no rate change' is based on the wrong variable. The reform pressure is aimed at systems, invoice flow and data design.`,
      },
      {
        heading: "Why waiting is still risky even outside the first wave",
        body: `Revenue's February 2026 update naming the large corporates in Phase One matters because it turns the roadmap into a live operating programme. Even if this company is not in the first group, it is now on notice that the digital direction is real. Businesses that wait for their own phase to be imminent may find the preparation work takes longer than expected.`,
      },
      {
        heading: "What the next step should look like",
        body: `The finance lead should map current invoicing systems, identify who owns tax-technology changes internally and start testing readiness against the phased Revenue roadmap. The broader lesson is that modern VAT reform often shows up as a process problem long before it shows up as a rate problem.`,
      },
    ],
    actionChecklist: [
      "Separate VAT-rate questions from eInvoicing and reporting-readiness questions.",
      "Review whether current invoicing systems can handle structured digital invoice requirements.",
      "Treat Revenue's Phase One announcement as an early warning, not as someone else's problem.",
      "Assign cross-functional ownership across finance, tax and systems teams.",
    ],
    sources: [
      {
        label: "Revenue confirms large corporates for Phase One of VAT Modernisation – Implementation of eInvoicing in Ireland",
        url: "https://www.revenue.ie/ga/corporate/press-office/press-releases/2026/pr-021026-phase-one-vat-modernisation.aspx",
      },
      {
        label: "VAT Modernisation - Implementation of eInvoicing in Ireland",
        url: "https://www.revenue.ie/ga/vat/documents/implementation-einvoicing.pdf",
      },
    ],
  },
  {
    id: "sc-id-coretax-phishing-risk",
    slug: "indonesia-taxpayer-clicks-unverified-coretax-link",
    title: "Indonesian taxpayer receives a Coretax link by message and assumes any convincing portal is safe",
    summary: "A taxpayer wants to activate or access Coretax quickly and does not realize the official access route is part of the compliance process itself.",
    seoTitle: "Scenario: Indonesian taxpayer using an unverified Coretax link",
    seoDescription: "A practical Indonesia scenario explaining why official Coretax access and domain verification are part of real tax compliance in 2026.",
    situation: "A taxpayer receives a message claiming there is an urgent Coretax account problem and is told to log in through a link to avoid disruption. The page looks plausible, so the taxpayer is tempted to act first and verify later.",
    sections: [
      {
        heading: "What matters first",
        body: `DJP's January 2026 warning says official Coretax access is only through coretaxdjp.pajak.go.id. The Coretax portal page on pajak.go.id points users to the same address. That means the taxpayer's first task is not typing credentials. It is verifying that the route into the system is genuine.`,
      },
      {
        heading: "Why this is a tax problem, not just an IT problem",
        body: `In a platform-based tax system, compromised credentials can affect access, filings and data integrity. The taxpayer who gives login details to a fake site is not just suffering an abstract cybersecurity loss. The taxpayer may also be creating direct compliance risk at the same time. That is why DJP's domain warning belongs inside practical tax workflow guidance.`,
      },
      {
        heading: "What the next step should look like",
        body: `The taxpayer should ignore unverified links, start from pajak.go.id or type the official Coretax domain directly, and keep official support channels separate from message-based pressure tactics. The deeper lesson is that secure access habits are now part of normal Indonesian tax administration.`,
      },
    ],
    actionChecklist: [
      "Treat `coretaxdjp.pajak.go.id` as the only official login destination.",
      "Do not follow Coretax login links from unsolicited messages.",
      "Use pajak.go.id as the verification starting point if there is doubt.",
      "Handle credential security as part of ongoing compliance control, not as a one-off IT concern.",
    ],
    sources: [
      {
        label: "Ingat! Laman Resmi Coretax DJP Hanya di coretaxdjp.pajak.go.id",
        url: "https://www.pajak.go.id/en/node/119080",
      },
      {
        label: "Coretax",
        url: "https://www.pajak.go.id/index.php/id/reformdjp/coretax",
      },
    ],
  },
  {
    id: "sc-id-pmk-112-treaty-form",
    slug: "indonesia-nonresident-uses-old-treaty-form-after-pmk-112",
    title: "Foreign licensor uses an old Indonesian treaty form after PMK 112 changed the operating workflow",
    summary: "A nonresident taxpayer expects treaty relief to work through the old documentation habit even though DJP has already issued a new implementation notice.",
    seoTitle: "Scenario: Indonesia treaty claimant still using old forms after PMK 112",
    seoDescription: "A practical Indonesia treaty-relief scenario showing why PMK 112 and DJP's January 2026 notice changed the documentation workflow.",
    situation: "A foreign company licenses IP into Indonesia and expects reduced withholding under a tax treaty. The Indonesian payer and the foreign recipient both assume they can keep using the prior documentation routine without checking DJP's January 2026 implementation notice.",
    sections: [
      {
        heading: "What matters first",
        body: `DJP's 9 January 2026 announcement says treaty application by nonresident taxpayers uses the Formulir DGT format under PMK-112/2025. It also says older forms issued under the prior rules remain valid for their stated period. So the question is not simply 'Do we have a treaty?' The real question is whether the claim is travelling through the right current documentation path.`,
      },
      {
        heading: "Why old habits can fail here",
        body: `Treaty relief work often relies on repeated routines. That is exactly why procedural updates can be missed. PMK 112 and the implementation notice matter because the treaty claim is now being pushed through a clearer form-and-Coretax workflow. Assuming the old process remains fully untouched is the kind of shortcut that later creates withholding or support-file problems.`,
      },
      {
        heading: "What the next step should look like",
        body: `The payer and recipient should compare the current treaty file against PMK 112/2025, confirm whether an older document is still within its valid period, and align the submission route with DJP's stated Coretax pathway. In cross-border withholding work, staying current on process can be just as important as reading the treaty article correctly.`,
      },
    ],
    actionChecklist: [
      "Check whether the treaty claim should now use the PMK-112/2025 Formulir DGT format.",
      "Confirm whether any older form is still valid for its stated period.",
      "Align the filing process with the Coretax route identified by DJP.",
      "Review treaty documentation procedures before the next payment cycle, not after a withholding issue appears.",
    ],
    sources: [
      {
        label: "Pelaksanaan Peraturan Menteri Keuangan Nomor 112 Tahun 2025 tentang Tata Cara Penerapan Persetujuan Penghindaran Pajak Berganda",
        url: "https://www.pajak.go.id/sites/default/files/2026-01/Pelaksanaan%20Peraturan%20Menteri%20Keuangan%20Nomor%20112%20Tahun%202025%20tentang%20Tata%20Cara%20Penerapan%20Persetujuan%20Penghindaran%20Pajak%20Berganda.pdf",
      },
      {
        label: "TATA CARA PENERAPAN PERSETUJUAN PENGHINDARAN PAJAK BERGANDA",
        url: "https://www.pajak.go.id/en/node/119084",
      },
    ],
  },
  {
    id: "sc-ee-land-tax-forecast-check",
    slug: "estonia-landowner-ignores-forecast-before-2026-notice",
    title: "Estonian landowner ignores the e-MTA forecast and gets surprised when the 2026 land-tax notice arrives",
    summary: "A property owner treats land tax as a passive local charge and misses the chance to review the forecasted 2026 liability before the formal notice cycle.",
    seoTitle: "Scenario: Estonian landowner ignoring the early 2026 land-tax forecast",
    seoDescription: "A practical Estonia scenario showing why landowners should review the e-MTA forecast before the 2026 land-tax notice arrives.",
    situation: "An Estonian landowner assumes the annual land-tax bill can be dealt with whenever the official notice appears. Because the amount is usually not front-of-mind, the owner ignores EMTA's forecast function in e-MTA during December 2025.",
    sections: [
      {
        heading: "What matters first",
        body: `EMTA opened a personalised 2026 land-tax forecast in e-MTA on 12 December 2025 and made clear that final notices would follow in February 2026. That means the owner was given an early visibility tool, not left completely in the dark until the formal demand arrived. The forecast is therefore part of the real workflow, not a cosmetic extra.`,
      },
      {
        heading: "Why this matters more than routine annual housekeeping",
        body: `Land tax can be shaped by municipal decisions on rates, caps and reliefs. EMTA's early forecast gives owners time to see whether the upcoming liability feels normal or unexpectedly heavier. That matters for budgeting, checking land data and avoiding the feeling that the bill appeared out of nowhere when in fact there was an earlier chance to look.`,
      },
      {
        heading: "What the next step should look like",
        body: `The owner should review the forecast in e-MTA, check the underlying land and ownership information, and keep the 2026 due dates in mind under the current guidance. The broader lesson is simple: when the tax authority offers an early view, using it is part of sensible compliance behaviour.`,
      },
    ],
    actionChecklist: [
      "Use the e-MTA forecast view before the formal notice cycle if land tax applies.",
      "Check land and ownership data early rather than after the final notice arrives.",
      "Budget with the forecast in mind instead of treating the liability as a surprise event.",
      "Keep the 2026 land-tax payment dates visible in the owner's calendar.",
    ],
    sources: [
      {
        label: "2026. aasta maamaksu prognoosiga saab tutvuda e-MTAs",
        url: "https://www.emta.ee/uudised/2026-aasta-maamaksu-prognoosiga-saab-tutvuda-e-mtas",
      },
      {
        label: "Maamaks",
        url: "https://www.emta.ee/eraklient/maksud-ja-tasumine/muud-maksud/maamaks",
      },
    ],
  },
  {
    id: "sc-sg-ir21-last-minute-exit",
    slug: "singapore-foreign-employee-leaving-without-ir21-planning",
    title: "Singapore employer learns too late that a foreign employee is leaving and IR21 is now urgent",
    summary: "A foreign employee is resigning and the company treats the departure as routine HR admin until payroll discovers that tax clearance should already have been in motion.",
    seoTitle: "Scenario: Singapore foreign employee departure and IR21 tax clearance",
    seoDescription: "A practical Singapore scenario explaining why IR21 tax clearance must start early when a foreign employee leaves or goes abroad for an extended period.",
    situation: "A Singapore employer is told only a few weeks before a non-citizen employee's departure that the person is resigning and leaving the country for more than three months. Finance is ready to process final pay immediately, but nobody has yet treated the departure as a tax-clearance event.",
    sections: [
      {
        heading: "What the business missed first",
        body: `IRAS treats IR21 as a tax-clearance procedure, not as a farewell form. The employer must generally file at least one month before the employee ceases employment or leaves Singapore for more than three months, and the employer must withhold monies due for tax-clearance purposes. That means the workflow should start at the moment the departure becomes known, not when final payroll is already queued up.`,
      },
      {
        heading: "Why the last-minute scramble is dangerous",
        body: `Once the company has mentally shifted into offboarding mode, there is pressure to release final salary, bonus or leave encashment quickly. IRAS designed the withholding rule precisely because those pressures exist. The compliance risk appears when HR, payroll and finance are treating the same departure as three separate events instead of one linked tax-and-payroll event.`,
      },
      {
        heading: "What the next move should look like",
        body: `The employer should freeze the instinct to process final monies casually, file IR21 promptly, and align HR, payroll and finance around the withholding requirement. The deeper lesson is that mobility events for foreign employees in Singapore should be escalated to tax immediately, not only after someone asks where the form is.`,
      },
    ],
    actionChecklist: [
      "Identify immediately whether the departing employee falls inside the IR21 clearance rules.",
      "File the IR21 process early instead of waiting for the last payroll run.",
      "Withhold monies due as required for tax-clearance purposes.",
      "Build HR-to-payroll escalation for foreign employee departures into normal internal controls.",
    ],
    sources: [
      {
        label: "IRAS Tax Clearance for Foreign & SPR Employees (IR21)",
        url: "https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-%28ir21%29",
      },
      {
        label: "IRAS tax clearance for non-Singapore citizen employees",
        url: "https://www.iras.gov.sg/taxes/individual-income-tax/employees/scenario-based-faqs-for-working-in-singapore-and-abroad/tax-clearance-for-non-singapore-citizen-employees",
      },
    ],
  },
  {
    id: "sc-jp-salary-earner-side-income-return",
    slug: "japan-salary-earner-side-income-year-end-adjustment-misread",
    title: "Japanese salary earner assumes year-end adjustment ended the tax story even after meaningful side income appears",
    summary: "An employee with a normal payroll job starts earning side income and leans too hard on the comforting idea that year-end adjustment means employees do not usually have to file.",
    seoTitle: "Scenario: Japan salary earner with side income after year-end adjustment",
    seoDescription: "A practical Japan scenario explaining why year-end adjustment may not end the filing story once a salary earner picks up enough side income.",
    situation: "A Tokyo employee sells items online and also earns small consulting income on the side. Because payroll already ran year-end adjustment, the employee assumes the side income is probably too minor to matter and treats the 200,000-yen idea as a broad no-tax rule.",
    sections: [
      {
        heading: "Why the comforting payroll story is incomplete",
        body: `The NTA says many salary earners are effectively settled through year-end adjustment, but it also says some salary earners still must file a final return once other income or other facts bring them back through the gate. So the employee's starting instinct contains half a truth. Payroll convenience exists, but it is conditional rather than universal.`,
      },
      {
        heading: "Where the 200,000-yen shorthand goes wrong",
        body: `The NTA's No.1900 Q&A makes the familiar threshold feel much less like a magic shield. Even where the simplified filing rule may help in narrow cases, it does not turn side income into something conceptually invisible for all tax purposes. Once the employee needs to file for another reason, the side income can come back into the analysis.`,
      },
      {
        heading: "How the employee should handle it now",
        body: `The worker should classify the side activity carefully, total the other income properly and test the facts against the NTA's final-return rules instead of relying on a slogan. In Japan, the safest habit for employees with side income is to treat year-end adjustment as the default path, but never as a promise that side income cannot reopen the filing question.`,
      },
    ],
    actionChecklist: [
      "List each side-income stream separately instead of treating all extra income as one casual blob.",
      "Check the NTA's final-return rules for salary earners rather than relying on hearsay about employees never filing.",
      "Do not treat the 200,000-yen shorthand as a universal no-tax rule.",
      "Re-test the filing position if any refund claim or other return trigger arises.",
    ],
    sources: [
      {
        label: "No.1900 Salary earners who are required to file a final tax return",
        url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm",
      },
      {
        label: "No.1900 Q&A",
        url: "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900_qa.htm",
      },
    ],
  },
  {
    id: "sc-kr-flat-tax-election-misread",
    slug: "south-korea-foreign-worker-flat-tax-election-vs-ordinary-settlement",
    title: "Foreign employee in South Korea hears about the 19% flat tax and never compares it against ordinary year-end settlement",
    summary: "An expat worker is told the flat-tax route is the obvious answer and almost treats the decision like a lifestyle perk instead of a tax election with trade-offs.",
    seoTitle: "Scenario: South Korea foreign worker flat tax election misread",
    seoDescription: "A practical South Korea scenario showing why the 19% flat tax should be compared with ordinary year-end settlement instead of being accepted automatically.",
    situation: "A foreign employee relocating to Seoul is told by colleagues and recruiters that the 19% flat tax is the standard expat benefit. The employee assumes there is no need to compare it with ordinary year-end settlement or to ask whether a narrower engineer-style regime might exist instead.",
    sections: [
      {
        heading: "Why the recruiter version of the rule is too blunt",
        body: `KOTRA's current tax guide and the NTS foreigner settlement guidance show that Korea does not offer one undifferentiated foreign-worker tax perk. The 19% flat-tax route is one regime. Other narrower regimes, such as engineer or researcher-style incentives, have their own conditions. The correct question is not whether the worker is foreign. It is which rule, if any, the worker's actual facts fit.`,
      },
      {
        heading: "What gets missed when no comparison is run",
        body: `The flat-tax answer may be attractive, but it is not self-proving. A worker who never compares the ordinary settlement result with the elective route can easily mistake simplicity of sales pitch for optimality of tax result. The risk is not only legal ineligibility. It is also choosing a route that sounds easy while ignoring whether the numbers would actually come out better under the ordinary framework.`,
      },
      {
        heading: "How the decision should really be made",
        body: `The employee should test the legal gateway, compare the actual payroll and year-end numbers, and keep records that support the chosen route. In South Korea, foreign-worker tax planning works best when it is treated as a real comparison exercise and worst when it is handled like an expat myth inherited from someone else's contract.`,
      },
    ],
    actionChecklist: [
      "Identify which foreign-worker regime is actually available under the worker's facts.",
      "Compare the flat-tax route with the ordinary year-end settlement result.",
      "Check whether any narrower engineer or researcher incentive is genuinely relevant.",
      "Keep the supporting employment and payroll facts aligned with the route being used.",
    ],
    sources: [
      {
        label: "KOTRA Taxation in Korea 2025",
        url: "https://www.investkorea.org/file/ik-en/252025Taxation_in_Korea.pdf",
      },
      {
        label: "NTS 2020 Easy Guide for Foreigners' Year-end Tax Settlement",
        url: "https://www.nts.go.kr/upload/english/sub/2020%20Easy%20Guide%20for%20Foreigners%27%20Year-end%20Tax%20Settlement.pdf",
      },
    ],
  },
  {
    id: "sc-in-wrong-itr-form-convenience",
    slug: "india-business-filer-picks-simpler-itr-form-by-convenience",
    title: "Indian business or professional filer chooses the simpler ITR form by convenience and ignores the disqualifiers",
    summary: "A taxpayer wants the easiest filing lane and works backward from that preference, only later discovering that the official exclusion rules were doing most of the real work.",
    seoTitle: "Scenario: India filer choosing the wrong ITR form by convenience",
    seoDescription: "A practical India scenario showing why ITR-3 versus ITR-4 is mainly an eligibility question and not a convenience choice for business and professional filers.",
    situation: "A consultant in India has modest professional income and likes the sound of the presumptive route, so the filing starts with the question 'Can I just use the easy form?' Only later does the taxpayer notice there may be disqualifying facts such as foreign assets and other complexity.",
    sections: [
      {
        heading: "Why the easy-form instinct is risky",
        body: `The Income Tax Department's business-and-profession help page treats ITR-3 and ITR-4 as different eligibility lanes, not as style options. That means the taxpayer cannot begin with convenience and assume the law will adapt. The law begins with income profile, exclusions and filing facts, then decides which form is still available.`,
      },
      {
        heading: "How disqualifiers do the real sorting",
        body: `The official FAQs keep pointing out that facts such as directorships, foreign assets, certain gains and other details can push a filer out of the smaller presumptive lane. This is why two taxpayers with equally modest-looking businesses can still have different filing routes. The tax system is not rewarding whoever prefers the simpler interface. It is routing people according to the facts.`,
      },
      {
        heading: "What the taxpayer should do before filing further",
        body: `The taxpayer should test the actual facts against the official exclusion list before settling on the form. In India, choosing the wrong return form is usually not a sign of rebellion. It is a sign that the filer asked a convenience question before asking the legal eligibility question.`,
      },
    ],
    actionChecklist: [
      "Read the official ITR eligibility and exclusion rules before choosing the filing lane.",
      "Check for disqualifying facts such as foreign assets, directorships and other complexity.",
      "Treat presumptive filing as conditional rather than automatic for a small business or profession.",
      "Decide the form after mapping the facts, not before.",
    ],
    sources: [
      {
        label: "Income Tax Department individual having income from business or profession AY 2026-27",
        url: "https://www.incometax.gov.in/iec/foportal/help/individual-business-profession",
      },
      {
        label: "Income Tax Returns FAQs",
        url: "https://www.incometax.gov.in/iec/foportal/node/11724",
      },
    ],
  },
  {
    id: "sc-br-foreign-rent-carne-leao-delay",
    slug: "brazil-resident-foreign-rent-waits-for-annual-irpf",
    title: "Brazilian resident receives foreign rent and assumes the annual IRPF return is the first moment tax becomes real",
    summary: "A landlord receives money from abroad and thinks the tax question stays dormant until the annual return season, even though the monthly Carnê-Leão logic is already live.",
    seoTitle: "Scenario: Brazil foreign rent and Carnê-Leão timing",
    seoDescription: "A practical Brazil scenario explaining why foreign rent can trigger monthly Carnê-Leão attention before the annual IRPF return is prepared.",
    situation: "A Brazilian resident starts receiving rental income from property located outside Brazil. Because no employer or Brazilian payer is withholding locally, the taxpayer assumes it is fine to gather the records slowly and deal with everything only during the next annual IRPF filing.",
    sections: [
      {
        heading: "Why the calendar is being misunderstood",
        body: `Receita's Carnê-Leão guidance exists precisely for income that does not flow through ordinary payroll-style withholding. Foreign-source income can trigger monthly attention during the year, which means the annual return is not the start of the tax story. It is the reconciliation point for a tax story that may already have been running month by month.`,
      },
      {
        heading: "Why foreign income feels distant and still creates a Brazilian tax workflow",
        body: `Taxpayers often think in geographic emotion: if the rent was paid abroad and the property is abroad, maybe the Brazilian compliance question can wait. Receita's materials push against that instinct. The tax system follows the income category and the timing logic, not the taxpayer's psychological sense of where the money still 'belongs.'`,
      },
      {
        heading: "What the taxpayer should do now",
        body: `The landlord should build a monthly record trail, test the Carnê-Leão position during the year and then use the annual return to reconcile rather than to invent the tax story from scratch. In Brazil, foreign rent is safest when treated as a live monthly workflow, not as an annual memory exercise.`,
      },
    ],
    actionChecklist: [
      "Check whether the foreign rental receipts belong in the Carnê-Leão workflow.",
      "Keep monthly records of receipts, exchange context and supporting documents.",
      "Do not wait until the annual IRPF return to discover the timing logic.",
      "Use the annual return to reconcile the monthly story rather than to build it late.",
    ],
    sources: [
      {
        label: "Receita Federal Rendimentos sujeitos ao Carnê-Leão",
        url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/pagamento/carne-leao/rendimentos",
      },
      {
        label: "Receita Federal Manual do Carnê-Leão",
        url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/pagamento/carne-leao/manual",
      },
    ],
  },
  {
    id: "sc-nl-kor-threshold-breach",
    slug: "netherlands-kor-threshold-breach-during-the-year",
    title: "Dutch small business on the KOR crosses the threshold and keeps invoicing as if nothing changed",
    summary: "A small Dutch business likes the simplicity of the KOR and misses the point where the exemption stops being available immediately rather than sometime next quarter.",
    seoTitle: "Scenario: Netherlands KOR threshold breach during the year",
    seoDescription: "A practical Netherlands scenario explaining why crossing the KOR threshold ends the exemption immediately and changes the VAT treatment of the triggering transaction.",
    situation: "A Dutch sole trader is using the KOR and has become used to sending invoices without VAT. A strong run of sales pushes turnover above EUR 20,000, but the owner assumes only the excess over the threshold will become taxable later and keeps using the old invoice pattern.",
    sections: [
      {
        heading: "What the KOR actually switched off",
        body: `Belastingdienst describes the KOR as a real VAT exemption: no VAT charged, no regular VAT returns and no deduction of input VAT on costs and investments. That is why the scheme feels light while the business stays inside it. But the same structure is what makes the exit so important. The business is not just crossing a number. It is leaving an entire VAT posture.`,
      },
      {
        heading: "Why the threshold break is harsher than many small businesses expect",
        body: `Belastingdienst says that once turnover exceeds EUR 20,000 in a calendar year, the business may no longer use the KOR and must deregister immediately. It also says the supply that pushes turnover over the threshold is itself fully taxable, not just the slice above the limit. That is the exact point many owners miss because they think in marginal arithmetic instead of in exemption status.`,
      },
      {
        heading: "What the trader should do next",
        body: `The owner should stop treating the KOR as active, correct the VAT treatment of the triggering sale if needed, and rebuild the invoice and filing process immediately. In the Netherlands, the KOR is easy to enjoy and easy to misread. The safe habit is to watch turnover before the next invoice is issued, not after the threshold has already been broken.`,
      },
    ],
    actionChecklist: [
      "Monitor KOR turnover live instead of estimating it casually at year-end.",
      "Treat the threshold-breaking supply as a normal VAT event, not as a partially exempt one.",
      "Deregister from the KOR immediately once the threshold is exceeded.",
      "Update invoicing and bookkeeping before the next sale is processed.",
    ],
    sources: [
      {
        label: "Wat betekent meedoen met de kleineondernemersregeling (KOR)?",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/kleineondernemersregeling/wat-betekent-meedoen-met-de-kleineondernemersregeling/",
      },
      {
        label: "Afmelden kleineondernemersregeling (KOR)",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/afmelden-kor",
      },
    ],
  },
  {
    id: "sc-mx-monthly-provisional-delay",
    slug: "mexico-company-founder-waits-for-annual-tax-season",
    title: "Mexican company founder thinks the 30% annual rate matters more than the monthly provisional-payment reality",
    summary: "A new company fixates on the headline corporate tax rate and only later realizes that SAT expects monthly declarations and payment behaviour almost immediately.",
    seoTitle: "Scenario: Mexico company founder delaying monthly provisional payments",
    seoDescription: "A practical Mexico scenario showing why monthly provisional declarations matter before the annual corporate return is even close.",
    situation: "A founder incorporates a Mexican company and hears the familiar 30% ISR headline. Because the annual return still feels far away, the company focuses on sales and basic bookkeeping and assumes tax will become a serious issue only when the first full-year filing season arrives.",
    sections: [
      {
        heading: "Why the annual-rate mindset causes the first mistake",
        body: `SAT's monthly-declarations service makes it plain that provisional or definitive federal tax declarations for companies are handled through a recurring monthly system. So the company is not living in a space where tax sleeps until the annual return. The annual rate may describe the broader burden, but the operating rhythm is already monthly.`,
      },
      {
        heading: "How the monthly deadline changes the bookkeeping standard",
        body: `SAT says the monthly provisional or definitive payment is generally due by the 17th of the following month, with the schedule then adjusted by RFC-digit rules. That means records, reconciliations and tax data need to mature much earlier than many founders expect. A company that treats monthly tax as optional until scale arrives is really choosing late compliance as a business model.`,
      },
      {
        heading: "What the company should do before the gap gets bigger",
        body: `The founder should rebuild the tax calendar around the monthly declaration cycle and test the company's data flow against that reality immediately. In Mexico, the smarter question is not just what the annual ISR rate is. It is whether the company can meet the monthly tax rhythm that makes the annual rate meaningful in practice.`,
      },
    ],
    actionChecklist: [
      "Build a monthly SAT tax calendar rather than planning only for the annual return.",
      "Prepare company records in time for provisional or definitive monthly declarations.",
      "Watch the 17th-of-the-following-month deadline and the RFC-digit timetable.",
      "Treat monthly tax readiness as part of launch operations, not as a later finance upgrade.",
    ],
    sources: [
      {
        label: "Pagos provisionales o definitivos de personas morales",
        url: "https://wwwmatnp.sat.gob.mx/declaracion/95291/declaracion-mensual-para-tu-empresa-en-el-servicio-de-declaraciones-y-pagos",
      },
      {
        label: "Artículo 14 ISR",
        url: "https://wwwmat.sat.gob.mx/articulo/36326/articulo-14",
      },
    ],
  },
  {
    id: "sc-ch-source-tax-new-arrival",
    slug: "switzerland-foreign-worker-source-tax-assumption",
    title: "Foreign worker in Switzerland assumes tax at source means there is nothing left to understand or check",
    summary: "A newly arrived employee sees tax withheld from salary and mistakes that for a fully uniform Swiss tax experience with no local variation or follow-up awareness needed.",
    seoTitle: "Scenario: Switzerland foreign worker tax at source assumption",
    seoDescription: "A practical Switzerland scenario explaining why tax at source can simplify payroll while still requiring workers to understand canton-based withholding and the broader tax position.",
    situation: "A foreign employee moves to Switzerland without a C permit and starts work quickly. The employer deducts tax at source from salary, so the employee assumes the Swiss tax position is now fully solved and that there is no need to learn anything further about canton differences or the broader return framework.",
    sections: [
      {
        heading: "What tax at source actually solves",
        body: `ch.ch explains that tax at source is deducted directly from salary and mainly concerns foreign residents without a C permit, with the employer forwarding the amount to the cantonal authorities. That does simplify the immediate payroll experience. But it solves a specific collection problem, not every question the employee might later have about Swiss taxation, canton logic or filing context.`,
      },
      {
        heading: "Why the uniform-national-rate assumption is wrong",
        body: `The same guidance says tax-at-source rates vary by canton. That matters because many new arrivals hear only that tax is being withheld and mentally convert that into 'the Swiss rate.' In reality, local structure still matters. Switzerland is streamlining collection here, not replacing its layered federal-cantonal-communal tax design with one flat nationwide payroll story.`,
      },
      {
        heading: "How the employee should think about the position",
        body: `The worker should treat withholding as a real compliance mechanism while still learning which canton is driving the rate and what documents or later review points may still matter. In Switzerland, tax at source reduces friction, but it does not excuse the taxpayer from understanding the system they have entered.`,
      },
    ],
    actionChecklist: [
      "Confirm whether the worker is inside the Swiss tax-at-source population.",
      "Identify which canton is driving the withheld rate logic.",
      "Keep payslips and employer withholding records instead of assuming the payroll deduction makes documentation irrelevant.",
      "Treat source withholding as a collection method, not as proof that every tax question is permanently closed.",
    ],
    sources: [
      {
        label: "Tax at source",
        url: "https://www.ch.ch/en/taxes-and-finances/types-of-taxation/tax-at-source/",
      },
      {
        label: "Tax return",
        url: "https://www.ch.ch/en/taxes-and-finances/tax-return/",
      },
    ],
  },
  {
    id: "sc-ca-fhsa-hbp-sequencing",
    slug: "canada-first-home-buyer-fhsa-and-hbp-sequencing",
    title: "Canadian first-home buyer wants to use both an FHSA and the Home Buyers' Plan without checking the sequencing",
    summary: "A buyer hears that both programs can help with the same purchase and starts moving money before making sure the withdrawal rules, home conditions and documentation line up.",
    seoTitle: "Scenario: Canada FHSA and Home Buyers' Plan for the same home",
    seoDescription: "A practical Canada scenario explaining why FHSA and Home Buyers' Plan withdrawals can work together only when the qualifying conditions and timing are handled carefully.",
    situation: "A Canadian buyer signs a purchase agreement for a first home and quickly decides to use both the FHSA and an RRSP withdrawal under the Home Buyers' Plan. Because both programs sound supportive and tax-smart, the buyer assumes the two withdrawals can simply be pulled whenever cash is needed.",
    sections: [
      {
        heading: "Why the idea is attractive and still not automatic",
        body: `CRA says a qualifying FHSA withdrawal can be tax-free and that an eligible participant can also use the Home Buyers' Plan for the same qualifying home if both sets of conditions are met. That is the encouraging part. But the sentence only works because it is full of conditions. The programs can coexist, but they do not bypass their own rules merely because the same home is involved.`,
      },
      {
        heading: "Where buyers get sloppy",
        body: `FHSA withdrawals and HBP withdrawals are not just cash events. They are structured tax events tied to residency, qualifying-home rules, purchase timing, forms and later repayment obligations for the HBP. Buyers often get caught because real-estate urgency compresses those steps into a general feeling of 'move the money now and sort the rest later.' CRA's guidance is built to stop exactly that kind of sequence error.`,
      },
      {
        heading: "What the purchase file should look like",
        body: `The buyer should align the agreement date, withdrawal requests, FHSA conditions and HBP documentation before moving funds. In Canada, the smartest home-purchase file is one where the tax program rules are assembled before closing pressure turns every decision into a rush decision.`,
      },
    ],
    actionChecklist: [
      "Confirm the home and buyer qualify for both FHSA and HBP treatment before withdrawing.",
      "Map the withdrawal timing against the purchase timeline rather than improvising it.",
      "Keep the FHSA and HBP documentation together in the same home-purchase file.",
      "Plan for HBP repayment as part of the purchase decision rather than as an afterthought.",
    ],
    sources: [
      {
        label: "The Home Buyers' Plan (HBP)",
        url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html",
      },
      {
        label: "Withdrawals and transfers out of your FHSAs",
        url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/withdrawals-transfers-out-your-fhsas.html",
      },
    ],
  },
  {
    id: "sc-au-home-internet-no-records",
    slug: "australia-freelancer-claims-home-internet-without-records",
    title: "Australian freelancer claims a large share of home internet and phone costs with almost no records",
    summary: "A self-employed worker knows home connectivity really is used for business and mistakes that practical truth for permission to claim by impression rather than by evidence.",
    seoTitle: "Scenario: Australia freelancer claiming home internet without records",
    seoDescription: "A practical Australia scenario explaining why work-use apportionment of home internet and phone costs still needs evidence rather than a rough personal estimate.",
    situation: "An Australian freelancer works from home most days and genuinely uses the household internet and phone for clients. At tax time, the person decides to claim a large percentage of the bundled household bill based on feel, without diary evidence, clear apportionment or a record of business versus private use.",
    sections: [
      {
        heading: "Why the basic instinct feels right",
        body: `The freelancer is not wrong that work uses the connection. The ATO's home-phone-and-internet guidance assumes mixed-use services are common. The tax problem begins one step later, when the taxpayer treats obvious business use as though it automatically defines the deductible percentage of the whole household service.`,
      },
      {
        heading: "What the ATO still expects",
        body: `The ATO keeps returning to apportionment and records because home connectivity is mixed-use by nature. Bundled services make the claim feel more intuitive, but they actually make proof more important. The deduction works best when it is traced, measured and boring, not when it is emotionally plausible and mathematically vague.`,
      },
      {
        heading: "How the claim should be rebuilt",
        body: `The freelancer should reconstruct the claim with diary support, bills and a reasoned work-use method that can be explained calmly later. In Australia, home internet deductions usually go wrong not because work use was absent, but because the taxpayer assumed real work use eliminated the need for evidence.`,
      },
    ],
    actionChecklist: [
      "Separate genuine work use from total household use instead of claiming by intuition.",
      "Use diary evidence, bills and a defensible apportionment method.",
      "Treat bundled home services as mixed-use by default.",
      "Rebuild the deduction now rather than waiting for an ATO challenge to force the calculation later.",
    ],
    sources: [
      {
        label: "ATO home phone and internet expenses",
        url: "https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/tools-computers-and-items-you-use-for-work/home-phone-and-internet-expenses",
      },
      {
        label: "ATO home-based business expenses",
        url: "https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/tax-time/tax-time-toolkits/tax-time-toolkit-small-business/small-business-guides/home-based-business-expenses",
      },
    ],
  },
];
