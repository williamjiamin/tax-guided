// EE_TAX_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const EE_TAX_THREADS: QAThread[] = [
  {
    question: {
      id: "q-ee-corporate-tax",
      title: "How does corporate income tax work in Estonia if profits are taxed on distribution?",
      body: "I want the current Estonian answer, not a recycled startup slogan. Please explain what it really means that companies are taxed when profits are distributed, why the 22/78 rate matters, and which other company payments can still trigger tax even before dividends are paid.",
      author: {
        displayName: "Karl Tamm",
        avatarSeed: "ee-karl-tamm",
        badge: "subscriber",
      },
      category: "ee-tax",
      tags: ["Estonia", "corporate tax", "dividends", "OÜ"],
      postedAt: "2025-02-12T08:00:00.000Z",
      viewCount: 3440,
      answerCount: 1,
      status: "answered",
      seoTitle: "How corporate income tax works in Estonia on distributed profits",
      seoDescription: "Estonia corporate tax explained with the 22/78 distributed-profit system, no annual profit tax on retention, and the other company payments that still trigger tax.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-ee-corporate-tax",
        questionId: "q-ee-corporate-tax",
        articleContent: {
          sections: [
            {
              heading: "Estonia taxes companies at the point of distribution, not at ordinary profit retention",
              body: `The Estonian Tax and Customs Board explains the system in the clearest possible way: a company resident in Estonia pays corporate income tax when profit is distributed, not simply because profit was earned and retained. From 2025, the net-amount rate used for distributed profits is 22/78, which produces the same economic effect as a 22% rate on the profit. This is the part of the Estonian system people often quote.\n\nWhat gets missed is that the rule is about the moment of taxation, not about a permanent absence of company tax. Profits kept inside the company are not taxed in the ordinary way, but the moment value is pushed out, the tax question returns immediately.`,
            },
            {
              heading: "Dividends are not the only trigger",
              body: `EMTA also says that the same 22/78 logic reaches further than dividends. Fringe benefits, gifts and donations, entertainment costs, and expenses or payments not related to business activities can all trigger corporate income tax as well. That means an Estonian company can create corporate tax exposure even before it has a classic dividend discussion.\n\nThis is where the startup myth becomes dangerous. Some founders hear "taxed only when profits are distributed" and treat the company like a tax-free wallet. The official rules are narrower and more disciplined than that.`,
            },
            {
              heading: "The compliance rhythm is different from countries with an annual corporate return",
              body: `Another distinctive point in EMTA's guidance is that an Estonian resident company is not required to file a separate annual corporate income tax return merely because it made a profit or a loss. Instead, income tax on distributed or otherwise taxable payments is generally determined monthly through form TSD, depending on the month in which the taxable payment is made. That is elegant, but only if the company is actually tracking payments correctly as they happen.\n\nThis answer is educational only and not tax advice. Estonia's company tax system is genuinely different, so founders should read the current EMTA explanations on distributed profit, fringe benefits and monthly declaration mechanics before assuming they already understand it from one sentence online.`,
            },
          ],
          keyTakeaways: [
            "Estonian companies are generally taxed when profit is distributed, not when profit is merely retained.",
            "From 2025, distributed profits are taxed at a net-amount rate of 22/78.",
            "Fringe benefits, gifts, entertainment and non-business expenses can also trigger company-level tax.",
            "The Estonian company tax workflow is tied to monthly declarations rather than a standard annual corporate profit return.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-02-14T10:00:00.000Z",
        sources: [
          {
            label: "Income tax and basic exemption",
            url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/income-tax-and-basic-exemption",
          },
          {
            label: "Income and social taxes",
            url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ee-income-tax-rate",
      title: "What income tax rate applies in Estonia now, and how does the current basic exemption work?",
      body: "I need the current Estonian answer for individuals, not an outdated 20% explainer. Please explain the 22% rate, what is relevant during the 2026 filing season for 2025 income, and why the basic exemption discussion still matters even in a system that looks close to flat-tax at first glance.",
      author: {
        displayName: "Liis Saar",
        avatarSeed: "ee-liis-saar",
        badge: "new-member",
      },
      category: "ee-tax",
      tags: ["Estonia", "income tax", "basic exemption", "tax return"],
      postedAt: "2025-03-21T08:00:00.000Z",
      viewCount: 3185,
      answerCount: 1,
      status: "answered",
      seoTitle: "Current Estonia income tax rate and basic exemption explained",
      seoDescription: "Estonia income tax explained with the 22% rate, the 2026 filing season for 2025 income, and how the basic exemption still affects the final result.",
    },
    answers: [
      {
        id: "a-ee-income-tax-rate",
        questionId: "q-ee-income-tax-rate",
        articleContent: {
          sections: [
            {
              heading: "Estonia's current headline income tax rate is 22%, but that is not the whole return story",
              body: `EMTA's income and social tax guidance says plainly that from 2025, employment income, business income, gains from transfer of property and other income are taxed at 22%. That is the headline most people look for, and it does mark a real change from the older 20% rate that still appears in stale articles.\n\nBut Estonia is not just a one-line flat-tax story. The filing outcome still depends on what kind of income is being declared, what deductions remain available, and whether the person qualifies for the basic exemption framework.`,
            },
            {
              heading: "The 2026 filing season is about 2025 income, and the exemption numbers matter there",
              body: `The same EMTA material explains that 2025 income is declared from 15 February 2026 and taxed at 22% in the tax return. It also states that, for the 2025 return filed in 2026, a resident natural person can deduct a basic exemption of 7,848 euros, or 9,312 euros at old-age pension age, alongside certain remaining deductions such as training expenses, donations and qualifying third-pillar pension contributions.\n\nThat means the current practical conversation in April 2026 is not just "what is the rate?" but "what is the rate for the year being filed, and which deductions are still actually alive in that return?"`,
            },
            {
              heading: "Estonia's simplicity is real, but not quite as flat as people imagine",
              body: `The attraction of the Estonian system is that the headline rate is easier to understand than in many countries with several progressive bands. The mistake is assuming that this makes the return mechanical. EMTA still expects taxpayers to distinguish between income taxed on the gross principle and income declared through the annual return, and the basic exemption still affects the final result where it applies.\n\nThis answer is educational only and not tax advice. During the 2026 filing season, the safe move is to read the live EMTA guidance for 2025 income rather than relying on old 20% summaries or generic 'flat tax' descriptions.`,
            },
          ],
          keyTakeaways: [
            "From 2025, the Estonian headline income tax rate is 22%.",
            "The 2026 filing season concerns 2025 income, so older 20% explainers are outdated for current returns.",
            "For 2025 returns filed in 2026, the cited basic exemption is 7,848 euros, or 9,312 euros at old-age pension age.",
            "Estonia's system is simple, but annual returns still depend on the income type and the deductions that remain available.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-03-23T10:00:00.000Z",
        sources: [
          {
            label: "Income and social taxes",
            url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes",
          },
          {
            label: "Income tax and basic exemption",
            url: "https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/income-tax-and-basic-exemption",
          },
          {
            label: "Income tax returns for 2025",
            url: "https://www.emta.ee/en/private-client/taxes-and-payment/declaration-income/income-tax-returns-2023",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ee-vat-rules",
      title: "What VAT rate, registration threshold and filing deadline apply in Estonia now?",
      body: "I want the practical Estonian VAT answer for 2026. Please explain the current 24% standard rate, the 40,000 euro registration threshold, and why businesses should treat the monthly deadline seriously because Estonia's VAT compliance gets real as soon as the threshold is crossed.",
      author: {
        displayName: "Marten Põld",
        avatarSeed: "ee-marten-pold",
        badge: "subscriber",
      },
      category: "vat-gst",
      tags: ["Estonia", "VAT", "registration threshold", "EMTA"],
      postedAt: "2025-05-09T08:00:00.000Z",
      viewCount: 3520,
      answerCount: 1,
      status: "answered",
      seoTitle: "Estonia VAT rate registration threshold and filing deadline explained",
      seoDescription: "Estonia VAT explained with the 24% rate, the 40,000 euro registration threshold, and the 20th-day monthly filing and payment deadline.",
    },
    answers: [
      {
        id: "a-ee-vat-rules",
        questionId: "q-ee-vat-rules",
        articleContent: {
          sections: [
            {
              heading: "The current Estonian standard VAT rate is 24%",
              body: `EMTA's current VAT guidance says that from 1 July 2025 the standard rate of VAT in Estonia is 24%. That is the number businesses now need to work from in 2026 unless a preferential rate or exemption applies. So any content still leading with Estonia's old 20% or 22% standard rate is already out of date.\n\nThe rate change matters because it affects both pricing and contracts. A business that still treats VAT as a static background issue can end up making avoidable errors in invoicing and margin planning.`,
            },
            {
              heading: "The registration trigger most domestic businesses watch is 40,000 euros",
              body: `The VAT registration guidance explains that the obligation to register as a person liable to VAT arises when the qualifying supply generated in Estonia exceeds 40,000 euros from the beginning of the year. The same material also clarifies that certain categories, including 0% taxable supply, can still count toward that threshold, while supply that is entirely exempt or 0% without intra-Community supply can keep the obligation from arising regardless of amount.\n\nThat means the threshold is not just a turnover soundbite. It depends on what kind of turnover the business actually has, and whether the place of supply is in Estonia.`,
            },
            {
              heading: "Once registered, the calendar becomes monthly and unforgiving",
              body: `EMTA's VAT payment guidance says the amount of VAT due must be paid by the date of submission of the VAT return, meaning by the 20th day of the month following the taxable period. If the 20th falls on a holiday, the payment moves to the next working day. That cadence is manageable, but it means a business cannot treat VAT as a once-a-year clean-up exercise.\n\nThis answer is educational only and not tax advice. Before the threshold is crossed, use the live EMTA guidance to test whether your Estonian supplies are counted in the threshold and whether your internal invoicing and cash flow can support a monthly VAT routine.`,
            },
          ],
          keyTakeaways: [
            "The standard Estonian VAT rate is 24% from 1 July 2025 onward.",
            "The main domestic VAT registration threshold is 40,000 euros of qualifying supply from the beginning of the year.",
            "The threshold calculation depends on the kind of supply and whether the place of supply is Estonia.",
            "VAT returns and payments are generally due by the 20th day of the following month.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-05-11T10:00:00.000Z",
        sources: [
          {
            label: "Value added tax",
            url: "https://www.emta.ee/en/business-client/taxes-and-payment/value-added-tax",
          },
          {
            label: "Threshold calculation from 1 January 2025",
            url: "https://www.emta.ee/en/business-client/taxes-and-payment/value-added-tax/registration-vat-payer/threshold-calculation-1-january-2025",
          },
          {
            label: "Payment and receipt of value added tax",
            url: "https://www.emta.ee/en/admin/content/handbook_article/155",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ee-tax-deadlines",
      title: "What tax deadlines matter most in Estonia for individuals, VAT payers and companies?",
      body: "I need the operational Estonian answer, not a generic compliance reminder. Please explain the 30 April income tax deadline for the current filing season, the VAT monthly deadline, and how tax arrears start to cost money once a due date is missed.",
      author: {
        displayName: "Grete Lepp",
        avatarSeed: "ee-grete-lepp",
      },
      category: "compliance",
      tags: ["Estonia", "tax deadlines", "VAT", "tax arrears"],
      postedAt: "2025-07-16T08:00:00.000Z",
      viewCount: 2865,
      answerCount: 1,
      status: "answered",
      seoTitle: "Estonia tax deadlines for income tax VAT and companies",
      seoDescription: "Estonia tax deadlines explained with the 30 April income tax deadline, monthly VAT timing, and the daily interest cost of tax arrears.",
    },
    answers: [
      {
        id: "a-ee-tax-deadlines",
        questionId: "q-ee-tax-deadlines",
        articleContent: {
          sections: [
            {
              heading: "The current personal income tax season runs to 30 April 2026",
              body: `For the current filing cycle, EMTA says income tax returns for 2025 can be submitted from 15 February to 30 April 2026. The same guidance also notes that the final deadline for refunds and for paying additional income tax is 1 October. That gives Estonia a relatively clean annual schedule for individuals, but it still means the return period is not open-ended.\n\nThis is important for freelancers and side-income earners who think of the return as something to handle after the spring rush. Estonia's annual return window is generous enough to use properly, but not something to ignore.`,
            },
            {
              heading: "VAT works on a much faster clock than the annual personal return",
              body: `EMTA's VAT payment guidance states that VAT is due by the date of submission of the VAT return, namely by the 20th day of the month following the taxable period. If the due day falls on a holiday or another day off, the deadline moves to the first working day after it. That means VAT compliance in Estonia is a monthly discipline, not an annual accounting chore.\n\nFor companies making taxable supplies, this is often the deadline that shapes behaviour most. It is frequent enough that weak invoicing or reconciliation habits show up very quickly.`,
            },
            {
              heading: "Missing a tax deadline in Estonia creates arrears and daily interest",
              body: `EMTA's arrears guidance explains the financial consequence clearly. If a tax amount is unpaid by the statutory due date, interest starts to accrue from the next day until payment or offset, and the current daily rate is 0.06%. The public inquiry system also shows overdue claims and declarations not submitted by deadline where disclosure is permitted. So even if the immediate issue feels administrative, the cost of delay starts to grow quickly.\n\nThis answer is educational only and not tax advice. The practical habit in Estonia is to treat annual personal filing, monthly VAT work and any company-side TSD obligations as separate calendars, because they create different kinds of risk.`,
            },
          ],
          keyTakeaways: [
            "For the current cycle, Estonian income tax returns for 2025 are due by 30 April 2026.",
            "Refunds and additional personal income tax payments have a final 1 October deadline in the same cycle.",
            "Estonian VAT is generally filed and paid by the 20th day of the month following the taxable period.",
            "Unpaid taxes become tax arrears and currently accrue interest at 0.06% per day.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-07-18T10:00:00.000Z",
        sources: [
          {
            label: "Income tax returns for 2025",
            url: "https://www.emta.ee/en/private-client/taxes-and-payment/declaration-income/income-tax-returns-2023",
          },
          {
            label: "Payment and receipt of value added tax",
            url: "https://www.emta.ee/en/admin/content/handbook_article/155",
          },
          {
            label: "Payment of interests",
            url: "https://www.emta.ee/en/business-client/taxes-and-payment/payment-arrears/payment-interests",
          },
          {
            label: "Public data inquiries",
            url: "https://www.emta.ee/en/private-client/e-services-tax-literacy/registers-inquiries/public-data-inquiries",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ee-start-business",
      title: "How do you start a company in Estonia, and when does the contact person issue matter?",
      body: "I want the practical Estonian setup answer, not a generic e-Residency sales line. Please explain how the e-Business Register fits into company formation, when a legal address or licensed contact person is required, and why foreign founders should not confuse e-Residency with automatic tax or residence outcomes.",
      author: {
        displayName: "Rasmus Kask",
        avatarSeed: "ee-rasmus-kask",
        badge: "subscriber",
      },
      category: "entity-setup",
      tags: ["Estonia", "start a business", "e-Residency", "OÜ"],
      postedAt: "2026-01-08T08:00:00.000Z",
      viewCount: 3110,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to start a company in Estonia with e-Business Register and e-Residency",
      seoDescription: "How to start a company in Estonia, covering the e-Business Register, e-Residency limits, legal address rules, and when a licensed contact person is required.",
    },
    answers: [
      {
        id: "a-ee-start-business",
        questionId: "q-ee-start-business",
        articleContent: {
          sections: [
            {
              heading: "Estonia's company setup flow is genuinely digital, but still formal",
              body: `RIK's e-Business Register portal is the official national system for company registration and ongoing register filings. The official e-Residency knowledge base then walks through the setup steps for a private limited company (OÜ): prepare the application, sign it digitally, pay the state fee and submit it through the company registration portal or an authorised API service. So the digital reputation is deserved, but the process is still a legal filing workflow rather than a one-click shortcut.\n\nThat matters because founders sometimes hear that Estonia is easy and translate that into "informal." It is actually better described as formal but highly digitised.`,
            },
            {
              heading: "A foreign-led company often needs a legal address solution and a licensed contact person",
              body: `The contact-person rules are one of the most important practical points for non-residents. The e-Residency guidance says a company must have either an Estonian legal address or, if it uses the foreign address of a management board member, a licensed contact person in Estonia. EMTA's own guidance reinforces that if the management board is located outside Estonia, the law generally requires a contact person in Estonia and that person's details must be entered in the commercial register.\n\nThis is not just a mailing convenience. Official notices delivered to the contact person are deemed delivered to the company, so the issue is operational and legal, not decorative.`,
            },
            {
              heading: "E-Residency is useful, but it does not decide tax residency by itself",
              body: `The e-Residency programme itself is careful on this point. It gives access to Estonia's digital services and can help a non-resident establish and manage a company online, but it does not grant citizenship, tax residency or a right of entry into Estonia or the European Union. That warning matters because founders often collapse company formation, digital identity and tax residency into one idea when they are actually separate legal questions.\n\nThis answer is educational only and not tax advice. Before forming an Estonian company, use the current RIK, EMTA and e-Residency guidance together so formation, contact-person requirements and tax expectations all line up from the start.`,
            },
          ],
          keyTakeaways: [
            "Estonia's e-Business Register is the official portal for company registration and ongoing register filings.",
            "Foreign-led Estonian companies often need either an Estonian legal address or a licensed contact person in Estonia.",
            "Official notices delivered to the contact person are treated as delivered to the company.",
            "E-Residency helps with digital access, but it does not by itself create tax residency or physical residence rights.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-10T10:00:00.000Z",
        sources: [
          {
            label: "E-Business Register portal",
            url: "https://www.rik.ee/en/e-business-register/e-business-register-portal",
          },
          {
            label: "5 steps to register a company online",
            url: "https://learn.e-resident.gov.ee/hc/en-gb/articles/360000624838-5-steps-to-register-a-company-online",
          },
          {
            label: "E-services and communication",
            url: "https://www.emta.ee/en/business-client/registration-business/non-residents-e-residents/e-services-and-communication",
          },
          {
            label: "What is e-Residency?",
            url: "https://learn.e-resident.gov.ee/hc/en-gb/articles/360000711978-What-is-e-Residency",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ee-social-tax-payroll",
      title: "Why does payroll in Estonia feel heavier than the flat income tax headline suggests?",
      body: "I want the real EMTA answer, not a one-number summary. Please explain why Estonia's wage taxation includes more than income tax, why social tax changes the employer view of payroll, and why the country's simple reputation can still hide a layered labour-tax reality.",
      author: {
        displayName: "Liis Tamm",
        avatarSeed: "ee-liis-tamm",
        badge: "new-member",
      },
      category: "payroll",
      tags: ["Estonia", "payroll", "social tax", "income tax"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 2034,
      answerCount: 1,
      status: "answered",
      seoTitle: "Estonia payroll and social tax explained",
      seoDescription: "Estonia payroll taxes explained, including why employment income involves income tax, social tax, and other labour charges beyond the flat-rate headline.",
    },
    answers: [
      {
        id: "a-ee-social-tax-payroll",
        questionId: "q-ee-social-tax-payroll",
        articleContent: {
          sections: [
            {
              heading: "Estonia's flat income tax headline is only one part of the labour-tax picture",
              body: `EMTA's income-and-social-taxes page says that from 2025 employment income is taxed at 22%, but it also says that income from employment and business income are taxed with social tax, unemployment insurance premiums and, where applicable, mandatory funded pension insurance premiums. That is why Estonia can feel simple in rate marketing and still feel layered in payroll reality.`,
            },
            {
              heading: "Social tax changes the employer's cost view as much as the employee's net-pay view",
              body: `The same EMTA material groups income tax and social taxes together because the system is designed to be understood as a package rather than as one isolated percentage. A founder who budgets only around the flat income-tax rate is missing the broader labour-tax structure. This is particularly important when comparing Estonia with jurisdictions where the employee sees more of the social contribution directly on the payslip.`,
            },
            {
              heading: "The practical mistake is assuming simplicity means only one labour tax exists",
              body: `Estonia is genuinely more streamlined than many systems, but streamlined does not mean single-layered. This answer is educational only and not tax advice. When hiring in Estonia, the safe habit is to read income tax and social tax together so gross-pay planning, employer cost and employee net-pay expectations stay aligned.`,
            },
          ],
          keyTakeaways: [
            "Estonian employment income is taxed with more than the headline income-tax rate alone.",
            "EMTA treats social tax and other labour charges as core parts of the wage-tax system.",
            "Employer payroll cost can look meaningfully different once social tax is included.",
            "Estonia's simple reputation should not be confused with a one-tax payroll model.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
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
    ],
  },
  {
    question: {
      id: "q-ee-e-services-nonresident-setup",
      title: "How do Estonia's tax e-services actually help a non-resident or e-resident after the company is formed?",
      body: "I want the practical EMTA answer, not a vague celebration of digital government. Please explain why e-services matter after incorporation, what communication and filing reality looks like for a foreign-led company, and why founders should not confuse a digital portal with automatic tax simplicity.",
      author: {
        displayName: "Karl Reimann",
        avatarSeed: "ee-karl-reimann",
        badge: "subscriber",
      },
      category: "ee-tax",
      tags: ["Estonia", "e-services", "e-Residency", "non-resident company"],
      postedAt: "2026-04-15T08:00:00.000Z",
      viewCount: 1944,
      answerCount: 1,
      status: "answered",
      seoTitle: "Estonia tax e-services for non-residents explained",
      seoDescription: "Estonia tax e-services explained for non-residents and e-residents, including why digital access helps administration but does not erase tax responsibilities.",
    },
    answers: [
      {
        id: "a-ee-e-services-nonresident-setup",
        questionId: "q-ee-e-services-nonresident-setup",
        articleContent: {
          sections: [
            {
              heading: "Estonia's digital administration matters after incorporation as much as during it",
              body: `EMTA has a dedicated page for e-services and communication aimed at non-residents and e-residents because the tax relationship does not end once the company is on the register. The broader EMTA business-client structure also places e-services alongside tax returns, registration and communication, which is a good signal that the portal is part of ongoing compliance rather than a launch-only tool.`,
            },
            {
              heading: "Digital access helps administration, but it does not dissolve the underlying tax obligations",
              body: `This is where Estonia's digital reputation is often oversimplified. The portal can make filing, communication and access management easier, especially for foreign-led companies, but the underlying tax rules on profits, payroll, VAT and non-resident issues still have to be understood on their own merits. A digital interface is a compliance tool, not a legal shortcut.`,
            },
            {
              heading: "The practical value lies in disciplined use of the system, not in the existence of the system alone",
              body: `Foreign founders benefit most when they treat e-services as the operating channel through which they monitor filings, messages and tax status. This answer is educational only and not tax advice. Estonia's digital edge is real, but it helps only when the company uses the tools to stay on top of live obligations instead of assuming the portal itself has simplified the substance of the tax law.`,
            },
          ],
          keyTakeaways: [
            "Estonia's tax e-services remain relevant after incorporation, not only during setup.",
            "They help with communication and administration for non-residents and e-residents.",
            "Digital access does not remove the underlying tax rules on profits, payroll or VAT.",
            "The real benefit comes from using the system as an ongoing compliance channel.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-17T10:00:00.000Z",
        sources: [
          {
            label: "E-services and communication",
            url: "https://www.emta.ee/en/business-client/registration-business/non-residents-e-residents/e-services-and-communication",
          },
          {
            label: "Public data inquiries",
            url: "https://www.emta.ee/en/private-client/e-services-tax-literacy/registers-inquiries/public-data-inquiries",
          },
        ],
      },
    ],
  },
];
