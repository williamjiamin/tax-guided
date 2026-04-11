// Q&A content: GILTI, Subpart F, BEAT, FDII, CFC rules, and international corporate tax
// for foreign-owned U.S. entities

import type { QAThread, QAAuthor } from "./qa-catalog";

const OFFICIAL_AUTHOR: QAAuthor = {
  displayName: "ForeignLLCTax Official",
  avatarSeed: "rippa-official",
  isOfficial: true,
  badge: "expert",
};

export const GILTI_THREADS: QAThread[] = [

  // =====================================================
  // Q&A #1: GILTI Overview
  // =====================================================
  {
    question: {
      id: "q-gilti-001",
      isFeatured: true,
      title: "What is GILTI and how does it affect U.S. shareholders of foreign corporations?",
      body: "I keep hearing about GILTI in the context of international tax reform. I'm a U.S. person who owns a foreign company, and someone told me I might owe tax on income my foreign company earns even if I never take a dividend. That sounds crazy to me. Can someone explain what GILTI actually is, how it works at a high level, and who it applies to? I want to understand the basics before I talk to my CPA.",
      author: {
        displayName: "Daniel R.",
        avatarSeed: "gilti-curious-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["GILTI", "international tax", "CFC", "Tax Cuts and Jobs Act", "IRC 951A", "foreign corporation"],
      postedAt: "2026-01-15T09:30:00Z",
      viewCount: 2847,
      answerCount: 1,
      status: "answered",
      seoTitle: "GILTI Explained: Global Intangible Low-Taxed Income Overview",
      seoDescription: "What is GILTI? Learn how Global Intangible Low-Taxed Income works under IRC 951A, who must report it, and how it taxes U.S. shareholders of controlled foreign corporations.",
    },
    answers: [
      {
        id: "a-gilti-001-1",
        questionId: "q-gilti-001",
        articleContent: {
          sections: [
            {
              heading: "What GILTI is and why Congress created it",
              body: "GILTI stands for Global Intangible Low-Taxed Income. It was enacted by the Tax Cuts and Jobs Act (TCJA) in 2017 under IRC Section 951A. Before GILTI, U.S. shareholders of controlled foreign corporations (CFCs) could defer U.S. tax on most active business income earned abroad indefinitely, as long as they did not repatriate it as a dividend. GILTI closed this deferral by requiring U.S. shareholders to include a deemed amount of CFC income in their taxable income each year, regardless of whether any actual distribution is made. The name is somewhat misleading — GILTI is not limited to intangible income. It is essentially a minimum tax on the foreign earnings of CFCs that exceed a routine return on tangible business assets.",
            },
            {
              heading: "Who is subject to GILTI",
              body: "GILTI applies to any \"U.S. shareholder\" of a CFC. Under IRC 951(b), a U.S. shareholder is any U.S. person who owns (directly, indirectly, or constructively) 10% or more of the total combined voting power or value of a foreign corporation's stock. A CFC is a foreign corporation in which U.S. shareholders collectively own more than 50% of the vote or value. This means GILTI can apply to U.S. citizens, residents, domestic corporations, domestic partnerships, and certain trusts and estates that own shares in CFCs meeting these thresholds.",
            },
            {
              heading: "How GILTI is calculated at a high level",
              body: "GILTI is computed as the excess of a U.S. shareholder's \"net CFC tested income\" over their \"net deemed tangible income return\" (DTIR). Net CFC tested income is the aggregate of tested income from all CFCs the shareholder owns, minus any tested losses. The DTIR equals 10% of the aggregate qualified business asset investment (QBAI) — essentially the adjusted basis of depreciable tangible property used in the CFC's trade or business — minus certain interest expense. If tested income exceeds the 10% deemed return on tangible assets, the excess is GILTI. This structure is designed so that routine returns on tangible assets are exempt, while \"excess\" earnings (presumed to be from intangibles or low-taxed operations) are taxed currently.",
            },
            {
              heading: "How GILTI is taxed for corporations vs. individuals",
              body: "Domestic C corporations that are U.S. shareholders can claim a Section 250 deduction equal to 50% of their GILTI inclusion (37.5% for tax years beginning after 2025), and they can also claim foreign tax credits under Section 960 for 80% of foreign taxes paid by the CFC attributable to GILTI. This effectively reduces the corporate GILTI rate to about 10.5% (rising to 13.125% after 2025). Individual U.S. shareholders, however, do not get the Section 250 deduction or the Section 960 deemed-paid foreign tax credits by default. They are taxed at their ordinary income tax rate (up to 37%), which makes GILTI far more expensive for individuals unless they make a Section 962 election to be taxed at corporate rates on their CFC inclusions.",
            },
            {
              heading: "GILTI reporting requirements",
              body: "U.S. shareholders subject to GILTI must report it on Form 8992 (U.S. Shareholder Calculation of GILTI). Each CFC's tested income and QBAI are reported on Form 5471, Schedule I-1. The GILTI amount flows through to the shareholder's income tax return — Form 1120 for corporations, or Schedule 1 of Form 1040 for individuals. Failure to properly report CFC income, including GILTI, can result in substantial penalties and extended statutes of limitation.",
            },
            {
              heading: "Common misconceptions about GILTI",
              body: "First, GILTI is not only about intangible income — it captures any CFC income that exceeds a 10% return on tangible assets, regardless of whether that income is from intangibles, services, or other sources. Second, GILTI applies even if no cash is distributed to the U.S. shareholder — it is a deemed inclusion. Third, foreign tax credits can offset GILTI but are limited (only 80% of foreign taxes, and a separate GILTI foreign tax credit basket applies). Finally, GILTI is computed on an aggregate basis across all of a shareholder's CFCs, so tested losses from one CFC can offset tested income from another.",
            },
          ],
          keyTakeaways: [
            "GILTI is a minimum tax on CFC earnings exceeding a 10% deemed return on tangible assets, enacted under IRC 951A",
            "It applies to any U.S. shareholder owning 10%+ of a CFC (by vote or value)",
            "Corporate shareholders get a 50% Section 250 deduction and deemed-paid foreign tax credits; individuals generally do not",
            "GILTI is reported on Form 8992 and flows to the shareholder's income tax return",
            "Individual shareholders can make a Section 962 election to be taxed at corporate rates on GILTI",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-16T11:00:00Z",
        sources: [
          { label: "IRS — Global Intangible Low-Taxed Income (GILTI)", url: "https://www.irs.gov/individuals/international-taxpayers/global-intangible-low-taxed-income-gilti" },
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
          { label: "IRS — About Form 8992", url: "https://www.irs.gov/forms-pubs/about-form-8992" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #2: Does GILTI affect foreign-owned U.S. LLCs?
  // =====================================================
  {
    question: {
      id: "q-gilti-002",
      isFeatured: true,
      title: "I'm a foreign person owning a U.S. LLC — do I need to worry about GILTI?",
      body: "I'm a non-U.S. resident who owns a single-member LLC in the United States. My LLC provides consulting services to clients in the U.S. and abroad. A friend told me about GILTI and said I should check if it applies to me. But everything I read says GILTI is for U.S. shareholders of foreign corporations. I'm a foreign person owning a U.S. entity — isn't that the opposite? Do I need to worry about GILTI at all, or is this a non-issue for someone in my situation?",
      author: {
        displayName: "Yuki M.",
        avatarSeed: "foreign-llc-gilti-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["GILTI", "foreign-owned LLC", "non-resident", "disregarded entity", "U.S. LLC"],
      postedAt: "2026-01-22T14:15:00Z",
      viewCount: 2134,
      answerCount: 1,
      status: "answered",
      seoTitle: "Does GILTI Apply to Foreign-Owned U.S. LLCs?",
      seoDescription: "Foreign owners of U.S. LLCs often wonder if GILTI applies to them. Learn why GILTI targets U.S. shareholders of foreign corporations and when it might indirectly affect foreign LLC owners.",
    },
    answers: [
      {
        id: "a-gilti-002-1",
        questionId: "q-gilti-002",
        articleContent: {
          sections: [
            {
              heading: "GILTI does not directly apply to foreign persons owning U.S. LLCs",
              body: "GILTI under IRC 951A specifically targets \"U.S. shareholders\" of controlled foreign corporations. A U.S. shareholder is defined as a U.S. person — meaning a U.S. citizen, resident alien, domestic partnership, domestic corporation, or domestic trust/estate. If you are a nonresident alien (a person who is neither a U.S. citizen nor a U.S. resident for tax purposes), you are not a U.S. person. Therefore, GILTI does not apply to you directly in your capacity as a foreign owner of a U.S. LLC.",
            },
            {
              heading: "Why the confusion arises: the direction of ownership matters",
              body: "GILTI concerns outbound investment — U.S. persons investing in foreign companies. Your situation is the reverse: you are a foreign person investing in a U.S. entity. The U.S. tax rules that apply to your situation are the inbound rules — principally the rules for taxation of foreign persons earning U.S.-source income (such as effectively connected income under IRC 871/882) and reporting requirements like Form 5472. GILTI simply does not apply in the inbound direction.",
            },
            {
              heading: "When GILTI could become relevant for a foreign LLC owner",
              body: "There are narrow scenarios where GILTI might become indirectly relevant. If your U.S. LLC owns shares in a foreign corporation (say, an operating company in your home country), and if the LLC is treated as a domestic entity for U.S. tax purposes (e.g., a multi-member LLC that has not elected to be treated as a foreign entity), then the LLC itself could be a U.S. shareholder of a CFC, and GILTI could apply to the LLC. However, for a single-member LLC owned by a foreign person, the LLC is a disregarded entity — it has no separate tax identity — so the foreign owner's status controls. Since the owner is a foreign person, GILTI still does not apply.",
            },
            {
              heading: "What international tax rules DO apply to you",
              body: "As a foreign person owning a U.S. LLC, your primary U.S. tax obligations revolve around: (1) Form 5472 reporting for transactions between the LLC and its foreign owner or related parties, attached to a pro forma Form 1120; (2) any effectively connected income (ECI) the LLC earns from U.S. trade or business, reportable on Form 1040-NR or Form 1120-F depending on entity classification; (3) potential branch profits tax under IRC 884 if the LLC is engaged in a U.S. trade or business; and (4) transfer pricing compliance if the LLC transacts with related foreign entities. These inbound rules are your focus, not GILTI.",
            },
            {
              heading: "A note on changing residency status",
              body: "If you ever become a U.S. tax resident (by obtaining a green card or meeting the substantial presence test), the analysis changes entirely. As a U.S. person, you would be subject to worldwide taxation, and any foreign corporations you control could become CFCs subject to GILTI. Many foreign entrepreneurs who relocate to the U.S. are surprised to find that their home-country companies suddenly generate GILTI inclusions. Pre-immigration tax planning is essential if you are considering a move to the U.S.",
            },
          ],
          keyTakeaways: [
            "GILTI does not directly apply to nonresident aliens owning U.S. LLCs — it targets U.S. shareholders of foreign corporations",
            "The direction of ownership matters: GILTI is an outbound rule, not an inbound rule",
            "Foreign-owned U.S. LLCs are subject to inbound rules: Form 5472, ECI taxation, branch profits tax, and transfer pricing",
            "If you become a U.S. tax resident, foreign companies you own may become CFCs subject to GILTI",
            "Pre-immigration tax planning is critical if you hold foreign corporate interests and plan to relocate to the U.S.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-23T10:30:00Z",
        sources: [
          { label: "IRS — Global Intangible Low-Taxed Income (GILTI)", url: "https://www.irs.gov/individuals/international-taxpayers/global-intangible-low-taxed-income-gilti" },
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
          { label: "IRS — About Form 5472", url: "https://www.irs.gov/forms-pubs/about-form-5472" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #3: GILTI Calculation Details
  // =====================================================
  {
    question: {
      id: "q-gilti-003",
      isFeatured: false,
      title: "How do you calculate GILTI? What are tested income, QBAI, and net DTIR?",
      body: "I understand GILTI at a high level but I'm struggling with the actual calculation. My CPA mentioned terms like 'tested income,' 'QBAI,' and 'net deemed tangible income return' and I got lost. I own a U.S. holding company that has two CFCs — one is profitable and the other is running at a loss. Can someone walk me through the mechanics of how GILTI is actually computed? And does the loss from one CFC offset the income from the other?",
      author: {
        displayName: "Kevin W.",
        avatarSeed: "gilti-calc-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["GILTI", "tested income", "QBAI", "DTIR", "CFC", "calculation", "IRC 951A"],
      postedAt: "2026-02-05T16:45:00Z",
      viewCount: 1923,
      answerCount: 1,
      status: "answered",
      seoTitle: "GILTI Calculation: Tested Income, QBAI, and Net DTIR Explained",
      seoDescription: "Step-by-step guide to calculating GILTI under IRC 951A. Understand tested income, qualified business asset investment (QBAI), net deemed tangible income return, and how losses offset income across CFCs.",
    },
    answers: [
      {
        id: "a-gilti-003-1",
        questionId: "q-gilti-003",
        articleContent: {
          sections: [
            {
              heading: "Step 1: Determine each CFC's tested income or tested loss",
              body: "For each CFC, you start with the corporation's gross income and subtract allocable deductions. You then exclude certain categories of income that are already taxed under other provisions: Subpart F income, income effectively connected with a U.S. trade or business, dividends received from related persons, and certain foreign oil and gas extraction income. What remains is the CFC's \"tested income\" (if positive) or \"tested loss\" (if negative). This computation is done on a per-CFC basis and reported on Form 5471, Schedule I-1.",
            },
            {
              heading: "Step 2: Aggregate tested income and tested loss across all CFCs",
              body: "The U.S. shareholder aggregates the tested income from all CFCs with positive tested income to arrive at \"aggregate tested income.\" Separately, tested losses from loss CFCs are aggregated. The \"net CFC tested income\" is the aggregate tested income reduced (but not below zero) by the aggregate tested loss. This is a key feature of GILTI — losses from one CFC can offset income from another, but only tested losses (not Subpart F losses or other excluded categories).",
            },
            {
              heading: "Step 3: Calculate qualified business asset investment (QBAI)",
              body: "QBAI is the average of the adjusted basis (using the alternative depreciation system, or ADS, under IRC 168(g)) of specified tangible property used in the CFC's trade or business at the end of each quarter of the CFC's tax year. Specified tangible property includes depreciable assets such as machinery, equipment, buildings, and other physical business assets. Land and inventory are excluded. QBAI is computed separately for each CFC with positive tested income and then aggregated at the shareholder level. Only CFCs with tested income contribute to QBAI — loss CFCs do not.",
            },
            {
              heading: "Step 4: Compute net deemed tangible income return (DTIR)",
              body: "The net DTIR equals 10% of aggregate QBAI, minus the shareholder's pro rata share of \"specified interest expense\" (certain interest expense of CFCs with tested income that is allocable to tested income and not allocable to Subpart F income). The 10% rate represents the deemed routine return that Congress considered attributable to tangible business assets. The specified interest expense reduction ensures that leveraged asset bases do not inflate the exemption.",
            },
            {
              heading: "Step 5: GILTI equals net CFC tested income minus net DTIR",
              body: "The final GILTI inclusion amount is simply: net CFC tested income minus net DTIR. If the result is zero or negative, there is no GILTI inclusion for that year. Importantly, GILTI cannot be negative — there is no carryover of excess DTIR to future years. This means that in a year when your CFCs have high tangible asset bases and relatively low income, you may have zero GILTI, but you cannot bank that excess exemption for future high-income years.",
            },
            {
              heading: "Example with two CFCs",
              body: "Suppose you own CFC-A with $500,000 of tested income and $1,000,000 of QBAI, and CFC-B with a tested loss of $100,000. Net CFC tested income = $500,000 - $100,000 = $400,000. Aggregate QBAI = $1,000,000 (only CFC-A contributes since CFC-B has a tested loss). Assume zero specified interest expense. Net DTIR = 10% x $1,000,000 = $100,000. GILTI inclusion = $400,000 - $100,000 = $300,000. This $300,000 is included in the U.S. shareholder's gross income for the year.",
            },
          ],
          keyTakeaways: [
            "Tested income is CFC gross income minus deductions, excluding Subpart F, ECI, related dividends, and oil/gas income",
            "Tested losses from loss CFCs offset tested income from profitable CFCs on an aggregate basis",
            "QBAI is the average adjusted basis (ADS) of depreciable tangible property — only from CFCs with positive tested income",
            "Net DTIR = 10% of aggregate QBAI minus specified interest expense — this is the exempt amount",
            "GILTI = net CFC tested income minus net DTIR; it cannot be negative and does not carry forward",
            "The calculation is reported on Form 8992 with supporting data from Form 5471, Schedule I-1",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-06T14:00:00Z",
        sources: [
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
          { label: "IRS — About Form 8992", url: "https://www.irs.gov/forms-pubs/about-form-8992" },
          { label: "IRS — About Form 5471", url: "https://www.irs.gov/forms-pubs/about-form-5471" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #4: Form 8992 Filing Requirements
  // =====================================================
  {
    question: {
      id: "q-gilti-004",
      isFeatured: false,
      title: "When do I need to file Form 8992 for GILTI, and what schedules are required?",
      body: "My accountant says I need to file Form 8992 because I'm a U.S. shareholder of a CFC. But I'm confused about when this form is actually required. Is it only needed if I have a positive GILTI amount, or do I need to file it even if my GILTI calculation comes to zero? Also, which schedules of Form 5471 feed into Form 8992? I want to understand the paperwork before my tax return deadline.",
      author: {
        displayName: "Patricia L.",
        avatarSeed: "form8992-filer-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["Form 8992", "GILTI", "Form 5471", "filing requirement", "CFC reporting"],
      postedAt: "2026-02-12T11:20:00Z",
      viewCount: 1456,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 8992 Filing Requirements for GILTI Reporting",
      seoDescription: "Learn when Form 8992 is required for GILTI reporting, which Form 5471 schedules support it, and how to avoid penalties for incomplete international tax filings.",
    },
    answers: [
      {
        id: "a-gilti-004-1",
        questionId: "q-gilti-004",
        articleContent: {
          sections: [
            {
              heading: "Who must file Form 8992",
              body: "Form 8992 must be filed by any U.S. shareholder (as defined under IRC 951(b)) of one or more CFCs who has a GILTI inclusion amount for the tax year, or who needs to compute their GILTI to determine whether they have an inclusion. In practice, if you are a 10%-or-greater U.S. shareholder of a CFC and the CFC has any tested income, you should file Form 8992 to document your GILTI calculation, even if the result is zero after subtracting the net DTIR. Filing the form demonstrates compliance and supports the numbers on your income tax return.",
            },
            {
              heading: "Form 8992 and its relationship to Form 5471",
              body: "Form 8992 draws data from Form 5471, which is the information return for U.S. persons who are officers, directors, or shareholders of certain foreign corporations. Specifically, Schedule I-1 of Form 5471 reports each CFC's tested income (or tested loss) and QBAI. The totals from Schedule I-1 across all of your CFCs flow into Form 8992. You must file a separate Form 5471 for each CFC, but only one Form 8992 that aggregates the GILTI computation across all CFCs.",
            },
            {
              heading: "When to file and where to attach",
              body: "Form 8992 is attached to the U.S. shareholder's income tax return — Form 1120 for domestic corporations, Form 1040 for individuals, or Form 1065 for partnerships. It is due on the same date as the underlying tax return, including extensions. There is no separate filing deadline. The GILTI inclusion amount computed on Form 8992 is reported as other income on the relevant return.",
            },
            {
              heading: "Penalties for non-filing",
              body: "While Form 8992 itself does not carry a standalone penalty, failure to file the underlying Form 5471 does. The penalty for failure to file Form 5471 is $10,000 per form, per year, with additional penalties of $10,000 per month (up to $60,000) for continued non-filing after IRS notice. Since Form 5471 provides the data that feeds Form 8992, non-compliance with Form 5471 effectively makes it impossible to properly report GILTI. Additionally, underreporting income due to an incorrect or missing GILTI calculation can trigger accuracy-related penalties under IRC 6662.",
            },
            {
              heading: "Common filing mistakes to avoid",
              body: "Frequent errors include: (1) failing to file Form 5471 Schedule I-1 for each CFC, which is required even if the CFC has a tested loss; (2) not aggregating QBAI correctly when multiple CFCs are involved; (3) forgetting that the specified interest expense reduction applies to the DTIR calculation; and (4) confusing GILTI tested income with Subpart F income — they are separate categories reported on different lines of Form 5471 Schedule I. Ensure your CPA or tax software handles the aggregation correctly across all CFCs.",
            },
          ],
          keyTakeaways: [
            "File Form 8992 if you are a U.S. shareholder of any CFC with tested income — even if your GILTI computation results in zero",
            "Form 5471 Schedule I-1 for each CFC provides the tested income, tested loss, and QBAI data that feeds Form 8992",
            "Form 8992 is attached to your income tax return (1120, 1040, or 1065) and follows the same filing deadline",
            "Failure to file Form 5471 carries a $10,000 penalty per form, per year, with escalating penalties after IRS notice",
            "Ensure proper aggregation of tested income, tested losses, and QBAI across all CFCs on Form 8992",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-13T09:45:00Z",
        sources: [
          { label: "IRS — About Form 8992", url: "https://www.irs.gov/forms-pubs/about-form-8992" },
          { label: "IRS — About Form 5471", url: "https://www.irs.gov/forms-pubs/about-form-5471" },
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #5: GILTI High-Tax Exclusion
  // =====================================================
  {
    question: {
      id: "q-gilti-005",
      isFeatured: false,
      title: "What is the GILTI high-tax exclusion, and how do I elect it?",
      body: "My CFC is in a country with a 25% corporate tax rate. My tax advisor mentioned that there's a 'high-tax exclusion' for GILTI that could mean I don't have to include this income. How does it work? Is it automatic or do I need to make an election? And what's the threshold — what tax rate counts as 'high' enough to qualify?",
      author: {
        displayName: "Raj P.",
        avatarSeed: "gilti-hte-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["GILTI", "high-tax exclusion", "CFC", "foreign tax rate", "election", "Treas. Reg. 1.951A-2"],
      postedAt: "2026-02-20T13:00:00Z",
      viewCount: 1678,
      answerCount: 1,
      status: "answered",
      seoTitle: "GILTI High-Tax Exclusion: Eligibility and Election",
      seoDescription: "The GILTI high-tax exclusion lets CFC income taxed above 18.9% be excluded from GILTI. Learn the effective tax rate threshold, how to elect, and whether it benefits your situation.",
    },
    answers: [
      {
        id: "a-gilti-005-1",
        questionId: "q-gilti-005",
        articleContent: {
          sections: [
            {
              heading: "Overview of the GILTI high-tax exclusion",
              body: "The GILTI high-tax exclusion (HTE) allows a CFC's tested income to be excluded from the GILTI calculation if the income is subject to a sufficiently high effective foreign tax rate. The exclusion is found in Treasury Regulations Section 1.951A-2(c)(7). The theory is that if the income is already taxed at or above a threshold rate abroad, there is no need to impose the additional U.S. minimum tax that GILTI represents. The HTE is elective — it is not automatic. The U.S. shareholder (or the controlling domestic shareholder) must affirmatively elect it.",
            },
            {
              heading: "The effective tax rate threshold",
              body: "The threshold for the high-tax exclusion is 90% of the maximum U.S. corporate tax rate. With the current corporate rate at 21%, the threshold is 90% x 21% = 18.9%. If a CFC's tested income item is subject to an effective foreign tax rate of 18.9% or more, it qualifies for the exclusion. The effective tax rate is computed on a tested-unit basis — meaning it is calculated for each qualified business unit (QBU) or group of related activities within a CFC, not on a blended, entity-wide basis. This QBU-level computation can result in some income qualifying and other income not qualifying within the same CFC.",
            },
            {
              heading: "How to make the election",
              body: "The GILTI HTE election is made by the \"controlling domestic shareholder\" (generally the U.S. shareholder with the highest ownership percentage) and is binding on all U.S. shareholders of the CFC. The election is made on an annual basis and applies to all CFCs controlled by the electing shareholder group. It is made by attaching a statement to the timely filed (including extensions) income tax return identifying the election under Treas. Reg. 1.951A-2(c)(7). Once made, it can be revoked in a subsequent year, but the IRS may impose consistency requirements.",
            },
            {
              heading: "When the high-tax exclusion helps and when it does not",
              body: "The HTE is most beneficial for individual U.S. shareholders who do not have access to the Section 250 deduction or deemed-paid foreign tax credits (unless they make a Section 962 election). By excluding high-taxed income from GILTI, the individual avoids being taxed at ordinary rates on income already taxed at 18.9%+ abroad. For corporate shareholders, the benefit is more nuanced — the Section 250 deduction and foreign tax credits may already reduce the effective U.S. tax on GILTI to near zero, and electing the HTE removes the income from the GILTI basket, which means the associated foreign taxes cannot be credited against other GILTI income. Careful modeling is needed.",
            },
            {
              heading: "Interaction with Subpart F high-tax exception",
              body: "The GILTI HTE should not be confused with the Subpart F high-tax exception under IRC 954(b)(4), although they share a similar concept. The Subpart F exception excludes income from Subpart F if it is subject to an effective foreign tax rate exceeding 90% of the maximum U.S. corporate rate (the same 18.9% threshold). However, income excluded from Subpart F under this exception could then fall into GILTI tested income — unless the GILTI HTE is also elected. Taxpayers should coordinate both elections carefully to avoid unintended results.",
            },
          ],
          keyTakeaways: [
            "The GILTI high-tax exclusion is elective and excludes CFC tested income taxed at an effective foreign rate of 18.9% or higher",
            "The effective tax rate is computed per tested unit (QBU-level), not on an entity-wide blended basis",
            "The controlling domestic shareholder makes the election annually; it binds all U.S. shareholders of the CFC",
            "Individual shareholders often benefit most; corporate shareholders should model the trade-off with Section 250 and foreign tax credits",
            "Coordinate the GILTI HTE with the Subpart F high-tax exception under IRC 954(b)(4) to avoid gaps",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-21T10:00:00Z",
        sources: [
          { label: "IRS — Global Intangible Low-Taxed Income (GILTI)", url: "https://www.irs.gov/individuals/international-taxpayers/global-intangible-low-taxed-income-gilti" },
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
          { label: "IRC Section 250 — FDII and GILTI Deduction", url: "https://www.law.cornell.edu/uscode/text/26/250" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #6: Section 250 Deduction for GILTI
  // =====================================================
  {
    question: {
      id: "q-gilti-006",
      isFeatured: false,
      title: "How does the Section 250 deduction reduce tax on GILTI for corporations?",
      body: "I own a U.S. C-corp that has CFC subsidiaries. My understanding is that there's a deduction under Section 250 that lowers the effective tax rate on GILTI for domestic corporations. How exactly does this deduction work? Is it 50% of the GILTI amount? And I heard the deduction percentage is changing soon — can you confirm the timeline?",
      author: {
        displayName: "Nina S.",
        avatarSeed: "sec250-corp-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["Section 250", "GILTI", "deduction", "corporate tax", "FDII", "TCJA"],
      postedAt: "2026-02-28T08:30:00Z",
      viewCount: 1245,
      answerCount: 1,
      status: "answered",
      seoTitle: "Section 250 Deduction for GILTI: How It Works for Corporations",
      seoDescription: "The Section 250 deduction reduces the effective corporate tax rate on GILTI to about 10.5%. Learn how it works, the 2026 rate change, and why individuals don't qualify.",
    },
    answers: [
      {
        id: "a-gilti-006-1",
        questionId: "q-gilti-006",
        articleContent: {
          sections: [
            {
              heading: "The Section 250 deduction for GILTI",
              body: "IRC Section 250 provides a deduction to domestic C corporations (not individuals, partnerships, or S corporations) for two categories of income: GILTI and FDII (foreign-derived intangible income). For GILTI specifically, the deduction equals 50% of the corporation's GILTI inclusion amount (after certain adjustments). This deduction effectively reduces the corporate tax on GILTI from 21% to approximately 10.5% — the intended minimum tax rate on foreign earnings under the TCJA framework.",
            },
            {
              heading: "The 2026 rate change",
              body: "Under the original TCJA legislation, the Section 250 deduction for GILTI is scheduled to decrease from 50% to 37.5% for tax years beginning after December 31, 2025. This means that for calendar-year corporations, starting in the 2026 tax year, the effective corporate rate on GILTI will increase from 10.5% to approximately 13.125% (21% x (1 - 37.5%) = 13.125%). Congress may modify this timeline through subsequent legislation, but as of now the reduction is set to take effect.",
            },
            {
              heading: "Taxable income limitation",
              body: "The Section 250 deduction cannot exceed the domestic corporation's taxable income (determined without regard to the Section 250 deduction itself). If the corporation's taxable income is less than the sum of its GILTI inclusion and FDII, the deduction is proportionally reduced. This limitation prevents the deduction from creating or increasing a net operating loss. Corporations with low domestic income relative to their GILTI may find the Section 250 deduction partially limited.",
            },
            {
              heading: "Interaction with foreign tax credits",
              body: "In addition to the Section 250 deduction, domestic corporations can claim deemed-paid foreign tax credits under Section 960 for foreign taxes paid by their CFCs that are properly allocable to GILTI. However, only 80% of the foreign taxes are creditable (the 20% haircut under IRC 960(d)). These credits are placed in a separate GILTI foreign tax credit basket. The combination of the 50% deduction and the 80% deemed-paid credits means that for most corporations with CFCs in countries with tax rates at or above 13.125%, the net U.S. tax on GILTI is effectively zero.",
            },
            {
              heading: "Why individuals do not get Section 250",
              body: "The Section 250 deduction is available only to domestic C corporations. Individual U.S. shareholders of CFCs who have GILTI inclusions are taxed at their ordinary income tax rate (up to 37%) without any Section 250 deduction. This creates a significant disparity. The workaround for individuals is the Section 962 election, which allows them to be taxed at corporate rates on their CFC inclusions and claim deemed-paid foreign tax credits — effectively replicating the corporate treatment. However, the Section 962 election has its own complexities, particularly around previously taxed income distributions.",
            },
          ],
          keyTakeaways: [
            "Section 250 gives domestic C corporations a 50% deduction on GILTI, reducing the effective rate to about 10.5%",
            "Starting in tax years after December 31, 2025, the deduction drops to 37.5% (effective rate rises to about 13.125%)",
            "The deduction is limited to the corporation's taxable income — it cannot create a net operating loss",
            "Combined with 80% deemed-paid foreign tax credits, most corporations with CFCs in moderate-tax countries owe little net U.S. tax on GILTI",
            "Individuals do not get Section 250; the Section 962 election is the alternative for replicating corporate treatment",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-01T12:00:00Z",
        sources: [
          { label: "IRC Section 250 — FDII and GILTI Deduction", url: "https://www.law.cornell.edu/uscode/text/26/250" },
          { label: "IRS — About Form 8993 (Section 250 Deduction)", url: "https://www.irs.gov/forms-pubs/about-form-8993" },
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #7: Subpart F Income Overview
  // =====================================================
  {
    question: {
      id: "q-gilti-007",
      isFeatured: true,
      title: "What is Subpart F income and how does it apply to foreign-owned business structures?",
      body: "I've been reading about Subpart F income in the context of CFC rules and I'm confused about how it fits in with GILTI. I'm a U.S. citizen running a business through a foreign corporation. Some of the corporation's income seems to fall into Subpart F categories. Can someone explain what Subpart F actually covers, why it was created, and how it differs from GILTI? I want to understand the full picture of how my foreign corporation's income gets taxed.",
      author: {
        displayName: "Robert H.",
        avatarSeed: "subpartf-overview-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["Subpart F", "CFC", "IRC 952", "foreign corporation", "passive income", "international tax"],
      postedAt: "2026-01-30T10:15:00Z",
      viewCount: 2456,
      answerCount: 1,
      status: "answered",
      seoTitle: "Subpart F Income Overview: Categories, Rules, and CFC Impact",
      seoDescription: "Understand Subpart F income under IRC 951-964: what categories of CFC income are taxed currently, how it differs from GILTI, and which foreign-owned structures are affected.",
    },
    answers: [
      {
        id: "a-gilti-007-1",
        questionId: "q-gilti-007",
        articleContent: {
          sections: [
            {
              heading: "Why Subpart F exists",
              body: "Subpart F (IRC Sections 951-964) has been part of the Internal Revenue Code since 1962, long before GILTI was enacted. Congress created Subpart F to prevent U.S. shareholders from deferring U.S. tax on certain types of easily movable, passive, or base-erosion income by parking it in controlled foreign corporations. Without Subpart F, a U.S. person could set up a corporation in a low-tax jurisdiction, earn investment income or intercompany service fees through it, and defer U.S. taxation indefinitely. Subpart F requires current inclusion of these targeted income categories regardless of whether any distribution is made.",
            },
            {
              heading: "The main categories of Subpart F income",
              body: "Subpart F income under IRC 952 includes several categories: (1) Foreign base company income under IRC 954, which itself includes foreign personal holding company income (dividends, interest, royalties, rents, and certain gains), foreign base company sales income (buy-sell income involving related persons where the property is manufactured and sold outside the CFC's country of incorporation), and foreign base company services income (services performed for or on behalf of a related person outside the CFC's country of incorporation); (2) insurance income from insuring risks outside the CFC's country of organization; and (3) certain international boycott-related income, illegal bribes and kickbacks, and income from countries subject to sanctions.",
            },
            {
              heading: "How Subpart F income is taxed",
              body: "When a CFC earns Subpart F income, each U.S. shareholder (10%+ by vote or value) must include their pro rata share in their gross income for the tax year in which the CFC's tax year ends. This inclusion is taxed at the shareholder's ordinary rate — the full corporate rate for C corporations, or the individual's marginal rate for individuals. There is no special deduction like Section 250 for Subpart F income (unlike GILTI). However, corporate shareholders can claim deemed-paid foreign tax credits under IRC 960(a) for foreign taxes paid by the CFC on the Subpart F income.",
            },
            {
              heading: "Subpart F and foreign-owned structures",
              body: "If you are a foreign person (nonresident alien), Subpart F does not directly apply to you because you are not a U.S. person and therefore cannot be a U.S. shareholder under IRC 951(b). However, if your business structure involves a U.S. entity (like a domestic corporation or partnership) that in turn owns a foreign corporation, Subpart F applies to the U.S. entity. For example, if a foreign individual owns a U.S. C-corp that owns a CFC, the U.S. C-corp is the U.S. shareholder and must include Subpart F income from the CFC. Understanding the full ownership chain is critical.",
            },
            {
              heading: "Key exceptions and limitations",
              body: "Several exceptions can exclude income from Subpart F: (1) the de minimis rule — if total foreign base company income and insurance income is less than the lesser of 5% of gross income or $1 million, none of it is treated as Subpart F income; (2) the full inclusion rule — if these amounts exceed 70% of gross income, all of the CFC's gross income is Subpart F; (3) the same-country exception for certain sales and services income; (4) the high-tax exception under IRC 954(b)(4), which excludes items taxed at an effective rate above 90% of the U.S. corporate rate (18.9%); and (5) the active rents and royalties exception under IRC 954(c)(2).",
            },
          ],
          keyTakeaways: [
            "Subpart F has existed since 1962 and targets passive, mobile, or base-erosion income earned by CFCs",
            "Key categories include foreign personal holding company income, foreign base company sales income, and services income",
            "U.S. shareholders must include their pro rata share of Subpart F income currently, with no Section 250 deduction",
            "Subpart F does not directly apply to foreign persons, but does apply to U.S. entities in the ownership chain",
            "Exceptions include the de minimis rule, high-tax exception (18.9% threshold), and same-country exceptions",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-31T14:30:00Z",
        sources: [
          { label: "IRS — Controlled Foreign Corporations", url: "https://www.irs.gov/individuals/international-taxpayers/controlled-foreign-corporations" },
          { label: "IRC Section 952 — Subpart F Income Defined", url: "https://www.law.cornell.edu/uscode/text/26/952" },
          { label: "IRC Section 954 — Foreign Base Company Income", url: "https://www.law.cornell.edu/uscode/text/26/954" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #8: Subpart F Income Categories
  // =====================================================
  {
    question: {
      id: "q-gilti-008",
      isFeatured: false,
      title: "What specific categories of income are considered Subpart F income?",
      body: "My CFC earns a mix of income — some from selling products, some from licensing IP, some from investing excess cash, and some from providing consulting services to related companies. I need to figure out which of these fall into Subpart F. Can you break down each category of Subpart F income with examples? I especially want to understand foreign personal holding company income since that seems to be the broadest bucket.",
      author: {
        displayName: "Andreas K.",
        avatarSeed: "subpartf-categories-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["Subpart F", "FPHCI", "foreign base company income", "sales income", "services income", "IRC 954"],
      postedAt: "2026-03-04T09:00:00Z",
      viewCount: 1567,
      answerCount: 1,
      status: "answered",
      seoTitle: "Subpart F Income Categories: FPHCI, Sales, and Services",
      seoDescription: "Detailed breakdown of Subpart F income categories under IRC 954: foreign personal holding company income, foreign base company sales income, services income, and key exceptions.",
    },
    answers: [
      {
        id: "a-gilti-008-1",
        questionId: "q-gilti-008",
        articleContent: {
          sections: [
            {
              heading: "Foreign personal holding company income (FPHCI)",
              body: "FPHCI under IRC 954(c) is the broadest Subpart F category. It includes: dividends, interest, royalties, rents, and annuities; gains from the sale or exchange of property that produces FPHCI (such as stock and securities); gains from commodity transactions (with exceptions for active business hedging); gains from certain foreign currency transactions; and income equivalent to interest. Royalties from licensing your IP to a related or unrelated party, dividends on investments, and interest on excess cash deposits would all be FPHCI. However, there are important exceptions, such as rents and royalties derived in the active conduct of a trade or business (the active rents/royalties exception under IRC 954(c)(2)).",
            },
            {
              heading: "Foreign base company sales income",
              body: "Under IRC 954(d), foreign base company sales income arises from the purchase and sale of personal property involving a related person, where the property is both manufactured outside and sold for use outside the CFC's country of incorporation. For example, if your CFC is incorporated in Ireland but buys goods from a related manufacturer in China and sells them to customers in Germany, the profit is foreign base company sales income. The key triggers are: (1) a related-person transaction (either buying from or selling to a related party), and (2) the property is manufactured and destined for use outside the CFC's country. If the CFC substantially transforms the property, or if it manufactures the goods itself, the sales income may escape this category.",
            },
            {
              heading: "Foreign base company services income",
              body: "IRC 954(e) covers services income where the CFC performs services for, or on behalf of, a related person and the services are performed outside the CFC's country of incorporation. Your consulting services provided to related companies outside the CFC's home country would fall into this bucket. The rationale is to prevent companies from stripping service income to low-tax jurisdictions by routing contracts through a CFC. If the services are performed within the CFC's country of incorporation, they generally escape this category.",
            },
            {
              heading: "Insurance income",
              body: "Under IRC 953, income from insuring or reinsuring risks located outside the CFC's country of organization is Subpart F income. This targets captive insurance arrangements where a U.S. parent sets up an offshore insurance subsidiary to insure its own risks. The rules are complex and include exceptions for qualified insurance income of qualifying domestic insurance companies and certain minimum premium thresholds.",
            },
            {
              heading: "How these categories interact with your income mix",
              body: "Based on your described income: (1) Investment income from excess cash (interest, dividends) — almost certainly FPHCI; (2) IP licensing royalties — FPHCI unless the active rents/royalties exception applies; (3) Product sales — foreign base company sales income if involving a related party and cross-border (not within the CFC's home country); (4) Consulting services to related companies — foreign base company services income if performed outside the CFC's country of incorporation. Each category must be analyzed on its own facts. Income that is Subpart F is excluded from GILTI tested income, so proper categorization affects both Subpart F and GILTI computations.",
            },
            {
              heading: "Practical significance of proper categorization",
              body: "Getting the categorization right matters because Subpart F income is generally taxed more heavily than GILTI for corporate shareholders (no Section 250 deduction for Subpart F), but it is taxed at the same rate for individual shareholders (both are ordinary income). Subpart F income also has its own foreign tax credit basket (Section 904(d)(1)(A)), separate from the GILTI basket. Mischaracterizing income between Subpart F and GILTI can result in incorrect foreign tax credit computations, under- or over-payment of tax, and potential penalties.",
            },
          ],
          keyTakeaways: [
            "FPHCI is the broadest Subpart F category: dividends, interest, royalties, rents, gains, and foreign currency gains",
            "Foreign base company sales income requires a related-person transaction and cross-border manufacturing/sales outside the CFC's country",
            "Foreign base company services income targets services for related persons performed outside the CFC's home country",
            "Income categorized as Subpart F is excluded from GILTI tested income — proper categorization affects both computations",
            "Subpart F income has no Section 250 deduction (unlike GILTI) and falls into its own foreign tax credit basket",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-05T11:15:00Z",
        sources: [
          { label: "IRC Section 954 — Foreign Base Company Income", url: "https://www.law.cornell.edu/uscode/text/26/954" },
          { label: "IRS — Controlled Foreign Corporations", url: "https://www.irs.gov/individuals/international-taxpayers/controlled-foreign-corporations" },
          { label: "IRC Section 952 — Subpart F Income Defined", url: "https://www.law.cornell.edu/uscode/text/26/952" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #9: CFC Definition
  // =====================================================
  {
    question: {
      id: "q-gilti-009",
      isFeatured: false,
      title: "What makes a foreign corporation a Controlled Foreign Corporation (CFC)?",
      body: "I've been told my foreign company might be a CFC, but I'm not sure I understand the definition. I'm a U.S. green card holder and I own 30% of a company incorporated in the UK. My brother, who is also a U.S. resident, owns another 25%. The remaining 45% is owned by a British citizen who has no U.S. ties. Is our company a CFC? Does it matter whether we own voting shares or non-voting shares?",
      author: {
        displayName: "Michael T.",
        avatarSeed: "cfc-definition-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["CFC", "controlled foreign corporation", "U.S. shareholder", "IRC 957", "ownership test", "voting power"],
      postedAt: "2026-03-10T15:30:00Z",
      viewCount: 2089,
      answerCount: 1,
      status: "answered",
      seoTitle: "CFC Definition: When Is a Foreign Corporation Controlled?",
      seoDescription: "Learn the IRC 957 definition of a Controlled Foreign Corporation (CFC), including the 50% ownership test, U.S. shareholder rules, and constructive ownership attribution.",
    },
    answers: [
      {
        id: "a-gilti-009-1",
        questionId: "q-gilti-009",
        articleContent: {
          sections: [
            {
              heading: "The statutory definition of a CFC",
              body: "Under IRC 957(a), a controlled foreign corporation is any foreign corporation in which \"U.S. shareholders\" own (directly, indirectly, or constructively) more than 50% of the total combined voting power of all classes of voting stock, OR more than 50% of the total value of all shares of stock. This is an \"or\" test — exceeding either threshold makes the corporation a CFC. Note the threshold is \"more than 50%,\" not \"50% or more\" — exactly 50% is not enough.",
            },
            {
              heading: "Who is a U.S. shareholder for CFC purposes",
              body: "A \"U.S. shareholder\" under IRC 951(b) is any U.S. person who owns (directly, indirectly, or constructively) 10% or more of the total combined voting power OR 10% or more of the total value of all classes of stock of the foreign corporation. A U.S. person includes U.S. citizens, resident aliens (including green card holders), domestic corporations, domestic partnerships, and certain trusts and estates. In your case, you (30%) and your brother (25%) are both U.S. persons owning 10% or more, so you are both U.S. shareholders.",
            },
            {
              heading: "Applying the test to your situation",
              body: "You own 30% and your brother owns 25%. Together, U.S. shareholders own 55% — which exceeds 50% of total value. Even if we only look at voting power, assuming all shares carry equal voting rights, U.S. shareholders collectively hold 55% of the vote. Your UK company is therefore a CFC. The British co-owner's 45% stake does not count toward the U.S. shareholder threshold because he is not a U.S. person.",
            },
            {
              heading: "Vote vs. value: both matter",
              body: "The TCJA expanded the CFC definition in 2017 by adding the value test alongside the existing vote test. Before TCJA, only voting power mattered. Now, a corporation is a CFC if U.S. shareholders own more than 50% of either vote or value. This matters when a corporation has multiple classes of stock — for example, a U.S. person might own non-voting preferred shares worth more than 50% of total equity value, which would make the corporation a CFC even though the U.S. person has no voting control.",
            },
            {
              heading: "Constructive ownership rules can expand who counts",
              body: "The IRC 958 constructive ownership rules can attribute stock ownership between related parties, which can unexpectedly push corporations into CFC status. For example, stock owned by a foreign entity can be attributed to its U.S. shareholders under downward attribution rules (though the TCJA repealed certain downward attribution from foreign persons under Section 958(b)(4) — this repeal is currently in effect but has been subject to legislative proposals to restore it). Family attribution rules (IRC 318(a)(1)) also apply, meaning stock owned by your spouse, children, grandchildren, or parents may be attributed to you. These rules can be critical in determining CFC status.",
            },
            {
              heading: "Consequences of CFC status",
              body: "Once a foreign corporation is classified as a CFC, its U.S. shareholders face several reporting and tax obligations: current inclusion of Subpart F income and GILTI, filing of Form 5471 (Information Return of U.S. Persons With Respect to Certain Foreign Corporations), and potential application of Section 956 (investments in U.S. property). CFC status also triggers extended statutes of limitation and potential penalties for non-compliance.",
            },
          ],
          keyTakeaways: [
            "A CFC is a foreign corporation where U.S. shareholders (10%+ owners) collectively own more than 50% of vote or value",
            "Both the vote test and the value test apply independently — exceeding either makes the entity a CFC",
            "Constructive ownership rules under IRC 958 can attribute stock between related parties, expanding CFC status",
            "In your case, you and your brother together own 55%, making the UK company a CFC",
            "CFC status triggers Subpart F and GILTI inclusions, Form 5471 reporting, and Section 956 rules",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-11T10:00:00Z",
        sources: [
          { label: "IRS — Controlled Foreign Corporations", url: "https://www.irs.gov/individuals/international-taxpayers/controlled-foreign-corporations" },
          { label: "IRC Section 957 — CFC Defined", url: "https://www.law.cornell.edu/uscode/text/26/957" },
          { label: "IRS — About Form 5471", url: "https://www.irs.gov/forms-pubs/about-form-5471" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #10: When does a foreign-owned U.S. LLC become a CFC?
  // =====================================================
  {
    question: {
      id: "q-gilti-010",
      isFeatured: false,
      title: "Can a foreign-owned U.S. LLC be classified as a CFC?",
      body: "I'm a foreign national and I own a U.S. LLC. I've heard about CFC rules and I'm confused — isn't a CFC supposed to be a foreign corporation? My LLC is a U.S. entity. Under what circumstances could my LLC or something related to it be considered a CFC? I also own a company in my home country that does business with the LLC. Does that matter?",
      author: {
        displayName: "Elena V.",
        avatarSeed: "llc-cfc-status-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["CFC", "foreign-owned LLC", "entity classification", "check-the-box", "IRC 957"],
      postedAt: "2026-03-14T12:00:00Z",
      viewCount: 1734,
      answerCount: 1,
      status: "answered",
      seoTitle: "Can a Foreign-Owned U.S. LLC Be a CFC?",
      seoDescription: "A U.S. LLC cannot itself be a CFC, but the foreign company above it might be. Learn how entity classification, check-the-box elections, and ownership chains affect CFC status.",
    },
    answers: [
      {
        id: "a-gilti-010-1",
        questionId: "q-gilti-010",
        articleContent: {
          sections: [
            {
              heading: "A U.S. LLC is not a foreign corporation",
              body: "By definition, a CFC under IRC 957 must be a foreign corporation. A U.S. LLC organized under state law is a domestic entity. Therefore, your U.S. LLC itself cannot be classified as a CFC. The CFC rules apply to foreign corporations — companies incorporated outside the United States. Your LLC is a domestic entity regardless of who owns it.",
            },
            {
              heading: "Your home-country company could be a CFC",
              body: "The analysis changes when we look at your home-country company. If your U.S. LLC (or you personally, if you become a U.S. tax resident) owns 10% or more of a foreign corporation, and U.S. shareholders collectively own more than 50%, that foreign corporation could be a CFC. However, as a foreign person, you are not a U.S. person, so your ownership does not count toward the U.S. shareholder threshold. The question becomes: does any U.S. person own 10%+ of your home-country company? If your U.S. LLC is a disregarded entity (single-member), it is not a separate tax entity — its owner (you, a foreign person) is the relevant taxpayer.",
            },
            {
              heading: "Check-the-box elections and entity classification",
              body: "Entity classification matters enormously. If your U.S. LLC elected to be treated as a corporation for U.S. tax purposes (via Form 8832), it is treated as a domestic corporation. A domestic corporation that owns 10%+ of a foreign corporation could make that foreign corporation a CFC if the ownership thresholds are met. If your U.S. LLC is a default disregarded entity (single-member) or partnership (multi-member), it is not itself a corporation and the look-through rules apply — the owners' status (U.S. person or not) is what matters.",
            },
            {
              heading: "Multi-member LLC scenarios",
              body: "If your U.S. LLC has multiple members, including U.S. persons, the analysis becomes more complex. A multi-member LLC is treated as a partnership by default. If the LLC-partnership owns shares in a foreign corporation, each partner's share of the foreign corporation stock is determined under the partnership rules. If U.S. partners individually own 10%+ (through the partnership) and collectively exceed 50%, the foreign corporation is a CFC. The foreign-owned U.S. LLC itself remains a domestic entity — the CFC analysis focuses on the foreign entities in the chain.",
            },
            {
              heading: "Practical implications for your structure",
              body: "As a foreign person owning a single-member U.S. LLC and a home-country company, the CFC rules are unlikely to apply unless U.S. persons have ownership stakes in your foreign company. Your primary U.S. tax obligations remain Form 5472 reporting for the LLC, ECI taxation on U.S.-source business income, and transfer pricing compliance for transactions between the LLC and your foreign company. If you plan to bring on U.S. investors or co-owners, re-evaluate CFC status at that time.",
            },
          ],
          keyTakeaways: [
            "A U.S. LLC cannot be a CFC — CFCs must be foreign corporations under IRC 957",
            "Your home-country company could be a CFC if U.S. shareholders own more than 50% of its vote or value",
            "As a foreign person, your ownership does not count toward the U.S. shareholder threshold for CFC purposes",
            "Check-the-box elections (Form 8832) affect how your LLC is classified and can change the analysis",
            "Focus on inbound rules (Form 5472, ECI, transfer pricing) rather than CFC/GILTI for typical foreign-owned U.S. LLC structures",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-15T09:30:00Z",
        sources: [
          { label: "IRS — Controlled Foreign Corporations", url: "https://www.irs.gov/individuals/international-taxpayers/controlled-foreign-corporations" },
          { label: "IRC Section 957 — CFC Defined", url: "https://www.law.cornell.edu/uscode/text/26/957" },
          { label: "IRS — About Form 5472", url: "https://www.irs.gov/forms-pubs/about-form-5472" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #11: U.S. Shareholders of CFCs: Who Must Report
  // =====================================================
  {
    question: {
      id: "q-gilti-011",
      isFeatured: false,
      title: "Who qualifies as a U.S. shareholder of a CFC and what are their reporting obligations?",
      body: "I'm a U.S. citizen living abroad and I own 15% of a company incorporated in Singapore. Two other Americans each own 20%, and the rest is owned by Singaporean nationals. Am I a U.S. shareholder? What forms do I need to file? My ownership is through a trust — does that change anything?",
      author: {
        displayName: "James C.",
        avatarSeed: "us-shareholder-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["U.S. shareholder", "CFC", "Form 5471", "reporting", "trust", "IRC 951"],
      postedAt: "2026-03-18T11:45:00Z",
      viewCount: 1389,
      answerCount: 1,
      status: "answered",
      seoTitle: "U.S. Shareholders of CFCs: Reporting Obligations Explained",
      seoDescription: "Who is a U.S. shareholder of a CFC under IRC 951(b)? Learn the 10% ownership test, reporting requirements on Form 5471, and how trusts and indirect ownership affect your obligations.",
    },
    answers: [
      {
        id: "a-gilti-011-1",
        questionId: "q-gilti-011",
        articleContent: {
          sections: [
            {
              heading: "The 10% ownership threshold",
              body: "Under IRC 951(b), a U.S. shareholder is any U.S. person who owns 10% or more of the total combined voting power or 10% or more of the total value of all classes of stock of a foreign corporation. This includes direct, indirect, and constructive ownership. You own 15% directly, which exceeds the 10% threshold, making you a U.S. shareholder. Your two fellow Americans at 20% each are also U.S. shareholders. Together, U.S. shareholders own 55% (15% + 20% + 20%), which exceeds 50%, confirming the Singapore company is a CFC.",
            },
            {
              heading: "Ownership through a trust",
              body: "If your shares are held through a trust, the analysis depends on whether the trust is a U.S. trust or a foreign trust, and the type of trust. Under the constructive ownership rules of IRC 958(a), stock owned by a foreign or domestic trust is considered owned proportionally by its beneficiaries. Under IRC 958(b) (incorporating IRC 318), stock owned by a trust is attributed to its beneficiaries based on their actuarial interests, and stock owned by a grantor of a grantor trust is attributed to the trust. If you are the grantor or beneficiary of the trust, the trust's shares are likely attributed to you, maintaining your U.S. shareholder status.",
            },
            {
              heading: "Form 5471 filing requirements",
              body: "As a U.S. shareholder of a CFC, you must file Form 5471 (Information Return of U.S. Persons With Respect to Certain Foreign Corporations). There are multiple categories of filers. As a 10%+ U.S. shareholder of a CFC, you are at minimum a Category 4 and likely a Category 5 filer. Category 5 requires the most extensive reporting, including the CFC's complete income statement, balance sheet, and Subpart F and GILTI computations (Schedules I, I-1, J, and P). Form 5471 is attached to your income tax return (Form 1040 for individuals).",
            },
            {
              heading: "Subpart F and GILTI inclusions",
              body: "Beyond the information return, you must include your pro rata share of the CFC's Subpart F income (IRC 951(a)) and GILTI (IRC 951A) in your gross income. Subpart F income is reported on Schedule I of Form 5471 and flows to your Form 1040. GILTI is computed on Form 8992 using data from Form 5471 Schedule I-1. These inclusions are taxed as ordinary income at your individual rate, unless you make a Section 962 election to apply corporate rates.",
            },
            {
              heading: "Penalties for non-compliance",
              body: "Failure to file Form 5471 carries a $10,000 penalty per form, per year. If non-filing continues after IRS notice, additional penalties of $10,000 per month accrue, up to a maximum of $60,000 per return. Additionally, the statute of limitations on your entire income tax return remains open until Form 5471 is filed (IRC 6501(c)(8)). This means the IRS can audit any item on your return — not just international items — for an indefinite period if Form 5471 is missing. Substantial understatement penalties under IRC 6662 can also apply if Subpart F or GILTI income is not properly reported.",
            },
          ],
          keyTakeaways: [
            "You are a U.S. shareholder if you own 10%+ of a foreign corporation's vote or value (direct, indirect, or constructive)",
            "Trust ownership is attributed to beneficiaries and grantors under IRC 958, so holding shares through a trust does not avoid U.S. shareholder status",
            "Form 5471 must be filed annually; Category 5 filers must report the CFC's complete financials and Subpart F/GILTI data",
            "Failure to file Form 5471 carries $10,000+ penalties and keeps your entire tax return statute of limitations open indefinitely",
            "Both Subpart F income and GILTI must be included in your gross income, reported on your Form 1040",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-19T10:30:00Z",
        sources: [
          { label: "IRS — About Form 5471", url: "https://www.irs.gov/forms-pubs/about-form-5471" },
          { label: "IRS — Controlled Foreign Corporations", url: "https://www.irs.gov/individuals/international-taxpayers/controlled-foreign-corporations" },
          { label: "IRC Section 951 — Amounts Included in Gross Income", url: "https://www.law.cornell.edu/uscode/text/26/951" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #12: Form 5471 Filing Requirements
  // =====================================================
  {
    question: {
      id: "q-gilti-012",
      isFeatured: true,
      title: "What are the Form 5471 filing requirements for CFC owners?",
      body: "I just learned I need to file Form 5471 for a foreign corporation I have an interest in. This form looks incredibly complex — it has multiple schedules and categories of filers. Can someone explain which category I fall into, what schedules I need, and what information I need to gather? I'm a U.S. citizen with a 40% stake in a foreign corporation that qualifies as a CFC.",
      author: {
        displayName: "David L.",
        avatarSeed: "form5471-filer-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["Form 5471", "CFC", "filing requirements", "schedules", "categories of filers", "penalties"],
      postedAt: "2026-01-25T14:00:00Z",
      viewCount: 2678,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 5471 Filing Requirements: Categories, Schedules, Penalties",
      seoDescription: "Complete guide to Form 5471 for CFC owners: filer categories (1-5), required schedules, information needed, and penalties for non-filing. Essential for U.S. shareholders of foreign corporations.",
    },
    answers: [
      {
        id: "a-gilti-012-1",
        questionId: "q-gilti-012",
        articleContent: {
          sections: [
            {
              heading: "The five categories of Form 5471 filers",
              body: "Form 5471 has five categories of filers, each with different triggers and reporting requirements. Category 1: U.S. shareholders of specified foreign corporations (SFCs) — broadly covers 10%+ shareholders. Category 2: Officers or directors of a foreign corporation who are U.S. citizens or residents, if a U.S. person acquires 10%+ ownership or the foreign corporation becomes a CFC. Category 3: U.S. persons who acquire 10%+ stock or additional stock crossing a 10% threshold. Category 4: U.S. persons who had \"control\" (more than 50% ownership) of a foreign corporation at any time during the year. Category 5: 10%+ U.S. shareholders of a CFC at any time during the year. As a 40% owner of a CFC, you are at minimum Category 4 and Category 5.",
            },
            {
              heading: "Required schedules for Category 5 filers",
              body: "Category 5 filers face the most extensive requirements. You must complete: the main Form 5471 (identification information); Schedule A (stock of the foreign corporation); Schedule B (U.S. shareholders); Schedule C (income statement — translating the CFC's books into a U.S. income statement); Schedule F (balance sheet); Schedule G (other information — related party transactions, elections, etc.); Schedule H (current earnings and profits); Schedule I (summary of CFC's Subpart F income); Schedule I-1 (GILTI tested income, QBAI, and related items); Schedule J (accumulated earnings and profits); Schedule M (transactions between the CFC and shareholders); and Schedule P (previously taxed earnings and profits). Schedule E (FPHCI) and Schedule R (distributions) may also be required depending on facts.",
            },
            {
              heading: "Information you need to gather",
              body: "To complete Form 5471, you need: the CFC's complete financial statements (income statement and balance sheet) for its tax year; details of all classes of stock outstanding and ownership percentages; all transactions between the CFC and its U.S. shareholders or other related parties; the CFC's functional currency and exchange rates; details of any distributions made during the year; the CFC's qualified business asset investment (depreciable tangible property) for GILTI purposes; and foreign taxes paid or accrued. You should also obtain the CFC's organizational documents and any elections made (such as check-the-box elections or high-tax exclusion elections).",
            },
            {
              heading: "Filing deadline and extensions",
              body: "Form 5471 is attached to your income tax return. For individuals, the initial due date is April 15 (or the 15th day of the 4th month after the tax year ends). Extensions of the income tax return automatically extend the Form 5471 deadline. U.S. citizens and residents living abroad get an automatic 2-month extension to June 15, and can request further extensions to October 15. However, the CFC's tax year may end on a different date than yours — Form 5471 reports the CFC's annual accounting period that ends with or within your tax year.",
            },
            {
              heading: "Penalties and statute of limitations impact",
              body: "The penalty for failure to file Form 5471 is $10,000 per form, per annual accounting period. If non-filing continues after IRS notification, additional penalties of $10,000 per 30-day period accrue, up to a maximum of $60,000 per return. Perhaps more significantly, under IRC 6501(c)(8), the statute of limitations on your entire tax return does not begin to run until Form 5471 is filed. This means if you fail to file Form 5471, the IRS can audit your entire return — including purely domestic items — indefinitely. A 10% reduction in foreign tax credits is also imposed for each annual period of non-compliance.",
            },
          ],
          keyTakeaways: [
            "As a 40% CFC owner, you are a Category 4 and 5 filer — the most extensive reporting categories",
            "Category 5 requires Schedules A through P, covering the CFC's full financials, Subpart F, GILTI, and E&P",
            "You need the CFC's complete financial statements, transaction details, asset information, and foreign tax data",
            "Form 5471 is attached to your income tax return and follows the same deadline (including extensions)",
            "Non-filing carries $10,000+ penalties and keeps your entire tax return open to audit indefinitely",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-26T15:00:00Z",
        sources: [
          { label: "IRS — About Form 5471", url: "https://www.irs.gov/forms-pubs/about-form-5471" },
          { label: "IRS — Controlled Foreign Corporations", url: "https://www.irs.gov/individuals/international-taxpayers/controlled-foreign-corporations" },
          { label: "IRC Section 6038 — Information Reporting for Foreign Corporations", url: "https://www.law.cornell.edu/uscode/text/26/6038" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #13: Subpart F vs GILTI Differences
  // =====================================================
  {
    question: {
      id: "q-gilti-013",
      isFeatured: true,
      title: "What are the key differences between Subpart F income and GILTI?",
      body: "I'm trying to understand the difference between Subpart F and GILTI. They both seem to tax CFC income currently to U.S. shareholders. If GILTI was supposed to be a catch-all for everything not already covered by Subpart F, why do we need both? What are the practical differences in terms of what income is covered, tax rates, deductions, and foreign tax credits? This is driving me crazy.",
      author: {
        displayName: "Lisa G.",
        avatarSeed: "subf-vs-gilti-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["Subpart F", "GILTI", "comparison", "CFC", "international tax", "Section 250"],
      postedAt: "2026-02-08T16:00:00Z",
      viewCount: 2345,
      answerCount: 1,
      status: "answered",
      seoTitle: "Subpart F vs GILTI: Key Differences Explained",
      seoDescription: "Compare Subpart F income and GILTI side by side: scope, tax rates, deductions, foreign tax credits, and which CFC income falls into each category. Essential for U.S. shareholders.",
    },
    answers: [
      {
        id: "a-gilti-013-1",
        questionId: "q-gilti-013",
        articleContent: {
          sections: [
            {
              heading: "Different purposes and scope",
              body: "Subpart F (enacted 1962) targets specific categories of passive, mobile, or base-eroding income: foreign personal holding company income, foreign base company sales and services income, and insurance income. It was designed to prevent abuse through specific types of income shifting. GILTI (enacted 2017) is a broad residual category that captures virtually all remaining CFC income not already taxed under Subpart F or other provisions. GILTI was designed as a minimum tax on active foreign earnings. Income that is Subpart F is excluded from GILTI tested income — so there is no double-counting.",
            },
            {
              heading: "Tax treatment for corporate shareholders",
              body: "For domestic C corporations, the difference is significant. Subpart F income is taxed at the full 21% corporate rate with deemed-paid foreign tax credits at 100% of foreign taxes (under IRC 960(a)). GILTI income benefits from a 50% Section 250 deduction (reducing the effective rate to 10.5%, or 13.125% after 2025) and deemed-paid foreign tax credits at only 80% of foreign taxes (under IRC 960(d)). This means GILTI is generally taxed at a lower rate than Subpart F for corporate shareholders, but the foreign tax credit is less generous for GILTI.",
            },
            {
              heading: "Tax treatment for individual shareholders",
              body: "For individual U.S. shareholders, both Subpart F and GILTI are included in gross income at ordinary rates (up to 37%). Individuals do not get the Section 250 deduction for GILTI and do not get deemed-paid foreign tax credits (IRC 960) for either category — unless they make a Section 962 election. Without Section 962, individual shareholders are taxed the same on both Subpart F and GILTI, making the distinction less important from a rate perspective but still relevant for foreign tax credit basket purposes.",
            },
            {
              heading: "Foreign tax credit baskets",
              body: "Subpart F income and GILTI income fall into separate foreign tax credit baskets under IRC 904(d). Subpart F items generally go into the passive category or general category basket depending on the type of income. GILTI has its own dedicated basket (Section 904(d)(1)(A)). This separation means excess foreign tax credits from one category cannot offset tax on the other. The basket distinction is particularly important for taxpayers with a mix of high-tax Subpart F income and low-tax GILTI income (or vice versa).",
            },
            {
              heading: "Computation differences",
              body: "Subpart F is computed on a per-CFC, per-category basis. Each item of income is analyzed to determine if it fits a Subpart F category. GILTI is computed on an aggregate basis across all CFCs — tested income and tested losses are netted, and QBAI is aggregated. This aggregation means a loss CFC can offset GILTI tested income from a profitable CFC, but a loss CFC cannot offset Subpart F income from a profitable CFC. The QBAI/DTIR mechanism (reducing GILTI by a 10% return on tangible assets) has no analog in Subpart F.",
            },
            {
              heading: "Summary comparison table",
              body: "Subpart F: specific categories of passive/mobile income; full corporate rate (21%); 100% deemed-paid FTCs for corps; per-CFC computation; no QBAI offset; enacted 1962. GILTI: residual CFC income not otherwise taxed; 50% Section 250 deduction for corps (effective 10.5%); 80% deemed-paid FTCs for corps; aggregate computation across all CFCs; QBAI-based exemption for tangible asset returns; enacted 2017. Both: current inclusion regardless of distribution; apply only to U.S. shareholders of CFCs; separate FTC baskets.",
            },
          ],
          keyTakeaways: [
            "Subpart F targets specific passive/mobile income categories; GILTI is a broad residual minimum tax on remaining CFC earnings",
            "Income classified as Subpart F is excluded from GILTI — no double taxation",
            "Corporate GILTI rate is effectively 10.5% (with Section 250), while Subpart F is taxed at the full 21% corporate rate",
            "GILTI uses aggregate computation across CFCs with QBAI offset; Subpart F is per-CFC, per-category",
            "Subpart F and GILTI have separate foreign tax credit baskets — excess credits do not cross over",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-09T13:00:00Z",
        sources: [
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
          { label: "IRC Section 952 — Subpart F Income Defined", url: "https://www.law.cornell.edu/uscode/text/26/952" },
          { label: "IRC Section 250 — FDII and GILTI Deduction", url: "https://www.law.cornell.edu/uscode/text/26/250" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #14: BEAT Overview
  // =====================================================
  {
    question: {
      id: "q-gilti-014",
      isFeatured: true,
      title: "What is the Base Erosion and Anti-Abuse Tax (BEAT) and who does it affect?",
      body: "Our company is a U.S. subsidiary of a large foreign multinational. Our CFO mentioned we might be subject to something called BEAT — the Base Erosion Anti-Abuse Tax. I looked it up and it seems very complex. Can someone explain what BEAT is, why it was created, and what size of company it applies to? We have about $600 million in annual gross receipts and make significant payments to our foreign parent for management services and IP licensing.",
      author: {
        displayName: "Christine D.",
        avatarSeed: "beat-overview-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["BEAT", "base erosion", "IRC 59A", "foreign multinational", "anti-abuse", "minimum tax"],
      postedAt: "2026-02-15T09:00:00Z",
      viewCount: 1876,
      answerCount: 1,
      status: "answered",
      seoTitle: "BEAT Tax Explained: Base Erosion Anti-Abuse Tax Overview",
      seoDescription: "What is the BEAT? Learn how the Base Erosion and Anti-Abuse Tax under IRC 59A works, the $500M gross receipts threshold, base erosion percentage test, and which payments trigger it.",
    },
    answers: [
      {
        id: "a-gilti-014-1",
        questionId: "q-gilti-014",
        articleContent: {
          sections: [
            {
              heading: "What BEAT is and why it was created",
              body: "The Base Erosion and Anti-Abuse Tax (BEAT) was enacted as part of the TCJA in 2017 under IRC Section 59A. It is designed to prevent large multinational corporations from eroding the U.S. tax base by making deductible payments (such as management fees, royalties, and interest) to related foreign parties. Without BEAT, a foreign parent could charge its U.S. subsidiary inflated fees, reducing U.S. taxable income while shifting profits offshore. BEAT operates as a minimum tax — it requires applicable taxpayers to compute a modified taxable income that adds back certain base erosion payments and then pay tax at a minimum rate if their regular tax liability falls below this floor.",
            },
            {
              heading: "Who is an applicable taxpayer",
              body: "BEAT applies only to corporations (and certain partnerships with corporate partners) that meet two tests: (1) the gross receipts test — average annual gross receipts of $500 million or more over the three preceding tax years (determined on an aggregate group basis, including all related domestic corporations); and (2) the base erosion percentage test — base erosion tax benefits (deductions attributable to base erosion payments) must equal 3% or more of total deductions for the tax year (2% for banks and securities dealers). With $600 million in gross receipts, your company likely meets the first test, and the significant payments to your foreign parent could push you over the base erosion percentage threshold.",
            },
            {
              heading: "What are base erosion payments",
              body: "Base erosion payments under IRC 59A(d) include any amount paid or accrued by the taxpayer to a related foreign person that is deductible (such as management fees, royalties, interest, rents, and service fees), as well as amounts paid in connection with the acquisition of depreciable or amortizable property from a related foreign person. Payments for cost of goods sold (COGS) are generally excluded — this is a significant exception that means payments for inventory or raw materials to a related foreign manufacturer typically do not count. However, the distinction between services (deductible) and COGS (excluded) can be contentious.",
            },
            {
              heading: "How BEAT is calculated",
              body: "The BEAT computation involves: (1) Start with regular taxable income; (2) Add back base erosion tax benefits (the deductions from base erosion payments); (3) The result is \"modified taxable income\"; (4) Multiply modified taxable income by the BEAT rate (currently 10%, or 12.5% for tax years beginning after 2025); (5) Subtract allowable credits (with limitations); (6) If this \"base erosion minimum tax amount\" exceeds regular tax liability (before credits), the excess is the BEAT — an additional tax the corporation must pay on top of its regular tax.",
            },
            {
              heading: "BEAT rates and timeline",
              body: "The BEAT rate is 5% for the first tax year beginning after December 31, 2017 (effectively 2018 for calendar-year taxpayers), 10% for tax years beginning after 2018 through 2025, and 12.5% for tax years beginning after 2025. For banks and registered securities dealers, the rate is one percentage point higher in each period. The increasing rate schedule means BEAT will become more significant over time, especially as the rate rises to 12.5% starting in 2026.",
            },
          ],
          keyTakeaways: [
            "BEAT is a minimum tax under IRC 59A targeting large corporations that make deductible payments to related foreign persons",
            "It applies to corporations with $500M+ average gross receipts and base erosion payments of 3%+ of total deductions",
            "Base erosion payments include management fees, royalties, interest, and rents paid to related foreign parties — but generally not COGS",
            "The BEAT rate is 10% through 2025, rising to 12.5% for tax years beginning after 2025",
            "BEAT is an additional tax paid only if the base erosion minimum tax exceeds regular tax liability",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-16T11:00:00Z",
        sources: [
          { label: "IRS — Base Erosion and Anti-Abuse Tax (BEAT)", url: "https://www.irs.gov/newsroom/base-erosion-and-anti-abuse-tax-beat" },
          { label: "IRC Section 59A — BEAT", url: "https://www.law.cornell.edu/uscode/text/26/59A" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #15: When BEAT Applies to Foreign-Owned Corporations
  // =====================================================
  {
    question: {
      id: "q-gilti-015",
      isFeatured: false,
      title: "Does BEAT apply to my foreign-owned U.S. corporation that pays royalties to its parent?",
      body: "I'm the tax director of a U.S. corporation wholly owned by a Japanese parent company. We pay substantial royalties and management fees to our parent — about $80 million per year. Our total deductions are around $900 million. Our consolidated group has about $2 billion in gross receipts. Are we subject to BEAT? How do I determine if the base erosion percentage test is met?",
      author: {
        displayName: "Takeshi N.",
        avatarSeed: "beat-foreign-owned-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["BEAT", "foreign-owned corporation", "royalties", "management fees", "base erosion percentage", "IRC 59A"],
      postedAt: "2026-03-02T10:30:00Z",
      viewCount: 1234,
      answerCount: 1,
      status: "answered",
      seoTitle: "BEAT for Foreign-Owned U.S. Corporations: Royalties and Fees",
      seoDescription: "How to determine if BEAT applies to your foreign-owned U.S. corporation. Calculate the base erosion percentage, identify qualifying payments, and understand the minimum tax impact.",
    },
    answers: [
      {
        id: "a-gilti-015-1",
        questionId: "q-gilti-015",
        articleContent: {
          sections: [
            {
              heading: "Applying the gross receipts test",
              body: "With $2 billion in consolidated group gross receipts, your company clearly exceeds the $500 million threshold. The gross receipts test is applied on an aggregate basis, meaning all members of the same controlled group (including domestic affiliates) are combined. Your Japanese parent's non-U.S. gross receipts are not included — only the U.S. members' receipts count. But at $2 billion, you are well above the line.",
            },
            {
              heading: "Calculating the base erosion percentage",
              body: "The base erosion percentage equals your \"base erosion tax benefits\" divided by total deductions allowed for the tax year (with certain modifications). Base erosion tax benefits are the deductions attributable to base erosion payments. Your $80 million in royalties and management fees to your Japanese parent are base erosion payments. If these are fully deductible, your base erosion tax benefits are $80 million. With total deductions of $900 million, the base erosion percentage is $80M / $900M = approximately 8.9%. This exceeds the 3% threshold, so the second test is met.",
            },
            {
              heading: "Which payments count as base erosion payments",
              body: "In your case, royalties paid to the Japanese parent for use of IP are base erosion payments (deductible amounts paid to a related foreign person). Management fees for services provided by the parent are also base erosion payments. However, if any of these payments are for services that qualify for the services cost method exception (SCM) under IRC 59A(d)(5) — meaning they are eligible for the SCM under the Section 482 transfer pricing regulations and are charged at cost with no markup — those amounts may be excluded from base erosion payments. This exception is narrow and requires meeting specific transfer pricing documentation requirements.",
            },
            {
              heading: "Computing your BEAT liability",
              body: "Assume your regular taxable income is $200 million and regular tax is $42 million (21%). To compute BEAT: modified taxable income = $200M + $80M (add-back of base erosion deductions) = $280M. BEAT minimum tax = $280M x 10% (2025 rate) = $28M. Since your regular tax of $42M exceeds $28M, you owe no BEAT for this year. However, if the BEAT rate rises to 12.5% in 2026, the minimum tax becomes $280M x 12.5% = $35M — still below $42M. BEAT only triggers when regular tax falls below the BEAT minimum, which can happen in years with high deductions, NOL usage, or large credits.",
            },
            {
              heading: "Planning considerations",
              body: "Even if BEAT does not currently apply, you should monitor it annually because changes in deductions, credits, or the BEAT rate can flip the result. Companies can mitigate BEAT exposure by: (1) restructuring payments as cost of goods sold where appropriate; (2) using the services cost method exception for qualifying service fees; (3) reducing reliance on intercompany IP licensing; or (4) evaluating whether onshoring certain functions reduces base erosion payments. Always coordinate BEAT planning with transfer pricing compliance to avoid conflicts.",
            },
          ],
          keyTakeaways: [
            "Your company meets both BEAT thresholds: $2B gross receipts (exceeds $500M) and 8.9% base erosion percentage (exceeds 3%)",
            "Royalties and management fees to a foreign parent are base erosion payments; the services cost method exception may exclude some fees",
            "BEAT is owed only when regular tax falls below the BEAT minimum tax — your current regular tax exceeds the minimum",
            "The BEAT rate increases to 12.5% for tax years beginning after 2025, narrowing the gap",
            "Monitor BEAT annually and consider restructuring intercompany payments to reduce base erosion exposure",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-03T14:00:00Z",
        sources: [
          { label: "IRS — Base Erosion and Anti-Abuse Tax (BEAT)", url: "https://www.irs.gov/newsroom/base-erosion-and-anti-abuse-tax-beat" },
          { label: "IRC Section 59A — BEAT", url: "https://www.law.cornell.edu/uscode/text/26/59A" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #16: BEAT Base Erosion Payments
  // =====================================================
  {
    question: {
      id: "q-gilti-016",
      isFeatured: false,
      title: "What types of payments count as base erosion payments under BEAT?",
      body: "We're trying to figure out exactly which payments our U.S. company makes to related foreign entities count as 'base erosion payments' for BEAT purposes. We pay our foreign parent for inventory (COGS), IP royalties, management services, interest on intercompany loans, and reinsurance premiums. Do all of these count? I heard there are important exceptions.",
      author: {
        displayName: "Maria F.",
        avatarSeed: "beat-payments-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["BEAT", "base erosion payments", "COGS exception", "services cost method", "IRC 59A", "intercompany payments"],
      postedAt: "2026-03-08T14:30:00Z",
      viewCount: 1123,
      answerCount: 1,
      status: "answered",
      seoTitle: "BEAT Base Erosion Payments: What Counts and Key Exceptions",
      seoDescription: "Identify which intercompany payments to foreign related parties are base erosion payments under IRC 59A. Learn about the COGS exception, services cost method, and reinsurance rules.",
    },
    answers: [
      {
        id: "a-gilti-016-1",
        questionId: "q-gilti-016",
        articleContent: {
          sections: [
            {
              heading: "General rule: deductible payments to related foreign persons",
              body: "Under IRC 59A(d), a base erosion payment is any amount paid or accrued by the taxpayer to a foreign person that is a related party (25%+ ownership or control), where the amount results in a deduction. This includes royalties, management fees, service fees, interest, rents, and similar deductible payments. The payment must be to a foreign related person — payments to unrelated foreign persons or to domestic related persons are not base erosion payments.",
            },
            {
              heading: "The COGS exception",
              body: "Amounts paid for cost of goods sold (COGS) are generally NOT base erosion payments. This is a critical exception. If you purchase inventory or raw materials from your foreign parent and the cost is reflected in COGS (not as a deduction below the line), it does not count. However, the IRS has scrutinized situations where payments characterized as COGS actually include embedded service or royalty components. The distinction between payments properly allocable to COGS and payments that are actually deductible expenses can be fact-intensive.",
            },
            {
              heading: "Applying the rules to your specific payments",
              body: "Inventory payments (COGS): Generally excluded from base erosion payments under the COGS exception. IP royalties: These are deductible payments to a foreign related person — they are base erosion payments. Management services: Deductible service fees to a foreign parent are base erosion payments, unless they qualify for the services cost method (SCM) exception. Interest on intercompany loans: Deductible interest to a foreign related person is a base erosion payment. Reinsurance premiums: Premiums paid to a related foreign reinsurer are base erosion payments under IRC 59A(d)(3).",
            },
            {
              heading: "The services cost method exception",
              body: "IRC 59A(d)(5) provides an exception for payments for services that meet the requirements of the services cost method (SCM) under the Section 482 transfer pricing regulations. Under the SCM, services that are supportive in nature (not integral to the taxpayer's core business) can be charged at cost with no markup. If your management service fees qualify for the SCM — meaning they cover routine, non-integral services charged at the service provider's cost — they may be excluded from base erosion payments. This exception requires careful documentation and compliance with the Section 482 SCM requirements.",
            },
            {
              heading: "Amounts paid for depreciable/amortizable property",
              body: "In addition to deductible payments, base erosion payments also include amounts paid to a related foreign person in connection with acquiring depreciable or amortizable property. Even though the purchase price itself is capitalized (not immediately deducted), the depreciation or amortization deductions are treated as base erosion tax benefits. For example, if you purchase a patent from your foreign parent, the amortization deductions over the patent's useful life are added back in the BEAT calculation, even though the purchase price was a capital expenditure.",
            },
          ],
          keyTakeaways: [
            "Base erosion payments include deductible amounts (royalties, interest, service fees, rents) paid to related foreign persons",
            "COGS payments are generally excluded — but embedded service/royalty components in COGS may be reclassified",
            "The services cost method exception can exclude routine service fees charged at cost with no markup",
            "Interest on intercompany loans and reinsurance premiums to foreign affiliates are base erosion payments",
            "Depreciation/amortization on property acquired from related foreign persons is treated as a base erosion tax benefit",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-09T11:30:00Z",
        sources: [
          { label: "IRC Section 59A — BEAT", url: "https://www.law.cornell.edu/uscode/text/26/59A" },
          { label: "IRS — Base Erosion and Anti-Abuse Tax (BEAT)", url: "https://www.irs.gov/newsroom/base-erosion-and-anti-abuse-tax-beat" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #17: BEAT Calculation and Minimum Tax
  // =====================================================
  {
    question: {
      id: "q-gilti-017",
      isFeatured: false,
      title: "How exactly is the BEAT calculated? Walk me through the minimum tax computation.",
      body: "I understand BEAT conceptually but I'm struggling with the actual math. My U.S. corporation has $150 million in taxable income, $40 million in base erosion payments that are deductible, and $5 million in R&D credits. Our regular tax would be $31.5 million. Can you walk me through how to determine if we owe BEAT and how much?",
      author: {
        displayName: "Steven M.",
        avatarSeed: "beat-calc-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["BEAT", "calculation", "minimum tax", "modified taxable income", "IRC 59A", "R&D credits"],
      postedAt: "2026-03-20T10:00:00Z",
      viewCount: 987,
      answerCount: 1,
      status: "answered",
      seoTitle: "BEAT Calculation Step-by-Step: Minimum Tax Computation",
      seoDescription: "Step-by-step BEAT calculation example: modified taxable income, base erosion minimum tax amount, credit limitations, and when the additional tax is owed under IRC 59A.",
    },
    answers: [
      {
        id: "a-gilti-017-1",
        questionId: "q-gilti-017",
        articleContent: {
          sections: [
            {
              heading: "Step 1: Compute regular tax liability",
              body: "Start with your regular tax. Taxable income of $150 million at 21% = $31.5 million. You have $5 million in R&D credits, bringing regular tax after credits to $26.5 million. This is the amount you would owe without BEAT.",
            },
            {
              heading: "Step 2: Compute modified taxable income",
              body: "Modified taxable income starts with regular taxable income ($150 million) and adds back the base erosion tax benefits — the deductions attributable to base erosion payments. Your $40 million in deductible base erosion payments are added back: $150M + $40M = $190 million. Note: if you had any base erosion percentage of NOL deductions, those would also be added back, but we will assume none for this example.",
            },
            {
              heading: "Step 3: Apply the BEAT rate",
              body: "Multiply modified taxable income by the applicable BEAT rate. For tax years beginning in 2025, the rate is 10%. BEAT minimum tax amount = $190M x 10% = $19 million. For 2026 and later, at 12.5%, it would be $190M x 12.5% = $23.75 million.",
            },
            {
              heading: "Step 4: Compare to regular tax (before most credits)",
              body: "The BEAT is owed only to the extent the base erosion minimum tax amount exceeds the regular tax liability, adjusted for credits. For BEAT purposes, certain credits are added back to regular tax: most general business credits (including R&D credits) are NOT subtracted when computing the regular tax amount for BEAT comparison. However, R&D credits are partially allowed — under IRC 59A(b)(1)(B)(ii), certain credits (including the R&D credit under Section 41) are allowed to reduce the BEAT minimum tax amount. The exact treatment depends on the year and specific credit type. For simplicity in your case: regular tax before credits = $31.5M. BEAT minimum = $19M. Since $31.5M > $19M, the base erosion minimum tax does not exceed regular tax. You owe no BEAT.",
            },
            {
              heading: "When BEAT would be triggered in your scenario",
              body: "If your taxable income were lower — say $80 million instead of $150 million — regular tax would be $16.8 million (21% x $80M). Modified taxable income = $80M + $40M = $120M. BEAT minimum = $120M x 10% = $12M. Still $16.8M > $12M, no BEAT. But if taxable income were $50M: regular tax = $10.5M. Modified = $50M + $40M = $90M. BEAT minimum = $9M. Still no BEAT. BEAT triggers when base erosion payments are large relative to taxable income, especially in years with significant credits, NOL carryforwards, or unusually low profitability.",
            },
            {
              heading: "Credit limitations under BEAT",
              body: "One of BEAT's most punitive features is its interaction with tax credits. For applicable taxpayers, certain credits cannot reduce tax below the BEAT minimum. This primarily affects the general business credit (GBC). The R&D credit (Section 41) receives favorable treatment — a portion of R&D credits can be used to reduce the BEAT minimum. But other credits (like the foreign tax credit in some contexts) may be limited. This credit limitation is what makes BEAT particularly painful for companies that rely heavily on credits to reduce their tax bills.",
            },
          ],
          keyTakeaways: [
            "BEAT is owed only when the base erosion minimum tax exceeds regular tax liability (adjusted for credits)",
            "Modified taxable income = regular taxable income + base erosion tax benefits (add-back of deductions)",
            "The BEAT rate is 10% for 2019-2025 and 12.5% for 2026 onward",
            "In your example ($150M taxable income, $40M base erosion payments), regular tax of $31.5M exceeds the $19M BEAT minimum — no BEAT owed",
            "BEAT most commonly triggers in low-profit years or when large credits reduce regular tax below the BEAT floor",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-21T09:00:00Z",
        sources: [
          { label: "IRC Section 59A — BEAT", url: "https://www.law.cornell.edu/uscode/text/26/59A" },
          { label: "IRS — Base Erosion and Anti-Abuse Tax (BEAT)", url: "https://www.irs.gov/newsroom/base-erosion-and-anti-abuse-tax-beat" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #18: FDII Deduction Overview
  // =====================================================
  {
    question: {
      id: "q-gilti-018",
      isFeatured: true,
      title: "What is the FDII deduction and can my U.S. corporation benefit from it?",
      body: "I own a U.S. C-corporation that sells software licenses to customers all over the world. About 60% of our revenue comes from foreign customers. Someone mentioned that there's a deduction called FDII that could reduce our tax rate on foreign sales. How does FDII work? Is it only for big companies or can a small C-corp benefit too? And how is 'foreign-derived' defined?",
      author: {
        displayName: "Jonathan P.",
        avatarSeed: "fdii-software-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["FDII", "Section 250", "foreign-derived intangible income", "deduction", "export incentive", "C-corporation"],
      postedAt: "2026-02-25T11:00:00Z",
      viewCount: 1987,
      answerCount: 1,
      status: "answered",
      seoTitle: "FDII Deduction Explained: Foreign-Derived Intangible Income",
      seoDescription: "Learn how the FDII deduction under IRC Section 250 reduces the corporate tax rate on foreign-derived income to about 13.125%. Eligibility, calculation, and benefits for U.S. corporations.",
    },
    answers: [
      {
        id: "a-gilti-018-1",
        questionId: "q-gilti-018",
        articleContent: {
          sections: [
            {
              heading: "What FDII is and its purpose",
              body: "FDII (Foreign-Derived Intangible Income) is a deduction created by the TCJA under IRC Section 250. It is designed to incentivize U.S. corporations to keep IP and operations in the United States by providing a preferential tax rate on income derived from serving foreign markets. FDII works as the domestic counterpart to GILTI — while GILTI taxes foreign earnings at a minimum rate, FDII rewards U.S. corporations for earning income from foreign customers from a U.S. base. Any domestic C corporation with income from foreign sales of property, services, or licenses can potentially benefit. There is no minimum size requirement.",
            },
            {
              heading: "How FDII is calculated",
              body: "FDII is computed through a formula: (1) Start with the corporation's \"deemed intangible income\" (DII), which is the excess of its \"deduction eligible income\" (DEI) over a 10% deemed return on its QBAI (qualified business asset investment — the same tangible-asset concept used in GILTI). (2) Determine the corporation's \"foreign-derived deduction eligible income\" (FDDEI) — the portion of DEI that is derived from serving foreign persons. (3) FDII = DII x (FDDEI / DEI). In other words, FDII is the share of the corporation's deemed intangible income that is attributable to foreign-derived revenue.",
            },
            {
              heading: "The Section 250 deduction and effective rate",
              body: "The Section 250 deduction for FDII is 37.5% of the FDII amount for tax years beginning before January 1, 2026, and 21.875% for tax years beginning after that date. At a 37.5% deduction and 21% corporate rate, the effective tax rate on FDII is approximately 13.125% (21% x (1 - 37.5%)). After the deduction drops to 21.875%, the effective rate rises to approximately 16.406%. This is still a meaningful reduction from the standard 21% corporate rate. The deduction is reported on Form 8993.",
            },
            {
              heading: "What qualifies as foreign-derived",
              body: "Income is foreign-derived if it comes from: (1) property sold to a foreign person for use, consumption, or disposition outside the United States; (2) services provided to a person or with respect to property located outside the United States; or (3) property (including IP) licensed to a foreign person for use outside the United States. Your software licenses sold to foreign customers for use outside the U.S. would qualify as FDDEI. Documentation requirements include substantiation that the customer is a foreign person and that the property/service is for foreign use. The regulations under Treas. Reg. 1.250 provide detailed rules for establishing foreign use.",
            },
            {
              heading: "Limitations and practical considerations",
              body: "FDII is available only to domestic C corporations — not S corporations, partnerships, sole proprietorships, or individuals. The deduction is limited to the corporation's taxable income (similar to the GILTI Section 250 limitation). Companies with significant tangible assets (high QBAI) will have a lower DII and therefore lower FDII, since the deemed return on tangible assets is subtracted. For your software company with low tangible assets and high foreign sales, FDII could provide a substantial benefit. Keep thorough documentation of foreign customers and foreign use of your software to support the deduction.",
            },
          ],
          keyTakeaways: [
            "FDII provides a 37.5% deduction (dropping to 21.875% after 2025) on deemed intangible income from foreign sales, reducing the effective rate to about 13.125%",
            "Any domestic C corporation with foreign-derived revenue can benefit — no minimum size requirement",
            "Foreign-derived means property sold, services provided, or IP licensed to foreign persons for foreign use",
            "FDII is higher for companies with low tangible assets and high foreign revenue — ideal for software and IP companies",
            "Reported on Form 8993; documentation of foreign customers and foreign use is essential",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-26T10:15:00Z",
        sources: [
          { label: "IRC Section 250 — FDII and GILTI Deduction", url: "https://www.law.cornell.edu/uscode/text/26/250" },
          { label: "IRS — About Form 8993 (Section 250 Deduction)", url: "https://www.irs.gov/forms-pubs/about-form-8993" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #19: FDII Calculation for U.S. Corps with Foreign Sales
  // =====================================================
  {
    question: {
      id: "q-gilti-019",
      isFeatured: false,
      title: "How do I calculate FDII for my U.S. corporation that has both domestic and foreign customers?",
      body: "My U.S. C-corp has $10 million in total revenue — $6 million from foreign customers and $4 million from domestic customers. Our total deductions are $7 million, and we have about $2 million in depreciable tangible assets. Can you walk me through the FDII calculation step by step? I want to understand how much of a tax benefit I'm looking at.",
      author: {
        displayName: "Amanda T.",
        avatarSeed: "fdii-calc-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["FDII", "calculation", "Form 8993", "DEI", "FDDEI", "Section 250", "QBAI"],
      postedAt: "2026-03-12T08:45:00Z",
      viewCount: 1345,
      answerCount: 1,
      status: "answered",
      seoTitle: "FDII Calculation Step-by-Step for Mixed Revenue Corporations",
      seoDescription: "Detailed FDII calculation example for a U.S. C-corp with domestic and foreign sales. Step-by-step computation of DEI, FDDEI, deemed intangible income, and Section 250 deduction.",
    },
    answers: [
      {
        id: "a-gilti-019-1",
        questionId: "q-gilti-019",
        articleContent: {
          sections: [
            {
              heading: "Step 1: Compute deduction eligible income (DEI)",
              body: "DEI is the corporation's gross income minus deductions allocable to that income, excluding certain items (Subpart F inclusions, GILTI, dividends from CFCs, domestic oil/gas income, and foreign branch income). Assuming all $10M of your revenue and $7M of deductions are eligible, your DEI = $10M - $7M = $3 million.",
            },
            {
              heading: "Step 2: Compute foreign-derived deduction eligible income (FDDEI)",
              body: "FDDEI is the portion of DEI derived from serving foreign markets. If $6M of your $10M gross income is from foreign customers, the FDDEI ratio is $6M / $10M = 60%. Applying this ratio to DEI: FDDEI = $3M x 60% = $1.8 million. Note: the regulations may require a more precise allocation of deductions between foreign and domestic income, but this simplified approach illustrates the concept.",
            },
            {
              heading: "Step 3: Compute deemed intangible income (DII)",
              body: "DII = DEI minus 10% of QBAI. Your QBAI (average adjusted basis of depreciable tangible property using ADS) is $2 million. DII = $3M - (10% x $2M) = $3M - $200K = $2.8 million. This represents the portion of your income deemed attributable to intangible value (since a 10% return on tangible assets is excluded).",
            },
            {
              heading: "Step 4: Compute FDII",
              body: "FDII = DII x (FDDEI / DEI). FDII = $2.8M x ($1.8M / $3M) = $2.8M x 60% = $1.68 million. This is your foreign-derived intangible income.",
            },
            {
              heading: "Step 5: Apply the Section 250 deduction",
              body: "For tax years beginning before 2026, the deduction is 37.5% of FDII. Section 250 deduction = $1.68M x 37.5% = $630,000. At a 21% tax rate, this deduction saves you $630K x 21% = $132,300 in taxes. Your effective tax rate on the FDII portion of income drops from 21% to about 13.125%. For a $3M total taxable income company, this is a meaningful savings. Report this on Form 8993.",
            },
            {
              heading: "Maximizing FDII",
              body: "FDII is maximized when: (1) a high percentage of revenue comes from foreign customers, (2) tangible assets (QBAI) are low (since 10% of QBAI is subtracted from DII), and (3) the corporation has substantial taxable income (the deduction cannot exceed taxable income). Software, consulting, and IP licensing businesses tend to benefit the most because they have high margins, low tangible assets, and often significant foreign revenue. Maintaining proper documentation of foreign customer status and foreign use is essential for supporting the deduction on audit.",
            },
          ],
          keyTakeaways: [
            "FDII = DII x (FDDEI / DEI), where DII = DEI minus 10% of QBAI",
            "In your example: DEI = $3M, FDDEI = $1.8M, DII = $2.8M, FDII = $1.68M, deduction = $630K",
            "The deduction saves approximately $132K in taxes on $3M of taxable income",
            "Low tangible assets and high foreign revenue percentage maximize the FDII benefit",
            "The deduction drops from 37.5% to 21.875% for tax years beginning after December 31, 2025",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-13T10:30:00Z",
        sources: [
          { label: "IRC Section 250 — FDII and GILTI Deduction", url: "https://www.law.cornell.edu/uscode/text/26/250" },
          { label: "IRS — About Form 8993 (Section 250 Deduction)", url: "https://www.irs.gov/forms-pubs/about-form-8993" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #20: Section 962 Election
  // =====================================================
  {
    question: {
      id: "q-gilti-020",
      isFeatured: true,
      title: "What is the Section 962 election and why would an individual CFC shareholder make it?",
      body: "I'm a U.S. citizen who owns a CFC through a personal holding structure (not through a U.S. corporation). My CPA says I should consider a 'Section 962 election' to reduce my tax on GILTI and Subpart F income. She says it lets me get taxed at corporate rates instead of my individual rate. How does this work? What are the benefits and downsides? And what happens when the CFC eventually distributes the income as a dividend?",
      author: {
        displayName: "Gregory B.",
        avatarSeed: "sec962-election-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["Section 962", "election", "individual shareholder", "corporate rates", "CFC", "GILTI", "PTI"],
      postedAt: "2026-03-22T13:30:00Z",
      viewCount: 2123,
      answerCount: 1,
      status: "answered",
      seoTitle: "Section 962 Election: Corporate Rates for Individual CFC Shareholders",
      seoDescription: "How the Section 962 election lets individual U.S. shareholders of CFCs pay corporate rates on GILTI and Subpart F income. Benefits, drawbacks, and the PTI distribution trap.",
    },
    answers: [
      {
        id: "a-gilti-020-1",
        questionId: "q-gilti-020",
        articleContent: {
          sections: [
            {
              heading: "What Section 962 does",
              body: "IRC Section 962 allows an individual U.S. shareholder of a CFC to elect to be taxed on their Subpart F and GILTI inclusions as if they were a domestic corporation. This means the individual pays the corporate tax rate (21%) on these inclusions instead of their individual marginal rate (up to 37%). Additionally, the electing individual can claim deemed-paid foreign tax credits under Section 960 — credits that are normally only available to corporate shareholders. This can significantly reduce or eliminate the U.S. tax on CFC income that has already been taxed abroad.",
            },
            {
              heading: "Benefits of the election",
              body: "The primary benefits are: (1) a lower rate — 21% corporate rate vs. up to 37% individual rate; (2) access to Section 250 deduction for GILTI (50% deduction, effectively reducing the rate to 10.5%); (3) deemed-paid foreign tax credits under Section 960, allowing offset for foreign taxes paid by the CFC; and (4) for GILTI specifically, the combination of the Section 250 deduction and Section 960 credits can reduce the effective U.S. tax to near zero if the CFC pays foreign taxes at a rate above approximately 13.125%. Without Section 962, individuals pay up to 37% on GILTI with no Section 250 deduction and no deemed-paid credits.",
            },
            {
              heading: "The PTI distribution problem",
              body: "The major downside of Section 962 relates to previously taxed income (PTI). When you make a Section 962 election and include CFC income at corporate rates, the income becomes PTI under IRC 959 — meaning future distributions of that income should not be taxed again as dividends. However, there is a catch: when the CFC eventually distributes the PTI as an actual dividend, the individual must include as ordinary income the excess of the cash distribution over the tax already paid under the Section 962 election. In effect, you get deferred taxation on the difference between the corporate-rate tax you paid and the individual-rate tax you would have paid. This is sometimes called the \"second layer\" of tax on Section 962 PTI distributions.",
            },
            {
              heading: "How to make the election",
              body: "The Section 962 election is made annually by attaching a statement to the individual's timely filed income tax return (including extensions). The statement must include: the individual's name and address; a declaration that the election is being made under Section 962; a list of the CFCs for which the election applies; and the amounts of income, deductions, and credits being claimed. The election can be made selectively for different types of income (e.g., electing for GILTI but not Subpart F, or vice versa, depending on the tax characteristics of each). Once made for a tax year, it applies to that year; it can be made or not made independently each year.",
            },
            {
              heading: "When Section 962 makes sense",
              body: "Section 962 is most beneficial when: (1) the CFC pays substantial foreign taxes (making the deemed-paid credits valuable); (2) the CFC is not expected to distribute earnings for many years (deferring the PTI distribution tax); (3) the individual's marginal rate significantly exceeds the corporate rate; or (4) the individual plans to eventually contribute the CFC shares to a domestic corporation (which could take the PTI distributions without the second-layer tax). It makes less sense when the CFC will distribute earnings soon, when foreign tax rates are very low (no credits to claim), or when the individual's rate is close to the corporate rate.",
            },
            {
              heading: "Reporting and compliance",
              body: "The Section 962 election requires detailed record-keeping. The individual must track PTI balances by year and by type (Subpart F vs. GILTI), track foreign taxes paid and credits claimed, and compute the second-layer tax on each distribution. Form 5471 and Form 8992 are still required. The election statement is attached to Form 1040. Many tax preparers find Section 962 computations challenging because the tax software may not fully support the election mechanics, particularly the PTI tracking and distribution tax calculations.",
            },
          ],
          keyTakeaways: [
            "Section 962 lets individuals be taxed at the 21% corporate rate on CFC inclusions instead of up to 37%",
            "It also unlocks the Section 250 deduction for GILTI and deemed-paid foreign tax credits under Section 960",
            "The major downside is the second-layer tax when the CFC distributes PTI — the excess over tax already paid is taxed as a dividend",
            "The election is made annually by attaching a statement to Form 1040; it can be made selectively by income type",
            "Most beneficial when CFCs pay high foreign taxes and will not distribute earnings for an extended period",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-23T11:00:00Z",
        sources: [
          { label: "IRC Section 962 — Election by Individuals", url: "https://www.law.cornell.edu/uscode/text/26/962" },
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
          { label: "IRC Section 959 — Previously Taxed Income", url: "https://www.law.cornell.edu/uscode/text/26/959" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #21: Previously Taxed Income (PTI) under IRC 959
  // =====================================================
  {
    question: {
      id: "q-gilti-021",
      isFeatured: false,
      title: "What is Previously Taxed Income (PTI) and how does IRC 959 work for CFC distributions?",
      body: "My CFC has been operating for several years and I've been including Subpart F and GILTI income on my U.S. tax return. Now the CFC is about to distribute a large dividend. My understanding is that I shouldn't be taxed again on income I've already paid U.S. tax on. How does the PTI exclusion work under IRC 959? And how do I track which earnings have been previously taxed?",
      author: {
        displayName: "Richard K.",
        avatarSeed: "pti-959-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["PTI", "previously taxed income", "IRC 959", "CFC distributions", "Subpart F", "GILTI", "dividends"],
      postedAt: "2026-03-25T09:15:00Z",
      viewCount: 1567,
      answerCount: 1,
      status: "answered",
      seoTitle: "Previously Taxed Income (PTI): IRC 959 and CFC Distributions",
      seoDescription: "How IRC 959 prevents double taxation of CFC earnings already included in a U.S. shareholder's income. PTI tracking, distribution ordering rules, and the new 2023 PTI regulations.",
    },
    answers: [
      {
        id: "a-gilti-021-1",
        questionId: "q-gilti-021",
        articleContent: {
          sections: [
            {
              heading: "The purpose of IRC 959",
              body: "IRC Section 959 prevents double taxation of CFC earnings that have already been included in a U.S. shareholder's income under Subpart F (IRC 951(a)) or GILTI (IRC 951A). When a CFC distributes earnings that were previously included in a U.S. shareholder's gross income (\"previously taxed income\" or PTI), the distribution is excluded from the shareholder's gross income to the extent of the PTI balance. Without this rule, the same income would be taxed once when included under Subpart F/GILTI and again when actually distributed as a dividend.",
            },
            {
              heading: "The PTI categories",
              body: "IRC 959(c) establishes three tiers of CFC earnings for ordering distributions: (1) Section 959(c)(1) — earnings attributable to amounts included under Section 956 (investments in U.S. property); (2) Section 959(c)(2) — earnings attributable to Subpart F and GILTI inclusions that have been previously taxed; (3) Section 959(c)(3) — all other earnings and profits (untaxed E&P). Distributions are treated as coming first from PTI categories (c)(1), then (c)(2), and finally from (c)(3). Only distributions from (c)(3) are taxable as dividends.",
            },
            {
              heading: "Tracking PTI by year and category",
              body: "U.S. shareholders must maintain detailed PTI accounts for each CFC, tracking: the year the income was included, the category of inclusion (Subpart F vs. GILTI), the amount of PTI and associated foreign taxes, and distributions that reduce the PTI balance. This tracking is done on Form 5471, Schedule J (accumulated E&P) and Schedule P (previously taxed E&P). The final regulations issued in 2023 (T.D. 9982) significantly revised the PTI tracking rules, establishing an annual PTEP (previously taxed earnings and profits) account system with specific ordering rules for distributions and reclassifications.",
            },
            {
              heading: "Foreign currency considerations",
              body: "PTI accounts must be maintained in the CFC's functional currency. When a distribution of PTI is made, the U.S. shareholder must convert the distribution at the exchange rate that applied when the income was originally included. This can result in foreign currency gain or loss — the difference between the exchange rate at inclusion and the exchange rate at distribution. Under the 2023 regulations, detailed rules specify how exchange rates are tracked and applied to each annual PTEP account.",
            },
            {
              heading: "The practical impact for your situation",
              body: "If your CFC distributes a dividend and you have sufficient PTI balance from prior Subpart F and GILTI inclusions, the distribution should be excluded from your income to the extent of PTI. Any distribution in excess of your PTI balance would be taxable as a dividend from the CFC's non-previously-taxed E&P. To properly claim the exclusion, you must have accurate PTI tracking records and complete Schedule P of Form 5471. Your CPA should reconcile the CFC's total E&P with the PTI accounts to determine how much of the planned distribution is tax-free.",
            },
          ],
          keyTakeaways: [
            "IRC 959 excludes CFC distributions from income to the extent they represent previously taxed income (PTI) from Subpart F or GILTI inclusions",
            "Distributions are ordered: first from PTI categories (tax-free), then from untaxed E&P (taxable as dividends)",
            "PTI must be tracked by year, category, and CFC on Form 5471 Schedules J and P",
            "The 2023 final PTEP regulations (T.D. 9982) significantly revised tracking and ordering rules",
            "Foreign currency gains or losses arise when PTI is distributed at a different exchange rate than when originally included",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-26T10:00:00Z",
        sources: [
          { label: "IRC Section 959 — Previously Taxed Income", url: "https://www.law.cornell.edu/uscode/text/26/959" },
          { label: "IRS — About Form 5471", url: "https://www.irs.gov/forms-pubs/about-form-5471" },
          { label: "IRS — Controlled Foreign Corporations", url: "https://www.irs.gov/individuals/international-taxpayers/controlled-foreign-corporations" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #22: Branch Profits Tax (IRC 884)
  // =====================================================
  {
    question: {
      id: "q-gilti-022",
      isFeatured: false,
      title: "What is the branch profits tax under IRC 884 and how does it apply to foreign corporations?",
      body: "I'm a foreign corporation doing business in the U.S. through a branch (not a subsidiary). My U.S. tax advisor mentioned something called the 'branch profits tax' in addition to regular corporate income tax. What is it, why does it exist, and how is it calculated? Can a tax treaty reduce or eliminate it?",
      author: {
        displayName: "Hans W.",
        avatarSeed: "branch-profits-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["branch profits tax", "IRC 884", "foreign corporation", "U.S. branch", "dividend equivalent", "tax treaty"],
      postedAt: "2026-03-28T11:00:00Z",
      viewCount: 1456,
      answerCount: 1,
      status: "answered",
      seoTitle: "Branch Profits Tax (IRC 884): Foreign Corporation Guide",
      seoDescription: "How the branch profits tax under IRC 884 works for foreign corporations with U.S. operations. 30% tax on dividend equivalent amounts, treaty reductions, and calculation mechanics.",
    },
    answers: [
      {
        id: "a-gilti-022-1",
        questionId: "q-gilti-022",
        articleContent: {
          sections: [
            {
              heading: "Purpose of the branch profits tax",
              body: "The branch profits tax (BPT) under IRC Section 884 imposes a 30% tax on a foreign corporation's \"dividend equivalent amount\" (DEA) from its U.S. branch operations. It exists to equalize the tax treatment between a foreign corporation operating in the U.S. through a branch and one operating through a U.S. subsidiary. A U.S. subsidiary that distributes dividends to its foreign parent is subject to a 30% withholding tax on those dividends. Without the BPT, a foreign corporation could avoid this second layer of tax simply by operating through a branch instead of a subsidiary, since branch profits are not \"dividends\" subject to withholding.",
            },
            {
              heading: "How the dividend equivalent amount (DEA) is calculated",
              body: "The DEA is essentially the foreign corporation's effectively connected earnings and profits (ECEP) that are deemed to be \"removed\" from the U.S. branch. It is calculated as: ECEP for the year, minus the increase (or plus the decrease) in the corporation's \"U.S. net equity\" (U.S.-connected assets minus U.S.-connected liabilities). If the corporation reinvests its profits in U.S. assets (increasing U.S. net equity), the DEA is reduced because the profits are deemed to remain in the U.S. If profits are repatriated or U.S. net equity decreases, the DEA increases. ECEP is the portion of the foreign corporation's E&P attributable to effectively connected income.",
            },
            {
              heading: "Tax rate and treaty reductions",
              body: "The statutory BPT rate is 30%, the same as the statutory dividend withholding rate. However, many U.S. tax treaties reduce or eliminate the branch profits tax. The treaty rate typically mirrors the treaty's dividend withholding rate. For example, the U.S.-UK treaty may reduce the BPT to 5%, and some treaties eliminate it entirely. To claim a treaty reduction, the foreign corporation must qualify as a resident of the treaty country and satisfy any limitation on benefits (LOB) provisions. The treaty benefit is claimed on the corporation's Form 1120-F.",
            },
            {
              heading: "Interaction with regular corporate income tax",
              body: "The BPT is imposed in addition to the regular corporate income tax (which applies to the foreign corporation's effectively connected income at the standard 21% rate). So a foreign corporation with U.S. branch operations potentially faces two layers of tax: (1) 21% income tax on ECI, and (2) 30% BPT on the DEA. Combined, the maximum effective rate can be substantial — approximately 44.7% (21% + 30% x 79%) without treaty relief. This is by design, as it mirrors the combined effect of corporate tax plus dividend withholding that would apply to a U.S. subsidiary.",
            },
            {
              heading: "Reporting requirements",
              body: "The branch profits tax is computed on Schedule B of Form 1120-F (U.S. Income Tax Return of a Foreign Corporation). The foreign corporation must report its ECEP, changes in U.S. net equity, the DEA, and the BPT liability. If claiming a treaty reduction, the corporation must disclose the applicable treaty and article and demonstrate eligibility under the LOB provisions. Failure to file Form 1120-F can result in the loss of deductions and credits, making the entire gross income subject to tax.",
            },
          ],
          keyTakeaways: [
            "The branch profits tax imposes a 30% tax on a foreign corporation's dividend equivalent amount from U.S. branch operations",
            "It equalizes tax treatment between U.S. branches and U.S. subsidiaries by replicating the dividend withholding tax",
            "The DEA equals ECEP minus increases in U.S. net equity — reinvesting in U.S. assets reduces the DEA",
            "Tax treaties frequently reduce or eliminate the BPT; claim treaty benefits on Form 1120-F",
            "Combined with the 21% income tax on ECI, the maximum BPT-inclusive rate can reach approximately 44.7% without treaty relief",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-29T09:30:00Z",
        sources: [
          { label: "IRC Section 884 — Branch Profits Tax", url: "https://www.law.cornell.edu/uscode/text/26/884" },
          { label: "IRS — About Form 1120-F", url: "https://www.irs.gov/forms-pubs/about-form-1120-f" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #23: Branch Profits Tax and LLC Structures
  // =====================================================
  {
    question: {
      id: "q-gilti-023",
      isFeatured: false,
      title: "Does the branch profits tax apply to a foreign-owned U.S. LLC treated as a disregarded entity?",
      body: "I'm a non-U.S. individual operating a consulting business through a U.S. single-member LLC. I understand the LLC is a disregarded entity for tax purposes. Does the branch profits tax apply to me? I thought it only applied to foreign corporations, but someone told me the IRS could treat my LLC's activities as a U.S. branch of a foreign person. I'm confused about whether I need to worry about this.",
      author: {
        displayName: "Carlos R.",
        avatarSeed: "bpt-llc-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["branch profits tax", "LLC", "disregarded entity", "foreign individual", "IRC 884", "U.S. trade or business"],
      postedAt: "2026-04-01T14:00:00Z",
      viewCount: 1678,
      answerCount: 1,
      status: "answered",
      seoTitle: "Branch Profits Tax and Foreign-Owned U.S. LLCs",
      seoDescription: "Does the branch profits tax apply to a foreign individual's U.S. LLC? Learn why IRC 884 applies only to foreign corporations and what tax rules apply to foreign individuals with U.S. LLCs instead.",
    },
    answers: [
      {
        id: "a-gilti-023-1",
        questionId: "q-gilti-023",
        articleContent: {
          sections: [
            {
              heading: "BPT applies only to foreign corporations, not individuals",
              body: "IRC Section 884 imposes the branch profits tax on foreign corporations that are engaged in a U.S. trade or business. It does not apply to foreign individuals. If you are a nonresident alien individual operating through a disregarded entity LLC, you are taxed as a foreign individual under IRC 871 (not as a corporation under IRC 882). The branch profits tax simply does not apply to you in this structure.",
            },
            {
              heading: "Why your LLC structure matters",
              body: "A single-member LLC owned by a foreign individual is a disregarded entity for U.S. federal tax purposes. It is not treated as a separate entity — instead, the LLC's income and activities are attributed directly to you, the foreign individual owner. Because you are not a foreign corporation, the BPT (which is specifically imposed on foreign corporations under Section 884) does not apply. Your U.S. tax obligations are governed by the rules for nonresident aliens with effectively connected income: you file Form 1040-NR and pay tax on ECI at graduated individual rates.",
            },
            {
              heading: "When BPT WOULD apply to an LLC",
              body: "The analysis changes if: (1) your LLC elects to be classified as a corporation via Form 8832 (check-the-box election), in which case it would be treated as a domestic corporation and BPT would not apply (BPT applies to foreign corporations, not domestic ones); (2) a foreign corporation owns the LLC as a disregarded entity, in which case the LLC's activities are attributed to the foreign corporation, and BPT could apply to the foreign corporation's U.S. branch operations through the LLC; or (3) a multi-member LLC is treated as a partnership, with a foreign corporate partner — the BPT analysis would depend on the foreign corporation's share of ECI from the partnership.",
            },
            {
              heading: "What taxes DO apply to your structure",
              body: "As a foreign individual with a U.S. disregarded entity LLC, your tax obligations include: (1) income tax on effectively connected income at graduated rates (10%-37%) via Form 1040-NR; (2) Form 5472 reporting for transactions between the LLC and its foreign owner/related parties, filed with a pro forma Form 1120; (3) potential state income taxes; and (4) self-employment tax may apply if you are performing services in the U.S. (though tax treaty provisions may exempt you). You do NOT face the branch profits tax, the 30% withholding tax on FDAP income (to the extent income is ECI), or corporate-level taxes.",
            },
            {
              heading: "Planning consideration: corporate vs. individual classification",
              body: "If your foreign business is structured as a corporation in your home country and that corporation owns the U.S. LLC, the analysis is different. The foreign corporation would be subject to corporate income tax on ECI (21% flat rate) plus potentially the branch profits tax (30% on the DEA). In contrast, you as an individual face graduated rates up to 37% but no BPT. The choice between individual and corporate ownership of a U.S. LLC involves comparing these tax structures, considering treaty benefits, and evaluating whether the combined corporate + BPT rate is higher or lower than the individual rate for your income level.",
            },
          ],
          keyTakeaways: [
            "The branch profits tax under IRC 884 applies only to foreign corporations, not to foreign individuals",
            "A foreign individual's disregarded-entity LLC is taxed under individual rules (Form 1040-NR), with no BPT exposure",
            "BPT becomes relevant if a foreign corporation owns the LLC as a disregarded entity, attributing branch operations to the corporation",
            "Foreign individuals with U.S. LLCs face ECI tax (graduated rates), Form 5472 reporting, and potential state taxes — not BPT",
            "Choosing between individual and corporate ownership affects whether BPT applies and the overall combined tax rate",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-02T10:00:00Z",
        sources: [
          { label: "IRC Section 884 — Branch Profits Tax", url: "https://www.law.cornell.edu/uscode/text/26/884" },
          { label: "IRC Section 871 — Nonresident Alien Individuals", url: "https://www.law.cornell.edu/uscode/text/26/871" },
          { label: "IRS — About Form 5472", url: "https://www.irs.gov/forms-pubs/about-form-5472" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #24: Earnings Stripping / Interest Limitation (IRC 163(j))
  // =====================================================
  {
    question: {
      id: "q-gilti-024",
      isFeatured: false,
      title: "How do the earnings stripping and interest limitation rules under IRC 163(j) affect foreign-owned U.S. entities?",
      body: "Our U.S. company is funded largely through intercompany loans from our foreign parent. We pay about $15 million per year in interest to the parent. I've heard about 'earnings stripping' rules and Section 163(j) limitations on interest deductions. How do these rules work, and is there a risk that our interest deductions could be disallowed? We have about $40 million in adjusted taxable income.",
      author: {
        displayName: "Sophie L.",
        avatarSeed: "163j-interest-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["IRC 163(j)", "interest limitation", "earnings stripping", "foreign-owned", "intercompany loans", "ATI"],
      postedAt: "2026-04-03T15:00:00Z",
      viewCount: 1234,
      answerCount: 1,
      status: "answered",
      seoTitle: "Interest Limitation Rules (IRC 163(j)) for Foreign-Owned Entities",
      seoDescription: "How IRC 163(j) limits interest deductions for foreign-owned U.S. entities. The 30% ATI limitation, business interest expense rules, and interaction with intercompany loans from foreign parents.",
    },
    answers: [
      {
        id: "a-gilti-024-1",
        questionId: "q-gilti-024",
        articleContent: {
          sections: [
            {
              heading: "The current Section 163(j) limitation",
              body: "The TCJA significantly revised IRC Section 163(j), which now limits the deduction for business interest expense to the sum of: (1) business interest income, (2) 30% of the taxpayer's adjusted taxable income (ATI), and (3) floor plan financing interest. For tax years beginning after 2021, ATI is computed without adding back depreciation, amortization, or depletion — making it closer to EBIT than EBITDA. Any disallowed business interest expense carries forward indefinitely. This limitation applies to all taxpayers (not just those with related-party debt), but it disproportionately affects highly leveraged entities, including foreign-owned U.S. companies funded by intercompany loans.",
            },
            {
              heading: "Applying the limit to your situation",
              body: "With $40 million in ATI, your Section 163(j) limit is 30% x $40M = $12 million (assuming zero business interest income and floor plan financing). Your $15 million in interest expense exceeds this by $3 million. The excess $3 million is disallowed in the current year and carries forward to future tax years. This means you can only deduct $12 million of your $15 million interest payment, even though the interest is owed to a related party at arm's-length rates.",
            },
            {
              heading: "The old earnings stripping rule vs. the new 163(j)",
              body: "Before the TCJA, the old Section 163(j) (sometimes called the \"earnings stripping\" rule) specifically targeted interest paid by thinly capitalized U.S. entities to related foreign parties exempt from U.S. tax. It disallowed excess interest expense when: (1) the debt-to-equity ratio exceeded 1.5 to 1, and (2) net interest expense exceeded 50% of adjusted taxable income. The TCJA replaced this targeted rule with the broader 30% ATI limitation that applies to all business interest, regardless of whether it is paid to a related foreign party. The new rule is both broader (applies to all taxpayers) and in some cases more restrictive (30% vs. 50% threshold, and no debt-to-equity safe harbor).",
            },
            {
              heading: "Interaction with transfer pricing rules",
              body: "Even if your interest deductions pass the Section 163(j) limitation, the interest rate on intercompany loans must be at arm's length under Section 482. The IRS can adjust the interest rate if it determines that the rate on the intercompany loan is not comparable to what unrelated parties would charge. Additionally, thin capitalization issues can arise under transfer pricing principles — if the U.S. entity is funded with an unreasonable proportion of debt relative to equity, the IRS may recharacterize some of the \"debt\" as equity, converting \"interest\" into non-deductible dividends.",
            },
            {
              heading: "Small business exemption and elections",
              body: "Businesses with average annual gross receipts of $30 million or less over the prior three years are exempt from Section 163(j). Certain industries (such as real property trades or businesses) can elect out of the limitation, though this comes with trade-offs (required use of the alternative depreciation system). For foreign-owned U.S. entities with gross receipts above the threshold, the 30% ATI limit is the binding constraint, and careful planning around the timing of income and deductions can help manage the limitation.",
            },
          ],
          keyTakeaways: [
            "Section 163(j) limits business interest deductions to 30% of adjusted taxable income (ATI), with excess carrying forward",
            "In your case, the $12M limit (30% x $40M ATI) disallows $3M of your $15M interest payment",
            "The TCJA replaced the old earnings-stripping rule with a broader 30% ATI limitation applying to all business interest",
            "Intercompany loan interest must also satisfy arm's-length pricing under Section 482 and thin-capitalization principles",
            "Small businesses with $30M or less in average gross receipts are exempt from the limitation",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-04T10:30:00Z",
        sources: [
          { label: "IRC Section 163(j) — Interest Deduction Limitation", url: "https://www.law.cornell.edu/uscode/text/26/163" },
          { label: "IRS — About Form 8990 (Interest Expense Limitation)", url: "https://www.irs.gov/forms-pubs/about-form-8990" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #25: Interest Limitation for Foreign-Owned LLCs
  // =====================================================
  {
    question: {
      id: "q-gilti-025",
      isFeatured: false,
      title: "Do interest limitation rules apply to a foreign-owned single-member LLC with intercompany loans?",
      body: "My foreign company lent money to my U.S. LLC to fund operations. The LLC pays interest back to my foreign company. Does the Section 163(j) interest limitation apply to a disregarded entity LLC? If so, how does it work when the LLC doesn't file its own corporate return? Also, does the interest I pay to my foreign company create a withholding tax obligation?",
      author: {
        displayName: "Pierre D.",
        avatarSeed: "llc-interest-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["interest limitation", "IRC 163(j)", "foreign-owned LLC", "disregarded entity", "withholding tax", "intercompany loans"],
      postedAt: "2026-04-05T09:30:00Z",
      viewCount: 1098,
      answerCount: 1,
      status: "answered",
      seoTitle: "Interest Limitation Rules for Foreign-Owned Single-Member LLCs",
      seoDescription: "How Section 163(j) interest limits apply to foreign-owned disregarded entity LLCs, withholding tax on interest to foreign parents, and Form 1042 reporting requirements.",
    },
    answers: [
      {
        id: "a-gilti-025-1",
        questionId: "q-gilti-025",
        articleContent: {
          sections: [
            {
              heading: "Section 163(j) and disregarded entities",
              body: "For a single-member LLC owned by a foreign corporation and treated as a disregarded entity, the LLC's activities are attributed to the foreign corporation for tax purposes. If the foreign corporation is engaged in a U.S. trade or business through the LLC (generating effectively connected income), the Section 163(j) limitation applies at the foreign corporation level on Form 1120-F. The interest expense on the intercompany loan is part of the foreign corporation's ECI deductions and is subject to the 30% ATI limitation. If the foreign owner is an individual filing Form 1040-NR, the same analysis applies — interest expense allocable to ECI is subject to 163(j).",
            },
            {
              heading: "The disregarded entity loan question",
              body: "A critical threshold question is whether a loan from a foreign owner to its own disregarded entity LLC is respected as a loan for U.S. tax purposes. Since the LLC is disregarded, the foreign owner and the LLC are treated as the same taxpayer. A taxpayer cannot lend money to itself. Under Treasury Regulations Section 301.7701-2(c)(2)(i), some transactions between a disregarded entity and its owner are disregarded for federal tax purposes, while others (like those reportable on Form 5472) are treated as transactions for reporting purposes. Whether the interest deduction is available at all depends on whether the debt is respected — and interest paid to oneself is generally not deductible. Consult your tax advisor on this fact-specific issue.",
            },
            {
              heading: "When the loan is between two separate entities",
              body: "If instead the loan is from a foreign parent corporation to a U.S. LLC that is owned by a separate foreign subsidiary (making the LLC a disregarded entity of the subsidiary, not the lender), the loan is between two separate taxpayers and the interest deduction is generally available (subject to arm's-length requirements and Section 163(j)). Similarly, if the LLC is a multi-member entity treated as a partnership, loans from a foreign member are between separate taxpayers and interest may be deductible.",
            },
            {
              heading: "Withholding tax on interest to foreign persons",
              body: "Interest paid to a foreign person (whether an individual or corporation) from U.S. sources is generally subject to 30% withholding tax under IRC 1441/1442, unless an exception or treaty reduction applies. Common exceptions include the portfolio interest exemption (IRC 871(h)/881(c)) for interest on registered obligations not owned by a 10%-or-greater shareholder, and treaty-based reductions (many treaties reduce the withholding rate on interest to 0-15%). The LLC (or the withholding agent) must file Form 1042 and Form 1042-S to report the interest and any withholding. The foreign recipient must provide Form W-8BEN or W-8BEN-E to claim treaty benefits.",
            },
            {
              heading: "Reporting obligations",
              body: "Even if the interest deduction is limited or disallowed, reporting is still required. The LLC must report the intercompany loan and interest payments on Form 5472 as reportable transactions with a foreign related party. If withholding tax applies, Form 1042 (annual return) and Form 1042-S (information return for the foreign recipient) must be filed. If claiming a Section 163(j) limitation, Form 8990 is filed with the tax return. Failure to report intercompany transactions on Form 5472 carries a $25,000 penalty per form, per year.",
            },
          ],
          keyTakeaways: [
            "Section 163(j) applies to interest deductions at the foreign owner level (Form 1120-F or 1040-NR) when the LLC is a disregarded entity",
            "A loan from a foreign owner to its own disregarded entity may not be respected as a loan since they are the same taxpayer for tax purposes",
            "Interest paid to foreign persons is generally subject to 30% withholding, reducible by treaty or the portfolio interest exemption",
            "Report intercompany loans and interest on Form 5472; file Form 1042/1042-S for withholding on interest payments",
            "Always verify that intercompany interest rates are at arm's length under Section 482",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-06T11:00:00Z",
        sources: [
          { label: "IRC Section 163(j) — Interest Deduction Limitation", url: "https://www.law.cornell.edu/uscode/text/26/163" },
          { label: "IRS — About Form 5472", url: "https://www.irs.gov/forms-pubs/about-form-5472" },
          { label: "IRS — About Form 1042", url: "https://www.irs.gov/forms-pubs/about-form-1042" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #26: PFIC Overview
  // =====================================================
  {
    question: {
      id: "q-gilti-026",
      isFeatured: false,
      title: "What is a PFIC and how does it affect U.S. persons investing in foreign companies?",
      body: "I'm a U.S. citizen and I hold shares in a foreign investment fund that a friend recommended. I just learned about something called PFIC — Passive Foreign Investment Company — and the penalties for not reporting it sound terrifying. Can you explain what a PFIC is, how the punitive tax regime works, and what elections I can make to reduce the tax impact? I don't even know how to tell if my fund is a PFIC.",
      author: {
        displayName: "Thomas A.",
        avatarSeed: "pfic-overview-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["PFIC", "passive foreign investment company", "IRC 1291", "QEF election", "mark-to-market", "Form 8621"],
      postedAt: "2026-02-18T10:00:00Z",
      viewCount: 2234,
      answerCount: 1,
      status: "answered",
      seoTitle: "PFIC Explained: Passive Foreign Investment Company Rules",
      seoDescription: "What is a PFIC? Understand the punitive default tax regime under IRC 1291, how to identify PFICs, and the QEF and mark-to-market elections that can mitigate the tax impact.",
    },
    answers: [
      {
        id: "a-gilti-026-1",
        questionId: "q-gilti-026",
        articleContent: {
          sections: [
            {
              heading: "What makes a company a PFIC",
              body: "Under IRC Section 1297, a foreign corporation is a PFIC if it meets either: (1) the income test — 75% or more of its gross income is passive income (dividends, interest, rents, royalties, gains from property sales, etc.); or (2) the asset test — 50% or more of its assets (by average value) produce or are held to produce passive income. Most foreign mutual funds, ETFs, and investment holding companies meet one or both tests. Even some operating companies can inadvertently be PFICs if they hold large cash reserves (which are passive assets) relative to their total asset base.",
            },
            {
              heading: "The punitive default tax regime (Section 1291)",
              body: "If you are a U.S. person who owns shares in a PFIC and makes no election, the default tax regime under IRC 1291 applies. It is intentionally punitive: when you receive an \"excess distribution\" (a distribution exceeding 125% of the average distributions over the prior three years) or sell the PFIC shares at a gain, the income is allocated ratably over your entire holding period. The portion allocated to prior years is taxed at the highest individual rate for each prior year, plus interest is charged as if the tax had been due in each of those prior years. This results in an effective tax rate that can exceed 50% — far above the normal capital gains rate.",
            },
            {
              heading: "QEF election (Qualified Electing Fund)",
              body: "The QEF election under IRC 1295 allows you to include your pro rata share of the PFIC's ordinary earnings and net capital gains in your income each year, similar to a pass-through. Ordinary earnings are taxed at ordinary rates; net capital gains are taxed at the preferential long-term capital gains rate. This avoids the punitive Section 1291 regime but requires you to pay tax currently on income you may not have received. The QEF election requires that the PFIC provide you with a \"PFIC annual information statement\" detailing its ordinary earnings and net capital gains. Many foreign funds do not provide this information, making the QEF election impractical.",
            },
            {
              heading: "Mark-to-market election",
              body: "The mark-to-market (MTM) election under IRC 1296 allows you to include the increase in the fair market value of your PFIC shares as ordinary income each year (and deduct decreases, limited to prior MTM gains). This is simpler than the QEF election and does not require the PFIC to provide an annual information statement. However, all gains are treated as ordinary income (no capital gains rates), and the election is only available for PFIC stock that is \"marketable\" — traded on a qualified exchange. For a foreign investment fund that is publicly traded, MTM is often the most practical election.",
            },
            {
              heading: "Reporting on Form 8621",
              body: "U.S. persons who own shares in a PFIC must file Form 8621 (Information Return by a Shareholder of a Passive Foreign Investment Company or Qualified Electing Fund) for each PFIC they own. Form 8621 is attached to the shareholder's income tax return. Filing is required each year you own PFIC shares, even if there are no distributions or dispositions. Failure to file can extend the statute of limitations on your entire return. The form reports the PFIC's identity, your basis and holding period, any elections made, and the tax computation under the applicable regime.",
            },
            {
              heading: "How to tell if your fund is a PFIC",
              body: "Foreign investment funds, including foreign mutual funds and ETFs, are almost always PFICs because their income is predominantly passive (investment income) and their assets are passive (securities). If you hold shares in any non-U.S. registered investment fund, it is very likely a PFIC. Some funds will explicitly state their PFIC status in their prospectus or provide annual PFIC statements. If in doubt, assume it is a PFIC and file Form 8621 — the penalties for non-filing are severe, and filing when not required causes no harm.",
            },
          ],
          keyTakeaways: [
            "A PFIC is a foreign corporation with 75%+ passive income or 50%+ passive assets — most foreign funds qualify",
            "The default Section 1291 regime is punitive: excess distributions are taxed at the highest rates plus interest charges",
            "The QEF election provides the most favorable treatment (capital gains rates) but requires annual information from the PFIC",
            "The mark-to-market election is practical for publicly traded PFICs but treats all gains as ordinary income",
            "File Form 8621 every year you own PFIC shares — failure to file keeps your entire tax return open to audit indefinitely",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-19T14:00:00Z",
        sources: [
          { label: "IRS — About Form 8621", url: "https://www.irs.gov/forms-pubs/about-form-8621" },
          { label: "IRC Section 1297 — PFIC Defined", url: "https://www.law.cornell.edu/uscode/text/26/1297" },
          { label: "IRC Section 1291 — Default PFIC Tax Regime", url: "https://www.law.cornell.edu/uscode/text/26/1291" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #27: Form 8621 PFIC Reporting
  // =====================================================
  {
    question: {
      id: "q-gilti-027",
      isFeatured: false,
      title: "What do I need to know about filing Form 8621 for PFIC reporting?",
      body: "I have investments in two foreign funds that I've now confirmed are PFICs. I've owned them for three years and never filed Form 8621. I'm terrified about the penalties. What information do I need to complete the form? Can I file late? And should I make a QEF or mark-to-market election retroactively?",
      author: {
        displayName: "Barbara N.",
        avatarSeed: "form8621-filer-2026",
        badge: "new-member" as const,
      },
      category: "international",
      tags: ["Form 8621", "PFIC", "late filing", "QEF election", "mark-to-market", "penalties"],
      postedAt: "2026-03-30T13:00:00Z",
      viewCount: 1567,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 8621 PFIC Reporting: Filing Requirements and Late Filing",
      seoDescription: "Complete guide to Form 8621 for PFIC shareholders: required information, election options, how to file late returns, and resolving years of non-compliance.",
    },
    answers: [
      {
        id: "a-gilti-027-1",
        questionId: "q-gilti-027",
        articleContent: {
          sections: [
            {
              heading: "What Form 8621 requires",
              body: "Form 8621 requires the following for each PFIC: the PFIC's name, address, and identifying number (if available); the class of shares you own and the date acquired; your basis in the shares; the fair market value at year-end; distributions received during the year; gains on dispositions; the election you are making (if any); and the tax computation under the applicable regime. You must file a separate Form 8621 for each PFIC you own, attached to your income tax return.",
            },
            {
              heading: "Addressing three years of non-filing",
              body: "The good news is that Form 8621 does not have a separate standalone penalty (unlike Form 5471 or FBAR). However, failure to file Form 8621 has two significant consequences: (1) the statute of limitations on your entire tax return does not begin to run for any year in which Form 8621 was required but not filed (IRC 6501(c)(8)); and (2) you may be subject to accuracy-related penalties if PFIC income was not properly reported. To come into compliance, you have several options: file amended returns (Form 1040-X) with Form 8621 attached for each missed year, consider the IRS Streamlined Filing Compliance Procedures (if you qualify as non-willful), or in severe cases, make a voluntary disclosure.",
            },
            {
              heading: "Making elections for prior years",
              body: "A QEF election must generally be made on the shareholder's timely filed return (including extensions) for the first year the election is effective. A late QEF election requires IRS consent under Treas. Reg. 1.1295-3, which involves demonstrating reasonable cause. The mark-to-market election under IRC 1296 must also be made on a timely filed return for the first year the stock is \"marketable stock\" in the shareholder's hands. However, you can make a \"purging election\" under Section 1291(d)(2) — either by deemed sale or deemed dividend — to purge the taint of the Section 1291 regime and then apply the QEF or MTM election going forward. This results in recognizing all gain (or including all E&P) as of the purge date but allows cleaner treatment in future years.",
            },
            {
              heading: "Practical steps to come into compliance",
              body: "Step 1: Gather year-end fair market values, distributions received, and any disposition information for each PFIC for all open years. Step 2: Compute the Section 1291 tax (if no election was or will be made) or model the QEF/MTM alternatives. Step 3: Prepare Form 8621 for each PFIC for each year. Step 4: Consider the Streamlined Filing Compliance Procedures if you have been a non-willful non-filer — this program allows filing amended returns (or delinquent returns) without penalties. Step 5: File and pay any tax due. Working with a tax professional experienced in international compliance is strongly recommended.",
            },
            {
              heading: "Going forward: annual compliance",
              body: "Once you are in compliance, file Form 8621 every year you hold PFIC shares, even if there are no distributions or dispositions. If you make a QEF or MTM election, include the annual income in your return. Keep records of your basis, holding period, and all prior-year computations, as these are needed for future disposition calculations. If the PFIC is a foreign mutual fund, consider whether selling it and reinvesting in a U.S.-registered fund would be simpler — many U.S. persons ultimately divest from PFICs due to the ongoing compliance burden and punitive tax treatment.",
            },
          ],
          keyTakeaways: [
            "File a separate Form 8621 for each PFIC each year; it requires share details, FMV, distributions, and election choices",
            "Non-filing keeps your entire tax return open to audit indefinitely — address this promptly by filing amended returns",
            "Late QEF or MTM elections require IRS consent or a purging election to remove the Section 1291 taint",
            "The IRS Streamlined Filing Compliance Procedures may allow penalty-free catch-up filing if you were non-willful",
            "Consider divesting from PFICs and reinvesting in U.S.-registered funds to avoid ongoing compliance burden",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-31T10:30:00Z",
        sources: [
          { label: "IRS — About Form 8621", url: "https://www.irs.gov/forms-pubs/about-form-8621" },
          { label: "IRS — Streamlined Filing Compliance Procedures", url: "https://www.irs.gov/individuals/international-taxpayers/streamlined-filing-compliance-procedures" },
          { label: "IRC Section 1291 — Default PFIC Tax Regime", url: "https://www.law.cornell.edu/uscode/text/26/1291" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #28: Section 338(g) Election
  // =====================================================
  {
    question: {
      id: "q-gilti-028",
      isFeatured: false,
      title: "What is a Section 338(g) election and when is it used for foreign acquisitions?",
      body: "Our U.S. parent is acquiring a foreign target company by purchasing all of its stock. Our M&A advisor mentioned we should consider a Section 338(g) election to treat the stock purchase as an asset purchase for tax purposes. Why would we want to do this? What are the benefits and risks for acquiring a foreign corporation?",
      author: {
        displayName: "Michelle H.",
        avatarSeed: "sec338g-ma-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["Section 338(g)", "foreign acquisition", "stock purchase", "asset purchase", "step-up", "CFC"],
      postedAt: "2026-04-05T10:00:00Z",
      viewCount: 876,
      answerCount: 1,
      status: "answered",
      seoTitle: "Section 338(g) Election for Foreign Acquisitions Explained",
      seoDescription: "How a Section 338(g) election treats a foreign stock purchase as an asset acquisition for U.S. tax purposes. Benefits include basis step-up, GILTI planning, and fresh-start E&P.",
    },
    answers: [
      {
        id: "a-gilti-028-1",
        questionId: "q-gilti-028",
        articleContent: {
          sections: [
            {
              heading: "What a Section 338(g) election does",
              body: "Under IRC Section 338(g), when a U.S. corporation makes a \"qualified stock purchase\" (acquiring 80%+ of a target's stock within a 12-month period), it can elect to treat the stock purchase as an asset acquisition for U.S. federal tax purposes. The target corporation is deemed to have sold all of its assets at fair market value and then repurchased them — creating a new basis (\"stepped-up\" basis) in the assets. The old target is deemed liquidated, and a new target is deemed created. This election is available for both domestic and foreign target corporations, but it is particularly valuable for foreign acquisitions.",
            },
            {
              heading: "Why it is particularly useful for foreign targets",
              body: "For domestic acquisitions, a Section 338(g) election triggers an immediate tax on the deemed asset sale, which usually makes it unattractive. But for a foreign target, the deemed asset sale occurs inside the foreign corporation — the gain is foreign-source income of the foreign entity, often subject to low or no immediate U.S. tax (depending on whether the target is a CFC and the character of the gain). The benefit is that the U.S. acquirer gets a stepped-up basis in the foreign target's assets, which increases QBAI for GILTI purposes (reducing future GILTI inclusions) and creates amortizable goodwill and intangible assets that generate future deductions.",
            },
            {
              heading: "GILTI planning benefits",
              body: "The stepped-up basis in tangible assets directly increases the foreign target's QBAI, which increases the deemed tangible income return (DTIR) and reduces GILTI. If the acquisition price reflects significant goodwill, the 338(g) election can also create amortizable Section 197 intangibles (goodwill, going concern value), which reduce the CFC's tested income over the amortization period (typically 15 years). Both effects — higher QBAI and lower tested income — reduce the acquirer's GILTI inclusion.",
            },
            {
              heading: "Fresh-start E&P",
              body: "Another benefit is that the 338(g) election eliminates the target's historical earnings and profits (E&P). The \"new\" target starts with zero E&P. This is valuable because it removes any accumulated Subpart F or untaxed E&P that could have generated inclusions or taxable dividends. For targets with complex E&P histories, this fresh start simplifies compliance and avoids potential tax traps from historical earnings.",
            },
            {
              heading: "Risks and considerations",
              body: "The primary risk is foreign tax consequences. The deemed asset sale inside the foreign target may trigger foreign income tax in the target's jurisdiction if that country does not recognize the election or imposes tax on deemed dispositions. The U.S. election is a unilateral tax fiction — most foreign countries will not give effect to it, meaning no foreign tax may actually be paid on the deemed gain, and no stepped-up basis may be recognized locally. There may also be immediate Subpart F or GILTI consequences from the deemed sale (e.g., gains on inventory could be Subpart F income). Careful modeling of both U.S. and foreign tax impacts is essential.",
            },
          ],
          keyTakeaways: [
            "Section 338(g) treats a qualified stock purchase as an asset acquisition, creating a stepped-up basis in the foreign target's assets",
            "Particularly valuable for foreign acquisitions because the deemed sale gain stays in the foreign entity, often avoiding immediate U.S. tax",
            "Increases QBAI (reducing GILTI) and creates amortizable intangibles (reducing future tested income)",
            "Eliminates the target's historical E&P, providing a fresh start and avoiding legacy tax traps",
            "Must model foreign tax consequences carefully — the deemed sale may trigger local tax in the target's jurisdiction",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-06T10:00:00Z",
        sources: [
          { label: "IRC Section 338 — Certain Stock Purchases Treated as Asset Acquisitions", url: "https://www.law.cornell.edu/uscode/text/26/338" },
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #29: Inversion Rules (IRC 7874)
  // =====================================================
  {
    question: {
      id: "q-gilti-029",
      isFeatured: false,
      title: "What are the anti-inversion rules under IRC 7874 and how do they affect foreign-owned structures?",
      body: "I've been reading about corporate inversions — companies moving their tax domicile overseas to reduce U.S. taxes. We are a foreign company considering acquiring a U.S. target, and our advisors warned us about the Section 7874 inversion rules. Could our acquisition inadvertently make our foreign parent treated as a U.S. corporation? What ownership thresholds trigger these rules?",
      author: {
        displayName: "Oliver S.",
        avatarSeed: "inversion-7874-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["inversion", "IRC 7874", "surrogate foreign corporation", "expatriated entity", "ownership threshold"],
      postedAt: "2026-04-07T11:30:00Z",
      viewCount: 789,
      answerCount: 1,
      status: "answered",
      seoTitle: "Anti-Inversion Rules (IRC 7874): Foreign Acquisition Risks",
      seoDescription: "How the Section 7874 anti-inversion rules can treat a foreign acquiring corporation as a U.S. entity. Understand the 60% and 80% ownership thresholds and the substantial business activities test.",
    },
    answers: [
      {
        id: "a-gilti-029-1",
        questionId: "q-gilti-029",
        articleContent: {
          sections: [
            {
              heading: "What the anti-inversion rules target",
              body: "IRC Section 7874 was enacted to prevent U.S. corporations from reincorporating in low-tax foreign jurisdictions while maintaining the same ownership and management. A corporate inversion typically involves a U.S. company creating a new foreign parent, transferring the U.S. operations to the foreign entity, and having the original U.S. shareholders receive stock in the new foreign entity. The result is that the same business, owned by the same people, is now resident in a lower-tax jurisdiction. Section 7874 counters this by looking at the percentage of the foreign acquiring entity that is owned by former shareholders of the U.S. entity.",
            },
            {
              heading: "The 80% threshold: treated as a U.S. corporation",
              body: "If former shareholders of the acquired U.S. entity (the \"domestic entity\") own 80% or more (by vote or value) of the stock of the foreign acquiring corporation after the acquisition, the foreign acquiring corporation is treated as a domestic corporation for all U.S. tax purposes. This means the foreign parent would be subject to U.S. taxation on its worldwide income, file Form 1120, and lose all benefits of being a foreign corporation. This is the most severe consequence — effectively nullifying the inversion entirely.",
            },
            {
              heading: "The 60% threshold: expatriated entity rules",
              body: "If former shareholders own at least 60% but less than 80% of the foreign acquirer, the foreign entity is not treated as a domestic corporation but is classified as a \"surrogate foreign corporation.\" In this case, the acquired U.S. entity (the \"expatriated entity\") faces several punitive rules: it cannot use foreign tax credits or deductions to offset income from \"inversion gain\" (gain recognized on the transfer of assets to the foreign entity), and various anti-abuse provisions under IRC 7874 and related regulations apply to limit tax benefits from the inversion.",
            },
            {
              heading: "The substantial business activities exception",
              body: "Section 7874 includes an exception: the inversion rules do not apply if the foreign acquiring corporation has substantial business activities in its country of organization relative to the total business activities of the expanded affiliated group. This is sometimes called the \"substantial business activities\" (SBA) test. The IRS has issued regulations defining this as requiring that at least 25% of the group's employees, employee compensation, and assets are in the foreign parent's home country. If the foreign acquirer is a genuine operating company with substantial operations in its jurisdiction, the inversion rules should not apply.",
            },
            {
              heading: "How this applies to your foreign company's acquisition of a U.S. target",
              body: "If your foreign company acquires a U.S. target, the inversion analysis examines whether the former shareholders of the U.S. target end up owning 60% or 80% or more of your foreign parent. In a typical outbound acquisition (foreign company buys U.S. company for cash), the former U.S. shareholders receive cash, not stock in your foreign company, so their ownership of the foreign acquirer is zero — the inversion rules would not apply. The rules primarily apply when the U.S. target's shareholders receive equity in the foreign acquirer (stock-for-stock transactions). If your acquisition is entirely cash-funded, Section 7874 is unlikely to be triggered. If equity is used, careful structuring is needed to stay below the thresholds.",
            },
          ],
          keyTakeaways: [
            "If former U.S. shareholders own 80%+ of the foreign acquirer, it is treated as a U.S. domestic corporation for all tax purposes",
            "At 60-79% ownership, the U.S. entity becomes an 'expatriated entity' subject to punitive anti-inversion rules",
            "The substantial business activities exception (25%+ employees, compensation, and assets in the foreign country) can avoid inversion treatment",
            "Cash acquisitions generally do not trigger Section 7874 because U.S. shareholders do not receive equity in the foreign acquirer",
            "Stock-for-stock transactions require careful structuring to manage the former shareholder ownership percentage",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-08T09:30:00Z",
        sources: [
          { label: "IRC Section 7874 — Expatriated Entities", url: "https://www.law.cornell.edu/uscode/text/26/7874" },
          { label: "IRS — Corporate Inversions", url: "https://www.irs.gov/businesses/corporations/corporate-inversions-section-7874" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #30: Pillar Two / Global Minimum Tax
  // =====================================================
  {
    question: {
      id: "q-gilti-030",
      isFeatured: true,
      title: "How does the OECD Pillar Two global minimum tax affect foreign-owned U.S. LLCs?",
      body: "I keep reading about the OECD's Pillar Two framework and a 15% global minimum tax that countries are implementing. My foreign parent company is based in a country that has adopted Pillar Two. We have a U.S. LLC subsidiary. How does Pillar Two interact with the existing U.S. international tax rules like GILTI and BEAT? Could my U.S. LLC be subject to a top-up tax under Pillar Two? I'm trying to understand how these overlapping regimes work.",
      author: {
        displayName: "Anna M.",
        avatarSeed: "pillar2-gmt-2026",
        badge: "subscriber" as const,
      },
      category: "international",
      tags: ["Pillar Two", "global minimum tax", "OECD", "GILTI", "top-up tax", "IIR", "UTPR", "foreign-owned LLC"],
      postedAt: "2026-04-08T14:00:00Z",
      viewCount: 2567,
      answerCount: 1,
      status: "answered",
      seoTitle: "Pillar Two Global Minimum Tax: Impact on Foreign-Owned U.S. LLCs",
      seoDescription: "How the OECD Pillar Two 15% global minimum tax interacts with U.S. international tax rules. Understand the IIR, UTPR, QDMTT, and what they mean for foreign-owned U.S. entities.",
    },
    answers: [
      {
        id: "a-gilti-030-1",
        questionId: "q-gilti-030",
        articleContent: {
          sections: [
            {
              heading: "What Pillar Two is",
              body: "The OECD/G20 Inclusive Framework's Pillar Two (also called the Global Anti-Base Erosion or GloBE rules) establishes a global minimum effective tax rate of 15% for large multinational enterprise (MNE) groups with consolidated revenue of EUR 750 million or more. The rules are implemented through domestic legislation in participating countries. The key mechanisms are: (1) the Income Inclusion Rule (IIR), which allows the parent jurisdiction to impose a top-up tax on low-taxed foreign income; (2) the Undertaxed Profits Rule (UTPR), which acts as a backstop if the parent jurisdiction does not apply the IIR; and (3) the Qualified Domestic Minimum Top-up Tax (QDMTT), which allows source countries to impose the top-up tax domestically before the IIR or UTPR applies.",
            },
            {
              heading: "How Pillar Two interacts with the U.S. system",
              body: "The U.S. has not enacted Pillar Two implementing legislation. However, the U.S. does have GILTI, which serves a similar purpose — imposing a minimum tax on foreign earnings of U.S. multinationals. Whether GILTI qualifies as a \"qualified IIR\" under Pillar Two is a key question. Currently, GILTI is computed on a blended (worldwide) basis, while Pillar Two requires a jurisdiction-by-jurisdiction calculation. This mismatch means GILTI may not fully satisfy the Pillar Two requirements, potentially leaving U.S.-parented groups subject to top-up taxes imposed by other countries through the UTPR.",
            },
            {
              heading: "Impact on your foreign-parented U.S. LLC structure",
              body: "If your foreign parent is in a country that has adopted Pillar Two and the parent group meets the EUR 750 million revenue threshold, the GloBE rules apply to the entire group, including U.S. subsidiaries. The parent's jurisdiction will apply the IIR to determine if any constituent entity in the group (including your U.S. LLC) is taxed at below 15% on a jurisdictional basis. If your U.S. LLC's effective tax rate (computed under GloBE rules, which differ from U.S. GAAP and U.S. tax rules) is below 15%, the parent jurisdiction may impose a top-up tax on the parent company to bring the rate up to 15%.",
            },
            {
              heading: "U.S. effective tax rate under GloBE",
              body: "For most U.S. entities, the U.S. federal corporate tax rate of 21% exceeds 15%, so the GloBE ETR for U.S. operations will typically be above 15%. However, GloBE uses its own income definition (based on financial accounting with adjustments), not U.S. taxable income. Certain U.S. tax benefits — such as accelerated depreciation, R&D credits, and other incentives — could reduce the GloBE ETR below 15% in specific years, potentially triggering a top-up tax. Additionally, if the U.S. enacts a QDMTT, it could impose any top-up tax domestically before the parent's country applies the IIR.",
            },
            {
              heading: "What foreign-owned U.S. entities should do",
              body: "If your foreign parent is subject to Pillar Two, your group should: (1) determine which entities are \"constituent entities\" in the GloBE group; (2) compute GloBE income and the effective tax rate for U.S. jurisdictional operations; (3) assess whether any U.S.-specific tax benefits push the GloBE ETR below 15%; (4) monitor whether the U.S. enacts QDMTT or other Pillar Two-responsive legislation; and (5) evaluate restructuring opportunities to minimize global top-up tax exposure. This requires coordination between U.S. tax advisors and advisors in the parent's jurisdiction, as Pillar Two compliance is driven by the parent company's obligations.",
            },
            {
              heading: "The evolving landscape",
              body: "Pillar Two is still evolving. Many countries enacted IIR rules effective for 2024 or 2025, with UTPR rules following shortly after. The U.S. has not enacted implementing legislation, and Congress may respond by modifying GILTI or enacting a domestic minimum tax. The OECD continues to issue administrative guidance. For foreign-owned U.S. entities, the key message is: Pillar Two compliance is primarily the parent company's responsibility, but the U.S. subsidiary's data is needed for the computation. Keeping U.S. financial and tax data accessible and reconcilable to GloBE standards is increasingly important.",
            },
          ],
          keyTakeaways: [
            "Pillar Two imposes a 15% global minimum tax on MNE groups with EUR 750M+ revenue — implemented through IIR, UTPR, and QDMTT",
            "The U.S. has not enacted Pillar Two legislation, but GILTI serves a similar (though not identical) function for U.S.-parented groups",
            "Your U.S. LLC's parent may owe a top-up tax if the LLC's GloBE effective tax rate falls below 15% in any year",
            "The U.S. 21% rate generally exceeds 15%, but specific tax benefits (R&D credits, accelerated depreciation) could lower the GloBE ETR",
            "Coordination between U.S. and foreign advisors is essential — Pillar Two compliance is driven by the parent jurisdiction",
            "Monitor legislative developments in both the U.S. and the parent's country as Pillar Two continues to evolve",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-09T11:00:00Z",
        sources: [
          { label: "OECD — Pillar Two Model Rules", url: "https://www.oecd.org/tax/beps/tax-challenges-arising-from-the-digitalisation-of-the-economy-global-anti-base-erosion-model-rules-pillar-two.htm" },
          { label: "IRC Section 951A — GILTI", url: "https://www.law.cornell.edu/uscode/text/26/951A" },
          { label: "IRS — Base Erosion and Anti-Abuse Tax (BEAT)", url: "https://www.irs.gov/newsroom/base-erosion-and-anti-abuse-tax-beat" },
        ],
      },
    ],
  },

];
