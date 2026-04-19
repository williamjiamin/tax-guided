// HK_TAX_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const HK_TAX_THREADS: QAThread[] = [
  {
    question: {
      id: "q-hk-profits-tax",
      title: "How does profits tax work in Hong Kong for companies, founders and small businesses?",
      body: "I want the real Hong Kong picture, not a generic low-tax-sales pitch. Please explain the territorial basis, the two-tier rates, and why saying a business is 'offshore' is not the same thing as proving that its profits are outside the Hong Kong profits tax charge.",
      author: {
        displayName: "Jason Chan",
        avatarSeed: "hk-jason-chan",
        badge: "subscriber",
      },
      category: "hk-tax",
      tags: ["Hong Kong", "profits tax", "territorial tax", "business tax"],
      postedAt: "2025-02-11T08:00:00.000Z",
      viewCount: 3360,
      answerCount: 1,
      status: "answered",
      seoTitle: "How profits tax works in Hong Kong for companies",
      seoDescription: "Hong Kong profits tax explained with territorial sourcing, two-tier rates, and the practical issues companies should check before filing.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-hk-profits-tax",
        questionId: "q-hk-profits-tax",
        articleContent: {
          sections: [
            {
              heading: "Hong Kong taxes business profits on a territorial basis, not a worldwide basis",
              body: `The Hong Kong Government's profits tax guidance starts from the core idea that matters most: profits tax is charged on profits arising in or derived from Hong Kong from a trade, profession or business carried on in Hong Kong. That is a territorial model, which is why Hong Kong is often described as simple. But simple does not mean casual. The source question is factual, and it turns on what the business actually does and where it does it.\n\nThat point is where a lot of low-tax marketing goes wrong. Calling income "offshore" is not a filing position by itself. A company still needs to be able to support how its profits were generated and why they are, or are not, Hong Kong-sourced.`,
            },
            {
              heading: "The headline rate depends on the type of business and how much assessable profit it has",
              body: `GovHK's current rates page explains the two-tier system. For corporations, the first HK$2 million of assessable profits is taxed at 8.25% and the remainder at 16.5%. For unincorporated businesses, the corresponding rates are 7.5% and 15%. Those are the numbers people quote most often, but the more important question is still what profit is actually assessable in Hong Kong in the first place.\n\nThat makes entity choice and source analysis run together. A founder cannot sensibly talk about the rate without also asking whether the business is operating through a corporation or an unincorporated structure and what activity is being carried on in Hong Kong.`,
            },
            {
              heading: "The practical mistake is treating Hong Kong as automatically tax-free for foreign-facing businesses",
              body: `Hong Kong's tax policy is attractive precisely because it is territorial and because the city does not try to layer a long list of indirect taxes on top of profits tax. But that does not mean every export, software or cross-border business escapes local tax. The Inland Revenue Department still expects a coherent return position supported by facts, records and the real operating model.\n\nThis answer is educational only and not tax advice. Before filing or claiming an offshore position, work through the live GovHK profits tax guidance and the current rates page using your actual contracts, people functions and revenue flows.`,
            },
          ],
          keyTakeaways: [
            "Hong Kong profits tax is territorial, so the source of profits matters as much as the rate.",
            "Corporations and unincorporated businesses have different two-tier profits tax rates.",
            "An 'offshore' label does not replace evidence about where profits arise.",
            "Founders should review source, structure and records together before filing.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-02-13T10:00:00.000Z",
        sources: [
          {
            label: "Profits Tax overview",
            url: "https://www.gov.hk/en/residents/taxes/profits/index.htm",
          },
          {
            label: "Profits Tax rates",
            url: "https://www.gov.hk/en/residents/taxes/taxfiling/taxrates/profitsrates.htm",
          },
          {
            label: "Prevailing tax policy in Hong Kong",
            url: "https://www.fstb.gov.hk/tb/en/business/general/prevailing-tax-policy.htm",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-hk-salaries-tax",
      title: "What are the current Hong Kong salaries tax rates, and when does the cap matter?",
      body: "I want a current Hong Kong salaries tax answer that explains the mechanics properly. Please cover the progressive rates, the standard rate cap, and why people confuse 'net chargeable income' with the amount on which the standard rate is applied.",
      author: {
        displayName: "Cheryl Wong",
        avatarSeed: "hk-cheryl-wong",
        badge: "new-member",
      },
      category: "hk-tax",
      tags: ["Hong Kong", "salaries tax", "tax rates", "personal tax"],
      postedAt: "2025-03-17T08:00:00.000Z",
      viewCount: 3120,
      answerCount: 1,
      status: "answered",
      seoTitle: "Current Hong Kong salaries tax rates explained",
      seoDescription: "Hong Kong salaries tax explained with progressive rates, the standard rate cap, and how chargeable income differs from net income.",
    },
    answers: [
      {
        id: "a-hk-salaries-tax",
        questionId: "q-hk-salaries-tax",
        articleContent: {
          sections: [
            {
              heading: "Hong Kong salaries tax still starts with allowances and then compares two calculations",
              body: `GovHK's salaries tax guidance is useful because it shows that Hong Kong does not simply apply one flat wage tax to earnings. The ordinary route is progressive rates on net chargeable income after deductions and allowances. But the system also compares that outcome with the standard-rate calculation on net income and charges the lower amount. That comparison is what many quick explainers leave out.\n\nIf someone remembers only the progressive bands, they can miss why the final liability sometimes seems capped. If they remember only the standard rate, they miss the role of allowances entirely.`,
            },
            {
              heading: "The rates matter, but so does knowing which base the rate is applied to",
              body: `The current GovHK rates page shows the progressive salaries tax rates and also the standard-rate structure. That is the technical heart of the computation. But the harder practical point is the tax base. Progressive rates are applied after the allowances framework, while the standard rate is applied to net income. Mixing those steps up produces the wrong result even if the percentages are quoted correctly.\n\nThat is why employees with bonuses, housing elements or several remuneration components should not rely on a one-line salary-tax summary. The composition of the income still affects the outcome.`,
            },
            {
              heading: "Hong Kong's personal tax simplicity is real, but it is still a calculation system",
              body: `Hong Kong deserves its reputation for a relatively straightforward personal tax regime. The mistake is assuming that "straightforward" means "obvious from one rate table". The correct answer still depends on what income is chargeable, which deductions are available and whether the progressive or standard-rate comparison is lower.\n\nThis answer is educational only and not tax advice. Before filing, check the live salaries tax overview, the current rates page and the chargeable-income guidance together rather than relying on a single headline percentage.`,
            },
          ],
          keyTakeaways: [
            "Hong Kong salaries tax compares progressive rates with the standard-rate calculation and uses the lower amount.",
            "Progressive rates apply to net chargeable income after allowances.",
            "The standard rate applies to net income, so the tax base is different.",
            "A correct answer requires both the rates page and the chargeable-income framework.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-03-19T10:00:00.000Z",
        sources: [
          {
            label: "Salaries Tax and Personal Assessment overview",
            url: "https://www.gov.hk/en/residents/taxes/salaries/index.htm",
          },
          {
            label: "Salaries Tax rates",
            url: "https://www.gov.hk/en/residents/taxes/taxfiling/taxrates/salariesrates.htm",
          },
          {
            label: "Income chargeable to Salaries Tax",
            url: "https://www.gov.hk/en/residents/taxes/salaries/salariestax/chargeable/index.htm",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-hk-no-vat-gst",
      title: "Does Hong Kong have VAT or GST, and what taxes matter instead for online sellers?",
      body: "I keep seeing people describe Hong Kong as tax-light, but that phrase gets oversimplified. Please explain whether Hong Kong has VAT, GST or sales tax, and what an online seller should focus on instead when the real issue is profits tax, business registration and source of profits.",
      author: {
        displayName: "Kelvin Lau",
        avatarSeed: "hk-kelvin-lau",
        badge: "subscriber",
      },
      category: "ecommerce",
      tags: ["Hong Kong", "VAT", "GST", "online seller"],
      postedAt: "2025-05-08T08:00:00.000Z",
      viewCount: 2870,
      answerCount: 1,
      status: "answered",
      seoTitle: "Does Hong Kong have VAT or GST for online sellers",
      seoDescription: "Hong Kong has no VAT or GST, but online sellers still need to think about profits tax, business registration, and where profits arise.",
    },
    answers: [
      {
        id: "a-hk-no-vat-gst",
        questionId: "q-hk-no-vat-gst",
        articleContent: {
          sections: [
            {
              heading: "Hong Kong does not impose VAT or GST",
              body: `The Hong Kong Government's current tax-policy material is direct on this point: Hong Kong does not levy value-added tax, goods and services tax or sales tax. That is one reason the jurisdiction is often described as administratively light compared with places where every online sale has an indirect-tax angle.\n\nFor online sellers, that absence can be genuinely helpful. It means the first local tax conversation is usually not about output tax on each invoice. But that should not be confused with a complete absence of tax analysis.`,
            },
            {
              heading: "The real Hong Kong questions are profits tax, source and registration",
              body: `Once VAT and GST are off the table, the business still has to think about whether it is carrying on business in Hong Kong, whether business registration is required, and whether its profits arise in or derive from Hong Kong. In other words, Hong Kong replaces an indirect-tax problem with a source-and-structure problem.\n\nThat is where online businesses can still go wrong. A founder may celebrate "no VAT" while ignoring that profits tax and registration questions still depend on the actual commercial set-up, warehousing, contracting and people functions.`,
            },
            {
              heading: "Low-friction does not mean no compliance",
              body: `Hong Kong's overall tax framework is deliberately simple, and the public-finance factsheet underlines the narrow base of direct taxes. But a simple system still expects a business to identify the right tax head and to keep the records needed to support its filing position.\n\nThis answer is educational only and not tax advice. For an e-commerce business, the right next step is to pair the Hong Kong tax-policy pages with the IRD business-registration guidance and then test how the actual sales model operates.`,
            },
          ],
          keyTakeaways: [
            "Hong Kong does not impose VAT, GST or sales tax.",
            "Online sellers still need to review profits tax, source of profits and business registration.",
            "The absence of VAT does not remove the need for a defensible tax position.",
            "Hong Kong's simplicity comes from a narrower tax base, not from zero compliance.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-05-10T10:00:00.000Z",
        sources: [
          {
            label: "Prevailing tax policy in Hong Kong",
            url: "https://www.fstb.gov.hk/tb/en/business/general/prevailing-tax-policy.htm",
          },
          {
            label: "Public finance factsheet",
            url: "https://www.gov.hk/en/about/abouthk/factsheets/docs/public_finance.pdf",
          },
          {
            label: "Businesses Required to Be Registered and Application for Business Registration",
            url: "https://www.ird.gov.hk/eng/tax/bre_abr.htm",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-hk-deadlines-penalties",
      title: "How do Hong Kong tax filing deadlines and late-filing penalties work in practice?",
      body: "I do not want a vague 'file on time' reminder. Please explain how Hong Kong return deadlines are actually driven by the notice issued by the Inland Revenue Department, how extensions work, and what kind of trouble late filing can cause for individuals or businesses.",
      author: {
        displayName: "Anita Leung",
        avatarSeed: "hk-anita-leung",
      },
      category: "compliance",
      tags: ["Hong Kong", "tax deadlines", "late filing", "IRD"],
      postedAt: "2025-06-24T08:00:00.000Z",
      viewCount: 2645,
      answerCount: 1,
      status: "answered",
      seoTitle: "Hong Kong tax filing deadlines and late filing penalties",
      seoDescription: "Hong Kong tax deadlines explained with IRD notice dates, extension rules, and the risks of late filing for individuals and businesses.",
    },
    answers: [
      {
        id: "a-hk-deadlines-penalties",
        questionId: "q-hk-deadlines-penalties",
        articleContent: {
          sections: [
            {
              heading: "Hong Kong tax deadlines are driven by the return notice, not one universal filing day",
              body: `The IRD's filing reminders are useful because they show how Hong Kong deadlines actually work in practice. The Department issues returns, and the due date runs from the notice. That sounds simple, but it matters because people often search for one annual tax deadline as if Hong Kong ran on a single fixed filing day for everybody.\n\nIn reality, the notice matters. Individuals, sole proprietors and corporations can face different timing and different extension arrangements, so the safe question is always "what deadline is on the return or extension schedule that applies to me?"`,
            },
            {
              heading: "Extensions exist, but they are structured rather than informal",
              body: `The Block Extension Scheme material for profits tax returns shows that extensions are not a vague courtesy. They are administered under a formal framework, often through tax representatives and accounting-date groupings. That is helpful, but it also means a business should not assume that "my accountant will get more time" without checking which scheme actually applies.\n\nFor individuals, the reminder guidance likewise shows that electronic filing and special categories can affect timing. The broader lesson is that Hong Kong compliance is flexible in a managed way, not in an ad hoc way.`,
            },
            {
              heading: "Late filing can turn into estimated assessments and penalties",
              body: `The commercial cost of missing the deadline is larger than many taxpayers think. A late filer can face penalties and also create a situation where the IRD raises estimated assessments or forces the taxpayer into reactive clean-up. That is especially frustrating in Hong Kong because the system is relatively straightforward when handled on time.\n\nThis answer is educational only and not tax advice. The practical habit is to read the issue date, the due date and any applicable extension basis together as soon as the return arrives, rather than waiting until the end of the period stated on the form.`,
            },
          ],
          keyTakeaways: [
            "Hong Kong tax deadlines are tied to the issued return notice and any applicable extension scheme.",
            "Individuals and businesses do not all work to one identical date.",
            "Extensions are formal and should be checked, not assumed.",
            "Late filing can trigger both penalties and estimated assessments.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-06-26T10:00:00.000Z",
        sources: [
          {
            label: "Filing Tax Return on Time",
            url: "https://www.ird.gov.hk/eng/tax/ind_rem.htm",
          },
          {
            label: "Block Extension Scheme for Profits Tax Returns",
            url: "https://www.ird.gov.hk/eng/pdf/bel24e.pdf",
          },
          {
            label: "Profits Tax overview",
            url: "https://www.gov.hk/en/residents/taxes/profits/index.htm",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-hk-start-business",
      title: "How do you start a business in Hong Kong and get the first registrations right?",
      body: "I want the practical Hong Kong setup order for a real founder. Please explain when business registration is compulsory, how company incorporation fits in, and why people should not assume that opening a company and handling IRD registration are exactly the same step.",
      author: {
        displayName: "Raymond Ho",
        avatarSeed: "hk-raymond-ho",
        badge: "new-member",
      },
      category: "entity-setup",
      tags: ["Hong Kong", "start a business", "business registration", "company incorporation"],
      postedAt: "2026-01-09T08:00:00.000Z",
      viewCount: 3015,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to start a business in Hong Kong and register correctly",
      seoDescription: "How to start a business in Hong Kong, covering business registration, company incorporation, and the first compliance steps founders should handle.",
    },
    answers: [
      {
        id: "a-hk-start-business",
        questionId: "q-hk-start-business",
        articleContent: {
          sections: [
            {
              heading: "Business registration is not optional once the activity falls inside the IRD rules",
              body: `The IRD's business-registration guidance makes the first point very clearly: if a person is carrying on business in Hong Kong and is not within an exemption, business registration is required. That means founders should think about registration from the outset rather than treating it as an admin step to tidy up later.\n\nThis is especially important for small operators and family businesses. A venture can look informal in commercial terms while still being formal enough for registration purposes under the tax rules.`,
            },
            {
              heading: "Company incorporation and business registration are connected, but they are not conceptually identical",
              body: `The Companies Registry guidance on local limited companies is a good reminder that company incorporation answers one legal question, while business registration answers another compliance question. In practice the systems are linked and founders often experience them together, but it is still useful to separate them mentally. One creates the company; the other helps ensure the business is properly registered for operation.\n\nThat distinction matters when founders compare sole proprietorships, partnerships and limited companies. The setup path changes depending on the structure, even if people casually talk about "opening a company" as if it covers everything.`,
            },
            {
              heading: "The cleanest start comes from deciding structure before filing forms",
              body: `The most common avoidable mistake is filing forms before deciding how the business will actually operate, who will own it, and whether the planned activity is local, cross-border or mixed. In Hong Kong, that can create confusion very early because the source of profits, the business-registration position and the legal vehicle all interact.\n\nThis answer is educational only and not tax advice. Before launch, read the current IRD business-registration guidance and the Companies Registry setup material together so the commercial plan, the legal structure and the tax paperwork all line up from the beginning.`,
            },
          ],
          keyTakeaways: [
            "Business registration is a core early compliance step for businesses carried on in Hong Kong.",
            "Company incorporation and business registration are related but not the same concept.",
            "Founders should choose structure before filing forms so the registrations match the real business model.",
            "The first setup decisions affect later tax and filing questions much more than many founders expect.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-11T10:00:00.000Z",
        sources: [
          {
            label: "Businesses Required to Be Registered and Application for Business Registration",
            url: "https://www.ird.gov.hk/eng/tax/bre_abr.htm",
          },
          {
            label: "How to register a new company",
            url: "https://www.cr.gov.hk/en/services/register-company.htm",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-hk-salaries-tax-territorial-scope",
      title: "When can Hong Kong salaries tax still apply if part of the work is done outside Hong Kong?",
      body: "I want the real territorial answer, not a slogan that foreign travel automatically switches Hong Kong tax off. Please explain why the source of employment income still matters, why full or partial exemption is a separate analysis, and why cross-border workers should not assume one foreign workday turns the whole salary non-Hong Kong.",
      author: {
        displayName: "Ethan Lau",
        avatarSeed: "hk-ethan-lau",
        badge: "new-member",
      },
      category: "hk-tax",
      tags: ["Hong Kong", "salaries tax", "territorial tax", "cross-border work"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 2188,
      answerCount: 1,
      status: "answered",
      seoTitle: "Hong Kong salaries tax for work done partly outside Hong Kong",
      seoDescription: "Hong Kong salaries tax explained for cross-border work, including the territorial concept, chargeable employment income, and when exemption questions arise.",
    },
    answers: [
      {
        id: "a-hk-salaries-tax-territorial-scope",
        questionId: "q-hk-salaries-tax-territorial-scope",
        articleContent: {
          sections: [
            {
              heading: "Hong Kong starts with the territorial character of the income, not with a travel diary slogan",
              body: `GovHK's salaries-tax material says Hong Kong applies a territorial concept and that salaries tax is chargeable on most income from employment, offices and pensions arising in or derived from Hong Kong. The chargeable-income page frames the same point from the taxpayer side: some employment income is chargeable and some is not, but the question is legal and factual rather than emotional. That is why cross-border workers get into trouble when they reduce the whole issue to "I worked abroad for part of the year."`,
            },
            {
              heading: "Full or partial exemption is a separate step, not an automatic consequence of overseas work",
              body: `GovHK's main salaries-tax page points taxpayers to the specific material on full or partial exemption of income and describes that material as part of the territorial analysis for directors, employees, people working in the Mainland and people newly arriving from another country. In other words, the system expects a second layer of analysis once the basic salaries-tax picture is on the table. Foreign workdays can matter, but they matter inside a rule set rather than as a blanket override.`,
            },
            {
              heading: "The practical mistake is assuming the payroll label answers the tax source question",
              body: `Cross-border employees often treat the employer's description of the role as if it settles where the income belongs for Hong Kong tax. GovHK's materials point the other way. The return still has to report the income properly and the exemption claim, if any, still has to fit the official framework. This answer is educational only and not tax advice. For mixed-location work, the safe move is to treat Hong Kong salaries tax as a territorial analysis with evidence, not as a reward for having some travel on the calendar.`,
            },
          ],
          keyTakeaways: [
            "Hong Kong salaries tax works through a territorial concept, not through a simple residency slogan.",
            "Employment income can still be chargeable even when part of the work is done outside Hong Kong.",
            "Full or partial exemption is a separate official analysis, not an automatic result.",
            "Cross-border workers should test the facts against the official framework instead of relying on payroll shorthand.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
        sources: [
          {
            label: "Salaries Tax and Personal Assessment overview",
            url: "https://www.gov.hk/en/residents/taxes/salaries/index.htm",
          },
          {
            label: "Income chargeable to Salaries Tax",
            url: "https://www.gov.hk/en/residents/taxes/salaries/salariestax/chargeable/index.htm",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-hk-personal-assessment-election",
      title: "Why can personal assessment change the tax result in Hong Kong for someone with mixed income?",
      body: "I want the practical Hong Kong answer, not a throwaway comment that it is just another form. Please explain why personal assessment is an election, why people with mixed income streams pay attention to it, and why leaving each tax head in its own silo can sometimes be the more expensive habit.",
      author: {
        displayName: "Iris Cheng",
        avatarSeed: "hk-iris-cheng",
        badge: "subscriber",
      },
      category: "hk-tax",
      tags: ["Hong Kong", "personal assessment", "salaries tax", "mixed income"],
      postedAt: "2026-04-15T08:00:00.000Z",
      viewCount: 2064,
      answerCount: 1,
      status: "answered",
      seoTitle: "Hong Kong personal assessment for mixed income explained",
      seoDescription: "Hong Kong personal assessment explained for taxpayers with mixed income, including why it is elective and why it can change the final tax result.",
    },
    answers: [
      {
        id: "a-hk-personal-assessment-election",
        questionId: "q-hk-personal-assessment-election",
        articleContent: {
          sections: [
            {
              heading: "Personal assessment is an election because Hong Kong does not assume every taxpayer wants the same route",
              body: `GovHK's salaries-tax and personal-assessment page does not treat personal assessment as a background technicality. It gives taxpayers a dedicated route to learn whether they are eligible and how to elect it, and it separately highlights tax reduction through personal assessment. That framing matters. Hong Kong is telling taxpayers that personal assessment is a deliberate choice with potential consequences, not a decorative extra box on the form.`,
            },
            {
              heading: "It matters most when income does not fit neatly inside one tax lane",
              body: `The same GovHK page groups salaries tax, property tax and personal assessment together because the election becomes relevant when a person's overall tax picture is broader than a single salary stream. The rate page then makes clear that salaries tax and personal assessment share official rate and allowance mechanics. So the practical value of personal assessment is that it can change how the mixed-income picture is brought together instead of leaving each tax head isolated by habit.`,
            },
            {
              heading: "The real mistake is assuming the default treatment must already be the best treatment",
              body: `A lot of taxpayers never ask that question. They file in the usual way and only later realise that the election existed for a reason. This answer is educational only and not tax advice. In Hong Kong, a taxpayer with more than one kind of income should read the eligibility and tax-reduction guidance before assuming that staying inside separate silos is automatically the cheapest outcome.`,
            },
          ],
          keyTakeaways: [
            "Personal assessment is an elective route, not an automatic background rule.",
            "It becomes more relevant when the taxpayer has mixed income rather than one clean income stream.",
            "GovHK presents personal assessment as something that can reduce tax in the right facts.",
            "The default filing path is not automatically the best path for every Hong Kong taxpayer.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-17T10:00:00.000Z",
        sources: [
          {
            label: "Salaries Tax and Personal Assessment overview",
            url: "https://www.gov.hk/en/residents/taxes/salaries/index.htm",
          },
          {
            label: "Salaries Tax rates",
            url: "https://www.gov.hk/en/residents/taxes/taxfiling/taxrates/salariesrates.htm",
          },
        ],
      },
    ],
  },
];
