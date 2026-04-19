// CROSS_BORDER_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const CROSS_BORDER_THREADS: QAThread[] = [
  {
    question: {
      id: "q-xb-feie-vs-ftc",
      title: "For a U.S. citizen abroad, when is the foreign earned income exclusion different from the foreign tax credit in practical terms?",
      body: "I want the real IRS answer, not expat-forum slogans. Please explain why these two relief tools are not interchangeable, why they cannot both shelter the same income in the same way, and why filing obligations continue even when someone thinks foreign tax already solved the U.S. side.",
      author: {
        displayName: "Megan Hart",
        avatarSeed: "xb-megan-hart",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "IRS", "FEIE", "foreign tax credit", "expat tax"],
      postedAt: "2025-11-06T08:00:00.000Z",
      viewCount: 3585,
      answerCount: 1,
      status: "answered",
      seoTitle: "Foreign earned income exclusion vs foreign tax credit explained",
      seoDescription: "IRS-based explanation of FEIE versus the foreign tax credit, including why they work differently and why U.S. filing still matters abroad.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-xb-feie-vs-ftc",
        questionId: "q-xb-feie-vs-ftc",
        articleContent: {
          sections: [
            {
              heading: "The FEIE removes some foreign earned income from U.S. taxation, while the foreign tax credit offsets U.S. tax with foreign tax paid",
              body: `The IRS draws the line pretty clearly. Publication 54 says U.S. citizens and resident aliens abroad are still taxed on worldwide income, but may qualify to exclude a portion of foreign earned income and certain housing amounts. The foreign tax credit is a different mechanism. The IRS describes it as a credit that can reduce U.S. income tax when you paid or accrued income tax to a foreign country or U.S. possession.\n\nThat difference matters because one tool changes how much income is exposed to U.S. tax, while the other works by crediting foreign tax against U.S. tax liability. They can both be part of an international filing strategy, but they are not the same lever.`,
            },
            {
              heading: "The key practical limit is that you do not get to double-count the same tax relief on the same excluded income",
              body: `This is where a lot of bad advice starts. Publication 54 points taxpayers toward Publication 514 because the interaction rules matter. The IRS does not let taxpayers take a foreign tax credit on foreign income that they exclude under the foreign earned income exclusion. So anyone comparing FEIE and FTC is not deciding between two pieces of free relief that stack perfectly on the same dollars.\n\nIn practical terms, the choice changes with the facts. Someone in a higher-tax country may care more about the credit side. Someone focused mainly on earned income thresholds may care more about the exclusion side. But that is a comparison exercise, not a pile-up exercise.`,
            },
            {
              heading: "Living abroad does not switch off the U.S. filing system by itself",
              body: `Publication 54 starts from worldwide taxation for a reason. U.S. citizens abroad do not exit the return system just because foreign tax was withheld locally. The FEIE must be claimed properly, and the credit must be computed properly. Even where the final U.S. tax bill is small or nil, the filing mechanics still matter.\n\nThis answer is educational only and not tax advice. The clean way to compare FEIE and FTC is to start from the IRS rules, test the same income under each method, and avoid assuming that foreign withholding automatically resolves the U.S. return.`,
            },
          ],
          keyTakeaways: [
            "The FEIE and the foreign tax credit are different relief tools, not two names for the same thing.",
            "The FEIE excludes qualifying foreign earned income, while the foreign tax credit offsets U.S. tax with qualifying foreign tax paid or accrued.",
            "You cannot claim a foreign tax credit on income you excluded under the FEIE.",
            "U.S. citizens abroad generally still need to handle the U.S. filing process even if foreign tax was already paid.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-11-08T10:00:00.000Z",
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
    ],
  },
  {
    question: {
      id: "q-xb-dual-residence",
      title: "How do treaty tie-breaker rules work when one person is tax-resident in two countries under domestic law?",
      body: "I want the real treaty answer, not a social-media summary. Please explain the individual tie-breaker sequence, why domestic residence can still exist on both sides before the treaty is applied, and why a claim usually still needs evidence instead of just a statement that someone 'moved abroad.'",
      author: {
        displayName: "Oliver Shaw",
        avatarSeed: "xb-oliver-shaw",
        badge: "new-member",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "treaty", "dual residence", "OECD", "HMRC"],
      postedAt: "2025-11-22T08:00:00.000Z",
      viewCount: 2970,
      answerCount: 1,
      status: "answered",
      seoTitle: "How treaty tie-breaker rules work for dual residence",
      seoDescription: "Dual-residence treaty rules explained with the Article 4 tie-breaker sequence and the evidence HMRC expects for treaty claims.",
    },
    answers: [
      {
        id: "a-xb-dual-residence",
        questionId: "q-xb-dual-residence",
        articleContent: {
          sections: [
            {
              heading: "A treaty does not usually erase domestic-law residence first; it resolves which state gets treaty residence priority",
              body: `The OECD model starts from the real-world problem: one person can be resident in both contracting states under domestic law. Article 4 then gives a tie-breaker sequence for individuals. The order is permanent home, then centre of vital interests, then habitual abode, then nationality, and finally mutual agreement between the competent authorities if the earlier tests do not solve it.\n\nThat is why dual residence is not answered by saying 'I spent more time in Country B' or 'my employer is foreign now.' The treaty analysis only starts after domestic-law residence has already created a conflict.`,
            },
            {
              heading: "The claim still depends on evidence, not just on the taxpayer's preferred narrative",
              body: `HMRC's own manual is quite direct about this. For self assessment years, the taxpayer is responsible in the first instance for self-certifying residence status and, where dual residence is in point, working through Help Sheet HS302 by reference to the actual treaty tie-breaker provisions. HMRC also expects support from the overseas tax authority in appropriate cases.\n\nThat makes the tie-breaker exercise much more documentary than many people expect. Residence claims live or die on facts such as home access, family and economic links, filing position, and the treaty wording that actually applies.`,
            },
            {
              heading: "Different treaties can vary, so the OECD sequence is the model, not a permission slip to ignore the signed text",
              body: `The OECD model is the right place to learn the architecture, but bilateral treaties can still differ in wording or approach, especially for entities. This is one reason residence advice goes wrong when it relies on a generic blog paragraph instead of the treaty the taxpayer is actually invoking.\n\nThis answer is educational only and not tax advice. The safe route in a dual-residence case is to test domestic-law residence first, then walk the relevant treaty's Article 4 wording with evidence in hand instead of relying on one superficial factor.`,
            },
          ],
          keyTakeaways: [
            "Treaty tie-breakers usually apply after domestic law has already made a person resident in both states.",
            "The standard individual sequence is permanent home, centre of vital interests, habitual abode, nationality, then mutual agreement.",
            "HMRC expects dual-residence claims to be supported through the self assessment process and treaty-specific analysis.",
            "The actual bilateral treaty text still matters because treaties are not all identical.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-11-24T10:00:00.000Z",
        sources: [
          {
            label: "Model Tax Convention on Income and on Capital: Condensed Version 2017",
            url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2017/12/model-tax-convention-on-income-and-on-capital-condensed-version-2017_g1g8769b/mtc_cond-2017-en.pdf",
          },
          {
            label: "INTM154040 - Double taxation agreements: residence: Individuals",
            url: "https://www.gov.uk/hmrc-internal-manuals/international-manual/intm154040",
          },
          {
            label: "Dual residents HS302",
            url: "https://www.gov.uk/government/publications/dual-residents-hs302-self-assessment-helpsheet",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-uk-pe-remote-team",
      title: "When can a foreign company create a UK permanent establishment through remote staff, a home office or contract activity?",
      body: "I want the serious answer, not 'remote work never creates PE' or 'one employee always creates PE.' Please explain the fixed-place test, the dependent-agent risk, and why a home office question turns on disposal and business substance rather than on where someone happens to open a laptop.",
      author: {
        displayName: "Priya Anand",
        avatarSeed: "xb-priya-anand",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "permanent establishment", "UK", "OECD", "remote work"],
      postedAt: "2025-12-05T08:00:00.000Z",
      viewCount: 3895,
      answerCount: 1,
      status: "answered",
      seoTitle: "When remote staff can create a UK permanent establishment",
      seoDescription: "UK permanent establishment risk explained for remote staff, home offices, fixed places of business, and dependent-agent activity.",
    },
    answers: [
      {
        id: "a-xb-uk-pe-remote-team",
        questionId: "q-xb-uk-pe-remote-team",
        articleContent: {
          sections: [
            {
              heading: "The first PE question is not 'employee or contractor' but whether the foreign enterprise has a real fixed place of business in the UK",
              body: `The OECD model definition is still the clean foundation: a permanent establishment is a fixed place of business through which the business of an enterprise is wholly or partly carried on. HMRC's manual makes the UK approach equally plain by treating PE risk as arising either through a fixed place or through an agent acting on the company's behalf in the UK.\n\nThat matters because people often jump too quickly to labels. Saying 'it is only one remote worker' or 'the person is a contractor' does not end the analysis. The real test is whether the enterprise is carrying on business through a fixed UK location that is effectively at its disposal, or through agent activity that the rules treat as equivalent.`,
            },
            {
              heading: "A home office is not automatically a PE, but it can become one if the facts are strong enough",
              body: `The OECD commentary is especially useful here because it refuses both extremes. It says the home-office issue will rarely be practical where employees ordinarily report to business premises elsewhere, and many home-office activities may be merely auxiliary. But it also gives examples where an office made available for a sufficiently long period and used for substantive business functions can constitute a permanent establishment.\n\nIn other words, a home office is not magically safe and not automatically fatal. The question turns on disposal, duration, and whether the activities there are core business activity rather than incidental admin.`,
            },
            {
              heading: "Contract activity can create PE risk even without classic leased premises",
              body: `HMRC and the OECD both keep that door open. The OECD commentary notes that customer premises are not automatically at the disposal of the foreign enterprise just because a salesperson visits to take orders, but also points out that dependent-agent rules may still apply depending on the facts. Once a person in the UK habitually concludes contracts, or plays the principal role leading to their conclusion under the treaty wording in force, the PE conversation becomes much more serious.\n\nThis answer is educational only and not tax advice. For remote-team structures, the safe question is not 'Do we have an employee in the UK?' but 'What business is actually being carried on there, from what place, and with what contracting authority?'`,
            },
          ],
          keyTakeaways: [
            "A UK PE analysis starts with fixed place and agent tests, not with simplistic labels about remote work.",
            "A home office does not automatically create a PE, but it can if the enterprise effectively uses it for substantive business over time.",
            "Customer premises are not automatically at the enterprise's disposal just because staff visit them.",
            "Agent or contract-negotiation activity in the UK can still create PE risk even without a leased UK office.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-12-07T10:00:00.000Z",
        sources: [
          {
            label: "INTM264300 - Company residence and permanent establishments",
            url: "https://www.gov.uk/hmrc-internal-manuals/international-manual/intm264300",
          },
          {
            label: "Model Tax Convention on Income and on Capital: Condensed Version 2017",
            url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2017/12/model-tax-convention-on-income-and-on-capital-condensed-version-2017_g1g8769b/mtc_cond-2017-en.pdf",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-us-withholding-forms",
      title: "If a non-U.S. founder or contractor receives U.S.-source income, which IRS form actually controls treaty withholding relief?",
      body: "I need the practical IRS answer, not a random form list. Please explain when Form W-8BEN or W-8BEN-E matters, when Form 8233 matters instead, and why the payer cannot just accept a treaty claim on trust if the conditions or the TIN requirements are not met.",
      author: {
        displayName: "Hugo Fernandes",
        avatarSeed: "xb-hugo-fernandes",
        badge: "new-member",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "IRS", "withholding tax", "W-8BEN", "Form 8233"],
      postedAt: "2026-01-09T08:00:00.000Z",
      viewCount: 3445,
      answerCount: 1,
      status: "answered",
      seoTitle: "Which IRS treaty withholding form matters for foreign recipients",
      seoDescription: "IRS withholding treaty claims explained for Form W-8BEN, W-8BEN-E, Form 8233, and the conditions for reduced U.S. withholding.",
    },
    answers: [
      {
        id: "a-xb-us-withholding-forms",
        questionId: "q-xb-us-withholding-forms",
        articleContent: {
          sections: [
            {
              heading: "The first distinction is between passive-type income and personal services income",
              body: `The IRS page on claiming treaty benefits makes the split very practical. For income that is not earned from personal services, the foreign payee uses Form W-8BEN or W-8BEN-E to claim treaty benefits. For income from personal services, the treaty claim route runs through Form 8233 instead. That is a more important distinction than many foreign founders realise.\n\nIt matters because dividends, interest, rents and royalties live in a different withholding world from independent-contractor or employee compensation. If the wrong form is used, the treaty claim can fail even before anyone gets to the substantive treaty article.`,
            },
            {
              heading: "Reduced treaty withholding is conditional, not automatic",
              body: `The IRS is explicit on this too. A reduced rate applies only if the foreign person provides the right W-8 form, gives a U.S. or foreign taxpayer identification number where required, certifies treaty residence and beneficial ownership, and satisfies any limitation-on-benefits rule that the treaty contains. Publication 515 remains the broader withholding reference point for U.S.-source FDAP income that is ordinarily subject to 30% withholding.\n\nSo a treaty rate is not something the payer is free to improvise. It is a documented withholding position that depends on eligibility being properly established.`,
            },
            {
              heading: "The withholding agent still has to police obvious bad claims",
              body: `The IRS does not let the payer shrug and accept anything submitted. Its treaty-benefits page says the payer must not apply the treaty rate if it knows, or has reason to know, that the owner of the income is not eligible for the benefits claimed. That is why clean onboarding for foreign vendors, licensors and shareholders matters so much.\n\nThis answer is educational only and not tax advice. In U.S.-source cross-border payments, the right question is not just 'Is there a treaty?' but 'What type of income is this, which form matches it, and have the treaty conditions been documented properly?'`,
            },
          ],
          keyTakeaways: [
            "Form W-8BEN or W-8BEN-E is generally used for treaty claims on non-personal-services income, while Form 8233 is used for qualifying personal-services treaty claims.",
            "Many U.S.-source payments to foreign recipients are ordinarily subject to 30% withholding before treaty relief is documented.",
            "Treaty relief depends on proper form delivery, residence and beneficial-ownership certifications, TIN requirements where applicable, and any limitation-on-benefits rules.",
            "A withholding agent must not apply the treaty rate if it knows or has reason to know the claim is not valid.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-11T10:00:00.000Z",
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
    ],
  },
  {
    question: {
      id: "q-xb-eu-oss-digital-services",
      title: "Can a non-EU SaaS or consultancy use one VAT registration for EU consumer sales instead of registering in every member state?",
      body: "I want the practical EU answer for digital and remote-service businesses, not a recycled e-commerce paragraph. Please explain how the non-Union OSS works, why VAT is charged at the customer's country rate, and where founders go wrong when they think 'one registration' means 'no need to understand place-of-supply rules anymore.'",
      author: {
        displayName: "Clara Mendes",
        avatarSeed: "xb-clara-mendes",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "EU VAT", "OSS", "digital services", "SaaS"],
      postedAt: "2026-02-03T08:00:00.000Z",
      viewCount: 4015,
      answerCount: 1,
      status: "answered",
      seoTitle: "Can non-EU SaaS companies use the EU VAT OSS?",
      seoDescription: "EU VAT OSS explained for non-EU SaaS and service businesses, including destination-based VAT and the limits of one-stop registration.",
    },
    answers: [
      {
        id: "a-xb-eu-oss-digital-services",
        questionId: "q-xb-eu-oss-digital-services",
        articleContent: {
          sections: [
            {
              heading: "For B2C services into the EU, the non-Union OSS can replace multiple registrations, but it does not change where the VAT belongs",
              body: `The EU's own OSS guidance is very clear about the commercial promise: a non-EU business with no EU fixed establishment can use the non-Union scheme for services supplied to EU consumers. Through that route, the business chooses one member state of identification, files a quarterly return there, and pays once through that portal.\n\nBut the simplification is administrative, not substantive. Your Europe states that you still charge VAT at the rate of the customer's country. So one registration does not mean one EU VAT rate.`,
            },
            {
              heading: "This is why SaaS, consultancy and other remote-service businesses still need clean place-of-supply thinking",
              body: `The non-Union scheme is attractive precisely because it stops a non-EU service supplier from having to maintain a separate registration in every consumer country for those covered supplies. But it does not remove the need to identify where the customer is located, whether the sale is B2C rather than B2B, and whether the supply actually falls within the scheme being used.\n\nThat is the part founders often over-compress. They hear 'OSS' and mentally translate it into 'VAT solved'. In reality, OSS solves a reporting and payment burden after the business has already identified the right customer-country VAT treatment.`,
            },
            {
              heading: "One-stop filing is powerful, but it is still a compliance system with records and scope limits",
              body: `Your Europe also notes that records need to be retained for up to 10 years and that the scheme type depends on where the business is established and what it is selling. So the compliance habit here is still real: correct customer-country VAT, correct scheme, correct return, correct records.\n\nThis answer is educational only and not tax advice. For non-EU digital-service businesses, the right way to think about OSS is 'one portal for many EU consumer VAT obligations,' not 'one portal that makes EU VAT analysis disappear.'`,
            },
          ],
          keyTakeaways: [
            "A non-EU business with no EU fixed establishment can use the non-Union OSS for covered B2C services to EU consumers.",
            "The supplier still charges VAT at the customer's country rate.",
            "OSS simplifies filing and payment, but it does not remove the need to determine place of supply and whether the sale is actually within the scheme.",
            "EU OSS users still need strong records and scheme-specific compliance discipline.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-02-05T10:00:00.000Z",
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
    ],
  },
  {
    question: {
      id: "q-xb-fbar-vs-form-8938",
      title: "If I already file Form 8938, do I still need an FBAR, and is either one filed with the tax return itself?",
      body: "I want the real official answer, not a forum shortcut. Please explain whether Form 8938 replaces the FBAR, what the main filing difference is, and why a person can still have a separate Treasury reporting obligation even if they already think they disclosed foreign accounts to the IRS.",
      author: {
        displayName: "Daniel Kim",
        avatarSeed: "xb-daniel-kim",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "IRS", "FBAR", "Form 8938", "foreign accounts"],
      postedAt: "2026-02-18T08:00:00.000Z",
      viewCount: 2765,
      answerCount: 1,
      status: "answered",
      seoTitle: "FBAR vs Form 8938 explained for U.S. taxpayers with foreign accounts",
      seoDescription: "IRS-based explanation of how FBAR and Form 8938 differ, why one does not automatically replace the other, and where each filing goes.",
    },
    answers: [
      {
        id: "a-xb-fbar-vs-form-8938",
        questionId: "q-xb-fbar-vs-form-8938",
        articleContent: {
          sections: [
            {
              heading: "FBAR and Form 8938 can overlap, but they are not the same filing",
              body: `The IRS is explicit that these two reporting regimes are separate. The FBAR is a Treasury reporting obligation filed on FinCEN Form 114 through FinCEN's BSA e-filing system, while Form 8938 is filed with the federal income tax return when its own thresholds are met. The IRS comparison page exists precisely because taxpayers often assume that one disclosure automatically covers the other.\n\nThat assumption is dangerous. The two filings have different statutory homes, different thresholds, and different scope rules for what gets reported.`,
            },
            {
              heading: "Filing Form 8938 does not automatically remove the FBAR obligation",
              body: `The official IRS comparison says that if you have a reporting obligation for both, you may need to file both. The FBAR page also makes clear that a U.S. person must file when the aggregate value of foreign financial accounts exceeds $10,000 at any point during the calendar year, and that the FBAR is not filed with the federal tax return.\n\nThis is the practical trap. Someone may correctly report foreign assets on the tax return side and still miss the separate Treasury-side reporting step.`,
            },
            {
              heading: "The safest way to think about the issue is to test both systems separately",
              body: `A taxpayer with foreign accounts should ask two separate questions: first, is there an FBAR filing obligation under the Bank Secrecy Act rules; second, is there also a Form 8938 obligation with the income tax return. Record-keeping matters for both, and late discovery can become expensive because penalties under these regimes are not symbolic.\n\nThis answer is educational only and not tax advice. The clean workflow is to treat FBAR and Form 8938 as related but independent compliance checks rather than as duplicate paperwork where one makes the other disappear.`,
            },
          ],
          keyTakeaways: [
            "The FBAR is filed with FinCEN electronically and is not filed with the federal tax return.",
            "Form 8938 is a tax-return filing and does not automatically replace the FBAR.",
            "A U.S. taxpayer may have to file both if both sets of rules apply.",
            "The right workflow is to test FBAR and Form 8938 obligations separately.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-02-20T10:00:00.000Z",
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
    ],
  },
  {
    question: {
      id: "q-xb-uk-us-treaty-relief-form",
      title: "If a U.S. resident has UK interest or royalties, can the treaty rate be claimed automatically or does HMRC expect a specific form and evidence?",
      body: "I want the practical HMRC answer. Please explain whether the treaty claim just exists because the UK-US treaty exists, when form US-Individual 2002 matters, and why treaty relief still depends on documentation instead of a casual statement that someone is a U.S. resident.",
      author: {
        displayName: "Rachel Stein",
        avatarSeed: "xb-rachel-stein",
        badge: "new-member",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "UK-US treaty", "HMRC", "withholding tax", "form US-Individual 2002"],
      postedAt: "2026-03-02T08:00:00.000Z",
      viewCount: 2140,
      answerCount: 1,
      status: "answered",
      seoTitle: "UK-US treaty relief on UK income explained with HMRC form rules",
      seoDescription: "HMRC-based explanation of UK-US treaty relief claims, including when form US-Individual 2002 is used and why evidence still matters.",
    },
    answers: [
      {
        id: "a-xb-uk-us-treaty-relief-form",
        questionId: "q-xb-uk-us-treaty-relief-form",
        articleContent: {
          sections: [
            {
              heading: "A treaty does not usually apply itself without a claim process",
              body: `HMRC's helpsheet for non-residents is clear that treaty relief claims are not casual assertions. The claimant has to check the relevant treaty, collect evidence that the conditions are met, and support the claim properly. That means the existence of the UK-US treaty does not, by itself, cause every payment stream to be taxed at the reduced treaty rate automatically.`,
            },
            {
              heading: "For some UK-US income claims, HMRC points taxpayers to a specific treaty form",
              body: `HMRC's UK-USA form page says form US-Individual 2002 is used to apply for relief at source or to claim repayment of UK Income Tax under the UK-US convention for certain categories such as pensions, purchased annuities, interest and royalties. That matters because people often assume the payer can simply 'use the treaty rate' as a commercial courtesy. HMRC's own materials point in a much more procedural direction.`,
            },
            {
              heading: "Evidence still matters even where the taxpayer is clearly based in the United States",
              body: `HS304 explains the evidence logic and even notes a specific U.S. wrinkle: a U.S. resident does not need a certificate of overseas residence in the same way some other treaty claimants do, because the United States taxes its residents on worldwide income. But that does not turn the claim into a no-paperwork exercise. The taxpayer still needs to fit the income to the treaty and use the right form or claim route.\n\nThis answer is educational only and not tax advice. For UK-US treaty claims, the clean approach is to start with the treaty article, then the HMRC claim route, and then the evidence package rather than assuming the treaty rate exists automatically because the payer recognises the country code.`,
            },
          ],
          keyTakeaways: [
            "The UK-US treaty does not usually reduce UK withholding automatically without a claim process.",
            "HMRC uses form US-Individual 2002 for certain UK-US relief-at-source or repayment claims.",
            "Treaty claims still depend on the relevant treaty article and supporting evidence.",
            "Being U.S.-resident helps frame the claim, but it does not remove the need for the correct HMRC process.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-03-04T10:00:00.000Z",
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
    ],
  },
];
