// INDUSTRY_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const INDUSTRY_THREADS: QAThread[] = [
  {
    question: {
      id: "q-ind-us-creator-freelancer",
      title: "How should a U.S. creator or freelancer think about tax if no one is withholding anything during the year?",
      body: "I want the practical IRS answer for creators, consultants and solo operators, not a motivational hustle thread. Please explain why self-employment tax and estimated tax both matter, and why waiting until April usually means the person misunderstood how the IRS expects this kind of income to be paid.",
      author: {
        displayName: "Ava Collins",
        avatarSeed: "ind-ava-collins",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "creator economy", "freelancer", "IRS", "self-employment tax"],
      postedAt: "2025-11-19T08:00:00.000Z",
      viewCount: 3260,
      answerCount: 1,
      status: "answered",
      seoTitle: "Tax basics for U.S. creators and freelancers explained",
      seoDescription: "IRS-based explanation of self-employment tax and estimated taxes for creators, consultants, and freelancers with no payroll withholding.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-ind-us-creator-freelancer",
        questionId: "q-ind-us-creator-freelancer",
        articleContent: {
          sections: [
            {
              heading: "A creator with no payroll withholding is usually living in the self-employment tax world, not just the income-tax world",
              body: `The IRS self-employed tax center says the core point without drama: self-employed individuals generally must pay self-employment tax as well as income tax. That is the first place many creators go wrong. They think the issue is only whether they owe income tax in April, when the real issue is that Social Security and Medicare taxes are also being handled through the self-employment system rather than through payroll withholding.\n\nThat matters because a creator who is doing brand deals, freelance editing, coaching, design work or newsletter income is often closer to a small business than to an employee, even if the work feels informal.`,
            },
            {
              heading: "Estimated tax is the IRS answer to the fact that no employer is withholding during the year",
              body: `The IRS estimated-tax page explains the mechanics that usually surprise new freelancers. Estimated tax is used to pay not just income tax but also self-employment tax, and individuals generally have to make estimated payments if they expect to owe $1,000 or more when the return is filed. So waiting until April is often not neutral procrastination. It can be a signal that the taxpayer missed the system the IRS expected them to be using all along.\n\nThis is why creator income feels more volatile than salary income at tax time. The taxpayer is doing both the earning and the cash-reserve planning.`,
            },
            {
              heading: "The right workflow is bookkeeping first, tax payment second, return filing third",
              body: `This is the operational habit that keeps creator tax from turning into panic. Income needs to be tracked, business expenses need to be separated, and quarterly planning has to happen before the annual return is prepared. The annual filing still matters, but it should be closing the year rather than introducing the taxpayer to their obligations for the first time.\n\nThis answer is educational only and not tax advice. For U.S. creator and freelance income, the mature question is not 'How bad will April be?' but 'Am I treating this as a real business income stream with estimated payments and proper records?'`,
            },
          ],
          keyTakeaways: [
            "U.S. creators and freelancers often owe both income tax and self-employment tax.",
            "Estimated tax is how many self-employed individuals pay tax during the year when no employer is withholding.",
            "The IRS generally expects estimated payments when the taxpayer expects to owe at least $1,000 at filing time.",
            "Bookkeeping and cash-reserve discipline matter as much as the annual return.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-11-21T10:00:00.000Z",
        sources: [
          {
            label: "Self-employed individuals tax center",
            url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center",
          },
          {
            label: "Estimated taxes",
            url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-uk-marketplace-vat",
      title: "How should an overseas e-commerce seller think about UK VAT if sales go through Amazon, eBay or another marketplace?",
      body: "I want the workflow answer, not 'the marketplace handles tax' as a blanket statement. Please explain when the marketplace becomes liable for VAT, when the seller still has import or registration obligations, and why the £135 rule is only one part of the decision tree.",
      author: {
        displayName: "Daniela Costa",
        avatarSeed: "ind-daniela-costa",
        badge: "new-member",
      },
      category: "industry-tax",
      tags: ["industry", "e-commerce", "UK VAT", "marketplace seller", "HMRC"],
      postedAt: "2025-12-02T08:00:00.000Z",
      viewCount: 3840,
      answerCount: 1,
      status: "answered",
      seoTitle: "UK VAT for overseas marketplace sellers explained",
      seoDescription: "HMRC-based explanation of UK VAT for overseas marketplace sellers, including the £135 rule, deemed supplier rules, and seller obligations.",
    },
    answers: [
      {
        id: "a-ind-uk-marketplace-vat",
        questionId: "q-ind-uk-marketplace-vat",
        articleContent: {
          sections: [
            {
              heading: "The marketplace can become the VAT-accounting party, but that does not mean the seller disappears from the tax picture",
              body: `HMRC's marketplace guidance makes the modern UK rule much more specific than the phrase 'Amazon handles VAT'. For consignments valued at £135 or less sold through an online marketplace, the marketplace generally charges and accounts for VAT at the point of sale, unless the sale is business-to-business and the customer gives a UK VAT number. HMRC also says online marketplaces are liable for VAT on goods of any value that are already in the UK at the point of sale when sold by a seller not established in the UK.\n\nThat is a major compliance shift, but it is not the same as saying the seller has no tax work left.`,
            },
            {
              heading: "The seller can still have import and registration obligations even when a deemed-supplier rule applies",
              body: `HMRC spells this out in the same guidance. When goods are first imported into the UK, the overseas seller remains liable for any import VAT and customs duty at that stage. HMRC also explains that overseas sellers making deemed supplies may still need to register for VAT or apply for exemption from registration depending on the facts.\n\nThis is where marketplace sellers often underestimate the workflow. The marketplace rule changes who accounts for output VAT on certain sales, but it does not automatically clean up import entries, stock positioning, or every registration question in the background.`,
            },
            {
              heading: "The real e-commerce question is where the goods are, what the consignment value is, and who the customer is",
              body: `That is the commercial checklist HMRC's material keeps pushing businesses toward. Are the goods outside the UK and within the £135 consignment rules? Are they already in the UK at the point of sale? Is the customer a VAT-registered business or an ordinary consumer? The answers change who becomes liable for VAT and what the seller still has to do.\n\nThis answer is educational only and not tax advice. For overseas marketplace sellers into the UK, the clean habit is to map inventory location, consignment value, customer type and marketplace role before assuming any platform has fully taken over the tax side.`,
            },
          ],
          keyTakeaways: [
            "For many consignments of £135 or less sold through a marketplace, the marketplace accounts for VAT at the point of sale.",
            "Marketplaces can also be liable for VAT on goods already in the UK at the point of sale when sold by a seller not established in the UK.",
            "The overseas seller can still face import VAT, customs and possible registration issues.",
            "The core operational questions are inventory location, consignment value, customer type and whether the sale runs through a marketplace.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-12-04T10:00:00.000Z",
        sources: [
          {
            label: "VAT and overseas goods sold to customers in the UK using online marketplaces",
            url: "https://www.gov.uk/guidance/vat-and-overseas-goods-sold-to-customers-in-the-uk-using-online-marketplaces",
          },
          {
            label: "Businesses selling goods in the UK using online marketplaces",
            url: "https://www.gov.uk/guidance/vat-overseas-businesses-using-an-online-marketplace-to-sell-goods-in-the-uk",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-uk-crypto-tax",
      title: "How should a UK crypto user think about tax if they both receive tokens and later dispose of them?",
      body: "I want HMRC's practical answer, not internet folklore. Please explain why receiving tokens can create Income Tax issues, why later disposals can still trigger Capital Gains Tax, and why exchange reports do not replace the taxpayer's own records.",
      author: {
        displayName: "Sana Malik",
        avatarSeed: "ind-sana-malik",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "crypto", "HMRC", "capital gains tax", "income tax"],
      postedAt: "2026-01-10T08:00:00.000Z",
      viewCount: 3610,
      answerCount: 1,
      status: "answered",
      seoTitle: "How HMRC taxes receiving and selling cryptoassets",
      seoDescription: "HMRC-based explanation of crypto tax in the UK, covering Income Tax on receipt, Capital Gains Tax on disposal, and record-keeping duties.",
    },
    answers: [
      {
        id: "a-ind-uk-crypto-tax",
        questionId: "q-ind-uk-crypto-tax",
        articleContent: {
          sections: [
            {
              heading: "Receiving tokens and disposing of tokens are different tax moments",
              body: `HMRC's crypto guidance separates those moments very clearly. If you receive tokens from employment, they can be employment income and may run through PAYE if they are readily convertible assets. If you receive tokens from mining, staking, lending or similar arrangements and you are not carrying on a trade, HMRC says it will generally treat them as other taxable income.\n\nThat already means the tax analysis can begin before a token is ever sold. So the common idea that 'crypto is only taxed when cashed out' is too crude to be safe in the UK.`,
            },
            {
              heading: "Selling later can still create Capital Gains Tax even if tax was already paid when the tokens were received",
              body: `HMRC then draws a second line. When you later sell, exchange or otherwise dispose of cryptoassets, you may need to pay Capital Gains Tax on the increase in value since acquisition. The disposal guidance also explains that pooled-cost calculations matter and that exchange-generated reports are not themselves tax calculations.\n\nThis is the practical trap for active crypto users. They often think one tax event has already covered the whole lifecycle, when HMRC is treating receipt and disposal as separate events that can point to different taxes.`,
            },
            {
              heading: "Record-keeping is not optional because the taxpayer has to reconstruct the path from receipt to disposal",
              body: `HMRC is blunt on records. It says taxpayers must keep their own records, including token type, dates, values in pound sterling, and disposal details. That obligation exists precisely because wallets, exchanges and staking flows rarely produce a clean tax-ready story on their own.\n\nThis answer is educational only and not tax advice. In the UK crypto world, the safe habit is to treat receipt, pooling and disposal as one connected record-keeping project rather than three separate surprises.`,
            },
          ],
          keyTakeaways: [
            "Receiving cryptoassets can create Income Tax consequences before any later sale happens.",
            "A later disposal can still trigger Capital Gains Tax on post-receipt appreciation.",
            "Employment tokens, mining, staking and lending can fall into different UK tax treatments depending on the facts.",
            "HMRC expects taxpayers to keep their own detailed records rather than relying on exchange reports alone.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-12T10:00:00.000Z",
        sources: [
          {
            label: "Cryptoassets Manual",
            url: "https://www.gov.uk/hmrc-internal-manuals/cryptoassets-manual",
          },
          {
            label: "Check if you need to pay tax when you receive cryptoassets",
            url: "https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-receive-cryptoassets",
          },
          {
            label: "Check if you need to pay tax when you sell cryptoassets",
            url: "https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-sell-cryptoassets",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-us-short-term-rental",
      title: "How should a U.S. short-term rental host think about tax if the property is also used personally?",
      body: "I want the actual IRS workflow, not a rental-host myth. Please explain the under-15-day rule, the personal-use test, and when the activity starts to look less like passive Schedule E income and more like a hospitality business with extra service issues.",
      author: {
        displayName: "Noah Barrett",
        avatarSeed: "ind-noah-barrett",
        badge: "new-member",
      },
      category: "industry-tax",
      tags: ["industry", "short-term rental", "IRS", "vacation home", "Schedule E"],
      postedAt: "2026-02-07T08:00:00.000Z",
      viewCount: 3485,
      answerCount: 1,
      status: "answered",
      seoTitle: "IRS rules for short-term rentals with personal use explained",
      seoDescription: "IRS guidance on short-term rentals explained with the 14-day rule, personal-use limits, expense allocation, and when hospitality services change the tax posture.",
    },
    answers: [
      {
        id: "a-ind-us-short-term-rental",
        questionId: "q-ind-us-short-term-rental",
        articleContent: {
          sections: [
            {
              heading: "The first IRS question is whether this is a dwelling unit used as a residence and how many days it was rented",
              body: `Topic 415 gives the operational test in plain English. If you rent a dwelling unit that you also use as a residence, expense limits can apply once personal use exceeds the greater of 14 days or 10% of the days rented at fair rental value. The same topic also highlights the special rule for very light rental use: if the unit is used as a residence and rented for fewer than 15 days during the year, you generally do not report the rental income and do not deduct rental expenses as rental expenses.\n\nThat is why short-term rental tax starts with a calendar, not with a platform payout summary.`,
            },
            {
              heading: "Mixed-use property means mixed-use expenses",
              body: `The IRS says you generally must divide expenses between rental use and personal use when both are present. Publication 527 is the working reference point here, and Topic 415 explains that the gross-rental-income limitation can prevent the taxpayer from deducting all rental-side expenses immediately when the property is also used as a residence.\n\nThis is the part hosts often underestimate. Mortgage interest, taxes, utilities, maintenance and depreciation do not all simply flow into a clean rental bucket if the owner is also enjoying the property.`,
            },
            {
              heading: "Hospitality-style services can push the activity toward a more business-like posture",
              body: `Publication 334 adds an important industry distinction. If the owner is effectively running something closer to a hotel, motel or similar operation with substantial guest services, the income can move away from the typical passive residential-rental posture and into a more active business treatment. That is a very different operating model from merely granting guests the use of space.\n\nThis answer is educational only and not tax advice. For U.S. short-term rentals, the key questions are days rented, days used personally, how expenses are allocated, and whether the host is just renting space or providing a guest-service business.`,
            },
          ],
          keyTakeaways: [
            "If a dwelling unit is also used personally, the IRS applies the greater-of-14-days-or-10%-of-rental-days residence test.",
            "If the property is rented fewer than 15 days and also used as a residence, the special minimal-rental-use rule can apply.",
            "Mixed personal and rental use generally requires expenses to be divided between the two uses.",
            "Substantial guest services can shift the activity toward a more active hospitality-business posture.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-02-09T10:00:00.000Z",
        sources: [
          {
            label: "Topic no. 415, Renting residential and vacation property",
            url: "https://www.irs.gov/taxtopics/tc415",
          },
          {
            label: "Publication 527",
            url: "https://www.irs.gov/publications/p527",
          },
          {
            label: "Publication 334",
            url: "https://www.irs.gov/publications/p334",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-uae-solo-consultant-ct",
      title: "How should a UAE solo consultant or creator think about corporate tax if they still trade in a personal name?",
      body: "I do not want the old Dubai marketing answer. Please explain when the natural-person rules actually matter, why business turnover matters more than people expect, and how someone should separate consulting revenue from wages, investment income or other personal receipts.",
      author: {
        displayName: "Amira Solis",
        avatarSeed: "ind-amira-solis",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "UAE", "consultant", "creator business", "corporate tax"],
      postedAt: "2026-03-11T08:00:00.000Z",
      viewCount: 2695,
      answerCount: 1,
      status: "answered",
      seoTitle: "UAE corporate tax for solo consultants and creators explained",
      seoDescription: "Official-source explanation of how UAE natural-person corporate tax rules affect consultants and creators trading without a company.",
    },
    answers: [
      {
        id: "a-ind-uae-solo-consultant-ct",
        questionId: "q-ind-uae-solo-consultant-ct",
        articleContent: {
          sections: [
            {
              heading: "The starting point is no longer 'company or no company' but whether there is qualifying business activity and how much turnover it generates",
              body: `The UAE's current corporate-tax framework is different from the old no-tax folklore many solo operators still repeat. The Federal Tax Authority says a natural person becomes relevant to the corporate-tax rules when business or business-activity turnover exceeds AED 1 million in a Gregorian calendar year. That means a consultant or creator cannot safely assume that personal-name trading ends the tax analysis before it begins.`,
            },
            {
              heading: "Separating business receipts from other personal income is the practical compliance skill",
              body: `The official natural-person guidance matters because it distinguishes business activity from wages, personal investment income and real estate investment income. That distinction is not academic. A creator who mixes platform income, salary, passive returns and business invoices into one mental bucket can easily misread whether the threshold has been crossed or whether registration is even in play.`,
            },
            {
              heading: "The safest UAE habit for solo operators is a turnover map, not a slogan",
              body: `The Ministry of Finance guidance is useful precisely because it frames the UAE system as a real corporate-tax regime with categories and thresholds. For solo consultants, designers, developers and creators, the right operational habit is to classify receipts properly, track business turnover month by month and assess the natural-person rules before the deadline question arrives.\n\nThis answer is educational only and not tax advice. The safe posture is not to panic about every dirham earned personally, but to stop relying on the older assumption that personal-name trading is always outside the corporate-tax conversation.`,
            },
          ],
          keyTakeaways: [
            "A UAE natural person can fall into corporate tax if qualifying business turnover exceeds AED 1 million.",
            "Business receipts need to be separated from wages, investment income and real estate income.",
            "Trading personally does not automatically remove every corporate-tax question.",
            "Solo operators should track business turnover deliberately instead of relying on old UAE tax slogans.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-03-13T10:00:00.000Z",
        sources: [
          {
            label: "Corporate Tax in the UAE",
            url: "https://mof.gov.ae/en/public-finance/tax/corporate-tax-in-the-uae/",
          },
          {
            label: "Basis of Taxation - Natural Person",
            url: "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-hk-agency-foreign-clients",
      title: "Does a Hong Kong agency or studio automatically have offshore profits just because all of its clients are overseas?",
      body: "I want the serious Hong Kong answer, not a sales pitch. Please explain why invoicing foreign clients is not the whole source analysis, what facts still matter for a service business, and why founders should be careful about treating overseas customer geography like a blanket profits-tax exemption.",
      author: {
        displayName: "Ethan Doyle",
        avatarSeed: "ind-ethan-doyle",
        badge: "new-member",
      },
      category: "industry-tax",
      tags: ["industry", "Hong Kong", "agency", "profits tax", "offshore claim"],
      postedAt: "2026-03-19T08:00:00.000Z",
      viewCount: 2435,
      answerCount: 1,
      status: "answered",
      seoTitle: "Hong Kong agency profits tax and offshore claims explained",
      seoDescription: "Official-source explanation of why a Hong Kong agency with foreign clients does not automatically have offshore profits for tax purposes.",
    },
    answers: [
      {
        id: "a-ind-hk-agency-foreign-clients",
        questionId: "q-ind-hk-agency-foreign-clients",
        articleContent: {
          sections: [
            {
              heading: "Hong Kong's territorial system is real, but it is not the same thing as 'foreign clients equals offshore profits'",
              body: `Hong Kong's official profits-tax overview focuses on whether profits arise in or are derived from Hong Kong from a trade, profession or business carried on in Hong Kong. That is a source-based test. It does not say that a service business becomes automatically offshore merely because invoices are sent to clients in London, Sydney or New York.`,
            },
            {
              heading: "For agencies and studios, the operational facts still matter more than the customer list",
              body: `A design studio, software agency or marketing shop usually creates value through people, decision-making and delivery processes. That means founders need to think about where contracts are negotiated, where staff actually perform the work, where creative direction sits and where the core profit-generating functions are carried on. Customer geography may be relevant context, but it is not a substitute for a source analysis.`,
            },
            {
              heading: "The low-tax reputation of Hong Kong should not be mistaken for a zero-analysis reputation",
              body: `Hong Kong can still be very attractive for service businesses, and the profits-tax rates remain relatively light by international standards. But the practical mistake is to jump from 'Hong Kong is territorial' to 'my agency does not have to think hard about source.' That shortcut is how founders end up repeating marketing language where a facts-and-evidence answer is required.\n\nThis answer is educational only and not tax advice. The safest approach for a Hong Kong service business is to build the source story from actual operations rather than from the nationality of the customers.`,
            },
          ],
          keyTakeaways: [
            "Foreign clients do not automatically make Hong Kong profits offshore.",
            "Hong Kong profits tax still turns on where profits arise in or are derived from Hong Kong.",
            "For agencies, the place where work is negotiated, managed and delivered matters.",
            "Hong Kong's attractive tax profile does not remove the need for a real source analysis.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-03-21T10:00:00.000Z",
        sources: [
          {
            label: "Profits Tax overview",
            url: "https://www.gov.hk/en/residents/taxes/profits/index.htm",
          },
          {
            label: "Profits Tax rates",
            url: "https://www.gov.hk/en/residents/taxes/taxfiling/taxrates/profitsrates.htm",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-certificate-of-residence-proof",
      title: "Why do foreign withholding agents keep asking for a certificate of residence even when the treaty article already looks clear?",
      body: "I keep hearing that the treaty should be enough on its own. Please explain what a certificate of residence actually proves, why tax authorities still ask for it, and why it still does not replace the rest of the treaty analysis.",
      author: {
        displayName: "Naomi Keller",
        avatarSeed: "xb-naomi-keller",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "treaty", "certificate of residence", "withholding", "proof"],
      postedAt: "2026-03-26T08:00:00.000Z",
      viewCount: 1628,
      answerCount: 1,
      status: "answered",
      seoTitle: "Why a certificate of residence matters for treaty withholding claims",
      seoDescription: "Official-source explanation of what a certificate of residence proves in treaty claims and why it does not replace the rest of the withholding analysis.",
    },
    answers: [
      {
        id: "a-xb-certificate-of-residence-proof",
        questionId: "q-xb-certificate-of-residence-proof",
        articleContent: {
          sections: [
            {
              heading: "A certificate of residence is administrative proof that the claimant is resident in the treaty country, not a complete treaty answer by itself",
              body: `HMRC's certificate-of-residence guidance says the overseas authority will normally ask HMRC to certify that the claimant is a UK resident in line with the double taxation agreement. The Dutch Belastingdienst describes its own woonplaatsverklaring in the same spirit: it states that the taxpayer is a resident of the Netherlands and subject there to income tax or corporation tax. That is why withholding agents keep asking for it. They are not merely asking whether a treaty exists. They are asking for official evidence that the claimant belongs to the treaty country being invoked.`,
            },
            {
              heading: "The certificate matters because tax authorities do not usually grant treaty relief on trust",
              body: `HMRC also says it will not issue a certificate of residence if the claimant is not entitled to treaty benefits under the relevant agreement, and the Dutch guidance makes clear that the application itself has to identify the treaty country and years in question. In other words, the certificate sits inside a real administrative process. It is a filter against casual claims. That makes it much more practical than people expect when they first hear the phrase 'proof of residence.'`,
            },
            {
              heading: "But the certificate still does not replace the treaty article, the income analysis or the other conditions",
              body: `A certificate of residence does not prove that every kind of income qualifies for reduced withholding. It does not identify the right article automatically, and it does not dispose of beneficial-ownership or timing questions by itself. The treaty still has to fit the payment. The form package still has to fit the procedure of the source country. This answer is educational only and not tax advice. The clean workflow is certificate first, treaty article second, payment analysis all the way through.`,
            },
          ],
          keyTakeaways: [
            "A certificate of residence is official proof that the claimant is resident in the treaty country being relied on.",
            "Tax authorities ask for it because treaty relief is an evidential process, not just a legal slogan.",
            "The certificate does not by itself prove that the income qualifies for reduced withholding.",
            "A treaty claim still needs the right article, the right form route and the right supporting facts.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-03-28T10:00:00.000Z",
        sources: [
          {
            label: "How to apply for a certificate of residence to claim tax relief abroad",
            url: "https://www.gov.uk/guidance/get-a-certificate-of-residence",
          },
          {
            label: "Buitenlandse bronbelasting terug - met verklaring Belastingdienst",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/internationaal/vermogen/teruggaaf_of_vrijstelling_van_buitenlandse_bronbelasting/buitenlandse-bronbelasting-terug-met-verklaring-nederlandse-belastingdienst",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-indonesia-treaty-pmk112",
      title: "How should a nonresident taxpayer handle Indonesian treaty relief after PMK 112 changed the DGT-form workflow?",
      body: "I want the practical cross-border answer. Please explain what changed under PMK 112 or the DJP implementation notice, when older forms can still be used, and why this is a documentation and process question as much as a treaty question.",
      author: {
        displayName: "Victor Lim",
        avatarSeed: "xb-victor-lim",
        badge: "new-member",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "Indonesia", "treaty", "withholding", "DGT form"],
      postedAt: "2026-04-01T08:00:00.000Z",
      viewCount: 1382,
      answerCount: 1,
      status: "answered",
      seoTitle: "Indonesia treaty relief after PMK 112 explained",
      seoDescription: "Official-source explanation of Indonesia treaty relief after PMK 112, including DGT forms, Coretax workflow, and when older forms still remain valid.",
    },
    answers: [
      {
        id: "a-xb-indonesia-treaty-pmk112",
        questionId: "q-xb-indonesia-treaty-pmk112",
        articleContent: {
          sections: [
            {
              heading: "The first change is procedural: treaty entitlement now has to move through the current PMK 112 framework",
              body: `Indonesia's PMK 112 treaty rules matter because they turn treaty relief into a more standardised process. DJP's January 2026 implementation notice says nonresident taxpayers should use the Formulir DGT format under PMK-112/2025. That means the cross-border question is no longer only whether the treaty article exists. It is also whether the claim is travelling through the form and filing route the Indonesian tax authority now expects.`,
            },
            {
              heading: "Older forms do not disappear instantly, but they do not stay useful forever either",
              body: `The implementation notice is practical on this point. It says older forms issued under the prior rules can still be used for the period stated on the form. That is helpful, but it is not a permanent safe harbour. A payer and recipient still need to check whether an old document remains within its valid period before assuming the legacy paperwork can carry the next payment.`,
            },
            {
              heading: "The real lesson is that treaty relief is now a workflow problem as much as a legal one",
              body: `Once treaty claims move through Coretax-linked administration, the margin for casual paperwork shrinks. A foreign licensor, service provider or lender still has to identify the correct treaty article, but now also has to align the support file with the current DGT form path. This answer is educational only and not tax advice. In practice, the safest move is to refresh the treaty-claim pack before the next withholding event rather than discovering the process gap after tax has already been withheld at the domestic rate.`,
            },
          ],
          keyTakeaways: [
            "Indonesia treaty relief now needs to be handled through the current PMK 112 documentation workflow.",
            "DJP says nonresident taxpayers should use the PMK-112/2025 Formulir DGT format.",
            "Older forms can remain usable for their stated period, but that does not make them indefinite.",
            "Treaty claims now depend on process discipline as well as treaty analysis.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-03T10:00:00.000Z",
        sources: [
          {
            label: "TATA CARA PENERAPAN PERSETUJUAN PENGHINDARAN PAJAK BERGANDA",
            url: "https://pajak.go.id/id/peraturan/tata-cara-penerapan-persetujuan-penghindaran-pajak-berganda-2",
          },
          {
            label: "Pelaksanaan Peraturan Menteri Keuangan Nomor 112 Tahun 2025 tentang Tata Cara Penerapan Persetujuan Penghindaran Pajak Berganda",
            url: "https://www.pajak.go.id/sites/default/files/2026-01/Pelaksanaan%20Peraturan%20Menteri%20Keuangan%20Nomor%20112%20Tahun%202025%20tentang%20Tata%20Cara%20Penerapan%20Persetujuan%20Penghindaran%20Pajak%20Berganda.pdf",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-netherlands-hospitality-vat-2026",
      title: "For Dutch hotels, holiday lets and short-stay operators, what actually changed when accommodation moved to 21% VAT in 2026?",
      body: "I want the operational answer, not just a headline rate quote. Please explain what counts as logies, how all-in prices need to be split, and why old 9% assumptions are dangerous for 2026 bookings.",
      author: {
        displayName: "Elena Vos",
        avatarSeed: "ind-elena-vos",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "Netherlands", "hospitality", "VAT", "short stay"],
      postedAt: "2026-04-04T08:00:00.000Z",
      viewCount: 1749,
      answerCount: 1,
      status: "answered",
      seoTitle: "Netherlands hospitality VAT in 2026 explained",
      seoDescription: "Official-source explanation of how Dutch accommodation VAT changed in 2026, including 21% logies treatment and all-in price splitting.",
    },
    answers: [
      {
        id: "a-ind-netherlands-hospitality-vat-2026",
        questionId: "q-ind-netherlands-hospitality-vat-2026",
        articleContent: {
          sections: [
            {
              heading: "The headline change is real: from 1 January 2026, logies moved to the 21% rate",
              body: `The Dutch tax authority's October 30, 2025 update states this very clearly: from 1 January 2026, the supply of accommodation is taxed at 21% VAT. The detailed logies page then explains what falls inside that category, including hotels, pensions and a range of short-stay and holiday-accommodation arrangements. That means the hospitality sector cannot safely keep treating overnight stays as if the old reduced-rate story simply continued into 2026.`,
            },
            {
              heading: "The tricky part is not only the rate change but the package split",
              body: `Belastingdienst also explains that separately supplied facilities such as breakfast can still fall under 9% in the right circumstances, while accommodation and related facilities fall under 21%. For all-in pricing, the operator has to split the fee based on the market values of the separate elements. That is where operational mistakes start. The booking page may show one price, but the VAT treatment may no longer behave like one rate.`,
            },
            {
              heading: "2025 bookings can still carry 2026 consequences",
              body: `The logies guidance also warns about payments made in 2025 for stays taking place in 2026 or later. Those do not stay protected by old assumptions. If the stay is in 2026, the 21% treatment still matters. This answer is educational only and not tax advice. The safe habit for hospitality operators is to rebuild pricing, booking and invoice logic around the 2026 rules rather than hoping the rate change can be absorbed quietly in the background.`,
            },
          ],
          keyTakeaways: [
            "From 1 January 2026, Dutch accommodation is generally taxed at 21% VAT.",
            "All-in packages may need to be split between 21% accommodation elements and 9% separate facilities.",
            "Old 9% accommodation assumptions can misprice 2026 bookings.",
            "Advance payments in 2025 for 2026 stays can still fall under the 2026 accommodation treatment.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-06T10:00:00.000Z",
        sources: [
          {
            label: "Vanaf 1 januari 2026: btw-tarief logies omhoog naar 21%",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/berichten/nieuws/btw-logies",
          },
          {
            label: "Btw-tarief logies",
            url: "https://delta.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/diensten_9_btw/logies",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-netherlands-freelancer-registration",
      title: "If a freelance consultant starts in the Netherlands, do they register with KVK first and when does VAT become real?",
      body: "I want the practical workflow. Please explain the order between KVK and the Tax Administration, how someone learns whether they are a VAT entrepreneur, and when VAT filing starts to matter in day-to-day operations.",
      author: {
        displayName: "Sofia Brandt",
        avatarSeed: "ind-sofia-brandt",
        badge: "new-member",
      },
      category: "industry-tax",
      tags: ["industry", "Netherlands", "freelancer", "VAT", "registration"],
      postedAt: "2026-04-07T08:00:00.000Z",
      viewCount: 1496,
      answerCount: 1,
      status: "answered",
      seoTitle: "Netherlands freelancer registration and VAT explained",
      seoDescription: "Official-source explanation of how Dutch freelancers register with KVK, how VAT status is determined, and when VAT filing starts to matter.",
    },
    answers: [
      {
        id: "a-ind-netherlands-freelancer-registration",
        questionId: "q-ind-netherlands-freelancer-registration",
        articleContent: {
          sections: [
            {
              heading: "For most starters, KVK comes first and the Tax Administration follows through that registration",
              body: `KVK's official startup guidance says that to make the business official you register with KVK and the Tax Administration becomes part of that chain. The Belastingdienst page on starting a business says the same thing in its own words: usually you register with KVK and KVK passes your details to the tax authority. So the practical first step for most freelance consultants is not to chase two disconnected offices at once. It is to get the business properly registered through the KVK route.`,
            },
            {
              heading: "VAT status is still a separate judgment, even when the registration route is joined up",
              body: `That joined-up registration does not mean VAT is automatic by assumption. Belastingdienst says you are an entrepreneur for VAT if you independently carry on a business or profession, and after registration the authority lets you know whether that VAT status applies. This matters because many freelancers mix up being registered as a business with automatically understanding their VAT obligations. The tax authority is still making a VAT determination, not just issuing a number as a courtesy.`,
            },
            {
              heading: "VAT becomes real when the filing timetable arrives, not only when the client invoice goes out",
              body: `Belastingdienst's VAT filing guidance is helpful here because it turns theory into routine. A taxpayer can be placed on monthly, quarterly or annual VAT filing, and the filing letter states the deadlines. For quarter and month filers, the return is generally due by the last day of the month after the period. This answer is educational only and not tax advice. The smart freelance workflow is registration first, VAT status second, filing calendar immediately after that.`,
            },
          ],
          keyTakeaways: [
            "Most Dutch freelancers register through KVK, which then shares the details with the Tax Administration.",
            "VAT entrepreneur status is still a separate tax determination, not something to assume blindly.",
            "The VAT filing period can be monthly, quarterly or annual depending on the Tax Administration's setup.",
            "For freelancers, the compliance pressure begins when the filing calendar starts, not only when the first invoice is sent.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-09T10:00:00.000Z",
        sources: [
          {
            label: "Business Register and the Tax Administration",
            url: "https://www.kvk.nl/en/starting/business-register-and-tax-administration/",
          },
          {
            label: "Schrijf uw onderneming in bij KVK of bij de Belastingdienst",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/ondernemen/onderneming_starten/schrijf-uw-onderneming-in/schrijf-uw-onderneming-in",
          },
          {
            label: "Voor wie geldt de btw?",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/voor_wie_geldt_de_btw/voor_wie_geldt_de_btw",
          },
          {
            label: "Btw-aangifte: waar moet u aan denken?",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_aangifte_doen_en_betalen/btw-aangifte-waar-moet-u-aan-denken/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-ftc-carryback-carryforward",
      title: "If foreign taxes were higher than the U.S. foreign tax credit limit this year, are they lost or can they still be used later?",
      body: "I want the practical IRS answer, not a vague statement that 'credits carry forward.' Please explain the one-year carryback, the ten-year carryforward, why the limit still matters first, and why the simplified no-Form-1116 route can quietly destroy carryover flexibility.",
      author: {
        displayName: "Rachel Monroe",
        avatarSeed: "xb-rachel-monroe",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "IRS", "foreign tax credit", "carryforward", "Form 1116"],
      postedAt: "2026-04-10T08:00:00.000Z",
      viewCount: 1678,
      answerCount: 1,
      status: "answered",
      seoTitle: "Unused foreign tax credit carryback and carryforward explained",
      seoDescription: "IRS-based explanation of what happens when foreign taxes exceed the U.S. foreign tax credit limit, including the one-year carryback, ten-year carryforward, and Form 1116 consequences.",
    },
    answers: [
      {
        id: "a-xb-ftc-carryback-carryforward",
        questionId: "q-xb-ftc-carryback-carryforward",
        articleContent: {
          sections: [
            {
              heading: "The first point is that excess foreign tax does not automatically vanish, but it is not automatically usable either",
              body: `Publication 514 treats the foreign tax credit as a limited credit, not as a reimbursement for every dollar of foreign tax paid. If the foreign taxes paid or accrued are higher than the credit limit for that year, the excess becomes unused foreign tax. That means the taxpayer first has to respect the annual limitation calculation before asking what can be salvaged for another year.`,
            },
            {
              heading: "The standard IRS rule is a one-year carryback and then a ten-year carryforward",
              body: `The IRS explains this in both Publication 514 and Topic 856. If the credit cannot be claimed in full because of the limitation, the unused foreign tax can generally be carried back one year and then carried forward for ten years. Publication 514 also makes the workflow more concrete by reminding taxpayers that carrybacks and carryovers are tracked by category and reconciled through Schedule B of Form 1116 rather than by a loose spreadsheet note.`,
            },
            {
              heading: "The easy election can cost future flexibility",
              body: `Topic 856 adds the practical warning many taxpayers miss. If someone claims the foreign tax credit without filing Form 1116 under the simplified route, they cannot carry unused foreign tax back or forward to or from that year. This answer is educational only and not tax advice. The clean habit is to decide whether future carryover value matters before defaulting into the simplified credit shortcut just because the current-year return looks easier.`,
            },
          ],
          keyTakeaways: [
            "Unused foreign tax usually arises only after the annual foreign tax credit limit has been applied.",
            "The general rule is a one-year carryback and a ten-year carryforward.",
            "Carryovers are not free-floating; they are tracked within the foreign tax credit framework and categories.",
            "Using the simplified no-Form-1116 route can prevent carrybacks and carryforwards for that year.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-12T10:00:00.000Z",
        sources: [
          {
            label: "Publication 514",
            url: "https://www.irs.gov/publications/p514",
          },
          {
            label: "Topic no. 856, Foreign tax credit",
            url: "https://www.irs.gov/taxtopics/tc856",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-totalization-vs-income-tax-treaty",
      title: "What is the difference between a U.S. totalization agreement and an income tax treaty when someone works across borders?",
      body: "I want the serious distinction, not a blended expat answer. Please explain what totalization agreements are actually designed to solve, why they are about social taxes and benefit coverage, and why that does not automatically answer where salary is taxed for income-tax purposes.",
      author: {
        displayName: "Leo Gardner",
        avatarSeed: "xb-leo-gardner",
        badge: "new-member",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "totalization", "tax treaty", "social security", "IRS"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 1591,
      answerCount: 1,
      status: "answered",
      seoTitle: "Totalization agreements vs income tax treaties explained",
      seoDescription: "Official-source explanation of how U.S. totalization agreements differ from income tax treaties, and why they solve different cross-border tax problems.",
    },
    answers: [
      {
        id: "a-xb-totalization-vs-income-tax-treaty",
        questionId: "q-xb-totalization-vs-income-tax-treaty",
        articleContent: {
          sections: [
            {
              heading: "A totalization agreement is built for social security coverage, not for general income-tax residence or treaty withholding",
              body: `The IRS says totalization agreements exist to avoid double taxation with respect to social security taxes. SSA's overview states the same point more broadly: the agreements eliminate dual Social Security taxation and help fill gaps in benefit protection when a worker's career is split between countries. That is a different policy problem from the one solved by an income tax treaty.`,
            },
            {
              heading: "That difference matters because payroll and income-tax questions can point in different directions",
              body: `Someone can use a totalization rule to determine whether U.S. Social Security and Medicare taxes or the foreign country's social contributions apply, while still needing a separate income-tax analysis for salary sourcing, treaty relief, residence or withholding. SSA is explicit that the agreements simply exempt workers from one country's social-security system or the other when dual coverage would otherwise arise. They do not rewrite the basic income-tax treaty analysis.`,
            },
            {
              heading: "Cross-border errors often begin when one document is treated as if it solves both systems",
              body: `This is why totalization misunderstandings are so expensive in practice. A taxpayer or employer may correctly address social-tax coverage and still be wrong on income-tax residency, withholding or return filing. This answer is educational only and not tax advice. The safe sequence is to separate the social-tax question from the income-tax question instead of assuming that one bilateral agreement answers both.`,
            },
          ],
          keyTakeaways: [
            "Totalization agreements are aimed at social security taxation and benefit coordination, not general income-tax residence.",
            "They help prevent dual social-security contributions on the same work.",
            "Income-tax treaty issues such as residence, salary taxation and withholding still require separate analysis.",
            "A correct totalization result does not automatically produce a correct income-tax result.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
        sources: [
          {
            label: "Totalization agreements",
            url: "https://www.irs.gov/individuals/international-taxpayers/totalization-agreements",
          },
          {
            label: "U.S. International Social Security Agreements",
            url: "https://www.ssa.gov/international/agreements_overview.html",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-certificate-of-coverage-purpose",
      title: "What does a certificate of coverage actually do in a totalization case, and does it replace the income-tax analysis?",
      body: "I want the operational answer. Please explain who gets the certificate, what exemption it proves, and why showing a certificate of coverage is not the same thing as proving treaty residence or solving payroll withholding for ordinary income-tax purposes.",
      author: {
        displayName: "Sonia Park",
        avatarSeed: "xb-sonia-park",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "certificate of coverage", "totalization", "social security", "SSA"],
      postedAt: "2026-04-12T08:00:00.000Z",
      viewCount: 1462,
      answerCount: 1,
      status: "answered",
      seoTitle: "Certificate of coverage in totalization cases explained",
      seoDescription: "Official-source explanation of what a certificate of coverage proves in a totalization case, who needs it, and what it does not solve for income-tax purposes.",
    },
    answers: [
      {
        id: "a-xb-certificate-of-coverage-purpose",
        questionId: "q-xb-certificate-of-coverage-purpose",
        articleContent: {
          sections: [
            {
              heading: "The certificate of coverage is evidence for social-security exemption under the agreement",
              body: `The IRS says a person claiming exemption from U.S. Social Security and Medicare taxes because of a totalization agreement must obtain a certificate of coverage from the home country's social-security agency and present it to the U.S. employer, subject to the published procedures. SSA's overview explains the same concept from the other side: a worker exempt under an agreement documents that exemption with a certificate from the country that will continue to cover them.`,
            },
            {
              heading: "The certificate tells the payroll side which system keeps coverage, but it does not become a universal tax passport",
              body: `SSA is clear that the certificate is used to prove exemption from the other country's social-security contributions, and employers keep it in the file in case the IRS questions why no U.S. Social Security taxes were paid. That is a precise payroll function. It does not by itself prove treaty residence, settle income-tax sourcing, or replace the need to analyse withholding and return positions under the separate income-tax rules.`,
            },
            {
              heading: "That is why the certificate matters a lot, but only for the problem it was built to solve",
              body: `In practice, taxpayers often overstate what the document can do. It is powerful evidence for coverage under one system rather than the other, especially for temporary assignments and some self-employment cases. This answer is educational only and not tax advice. The safe approach is to use the certificate to solve the social-tax question cleanly, then do the income-tax analysis on its own track instead of treating one document as a universal cross-border clearance slip.`,
            },
          ],
          keyTakeaways: [
            "A certificate of coverage is proof that the worker remains covered by one country's social-security system under the agreement.",
            "Employers and self-employed taxpayers use it to support exemption from the other country's social-security taxes.",
            "It does not by itself prove income-tax residence or answer treaty withholding issues.",
            "The certificate is essential payroll evidence, but it is not a substitute for income-tax analysis.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-14T10:00:00.000Z",
        sources: [
          {
            label: "Totalization agreements",
            url: "https://www.irs.gov/individuals/international-taxpayers/totalization-agreements",
          },
          {
            label: "U.S. International Social Security Agreements",
            url: "https://www.ssa.gov/international/agreements_overview.html",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-foreign-housing-exclusion-deduction",
      title: "For a U.S. taxpayer abroad, when is foreign housing an exclusion and when is it a deduction, and why can the deduction carry over only one year?",
      body: "I want the detailed IRS distinction, not a loose FEIE summary. Please explain the employee versus self-employed split, the limitation on the deduction, and why someone who claims housing relief still cannot treat foreign taxes on excluded income as fully creditable.",
      author: {
        displayName: "Nina Delgado",
        avatarSeed: "xb-nina-delgado",
        badge: "new-member",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "IRS", "foreign housing exclusion", "foreign housing deduction", "Form 2555"],
      postedAt: "2026-04-13T08:00:00.000Z",
      viewCount: 1389,
      answerCount: 1,
      status: "answered",
      seoTitle: "Foreign housing exclusion vs deduction explained",
      seoDescription: "IRS-based explanation of when foreign housing relief is an exclusion or a deduction, how the limitation works, and why excluded income affects the foreign tax credit.",
    },
    answers: [
      {
        id: "a-xb-foreign-housing-exclusion-deduction",
        questionId: "q-xb-foreign-housing-exclusion-deduction",
        articleContent: {
          sections: [
            {
              heading: "The employee part is generally an exclusion, while the self-employed part is generally a deduction",
              body: `Publication 54 draws the distinction more precisely than most expat summaries do. The housing amount attributable to employer-provided income is handled as a foreign housing exclusion, while the self-employed portion is handled as a foreign housing deduction. The Form 2555 instructions frame the same structure by explaining that the form is used to compute the housing exclusion and or deduction, but neither can exceed foreign earned income for the year.`,
            },
            {
              heading: "The deduction is limited, and any excess carryover is short-lived",
              body: `Publication 54 also spells out the practical limitation. The foreign housing deduction cannot exceed foreign earned income minus the foreign earned income exclusion and foreign housing exclusion. If part of the deduction is disallowed because of that limit, the excess can be carried over only to the next year. If it cannot be used in that next year, it dies there rather than rolling on indefinitely.`,
            },
            {
              heading: "Housing relief still affects the foreign tax credit because excluded income is not fully creditable",
              body: `The Form 2555 instructions warn that taxpayers cannot claim a foreign tax credit or deduction for foreign income taxes paid or accrued on income excluded under either exclusion. That matters because housing planning is often discussed as though it were separate from foreign tax credit mechanics. This answer is educational only and not tax advice. In practice, housing relief decisions need to be tested alongside the credit rules instead of being treated as a free extra layer.`,
            },
          ],
          keyTakeaways: [
            "Employer-provided housing amounts are generally handled through the housing exclusion, while self-employed amounts are generally handled through the housing deduction.",
            "The housing deduction is limited by the taxpayer's foreign earned income after the main exclusion amounts.",
            "An unused housing deduction carryover generally survives for only one following year.",
            "Foreign taxes allocable to excluded income are not fully creditable just because the taxpayer also claims housing relief.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-15T10:00:00.000Z",
        sources: [
          {
            label: "Publication 54",
            url: "https://www.irs.gov/publications/p54",
          },
          {
            label: "Instructions for Form 2555 (2025)",
            url: "https://www.irs.gov/instructions/i2555",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-eu-oss-quarterly-returns",
      title: "If a digital seller uses the EU OSS, what actually gets filed each quarter and why does it not replace every local VAT return?",
      body: "I want the operational answer, not 'OSS means one registration for everything.' Please explain the Member State of identification idea, the quarterly return cycle, and why businesses still get into trouble when they assume OSS has swallowed their domestic VAT obligations too.",
      author: {
        displayName: "Marta Nielsen",
        avatarSeed: "ind-marta-nielsen",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "EU VAT", "OSS", "digital services", "e-commerce"],
      postedAt: "2026-04-10T08:00:00.000Z",
      viewCount: 1617,
      answerCount: 1,
      status: "answered",
      seoTitle: "EU OSS quarterly VAT returns explained",
      seoDescription: "Official-source explanation of what businesses file through the EU OSS each quarter, how the Member State of identification works, and why OSS does not replace every domestic VAT return.",
    },
    answers: [
      {
        id: "a-ind-eu-oss-quarterly-returns",
        questionId: "q-ind-eu-oss-quarterly-returns",
        articleContent: {
          sections: [
            {
              heading: "OSS is built around one Member State of identification, not around a free pass from all VAT filing",
              body: `The European Commission's OSS portal says a taxable person using one of the schemes registers in a single Member State of identification. Your Europe explains the business-facing version of that same idea for both Union and Non-Union situations. That is the administrative simplification. It means one OSS access point, not the end of all other VAT compliance questions.`,
            },
            {
              heading: "The Union and Non-Union schemes use quarterly OSS returns, while the import scheme runs monthly",
              body: `The Commission's OSS guidance says the VAT return is quarterly in the Union and Non-Union schemes and monthly in the import scheme. Your Europe also describes the Union and Non-Union schemes as quarterly filing routes. So the key operational question is not whether there is a filing cycle, but which scheme applies and what supplies belong inside that scheme.`,
            },
            {
              heading: "OSS returns are additional, not a replacement for every domestic return the business may still owe",
              body: `The Commission states this quite directly: OSS VAT returns are additional and do not replace the domestic VAT return submitted under the Member State's normal rules. This answer is educational only and not tax advice. The clean workflow for a digital seller is to decide which supplies belong in OSS, file those on the scheme return, and separately keep domestic VAT obligations on the radar instead of assuming the OSS login has absorbed the whole map.`,
            },
          ],
          keyTakeaways: [
            "OSS works through one Member State of identification, not through multiple full VAT registrations for the same covered supplies.",
            "The Union and Non-Union schemes generally use quarterly returns, while the import scheme uses monthly returns.",
            "OSS applies to all supplies that fall under the chosen scheme in the relevant Member States.",
            "OSS returns are additional and do not automatically replace domestic VAT returns.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-12T10:00:00.000Z",
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
      id: "q-ind-netherlands-kor-threshold-exit",
      title: "For a Dutch small business using the KOR, what happens when turnover goes above EUR 20,000 and why is the triggering invoice itself fully taxable?",
      body: "I want the real Belastingdienst workflow. Please explain what the KOR actually switches off, why the threshold breach is immediate rather than something fixed next quarter, and why people get caught when they think only the excess above EUR 20,000 becomes taxable.",
      author: {
        displayName: "Jeroen Visser",
        avatarSeed: "ind-jeroen-visser",
        badge: "new-member",
      },
      category: "industry-tax",
      tags: ["industry", "Netherlands", "KOR", "VAT exemption", "small business"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 1498,
      answerCount: 1,
      status: "answered",
      seoTitle: "Netherlands KOR threshold breach explained",
      seoDescription: "Official-source explanation of what happens when a Dutch business on the KOR exceeds EUR 20,000 turnover, including immediate exit and the taxable triggering invoice.",
    },
    answers: [
      {
        id: "a-ind-netherlands-kor-threshold-exit",
        questionId: "q-ind-netherlands-kor-threshold-exit",
        articleContent: {
          sections: [
            {
              heading: "The KOR is a real VAT exemption, so it turns off more than just the VAT line on the sales invoice",
              body: `Belastingdienst says participation in the KOR means no VAT is charged to customers, no regular VAT return is filed, and no input VAT is reclaimed on business costs and investments. That matters because many small businesses think of KOR as merely a low-turnover discount. It is actually a different VAT posture with different trade-offs.`,
            },
            {
              heading: "Once turnover goes above EUR 20,000, the business must leave immediately and the threshold-breaking supply is fully taxable",
              body: `The KOR exit guidance is blunt about this. As soon as turnover exceeds EUR 20,000 in a calendar year, the business may no longer use the KOR and must deregister immediately. Belastingdienst also says the very supply or service that pushes turnover over the threshold no longer falls under the exemption, so VAT is charged on the full amount of that transaction, not merely on the slice above the limit.`,
            },
            {
              heading: "That is why KOR businesses need a live turnover watch rather than a year-end clean-up habit",
              body: `Belastingdienst also notes that a voluntary exit works differently: that route starts from the first day of the next filing period if notice is given in time. The forced exit on threshold breach is much harsher. This answer is educational only and not tax advice. The smart operating habit is to monitor turnover before the next invoice goes out rather than discovering after the fact that the triggering invoice should already have carried VAT.`,
            },
          ],
          keyTakeaways: [
            "The KOR means no VAT charged, no regular VAT returns, and no deduction of input VAT on costs and investments.",
            "If turnover exceeds EUR 20,000 in a calendar year, the business must leave the KOR immediately.",
            "The invoice or service that breaks the threshold is fully subject to normal VAT rules.",
            "The KOR requires active turnover tracking, not casual year-end estimation.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
        sources: [
          {
            label: "Wat betekent meedoen met de kleineondernemersregeling (KOR)?",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/kleineondernemersregeling/wat-betekent-meedoen-met-de-kleineondernemersregeling/",
          },
          {
            label: "Afmelden kleineondernemersregeling (KOR)",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/afmelden-kor",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-hk-profits-tax-two-tier-rates",
      title: "If a Hong Kong agency is taxable, how do the two-tier profits tax rates actually differ between a sole proprietor and a company?",
      body: "I want the practical Hong Kong answer, not a one-line rate quote. Please explain why the legal form matters, what the two-tier rates really apply to, and why agencies get misled when they assume every business is automatically on the same flat profits tax rate.",
      author: {
        displayName: "Caleb Wong",
        avatarSeed: "ind-caleb-wong",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "Hong Kong", "agency", "profits tax", "two-tier rates"],
      postedAt: "2026-04-12T08:00:00.000Z",
      viewCount: 1374,
      answerCount: 1,
      status: "answered",
      seoTitle: "Hong Kong two-tier profits tax rates explained",
      seoDescription: "Official-source explanation of how Hong Kong two-tier profits tax rates differ for unincorporated businesses and corporations.",
    },
    answers: [
      {
        id: "a-ind-hk-profits-tax-two-tier-rates",
        questionId: "q-ind-hk-profits-tax-two-tier-rates",
        articleContent: {
          sections: [
            {
              heading: "The first question is whether the business is actually chargeable, because rates apply only after that tax posture exists",
              body: `GovHK frames profits tax around persons carrying on a trade, profession or business in Hong Kong and being chargeable on profits. That sounds obvious, but it matters for agencies because rate talk starts too early in many conversations. The rate is only the second question after taxable profit exposure is already real.`,
            },
            {
              heading: "The two-tier rates differ depending on whether the business is incorporated or unincorporated",
              body: `GovHK's rates page separates the two structures clearly. For unincorporated businesses, the two-tier rates are 7.5% on assessable profits up to HKD 2 million and 15% above that. For corporations, the comparable two-tier rates are 8.25% up to HKD 2 million and 16.5% above that. So a sole proprietor and a limited company are not reading from the same profits tax line even when the business activity looks commercially similar.`,
            },
            {
              heading: "That is why agencies should not compress profits tax into a single slogan rate",
              body: `When an agency owner hears one rate in a podcast or incorporation ad, the missing detail is usually structure. GovHK's official materials make the split plain. This answer is educational only and not tax advice. The clean workflow is to identify whether the agency is operating as an unincorporated business or a corporation, then apply the correct two-tier scale to assessable profits instead of repeating a generic Hong Kong tax myth.`,
            },
          ],
          keyTakeaways: [
            "Profits tax rates matter only after the business is actually within the charge to profits tax.",
            "Hong Kong uses different two-tier rates for unincorporated businesses and corporations.",
            "For unincorporated businesses, the two-tier rates are 7.5% up to HKD 2 million and 15% above that.",
            "For corporations, the two-tier rates are 8.25% up to HKD 2 million and 16.5% above that.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-14T10:00:00.000Z",
        sources: [
          {
            label: "Profits Tax overview",
            url: "https://www.gov.hk/en/residents/taxes/profits/index.htm",
          },
          {
            label: "Profits Tax rates",
            url: "https://www.gov.hk/en/residents/taxes/taxfiling/taxrates/profitsrates.htm",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-us-seasonal-estimated-tax",
      title: "If a U.S. freelancer earns unevenly during the year, do estimated tax payments still have to be four equal amounts?",
      body: "I want the real IRS answer for seasonal or lumpy income. Please explain whether the quarterly system can flex, why paying monthly can still be fine, and when the annualized income installment method matters instead of simply dividing the year by four.",
      author: {
        displayName: "Brooke Tanner",
        avatarSeed: "ind-brooke-tanner",
        badge: "new-member",
      },
      category: "industry-tax",
      tags: ["industry", "IRS", "freelancer", "estimated tax", "seasonal income"],
      postedAt: "2026-04-13T08:00:00.000Z",
      viewCount: 1569,
      answerCount: 1,
      status: "answered",
      seoTitle: "Estimated tax for uneven freelance income explained",
      seoDescription: "IRS-based explanation of estimated tax payments for freelancers with uneven income, including monthly payments and the annualized income installment method.",
    },
    answers: [
      {
        id: "a-ind-us-seasonal-estimated-tax",
        questionId: "q-ind-us-seasonal-estimated-tax",
        articleContent: {
          sections: [
            {
              heading: "The IRS payment system is quarterly in structure, but not necessarily equal in substance",
              body: `The IRS estimated-tax page says taxpayers can pay weekly, bi-weekly or monthly if that is easier, so long as enough has been paid in by the end of the quarter. That is an important distinction. The system has quarterly due dates, but it does not force every self-employed person to fund the year with four rigid equal cash transfers in the real world.`,
            },
            {
              heading: "Equal quarterly payments are the easy method, not the only honest one",
              body: `Publication 505 explains that dividing estimated tax by four works best when income is basically the same throughout the year. The same publication then lays out the annualized income installment method for people whose income arrives unevenly. In other words, the IRS already recognises that seasonal businesses, project-based freelancers and other lumpy-income operators may not fit a straight-line payment pattern.`,
            },
            {
              heading: "The real compliance skill is matching cash timing to income timing before the penalty question appears",
              body: `Publication 505 also warns that if the annualized method is used, the taxpayer needs to support it through the proper calculation framework. This answer is educational only and not tax advice. The smart habit for a freelancer with uneven income is to refigure estimates as the year develops instead of letting a slow first half or a strong fourth quarter turn into an avoidable underpayment surprise.`,
            },
          ],
          keyTakeaways: [
            "Estimated tax due dates are quarterly, but payments do not have to be made only in four equal transfers.",
            "The IRS allows more frequent payments, such as monthly, as long as enough is paid by quarter-end.",
            "Equal quarterly installments make the most sense when income is fairly even across the year.",
            "Freelancers with uneven income may need the annualized income installment method instead of a simple divide-by-four approach.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-15T10:00:00.000Z",
        sources: [
          {
            label: "Estimated taxes",
            url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes",
          },
          {
            label: "Publication 505",
            url: "https://www.irs.gov/publications/p505",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-uk-marketplace-b2b-under-135",
      title: "On a UK marketplace order under GBP 135 to a VAT-registered business customer, does the platform still charge VAT?",
      body: "I want the HMRC workflow answer for the B2B edge case. Please explain what changes when the business customer gives a valid UK VAT number, why the platform can stop charging VAT in that situation, and why the overseas seller still cannot assume every UK compliance issue has disappeared.",
      author: {
        displayName: "Harper Sloan",
        avatarSeed: "ind-harper-sloan",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "UK VAT", "marketplace seller", "B2B", "reverse charge"],
      postedAt: "2026-04-14T08:00:00.000Z",
      viewCount: 1415,
      answerCount: 1,
      status: "answered",
      seoTitle: "UK marketplace B2B under GBP 135 VAT rule explained",
      seoDescription: "HMRC-based explanation of the B2B exception for marketplace sales under GBP 135 to UK VAT-registered business customers.",
    },
    answers: [
      {
        id: "a-ind-uk-marketplace-b2b-under-135",
        questionId: "q-ind-uk-marketplace-b2b-under-135",
        articleContent: {
          sections: [
            {
              heading: "The normal under-GBP-135 marketplace rule has a specific B2B exception",
              body: `HMRC says that for consignments valued at GBP 135 or less, the online marketplace generally charges and accounts for VAT at the point of sale. But the same guidance carves out the business-to-business case where the UK customer provides a valid UK VAT registration number. In that situation, the marketplace does not need to charge and account for VAT in the normal way.`,
            },
            {
              heading: "HMRC expects the invoice logic to change, not simply to disappear",
              body: `The marketplace guidance explains that the platform can add a note to the invoice such as a reverse-charge statement when the VAT-registered business customer has supplied the VAT number. This is operationally important because the commercial checkout may still feel like any other order, while the VAT treatment has shifted because the customer is a UK VAT-registered business rather than a consumer.`,
            },
            {
              heading: "That exception is narrow, so the overseas seller still has to watch the rest of the UK workflow",
              body: `HMRC's separate guidance for overseas sellers using marketplaces still points to registration and other VAT responsibilities depending on the facts. This answer is educational only and not tax advice. The safe habit is to verify the customer's VAT status, document the B2B treatment properly, and then keep import, stock-location and registration questions on the table instead of assuming one valid VAT number solves the entire UK side.`,
            },
          ],
          keyTakeaways: [
            "Marketplace sales under GBP 135 normally have VAT accounted for by the platform at the point of sale.",
            "That treatment changes when the customer is a UK VAT-registered business and provides a valid VAT number.",
            "The invoice may need reverse-charge style wording rather than normal consumer-style VAT treatment.",
            "The B2B exception does not automatically remove every other UK VAT obligation for the overseas seller.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-16T10:00:00.000Z",
        sources: [
          {
            label: "VAT and overseas goods sold to customers in the UK using online marketplaces",
            url: "https://www.gov.uk/guidance/vat-and-overseas-goods-sold-to-customers-in-the-uk-using-online-marketplaces",
          },
          {
            label: "Businesses selling goods in the UK using online marketplaces",
            url: "https://www.gov.uk/guidance/vat-overseas-businesses-using-an-online-marketplace-to-sell-goods-in-the-uk",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-pillar-two-impact-multinationals",
      title: "Why does Pillar Two matter for multinational groups without meaning every cross-border business suddenly faces a new 15% tax bill?",
      body: "I want the real OECD answer, not conference-slide panic. Please explain who the global minimum tax is aimed at, why it is about jurisdiction-by-jurisdiction minimum taxation for large groups, and why smaller international businesses should not read every Pillar Two headline as if it automatically rewrites their own tax position.",
      author: {
        displayName: "Marcus Flynn",
        avatarSeed: "xb-marcus-flynn",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "Pillar Two", "OECD", "minimum tax", "multinational groups"],
      postedAt: "2026-04-18T08:00:00.000Z",
      viewCount: 1712,
      answerCount: 1,
      status: "answered",
      seoTitle: "Pillar Two global minimum tax impact on multinationals explained",
      seoDescription: "OECD-based explanation of Pillar Two, including why it targets large multinational groups and why smaller cross-border businesses should not misread it.",
    },
    answers: [
      {
        id: "a-xb-pillar-two-impact-multinationals",
        questionId: "q-xb-pillar-two-impact-multinationals",
        articleContent: {
          sections: [
            {
              heading: "Pillar Two is built to make large multinational groups face a minimum tax floor in each jurisdiction",
              body: `OECD's GloBE page says the rules are designed to ensure that large multinational enterprise groups pay a minimum level of tax on the income arising in each jurisdiction where they operate. That means the regime is not just a new headline rate. It is a cross-border framework aimed at groups whose structure allows profits and effective tax rates to vary across countries in ways the minimum-tax system is meant to address.`,
            },
            {
              heading: "The practical audience is narrower than many alarming headlines suggest",
              body: `The implementation handbook keeps returning to the same real-world point: the rules are aimed at large multinational groups, not every exporter, founder or small holding structure that happens to operate internationally. That matters because Pillar Two commentary often sounds universal when the operational burden is actually concentrated on in-scope groups with serious scale, group reporting and jurisdiction-by-jurisdiction tax computations.`,
            },
            {
              heading: "Smaller cross-border businesses still need to watch the reform, but not to treat it as an automatic personal emergency",
              body: `The right response for a smaller international business is awareness, not borrowed panic. Pillar Two can still affect the jurisdictions they operate in and the way larger counterparties think about structure, but it is not a rule set that automatically lands on every international SME in the same way. This answer is educational only and not tax advice. The safe habit is to test scope first and only then move into the much more detailed minimum-tax mechanics.`,
            },
          ],
          keyTakeaways: [
            "Pillar Two is designed to impose a minimum-tax floor on large multinational groups.",
            "The framework works on a jurisdiction-by-jurisdiction basis rather than as one simple global headline rate.",
            "The rules are not aimed at every small cross-border business merely because it operates internationally.",
            "Scope should be tested first before assuming the detailed minimum-tax mechanics apply.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-20T10:00:00.000Z",
        sources: [
          {
            label: "Global Anti-Base Erosion Model Rules (Pillar Two)",
            url: "https://www.oecd.org/tax/beps/minimum-tax-implementation-handbook-pillar-two.htm",
          },
          {
            label: "Minimum Tax Implementation Handbook (Pillar Two)",
            url: "https://www.oecd.org/tax/beps/minimum-tax-implementation-handbook-pillar-two.pdf",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-country-by-country-reporting-basics",
      title: "What is country-by-country reporting actually for, and why do large groups file it with tax returns rather than as a public storytelling exercise?",
      body: "I want the technical answer in plain English. Please explain what a CbC report is meant to show, why the large-group revenue threshold matters, and why people misunderstand it when they treat it as either a tax bill by itself or a full public transparency substitute.",
      author: {
        displayName: "Clara Benson",
        avatarSeed: "xb-clara-benson",
        badge: "new-member",
      },
      category: "transfer-pricing",
      tags: ["cross-border", "CbC reporting", "OECD", "Form 8975", "multinationals"],
      postedAt: "2026-04-19T08:00:00.000Z",
      viewCount: 1638,
      answerCount: 1,
      status: "answered",
      seoTitle: "Country-by-country reporting explained for multinational groups",
      seoDescription: "OECD and IRS explanation of country-by-country reporting, including the EUR 750 million threshold and how Form 8975 works for U.S. parent entities.",
    },
    answers: [
      {
        id: "a-xb-country-by-country-reporting-basics",
        questionId: "q-xb-country-by-country-reporting-basics",
        articleContent: {
          sections: [
            {
              heading: "CbC reporting is built to give tax authorities a high-level map of where a large group earns profits and pays tax",
              body: `OECD's Action 13 material says large multinational groups must prepare a country-by-country report with aggregate data on the global allocation of income, profit, taxes paid and economic activity across the jurisdictions where they operate. That is the real purpose of the report. It is a tax-risk and transparency tool for administrations, not a substitute for transfer-pricing documentation and not an annual tax invoice by itself.`,
            },
            {
              heading: "The threshold matters because CbC reporting is not aimed at ordinary smaller international businesses",
              body: `OECD also says that substantially every multinational group with consolidated revenue of at least EUR 750 million is already within the reporting standard where the relevant legal framework is in place. The IRS translates that into the U.S. filing reality by saying U.S. parent entities of groups with USD 850 million or more of revenue in the prior annual reporting period file Form 8975 with their income tax return. That is why CbC reporting belongs in the large-group compliance conversation rather than the startup conversation.`,
            },
            {
              heading: "The filing mechanics reinforce that this is a structured tax-reporting regime, not a separate narrative document",
              body: `The IRS says Form 8975 is filed with the parent entity's income tax return and not as a stand-alone return. That procedural point matters because it shows how the report fits inside the broader tax administration system. This answer is educational only and not tax advice. The clean way to understand CbC reporting is as a large-group information return tied to the tax filing architecture and designed for cross-border risk assessment.`,
            },
          ],
          keyTakeaways: [
            "Country-by-country reporting gives tax authorities aggregate jurisdiction-by-jurisdiction data on income, profits, taxes and activity.",
            "It is aimed at large multinational groups rather than ordinary smaller international businesses.",
            "The OECD standard generally centers on groups with at least EUR 750 million of consolidated revenue.",
            "For U.S. parent entities, the report is filed on Form 8975 with the income tax return, not as a stand-alone filing.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-21T10:00:00.000Z",
        sources: [
          {
            label: "Country-by-country reporting for tax purposes",
            url: "https://www.oecd.org/tax/beps/country-by-country-reporting.htm",
          },
          {
            label: "US multinational enterprises",
            url: "https://www.irs.gov/businesses/international-businesses/us-multinational-enterprises",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-us-canada-snowbird-residency",
      title: "For Canada-U.S. snowbirds and commuters, why is the tax-residency answer more complicated than simply counting vacation months?",
      body: "I want the real cross-border answer, not campfire advice. Please explain why Canada still looks at residential ties, why the U.S. still has its own residency tests, and why some Canada-U.S. movement patterns create a treaty and evidence question instead of a simple 'I was only visiting' conclusion.",
      author: {
        displayName: "Elaine Mercer",
        avatarSeed: "xb-elaine-mercer",
        badge: "subscriber",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "Canada", "United States", "snowbird", "residency"],
      postedAt: "2026-04-20T08:00:00.000Z",
      viewCount: 1776,
      answerCount: 1,
      status: "answered",
      seoTitle: "Canada US snowbird tax residency explained",
      seoDescription: "CRA and IRS explanation of Canada-U.S. snowbird and commuter tax residency, including Canadian residential ties and the U.S. substantial presence rules.",
    },
    answers: [
      {
        id: "a-xb-us-canada-snowbird-residency",
        questionId: "q-xb-us-canada-snowbird-residency",
        articleContent: {
          sections: [
            {
              heading: "Canada starts with residential ties, not with a casual travel label",
              body: `CRA's residency guidance says a person who left Canada may still be considered a factual resident if they maintain residential ties with Canada while working temporarily outside Canada, commuting to work in the United States, or even spending part of the year in the United States for health reasons or on vacation. That matters because the Canadian side of the snowbird question is not solved merely by saying "I was away for the winter." The ties still have to be weighed.`,
            },
            {
              heading: "The U.S. side has its own residency framework and some specific counting exceptions",
              body: `Publication 519 shows the U.S. logic from the other direction. The substantial presence test uses counted days in the United States, but the publication also says regular commuting days from a residence in Canada or Mexico to work in the United States are not counted for that test if the regular-commuter condition is met. So even before treaty tie-breaker questions arise, the countries are already using different residency lenses.`,
            },
            {
              heading: "That is why snowbird cases turn into evidence questions, not just calendar folklore",
              body: `A person can look comfortably Canadian in one conversation and unexpectedly exposed to U.S. residency analysis in another, or vice versa. This answer is educational only and not tax advice. For Canada-U.S. snowbirds and commuters, the safe approach is to test Canadian residential ties and U.S. counted days together instead of relying on one half-remembered rule about being outside one country for part of the year.`,
            },
          ],
          keyTakeaways: [
            "CRA can still treat a person as factually resident if important residential ties to Canada remain.",
            "Spending part of the year in the United States does not by itself settle Canadian tax residency.",
            "The U.S. applies its own residency rules, including the substantial presence test.",
            "Regular commuting days from a Canadian residence to work in the United States can be excluded from the U.S. substantial presence count in the right facts.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-22T10:00:00.000Z",
        sources: [
          {
            label: "Determining your residency status",
            url: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/information-been-moved/determining-your-residency-status.html",
          },
          {
            label: "Publication 519",
            url: "https://www.irs.gov/publications/p519",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-xb-offshore-trust-reporting",
      title: "Why do offshore trust cases so quickly turn into a reporting problem for U.S. persons even before the final income-tax result is clear?",
      body: "I want the serious compliance answer, not a thriller-story version of offshore planning. Please explain why foreign trust rules catch owners, transferors and beneficiaries in different ways, why Forms 3520 and 3520-A matter so much, and why people get into danger when they think only about hidden income rather than about the reporting architecture.",
      author: {
        displayName: "Trevor Mills",
        avatarSeed: "xb-trevor-mills",
        badge: "new-member",
      },
      category: "cross-border-tax",
      tags: ["cross-border", "foreign trust", "Form 3520", "Form 3520-A", "IRS"],
      postedAt: "2026-04-21T08:00:00.000Z",
      viewCount: 1695,
      answerCount: 1,
      status: "answered",
      seoTitle: "Offshore trust reporting for U.S. persons explained",
      seoDescription: "IRS explanation of offshore trust reporting, including how Forms 3520 and 3520-A affect U.S. owners, transferors, beneficiaries, and foreign gifts.",
    },
    answers: [
      {
        id: "a-xb-offshore-trust-reporting",
        questionId: "q-xb-offshore-trust-reporting",
        articleContent: {
          sections: [
            {
              heading: "A foreign trust creates reporting duties for several different kinds of U.S. persons",
              body: `The IRS foreign-trust guidance says tax consequences can apply to U.S. persons treated as owners under the grantor trust rules and may also apply to beneficiaries and to the trust itself. The same page then moves quickly into information reporting because that is where many foreign-trust cases become dangerous even before the final tax analysis is fully worked out.`,
            },
            {
              heading: "Forms 3520 and 3520-A sit at the center of the architecture, but they are not the whole picture",
              body: `The IRS says Form 3520 is generally required when a U.S. person creates or transfers money or property to a foreign trust, receives distributions or certain loans or uncompensated use of property from a foreign trust, is treated as the U.S. owner under the grantor trust rules, or receives certain large gifts or bequests from foreign persons. The foreign-trust guidance also explains that foreign-trust cases can pull in Form 3520-A, Form 8938 and even FBAR reporting depending on the facts. That is why the reporting map broadens so fast.`,
            },
            {
              heading: "The practical mistake is treating the trust as the only filer when the U.S. person still has their own exposure",
              body: `A taxpayer can feel comforted by the existence of trustees, administrators or offshore paperwork and still be carrying direct U.S. reporting obligations. This answer is educational only and not tax advice. In cross-border trust cases, the safe move is to identify the taxpayer's role first, then test the information returns and annual statements that role requires rather than assuming the structure is self-reporting somewhere else.`,
            },
          ],
          keyTakeaways: [
            "Foreign trust issues can affect U.S. owners, transferors and beneficiaries in different ways.",
            "Form 3520 covers several types of foreign-trust transactions and certain large foreign gifts or bequests.",
            "Form 3520-A can also be required where a U.S. person is treated as the owner of a foreign trust.",
            "Foreign-trust cases can spill into Form 8938 and FBAR reporting as well as income-tax consequences.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-23T10:00:00.000Z",
        sources: [
          {
            label: "Foreign trust reporting requirements and tax consequences",
            url: "https://www.irs.gov/businesses/international-businesses/foreign-trust-reporting-requirements-and-tax-consequences",
          },
          {
            label: "About Form 3520, Annual Return To Report Transactions With Foreign Trusts and Receipt of Certain Foreign Gifts",
            url: "https://www.irs.gov/forms-pubs/about-form-3520",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-us-firpta-foreign-seller",
      title: "For a foreign seller of U.S. real estate, why does FIRPTA feel like a closing problem first and an income-tax problem second?",
      body: "I want the operational IRS answer, not a vague warning that withholding may apply. Please explain why the buyer usually withholds on the amount realised rather than the gain, why Forms 8288 and 8288-A matter so much at closing, and why the seller still has a later return-stage job if they want proper credit or refund treatment.",
      author: {
        displayName: "Monica Hale",
        avatarSeed: "ind-monica-hale",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "real estate", "FIRPTA", "foreign seller", "IRS"],
      postedAt: "2026-04-18T08:00:00.000Z",
      viewCount: 1769,
      answerCount: 1,
      status: "answered",
      seoTitle: "FIRPTA withholding for foreign sellers of U.S. real estate explained",
      seoDescription: "IRS-based explanation of FIRPTA withholding for foreign real estate sellers, including the 15% amount-realized rule and Forms 8288 and 8288-A.",
    },
    answers: [
      {
        id: "a-ind-us-firpta-foreign-seller",
        questionId: "q-ind-us-firpta-foreign-seller",
        articleContent: {
          sections: [
            {
              heading: "FIRPTA hits the closing table because the buyer is usually the withholding agent",
              body: `The IRS FIRPTA page says persons purchasing U.S. real property interests from foreign persons are generally required to withhold 15% of the amount realized on the disposition. That is why foreign sellers often feel the issue as a closing shock. The withholding is not waiting politely for the annual return. It is built into the transaction mechanics through the buyer and settlement side.`,
            },
            {
              heading: "The withholding base is not the same thing as the seller's final taxable gain",
              body: `That distinction matters a lot. The IRS explains that the withholding is on the amount realized, which includes cash, the fair market value of other property transferred and certain liabilities. So the closing withholding number can feel much larger than the seller's eventual tax liability would suggest if they are thinking only in gain terms.`,
            },
            {
              heading: "The paperwork after closing still matters because that is how the seller secures credit or refund treatment",
              body: `The IRS says buyers generally use Forms 8288 and 8288-A to report and pay the withheld tax, and the stamped Form 8288-A supports the seller's later return position. The same guidance warns that TIN problems can complicate that credit process. This answer is educational only and not tax advice. For foreign-property sales, the safe habit is to treat FIRPTA as both a closing workflow and a later return-credit workflow, not as one or the other.`,
            },
          ],
          keyTakeaways: [
            "Under FIRPTA, the buyer is generally the withholding agent on a foreign seller's U.S. real estate sale.",
            "The general withholding rate is 15% of the amount realized, not 15% of the gain.",
            "The amount realized can include more than the cash price alone.",
            "Forms 8288 and 8288-A are central to reporting the withholding and later claiming credit.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-20T10:00:00.000Z",
        sources: [
          {
            label: "FIRPTA withholding",
            url: "https://www.irs.gov/individuals/international-taxpayers/firpta-withholding",
          },
          {
            label: "Reporting and paying tax on U.S. real property interests",
            url: "https://www.irs.gov/individuals/international-taxpayers/reporting-and-paying-tax-on-us-real-property-interests",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-crypto-staking-rewards",
      title: "For a crypto staker, when do staking rewards become taxable income under the current IRS view?",
      body: "I want the real IRS answer, not a forum fight. Please explain why proof-of-stake rewards are treated as income when dominion and control is obtained, why valuation timing matters, and why people go wrong when they wait to report until they later sell the tokens.",
      author: {
        displayName: "Devon Price",
        avatarSeed: "ind-devon-price",
        badge: "new-member",
      },
      category: "industry-tax",
      tags: ["industry", "crypto", "staking", "digital assets", "IRS"],
      postedAt: "2026-04-19T08:00:00.000Z",
      viewCount: 1833,
      answerCount: 1,
      status: "answered",
      seoTitle: "IRS tax treatment of crypto staking rewards explained",
      seoDescription: "IRS explanation of crypto staking rewards, including dominion-and-control timing, valuation, and why later sale is not the first tax event.",
    },
    answers: [
      {
        id: "a-ind-crypto-staking-rewards",
        questionId: "q-ind-crypto-staking-rewards",
        articleContent: {
          sections: [
            {
              heading: "The IRS treats staking rewards as income when the taxpayer gains dominion and control over them",
              body: `Revenue Ruling 2023-14 is the clearest official statement on the timing point. It says the fair market value of validation rewards is included in gross income in the taxable year when the taxpayer gains dominion and control over those rewards. That means the tax story starts before any later disposal if the taxpayer can already sell, exchange or otherwise use the rewards.`,
            },
            {
              heading: "Valuation timing matters because the income is measured when control is obtained, not whenever the owner notices it later",
              body: `The ruling ties the income amount to the fair market value on the date and time dominion and control arises. IRS's digital-assets page reinforces the classification point by directing taxpayers to report ordinary income from staking and similar items on Schedule 1 when that is the appropriate form. So the taxpayer is not just deciding whether staking is taxable. They also need a timestamped value logic.`,
            },
            {
              heading: "Waiting until the later sale mixes two different tax events into one bad habit",
              body: `People often collapse the receipt of rewards and the later disposal of the asset into one moment because that feels simpler. IRS guidance points the other way. This answer is educational only and not tax advice. For staking, the clean habit is to record the value when rewards become controllable and then separately track any later gain or loss when those units are sold or exchanged.`,
            },
          ],
          keyTakeaways: [
            "Under current IRS guidance, staking rewards become taxable when the taxpayer gains dominion and control over them.",
            "The income amount is measured by fair market value at that time.",
            "IRS treats the receipt of rewards and the later disposal of the tokens as different tax events.",
            "Good records need both timing and valuation, not just a later sale price.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-21T10:00:00.000Z",
        sources: [
          {
            label: "Internal Revenue Bulletin: 2023-33",
            url: "https://www.irs.gov/irb/2023-33_IRB",
          },
          {
            label: "Digital assets",
            url: "https://www.irs.gov/filing/digital-assets",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-us-gig-platform-1099k",
      title: "For a gig worker or freelancer, why is Form 1099-K only the start of the tax conversation instead of the answer?",
      body: "I want the practical IRS answer for app-based and platform work. Please explain why gig income is taxable even when no form arrives, why a 1099-K does not do the recordkeeping job for the worker, and why platform income usually belongs in the self-employment workflow rather than in a vague 'miscellaneous money' bucket.",
      author: {
        displayName: "Kayla Morgan",
        avatarSeed: "ind-kayla-morgan",
        badge: "subscriber",
      },
      category: "industry-tax",
      tags: ["industry", "gig economy", "1099-K", "freelancer", "IRS"],
      postedAt: "2026-04-20T08:00:00.000Z",
      viewCount: 1674,
      answerCount: 1,
      status: "answered",
      seoTitle: "Gig worker 1099-K tax rules explained",
      seoDescription: "IRS explanation of gig worker and freelancer Form 1099-K issues, including why income is taxable even without a form and why Schedule C still matters.",
    },
    answers: [
      {
        id: "a-ind-us-gig-platform-1099k",
        questionId: "q-ind-us-gig-platform-1099k",
        articleContent: {
          sections: [
            {
              heading: "Gig income is taxable whether or not the platform paperwork feels complete",
              body: `The IRS gig-economy center says income from the gig economy must be reported on a tax return even if it is part-time, side income or not reported on an information return form. That is the first habit correction many workers need. The tax duty attaches to the income, not only to the arrival of a form in January.`,
            },
            {
              heading: "A Form 1099-K is reporting evidence, not a full profit-and-loss statement",
              body: `The IRS 1099-K guidance says a gig worker, freelancer, hobby seller or other self-employed person is generally treated as a sole proprietor and should report Form 1099-K payment information on Schedule C. That matters because the platform statement does not automatically classify expenses, corrections, business model details or the rest of the recordkeeping job. It is one input into the tax computation, not a finished return.`,
            },
            {
              heading: "The clean platform-tax workflow starts with records, not with waiting to see what the app reports",
              body: `That is why gig workers get trapped when they let the platform become the accounting department. IRS guidance keeps pushing them back toward recordkeeping and self-employment logic. This answer is educational only and not tax advice. For platform work, the safe habit is to track gross receipts, expenses and payment records throughout the year and then use the information returns as cross-checks instead of as substitutes for the books.`,
            },
          ],
          keyTakeaways: [
            "Gig economy income is taxable even if no information return arrives.",
            "Form 1099-K is not the whole tax answer for a freelancer or gig worker.",
            "IRS generally points self-employed gig workers toward Schedule C.",
            "Platform workers need their own records instead of relying only on the app's reporting forms.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-22T10:00:00.000Z",
        sources: [
          {
            label: "Gig economy tax center",
            url: "https://www.irs.gov/businesses/gig-economy-tax-center",
          },
          {
            label: "What to do with Form 1099-K",
            url: "https://www.irs.gov/businesses/what-to-do-with-form-1099-k",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-ind-eu-small-seller-vat-exemption",
      title: "For a small EU online seller, when does the new cross-border SME VAT exemption help and when does normal e-commerce VAT still take over?",
      body: "I want the operational EU answer, not a generic 'one stop shop' slogan. Please explain the new cross-border small-business exemption, why the EUR 100,000 Union turnover cap matters, and why some sellers still end up back in ordinary VAT or OSS territory even though they thought the small-business route would protect them everywhere.",
      author: {
        displayName: "Nora Falk",
        avatarSeed: "ind-nora-falk",
        badge: "new-member",
      },
      category: "industry-tax",
      tags: ["industry", "e-commerce", "EU VAT", "SME exemption", "online seller"],
      postedAt: "2026-04-21T08:00:00.000Z",
      viewCount: 1587,
      answerCount: 1,
      status: "answered",
      seoTitle: "EU small seller cross-border VAT exemption explained",
      seoDescription: "EU VAT explanation for small online sellers, including the EUR 100,000 Union threshold, single home-country registration, and when OSS still matters.",
    },
    answers: [
      {
        id: "a-ind-eu-small-seller-vat-exemption",
        questionId: "q-ind-eu-small-seller-vat-exemption",
        articleContent: {
          sections: [
            {
              heading: "The new cross-border SME exemption is real, but it has narrow entry conditions",
              body: `Your Europe says that if an EU small business keeps total Union-wide turnover under EUR 100,000 and also stays under the national threshold in each Member State where it operates, it can apply the cross-border VAT exemption on sales within the EU. That is a meaningful compliance simplification for smaller online sellers, but it is not a universal pass for everyone who sells digitally across borders.`,
            },
            {
              heading: "The seller uses one home-country route, but that does not erase the threshold discipline",
              body: `Your Europe also says businesses using the scheme register only once in their home country and then report all EU business activity in a single quarterly report there. The European Commission's VAT-for-businesses page adds that, from 1 January 2025, the new SME VAT scheme opens the exemption to eligible small businesses established in other Member States. So the regime is clearly designed to reduce compliance costs, but only while the seller remains inside the eligibility fence.`,
            },
            {
              heading: "Once the seller falls outside the exemption, ordinary VAT or OSS logic comes back into view",
              body: `The Commission's same page reminds businesses that the VAT One Stop Shop is still the route for cross-border B2C e-commerce activities that do not stay inside the exemption. This answer is educational only and not tax advice. The practical habit for an EU online seller is to watch Union-wide turnover, national thresholds and business growth together instead of assuming a small-business exemption chosen today will automatically scale with the business tomorrow.`,
            },
          ],
          keyTakeaways: [
            "The cross-border SME VAT exemption can help eligible small EU sellers if Union-wide turnover stays under EUR 100,000 and national thresholds are respected.",
            "The scheme uses one home-country registration and one quarterly report for covered activity.",
            "The new cross-border SME framework has been opened to eligible businesses from other Member States from 1 January 2025.",
            "If the seller falls outside the exemption, ordinary VAT obligations or OSS can come back into play.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-23T10:00:00.000Z",
        sources: [
          {
            label: "VAT exemptions for SMEs in cross-border and domestic sales",
            url: "https://europa.eu/youreurope/business/taxation/vat/vat-exemptions/index_en.htm",
          },
          {
            label: "VAT for businesses",
            url: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-businesses_en",
          },
        ],
      },
    ],
  },
];
