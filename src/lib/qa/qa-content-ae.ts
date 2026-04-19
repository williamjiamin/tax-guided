// AE_TAX_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const AE_TAX_THREADS: QAThread[] = [
  {
    question: {
      id: "q-ae-corporate-tax",
      title: "How does corporate tax work in the UAE for mainland companies, free zones and larger groups?",
      body: "I want the current UAE answer, not the pre-2023 version that still says businesses are generally untaxed. Please explain the 0% and 9% framework, how qualifying free zone treatment fits in, and why larger multinationals now need to think about the domestic minimum top-up tax as well.",
      author: {
        displayName: "Omar Al Nuaimi",
        avatarSeed: "ae-omar-al-nuaimi",
        badge: "subscriber",
      },
      category: "ae-tax",
      tags: ["UAE", "corporate tax", "free zone", "business tax"],
      postedAt: "2025-02-26T08:00:00.000Z",
      viewCount: 3820,
      answerCount: 1,
      status: "answered",
      seoTitle: "How corporate tax works in the UAE for companies and free zones",
      seoDescription: "UAE corporate tax explained with the 0% and 9% framework, qualifying free zone treatment, and when top-up tax matters for large groups.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-ae-corporate-tax",
        questionId: "q-ae-corporate-tax",
        articleContent: {
          sections: [
            {
              heading: "The UAE is no longer a no-corporate-tax jurisdiction for ordinary business profits",
              body: `The Ministry of Finance's current corporate tax page is the cleanest place to reset old assumptions. The UAE's federal corporate tax rules apply to financial years beginning on or after 1 June 2023, and corporate tax now sits inside a formal filing and payment regime. The rate structure is not a mystery: the Ministry's threshold announcement confirms that a 0% rate applies to taxable income not exceeding AED 375,000 in a tax period, while 9% applies above that threshold.\n\nThat means legacy articles saying the UAE is simply untaxed for normal business activity are now outdated. The real question is not whether corporate tax exists, but how the business fits inside the current framework.`,
            },
            {
              heading: "Free zones are within the system, but not all free zone income is taxed the same way",
              body: `The Ministry also makes clear that free zone persons are within the scope of corporate tax and must comply with the law, even though a Qualifying Free Zone Person may obtain a 0% rate on qualifying income if the conditions are met. That is a more nuanced position than the sales pitch many founders still hear. A free zone licence does not by itself eliminate compliance work or guarantee a full exemption on every revenue stream.\n\nThe practical issue is matching the legal form, activity mix and transaction pattern to the free-zone rules as they actually operate. A business that assumes "free zone equals no tax" without checking the qualifying conditions is setting itself up for a problem.`,
            },
            {
              heading: "Larger groups also need to watch the top-up tax layer",
              body: `For larger multinationals, the UAE conversation has moved beyond the 0% and 9% story. The Ministry of Finance announced the OECD transitional qualified status of the UAE's Domestic Minimum Top-up Tax, which gives in-scope groups a separate minimum-tax framework to consider. That does not change the analysis for every SME, but it does mean the UAE tax system now has to be read at two levels: ordinary corporate tax for most businesses, and Pillar Two-style minimum tax for groups that fall inside the global rules.\n\nThis answer is educational only and not tax advice. Before structuring or filing, read the Ministry's current corporate tax pages and decisions together so the business model, free-zone assumptions and group status are all tested against the live rules.`,
            },
          ],
          keyTakeaways: [
            "The UAE now has a federal corporate tax regime for financial years beginning on or after 1 June 2023.",
            "A 0% rate applies up to AED 375,000 of taxable income, with 9% above that threshold.",
            "Free zone entities are within scope, though qualifying income may still benefit from a 0% rate in the right case.",
            "Large multinational groups may also need to assess the UAE's domestic minimum top-up tax framework.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-02-28T10:00:00.000Z",
        sources: [
          {
            label: "Corporate Tax in the UAE",
            url: "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/",
          },
          {
            label: "Cabinet Decision No. 116 of 2022 on the annual Taxable Income subject to Corporate Tax",
            url: "https://mof.gov.ae/wp-content/uploads/2023/02/Cabinet-Decision-No-116-of-2022-on-CT-Article-3-Threshold-1.pdf",
          },
          {
            label: "Top-up Tax",
            url: "https://mof.gov.ae/en/public-finance/tax/top-up-tax/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ae-natural-person-tax",
      title: "When does a natural person in the UAE actually fall into Corporate Tax?",
      body: "I need the real answer for an individual in the UAE, not a slogan about there being no income tax. Please explain which kinds of personal receipts stay outside the business-tax net, when business turnover crosses the line, and why some freelancers and sole proprietors now have to think about registration deadlines.",
      author: {
        displayName: "Sara Al Mazrouei",
        avatarSeed: "ae-sara-al-mazrouei",
        badge: "new-member",
      },
      category: "self-employed",
      tags: ["UAE", "natural person", "corporate tax", "freelancer"],
      postedAt: "2025-04-04T08:00:00.000Z",
      viewCount: 3410,
      answerCount: 1,
      status: "answered",
      seoTitle: "When a natural person in the UAE must register for corporate tax",
      seoDescription: "UAE natural person corporate tax explained with the AED 1 million turnover test, excluded income streams, and registration timing for individuals.",
    },
    answers: [
      {
        id: "a-ae-natural-person-tax",
        questionId: "q-ae-natural-person-tax",
        articleContent: {
          sections: [
            {
              heading: "The UAE question for individuals is now about business activity, not salary income",
              body: `The Federal Tax Authority's natural-person guidance cuts through a lot of confusion. A natural person is subject to UAE Corporate Tax only if the individual conducts a business or business activity in the UAE and total turnover from that activity exceeds AED 1 million within the calendar year. That is a much narrower trigger than many people fear, but it is also more concrete than the old assumption that individuals never need to think about business tax at all.\n\nThis is the crucial distinction for consultants, creators and sole proprietors. The conversation is no longer just "the UAE has no income tax"; it is "does this person have a business in the UAE, and has its turnover crossed the corporate tax trigger?"`,
            },
            {
              heading: "Some income streams are expressly kept out of the business test",
              body: `The FTA also says that wages, personal investment income and real estate investment income are not treated as business or business activity for this purpose. That means an employee with salary income is not automatically in scope merely because they live and work in the UAE. The same goes for someone whose passive investment or personal property income stays within those excluded categories.\n\nThe problem cases tend to be mixed situations: for example, a person with a salary, a consulting side business and separate investments. Once activities are mixed, people need to separate the excluded receipts from the business turnover rather than lumping everything together.`,
            },
            {
              heading: "Registration timing matters once the threshold has been crossed",
              body: `The FTA's 2025 reminder to natural persons adds the operational point. If a natural person conducting business in the UAE exceeds AED 1 million turnover in a calendar year, registration must be completed by 31 March of the following calendar year. The Authority also warned that missing that timeline can trigger an administrative penalty of AED 10,000.\n\nThis answer is educational only and not tax advice. If an individual's UAE activity is beginning to look like a business rather than employment or passive investing, check the FTA's live natural-person guidance before assuming the old no-tax narrative still answers the question.`,
            },
          ],
          keyTakeaways: [
            "A natural person is only within UAE Corporate Tax if they conduct a business in the UAE and business turnover exceeds AED 1 million in a calendar year.",
            "Wages, personal investment income and real estate investment income are excluded from that business test.",
            "Mixed fact patterns need careful separation between business turnover and excluded personal receipts.",
            "Once the threshold is exceeded, registration is due by 31 March of the following year and late registration can trigger penalties.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-04-06T10:00:00.000Z",
        sources: [
          {
            label: "Basis of Taxation - Natural Person",
            url: "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx",
          },
          {
            label: "FTA urges natural persons to register for Corporate Tax before end of March 2025",
            url: "https://tax.gov.ae/en/media.centre/News/fta.urges.natural.persons.to.register.for.corporate.tax.before.end.of.march.2025.to.avoid.administrative.penalties.aspx",
          },
          {
            label: "Corporate Tax in the UAE",
            url: "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ae-vat-rules",
      title: "What VAT rate, registration threshold and filing cycle apply in the UAE now?",
      body: "I want the current UAE VAT basics in practical English. Please explain the 5% rate, the mandatory and voluntary registration thresholds, and why businesses should think about the return timetable early because VAT cash-flow mistakes often start before the first filing deadline arrives.",
      author: {
        displayName: "Ahmed Al Mansoori",
        avatarSeed: "ae-ahmed-al-mansoori",
        badge: "subscriber",
      },
      category: "vat-gst",
      tags: ["UAE", "VAT", "registration threshold", "tax return"],
      postedAt: "2025-05-22T08:00:00.000Z",
      viewCount: 3665,
      answerCount: 1,
      status: "answered",
      seoTitle: "UAE VAT rate registration threshold and filing cycle explained",
      seoDescription: "UAE VAT explained with the 5% rate, AED 375,000 mandatory registration threshold, voluntary registration, and return deadlines.",
    },
    answers: [
      {
        id: "a-ae-vat-rules",
        questionId: "q-ae-vat-rules",
        articleContent: {
          sections: [
            {
              heading: "The UAE's VAT answer starts with a simple rate, but not with a simple compliance burden",
              body: `The Ministry of Finance and the Federal Tax Authority are aligned on the headline rule: VAT in the UAE is charged at a standard rate of 5%. That part is easy to remember, and it is one reason VAT can seem manageable compared with broader indirect-tax systems elsewhere. But the compliance work starts as soon as a business has to judge whether registration is required or commercially useful.\n\nThat is why the 5% rate should be treated as the beginning of the analysis, not the end. A business still has to map supplies, imports, invoices and the timing of registration against the FTA's rules.`,
            },
            {
              heading: "Mandatory and voluntary registration sit on different thresholds",
              body: `The FTA's VAT registration page says mandatory registration applies when taxable supplies and imports exceed AED 375,000 over the previous 12 months or are expected to exceed that threshold in the next 30 days. Voluntary registration becomes available once taxable supplies and imports, or taxable expenses, exceed AED 187,500. That gives smaller businesses some choice, while removing the choice once the mandatory threshold is crossed.\n\nThe trap is assuming that a business can wait until well after the threshold has been passed. The FTA looks at both historic and expected turnover, so fast-growing businesses need to watch the forward-looking test rather than only their last filed numbers.`,
            },
            {
              heading: "The filing cycle can become the real pressure point",
              body: `The FTA's VAT topics page explains that registered businesses must file VAT returns and make related VAT payments within 28 days from the end of their tax period. In practice, that timing discipline is where many UAE VAT problems begin. Businesses often underestimate how quickly collected VAT can become due if the money has already been absorbed into general cash flow.\n\nThis answer is educational only and not tax advice. The safest approach is to review the threshold rules early and build the VAT filing cycle into billing, collections and cash management before the first return becomes due.`,
            },
          ],
          keyTakeaways: [
            "The UAE standard VAT rate is 5%.",
            "Mandatory VAT registration applies above AED 375,000 of taxable supplies and imports.",
            "Voluntary VAT registration is available above AED 187,500.",
            "Registered businesses must file and pay VAT within 28 days after the end of their tax period.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-05-24T10:00:00.000Z",
        sources: [
          {
            label: "Registration for VAT",
            url: "https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx",
          },
          {
            label: "VAT topics",
            url: "https://www.tax.gov.ae/en/taxes/Vat/vat.topics.aspx",
          },
          {
            label: "Value Added Tax (VAT)",
            url: "https://mof.gov.ae/vat/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ae-tax-deadlines",
      title: "What tax deadlines in the UAE matter most for VAT and Corporate Tax filers now?",
      body: "I need the operational UAE answer, not a broad compliance slogan. Please explain the current VAT return cycle, the nine-month Corporate Tax filing rule, and the kind of registration or filing penalties that can hit taxpayers who assume the UAE is still light-touch enough to leave everything until the last minute.",
      author: {
        displayName: "Fatima Al Suwaidi",
        avatarSeed: "ae-fatima-al-suwaidi",
      },
      category: "compliance",
      tags: ["UAE", "tax deadlines", "VAT return", "corporate tax return"],
      postedAt: "2025-07-18T08:00:00.000Z",
      viewCount: 2975,
      answerCount: 1,
      status: "answered",
      seoTitle: "UAE tax deadlines for VAT and corporate tax filers",
      seoDescription: "UAE tax deadlines explained for VAT returns, corporate tax returns, and the registration or late-filing penalties businesses should not ignore.",
    },
    answers: [
      {
        id: "a-ae-tax-deadlines",
        questionId: "q-ae-tax-deadlines",
        articleContent: {
          sections: [
            {
              heading: "VAT deadlines are short and repetitive, which is exactly why they get missed",
              body: `The Federal Tax Authority says VAT returns and related VAT payments are due within 28 days from the end of the tax period. That deadline comes around quickly, especially for businesses that are new to a formal indirect-tax system. The practical problem is rarely ignorance of the 5% rate; it is usually poor process around invoicing, reconciliations and payment timing.\n\nIn the UAE, that makes VAT the tax most likely to create an early operational shock. A company can build sales momentum and still find itself under pressure almost immediately if it has not built a reporting rhythm around that 28-day deadline.`,
            },
            {
              heading: "Corporate tax works on a longer cycle, but it is still a hard deadline",
              body: `The Ministry of Finance and the FTA both emphasise the same core rule for corporate tax: taxable persons must file their Corporate Tax returns and pay any tax due within nine months from the end of the relevant tax period. That is a much longer runway than VAT, but it should not be mistaken for a soft deadline. The FTA has repeatedly reminded taxpayers that late filing and late payment penalties can apply if they wait too long.\n\nThis matters particularly for first-time UAE corporate tax filers who are still operating on the older mental model that the jurisdiction is light on direct-tax compliance. The filing regime is now real, structured and calendar-driven.`,
            },
            {
              heading: "Registration timing can trigger penalties before the first return is even due",
              body: `The FTA's natural-person registration reminder adds another important lesson: compliance risk can arise before the filing stage if the taxpayer misses the registration deadline in the first place. In the example given by the Authority, natural persons who exceed the AED 1 million turnover threshold and do not register by the required date can face an AED 10,000 administrative penalty. So UAE tax compliance is no longer just about year-end reporting; it is also about joining the system on time.\n\nThis answer is educational only and not tax advice. Businesses should map VAT, corporate tax and registration obligations separately so a short-cycle VAT task does not hide a longer-cycle corporate tax or registration problem.`,
            },
          ],
          keyTakeaways: [
            "UAE VAT returns and payments are due within 28 days from the end of the tax period.",
            "UAE Corporate Tax returns and payments are generally due within nine months from the end of the relevant tax period.",
            "The UAE tax system now runs on real filing calendars, not informal post-year clean-up.",
            "Registration failures can create penalties even before a first return is filed.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-07-20T10:00:00.000Z",
        sources: [
          {
            label: "VAT topics",
            url: "https://www.tax.gov.ae/en/taxes/Vat/vat.topics.aspx",
          },
          {
            label: "Corporate Tax in the UAE",
            url: "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/",
          },
          {
            label: "FTA urges submission of Corporate Tax returns within nine months",
            url: "https://tax.gov.ae/en/media.centre/news/federal.tax.authority.urges.submission.of.corporate.tax.returns.and.settlement.of.corporate.tax.liabilities.within.nine.months.from.the.end.of.the.tax.period.aspx",
          },
          {
            label: "FTA urges natural persons to register for Corporate Tax before end of March 2025",
            url: "https://tax.gov.ae/en/media.centre/News/fta.urges.natural.persons.to.register.for.corporate.tax.before.end.of.march.2025.to.avoid.administrative.penalties.aspx",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ae-start-business",
      title: "How should a founder think about mainland, free zone and tax setup when starting a business in the UAE?",
      body: "I need the first-principles UAE answer, not a generic business setup sales script. Please explain how licensing and formation now interact with tax, why mainland and free zone choices should be made on the operating model rather than on slogans, and which registration questions founders should check before the business starts trading.",
      author: {
        displayName: "Khalid Al Falasi",
        avatarSeed: "ae-khalid-al-falasi",
        badge: "subscriber",
      },
      category: "entity-setup",
      tags: ["UAE", "start a business", "mainland", "free zone"],
      postedAt: "2026-01-22T08:00:00.000Z",
      viewCount: 3140,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to start a business in the UAE mainland or free zone",
      seoDescription: "How to start a business in the UAE, comparing mainland and free zone routes, digital setup services, and the first tax questions founders should check.",
    },
    answers: [
      {
        id: "a-ae-start-business",
        questionId: "q-ae-start-business",
        articleContent: {
          sections: [
            {
              heading: "The first UAE decision is commercial structure, not tax marketing",
              body: `The UAE government's business platform shows why founders should begin with operating model rather than with a sales slogan. The official portal distinguishes between mainland business pathways and the wider digital services available to businesses, including Basher and the National Economic Register. In other words, the state infrastructure expects founders to choose a route that matches how they will actually trade, not merely the one with the best-sounding consultant pitch.\n\nThat is especially important in the UAE because mainland and free zone choices can affect customers, contracting, staffing, licensing and future tax treatment. A structure chosen for the wrong reason can be expensive to unwind later.`,
            },
            {
              heading: "Free zone planning now needs to be read with the corporate tax rules beside it",
              body: `The Ministry of Finance's corporate tax guidance makes clear that free zone persons are not outside the tax system; they are within scope and may obtain a 0% rate on qualifying income only if the statutory conditions are met. So the old habit of treating free zones as a blanket no-tax answer is no longer reliable. Founders need to ask what income the business expects to earn, where customers are located, and whether the planned activity fits the qualifying framework.\n\nThis does not make free zones unattractive. It simply means the free-zone choice should be rooted in the real business model instead of in pre-corporate-tax assumptions.`,
            },
            {
              heading: "Tax registration may not be immediate for every business, but it should be planned immediately",
              body: `A UAE founder now needs to think about tax earlier in the setup process. Corporate tax registration is relevant for taxable persons, while VAT registration turns on the AED 375,000 mandatory threshold and the AED 187,500 voluntary threshold. That means a business may not owe everything on day one, but it should still know which trigger it is approaching and what evidence or systems will be needed when it gets there.\n\nThis answer is educational only and not tax advice. Before launch, pair the UAE government's official business-setup information with the Ministry of Finance and FTA tax guidance so licensing, free-zone or mainland choice, and future tax registration all fit the same operating plan.`,
            },
          ],
          keyTakeaways: [
            "UAE founders should choose mainland or free zone structure based on the real operating model, not only on marketing claims.",
            "The UAE's official digital setup tools can speed formation, but they do not replace legal and tax analysis.",
            "Free zone businesses are within the corporate tax system even where qualifying income may still attract a 0% rate.",
            "VAT and corporate tax triggers should be mapped during setup, even if registration is not immediate on day one.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-24T10:00:00.000Z",
        sources: [
          {
            label: "Business FAQs",
            url: "https://u.ae/en/Help/FAQs/business",
          },
          {
            label: "Important digital services for business",
            url: "https://u.ae/en/information-and-services/business/important-digital-services",
          },
          {
            label: "Doing business on the mainland",
            url: "https://u.ae/en/information-and-services/business/doing-business-on-the-mainland",
          },
          {
            label: "Corporate Tax in the UAE",
            url: "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/",
          },
          {
            label: "Registration for VAT",
            url: "https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ae-zero-band-vs-nine-percent",
      title: "Does the UAE 0% corporate tax band mean a small business is outside corporate tax altogether?",
      body: "I want the real statutory answer, not a consultant slogan. Please explain how the AED 375,000 threshold actually works, why income above that amount moves into the 9% band, and why splitting activities across entities is not a harmless shortcut when the Authority sees artificial separation.",
      author: {
        displayName: "Mariam Nasser",
        avatarSeed: "ae-mariam-nasser",
        badge: "new-member",
      },
      category: "ae-tax",
      tags: ["UAE", "corporate tax", "0% band", "9% rate"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 2406,
      answerCount: 1,
      status: "answered",
      seoTitle: "UAE 0% and 9% corporate tax bands explained",
      seoDescription: "UAE corporate tax bands explained, including the AED 375,000 0% threshold, the 9% band above it, and the anti-separation warning.",
    },
    answers: [
      {
        id: "a-ae-zero-band-vs-nine-percent",
        questionId: "q-ae-zero-band-vs-nine-percent",
        articleContent: {
          sections: [
            {
              heading: "The 0% band is part of the UAE corporate tax system, not an escape hatch from it",
              body: `Cabinet Decision No. 116 of 2022 is direct on the point people often blur. The portion of taxable income not exceeding AED 375,000 is subject to a 0% corporate tax rate, while taxable income above AED 375,000 is subject to 9%. That means the 0% band is not evidence that the business sits outside the corporate-tax regime. It is simply the first band inside that regime.`,
            },
            {
              heading: "The threshold applies to taxable income, not to whatever number feels commercially comforting",
              body: `That distinction matters because the UAE's corporate-tax framework is built around taxable income as defined by the law, not around a founder's preferred turnover narrative or cash-balance intuition. The Ministry of Finance's corporate-tax guidance presents the UAE as a real corporate-tax system with bands, scope and filing consequences. A taxpayer still has to work through whether it is a taxable person and what the taxable income actually is before the rate discussion even makes sense.`,
            },
            {
              heading: "Artificial separation is exactly the kind of shortcut the rules are written to challenge",
              body: `The Cabinet Decision also warns that where persons artificially separate a business or business activity so that income above AED 375,000 is pushed into the 0% band, the arrangement can be treated as a corporate-tax advantage case under the anti-abuse rule. This answer is educational only and not tax advice. In the UAE, the safe habit is to read the 0% band as a structured low-income band, not as permission to fragment one business into several paper businesses.`,
            },
          ],
          keyTakeaways: [
            "The UAE 0% rate applies to the portion of taxable income up to AED 375,000.",
            "Taxable income above AED 375,000 generally falls into the 9% band.",
            "The 0% band is part of the corporate-tax regime, not proof that a business is outside the regime.",
            "Artificially splitting activities to preserve the 0% band can trigger anti-abuse issues.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
        sources: [
          {
            label: "Cabinet Decision No. 116 of 2022 on the annual Taxable Income subject to Corporate Tax",
            url: "https://mof.gov.ae/wp-content/uploads/2023/02/Cabinet-Decision-No-116-of-2022-on-CT-Article-3-Threshold-1.pdf",
          },
          {
            label: "Corporate Tax in the UAE",
            url: "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ae-domestic-minimum-top-up-tax",
      title: "What is the UAE domestic minimum top-up tax, and why is it not a startup tax story?",
      body: "I want the official answer, not a buzzword-level Pillar Two summary. Please explain who the UAE DMTT is aimed at, why the EUR 750 million revenue test matters, and why ordinary small and mid-sized UAE businesses should not confuse this regime with the mainstream 9% corporate tax rules.",
      author: {
        displayName: "Omar Al Suwaidi",
        avatarSeed: "ae-omar-al-suwaidi",
        badge: "subscriber",
      },
      category: "ae-tax",
      tags: ["UAE", "top-up tax", "Pillar Two", "multinational groups"],
      postedAt: "2026-04-15T08:00:00.000Z",
      viewCount: 1937,
      answerCount: 1,
      status: "answered",
      seoTitle: "UAE domestic minimum top-up tax explained",
      seoDescription: "UAE domestic minimum top-up tax explained, including the EUR 750 million group threshold and why it is separate from normal corporate tax for small businesses.",
    },
    answers: [
      {
        id: "a-ae-domestic-minimum-top-up-tax",
        questionId: "q-ae-domestic-minimum-top-up-tax",
        articleContent: {
          sections: [
            {
              heading: "The UAE DMTT is aimed at very large multinational groups, not ordinary local startups",
              body: `The Ministry of Finance's top-up-tax page says the UAE domestic minimum top-up tax applies to constituent entities of multinational enterprise groups operating in the UAE with annual global revenues of EUR 750 million or more in at least two of the four preceding financial years. That immediately tells you the regime is not written for the average local founder or ordinary SME.`,
            },
            {
              heading: "It is part of the Pillar Two minimum-tax conversation, not a replacement for the normal UAE corporate tax bands",
              body: `The same page explains that the UAE DMTT is aligned closely with the OECD GloBE framework and has been effective for financial years starting on or after 1 January 2025. That puts it in a very different lane from the mainstream UAE corporate-tax discussion about the 0% and 9% bands. The two regimes can both be part of the UAE tax landscape, but they are not aimed at the same population.`,
            },
            {
              heading: "Treating top-up tax as a universal UAE tax headline only confuses smaller businesses",
              body: `This is why founder conversations go wrong when every tax reform gets compressed into one alarming story. The DMTT is about large multinational groups and minimum-tax alignment. This answer is educational only and not tax advice. A small or mid-sized UAE business should first solve its ordinary corporate-tax scope and filing obligations before assuming the Pillar Two layer belongs to it at all.`,
            },
          ],
          keyTakeaways: [
            "The UAE DMTT is aimed at multinational groups with annual global revenues of at least EUR 750 million.",
            "It applies to constituent entities operating in the UAE that fall within that Pillar Two scope.",
            "The regime has been effective for financial years starting on or after 1 January 2025.",
            "It is separate from the mainstream UAE corporate-tax discussion for ordinary startups and SMEs.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-17T10:00:00.000Z",
        sources: [
          {
            label: "Top-up Tax",
            url: "https://mof.gov.ae/en/public-finance/tax/top-up-tax/",
          },
          {
            label: "Corporate Tax in the UAE",
            url: "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/",
          },
        ],
      },
    ],
  },
];
