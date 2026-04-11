// Seed Q&A content: Cryptocurrency & Digital Assets for Foreign-Owned U.S. LLCs
// Topics cover IRS crypto reporting, DeFi, staking, mining, NFTs, FBAR/FATCA, and more

import type { QAThread, QAAuthor } from "./qa-catalog";

const OFFICIAL_AUTHOR: QAAuthor = {
  displayName: "ForeignLLCTax Official",
  avatarSeed: "rippa-official",
  isOfficial: true,
  badge: "expert",
};

export const CRYPTO_THREADS: QAThread[] = [

  // =====================================================
  // Q&A #1: Crypto income reporting in a foreign-owned LLC
  // =====================================================
  {
    question: {
      id: "q-crypto-income-reporting",
      isFeatured: true,
      title: "How do I report cryptocurrency income earned through my foreign-owned U.S. LLC?",
      body: "I'm a non-resident alien who owns a single-member LLC in Wyoming. The LLC receives crypto payments from clients for freelance consulting work. Some payments are in Bitcoin, some in USDC. I convert most of it to USD through Coinbase within a few days.\n\nDo I need to report this crypto income on my U.S. tax return? The LLC is treated as a disregarded entity for Form 5472 purposes, but I'm confused about whether the crypto payments themselves create additional reporting obligations beyond what I'd have with regular USD payments.\n\nAlso, when I convert BTC to USD, is that a separate taxable event on top of the income?",
      author: {
        displayName: "Andrei V.",
        avatarSeed: "crypto-freelancer-ro",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["cryptocurrency", "income reporting", "foreign-owned LLC", "bitcoin", "disregarded entity", "Form 5472"],
      postedAt: "2026-01-15T08:30:00Z",
      viewCount: 2847,
      answerCount: 1,
      status: "answered",
      seoTitle: "Crypto Income Reporting for Foreign-Owned U.S. LLC Owners",
      seoDescription: "How to report cryptocurrency income received through a foreign-owned U.S. LLC. IRS rules on crypto payments, conversion events, and Form 5472 obligations for non-resident owners.",
    },
    answers: [
      {
        id: "a-crypto-income-reporting-1",
        questionId: "q-crypto-income-reporting",
        articleContent: {
          sections: [
            {
              heading: "Crypto payments received as income are taxed at fair market value on date of receipt",
              body: "Under IRS Notice 2014-21, virtual currency received as payment for goods or services must be included in gross income. The amount to include is the fair market value (FMV) of the virtual currency in U.S. dollars as of the date of receipt.\n\nFor your LLC, each Bitcoin or USDC payment you receive for consulting work is income measured at the USD value on the day you receive it. This is the same rule that applies to any property received as payment — you recognize income equal to the FMV at the time of receipt.\n\nThe fact that you receive crypto instead of USD does not change whether the income is reportable. It only adds the complexity of tracking FMV on each receipt date."
            },
            {
              heading: "Converting crypto to USD is a separate taxable event",
              body: "Yes, when you convert BTC to USD, that is a disposition of property under IRS rules. You recognize gain or loss equal to the difference between the amount you receive in USD and your basis in the Bitcoin.\n\nYour basis in the Bitcoin is the FMV on the date you received it as income. If you convert within a few days and the price hasn't moved much, the gain or loss will be minimal. But it still must be tracked and reported.\n\nFor example: you receive 0.01 BTC worth $500 on March 1. Three days later you sell it for $510. You have $500 of ordinary income (from the consulting payment) plus $10 of capital gain (from the disposition). USDC conversions typically produce negligible gain or loss since stablecoins track $1, but the tracking obligation still applies."
            },
            {
              heading: "Whether this creates a U.S. filing obligation depends on ECI analysis",
              body: "For a foreign person, U.S. tax obligations depend on whether the income is effectively connected income (ECI) with a U.S. trade or business. If your consulting work through the LLC constitutes a U.S. trade or business, the income is ECI regardless of whether you receive payment in crypto or USD.\n\nThe crypto aspect does not independently create or eliminate ECI status. The character of the underlying activity determines that. If you are performing services through a U.S. LLC and the work has sufficient U.S. nexus, the income is likely ECI.\n\nFor the Form 5472 reporting obligation, receiving crypto payments from clients constitutes reportable transactions with the foreign owner (capital contributions if you are depositing them) or with third parties depending on the transaction structure."
            },
            {
              heading: "Form 5472 reporting of crypto transactions",
              body: "Form 5472 requires reporting of certain transactions between the LLC and its foreign owner, as well as transactions between the LLC and other related parties.\n\nIf the LLC receives crypto from clients and converts it to USD, these are third-party business transactions — they do not need to be individually listed on Form 5472 Part IV. However, if you as the foreign owner transfer crypto to or from the LLC (for example, funding the LLC with personal crypto holdings), those are reportable transactions in Part IV.\n\nThe key distinction: client payments to the LLC are business receipts. Transfers between you personally and the LLC are related-party transactions that must be reported on Form 5472."
            },
            {
              heading: "Record-keeping requirements for crypto income",
              body: "The IRS requires detailed records for all cryptocurrency transactions. For each payment received, you should maintain:\n\n1. Date of receipt\n2. Type and amount of cryptocurrency received\n3. Fair market value in USD on the date of receipt (use a consistent pricing source)\n4. The exchange or wallet where the crypto was received\n5. The purpose of the payment (which client, which invoice)\n6. Date and amount of any subsequent conversion to USD or other crypto\n\nIRS Notice 2014-21 Q&A 14 states that taxpayers must maintain records sufficient to establish the positions taken on tax returns. Given the IRS's increasing focus on crypto enforcement, thorough contemporaneous records are essential."
            }
          ],
          keyTakeaways: [
            "Crypto received as payment is income at fair market value on the date of receipt (IRS Notice 2014-21)",
            "Converting crypto to USD is a separate taxable event — track basis and gain/loss even if minimal",
            "The crypto form of payment does not change ECI analysis — the underlying activity determines U.S. tax status",
            "Transfers of crypto between you and your LLC are reportable on Form 5472; client payments to the LLC are not",
            "Maintain detailed records of every crypto receipt including date, amount, FMV, and conversion details"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-16T11:00:00Z",
        sources: [
          { label: "IRS Notice 2014-21 — Virtual Currency Guidance", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #2: Does crypto trading create ECI?
  // =====================================================
  {
    question: {
      id: "q-crypto-eci-trading",
      isFeatured: true,
      title: "Does cryptocurrency trading through my foreign-owned LLC create effectively connected income (ECI)?",
      body: "I'm a foreign national living in Singapore and I own a single-member LLC in Delaware. The LLC's main activity is actively trading cryptocurrencies — buying and selling on U.S. exchanges like Coinbase and Kraken, sometimes dozens of trades per day.\n\nI've read that trading in stocks and securities for your own account generally does NOT create ECI for foreign persons under the IRC Section 864(b)(2) safe harbor. But does this safe harbor apply to crypto? Crypto isn't technically a \"security\" or \"commodity\" under traditional definitions.\n\nIf crypto trading does create ECI, I'd owe U.S. income tax on all my trading profits. That would be a huge deal. Can anyone clarify the current IRS position?",
      author: {
        displayName: "Wei L.",
        avatarSeed: "crypto-trader-sg",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["cryptocurrency", "ECI", "trading", "safe harbor", "Section 864", "foreign-owned LLC", "capital gains"],
      postedAt: "2026-02-03T15:20:00Z",
      viewCount: 2134,
      answerCount: 1,
      status: "answered",
      seoTitle: "Crypto Trading and ECI: Does It Create U.S. Tax for Foreign LLC Owners",
      seoDescription: "Analysis of whether cryptocurrency trading through a foreign-owned U.S. LLC creates effectively connected income. IRC Section 864(b)(2) safe harbor and its uncertain application to crypto.",
    },
    answers: [
      {
        id: "a-crypto-eci-trading-1",
        questionId: "q-crypto-eci-trading",
        articleContent: {
          sections: [
            {
              heading: "The Section 864(b)(2) safe harbor for trading — and why crypto creates uncertainty",
              body: "IRC Section 864(b)(2) provides a safe harbor that allows foreign persons to trade in \"stocks or securities\" or \"commodities\" through a U.S. broker or for their own account without that activity being treated as a U.S. trade or business. This is the \"trading safe harbor\" that protects most foreign investors from ECI on their trading gains.\n\nThe critical question is whether cryptocurrency qualifies as \"stocks or securities\" or \"commodities\" under Section 864(b)(2). The IRS has classified virtual currency as \"property\" for general tax purposes (Notice 2014-21), but has not issued specific guidance on whether crypto falls within the trading safe harbor categories.\n\nThis is an area of genuine legal uncertainty. Different tax practitioners take different positions, and there is no definitive IRS ruling or court case on point."
            },
            {
              heading: "Arguments that the trading safe harbor applies to crypto",
              body: "Several arguments support applying the safe harbor to cryptocurrency trading:\n\n1. The IRS and CFTC have treated certain cryptocurrencies as commodities in enforcement contexts. The CFTC has jurisdiction over Bitcoin futures, which suggests Bitcoin is a commodity.\n\n2. The broad definition of \"commodities\" in the trading context could encompass digital assets that are actively traded on exchanges.\n\n3. The policy purpose of Section 864(b)(2) — encouraging foreign capital to flow into U.S. markets — supports including crypto exchanges in the safe harbor.\n\n4. Some tax treaties provide broader definitions of investment income that may independently protect crypto trading gains from U.S. taxation.\n\nHowever, none of these arguments have been confirmed by the IRS or tested in court for Section 864(b)(2) specifically."
            },
            {
              heading: "Arguments that crypto trading could create ECI",
              body: "The opposing view holds that crypto trading may not qualify for the safe harbor:\n\n1. IRS Notice 2014-21 classifies virtual currency as \"property\" — not as a security or commodity. If the IRS's own classification is \"property,\" the safe harbor for securities and commodities may not apply.\n\n2. Active, high-frequency trading through a U.S.-based LLC with dozens of daily trades could be viewed as conducting a U.S. trade or business, especially if the trading constitutes a dealer-like activity rather than investor-level trading.\n\n3. The safe harbor requires trading for one's \"own account\" and not as a dealer. If the volume and frequency of trading crosses the line into dealer activity, the safe harbor may not apply regardless of asset classification.\n\n4. Using a U.S. LLC as the trading vehicle creates a stronger nexus argument than trading through an offshore entity via a U.S. broker."
            },
            {
              heading: "Practical risk assessment for foreign LLC owners",
              body: "Given the legal uncertainty, foreign LLC owners actively trading crypto face a spectrum of risk:\n\nLower risk: Passive holding of crypto (buy and hold) with infrequent sales. Even if the safe harbor doesn't technically apply, the IRS may be less likely to assert that passive holding constitutes a U.S. trade or business.\n\nModerate risk: Active trading at moderate volume. The safe harbor argument is plausible but unconfirmed.\n\nHigher risk: High-frequency trading, dozens of daily trades, using algorithmic strategies through a U.S. LLC. This looks more like a trade or business and the safe harbor classification is most uncertain.\n\nThe Form 5472 filing requirement applies regardless of ECI determination. Even if trading gains are not ECI, the LLC must file Form 5472 to report transactions between the entity and the foreign owner."
            },
            {
              heading: "What to do while guidance is unclear",
              body: "Until the IRS provides definitive guidance on crypto and the Section 864(b)(2) safe harbor:\n\n1. Consult a tax advisor experienced in both international tax and cryptocurrency. This is not a DIY analysis.\n\n2. Consider the entity structure — trading through a foreign corporation rather than a U.S. LLC may provide different (and potentially more favorable) treaty protections.\n\n3. Maintain detailed trading records. If the IRS does assert ECI, you need complete records to calculate your tax liability.\n\n4. File Form 5472 for the U.S. LLC regardless of your ECI position. The filing obligation exists independently.\n\n5. Monitor IRS guidance — the Treasury has been actively developing regulations around digital assets, and specific guidance on the trading safe harbor may be forthcoming."
            }
          ],
          keyTakeaways: [
            "The Section 864(b)(2) trading safe harbor for securities and commodities has uncertain application to cryptocurrency",
            "IRS classified crypto as \"property\" (Notice 2014-21) — not explicitly as a security or commodity for safe harbor purposes",
            "High-frequency active trading through a U.S. LLC creates the strongest argument for ECI treatment",
            "Form 5472 filing is required regardless of whether crypto trading produces ECI",
            "Consult an international tax advisor — this is an area of genuine legal uncertainty without definitive IRS guidance"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-04T09:45:00Z",
        sources: [
          { label: "IRC Section 864(b)(2) — Trading Safe Harbor", url: "https://www.law.cornell.edu/uscode/text/26/864" },
          { label: "IRS Notice 2014-21 — Virtual Currency Guidance", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #3: IRS crypto reporting requirements overview
  // =====================================================
  {
    question: {
      id: "q-crypto-irs-reporting-overview",
      isFeatured: false,
      title: "What are the current IRS crypto reporting requirements for foreign owners of U.S. LLCs?",
      body: "I keep hearing about new IRS rules for cryptocurrency reporting, and I'm overwhelmed trying to figure out what applies to me specifically as a non-U.S. person who owns a single-member LLC.\n\nI know about Form 5472 already but I'm talking about crypto-specific reporting. The digital asset question on tax returns, the new broker reporting rules, Form 8949 — which of these apply to foreign-owned disregarded entities? Is there a comprehensive overview somewhere?\n\nMy LLC holds some Bitcoin and Ethereum, does occasional trades, and receives some crypto payments from clients. I just want to understand the full scope of what I need to report.",
      author: {
        displayName: "Priya M.",
        avatarSeed: "crypto-overview-in",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["cryptocurrency", "IRS reporting", "digital assets", "foreign owner", "compliance", "overview"],
      postedAt: "2026-01-28T12:15:00Z",
      viewCount: 1923,
      answerCount: 1,
      status: "answered",
      seoTitle: "IRS Crypto Reporting Requirements for Foreign LLC Owners",
      seoDescription: "Comprehensive overview of IRS cryptocurrency reporting requirements for foreign owners of U.S. LLCs. Digital asset question, Form 8949, broker reporting, and Form 5472 obligations.",
    },
    answers: [
      {
        id: "a-crypto-irs-reporting-overview-1",
        questionId: "q-crypto-irs-reporting-overview",
        articleContent: {
          sections: [
            {
              heading: "The digital asset question on federal tax returns",
              body: "Starting with tax year 2022, every federal income tax return includes a question asking whether the taxpayer received, sold, exchanged, or otherwise disposed of any digital assets during the tax year. For your disregarded entity LLC, if a pro forma Form 1120 is filed, this question appears on the return.\n\nYou must answer \"Yes\" if the LLC engaged in any of the following during the tax year: received digital assets as payment for goods or services, sold or exchanged digital assets, received digital assets as a reward or award, received new digital assets from mining or staking, or received digital assets from a hard fork.\n\nThe only exception is if the LLC's only digital asset activity was holding digital assets in a wallet or account, or transferring digital assets between the owner's own wallets."
            },
            {
              heading: "Form 8949 and Schedule D for crypto dispositions",
              body: "Every time the LLC sells, exchanges, or otherwise disposes of cryptocurrency, the transaction must be reported on Form 8949 (Sales and Other Dispositions of Capital Assets). This includes crypto-to-USD sales, crypto-to-crypto exchanges, and using crypto to pay for goods or services.\n\nForm 8949 requires: description of property, date acquired, date sold, proceeds, cost basis, and gain or loss. The totals flow to Schedule D.\n\nHowever, for a foreign-owned disregarded entity filing a pro forma Form 1120, the applicability of Form 8949 depends on whether the gains are ECI. If the crypto dispositions are not ECI, they may not need to be reported on the U.S. return — but they still need to be tracked for potential future reporting."
            },
            {
              heading: "New broker reporting rules under the Infrastructure Investment and Jobs Act",
              body: "The Infrastructure Investment and Jobs Act (2021) expanded the definition of \"broker\" to include crypto exchanges and certain other digital asset intermediaries. Starting with 2025 transactions, brokers are required to report digital asset sales on Form 1099-DA (replacing the informal 1099-B some exchanges previously issued).\n\nFor foreign persons, exchanges will apply the same withholding and reporting rules that apply to securities. This means exchanges may request W-8BEN forms from foreign LLC owners and may apply withholding on certain transactions.\n\nThe final Treasury regulations (T.D. 10000, published in 2024) clarified the scope of broker reporting. DeFi platforms and self-custodial wallets have different (and still evolving) reporting requirements compared to centralized exchanges."
            },
            {
              heading: "Form 5472 reporting for crypto-related transactions",
              body: "Your Form 5472 obligation exists independently of any crypto-specific reporting. The LLC must report transactions between the disregarded entity and its foreign owner, including:\n\n- Capital contributions made in cryptocurrency (report the USD FMV on the date of transfer)\n- Distributions made in cryptocurrency\n- Loans or advances in crypto between the owner and LLC\n\nThird-party business transactions (crypto received from clients, crypto sold on exchanges) are business operations of the LLC and generally do not need to be itemized on Form 5472 Part IV, but they are part of the overall business activity that may need to be described.\n\nThe $25,000 penalty for failure to file Form 5472 applies regardless of whether the transactions involve crypto or traditional currency."
            },
            {
              heading: "State-level reporting considerations",
              body: "Some states where LLCs are commonly formed (Delaware, Wyoming, New Mexico) do not have state income taxes that would apply to LLC business income. However, if the LLC conducts business in a state that does impose income taxes, crypto gains may be subject to state reporting as well.\n\nAdditionally, some states have begun implementing their own digital asset reporting requirements. Money transmission licensing may also be relevant if the LLC is transmitting crypto on behalf of others, though this is a regulatory rather than tax issue.\n\nFor most foreign-owned single-member LLCs, the federal reporting obligations are the primary concern."
            },
            {
              heading: "Putting it all together: your reporting checklist",
              body: "For a foreign-owned single-member LLC that holds and transacts in crypto, the reporting framework is:\n\n1. Form 5472 + pro forma Form 1120: Required annually, regardless of income level. Report crypto transfers between you and the LLC at FMV.\n\n2. Digital asset question: Answer \"Yes\" on the pro forma 1120 if the LLC had any crypto activity beyond merely holding.\n\n3. Form 8949 / Schedule D: Required if the LLC had dispositions that produce ECI. Track all dispositions regardless for record-keeping.\n\n4. Broker reporting (Form 1099-DA): Exchanges will issue these starting with 2025 transactions. Ensure your W-8 forms are on file with each exchange.\n\n5. FBAR / FATCA: May apply if crypto is held on foreign exchanges (covered in separate Q&A entries).\n\n6. State filings: Check whether the LLC has filing obligations in any state where it conducts business."
            }
          ],
          keyTakeaways: [
            "The digital asset question on federal tax returns requires a \"Yes\" answer for any crypto activity beyond just holding",
            "Form 8949 reporting applies to crypto dispositions that are effectively connected income",
            "New Form 1099-DA broker reporting begins for 2025 transactions under expanded broker definitions",
            "Form 5472 must report crypto transfers between the LLC and its foreign owner at fair market value",
            "Track all crypto transactions with date, amount, and FMV even if not currently reportable as ECI"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-29T10:30:00Z",
        sources: [
          { label: "IRS Digital Assets Overview", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
          { label: "IRS Updates on Digital Asset FAQ", url: "https://www.irs.gov/newsroom/irs-updates-frequently-asked-questions-on-digital-assets" },
          { label: "About Form 8949", url: "https://www.irs.gov/forms-pubs/about-form-8949" },
          { label: "T.D. 10000 — Broker Reporting for Digital Assets", url: "https://www.federalregister.gov/documents/2024/07/09/2024-14004/gross-proceeds-and-basis-reporting-by-brokers-and-determination-of-amount-realized-and-basis-for" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #4: Form 8949 and Schedule D for crypto
  // =====================================================
  {
    question: {
      id: "q-crypto-form-8949",
      isFeatured: false,
      title: "How do I fill out Form 8949 for cryptocurrency trades in my foreign-owned LLC?",
      body: "My foreign-owned LLC made about 150 crypto trades last year on Coinbase Pro. I understand I need to report these on Form 8949, but the logistics are confusing. Do I list every single trade individually? What about crypto-to-crypto trades (e.g., ETH to BTC)?\n\nCoinbase gives me a CSV export but the format doesn't match Form 8949 columns exactly. Also, some trades were short-term and some long-term. Do I need separate forms for each?\n\nAnd the big question: since I'm a foreign owner and these might not even be ECI, do I still need to file Form 8949?",
      author: {
        displayName: "Carlos R.",
        avatarSeed: "crypto-form8949-mx",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["Form 8949", "Schedule D", "cryptocurrency", "capital gains", "foreign-owned LLC", "Coinbase"],
      postedAt: "2026-02-18T09:45:00Z",
      viewCount: 1456,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 8949 for Crypto Trades in Foreign-Owned LLCs",
      seoDescription: "Step-by-step guide to reporting cryptocurrency trades on Form 8949 and Schedule D for foreign-owned U.S. LLCs. Short-term vs long-term, crypto-to-crypto trades, and ECI considerations.",
    },
    answers: [
      {
        id: "a-crypto-form-8949-1",
        questionId: "q-crypto-form-8949",
        articleContent: {
          sections: [
            {
              heading: "Form 8949 basics: every disposition is a separate line item",
              body: "Form 8949 requires each disposition of property to be reported as a separate line item. For 150 trades, that means 150 line items. Each line requires:\n\n- Column (a): Description of property (e.g., \"0.5 BTC\" or \"2.3 ETH\")\n- Column (b): Date acquired\n- Column (c): Date sold or disposed of\n- Column (d): Proceeds (FMV in USD on date of sale)\n- Column (e): Cost or other basis\n- Column (h): Gain or loss\n\nCrypto-to-crypto trades (like ETH to BTC) are treated as two transactions for tax purposes: a sale of ETH (proceeds = FMV of BTC received) and a purchase of BTC (basis = FMV of BTC at time of exchange). Only the \"sale\" side needs to be on Form 8949."
            },
            {
              heading: "Short-term vs long-term: use separate sections of Form 8949",
              body: "Form 8949 has two parts:\n\n- Part I: Short-term transactions (held one year or less)\n- Part II: Long-term transactions (held more than one year)\n\nYou must separate your 150 trades into these two categories based on how long you held each asset before disposing of it. The holding period starts on the day after acquisition and ends on the disposal date.\n\nAdditionally, each part has three boxes (A, B, C) based on whether the broker reported the transaction to the IRS and whether the basis was reported. With the new Form 1099-DA reporting, more transactions will fall into Box A (reported with basis) going forward."
            },
            {
              heading: "Handling large volumes: summary statements are allowed",
              body: "If you have too many transactions to list individually on Form 8949, the IRS allows you to attach a statement with the same information in a similar format. Many crypto tax software tools (like CoinTracker, Koinly, or TaxBit) generate Form 8949-compatible reports from exchange CSV exports.\n\nThe statement must include all the same columns as Form 8949. You then enter the totals for each category (short-term Part I, long-term Part II) on the actual Form 8949 and carry the totals to Schedule D.\n\nFor 150 trades, using crypto tax software to generate the statement is strongly recommended rather than manually entering each trade."
            },
            {
              heading: "The ECI question: do foreign owners even need to file Form 8949?",
              body: "This is the critical threshold question. Form 8949 is filed with a U.S. income tax return. If your crypto trading gains are not effectively connected income (ECI), they may not be subject to U.S. income tax, and Form 8949 may not be required with your filing.\n\nHowever, there are important reasons to prepare Form 8949 calculations even if you ultimately determine the gains are not ECI:\n\n1. If the IRS later disagrees with your ECI position, you need contemporaneous records.\n2. Some crypto gains may be FDAP income (fixed, determinable, annual, periodic) subject to 30% withholding, even if not ECI.\n3. Your Form 5472 filing may reference the LLC's business activities, and having accurate gain/loss records supports that reporting.\n\nThe safest approach is to calculate and maintain Form 8949 data for all crypto dispositions, then determine with a tax advisor which forms actually need to be filed."
            },
            {
              heading: "Matching exchange CSV data to Form 8949 columns",
              body: "Coinbase and other exchanges provide transaction history in CSV format, but the column names differ from Form 8949. Here is the typical mapping:\n\n- Exchange \"Timestamp\" maps to Column (c) Date Sold\n- Exchange \"Asset\" maps to Column (a) Description\n- Exchange \"Quantity\" combined with asset name for Column (a)\n- Exchange \"Spot Price\" multiplied by quantity gives Column (d) Proceeds\n- You must calculate Column (e) Basis separately using your acquisition records\n\nExchange CSVs often do NOT include cost basis because they may not know when or where you originally acquired the asset. This is why maintaining your own acquisition records is essential — the exchange only knows the sale side of the transaction."
            }
          ],
          keyTakeaways: [
            "Every crypto disposition (including crypto-to-crypto trades) requires a separate Form 8949 line item",
            "Short-term and long-term trades go in separate parts of Form 8949",
            "For large numbers of trades, use crypto tax software to generate Form 8949-compatible statements",
            "Even if gains are not ECI, prepare Form 8949 calculations for record-keeping and audit defense",
            "Exchange CSV exports often lack cost basis — maintain your own acquisition records for each asset"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-19T14:00:00Z",
        sources: [
          { label: "About Form 8949", url: "https://www.irs.gov/forms-pubs/about-form-8949" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #5: New Form 1099-DA broker reporting rules
  // =====================================================
  {
    question: {
      id: "q-crypto-1099-da",
      isFeatured: true,
      title: "What is Form 1099-DA and how do the new broker reporting rules affect my foreign-owned LLC?",
      body: "I just got an email from Coinbase saying they'll start issuing Form 1099-DA for 2025 transactions. I own my LLC as a non-resident alien and I've been filing W-8BEN with the exchange.\n\nWhat exactly is Form 1099-DA? Will the exchange withhold taxes on my trades? Do I need to do anything differently now that brokers are reporting to the IRS? I'm worried about getting hit with automatic withholding on every trade when the gains might not even be taxable in the U.S.",
      author: {
        displayName: "Tomoko S.",
        avatarSeed: "crypto-1099da-jp",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["Form 1099-DA", "broker reporting", "cryptocurrency", "withholding", "W-8BEN", "foreign-owned LLC"],
      postedAt: "2026-03-01T07:30:00Z",
      viewCount: 2678,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 1099-DA: New Crypto Broker Reporting Rules for Foreign LLC Owners",
      seoDescription: "Understanding Form 1099-DA and the new IRS broker reporting requirements for cryptocurrency. Impact on foreign-owned U.S. LLCs, W-8BEN filing, and potential withholding obligations.",
    },
    answers: [
      {
        id: "a-crypto-1099-da-1",
        questionId: "q-crypto-1099-da",
        articleContent: {
          sections: [
            {
              heading: "Form 1099-DA replaces informal crypto reporting starting with 2025 transactions",
              body: "Form 1099-DA (Digital Asset Proceeds from Broker Transactions) is a new IRS information return that digital asset brokers must file starting with transactions occurring on or after January 1, 2025. It replaces the informal and inconsistent reporting some exchanges previously did using Form 1099-B or Form 1099-MISC.\n\nThe form reports gross proceeds from digital asset dispositions, and starting with 2026 transactions, brokers must also report cost basis information. This is similar to how stock brokers have reported securities transactions on Form 1099-B for decades.\n\nThe legal authority comes from the Infrastructure Investment and Jobs Act (2021) which expanded the definition of \"broker\" under IRC Section 6045 to include persons who effectuate transfers of digital assets on behalf of others."
            },
            {
              heading: "How this affects foreign persons and W-8BEN filers",
              body: "If you have filed a valid W-8BEN (or W-8BEN-E for the LLC if it is treated as a corporation) with your exchange, the exchange will apply the rules for foreign persons rather than U.S. persons.\n\nFor foreign persons, the broker reporting rules interact with the withholding framework under Chapters 3 and 4 of the Internal Revenue Code. The exchange will determine whether withholding applies based on:\n\n1. Whether the gains are U.S.-source income\n2. Whether the gains are ECI or FDAP income\n3. Whether a tax treaty reduces the withholding rate\n4. Whether FATCA reporting and withholding apply\n\nGains from the sale of property (like crypto) that are not ECI are generally not subject to Chapter 3 withholding for foreign persons. However, the broker still reports the gross proceeds to the IRS."
            },
            {
              heading: "Cost basis reporting phases in over two years",
              body: "The Treasury regulations phase in the reporting requirements:\n\n- 2025 transactions: Brokers must report gross proceeds on Form 1099-DA\n- 2026 transactions: Brokers must also report cost basis (but only for assets acquired on or after January 1, 2026 at that broker)\n\nThis phased approach means that for assets you acquired before 2026, the broker may report gross proceeds but not cost basis. You are responsible for maintaining and reporting your own cost basis for those earlier acquisitions.\n\nFor foreign persons, the 1099-DA copy sent to the IRS will help the IRS cross-reference your activity with your tax filings (or lack thereof). Even if no tax is owed, discrepancies between exchange-reported activity and your filings could trigger inquiries."
            },
            {
              heading: "Which entities qualify as \"brokers\" under the new rules",
              body: "The final regulations (T.D. 10000) define brokers broadly to include:\n\n1. Centralized exchanges (Coinbase, Kraken, Gemini, etc.) — clearly covered\n2. Certain hosted wallet providers that facilitate sales\n3. Certain payment processors that convert crypto to fiat\n\nNotably, the regulations were narrowed from the initial proposals. The following are generally NOT treated as brokers under the final rules:\n\n1. DeFi protocols and smart contracts (deferred to future rulemaking)\n2. Self-custodial wallet software (e.g., MetaMask)\n3. Miners and validators (for their role in validating transactions)\n\nHowever, the Treasury has indicated it intends to address DeFi and decentralized exchange reporting in future regulations. The landscape is evolving."
            },
            {
              heading: "What you should do now",
              body: "As a foreign LLC owner trading on U.S. exchanges:\n\n1. Ensure your W-8BEN or W-8BEN-E is current and on file with each exchange. These forms expire after three calendar years and must be renewed.\n\n2. Review whether your LLC should be treated as a corporation or disregarded entity for this purpose — the correct W-8 form depends on entity classification.\n\n3. Keep your own cost basis records for all assets, especially those acquired before the broker reporting requirements take effect.\n\n4. Be prepared for the IRS to have detailed knowledge of your trading activity. If your compliance position is that gains are not ECI, ensure you have documentation supporting that position.\n\n5. Monitor whether your exchange begins any automatic withholding — if it does, you may need to file a U.S. return to claim a refund of overwithholding."
            }
          ],
          keyTakeaways: [
            "Form 1099-DA is mandatory for crypto brokers starting with 2025 transactions, with cost basis reporting phasing in for 2026",
            "Foreign persons with valid W-8 forms on file generally avoid withholding on property sale gains that are not ECI",
            "Exchanges will report gross proceeds to the IRS regardless of your foreign status — expect cross-referencing with your filings",
            "DeFi protocols and self-custodial wallets are not currently classified as brokers, but future rules are expected",
            "Keep W-8 forms current and maintain independent cost basis records for all crypto holdings"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-02T13:15:00Z",
        sources: [
          { label: "T.D. 10000 — Gross Proceeds and Basis Reporting by Brokers", url: "https://www.federalregister.gov/documents/2024/07/09/2024-14004/gross-proceeds-and-basis-reporting-by-brokers-and-determination-of-amount-realized-and-basis-for" },
          { label: "IRS Digital Assets — Broker Reporting", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
          { label: "IRS Updates on Digital Asset FAQ", url: "https://www.irs.gov/newsroom/irs-updates-frequently-asked-questions-on-digital-assets" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #6: DeFi income (yield farming, liquidity pools)
  // =====================================================
  {
    question: {
      id: "q-crypto-defi-income",
      isFeatured: false,
      title: "How is DeFi income from yield farming and liquidity pools taxed for my foreign-owned LLC?",
      body: "My LLC provides liquidity to Uniswap and Aave pools and earns yield. I also do some yield farming on Curve Finance. The income comes in the form of various tokens — LP fees, governance token rewards, etc.\n\nHow does the IRS treat this income? Is providing liquidity to a DeFi protocol a taxable event? What about impermanent loss — can I deduct that? And since this is all on-chain with no centralized broker, does anyone even report this to the IRS?\n\nI'm based in the UK and own the LLC through a disregarded entity structure.",
      author: {
        displayName: "James B.",
        avatarSeed: "defi-yield-uk",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["DeFi", "yield farming", "liquidity pools", "Uniswap", "Aave", "foreign-owned LLC", "impermanent loss"],
      postedAt: "2026-02-10T16:00:00Z",
      viewCount: 1834,
      answerCount: 1,
      status: "answered",
      seoTitle: "DeFi Yield Farming Tax Treatment for Foreign-Owned U.S. LLCs",
      seoDescription: "Tax treatment of DeFi income from yield farming and liquidity pools for foreign-owned U.S. LLCs. IRS guidance on LP tokens, governance rewards, and impermanent loss deductibility.",
    },
    answers: [
      {
        id: "a-crypto-defi-income-1",
        questionId: "q-crypto-defi-income",
        articleContent: {
          sections: [
            {
              heading: "DeFi income is taxable, but the IRS has provided limited direct guidance",
              body: "The IRS has not issued specific guidance dedicated to DeFi protocols, yield farming, or liquidity pool income. However, the general principles from Notice 2014-21 and subsequent IRS FAQ updates apply: cryptocurrency received as income, rewards, or in exchange for services or property is taxable at fair market value on the date of receipt.\n\nFor yield farming and liquidity provision, each type of reward must be analyzed under existing tax categories:\n\n- LP fees (trading fees earned from liquidity provision) are likely ordinary income\n- Governance token rewards are likely ordinary income when received\n- Interest-like yields from lending protocols are likely ordinary income\n\nThe lack of specific DeFi guidance creates uncertainty, but the IRS's general position is clear: income is income regardless of the technology used to generate it."
            },
            {
              heading: "Adding and removing liquidity: potential taxable events",
              body: "When you deposit tokens into a liquidity pool and receive LP tokens in return, this may be treated as a taxable exchange — you are disposing of one asset (e.g., ETH + USDC) and receiving another asset (LP tokens). The IRS has not confirmed this treatment for DeFi specifically, but the general rule is that exchanging one property for another is a realization event.\n\nSimilarly, when you remove liquidity and redeem LP tokens for the underlying assets, that is potentially another taxable exchange.\n\nSome tax practitioners argue that adding liquidity is more analogous to a deposit (not a taxable event), similar to depositing money in a bank. But the conservative position treats it as an exchange because you are receiving a different asset (LP tokens) with different economic characteristics than what you deposited."
            },
            {
              heading: "Impermanent loss: not a recognized tax deduction",
              body: "Impermanent loss is an economic concept specific to automated market makers — it represents the difference between holding assets in a pool versus holding them in a wallet. It is a real economic loss, but the IRS does not recognize it as a separate deductible event.\n\nUnder tax law, losses are recognized when you dispose of an asset for less than your basis. Impermanent loss is only \"realized\" for tax purposes when you withdraw your liquidity and receive fewer tokens (or less value) than you deposited. At that point, the loss is captured in the gain/loss calculation on the disposition of the LP tokens.\n\nYou cannot claim impermanent loss as a standalone deduction while your liquidity remains in the pool."
            },
            {
              heading: "Reporting challenges: no brokers, no 1099s",
              body: "DeFi protocols are not currently classified as brokers under the final Treasury regulations. This means no Form 1099-DA is issued for DeFi transactions. The IRS has deferred rulemaking on DeFi broker classification to future regulations.\n\nHowever, the absence of broker reporting does not eliminate your reporting obligation. You are responsible for tracking and reporting all taxable transactions, including those on decentralized protocols.\n\nPractical tools for tracking DeFi activity include blockchain analytics platforms that can read on-chain transactions and generate tax reports. These tools connect to wallet addresses and parse DeFi protocol interactions into taxable events. Given the complexity, using such tools is strongly recommended."
            },
            {
              heading: "ECI implications of DeFi activity for foreign LLC owners",
              body: "For foreign owners, the threshold question remains whether DeFi income is effectively connected with a U.S. trade or business. DeFi protocols operate globally on public blockchains — there is a reasonable argument that interacting with a smart contract deployed on Ethereum is not a U.S.-situs activity, regardless of where the LLC is organized.\n\nHowever, if the LLC is managed from within the United States or if the DeFi activity is part of a broader U.S. trade or business, the income could be ECI. The source and character of DeFi income is an open question.\n\nThe U.S.-UK tax treaty may provide additional protections depending on the character of the income (business profits, investment income, etc.). Consulting a cross-border tax advisor is recommended."
            }
          ],
          keyTakeaways: [
            "DeFi income (LP fees, governance rewards, yield) is taxable at fair market value when received under general IRS principles",
            "Adding and removing liquidity may be treated as taxable exchanges — IRS has not issued specific DeFi guidance",
            "Impermanent loss is not a standalone tax deduction — it is only recognized when you withdraw and realize the loss",
            "DeFi protocols are not classified as brokers and do not issue 1099s — you must self-report all transactions",
            "ECI analysis for DeFi is highly uncertain — consult a cross-border tax advisor for foreign LLC structures"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-11T10:45:00Z",
        sources: [
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "T.D. 10000 — Broker Definition and DeFi Deferral", url: "https://www.federalregister.gov/documents/2024/07/09/2024-14004/gross-proceeds-and-basis-reporting-by-brokers-and-determination-of-amount-realized-and-basis-for" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #7: Staking income tax treatment
  // =====================================================
  {
    question: {
      id: "q-crypto-staking",
      isFeatured: false,
      title: "Is cryptocurrency staking income taxable for my foreign-owned LLC? When do I recognize it?",
      body: "I stake ETH through my LLC's Coinbase account and also run an Ethereum validator at home overseas. The staking rewards appear in my account periodically. I've heard conflicting information: some say staking rewards are taxed when received, others say they shouldn't be taxed until sold because they're \"newly created property.\"\n\nThere was a court case about this (Jarrett v. United States) — did that change anything? And as a foreign owner, does staking income even create a U.S. tax obligation?",
      author: {
        displayName: "Henrik N.",
        avatarSeed: "crypto-staking-no",
        badge: "subscriber" as const,
      },
      category: "crypto",
      tags: ["staking", "cryptocurrency", "ETH", "Ethereum", "foreign-owned LLC", "Jarrett case", "income recognition"],
      postedAt: "2026-01-22T11:30:00Z",
      viewCount: 1567,
      answerCount: 1,
      status: "answered",
      seoTitle: "Crypto Staking Income Tax Treatment for Foreign LLC Owners",
      seoDescription: "When and how staking rewards are taxed for foreign-owned U.S. LLCs. IRS position under Rev. Rul. 2023-14, the Jarrett case, and ECI analysis for staking income.",
    },
    answers: [
      {
        id: "a-crypto-staking-1",
        questionId: "q-crypto-staking",
        articleContent: {
          sections: [
            {
              heading: "IRS position: staking rewards are income when received (Rev. Rul. 2023-14)",
              body: "The IRS addressed staking directly in Revenue Ruling 2023-14, published in July 2023. The ruling states that when a taxpayer receives additional units of cryptocurrency as a reward for validating transactions on a proof-of-stake blockchain, those rewards are included in gross income in the taxable year in which the taxpayer gains dominion and control over the rewards.\n\nThe amount of income is the fair market value of the rewards at the time of receipt. This applies regardless of whether the taxpayer uses a cash or accrual method of accounting.\n\nThis ruling resolved the ambiguity that had existed since staking became widespread. The IRS's position is clear: staking rewards are taxable when received, not when sold."
            },
            {
              heading: "The Jarrett case: a refund claim, not a precedent",
              body: "The Jarrett v. United States case involved a taxpayer who argued that staking rewards (specifically Tezos tokens) were \"newly created property\" — analogous to a baker baking bread — and should not be taxed until sold. The IRS initially issued a refund in the case, which generated significant media attention.\n\nHowever, the refund was issued before the case was adjudicated on the merits, and the IRS did not concede the legal argument. The case was subsequently dismissed as moot (because the refund had been issued), meaning no court ruling was made on the underlying tax question.\n\nWith Rev. Rul. 2023-14, the IRS explicitly rejected the \"newly created property\" theory. The Jarrett refund should not be relied upon as establishing any precedent."
            },
            {
              heading: "Timing of income recognition for staked assets",
              body: "Under Rev. Rul. 2023-14, the key trigger is \"dominion and control.\" For staking through an exchange like Coinbase, you gain dominion and control when the rewards are credited to your account and you can sell, exchange, or transfer them.\n\nFor running your own validator, the timing depends on the protocol. For Ethereum, staking rewards accumulate on the beacon chain and become accessible when the validator's balance exceeds 32 ETH and rewards can be withdrawn. The exact point of \"dominion and control\" for self-staked ETH has been debated, but the conservative position is to recognize income when rewards become available for withdrawal.\n\nIf rewards are locked or subject to an unbonding period, there is an argument that dominion and control do not exist until the lock expires. But the IRS has not specifically addressed locked staking rewards."
            },
            {
              heading: "ECI analysis: does staking create a U.S. trade or business?",
              body: "For foreign owners, the critical question is whether staking income is ECI. This depends on several factors:\n\n1. Passive staking through a U.S. exchange (e.g., Coinbase): This looks more like investment income than an active trade or business. The argument against ECI is strongest here.\n\n2. Running a validator overseas: The activity is performed outside the U.S., which weakens the argument for ECI. However, if the LLC is the entity performing the staking and the LLC is a U.S. entity, the IRS could argue a U.S. nexus exists.\n\n3. Operating a large-scale staking operation: If staking is the LLC's primary business activity, it looks more like a trade or business, potentially creating ECI.\n\nEven if staking income is not ECI, it could be classified as FDAP income subject to 30% withholding (reduced by treaty). The characterization of staking income as FDAP is another open question."
            },
            {
              heading: "Practical compliance steps for staking",
              body: "Regardless of your ECI position:\n\n1. Track all staking rewards with dates received and FMV at time of receipt. Use the exchange's transaction history or on-chain data for validators.\n\n2. When you later sell staked tokens, your basis is the FMV you reported as income at the time of receipt.\n\n3. If staking through a U.S. exchange, ensure your W-8 forms are on file. The exchange may begin reporting staking rewards on Form 1099-DA.\n\n4. Report staking-related activity on your Form 5472 if rewards flow between the LLC and the foreign owner.\n\n5. If running a validator through the LLC, document whether the LLC is conducting an active trade or business (relevant to ECI analysis) or is merely holding a passive investment."
            }
          ],
          keyTakeaways: [
            "Rev. Rul. 2023-14 confirmed staking rewards are taxable income when received, at fair market value",
            "The Jarrett case did not establish precedent — the IRS issued a refund but never conceded the legal argument",
            "Passive staking through an exchange has the strongest argument against being treated as ECI",
            "Running a validator as the LLC's primary business increases the risk of ECI treatment",
            "Track all staking rewards with dates and FMV — your cost basis for future sales depends on accurate records"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-23T09:00:00Z",
        sources: [
          { label: "Rev. Rul. 2023-14 — Staking Rewards", url: "https://www.irs.gov/pub/irs-drop/rr-23-14.pdf" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Virtual Currencies Overview", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #8: Mining income and U.S. trade or business
  // =====================================================
  {
    question: {
      id: "q-crypto-mining",
      isFeatured: false,
      title: "Does Bitcoin mining through my foreign-owned LLC create a U.S. trade or business?",
      body: "I'm a foreign national who set up a Wyoming LLC to operate a small Bitcoin mining operation. The mining rigs are physically located in Texas (cheap electricity). I manage everything remotely from abroad.\n\nDoes operating mining equipment in the U.S. through my LLC create a U.S. trade or business? If so, all the mining income would be ECI and I'd owe U.S. taxes on it. Is there any way to structure this to avoid ECI, or is mining in the U.S. always going to be treated as a trade or business?",
      author: {
        displayName: "Dmitri K.",
        avatarSeed: "btc-mining-ru",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["Bitcoin mining", "trade or business", "ECI", "foreign-owned LLC", "mining income", "Texas"],
      postedAt: "2026-03-10T14:45:00Z",
      viewCount: 1289,
      answerCount: 1,
      status: "answered",
      seoTitle: "Bitcoin Mining Through Foreign-Owned LLC: U.S. Trade or Business?",
      seoDescription: "Whether Bitcoin mining operations in the U.S. through a foreign-owned LLC create a U.S. trade or business and effectively connected income. IRS rules on mining income classification.",
    },
    answers: [
      {
        id: "a-crypto-mining-1",
        questionId: "q-crypto-mining",
        articleContent: {
          sections: [
            {
              heading: "Mining with U.S.-located equipment almost certainly creates a U.S. trade or business",
              body: "Operating mining equipment physically located in the United States creates a very strong argument that the LLC is engaged in a U.S. trade or business. The equipment is performing continuous, regular, and substantial activity on U.S. soil to generate income.\n\nUnlike passive investment activities (which may benefit from safe harbors), mining involves active operations: consuming electricity, maintaining hardware, running software, and processing transactions. These are the hallmarks of a trade or business.\n\nThe fact that you manage the operation remotely does not negate the U.S. nexus. The economic activity — the computation performed by the mining rigs — is happening in Texas. The LLC is the entity conducting that activity."
            },
            {
              heading: "IRS treatment of mining income",
              body: "The IRS addressed mining in its 2014 FAQ: when a taxpayer successfully mines virtual currency, the fair market value of the virtual currency as of the date of receipt is included in gross income. If the taxpayer mines in a trade or business, the mined currency is subject to self-employment tax (for individuals) and the income is ordinary income.\n\nFor a foreign owner with a U.S. trade or business, mining income would be ECI taxed at graduated rates. Additionally, Rev. Rul. 2023-14 (which addressed staking) reinforced the principle that newly created cryptocurrency is income when received.\n\nThe mined Bitcoin has a basis equal to its FMV on the date of receipt. When you later sell it, any additional gain or loss is a separate taxable event."
            },
            {
              heading: "Deductible expenses for mining operations",
              body: "If mining is a trade or business, the expenses are deductible against the mining income:\n\n- Electricity costs\n- Equipment depreciation (mining rigs are depreciable property)\n- Hosting/colocation fees\n- Internet connectivity\n- Maintenance and repairs\n- Insurance\n\nThe equipment may qualify for Section 179 expensing or bonus depreciation, allowing accelerated write-offs. This can significantly reduce taxable income in the early years of operation.\n\nHowever, as a foreign person with ECI, you must file a U.S. tax return (Form 1040-NR or Form 1120-F depending on entity classification) and pay taxes on the net income after deductions."
            },
            {
              heading: "Can the structure be modified to avoid ECI?",
              body: "Some structures that foreign miners have considered:\n\n1. Mining through a foreign corporation that owns the LLC: This could convert ECI into corporate income taxed under the branch profits tax regime, potentially with treaty benefits. But the underlying activity is still a U.S. trade or business.\n\n2. Cloud mining (renting hash power rather than owning equipment): If you do not own or control the equipment, you might argue the income is rental or royalty income rather than trade or business income. This is a weaker argument and depends on the specific arrangement.\n\n3. Moving equipment outside the U.S.: If the mining equipment is in a foreign country, there is no U.S.-situs activity. But then you lose the benefit of cheap U.S. electricity.\n\nThere is no clean way to have mining equipment in the U.S. performing mining activity and avoid the conclusion that a U.S. trade or business exists. The physical presence and active nature of mining make this extremely difficult to restructure away."
            },
            {
              heading: "Compliance requirements for mining as a U.S. trade or business",
              body: "If the mining operation is a U.S. trade or business, you face these compliance obligations:\n\n1. File Form 1120-F (if the LLC elects corporate treatment) or Form 1040-NR (if treated as disregarded entity flowing to you personally)\n2. File Form 5472 reporting transactions between the LLC and foreign owner\n3. Pay estimated taxes quarterly if you expect to owe $1,000 or more\n4. Report all mined crypto as income at FMV on date of receipt\n5. Report all subsequent dispositions of mined crypto on Form 8949\n6. Maintain records of all mining income, expenses, and equipment depreciation\n\nThe effective tax rate depends on your total income and applicable deductions, but ECI from a trade or business is taxed at the same graduated rates as U.S. persons."
            }
          ],
          keyTakeaways: [
            "Bitcoin mining with U.S.-located equipment almost certainly creates a U.S. trade or business — making income ECI",
            "Mined crypto is ordinary income at FMV on the date of receipt, per IRS guidance",
            "Mining expenses (electricity, depreciation, hosting) are deductible against ECI",
            "Restructuring to avoid ECI while keeping equipment in the U.S. is extremely difficult",
            "ECI from mining requires filing a U.S. tax return and paying estimated taxes quarterly"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-11T08:30:00Z",
        sources: [
          { label: "IRS FAQ on Digital Assets — Mining", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Virtual Currencies Overview", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #9: NFT sales and tax reporting
  // =====================================================
  {
    question: {
      id: "q-crypto-nft-sales",
      isFeatured: false,
      title: "How are NFT sales taxed for a foreign-owned U.S. LLC? Are NFTs treated like other crypto?",
      body: "My LLC mints and sells NFT art on OpenSea. I'm the artist and I'm based in Brazil. The NFTs are sold for ETH and I also earn royalties on secondary sales. I've made about $30,000 worth of ETH from primary sales and $5,000 in royalties this year.\n\nAre NFTs taxed the same as Bitcoin and other crypto? I heard the IRS might treat some NFTs as \"collectibles\" with a higher tax rate. Does that apply to foreign owners? And what about the royalties from secondary sales — are those passive income or active business income?",
      author: {
        displayName: "Lucia F.",
        avatarSeed: "nft-artist-br",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["NFT", "digital art", "OpenSea", "royalties", "collectibles", "foreign-owned LLC", "capital gains"],
      postedAt: "2026-02-25T13:00:00Z",
      viewCount: 1678,
      answerCount: 1,
      status: "answered",
      seoTitle: "NFT Sales Tax Treatment for Foreign-Owned U.S. LLCs",
      seoDescription: "How NFT sales, minting, and royalties are taxed for foreign-owned U.S. LLCs. IRS collectibles classification under Notice 2023-27 and impact on foreign LLC owners.",
    },
    answers: [
      {
        id: "a-crypto-nft-sales-1",
        questionId: "q-crypto-nft-sales",
        articleContent: {
          sections: [
            {
              heading: "NFTs are digital assets subject to the same general IRS framework as other crypto",
              body: "The IRS treats NFTs as digital assets — property for federal tax purposes, subject to the same general rules as other cryptocurrency under Notice 2014-21 and subsequent guidance. When you sell an NFT, you recognize gain or loss equal to the difference between the proceeds (FMV of ETH received) and your basis in the NFT.\n\nFor NFTs you create (as the artist), your basis is generally the cost of creating the NFT — gas fees for minting, any design costs, etc. This is typically a small amount, meaning most of the sale proceeds are gain.\n\nETH received as payment is valued at FMV on the date of receipt. When you later convert ETH to fiat currency or other crypto, that is a separate taxable event."
            },
            {
              heading: "IRS Notice 2023-27: the collectibles question for NFTs",
              body: "IRS Notice 2023-27 (issued in March 2023) addressed whether NFTs are \"collectibles\" under IRC Section 408(m). Collectibles are subject to a maximum 28% capital gains rate for long-term gains (versus the standard 20% maximum for other assets).\n\nThe Notice established a \"look-through\" analysis: an NFT is treated as a collectible if the associated right or asset would be a collectible. For example, an NFT representing a digital artwork might be a collectible (since artwork is listed in Section 408(m)), while an NFT representing a concert ticket would not be.\n\nHowever, the collectibles classification primarily affects the capital gains tax rate for U.S. persons. For foreign owners, the more important question is whether the gains are taxable in the U.S. at all (the ECI analysis). The collectibles rate is relevant only if the gains are ECI."
            },
            {
              heading: "Primary sales vs. royalties: different income character",
              body: "Your NFT income has two components with potentially different tax treatment:\n\n1. Primary sales ($30,000): This is income from selling property you created. If selling NFTs is your LLC's regular business activity, the gains are likely ordinary income (not capital gains) because the NFTs are inventory or property held for sale to customers.\n\n2. Royalties ($5,000): Royalties from secondary sales on platforms like OpenSea are a separate income stream. These are typically characterized as royalty income (FDAP — fixed, determinable, annual, periodic income). For foreign persons, FDAP income is generally subject to 30% withholding tax (reduced by applicable tax treaty), even if it is not ECI.\n\nThe distinction matters because FDAP income can create a U.S. tax obligation even when the underlying activity is not a U.S. trade or business."
            },
            {
              heading: "ECI analysis for NFT creation and sales",
              body: "As an artist based in Brazil creating NFTs and selling on a global platform:\n\n- The creative work is performed outside the U.S.\n- The LLC is a U.S. entity, but the economic substance of the activity (creation) is overseas\n- OpenSea is a global marketplace, not inherently U.S.-based\n\nThe argument against ECI: the income-producing activity (creating art) occurs in Brazil, and selling on a decentralized marketplace does not constitute conducting business in the U.S.\n\nThe argument for ECI: the LLC is a U.S. entity holding the NFTs, and the sales are transacted through the LLC's accounts. If the LLC is the seller of record, the IRS could argue the business is being conducted through a U.S. entity.\n\nThe Brazil-U.S. tax treaty (if applicable to your situation) may provide additional protections for business profits earned through activities performed in Brazil."
            },
            {
              heading: "Reporting requirements for NFT activity",
              body: "Regardless of ECI determination:\n\n1. Form 5472: Report all transfers between you and the LLC related to NFT activity. If you transfer artwork or IP to the LLC, that is a reportable transaction.\n\n2. Digital asset question: Answer \"Yes\" on the pro forma 1120 if the LLC sold, exchanged, or disposed of NFTs during the year.\n\n3. Track each NFT sale with: date of sale, proceeds in ETH, FMV in USD, cost basis (minting costs), and gain/loss.\n\n4. Track ETH-to-fiat conversions separately, as these are additional taxable events.\n\n5. Track royalty income by date received and USD value at receipt.\n\n6. OpenSea and similar platforms may not issue tax forms to foreign sellers. You are responsible for self-reporting."
            }
          ],
          keyTakeaways: [
            "NFTs are digital assets taxed under the same general IRS framework as other cryptocurrency",
            "Notice 2023-27 may classify certain NFTs as collectibles (28% rate) — but this mainly affects U.S. persons with ECI",
            "NFT royalties from secondary sales are likely FDAP income, potentially subject to 30% withholding even without ECI",
            "Primary NFT sales by the creator are likely ordinary income, not capital gains, if selling is a regular business activity",
            "Track all NFT sales, royalties, and ETH conversions separately with dates and USD fair market values"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-26T11:15:00Z",
        sources: [
          { label: "IRS Notice 2023-27 — NFTs as Collectibles", url: "https://www.irs.gov/pub/irs-drop/n-23-27.pdf" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #10: Crypto-to-crypto exchanges as taxable events
  // =====================================================
  {
    question: {
      id: "q-crypto-to-crypto-exchange",
      isFeatured: false,
      title: "Is swapping one cryptocurrency for another a taxable event for my foreign-owned LLC?",
      body: "I traded ETH for BTC on Uniswap through my LLC. No USD was involved at all — it was purely a crypto-to-crypto swap. A friend told me this isn't taxable because I didn't convert to fiat, but I've also seen articles saying every crypto-to-crypto trade is a taxable event.\n\nWhat's the actual IRS rule? And if it IS taxable, how do I calculate the gain when no dollars were involved? What about swapping between different stablecoins (like USDC to USDT)?",
      author: {
        displayName: "Oscar G.",
        avatarSeed: "crypto-swap-co",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["crypto-to-crypto", "taxable event", "Uniswap", "swap", "foreign-owned LLC", "stablecoins"],
      postedAt: "2026-03-05T10:15:00Z",
      viewCount: 2156,
      answerCount: 1,
      status: "answered",
      seoTitle: "Crypto-to-Crypto Swaps: Taxable Events for Foreign-Owned LLCs",
      seoDescription: "IRS rules on whether crypto-to-crypto exchanges are taxable events. How to calculate gain/loss without USD involved, and implications for foreign-owned U.S. LLCs.",
    },
    answers: [
      {
        id: "a-crypto-to-crypto-exchange-1",
        questionId: "q-crypto-to-crypto-exchange",
        articleContent: {
          sections: [
            {
              heading: "Every crypto-to-crypto exchange is a taxable event under IRS rules",
              body: "The IRS FAQ on virtual currency transactions explicitly states that exchanging one type of virtual currency for another is a taxable event. This was established in the original 2014 guidance and reaffirmed in subsequent FAQ updates.\n\nWhen you exchange ETH for BTC, you are disposing of ETH (triggering a gain or loss calculation) and acquiring BTC (establishing a new cost basis). The fact that no U.S. dollars are involved does not matter — the IRS treats this as a sale of ETH for its fair market value, followed by a purchase of BTC at that same fair market value.\n\nYour friend's claim that it is not taxable because no fiat was involved is incorrect. This is one of the most common crypto tax misconceptions."
            },
            {
              heading: "How to calculate gain or loss on crypto-to-crypto swaps",
              body: "The calculation follows standard property exchange rules:\n\n1. Determine the FMV of the crypto you received (BTC) in USD on the date of the swap\n2. This FMV is your \"proceeds\" (what you received for disposing of the ETH)\n3. Subtract your cost basis in the ETH you disposed of\n4. The difference is your gain or loss\n\nExample: You swap 10 ETH for 0.5 BTC on March 5. On that date, 10 ETH = $25,000 and 0.5 BTC = $25,000. If your basis in the 10 ETH was $20,000, you have a $5,000 gain on the disposition of ETH. Your new basis in the 0.5 BTC is $25,000.\n\nUse a consistent pricing source (e.g., CoinGecko, CoinMarketCap) and document the prices at the time of each swap."
            },
            {
              heading: "Like-kind exchange (Section 1031) does not apply to crypto",
              body: "Before the Tax Cuts and Jobs Act of 2017, some crypto holders argued that crypto-to-crypto exchanges qualified as like-kind exchanges under Section 1031, which would defer the recognition of gain. However, the 2017 law limited Section 1031 to real property only.\n\nStarting January 1, 2018, like-kind exchange treatment is definitively unavailable for cryptocurrency. Even for pre-2018 transactions, the IRS's position was that different cryptocurrencies were not \"like-kind\" to each other, making the argument weak even before the law change.\n\nEvery crypto-to-crypto swap since 2018 is a taxable event with no deferral mechanism."
            },
            {
              heading: "Stablecoin-to-stablecoin swaps: taxable but usually minimal impact",
              body: "Swapping USDC for USDT (or other stablecoin pairs) is technically a taxable event under the same rules. However, because stablecoins are designed to maintain a 1:1 peg with the U.S. dollar, the gain or loss is usually negligible.\n\nIf you acquired 10,000 USDC at $1.00 each and swapped them for 10,000 USDT when both are trading at $1.00, the gain is $0. There might be minor fluctuations (e.g., USDC trading at $0.9998), resulting in a small gain or loss.\n\nDespite the minimal tax impact, these swaps should still be tracked for compliance purposes. The obligation to report exists regardless of the amount of gain or loss."
            },
            {
              heading: "Practical implications for foreign LLC owners",
              body: "For foreign-owned LLCs, every crypto-to-crypto swap triggers the same ECI analysis as any other crypto disposition:\n\n- If the swap is part of a U.S. trade or business, the gain is ECI\n- If the swap is a passive investment activity, the gain may not be ECI\n- The swap must be documented for Form 8949 purposes regardless\n\nHigh-volume DeFi activity involving many swaps (e.g., routing trades through multiple tokens to get the best price) can generate dozens of taxable events in a single complex transaction. DeFi aggregators like 1inch may route a single trade through multiple pools, each of which could be a separate swap.\n\nUsing crypto tax software to parse on-chain transactions is essentially mandatory for active DeFi users."
            }
          ],
          keyTakeaways: [
            "Every crypto-to-crypto swap is a taxable event — the absence of fiat currency does not matter",
            "Calculate gain/loss by using the USD fair market value of the crypto received as your \"proceeds\"",
            "Section 1031 like-kind exchange does not apply to cryptocurrency since the 2017 Tax Cuts and Jobs Act",
            "Stablecoin-to-stablecoin swaps are taxable but typically produce negligible gain or loss",
            "DeFi trades routed through multiple pools can create multiple taxable events in a single transaction"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-06T08:45:00Z",
        sources: [
          { label: "IRS FAQ on Digital Assets — Exchanges", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
          { label: "About Form 8949", url: "https://www.irs.gov/forms-pubs/about-form-8949" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #11: Airdrop income tax treatment
  // =====================================================
  {
    question: {
      id: "q-crypto-airdrop",
      isFeatured: false,
      title: "My foreign-owned LLC received crypto airdrops — are these taxable income?",
      body: "My LLC's wallet received several airdrops this year: a governance token airdrop from a DeFi protocol I had used, a promotional airdrop from a new project, and some tokens I didn't even want from a random spam airdrop.\n\nAre all of these taxable? The governance tokens are worth about $3,000, but the spam tokens are basically worthless. I didn't do anything to \"earn\" these — they just showed up in my wallet. How does the IRS treat airdrops for a foreign-owned LLC?",
      author: {
        displayName: "Yuki T.",
        avatarSeed: "crypto-airdrop-jp",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["airdrop", "cryptocurrency", "governance tokens", "taxable income", "foreign-owned LLC"],
      postedAt: "2026-02-14T09:00:00Z",
      viewCount: 1345,
      answerCount: 1,
      status: "answered",
      seoTitle: "Crypto Airdrop Tax Treatment for Foreign-Owned U.S. LLCs",
      seoDescription: "Are cryptocurrency airdrops taxable income for foreign-owned U.S. LLCs? IRS treatment of governance token airdrops, promotional drops, and unsolicited spam tokens.",
    },
    answers: [
      {
        id: "a-crypto-airdrop-1",
        questionId: "q-crypto-airdrop",
        articleContent: {
          sections: [
            {
              heading: "IRS position: airdrops are ordinary income when you have dominion and control",
              body: "Under Rev. Rul. 2019-24, the IRS addressed the tax treatment of cryptocurrency received in an airdrop. The ruling states that a taxpayer who receives cryptocurrency from an airdrop following a hard fork has ordinary income equal to the fair market value of the new cryptocurrency when the taxpayer has dominion and control over it.\n\nAlthough Rev. Rul. 2019-24 specifically addressed hard fork airdrops, the IRS's general position extends to other types of airdrops as well. Under the broad framework of Notice 2014-21, any accession to wealth — including unsolicited receipt of property — is income if the taxpayer has dominion and control.\n\nThe amount of income is the FMV of the tokens at the time you gain the ability to dispose of them (sell, transfer, or exchange)."
            },
            {
              heading: "Different types of airdrops may have different treatment",
              body: "Your three airdrops raise different considerations:\n\n1. Governance token airdrop (earned by using a protocol): This is the clearest case for income. You used the protocol, met eligibility criteria, and received tokens as a result. The FMV at the time of receipt ($3,000) is ordinary income.\n\n2. Promotional airdrop: If you actively claimed the airdrop (e.g., connected your wallet and clicked a button), this is income at FMV when received. If it was sent to your wallet without any action on your part, it is still income when you gain dominion and control, but there is more ambiguity.\n\n3. Spam airdrop (worthless tokens): If the tokens have no market value (cannot be sold or exchanged), there is an argument that there is no accession to wealth and therefore no income. However, you should document that the tokens were worthless at the time of receipt. If they later gain value and you sell them, your basis would be zero."
            },
            {
              heading: "Claiming versus receiving: when does dominion and control begin?",
              body: "The timing of income recognition depends on when you gain dominion and control:\n\n- Tokens sent directly to your wallet: Income is recognized when they appear in your wallet and you can transact with them. For most ERC-20 tokens on Ethereum, this is immediate.\n\n- Tokens that require claiming (e.g., visiting a website and connecting your wallet): Income is recognized when you claim the tokens, not when they become available to claim. If you never claim, you may not have income.\n\n- Tokens subject to a vesting schedule: Income may not be recognized until the vesting conditions are met and tokens become transferable. This follows the general rules for restricted property.\n\nThe practical difference matters for timing and valuation. If a governance token was claimable at $3 per token but you waited and claimed when it was $1 per token, your income is $1 per token (the FMV at the time of your claim)."
            },
            {
              heading: "ECI and FDAP analysis for airdrop income",
              body: "For foreign LLC owners, the character of airdrop income determines U.S. taxability:\n\n- If airdrops are treated as ordinary income akin to compensation for services (e.g., you earned it by using a protocol), it could be ECI if the activity constitutes a U.S. trade or business.\n\n- If airdrops are treated as FDAP income (passive income), they may be subject to 30% withholding regardless of ECI status.\n\n- If airdrops are treated as gifts or windfalls, they may not be taxable to the recipient under general tax principles (though the \"gift\" characterization is unlikely for a business entity like an LLC).\n\nThe characterization of airdrop income for foreign persons is an unsettled area. Most practitioners treat it as ordinary income, with the ECI question depending on the LLC's overall activities."
            }
          ],
          keyTakeaways: [
            "Airdrops are ordinary income at FMV when you gain dominion and control (Rev. Rul. 2019-24)",
            "Governance token airdrops earned by protocol usage are clearly taxable income",
            "Spam airdrops with no market value may not create income — but document their worthlessness",
            "Claimable airdrops are income when claimed, not when they become available",
            "The ECI characterization of airdrop income for foreign LLC owners remains an unsettled area"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-15T10:00:00Z",
        sources: [
          { label: "Rev. Rul. 2019-24 — Hard Forks and Airdrops", url: "https://www.irs.gov/pub/irs-drop/rr-19-24.pdf" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #12: DAO participation and tax implications
  // =====================================================
  {
    question: {
      id: "q-crypto-dao",
      isFeatured: false,
      title: "What are the tax implications of my foreign-owned LLC participating in a DAO?",
      body: "My LLC holds governance tokens for a major DeFi DAO and I actively vote on proposals. The DAO also distributes revenue to token holders. I'm trying to understand:\n\n1. Is holding DAO governance tokens a passive investment or active business participation?\n2. Are revenue distributions from the DAO taxable? As what kind of income?\n3. Could the DAO itself be treated as a partnership for tax purposes, making me a partner?\n\nI'm a non-U.S. person and I manage my LLC from Australia.",
      author: {
        displayName: "Nathan W.",
        avatarSeed: "crypto-dao-au",
        badge: "subscriber" as const,
      },
      category: "crypto",
      tags: ["DAO", "governance tokens", "revenue distribution", "partnership", "foreign-owned LLC"],
      postedAt: "2026-03-18T16:30:00Z",
      viewCount: 987,
      answerCount: 1,
      status: "answered",
      seoTitle: "DAO Participation Tax Implications for Foreign-Owned LLCs",
      seoDescription: "Tax implications of DAO participation through a foreign-owned U.S. LLC. Revenue distributions, governance voting, and the risk of DAO partnership classification.",
    },
    answers: [
      {
        id: "a-crypto-dao-1",
        questionId: "q-crypto-dao",
        articleContent: {
          sections: [
            {
              heading: "DAO classification is the threshold question — and it is largely unresolved",
              body: "The IRS has not issued comprehensive guidance on the tax treatment of DAOs. The fundamental question is: what is a DAO for tax purposes? Depending on the specific DAO's structure and operations, it could be classified as:\n\n1. A partnership (if it has two or more members carrying on a business)\n2. A corporation (if it made an election or meets certain criteria)\n3. A trust or other entity\n4. Nothing — meaning each token holder is simply an individual property owner\n\nIf the DAO is treated as a partnership for U.S. tax purposes, each governance token holder could be treated as a partner. This would have significant implications for foreign persons, as partnership income retains its character and is attributed to partners based on their share."
            },
            {
              heading: "The partnership risk: why this matters for foreign owners",
              body: "If a DAO is treated as a U.S. partnership, foreign partners are subject to U.S. tax on their share of the partnership's effectively connected income. The partnership must withhold tax on ECI allocated to foreign partners (under IRC Section 1446).\n\nAdditionally, sales of partnership interests by foreign persons are now subject to U.S. tax under IRC Section 864(c)(8), enacted in 2017. This means selling your governance tokens could be a taxable event in the U.S. if the DAO is treated as a partnership with ECI.\n\nMany DAOs have not taken a position on their own tax classification, which creates risk for token holders. If the IRS later classifies a DAO as a partnership, token holders could face retroactive tax liability."
            },
            {
              heading: "Revenue distributions from the DAO",
              body: "If the DAO distributes revenue to governance token holders, the tax treatment depends on classification:\n\n- If the DAO is a partnership: Distributions are treated as partnership distributions. You are taxed on your allocable share of DAO income regardless of distribution (partners are taxed on income allocation, not just distributions).\n\n- If the DAO is not a partnership: Revenue distributions may be ordinary income (similar to dividends or royalties) taxed at FMV when received. For foreign persons, this could be FDAP income subject to 30% withholding.\n\n- In either case: The receipt of revenue tokens or crypto is taxable. The amount is the FMV in USD at the time of receipt.\n\nThe practical challenge is that most DAOs do not issue tax forms or withhold taxes. You are responsible for self-reporting."
            },
            {
              heading: "Governance voting: passive or active?",
              body: "Simply holding governance tokens and voting on proposals is more likely a passive investment activity than an active trade or business. Voting on DAO proposals is analogous to a shareholder voting on corporate matters — it does not transform the investment into a business.\n\nHowever, if your LLC takes an active role in DAO operations — for example, serving as a delegate, contributing development work, or managing treasury — the line between passive investment and active business participation blurs. Active business participation could create ECI.\n\nThe distinction matters because passive investment income from a DAO (if not classified as a partnership) may not be ECI, while active business income almost certainly would be."
            },
            {
              heading: "Compliance recommendations for DAO participants",
              body: "Given the uncertainty around DAO taxation:\n\n1. Track all DAO revenue distributions with dates and FMV at receipt\n2. Track your governance token acquisitions and dispositions for Form 8949\n3. Report any DAO income on your Form 5472 if it flows through the LLC\n4. Consider the DAO's specific legal structure — some DAOs are organized as LLCs or foundations, which may clarify classification\n5. Be aware that the IRS may issue DAO-specific guidance in the future that could change the treatment retroactively\n6. Consult a tax advisor about whether the specific DAO you participate in is likely to be classified as a partnership"
            }
          ],
          keyTakeaways: [
            "DAO tax classification is largely unresolved — the entity could be a partnership, corporation, or unclassified",
            "If a DAO is treated as a partnership, foreign token holders face U.S. tax on allocated ECI and withholding obligations",
            "Revenue distributions from DAOs are taxable income regardless of the DAO's classification",
            "Passive governance voting is unlikely to create ECI; active DAO operations may create ECI",
            "Track all DAO distributions and token transactions — the IRS may issue retroactive guidance"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-19T09:30:00Z",
        sources: [
          { label: "IRS Virtual Currencies Overview", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
          { label: "IRC Section 1446 — Withholding on Foreign Partners", url: "https://www.law.cornell.edu/uscode/text/26/1446" },
          { label: "IRC Section 864(c)(8) — Sale of Partnership Interest", url: "https://www.law.cornell.edu/uscode/text/26/864" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #13: Crypto exchange compliance (KYC/AML)
  // =====================================================
  {
    question: {
      id: "q-crypto-kyc-aml",
      isFeatured: false,
      title: "What KYC/AML compliance do I need for my foreign-owned LLC's crypto exchange accounts?",
      body: "I'm trying to open a Coinbase business account for my foreign-owned Wyoming LLC. They're asking for a ton of documentation — my passport, proof of address overseas, LLC formation documents, EIN letter, beneficial ownership information.\n\nIs this standard? Can I even use U.S. crypto exchanges as a foreign owner? I've heard some exchanges won't serve foreign-owned LLCs. What are my options, and what documents should I have ready?",
      author: {
        displayName: "Elena P.",
        avatarSeed: "crypto-kyc-ua",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["KYC", "AML", "cryptocurrency exchange", "Coinbase", "foreign-owned LLC", "compliance", "documentation"],
      postedAt: "2026-01-30T11:45:00Z",
      viewCount: 1756,
      answerCount: 1,
      status: "answered",
      seoTitle: "KYC/AML Compliance for Foreign-Owned LLC Crypto Exchange Accounts",
      seoDescription: "KYC and AML requirements for foreign-owned U.S. LLCs opening cryptocurrency exchange accounts. Documentation needed, exchange restrictions, and compliance considerations.",
    },
    answers: [
      {
        id: "a-crypto-kyc-aml-1",
        questionId: "q-crypto-kyc-aml",
        articleContent: {
          sections: [
            {
              heading: "KYC requirements for business accounts are extensive — this is standard",
              body: "The documentation Coinbase is requesting is standard for business accounts, especially those with foreign beneficial owners. Under the Bank Secrecy Act (BSA) and FinCEN regulations, crypto exchanges registered as Money Services Businesses (MSBs) must implement Customer Identification Programs (CIP) that verify:\n\n1. The identity of the business entity (LLC formation documents, EIN)\n2. The identity of beneficial owners (passport, proof of address for anyone owning 25% or more)\n3. The identity of the individual opening the account (which may be you as the sole member)\n\nThe Corporate Transparency Act (effective 2024) has added additional beneficial ownership reporting requirements that exchanges may reference during onboarding."
            },
            {
              heading: "Foreign ownership adds additional compliance layers",
              body: "Having a foreign beneficial owner triggers enhanced due diligence requirements under anti-money laundering rules. Exchanges must assess:\n\n- Whether the foreign owner's country of residence is on any sanctions list (OFAC SDN list)\n- Whether the account presents higher risk for money laundering\n- Whether additional documentation is needed to verify the source of funds\n\nSome exchanges impose country-level restrictions: residents of certain countries cannot use the platform regardless of the entity structure. Coinbase, Kraken, and Gemini each maintain their own list of restricted countries.\n\nThe fact that your LLC is a U.S. entity does not override these restrictions. Exchanges look through the entity to the beneficial owner's country of residence."
            },
            {
              heading: "Documents you should have ready for exchange onboarding",
              body: "For a smooth onboarding process, prepare the following documents:\n\n1. LLC Articles of Organization (certified by the state)\n2. LLC Operating Agreement\n3. EIN confirmation letter (IRS Letter 147C or CP575)\n4. Your passport (current, not expired)\n5. Proof of your residential address overseas (utility bill, bank statement — recent, typically within 90 days)\n6. W-8BEN-E (for the LLC) or W-8BEN (for you personally) — the exchange will request the appropriate form\n7. Beneficial Ownership Information (BOI) report filing confirmation if required\n8. Source of funds documentation (bank statements, business contracts) — some exchanges request this for enhanced due diligence\n\nHaving all documents ready before starting the application will prevent delays from back-and-forth requests."
            },
            {
              heading: "Exchange alternatives if you face restrictions",
              body: "If a particular exchange cannot serve your LLC due to country restrictions or foreign ownership policies:\n\n1. Try multiple U.S. exchanges — policies differ. Kraken, Gemini, and newer platforms may have different acceptance criteria.\n\n2. Consider institutional-grade platforms that cater to foreign entities (e.g., certain OTC desks or prime brokerage services).\n\n3. Foreign exchanges may serve your LLC but will not provide the same U.S. tax reporting (Form 1099-DA). Using a foreign exchange also raises FBAR and FATCA reporting obligations.\n\n4. Avoid using personal accounts for LLC business. Commingling personal and business crypto undermines the LLC's legal separation and creates tax reporting complications.\n\nNote that DeFi protocols (Uniswap, Aave, etc.) do not require KYC, but they also do not provide tax reporting and may not be suitable for all business needs."
            }
          ],
          keyTakeaways: [
            "Extensive KYC documentation is standard for foreign-owned LLC business accounts at U.S. crypto exchanges",
            "Foreign beneficial ownership triggers enhanced due diligence — some countries are restricted entirely",
            "Prepare LLC formation docs, EIN letter, passport, proof of address, and W-8 forms before applying",
            "Different exchanges have different foreign ownership policies — try multiple platforms if one declines",
            "Never use personal crypto accounts for LLC business — maintain entity separation"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-31T14:30:00Z",
        sources: [
          { label: "FinCEN — MSB Registration and Compliance", url: "https://www.fincen.gov/msb-registrant-search" },
          { label: "IRS Virtual Currencies", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
          { label: "Corporate Transparency Act — Beneficial Ownership", url: "https://www.fincen.gov/boi" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #14: FBAR reporting for foreign crypto accounts
  // =====================================================
  {
    question: {
      id: "q-crypto-fbar",
      isFeatured: true,
      title: "Do I need to file FBAR for crypto held on foreign exchanges through my U.S. LLC?",
      body: "My Wyoming LLC holds Bitcoin on Binance (the international version, not Binance US) and some ETH on a smaller exchange based in Hong Kong. Combined, the accounts had a peak balance of about $15,000 this year.\n\nI know FBAR requires reporting foreign financial accounts over $10,000. But does crypto on a foreign exchange count as a \"foreign financial account\"? The rules seem designed for bank accounts, not crypto exchanges. I don't want to miss a filing requirement, but I also don't want to file unnecessarily.",
      author: {
        displayName: "Min-Jun K.",
        avatarSeed: "crypto-fbar-kr",
        badge: "subscriber" as const,
      },
      category: "crypto",
      tags: ["FBAR", "foreign exchange", "Binance", "cryptocurrency", "FinCEN", "foreign-owned LLC", "reporting"],
      postedAt: "2026-02-20T08:15:00Z",
      viewCount: 2345,
      answerCount: 1,
      status: "answered",
      seoTitle: "FBAR Reporting for Crypto on Foreign Exchanges via U.S. LLC",
      seoDescription: "Whether cryptocurrency held on foreign exchanges through a U.S. LLC triggers FBAR filing requirements. FinCEN guidance on virtual currency and foreign financial accounts.",
    },
    answers: [
      {
        id: "a-crypto-fbar-1",
        questionId: "q-crypto-fbar",
        articleContent: {
          sections: [
            {
              heading: "FBAR and crypto: FinCEN has signaled inclusion but has not finalized rules",
              body: "The FBAR (Report of Foreign Bank and Financial Accounts, FinCEN Form 114) requires U.S. persons to report foreign financial accounts with an aggregate value exceeding $10,000 at any time during the calendar year. The question is whether crypto held on a foreign exchange constitutes a \"foreign financial account.\"\n\nFinCEN issued a notice in 2020 (FinCEN Notice 2020-2) stating its intent to propose regulations that would include virtual currency as a reportable account type for FBAR purposes. However, as of early 2026, final regulations have not been published.\n\nIn the interim, FinCEN stated that virtual currency held in accounts at foreign financial institutions is not currently required to be reported on the FBAR. But this is a temporary position that could change when final regulations are issued."
            },
            {
              heading: "Why the FBAR question is relevant for your LLC",
              body: "The FBAR applies to \"U.S. persons\" — which includes U.S. entities. Your Wyoming LLC is a U.S. entity, so if FBAR reporting applies to crypto on foreign exchanges, the LLC would have a filing obligation.\n\nHowever, here is an important nuance: FBAR applies to U.S. persons. A foreign-owned LLC that is treated as a disregarded entity for tax purposes may or may not be a \"U.S. person\" for FBAR purposes. FinCEN has not specifically addressed whether a foreign-owned disregarded entity has its own FBAR obligation.\n\nAdditionally, as the foreign owner, you are generally NOT a U.S. person for FBAR purposes (FBAR applies to U.S. citizens, residents, and entities). So even if crypto accounts become reportable, the obligation may fall on the LLC entity rather than on you personally."
            },
            {
              heading: "Practical recommendation: prepare for eventual reporting",
              body: "Given that FinCEN has expressed clear intent to include crypto in FBAR reporting:\n\n1. Track the maximum aggregate balance of all foreign exchange accounts during the year, valued in USD\n2. Maintain records of which exchanges are used, the country of incorporation for each exchange, and account details\n3. When final regulations are published, be prepared to file retroactively if required\n\nSome tax advisors recommend voluntarily reporting foreign crypto exchange accounts on FBAR now, using a protective filing approach. This demonstrates good faith compliance even before the requirement is finalized.\n\nThe FBAR is filed separately from your tax return — it is submitted to FinCEN (not the IRS) via the BSA E-Filing System, with a deadline of April 15 (automatic extension to October 15)."
            },
            {
              heading: "FBAR penalties are severe — more reason to err on the side of reporting",
              body: "FBAR penalties are among the most severe in the U.S. tax system:\n\n- Non-willful violation: up to $10,000 per account per year (adjusted for inflation)\n- Willful violation: up to $100,000 or 50% of the account balance per year, whichever is greater\n- Criminal penalties are also possible for willful violations\n\nGiven these penalties, the conservative approach is to file the FBAR if there is any reasonable argument that it applies. The cost of filing is minimal (it is an information return with no tax due), while the cost of not filing when required is catastrophic.\n\nIf you are unsure, consult a tax advisor. The FBAR is handled separately from income tax returns and has its own rules and penalties."
            },
            {
              heading: "Distinguishing FBAR from FATCA for crypto accounts",
              body: "FBAR and FATCA (Foreign Account Tax Compliance Act) are separate reporting regimes with different thresholds, forms, and filing requirements. They are often confused:\n\n- FBAR (FinCEN Form 114): Applies to U.S. persons, $10,000 threshold, filed with FinCEN\n- FATCA (Form 8938): Applies to U.S. persons, higher thresholds ($50,000-$200,000 depending on filing status and residency), filed with the IRS as part of the tax return\n\nFor foreign-owned LLCs, the applicability of both FBAR and FATCA to crypto on foreign exchanges involves similar uncertainties. Both are addressed in separate Q&A entries."
            }
          ],
          keyTakeaways: [
            "FinCEN has signaled intent to include crypto on foreign exchanges in FBAR reporting but has not finalized rules",
            "Current FinCEN position: virtual currency in foreign accounts is not yet required on FBAR, but this is temporary",
            "Your LLC as a U.S. entity may have FBAR obligations — your personal FBAR obligation as a foreign person is unlikely",
            "FBAR penalties are severe (up to 50% of account balance for willful violations) — err on the side of filing",
            "Track maximum annual balances on all foreign exchange accounts to be ready when regulations are finalized"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-21T11:00:00Z",
        sources: [
          { label: "FinCEN Notice 2020-2 — Virtual Currency FBAR Reporting", url: "https://www.fincen.gov/sites/default/files/shared/Notice-Virtual-Currency-Reporting-on-FBAR-123020.pdf" },
          { label: "FinCEN FBAR Filing Requirements", url: "https://www.fincen.gov/report-foreign-bank-and-financial-accounts" },
          { label: "IRS FBAR Reference Guide", url: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #15: FATCA reporting for crypto on foreign exchanges
  // =====================================================
  {
    question: {
      id: "q-crypto-fatca",
      isFeatured: false,
      title: "Does FATCA (Form 8938) apply to cryptocurrency held on foreign exchanges through my LLC?",
      body: "I've read about FATCA reporting requirements for foreign financial assets. My foreign-owned LLC has accounts on Binance International and KuCoin (both foreign exchanges). The total crypto value fluctuates between $60,000 and $100,000.\n\nDoes my LLC need to file Form 8938? I'm confused because FATCA seems to apply to U.S. persons holding foreign financial assets, and I'm not sure if a foreign-owned disregarded entity counts. Also, does crypto even qualify as a \"specified foreign financial asset\"?",
      author: {
        displayName: "Rafael C.",
        avatarSeed: "crypto-fatca-pt",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["FATCA", "Form 8938", "foreign exchange", "cryptocurrency", "foreign-owned LLC", "reporting"],
      postedAt: "2026-03-08T14:00:00Z",
      viewCount: 1123,
      answerCount: 1,
      status: "answered",
      seoTitle: "FATCA Form 8938 and Crypto on Foreign Exchanges for Foreign LLCs",
      seoDescription: "Whether FATCA Form 8938 applies to cryptocurrency held on foreign exchanges through a foreign-owned U.S. LLC. Reporting thresholds and specified foreign financial assets.",
    },
    answers: [
      {
        id: "a-crypto-fatca-1",
        questionId: "q-crypto-fatca",
        articleContent: {
          sections: [
            {
              heading: "FATCA Form 8938: who must file and what must be reported",
              body: "FATCA requires certain U.S. persons to report specified foreign financial assets on Form 8938, attached to their annual tax return. The thresholds vary:\n\n- U.S. taxpayers living in the U.S.: $50,000 on the last day of the year or $75,000 at any point\n- U.S. taxpayers living abroad: $200,000 on the last day or $300,000 at any point\n\nSpecified foreign financial assets include financial accounts at foreign financial institutions, as well as certain other foreign financial assets (foreign stock, foreign partnership interests, etc.).\n\nThe key questions for your situation are: (1) is the LLC a \"specified person\" required to file, and (2) does crypto on a foreign exchange qualify as a \"specified foreign financial asset\"?"
            },
            {
              heading: "Foreign-owned disregarded entities and Form 8938",
              body: "Form 8938 is filed by \"specified persons\" — which includes U.S. citizens, residents, and certain domestic entities. A foreign-owned single-member LLC treated as a disregarded entity creates a nuanced situation:\n\nThe LLC itself is disregarded for tax purposes, meaning it does not file its own tax return. It files Form 5472 with a pro forma Form 1120, but this is not a full income tax return.\n\nAs a foreign person (non-resident alien), you are generally NOT a specified person for FATCA purposes. Form 8938 is attached to your tax return, and if you have no tax return filing obligation (because you have no ECI), you may not have a Form 8938 obligation either.\n\nHowever, if you DO file a U.S. tax return (e.g., Form 1040-NR because you have ECI), Form 8938 could apply to specified foreign financial assets connected with your U.S. activities."
            },
            {
              heading: "Does crypto on a foreign exchange qualify as a specified foreign financial asset?",
              body: "The IRS has not issued definitive guidance on whether crypto held on a foreign exchange is a \"specified foreign financial asset\" for Form 8938 purposes. The analysis parallels the FBAR question:\n\n- If the foreign exchange is a \"foreign financial institution\" and the crypto account is a \"financial account,\" then yes, it would be reportable.\n- The IRS has broadly defined \"financial account\" to include any custodial account maintained by a financial institution.\n- A foreign crypto exchange that holds your crypto in a custodial account is arguably a foreign financial institution maintaining a financial account.\n\nThe conservative position treats crypto on foreign exchanges as reportable on Form 8938. The aggressive position notes the lack of specific guidance and does not report. Most practitioners recommend the conservative approach."
            },
            {
              heading: "Interaction between FBAR and FATCA for crypto",
              body: "FBAR and FATCA have overlapping but different requirements. For crypto on foreign exchanges:\n\n- FBAR (FinCEN Form 114): FinCEN has explicitly deferred crypto reporting (pending rulemaking)\n- FATCA (Form 8938): IRS has not explicitly addressed crypto but general definitions may include it\n\nThey have different filing mechanisms (FBAR with FinCEN, Form 8938 with the IRS on your tax return), different thresholds, and different penalties. You may need to file one, both, or neither depending on the specific facts.\n\nThe safest approach is to track the information needed for both filings and report when the thresholds are met, even where the rules are ambiguous."
            }
          ],
          keyTakeaways: [
            "FATCA Form 8938 applies to specified persons (U.S. citizens, residents, certain entities) — foreign owners may not be specified persons",
            "If you file a U.S. tax return due to ECI, Form 8938 may apply to foreign exchange crypto accounts",
            "Whether crypto on a foreign exchange qualifies as a specified foreign financial asset is not definitively resolved",
            "The conservative approach treats custodial crypto accounts on foreign exchanges as reportable on Form 8938",
            "FBAR and FATCA are separate regimes with different rules — track information for both"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-09T10:15:00Z",
        sources: [
          { label: "IRS FATCA — Form 8938 Overview", url: "https://www.irs.gov/businesses/corporations/summary-of-fatca-reporting-for-us-taxpayers" },
          { label: "About Form 8938", url: "https://www.irs.gov/forms-pubs/about-form-8938" },
          { label: "IRS Virtual Currencies", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #16: Bitcoin ETF investment through foreign-owned LLC
  // =====================================================
  {
    question: {
      id: "q-crypto-bitcoin-etf",
      isFeatured: false,
      title: "Can my foreign-owned LLC invest in a Bitcoin ETF? What are the tax implications?",
      body: "Now that spot Bitcoin ETFs are approved in the U.S., I'm thinking of buying shares through my foreign-owned LLC's brokerage account instead of holding actual Bitcoin. I figure an ETF would simplify the tax reporting since it trades like a stock.\n\nBut would investing in a Bitcoin ETF through my LLC create any special tax issues? Is a Bitcoin ETF treated differently than direct Bitcoin ownership? And would gains from selling ETF shares be subject to U.S. withholding tax?",
      author: {
        displayName: "Sophie L.",
        avatarSeed: "crypto-etf-ch",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["Bitcoin ETF", "spot ETF", "foreign-owned LLC", "investment", "withholding", "capital gains"],
      postedAt: "2026-02-28T10:30:00Z",
      viewCount: 1890,
      answerCount: 1,
      status: "answered",
      seoTitle: "Bitcoin ETF Investment Through Foreign-Owned LLC Tax Implications",
      seoDescription: "Tax implications of investing in spot Bitcoin ETFs through a foreign-owned U.S. LLC. Comparison to direct Bitcoin ownership, withholding rules, and reporting requirements.",
    },
    answers: [
      {
        id: "a-crypto-bitcoin-etf-1",
        questionId: "q-crypto-bitcoin-etf",
        articleContent: {
          sections: [
            {
              heading: "Bitcoin ETFs are treated as investment in a grantor trust, not direct Bitcoin ownership",
              body: "Spot Bitcoin ETFs approved in the U.S. (like iShares Bitcoin Trust, Fidelity Wise Origin Bitcoin Fund, etc.) are structured as grantor trusts. This means for tax purposes, investors are treated as owning a proportional share of the trust's Bitcoin, not shares of a corporation.\n\nSelling ETF shares is treated as selling your interest in the underlying Bitcoin — a disposition of property. Gains and losses are calculated based on your cost basis in the ETF shares and the sale proceeds.\n\nThe ETF structure simplifies some aspects: the ETF handles custody, and your brokerage provides Form 1099-B reporting. But the tax character of gains is the same as direct Bitcoin ownership — it is a sale of property, not a sale of stock."
            },
            {
              heading: "Capital gains from ETF shares: withholding for foreign persons",
              body: "For foreign persons, capital gains from the sale of property (including ETF shares) are generally not subject to U.S. tax unless the gains are ECI. This is the same rule that applies to direct crypto sales.\n\nBrokerages will have your W-8BEN on file and should not withhold on capital gains from ETF sales for foreign persons — assuming the gains are not ECI. However, some brokerages may apply backup withholding if your W-8 form is expired or incomplete.\n\nDividend distributions from the ETF (if any) could be treated as FDAP income and subject to 30% withholding (reduced by treaty). Most Bitcoin ETFs do not make regular distributions, but if the trust sells Bitcoin and distributes cash, that could trigger withholding."
            },
            {
              heading: "ETF vs. direct Bitcoin ownership: key differences for foreign LLC owners",
              body: "From a tax perspective, the main differences are:\n\n1. Reporting: ETF purchases and sales are reported by your brokerage on Form 1099-B. Direct crypto transactions are self-reported or reported on the new Form 1099-DA.\n\n2. Cost basis tracking: Your brokerage tracks ETF share basis automatically. Direct crypto requires manual (or software-aided) basis tracking.\n\n3. Trading safe harbor: Bitcoin ETF shares may more clearly qualify for the Section 864(b)(2) trading safe harbor (since ETF shares trade like securities) compared to direct crypto (where safe harbor applicability is uncertain).\n\n4. FBAR/FATCA: ETF shares held at a U.S. brokerage are not foreign financial accounts. Direct crypto held on a foreign exchange raises FBAR and FATCA questions.\n\n5. Tax rate: Gains from ETF shares and direct Bitcoin are both property gains taxed at capital gains rates (if applicable)."
            },
            {
              heading: "Form 5472 and ETF investments",
              body: "If your LLC purchases Bitcoin ETF shares, the investment itself does not require special Form 5472 reporting beyond what would apply to any LLC investment activity.\n\nHowever, if you (the foreign owner) fund the LLC to make ETF purchases, that capital contribution is a reportable transaction on Form 5472 Part IV. Similarly, if the LLC distributes ETF proceeds back to you, that is a reportable distribution.\n\nThe nature of the investment (crypto ETF vs. stocks vs. direct crypto) does not change the Form 5472 reporting framework — it is the transactions between the LLC and its foreign owner that trigger reporting."
            }
          ],
          keyTakeaways: [
            "Spot Bitcoin ETFs are grantor trusts — selling shares is treated as selling property (same as direct Bitcoin)",
            "Capital gains from ETF sales are generally not subject to U.S. withholding for foreign persons without ECI",
            "ETF shares may more clearly qualify for the Section 864(b)(2) trading safe harbor than direct crypto",
            "ETFs simplify reporting — brokerages handle 1099-B, cost basis tracking, and W-8 compliance",
            "Form 5472 still requires reporting of capital contributions to and distributions from the LLC"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-01T09:00:00Z",
        sources: [
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Virtual Currencies", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
          { label: "About Form 8949", url: "https://www.irs.gov/forms-pubs/about-form-8949" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #17: Crypto capital gains vs ordinary income
  // =====================================================
  {
    question: {
      id: "q-crypto-capital-vs-ordinary",
      isFeatured: false,
      title: "When is crypto income treated as capital gains vs. ordinary income for a foreign LLC owner?",
      body: "I'm confused about the difference between capital gains and ordinary income for crypto. My LLC has several types of crypto income: trading profits, staking rewards, mining income, and airdrop tokens. I've seen people say trading is capital gains and mining is ordinary income, but then others say it depends on whether you're a trader or an investor.\n\nAs a foreign owner, does the distinction even matter? Or am I taxed the same way regardless?",
      author: {
        displayName: "Ahmed S.",
        avatarSeed: "crypto-gains-ae",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["capital gains", "ordinary income", "cryptocurrency", "foreign owner", "tax rates", "trader vs investor"],
      postedAt: "2026-03-12T11:00:00Z",
      viewCount: 1567,
      answerCount: 1,
      status: "answered",
      seoTitle: "Crypto Capital Gains vs Ordinary Income for Foreign LLC Owners",
      seoDescription: "When cryptocurrency income is capital gains vs ordinary income for foreign-owned U.S. LLCs. Impact on tax rates, ECI analysis, and withholding for non-resident aliens.",
    },
    answers: [
      {
        id: "a-crypto-capital-vs-ordinary-1",
        questionId: "q-crypto-capital-vs-ordinary",
        articleContent: {
          sections: [
            {
              heading: "The character of crypto income depends on how it was generated",
              body: "The IRS applies the same income characterization rules to cryptocurrency as to other property:\n\n- Capital gains: Gains from selling or exchanging crypto that you held as an investment (capital asset). This includes buying BTC and later selling at a profit. Long-term capital gains (held >1 year) get preferential rates for U.S. persons.\n\n- Ordinary income: Crypto received as payment for services, mining rewards (per IRS FAQ), staking rewards (per Rev. Rul. 2023-14), airdrops (per Rev. Rul. 2019-24), and DeFi yield. These are taxed at ordinary income rates.\n\n- Dealer income: If you are in the business of buying and selling crypto to customers (a dealer), gains from sales of inventory are ordinary income, not capital gains.\n\nThe character is determined at the time of receipt (for income) or disposition (for gains on sale)."
            },
            {
              heading: "Investor vs. trader vs. dealer: the classification matters",
              body: "The IRS distinguishes between investors, traders, and dealers:\n\n- Investor: Buys and holds crypto for long-term appreciation. Gains are capital gains. Trading expenses are not deductible above the line.\n\n- Trader: Engages in frequent, regular, and continuous trading activity to profit from short-term price swings. May elect mark-to-market accounting under IRC Section 475. Gains can be ordinary income with the election.\n\n- Dealer: Regularly offers to buy and sell crypto to customers and maintains an inventory. Gains from inventory sales are ordinary income.\n\nFor most foreign LLC owners with typical crypto activity (buying, holding, occasional trading), investor status is most likely. High-frequency active traders may qualify for trader status."
            },
            {
              heading: "Why the distinction matters for foreign owners",
              body: "The capital-vs-ordinary distinction is critically important for foreign persons because it affects both the TYPE of U.S. tax and the RATE:\n\n1. Capital gains from investment property: If not ECI, generally not subject to U.S. tax for foreign persons (with a limited exception for real property under FIRPTA). This is the most favorable treatment.\n\n2. Ordinary income that is not ECI: May be FDAP income subject to 30% withholding (reduced by treaty). This applies to staking rewards, mining income, and airdrops if they are sourced in the U.S.\n\n3. ECI (whether capital or ordinary): Taxed at graduated rates (same as U.S. persons) with the ability to claim deductions.\n\nSo yes, the distinction matters significantly. Capital gains that are not ECI may escape U.S. taxation entirely, while ordinary income may be subject to withholding even without ECI."
            },
            {
              heading: "Summary table: crypto income character by activity",
              body: "Here is how each type of your LLC's crypto income is characterized:\n\n1. Trading profits (buy low, sell high): Capital gains if investor; potentially ordinary income if trader with Section 475 election\n\n2. Staking rewards: Ordinary income at FMV when received (Rev. Rul. 2023-14). Subsequent sale produces capital gain/loss.\n\n3. Mining income: Ordinary income at FMV when mined (IRS FAQ). Subsequent sale produces capital gain/loss.\n\n4. Airdrop tokens: Ordinary income at FMV when dominion and control are established (Rev. Rul. 2019-24). Subsequent sale produces capital gain/loss.\n\nNotice the pattern: for staking, mining, and airdrops, you have TWO tax events — ordinary income on receipt, then capital gain/loss on disposal. This is the same as receiving salary in stock — income when received, capital gain when sold."
            }
          ],
          keyTakeaways: [
            "Trading gains are capital gains (for investors); staking, mining, and airdrop income are ordinary income",
            "Capital gains from crypto that are not ECI are generally not taxable for foreign persons",
            "Ordinary income (staking, mining, airdrops) may be FDAP subject to 30% withholding even without ECI",
            "Investor vs. trader vs. dealer classification affects whether trading gains are capital or ordinary",
            "Staking rewards, mining income, and airdrops create two tax events: ordinary income on receipt, capital gain/loss on sale"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-13T08:30:00Z",
        sources: [
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "Rev. Rul. 2023-14 — Staking Rewards", url: "https://www.irs.gov/pub/irs-drop/rr-23-14.pdf" },
          { label: "Rev. Rul. 2019-24 — Hard Forks and Airdrops", url: "https://www.irs.gov/pub/irs-drop/rr-19-24.pdf" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #18: Cost basis methods (FIFO, LIFO, specific ID)
  // =====================================================
  {
    question: {
      id: "q-crypto-cost-basis",
      isFeatured: false,
      title: "What cost basis methods can I use for crypto in my foreign-owned LLC — FIFO, LIFO, or specific ID?",
      body: "I've accumulated Bitcoin over several years through my LLC, buying at different prices. Now I'm selling some. My crypto tax software lets me choose between FIFO (first in, first out), LIFO (last in, first out), HIFO (highest in, first out), and specific identification.\n\nWhich methods does the IRS actually allow for crypto? Can I use HIFO to minimize my gains? And once I pick a method, can I change it later? I want to be strategic about this.",
      author: {
        displayName: "Ingrid H.",
        avatarSeed: "crypto-basis-se",
        badge: "subscriber" as const,
      },
      category: "crypto",
      tags: ["cost basis", "FIFO", "LIFO", "specific identification", "cryptocurrency", "foreign-owned LLC"],
      postedAt: "2026-02-05T13:30:00Z",
      viewCount: 1234,
      answerCount: 1,
      status: "answered",
      seoTitle: "Crypto Cost Basis Methods for Foreign-Owned LLCs: FIFO, LIFO, Specific ID",
      seoDescription: "Choosing the right cost basis method for cryptocurrency in a foreign-owned LLC. IRS rules on FIFO, specific identification, LIFO, and HIFO for digital asset dispositions.",
    },
    answers: [
      {
        id: "a-crypto-cost-basis-1",
        questionId: "q-crypto-cost-basis",
        articleContent: {
          sections: [
            {
              heading: "IRS guidance allows specific identification — and FIFO is the default",
              body: "The IRS FAQ on virtual currency (Q&A 36-40) addresses cost basis methods. The IRS allows two approaches:\n\n1. Specific identification: You can specifically identify which units of crypto you are selling, as long as you can identify the specific unit's date acquired, basis, and FMV at disposition. This gives you the most flexibility.\n\n2. FIFO (First In, First Out): If you cannot specifically identify the units sold, the IRS defaults to FIFO — the oldest units are treated as sold first.\n\nSpecific identification is the IRS-sanctioned method that allows the most tax optimization. By choosing which specific units to sell, you can effectively achieve HIFO (selling the highest-cost units first to minimize gain) or LIFO (selling the most recent units first)."
            },
            {
              heading: "How to use specific identification correctly",
              body: "To use specific identification, the IRS requires that you can identify the specific unit of virtual currency by:\n\n1. The date and time each unit was acquired\n2. Your basis in each unit\n3. The date and time each unit was sold, exchanged, or otherwise disposed of\n4. The FMV of each unit when sold, exchanged, or disposed of\n\nYou must maintain adequate records to substantiate these identifications. The IRS FAQ states that you can achieve specific identification by reference to a unique digital identifier (such as a private key), or by records showing the transaction information for all units in a wallet or account and specifying which units are sold.\n\nCrypto tax software that supports specific identification (CoinTracker, Koinly, etc.) automates this by tracking each lot and allowing you to select HIFO, LIFO, or manual selection."
            },
            {
              heading: "LIFO, HIFO, and other methods: available through specific ID",
              body: "LIFO (Last In, First Out) and HIFO (Highest In, First Out) are not standalone IRS-recognized methods for crypto in the same way they are for inventory accounting. Instead, these are strategies implemented through specific identification:\n\n- HIFO strategy: Specifically identify and sell the highest-cost units first. This minimizes current-year gain (or maximizes current-year loss).\n- LIFO strategy: Specifically identify and sell the most recently acquired units first. This may be the same as HIFO if recent purchases were at higher prices.\n\nAs long as you maintain the records required for specific identification, you can use these strategies. The IRS allows you to specifically identify which units you are selling on a per-transaction basis.\n\nNote: Average cost basis (commonly used for mutual fund shares) is not an approved method for cryptocurrency under current IRS guidance."
            },
            {
              heading: "Can you change methods? Consistency requirements",
              body: "The IRS does not explicitly prohibit changing cost basis methods between tax years for cryptocurrency. However:\n\n1. Once you sell a unit using a particular identification, you cannot retroactively change which unit was sold.\n\n2. Consistency within a tax year is strongly recommended. Using HIFO for some sales and FIFO for others in the same year is technically possible with specific identification (since you are identifying each unit individually), but it could invite scrutiny.\n\n3. If you use specific identification, document it clearly. Keep records showing exactly which lots were sold in each transaction.\n\n4. Switching from FIFO in one year to specific identification in the next is generally permissible, but past sales calculated under FIFO cannot be recalculated.\n\nThe key is documentation. Whatever method you use, maintain contemporaneous records that show how you identified the units sold."
            },
            {
              heading: "Special consideration for foreign LLC owners",
              body: "For foreign LLC owners, cost basis method selection matters most when crypto gains are ECI (because you would owe tax on the net gain). If gains are not ECI, the choice of cost basis method has less immediate tax impact — but it still matters for record-keeping and potential future filing obligations.\n\nThe new broker reporting rules (Form 1099-DA) will report cost basis for assets acquired at the same broker starting in 2026. Brokers will use FIFO as the default method unless you specify otherwise. If you prefer specific identification, you may need to proactively notify your broker.\n\nRegardless of your ECI position, maintaining accurate cost basis records is essential. If the IRS challenges your position and determines that gains are taxable, you need records to calculate the correct amount."
            }
          ],
          keyTakeaways: [
            "The IRS allows specific identification and defaults to FIFO for crypto cost basis",
            "HIFO and LIFO are achieved through specific identification — they are strategies, not separate IRS methods",
            "Specific identification requires records of acquisition date, basis, and FMV for each unit",
            "Average cost basis is not an approved method for cryptocurrency under current IRS guidance",
            "New Form 1099-DA broker reporting defaults to FIFO — notify your broker if you prefer specific identification"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-06T10:00:00Z",
        sources: [
          { label: "IRS FAQ on Digital Assets — Cost Basis", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "About Form 8949", url: "https://www.irs.gov/forms-pubs/about-form-8949" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #19: Crypto losses and wash sale rules
  // =====================================================
  {
    question: {
      id: "q-crypto-wash-sale",
      isFeatured: false,
      title: "Do wash sale rules apply to cryptocurrency losses in my foreign-owned LLC?",
      body: "My LLC sold some Bitcoin at a loss and then repurchased it the next day to maintain exposure. With stocks, the wash sale rule would disallow the loss. But I've heard that crypto is exempt from wash sale rules because it's \"property\" not a \"security.\"\n\nIs this still true? I've heard Congress might change this. If I can harvest losses without wash sale restrictions, that seems like a huge advantage. What should I know as a foreign LLC owner?",
      author: {
        displayName: "Marco D.",
        avatarSeed: "crypto-washsale-it",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["wash sale", "crypto losses", "tax loss harvesting", "foreign-owned LLC", "capital losses"],
      postedAt: "2026-01-20T15:00:00Z",
      viewCount: 1678,
      answerCount: 1,
      status: "answered",
      seoTitle: "Crypto Wash Sale Rules for Foreign-Owned LLCs",
      seoDescription: "Whether wash sale rules apply to cryptocurrency losses in a foreign-owned LLC. Current IRS rules, proposed legislation, and tax loss harvesting strategies for digital assets.",
    },
    answers: [
      {
        id: "a-crypto-wash-sale-1",
        questionId: "q-crypto-wash-sale",
        articleContent: {
          sections: [
            {
              heading: "Current law: wash sale rules do not apply to cryptocurrency",
              body: "Under IRC Section 1091, the wash sale rule disallows a loss deduction when a taxpayer sells a security at a loss and acquires a \"substantially identical\" security within 30 days before or after the sale. The rule applies to \"stock or securities.\"\n\nCryptocurrency is classified as property by the IRS (Notice 2014-21), not as a stock or security. Therefore, the wash sale rule under current law does not apply to cryptocurrency transactions. You can sell Bitcoin at a loss and immediately repurchase it without the loss being disallowed.\n\nThis creates a tax loss harvesting opportunity that does not exist for stocks and securities. You can realize losses for tax purposes while maintaining your crypto position."
            },
            {
              heading: "Proposed legislation to extend wash sale rules to crypto",
              body: "Several proposals have been introduced in Congress to extend the wash sale rule to digital assets:\n\n- The Build Back Better Act (2021) included a provision to add digital assets to the wash sale rule, but the bill did not pass in its original form.\n- Subsequent budget proposals have included similar provisions.\n\nAs of early 2026, the wash sale rule has not been extended to crypto by enacted legislation. However, this remains a live issue and could change in future tax legislation.\n\nIf the rule is extended, it would likely apply prospectively (to transactions after the effective date), not retroactively. But you should not assume the current exemption will last indefinitely."
            },
            {
              heading: "Tax loss harvesting strategies for crypto",
              body: "Given the current exemption from wash sale rules, foreign LLC owners can:\n\n1. Sell crypto positions that are at a loss to realize the loss for tax purposes\n2. Immediately repurchase the same crypto to maintain market exposure\n3. The loss is deductible against gains (if the gains are taxable)\n4. Your new basis in the repurchased crypto is the purchase price\n\nHowever, for foreign LLC owners, the utility of crypto losses depends on whether you have taxable gains to offset:\n\n- If crypto gains are not ECI, losses may not provide immediate tax benefit in the U.S.\n- If you have ECI from crypto trading, harvested losses can offset ECI gains\n- Capital losses can only offset capital gains plus $3,000 of ordinary income per year for U.S. persons (different rules may apply to foreign persons with ECI)\n\nTrack all harvested losses even if they provide no current benefit — they may carry forward."
            },
            {
              heading: "Practical considerations and risks",
              body: "While the current law is clear, some caveats:\n\n1. The IRS could argue that certain tokens are \"securities\" under the Howey test (the same argument the SEC makes for enforcement). If a token is classified as a security, the wash sale rule would apply.\n\n2. Selling and repurchasing the same token within seconds at slightly different prices creates transaction costs (exchange fees, slippage) that reduce the net benefit.\n\n3. If you harvest losses on crypto and the losses are ultimately not deductible (because the gains were not ECI), the harvesting was economically pointless — you reduced your basis in the repurchased crypto without any tax benefit.\n\n4. Maintain detailed records of every sale and repurchase, including timestamps and prices. If the wash sale rule is retroactively applied, you need records to recalculate.\n\nThe strategy is most valuable for LLC owners with confirmed ECI from crypto activity."
            }
          ],
          keyTakeaways: [
            "Wash sale rules currently do not apply to cryptocurrency — crypto is property, not a stock or security",
            "You can sell crypto at a loss and immediately repurchase without the loss being disallowed",
            "Congressional proposals to extend wash sale rules to crypto have been introduced but not enacted as of 2026",
            "Tax loss harvesting is only valuable if you have taxable gains to offset — consider your ECI position",
            "Track all loss harvesting transactions in detail in case the rules change retroactively"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-21T09:30:00Z",
        sources: [
          { label: "IRC Section 1091 — Wash Sale Rules", url: "https://www.law.cornell.edu/uscode/text/26/1091" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #20: IRS enforcement on crypto
  // =====================================================
  {
    question: {
      id: "q-crypto-irs-enforcement",
      isFeatured: true,
      title: "What IRS enforcement actions on crypto should foreign LLC owners be aware of?",
      body: "I've been reading about the IRS cracking down on cryptocurrency tax evasion. They apparently got data from Coinbase and other exchanges through John Doe summonses. My foreign-owned LLC trades on several U.S. exchanges.\n\nHow aggressively is the IRS pursuing crypto tax enforcement? Do they specifically target foreign-owned entities? Should I be worried if I haven't been perfectly tracking every transaction from the start?",
      author: {
        displayName: "Pavel Z.",
        avatarSeed: "crypto-enforcement-cz",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["IRS enforcement", "cryptocurrency", "John Doe summons", "compliance", "foreign-owned LLC", "penalties"],
      postedAt: "2026-03-22T09:00:00Z",
      viewCount: 2456,
      answerCount: 1,
      status: "answered",
      seoTitle: "IRS Crypto Enforcement: What Foreign LLC Owners Must Know",
      seoDescription: "IRS enforcement actions on cryptocurrency tax compliance. John Doe summonses, exchange data sharing, penalties, and what foreign-owned LLC owners should do to ensure compliance.",
    },
    answers: [
      {
        id: "a-crypto-irs-enforcement-1",
        questionId: "q-crypto-irs-enforcement",
        articleContent: {
          sections: [
            {
              heading: "The IRS has significantly escalated crypto enforcement since 2019",
              body: "The IRS has made cryptocurrency tax enforcement a stated priority. Key enforcement milestones include:\n\n- 2016-2017: John Doe summons served on Coinbase, requiring disclosure of account information for users with transactions exceeding $20,000. Over 13,000 accounts were disclosed.\n\n- 2019: The IRS sent 10,000+ compliance letters to crypto holders who may have failed to report transactions.\n\n- 2021: John Doe summons served on Kraken and Circle (USDC), expanding the net of exchanges providing data to the IRS.\n\n- 2022+: The digital asset question was added to all tax returns, making it impossible to claim ignorance of crypto reporting obligations.\n\n- 2024-2025: Form 1099-DA regulations finalized, establishing systematic broker reporting.\n\nThe trend is clear: the IRS is moving from ad hoc enforcement to systematic data collection and cross-referencing."
            },
            {
              heading: "Do they specifically target foreign-owned entities?",
              body: "The IRS enforcement actions have primarily targeted U.S. persons who failed to report crypto income. However, foreign owners of U.S. LLCs face unique enforcement attention because:\n\n1. The $25,000 penalty for failure to file Form 5472 is automatically assessed — it does not require an audit. The IRS computer generates the penalty notice. If your LLC has crypto activity and does not file Form 5472, you will hear from the IRS.\n\n2. The IRS has increased focus on international tax compliance generally, with dedicated units for offshore investigations.\n\n3. Exchange data from John Doe summonses includes all account holders, including LLC business accounts with foreign beneficial owners.\n\n4. The new Form 1099-DA reporting will provide the IRS with complete transaction data for accounts on U.S. exchanges, regardless of the account holder's nationality.\n\nWhile foreign owners are not singled out, the enforcement infrastructure captures them equally."
            },
            {
              heading: "What if you haven't been tracking perfectly?",
              body: "If your transaction records are incomplete, the situation is not hopeless but requires action:\n\n1. Retroactive reconstruction: Most exchanges provide downloadable transaction history going back years. Blockchain records are permanent and can be used to reconstruct activity even if exchange records are unavailable.\n\n2. Crypto tax software: Tools like CoinTracker, Koinly, and ZenLedger can import exchange data and blockchain wallet data to reconstruct your full transaction history.\n\n3. Good faith effort: The IRS distinguishes between willful and non-willful noncompliance. Making a good faith effort to reconstruct records and file amended returns (if needed) demonstrates non-willful behavior.\n\n4. Statute of limitations: The general statute of limitations for tax assessment is 3 years from the filing date. However, there is no statute of limitations for unfiled returns, and the Form 5472 penalty has its own rules.\n\nTaking action now to reconstruct records and ensure compliance going forward is far better than waiting for an IRS notice."
            },
            {
              heading: "Penalties specific to crypto noncompliance",
              body: "The penalties that foreign LLC owners face for crypto noncompliance include:\n\n- Form 5472 penalty: $25,000 per form per year, automatically assessed for failure to file or substantially incomplete filing\n- Accuracy-related penalty: 20% of the underpayment attributable to negligence or substantial understatement\n- Failure-to-file penalty: 5% per month up to 25% of the tax owed\n- Failure-to-pay penalty: 0.5% per month up to 25% of the tax owed\n- Fraud penalty: 75% of the underpayment attributable to fraud\n- FBAR penalties (if applicable): $10,000+ per account per year for non-willful violations\n- Criminal penalties: In extreme cases, the DOJ prosecutes willful tax evasion involving crypto\n\nThe Form 5472 penalty alone makes compliance essential — it applies regardless of whether any tax is owed."
            },
            {
              heading: "Steps to ensure compliance now",
              body: "If you are a foreign LLC owner with crypto activity, take these steps:\n\n1. File all outstanding Form 5472 returns. If you have unfiled years, file them as soon as possible.\n\n2. Reconstruct your complete crypto transaction history using exchange exports and blockchain records.\n\n3. Determine your ECI position with a tax advisor. Know whether your crypto activity creates U.S. tax obligations beyond Form 5472.\n\n4. Ensure all U.S. exchanges have current W-8 forms on file.\n\n5. Going forward, track every transaction contemporaneously — do not wait until tax season to reconstruct a year of activity.\n\n6. Consider whether any past noncompliance warrants voluntary disclosure or amended filings. A tax advisor can assess whether this is appropriate for your situation."
            }
          ],
          keyTakeaways: [
            "IRS has systematically escalated crypto enforcement through John Doe summonses, compliance letters, and Form 1099-DA reporting",
            "Exchange data (Coinbase, Kraken, Circle) has been shared with the IRS — all account holders are captured including foreign-owned LLCs",
            "The Form 5472 $25,000 penalty is automatically assessed for nonfiling — it does not require an audit",
            "Incomplete records can be reconstructed using exchange histories and blockchain data — act now rather than waiting",
            "Coming into compliance voluntarily demonstrates good faith and reduces the risk of willful noncompliance penalties"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-23T10:00:00Z",
        sources: [
          { label: "IRS Virtual Currencies — Compliance", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
          { label: "IRS Newsroom — Digital Asset Updates", url: "https://www.irs.gov/newsroom/irs-updates-frequently-asked-questions-on-digital-assets" },
          { label: "Form 5472 Instructions — Penalties", url: "https://www.irs.gov/instructions/i5472" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #21: Stablecoin transactions tax implications
  // =====================================================
  {
    question: {
      id: "q-crypto-stablecoin",
      isFeatured: false,
      title: "Are stablecoin transactions taxable for my foreign-owned LLC? USDC, USDT, DAI?",
      body: "My LLC receives most of its client payments in USDC and sometimes swaps between USDC and USDT. I also park funds in DAI savings on MakerDAO. Since stablecoins are pegged to the dollar, I assumed these transactions aren't taxable — there's no gain or loss if the value stays at $1.\n\nBut someone told me every stablecoin transaction is technically a taxable event. Is that true even when there's zero gain? What about the interest earned from DAI savings — how is that taxed?",
      author: {
        displayName: "Fatima A.",
        avatarSeed: "stablecoin-ng",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["stablecoin", "USDC", "USDT", "DAI", "taxable event", "foreign-owned LLC", "DeFi savings"],
      postedAt: "2026-02-08T09:30:00Z",
      viewCount: 1345,
      answerCount: 1,
      status: "answered",
      seoTitle: "Stablecoin Tax Implications for Foreign-Owned U.S. LLCs",
      seoDescription: "Are stablecoin transactions taxable for foreign-owned LLCs? Tax treatment of USDC, USDT, and DAI transactions, including swaps, payments, and DeFi savings interest.",
    },
    answers: [
      {
        id: "a-crypto-stablecoin-1",
        questionId: "q-crypto-stablecoin",
        articleContent: {
          sections: [
            {
              heading: "Stablecoins are digital assets — every transaction is technically a taxable event",
              body: "Despite their name and dollar peg, stablecoins are classified as digital assets (virtual currency) under IRS guidance. They are property, not currency. This means every disposition — selling, exchanging, or using stablecoins to pay for goods or services — is a taxable event.\n\nWhen you receive USDC as payment, you recognize income at the FMV of the USDC on the date of receipt. When you later spend or exchange that USDC, you have a disposition that requires gain or loss calculation.\n\nThe IRS has not carved out any exception for stablecoins. The rules that apply to Bitcoin and Ethereum apply equally to USDC, USDT, DAI, and every other stablecoin."
            },
            {
              heading: "The practical reality: gains and losses on stablecoins are usually negligible",
              body: "While stablecoin transactions are technically taxable events, the gain or loss is typically negligible because stablecoins maintain a value close to $1.00. If you acquire 10,000 USDC at $1.00 each and later exchange them when USDC is at $0.9999, you have a $1 loss.\n\nHowever, there are scenarios where stablecoin gains or losses can be meaningful:\n\n- Depegging events: In 2023, USDC briefly traded at $0.88 during the Silicon Valley Bank crisis. Anyone who acquired USDC at $0.88 and later sold at $1.00 had a ~14% gain.\n- Algorithmic stablecoins: Some stablecoins (like the former UST) have lost their peg entirely, creating significant losses.\n- DAI and other overcollateralized stablecoins may fluctuate slightly more than centralized stablecoins.\n\nTrack stablecoin transactions for compliance, but for most tax years the net impact is minimal."
            },
            {
              heading: "DeFi savings interest on stablecoins",
              body: "Interest earned on DAI savings (MakerDAO DSR) or stablecoin lending protocols (Aave, Compound) is ordinary income at the FMV when received or accrued. This follows the same rules as interest income from any source.\n\nThe interest tokens or additional stablecoins you receive have a basis equal to the FMV at the time of receipt. When you later dispose of them, any gain or loss relative to that basis is a separate taxable event.\n\nFor foreign LLC owners, DeFi interest income is likely characterized as FDAP (fixed, determinable, annual, periodic) income. If it is U.S.-source FDAP, it could be subject to 30% withholding. However, since DeFi protocols operate globally and do not withhold taxes, the practical enforcement of this rule is uncertain.\n\nThe sourcing of DeFi interest income (U.S. vs. foreign source) is an open question without IRS guidance."
            },
            {
              heading: "USDC-to-USDT swaps and similar stablecoin exchanges",
              body: "Swapping one stablecoin for another is a disposition of the first stablecoin and acquisition of the second. The gain or loss is the difference between your basis in the stablecoin sold and the FMV of the stablecoin received.\n\nFor example: You swap 5,000 USDC (basis $5,000.00) for 4,998 USDT (FMV $4,998.00). You have a $2.00 loss. The tracking obligation exists even for these tiny amounts.\n\nPractically, many taxpayers and tax preparers take the position that stablecoin-to-stablecoin swaps at approximately $1.00 produce de minimis gain or loss and can be reported in aggregate. However, there is no formal IRS safe harbor for this treatment. The conservative approach reports each transaction individually."
            },
            {
              heading: "Record-keeping for stablecoin transactions",
              body: "Given that stablecoin transactions are numerous and typically produce negligible gain or loss:\n\n1. Use crypto tax software that can import your exchange and DeFi transaction history. Manual tracking of hundreds of stablecoin transactions is impractical.\n\n2. Track the FMV of each stablecoin at the time of each transaction. Even though it is usually ~$1.00, having the actual price documented protects you.\n\n3. Track DeFi interest accruals separately from principal. The interest is income; the principal returns are not.\n\n4. If stablecoins depeg significantly (like USDC in March 2023), those transactions may produce meaningful gains or losses that should be carefully documented.\n\n5. Report all stablecoin income and dispositions on Form 5472 where applicable (transfers between you and the LLC)."
            }
          ],
          keyTakeaways: [
            "Stablecoins are digital assets — every transaction is technically a taxable event under IRS rules",
            "Gains and losses are usually negligible due to the dollar peg, but depegging events can create meaningful gains/losses",
            "DeFi savings interest on stablecoins is ordinary income, likely FDAP for foreign persons",
            "Stablecoin-to-stablecoin swaps must be tracked even though they typically produce near-zero gain or loss",
            "Use crypto tax software to manage the volume of stablecoin transactions"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-09T11:00:00Z",
        sources: [
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
          { label: "IRS Virtual Currencies Overview", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #22: Cross-chain bridge transactions
  // =====================================================
  {
    question: {
      id: "q-crypto-bridge",
      isFeatured: false,
      title: "Are cross-chain bridge transactions taxable events for my foreign-owned LLC?",
      body: "My LLC bridges ETH from Ethereum to Arbitrum and Optimism to take advantage of lower gas fees for DeFi. I also bridge USDC between chains. When I bridge, I send ETH on one chain and receive wrapped ETH (or native ETH) on the destination chain.\n\nIs bridging a taxable event? I'm not selling the ETH — I'm just moving it to a different network. But technically I'm sending one token and receiving a different one. What's the IRS position on this?",
      author: {
        displayName: "Viktor M.",
        avatarSeed: "crypto-bridge-ee",
        badge: "new-member" as const,
      },
      category: "crypto",
      tags: ["cross-chain bridge", "Layer 2", "Arbitrum", "Optimism", "taxable event", "foreign-owned LLC"],
      postedAt: "2026-03-15T12:00:00Z",
      viewCount: 876,
      answerCount: 1,
      status: "answered",
      seoTitle: "Cross-Chain Bridge Transactions: Taxable Events for Foreign LLCs?",
      seoDescription: "Whether cross-chain bridge transactions (Ethereum to Arbitrum, Optimism, etc.) are taxable events for foreign-owned U.S. LLCs. IRS analysis of bridging, wrapped tokens, and Layer 2 transfers.",
    },
    answers: [
      {
        id: "a-crypto-bridge-1",
        questionId: "q-crypto-bridge",
        articleContent: {
          sections: [
            {
              heading: "The IRS has not specifically addressed cross-chain bridges",
              body: "As of early 2026, the IRS has not issued guidance specifically addressing cross-chain bridge transactions. This means we must analyze bridges under general tax principles for property dispositions.\n\nThe core question is whether bridging constitutes an \"exchange\" of one property for another (taxable) or a \"transfer\" of the same property between your own accounts (not taxable). The answer may depend on the specific bridge mechanism used."
            },
            {
              heading: "Lock-and-mint bridges: stronger argument for taxable exchange",
              body: "Many bridges use a lock-and-mint mechanism: you send ETH to a bridge contract on Ethereum, which locks it, and the bridge mints wrapped ETH (wETH) on the destination chain. You receive a different token (wETH on Arbitrum) than what you sent (native ETH on Ethereum).\n\nUnder strict tax analysis, this looks like exchanging one property (ETH) for a different property (wETH on Arbitrum). They have different smart contract addresses, different risk profiles (the bridge introduces counterparty risk), and they exist on different blockchains.\n\nThe counter-argument is that wETH on Arbitrum is economically equivalent to ETH on Ethereum — it represents a claim on the locked ETH and is designed to track the same price. This is analogous to depositing USD in a bank and receiving a deposit receipt — you have not disposed of the USD."
            },
            {
              heading: "Native bridges and canonical bridges: stronger argument for non-taxable transfer",
              body: "Some Layer 2 networks have native or canonical bridges that transfer assets without creating a wrapped token. For example, Arbitrum's native bridge moves ETH to the L2 where it exists as native ETH (not a wrapped version).\n\nThese transfers have a stronger argument for non-taxable treatment because you are moving the same asset between layers of the same ecosystem. It is more analogous to transferring ETH between two of your own wallets on the same chain — which the IRS has confirmed is not a taxable event (IRS FAQ Q-4).\n\nHowever, even native bridges involve smart contract interactions that could be characterized as dispositions if the IRS takes an aggressive position."
            },
            {
              heading: "Practical approach pending IRS guidance",
              body: "Given the absence of specific guidance, practitioners are split. The two common approaches are:\n\n1. Conservative approach: Treat bridging as a taxable exchange. Report the disposition of ETH (Ethereum) and acquisition of ETH (Arbitrum) at FMV. Since the price is the same, the gain or loss is typically zero or negligible (limited to gas fees and slippage).\n\n2. Aggressive approach: Treat bridging as a non-taxable transfer between your own wallets. Do not report a disposition. Carry over the original cost basis to the bridged asset.\n\nBoth approaches require documentation. If you take the non-taxable position, maintain records showing the bridge transaction details in case the IRS later disagrees.\n\nBridging fees (gas costs, bridge fees) are either a deductible expense (if the bridge is a non-taxable transfer) or added to the basis of the received asset (if it is a taxable exchange)."
            },
            {
              heading: "Impact for foreign LLC owners",
              body: "For foreign LLC owners, the bridge taxability question has less practical impact than for U.S. persons because:\n\n1. If the bridge is taxable, the gain is typically zero or near-zero (same asset, same price), so no meaningful tax results.\n\n2. The ECI analysis for the underlying DeFi activity is the more important question.\n\n3. Bridge transactions should still be tracked for Form 5472 purposes if they involve transfers between the LLC and the foreign owner.\n\nThe main risk is that an IRS audit disagrees with your treatment and reclassifies transactions. Maintaining documentation of bridge transactions protects you regardless of which position you take."
            }
          ],
          keyTakeaways: [
            "The IRS has not specifically addressed whether cross-chain bridge transactions are taxable events",
            "Lock-and-mint bridges (receiving wrapped tokens) have a stronger argument for being taxable exchanges",
            "Native L2 bridges (moving the same asset) have a stronger argument for being non-taxable transfers",
            "The practical tax impact of bridge transactions is usually minimal (same asset, same price)",
            "Document all bridge transactions regardless of your tax position — maintain records for audit defense"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-16T10:00:00Z",
        sources: [
          { label: "IRS FAQ on Digital Assets — Transfers", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
          { label: "IRS Virtual Currencies", url: "https://www.irs.gov/businesses/small-businesses-self-employed/virtual-currencies" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #23: Hard forks and token splits
  // =====================================================
  {
    question: {
      id: "q-crypto-hard-fork",
      isFeatured: false,
      title: "How are hard forks and token splits taxed for my foreign-owned LLC?",
      body: "My LLC held Bitcoin when Bitcoin Cash (BCH) was created through a hard fork years ago. I also have some tokens that went through chain splits and airdrops as part of protocol upgrades.\n\nI never claimed the BCH at the time — it's just sitting in a wallet I have the keys for. Do I owe taxes on BCH I received from the fork? And what's my cost basis if I decide to sell the BCH now? Is it zero, or do I split my original Bitcoin basis?",
      author: {
        displayName: "Chen W.",
        avatarSeed: "crypto-fork-tw",
        badge: "subscriber" as const,
      },
      category: "crypto",
      tags: ["hard fork", "token split", "Bitcoin Cash", "cost basis", "foreign-owned LLC", "airdrop"],
      postedAt: "2026-01-25T10:00:00Z",
      viewCount: 1098,
      answerCount: 1,
      status: "answered",
      seoTitle: "Hard Forks and Token Splits Tax Treatment for Foreign-Owned LLCs",
      seoDescription: "Tax treatment of cryptocurrency hard forks and token splits for foreign-owned U.S. LLCs. IRS guidance under Rev. Rul. 2019-24 on forked coins, cost basis, and income recognition.",
    },
    answers: [
      {
        id: "a-crypto-hard-fork-1",
        questionId: "q-crypto-hard-fork",
        articleContent: {
          sections: [
            {
              heading: "IRS Revenue Ruling 2019-24: hard forks with airdrops create income",
              body: "Rev. Rul. 2019-24 directly addresses the tax treatment of cryptocurrency received in a hard fork followed by an airdrop. The ruling holds that when a new cryptocurrency is received as a result of a hard fork, and the taxpayer has dominion and control over the new cryptocurrency, the taxpayer has ordinary income equal to the fair market value of the new cryptocurrency at the time of receipt.\n\nThe ruling applies when the hard fork results in a new coin being airdropped to holders of the original coin. The classic example is the Bitcoin/Bitcoin Cash fork in August 2017."
            },
            {
              heading: "The critical question: when did you have dominion and control?",
              body: "Income recognition depends on when you gained dominion and control over the forked coins. This means when you could sell, exchange, or transfer them. The analysis differs based on your situation:\n\n- If you held Bitcoin on an exchange that credited BCH to your account: You had dominion and control when the exchange made BCH available for trading. Many exchanges credited BCH immediately or within days of the fork.\n\n- If you held Bitcoin in a private wallet: You had dominion and control when you first had access to the private keys for BCH. For the Bitcoin/BCH fork, anyone with Bitcoin private keys automatically had BCH keys — so dominion and control arguably existed from the moment of the fork.\n\n- If you never claimed or accessed the BCH: This is where it gets complicated. The IRS could argue you had constructive receipt (the ability to claim creates income), or you could argue no income arises until you actually exercise control. The IRS has not definitively resolved this for hard fork coins that are available but never accessed."
            },
            {
              heading: "Cost basis of hard fork coins",
              body: "Under Rev. Rul. 2019-24, the cost basis of coins received in a hard fork is the fair market value at the time you recognize income — which is the FMV when you gain dominion and control.\n\nImportantly, you do NOT split your original Bitcoin basis between BTC and BCH. Your Bitcoin basis remains unchanged. The BCH has its own separate basis equal to the FMV at the time of receipt (which is also the amount you report as income).\n\nIf BCH was worth $300 per coin when you gained dominion and control, your basis in BCH is $300 per coin, and you had $300 per coin of ordinary income at that time.\n\nIf you later sell BCH for $500, you have a $200 capital gain ($500 - $300 basis). If you sell for $100, you have a $200 capital loss."
            },
            {
              heading: "Hard forks without airdrops: no income event",
              body: "Rev. Rul. 2019-24 also addressed the scenario where a hard fork occurs but the taxpayer does not receive any new cryptocurrency (e.g., if the fork creates a new chain but no coins are distributed to existing holders). In that case, there is no income event because the taxpayer has not received anything new.\n\nThis scenario is less common — most hard forks that create a new chain also result in holders of the original coin receiving the new coin. But it is possible (e.g., if you held coins on an exchange that did not support the forked chain)."
            },
            {
              heading: "Practical steps for foreign LLC owners with unclaimed fork coins",
              body: "If your LLC has unclaimed fork coins sitting in a wallet:\n\n1. Determine whether you had dominion and control: If the coins are accessible (you have the private keys or the exchange credited them), income may have been recognized at the time of the fork.\n\n2. Determine the FMV at the relevant date: Use historical pricing data for the forked coin on the date you gained dominion and control.\n\n3. If you never reported the income: Consider whether amended filing or late reporting is appropriate. The income amount may be relatively small compared to the compliance risk.\n\n4. If you sell the fork coins now: Calculate your gain or loss using the FMV-at-receipt basis. You may need to reconstruct the historical FMV.\n\n5. For foreign owners: Apply the same ECI/FDAP analysis to fork income as to airdrop income. Fork income is ordinary income, which for foreign persons could be FDAP subject to withholding.\n\n6. Report any fork coins held by the LLC on Form 5472 if they were transferred between the LLC and the foreign owner."
            }
          ],
          keyTakeaways: [
            "Rev. Rul. 2019-24 holds that hard fork coins received by airdrop are ordinary income at FMV when you gain dominion and control",
            "Your original Bitcoin basis is NOT split — BCH (or other fork coins) have their own basis equal to the income amount recognized",
            "If fork coins were available but never claimed, the timing of income recognition is uncertain",
            "Hard forks without airdrops (no new coins received) create no income event",
            "Reconstruct historical FMV for any unclaimed fork coins before selling — your basis depends on the income recognition date"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-26T09:30:00Z",
        sources: [
          { label: "Rev. Rul. 2019-24 — Hard Forks and Airdrops", url: "https://www.irs.gov/pub/irs-drop/rr-19-24.pdf" },
          { label: "IRS FAQ on Digital Assets", url: "https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" },
          { label: "IRS Notice 2014-21", url: "https://www.irs.gov/irb/2014-16_IRB#NOT-2014-21" },
        ],
      },
    ],
  },

];
