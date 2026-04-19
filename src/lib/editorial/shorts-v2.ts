// Editorial tax shorts — auto-extracted from Codex output
export interface TaxShort {
  id: string;
  slug: string;
  title: string;
  hook: string;
  body: string;
  close: string;
  seoTitle: string;
  seoDescription: string;
  sources: Array<{
    label: string;
    url: string;
  }>;
}

export const TAX_SHORTS: TaxShort[] = [
  {
    id: "short-feie-vs-ftc",
    slug: "feie-vs-foreign-tax-credit",
    title: "The foreign earned income exclusion is not the same thing as the foreign tax credit",
    hook: "A lot of expats talk about FEIE and the foreign tax credit like they are two buttons that do the same job. They are not.",
    body: "The IRS treats the FEIE as an exclusion for qualifying foreign earned income, while the foreign tax credit offsets U.S. tax with qualifying foreign tax paid or accrued. The practical trap is thinking you can stack both reliefs on the same excluded income. Publication 54 and Publication 514 point in the opposite direction.",
    close: "The smart move is to model the same income both ways before filing instead of assuming foreign withholding solved the U.S. return automatically.",
    seoTitle: "FEIE vs foreign tax credit in one short explanation",
    seoDescription: "A short IRS-based explanation of why the FEIE and the foreign tax credit work differently for U.S. taxpayers abroad.",
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
    id: "short-switzerland-vat",
    slug: "switzerland-vat-is-81-not-77",
    title: "Switzerland VAT is not 7.7% anymore",
    hook: "If someone is still quoting 7.7% Swiss VAT in 2026, they are already working from stale material.",
    body: "The Federal Tax Administration says the normal Swiss VAT rate is 8.1%. It also says VAT returns and payment are generally due within 60 days after the reporting period. So the issue is not only the updated rate. It is also whether the business is actually running on the live timetable.",
    close: "Swiss VAT errors often start with old assumptions that nobody thought to update after the rate change.",
    seoTitle: "Switzerland VAT short: 8.1% and 60-day deadline",
    seoDescription: "A short official-source note on the current Swiss VAT rate and the 60-day filing and payment timetable.",
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
    id: "short-mexico-monthly-tax",
    slug: "mexico-company-tax-is-monthly-before-march",
    title: "In Mexico, company tax pressure starts long before the annual return",
    hook: "A March deadline makes people think Mexico company tax is an annual event. It is not.",
    body: "Article 14 of the ISR law points companies toward monthly provisional payments, generally by the 17th day of the following month. The March annual return is still important, but SAT's own materials make clear that the company has already been living inside the tax system throughout the year.",
    close: "If a founder only thinks about tax in late March, the real problem usually started months earlier.",
    seoTitle: "Mexico tax short: monthly filings matter before the March return",
    seoDescription: "A short SAT-based note on why Mexican company tax is a monthly discipline, not just a March annual return task.",
    sources: [
      {
        label: "Artículo 14 ISR",
        url: "https://wwwmat.sat.gob.mx/articulo/36326/articulo-14",
      },
      {
        label: "Declaración Anual 2025 Empresas",
        url: "https://www.sat.gob.mx/minisitio/DeclaracionAnual/Empresas/index.html",
      },
    ],
  },
  {
    id: "short-indonesia-vat-11-12",
    slug: "indonesia-vat-looks-like-11-inside-12-framework",
    title: "Indonesia's VAT headline and business reality can sound different at the same time",
    hook: "People keep arguing about whether Indonesian VAT is 11% or 12%. The official answer is more precise than either slogan.",
    body: "The tax authority says Indonesia moved into a 12% VAT framework from 1 January 2025. But it also explains the 11/12 tax-base mechanism for many non-luxury goods and services, which keeps the practical burden at 11% in those cases. That is why both numbers keep showing up in conversations.",
    close: "The safe habit is to ask which supplies are covered by the 11/12 mechanism instead of trying to win the argument with one headline number.",
    seoTitle: "Indonesia VAT short: why 12% can still feel like 11%",
    seoDescription: "A short official-source explanation of Indonesia's 12% VAT framework and the effective 11% treatment for many non-luxury supplies.",
    sources: [
      {
        label: "Pemerintah Terbitkan Aturan DPP Nilai Lain dan Besaran Tertentu PPN",
        url: "https://www.pajak.go.id/index.php/en/node/114038",
      },
      {
        label: "Penyesuaian Tarif PPN, Pajak Sidrap Jelaskan Perhitungannya",
        url: "https://www.pajak.go.id/en/node/113886",
      },
    ],
  },
  {
    id: "short-indonesia-article-25",
    slug: "indonesia-startups-need-article-25-calendar",
    title: "An Indonesian startup needs a monthly tax calendar before it needs tax panic",
    hook: "The 22% corporate headline is easy to remember. The Article 25 timetable is what actually changes founder behavior.",
    body: "Indonesia's corporate tax rules are not only about the annual rate. The tax authority also expects Article 25 monthly installments, which means tax becomes an operating rhythm rather than a year-end surprise. Founders who postpone tax planning until the annual return usually discover that the real system was monthly all along.",
    close: "A startup that has real revenue should build the tax calendar early, not after the first avoidable filing miss.",
    seoTitle: "Indonesia tax short: why Article 25 matters for startups",
    seoDescription: "A short official-source explanation of why Indonesian startups need to plan around Article 25 monthly tax installments.",
    sources: [
      {
        label: "Income Tax Calculation Mechanism Entity",
        url: "https://pajak.go.id/en/income-tax-calculation-mechanism-entity",
      },
      {
        label: "Calculation of Article 25 Income Tax Installment",
        url: "https://pajak.go.id/en/calculation-article-25-income-tax-installment",
      },
    ],
  },
  {
    id: "short-uk-crypto-two-tax-moments",
    slug: "uk-crypto-receipt-and-sale-are-different-tax-moments",
    title: "Crypto can be taxed in the UK before you ever cash out",
    hook: "One of the most expensive crypto myths is that tax only appears when pounds hit the bank.",
    body: "HMRC treats receipt and disposal as different moments. Tokens received through routes like staking can create Income Tax issues, and a later sale or exchange can still create Capital Gains Tax. The same tokens can therefore move through more than one tax lens over time.",
    close: "If you only start record-keeping at disposal, you may already be missing the first half of the tax story.",
    seoTitle: "UK crypto tax short: receipt and disposal are separate moments",
    seoDescription: "A short HMRC-based explanation of why receiving crypto and later disposing of it can trigger different UK tax consequences.",
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
    id: "short-uk-marketplace-vat",
    slug: "uk-marketplace-vat-does-not-end-seller-obligations",
    title: "Marketplace VAT rules do not make an overseas seller disappear",
    hook: "Saying 'the platform handles VAT' is often only half the truth for overseas sellers into the UK.",
    body: "HMRC says marketplaces can become liable for VAT on certain sales, including important low-value and UK-held-stock cases. But the same official guidance also leaves room for import VAT, customs and registration questions on the seller side. So platform liability on the sale does not always mean the seller is out of the tax picture.",
    close: "For e-commerce businesses, the safest question is not who charged VAT on the order, but what obligations still exist around stock, imports and registration.",
    seoTitle: "UK marketplace VAT short for overseas sellers",
    seoDescription: "A short HMRC-based note on marketplace VAT rules and why overseas sellers can still have import and registration obligations.",
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
    id: "short-eu-oss-one-portal",
    slug: "eu-oss-one-portal-not-one-rate",
    title: "The EU VAT OSS gives you one portal, not one VAT rate",
    hook: "A lot of SaaS founders hear 'one-stop shop' and imagine one simple EU-wide VAT percentage. That is not what the scheme does.",
    body: "The EU's own guidance says the non-Union OSS can let a non-EU supplier file through one member state of identification for covered B2C services. But it also says VAT is still charged at the customer's country rate. The admin gets centralised. The destination rule does not.",
    close: "If you remember one line, remember this one: one portal for many VAT obligations is still many VAT obligations.",
    seoTitle: "EU OSS short: one portal does not mean one VAT rate",
    seoDescription: "A short EU-source note explaining that the VAT OSS simplifies filing but still uses the customer's country VAT rate.",
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
    id: "short-estonia-22-percent-individual",
    slug: "estonia-22-percent-is-not-the-old-20",
    title: "Estonia personal tax content is outdated fast if it still says 20%",
    hook: "There are still a lot of stale Estonia tax explainers floating around with the old 20% number.",
    body: "The Estonian Tax and Customs Board says that from 2025, employment income, business income and other core income categories are taxed at 22%. The system is still simpler than many multi-band regimes, but that does not make outdated rate content harmless. One stale number can make the whole answer unreliable.",
    close: "If an Estonia tax guide still leads with 20%, it is a warning sign to stop trusting the rest of the page too quickly.",
    seoTitle: "Estonia tax short: the current individual rate is 22%",
    seoDescription: "A short official-source note explaining that Estonia's current headline individual income tax rate is 22% from 2025.",
    sources: [
      {
        label: "Income and social taxes",
        url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes",
      },
      {
        label: "Income tax and basic exemption",
        url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/income-tax-and-basic-exemption",
      },
    ],
  },
  {
    id: "short-uk-self-assessment-penalties",
    slug: "uk-self-assessment-penalties-start-before-you-feel-in-trouble",
    title: "UK Self Assessment penalties start before a lot of first-time filers realise the problem is real",
    hook: "A surprising number of UK freelancers still treat the tax return deadline like a soft warning rather than a legal deadline.",
    body: "HMRC's penalties page makes the timetable harder-edged than many first-time filers expect. Missing the filing deadline can trigger an immediate late-filing penalty, and longer delays can stack further amounts on top. The practical point is not just that penalties exist. It is that the UK system gets expensive fast when someone waits for a reminder that never comes.",
    close: "If a new filer has to learn one lesson early, it is this: Self Assessment deadlines are part of the job, not admin that can float into the next month.",
    seoTitle: "UK Self Assessment short: penalties start quickly",
    seoDescription: "A short HMRC-based note explaining why late UK Self Assessment filing gets expensive quickly for first-time taxpayers.",
    sources: [
      {
        label: "Self Assessment tax returns: penalties",
        url: "https://www.gov.uk/self-assessment-tax-returns/penalties",
      },
    ],
  },
  {
    id: "short-ireland-vat-thresholds",
    slug: "ireland-vat-thresholds-change-with-the-business-model",
    title: "Ireland VAT registration thresholds are not one universal number",
    hook: "If someone quotes one Irish VAT threshold without asking what the business actually sells, they are skipping the useful part.",
    body: "Revenue's guidance separates the thresholds by activity, including different headline levels for services-only businesses and for goods businesses. That means the right Irish VAT conversation starts with the revenue model, not with a single memorised number. Founders who miss that point often misjudge how soon VAT becomes an issue.",
    close: "In Ireland, the threshold question is really a business-model question wearing a VAT label.",
    seoTitle: "Ireland VAT short: thresholds depend on what the business sells",
    seoDescription: "A short Revenue-based explanation of why Irish VAT registration thresholds differ between services and goods businesses.",
    sources: [
      {
        label: "What are the VAT thresholds?",
        url: "https://www.revenue.ie/en/vat/vat-registration/who-should-register-for-vat/vat-thresholds.aspx",
      },
    ],
  },
  {
    id: "short-uae-natural-person-threshold",
    slug: "uae-natural-person-corporate-tax-turns-on-business-turnover",
    title: "UAE natural-person corporate tax is a turnover question, not just a legal-form question",
    hook: "A lot of solo operators in the UAE still think trading personally means corporate tax can never become their problem.",
    body: "The FTA's natural-person guidance focuses on whether business or business-activity turnover exceeds AED 1 million in a calendar year. That means personal-name trading does not end the analysis. It changes the analysis. The right question becomes how much qualifying business turnover exists, not whether a company was incorporated.",
    close: "The old UAE tax slogan is not good enough anymore for people running real business activity.",
    seoTitle: "UAE tax short: natural-person corporate tax follows turnover",
    seoDescription: "A short official-source explanation of why UAE natural-person corporate tax depends on business turnover, not only on legal form.",
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
    id: "short-hk-source-facts",
    slug: "hong-kong-territorial-tax-is-not-automatic-offshore-status",
    title: "Hong Kong territorial taxation is not the same thing as automatic offshore status",
    hook: "Foreign customers and foreign bank receipts do not answer the whole Hong Kong profits-tax question by themselves.",
    body: "Hong Kong's official profits-tax guidance is based on whether profits arise in or are derived from Hong Kong from a business carried on in Hong Kong. That is a factual source test, not a customer-location shortcut. The dangerous oversimplification is turning 'territorial system' into 'foreign clients mean untaxed profits.'",
    close: "A Hong Kong founder needs a source analysis, not a slogan.",
    seoTitle: "Hong Kong tax short: territorial does not mean automatic offshore",
    seoDescription: "A short Hong Kong official-source note explaining why territorial taxation still depends on source facts, not just overseas clients.",
    sources: [
      {
        label: "Profits Tax overview",
        url: "https://www.gov.hk/en/residents/taxes/profits/index.htm",
      },
    ],
  },
  {
    id: "short-switzerland-layered-tax",
    slug: "switzerland-company-tax-is-not-one-national-soundbite",
    title: "Swiss company tax is not one neat national percentage",
    hook: "People often quote Switzerland like it has one obvious company-tax rate. The official picture is more layered than that.",
    body: "The Swiss federal overview explains that federal, cantonal and communal levels all matter. Even the federal direct profit tax does not tell the whole story on its own. That is why casual one-number comparisons with other countries can make Switzerland sound simpler than it really is for planning.",
    close: "Switzerland can still be attractive, but only after the layered structure is taken seriously.",
    seoTitle: "Switzerland tax short: company tax is layered",
    seoDescription: "A short official-source note explaining why Swiss company tax planning requires more than one national headline rate.",
    sources: [
      {
        label: "The Swiss Tax System (Publication)",
        url: "https://www.estv.admin.ch/en/the-swiss-tax-system-publication",
      },
    ],
  },
  {
    id: "short-us-treaty-forms",
    slug: "us-treaty-forms-depend-on-the-income-type",
    title: "U.S. treaty relief starts with the income type before it starts with the treaty rate",
    hook: "Foreign recipients often ask whether a treaty rate applies before they ask what kind of payment is actually being made.",
    body: "The IRS guidance does not let those questions run in that order. Different treaty-claim forms are used depending on the income category, with W-8BEN or W-8BEN-E commonly used for many non-personal-services claims and Form 8233 used for qualifying personal-services income. Publication 515 matters because the default withholding background is still there until valid treaty relief is documented.",
    close: "The first treaty mistake is usually form confusion, not rate confusion.",
    seoTitle: "U.S. treaty short: the right form depends on the payment type",
    seoDescription: "A short IRS-based explanation of why treaty withholding claims depend on the income type and the correct supporting form.",
    sources: [
      {
        label: "Claiming tax treaty benefits",
        url: "https://www.irs.gov/individuals/international-taxpayers/claiming-tax-treaty-benefits",
      },
      {
        label: "Publication 515",
        url: "https://www.irs.gov/publications/p515",
      },
    ],
  },
  {
    id: "short-fbar-vs-form-8938",
    slug: "fbar-is-not-form-8938",
    title: "FBAR and Form 8938 are not interchangeable foreign-account checklists",
    hook: "A lot of U.S. taxpayers talk about FBAR and Form 8938 like one filing can stand in for the other.",
    body: "The IRS publishes a comparison table for a reason. FBAR is a separate foreign-account reporting regime with its own filing logic, while Form 8938 sits inside the tax-return system with different thresholds and asset rules. Some taxpayers need one, some need both, and treating them as duplicates is how reporting gaps begin.",
    close: "If foreign-account reporting is in play, the first useful question is not 'Did I file something?' It is 'Did I file the right thing?'",
    seoTitle: "FBAR vs Form 8938 short: why they are not the same filing",
    seoDescription: "A short IRS-based explanation of why FBAR and Form 8938 have different thresholds, filing systems, and reporting scopes for U.S. taxpayers.",
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
    id: "short-uk-us-treaty-paperwork",
    slug: "uk-us-treaty-rate-needs-paperwork",
    title: "A UK-US treaty rate still needs paperwork before it becomes real at source",
    hook: "A tax treaty does not usually reduce UK withholding by magic just because the taxpayer can quote the treaty article.",
    body: "HMRC's own materials point U.S. residents toward a real claim workflow, including form US-Individual 2002 for certain income streams and supporting treaty analysis under HS304. That means the practical issue is not only whether the treaty provides relief. It is whether the taxpayer has actually organised the claim in the way HMRC expects.",
    close: "In treaty work, the missing form is often more expensive than the missing theory.",
    seoTitle: "UK-US treaty short: relief at source still needs the claim paperwork",
    seoDescription: "A short HMRC-based explanation of why UK-US treaty relief depends on forms, evidence, and an actual claim process rather than assumption.",
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
    id: "short-estonia-distributed-profits",
    slug: "estonia-taxes-distributed-profit-timing",
    title: "Estonia taxes the extraction of company profit, not just the existence of profit",
    hook: "People still describe Estonia like it has no company tax, which is close enough to mislead and far enough to hurt.",
    body: "EMTA's current guidance is more precise. Company-level tax is triggered on distributed profits, and the current general rate on distributions is 22/78. That means retained earnings and paid-out earnings do not sit in the same timing bucket. Estonia is unusual, but it is not untaxed.",
    close: "The founder question in Estonia is not whether profit exists. It is when the profit will leave the company.",
    seoTitle: "Estonia tax short: distributed profits are the real trigger",
    seoDescription: "A short EMTA-based explanation of why Estonian company tax centers on profit distribution timing and the current 22/78 rate.",
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
    id: "short-us-retirement-limits-2026",
    slug: "us-retirement-contribution-limits-2026",
    title: "U.S. retirement planning numbers changed again for 2026, so old contribution caps are already stale",
    hook: "If someone is still planning 2026 retirement contributions off last year's limits, the spreadsheet is already behind.",
    body: "The IRS announced a 2026 401(k) limit of $24,500 and an IRA limit of $7,500, with separate catch-up figures continuing to matter for older taxpayers. The COLA guidance matters because these are planning numbers, not trivia. Salary deferral decisions and owner-compensation models often get adjusted around them.",
    close: "Retirement tax planning ages badly when the limits move and the model does not.",
    seoTitle: "U.S. retirement short: 2026 contribution limits changed again",
    seoDescription: "A short IRS-based note on the 2026 401(k) and IRA contribution limits and why retirement planning assumptions need a fresh update.",
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
    id: "short-ireland-vat-modernisation",
    slug: "ireland-vat-modernisation-is-about-systems",
    title: "Ireland's VAT modernisation story is now about systems, not new VAT rates",
    hook: "Revenue's eInvoicing push matters even if no VAT percentage changed on your invoice.",
    body: "Revenue's VAT modernisation materials make clear that the reform is aimed at structured eInvoicing and real-time reporting, not a rewrite of VAT rates or liability rules. For businesses, that means the pressure point is software, data quality and invoicing process design. The tax amount may look familiar while the compliance mechanics change around it.",
    close: "The operational risk is not misremembering a rate. It is being digitally unready when the invoicing rules harden.",
    seoTitle: "Ireland VAT short: modernisation is about eInvoicing systems",
    seoDescription: "A short Revenue-based explanation of why Ireland's VAT modernisation drive is centered on eInvoicing and reporting systems, not rates.",
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
    id: "short-indonesia-coretax-domain",
    slug: "indonesia-coretax-domain-is-a-compliance-issue",
    title: "For Coretax DJP, the official domain is part of tax compliance, not just web hygiene",
    hook: "A fake tax portal can create a tax problem just as fast as a missed filing can.",
    body: "DJP's January 2026 warning says official Coretax access is only through coretaxdjp.pajak.go.id, while the Coretax portal page on pajak.go.id points taxpayers to the same address. That makes domain-checking part of the real compliance workflow. In a digital system, giving credentials to the wrong site is not just an IT mistake.",
    close: "The safest habit here is simple: start from pajak.go.id or type the official Coretax domain yourself.",
    seoTitle: "Indonesia Coretax short: the official domain is part of compliance",
    seoDescription: "A short DJP-based explanation of why using the official Coretax domain matters for secure Indonesian tax compliance in 2026.",
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
    id: "short-canada-gst-threshold",
    slug: "canada-gst-hst-threshold-is-rolling",
    title: "Canada's GST/HST threshold is a rolling test, not just a year-end number",
    hook: "A lot of small businesses still think GST/HST registration only matters once the calendar year crosses CA$30,000.",
    body: "CRA guidance is more precise than that. Small-supplier status depends on staying at or below CA$30,000 in any single calendar quarter and over the last four consecutive calendar quarters. RC4022 also shows that the timing changes depending on how the threshold is crossed, which is why a founder who waits for year-end can already be late.",
    close: "In Canada, the safer habit is to watch taxable revenue quarter by quarter instead of treating GST/HST as a December surprise.",
    seoTitle: "Canada GST/HST short: the threshold is rolling, not just annual",
    seoDescription: "A short CRA-based explanation of why Canada's GST/HST registration threshold uses single-quarter and four-quarter tests rather than a simple year-end tally.",
    sources: [
      {
        label: "General Information for GST/HST Registrants",
        url: "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4022/general-information-gst-hst-registrants.html",
      },
    ],
  },
  {
    id: "short-singapore-ir21",
    slug: "singapore-ir21-is-an-employer-workflow",
    title: "In Singapore, IR21 tax clearance is an employer workflow, not a farewell afterthought",
    hook: "If a foreign employee is leaving Singapore and payroll treats IR21 as optional cleanup, the risk starts before the last payslip.",
    body: "IRAS says employers generally need to file Form IR21 at least one month before a non-Singapore citizen employee ceases employment, goes on an overseas posting, or leaves Singapore for more than three months. The same guidance also points employers to withhold monies due once the departure trigger is live. That makes tax clearance an operational process, not a casual end-of-employment form.",
    close: "The practical Singapore question is usually not whether the employee remembers tax, but whether the employer ran clearance on time.",
    seoTitle: "Singapore IR21 short: tax clearance is an employer process",
    seoDescription: "A short IRAS-based explanation of why IR21 tax clearance for departing foreign employees is an employer workflow with timing and withholding consequences.",
    sources: [
      {
        label: "IRAS Tax Clearance for Employees",
        url: "https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-%28ir21%29/tax-clearance-for-employees",
      },
      {
        label: "Getting Tax Clearance A Step-by-Step Guide",
        url: "https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-%28ir21%29/getting-tax-clearance-a-step-by-step-guide",
      },
    ],
  },
  {
    id: "short-japan-side-income",
    slug: "japan-year-end-adjustment-is-not-always-the-end",
    title: "A Japanese salary earner can still need a final return after year-end adjustment",
    hook: "Year-end adjustment makes many employees feel finished, but the NTA does not treat every salary earner as done.",
    body: "Japan's NTA explains that most wage earners finish through year-end adjustment, but it also lists cases where a final return is still required. Two of the most common triggers are employment income above 20 million yen or side income above the 200,000-yen threshold. So the question is not only whether payroll adjusted tax. It is whether other facts reopened the filing job.",
    close: "In Japan, year-end adjustment solves many salary cases, but it does not erase side-income filing rules.",
    seoTitle: "Japan tax short: year-end adjustment does not always end filing",
    seoDescription: "A short NTA-based explanation of when Japanese salary earners still need a final tax return after year-end adjustment.",
    sources: [
      {
        label: "No.12018 Wage earners who must file a final tax return",
        url: "https://www.nta.go.jp/english/taxes/individual/12018.htm",
      },
    ],
  },
  {
    id: "short-netherlands-kor-tradeoff",
    slug: "netherlands-kor-trades-admin-for-input-vat",
    title: "The Dutch KOR cuts VAT admin, but it also cuts off input VAT recovery",
    hook: "Small-business VAT relief sounds all-upside until you remember what you give up.",
    body: "Belastingdienst says that if you join the small business scheme, you generally do not charge VAT and you do not submit the normal VAT returns tied to ordinary turnover. But the same KOR guidance makes clear that you also cannot deduct or reclaim VAT charged to you. That means the scheme is not just a simplification. It is a trade-off.",
    close: "KOR works best when the admin savings are worth more than the input VAT you are leaving on the table.",
    seoTitle: "Dutch KOR short: less VAT admin also means less recovery",
    seoDescription: "A short Belastingdienst-based explanation of why the Dutch KOR reduces VAT obligations while blocking normal input VAT deduction.",
    sources: [
      {
        label: "Wat betekent meedoen met de kleineondernemersregeling (KOR)?",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/kleineondernemersregeling/wat-betekent-meedoen-met-de-kleineondernemersregeling/",
      },
      {
        label: "Is btw-aangifte doen verplicht?",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/moet-ik-altijd-btw-aangifte-doen",
      },
    ],
  },
  {
    id: "short-india-ais",
    slug: "india-ais-is-a-cross-check-not-the-return",
    title: "India's AIS is a cross-check tool, not the tax return itself",
    hook: "Opening AIS is useful, but it is not the same thing as actually finishing an ITR.",
    body: "The Income Tax Department describes AIS as a statement showing information available with the department and gives taxpayers a way to review and submit feedback on reported transactions. That makes it powerful as a mismatch detector. It does not, by itself, decide the final return position or replace classification work inside the actual filing.",
    close: "AIS is best used as an early-warning screen, not as a substitute for the return you still have to prepare.",
    seoTitle: "India AIS short: useful cross-check, not a filed return",
    seoDescription: "A short Income Tax Department explanation of why AIS helps taxpayers review data but does not replace an actual ITR filing decision.",
    sources: [
      {
        label: "AIS - Annual Information Statement",
        url: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/ais-annual-information-statement",
      },
    ],
  },
  {
    id: "short-brazil-carne-leao",
    slug: "brazil-carne-leao-is-monthly-before-the-annual-return",
    title: "In Brazil, Carnê-Leão can turn foreign or individual-source income into a monthly tax job",
    hook: "A lot of people discover Carnê-Leão when annual filing season arrives, which is later than Receita intended.",
    body: "Receita Federal explains that resident individuals receiving certain income from another individual or from abroad can fall into the monthly Carnê-Leão system. The annual return still matters, but the monthly platform is where the tax is calculated and paid along the way. Treating it as an April-only issue usually means the process started too late.",
    close: "If the income arrives month by month, Brazil may expect the tax workflow to do the same.",
    seoTitle: "Brazil Carnê-Leão short: monthly tax can start before the annual return",
    seoDescription: "A short Receita Federal explanation of why foreign-source or individual-source income in Brazil can trigger monthly Carnê-Leão obligations before the annual return.",
    sources: [
      {
        label: "Carnê-Leão",
        url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/pagamento/carne-leao",
      },
      {
        label: "Rendimentos sujeitos ao Carnê-Leão",
        url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/pagamento/carne-leao/rendimentos",
      },
    ],
  },
  {
    id: "short-australia-wfh-records",
    slug: "australia-fixed-rate-still-needs-records",
    title: "Australia's fixed-rate work-from-home method still lives or dies on records",
    hook: "The fixed rate is simpler than apportioning every bill, but it is not a free pass on evidence.",
    body: "The ATO says taxpayers using the fixed-rate method need a record of the total actual hours worked from home for the entire income year and evidence of the running expenses covered by the rate. The guidance is explicit that estimates of hours are not acceptable. So the shortcut is in the calculation, not in the record keeping.",
    close: "When an Australian work-from-home claim fails, it is often the diary, not the deduction theory, that collapses first.",
    seoTitle: "Australia WFH short: the fixed rate still needs records",
    seoDescription: "A short ATO-based explanation of why Australia's fixed-rate work-from-home method still depends on actual-hours records and expense evidence.",
    sources: [
      {
        label: "Fixed rate method",
        url: "https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/working-from-home-expenses/fixed-rate-method",
      },
    ],
  },
  {
    id: "short-france-livret-a",
    slug: "france-livret-a-is-not-ordinary-taxable-interest",
    title: "Not every French savings product belongs in the normal taxable-interest bucket",
    hook: "If someone talks about Livret A interest like ordinary taxable investment income, they are already missing a basic French carve-out.",
    body: "Service-Public explains that regulated savings books such as Livret A and the sustainable-development booklet are exempt from income tax. That matters because French investment taxation is not one uniform story. Before talking about rates, you have to know what product wrapper is generating the income.",
    close: "In France, the name of the savings vehicle often matters before the tax rate discussion even starts.",
    seoTitle: "France savings short: Livret A is not ordinary taxable interest",
    seoDescription: "A short Service-Public explanation of why regulated French savings products such as Livret A are exempt from income tax.",
    sources: [
      {
        label: "Impôt sur le revenu - Revenus d'épargne et de placement",
        url: "https://www.service-public.fr/particuliers/vosdroits/F2613",
      },
    ],
  },
  {
    id: "short-switzerland-source-tax",
    slug: "switzerland-source-tax-is-not-everyones-final-story",
    title: "Swiss tax at source is common for foreign employees, but it is not the whole story for everyone",
    hook: "Some newcomers hear 'tax at source' and assume they will never deal with a Swiss tax return.",
    body: "ch.ch explains that tax at source mainly concerns foreign residents who do not hold a C permit. Its tax-return guidance then shows the broader annual filing system that applies in ordinary cases and for many residents with different status facts. So withholding at payroll level is important, but it is not a universal rule that everyone stays outside the tax-return system forever.",
    close: "In Switzerland, residence status and personal facts matter before you assume payroll withholding is the end of compliance.",
    seoTitle: "Switzerland tax short: source tax is not the full story for everyone",
    seoDescription: "A short ch.ch explanation of why Swiss tax at source commonly applies to foreign employees but does not replace the broader tax-return framework for everyone.",
    sources: [
      {
        label: "Tax at source in Switzerland",
        url: "https://www.ch.ch/en/taxes-and-finances/types-of-taxation/tax-at-source/",
      },
      {
        label: "Tax return: Completing it, declaring your income",
        url: "https://www.ch.ch/en/taxes-and-finances/tax-return/",
      },
    ],
  },
];
