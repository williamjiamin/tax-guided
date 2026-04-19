// IE_TAX_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const IE_TAX_THREADS: QAThread[] = [
  {
    question: {
      id: "q-ie-corporation-tax",
      title: "How does corporation tax work in Ireland for trading companies and international groups?",
      body: "I need the real Irish answer, not a postcard version that only says 12.5%. Please explain the different corporation tax rates, why trading and non-trading income are treated differently, and what larger groups should understand about the 15% minimum tax rules now in force.",
      author: {
        displayName: "Aoife Murphy",
        avatarSeed: "ie-aoife-murphy",
        badge: "subscriber",
      },
      category: "ie-tax",
      tags: ["Ireland", "corporation tax", "trading income", "international tax"],
      postedAt: "2025-02-21T08:00:00.000Z",
      viewCount: 3580,
      answerCount: 1,
      status: "answered",
      seoTitle: "How corporation tax works in Ireland for trading companies",
      seoDescription: "Ireland corporation tax explained with 12.5% and 25% rates, filing deadlines, residence rules, and when the 15% minimum tax matters.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-ie-corporation-tax",
        questionId: "q-ie-corporation-tax",
        articleContent: {
          sections: [
            {
              heading: "The Irish headline rate is not one number for every kind of company income",
              body: `Revenue's corporation tax basis-of-charge page gives the key starting point: Ireland does not simply impose one universal company tax rate. Trading income is generally taxed at 12.5%, while certain other income, including non-trading income such as rental and investment income, is generally taxed at 25%. That means a founder cannot quote the famous 12.5% rate responsibly unless they have already established what kind of profit the company is earning.\n\nThis matters more in practice than many promotional explainers admit. A business with active trading income, treasury income and property income can easily sit in more than one rate conversation at the same time.`,
            },
            {
              heading: "Residence and filing still matter even when the rate question looks simple",
              body: `Revenue's company-residency guidance adds another layer. Companies incorporated in Ireland on or after 1 January 2015 are generally treated as Irish tax resident unless a double tax agreement treats them as resident elsewhere, while foreign-incorporated companies can still be Irish resident if they are centrally managed and controlled in Ireland. So the tax answer depends not just on what the company earns, but also on how and where it is actually run.\n\nThe compliance calendar is also stricter than many people expect. Revenue says a company must file and pay within nine months after the end of the accounting period, on or before the 23rd day of the ninth month when filing electronically through ROS.`,
            },
            {
              heading: "Large groups now need to look beyond the classic Irish rate story",
              body: `Revenue's Pillar Two guidance is the modern corrective to older Ireland tax articles. For in-scope large groups, the rules now aim at a 15% minimum effective tax rate on a jurisdictional basis and Ireland has implemented a domestic top-up tax alongside the broader framework. That does not replace the ordinary corporation tax rules for every business, but it does mean the old "Ireland equals 12.5%" shorthand is no longer enough for multinational group planning.\n\nThis answer is educational only and not tax advice. Before filing or modelling an Irish structure, read the live Revenue pages on the basis of charge, company residence, payment deadlines and Pillar Two together rather than treating them as separate topics.`,
            },
          ],
          keyTakeaways: [
            "Ireland generally taxes trading income at 12.5% and certain non-trading income at 25%.",
            "Company residence can depend on incorporation, treaty position and central management and control.",
            "Corporation tax filing and payment are generally due by the 23rd day of the ninth month after period end.",
            "Large groups may also need to consider Ireland's 15% Pillar Two minimum-tax framework.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-02-23T10:00:00.000Z",
        sources: [
          {
            label: "Corporation Tax basis of charge",
            url: "https://www.revenue.ie/en/companies-and-charities/corporation-tax-for-companies/corporation-tax/basis-of-charge.aspx",
          },
          {
            label: "Company residency rules",
            url: "https://www.revenue.ie/en/companies-and-charities/corporation-tax-for-companies/corporation-tax/company-residency-rules.aspx",
          },
          {
            label: "Corporation Tax payment and filing",
            url: "https://www.revenue.ie/en/companies-and-charities/corporation-tax-for-companies/corporation-tax-payment-and-filing/payment-and-filing.aspx",
          },
          {
            label: "What are the Pillar Two rules?",
            url: "https://www.revenue.ie/en/companies-and-charities/pillar-two/what-is/pillar-two-rules.aspx",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ie-income-tax-bands",
      title: "What are the current Irish income tax bands, and what do people miss beyond the 20% and 40% rates?",
      body: "I want a current Ireland answer that reflects the actual Revenue tables. Please explain the standard rate bands for 2026, why civil status changes the calculation, and why workers should not confuse income tax with their total payroll burden once USC and PRSI are added.",
      author: {
        displayName: "Niamh Kelly",
        avatarSeed: "ie-niamh-kelly",
        badge: "new-member",
      },
      category: "ie-tax",
      tags: ["Ireland", "income tax", "PAYE", "USC"],
      postedAt: "2025-03-28T08:00:00.000Z",
      viewCount: 3295,
      answerCount: 1,
      status: "answered",
      seoTitle: "Current Ireland income tax bands explained for 2026",
      seoDescription: "Ireland income tax bands for 2026 explained with 20% and 40% rates, civil-status differences, tax credits, and the extra impact of USC and PRSI.",
    },
    answers: [
      {
        id: "a-ie-income-tax-bands",
        questionId: "q-ie-income-tax-bands",
        articleContent: {
          sections: [
            {
              heading: "Ireland still works on a standard-rate band and then a higher rate above it",
              body: `Revenue's 2026 tax-rates chart puts the core numbers in one place. A single person without qualifying children has a €44,000 standard-rate band taxed at 20%, with the balance at 40%. A married couple or civil partners with one income have a €53,000 band at 20%, and jointly assessed couples with two incomes can increase that band further, subject to a cap. The structure is simple to state, but not identical for every household.\n\nThat difference by civil status matters because many casual summaries quote only the single-person number. Someone using the wrong band can misunderstand their annual position before tax credits are even considered.`,
            },
            {
              heading: "Tax credits and taxable pay still do a lot of the real work",
              body: `Revenue's calculation guidance is useful because it reminds people that income tax is applied to taxable pay and then reduced by tax credits. That means the final liability is not produced by multiplying gross pay by 20% and 40% alone. For 2026, the main credit figures, including the single-person credit and the employee PAYE credit, still shape the real amount payable.\n\nThis is especially important for employees comparing offers or checking payroll. Two people with similar salaries can still have different effective income tax outcomes because their rate band and credits are not identical.`,
            },
            {
              heading: "Income tax is only part of the payroll picture",
              body: `Revenue's PAYE guidance makes the bigger practical point: payroll deductions in Ireland are not only income tax. Employers operate PAYE for Income Tax, USC and PRSI, and those deductions must be reported on or before the pay date. So when workers ask "what rate of tax will I pay?", the honest answer is usually larger than the income tax band alone.\n\nThis answer is educational only and not tax advice. Before using a salary figure for budgeting, check the live Revenue rate tables, tax-credit position and the separate USC and PRSI impact rather than relying on the 20% and 40% labels by themselves.`,
            },
          ],
          keyTakeaways: [
            "Ireland's 2026 income tax still uses a 20% standard band and 40% higher rate above it.",
            "The size of the standard-rate band changes with civil status and household income pattern.",
            "Tax credits materially change the final income tax bill.",
            "Workers should budget for USC and PRSI alongside income tax, not after it.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-03-30T10:00:00.000Z",
        sources: [
          {
            label: "Tax rates, bands and reliefs",
            url: "https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/tax-relief-charts/index.aspx",
          },
          {
            label: "How your Income Tax is calculated",
            url: "https://www.revenue.ie/en/jobs-and-pensions/calculating-your-income-tax/how-income-tax-is-calculated.aspx",
          },
          {
            label: "The PAYE system",
            url: "https://www.revenue.ie/en/employing-people/becoming-an-employer-and-ongoing-obligations/guide-to-paye/the-paye-system.aspx",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ie-vat-rates-thresholds",
      title: "What VAT rates, registration thresholds and filing rules apply in Ireland now?",
      body: "I want the current Irish VAT picture in plain English. Please explain the main VAT rates, the turnover thresholds that trigger registration, and why businesses should pay attention to the filing cycle as well as the threshold because cash-flow mistakes often start there.",
      author: {
        displayName: "Ciaran Doyle",
        avatarSeed: "ie-ciaran-doyle",
        badge: "subscriber",
      },
      category: "vat-gst",
      tags: ["Ireland", "VAT", "registration threshold", "VAT return"],
      postedAt: "2025-05-16T08:00:00.000Z",
      viewCount: 3470,
      answerCount: 1,
      status: "answered",
      seoTitle: "Ireland VAT rates and registration thresholds explained",
      seoDescription: "Ireland VAT explained with current rates, registration thresholds, bi-monthly filing, and the key turnover tests businesses should watch.",
    },
    answers: [
      {
        id: "a-ie-vat-rates-thresholds",
        questionId: "q-ie-vat-rates-thresholds",
        articleContent: {
          sections: [
            {
              heading: "Ireland's VAT answer starts with both rates and business type",
              body: `Revenue's current VAT-rates page confirms that the standard Irish VAT rate from 1 January 2026 is 23%, with a reduced rate of 13.5% and a second reduced rate of 9% for qualifying categories. That is the headline part people usually remember. The harder part is that the right rate depends on what is actually being supplied, and many businesses do not sell only one type of item or service.\n\nSo the first good VAT habit is to stop asking only "what is the Irish VAT rate?" and start asking "what is the rate for this exact supply?" Mixed businesses often need a more careful review than the headline table suggests.`,
            },
            {
              heading: "Registration thresholds are not one-size-fits-all either",
              body: `Revenue's threshold page makes the structure clearer. The principal thresholds are €42,500 for services-only businesses and €85,000 for businesses supplying goods, with other thresholds and special cases layered on top for mixed businesses, EU acquisitions and certain cross-border digital or distance-sales situations. That means two businesses with similar turnover can still have different registration outcomes.\n\nThis is where founders often make the wrong mental comparison. They measure themselves against a threshold they found in an article written for a different type of activity and conclude that VAT is not yet relevant when, in fact, the wrong threshold was used.`,
            },
            {
              heading: "The filing rhythm matters almost as much as the threshold",
              body: `Revenue's filing guidance shows that VAT is normally accounted for on a bi-monthly basis, with filing and payment due by the 19th day of the following month or the 23rd day for ROS filers. That matters because VAT problems often begin as timing problems rather than rate problems. A business can know it is registered, know the correct rate, and still stumble because it has not planned the cash-flow and filing cycle properly.\n\nThis answer is educational only and not tax advice. Before registering or deciding you can wait, compare your real turnover pattern with Revenue's threshold rules and then build the filing calendar into the way the business collects and holds VAT.`,
            },
          ],
          keyTakeaways: [
            "Ireland's standard VAT rate is 23%, but reduced rates also apply in defined cases.",
            "The main VAT registration thresholds differ between services and goods businesses.",
            "Cross-border and mixed-activity businesses can face special threshold rules.",
            "Irish VAT is usually filed and paid on a bi-monthly cycle, so timing discipline matters.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-05-18T10:00:00.000Z",
        sources: [
          {
            label: "Current VAT rates",
            url: "https://www.revenue.ie/en/vat/vat-rates/search-vat-rates/current-VAT-rates.aspx",
          },
          {
            label: "What are the VAT thresholds?",
            url: "https://www.revenue.ie/en/vat/vat-registration/who-should-register-for-vat/vat-thresholds.aspx",
          },
          {
            label: "When VAT becomes payable",
            url: "https://www.revenue.ie/en/vat/accounting-for-vat/how-to-account-for-value-added-tax/when-vat-becomes-payable.aspx",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ie-deadlines-penalties",
      title: "What are the main Irish tax filing deadlines and late-filing penalties for companies and sole traders?",
      body: "I need the operational Irish answer, not a generic warning about staying compliant. Please explain the self-assessment pay-and-file date, the current ROS extension for 2026, the main corporation tax payment timing, and what actually happens if returns are filed late.",
      author: {
        displayName: "Siobhan Byrne",
        avatarSeed: "ie-siobhan-byrne",
      },
      category: "compliance",
      tags: ["Ireland", "tax deadlines", "late filing", "ROS"],
      postedAt: "2025-07-03T08:00:00.000Z",
      viewCount: 3010,
      answerCount: 1,
      status: "answered",
      seoTitle: "Ireland tax filing deadlines and late filing penalties",
      seoDescription: "Ireland tax deadlines explained with self-assessment dates, the 2026 ROS extension, corporation tax timing, and late-filing surcharges.",
    },
    answers: [
      {
        id: "a-ie-deadlines-penalties",
        questionId: "q-ie-deadlines-penalties",
        articleContent: {
          sections: [
            {
              heading: "Self-assessment still turns on one common pay-and-file date",
              body: `Revenue's self-assessment guidance keeps the core rule straightforward: by 31 October in a tax year, a self-assessed taxpayer must pay preliminary tax for that year, file the prior year's return and pay any balance due for the prior year. Revenue's 2026 eBrief then adds the concrete current-date update: for taxpayers who both pay and file through ROS, the 2025 Form 11 return and related payments are extended to Wednesday 18 November 2026.\n\nThat matters because relative-date advice gets stale quickly. Saying "mid-November if you use ROS" is not precise enough when Revenue has given an exact extended date for the 2026 cycle.`,
            },
            {
              heading: "Companies have their own timetable and it is not the same as Form 11 timing",
              body: `Revenue's corporation tax filing page states that companies generally must file and pay nine months after the end of the accounting period, on or before the 23rd day of the ninth month for electronic filers. Late payment interest is charged daily at 0.0219%, and late returns can also trigger surcharges and restrictions on certain relief claims.\n\nThat means founders should not copy self-employed deadline habits into a company context. A corporate accounting period can create a very different deadline map from the annual Form 11 cycle.`,
            },
            {
              heading: "Ireland's late-filing pain is administrative and financial at the same time",
              body: `Revenue's self-assessment and corporation tax guidance both show the same pattern: late returns trigger percentage-based surcharges, with 5% within two months and 10% after that, subject to statutory caps. Once delay sets in, interest, loss of reliefs and messy catch-up work can stack together. This is why the real cost of missing a deadline is rarely just one fee.\n\nThis answer is educational only and not tax advice. The safest habit is to calendar the exact self-assessment and company deadlines from Revenue's live guidance and to treat ROS extensions as conditional benefits, not assumptions.`,
            },
          ],
          keyTakeaways: [
            "Ireland's self-assessment pay-and-file deadline is generally 31 October.",
            "For 2026, Revenue extended the ROS deadline for qualifying 2025 Form 11 filings to Wednesday 18 November 2026.",
            "Companies generally file and pay corporation tax by the 23rd day of the ninth month after period end.",
            "Late filing can lead to surcharges, interest and restrictions on relief claims.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-07-05T10:00:00.000Z",
        sources: [
          {
            label: "Pay and file",
            url: "https://www.revenue.ie/en/online-services/services/common/file-an-income-tax-return.aspx",
          },
          {
            label: "Pay and file system - how does it work?",
            url: "https://www.revenue.ie/en/self-assessment-and-self-employment/guide-to-self-assessment/pay-file-system.aspx",
          },
          {
            label: "Revenue eBrief No. 034/26",
            url: "https://www.revenue.ie/en/tax-professionals/ebrief/2026/no-0342026.aspx",
          },
          {
            label: "Corporation Tax payment and filing",
            url: "https://www.revenue.ie/en/companies-and-charities/corporation-tax-for-companies/corporation-tax-payment-and-filing/payment-and-filing.aspx",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ie-start-business",
      title: "How should a founder choose between sole trader and company when starting a business in Ireland?",
      body: "I want the practical Irish setup sequence, not a vague entrepreneurship article. Please explain how sole trader and company routes differ, when Revenue registration kicks in, and why incorporating with the CRO does not by itself finish the tax setup work.",
      author: {
        displayName: "Patrick O'Connor",
        avatarSeed: "ie-patrick-oconnor",
        badge: "subscriber",
      },
      category: "entity-setup",
      tags: ["Ireland", "start a business", "sole trader", "company"],
      postedAt: "2026-01-15T08:00:00.000Z",
      viewCount: 3190,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to start a business in Ireland as a sole trader or company",
      seoDescription: "How to start a business in Ireland, comparing sole trader and company routes, Revenue registration, and the first compliance steps founders should handle.",
    },
    answers: [
      {
        id: "a-ie-start-business",
        questionId: "q-ie-start-business",
        articleContent: {
          sections: [
            {
              heading: "Ireland's first business choice is still about legal form, not just tax rate",
              body: `Revenue's "What is a business?" guidance lays out the practical split clearly. A sole trader runs the business personally and, if net income is above €5,000, must register as a self-employed person with Revenue. A company, by contrast, is a separate legal entity and pays corporation tax on its own business profits. Those two routes create different obligations from day one.\n\nThat legal difference matters before anyone starts optimising tax. It affects ownership, liability, payroll, reporting and how money is taken out of the business later.`,
            },
            {
              heading: "CRO incorporation and Revenue tax registration are linked, but they are not the same step",
              body: `Revenue's new-company registration page says you need a Companies Registration Office number before registering the company for tax. The company must then be registered with Revenue for the taxes that apply, such as Corporation Tax, PAYE, VAT or Relevant Contracts Tax. The CRO's own registration guidance reinforces the legal point: incorporation creates a body corporate with separate legal personality, while registering a business name does not.\n\nThis is where founders often get caught. They incorporate a company, receive the CRO documentation and assume the tax set-up is finished when it has only really begun.`,
            },
            {
              heading: "A clean start comes from choosing the operating model before filing forms",
              body: `The most common early mistake is working backwards from forms instead of from the business model. If the founder has not decided whether the venture will employ staff, contract in a personal name, trade through a company, or need VAT registration soon, the registrations can quickly become fragmented and reactive.\n\nThis answer is educational only and not tax advice. Before launch, compare the sole-trader and company routes using Revenue's startup guidance and the CRO registration material, then register for the tax heads that match the way the business will actually trade.`,
            },
          ],
          keyTakeaways: [
            "A sole trader and a company are different legal and tax structures in Ireland.",
            "A sole trader with net income above €5,000 must register with Revenue as self-employed.",
            "A company needs a CRO number before Revenue tax registration can be completed.",
            "Incorporation does not replace the separate step of registering the company for the taxes it actually owes.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-17T10:00:00.000Z",
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
    ],
  },
  {
    question: {
      id: "q-ie-company-residency-rules",
      title: "When is a company tax-resident in Ireland, and why did incorporation stop being the whole old story?",
      body: "I want the actual Revenue answer, not an old planning myth. Please explain how the post-2015 incorporation rule works, why treaty residence can still displace it, and why foreign-incorporated companies still need to think about central management and control.",
      author: {
        displayName: "Aoife Byrne",
        avatarSeed: "ie-aoife-byrne",
        badge: "new-member",
      },
      category: "ie-tax",
      tags: ["Ireland", "company residency", "corporation tax", "management and control"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 2294,
      answerCount: 1,
      status: "answered",
      seoTitle: "Ireland company tax residency rules explained",
      seoDescription: "Ireland company tax residency explained, including the post-2015 incorporation rule, treaty override, and the role of central management and control.",
    },
    answers: [
      {
        id: "a-ie-company-residency-rules",
        questionId: "q-ie-company-residency-rules",
        articleContent: {
          sections: [
            {
              heading: "Ireland now starts with incorporation for many companies, but not with blind certainty",
              body: `Revenue's company-residency page says a company incorporated in Ireland on or after 1 January 2015 is deemed resident in Ireland unless it is treated as resident in another country under a double taxation agreement. That is a much more direct rule than the older folklore that Irish residence was always just a management-and-control story. But it still is not absolute, because treaty treatment can matter.`,
            },
            {
              heading: "Older and foreign-incorporated companies keep management and control in the picture",
              body: `Revenue also explains that the central management and control rule continues on a transitional basis for certain older Irish companies and that it still applies to foreign-incorporated companies. If a foreign company is centrally managed and controlled in Ireland, it is resident in Ireland for tax purposes. So the modern Irish position is not one simple slogan. It is a layered rule set that depends on how and when the company came into being and where it is really run.`,
            },
            {
              heading: "That is why residency planning fails when it relies on one old talking point",
              body: `Founders and advisers still get tripped up by half-remembered pre-2015 ideas. Revenue's page is useful precisely because it shows the newer deemed-residence rule and the surviving management-and-control logic in the same place. This answer is educational only and not tax advice. In Ireland, company residence should be tested with the incorporation date, treaty position and actual control facts all on the table at once.`,
            },
          ],
          keyTakeaways: [
            "Irish-incorporated companies formed on or after 1 January 2015 are generally deemed Irish-resident unless a treaty says otherwise.",
            "Treaty residence can still displace the Irish deemed-residence rule.",
            "Central management and control still matters for foreign-incorporated companies and certain older Irish companies.",
            "Irish company residency cannot be reduced to one outdated planning phrase.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
        sources: [
          {
            label: "Company residency rules",
            url: "https://www.revenue.ie/en/companies-and-charities/corporation-tax-for-companies/corporation-tax/company-residency-rules.aspx",
          },
          {
            label: "Corporation Tax basis of charge",
            url: "https://www.revenue.ie/en/companies-and-charities/corporation-tax-for-companies/corporation-tax/basis-of-charge.aspx",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ie-paye-real-time-reporting",
      title: "Why do Irish employers have to think about PAYE every pay date instead of only at year-end?",
      body: "I want the real Revenue workflow, not a generic payroll summary. Please explain what employers actually deduct, why reporting attaches to the pay date itself, and why PAYE errors are usually process failures rather than end-of-year surprises that appear out of nowhere.",
      author: {
        displayName: "Conor Duffy",
        avatarSeed: "ie-conor-duffy",
        badge: "subscriber",
      },
      category: "payroll",
      tags: ["Ireland", "PAYE", "payroll", "employer tax"],
      postedAt: "2026-04-15T08:00:00.000Z",
      viewCount: 2146,
      answerCount: 1,
      status: "answered",
      seoTitle: "Ireland PAYE employer obligations explained",
      seoDescription: "Ireland PAYE explained for employers, including what must be deducted each pay date and why reporting cannot wait until year-end.",
    },
    answers: [
      {
        id: "a-ie-paye-real-time-reporting",
        questionId: "q-ie-paye-real-time-reporting",
        articleContent: {
          sections: [
            {
              heading: "PAYE is a live payroll system, not a year-end clean-up project",
              body: `Revenue's PAYE guidance says the system enables employers to calculate and deduct Income Tax, USC, PRSI and, where relevant, Local Property Tax from employees' pay. It then states that these deductions are made each time the employee is paid. That wording matters because it turns PAYE into an operating rhythm rather than an annual formality.`,
            },
            {
              heading: "Revenue ties reporting to the pay date itself",
              body: `The same PAYE page says employers must report the deductions to Revenue on or before the pay date. That is the point many small employers underestimate. They think payroll compliance is about getting the annual totals roughly right later, when the official system is designed around real-time discipline on each payroll run.`,
            },
            {
              heading: "Most PAYE trouble begins as a process problem, not as a mysterious tax event",
              body: `Once an employer sees PAYE as a pay-date system, the usual error pattern becomes clearer. Missing setup data, late payroll runs, wrong tax instructions and bad record flow all create tax consequences because the reporting duty is already live when the pay is made. This answer is educational only and not tax advice. In Ireland, the safest payroll habit is to treat every pay date as a tax event, not as a bookkeeping step that can be reconstructed casually later.`,
            },
          ],
          keyTakeaways: [
            "Irish PAYE covers Income Tax, USC, PRSI and sometimes LPT deductions.",
            "The deductions are made every time employees are paid, not only at year-end.",
            "Revenue expects employers to report on or before the pay date.",
            "PAYE failures are usually payroll-process failures before they become tax disputes.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-17T10:00:00.000Z",
        sources: [
          {
            label: "The PAYE system",
            url: "https://www.revenue.ie/en/employing-people/becoming-an-employer-and-ongoing-obligations/guide-to-paye/the-paye-system.aspx",
          },
          {
            label: "How your Income Tax is calculated",
            url: "https://www.revenue.ie/en/jobs-and-pensions/calculating-your-income-tax/how-income-tax-is-calculated.aspx",
          },
        ],
      },
    ],
  },
];
