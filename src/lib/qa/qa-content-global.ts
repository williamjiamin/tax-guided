// Global country-specific Q&A threads
// 10 countries × 3 threads = 30 threads covering corporate tax, income tax, and VAT/GST

import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const GLOBAL_TAX_THREADS: QAThread[] = [

  // =====================================================
  // SINGAPORE (sg-tax)
  // =====================================================
  {
    question: {
      id: "q-sg-corporate-tax",
      title: "How does corporate tax work in Singapore?",
      body: "I'm setting up a company in Singapore and want to understand the corporate income tax structure. What is the headline rate, and are there any exemptions or incentives for startups? I've heard Singapore is very business-friendly but want the details on filing obligations.",
      author: { displayName: "Darren Loh", avatarSeed: "sg-darren-loh", badge: "new-member" as const },
      category: "sg-tax",
      tags: ["Singapore", "corporate tax", "startup exemption", "IRAS"],
      postedAt: "2025-09-12T08:30:00.000Z",
      viewCount: 2340,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in Singapore",
      seoDescription: "Learn about Singapore corporate income tax rates, startup exemptions, filing deadlines, and key rules from IRAS for companies operating in Singapore.",
    },
    answers: [{
      id: "a-sg-corporate-tax",
      questionId: "q-sg-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "Corporate Tax Rate and Partial Exemption",
            body: "Singapore has a flat corporate income tax rate of 17%, which applies to the chargeable income of all companies. However, the effective rate is often much lower thanks to a partial tax exemption scheme. For the first S$10,000 of chargeable income, companies receive a 75% exemption, and for the next S$190,000, a 50% exemption. This means a company earning S$200,000 would pay an effective rate well below 17%.\n\nFor qualifying new companies in their first three years of assessment, the Start-Up Tax Exemption (SUTE) scheme provides even more relief: a 75% exemption on the first S$100,000 and a 50% exemption on the next S$100,000 of chargeable income.",
          },
          {
            heading: "Filing Obligations and Key Deadlines",
            body: "All companies in Singapore must file two main documents with IRAS each year: the Estimated Chargeable Income (ECI) within three months of the financial year-end, and the annual Corporate Income Tax Return (Form C or Form C-S) by November 30. Form C-S is a simplified version available to companies with annual revenue of S$5 million or less.\n\nSingapore operates on a preceding-year basis, meaning income earned in Year 1 is assessed and taxed in Year 2 (the Year of Assessment). Companies must maintain proper records and accounts for at least five years.",
          },
          {
            heading: "Territorial Tax System and Incentives",
            body: "Singapore uses a territorial tax system — only income sourced in Singapore or remitted into Singapore is taxable. Foreign-sourced income (dividends, branch profits, service income) may be exempt from tax if conditions are met under the foreign-sourced income exemption scheme. There is no capital gains tax in Singapore, which is a significant advantage for investment holding companies and entrepreneurs planning exits.",
          },
        ],
        keyTakeaways: [
          "The headline corporate tax rate is 17%, but effective rates are often much lower due to partial exemptions.",
          "New startups qualify for enhanced tax exemptions in their first three years (SUTE scheme).",
          "Singapore uses a territorial tax system with no capital gains tax.",
          "Annual ECI and Form C/C-S filings are required with IRAS.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-09-13T10:00:00.000Z",
      sources: [
        { label: "IRAS Corporate Tax Rates", url: "https://www.iras.gov.sg/taxes/corporate-income-tax/basics-of-corporate-income-tax/corporate-income-tax-rate-rebates-and-tax-exemption-schemes" },
        { label: "IRAS Start-Up Tax Exemption", url: "https://www.iras.gov.sg/taxes/corporate-income-tax/basics-of-corporate-income-tax/tax-exemption-scheme-for-new-start-up-companies" },
        { label: "IRAS Filing Requirements", url: "https://www.iras.gov.sg/taxes/corporate-income-tax/form-c-s-form-c-s-(lite)-form-c-filing/overview-of-form-c-s-form-c-s-(lite)-form-c" },
      ],
    }],
  },
  {
    question: {
      id: "q-sg-income-tax",
      title: "What are the individual income tax brackets in Singapore?",
      body: "I'm relocating to Singapore for work and need to understand how personal income tax is structured. What are the current tax brackets, and are there meaningful deductions available? When is the filing deadline?",
      author: { displayName: "Emily Chan", avatarSeed: "sg-emily-chan", badge: "subscriber" as const },
      category: "sg-tax",
      tags: ["Singapore", "income tax", "tax brackets", "personal tax"],
      postedAt: "2025-10-05T14:20:00.000Z",
      viewCount: 1870,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in Singapore",
      seoDescription: "Complete guide to Singapore personal income tax brackets, deductions, reliefs, and filing deadlines for residents and non-residents.",
    },
    answers: [{
      id: "a-sg-income-tax",
      questionId: "q-sg-income-tax",
      articleContent: {
        sections: [
          {
            heading: "Singapore Personal Income Tax Brackets",
            body: "Singapore uses a progressive tax system for resident individuals. The first S$20,000 of chargeable income is taxed at 0%, making it effectively tax-free. Rates then increase gradually: 2% on income from S$20,001 to S$30,000, 3.5% from S$30,001 to S$40,000, and so on up to a maximum marginal rate of 22% for income exceeding S$320,000 (rising to 24% for income over S$1,000,000 from YA 2024).\n\nNon-residents are generally taxed at a flat rate of 22% (or 24% for income over S$500,000) on employment income, or 15% — whichever is higher. Short-term visitors who spend 60 days or fewer in Singapore may be exempt from tax entirely.",
          },
          {
            heading: "Deductions, Reliefs, and Filing",
            body: "Singapore offers a range of personal reliefs including earned income relief (up to S$1,000 for those under 55), spouse relief (S$2,000), qualifying child relief (S$4,000 per child), and CPF contributions. There is also a Supplementary Retirement Scheme (SRS) that provides tax deductions for voluntary contributions.\n\nThe filing deadline is April 15 for paper filings and April 18 for e-filing via myTax Portal. Singapore operates on a preceding-year basis — income earned in 2025 is assessed in YA 2026. Employers must also file employee income information via the Auto-Inclusion Scheme by March 1.",
          },
        ],
        keyTakeaways: [
          "Resident tax rates are progressive from 0% to 24%, with the first S$20,000 tax-free.",
          "Non-residents pay a flat 22-24% or 15%, whichever is higher.",
          "Multiple personal reliefs are available including CPF, spouse, and child relief.",
          "E-filing deadline is April 18 each year via myTax Portal.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-10-06T09:00:00.000Z",
      sources: [
        { label: "IRAS Individual Income Tax Rates", url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individual-income-tax-rates" },
        { label: "IRAS Personal Reliefs", url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-reliefs-rebates-and-deductions/tax-reliefs" },
      ],
    }],
  },
  {
    question: {
      id: "q-sg-gst",
      title: "Does Singapore have GST? How does it work?",
      body: "I'm running an e-commerce business that sells to customers in Singapore. Do I need to register for GST? What's the current rate and registration threshold? I want to make sure I'm compliant before I start scaling.",
      author: { displayName: "Jason Tan", avatarSeed: "sg-jason-tan", badge: "new-member" as const },
      category: "sg-tax",
      tags: ["Singapore", "GST", "goods and services tax", "e-commerce"],
      postedAt: "2025-11-18T11:00:00.000Z",
      viewCount: 1560,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Singapore have GST and how does it work",
      seoDescription: "Guide to Singapore GST registration, rates, thresholds, and compliance requirements for businesses including e-commerce sellers.",
    },
    answers: [{
      id: "a-sg-gst",
      questionId: "q-sg-gst",
      articleContent: {
        sections: [
          {
            heading: "GST Rate and Registration Threshold",
            body: "Singapore imposes a Goods and Services Tax (GST) at a rate of 9% (increased from 8% on January 1, 2024). GST applies to most goods and services supplied in Singapore, as well as imports of goods. Financial services and the sale/rental of residential properties are exempt.\n\nYou must register for GST if your taxable turnover exceeds S$1 million in the past 12 months (retrospective basis) or is expected to exceed S$1 million in the next 12 months (prospective basis). Voluntary registration is also possible, but once registered you must remain registered for at least two years.",
          },
          {
            heading: "Overseas Vendor Registration and E-Commerce",
            body: "Since January 2023, overseas vendors and electronic marketplace operators must register for GST if they have global turnover exceeding S$1 million and make B2C supplies of digital services, non-digital services, or low-value goods (valued at S$400 or less) to customers in Singapore exceeding S$100,000. This is known as the Overseas Vendor Registration (OVR) regime.\n\nRegistered businesses must file GST returns quarterly (or monthly by election) and can claim input tax on business purchases. The filing deadline is one month after the end of each accounting period.",
          },
        ],
        keyTakeaways: [
          "Singapore GST rate is 9% as of January 2024.",
          "Mandatory registration applies when taxable turnover exceeds S$1 million.",
          "Overseas e-commerce sellers may need to register under the OVR regime.",
          "GST returns are filed quarterly, due one month after the period ends.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-11-19T10:00:00.000Z",
      sources: [
        { label: "IRAS GST Registration", url: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/gst-registration-deregistration/do-i-need-to-register-for-gst" },
        { label: "IRAS Overseas Vendor Registration", url: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/gst-and-digital-economy/gst-on-imports-of-low-value-goods" },
      ],
    }],
  },

  // =====================================================
  // UAE (ae-tax)
  // =====================================================
  {
    question: {
      id: "q-ae-corporate-tax",
      title: "How does corporate tax work in the UAE?",
      body: "The UAE recently introduced corporate income tax. I operate a business in Dubai and want to understand the new rules. What is the tax rate, who is subject to it, and are free zone companies still exempt? I need to plan for compliance.",
      author: { displayName: "Khalid Al-Mansour", avatarSeed: "ae-khalid-mansour", badge: "subscriber" as const },
      category: "ae-tax",
      tags: ["UAE", "corporate tax", "free zone", "Dubai"],
      postedAt: "2025-08-22T09:00:00.000Z",
      viewCount: 3120,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in the UAE",
      seoDescription: "Complete guide to UAE corporate tax introduced in 2023, including rates, free zone benefits, small business relief, and filing requirements.",
    },
    answers: [{
      id: "a-ae-corporate-tax",
      questionId: "q-ae-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "UAE Corporate Tax Rates and Scope",
            body: "The UAE introduced a federal Corporate Tax (CT) effective for financial years starting on or after June 1, 2023. The standard rate is 9% on taxable income exceeding AED 375,000. Income up to AED 375,000 is taxed at 0%, providing meaningful relief for small businesses. A higher rate may apply to large multinationals with consolidated global revenue exceeding EUR 750 million (aligned with OECD Pillar Two).\n\nThe CT applies to all UAE businesses and commercial activities, including mainland companies, branches of foreign entities, and individuals conducting business. Certain entities are exempt, including government entities, qualifying public benefit organizations, and natural resource extraction businesses already subject to emirate-level taxation.",
          },
          {
            heading: "Free Zone Benefits and Filing",
            body: "Qualifying Free Zone Persons (QFZPs) can benefit from a 0% tax rate on qualifying income if they meet specific conditions — including maintaining adequate substance in the free zone, earning qualifying income (primarily from transactions with other free zone persons or from specific activities), and not electing to be subject to the standard CT rate. Non-qualifying income of free zone entities is taxed at 9%.\n\nAll taxable persons must register with the Federal Tax Authority (FTA), file an annual CT return within nine months of the end of the tax period, and maintain transfer pricing documentation. Small businesses with revenue below AED 3 million may elect for simplified small business relief through 2026.",
          },
        ],
        keyTakeaways: [
          "UAE corporate tax rate is 9% on income over AED 375,000 (0% below that threshold).",
          "Free zone companies can benefit from a 0% rate on qualifying income if conditions are met.",
          "All businesses must register with the FTA and file annual CT returns.",
          "Small business relief is available for companies with revenue under AED 3 million.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-08-23T10:00:00.000Z",
      sources: [
        { label: "UAE Federal Tax Authority - Corporate Tax", url: "https://tax.gov.ae/en/taxes/corporate.tax.aspx" },
        { label: "UAE CT Law - Federal Decree-Law No. 47 of 2022", url: "https://tax.gov.ae/DataFolder/Files/Legislation/Federal%20Decree-Law/Federal-Decree-Law-No-47-of-2022-EN.pdf" },
        { label: "Ministry of Finance - Corporate Tax FAQ", url: "https://www.mof.gov.ae/en/resourcesAndBudget/Pages/corporate-tax-faq.aspx" },
      ],
    }],
  },
  {
    question: {
      id: "q-ae-income-tax",
      title: "What are the individual income tax brackets in the UAE?",
      body: "I'm considering relocating to the UAE for work. I've heard there's no personal income tax, but is that still true? Are there any taxes on salary, investments, or rental income that I should know about?",
      author: { displayName: "Priya Sharma", avatarSeed: "ae-priya-sharma", badge: "new-member" as const },
      category: "ae-tax",
      tags: ["UAE", "income tax", "personal tax", "no income tax"],
      postedAt: "2025-07-15T13:00:00.000Z",
      viewCount: 4200,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in the UAE",
      seoDescription: "Explanation of UAE individual income tax policy, confirming zero personal income tax and covering other taxes that may apply to residents.",
    },
    answers: [{
      id: "a-ae-income-tax",
      questionId: "q-ae-income-tax",
      articleContent: {
        sections: [
          {
            heading: "No Personal Income Tax in the UAE",
            body: "The UAE does not levy any personal income tax on individuals. This applies to employment income, investment income, rental income, and capital gains earned by individuals in their personal capacity. There are no tax brackets because there is simply no personal income tax — this remains one of the primary attractions for expatriates and high-net-worth individuals.\n\nHowever, if an individual conducts a business or commercial activity (such as freelancing through a trade license), the income from that activity may be subject to the 9% corporate tax if it exceeds AED 1 million in revenue. Individuals earning below this threshold from business activities are not subject to CT.",
          },
          {
            heading: "Other Taxes to Be Aware Of",
            body: "While there is no income tax, the UAE does impose VAT at 5% on most goods and services, excise tax on specific products (tobacco, sugary drinks, energy drinks), and municipality fees on rental properties (typically 5% of annual rent in Dubai, collected via DEWA bills). There are no social security contributions for non-GCC expatriates, though GCC nationals may have pension obligations.\n\nThe UAE has also signed numerous double tax treaties, which can benefit individuals who have tax obligations in their home country. It is important to check your home country's rules on worldwide taxation and tax residency to ensure you are not still liable for tax elsewhere.",
          },
        ],
        keyTakeaways: [
          "The UAE has zero personal income tax on salaries, investments, and rental income.",
          "Business income from commercial activities may be subject to 9% corporate tax if over AED 1 million.",
          "VAT at 5% and municipality fees apply, but there is no payroll or social security tax for expats.",
          "Check your home country's worldwide taxation rules to confirm your overall tax position.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-07-16T09:00:00.000Z",
      sources: [
        { label: "UAE Federal Tax Authority", url: "https://tax.gov.ae/en/default.aspx" },
        { label: "UAE Ministry of Finance", url: "https://www.mof.gov.ae/en/resourcesAndBudget/Pages/tax-treaties.aspx" },
      ],
    }],
  },
  {
    question: {
      id: "q-ae-vat",
      title: "Does the UAE have VAT? How does it work?",
      body: "I'm launching a services company in Abu Dhabi. I know the UAE introduced VAT a few years ago. What's the current rate, when do I need to register, and how does filing work? Are there any zero-rated or exempt categories?",
      author: { displayName: "Ahmed Hassan", avatarSeed: "ae-ahmed-hassan", badge: "new-member" as const },
      category: "ae-tax",
      tags: ["UAE", "VAT", "value added tax", "Abu Dhabi"],
      postedAt: "2025-10-30T10:00:00.000Z",
      viewCount: 1980,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does the UAE have VAT and how does it work",
      seoDescription: "Guide to UAE VAT registration, rates, zero-rated supplies, exempt categories, and filing requirements for businesses.",
    },
    answers: [{
      id: "a-ae-vat",
      questionId: "q-ae-vat",
      articleContent: {
        sections: [
          {
            heading: "UAE VAT Rate and Registration",
            body: "The UAE introduced Value Added Tax on January 1, 2018, at a standard rate of 5%. VAT registration is mandatory for businesses with taxable supplies and imports exceeding AED 375,000 over the previous 12 months (or expected to exceed that in the next 30 days). Voluntary registration is available for businesses with taxable supplies exceeding AED 187,500.\n\nZero-rated supplies (taxed at 0% but eligible for input tax recovery) include exports of goods and services outside the GCC, international transportation, first sale or lease of residential property within 3 years of construction, and certain healthcare and education services. Exempt supplies (no VAT charged and no input tax recovery) include certain financial services, bare land, and local passenger transport.",
          },
          {
            heading: "Filing and Compliance",
            body: "VAT returns are typically filed quarterly through the FTA's EmaraTax portal, though businesses with annual revenue exceeding AED 150 million must file monthly. Returns are due within 28 days after the end of each tax period. Businesses must maintain records for at least five years and issue tax invoices for all taxable supplies.\n\nInput VAT on business expenses can be reclaimed against output VAT collected. Businesses operating in designated free zones may be treated as outside the UAE for VAT purposes on goods (but not services), subject to specific conditions.",
          },
        ],
        keyTakeaways: [
          "UAE VAT rate is 5%, among the lowest in the world.",
          "Mandatory registration threshold is AED 375,000 in taxable supplies.",
          "Exports and certain healthcare/education services are zero-rated.",
          "Quarterly filing is standard, with returns due within 28 days of period end.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-10-31T09:00:00.000Z",
      sources: [
        { label: "FTA VAT Legislation", url: "https://tax.gov.ae/en/taxes/value.added.tax.aspx" },
        { label: "FTA VAT Registration Guide", url: "https://tax.gov.ae/en/taxes/value.added.tax/vat.registration.aspx" },
      ],
    }],
  },

  // =====================================================
  // HONG KONG (hk-tax)
  // =====================================================
  {
    question: {
      id: "q-hk-corporate-tax",
      title: "How does corporate tax work in Hong Kong?",
      body: "I'm incorporating a company in Hong Kong to serve Asian markets. What is the profits tax rate, and how does the territorial system work in practice? I want to understand what income is taxable and what's exempt.",
      author: { displayName: "David Wu", avatarSeed: "hk-david-wu", badge: "subscriber" as const },
      category: "hk-tax",
      tags: ["Hong Kong", "profits tax", "corporate tax", "territorial"],
      postedAt: "2025-09-28T07:30:00.000Z",
      viewCount: 2650,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in Hong Kong",
      seoDescription: "Guide to Hong Kong profits tax rates, two-tier system, territorial source principle, and filing requirements for corporations.",
    },
    answers: [{
      id: "a-hk-corporate-tax",
      questionId: "q-hk-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "Two-Tier Profits Tax Rates",
            body: "Hong Kong operates a two-tier profits tax system. For corporations, the first HK$2 million of assessable profits is taxed at 8.25%, and profits above HK$2 million are taxed at 16.5%. For unincorporated businesses (sole proprietors and partnerships), the rates are 7.5% and 15% respectively.\n\nOnly one entity within a group of connected entities can elect the two-tier rates, so group structures need to designate which entity claims the lower rate on the first HK$2 million.",
          },
          {
            heading: "Territorial Source Principle",
            body: "Hong Kong follows a strict territorial source principle — only profits arising in or derived from Hong Kong are subject to profits tax. Profits sourced outside Hong Kong are generally not taxable, even if remitted into the city. However, under the Foreign-Sourced Income Exemption (FSIE) regime effective from January 2023, passive income (dividends, interest, IP royalties, disposal gains) received by multinational entities from a non-Hong Kong source may be deemed taxable unless an economic substance or nexus requirement is met.\n\nCompanies must file an annual Profits Tax Return (BIR51/BIR52) with the Inland Revenue Department (IRD), typically due within one month of issuance (or by extension). New companies receive their first return about 18 months after incorporation.",
          },
        ],
        keyTakeaways: [
          "The two-tier rate is 8.25% on the first HK$2 million, then 16.5% above.",
          "Hong Kong uses a territorial system — only HK-sourced profits are taxable.",
          "The FSIE regime (2023) may tax certain passive foreign income for MNEs lacking substance.",
          "Annual Profits Tax Returns must be filed with the IRD.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-09-29T10:00:00.000Z",
      sources: [
        { label: "IRD Profits Tax", url: "https://www.ird.gov.hk/eng/tax/bus_pft.htm" },
        { label: "IRD Two-Tiered Rates", url: "https://www.ird.gov.hk/eng/tax/bus_ttr.htm" },
        { label: "FSIE Regime", url: "https://www.ird.gov.hk/eng/tax/bus_fsie.htm" },
      ],
    }],
  },
  {
    question: {
      id: "q-hk-income-tax",
      title: "What are the individual income tax brackets in Hong Kong?",
      body: "I've received a job offer in Hong Kong. How is salaries tax calculated, and what deductions are available? I want to compare the take-home pay versus my current situation.",
      author: { displayName: "Rachel Ng", avatarSeed: "hk-rachel-ng", badge: "new-member" as const },
      category: "hk-tax",
      tags: ["Hong Kong", "salaries tax", "income tax", "personal tax"],
      postedAt: "2025-11-02T15:00:00.000Z",
      viewCount: 1740,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in Hong Kong",
      seoDescription: "Complete guide to Hong Kong salaries tax brackets, standard rate, personal allowances, and deductions for employees.",
    },
    answers: [{
      id: "a-hk-income-tax",
      questionId: "q-hk-income-tax",
      articleContent: {
        sections: [
          {
            heading: "Salaries Tax Rates and Standard Rate",
            body: "Hong Kong salaries tax is calculated at progressive rates on net chargeable income (after deductions and allowances): 2% on the first HK$50,000, 6% on the next HK$50,000, 10% on the next HK$50,000, 14% on the next HK$50,000, and 17% on the remainder. However, the total tax payable is capped at the standard rate of 15% on net income (before personal allowances).\n\nTaxpayers pay the lower of the progressive rate calculation or the standard rate calculation, which effectively caps the maximum tax at 15%.",
          },
          {
            heading: "Allowances and Deductions",
            body: "Hong Kong provides a basic personal allowance of HK$132,000 per year. Additional allowances include married person's allowance (HK$264,000), child allowance (HK$130,000 per child), and dependent parent/grandparent allowance. Deductible expenses include mandatory MPF contributions (capped at HK$18,000), approved charitable donations, self-education expenses, home loan interest, and residential rent deduction (up to HK$100,000).\n\nSalaries tax returns are issued by the IRD in May each year, with a filing deadline typically one month after issuance (two months for e-filing). Tax is paid in two installments.",
          },
        ],
        keyTakeaways: [
          "Progressive rates from 2% to 17%, capped at a standard rate of 15% on net income.",
          "Basic personal allowance is HK$132,000 per year.",
          "MPF contributions, charitable donations, and rental payments are deductible.",
          "Tax returns are issued annually in May with payment in two installments.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-11-03T09:00:00.000Z",
      sources: [
        { label: "IRD Salaries Tax", url: "https://www.ird.gov.hk/eng/tax/ind_sal.htm" },
        { label: "IRD Allowances and Deductions", url: "https://www.ird.gov.hk/eng/tax/ind_all.htm" },
      ],
    }],
  },
  {
    question: {
      id: "q-hk-vat",
      title: "Does Hong Kong have VAT/GST? How does it work?",
      body: "I sell goods through Hong Kong and I'm used to dealing with VAT in Europe. Does Hong Kong charge VAT or GST on goods and services? What indirect taxes should I be aware of?",
      author: { displayName: "Peter Cheung", avatarSeed: "hk-peter-cheung", badge: "subscriber" as const },
      category: "hk-tax",
      tags: ["Hong Kong", "VAT", "GST", "indirect tax"],
      postedAt: "2025-12-10T10:30:00.000Z",
      viewCount: 1320,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Hong Kong have VAT or GST",
      seoDescription: "Explanation of Hong Kong's indirect tax landscape, confirming no VAT or GST and covering existing duties on specific goods.",
    },
    answers: [{
      id: "a-hk-vat",
      questionId: "q-hk-vat",
      articleContent: {
        sections: [
          {
            heading: "No VAT or GST in Hong Kong",
            body: "Hong Kong does not impose any Value Added Tax (VAT), Goods and Services Tax (GST), or general sales tax. This is a deliberate policy to maintain Hong Kong's status as a free port and international trading hub. The government has periodically considered introducing a GST but has not implemented one.\n\nThis means businesses selling goods or services in Hong Kong do not need to collect or remit any consumption tax. For businesses accustomed to European VAT or Australian GST, this significantly simplifies pricing and compliance.",
          },
          {
            heading: "Existing Indirect Taxes and Duties",
            body: "While there is no general consumption tax, Hong Kong does levy excise duties on four categories of goods: liquor, tobacco, hydrocarbon oil (fuel), and methyl alcohol. Stamp duty applies to transfers of Hong Kong stock and real property. Property transactions attract ad valorem stamp duty ranging from 1.5% to 4.25%, with special rates (15% Buyer's Stamp Duty) for non-permanent residents purchasing residential property.\n\nHotel accommodation tax (currently at 0%) and business registration fees also exist. Customs duties apply only to the four excise categories — all other goods can be imported and exported duty-free.",
          },
        ],
        keyTakeaways: [
          "Hong Kong has no VAT, GST, or general sales tax.",
          "Excise duties apply only to liquor, tobacco, fuel, and methyl alcohol.",
          "Stamp duty applies to property transactions and stock transfers.",
          "Most goods can be imported and exported duty-free.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-12-11T09:00:00.000Z",
      sources: [
        { label: "IRD Types of Taxes", url: "https://www.ird.gov.hk/eng/tax/taxtype.htm" },
        { label: "Customs & Excise - Dutiable Commodities", url: "https://www.customs.gov.hk/en/trade_facilitation/dutiable/index.html" },
      ],
    }],
  },

  // =====================================================
  // IRELAND (ie-tax)
  // =====================================================
  {
    question: {
      id: "q-ie-corporate-tax",
      title: "How does corporate tax work in Ireland?",
      body: "Ireland is known for its low corporate tax rate. I'm considering establishing a European subsidiary there. What is the actual rate, are there different rates for different types of income, and what are the filing obligations?",
      author: { displayName: "Sean O'Brien", avatarSeed: "ie-sean-obrien", badge: "subscriber" as const },
      category: "ie-tax",
      tags: ["Ireland", "corporate tax", "12.5%", "Revenue Commissioners"],
      postedAt: "2025-08-10T09:00:00.000Z",
      viewCount: 2890,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in Ireland",
      seoDescription: "Guide to Ireland corporate tax rates including the 15% rate for large groups, 12.5% trading rate, R&D credits, and filing requirements.",
    },
    answers: [{
      id: "a-ie-corporate-tax",
      questionId: "q-ie-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "Corporate Tax Rates",
            body: "Ireland applies a 12.5% corporation tax rate on trading (active business) income, which has been one of the lowest in Europe for decades. Non-trading (passive) income — such as investment income, rental income, and certain foreign dividends — is taxed at 25%.\n\nSince 2024, companies that are members of groups falling within the OECD Pillar Two global minimum tax rules (consolidated revenue of EUR 750 million or more) are subject to a minimum effective rate of 15% through the Qualified Domestic Minimum Top-up Tax (QDMTT). For most small and medium enterprises, the 12.5% rate continues to apply.",
          },
          {
            heading: "R&D Credits and Filing Obligations",
            body: "Ireland offers a 30% R&D tax credit (increased from 25% in Budget 2025) on qualifying research and development expenditure, which can be used to reduce corporation tax or claimed as a cash refund over three years. The Knowledge Development Box (KDB) provides an effective rate of 10% on qualifying IP profits.\n\nCompanies must file a corporation tax return (CT1) with Revenue within nine months of the end of their accounting period. Preliminary tax must be paid by the 21st of the month before the filing deadline. Large companies (tax liability over EUR 200,000) must make two preliminary tax payments. All filings are done through Revenue's Online Service (ROS).",
          },
        ],
        keyTakeaways: [
          "The standard trading rate is 12.5%; passive income is taxed at 25%.",
          "Large multinational groups are subject to a 15% minimum effective rate under Pillar Two.",
          "A 30% R&D tax credit and 10% KDB rate incentivize innovation.",
          "Annual CT1 returns are filed through Revenue Online Service (ROS).",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-08-11T10:00:00.000Z",
      sources: [
        { label: "Revenue - Corporation Tax", url: "https://www.revenue.ie/en/companies-and-charities/corporation-tax/index.aspx" },
        { label: "Revenue - R&D Tax Credit", url: "https://www.revenue.ie/en/companies-and-charities/reliefs-and-exemptions/research-and-development-rd-tax-credit/index.aspx" },
        { label: "Revenue - Filing and Payment", url: "https://www.revenue.ie/en/companies-and-charities/corporation-tax/corporation-tax-payment-and-filing/index.aspx" },
      ],
    }],
  },
  {
    question: {
      id: "q-ie-income-tax",
      title: "What are the individual income tax brackets in Ireland?",
      body: "I'm moving to Dublin for a tech job and want to understand Irish income tax. I know it can be quite high compared to other countries. What are the rates, and how do USC and PRSI work on top of income tax?",
      author: { displayName: "Ciara Murphy", avatarSeed: "ie-ciara-murphy", badge: "new-member" as const },
      category: "ie-tax",
      tags: ["Ireland", "income tax", "USC", "PRSI", "tax brackets"],
      postedAt: "2025-10-20T12:00:00.000Z",
      viewCount: 2100,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in Ireland",
      seoDescription: "Comprehensive guide to Irish income tax rates, USC, PRSI, tax credits, and deductions for employees and residents.",
    },
    answers: [{
      id: "a-ie-income-tax",
      questionId: "q-ie-income-tax",
      articleContent: {
        sections: [
          {
            heading: "Income Tax Rates and Bands",
            body: "Ireland has two income tax rates: a standard rate of 20% and a higher rate of 40%. For single individuals, the standard rate applies to the first EUR 42,000 of taxable income, with the balance taxed at 40%. Married couples (one earner) have a band of EUR 51,000 at the standard rate. These bands may vary slightly each year with the budget.\n\nOn top of income tax, the Universal Social Charge (USC) applies at progressive rates: 0.5% on the first EUR 12,012, 2% on the next EUR 13,748, 4% on the next EUR 44,284, and 8% on the balance. Individuals earning EUR 13,000 or less are exempt from USC. Pay-Related Social Insurance (PRSI) is charged at 4% on all earnings for most employees (Class A).",
          },
          {
            heading: "Tax Credits and Filing",
            body: "Ireland's tax credit system effectively creates a zero-tax band. The personal tax credit is EUR 1,875 (single) or EUR 3,750 (married), and the employee (PAYE) tax credit is EUR 1,875. These are subtracted from the computed tax, not from income. Other credits include the home carer credit, age credit, and medical expenses relief at 20%.\n\nMost employees are taxed through the PAYE system and may not need to file an annual return unless they have additional income. Self-assessed individuals must file a Form 11 by October 31 (or mid-November via ROS). The Special Assignee Relief Programme (SARP) may reduce the effective tax rate for qualifying employees relocated to Ireland.",
          },
        ],
        keyTakeaways: [
          "Income tax rates are 20% (standard) and 40% (higher), with USC and PRSI on top.",
          "The combined marginal rate on high earners can reach approximately 52%.",
          "Personal and employee tax credits effectively shield the first portion of income from tax.",
          "Most employees are taxed via PAYE; self-assessed individuals file Form 11 by October 31.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-10-21T09:00:00.000Z",
      sources: [
        { label: "Revenue - Income Tax Rates", url: "https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/tax-relief-charts/index.aspx" },
        { label: "Revenue - USC", url: "https://www.revenue.ie/en/jobs-and-pensions/usc/index.aspx" },
      ],
    }],
  },
  {
    question: {
      id: "q-ie-vat",
      title: "Does Ireland have VAT? How does it work?",
      body: "I'm starting an online business selling to Irish and EU customers. What is Ireland's VAT rate, when do I need to register, and how does cross-border selling within the EU work under the OSS system?",
      author: { displayName: "Liam Doyle", avatarSeed: "ie-liam-doyle", badge: "new-member" as const },
      category: "ie-tax",
      tags: ["Ireland", "VAT", "EU VAT", "OSS", "e-commerce"],
      postedAt: "2025-12-01T11:00:00.000Z",
      viewCount: 1430,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Ireland have VAT and how does it work",
      seoDescription: "Guide to Irish VAT rates, registration thresholds, reduced rates, and EU One Stop Shop for cross-border e-commerce sellers.",
    },
    answers: [{
      id: "a-ie-vat",
      questionId: "q-ie-vat",
      articleContent: {
        sections: [
          {
            heading: "VAT Rates and Registration",
            body: "Ireland's standard VAT rate is 23%. Reduced rates include 13.5% (tourism, construction, maintenance services), 9% (newspapers, sports facilities), 4.8% (livestock), and 0% (food, children's clothing, books, oral medicines). The domestic registration threshold is EUR 80,000 for goods and EUR 40,000 for services. Non-established businesses making taxable supplies in Ireland must register immediately with no threshold.\n\nOnce registered, businesses must charge VAT on taxable supplies, file VAT returns (typically bi-monthly), and may reclaim input VAT on business purchases.",
          },
          {
            heading: "EU Cross-Border Sales and OSS",
            body: "For B2C sales of goods to consumers in other EU member states, sellers can use the One Stop Shop (OSS) system once cross-border sales exceed EUR 10,000 per year (combined across all EU states). Under OSS, the seller registers in one EU country (Ireland) and files a single quarterly return covering all EU sales, applying the destination country's VAT rate. This avoids the need to register for VAT in every EU country individually.\n\nImported goods valued at EUR 150 or less can use the Import One Stop Shop (IOSS) to collect VAT at the point of sale. Intra-community B2B supplies of goods are zero-rated provided the customer has a valid VAT number and the goods physically move to another member state.",
          },
        ],
        keyTakeaways: [
          "Ireland's standard VAT rate is 23%, with multiple reduced rates for specific goods and services.",
          "Registration thresholds are EUR 80,000 (goods) and EUR 40,000 (services).",
          "The EU One Stop Shop simplifies cross-border B2C compliance with a single quarterly return.",
          "B2B intra-community supplies are zero-rated with valid VAT numbers.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-12-02T09:00:00.000Z",
      sources: [
        { label: "Revenue - VAT Rates", url: "https://www.revenue.ie/en/vat/vat-rates/index.aspx" },
        { label: "Revenue - VAT Registration", url: "https://www.revenue.ie/en/vat/vat-registration/index.aspx" },
        { label: "Revenue - One Stop Shop", url: "https://www.revenue.ie/en/vat/e-commerce-and-digital-services/one-stop-shop/index.aspx" },
      ],
    }],
  },

  // =====================================================
  // ESTONIA (ee-tax)
  // =====================================================
  {
    question: {
      id: "q-ee-corporate-tax",
      title: "How does corporate tax work in Estonia?",
      body: "Estonia's tax system is supposed to be unique — you only pay corporate tax when you distribute profits. Can you explain how this works in practice? What are the rates, and how does the e-Residency program factor in?",
      author: { displayName: "Mikk Tamm", avatarSeed: "ee-mikk-tamm", badge: "subscriber" as const },
      category: "ee-tax",
      tags: ["Estonia", "corporate tax", "distributed profits", "e-Residency"],
      postedAt: "2025-07-20T08:00:00.000Z",
      viewCount: 3450,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in Estonia",
      seoDescription: "Guide to Estonia's unique distributed profits tax system, CIT rates, e-Residency program, and filing requirements for companies.",
    },
    answers: [{
      id: "a-ee-corporate-tax",
      questionId: "q-ee-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "The Distributed Profits Tax Model",
            body: "Estonia has a unique corporate income tax system: retained and reinvested profits are not taxed. Corporate income tax (CIT) is only triggered when profits are distributed as dividends, share buybacks, fringe benefits, gifts, or non-business-related payments. The standard rate is 20/80 (effectively 20% on the gross distribution, or 25% on the net amount distributed).\n\nA reduced rate of 14/86 (approximately 14% gross) applies to regular dividend distributions — specifically, for dividends up to the average taxable distributions of the previous three years. This incentivizes consistent, predictable profit distributions.",
          },
          {
            heading: "E-Residency and Filing Requirements",
            body: "Estonia's e-Residency program allows non-Estonians to establish and manage Estonian companies remotely. E-residents can open EU business bank accounts, use Estonian digital infrastructure, and benefit from the deferred taxation model. However, e-Residency does not confer tax residency — the company's tax obligations depend on where it is effectively managed.\n\nCompanies must file monthly tax returns (TSD form) when making taxable distributions or payments, and an annual report through the Business Register. If no distributions are made, no CIT is due — but the annual report is still mandatory. VAT registration and filing are separate obligations.",
          },
        ],
        keyTakeaways: [
          "Corporate tax is only due when profits are distributed — retained profits are tax-free.",
          "The standard rate is 20% (gross) on distributions; a reduced 14% rate applies to regular dividends.",
          "E-Residency allows remote company management but does not automatically confer tax residency.",
          "Monthly TSD returns are required when distributions are made; annual reports are always mandatory.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-07-21T10:00:00.000Z",
      sources: [
        { label: "Estonian Tax and Customs Board - CIT", url: "https://www.emta.ee/en/business-client/income-and-social-tax-value-added-tax/income-tax" },
        { label: "E-Residency Official Site", url: "https://www.e-resident.gov.ee/" },
      ],
    }],
  },
  {
    question: {
      id: "q-ee-income-tax",
      title: "What are the individual income tax brackets in Estonia?",
      body: "I'm considering working remotely from Estonia or becoming an e-resident. How does personal income tax work there? Is it a flat tax system? What deductions are available?",
      author: { displayName: "Anna Kask", avatarSeed: "ee-anna-kask", badge: "new-member" as const },
      category: "ee-tax",
      tags: ["Estonia", "income tax", "flat tax", "personal tax"],
      postedAt: "2025-09-05T14:00:00.000Z",
      viewCount: 1280,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in Estonia",
      seoDescription: "Guide to Estonia's flat income tax rate, basic exemption, social tax, and filing requirements for residents and non-residents.",
    },
    answers: [{
      id: "a-ee-income-tax",
      questionId: "q-ee-income-tax",
      articleContent: {
        sections: [
          {
            heading: "Flat Income Tax Rate",
            body: "Estonia applies a flat personal income tax rate of 20% on all taxable income. There are no progressive brackets — whether you earn EUR 20,000 or EUR 200,000, the rate is 20%. However, a basic exemption (tax-free threshold) of up to EUR 7,848 per year applies, which decreases for annual income above EUR 14,400 and reaches zero at EUR 25,200.\n\nThis means the effective tax rate for lower earners is less than 20%, while higher earners pay close to the full 20%. Non-residents are also taxed at 20% on Estonian-sourced income, with no basic exemption.",
          },
          {
            heading: "Social Tax and Filing",
            body: "In addition to income tax, employers must pay social tax of 33% on gross salary (20% for pension insurance and 13% for health insurance). Employees contribute 2% to the mandatory funded pension (II pillar) and 1.6% unemployment insurance premium. The employer also pays 0.8% unemployment insurance.\n\nAnnual income tax returns must be filed by March 31 for the previous calendar year. Estonia's digital tax filing system (e-MTA) pre-fills most data, and the majority of residents can file in minutes. Refunds are typically processed within weeks. Dividend income received from Estonian companies that have already paid CIT on distribution is tax-exempt for the individual recipient.",
          },
        ],
        keyTakeaways: [
          "Estonia has a flat 20% income tax rate with a basic exemption for lower earners.",
          "Social tax of 33% is paid by employers on top of gross salary.",
          "Annual returns are filed by March 31 via the highly automated e-MTA system.",
          "Dividends from Estonian companies are tax-exempt for individuals (already taxed at corporate level).",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-09-06T09:00:00.000Z",
      sources: [
        { label: "Estonian Tax and Customs Board - Income Tax", url: "https://www.emta.ee/en/private-client/declaration-income/income-tax-rates" },
        { label: "Estonian Tax and Customs Board - Social Tax", url: "https://www.emta.ee/en/business-client/income-and-social-tax-value-added-tax/social-tax" },
      ],
    }],
  },
  {
    question: {
      id: "q-ee-vat",
      title: "Does Estonia have VAT? How does it work?",
      body: "I have an e-Residency company in Estonia selling digital services to EU customers. What is Estonia's VAT rate, and when do I need to register? How does the EU OSS system apply to my situation?",
      author: { displayName: "Kristjan Luik", avatarSeed: "ee-kristjan-luik", badge: "new-member" as const },
      category: "ee-tax",
      tags: ["Estonia", "VAT", "e-Residency", "EU", "digital services"],
      postedAt: "2025-11-08T10:00:00.000Z",
      viewCount: 1150,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Estonia have VAT and how does it work",
      seoDescription: "Guide to Estonian VAT registration, rates, EU digital services rules, and One Stop Shop for e-Residency companies.",
    },
    answers: [{
      id: "a-ee-vat",
      questionId: "q-ee-vat",
      articleContent: {
        sections: [
          {
            heading: "VAT Rates and Registration",
            body: "Estonia's standard VAT rate is 22% (increased from 20% in January 2024). A reduced rate of 9% applies to accommodation services, listed medicines, and periodical publications. Certain supplies are zero-rated, including exports and intra-community supplies of goods.\n\nVAT registration is mandatory when taxable turnover exceeds EUR 40,000 in a calendar year. For e-Residency companies without an Estonian establishment, registration is required from the first taxable supply in Estonia. Non-resident businesses making taxable supplies must appoint a fiscal representative or register directly.",
          },
          {
            heading: "Digital Services and EU One Stop Shop",
            body: "For B2C supplies of digital services to consumers in other EU countries, Estonian companies can register for the One Stop Shop (OSS) through Estonia's Tax and Customs Board. The EUR 10,000 annual threshold applies — below this, you can charge Estonian VAT; above it, you must charge the customer's country VAT rate. OSS allows filing a single quarterly return covering all EU sales.\n\nVAT returns are filed monthly by the 20th of the following month. Input VAT on business expenses can be reclaimed. Estonia's e-tax system makes filing efficient, and most e-Residency companies manage their VAT obligations entirely online.",
          },
        ],
        keyTakeaways: [
          "Estonia's standard VAT rate is 22%, with a 9% reduced rate for specific sectors.",
          "Mandatory registration threshold is EUR 40,000 in annual taxable turnover.",
          "EU One Stop Shop simplifies cross-border digital service sales with quarterly filings.",
          "Monthly VAT returns are due by the 20th of the following month.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-11-09T09:00:00.000Z",
      sources: [
        { label: "Estonian Tax and Customs Board - VAT", url: "https://www.emta.ee/en/business-client/income-and-social-tax-value-added-tax/value-added-tax" },
        { label: "Estonian Tax and Customs Board - OSS", url: "https://www.emta.ee/en/business-client/income-and-social-tax-value-added-tax/value-added-tax/one-stop-shop" },
      ],
    }],
  },

  // =====================================================
  // UNITED KINGDOM (uk-tax)
  // =====================================================
  {
    question: {
      id: "q-uk-corporate-tax",
      title: "How does corporate tax work in the United Kingdom?",
      body: "I'm expanding my business to the UK and need to understand corporation tax. What are the current rates, and I've heard there's a small profits rate now — how does that work? What about the R&D tax credit changes?",
      author: { displayName: "James Mitchell", avatarSeed: "uk-james-mitchell", badge: "subscriber" as const },
      category: "uk-tax",
      tags: ["UK", "corporation tax", "small profits rate", "HMRC"],
      postedAt: "2025-08-05T09:00:00.000Z",
      viewCount: 2780,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in the United Kingdom",
      seoDescription: "Guide to UK corporation tax rates, small profits rate, marginal relief, R&D tax credits, and HMRC filing requirements.",
    },
    answers: [{
      id: "a-uk-corporate-tax",
      questionId: "q-uk-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "Corporation Tax Rates",
            body: "Since April 2023, the UK has a main corporation tax rate of 25% for companies with profits above GBP 250,000. Companies with profits of GBP 50,000 or less benefit from a small profits rate of 19%. Between GBP 50,000 and GBP 250,000, marginal relief applies, resulting in an effective rate between 19% and 25%.\n\nThese thresholds are divided by the number of associated companies plus one, so groups with multiple entities have lower thresholds per company. The rate applies to all UK-resident companies on their worldwide profits, subject to relief under double tax treaties.",
          },
          {
            heading: "R&D Credits and Filing",
            body: "The UK merged its R&D tax relief schemes into a single RDEC (Research and Development Expenditure Credit) scheme from April 2024. The merged scheme provides a taxable credit of 20% of qualifying R&D expenditure. Enhanced support for R&D-intensive SMEs (those spending 30%+ of total expenditure on R&D) provides a higher rate. Pre-notification is now required for first-time or lapsed claimants.\n\nCorporation tax returns (CT600) must be filed within 12 months of the end of the accounting period, though tax is payable within 9 months and 1 day. Large companies (profits over GBP 1.5 million) must pay quarterly installments. All filings are made through HMRC's online services.",
          },
        ],
        keyTakeaways: [
          "The main corporation tax rate is 25%; small profits rate of 19% applies under GBP 50,000.",
          "Marginal relief bridges the gap for profits between GBP 50,000 and GBP 250,000.",
          "The merged RDEC scheme provides a 20% taxable credit on qualifying R&D spending.",
          "CT600 returns are due within 12 months; tax is payable within 9 months and 1 day.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-08-06T10:00:00.000Z",
      sources: [
        { label: "HMRC Corporation Tax Rates", url: "https://www.gov.uk/corporation-tax-rates" },
        { label: "HMRC R&D Tax Relief", url: "https://www.gov.uk/guidance/corporation-tax-research-and-development-rd-relief" },
        { label: "HMRC CT600 Filing", url: "https://www.gov.uk/company-tax-returns" },
      ],
    }],
  },
  {
    question: {
      id: "q-uk-income-tax",
      title: "What are the individual income tax brackets in the United Kingdom?",
      body: "I'm taking a position in London and want to understand UK income tax, National Insurance, and the personal allowance. What are the current rates and thresholds? I've heard the thresholds have been frozen.",
      author: { displayName: "Sarah Thompson", avatarSeed: "uk-sarah-thompson", badge: "new-member" as const },
      category: "uk-tax",
      tags: ["UK", "income tax", "National Insurance", "tax brackets", "personal allowance"],
      postedAt: "2025-10-15T13:00:00.000Z",
      viewCount: 3100,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in the United Kingdom",
      seoDescription: "Complete guide to UK income tax bands, personal allowance, National Insurance contributions, and self-assessment filing deadlines.",
    },
    answers: [{
      id: "a-uk-income-tax",
      questionId: "q-uk-income-tax",
      articleContent: {
        sections: [
          {
            heading: "Income Tax Bands and Personal Allowance",
            body: "The UK personal allowance is GBP 12,570, meaning no income tax is paid on this amount. Above this, the basic rate of 20% applies to income from GBP 12,571 to GBP 50,270, the higher rate of 40% from GBP 50,271 to GBP 125,140, and the additional rate of 45% on income above GBP 125,140. The personal allowance is reduced by GBP 1 for every GBP 2 earned above GBP 100,000, creating an effective 60% marginal rate between GBP 100,000 and GBP 125,140.\n\nThese thresholds have been frozen until at least April 2028, which means more people are pulled into higher bands as wages rise (known as fiscal drag). Scotland has its own income tax rates with additional bands.",
          },
          {
            heading: "National Insurance and Filing",
            body: "Class 1 National Insurance Contributions (NICs) for employees are charged at 8% on earnings between GBP 12,570 and GBP 50,270 (primary threshold to upper earnings limit), and 2% above GBP 50,270. Employers pay 15% NICs on earnings above GBP 5,000 (from April 2025). Self-employed individuals pay Class 4 NICs at similar rates.\n\nMost employees are taxed through PAYE and do not need to file a self-assessment return. Those with additional income, self-employment, or income over GBP 150,000 must register for self-assessment. The online filing deadline is January 31 following the end of the tax year (April 5). Payments on account are required for those with significant self-assessment liabilities.",
          },
        ],
        keyTakeaways: [
          "Income tax rates are 20% (basic), 40% (higher), and 45% (additional) with a GBP 12,570 personal allowance.",
          "An effective 60% rate applies between GBP 100,000 and GBP 125,140 due to allowance tapering.",
          "Employee NICs are 8% (basic) and 2% (above upper limit); employer NICs are 15%.",
          "Self-assessment filing deadline is January 31 for the previous tax year.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-10-16T09:00:00.000Z",
      sources: [
        { label: "HMRC Income Tax Rates", url: "https://www.gov.uk/income-tax-rates" },
        { label: "HMRC National Insurance Rates", url: "https://www.gov.uk/national-insurance-rates-letters" },
        { label: "HMRC Self Assessment", url: "https://www.gov.uk/self-assessment-tax-returns" },
      ],
    }],
  },
  {
    question: {
      id: "q-uk-vat",
      title: "Does the United Kingdom have VAT? How does it work?",
      body: "I'm starting a business in the UK selling goods online. When do I need to register for VAT, and what are the current rates? Since Brexit, how does VAT work for sales to EU customers?",
      author: { displayName: "Oliver Brown", avatarSeed: "uk-oliver-brown", badge: "new-member" as const },
      category: "uk-tax",
      tags: ["UK", "VAT", "Brexit", "online sales", "registration"],
      postedAt: "2025-12-05T11:00:00.000Z",
      viewCount: 1650,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does the United Kingdom have VAT and how does it work",
      seoDescription: "Guide to UK VAT rates, registration thresholds, post-Brexit rules for EU sales, and quarterly filing requirements.",
    },
    answers: [{
      id: "a-uk-vat",
      questionId: "q-uk-vat",
      articleContent: {
        sections: [
          {
            heading: "VAT Rates and Registration",
            body: "The UK standard VAT rate is 20%. Reduced rates include 5% (domestic fuel, children's car seats, certain energy-saving materials) and 0% (most food, children's clothing, books, newspapers). VAT registration is mandatory when taxable turnover exceeds GBP 90,000 (threshold increased from GBP 85,000 in April 2024) in the previous 12 months, or if you expect it to exceed GBP 90,000 in the next 30 days alone.\n\nThe Flat Rate Scheme is available for small businesses (turnover under GBP 150,000) — you charge VAT at 20% but pay HMRC a lower flat rate percentage based on your trade sector, keeping the difference.",
          },
          {
            heading: "Post-Brexit EU Sales and Filing",
            body: "Since Brexit, sales of goods from the UK to EU consumers are treated as exports. Goods sent to EU consumers may be subject to import VAT and customs duties in the destination country. Many UK businesses selling to EU customers register for VAT in one or more EU countries or use the EU's Import One Stop Shop (IOSS) for consignments up to EUR 150.\n\nVAT returns are typically filed quarterly through HMRC's Making Tax Digital (MTD) system, with returns due one month and seven days after the end of each quarter. Businesses must keep digital records and use MTD-compatible software. Annual Accounting and Cash Accounting schemes are available for smaller businesses.",
          },
        ],
        keyTakeaways: [
          "UK VAT standard rate is 20%; registration threshold is GBP 90,000.",
          "Zero-rated supplies include most food, children's clothing, and books.",
          "Post-Brexit, UK-to-EU sales are exports — EU import VAT may apply at destination.",
          "Quarterly returns filed via Making Tax Digital, due 1 month and 7 days after quarter end.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-12-06T09:00:00.000Z",
      sources: [
        { label: "HMRC VAT Rates", url: "https://www.gov.uk/vat-rates" },
        { label: "HMRC VAT Registration", url: "https://www.gov.uk/vat-registration" },
        { label: "HMRC VAT After Brexit", url: "https://www.gov.uk/guidance/vat-exports-dispatches-and-டsupplying-goods-abroad" },
      ],
    }],
  },

  // =====================================================
  // GERMANY (de-tax)
  // =====================================================
  {
    question: {
      id: "q-de-corporate-tax",
      title: "How does corporate tax work in Germany?",
      body: "I'm establishing a GmbH in Germany. I know the tax system involves multiple layers — corporate income tax, trade tax, and a solidarity surcharge. What are the rates, and what is the total effective tax burden?",
      author: { displayName: "Thomas Weber", avatarSeed: "de-thomas-weber", badge: "subscriber" as const },
      category: "de-tax",
      tags: ["Germany", "corporate tax", "GmbH", "trade tax", "Gewerbesteuer"],
      postedAt: "2025-09-18T08:00:00.000Z",
      viewCount: 2340,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in Germany",
      seoDescription: "Guide to German corporate taxation including Korperschaftsteuer, Gewerbesteuer, solidarity surcharge, and total effective rates for GmbH companies.",
    },
    answers: [{
      id: "a-de-corporate-tax",
      questionId: "q-de-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "Multiple Tax Layers",
            body: "German corporate taxation consists of three main components. Corporate income tax (Korperschaftsteuer) is levied at a flat rate of 15% on taxable profits. A solidarity surcharge (Solidaritatszuschlag) of 5.5% is applied on top of the corporate income tax, adding approximately 0.825% to the effective rate. Trade tax (Gewerbesteuer) varies by municipality — the federal base rate is 3.5%, multiplied by a municipal coefficient (Hebesatz) that ranges from around 200% to over 500%.\n\nIn practice, the combined effective tax rate for a GmbH ranges from approximately 23% to 33%, depending on the municipality. In major cities like Munich (490%), Frankfurt (460%), or Berlin (410%), the effective rate is around 30-33%. Smaller towns may have significantly lower trade tax multipliers.",
          },
          {
            heading: "Filing and Compliance",
            body: "Companies must file corporate income tax and trade tax returns annually with the local tax office (Finanzamt). The deadline is typically July 31 of the following year, or the end of February of the second following year if using a tax advisor (Steuerberater). Advance payments are made quarterly (March 10, June 10, September 10, December 10).\n\nGermany has extensive transfer pricing documentation requirements and participates in Country-by-Country Reporting for large multinationals. Loss carryforwards are subject to a minimum taxation rule — only EUR 1 million plus 60% of income exceeding EUR 1 million can be offset by prior losses in any given year.",
          },
        ],
        keyTakeaways: [
          "The combined corporate tax rate is typically 30-33% including corporate income tax, solidarity surcharge, and trade tax.",
          "Trade tax rates vary significantly by municipality (Hebesatz).",
          "Annual returns are filed with the Finanzamt; quarterly advance payments are required.",
          "Loss carryforward is limited to EUR 1 million plus 60% of excess income.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-09-19T10:00:00.000Z",
      sources: [
        { label: "BMF - Corporate Tax", url: "https://www.bundesfinanzministerium.de/Web/EN/Issues/Taxation/corporation-tax.html" },
        { label: "BZSt - Federal Central Tax Office", url: "https://www.bzst.de/EN/Home/home_node.html" },
      ],
    }],
  },
  {
    question: {
      id: "q-de-income-tax",
      title: "What are the individual income tax brackets in Germany?",
      body: "I'm moving to Germany for a new position and want to understand how Einkommensteuer works. What are the tax brackets, and how do social security contributions factor in? I've heard the overall burden is quite high.",
      author: { displayName: "Laura Fischer", avatarSeed: "de-laura-fischer", badge: "new-member" as const },
      category: "de-tax",
      tags: ["Germany", "income tax", "Einkommensteuer", "tax brackets", "social security"],
      postedAt: "2025-10-25T14:00:00.000Z",
      viewCount: 2560,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in Germany",
      seoDescription: "Complete guide to German income tax brackets, solidarity surcharge, church tax, social security contributions, and filing deadlines.",
    },
    answers: [{
      id: "a-de-income-tax",
      questionId: "q-de-income-tax",
      articleContent: {
        sections: [
          {
            heading: "Income Tax Brackets",
            body: "Germany uses a progressive income tax system with rates ranging from 0% to 45%. The basic tax-free allowance (Grundfreibetrag) is EUR 11,784 (2025). Income from EUR 11,785 to EUR 17,005 is taxed at a rate starting at 14% and increasing progressively. From EUR 17,006 to EUR 66,760, rates continue to increase up to 42%. The top rate of 42% applies to income from EUR 66,761 to EUR 277,825, and a surcharge rate of 45% (Reichensteuer) applies to income above EUR 277,826.\n\nThe solidarity surcharge of 5.5% has been largely abolished for most taxpayers since 2021, but still applies to high earners (income tax exceeding approximately EUR 18,130 for singles). Church tax (Kirchensteuer) of 8-9% of income tax is levied on registered church members.",
          },
          {
            heading: "Social Contributions and Filing",
            body: "Mandatory social security contributions are shared roughly 50/50 between employer and employee. Employee portions include health insurance (~7.3% + supplementary contribution), pension insurance (9.3%), unemployment insurance (1.3%), and long-term care insurance (1.7-2.3%). Total employee social contributions are approximately 20% of gross salary, capped at income ceilings (approximately EUR 62,100 for pension/unemployment, EUR 66,150 for health in 2025).\n\nTax returns are due by July 31 of the following year (February 28 of the second following year with a tax advisor). Employees with only wage income and no other significant income may not need to file a return, as income tax is withheld through the Lohnsteuer system. However, filing is often advantageous to claim deductions such as work-related expenses (Werbungskosten), special expenses (Sonderausgaben), and extraordinary burdens.",
          },
        ],
        keyTakeaways: [
          "Progressive rates from 14% to 45%, with a basic allowance of EUR 11,784.",
          "The top marginal rate of 42% kicks in at EUR 66,761; 45% above EUR 277,826.",
          "Employee social contributions add approximately 20% on top of income tax.",
          "Tax returns are due July 31 (or end of February with a tax advisor).",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-10-26T09:00:00.000Z",
      sources: [
        { label: "BMF - Income Tax", url: "https://www.bundesfinanzministerium.de/Web/EN/Issues/Taxation/income-tax.html" },
        { label: "Federal Employment Agency - Social Security", url: "https://www.arbeitsagentur.de/en/social-security" },
      ],
    }],
  },
  {
    question: {
      id: "q-de-vat",
      title: "Does Germany have VAT? How does it work?",
      body: "I'm selling products online to German customers from outside the EU. What is Germany's VAT rate, and what are the rules for non-EU sellers? How does the import one-stop shop work?",
      author: { displayName: "Stefan Braun", avatarSeed: "de-stefan-braun", badge: "new-member" as const },
      category: "de-tax",
      tags: ["Germany", "VAT", "Umsatzsteuer", "IOSS", "non-EU seller"],
      postedAt: "2025-11-22T11:00:00.000Z",
      viewCount: 1470,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Germany have VAT and how does it work",
      seoDescription: "Guide to German VAT (Umsatzsteuer) rates, registration requirements, Kleinunternehmer exemption, and EU import rules.",
    },
    answers: [{
      id: "a-de-vat",
      questionId: "q-de-vat",
      articleContent: {
        sections: [
          {
            heading: "VAT Rates and Registration",
            body: "Germany's standard VAT rate (Umsatzsteuer/Mehrwertsteuer) is 19%. A reduced rate of 7% applies to food, books, newspapers, public transport, hotels, and cultural events. The small business exemption (Kleinunternehmerregelung) allows businesses with revenue under EUR 22,000 in the prior year and expected under EUR 50,000 in the current year to opt out of charging VAT, though they cannot reclaim input VAT.\n\nAll businesses making taxable supplies in Germany must register for VAT with the Bundeszentralamt fur Steuern (BZSt) and obtain a VAT identification number (USt-IdNr). Non-resident businesses making taxable supplies in Germany must register regardless of turnover.",
          },
          {
            heading: "Non-EU Sellers and IOSS",
            body: "Non-EU sellers shipping goods valued at EUR 150 or less to German consumers can use the Import One Stop Shop (IOSS) to collect VAT at the point of sale, avoiding customs clearance delays. For goods exceeding EUR 150, import VAT (and customs duties) are collected at the German border or can be handled through a fiscal representative.\n\nVAT returns are generally filed monthly (quarterly if annual VAT liability is under EUR 7,500). An annual VAT return (Umsatzsteuerjahreserklarung) must be filed in addition to periodic returns. The filing deadline for monthly returns is the 10th of the following month. Businesses can apply for a one-month permanent extension (Dauerfristverlagerung).",
          },
        ],
        keyTakeaways: [
          "Germany's standard VAT rate is 19%; reduced rate of 7% for food, books, and hotels.",
          "Small businesses under EUR 22,000 revenue can opt out of VAT (Kleinunternehmerregelung).",
          "IOSS allows non-EU sellers to collect VAT upfront on goods under EUR 150.",
          "Monthly VAT returns are due by the 10th; annual returns are also required.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-11-23T09:00:00.000Z",
      sources: [
        { label: "BZSt - VAT", url: "https://www.bzst.de/EN/Businesses/VAT/vat_node.html" },
        { label: "BMF - VAT Rates", url: "https://www.bundesfinanzministerium.de/Web/EN/Issues/Taxation/vat.html" },
      ],
    }],
  },

  // =====================================================
  // JAPAN (jp-tax)
  // =====================================================
  {
    question: {
      id: "q-jp-corporate-tax",
      title: "How does corporate tax work in Japan?",
      body: "I'm setting up a KK (Kabushiki Kaisha) in Japan. I know the effective rate is quite high when you combine national and local taxes. Can you break down the different components and explain what the total rate actually is?",
      author: { displayName: "Yuki Tanaka", avatarSeed: "jp-yuki-tanaka", badge: "subscriber" as const },
      category: "jp-tax",
      tags: ["Japan", "corporate tax", "KK", "Kabushiki Kaisha"],
      postedAt: "2025-08-15T07:00:00.000Z",
      viewCount: 1980,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in Japan",
      seoDescription: "Guide to Japanese corporate taxation including national CIT, local inhabitant tax, enterprise tax, and the total effective rate for KK companies.",
    },
    answers: [{
      id: "a-jp-corporate-tax",
      questionId: "q-jp-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "Multiple Tax Components",
            body: "Japanese corporate taxation involves several layers. National corporate income tax (hojin-zei) has a standard rate of 23.2% for companies with capital over JPY 100 million. Small and medium enterprises (SMEs) with capital of JPY 100 million or less pay 15% on the first JPY 8 million of income and 23.2% on the remainder.\n\nOn top of national CIT, companies pay local inhabitant tax (jumin-zei) calculated as approximately 10.4% of the national CIT (varying by prefecture and municipality), enterprise tax (jigyo-zei) at rates from 3.5% to 7% depending on income level and size, and special local corporate tax. The combined effective tax rate for large companies is approximately 30-34% depending on location. For SMEs on their first JPY 8 million, the effective rate can be around 21-25%.",
          },
          {
            heading: "Filing and Key Rules",
            body: "Corporate tax returns must be filed within two months of the end of the fiscal year (extendable by one month with approval). Most Japanese companies use March 31 fiscal year-end, making the standard filing deadline May 31. Interim returns or estimated tax payments are required within two months after the first six months of the fiscal year.\n\nJapan has a worldwide taxation system for domestic corporations — all worldwide income is taxable, with foreign tax credits available to avoid double taxation. Japan has an extensive tax treaty network. Transfer pricing rules, thin capitalization rules, and earnings stripping rules apply to cross-border transactions.",
          },
        ],
        keyTakeaways: [
          "The combined effective corporate tax rate is approximately 30-34% for large companies.",
          "SMEs with capital under JPY 100 million benefit from a reduced 15% rate on the first JPY 8 million.",
          "Returns are due within two months of fiscal year-end (typically May 31 for March fiscal years).",
          "Japan taxes worldwide income of domestic corporations with foreign tax credit relief.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-08-16T10:00:00.000Z",
      sources: [
        { label: "NTA - Corporate Tax", url: "https://www.nta.go.jp/english/taxes/others/02/12.htm" },
        { label: "JETRO - Tax System", url: "https://www.jetro.go.jp/en/invest/setting_up/laws/section3/page3.html" },
      ],
    }],
  },
  {
    question: {
      id: "q-jp-income-tax",
      title: "What are the individual income tax brackets in Japan?",
      body: "I've been offered a position in Tokyo. How does Japanese income tax work, and what are the different brackets? I also need to understand resident tax and social insurance costs to calculate my take-home pay.",
      author: { displayName: "Haruto Suzuki", avatarSeed: "jp-haruto-suzuki", badge: "new-member" as const },
      category: "jp-tax",
      tags: ["Japan", "income tax", "tax brackets", "resident tax", "social insurance"],
      postedAt: "2025-10-08T14:00:00.000Z",
      viewCount: 2200,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in Japan",
      seoDescription: "Complete guide to Japanese income tax brackets, resident tax, social insurance contributions, and filing deadlines.",
    },
    answers: [{
      id: "a-jp-income-tax",
      questionId: "q-jp-income-tax",
      articleContent: {
        sections: [
          {
            heading: "National Income Tax Brackets",
            body: "Japan uses a progressive income tax system with seven brackets: 5% on income up to JPY 1.95 million, 10% from JPY 1.95M to JPY 3.3M, 20% from JPY 3.3M to JPY 6.95M, 23% from JPY 6.95M to JPY 9M, 33% from JPY 9M to JPY 18M, 40% from JPY 18M to JPY 40M, and 45% on income above JPY 40 million. A surtax of 2.1% is applied to the national income tax amount (reconstruction special income tax, effective through 2037).\n\nIn addition to national income tax, residents pay a flat local inhabitant tax (jumin-zei) of approximately 10% (6% prefectural + 4% municipal) on the previous year's income. This means the combined top marginal rate can reach approximately 55%.",
          },
          {
            heading: "Social Insurance and Filing",
            body: "Employees contribute to social insurance (shakai hoken), which includes health insurance (approximately 5% of salary), pension (Kosei Nenkin at 9.15%), employment insurance (0.6%), and long-term care insurance (0.8% for those 40-64). The employer matches most of these contributions. Total employee social insurance contributions are roughly 15% of salary, capped at income ceilings.\n\nMost employees have tax withheld through their employer and undergo a year-end adjustment (nenmatsu chosei) in December. A final tax return (kakutei shinkoku) is required by March 15 for those with multiple income sources, self-employment income, or income exceeding JPY 20 million. Various deductions are available including basic deduction (JPY 480,000), spouse deduction, and social insurance premium deduction.",
          },
        ],
        keyTakeaways: [
          "National income tax rates range from 5% to 45%, plus a 10% local inhabitant tax.",
          "The combined top marginal rate is approximately 55% including national and local taxes.",
          "Social insurance contributions add roughly 15% for employees (employer matches).",
          "Final tax returns are due by March 15; most employees use year-end adjustment.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-10-09T09:00:00.000Z",
      sources: [
        { label: "NTA - Income Tax", url: "https://www.nta.go.jp/english/taxes/individual/12.htm" },
        { label: "NTA - Tax Filing", url: "https://www.nta.go.jp/english/taxes/individual/12001.htm" },
      ],
    }],
  },
  {
    question: {
      id: "q-jp-vat",
      title: "Does Japan have VAT/GST? How does it work?",
      body: "I'm an overseas seller shipping products to Japan. How does the Japanese consumption tax work, and what are my registration obligations? I've heard there were changes to the invoice system recently.",
      author: { displayName: "Kenji Yamamoto", avatarSeed: "jp-kenji-yamamoto", badge: "new-member" as const },
      category: "jp-tax",
      tags: ["Japan", "consumption tax", "VAT", "invoice system", "JCT"],
      postedAt: "2025-11-15T10:00:00.000Z",
      viewCount: 1380,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Japan have VAT or consumption tax and how does it work",
      seoDescription: "Guide to Japan's consumption tax (JCT), the qualified invoice system, registration requirements, and filing obligations.",
    },
    answers: [{
      id: "a-jp-vat",
      questionId: "q-jp-vat",
      articleContent: {
        sections: [
          {
            heading: "Consumption Tax Rate and Scope",
            body: "Japan's consumption tax (shohi-zei) is effectively a VAT, charged at a standard rate of 10% (comprising 7.8% national and 2.2% local). A reduced rate of 8% (6.24% national + 1.76% local) applies to food and non-alcoholic beverages (excluding dining out) and newspaper subscriptions. The tax applies to domestic sales of goods and services, and to imports.\n\nSince October 2023, Japan requires the Qualified Invoice System (Tekikaku Seikyusho or Invoice System) for input tax credit claims. Only registered invoice issuers can issue qualified invoices. Buyers can only claim input tax credits on purchases supported by qualified invoices.",
          },
          {
            heading: "Registration and Filing",
            body: "Businesses with taxable sales of JPY 10 million or less in the base period (two fiscal years prior) are exempt from consumption tax as tax-exempt enterprises (menzei jigyosha). However, to issue qualified invoices, even small businesses must voluntarily register. Overseas businesses making taxable supplies in Japan (including digital services to Japanese consumers) must also register.\n\nConsumption tax returns are filed annually (within two months of fiscal year-end) for most businesses. Businesses with tax liability exceeding JPY 480,000 must make interim payments. Large businesses may file quarterly or monthly. A transitional measure (2023-2029) allows buyers to claim partial input credits even from non-registered sellers (80% through September 2026, then 50% through September 2029).",
          },
        ],
        keyTakeaways: [
          "Japan's consumption tax is 10% (8% reduced rate for food and newspapers).",
          "The Qualified Invoice System (since October 2023) is required for input tax credit claims.",
          "Businesses with taxable sales under JPY 10 million may be exempt but cannot issue qualified invoices.",
          "Annual returns are due within two months of fiscal year-end; interim payments may apply.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-11-16T09:00:00.000Z",
      sources: [
        { label: "NTA - Consumption Tax", url: "https://www.nta.go.jp/english/taxes/consumption_tax/01.htm" },
        { label: "NTA - Invoice System", url: "https://www.nta.go.jp/english/taxes/consumption_tax/invoice.htm" },
      ],
    }],
  },

  // =====================================================
  // CANADA (ca-tax)
  // =====================================================
  {
    question: {
      id: "q-ca-corporate-tax",
      title: "How does corporate tax work in Canada?",
      body: "I'm incorporating a business in Canada and need to understand the combined federal and provincial corporate tax rates. What is the small business deduction, and how does it work? What are the filing requirements?",
      author: { displayName: "Michael Chen", avatarSeed: "ca-michael-chen", badge: "subscriber" as const },
      category: "ca-tax",
      tags: ["Canada", "corporate tax", "small business deduction", "CRA"],
      postedAt: "2025-09-02T09:00:00.000Z",
      viewCount: 2150,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in Canada",
      seoDescription: "Guide to Canadian corporate tax rates, small business deduction, federal and provincial rates, and CRA filing requirements.",
    },
    answers: [{
      id: "a-ca-corporate-tax",
      questionId: "q-ca-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "Federal and Provincial Rates",
            body: "Canada's federal corporate income tax rate is 15% for general business income. Canadian-controlled private corporations (CCPCs) benefit from the small business deduction, which reduces the federal rate to 9% on the first CAD 500,000 of active business income (the business limit). This limit is shared among associated corporations and reduced when taxable capital exceeds CAD 10 million.\n\nProvincial/territorial corporate tax rates range from approximately 8% to 16%, depending on the province. Combined federal-provincial general rates typically range from 23% to 31%. For small business income, combined rates range from approximately 9% (in some provinces) to 15%. Ontario and Alberta are generally considered competitive with combined general rates of 26.5% and 23% respectively.",
          },
          {
            heading: "Filing and Key Rules",
            body: "Corporate tax returns (T2) must be filed within six months of the fiscal year-end with the Canada Revenue Agency (CRA). However, any balance of tax owing is due within two months of year-end (three months for CCPCs claiming the small business deduction with taxable income under CAD 500,000 in the prior year). Monthly installments are required if tax owing exceeds CAD 3,000.\n\nCanada taxes domestic corporations on worldwide income. The system includes integration mechanisms between corporate and personal tax to reduce double taxation of business income, including the dividend tax credit and the refundable dividend tax on hand (RDTOH) system for passive investment income. Scientific Research and Experimental Development (SR&ED) tax credits provide 35% refundable credits for qualifying CCPCs.",
          },
        ],
        keyTakeaways: [
          "Federal rate is 15% general, 9% for small business income (first CAD 500,000 for CCPCs).",
          "Combined federal-provincial rates range from 23% to 31% for general income.",
          "T2 returns are due within six months of fiscal year-end; tax is payable within two months.",
          "SR&ED tax credits provide 35% refundable credits for qualifying R&D by CCPCs.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-09-03T10:00:00.000Z",
      sources: [
        { label: "CRA - Corporation Tax Rates", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/corporation-tax-rates.html" },
        { label: "CRA - Small Business Deduction", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/type-corporation/small-business-deduction.html" },
        { label: "CRA - T2 Filing", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/corporation-income-tax-return.html" },
      ],
    }],
  },
  {
    question: {
      id: "q-ca-income-tax",
      title: "What are the individual income tax brackets in Canada?",
      body: "I'm relocating to Canada and want to understand how personal income tax works with both federal and provincial components. What are the current federal brackets, and how much do provincial taxes add?",
      author: { displayName: "Sophie Martin", avatarSeed: "ca-sophie-martin", badge: "new-member" as const },
      category: "ca-tax",
      tags: ["Canada", "income tax", "tax brackets", "federal", "provincial"],
      postedAt: "2025-10-12T13:00:00.000Z",
      viewCount: 2450,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in Canada",
      seoDescription: "Complete guide to Canadian federal income tax brackets, provincial surtaxes, basic personal amount, and T1 filing deadlines.",
    },
    answers: [{
      id: "a-ca-income-tax",
      questionId: "q-ca-income-tax",
      articleContent: {
        sections: [
          {
            heading: "Federal Income Tax Brackets",
            body: "Canada's federal personal income tax has five brackets (2025): 15% on the first CAD 57,375, 20.5% on CAD 57,375 to CAD 114,750, 26% on CAD 114,750 to CAD 158,468, 29% on CAD 158,468 to CAD 221,708, and 33% on income above CAD 221,708. The basic personal amount (BPA) is CAD 16,129, providing a federal tax credit of approximately CAD 2,419 (15% of BPA).\n\nProvincial income tax rates vary significantly. For example, Ontario rates range from 5.05% to 13.16%, Alberta from 10% to 15%, British Columbia from 5.06% to 20.5%, and Quebec from 14% to 25.75%. The combined top marginal federal-provincial rate ranges from approximately 44% (in some provinces) to over 54% (in provinces like Nova Scotia and Quebec when including health contributions).",
          },
          {
            heading: "Deductions and Filing",
            body: "Key deductions include RRSP contributions (up to 18% of prior year earned income, maximum CAD 31,560 for 2024), moving expenses, childcare expenses, union/professional dues, and employment expenses. The tax-free savings account (TFSA) annual contribution limit is CAD 7,000 (2025). CPP contributions are mandatory for employees and self-employed individuals.\n\nT1 individual tax returns are due April 30 each year (June 15 for self-employed individuals, though any balance owing is still due April 30). Canada uses a self-assessment system, and most employees have tax deducted at source through payroll. Benefits like the Canada Child Benefit (CCB) and GST/HST credit are delivered based on tax return information.",
          },
        ],
        keyTakeaways: [
          "Federal rates range from 15% to 33%, with provincial rates adding 5% to 25% on top.",
          "Combined top marginal rates range from approximately 44% to 54% depending on province.",
          "RRSP contributions and the basic personal amount are key tax-reduction tools.",
          "T1 returns are due April 30 (June 15 for self-employed); tax owing is due April 30.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-10-13T09:00:00.000Z",
      sources: [
        { label: "CRA - Federal Tax Rates", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html" },
        { label: "CRA - RRSP", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans.html" },
      ],
    }],
  },
  {
    question: {
      id: "q-ca-vat",
      title: "Does Canada have VAT/GST? How does it work?",
      body: "I'm selling products online to Canadian customers. I know Canada has GST but also provincial sales taxes. Can you explain how GST, HST, and PST work, and when I need to register?",
      author: { displayName: "Daniel Park", avatarSeed: "ca-daniel-park", badge: "new-member" as const },
      category: "ca-tax",
      tags: ["Canada", "GST", "HST", "PST", "sales tax"],
      postedAt: "2025-12-08T11:00:00.000Z",
      viewCount: 1590,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Canada have GST or VAT and how does it work",
      seoDescription: "Guide to Canadian GST, HST, and PST rates by province, registration thresholds, and filing requirements for businesses.",
    },
    answers: [{
      id: "a-ca-vat",
      questionId: "q-ca-vat",
      articleContent: {
        sections: [
          {
            heading: "GST, HST, and PST Explained",
            body: "Canada has a federal Goods and Services Tax (GST) of 5% that applies to most goods and services. Five provinces (Ontario, New Brunswick, Newfoundland and Labrador, Nova Scotia, and Prince Edward Island) harmonize their provincial tax with GST into a Harmonized Sales Tax (HST) ranging from 13% to 15%. British Columbia, Saskatchewan, and Manitoba charge a separate Provincial Sales Tax (PST) of 6-7% in addition to GST. Quebec operates its own Quebec Sales Tax (QST) at 9.975%. Alberta and the territories have no provincial sales tax.\n\nSome supplies are zero-rated (0% GST/HST but eligible for input tax credits), including basic groceries, prescription drugs, and exports. Exempt supplies (no GST/HST and no input tax credits) include most financial services, residential rent, and healthcare.",
          },
          {
            heading: "Registration and Filing",
            body: "GST/HST registration is mandatory for businesses with worldwide taxable supplies exceeding CAD 30,000 in any single calendar quarter or in the previous four consecutive calendar quarters. Below this threshold, you are a small supplier and registration is optional. Non-resident businesses that carry on business in Canada may also need to register.\n\nGST/HST returns are filed annually (for businesses with revenue under CAD 1.5 million), quarterly (CAD 1.5M to CAD 6M), or monthly (over CAD 6M). Annual filers have three months after year-end to file; quarterly and monthly filers have one month. The Quick Method is available for small businesses, allowing them to remit a reduced percentage of GST/HST collected and keep the difference. Input tax credits are available for GST/HST paid on business purchases.",
          },
        ],
        keyTakeaways: [
          "Federal GST is 5%; combined HST ranges from 13-15% in harmonized provinces.",
          "Some provinces charge separate PST (6-7%) or QST (9.975%) on top of GST.",
          "Registration is mandatory when taxable supplies exceed CAD 30,000 in a quarter or four quarters.",
          "Filing frequency depends on revenue: annual, quarterly, or monthly.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-12-09T09:00:00.000Z",
      sources: [
        { label: "CRA - GST/HST", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html" },
        { label: "CRA - GST/HST Registration", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/register-a-gst-hst-account.html" },
        { label: "CRA - GST/HST Rates by Province", url: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html" },
      ],
    }],
  },

  // =====================================================
  // AUSTRALIA (au-tax)
  // =====================================================
  {
    question: {
      id: "q-au-corporate-tax",
      title: "How does corporate tax work in Australia?",
      body: "I'm considering establishing a company in Australia. What are the current corporate tax rates, and I've heard there's a different rate for smaller companies? What are the key filing obligations with the ATO?",
      author: { displayName: "Liam Anderson", avatarSeed: "au-liam-anderson", badge: "subscriber" as const },
      category: "au-tax",
      tags: ["Australia", "corporate tax", "ATO", "small business"],
      postedAt: "2025-08-28T08:00:00.000Z",
      viewCount: 1890,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How does corporate tax work in Australia",
      seoDescription: "Guide to Australian corporate tax rates, base rate entity concessions, franking credits, and ATO filing requirements.",
    },
    answers: [{
      id: "a-au-corporate-tax",
      questionId: "q-au-corporate-tax",
      articleContent: {
        sections: [
          {
            heading: "Corporate Tax Rates",
            body: "Australia's standard corporate tax rate is 30%. However, base rate entities — companies with aggregated turnover less than AUD 50 million and no more than 80% of assessable income from base rate entity passive income — qualify for a reduced rate of 25%. This lower rate has been available since the 2021-22 income year.\n\nAustralia operates an imputation system (franking credits) that integrates corporate and personal tax. When a company pays dividends from after-tax profits, the shareholder receives a franking credit for the corporate tax already paid. This effectively eliminates double taxation and makes the Australian system distinctive globally.",
          },
          {
            heading: "Filing and Compliance",
            body: "Companies must lodge an annual company tax return with the Australian Taxation Office (ATO). The standard due date is the 28th of the month following the end of the income year (February 28 for companies with a June 30 year-end), though most companies using a tax agent have extended deadlines up to May 15 or later. PAYG (Pay As You Go) installments are required quarterly for companies with an established tax liability.\n\nAustralia taxes resident companies on worldwide income. Foreign income tax offsets are available for foreign taxes paid. The country has significant transfer pricing rules aligned with OECD guidelines, thin capitalization rules, and a diverted profits tax of 40% targeting multinational profit shifting. Small businesses (turnover under AUD 10 million) can access additional concessions including simplified depreciation and instant asset write-offs.",
          },
        ],
        keyTakeaways: [
          "Standard corporate tax rate is 30%; base rate entities (turnover under AUD 50M) pay 25%.",
          "The franking credit (imputation) system eliminates double taxation of dividends.",
          "Annual company tax returns are filed with the ATO; quarterly PAYG installments apply.",
          "A 40% diverted profits tax targets multinational profit-shifting arrangements.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-08-29T10:00:00.000Z",
      sources: [
        { label: "ATO - Company Tax Rates", url: "https://www.ato.gov.au/rates/changes-to-company-tax-rates/" },
        { label: "ATO - Franking Credits", url: "https://www.ato.gov.au/individuals-and-families/investments-and-assets/in-detail/franking-credits" },
        { label: "ATO - Company Tax Return", url: "https://www.ato.gov.au/businesses-and-organisations/preparing-and-lodging/reports-and-returns/company-tax-return" },
      ],
    }],
  },
  {
    question: {
      id: "q-au-income-tax",
      title: "What are the individual income tax brackets in Australia?",
      body: "I'm planning to move to Australia for work. What are the current tax brackets, and I've heard Stage 3 tax cuts have changed the rates? How does the Medicare levy work on top of income tax?",
      author: { displayName: "Emma Williams", avatarSeed: "au-emma-williams", badge: "new-member" as const },
      category: "au-tax",
      tags: ["Australia", "income tax", "tax brackets", "Stage 3", "Medicare levy"],
      postedAt: "2025-10-18T14:00:00.000Z",
      viewCount: 2850,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What are the individual income tax brackets in Australia",
      seoDescription: "Complete guide to Australian income tax brackets after Stage 3 tax cuts, Medicare levy, HECS/HELP, and ATO lodgment deadlines.",
    },
    answers: [{
      id: "a-au-income-tax",
      questionId: "q-au-income-tax",
      articleContent: {
        sections: [
          {
            heading: "Tax Brackets After Stage 3 Cuts",
            body: "From July 1, 2024, Australia's individual income tax brackets (for residents) are: 0% on income up to AUD 18,200 (tax-free threshold), 16% from AUD 18,201 to AUD 45,000, 30% from AUD 45,001 to AUD 135,000, 37% from AUD 135,001 to AUD 190,000, and 45% on income above AUD 190,000. The revised Stage 3 tax cuts reduced the 19% bracket to 16% and the 32.5% bracket to 30%, while lowering the threshold for the 37% bracket from AUD 120,000 to AUD 135,000.\n\nThe Medicare levy of 2% applies on top of these rates for most taxpayers, bringing the effective top marginal rate to 47%. Low-income earners below certain thresholds receive a Medicare levy reduction or exemption. The Medicare Levy Surcharge (1-1.5%) applies to higher earners without adequate private hospital insurance.",
          },
          {
            heading: "Deductions and Filing",
            body: "Common deductions include work-related expenses (uniforms, tools, travel, working from home), self-education expenses, charitable donations, and private health insurance rebate. The low and middle income tax offset (LMITO) has ended, but the low income tax offset (LITO) of up to AUD 700 remains for taxable income under AUD 66,668. Superannuation contributions of up to AUD 30,000 per year are concessionally taxed at 15%.\n\nIndividual tax returns are due by October 31 if self-lodging, or extended to May 15 (or later) if using a registered tax agent. Australia's financial year runs July 1 to June 30. The ATO pre-fills significant amounts of data from employers, banks, and health insurers. PAYG withholding deducts tax from salary throughout the year. HECS/HELP student loan repayments are collected through the tax system once income exceeds the repayment threshold (AUD 54,435 for 2024-25).",
          },
        ],
        keyTakeaways: [
          "Tax rates range from 0% to 45%, plus a 2% Medicare levy (effective top rate of 47%).",
          "Stage 3 cuts reduced the 19% rate to 16% and the 32.5% rate to 30% from July 2024.",
          "Superannuation contributions up to AUD 30,000 per year are taxed at a concessional 15%.",
          "Tax returns are due October 31 (self-lodging) or later with a registered tax agent.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-10-19T09:00:00.000Z",
      sources: [
        { label: "ATO - Individual Tax Rates", url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents" },
        { label: "ATO - Medicare Levy", url: "https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy" },
        { label: "ATO - Lodgment Dates", url: "https://www.ato.gov.au/businesses-and-organisations/preparing-and-lodging/lodging-your-tax-and-activity-statements/due-dates-for-lodging-and-paying" },
      ],
    }],
  },
  {
    question: {
      id: "q-au-gst",
      title: "Does Australia have GST? How does it work?",
      body: "I'm selling digital products to Australian customers from overseas. Does Australia have GST, and am I required to register and collect it? What are the thresholds and rates?",
      author: { displayName: "Jack Robinson", avatarSeed: "au-jack-robinson", badge: "new-member" as const },
      category: "au-tax",
      tags: ["Australia", "GST", "digital products", "overseas seller"],
      postedAt: "2025-11-25T10:00:00.000Z",
      viewCount: 1340,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Australia have GST and how does it work",
      seoDescription: "Guide to Australian GST rates, registration thresholds, rules for overseas digital sellers, and BAS filing requirements.",
    },
    answers: [{
      id: "a-au-gst",
      questionId: "q-au-gst",
      articleContent: {
        sections: [
          {
            heading: "GST Rate and Registration",
            body: "Australia has a Goods and Services Tax (GST) of 10% on most goods, services, and imports. GST registration is mandatory for businesses with a GST turnover (gross income minus GST) of AUD 75,000 or more per year (AUD 150,000 for non-profit organizations). Below this threshold, registration is voluntary.\n\nGST-free supplies (equivalent to zero-rated) include most basic food, health services, education, childcare, and exports. Input-taxed supplies (no GST charged and no input tax credits) include financial services, residential rent, and residential property sales. Capital purchases are eligible for GST credits.",
          },
          {
            heading: "Overseas Sellers and Filing",
            body: "Since July 2017, overseas businesses making B2C supplies of digital products, services, and low-value imported goods (AUD 1,000 or less) to Australian consumers must register for GST if their Australian turnover exceeds AUD 75,000. This applies regardless of whether the business has a physical presence in Australia. Electronic distribution platforms (EDPs) may be responsible for collecting GST on behalf of vendors.\n\nGST is reported on Business Activity Statements (BAS), filed monthly (turnover over AUD 20 million), quarterly (standard), or annually (for voluntary registrants with turnover under AUD 75,000 using the simplified system). Quarterly BAS is due 28 days after the end of each quarter. Businesses can claim input tax credits for GST paid on business purchases. The simplified GST registration system is available for non-resident businesses with no physical presence in Australia.",
          },
        ],
        keyTakeaways: [
          "Australian GST is 10%, with registration required at AUD 75,000 annual turnover.",
          "Overseas digital sellers must register if Australian B2C turnover exceeds AUD 75,000.",
          "Basic food, health services, education, and exports are GST-free.",
          "BAS filing is quarterly for most businesses, due 28 days after quarter end.",
        ],
      },
      author: TEAM_AUTHOR,
      postedAt: "2025-11-26T09:00:00.000Z",
      sources: [
        { label: "ATO - GST", url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst" },
        { label: "ATO - GST Registration", url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst" },
        { label: "ATO - Overseas Sellers", url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/in-detail/rules-for-specific-transactions/australian-gst-on-low-value-imported-goods" },
      ],
    }],
  },
];
