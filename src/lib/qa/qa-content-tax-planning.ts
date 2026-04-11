import type { QAThread, QAAuthor } from "./qa-catalog";

const OFFICIAL_AUTHOR: QAAuthor = {
  displayName: "ForeignLLCTax Official",
  avatarSeed: "rippa-official",
  isOfficial: true,
  badge: "expert",
};

export const TAX_PLANNING_THREADS: QAThread[] = [
  // 1. Single-member vs multi-member LLC for foreign owners
  {
    question: {
      id: "q-planning-001",
      isFeatured: true,
      title: "Single-member vs multi-member LLC for foreign owners?",
      body: "I am a foreign national considering forming an LLC in the United States. I am unsure whether to set up a single-member LLC or bring in a partner and create a multi-member LLC. How does each structure affect my US tax obligations differently? I want to understand the filing requirements, tax classification, and liability differences before I decide.",
      author: { displayName: "Carlos M.", avatarSeed: "carlos-m", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "single-member LLC", "multi-member LLC", "entity structure"],
      postedAt: "2026-01-05T10:00:00Z",
      viewCount: 2850,
      answerCount: 1,
      status: "answered",
      seoTitle: "Single-Member vs Multi-Member LLC for Foreign Owners",
      seoDescription: "Compare single-member and multi-member LLCs for foreign owners, including tax classification, filing requirements, and liability differences.",
    },
    answers: [
      {
        id: "a-planning-001-1",
        questionId: "q-planning-001",
        articleContent: {
          sections: [
            {
              heading: "Default Tax Classification Differences",
              body: "A single-member LLC owned by a foreign person is treated as a disregarded entity by default for US tax purposes. This means the LLC itself does not file a separate income tax return; instead, income and expenses flow through to the owner. A multi-member LLC, on the other hand, is classified as a partnership by default and must file Form 1065 (US Return of Partnership Income) annually. Each member then receives a Schedule K-1 reporting their share of income, deductions, and credits.",
            },
            {
              heading: "Filing Requirements for Foreign Owners",
              body: "Foreign owners of a single-member disregarded entity LLC must file Form 5472 along with a pro-forma Form 1120 to report certain transactions between the LLC and its foreign owner. This requirement exists even if the LLC has no US-source income. Multi-member LLCs with foreign partners must file Form 1065 and may also need to withhold tax on the foreign partner's share of effectively connected income under Section 1446.",
            },
            {
              heading: "Liability and Operational Considerations",
              body: "Both single-member and multi-member LLCs provide limited liability protection, shielding owners' personal assets from business debts. However, a multi-member LLC introduces additional complexity in governance, profit-sharing arrangements, and potential disputes. An operating agreement becomes essential in a multi-member structure to define each member's rights, responsibilities, and profit allocation.",
            },
            {
              heading: "Tax Treaty Implications",
              body: "The choice between single-member and multi-member LLCs can affect how tax treaties apply. Some treaty countries may not recognize a disregarded entity, potentially creating issues with foreign tax credits or treaty benefits. Multi-member partnerships may provide clearer treaty applicability since each partner's share of income is separately identifiable for treaty purposes.",
            },
            {
              heading: "Choosing the Right Structure",
              body: "For most foreign owners operating a straightforward business, a single-member LLC offers simplicity and lower compliance costs. A multi-member LLC makes sense when there are genuinely multiple owners who want to share profits and responsibilities. Consider your long-term business goals, the complexity you are willing to manage, and whether you plan to bring in additional investors before making your choice.",
            },
          ],
          keyTakeaways: [
            "Single-member LLCs are disregarded entities by default; multi-member LLCs are partnerships.",
            "Foreign-owned single-member LLCs must file Form 5472 and a pro-forma Form 1120 annually.",
            "Multi-member LLCs require Form 1065 filing and may trigger Section 1446 withholding.",
            "Tax treaty recognition may differ depending on entity classification.",
            "Choose based on actual ownership needs, not just tax considerations.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-05T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
        ],
      },
    ],
  },

  // 2. Disregarded entity vs C-Corp election: pros and cons
  {
    question: {
      id: "q-planning-002",
      isFeatured: true,
      title: "Disregarded entity vs C-Corp election: pros and cons?",
      body: "I own a single-member LLC as a foreign person and it is currently treated as a disregarded entity. I have been hearing that electing C-Corp status might be better for my situation. What are the advantages and disadvantages of each classification? I want to understand the tax rates, filing burden, and long-term implications before filing Form 8832.",
      author: { displayName: "Mei W.", avatarSeed: "mei-w", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "disregarded entity", "C-Corp election", "Form 8832"],
      postedAt: "2026-01-06T10:00:00Z",
      viewCount: 2670,
      answerCount: 1,
      status: "answered",
      seoTitle: "Disregarded Entity vs C-Corp Election for Foreign LLC",
      seoDescription: "Explore the pros and cons of keeping your foreign-owned LLC as a disregarded entity versus electing C-Corp status with Form 8832.",
    },
    answers: [
      {
        id: "a-planning-002-1",
        questionId: "q-planning-002",
        articleContent: {
          sections: [
            {
              heading: "Disregarded Entity: How It Works",
              body: "A disregarded entity LLC is ignored for federal income tax purposes. The foreign owner reports income directly and is subject to tax on effectively connected income (ECI) at graduated individual rates up to 37%. The LLC must file Form 5472 with a pro-forma Form 1120 to report reportable transactions. This structure offers simplicity but exposes the owner to potentially higher individual tax rates on all business income.",
            },
            {
              heading: "C-Corp Election: How It Works",
              body: "By filing Form 8832, a foreign-owned LLC can elect to be treated as a C corporation. The LLC then pays corporate tax at a flat 21% rate on its income. Distributions to the foreign owner are treated as dividends and subject to a 30% withholding tax (or a reduced treaty rate). The corporation files Form 1120 annually and must comply with corporate tax rules including estimated tax payments.",
            },
            {
              heading: "Advantages of C-Corp Election",
              body: "The flat 21% corporate rate can be significantly lower than the top individual rate of 37%. Retained earnings in the corporation are not subject to additional tax until distributed. C-Corp status may also provide access to certain deductions and credits unavailable to disregarded entities. For foreign owners, it can simplify the tax picture by clearly separating the business entity from the individual owner.",
            },
            {
              heading: "Disadvantages of C-Corp Election",
              body: "The primary disadvantage is double taxation: income is taxed at the corporate level and again when distributed as dividends. The 30% dividend withholding rate (before treaty reductions) can be substantial. C-Corp status also increases compliance costs with more complex filing requirements. Once elected, switching back requires waiting five years or obtaining IRS consent, making this a relatively permanent decision.",
            },
            {
              heading: "Making the Right Choice",
              body: "The best election depends on your profit levels, whether you plan to retain earnings or distribute them, your home country's tax treaty with the US, and your long-term business plans. If your business generates high income and you plan to reinvest profits, C-Corp status may save taxes. If you need regular distributions or your country has a favorable treaty reducing dividend withholding, run the numbers carefully before electing.",
            },
          ],
          keyTakeaways: [
            "Disregarded entities face graduated rates up to 37% on effectively connected income.",
            "C-Corp election provides a flat 21% corporate tax rate but creates double taxation on distributions.",
            "Dividend withholding at 30% (or treaty rate) applies when a C-Corp distributes to foreign owners.",
            "C-Corp election via Form 8832 is difficult to reverse within five years.",
            "Model the total tax burden under both scenarios before electing.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-06T12:00:00Z",
        sources: [
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },

  // 3. When should a foreign LLC owner elect C-Corp (Form 8832)?
  {
    question: {
      id: "q-planning-003",
      isFeatured: false,
      title: "When should a foreign LLC owner elect C-Corp status?",
      body: "I have been running my US LLC as a disregarded entity for two years now. My revenue has grown substantially and I am wondering if it makes sense to elect C-Corp status using Form 8832. At what income level or in what circumstances does a C-Corp election become advantageous for a foreign LLC owner? Are there specific triggers I should watch for?",
      author: { displayName: "Arjun P.", avatarSeed: "arjun-p", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "C-Corp election", "Form 8832", "entity structure"],
      postedAt: "2026-01-08T10:00:00Z",
      viewCount: 1920,
      answerCount: 1,
      status: "answered",
      seoTitle: "When to Elect C-Corp Status for Foreign-Owned LLC",
      seoDescription: "Learn when foreign LLC owners should consider electing C-Corp status using Form 8832, including income thresholds and strategic triggers.",
    },
    answers: [
      {
        id: "a-planning-003-1",
        questionId: "q-planning-003",
        articleContent: {
          sections: [
            {
              heading: "The Income Threshold Consideration",
              body: "When your LLC's effectively connected income exceeds the threshold where the graduated individual tax rate surpasses the flat 21% corporate rate, a C-Corp election begins to look attractive. For 2026, this crossover generally occurs when taxable income exceeds approximately $90,000 to $100,000, depending on your specific deductions. However, you must factor in the additional dividend withholding tax on distributions to determine the true breakeven point.",
            },
            {
              heading: "Retained Earnings Strategy",
              body: "C-Corp status is most beneficial when you plan to retain substantial earnings in the business for reinvestment rather than distributing them. If your business needs capital for expansion, inventory, equipment, or hiring, paying 21% corporate tax on retained earnings is significantly better than paying up to 37% individual rates. The tax savings compound over time as retained earnings grow within the corporation.",
            },
            {
              heading: "Treaty Rate on Dividends",
              body: "Your home country's tax treaty with the US dramatically affects whether a C-Corp election makes sense. Countries like the UK, Japan, and many EU nations have treaties that reduce dividend withholding to 5-15%. With a 15% treaty rate, the combined corporate tax plus dividend withholding on distributed earnings is approximately 33% — still lower than the top individual rate. Without a treaty, the 30% withholding on dividends often negates the corporate rate advantage.",
            },
            {
              heading: "Access to Employee Benefits and Deductions",
              body: "A C-Corp can deduct certain fringe benefits for owner-employees, including health insurance premiums, life insurance, and certain retirement plan contributions, that are not available to disregarded entities. If you work in the business and want to provide yourself with deductible benefits, C-Corp status creates opportunities for additional tax savings beyond just the rate difference.",
            },
            {
              heading: "Timing and Practical Considerations",
              body: "File Form 8832 within 75 days of the desired effective date, or up to 75 days before. The election is generally effective for five years and cannot be easily reversed. Before filing, consult with a cross-border tax professional who can model your specific scenario. Consider your three-to-five year business plan, expected profit levels, distribution needs, and applicable treaty rates before committing to this election.",
            },
          ],
          keyTakeaways: [
            "C-Corp election becomes attractive when ECI consistently exceeds roughly $90,000-$100,000 annually.",
            "The election is most beneficial when you plan to retain earnings rather than distribute them.",
            "Tax treaty dividend withholding rates significantly affect the total tax burden of a C-Corp.",
            "C-Corp status unlocks additional deductible fringe benefits for owner-employees.",
            "File Form 8832 strategically and consult a professional before committing to this five-year election.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-08T12:00:00Z",
        sources: [
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },

  // 4. Why foreign owners can't elect S-Corp status
  {
    question: {
      id: "q-planning-004",
      isFeatured: true,
      title: "Why can't foreign LLC owners elect S-Corp status?",
      body: "I keep reading that S-Corp status is a great tax-saving strategy for small business owners in the US. As a foreign national who owns a US LLC, I tried to look into electing S-Corp but was told I cannot. Why are foreign owners excluded from S-Corp elections? Are there any workarounds or alternative strategies that achieve a similar tax benefit?",
      author: { displayName: "Hans K.", avatarSeed: "hans-k", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "S-Corp", "foreign owner", "entity structure"],
      postedAt: "2026-01-10T10:00:00Z",
      viewCount: 2440,
      answerCount: 1,
      status: "answered",
      seoTitle: "Why Foreign LLC Owners Cannot Elect S-Corp Status",
      seoDescription: "Understand why nonresident aliens are ineligible for S-Corp election and explore alternative tax strategies for foreign LLC owners.",
    },
    answers: [
      {
        id: "a-planning-004-1",
        questionId: "q-planning-004",
        articleContent: {
          sections: [
            {
              heading: "The Statutory Restriction",
              body: "Section 1361(b)(1)(C) of the Internal Revenue Code requires that all shareholders of an S corporation must be US citizens or resident aliens. Nonresident aliens are explicitly prohibited from being S-Corp shareholders. This restriction exists because S-Corps are pass-through entities, and the US tax system is designed so that S-Corp income flows through to shareholders who are subject to US taxation on their worldwide income. Nonresident aliens, who are only taxed on US-source income, do not fit this framework.",
            },
            {
              heading: "What Happens If You Try",
              body: "If a nonresident alien becomes a shareholder of an S corporation, the S election is automatically terminated. The corporation reverts to C-Corp status, which can trigger unexpected tax consequences for all shareholders. This termination is retroactive to the date the ineligible shareholder acquired shares. The IRS can also impose penalties and require amended returns for the affected tax years.",
            },
            {
              heading: "C-Corp as the Primary Alternative",
              body: "The most common alternative for foreign LLC owners seeking a favorable tax rate is the C-Corp election via Form 8832. While it does not provide the pass-through benefit of an S-Corp, the flat 21% corporate rate can still be advantageous compared to graduated individual rates. The key difference is that a C-Corp creates double taxation on distributions, whereas an S-Corp would allow income to pass through with only one level of tax.",
            },
            {
              heading: "Other Structural Alternatives",
              body: "Some foreign owners explore structures involving a US-resident co-owner or trust that might technically qualify for S-Corp status, but these arrangements carry significant legal and tax risks. The IRS closely scrutinizes structures designed to circumvent the nonresident alien restriction. A more practical approach is to optimize your existing entity classification through proper deduction planning, strategic reinvestment, and treaty benefit maximization.",
            },
            {
              heading: "Focus on What You Can Control",
              body: "Rather than trying to replicate S-Corp benefits, foreign LLC owners should focus on legitimate tax planning strategies available to them. These include maximizing business deductions, choosing the optimal entity classification (disregarded entity vs. C-Corp), leveraging applicable tax treaties, and timing income and expenses strategically. A qualified international tax advisor can help identify the best combination of strategies for your specific situation.",
            },
          ],
          keyTakeaways: [
            "IRC Section 1361(b)(1)(C) prohibits nonresident aliens from being S-Corp shareholders.",
            "Having a nonresident alien shareholder automatically terminates the S election.",
            "C-Corp election at 21% is the most common alternative for foreign owners seeking lower rates.",
            "Structures designed to circumvent the restriction carry significant IRS scrutiny risk.",
            "Focus on legitimate strategies like deduction optimization and treaty benefits instead.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-10T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
        ],
      },
    ],
  },

  // 5. Holding company structures for foreign LLC owners
  {
    question: {
      id: "q-planning-005",
      isFeatured: false,
      title: "How do holding company structures work for foreign LLC owners?",
      body: "I own multiple business interests in the US and I am considering setting up a holding company structure. As a foreign national, I want to understand how a holding company could help me manage assets, reduce tax liability, and protect my investments. What are the common holding company structures used by foreign LLC owners and what are the tax implications?",
      author: { displayName: "Sofia R.", avatarSeed: "sofia-r", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "holding company", "entity structure", "asset protection"],
      postedAt: "2026-01-12T10:00:00Z",
      viewCount: 1780,
      answerCount: 1,
      status: "answered",
      seoTitle: "Holding Company Structures for Foreign LLC Owners",
      seoDescription: "Learn how foreign LLC owners can use holding company structures for asset protection, tax planning, and managing multiple US business interests.",
    },
    answers: [
      {
        id: "a-planning-005-1",
        questionId: "q-planning-005",
        articleContent: {
          sections: [
            {
              heading: "What Is a Holding Company Structure?",
              body: "A holding company is an entity that owns and controls other business entities (subsidiaries) but does not itself conduct active business operations. For foreign LLC owners, this typically means creating a parent entity — often a C corporation or LLC — that holds ownership interests in one or more operating LLCs. The holding company serves as a central management and ownership vehicle, consolidating control over multiple business interests.",
            },
            {
              heading: "Common Structures for Foreign Owners",
              body: "The most common structure involves a foreign-owned US LLC or C corporation acting as the parent holding company, with separate operating LLCs as subsidiaries. Some foreign owners also use a foreign holding company in their home country or a third jurisdiction that owns the US entities. The choice of jurisdiction and entity type for the holding company depends on tax treaty networks, local tax laws, and the owner's home country tax regime.",
            },
            {
              heading: "Tax Benefits of a Holding Company",
              body: "A properly structured holding company can facilitate tax-efficient movement of funds between entities, consolidate losses against profits from different subsidiaries, and provide flexibility in choosing entity classifications for each subsidiary. Intercompany transactions must be conducted at arm's length to comply with transfer pricing rules. The holding company may also facilitate reinvestment of profits without triggering distribution-level taxes.",
            },
            {
              heading: "Asset Protection Advantages",
              body: "Holding company structures provide an additional layer of liability protection. If one operating subsidiary faces legal claims or business failure, the assets held in other subsidiaries and the holding company itself are generally shielded. This compartmentalization of risk is particularly valuable for foreign owners who may hold real estate, intellectual property, or other valuable assets across multiple ventures.",
            },
            {
              heading: "Compliance Considerations",
              body: "Holding company structures significantly increase compliance obligations. Each entity requires its own tax filings, and intercompany transactions must be properly documented. Foreign owners must also be aware of controlled foreign corporation (CFC) rules, Form 5471 requirements, and potential PFIC implications. The costs of maintaining a multi-entity structure can be substantial, so ensure the tax benefits outweigh the additional compliance burden.",
            },
            {
              heading: "When a Holding Company Makes Sense",
              body: "A holding company structure is most appropriate when you have multiple operating businesses, significant assets to protect, or complex cross-border operations. If you have a single small business, the added complexity and cost likely outweigh the benefits. Consult with an international tax attorney and CPA to design a structure that aligns with your specific business needs and tax situation.",
            },
          ],
          keyTakeaways: [
            "Holding companies own and control subsidiary operating entities without conducting active business.",
            "Common structures include a US parent LLC or C-Corp owning multiple operating LLCs.",
            "Tax benefits include loss consolidation, flexible entity classification, and reinvestment efficiency.",
            "Asset protection through compartmentalization shields assets across different subsidiaries.",
            "Compliance costs are significant — ensure benefits outweigh the administrative burden.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-12T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
        ],
      },
    ],
  },

  // 6. Multi-tier LLC structures: tax optimization
  {
    question: {
      id: "q-planning-006",
      isFeatured: false,
      title: "How do multi-tier LLC structures optimize taxes for foreign owners?",
      body: "I have seen advice suggesting that foreign LLC owners can benefit from multi-tier LLC structures where one LLC owns another. How does this actually work for tax purposes? Does adding layers of LLCs provide real tax benefits, or does it just add complexity without meaningful savings? I want to understand the legitimate advantages before investing in a complex structure.",
      author: { displayName: "Kenji T.", avatarSeed: "kenji-t", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "multi-tier LLC", "entity structure", "tax optimization"],
      postedAt: "2026-01-14T10:00:00Z",
      viewCount: 1540,
      answerCount: 1,
      status: "answered",
      seoTitle: "Multi-Tier LLC Structures for Foreign Owner Tax Optimization",
      seoDescription: "Understand how multi-tier LLC structures work for foreign owners, including legitimate tax benefits, risks, and when added complexity is justified.",
    },
    answers: [
      {
        id: "a-planning-006-1",
        questionId: "q-planning-006",
        articleContent: {
          sections: [
            {
              heading: "How Multi-Tier LLC Structures Work",
              body: "A multi-tier LLC structure involves creating a parent LLC that owns one or more subsidiary LLCs. The parent LLC may be classified as a disregarded entity, partnership, or corporation depending on its ownership and elections. Each subsidiary LLC operates a specific business line or holds specific assets. When a single-member LLC owns another single-member LLC, both are typically disregarded entities, meaning the IRS looks through the entire chain to the ultimate owner.",
            },
            {
              heading: "Legitimate Tax Optimization Benefits",
              body: "Multi-tier structures can provide legitimate tax optimization through flexible entity classification at each level. For example, a foreign owner might have a C-Corp parent that owns operating LLCs treated as disregarded entities. This allows the operating income to flow up to the C-Corp level and be taxed at the 21% corporate rate. The structure also allows different entity elections for different business lines based on their specific characteristics and income profiles.",
            },
            {
              heading: "Liability Compartmentalization",
              body: "The primary non-tax benefit is liability segregation. By placing different business activities or asset types in separate LLCs, you protect each business from the liabilities of the others. For example, a real estate holding LLC and an e-commerce operating LLC kept in separate subsidiaries ensure that a lawsuit against one does not jeopardize assets in the other. This protection is real and valuable regardless of any tax benefits.",
            },
            {
              heading: "State Tax Considerations",
              body: "Multi-tier structures can affect state tax obligations. Some states impose franchise taxes or annual fees on each LLC registered or doing business in the state. California, for example, imposes an $800 annual minimum tax on each LLC. Having multiple LLCs in such states can significantly increase annual costs. Carefully evaluate the state-level implications before adding entities to your structure.",
            },
            {
              heading: "When Complexity Is Not Justified",
              body: "For many foreign LLC owners, especially those with a single business line and modest revenue, a multi-tier structure adds cost and complexity without proportional benefit. If your annual revenue is under $500,000 and you have a single business activity, a simple single-member LLC (with or without a C-Corp election) is usually sufficient. Multi-tier structures make sense when you have multiple distinct business lines, significant assets requiring protection, or complex cross-border operations.",
            },
          ],
          keyTakeaways: [
            "Multi-tier LLCs allow flexible entity classification at each level of the structure.",
            "Disregarded entity LLCs owned by other disregarded LLCs are looked through to the ultimate owner.",
            "Liability compartmentalization is the primary non-tax benefit of multi-tier structures.",
            "State-level fees and taxes can make multi-tier structures expensive in certain jurisdictions.",
            "Simple businesses rarely benefit enough from multi-tier structures to justify the complexity.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-14T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
        ],
      },
    ],
  },

  // 7. Foreign owner LLC business deductions: what qualifies?
  {
    question: {
      id: "q-planning-007",
      isFeatured: true,
      title: "What business deductions can foreign LLC owners claim?",
      body: "As a foreign owner of a US LLC, I want to make sure I am taking advantage of all available business deductions to reduce my US tax liability. I know that ordinary and necessary business expenses are deductible, but I am unclear on what specifically qualifies when the owner is a nonresident alien. Are there any deductions that domestic owners can take but foreign owners cannot?",
      author: { displayName: "Priya S.", avatarSeed: "priya-s", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "business deductions", "foreign owner", "LLC expenses"],
      postedAt: "2026-01-15T10:00:00Z",
      viewCount: 2980,
      answerCount: 1,
      status: "answered",
      seoTitle: "Business Deductions for Foreign LLC Owners",
      seoDescription: "Discover which business deductions foreign LLC owners can claim, including ordinary expenses, limitations, and differences from domestic owner deductions.",
    },
    answers: [
      {
        id: "a-planning-007-1",
        questionId: "q-planning-007",
        articleContent: {
          sections: [
            {
              heading: "The General Rule: Ordinary and Necessary",
              body: "Foreign LLC owners can deduct the same ordinary and necessary business expenses as domestic owners under IRC Section 162. This includes rent, salaries, supplies, insurance, professional fees, advertising, utilities, and other costs directly related to operating the business. The expenses must be both ordinary (common and accepted in your industry) and necessary (helpful and appropriate for the business). The key requirement is that expenses must be connected to the effectively connected income of the US business.",
            },
            {
              heading: "Common Deductible Expenses",
              body: "Typical deductions available to foreign LLC owners include office rent or home office expenses (if you have a US home office), business insurance premiums, professional services such as accounting and legal fees, marketing and advertising costs, business travel within the US, employee wages and contractor payments, software and technology subscriptions, and business-related education and training. These deductions reduce your effectively connected income dollar for dollar.",
            },
            {
              heading: "Travel and International Expenses",
              body: "Foreign LLC owners who travel to the US for business can deduct reasonable travel expenses including airfare, lodging, meals (subject to the 50% limitation), and local transportation. However, personal travel combined with business travel requires careful allocation. Expenses incurred in your home country that are directly related to your US business operations may also be deductible against your ECI, but documentation requirements are strict.",
            },
            {
              heading: "Limitations Specific to Foreign Owners",
              body: "While most deductions are available equally, some limitations apply specifically to foreign owners. Deductions are only allowed against effectively connected income, not against other types of US-source income like FDAP (fixed, determinable, annual, or periodic) income. Additionally, certain deductions like the standard deduction are not available to nonresident aliens. Foreign owners must itemize deductions on their tax returns. Treaty provisions may also modify available deductions.",
            },
            {
              heading: "Documentation and Record-Keeping",
              body: "Meticulous record-keeping is essential for foreign LLC owners claiming deductions. The IRS may scrutinize deductions more closely for foreign-owned businesses, particularly related-party transactions and cross-border expenses. Maintain receipts, invoices, contracts, and bank statements for all deductions. For travel expenses, keep a detailed log showing business purpose, dates, locations, and amounts. Proper documentation is your best defense in the event of an IRS examination.",
            },
          ],
          keyTakeaways: [
            "Foreign LLC owners can deduct the same ordinary and necessary business expenses as domestic owners.",
            "Deductions must be connected to effectively connected income from the US business.",
            "Nonresident aliens must itemize deductions and cannot use the standard deduction.",
            "Travel expenses between your home country and the US are deductible with proper allocation.",
            "Maintain thorough documentation — the IRS may apply additional scrutiny to foreign-owned LLCs.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-15T12:00:00Z",
        sources: [
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },

  // 8. Section 199A QBI deduction: available to foreign owners?
  {
    question: {
      id: "q-planning-008",
      isFeatured: true,
      title: "Is the Section 199A QBI deduction available to foreign LLC owners?",
      body: "I have heard about the qualified business income deduction under Section 199A that allows eligible business owners to deduct up to 20% of their qualified business income. As a nonresident alien who owns a US LLC, am I eligible for this deduction? My LLC generates significant income and a 20% deduction would make a meaningful difference in my tax liability.",
      author: { displayName: "Liam O.", avatarSeed: "liam-o", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "Section 199A", "QBI deduction", "foreign owner"],
      postedAt: "2026-01-17T10:00:00Z",
      viewCount: 2350,
      answerCount: 1,
      status: "answered",
      seoTitle: "Section 199A QBI Deduction for Foreign LLC Owners",
      seoDescription: "Find out whether nonresident alien LLC owners can claim the Section 199A qualified business income deduction and what limitations apply.",
    },
    answers: [
      {
        id: "a-planning-008-1",
        questionId: "q-planning-008",
        articleContent: {
          sections: [
            {
              heading: "What Is the Section 199A Deduction?",
              body: "Section 199A of the Internal Revenue Code allows eligible taxpayers to deduct up to 20% of their qualified business income (QBI) from a domestic business operated through a pass-through entity such as an LLC, partnership, or S corporation. The deduction was introduced by the Tax Cuts and Jobs Act of 2017 and is currently available through tax year 2025, with potential extensions being discussed by Congress. It is taken at the individual level and reduces taxable income.",
            },
            {
              heading: "Eligibility for Nonresident Aliens",
              body: "The Section 199A deduction is available to nonresident aliens who have effectively connected income from a qualified US trade or business operated through a pass-through entity. The deduction applies to the extent that QBI is effectively connected with the conduct of a trade or business within the United States. This means that if your LLC generates ECI from a qualified business, you may be eligible for the deduction on your Form 1040-NR.",
            },
            {
              heading: "Limitations and Phase-Outs",
              body: "The QBI deduction is subject to several limitations. For higher-income taxpayers, the deduction may be limited based on W-2 wages paid by the business and the unadjusted basis of qualified property. Specified service trades or businesses (such as health, law, consulting, and financial services) face additional restrictions once income exceeds certain thresholds. The deduction also cannot exceed 20% of taxable income (before the QBI deduction) minus net capital gains.",
            },
            {
              heading: "Entity Classification Matters",
              body: "The Section 199A deduction is only available for income from pass-through entities — not C corporations. If your LLC has elected C-Corp status via Form 8832, you cannot claim the QBI deduction on that income. This is an important factor to consider when choosing between disregarded entity and C-Corp classifications. The 20% QBI deduction at individual rates can sometimes result in a lower effective tax rate than the flat 21% corporate rate.",
            },
            {
              heading: "Calculating and Claiming the Deduction",
              body: "To claim the deduction, calculate your QBI from the LLC (net income minus deductions allocable to the business), then determine the lesser of 20% of QBI or 20% of taxable income. Apply any applicable W-2 wage or property basis limitations. Report the deduction on Form 1040-NR. Given the complexity of the calculation, especially for foreign owners with multiple income types, working with a tax professional experienced in international taxation is strongly recommended.",
            },
          ],
          keyTakeaways: [
            "Nonresident aliens with ECI from a pass-through LLC may be eligible for the Section 199A deduction.",
            "The deduction allows up to 20% of qualified business income to be excluded from taxable income.",
            "Service businesses face additional restrictions at higher income levels.",
            "C-Corp elections disqualify the business income from the QBI deduction.",
            "Compare the effective tax rate with QBI deduction against the flat 21% C-Corp rate before choosing your entity classification.",
            "The deduction is set to expire after 2025 unless Congress extends it.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-17T12:00:00Z",
        sources: [
          { label: "IRS: Qualified Business Income Deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" },
          { label: "26 USC 199A", url: "https://www.law.cornell.edu/uscode/text/26/199A" },
        ],
      },
    ],
  },

  // 9. Depreciation strategies (Section 179, bonus) for foreign LLCs
  {
    question: {
      id: "q-planning-009",
      isFeatured: false,
      title: "What depreciation strategies are available for foreign-owned LLCs?",
      body: "My US LLC purchases equipment and other assets for business use. I want to understand the depreciation options available to me as a foreign owner, including Section 179 expensing and bonus depreciation. Can foreign-owned LLCs take advantage of accelerated depreciation to reduce their tax liability in the year of purchase? Are there any restrictions I should be aware of?",
      author: { displayName: "Dmitri V.", avatarSeed: "dmitri-v", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "depreciation", "Section 179", "bonus depreciation"],
      postedAt: "2026-01-19T10:00:00Z",
      viewCount: 1650,
      answerCount: 1,
      status: "answered",
      seoTitle: "Depreciation Strategies for Foreign-Owned LLCs",
      seoDescription: "Learn about Section 179 expensing, bonus depreciation, and MACRS depreciation strategies available to foreign-owned US LLCs.",
    },
    answers: [
      {
        id: "a-planning-009-1",
        questionId: "q-planning-009",
        articleContent: {
          sections: [
            {
              heading: "Overview of Depreciation Methods",
              body: "Foreign-owned LLCs have access to the same depreciation methods as domestic businesses for assets used in their US trade or business. The three primary methods are regular MACRS (Modified Accelerated Cost Recovery System) depreciation, Section 179 immediate expensing, and bonus depreciation. Each method allows you to recover the cost of business assets over time, with accelerated methods providing larger deductions in earlier years to reduce current-year tax liability.",
            },
            {
              heading: "Section 179 Expensing",
              body: "Section 179 allows businesses to deduct the full purchase price of qualifying equipment and software in the year of purchase, rather than depreciating it over several years. For 2026, the maximum deduction is over $1 million (adjusted annually for inflation), with a phase-out beginning when total equipment purchases exceed a certain threshold. Qualifying assets include tangible personal property, off-the-shelf software, and certain improvements to nonresidential real property. The deduction is limited to the business's taxable income for the year.",
            },
            {
              heading: "Bonus Depreciation",
              body: "Bonus depreciation under Section 168(k) allows an additional first-year depreciation deduction for qualifying new and used property. Note that bonus depreciation has been phasing down: it was 80% for property placed in service in 2023, 60% in 2024, 40% in 2025, and 20% in 2026. Unlike Section 179, bonus depreciation is not limited by taxable income and can create or increase a net operating loss. Foreign-owned LLCs can claim bonus depreciation on assets used in their US trade or business.",
            },
            {
              heading: "MACRS Regular Depreciation",
              body: "If Section 179 or bonus depreciation is not elected or does not fully cover the asset cost, MACRS provides a systematic method for depreciating business assets. Common recovery periods include 5 years for computers and office equipment, 7 years for furniture and machinery, and 27.5 or 39 years for residential and commercial real property. MACRS uses either declining balance or straight-line methods depending on the asset class and taxpayer election.",
            },
            {
              heading: "Strategic Considerations for Foreign Owners",
              body: "When planning asset purchases, consider the timing of acquisitions relative to your tax year. Bunching equipment purchases in a single year can maximize Section 179 and bonus depreciation benefits. However, be careful about creating large losses that cannot be utilized due to ECI limitations. Assets must be placed in service within the US to qualify for these deductions when claimed against effectively connected income. Work with your tax advisor to model the optimal depreciation strategy for your specific situation.",
            },
          ],
          keyTakeaways: [
            "Foreign-owned LLCs can use Section 179, bonus depreciation, and MACRS on US business assets.",
            "Section 179 allows immediate expensing up to over $1 million but is limited by taxable income.",
            "Bonus depreciation is phasing down to 20% in 2026 and may create net operating losses.",
            "Assets must be used in a US trade or business to qualify for depreciation deductions against ECI.",
            "Time asset purchases strategically to maximize first-year deduction benefits.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-19T12:00:00Z",
        sources: [
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },

  // 10. Net Operating Loss carryforward rules for foreign LLCs
  {
    question: {
      id: "q-planning-010",
      isFeatured: false,
      title: "How do net operating loss carryforward rules work for foreign LLCs?",
      body: "My US LLC had a loss year in its first year of operations. I want to understand how net operating losses work for foreign-owned LLCs. Can I carry the loss forward to offset income in future years? Are there any limitations or special rules that apply to nonresident aliens? How long can I carry forward the loss?",
      author: { displayName: "Fatima A.", avatarSeed: "fatima-a", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "net operating loss", "NOL carryforward", "foreign LLC"],
      postedAt: "2026-01-20T10:00:00Z",
      viewCount: 1380,
      answerCount: 1,
      status: "answered",
      seoTitle: "Net Operating Loss Carryforward Rules for Foreign LLCs",
      seoDescription: "Understand how NOL carryforward rules apply to foreign-owned LLCs, including the 80% limitation, indefinite carryforward period, and special considerations.",
    },
    answers: [
      {
        id: "a-planning-010-1",
        questionId: "q-planning-010",
        articleContent: {
          sections: [
            {
              heading: "Net Operating Loss Basics",
              body: "A net operating loss occurs when your allowable business deductions exceed your gross income for the tax year. For foreign-owned LLCs, this means your US business expenses exceeded your effectively connected income. The Tax Cuts and Jobs Act of 2017 changed NOL rules significantly: losses arising in tax years after 2017 can be carried forward indefinitely but can no longer be carried back to prior years (with limited exceptions).",
            },
            {
              heading: "The 80% Limitation",
              body: "NOLs arising in tax years beginning after December 31, 2017, are subject to an 80% limitation. This means you can only use your NOL carryforward to offset up to 80% of your taxable income in any given year. The remaining 20% of your income will be taxed regardless of how large your accumulated NOL is. This limitation ensures that profitable businesses always pay some tax, even with prior-year losses.",
            },
            {
              heading: "Application to Nonresident Aliens",
              body: "Nonresident aliens can utilize NOLs against their effectively connected income in future years. The NOL must have originated from a US trade or business to be carried forward against ECI. You must file a US tax return (Form 1040-NR) in the loss year to preserve the NOL for future use. Failure to file in a loss year can result in losing the ability to carry the loss forward.",
            },
            {
              heading: "Calculating Your NOL",
              body: "To calculate the NOL for a foreign-owned LLC, start with your gross ECI and subtract all allowable deductions connected to that income. Certain adjustments are required: you cannot include personal exemptions, and capital losses are limited to capital gains in the NOL calculation. If the result is negative, you have an NOL that can be carried forward. Track your NOL carefully each year, as the carryforward must be properly documented and applied.",
            },
            {
              heading: "Planning with NOLs",
              body: "Understanding NOL rules helps with strategic planning. If you expect losses in early years followed by profitable years, the NOL carryforward provides a natural tax benefit. Consider the timing of deductions and income recognition to optimize how losses are used. If your LLC has elected C-Corp status, the same NOL rules apply at the corporate level. Keep detailed records of your NOL balance, how much is used each year, and the remaining carryforward amount.",
            },
          ],
          keyTakeaways: [
            "NOLs from after 2017 can be carried forward indefinitely but cannot be carried back.",
            "The 80% limitation restricts NOL usage to 80% of taxable income in any year.",
            "File Form 1040-NR in loss years to preserve the NOL for future use.",
            "NOLs must originate from a US trade or business to offset future ECI.",
            "Track NOL balances carefully and plan income timing to maximize their benefit.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-20T12:00:00Z",
        sources: [
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },

  // 11. Passive activity loss rules for foreign LLC owners
  {
    question: {
      id: "q-planning-011",
      isFeatured: false,
      title: "How do passive activity loss rules affect foreign LLC owners?",
      body: "I own a US LLC that invests in rental real estate and I also have a separate active business. I have heard that passive activity loss rules can limit my ability to deduct rental losses against my business income. How do these rules apply to foreign LLC owners? Can I offset my active business income with rental property losses?",
      author: { displayName: "Johan B.", avatarSeed: "johan-b", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "passive activity", "rental losses", "foreign owner"],
      postedAt: "2026-01-22T10:00:00Z",
      viewCount: 1290,
      answerCount: 1,
      status: "answered",
      seoTitle: "Passive Activity Loss Rules for Foreign LLC Owners",
      seoDescription: "Learn how passive activity loss limitations apply to foreign LLC owners with rental properties and active businesses under IRC Section 469.",
    },
    answers: [
      {
        id: "a-planning-011-1",
        questionId: "q-planning-011",
        articleContent: {
          sections: [
            {
              heading: "What Are Passive Activity Loss Rules?",
              body: "Section 469 of the Internal Revenue Code limits the ability of taxpayers to deduct losses from passive activities against non-passive (active) income. A passive activity is generally a trade or business in which the taxpayer does not materially participate. Rental activities are automatically considered passive regardless of participation level, with a limited exception for real estate professionals. These rules apply to all taxpayers, including nonresident aliens with US income.",
            },
            {
              heading: "How the Rules Apply to Foreign Owners",
              body: "Foreign LLC owners are subject to the same passive activity loss rules as domestic taxpayers when they have effectively connected income. Losses from passive activities (such as rental real estate) can only be deducted against passive income. If your passive losses exceed your passive income, the excess is suspended and carried forward to future years when you have sufficient passive income or until you dispose of the activity entirely.",
            },
            {
              heading: "Material Participation Tests",
              body: "To avoid passive classification for a business activity, you must materially participate. The IRS provides seven tests, the most common being participation for more than 500 hours during the tax year. For foreign owners who spend limited time in the US, meeting material participation tests can be challenging. However, participation includes work performed from outside the US if it relates to the US business. Document your hours and activities carefully to support your material participation claim.",
            },
            {
              heading: "The Real Estate Professional Exception",
              body: "Taxpayers who qualify as real estate professionals can treat rental activities as non-passive, allowing rental losses to offset active income. To qualify, you must spend more than 750 hours per year in real estate activities and more than half your personal service hours must be in real estate. For foreign LLC owners, meeting these requirements while living abroad is difficult but not impossible if real estate is your primary business activity.",
            },
            {
              heading: "Disposition of Passive Activities",
              body: "When you fully dispose of a passive activity in a taxable transaction, any suspended passive losses from that activity are fully deductible against any type of income, including active income. This is an important planning consideration. If you have accumulated suspended passive losses from a rental property, selling the property allows you to deduct all suspended losses in the year of sale. Plan dispositions strategically to maximize the benefit of suspended losses.",
            },
          ],
          keyTakeaways: [
            "Passive losses can only offset passive income, not active business income.",
            "Rental activities are automatically passive regardless of participation level.",
            "Foreign owners must meet material participation tests to avoid passive classification for business activities.",
            "Suspended passive losses are fully deductible upon complete disposition of the activity.",
            "The real estate professional exception is difficult for foreign owners living abroad to meet.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-22T12:00:00Z",
        sources: [
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },

  // 12. LLC dissolution: tax consequences for foreign owners
  {
    question: {
      id: "q-planning-012",
      isFeatured: false,
      title: "What are the tax consequences of dissolving a foreign-owned LLC?",
      body: "I am considering closing my US LLC and returning to my home country permanently. What are the tax consequences of dissolving an LLC when the owner is a foreign national? Are there final tax returns I need to file? Will I owe any taxes on the remaining assets in the LLC? I want to make sure I handle the dissolution properly to avoid any future IRS issues.",
      author: { displayName: "Nina L.", avatarSeed: "nina-l", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "LLC dissolution", "foreign owner", "closing business"],
      postedAt: "2026-01-24T10:00:00Z",
      viewCount: 1870,
      answerCount: 1,
      status: "answered",
      seoTitle: "Tax Consequences of Dissolving a Foreign-Owned LLC",
      seoDescription: "Understand the tax implications of dissolving a US LLC as a foreign owner, including final returns, asset distributions, and compliance requirements.",
    },
    answers: [
      {
        id: "a-planning-012-1",
        questionId: "q-planning-012",
        articleContent: {
          sections: [
            {
              heading: "Final Tax Return Requirements",
              body: "When dissolving a foreign-owned LLC, you must file a final tax return covering the LLC's last tax year through the date of dissolution. For a disregarded entity, file a final Form 5472 with the pro-forma Form 1120 and a final Form 1040-NR. For a C-Corp election LLC, file a final Form 1120 and check the box indicating it is a final return. For a partnership LLC, file a final Form 1065. All outstanding taxes must be paid before the LLC can be properly dissolved.",
            },
            {
              heading: "Liquidating Distributions",
              body: "When the LLC distributes its remaining assets to the foreign owner upon dissolution, the tax treatment depends on the entity classification. For a disregarded entity, the distribution is generally not a taxable event since the owner already owns the assets for tax purposes. For a C-Corp LLC, liquidating distributions are treated as payment in exchange for the owner's interest, potentially triggering capital gains tax. The amount received in excess of the owner's tax basis in the LLC interest is taxable gain.",
            },
            {
              heading: "FIRPTA Considerations",
              body: "If the LLC holds US real property interests at the time of dissolution, the Foreign Investment in Real Property Tax Act (FIRPTA) may apply. Liquidating distributions of US real property interests to a foreign owner are subject to FIRPTA withholding at 15% of the fair market value. This applies regardless of whether there is an actual gain on the property. The withholding can be credited against any tax owed on the final return.",
            },
            {
              heading: "State-Level Dissolution Requirements",
              body: "In addition to federal tax obligations, you must formally dissolve the LLC with the state where it was formed and any states where it is registered to do business. Most states require filing articles of dissolution, paying any outstanding fees or taxes, and obtaining a tax clearance certificate. Failure to formally dissolve can result in continued annual fees and penalties, even after the LLC has ceased operations.",
            },
            {
              heading: "Post-Dissolution Obligations",
              body: "Even after dissolution, certain obligations may continue. You may need to respond to IRS inquiries about prior-year returns for up to three years (or six years in cases of substantial understatement). Maintain copies of all tax returns, financial records, and dissolution documents for at least seven years. If the LLC had employees, ensure all final payroll taxes are paid and final W-2s and 1099s are issued. Cancel the LLC's EIN by writing to the IRS after all obligations are satisfied.",
            },
          ],
          keyTakeaways: [
            "File a final tax return for the LLC's last tax year through the dissolution date.",
            "Liquidating distributions from C-Corp LLCs may trigger capital gains tax on amounts exceeding basis.",
            "FIRPTA withholding at 15% applies to distributions of US real property interests.",
            "Formally dissolve the LLC with the state to avoid continued fees and penalties.",
            "Maintain all records for at least seven years after dissolution.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-24T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
        ],
      },
    ],
  },

  // 13. Selling an LLC: capital gains for foreign owners
  {
    question: {
      id: "q-planning-013",
      isFeatured: true,
      title: "How are capital gains taxed when a foreign owner sells an LLC?",
      body: "I am a foreign national who owns a US LLC, and I have received an offer to sell my entire interest in the business. I want to understand how capital gains from the sale will be taxed. Is the gain treated as effectively connected income? What withholding requirements apply? Are there any strategies to minimize the tax impact of selling my LLC interest?",
      author: { displayName: "Ravi G.", avatarSeed: "ravi-g", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "capital gains", "selling LLC", "foreign owner"],
      postedAt: "2026-01-26T10:00:00Z",
      viewCount: 2210,
      answerCount: 1,
      status: "answered",
      seoTitle: "Capital Gains Tax When Foreign Owners Sell an LLC",
      seoDescription: "Learn how capital gains from selling a US LLC are taxed for foreign owners, including ECI treatment, withholding requirements, and tax minimization strategies.",
    },
    answers: [
      {
        id: "a-planning-013-1",
        questionId: "q-planning-013",
        articleContent: {
          sections: [
            {
              heading: "The General Rule: Section 864(c)(8)",
              body: "Under Section 864(c)(8), enacted by the Tax Cuts and Jobs Act, gain or loss from the sale of a partnership interest by a foreign person is treated as effectively connected income (ECI) to the extent that the partner would have had ECI if the partnership had sold all its assets at fair market value. This rule applies to multi-member LLCs taxed as partnerships. The effectively connected gain is taxed at the applicable capital gains rates, which are generally 20% for long-term gains.",
            },
            {
              heading: "Withholding Under Section 1446(f)",
              body: "The buyer of a partnership interest from a foreign seller must withhold 10% of the amount realized (the total sale price) under Section 1446(f). This withholding is not the final tax — it is a prepayment credited against the seller's actual tax liability on Form 1040-NR. If the actual tax is less than the amount withheld, the foreign seller can claim a refund. The buyer must deposit the withheld amount with the IRS using Form 8288 within 20 days of the transfer.",
            },
            {
              heading: "Sale of a Disregarded Entity LLC",
              body: "When a foreign owner sells a single-member LLC that is a disregarded entity, the sale is treated as a sale of the underlying assets rather than a sale of an entity interest. This means each asset is classified separately, and the gain or loss on each asset is determined individually. Some assets may produce ordinary income (such as inventory or receivables), while others produce capital gains. FIRPTA applies to any portion of the gain attributable to US real property interests.",
            },
            {
              heading: "Sale of a C-Corp Elected LLC",
              body: "If the LLC has elected C-Corp status, selling the LLC interest is treated as a sale of stock. Capital gains from the sale of stock by a nonresident alien are generally not taxed by the US unless the stock qualifies as a US real property interest under FIRPTA. If the C-Corp's assets are more than 50% US real property, the stock may be a USRPI, triggering FIRPTA taxation and withholding at 15% of the amount realized.",
            },
            {
              heading: "Tax Minimization Strategies",
              body: "Consider installment sales to spread the gain over multiple tax years, potentially keeping you in lower tax brackets. If applicable, ensure you have properly documented your cost basis, including all capital contributions and reinvested earnings. Review whether a stock sale versus asset sale structure provides better tax treatment. Explore whether your home country's tax treaty provides reduced rates on capital gains. Consult with an international tax advisor well before any sale to structure the transaction optimally.",
            },
          ],
          keyTakeaways: [
            "Section 864(c)(8) treats partnership interest sales as ECI to the extent of underlying ECI assets.",
            "Buyers must withhold 10% of the sale price under Section 1446(f) for partnership interest sales.",
            "Disregarded entity sales are treated as asset sales with individual gain/loss on each asset.",
            "C-Corp LLC sales may avoid US tax unless FIRPTA applies to the stock.",
            "Plan the sale structure and timing carefully with professional tax advice to minimize the tax impact.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-26T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
        ],
      },
    ],
  },

  // 14. Like-kind exchanges (Section 1031) for foreign LLC property
  {
    question: {
      id: "q-planning-014",
      isFeatured: false,
      title: "Can foreign LLC owners use Section 1031 like-kind exchanges?",
      body: "My US LLC owns commercial real estate and I am considering exchanging it for another property rather than selling outright. I have heard that Section 1031 like-kind exchanges allow you to defer capital gains taxes when swapping one investment property for another. As a foreign LLC owner, am I eligible for a 1031 exchange? What are the requirements and limitations?",
      author: { displayName: "Lucia F.", avatarSeed: "lucia-f", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "1031 exchange", "like-kind exchange", "real estate"],
      postedAt: "2026-01-28T10:00:00Z",
      viewCount: 1420,
      answerCount: 1,
      status: "answered",
      seoTitle: "Section 1031 Like-Kind Exchanges for Foreign LLC Owners",
      seoDescription: "Learn whether foreign LLC owners can use Section 1031 like-kind exchanges to defer capital gains on US real estate transactions.",
    },
    answers: [
      {
        id: "a-planning-014-1",
        questionId: "q-planning-014",
        articleContent: {
          sections: [
            {
              heading: "Section 1031 Basics",
              body: "Section 1031 of the Internal Revenue Code allows taxpayers to defer capital gains taxes when they exchange one investment or business-use property for another property of like kind. Since the Tax Cuts and Jobs Act of 2017, like-kind exchanges are limited to real property only — personal property such as equipment, vehicles, and artwork no longer qualifies. The exchange must be of real property held for productive use in a trade or business or for investment purposes.",
            },
            {
              heading: "Foreign Owner Eligibility",
              body: "Foreign nationals who own US real property through an LLC are generally eligible to participate in Section 1031 exchanges. There is no citizenship or residency requirement for 1031 exchanges. However, there are practical complications. FIRPTA applies to dispositions of US real property interests by foreign persons, and the interplay between FIRPTA withholding and 1031 exchange deferral creates compliance complexity. Proper structuring with a qualified intermediary is essential.",
            },
            {
              heading: "FIRPTA and 1031 Exchange Interaction",
              body: "When a foreign person exchanges US real property, FIRPTA technically applies to the disposition. However, if the exchange qualifies under Section 1031 and no boot (cash or non-like-kind property) is received, the gain is deferred and no FIRPTA withholding should be required on the deferred portion. If boot is received, FIRPTA withholding applies to the boot amount. The foreign owner should apply for a withholding certificate from the IRS to reduce or eliminate withholding on a qualifying 1031 exchange.",
            },
            {
              heading: "Timing and Identification Rules",
              body: "Section 1031 exchanges have strict timing requirements. The replacement property must be identified within 45 days of transferring the relinquished property, and the exchange must be completed within 180 days. You can identify up to three potential replacement properties regardless of value, or more properties if their combined value does not exceed 200% of the relinquished property's value. These deadlines are absolute and cannot be extended.",
            },
            {
              heading: "Practical Tips for Foreign LLC Owners",
              body: "Use a qualified intermediary experienced with foreign-owned property exchanges. Apply for a FIRPTA withholding certificate early in the process to avoid having funds tied up. Ensure the replacement property is of equal or greater value to fully defer the gain. Consider the ongoing FIRPTA implications of holding the replacement property. Document everything thoroughly, as IRS scrutiny of foreign-owned 1031 exchanges can be rigorous.",
            },
          ],
          keyTakeaways: [
            "Foreign LLC owners are eligible for Section 1031 like-kind exchanges on US real property.",
            "Only real property qualifies for 1031 exchanges since the 2017 tax reform.",
            "FIRPTA withholding complications require advance planning and a withholding certificate application.",
            "Strict 45-day identification and 180-day completion deadlines apply.",
            "Use a qualified intermediary experienced with foreign-owned property exchanges.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-28T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
        ],
      },
    ],
  },

  // 15. Year-end tax planning checklist for foreign LLC owners
  {
    question: {
      id: "q-planning-015",
      isFeatured: true,
      title: "What is a year-end tax planning checklist for foreign LLC owners?",
      body: "The end of the tax year is approaching and I want to make sure I have covered all important tax planning items for my US LLC. As a foreign owner, I know there are unique considerations beyond what domestic owners face. Can you provide a comprehensive checklist of year-end actions I should take to minimize my tax liability and ensure compliance?",
      author: { displayName: "Yuki M.", avatarSeed: "yuki-m", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "year-end checklist", "foreign owner", "tax compliance"],
      postedAt: "2026-02-01T10:00:00Z",
      viewCount: 2560,
      answerCount: 1,
      status: "answered",
      seoTitle: "Year-End Tax Planning Checklist for Foreign LLC Owners",
      seoDescription: "A comprehensive year-end tax planning checklist for foreign LLC owners covering deductions, entity elections, compliance, and income timing strategies.",
    },
    answers: [
      {
        id: "a-planning-015-1",
        questionId: "q-planning-015",
        articleContent: {
          sections: [
            {
              heading: "Review Entity Classification",
              body: "Before year-end, evaluate whether your current entity classification (disregarded entity, partnership, or C-Corp) still serves your interests. If your income has changed significantly, run projections to see if a different classification would reduce your total tax burden. Remember that Form 8832 elections for the following year should ideally be filed within 75 days of the new year. Analyze the interaction between entity classification, applicable treaty rates, and your personal tax situation.",
            },
            {
              heading: "Accelerate Deductions and Defer Income",
              body: "Consider accelerating deductible expenses into the current year by prepaying rent, insurance, or supplies. Purchase equipment before year-end to take advantage of Section 179 expensing and any remaining bonus depreciation. If possible, defer income to the following year by delaying invoicing or deliveries. Review accounts receivable and consider writing off any genuinely uncollectible debts. These timing strategies can meaningfully reduce your current-year tax liability.",
            },
            {
              heading: "Maximize Retirement and Benefit Contributions",
              body: "If your LLC has elected C-Corp status and you are an employee, ensure you have maximized contributions to any qualified retirement plan before year-end. Review fringe benefit programs to ensure all available deductions are being captured. For pass-through LLCs, verify that any SEP-IRA or individual 401(k) contributions are properly planned, keeping in mind that contribution deadlines may extend to the filing deadline for some plans.",
            },
            {
              heading: "Verify Estimated Tax Payments",
              body: "Review your estimated tax payment history for the year. Ensure you have paid enough to avoid underpayment penalties. For C-Corp LLCs, verify that quarterly estimated payments cover at least 100% of the prior year's tax or 100% of the current year's expected tax. For disregarded entity LLCs, check that your Form 1040-ES payments are sufficient. Make any catch-up payments before the final quarterly deadline.",
            },
            {
              heading: "Organize Records and Plan for Filing",
              body: "Gather and organize all financial records, receipts, and documentation needed for tax preparation. Reconcile bank accounts with your accounting records. Ensure Form 5472 information is accurate and complete for all reportable transactions. Verify that any Form 1099s for contractors and Form W-2s for employees will be issued on time. Schedule a meeting with your tax preparer early to avoid the filing season rush and discuss any year-end planning opportunities.",
            },
            {
              heading: "International Compliance Items",
              body: "Review all cross-border transactions for proper documentation and transfer pricing compliance. Verify that any FBAR or FATCA reporting requirements are understood for the following year. Confirm that treaty benefits being claimed are properly supported with documentation. Check whether any changes in your personal residency status or the LLC's operations could affect your US tax obligations in the coming year.",
            },
          ],
          keyTakeaways: [
            "Evaluate your entity classification annually and model whether a change would reduce taxes.",
            "Accelerate deductions and defer income to optimize your current-year tax position.",
            "Verify estimated tax payments are sufficient to avoid underpayment penalties.",
            "Organize records early and schedule tax preparation before filing season.",
            "Review all international compliance requirements including Form 5472, FBAR, and treaty documentation.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-01T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
        ],
      },
    ],
  },

  // 16. Estimated tax payments for foreign LLC owners
  {
    question: {
      id: "q-planning-016",
      isFeatured: false,
      title: "How do estimated tax payments work for foreign LLC owners?",
      body: "I am a nonresident alien who owns a US LLC that generates effectively connected income. I understand that I may need to make estimated tax payments throughout the year rather than waiting until I file my annual return. How do estimated payments work for foreign LLC owners? What are the deadlines, and what happens if I underpay?",
      author: { displayName: "Chen W.", avatarSeed: "chen-w", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "estimated tax payments", "foreign owner", "quarterly taxes"],
      postedAt: "2026-02-03T10:00:00Z",
      viewCount: 1730,
      answerCount: 1,
      status: "answered",
      seoTitle: "Estimated Tax Payments for Foreign LLC Owners",
      seoDescription: "Learn how estimated tax payments work for foreign LLC owners with effectively connected income, including deadlines, calculations, and penalty avoidance.",
    },
    answers: [
      {
        id: "a-planning-016-1",
        questionId: "q-planning-016",
        articleContent: {
          sections: [
            {
              heading: "Who Must Make Estimated Payments",
              body: "Nonresident aliens with effectively connected income from a US LLC must make estimated tax payments if they expect to owe at least $1,000 in US tax for the year after subtracting withholding and credits. This applies to foreign owners of disregarded entity LLCs and those with partnership interests. If your LLC has elected C-Corp status, the corporation itself must make estimated payments if it expects to owe $500 or more in tax.",
            },
            {
              heading: "Payment Deadlines",
              body: "For individuals filing Form 1040-NR, estimated tax payments are due on April 15, June 15, September 15, and January 15 of the following year. However, nonresident aliens who do not have wages subject to US withholding may use a different schedule, with the first payment due June 15 instead of April 15. For C-Corp LLCs, quarterly payments are due on the 15th day of the 4th, 6th, 9th, and 12th months of the corporation's tax year.",
            },
            {
              heading: "Calculating Estimated Payments",
              body: "Estimate your total expected ECI for the year, subtract allowable deductions, and calculate the tax using applicable rates. Divide the total estimated tax by four for equal quarterly payments. Alternatively, you can use the annualized income installment method if your income varies significantly throughout the year. This method allows you to pay less in quarters when income is lower and more when income is higher, avoiding penalties on uneven payments.",
            },
            {
              heading: "Safe Harbor Rules to Avoid Penalties",
              body: "To avoid underpayment penalties, your estimated payments (plus any withholding) must equal at least 90% of the current year's tax liability or 100% of the prior year's tax liability (110% if prior-year AGI exceeded $150,000). Meeting either threshold constitutes a safe harbor. For foreign owners in their first year with US income, the prior-year safe harbor may not be available, making accurate current-year estimation essential.",
            },
            {
              heading: "How to Make Payments",
              body: "Pay estimated taxes using Form 1040-ES (for individuals) or Form 1120-W (for corporations). Payments can be made online through IRS Direct Pay, the Electronic Federal Tax Payment System (EFTPS), or by mailing a check with the appropriate payment voucher. Foreign owners without a US bank account may find EFTPS enrollment challenging; consult your tax preparer about alternative payment methods. Always keep records of all payments made, including confirmation numbers for electronic payments.",
            },
          ],
          keyTakeaways: [
            "Foreign LLC owners with $1,000 or more in expected annual tax must make estimated payments.",
            "Quarterly payment dates are generally April 15, June 15, September 15, and January 15.",
            "Use the safe harbor of 100% of prior-year tax or 90% of current-year tax to avoid penalties.",
            "The annualized income installment method helps if income is uneven across quarters.",
            "Pay via EFTPS, IRS Direct Pay, or check with the appropriate estimated tax voucher.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-03T12:00:00Z",
        sources: [
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },

  // 17. Converting disregarded entity to partnership
  {
    question: {
      id: "q-planning-017",
      isFeatured: false,
      title: "What happens when a disregarded entity LLC adds a member and becomes a partnership?",
      body: "I currently own a single-member US LLC that is treated as a disregarded entity. I am planning to bring in a business partner and add them as a member of the LLC. I understand this will change the tax classification from a disregarded entity to a partnership. What are the tax implications of this conversion? Do I need to file any forms or obtain a new EIN?",
      author: { displayName: "Andre D.", avatarSeed: "andre-d", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "disregarded entity", "partnership conversion", "adding members"],
      postedAt: "2026-02-05T10:00:00Z",
      viewCount: 1460,
      answerCount: 1,
      status: "answered",
      seoTitle: "Converting Disregarded Entity LLC to Partnership",
      seoDescription: "Understand the tax implications when a foreign-owned single-member LLC adds a member and converts from a disregarded entity to a partnership.",
    },
    answers: [
      {
        id: "a-planning-017-1",
        questionId: "q-planning-017",
        articleContent: {
          sections: [
            {
              heading: "Automatic Reclassification",
              body: "When a single-member LLC adds a second member, the entity's tax classification automatically changes from a disregarded entity to a partnership. No Form 8832 election is needed for this conversion — it happens by operation of law. The conversion is effective on the date the new member's ownership interest becomes effective. From that date forward, the LLC must comply with partnership tax rules, including filing Form 1065 and issuing Schedules K-1 to all members.",
            },
            {
              heading: "New EIN Requirement",
              body: "The IRS requires a new Employer Identification Number (EIN) when a disregarded entity becomes a partnership. This is because the change in classification is treated as a change in the entity's tax status. Apply for the new EIN using Form SS-4 or the IRS online EIN application. Update all bank accounts, tax accounts, and business registrations with the new EIN. The old EIN associated with the disregarded entity should no longer be used for partnership filings.",
            },
            {
              heading: "Tax Treatment of the Conversion",
              body: "The conversion from a disregarded entity to a partnership is generally treated as if the sole owner contributed all the LLC's assets and liabilities to a newly formed partnership in exchange for a partnership interest. Under Section 721, this contribution is typically tax-free — no gain or loss is recognized. The new partner's contribution of cash or property is also generally tax-free. However, if liabilities are shifted or if the transaction has debt relief exceeding basis, taxable events can occur.",
            },
            {
              heading: "Operating Agreement and Allocation Rules",
              body: "With the conversion to a partnership, you must have a comprehensive operating agreement that specifies how profits, losses, and distributions are allocated among members. The allocations must have substantial economic effect under Section 704(b) to be respected by the IRS. If allocations do not meet this standard, the IRS will reallocate income based on each partner's interest in the partnership. Consult a tax attorney to draft an operating agreement with proper allocation provisions.",
            },
            {
              heading: "Transition Filing Requirements",
              body: "File a final Form 5472 with the pro-forma Form 1120 for the period the LLC operated as a disregarded entity. Beginning with the partnership conversion date, the LLC must file Form 1065 annually. If either member is a foreign person, additional forms may be required, including Section 1446 withholding on the foreign partner's share of ECI. Plan the transition carefully with your tax advisor to ensure all filing obligations are met for both periods.",
            },
          ],
          keyTakeaways: [
            "Adding a member automatically converts a disregarded entity to a partnership — no Form 8832 needed.",
            "A new EIN is required when the entity classification changes.",
            "The conversion is generally tax-free under Section 721.",
            "A proper operating agreement with substantial economic effect allocations is essential.",
            "File final disregarded entity returns and begin partnership filings from the conversion date.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-05T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
        ],
      },
    ],
  },

  // 18. Series LLC for foreign owners: tax implications
  {
    question: {
      id: "q-planning-018",
      isFeatured: false,
      title: "What are the tax implications of a Series LLC for foreign owners?",
      body: "I have been reading about Series LLCs that allow you to create separate series within a single LLC, each with its own assets, liabilities, and members. As a foreign owner looking to hold multiple investment properties, this structure sounds appealing. How does the IRS treat Series LLCs for tax purposes, and are there special considerations for foreign owners?",
      author: { displayName: "Marco P.", avatarSeed: "marco-p", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "Series LLC", "foreign owner", "entity structure"],
      postedAt: "2026-02-07T10:00:00Z",
      viewCount: 1150,
      answerCount: 1,
      status: "answered",
      seoTitle: "Series LLC Tax Implications for Foreign Owners",
      seoDescription: "Explore how the IRS treats Series LLCs, tax filing options for each series, and special considerations for foreign owners using this structure.",
    },
    answers: [
      {
        id: "a-planning-018-1",
        questionId: "q-planning-018",
        articleContent: {
          sections: [
            {
              heading: "What Is a Series LLC?",
              body: "A Series LLC is a special type of LLC authorized by certain states (including Delaware, Illinois, Texas, and Nevada) that allows the creation of separate series within a single legal entity. Each series can hold distinct assets, incur separate liabilities, and have different members. The key benefit is that the liabilities of one series are theoretically shielded from the assets of other series, similar to having multiple separate LLCs but with lower formation and maintenance costs.",
            },
            {
              heading: "IRS Tax Treatment Uncertainty",
              body: "The IRS has not issued comprehensive guidance on the federal tax treatment of Series LLCs. In proposed regulations, the IRS suggested that each series within a Series LLC should be treated as a separate entity for federal tax purposes. Under this approach, each series would need its own EIN and would be classified independently as a disregarded entity, partnership, or corporation based on its ownership. However, these proposed regulations have not been finalized, creating ongoing uncertainty.",
            },
            {
              heading: "Tax Filing Approaches",
              body: "Given the lack of final IRS guidance, taxpayers generally take one of two approaches. The first treats each series as a separate entity, filing separate returns for each series based on its individual classification. The second treats the entire Series LLC as a single entity, filing one return that consolidates all series. Most tax practitioners recommend the separate entity approach as it aligns with the proposed regulations and the liability segregation intent of the structure.",
            },
            {
              heading: "Considerations for Foreign Owners",
              body: "Foreign owners face additional complexity with Series LLCs. If each series is treated as a separate entity, each series owned by a foreign person as a single member would need its own Form 5472 and pro-forma Form 1120. This can significantly increase compliance costs. Additionally, the liability protection between series has not been tested extensively in court, and some states do not recognize the series structure of other states, potentially undermining the liability protection you are seeking.",
            },
            {
              heading: "Practical Recommendation",
              body: "Given the regulatory uncertainty and untested liability protections, many tax professionals advise foreign owners to use separate LLCs rather than a Series LLC for holding multiple properties or businesses. Separate LLCs provide clear, well-established liability protection and straightforward tax treatment. If you do choose a Series LLC, work with a tax advisor who specializes in this structure and be prepared for potentially complex filing requirements and evolving IRS guidance.",
            },
          ],
          keyTakeaways: [
            "Series LLCs allow multiple series with separate assets and liabilities within one entity.",
            "The IRS has proposed treating each series as a separate entity but has not finalized guidance.",
            "Each foreign-owned series would likely need its own Form 5472 and pro-forma Form 1120.",
            "Liability protection between series has not been extensively tested in courts.",
            "Separate LLCs may be a more reliable option for foreign owners despite higher formation costs.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-07T12:00:00Z",
        sources: [
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "IRS: About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
        ],
      },
    ],
  },

  // 19. Retirement plan options for foreign LLC owners
  {
    question: {
      id: "q-planning-019",
      isFeatured: false,
      title: "What retirement plan options are available for foreign LLC owners?",
      body: "As a foreign national who owns and works in my US LLC, I am interested in setting up a retirement plan that provides tax benefits. I have heard about SEP-IRAs, SIMPLE IRAs, and solo 401(k) plans. Are these options available to nonresident alien LLC owners? What are the eligibility requirements and tax implications?",
      author: { displayName: "Isabella C.", avatarSeed: "isabella-c", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "retirement plan", "SEP-IRA", "foreign owner"],
      postedAt: "2026-02-09T10:00:00Z",
      viewCount: 1340,
      answerCount: 1,
      status: "answered",
      seoTitle: "Retirement Plan Options for Foreign LLC Owners",
      seoDescription: "Explore retirement plan options available to foreign LLC owners, including SEP-IRAs, solo 401(k)s, eligibility requirements, and tax benefits.",
    },
    answers: [
      {
        id: "a-planning-019-1",
        questionId: "q-planning-019",
        articleContent: {
          sections: [
            {
              heading: "General Eligibility for Retirement Plans",
              body: "Nonresident aliens can generally participate in US qualified retirement plans if they have earned income from a US trade or business. The key requirement is having compensation or self-employment income that is effectively connected with a US trade or business. If you work in your LLC and receive compensation (for a C-Corp LLC) or have self-employment income (for a pass-through LLC), you may be eligible for various retirement plan options.",
            },
            {
              heading: "SEP-IRA for Foreign LLC Owners",
              body: "A Simplified Employee Pension IRA (SEP-IRA) is one of the most accessible retirement plans for LLC owners. For self-employed individuals, contributions can be up to 25% of net self-employment income, with an annual maximum that is adjusted for inflation. SEP-IRAs are easy to establish and maintain, with minimal administrative requirements. Foreign LLC owners with ECI from self-employment can establish and contribute to a SEP-IRA. Contributions are tax-deductible against ECI.",
            },
            {
              heading: "Solo 401(k) Plans",
              body: "A solo 401(k), also called an individual 401(k), is available to self-employed individuals with no employees other than a spouse. It allows both employee deferrals and employer contributions, potentially enabling higher total contributions than a SEP-IRA. For 2026, the employee deferral limit is subject to annual adjustments, plus a 25% employer contribution. Foreign LLC owners who are the sole worker in their LLC can benefit from the higher contribution limits of a solo 401(k).",
            },
            {
              heading: "Tax Benefits and Considerations",
              body: "Contributions to qualified retirement plans reduce your effectively connected taxable income in the year of contribution. The investments grow tax-deferred until distribution. However, distributions from these plans are generally subject to US taxation as ECI. If you leave the US permanently and take distributions as a nonresident, the distributions may be subject to 30% withholding (or a reduced treaty rate) as FDAP income. Consider the long-term tax implications of building retirement savings in US-based accounts.",
            },
            {
              heading: "Practical Limitations and Alternatives",
              body: "Some financial institutions may be reluctant to open retirement accounts for nonresident aliens due to compliance concerns and FATCA reporting requirements. Shop around for custodians experienced with international clients. Also consider whether it makes more sense to reinvest profits in your business or invest in retirement accounts in your home country. The right choice depends on your long-term plans, whether you intend to retire in the US, and the tax treatment of US retirement distributions under your home country's tax system.",
            },
          ],
          keyTakeaways: [
            "Nonresident aliens with ECI from a US LLC may be eligible for US retirement plans.",
            "SEP-IRAs allow contributions up to 25% of net self-employment income with simple administration.",
            "Solo 401(k) plans offer higher contribution limits for self-employed individuals without employees.",
            "Contributions reduce current ECI but distributions will be subject to US tax.",
            "Finding a custodian willing to serve nonresident aliens may require extra effort.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-09T12:00:00Z",
        sources: [
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },

  // 20. At-risk limitation rules for foreign LLC members
  {
    question: {
      id: "q-planning-020",
      isFeatured: false,
      title: "How do at-risk limitation rules affect foreign LLC members?",
      body: "I am a foreign national who is a member of a US LLC that recently took on significant debt to finance business expansion. I have been told that at-risk rules may limit my ability to deduct losses from the LLC. What are the at-risk limitation rules, and how do they specifically impact foreign LLC members? Are there any differences compared to how they apply to US members?",
      author: { displayName: "Tomasz R.", avatarSeed: "tomasz-r", badge: "new-member" as const },
      category: "entity-setup",
      tags: ["tax planning", "at-risk rules", "loss limitations", "foreign LLC member"],
      postedAt: "2026-02-11T10:00:00Z",
      viewCount: 1080,
      answerCount: 1,
      status: "answered",
      seoTitle: "At-Risk Limitation Rules for Foreign LLC Members",
      seoDescription: "Understand how at-risk limitation rules under IRC Section 465 affect foreign LLC members' ability to deduct business losses.",
    },
    answers: [
      {
        id: "a-planning-020-1",
        questionId: "q-planning-020",
        articleContent: {
          sections: [
            {
              heading: "What Are the At-Risk Rules?",
              body: "Section 465 of the Internal Revenue Code limits the amount of losses a taxpayer can deduct from a business activity to the amount the taxpayer has at risk in that activity. The at-risk amount generally includes the cash and adjusted basis of property contributed to the activity, plus amounts borrowed for use in the activity for which the taxpayer is personally liable or has pledged property as security. The purpose of these rules is to prevent taxpayers from claiming deductions for losses that exceed their actual economic investment in the business.",
            },
            {
              heading: "Calculating Your At-Risk Amount",
              body: "Your at-risk amount starts with your cash contributions and the adjusted basis of property you contributed to the LLC. Add amounts borrowed for the activity for which you are personally liable (recourse debt) or for which you have pledged property not used in the activity as collateral. Qualified nonrecourse financing secured by real property used in the activity is also included in the at-risk amount. Subtract any amounts you have previously withdrawn or distributions you have received. Your deductible loss for the year cannot exceed this at-risk amount.",
            },
            {
              heading: "Nonrecourse Debt and Foreign Members",
              body: "Nonrecourse debt (debt for which no member is personally liable) generally does not increase a member's at-risk amount, with the exception of qualified nonrecourse financing for real estate. This can significantly limit loss deductions for foreign LLC members who participate in businesses financed primarily with nonrecourse debt. Since lenders may be less willing to provide recourse debt to foreign nationals without US assets, foreign members may find their at-risk amounts are lower than those of domestic members.",
            },
            {
              heading: "Interaction with Other Loss Limitations",
              body: "The at-risk rules are applied before the passive activity loss rules. If your losses exceed your at-risk amount, the excess is suspended under Section 465 regardless of whether you materially participate. Once your at-risk amount increases (through additional contributions or income), suspended losses become available, subject to the passive activity loss rules. This layered limitation system means foreign LLC members must track their at-risk amount, passive activity status, and basis limitations separately.",
            },
            {
              heading: "Planning Strategies for Foreign Members",
              body: "To maximize your at-risk amount, consider making larger cash contributions to the LLC rather than relying on nonrecourse financing. If you personally guarantee LLC debt, that amount increases your at-risk basis, but this also increases your personal liability exposure. For real estate activities, ensure financing qualifies as qualified nonrecourse financing to include it in your at-risk amount. Keep detailed records of all contributions, distributions, and debt arrangements to accurately calculate your at-risk amount each year.",
            },
          ],
          keyTakeaways: [
            "At-risk rules limit loss deductions to the amount you have economically invested in the business.",
            "At-risk amount includes cash contributions, property basis, and recourse debt.",
            "Nonrecourse debt generally does not increase at-risk amounts except for qualified real estate financing.",
            "At-risk limitations are applied before passive activity loss rules.",
            "Foreign members should maximize cash contributions and carefully structure debt to increase at-risk amounts.",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-11T12:00:00Z",
        sources: [
          { label: "IRS: Publication 535 (Business Expenses)", url: "https://www.irs.gov/publications/p535" },
          { label: "IRS: Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
        ],
      },
    ],
  },
];
