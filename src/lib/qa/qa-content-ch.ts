// CH_TAX_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const CH_TAX_THREADS: QAThread[] = [
  {
    question: {
      id: "q-ch-corporate-tax",
      title: "How does corporate income tax actually work in Switzerland if there is no single Swiss company tax rate?",
      body: "I want the real Swiss answer, not a glossy low-tax headline. Please explain the federal 8.5% profit tax, why cantonal and communal profit taxes still change the picture dramatically, and when the top-up tax rules actually matter instead of being waved around in every startup pitch.",
      author: {
        displayName: "Matthias Vogel",
        avatarSeed: "ch-matthias-vogel",
        badge: "subscriber",
      },
      category: "ch-tax",
      tags: ["Switzerland", "corporate tax", "profit tax", "GmbH", "AG"],
      postedAt: "2025-10-14T08:00:00.000Z",
      viewCount: 3225,
      answerCount: 1,
      status: "answered",
      seoTitle: "How Swiss corporate tax works without one national company rate",
      seoDescription: "Switzerland corporate tax explained with federal profit tax, cantonal and communal layers, and when top-up tax matters for large groups.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-ch-corporate-tax",
        questionId: "q-ch-corporate-tax",
        articleContent: {
          sections: [
            {
              heading: "Switzerland does not have one company tax rate because the federal and cantonal layers both matter",
              body: `The official Swiss picture starts with a distinction that many quick explainers flatten away. The Federal Tax Administration says the direct federal profit tax for corporations is 8.5% of net profit. But that is only the federal layer. The same official tax-system publication also explains that cantons and communes levy their own profit taxes, and nearly all cantons levy a capital tax as well. In practice, that means a founder asking for "the Swiss corporate tax rate" is usually asking the wrong first question.\n\nThe more useful question is where the company is tax-resident, which canton is in play, and what the full federal, cantonal and communal burden looks like together. Switzerland can still be competitive, but it is not a one-number jurisdiction.`,
            },
            {
              heading: "The structure is business-friendly, but it is still a layered system with real local variation",
              body: `The Swiss Tax System publication is unusually candid about this. It notes that cantonal profit taxes are most commonly proportional, but not always, and that capital-tax rules also sit at cantonal level. So the company-law choice and the canton choice both shape the final burden. That is why generic statements about "Swiss tax" often sound cleaner than the operational reality.\n\nFor ordinary SMEs, this layered structure matters far more than the OECD/G20 minimum-tax headlines. The FTA's top-up-tax page makes clear that the Swiss top-up tax is about large multinational groups with consolidated annual turnover of at least 750 million euros. It is important law, but it is not the everyday compliance story for a normal founder choosing between Zurich, Zug, Vaud or Geneva.`,
            },
            {
              heading: "Entity choice still matters because the company and the owner can both be taxed",
              body: `The official SECO comparison of legal forms spells out a practical point that founders sometimes postpone until too late: a GmbH or AG is taxed as a legal entity, and if profit is later distributed as dividends, the company and the individual owners can both be taxed. That does not make incorporation a bad idea, but it does mean the legal form should be chosen with tax and governance in the same conversation.\n\nThis answer is educational only and not tax advice. The clean Swiss way to evaluate corporate tax is to read the FTA system overview for the federal and cantonal mechanics, then compare your intended canton and legal form before relying on a marketing slogan.`,
            },
          ],
          keyTakeaways: [
            "Switzerland does not have a single all-in corporate tax rate.",
            "The federal direct profit tax is 8.5% of net profit, but cantonal and communal profit taxes also apply.",
            "Most cantons also levy capital tax on legal entities.",
            "Swiss top-up tax is mainly relevant to multinational groups with at least 750 million euros in consolidated turnover.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-10-16T10:00:00.000Z",
        sources: [
          {
            label: "The Swiss Tax System (Publication)",
            url: "https://www.estv.admin.ch/en/the-swiss-tax-system-publication",
          },
          {
            label: "Top-up Tax",
            url: "https://www.estv.admin.ch/estv/en/home/top-up-tax.html",
          },
          {
            label: "Comparison of legal forms",
            url: "https://www.kmu.admin.ch/dam/kmu/en/dokumente/savoir-pratique/formes-juridiques/rechtsformenvergleich-tabelle.pdf.download.pdf/ENG_2023_Rechtsformenvergleich.pdf",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ch-income-tax-rate",
      title: "What income tax rate do individuals really pay in Switzerland, and why is there no single Swiss salary-tax percentage?",
      body: "I need a current Swiss personal-tax answer that doesn't pretend one number covers the country. Please explain the federal progressive tax, why cantonal and communal taxes change the real burden, and how wealth tax and deductions keep turning a 'simple rate' question into a location question.",
      author: {
        displayName: "Sophie Meier",
        avatarSeed: "ch-sophie-meier",
        badge: "new-member",
      },
      category: "ch-tax",
      tags: ["Switzerland", "income tax", "wealth tax", "cantonal tax"],
      postedAt: "2025-11-03T08:00:00.000Z",
      viewCount: 3015,
      answerCount: 1,
      status: "answered",
      seoTitle: "Why there is no single Switzerland income tax rate",
      seoDescription: "Switzerland income tax explained with federal progressive tax, cantonal and communal variation, wealth tax, and why location changes the result.",
    },
    answers: [
      {
        id: "a-ch-income-tax-rate",
        questionId: "q-ch-income-tax-rate",
        articleContent: {
          sections: [
            {
              heading: "A Swiss employee does not face one national salary-tax percentage",
              body: `The official Swiss tax-system guide explains why. At federal level, direct federal tax on individuals is progressive, and the Confederation uses different scales for single people, married people and the parental scale. The same document also notes that the constitutional maximum federal rate is 11.5%. That sounds straightforward until the rest of the Swiss system arrives.\n\nCantons and communes also levy income taxes, and they do so under their own laws and coefficients. So even before deductions enter the picture, two people on the same salary can face meaningfully different effective burdens because they live in different places.`,
            },
            {
              heading: "The canton changes both the rates and the deductions, which is why location matters so much",
              body: `The FTA's own overview says almost all cantons use progressive income-tax scales and that the strength of the progression varies from canton to canton. It also explains that deductions vary considerably from canton to canton. The official ch.ch tax-return guidance makes the same practical point in plainer language: the precise deductions you can claim depend on the canton, and you file through the cantonal tax administration.\n\nThat is why 'What is the Swiss income tax rate?' is often too blunt to be useful. The real answer depends on federal tax, cantonal tax, communal tax, deductions, family status and place of residence.`,
            },
            {
              heading: "Wealth tax and source-tax rules make the Swiss personal picture even more local",
              body: `Switzerland also stands apart because cantons and communes levy wealth tax on individuals. The FTA guide says this is assessed together with income tax, which means a high-net-worth person's annual tax conversation is not just about salary or freelance income. And for many foreign employees without a C permit, tax at source still matters, with withholding handled through the payroll system rather than through a simple nationwide table for everybody.\n\nThis answer is educational only and not tax advice. For a real Swiss personal-tax estimate, use the canton-specific rules and not just the federal scale, because the local layer is doing a lot of the work.`,
            },
          ],
          keyTakeaways: [
            "There is no single Swiss income tax rate for everyone.",
            "Direct federal tax is progressive, but cantonal and communal taxes change the real burden.",
            "Deductions and family reliefs vary materially from canton to canton.",
            "Cantonal and communal wealth tax can matter alongside income tax.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-11-05T10:00:00.000Z",
        sources: [
          {
            label: "The Swiss Tax System (Publication)",
            url: "https://www.estv.admin.ch/en/the-swiss-tax-system-publication",
          },
          {
            label: "Tax return",
            url: "https://www.ch.ch/en/taxes-and-finances/tax-return/",
          },
          {
            label: "Tax at source",
            url: "https://www.ch.ch/en/taxes-and-finances/types-of-taxation/tax-at-source/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ch-vat-rules",
      title: "What VAT rate, registration threshold and filing timing apply in Switzerland now?",
      body: "I need the current Swiss VAT answer for 2026, not a stale 7.7% article. Please explain the current 8.1% normal rate, the CHF 100,000 registration threshold, and how the reporting deadline works in practice because that's where businesses usually stop treating VAT like a theory problem.",
      author: {
        displayName: "Luca Steiner",
        avatarSeed: "ch-luca-steiner",
        badge: "subscriber",
      },
      category: "ch-tax",
      tags: ["Switzerland", "VAT", "MWST", "registration threshold"],
      postedAt: "2025-12-01T08:00:00.000Z",
      viewCount: 3475,
      answerCount: 1,
      status: "answered",
      seoTitle: "Current Switzerland VAT rate threshold and filing timing",
      seoDescription: "Switzerland VAT explained with the 8.1% rate, the CHF 100,000 threshold, and the 60-day filing and payment deadline.",
    },
    answers: [
      {
        id: "a-ch-vat-rules",
        questionId: "q-ch-vat-rules",
        articleContent: {
          sections: [
            {
              heading: "The current Swiss normal VAT rate is 8.1%, with separate reduced and special rates",
              body: `The FTA's current VAT-rates page is the cleanest place to start: the normal Swiss VAT rate is 8.1%, the reduced rate is 2.6%, and the special rate for accommodation is 3.8%. That already tells you why older summaries are risky in 2026. If an article still leads with 7.7%, it is not current.\n\nFor pricing, invoicing and contract drafting, that rate change is not cosmetic. A business using stale VAT assumptions can quietly create margin errors long before a tax audit ever shows up.`,
            },
            {
              heading: "The registration threshold is CHF 100,000, but the official rule is broader than a local-sales soundbite",
              body: `The FTA's Swiss tax-system overview explains that a person domiciled in Switzerland or with a Swiss permanent establishment is exempt from VAT liability only if turnover from taxable services on Swiss and/or foreign territory stays below CHF 100,000 in the year. In other words, the threshold conversation is broader than many businesses expect. It is not just about one local invoice total inside a canton.\n\nThat is why cross-border digital businesses and service firms should read the actual FTA rule instead of relying on a simplified 'Swiss turnover only' summary. The taxability of the supplies still matters.`,
            },
            {
              heading: "Swiss VAT gets operational quickly because filing and payment are tied to a firm 60-day timetable",
              body: `The FTA's paying-VAT guidance says the VAT return must be submitted and paid within 60 days after the end of the relevant reporting period, without prior request. That deadline is the real compliance heartbeat. From 1 January 2025, the FTA also allows annual reporting on request for businesses with annual turnover of up to CHF 5,005,000, which can reduce admin friction for smaller operators.\n\nThis answer is educational only and not tax advice. The practical Swiss VAT question is not only whether you cross the threshold, but whether your accounting and cash flow are ready for the reporting method you choose.`,
            },
          ],
          keyTakeaways: [
            "Switzerland's normal VAT rate is 8.1%, with reduced and special rates also in force.",
            "The VAT registration threshold is generally CHF 100,000.",
            "The threshold rule is broader than a simple local-sales headline and can involve taxable turnover on Swiss and foreign territory.",
            "VAT returns and payment are generally due within 60 days after the reporting period.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-12-03T10:00:00.000Z",
        sources: [
          {
            label: "Current Swiss VAT rates",
            url: "https://www.estv.admin.ch/estv/en/home/value-added-tax/vat-rates-switzerland.html",
          },
          {
            label: "The Swiss Tax System (Publication)",
            url: "https://www.estv.admin.ch/en/the-swiss-tax-system-publication",
          },
          {
            label: "Paying VAT",
            url: "https://www.estv.admin.ch/estv/en/home/value-added-tax/paying-vat.html",
          },
          {
            label: "Annual reporting",
            url: "https://www.estv.admin.ch/en/annual-reporting-2025",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ch-tax-deadlines",
      title: "What tax deadlines matter most in Switzerland for personal returns, VAT and federal tax payments?",
      body: "I want the practical Swiss compliance answer, not a vague 'check your canton' shrug. Please explain how the cantonal return deadline usually works, what fixed federal date people should know, and when Swiss VAT becomes due because those deadlines drive real cash-flow and penalty risk.",
      author: {
        displayName: "Nina Frei",
        avatarSeed: "ch-nina-frei",
        badge: "new-member",
      },
      category: "ch-tax",
      tags: ["Switzerland", "tax deadlines", "VAT", "direct federal tax"],
      postedAt: "2026-01-12T08:00:00.000Z",
      viewCount: 2860,
      answerCount: 1,
      status: "answered",
      seoTitle: "Switzerland tax deadlines for returns VAT and federal tax",
      seoDescription: "Swiss tax deadlines explained with cantonal return timing, the 1 March federal due date, and the 60-day VAT timetable.",
    },
    answers: [
      {
        id: "a-ch-tax-deadlines",
        questionId: "q-ch-tax-deadlines",
        articleContent: {
          sections: [
            {
              heading: "There is no single Swiss personal-return deadline because returns are filed with the canton",
              body: `The official ch.ch tax-return guidance makes this point more clearly than many advisers do: you normally receive the tax return from the cantonal tax administration and submit it there as well. As a general rule, you have 30 days to complete and file it, and the deadline is shown on the forms. If you need more time, you can request an extension.\n\nThat means the practical Swiss filing calendar starts with the canton, not with a single nationwide personal-income-tax date. The national system exists, but it operates through cantonal administration for ordinary individuals.`,
            },
            {
              heading: "Direct federal tax still has a fixed due-date logic that people often miss",
              body: `The FTA's Swiss tax-system publication gives the clean federal rule: direct federal tax becomes payable on 1 March of the year following the tax year, with a grace period of 30 days. In concrete terms, for the 2025 tax year that date was 1 March 2026. That does not mean every taxpayer experiences payment in exactly the same way, because cantonal collection systems and provisional instalments also shape the flow of money, but the federal timing point is real.\n\nThis is why Swiss tax deadlines are easy to underestimate. The return process feels local and administrative, but the money side is still structured and date-driven.`,
            },
            {
              heading: "VAT runs on its own timetable and often becomes the most operational deadline for businesses",
              body: `For businesses, the FTA's VAT guidance is usually the more important recurring deadline. VAT must be submitted and paid within 60 days after the end of the reporting period. That makes Swiss VAT a regular operating rhythm rather than an annual tidy-up exercise.\n\nThis answer is educational only and not tax advice. The safest approach is to run three calendars in parallel: the canton-based personal return calendar, the federal payment calendar, and the VAT reporting calendar. Switzerland rewards people who separate those clocks instead of treating 'tax season' as one blob.`,
            },
          ],
          keyTakeaways: [
            "Swiss personal tax returns are generally filed with the cantonal tax administration, not through one national filing office.",
            "As a general rule, taxpayers have 30 days to file, with extension available on request.",
            "Direct federal tax becomes payable on 1 March of the following year, with a 30-day grace period.",
            "Swiss VAT returns and payment are generally due within 60 days after the reporting period ends.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-14T10:00:00.000Z",
        sources: [
          {
            label: "Tax return",
            url: "https://www.ch.ch/en/taxes-and-finances/tax-return/",
          },
          {
            label: "The Swiss Tax System (Publication)",
            url: "https://www.estv.admin.ch/en/the-swiss-tax-system-publication",
          },
          {
            label: "Paying VAT",
            url: "https://www.estv.admin.ch/estv/en/home/value-added-tax/paying-vat.html",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ch-start-business",
      title: "How do you start a company in Switzerland, and when do legal form and Swiss-resident representation become decisive?",
      body: "I want the practical Swiss setup answer, not a brochure. Please explain when a sole proprietorship is enough, when founders usually choose a GmbH or AG, what capital is required, and why foreign founders often discover too late that Swiss-resident management or board representation is part of the setup conversation.",
      author: {
        displayName: "Daniel Huber",
        avatarSeed: "ch-daniel-huber",
        badge: "subscriber",
      },
      category: "entity-setup",
      tags: ["Switzerland", "start a business", "GmbH", "AG", "EasyGov"],
      postedAt: "2026-02-04T08:00:00.000Z",
      viewCount: 3335,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to start a company in Switzerland with the right legal form",
      seoDescription: "How to start a company in Switzerland, covering sole proprietorships, GmbH and AG capital, resident management rules, and EasyGov.",
    },
    answers: [
      {
        id: "a-ch-start-business",
        questionId: "q-ch-start-business",
        articleContent: {
          sections: [
            {
              heading: "In Switzerland, the first real setup decision is the legal form, not the logo or the launch page",
              body: `The official SECO comparison table is blunt in a helpful way. A sole proprietorship has no minimum capital, but commercial-register entry becomes compulsory from annual income of CHF 100,000. A GmbH needs minimum capital of CHF 20,000. An AG needs CHF 100,000, of which CHF 50,000 must be paid in. Those are not cosmetic details. They shape financing, liability, credibility and tax treatment from day one.\n\nSo the Swiss incorporation discussion usually starts with whether the business should stay close to the owner as a sole proprietorship or move immediately into a legal-entity form such as a GmbH or AG.`,
            },
            {
              heading: "Foreign founders often miss the Swiss-resident representation rule until late in the process",
              body: `The same official legal-forms comparison says at least one business manager or director of a GmbH must reside in Switzerland, and for an AG at least one board member or director must reside in Switzerland. That is one of the most important practical constraints for foreign founders. Switzerland is open for business, but it is not structured as a jurisdiction where every governance role can float abroad with no local presence question.\n\nThis is the point where many international setup articles become too airy. The resident-signatory and corporate-governance requirements are part of the incorporation reality, not an afterthought.`,
            },
            {
              heading: "EasyGov simplifies the filing path, but it does not erase the formal steps",
              body: `The EasyGov FAQ shows what the digital process really covers. Through EasyGov, founders can register sole proprietorships, limited liability companies, public limited companies and limited partnerships, and they can apply for connected registrations such as VAT or social-insurance steps. But EasyGov also states that for LLCs and Ltds it initiates the founding act with a notary, and commercial-register entry follows only after the formation is notarised.\n\nThis answer is educational only and not tax or legal advice. In Switzerland, the clean way to start is to choose the legal form first, test the resident-management requirement early if foreign founders are involved, and then use EasyGov as a filing tool rather than treating it like a substitute for the underlying legal steps.`,
            },
          ],
          keyTakeaways: [
            "A sole proprietorship has no minimum capital, while a GmbH needs CHF 20,000 and an AG needs CHF 100,000 with CHF 50,000 paid in.",
            "Commercial-register entry becomes compulsory for a sole proprietorship from annual income of CHF 100,000.",
            "A GmbH or AG needs Swiss-resident representation in management or on the board.",
            "EasyGov helps with registrations, but GmbH and AG formation still involves notarised steps.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-02-06T10:00:00.000Z",
        sources: [
          {
            label: "Comparison of legal forms",
            url: "https://www.kmu.admin.ch/dam/kmu/en/dokumente/savoir-pratique/formes-juridiques/rechtsformenvergleich-tabelle.pdf.download.pdf/ENG_2023_Rechtsformenvergleich.pdf",
          },
          {
            label: "EasyGov FAQ",
            url: "https://faq.easygov.swiss/en/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ch-tax-at-source-foreign-workers",
      title: "Who pays tax at source in Switzerland, and why do many foreign workers not file the usual tax return first?",
      body: "I want the practical Swiss answer, not a one-line payroll description. Please explain who is mainly affected, why the employer deduction matters so much, and why people used to ordinary annual self-filing can misread how Swiss withholding at source works.",
      author: {
        displayName: "Nadia Keller",
        avatarSeed: "ch-nadia-keller",
        badge: "new-member",
      },
      category: "payroll",
      tags: ["Switzerland", "tax at source", "foreign workers", "payroll"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 2178,
      answerCount: 1,
      status: "answered",
      seoTitle: "Swiss tax at source for foreign workers explained",
      seoDescription: "Swiss tax at source explained for foreign workers, including who is affected, how employers deduct it, and why the normal return is not always the first step.",
    },
    answers: [
      {
        id: "a-ch-tax-at-source-foreign-workers",
        questionId: "q-ch-tax-at-source-foreign-workers",
        articleContent: {
          sections: [
            {
              heading: "Swiss tax at source mainly targets foreign workers who are inside the country without a C permit",
              body: `ch.ch says tax at source is deducted directly from salary and mainly concerns foreign residents who do not hold a C permit. It also says the system can apply to persons resident abroad who receive income from work carried out in Switzerland, such as cross-border commuters and certain performers. That already tells you this is not just a payroll footnote. It is a major tax entry point for many internationally mobile workers.`,
            },
            {
              heading: "The employer deduction changes the taxpayer's experience of the whole system",
              body: `ch.ch explains that the employer, or in some cases the insurance or pension fund, deducts the tax every month and sends it to the cantonal tax authorities. The amount covers federal, cantonal and communal income taxes, which is why the page also says that affected taxpayers do not need to fill out the ordinary tax return in the usual way. For people coming from self-assessment-heavy systems, that feels like a very different compliance rhythm.`,
            },
            {
              heading: "The rate still depends on the canton, so 'withheld at source' does not mean 'uniform nationwide rate'",
              body: `The same guidance says the tax-at-source rate varies from canton to canton. This answer is educational only and not tax advice. In Switzerland, the clean habit is to separate three questions: whether the worker is inside the tax-at-source group, who is deducting the tax, and which canton controls the applicable rate environment.`,
            },
          ],
          keyTakeaways: [
            "Swiss tax at source mainly concerns foreign residents without a C permit and some non-resident workers with Swiss work income.",
            "The employer usually deducts the tax from salary every month.",
            "The withholding covers federal, cantonal and communal income taxes.",
            "The tax-at-source rate varies by canton rather than following one single Swiss national rate.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
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
    ],
  },
  {
    question: {
      id: "q-ch-top-up-tax-large-groups",
      title: "What is Switzerland's top-up tax, and why should most ordinary Swiss SMEs not mistake it for a general company tax hike?",
      body: "I want the official Swiss answer, not a generic Pillar Two headline. Please explain which groups are in scope, why the EUR 750 million turnover test matters, and why this regime sits in a different category from the normal cantonal and federal company-tax conversation.",
      author: {
        displayName: "Fabian Roth",
        avatarSeed: "ch-fabian-roth",
        badge: "subscriber",
      },
      category: "ch-tax",
      tags: ["Switzerland", "top-up tax", "Pillar Two", "multinational groups"],
      postedAt: "2026-04-15T08:00:00.000Z",
      viewCount: 1881,
      answerCount: 1,
      status: "answered",
      seoTitle: "Swiss top-up tax explained for multinational groups",
      seoDescription: "Swiss top-up tax explained, including the 15% minimum-tax logic, the EUR 750 million turnover test, and why most SMEs are outside the regime.",
    },
    answers: [
      {
        id: "a-ch-top-up-tax-large-groups",
        questionId: "q-ch-top-up-tax-large-groups",
        articleContent: {
          sections: [
            {
              heading: "Switzerland's top-up tax is aimed at minimum-tax alignment for very large groups",
              body: `The Federal Tax Administration says Switzerland levies a top-up tax to compensate for the gap between the effective tax rate and the 15% minimum rate in the OECD/G20 minimum-taxation framework. The page also says the regime affects multinational corporate groups with consolidated annual turnover of at least EUR 750 million. That is the core boundary line ordinary SMEs need to understand.`,
            },
            {
              heading: "This regime belongs to the Pillar Two conversation, not to the normal Swiss SME tax conversation",
              body: `The FTA's page explains that the Swiss top-up tax and the international top-up tax developments sit inside the minimum-tax architecture and related ordinance framework. That is a very different discussion from the ordinary Swiss tax-system conversation about cantonal rates, communal layers and legal form. The two topics touch the same country, but they do not describe the same policy lane.`,
            },
            {
              heading: "The practical mistake is treating every international reform as if it hit every Swiss company equally",
              body: `That is how unnecessary panic starts. Switzerland's general tax system still has to be understood on its own terms, and the top-up tax has to be understood as an in-scope large-group regime. This answer is educational only and not tax advice. Most Swiss founders should first ask whether they are even remotely inside the EUR 750 million universe before treating the top-up tax as their immediate problem.`,
            },
          ],
          keyTakeaways: [
            "Switzerland's top-up tax is tied to the 15% minimum-tax framework for large multinational groups.",
            "The regime targets groups with consolidated annual turnover of at least EUR 750 million.",
            "It sits in a different policy lane from the normal Swiss SME corporate-tax discussion.",
            "Most ordinary Swiss SMEs should test scope first before worrying about this regime.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-17T10:00:00.000Z",
        sources: [
          {
            label: "Top-up Tax",
            url: "https://www.estv.admin.ch/estv/en/home/top-up-tax.html",
          },
          {
            label: "The Swiss Tax System (Publication)",
            url: "https://www.estv.admin.ch/en/the-swiss-tax-system-publication",
          },
        ],
      },
    ],
  },
];
