import type { QAThread, QAAuthor } from "./qa-catalog";

const OFFICIAL_AUTHOR: QAAuthor = {
  displayName: "ForeignLLCTax Official",
  avatarSeed: "rippa-official",
  isOfficial: true,
  badge: "expert",
};

export const VISA_THREADS: QAThread[] = [
  // 1. B-1 visa and U.S. LLC: what activities are allowed?
  {
    question: {
      id: "q-visa-001",
      isFeatured: true,
      title: "B-1 visa and U.S. LLC: what activities are allowed?",
      body: "I am a foreign entrepreneur planning to visit the U.S. on a B-1 business visa. I already formed an LLC in Wyoming for my consulting business. I want to know what activities I can legally perform while in the U.S. on a B-1, such as attending meetings or signing contracts. Can I actively manage my LLC operations during my visit, or does that cross the line into unauthorized work?",
      author: { displayName: "Carlos M.", avatarSeed: "carlos-m", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "b-1", "llc-management", "permitted-activities"],
      postedAt: "2026-03-02T10:00:00Z",
      viewCount: 2850,
      answerCount: 1,
      status: "answered",
      seoTitle: "B-1 Visa and U.S. LLC: Permitted Business Activities",
      seoDescription: "Learn what activities B-1 visa holders can perform when managing a U.S. LLC, including meetings, contracts, and the line between allowed and unauthorized work.",
    },
    answers: [
      {
        id: "a-visa-001-1",
        questionId: "q-visa-001",
        articleContent: {
          sections: [
            {
              heading: "What the B-1 Visa Allows",
              body: "The B-1 business visitor visa permits you to enter the U.S. for specific business activities such as attending meetings, negotiating contracts, consulting with business associates, and participating in conferences. It does not authorize gainful employment in the United States. This distinction is critical for LLC owners who want to engage with their business while visiting.",
            },
            {
              heading: "Permitted vs. Prohibited Activities for LLC Owners",
              body: "On a B-1 visa you may attend board meetings, sign contracts, meet with clients, open a business bank account, and oversee strategic decisions for your LLC. However, you cannot perform day-to-day operational work that would constitute employment, such as providing services to customers, fulfilling orders, or working in a productive capacity that generates U.S.-sourced income from labor performed in the U.S.",
            },
            {
              heading: "Tax Implications of B-1 Activity",
              body: "Even though you are not authorized to work on a B-1, any income your LLC earns that is effectively connected with a U.S. trade or business may still be subject to U.S. taxation. If you are a nonresident alien and your LLC is a single-member LLC treated as a disregarded entity, the income flows through to you personally. The IRS will look at whether the LLC has effectively connected income (ECI) regardless of your visa status.",
            },
            {
              heading: "Substantial Presence Test Considerations",
              body: "Days spent in the U.S. on a B-1 visa count toward the substantial presence test. If you spend enough days in the U.S. over a three-year period (using the weighted formula of 183 days), you could become a U.S. tax resident. This would subject your worldwide income to U.S. taxation, which is a significant consideration for frequent B-1 visitors who own LLCs.",
            },
            {
              heading: "Best Practices for B-1 LLC Owners",
              body: "Keep detailed records of your activities during each U.S. visit to demonstrate compliance with B-1 restrictions. Document that your visits are for meetings, negotiations, and oversight rather than productive work. Consider hiring U.S.-based employees or contractors to handle operational tasks. Consult an immigration attorney to ensure your specific activities fall within B-1 parameters, and work with a tax professional to manage your filing obligations.",
            },
          ],
          keyTakeaways: [
            "B-1 visa allows meetings, contract signing, and strategic oversight of your LLC but not day-to-day operational work.",
            "LLC income may still be taxable in the U.S. as effectively connected income regardless of your visa status.",
            "Days on a B-1 count toward the substantial presence test and could make you a U.S. tax resident.",
            "Keep detailed activity logs to demonstrate compliance with both immigration and tax rules.",
            "Consult both an immigration attorney and tax professional for your specific situation.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-02T12:00:00Z",
        sources: [
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
        ],
      },
    ],
  },

  // 2. B-2 tourist visa: can I manage my LLC while visiting?
  {
    question: {
      id: "q-visa-002",
      isFeatured: false,
      title: "B-2 tourist visa: can I manage my LLC while visiting?",
      body: "I own a single-member LLC in Delaware and I am visiting the U.S. on a B-2 tourist visa. While here I have been responding to client emails and managing my LLC remotely from my laptop. A friend told me this could violate my visa terms. Is it legal to manage my LLC while on a B-2, and what are the tax consequences if I do business activities during my tourist visit?",
      author: { displayName: "Yuki T.", avatarSeed: "yuki-t", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "b-2", "tourist", "llc-management", "remote-work"],
      postedAt: "2026-03-03T10:00:00Z",
      viewCount: 2340,
      answerCount: 1,
      status: "answered",
      seoTitle: "B-2 Tourist Visa: Can You Manage Your U.S. LLC?",
      seoDescription: "Find out whether B-2 tourist visa holders can legally manage a U.S. LLC, what activities are restricted, and the tax implications of remote work during a visit.",
    },
    answers: [
      {
        id: "a-visa-002-1",
        questionId: "q-visa-002",
        articleContent: {
          sections: [
            {
              heading: "B-2 Visa Purpose and Restrictions",
              body: "The B-2 visa is strictly for tourism, pleasure, and medical treatment. Unlike the B-1, which allows certain business activities, the B-2 does not permit any business-related activities in the United States. Managing an LLC, responding to business emails, attending client meetings, or performing any work-related tasks while physically present in the U.S. on a B-2 could be considered a violation of your visa terms.",
            },
            {
              heading: "The Gray Area of Remote Management",
              body: "There is a practical gray area when it comes to passive activities like checking emails or reviewing reports. Immigration authorities generally focus on whether you are performing productive work that benefits a U.S. employer or business. However, actively managing clients, negotiating deals, or making operational decisions for your LLC while in the U.S. on a B-2 crosses beyond what is permitted. The safest approach is to limit all business activity during your tourist stay.",
            },
            {
              heading: "Tax Consequences of U.S. Activity",
              body: "From a tax perspective, performing services in the U.S. can create effectively connected income (ECI) that is subject to U.S. taxation. If you are a nonresident alien and you perform work in the U.S. that generates income for your LLC, the IRS may treat that income as U.S.-sourced. This applies regardless of whether your visa permits the activity. Tax law and immigration law operate independently.",
            },
            {
              heading: "Substantial Presence and Tax Residency",
              body: "Days spent on a B-2 visa count toward the substantial presence test. If you are a frequent visitor, you may inadvertently become a U.S. tax resident, which would subject all of your worldwide income to U.S. tax. Track your days carefully and consider whether the closer connection exception or a tax treaty tie-breaker provision applies to your situation.",
            },
            {
              heading: "Recommendations for B-2 Visitors with LLCs",
              body: "If you need to conduct business activities in the U.S., consider entering on a B-1 visa instead, which permits certain business activities. For future visits, clearly separate your tourist activities from any LLC management. Appoint a manager or agent to handle operations in your absence. Consult an immigration lawyer to understand the risks and a tax advisor to ensure proper compliance with both U.S. and home-country tax obligations.",
            },
          ],
          keyTakeaways: [
            "B-2 tourist visas do not permit business activities, including managing a U.S. LLC.",
            "Performing work in the U.S. on a B-2 can create taxable effectively connected income regardless of visa restrictions.",
            "Days on a B-2 count toward the substantial presence test for tax residency.",
            "Consider using a B-1 visa for future trips if you need to conduct business.",
            "Appoint a manager or agent to handle LLC operations during tourist visits.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-03T12:00:00Z",
        sources: [
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
        ],
      },
    ],
  },

  // 3. E-2 Treaty Investor visa and LLC requirements
  {
    question: {
      id: "q-visa-003",
      isFeatured: true,
      title: "E-2 Treaty Investor visa and LLC requirements",
      body: "I am from a treaty country and I am applying for an E-2 investor visa to start a business in the U.S. through an LLC. I have heard the investment must be substantial but I am unsure what that means for an LLC structure. What are the specific LLC requirements for an E-2 visa, and how does the LLC ownership affect my tax obligations? I want to understand both the immigration and tax sides before I invest.",
      author: { displayName: "Sophie L.", avatarSeed: "sophie-l", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "e-2", "treaty-investor", "llc-structure", "investment"],
      postedAt: "2026-03-04T10:00:00Z",
      viewCount: 2670,
      answerCount: 1,
      status: "answered",
      seoTitle: "E-2 Treaty Investor Visa: LLC Requirements and Tax Rules",
      seoDescription: "Understand E-2 visa requirements for LLC ownership, what constitutes a substantial investment, and the tax obligations for treaty investor visa holders.",
    },
    answers: [
      {
        id: "a-visa-003-1",
        questionId: "q-visa-003",
        articleContent: {
          sections: [
            {
              heading: "E-2 Visa Overview and LLC Eligibility",
              body: "The E-2 Treaty Investor visa allows nationals of treaty countries to enter the U.S. to develop and direct a business in which they have invested a substantial amount of capital. An LLC is a commonly used entity for E-2 purposes because it provides liability protection and flexible tax treatment. The investor must own at least 50% of the LLC or have operational control through a managerial position.",
            },
            {
              heading: "Substantial Investment Requirement",
              body: "While there is no fixed dollar amount for a substantial investment, the amount must be sufficient to ensure the successful operation of the enterprise. For most businesses, investments in the range of $100,000 or more are considered strong, though smaller amounts may qualify for lower-cost businesses. The investment must be at risk in a commercial sense and cannot be marginal, meaning the enterprise must have the capacity to generate more than enough income to provide a minimal living for the investor and their family.",
            },
            {
              heading: "LLC Structuring for E-2 Purposes",
              body: "The LLC should be properly structured to demonstrate the investor's ownership and control. The operating agreement should clearly identify the E-2 investor as the majority owner or managing member. The LLC must be a real, active commercial enterprise, not a paper entity. It is common to form the LLC in the state where the business will operate. Multi-member LLCs with both U.S. and foreign members can qualify, but the treaty national must maintain the required ownership percentage.",
            },
            {
              heading: "Tax Obligations for E-2 LLC Owners",
              body: "As an E-2 visa holder physically present in the U.S., you will likely meet the substantial presence test and be treated as a U.S. tax resident. This means you will be taxed on your worldwide income, not just U.S.-sourced income. A single-member LLC is treated as a disregarded entity for tax purposes, and the income passes through to your personal return. You will file Form 1040, report the LLC income on Schedule C, and pay self-employment tax on the net earnings.",
            },
            {
              heading: "State Tax Considerations",
              body: "In addition to federal taxes, you will owe state taxes in the state where your LLC operates if that state has an income tax. Some states also impose franchise taxes or annual fees on LLCs. Choose your state of formation and operation carefully, considering both the business environment and the tax implications.",
            },
            {
              heading: "Planning Tips for E-2 Investors",
              body: "Work with both an immigration attorney and a tax professional before investing. Structure your LLC to clearly demonstrate the substantial investment and your role in directing the business. Keep meticulous financial records to support both your visa renewal and tax filings. Consider the implications of tax treaties between your home country and the U.S. to avoid double taxation.",
            },
          ],
          keyTakeaways: [
            "E-2 visa requires a substantial investment in a real, active LLC enterprise.",
            "The investor must own at least 50% of the LLC or hold operational control.",
            "E-2 holders in the U.S. typically meet the substantial presence test and are taxed on worldwide income.",
            "Single-member LLC income flows through to your personal tax return with self-employment tax.",
            "Tax treaties may help avoid double taxation between the U.S. and your home country.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-04T12:00:00Z",
        sources: [
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
        ],
      },
    ],
  },

  // 4. E-1 Treaty Trader visa and LLC ownership
  {
    question: {
      id: "q-visa-004",
      isFeatured: false,
      title: "E-1 Treaty Trader visa and LLC ownership",
      body: "I operate an import-export business through a U.S. LLC and I am considering applying for an E-1 Treaty Trader visa. My trade is principally between the U.S. and my home country. How does LLC ownership factor into the E-1 visa application, and what are the tax implications for E-1 visa holders who own LLCs? I want to ensure my business structure supports both my visa and tax compliance.",
      author: { displayName: "Ahmed R.", avatarSeed: "ahmed-r", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "e-1", "treaty-trader", "import-export", "llc-ownership"],
      postedAt: "2026-03-04T10:00:00Z",
      viewCount: 1450,
      answerCount: 1,
      status: "answered",
      seoTitle: "E-1 Treaty Trader Visa and LLC Ownership Tax Guide",
      seoDescription: "Learn how E-1 Treaty Trader visa requirements interact with LLC ownership, trade volume thresholds, and tax obligations for treaty trader visa holders.",
    },
    answers: [
      {
        id: "a-visa-004-1",
        questionId: "q-visa-004",
        articleContent: {
          sections: [
            {
              heading: "E-1 Visa Requirements and LLC Structure",
              body: "The E-1 Treaty Trader visa requires substantial trade between the U.S. and a treaty country. The trade must be principally (over 50%) between the two countries. Your LLC must be at least 50% owned by nationals of the treaty country. The LLC serves as the vehicle for the trading activity, and you must be employed in a supervisory, executive, or essential skills capacity within the LLC.",
            },
            {
              heading: "Qualifying Trade Activities",
              body: "Trade includes the exchange of goods, services, technology, and certain financial instruments. For an LLC engaged in import-export, the volume and frequency of transactions matter. The trade must be continuous and substantial, not just a single transaction. Documenting your trade history through the LLC's financial records is essential for both the visa application and renewals.",
            },
            {
              heading: "Tax Treatment of E-1 LLC Owners",
              body: "As an E-1 visa holder living and working in the U.S., you will generally meet the substantial presence test and be classified as a U.S. tax resident. Your LLC income will be subject to U.S. federal income tax. If your LLC is a single-member disregarded entity, profits and losses pass through to your individual Form 1040. You will also owe self-employment tax on net business income, currently at 15.3% for Social Security and Medicare combined.",
            },
            {
              heading: "Treaty Benefits and Foreign Tax Credits",
              body: "Check whether your home country has an income tax treaty with the U.S. that provides favorable treatment for business profits. Many treaties allow you to claim foreign tax credits for taxes paid in your home country, preventing double taxation. You may also be able to exclude certain types of income or claim reduced withholding rates on specific income categories under the treaty.",
            },
            {
              heading: "Record-Keeping and Compliance",
              body: "Maintain thorough records of all trade transactions, including invoices, shipping documents, and payment records. These records support both your E-1 visa status and your tax filings. File all required forms on time, including FBAR (FinCEN 114) if you have foreign bank accounts exceeding $10,000 in aggregate, and Form 8938 for foreign financial assets above the applicable threshold.",
            },
          ],
          keyTakeaways: [
            "E-1 requires substantial, continuous trade principally between the U.S. and your treaty country.",
            "The LLC must be majority-owned by treaty country nationals.",
            "E-1 holders in the U.S. are typically tax residents subject to tax on worldwide income.",
            "Tax treaties may provide credits or exemptions to prevent double taxation.",
            "Maintain detailed trade records for both immigration and tax compliance.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-04T12:00:00Z",
        sources: [
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
        ],
      },
    ],
  },

  // 5. L-1 intracompany transfer and LLC ownership
  {
    question: {
      id: "q-visa-005",
      isFeatured: false,
      title: "L-1 intracompany transfer and LLC ownership",
      body: "My company abroad is transferring me to the U.S. on an L-1 visa. I also own a separate personal LLC in the U.S. for freelance consulting work. Can I maintain ownership of my personal LLC while on an L-1 visa? Am I allowed to receive income from the LLC, or does the L-1 restrict me to working only for my sponsoring employer? I need clarity on both the immigration and tax aspects.",
      author: { displayName: "Priya K.", avatarSeed: "priya-k", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "l-1", "intracompany-transfer", "dual-employment", "llc-ownership"],
      postedAt: "2026-03-05T10:00:00Z",
      viewCount: 1980,
      answerCount: 1,
      status: "answered",
      seoTitle: "L-1 Visa and LLC Ownership: What You Need to Know",
      seoDescription: "Can L-1 intracompany transferees own a personal LLC? Learn about work restrictions, passive income rules, and tax obligations for L-1 visa holders with LLCs.",
    },
    answers: [
      {
        id: "a-visa-005-1",
        questionId: "q-visa-005",
        articleContent: {
          sections: [
            {
              heading: "L-1 Visa Work Authorization Scope",
              body: "The L-1 visa authorizes you to work only for the petitioning employer that transferred you to the U.S. You cannot perform work for any other employer, including your own LLC, without separate work authorization. Simply owning an LLC is not the same as working for it, but the distinction between passive ownership and active work is critical.",
            },
            {
              heading: "Passive Ownership vs. Active Work",
              body: "You may passively own an LLC while on an L-1 visa. Passive ownership means holding an ownership interest and receiving distributions or investment returns without performing work or providing services for the LLC. However, if you actively manage the LLC, provide consulting services through it, or perform any productive work for the LLC, you would be violating your L-1 visa terms because you are only authorized to work for your L-1 sponsor.",
            },
            {
              heading: "Tax Obligations as an L-1 Visa Holder",
              body: "As an L-1 visa holder residing in the U.S., you will meet the substantial presence test and be treated as a U.S. tax resident. This means you must report worldwide income on your Form 1040, including income from your sponsoring employer and any passive income from your LLC. If the LLC generates income, it will be included in your taxable income even if you are not actively working for it.",
            },
            {
              heading: "Self-Employment Tax Considerations",
              body: "If your LLC is a single-member disregarded entity and generates business income, the IRS may consider you self-employed with respect to that income, triggering self-employment tax. However, if the LLC's income is truly passive (such as rental income or investment returns), it may not be subject to self-employment tax. The characterization of the income depends on the nature of the LLC's activities and your involvement.",
            },
            {
              heading: "Practical Recommendations",
              body: "If you want to maintain your LLC while on an L-1, ensure it operates passively. Hire an independent manager to run operations. Do not perform services or make day-to-day business decisions for the LLC. Keep clear documentation showing your role is limited to passive ownership. If you want to actively work for your LLC, explore obtaining additional work authorization or a different visa status.",
            },
          ],
          keyTakeaways: [
            "L-1 visa holders can passively own an LLC but cannot actively work for it.",
            "Active management of a personal LLC violates L-1 work authorization restrictions.",
            "L-1 holders are U.S. tax residents and must report worldwide income including LLC income.",
            "Hire an independent manager if you want the LLC to remain active during your L-1 stay.",
            "Consult an immigration attorney before making any changes to your LLC involvement.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-05T12:00:00Z",
        sources: [
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
        ],
      },
    ],
  },

  // 6. H-1B visa holders owning a U.S. LLC
  {
    question: {
      id: "q-visa-006",
      isFeatured: true,
      title: "H-1B visa holders owning a U.S. LLC",
      body: "I am on an H-1B visa working for a tech company. I have a side business idea and want to form a U.S. LLC. I have heard conflicting information about whether H-1B holders can own an LLC. Can I form and own an LLC on an H-1B, and if so, what are the limitations? What are the tax implications of having LLC income in addition to my W-2 salary?",
      author: { displayName: "Ravi P.", avatarSeed: "ravi-p", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "h-1b", "side-business", "llc-ownership", "w-2-income"],
      postedAt: "2026-03-05T10:00:00Z",
      viewCount: 2990,
      answerCount: 1,
      status: "answered",
      seoTitle: "H-1B Visa and LLC Ownership: Rules and Tax Implications",
      seoDescription: "Can H-1B visa holders own a U.S. LLC? Learn about the passive ownership rules, work restrictions, and tax implications of running a side business on an H-1B.",
    },
    answers: [
      {
        id: "a-visa-006-1",
        questionId: "q-visa-006",
        articleContent: {
          sections: [
            {
              heading: "Can H-1B Holders Own an LLC?",
              body: "Yes, H-1B visa holders can legally form and own a U.S. LLC. There is no immigration law that prohibits foreign nationals from owning a business entity. However, there is a critical distinction between owning an LLC and working for it. On an H-1B visa, you are only authorized to work for your H-1B sponsoring employer. You cannot perform work, provide services, or actively manage your LLC.",
            },
            {
              heading: "The Passive Ownership Rule",
              body: "You may be a passive owner who invests in the LLC and receives returns on that investment. This means you can hold ownership shares, receive profit distributions, and participate in major business decisions at the ownership level. What you cannot do is provide day-to-day services, respond to customers, manage employees, or perform any work that would be considered employment. Even unpaid work for your LLC would violate your H-1B terms.",
            },
            {
              heading: "Tax Implications of LLC Income",
              body: "As an H-1B holder in the U.S., you are a tax resident and must report all income on your Form 1040. Your W-2 wages from your employer and any LLC income will both appear on your return. If the LLC is a single-member disregarded entity, its income is reported on Schedule C. You will owe federal and state income tax on the combined income, and LLC business income may also be subject to self-employment tax at 15.3%.",
            },
            {
              heading: "How to Structure the LLC Safely",
              body: "To stay compliant, hire employees or independent contractors to handle all operational work for the LLC. Your role should be limited to that of an investor and owner. Draft an operating agreement that clearly defines your role as a passive member. Keep detailed records showing you do not perform services for the LLC. If you want to actively work for your LLC, you would need to obtain a separate work authorization or change your visa status.",
            },
            {
              heading: "Risks and Considerations",
              body: "The main risk is inadvertently performing work for the LLC, which could jeopardize your H-1B status and future immigration applications. USCIS may scrutinize your LLC activities if you apply for an extension or green card. Additionally, having LLC income alongside W-2 income increases your total tax liability and may push you into a higher tax bracket. Plan for quarterly estimated tax payments on the LLC income.",
            },
            {
              heading: "Tax Filing Requirements",
              body: "You will need to file Form 1040 with Schedule C for the LLC income, Schedule SE for self-employment tax, and potentially Form 1040-ES for quarterly estimated payments. If the LLC has foreign members or you have foreign financial accounts, additional reporting requirements like FBAR and Form 8938 may apply. Keep your H-1B employer income and LLC income clearly separated in your records.",
            },
          ],
          keyTakeaways: [
            "H-1B holders can own an LLC but cannot perform any work or services for it.",
            "Passive ownership and investment returns are permitted; active management is not.",
            "LLC income is taxable and reported on Schedule C alongside your W-2 wages.",
            "Self-employment tax of 15.3% applies to LLC net business income.",
            "Hire employees or contractors to handle all LLC operations to maintain compliance.",
            "Consult an immigration attorney to ensure your LLC activities do not jeopardize your H-1B status.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-05T12:00:00Z",
        sources: [
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
        ],
      },
    ],
  },

  // 7. O-1 visa and passive LLC ownership
  {
    question: {
      id: "q-visa-007",
      isFeatured: false,
      title: "O-1 visa and passive LLC ownership",
      body: "I hold an O-1 visa for extraordinary ability in the arts. I have a U.S. LLC that I use for my creative work and brand licensing. My O-1 is sponsored by an agent, and I perform work for various clients through the agent. Can I also receive income through my LLC for passive licensing deals? How does the IRS treat O-1 visa holders who have both agent-facilitated income and LLC income?",
      author: { displayName: "Marina S.", avatarSeed: "marina-s", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "o-1", "extraordinary-ability", "licensing", "passive-income"],
      postedAt: "2026-03-06T10:00:00Z",
      viewCount: 1320,
      answerCount: 1,
      status: "answered",
      seoTitle: "O-1 Visa Holders: Passive LLC Ownership and Tax Rules",
      seoDescription: "How O-1 extraordinary ability visa holders can structure LLC ownership for licensing income, and the tax treatment of agent-facilitated vs. LLC income.",
    },
    answers: [
      {
        id: "a-visa-007-1",
        questionId: "q-visa-007",
        articleContent: {
          sections: [
            {
              heading: "O-1 Visa and LLC Ownership",
              body: "The O-1 visa for individuals with extraordinary ability allows more flexibility than many other visa categories. O-1 holders can work for multiple employers or clients, and the visa can be sponsored by an agent who facilitates work with various entities. Owning an LLC while on an O-1 is generally permissible, but the work you perform must fall within the scope of your O-1 petition.",
            },
            {
              heading: "Agent-Sponsored O-1 and LLC Income",
              body: "If your O-1 is agent-sponsored, the agent acts as your employer for immigration purposes. Work performed for clients through the agent is covered by the O-1 petition. Income received through your LLC for passive licensing deals, such as royalties from existing creative works, may be treated differently from active work income. The key distinction is whether you are performing new work or receiving passive returns on previously created intellectual property.",
            },
            {
              heading: "Tax Treatment of O-1 Income",
              body: "As an O-1 visa holder in the U.S., you will likely meet the substantial presence test and be a U.S. tax resident. All income, whether received through your agent, directly from clients, or through your LLC, must be reported on your Form 1040. Licensing royalties received through your LLC would be reported on Schedule C if the LLC is a disregarded entity. The nature of the income determines whether it is subject to self-employment tax.",
            },
            {
              heading: "Structuring Licensing Income",
              body: "Passive licensing income from intellectual property you created before entering the U.S. or outside the scope of your O-1 work may be structured through your LLC. However, if you are actively negotiating licensing deals, creating new works, or managing the licensing business, this would constitute active work. Ensure that any work performed through the LLC is covered by your O-1 petition or is truly passive in nature.",
            },
            {
              heading: "Compliance and Best Practices",
              body: "Keep detailed records separating income earned through your agent from LLC licensing income. Document the passive nature of licensing deals and when the intellectual property was created. Work with both an immigration attorney to ensure your LLC activities are covered by your O-1 petition and a tax professional to properly categorize and report your various income streams.",
            },
          ],
          keyTakeaways: [
            "O-1 visa holders can own an LLC, but work performed must be within the O-1 petition scope.",
            "Passive licensing royalties from existing works may be structured through an LLC.",
            "All income streams must be reported on your U.S. tax return as a tax resident.",
            "Active licensing management or creation of new works must fall under the O-1 petition.",
            "Keep detailed records separating agent-facilitated income from LLC income.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-06T12:00:00Z",
        sources: [
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
        ],
      },
    ],
  },

  // 8. F-1 OPT students with a U.S. LLC: tax rules
  {
    question: {
      id: "q-visa-008",
      isFeatured: true,
      title: "F-1 OPT students with a U.S. LLC: tax rules",
      body: "I am an international student on F-1 OPT working for a tech company. I also want to start a freelance web development business through a U.S. LLC. Can I operate an LLC while on OPT, and does the work need to be related to my field of study? What are the specific tax rules for F-1 students who earn income through an LLC, especially regarding the FICA exemption?",
      author: { displayName: "Wei C.", avatarSeed: "wei-c", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "f-1", "opt", "student", "freelance", "fica-exemption"],
      postedAt: "2026-03-07T10:00:00Z",
      viewCount: 2510,
      answerCount: 1,
      status: "answered",
      seoTitle: "F-1 OPT Students with LLCs: Tax Rules and FICA Exemption",
      seoDescription: "Tax rules for F-1 OPT students operating a U.S. LLC, including FICA exemption eligibility, self-employment tax, and field-of-study requirements.",
    },
    answers: [
      {
        id: "a-visa-008-1",
        questionId: "q-visa-008",
        articleContent: {
          sections: [
            {
              heading: "F-1 OPT and LLC Ownership Rules",
              body: "F-1 students on OPT can operate a business through an LLC, but the work must be directly related to the student's major field of study. This means a computer science graduate could run a web development LLC, but not an unrelated catering business. The LLC activities must constitute legitimate employment in the student's field, and the student must work at least 20 hours per week in activities related to their major.",
            },
            {
              heading: "Self-Employment on OPT",
              body: "USCIS permits self-employment during OPT as long as you can demonstrate that the work is related to your field of study. You must register the business and obtain proper business licenses. You should report your self-employment to your school's Designated School Official (DSO) and update your SEVIS record. The DSO will need to verify that your self-employment meets the OPT requirements.",
            },
            {
              heading: "Tax Status for F-1 Students",
              body: "F-1 students are generally considered nonresident aliens for tax purposes during their first five calendar years in the U.S. This is because F-1 visa holders are exempt individuals under the substantial presence test for up to five years. As a nonresident alien, you would file Form 1040-NR instead of Form 1040. However, if you have been in the U.S. for more than five years, you may become a resident alien for tax purposes.",
            },
            {
              heading: "FICA Exemption and Self-Employment Tax",
              body: "F-1 students who are nonresident aliens are exempt from FICA taxes (Social Security and Medicare) on wages earned from employment. However, LLC self-employment income presents a more complex situation. The FICA exemption for F-1 students applies to services performed as an employee, not to self-employment income. Self-employment tax is governed by different provisions, and nonresident aliens are generally not subject to self-employment tax on U.S.-sourced income. Consult a tax professional to determine your specific obligations.",
            },
            {
              heading: "Income Tax Filing Requirements",
              body: "As a nonresident alien F-1 student, report your LLC income on Form 1040-NR. If the LLC is a single-member disregarded entity, the income flows through to your personal return. You must also file Form 8843 to claim your exempt individual status. If you have a tax treaty between your home country and the U.S., you may be eligible for reduced tax rates or exemptions on certain income. File Form 8833 to claim treaty benefits.",
            },
            {
              heading: "Compliance Tips for F-1 LLC Owners",
              body: "Keep thorough records demonstrating the connection between your LLC work and your field of study. Report your self-employment to your DSO immediately. File all required tax forms on time. Maintain a clear separation between your OPT employment and any unpermitted activities. If your OPT expires, you must cease LLC operations unless you obtain a different work authorization.",
            },
          ],
          keyTakeaways: [
            "F-1 OPT students can own and operate an LLC, but the work must relate to their field of study.",
            "Report self-employment to your DSO and update your SEVIS record.",
            "F-1 students in their first five years are typically nonresident aliens filing Form 1040-NR.",
            "The FICA exemption applies to employment wages but self-employment tax rules differ for nonresident aliens.",
            "File Form 8843 to claim exempt individual status and Form 8833 for any treaty benefits.",
            "Cease LLC operations when OPT expires unless you obtain new work authorization.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-07T12:00:00Z",
        sources: [
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
        ],
      },
    ],
  },

  // 9. EB-5 Immigrant Investor and LLC structuring
  {
    question: {
      id: "q-visa-009",
      isFeatured: false,
      title: "EB-5 Immigrant Investor and LLC structuring",
      body: "I am pursuing an EB-5 immigrant investor visa and plan to invest through a regional center. My attorney mentioned structuring the investment through an LLC. How does the LLC structure work for EB-5 investments, and what are the tax obligations once I receive conditional permanent residency? I want to understand the tax implications from the investment phase through to obtaining my green card.",
      author: { displayName: "Lin W.", avatarSeed: "lin-w", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "eb-5", "immigrant-investor", "regional-center", "green-card"],
      postedAt: "2026-03-08T10:00:00Z",
      viewCount: 1870,
      answerCount: 1,
      status: "answered",
      seoTitle: "EB-5 Investor Visa: LLC Structuring and Tax Obligations",
      seoDescription: "How EB-5 investors use LLC structures for their investments, tax implications during conditional residency, and planning for green card holder tax obligations.",
    },
    answers: [
      {
        id: "a-visa-009-1",
        questionId: "q-visa-009",
        articleContent: {
          sections: [
            {
              heading: "EB-5 Program and LLC Structure",
              body: "The EB-5 Immigrant Investor Program requires a minimum investment of $1,050,000 (or $800,000 in a Targeted Employment Area) in a new commercial enterprise that creates at least 10 full-time jobs. Regional center investments typically use a limited partnership or LLC structure where the investor becomes a limited partner or member. The LLC serves as the vehicle that pools investor capital and deploys it to job-creating projects.",
            },
            {
              heading: "Investment Phase Tax Considerations",
              body: "Before you receive your conditional green card, you may still be a nonresident alien for tax purposes. During this phase, only U.S.-sourced income is taxable. Any returns from your EB-5 LLC investment that constitute U.S.-sourced income, such as interest, dividends, or business income, would be reportable. If the LLC passes through income to you as a member, that income may be subject to withholding under the rules for foreign partners in U.S. partnerships.",
            },
            {
              heading: "Conditional Permanent Residency Tax Obligations",
              body: "Once you receive your conditional green card, you become a U.S. tax resident and must report worldwide income. This is a major shift from the nonresident status. All income from any source globally must be reported on Form 1040. Your share of LLC income or losses from the EB-5 investment will be reported on Schedule K-1 and transferred to your personal return. You must also report all foreign financial accounts and assets.",
            },
            {
              heading: "FBAR and Foreign Asset Reporting",
              body: "As a new green card holder, you must file FBAR (FinCEN 114) if you have foreign financial accounts with an aggregate value exceeding $10,000 at any point during the year. You must also file Form 8938 if your foreign financial assets exceed the applicable threshold. Failure to file these forms carries severe penalties. Begin tracking your foreign accounts and assets immediately upon receiving your green card.",
            },
            {
              heading: "Pre-Immigration Tax Planning",
              body: "Before immigrating, consider pre-immigration tax planning strategies. Selling appreciated assets before becoming a U.S. tax resident can avoid U.S. capital gains tax on pre-immigration gains. Review your worldwide asset portfolio and consider the impact of U.S. estate and gift tax rules, which apply to green card holders. Work with a tax professional who specializes in international tax planning to optimize your financial position before and after immigration.",
            },
          ],
          keyTakeaways: [
            "EB-5 investments are typically structured through an LLC or limited partnership.",
            "Before receiving a green card, only U.S.-sourced income is taxable for nonresident aliens.",
            "Conditional green card holders are U.S. tax residents subject to tax on worldwide income.",
            "FBAR and Form 8938 reporting requirements begin when you receive your green card.",
            "Pre-immigration tax planning can significantly reduce your U.S. tax liability.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-08T12:00:00Z",
        sources: [
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
        ],
      },
    ],
  },

  // 10. ESTA/Visa Waiver and managing your U.S. LLC
  {
    question: {
      id: "q-visa-010",
      isFeatured: false,
      title: "ESTA/Visa Waiver and managing your U.S. LLC",
      body: "I am from a Visa Waiver Program country and I enter the U.S. on ESTA for short business trips. I own a U.S. LLC that operates an e-commerce store. During my ESTA visits, I sometimes handle shipping logistics and meet with suppliers. Is this allowed under ESTA, and what are the tax consequences of performing these activities while in the U.S.? I typically visit for two to three weeks at a time.",
      author: { displayName: "Thomas B.", avatarSeed: "thomas-b", badge: "new-member" as const },
      category: "international",
      tags: ["visa", "esta", "visa-waiver", "ecommerce", "short-visits"],
      postedAt: "2026-03-08T10:00:00Z",
      viewCount: 1650,
      answerCount: 1,
      status: "answered",
      seoTitle: "ESTA Visa Waiver and U.S. LLC Management: Rules and Taxes",
      seoDescription: "Can you manage your U.S. LLC while visiting on ESTA? Learn about Visa Waiver Program business activity restrictions and tax consequences for short visits.",
    },
    answers: [
      {
        id: "a-visa-010-1",
        questionId: "q-visa-010",
        articleContent: {
          sections: [
            {
              heading: "ESTA and Permitted Business Activities",
              body: "The ESTA (Electronic System for Travel Authorization) under the Visa Waiver Program allows travel for business or tourism for up to 90 days. Business activities permitted under ESTA are similar to those allowed on a B-1 visa: attending meetings, negotiating contracts, consulting with associates, and attending conferences. Handling shipping logistics and meeting suppliers may be considered operational work that goes beyond what ESTA permits.",
            },
            {
              heading: "Limits on LLC Management During ESTA Visits",
              body: "While you can discuss strategy with your team and negotiate with suppliers at a high level, actively managing e-commerce operations such as fulfilling orders, managing inventory, or handling customer service constitutes gainful employment. These activities are not permitted on ESTA. If your visits involve hands-on operational work, you may need a different visa category such as an E-2 or B-1 with specific work authorization.",
            },
            {
              heading: "Tax Implications of ESTA Business Activity",
              body: "Regardless of what ESTA permits from an immigration standpoint, performing services in the U.S. that generate income can create U.S. tax obligations. If you perform work in the U.S. that produces income for your LLC, that income may be treated as effectively connected income subject to U.S. tax. The number of days you spend working in the U.S. and the nature of the work determine the tax treatment.",
            },
            {
              heading: "Substantial Presence Considerations",
              body: "ESTA visits count toward the substantial presence test. If you visit frequently, the days can accumulate over a three-year period. For example, visiting for 60 days per year for three consecutive years would give you 60 + 20 + 6.67 = approximately 87 weighted days, well below the 183-day threshold. However, longer or more frequent visits could push you toward tax residency. Track your days carefully.",
            },
            {
              heading: "Compliance Recommendations",
              body: "Limit your U.S. activities during ESTA visits to strategic oversight, meetings, and negotiations. Hire local staff or contractors to handle operational tasks. Keep a log of activities during each visit. If you need to perform hands-on work, consult an immigration attorney about obtaining proper work authorization. File any required U.S. tax returns if your LLC has effectively connected income or if you meet the substantial presence test.",
            },
          ],
          keyTakeaways: [
            "ESTA permits strategic business meetings but not operational work for your LLC.",
            "Handling shipping logistics or fulfilling orders likely exceeds ESTA permitted activities.",
            "Income from work performed in the U.S. may create tax obligations regardless of visa status.",
            "ESTA days count toward the substantial presence test for tax residency.",
            "Hire local staff for operations and limit ESTA visits to strategic oversight.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-08T12:00:00Z",
        sources: [
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
        ],
      },
    ],
  },

  // 11. Green card holders: tax obligations for LLC owners
  {
    question: {
      id: "q-visa-011",
      isFeatured: true,
      title: "Green card holders: tax obligations for LLC owners",
      body: "I recently received my green card and I own a single-member LLC. As a new permanent resident, I understand I now have to report worldwide income. What specific tax obligations do I have as a green card holder with an LLC? Are there any special reporting requirements I should know about, especially for my foreign bank accounts and assets? I want to make sure I am fully compliant from day one.",
      author: { displayName: "Elena V.", avatarSeed: "elena-v", badge: "new-member" as const },
      category: "international",
      tags: ["green-card", "permanent-resident", "worldwide-income", "fbar", "compliance"],
      postedAt: "2026-03-09T10:00:00Z",
      viewCount: 2780,
      answerCount: 1,
      status: "answered",
      seoTitle: "Green Card Holder LLC Tax Obligations: Complete Guide",
      seoDescription: "Comprehensive guide to tax obligations for green card holders who own LLCs, including worldwide income reporting, FBAR, Form 8938, and compliance requirements.",
    },
    answers: [
      {
        id: "a-visa-011-1",
        questionId: "q-visa-011",
        articleContent: {
          sections: [
            {
              heading: "Green Card Holder Tax Status",
              body: "As a green card holder (lawful permanent resident), you are a U.S. tax resident from the date you receive your green card. This means you must report and pay tax on your worldwide income from all sources, both U.S. and foreign, on Form 1040. This applies regardless of where you live or where the income is earned. Your LLC income, employment income, investment income, and any foreign income must all be reported.",
            },
            {
              heading: "LLC Tax Reporting as a Green Card Holder",
              body: "If your LLC is a single-member disregarded entity, all income and expenses are reported on Schedule C of your Form 1040. You will pay self-employment tax (15.3%) on net business earnings through Schedule SE. If the LLC has elected S-corp or partnership treatment, you will receive a Schedule K-1 and report the income accordingly. As a permanent resident, you have the same tax filing obligations as a U.S. citizen.",
            },
            {
              heading: "Foreign Bank Account Reporting (FBAR)",
              body: "If you have a financial interest in or signature authority over foreign financial accounts with an aggregate value exceeding $10,000 at any time during the calendar year, you must file FinCEN Form 114 (FBAR). This includes bank accounts, brokerage accounts, mutual funds, and other financial accounts held outside the U.S. The FBAR is filed separately from your tax return, with a deadline of April 15 (with an automatic extension to October 15).",
            },
            {
              heading: "Form 8938 - Foreign Financial Assets",
              body: "In addition to FBAR, you may need to file Form 8938 (Statement of Specified Foreign Financial Assets) if your foreign financial assets exceed certain thresholds. For single filers living in the U.S., the threshold is $50,000 at the end of the year or $75,000 at any time during the year. This form is filed with your tax return and covers a broader range of assets than FBAR, including foreign stock, securities, financial instruments, and interests in foreign entities.",
            },
            {
              heading: "Foreign Tax Credits and Treaty Benefits",
              body: "To avoid double taxation on income earned abroad, you can claim the foreign tax credit (Form 1116) for taxes paid to foreign governments. If your home country has a tax treaty with the U.S., certain income types may qualify for reduced tax rates or exemptions. However, as a green card holder, your ability to claim certain treaty benefits may be limited compared to nonresident aliens. Review the specific treaty provisions with a tax professional.",
            },
            {
              heading: "First-Year Compliance Checklist",
              body: "In your first year as a green card holder, gather information on all foreign financial accounts and assets, determine your worldwide income from the date you received your green card, file Form 1040 with Schedule C for your LLC income, file FBAR if applicable, file Form 8938 if your foreign assets exceed the thresholds, and make estimated quarterly tax payments if you expect to owe more than $1,000 in taxes. Consider engaging a tax professional experienced in international tax for your first filing.",
            },
          ],
          keyTakeaways: [
            "Green card holders are U.S. tax residents who must report worldwide income from the date of green card issuance.",
            "Single-member LLC income is reported on Schedule C with self-employment tax on net earnings.",
            "File FBAR (FinCEN 114) if foreign account balances exceed $10,000 in aggregate at any time.",
            "File Form 8938 if foreign financial assets exceed the applicable reporting threshold.",
            "Use foreign tax credits (Form 1116) to avoid double taxation on foreign-sourced income.",
            "Consider engaging an international tax professional for your first filing as a permanent resident.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-09T12:00:00Z",
        sources: [
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
        ],
      },
    ],
  },

  // 12. Green card abandonment and continuing LLC ownership
  {
    question: {
      id: "q-visa-012",
      isFeatured: false,
      title: "Green card abandonment and continuing LLC ownership",
      body: "I am considering abandoning my U.S. green card and moving back to my home country. I own a U.S. LLC that generates significant income. Can I continue to own my LLC after giving up my green card? What are the tax implications of this transition, and are there any exit tax requirements? I want to plan this carefully to minimize unexpected tax liabilities.",
      author: { displayName: "Kenji N.", avatarSeed: "kenji-n", badge: "new-member" as const },
      category: "international",
      tags: ["green-card", "abandonment", "expatriation", "exit-tax", "continuing-ownership"],
      postedAt: "2026-03-10T10:00:00Z",
      viewCount: 1560,
      answerCount: 1,
      status: "answered",
      seoTitle: "Green Card Abandonment: Keeping Your LLC and Tax Rules",
      seoDescription: "Tax implications of abandoning your green card while keeping a U.S. LLC, including exit tax rules, expatriation requirements, and continuing ownership obligations.",
    },
    answers: [
      {
        id: "a-visa-012-1",
        questionId: "q-visa-012",
        articleContent: {
          sections: [
            {
              heading: "Continuing LLC Ownership After Green Card Abandonment",
              body: "Yes, you can continue to own a U.S. LLC after abandoning your green card. There is no requirement that LLC owners be U.S. residents or citizens. However, your tax treatment will change significantly. You will transition from being taxed as a U.S. tax resident on worldwide income to being taxed as a nonresident alien only on U.S.-sourced income and income effectively connected with a U.S. trade or business.",
            },
            {
              heading: "Exit Tax and Expatriation Rules",
              body: "If you are a long-term resident (held a green card for 8 of the last 15 years) and meet certain net worth or tax liability thresholds, you may be subject to the expatriation tax under Section 877A of the Internal Revenue Code. This mark-to-market regime treats you as if you sold all of your worldwide assets at fair market value on the day before expatriation. The gain above an exclusion amount (adjusted annually for inflation) is subject to tax. Your LLC interest would be included in this deemed sale calculation.",
            },
            {
              heading: "Tax Treatment as a Nonresident Alien LLC Owner",
              body: "After abandoning your green card, you become a nonresident alien. Your single-member LLC income that is effectively connected with a U.S. trade or business will be taxed at graduated rates on Form 1040-NR. You must still file a U.S. tax return to report this income. Any income that is not effectively connected but is U.S.-sourced (such as certain investment income) may be subject to a flat 30% withholding rate or a lower treaty rate.",
            },
            {
              heading: "Filing Requirements After Expatriation",
              body: "You must file Form 8854 (Initial and Annual Expatriation Statement) in the year you abandon your green card and for subsequent years if you have deferred tax obligations. Continue filing Form 1040-NR for any U.S.-sourced income from your LLC. You may also need to file state tax returns if your LLC operates in a state that taxes nonresident income. The Form I-407 (Abandonment of Lawful Permanent Resident Status) must be filed with USCIS.",
            },
            {
              heading: "Planning for a Smooth Transition",
              body: "Plan your green card abandonment carefully with professional help. Consider the timing of the abandonment relative to your income and assets. Review whether your home country has a tax treaty with the U.S. that could reduce withholding on LLC income. Evaluate whether restructuring the LLC (such as electing corporate tax treatment) could be beneficial after expatriation. Start the planning process at least a year before you intend to abandon your green card.",
            },
          ],
          keyTakeaways: [
            "You can continue owning a U.S. LLC after abandoning your green card.",
            "Long-term residents may face an exit tax treating assets as sold at fair market value.",
            "After expatriation, you are taxed as a nonresident alien on U.S.-sourced and effectively connected income.",
            "File Form 8854 in the year of expatriation and continue filing Form 1040-NR for LLC income.",
            "Plan the transition well in advance with professional tax and immigration advisors.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-10T12:00:00Z",
        sources: [
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
        ],
      },
    ],
  },

  // 13. ITIN vs SSN for LLC owners on different visa types
  {
    question: {
      id: "q-visa-013",
      isFeatured: true,
      title: "ITIN vs SSN for LLC owners on different visa types",
      body: "I am confused about whether I need an ITIN or SSN for my U.S. LLC. I have been told that some visa types qualify for an SSN while others require an ITIN. What determines which tax identification number I should get? How does having an ITIN versus an SSN affect my ability to open a bank account, file taxes, and operate my LLC? I am currently on a B-1 visa but may change status later.",
      author: { displayName: "Fatima A.", avatarSeed: "fatima-a", badge: "new-member" as const },
      category: "international",
      tags: ["itin", "ssn", "tax-id", "visa-types", "bank-account"],
      postedAt: "2026-03-10T10:00:00Z",
      viewCount: 2430,
      answerCount: 1,
      status: "answered",
      seoTitle: "ITIN vs SSN for LLC Owners: Which Visa Types Qualify?",
      seoDescription: "Understand whether you need an ITIN or SSN for your U.S. LLC based on your visa type, and how each affects banking, tax filing, and business operations.",
    },
    answers: [
      {
        id: "a-visa-013-1",
        questionId: "q-visa-013",
        articleContent: {
          sections: [
            {
              heading: "SSN Eligibility by Visa Type",
              body: "Social Security Numbers (SSNs) are issued to individuals who are authorized to work in the United States. Visa types that typically qualify for an SSN include H-1B, L-1, O-1, E-1, E-2, F-1 with work authorization (OPT/CPT), J-1 with work authorization, and green card holders. B-1 and B-2 visa holders generally do not qualify for an SSN because they are not authorized to work. If you cannot get an SSN, you will need an ITIN for tax purposes.",
            },
            {
              heading: "How to Obtain an ITIN",
              body: "An Individual Taxpayer Identification Number (ITIN) is issued by the IRS to individuals who need a U.S. tax identification number but are not eligible for an SSN. To apply, file Form W-7 (Application for IRS Individual Taxpayer Identification Number) along with a federal tax return and documentation proving your identity and foreign status. You can apply through an IRS Certifying Acceptance Agent to avoid mailing original documents. Processing typically takes 7 to 11 weeks.",
            },
            {
              heading: "ITIN vs SSN for LLC Operations",
              body: "For tax filing purposes, both an ITIN and SSN work equally well. You can use either to file your personal tax return and report LLC income. However, an ITIN cannot be used for employment purposes, and it does not confer work authorization. For your LLC, you will also need an EIN (Employer Identification Number), which is separate from your personal ITIN or SSN. The EIN identifies the LLC for tax purposes.",
            },
            {
              heading: "Banking and Financial Account Access",
              body: "Opening a U.S. bank account with an ITIN can be more challenging than with an SSN. Many banks prefer SSNs, but several major banks accept ITINs for personal and business accounts. When opening a business bank account for your LLC, the bank will require the LLC's EIN and your personal identification (ITIN or SSN). Having an ITIN may limit your options for certain financial products such as credit cards or loans.",
            },
            {
              heading: "Transitioning from ITIN to SSN",
              body: "If you later change to a visa status that authorizes employment (such as moving from B-1 to H-1B), you will become eligible for an SSN. Once you receive your SSN, notify the IRS to consolidate your tax records by writing to the IRS ITIN Operations unit. All tax returns previously filed under your ITIN will be linked to your new SSN. You should stop using the ITIN once you have an SSN.",
            },
            {
              heading: "EIN for Your LLC",
              body: "Regardless of whether you have an ITIN or SSN, your LLC needs its own EIN. You can apply for an EIN online through the IRS website if you have an SSN, or by fax or mail using Form SS-4 if you have an ITIN or no U.S. tax ID yet. The EIN is used for filing LLC tax returns, opening business bank accounts, and hiring employees. It is separate from your personal tax identification number.",
            },
          ],
          keyTakeaways: [
            "SSNs are available to visa holders authorized to work (H-1B, L-1, O-1, E-2, etc.); B-1 and B-2 holders typically need an ITIN.",
            "Both ITIN and SSN work for tax filing, but ITIN does not authorize employment.",
            "Your LLC needs its own EIN regardless of whether you have an ITIN or SSN.",
            "Some banks accept ITINs for account opening, but options may be more limited than with an SSN.",
            "If you later obtain an SSN, notify the IRS to consolidate records from your ITIN.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-10T12:00:00Z",
        sources: [
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
        ],
      },
    ],
  },

  // 14. Digital nomad with U.S. LLC: tax by visa status
  {
    question: {
      id: "q-visa-014",
      isFeatured: true,
      title: "Digital nomad with U.S. LLC: tax by visa status",
      body: "I am a digital nomad who travels the world while running my online business through a U.S. LLC. I do not have a fixed residence and I enter the U.S. occasionally on ESTA or B-1 visa. My clients are both in the U.S. and abroad. How does my tax situation work when I do not have a permanent visa or fixed location? Does the number of days I spend in the U.S. determine my tax obligations?",
      author: { displayName: "Marco D.", avatarSeed: "marco-d", badge: "new-member" as const },
      category: "international",
      tags: ["digital-nomad", "remote-work", "substantial-presence", "nomad-tax", "llc-taxation"],
      postedAt: "2026-03-11T10:00:00Z",
      viewCount: 2150,
      answerCount: 1,
      status: "answered",
      seoTitle: "Digital Nomad U.S. LLC Tax Guide by Visa Status",
      seoDescription: "Tax guide for digital nomads with U.S. LLCs covering substantial presence test, visa status impact, and how days spent in the U.S. affect your tax obligations.",
    },
    answers: [
      {
        id: "a-visa-014-1",
        questionId: "q-visa-014",
        articleContent: {
          sections: [
            {
              heading: "Tax Residency for Digital Nomads",
              body: "As a digital nomad without a permanent visa, your U.S. tax residency is primarily determined by the substantial presence test. This test uses a weighted formula counting days spent in the U.S. over a three-year period: all days in the current year, plus one-third of the days in the prior year, plus one-sixth of the days two years prior. If the total equals or exceeds 183 days, you are treated as a U.S. tax resident for the current year.",
            },
            {
              heading: "Tax Obligations as a Nonresident Alien",
              body: "If you do not meet the substantial presence test, you are a nonresident alien for U.S. tax purposes. As a nonresident alien who owns a U.S. LLC, you are subject to tax on income that is effectively connected with a U.S. trade or business (ECI). If your LLC has a U.S. office, employees, or conducts business activities in the U.S., it likely generates ECI. However, if all your work is performed outside the U.S. and the LLC has no U.S. business presence, the income may not be ECI.",
            },
            {
              heading: "The Closer Connection Exception",
              body: "Even if you meet the substantial presence test, you may avoid being treated as a U.S. tax resident if you were present in the U.S. for fewer than 183 days in the current year and you maintain a closer connection to a foreign country. To claim this exception, you must file Form 8840 (Closer Connection Exception Statement for Aliens) with the IRS. You must demonstrate a tax home in a foreign country and stronger ties to that country than to the U.S.",
            },
            {
              heading: "LLC Structure Considerations for Nomads",
              body: "As a digital nomad, consider whether your LLC truly has a U.S. trade or business. If you perform all services outside the U.S. and have no U.S.-based employees or office, your income may not be subject to U.S. tax as a nonresident alien. However, the LLC may still have state filing requirements in the state where it is formed. Some nomads choose states like Wyoming or Delaware for their favorable LLC laws and minimal state tax obligations.",
            },
            {
              heading: "Record-Keeping for Nomad LLC Owners",
              body: "Meticulous record-keeping is essential for digital nomads. Track every day you spend in the U.S. with documentation such as flight records and passport stamps. Keep records of where you perform work each day, as the location of work performance determines sourcing for tax purposes. Document your tax home and ties to any foreign country if you plan to claim the closer connection exception. This documentation protects you in case of an IRS audit.",
            },
            {
              heading: "Home Country Tax Obligations",
              body: "Do not forget that your home country (or the country where you maintain tax residency) may also tax your LLC income. Many countries tax their residents on worldwide income, similar to the U.S. Research your home country's tax rules for citizens or residents earning income abroad. Tax treaties between the U.S. and your home country may provide relief from double taxation through credits or exemptions.",
            },
          ],
          keyTakeaways: [
            "Your U.S. tax residency as a digital nomad depends on the substantial presence test.",
            "Nonresident aliens are taxed only on U.S. effectively connected income and U.S.-sourced income.",
            "The closer connection exception may save you from U.S. tax residency even if you meet the substantial presence test.",
            "If all work is performed outside the U.S. with no U.S. office, LLC income may not be taxable in the U.S.",
            "Track your days in every country meticulously and document your tax home.",
            "Check home country tax obligations as many countries tax residents on worldwide income.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-11T12:00:00Z",
        sources: [
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
        ],
      },
    ],
  },

  // 15. Can a tourist form a U.S. LLC?
  {
    question: {
      id: "q-visa-015",
      isFeatured: false,
      title: "Can a tourist form a U.S. LLC?",
      body: "I am visiting the U.S. as a tourist on a B-2 visa and I want to form an LLC while I am here. I have heard that anyone can form an LLC in the U.S. regardless of citizenship. Is this true, and can I do it during my tourist visit? What steps would I need to take, and will forming an LLC while on a tourist visa cause any immigration problems or create tax obligations?",
      author: { displayName: "Isabella G.", avatarSeed: "isabella-g", badge: "new-member" as const },
      category: "international",
      tags: ["tourist", "b-2", "llc-formation", "foreigner", "non-resident"],
      postedAt: "2026-03-12T10:00:00Z",
      viewCount: 1890,
      answerCount: 1,
      status: "answered",
      seoTitle: "Can a Tourist Form a U.S. LLC on a B-2 Visa?",
      seoDescription: "Find out if tourists can legally form a U.S. LLC while visiting on a B-2 visa, the formation process, immigration implications, and resulting tax obligations.",
    },
    answers: [
      {
        id: "a-visa-015-1",
        questionId: "q-visa-015",
        articleContent: {
          sections: [
            {
              heading: "Yes, Tourists Can Form a U.S. LLC",
              body: "There is no U.S. law preventing a foreign national, including a tourist on a B-2 visa, from forming an LLC. The formation of an LLC is a corporate registration process handled at the state level, and states do not require LLC organizers or members to be U.S. citizens or residents. You can form an LLC in any state, and many states allow online filing that can be completed from anywhere in the world.",
            },
            {
              heading: "Formation Process During a Tourist Visit",
              body: "To form an LLC while visiting, you would file Articles of Organization with the state of your choice, pay the filing fee, and designate a registered agent with a physical address in the formation state. You can also obtain an EIN from the IRS for the LLC. Some steps, like opening a bank account, may be easier to accomplish in person during your visit. However, none of these activities constitute employment or productive work.",
            },
            {
              heading: "Immigration Considerations",
              body: "Forming an LLC is generally considered a passive investment activity and should not violate your B-2 visa terms. The act of organizing a business entity is administrative, not employment. However, you cannot operate the LLC or perform work for it while on a B-2. If a customs officer asks about your visit's purpose and you mention forming a business, it could raise questions. It is advisable to keep your B-2 activities clearly within the tourist or business-meeting scope.",
            },
            {
              heading: "Tax Obligations After LLC Formation",
              body: "Simply forming an LLC does not create an immediate tax obligation if the LLC has no income or activity. Once the LLC begins generating income, your tax obligations depend on the nature of the income and your tax residency status. As a nonresident alien with a dormant LLC, you have minimal obligations. Once the LLC becomes active, you may need to file a U.S. tax return reporting any effectively connected income or U.S.-sourced income.",
            },
            {
              heading: "Ongoing Compliance After You Leave",
              body: "After returning home, you can manage your LLC remotely. You will need to maintain a registered agent in the formation state, file annual reports as required by the state, and pay any applicable state fees. If the LLC earns income, you will have federal and possibly state tax filing obligations. Consider hiring a U.S.-based accountant or tax professional to handle your compliance requirements from abroad.",
            },
          ],
          keyTakeaways: [
            "Tourists can legally form a U.S. LLC; there is no citizenship or residency requirement.",
            "LLC formation is an administrative process, not employment, and generally does not violate B-2 terms.",
            "You cannot operate or work for the LLC while on a B-2 tourist visa.",
            "A dormant LLC has minimal tax obligations; active income triggers filing requirements.",
            "Maintain a registered agent and file annual state reports after returning home.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-12T12:00:00Z",
        sources: [
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
        ],
      },
    ],
  },

  // 16. Tax residency determination for visa holders
  {
    question: {
      id: "q-visa-016",
      isFeatured: true,
      title: "Tax residency determination for visa holders",
      body: "I have been in the U.S. on different visa types over the past few years, including F-1, H-1B, and now I am on an L-1. I am confused about how the IRS determines my tax residency with these visa changes. Does each visa type affect the substantial presence test differently? I need to understand if I am a resident or nonresident alien for tax purposes this year so I can file correctly.",
      author: { displayName: "David L.", avatarSeed: "david-l", badge: "new-member" as const },
      category: "international",
      tags: ["tax-residency", "substantial-presence", "visa-changes", "resident-alien", "nonresident-alien"],
      postedAt: "2026-03-13T10:00:00Z",
      viewCount: 2260,
      answerCount: 1,
      status: "answered",
      seoTitle: "Tax Residency Rules for U.S. Visa Holders Explained",
      seoDescription: "How the IRS determines tax residency for visa holders using the substantial presence test, exempt individual rules, and green card test across different visa types.",
    },
    answers: [
      {
        id: "a-visa-016-1",
        questionId: "q-visa-016",
        articleContent: {
          sections: [
            {
              heading: "Two Tests for Tax Residency",
              body: "The IRS uses two primary tests to determine whether a foreign national is a U.S. tax resident: the green card test and the substantial presence test. Under the green card test, you are a resident if you hold a green card at any time during the year. Under the substantial presence test, you are a resident if you were physically present in the U.S. for at least 31 days during the current year and at least 183 days during the three-year weighted period.",
            },
            {
              heading: "Exempt Individual Rules by Visa Type",
              body: "Certain visa types exclude you from the substantial presence test as an exempt individual. F-1 and J-1 students are exempt for up to 5 calendar years. J-1 non-student scholars and teachers are exempt for 2 calendar years. During exempt years, your days in the U.S. do not count toward the substantial presence test. Once your exempt period expires, all days count normally. Importantly, H-1B, L-1, O-1, and E-type visa holders are NOT exempt individuals and all their days count.",
            },
            {
              heading: "Your Specific Situation: F-1 to H-1B to L-1",
              body: "During your F-1 years (up to 5 calendar years), your days did not count toward the substantial presence test. Once you switched to H-1B, all days began counting. Now on an L-1, your days continue to count. To determine your current status, count all non-exempt days in the current year and apply the three-year weighted formula, excluding any days during your exempt F-1 period. If you have been on H-1B and L-1 for a combined period that satisfies the 183-day test, you are likely a tax resident.",
            },
            {
              heading: "Dual-Status Year Considerations",
              body: "In the year you transition from nonresident to resident status (or vice versa), you may have a dual-status tax year. For the portion of the year you were a nonresident, you are taxed only on U.S.-sourced income. For the portion you were a resident, you are taxed on worldwide income. You file Form 1040 for the resident portion and attach a statement for the nonresident portion, or file Form 1040-NR with a statement for the resident portion, depending on your status at year-end.",
            },
            {
              heading: "First-Year Election",
              body: "If you become a tax resident under the substantial presence test during the year but were not a resident for the entire year, you may be able to make a first-year election to be treated as a resident for the full year. This can be beneficial if you want to file a joint return with a U.S. spouse or claim certain deductions and credits available only to residents. Conversely, you might prefer dual-status treatment to limit U.S. taxation of foreign income.",
            },
            {
              heading: "Filing the Correct Return",
              body: "Once you determine your residency status, file the appropriate return. Tax residents file Form 1040 and report worldwide income. Nonresident aliens file Form 1040-NR and report only U.S.-sourced and effectively connected income. If you are uncertain, the IRS Interactive Tax Assistant tool can help determine your status based on your specific situation. Working with a tax professional familiar with international taxation is highly recommended.",
            },
          ],
          keyTakeaways: [
            "Tax residency is determined by the green card test or the substantial presence test.",
            "F-1 and J-1 holders have exempt periods where days do not count toward the substantial presence test.",
            "H-1B, L-1, O-1, and E-visa holders are not exempt; all U.S. days count from day one.",
            "Visa changes may create dual-status years requiring special filing procedures.",
            "The first-year election allows treatment as a full-year resident in certain situations.",
            "Use IRS Publication 519 and consult a tax professional to determine your exact status.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-13T12:00:00Z",
        sources: [
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
        ],
      },
    ],
  },

  // 17. F-1 student FICA exemption and LLC self-employment
  {
    question: {
      id: "q-visa-017",
      isFeatured: false,
      title: "F-1 student FICA exemption and LLC self-employment",
      body: "I am an F-1 student in my third year and I have an LLC for freelance graphic design work that I do under OPT. My W-2 employer does not withhold FICA taxes because of my F-1 status. But now my LLC is generating self-employment income as well. Do I need to pay self-employment tax (Social Security and Medicare) on my LLC income, or does the F-1 FICA exemption cover that too?",
      author: { displayName: "Anika J.", avatarSeed: "anika-j", badge: "new-member" as const },
      category: "international",
      tags: ["f-1", "fica-exemption", "self-employment-tax", "opt", "student"],
      postedAt: "2026-03-14T10:00:00Z",
      viewCount: 1740,
      answerCount: 1,
      status: "answered",
      seoTitle: "F-1 Student FICA Exemption: Does It Cover LLC Income?",
      seoDescription: "Whether the F-1 student FICA exemption applies to LLC self-employment income, how self-employment tax works for nonresident alien students, and filing requirements.",
    },
    answers: [
      {
        id: "a-visa-017-1",
        questionId: "q-visa-017",
        articleContent: {
          sections: [
            {
              heading: "F-1 FICA Exemption for Employment",
              body: "F-1 students who are nonresident aliens for tax purposes (generally during their first 5 calendar years in the U.S.) are exempt from FICA taxes (Social Security and Medicare) on wages earned from employment. This is why your W-2 employer correctly does not withhold FICA. This exemption applies to services performed by nonresident alien students under the terms of their student visa.",
            },
            {
              heading: "Self-Employment Tax Is Different from FICA",
              body: "Self-employment tax and FICA tax fund the same programs (Social Security and Medicare) but are governed by different provisions of the tax code. FICA applies to wages paid by an employer, while self-employment tax applies to net earnings from self-employment. The exemption for F-1 students in Section 3121(b)(19) of the Internal Revenue Code specifically addresses services performed in the employ of a school, college, or university. Self-employment income from an LLC is treated under a separate framework.",
            },
            {
              heading: "Nonresident Aliens and Self-Employment Tax",
              body: "Generally, nonresident aliens are not subject to U.S. self-employment tax unless a totalization agreement (social security agreement) between the U.S. and their home country applies. If you are from a country without a totalization agreement with the U.S., you are typically not required to pay self-employment tax on your LLC income while you are a nonresident alien. However, if you are from a country with a totalization agreement, the agreement's terms determine which country's social security system covers you.",
            },
            {
              heading: "When You Become a Resident Alien",
              body: "Once you exceed five calendar years in the U.S. on F-1 status, you lose your exempt individual status and your days begin counting toward the substantial presence test. If you become a resident alien, you are generally subject to self-employment tax on LLC income, just like U.S. citizens. The transition from nonresident to resident status significantly changes your self-employment tax obligations.",
            },
            {
              heading: "Filing Requirements for F-1 LLC Owners",
              body: "As a nonresident alien F-1 student, file Form 1040-NR to report your LLC income. Include Schedule C for the business income and expenses. File Form 8843 to document your exempt individual status. If you are not subject to self-employment tax, you do not need to file Schedule SE. Keep thorough records of your days in the U.S. and your visa status history to support your nonresident alien classification.",
            },
          ],
          keyTakeaways: [
            "The F-1 FICA exemption applies to employment wages, not directly to self-employment income.",
            "Nonresident aliens are generally not subject to U.S. self-employment tax unless a totalization agreement applies.",
            "Once you become a resident alien (after 5 calendar years), self-employment tax applies to LLC income.",
            "File Form 1040-NR with Schedule C for LLC income and Form 8843 for exempt individual status.",
            "Check whether your home country has a totalization agreement with the U.S.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-14T12:00:00Z",
        sources: [
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
        ],
      },
    ],
  },

  // 18. J-1 exchange visitors and LLC tax obligations
  {
    question: {
      id: "q-visa-018",
      isFeatured: false,
      title: "J-1 exchange visitors and LLC tax obligations",
      body: "I am on a J-1 exchange visitor visa as a research scholar at a U.S. university. I have a side LLC that I formed to license some software I developed. My J-1 program allows me to earn supplemental income with approval. What are my tax obligations for the LLC income? I know J-1 visitors have some special tax rules and I am in my first year in the U.S. I also want to understand how the two-year home residency requirement affects my situation.",
      author: { displayName: "Pavel S.", avatarSeed: "pavel-s", badge: "new-member" as const },
      category: "international",
      tags: ["j-1", "exchange-visitor", "research-scholar", "software-licensing", "two-year-rule"],
      postedAt: "2026-03-15T10:00:00Z",
      viewCount: 1280,
      answerCount: 1,
      status: "answered",
      seoTitle: "J-1 Exchange Visitor LLC Tax Obligations Explained",
      seoDescription: "Tax obligations for J-1 exchange visitors who own a U.S. LLC, including exempt individual rules, treaty benefits, and the two-year home residency requirement.",
    },
    answers: [
      {
        id: "a-visa-018-1",
        questionId: "q-visa-018",
        articleContent: {
          sections: [
            {
              heading: "J-1 Visa Tax Status",
              body: "J-1 exchange visitors who are teachers or researchers are considered exempt individuals for the substantial presence test for up to 2 calendar years. During this exempt period, your days in the U.S. do not count toward the substantial presence test, and you are treated as a nonresident alien for tax purposes. This means you file Form 1040-NR and are taxed only on U.S.-sourced income and income effectively connected with a U.S. trade or business.",
            },
            {
              heading: "LLC Income Tax Treatment",
              body: "As a nonresident alien, your LLC's income that is effectively connected with a U.S. trade or business is taxed at graduated rates on Form 1040-NR. Software licensing income can be complex: if the licenses are for copyrighted software and constitute royalty income, it may be subject to a flat 30% withholding rate (or a lower treaty rate) rather than graduated rates. The characterization depends on the specific nature of the licensing arrangement.",
            },
            {
              heading: "Tax Treaty Benefits for J-1 Visitors",
              body: "Many U.S. tax treaties have specific provisions for teachers and researchers on exchange programs. Some treaties provide an exemption from U.S. tax on teaching or research income for a specified period (often 2 or 3 years). Additionally, some treaties have provisions for royalty income that could apply to your software licensing. Check the specific treaty between the U.S. and your home country to determine what benefits are available. File Form 8833 to claim treaty benefits.",
            },
            {
              heading: "Two-Year Home Residency Requirement",
              body: "The two-year home residency requirement (INA Section 212(e)) is an immigration requirement, not a tax requirement. It requires certain J-1 visitors to return to their home country for at least two years before they can apply for certain U.S. visa types (H, L, K) or permanent residency. This requirement does not affect your tax obligations while in the U.S. However, it does affect your long-term planning if you intend to remain in the U.S. and continue operating your LLC.",
            },
            {
              heading: "Compliance and Filing Requirements",
              body: "File Form 1040-NR to report your LLC income, Form 8843 to document your exempt individual status, and Form 8833 if claiming treaty benefits. If your LLC generates effectively connected income, you may need to make estimated tax payments quarterly. Obtain prior approval from your J-1 program sponsor for any supplemental employment or business activity. Keep detailed records of your LLC income, expenses, and the nature of the licensing transactions.",
            },
          ],
          keyTakeaways: [
            "J-1 research scholars are exempt from the substantial presence test for up to 2 calendar years.",
            "As a nonresident alien, LLC income is taxed only if effectively connected with a U.S. trade or business.",
            "Software licensing royalties may be subject to 30% withholding or a lower treaty rate.",
            "The two-year home residency requirement is an immigration rule, not a tax rule.",
            "File Form 1040-NR, Form 8843, and Form 8833 (for treaty benefits) as applicable.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-15T12:00:00Z",
        sources: [
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
        ],
      },
    ],
  },

  // 19. TN visa (USMCA) and LLC ownership
  {
    question: {
      id: "q-visa-019",
      isFeatured: false,
      title: "TN visa (USMCA) and LLC ownership",
      body: "I am a Canadian citizen working in the U.S. on a TN visa under the USMCA agreement. I work as a management consultant for my TN employer, but I also want to start my own consulting LLC on the side. Can TN visa holders own and operate a separate LLC? What are the tax implications given that Canada and the U.S. have a tax treaty? I am worried about violating my TN status while also wanting to grow my own business.",
      author: { displayName: "Justin R.", avatarSeed: "justin-r", badge: "new-member" as const },
      category: "international",
      tags: ["tn-visa", "usmca", "canada", "side-business", "tax-treaty"],
      postedAt: "2026-03-16T10:00:00Z",
      viewCount: 1590,
      answerCount: 1,
      status: "answered",
      seoTitle: "TN Visa and LLC Ownership: USMCA Tax Rules for Canadians",
      seoDescription: "Can TN visa holders own a side LLC? Learn about USMCA work restrictions, U.S.-Canada tax treaty benefits, and tax implications for Canadian TN workers with LLCs.",
    },
    answers: [
      {
        id: "a-visa-019-1",
        questionId: "q-visa-019",
        articleContent: {
          sections: [
            {
              heading: "TN Visa Work Authorization Limitations",
              body: "The TN visa authorizes you to work only for the specific employer and in the specific professional capacity listed on your TN petition. Unlike some other visa categories, the TN does not provide general work authorization. Working for your own LLC as a consultant would constitute unauthorized employment because you are only permitted to work for your TN sponsor. The distinction between owning and working for an LLC is crucial here.",
            },
            {
              heading: "Passive LLC Ownership on a TN Visa",
              body: "Similar to H-1B holders, TN visa holders may passively own an LLC. You can be a member of an LLC, receive profit distributions as a return on investment, and participate in major ownership decisions. However, you cannot provide consulting services through the LLC, manage its day-to-day operations, or perform any work that constitutes employment. Hiring employees or independent contractors to run the LLC while you remain a passive owner is the compliant approach.",
            },
            {
              heading: "Tax Obligations for TN Workers in the U.S.",
              body: "As a TN visa holder residing in the U.S., you will meet the substantial presence test and be treated as a U.S. tax resident. You must report your worldwide income on Form 1040, including your TN employer wages and any LLC income. Your LLC income, even if passive, is reportable. Self-employment tax applies to net business income from a single-member LLC if the income is characterized as business income.",
            },
            {
              heading: "U.S.-Canada Tax Treaty Benefits",
              body: "The U.S.-Canada tax treaty provides mechanisms to avoid double taxation. As a U.S. tax resident earning income in the U.S., you would report everything on your U.S. return and then claim foreign tax credits on your Canadian return for taxes paid to the U.S. Canada taxes its residents on worldwide income, so you will also file a Canadian return. The treaty ensures you do not pay tax twice on the same income through the foreign tax credit mechanism.",
            },
            {
              heading: "Transitioning to Self-Employment",
              body: "If you want to actively operate your LLC, you would need to change your immigration status. Options include obtaining an H-1B visa sponsored by your own LLC (though this has complexities), applying for an E-2 treaty investor visa if you make a substantial investment, or applying for permanent residency. A TN visa cannot be used for self-employment, even if the work falls within a USMCA professional category. Consult an immigration attorney to explore your options.",
            },
          ],
          keyTakeaways: [
            "TN visa holders can passively own an LLC but cannot work for it or provide services through it.",
            "Working for your own LLC on a TN visa constitutes unauthorized employment.",
            "TN workers in the U.S. are tax residents who must report worldwide income including LLC income.",
            "The U.S.-Canada tax treaty provides foreign tax credits to prevent double taxation.",
            "To actively operate an LLC, you would need to change your immigration status.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-16T12:00:00Z",
        sources: [
          { label: "IRS - Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
        ],
      },
    ],
  },

  // 20. Visa overstay and LLC tax filing obligations
  {
    question: {
      id: "q-visa-020",
      isFeatured: false,
      title: "Visa overstay and LLC tax filing obligations",
      body: "I overstayed my visa and I am now out of status in the U.S. I still own an LLC that continues to generate income. I am worried about my immigration situation, but I also want to know about my tax obligations. Does being out of status affect my duty to file taxes? If I file a tax return, will the IRS share my information with immigration authorities? I need to understand my obligations without making my situation worse.",
      author: { displayName: "Roberto C.", avatarSeed: "roberto-c", badge: "new-member" as const },
      category: "international",
      tags: ["visa-overstay", "out-of-status", "tax-filing", "irs-confidentiality", "compliance"],
      postedAt: "2026-03-17T10:00:00Z",
      viewCount: 1920,
      answerCount: 1,
      status: "answered",
      seoTitle: "Visa Overstay and LLC Tax Filing: Your Obligations",
      seoDescription: "Do visa overstays still need to file taxes? Learn about LLC tax obligations when out of immigration status, IRS confidentiality rules, and compliance requirements.",
    },
    answers: [
      {
        id: "a-visa-020-1",
        questionId: "q-visa-020",
        articleContent: {
          sections: [
            {
              heading: "Tax Obligations Are Independent of Immigration Status",
              body: "U.S. tax obligations exist independently of immigration status. The IRS requires all individuals who earn income in the U.S. or who are tax residents to file a tax return, regardless of whether they are in valid immigration status. Being out of status does not eliminate your obligation to file and pay taxes on your LLC income. In fact, failing to file taxes while out of status can create additional problems if you ever seek to regularize your immigration status.",
            },
            {
              heading: "Your Tax Residency While Overstaying",
              body: "If you are physically present in the U.S. and meet the substantial presence test, you are a U.S. tax resident regardless of your visa status. Overstaying your visa does not change the fact that days in the U.S. count toward the substantial presence test. As a tax resident, you must report worldwide income on Form 1040, including all LLC income. The IRS looks at physical presence, not legal immigration status, for tax residency purposes.",
            },
            {
              heading: "IRS Confidentiality Protections",
              body: "Section 6103 of the Internal Revenue Code generally prohibits the IRS from disclosing taxpayer information to other government agencies, including immigration authorities, except in limited circumstances. Filing a tax return does not typically result in the IRS sharing your information with USCIS or ICE. The IRS has historically emphasized that tax compliance is separate from immigration enforcement to encourage all earners to file their returns.",
            },
            {
              heading: "Using an ITIN for Tax Filing",
              body: "If you do not have an SSN and are not eligible for one due to your immigration status, you can obtain an ITIN to file your tax return. The ITIN application process through Form W-7 does not require proof of legal immigration status. The IRS issues ITINs solely for tax purposes and does not share ITIN application information with immigration authorities. Your LLC's EIN remains valid regardless of your personal immigration status.",
            },
            {
              heading: "Benefits of Tax Compliance",
              body: "Maintaining tax compliance can actually help your situation in several ways. A clean tax record demonstrates good moral character, which is relevant to many immigration applications. If you eventually apply for an immigration benefit such as cancellation of removal or adjustment of status, evidence of tax compliance strengthens your case. Conversely, failure to file taxes can be held against you in immigration proceedings.",
            },
            {
              heading: "Seek Professional Help",
              body: "Your situation involves the intersection of complex immigration and tax issues. Consult both an immigration attorney and a tax professional. Many communities have legal aid organizations that assist individuals in your situation. Do not ignore your tax obligations. Filing your returns, even if late, is far better than not filing at all. The IRS offers payment plans if you cannot afford to pay your full tax liability immediately.",
            },
          ],
          keyTakeaways: [
            "Tax obligations exist regardless of immigration status; you must file if you have income.",
            "Days spent in the U.S. while overstaying count toward the substantial presence test.",
            "IRS Section 6103 generally prevents disclosure of tax information to immigration authorities.",
            "You can use an ITIN to file taxes if you are not eligible for an SSN.",
            "Tax compliance can strengthen future immigration applications by showing good moral character.",
            "Consult both an immigration attorney and a tax professional for your specific situation.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-17T12:00:00Z",
        sources: [
          { label: "IRS - Determining Alien Tax Status", url: "https://www.irs.gov/individuals/international-taxpayers/determining-alien-tax-status" },
          { label: "IRS Publication 519 - U.S. Tax Guide for Aliens", url: "https://www.irs.gov/publications/p519" },
          { label: "IRS - Taxation of Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens" },
        ],
      },
    ],
  },
];
