// Seed Q&A content for the community section
// Each thread is a real question (sourced from Reddit/forums) + expert answer

import type { QAThread, QAAuthor } from "./qa-catalog";

// Import topic-specific Q&A content files
import { FIRPTA_THREADS } from "./qa-content-firpta";
import { STATE_TAX_THREADS } from "./qa-content-state-tax";
import { ECOMMERCE_THREADS } from "./qa-content-ecommerce";
import { CRYPTO_THREADS } from "./qa-content-crypto";
import { ESTATE_GIFT_THREADS } from "./qa-content-estate";
import { AML_THREADS } from "./qa-content-aml";
import { PAYROLL_THREADS } from "./qa-content-payroll";
import { GILTI_THREADS } from "./qa-content-gilti";
import { TRANSFER_PRICING_THREADS } from "./qa-content-transfer-pricing";
import { EXPATRIATION_THREADS } from "./qa-content-expatriation";
import { FORMS_THREADS } from "./qa-content-forms";
import { IRC_THREADS } from "./qa-content-irc";
import { WITHHOLDING_THREADS } from "./qa-content-withholding";
import { PENALTIES_THREADS } from "./qa-content-penalties";
import { COUNTRY_THREADS } from "./qa-content-countries";
import { VISA_THREADS } from "./qa-content-visa";
import { TAX_PLANNING_THREADS } from "./qa-content-tax-planning";
import { BANKING_THREADS } from "./qa-content-banking";
import { GLOBAL_TAX_THREADS } from "./qa-content-global";

// New Codex-generated Tier 1 country Q&A content (all in one file due to cross-references)
import {
  GB_TAX_THREADS,
  CA_TAX_THREADS,
  DE_TAX_THREADS,
  FR_TAX_THREADS,
  JP_TAX_THREADS,
  KR_TAX_THREADS,
  IN_TAX_THREADS,
  BR_TAX_THREADS,
  AU_TAX_THREADS,
  SG_TAX_THREADS,
} from "./qa-content-tier1";

// New Codex-generated Tier 2 country Q&A content
import { HK_TAX_THREADS } from "./qa-content-hk";
import { IE_TAX_THREADS } from "./qa-content-ie";
import { AE_TAX_THREADS } from "./qa-content-ae";
import { NL_TAX_THREADS } from "./qa-content-nl";
import { EE_TAX_THREADS } from "./qa-content-ee";
import { CH_TAX_THREADS } from "./qa-content-ch";
import { MX_TAX_THREADS } from "./qa-content-mx";
import { ID_TAX_THREADS } from "./qa-content-id";

// New Codex-generated cross-border and industry Q&A content
import { CROSS_BORDER_THREADS as NEW_CROSS_BORDER_THREADS } from "./qa-content-cross-border-new";
import { INDUSTRY_THREADS as NEW_INDUSTRY_THREADS } from "./qa-content-industry-new";

const OFFICIAL_AUTHOR: QAAuthor = {
  displayName: "ForeignLLCTax Official",
  avatarSeed: "rippa-official",
  isOfficial: true,
  badge: "expert",
};

const ORIGINAL_THREADS: QAThread[] = [

  // =====================================================
  // Q&A #1: Form 5472 Address Fields
  // Source: Reddit r/tax thread about address on pro forma 1120
  // =====================================================
  {
    question: {
      id: "q-5472-address-fields",
      isFeatured: true,
      title: "Which address should I use on Form 5472 and pro forma 1120 — registered agent or personal foreign address?",
      body: "I'm a non-resident owner of a U.S. single-member LLC (disregarded entity) and I'm preparing my annual Form 5472 filing with the pro forma Form 1120. My real business address is overseas, but international mail delivery is unreliable — I've had IRS letters get lost before.\n\nShould I list my registered agent's address as the business address on Form 1120? Or should I use some kind of \"care of\" (C/O) format? I've seen conflicting advice online — one person says use the registered agent address since it's the LLC's official state address, another says C/O isn't even in the instructions.\n\nAlso, do the addresses on Form 1120 and Form 5472 Part I need to match exactly? I don't want mismatched addresses to flag my return for manual review.\n\nAny guidance from people who've actually dealt with this would be really helpful.",
      author: {
        displayName: "Marcus T.",
        avatarSeed: "llc-owner-abroad-2025",
        badge: "new-member" as const ,
      },
      category: "form-5472",
      tags: ["form 5472", "form 1120", "address", "registered agent", "foreign owner", "disregarded entity", "C/O address"],
      postedAt: "2026-03-28T14:22:00Z",
      viewCount: 1847,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 5472 Address: Registered Agent vs Foreign Address on Pro Forma 1120",
      seoDescription: "Expert guidance on which address to use on Form 5472 and pro forma Form 1120 for foreign-owned U.S. disregarded entities. IRS rules on registered agent addresses, C/O formatting, and keeping addresses consistent.",
    },
    answers: [
      {
        id: "a-5472-address-fields-1",
        questionId: "",
      videoId: "phJ7MnpWcBg",
        articleContent: {
          sections: [
            {
              heading: "The IRS explicitly says: do not use your registered agent address as your business address",
              body: "This is one of the most common mistakes. The Form 1120 instructions under \"Name and Address\" explicitly tell filers not to use the address of the registered agent for the state of incorporation. They give the example of a corporation incorporated in Delaware or Nevada whose actual principal office is in a different state.\n\nYour registered agent address is where state filings are received — it is not your LLC's principal place of business. Using it as such contradicts the IRS instructions directly."
            },
            {
              heading: "The IRS-approved solution: use \"C/O\" (care of) formatting",
              body: "The Form 1120 instructions explicitly provide a mechanism for exactly your situation. If the corporation receives its mail \"in care of\" a third party, the filer should write \"C/O\" on the street address line followed by the third party's name and their street address or P.O. box.\n\nThe instructions give examples like routing mail through an accountant or attorney. This format is officially sanctioned by the IRS and is the correct way to ensure reliable mail delivery when your actual principal office is overseas.\n\nSo contrary to what one commenter said about C/O \"not being in the instructions\" — it is explicitly described in the Form 1120 instructions."
            },
            {
              heading: "How to structure the address correctly",
              body: "Here is the compliance-forward approach:\n\n1. The factual anchor is your real principal office or place of business (even if it's overseas).\n\n2. Use \"C/O\" formatting to route IRS mail through a reliable U.S. third party who can receive and forward correspondence.\n\n3. On the Form 1120 address block, enter:\n   - Line 1: Your LLC's legal name\n   - Street address line: C/O [Third Party Name], [Their Street Address or P.O. Box]\n   - City, State, ZIP\n\nThe \"third party\" can be your registered agent — but only if they contractually agree to accept and forward IRS mail. Many filers instead choose a tax professional, accountant, or dedicated mail-handling provider as the C/O recipient, since registered agents may not forward IRS correspondence."
            },
            {
              heading: "Do Form 1120 and Form 5472 Part I addresses need to match?",
              body: "The IRS instructions do not state a formal rule that these addresses must be identical. However, since Form 5472 is filed attached to the pro forma Form 1120, keeping entity-identifying information consistent (name, EIN, and address) across both forms is strongly recommended.\n\nInconsistencies won't automatically trigger an audit, but they can cause processing confusion or misdelivered correspondence. The practical best practice is: use the same C/O address on both the 1120 header and Form 5472 Part I.\n\nForm 5472 Part II is different — that's where you enter the foreign owner's personal address (your overseas address). Having a foreign address in Part II and a U.S. C/O address in Part I is perfectly normal for this filing type."
            },
            {
              heading: "Why reliable mail delivery matters: the $25,000 penalty escalation",
              body: "For foreign-owned U.S. disregarded entities, the initial penalty for failure to file Form 5472 is $25,000. But penalties can escalate if you fail to respond to IRS notices within specific timeframes.\n\nIf the IRS sends a notice that starts a 90-day response clock and your mail delivery is unreliable, you could miss the deadline entirely — turning a $25,000 problem into $50,000 or more (additional $25,000 for each 30-day period the failure continues after notice).\n\nThis is exactly why the IRS provides the C/O mechanism: so filers with unreliable mail can route correspondence through someone who will actually receive and act on it."
            },
            {
              heading: "Additional tools to keep your address current with the IRS",
              body: "Beyond the address on your annual filing, the IRS provides administrative channels to manage your mailing information:\n\nForm 8822-B: Use this form to notify the IRS of changes to your business mailing address or location. This updates your address across IRS systems, not just on one tax return.\n\nForm 2848 (Power of Attorney): Authorizes a representative to act on your behalf and includes an option to have copies of all IRS notices sent to the representative.\n\nForm 8821 (Tax Information Authorization): Allows a designated person to receive and inspect your confidential tax information for specified matters and periods.\n\nIf you want a trusted person (like your CPA or tax preparer) to receive IRS communications about your LLC, these authorization forms provide additional coverage beyond the C/O address on the return itself."
            },
            {
              heading: "Correcting common advice from online forums",
              body: "Several pieces of advice commonly given on Reddit and tax forums about this topic are either incomplete or incorrect:\n\nClaim: \"Use the address from your EIN application.\" This is only safe if that address is also consistent with the Form 1120 instructions — meaning it represents your principal office or is properly formatted with C/O. The EIN application address and the Form 1120 address serve different purposes.\n\nClaim: \"Use the registered agent address because it's the LLC's official address with the state.\" This directly contradicts the Form 1120 instructions, which explicitly say not to use the registered agent address for the state of incorporation.\n\nClaim: \"C/O isn't in the instructions.\" This is factually incorrect — the Form 1120 instructions explicitly describe and authorize C/O formatting.\n\nClaim: \"Mismatched addresses will flag your return for manual review.\" This cannot be verified from IRS materials, though consistency is a reasonable best practice."
            }
          ],
          keyTakeaways: [
            "Do NOT use your registered agent address as the business address — the IRS Form 1120 instructions explicitly prohibit this",
            "Use \"C/O\" (care of) formatting to route mail through a reliable third party — this is explicitly authorized in the instructions",
            "Keep addresses consistent between Form 1120 and Form 5472 Part I for clean processing",
            "Form 5472 Part II is for the foreign owner's personal address — a foreign address here is expected",
            "Unreliable mail delivery can turn a $25,000 penalty into $50,000+ if you miss IRS response deadlines",
            "Use Form 8822-B to update your address with the IRS, and Form 2848/8821 to authorize representatives"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-29T09:15:00Z",
        sources: [
          { label: "Form 1120 Instructions — Name and Address", url: "https://www.irs.gov/instructions/i1120" },
          { label: "Form 5472 Instructions (Rev. 12/2024)", url: "https://www.irs.gov/instructions/i5472" },
          { label: "Form 8822-B — Change of Address", url: "https://www.irs.gov/forms-pubs/about-form-8822-b" },
          { label: "Form 2848 — Power of Attorney", url: "https://www.irs.gov/forms-pubs/about-form-2848" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #2: Zero Income LLC Filing Requirement
  // =====================================================
  {
    question: {
      id: "q-5472-zero-income",
      isFeatured: true,
      title: "My foreign-owned LLC had zero income this year. Do I still need to file Form 5472?",
      body: "I formed a single-member LLC in Wyoming through Stripe Atlas about a year ago. I'm a non-US person living in Germany. The LLC hasn't made any money yet — it's basically dormant. I did put about $2,000 into the bank account to keep it open and paid for a registered agent.\n\nDo I really need to file Form 5472 + pro forma 1120 if my LLC earned nothing? The penalty is $25,000 which seems insane for a company with zero revenue. Some people online say you don't need to file if there's no income, but others say you always have to. Which is it?",
      author: {
        displayName: "Sarah K.",
        avatarSeed: "startup-de-2025",
        badge: "new-member" as const ,
      },
      category: "form-5472",
      tags: ["form 5472", "zero income", "dormant LLC", "penalty", "filing requirement", "Stripe Atlas"],
      postedAt: "2026-03-15T10:45:00Z",
      viewCount: 3241,
      answerCount: 1,
      status: "answered",
      seoTitle: "Foreign-Owned LLC Zero Income: Do You Still Need to File Form 5472",
      seoDescription: "Must you file Form 5472 if your foreign-owned LLC had zero income? Yes — filing is triggered by reportable transactions, not income. Capital contributions and registered agent fees count.",
    },
    answers: [
      {
        id: "a-5472-zero-income-1",
        questionId: "",
      videoId: "MPPazOfObwU",
        articleContent: {
          sections: [
            {
              heading: "Yes, you almost certainly need to file — the trigger is transactions, not income",
              body: "The filing requirement for Form 5472 is not based on whether your LLC earned income. It is triggered by having reportable transactions with a related party (which includes you, the foreign owner).\n\nIn your case, you deposited $2,000 into the LLC's bank account. That capital contribution is a reportable transaction under Form 5472 Part V. You also paid for a registered agent — if that payment came from your personal funds on behalf of the LLC, that is also a reportable transaction.\n\nThe IRS Form 5472 instructions explicitly include \"contributions to and distributions from the entity\" as examples of reportable transactions for foreign-owned U.S. disregarded entities."
            },
            {
              heading: "What counts as a reportable transaction",
              body: "For a foreign-owned single-member LLC, reportable transactions include:\n\n- Capital contributions (money you put into the LLC's bank account)\n- Distributions (money the LLC pays back to you)\n- Paying LLC expenses from personal funds (registered agent fees, software subscriptions, etc.)\n- Loans between you and the LLC\n- Payments for services, rent, or royalties\n- Formation-related transfers (initial setup costs)\n\nEven the act of forming the LLC and depositing $1 to open a bank account creates a reportable transaction. The only way to avoid filing is if there were truly zero transactions of any kind between you and the LLC during the entire tax year — which is almost impossible if the LLC is actively maintaining a bank account."
            },
            {
              heading: "The $25,000 penalty is real and enforced",
              body: "The penalty for failure to file Form 5472 is $25,000 per form, per year. This penalty applies regardless of whether the LLC had any income. The IRS has been actively enforcing this penalty, particularly as more foreign entrepreneurs form U.S. LLCs through platforms like Stripe Atlas, doola, and Firstbase.\n\nFiling a substantially incomplete Form 5472 is treated the same as not filing at all — the $25,000 penalty still applies.\n\nIf the IRS notifies you of the failure and you still don't file, additional penalties of $25,000 per 30-day period accrue after a 90-day grace period."
            },
            {
              heading: "What to file: the pro forma Form 1120 + Form 5472 package",
              body: "As a foreign-owned disregarded entity, you file:\n\n1. A pro forma Form 1120 — write \"Foreign-owned U.S. DE\" across the top. Only complete the name, address, EIN, and date of incorporation. All income/tax lines are zero or blank.\n\n2. Form 5472 attached — report the LLC's identifying information (Part I), your information as the foreign owner (Part II), related party details (Part III), and the reportable transactions in Parts IV and V.\n\n3. Mail to the dedicated address: IRS, 1973 Rulon White Blvd, M/S 6112, Attn: PIN Unit, Ogden, UT 84201 (or fax to 855-887-7737).\n\nThe due date is April 15 for calendar-year filers. File Form 7004 by April 15 for an automatic 6-month extension to October 15."
            },
            {
              heading: "What if you've already missed previous years?",
              body: "If you formed your LLC a year ago and haven't filed, you should file as soon as possible — before the IRS contacts you. Voluntary compliance before IRS notification significantly strengthens your position if you need to request penalty abatement.\n\nFor prior years where you missed the filing, you can submit late returns with a reasonable cause statement explaining why you filed late (for example, that you were unaware of the filing requirement for a dormant LLC). Not knowing about the requirement is generally not sufficient on its own, but combined with voluntary filing and good faith effort, it can support your case.\n\nConsider working with a tax professional experienced in international filings if you have multiple years of unfiled returns."
            }
          ],
          keyTakeaways: [
            "Filing is triggered by reportable transactions, NOT income — your $2,000 deposit is a reportable transaction",
            "Capital contributions, registered agent payments, and formation costs all count as reportable transactions",
            "The $25,000 penalty applies even for zero-income LLCs — filing a blank form also triggers the penalty",
            "File the pro forma 1120 + Form 5472 to the dedicated Ogden, UT address or fax number",
            "If you've missed previous years, file voluntarily ASAP — before the IRS contacts you",
            "Request an extension (Form 7004) if you can't file by April 15 — it's free and automatic"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-16T08:30:00Z",
        sources: [
          { label: "Form 5472 Instructions (Rev. 12/2024)", url: "https://www.irs.gov/instructions/i5472" },
          { label: "About Form 5472", url: "https://www.irs.gov/forms-pubs/about-form-5472" },
          { label: "Form 7004 — Automatic Extension", url: "https://www.irs.gov/forms-pubs/about-form-7004" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #3: EIN for Foreign Owner
  // =====================================================
  {
    question: {
      id: "q-ein-foreign-owner",
      title: "How do I get an EIN for my foreign-owned LLC if I don't have a Social Security Number?",
      body: "I just formed an LLC in Delaware and I need an EIN to open a bank account and file taxes. But I'm not a U.S. citizen or resident — I don't have an SSN or ITIN. The IRS online application asks for an SSN. How do foreign owners actually get an EIN?\n\nAlso, how long does it take? My bank is pressuring me to provide the EIN quickly.",
      author: {
        displayName: "David Chen",
        avatarSeed: "new-llc-2026",
        badge: "new-member" as const ,
      },
      category: "ein-itin",
      tags: ["EIN", "form SS-4", "foreign owner", "no SSN", "ITIN", "bank account"],
      postedAt: "2026-02-20T16:30:00Z",
      viewCount: 2156,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to Get an EIN Without SSN: Foreign-Owned LLC Guide",
      seoDescription: "Step-by-step guide for foreign LLC owners to get an EIN without an SSN or ITIN. How to file Form SS-4 by fax or mail, expected wait times, and common pitfalls.",
    },
    answers: [
      {
        id: "a-ein-foreign-owner-1",
        questionId: "q-ein-foreign-owner",
        articleContent: {
          sections: [
            {
              heading: "Foreign owners must file Form SS-4 by fax or mail — the online application won't work",
              body: "The IRS online EIN application (available at irs.gov) requires the responsible party to have a valid U.S. SSN or ITIN. Since you don't have either, you cannot use the online system.\n\nInstead, you must file Form SS-4 (Application for Employer Identification Number) either by fax or mail. This is the only path available to foreign applicants without a U.S. tax identification number."
            },
            {
              heading: "How to file Form SS-4 by fax (faster option)",
              body: "Fax your completed Form SS-4 to the IRS at (855) 215-1627 (if you're outside the U.S., fax to the international number listed in the instructions).\n\nProcessing time by fax is typically 4-7 business days. The IRS will fax back a confirmation with your EIN, or they may call the phone number you listed on the form.\n\nMake sure your fax is sent at 300 DPI or higher resolution for clear readability. Include all pages of the form even if some sections are blank."
            },
            {
              heading: "How to file Form SS-4 by mail (slower option)",
              body: "Mail your completed Form SS-4 to the address listed in the instructions for your state (typically the IRS office in Cincinnati or Ogden).\n\nProcessing time by mail is 4-8 weeks. The IRS will mail back a CP 575 notice with your EIN.\n\nGiven your bank's pressure, faxing is strongly recommended over mail."
            },
            {
              heading: "Key fields on Form SS-4 for foreign LLC owners",
              body: "Line 1: Your LLC's legal name exactly as it appears on your Articles of Organization.\n\nLine 3: Name of the responsible party — this is you, the foreign owner. Enter your full legal name.\n\nLine 7a-7b: The responsible party's SSN or ITIN. Since you have neither, enter \"Foreign\" or leave blank and attach a note explaining that you are a foreign person without a U.S. tax ID.\n\nLine 9a: Type of entity — check \"LLC\" and enter the number of members (1 for a single-member LLC).\n\nLine 10: Reason for applying — check \"Started new business.\"\n\nLine 18: Check \"Yes\" if you have previously applied for an EIN for this entity. The IRS takes duplicate applications seriously."
            },
            {
              heading: "Common mistakes that cause delays",
              body: "Applying online with a fake or borrowed SSN — This is illegal and can result in the EIN being invalidated later, causing serious problems with your bank account and tax filings.\n\nInconsistent information — The name on Form SS-4 must match your LLC formation documents exactly. Even small differences (like \"LLC\" vs \"L.L.C.\") can cause rejection.\n\nMissing responsible party — The IRS requires a real person as the responsible party, not a company or registered agent. Enter your personal name, not your LLC name.\n\nNot planning ahead — If you formed your LLC in October, don't wait until March to apply for your EIN. The April 15 filing deadline for Form 5472 can arrive before your EIN does if you apply too late."
            }
          ],
          keyTakeaways: [
            "Foreign owners without SSN/ITIN must file Form SS-4 by fax or mail — the online application won't work",
            "Fax is faster: 4-7 business days vs 4-8 weeks by mail",
            "Never use a fake SSN on the EIN application — it's illegal and the EIN may be invalidated",
            "The responsible party must be a real person (you), not a company or registered agent",
            "Plan ahead: apply for your EIN well before the April 15 filing deadline",
            "Keep your CP 575 confirmation letter — it's your official EIN assignment notice"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-21T10:00:00Z",
        sources: [
          { label: "Form SS-4 Instructions", url: "https://www.irs.gov/instructions/iss4" },
          { label: "Apply for an EIN Online", url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" },
          { label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #5: Non-U.S. Person Definition (Form 5472)
  // =====================================================
  {
    question: {
      id: "q-5472-non-us-person",
      isFeatured: true,
      title: "What exactly does 'non-U.S. person' mean on Form 5472? I'm confused by the IRS terminology.",
      body: "I'm trying to fill out Form 5472 for my single-member LLC and it keeps referring to 'non-U.S. person' and '25% foreign owner.' I'm a Canadian citizen living in Toronto who formed an LLC in Wyoming. Am I a non-U.S. person? I don't have a green card or SSN. The IRS terminology is really confusing — they seem to use 'non-U.S. person,' 'foreign person,' and 'nonresident alien' somewhat interchangeably. Can someone clarify what these terms actually mean and whether I qualify?",
      author: {
        displayName: "Emma L.",
        avatarSeed: "canadian-llc-2026",
        badge: "new-member" as const ,
      },
      category: "form-5472",
      tags: ["form 5472", "non-U.S. person", "foreign person", "nonresident alien", "IRS definition"],
      postedAt: "2026-03-30T08:15:00Z",
      viewCount: 1523,
      answerCount: 1,
      status: "answered",
      seoTitle: "What Does 'Non-U.S. Person' Mean on Form 5472? IRS Definition Explained",
      seoDescription: "Clear explanation of IRS terms 'non-U.S. person,' 'foreign person,' and 'nonresident alien' for Form 5472 filing. Who qualifies and what it means for your LLC.",
    },
    answers: [
      {
        id: "a-5472-non-us-person-1",
        questionId: "",
      videoId: "Uzld6FnNN9E",
        articleContent: {
          sections: [
            {
              heading: "Yes, you are a non-U.S. person",
              body: "As a Canadian citizen living in Toronto without a green card or SSN, you are classified as a non-U.S. person (also called a 'foreign person') by the IRS. The terms 'non-U.S. person,' 'foreign person,' and 'nonresident alien' are closely related and often used interchangeably in IRS publications.\n\nA U.S. person includes: U.S. citizens, U.S. resident aliens (green card holders or those meeting the substantial presence test), and domestic entities. If you are none of these, you are a non-U.S. person."
            },
            {
              heading: "Location does not determine your status",
              body: "A common misconception is that living in or outside the U.S. determines your classification. It does not. A U.S. citizen living in Japan for 20 years is still a U.S. person. A Japanese national living in the U.S. on a temporary visa may still be a non-U.S. person.\n\nYour status is determined by citizenship and legal residency, not by where you physically reside or where your business operates."
            },
            {
              heading: "What this means for your Form 5472 filing",
              body: "Since you are a non-U.S. person who owns a U.S. single-member LLC (a domestic disregarded entity), you are required to file Form 5472 with a pro forma Form 1120 annually. This applies even if your LLC had zero revenue.\n\nThe penalty for failure to file is $25,000 per form, per year. Your formation of the LLC and any capital contributions count as reportable transactions."
            }
          ],
          keyTakeaways: [
            "'Non-U.S. person' = 'foreign person' = someone who is not a U.S. citizen, green card holder, or domestic entity",
            "Your physical location does not determine U.S. person vs. non-U.S. person status",
            "As a Canadian citizen without U.S. residency, you are a non-U.S. person",
            "Non-U.S. persons who own U.S. LLCs must file Form 5472 annually — even with zero income"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-30T11:00:00Z",
        sources: [
          { label: "Form 5472 Instructions (Rev. 12/2024)", url: "https://www.irs.gov/instructions/i5472" },
          { label: "IRS Definition of U.S. Person — IRC §7701(a)(30)", url: "https://www.irs.gov/individuals/international-taxpayers/classification-of-taxpayers-for-us-tax-purposes" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #6: Location vs Tax Status
  // =====================================================
  {
    question: {
      id: "q-location-tax-status",
      title: "I moved to the US last year — does living here make me a 'U.S. person' for my LLC taxes?",
      body: "I'm a UK citizen who moved to the United States in 2025 on an E-2 visa. I formed a Wyoming LLC before I moved. Now that I'm living in the US, am I still considered a 'foreign person' for Form 5472 purposes? Or does living here change my classification? My accountant back home said living in the US should make me a US person but I'm not sure that's right.",
      author: {
        displayName: "James R.",
        avatarSeed: "uk-entre-2026",
        badge: "new-member" as const ,
      },
      category: "form-5472",
      tags: ["form 5472", "U.S. person", "visa", "residency", "substantial presence test"],
      postedAt: "2026-03-31T14:30:00Z",
      viewCount: 987,
      answerCount: 1,
      status: "answered",
      seoTitle: "Does Living in the US Make You a U.S. Person for LLC Tax Purposes?",
      seoDescription: "How visa status and physical presence affect whether you are classified as a U.S. person or foreign person for Form 5472 and LLC tax filing.",
    },
    answers: [
      {
        id: "a-location-tax-status-1",
        questionId: "",
      videoId: "8n539PqxyhA",
        articleContent: {
          sections: [
            {
              heading: "Living in the US does not automatically make you a U.S. person",
              body: "Simply moving to the United States does not automatically change your classification from non-U.S. person to U.S. person. Your classification depends on specific legal criteria: U.S. citizenship, green card holder status, or meeting the substantial presence test.\n\nOn an E-2 visa, you may or may not meet the substantial presence test depending on how many days you have been in the U.S. The E-2 visa itself does not automatically confer resident alien status for tax purposes."
            },
            {
              heading: "The substantial presence test",
              body: "The substantial presence test determines resident alien status based on the number of days you are physically present in the U.S. over a three-year period. You must be present for at least 31 days in the current year AND a total of 183 days using a weighted formula (all days in the current year + 1/3 of days in the prior year + 1/6 of days two years prior).\n\nIf you meet this test, you may become a U.S. person for tax purposes, which would change your Form 5472 obligations. However, certain visa types (like F, J, M, or Q visas) have exemptions. E-2 visa holders are generally counted."
            },
            {
              heading: "Get professional guidance for your specific situation",
              body: "The intersection of visa status, the substantial presence test, and LLC tax obligations is complex. Your UK accountant may be right that you have become a U.S. person — but this depends on the specific facts of your situation.\n\nIf you became a U.S. person during the tax year, your filing obligations change significantly: you would file Form 1040 reporting worldwide income rather than Form 5472 with a pro forma 1120."
            }
          ],
          keyTakeaways: [
            "Living in the U.S. does not automatically make you a U.S. person — legal criteria must be met",
            "The substantial presence test uses a weighted day-count formula over three years",
            "E-2 visa holders are generally subject to the substantial presence test",
            "If you become a U.S. person mid-year, your filing obligations change from Form 5472 to Form 1040"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-31T17:45:00Z",
        sources: [
          { label: "Substantial Presence Test", url: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test" },
          { label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #7: Dual Citizenship and LLC Filing
  // =====================================================
  {
    question: {
      id: "q-dual-citizenship-llc",
      title: "I have dual US-Brazilian citizenship. Do I need Form 5472 for my LLC or just Form 1040?",
      body: "I was born in Brazil to an American parent so I have both US and Brazilian citizenship. I've lived in Brazil my whole life and recently formed an LLC in Delaware for my software consulting business. A friend told me I need Form 5472 because I'm a foreign owner, but I also have US citizenship. Which is it?",
      author: {
        displayName: "Priya M.",
        avatarSeed: "dual-cit-2026",
        badge: "new-member" as const ,
      },
      category: "form-5472",
      tags: ["dual citizenship", "form 5472", "form 1040", "U.S. person", "foreign owner"],
      postedAt: "2026-04-01T09:20:00Z",
      viewCount: 1156,
      answerCount: 1,
      status: "answered",
      seoTitle: "Dual US Citizenship and LLC: Do You File Form 5472 or Form 1040?",
      seoDescription: "If you hold dual citizenship including US citizenship, you are a U.S. person. Learn why Form 5472 does not apply and what you should file instead.",
    },
    answers: [
      {
        id: "a-dual-citizenship-llc-1",
        questionId: "",
      videoId: "kmJURyoxfOY",
        articleContent: {
          sections: [
            {
              heading: "You are a U.S. person — Form 5472 does not apply to you",
              body: "Since you hold U.S. citizenship (even as a dual citizen), the IRS treats you as a U.S. person. It does not matter that you also hold Brazilian citizenship or that you have lived in Brazil your entire life.\n\nForm 5472 is only required when a foreign person owns a U.S. disregarded entity. Because you are a U.S. person, your LLC is not foreign-owned, and Form 5472 does not apply."
            },
            {
              heading: "What you should file instead",
              body: "As a U.S. citizen, you are required to file Form 1040 reporting your worldwide income — regardless of where you live. Your single-member LLC is a disregarded entity, so its income flows directly to your Form 1040 (reported on Schedule C).\n\nYou may also have additional filing requirements: FBAR (FinCEN Form 114) if your foreign bank accounts exceed $10,000 in aggregate at any point during the year, and Form 8938 (FATCA) if your foreign financial assets exceed certain thresholds."
            },
            {
              heading: "Your friend's advice was wrong — but understandable",
              body: "Many people assume that living abroad makes you a 'foreign owner,' but U.S. citizenship overrides everything else. The IRS rule is absolute: if you hold U.S. citizenship, you are a U.S. person, period. Your other nationality and your residence are irrelevant to this determination."
            }
          ],
          keyTakeaways: [
            "Dual citizens with U.S. citizenship are always U.S. persons — Form 5472 does not apply",
            "File Form 1040 reporting worldwide income, with LLC income on Schedule C",
            "You may also need FBAR and Form 8938 for foreign financial accounts",
            "U.S. citizenship overrides any other nationality for IRS classification purposes"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-01T12:30:00Z",
        sources: [
          { label: "IRS — U.S. Citizens Living Abroad", url: "https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-residents-abroad" },
          { label: "FBAR Filing Requirements", url: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #8: Choosing Between LLC and Sole Proprietorship
  // =====================================================
  {
    question: {
      id: "q-llc-vs-sole-prop",
      isFeatured: true,
      title: "Starting my first online business — should I go with sole proprietorship or single-member LLC?",
      body: "I'm a freelance web developer based in Germany and I want to start selling SaaS products to US customers. I'm trying to figure out the simplest business structure. A sole proprietorship seems easiest but I keep reading that an LLC is better. What are the actual differences in terms of taxes and liability? I don't want to overcomplicate things if I'm just getting started.",
      author: {
        displayName: "Alex Wong",
        avatarSeed: "saas-founder-2026",
        badge: "subscriber" as const ,
      },
      category: "entity-types",
      tags: ["sole proprietorship", "single-member LLC", "liability", "entity selection", "new business"],
      postedAt: "2026-04-01T16:00:00Z",
      viewCount: 2341,
      answerCount: 1,
      status: "answered",
      seoTitle: "Sole Proprietorship vs Single-Member LLC: Which Should You Choose?",
      seoDescription: "Compare sole proprietorship and single-member LLC on liability protection, taxes, and flexibility. Expert guidance for new business owners choosing an entity.",
    },
    answers: [
      {
        id: "a-llc-vs-sole-prop-1",
        questionId: "",
      videoId: "EOz9MWzb8Sw",
        articleContent: {
          sections: [
            {
              heading: "The key difference: liability protection",
              body: "The biggest practical difference between a sole proprietorship and a single-member LLC is liability protection. A sole proprietorship offers zero protection — if your business is sued or incurs debts, creditors can go after your personal assets (your home, savings, car).\n\nA single-member LLC creates a legal separation between you and your business. Your personal assets are generally protected from business liabilities, as long as you maintain proper separation between personal and business finances."
            },
            {
              heading: "Tax treatment is the same by default",
              body: "From a tax perspective, there is no difference by default. Both a sole proprietorship and a single-member LLC are treated as 'disregarded entities' by the IRS. In both cases, business income flows through to your personal tax return.\n\nThe difference is that an LLC gives you the option to elect corporate tax treatment (via Form 8832) if that becomes advantageous later. A sole proprietorship does not offer this flexibility."
            },
            {
              heading: "For a foreign owner targeting U.S. customers: LLC is strongly recommended",
              body: "As a German citizen selling to U.S. customers, forming a U.S. LLC gives you credibility with U.S. customers and payment processors, liability protection, and a clear legal structure. The additional cost and paperwork of forming an LLC is minimal compared to the protection it provides.\n\nHowever, be aware that as a foreign owner of a U.S. LLC, you will need to file Form 5472 with a pro forma Form 1120 annually. This is a filing requirement that comes with the LLC structure for non-U.S. persons."
            }
          ],
          keyTakeaways: [
            "Sole proprietorships offer no liability protection — your personal assets are at risk",
            "Single-member LLCs provide limited liability while keeping the same default tax treatment",
            "Both are disregarded entities for tax purposes by default",
            "LLCs offer the option to elect corporate tax treatment later via Form 8832",
            "Foreign owners of U.S. LLCs must file Form 5472 annually"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-01T19:00:00Z",
        sources: [
          { label: "IRS — Single Member LLCs", url: "https://www.irs.gov/businesses/small-businesses-self-employed/single-member-limited-liability-companies" },
          { label: "IRS — Sole Proprietorships", url: "https://www.irs.gov/businesses/small-businesses-self-employed/sole-proprietorships" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #9: LLC Taxation Basics
  // =====================================================
  {
    question: {
      id: "q-llc-taxes-explained",
      title: "How does LLC taxation actually work? Does the LLC pay taxes or do I pay taxes personally?",
      body: "I just formed a multi-member LLC with my business partner and we're confused about how taxes work. Our accountant mentioned 'pass-through taxation' but I don't fully understand. Does our LLC file its own tax return? Do we each file separately? Can someone explain LLC taxes in simple terms?",
      author: {
        displayName: "Nina P.",
        avatarSeed: "llc-partners-2026",
        badge: "subscriber" as const ,
      },
      category: "entity-types",
      tags: ["LLC", "pass-through taxation", "partnership", "tax filing", "multi-member LLC"],
      postedAt: "2026-04-02T10:00:00Z",
      viewCount: 1876,
      answerCount: 1,
      status: "answered",
      seoTitle: "How LLC Taxes Work: Pass-Through Taxation Explained Simply",
      seoDescription: "Clear explanation of LLC taxation: pass-through income, no double taxation, and filing requirements for single-member and multi-member LLCs.",
    },
    answers: [
      {
        id: "a-llc-taxes-explained-1",
        questionId: "",
      videoId: "6QO8GeJa83M",
        articleContent: {
          sections: [
            {
              heading: "The LLC itself does not pay federal income tax",
              body: "By default, an LLC is a pass-through entity. This means the LLC itself does not pay federal income tax. Instead, all profits and losses 'pass through' to the members (owners), who report their share on their personal tax returns.\n\nThis is one of the main advantages of the LLC structure — it avoids the 'double taxation' that C corporations face, where profits are taxed once at the corporate level and again when distributed as dividends."
            },
            {
              heading: "Multi-member LLC: files Form 1065, members get K-1s",
              body: "As a multi-member LLC, your company is treated as a partnership for tax purposes. The LLC files Form 1065 (U.S. Return of Partnership Income) as an information return. This form reports the LLC's total income, deductions, and each member's share.\n\nEach member then receives a Schedule K-1 showing their individual share of the LLC's income. You report this on your personal tax return. The LLC does not pay tax — you do, on your personal return."
            },
            {
              heading: "Why LLCs are considered 'hybrid' entities",
              body: "LLCs are called hybrid entities because they combine the best of both worlds: the limited liability protection of a corporation (your personal assets are shielded) with the pass-through taxation of a partnership (no entity-level tax).\n\nThere are no restrictions on the number or type of LLC members — you can have foreign members, corporate members, or any combination. This flexibility, combined with favorable tax treatment, is why LLCs are the most popular business structure in the United States."
            }
          ],
          keyTakeaways: [
            "LLCs do not pay federal income tax — income passes through to the members",
            "Multi-member LLCs file Form 1065 and issue Schedule K-1 to each member",
            "Single-member LLCs report income on Schedule C of the owner's personal return",
            "LLCs avoid double taxation while providing liability protection",
            "There are no restrictions on the number or type of LLC members"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-02T13:00:00Z",
        sources: [
          { label: "IRS — LLCs", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
          { label: "Form 1065 Instructions", url: "https://www.irs.gov/instructions/i1065" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #10: Partnership vs LLC
  // =====================================================
  {
    question: {
      id: "q-partnership-taxation",
      title: "What is the difference between a general partnership and limited partnership for taxes?",
      body: "My cousin and I are starting a real estate investment project and we're debating between a general partnership and a limited partnership. I know the liability is different, but how does the taxation work? Does a GP and LP pay different taxes? We want to minimize our tax burden and protect our assets.",
      author: {
        displayName: "Carlos G.",
        avatarSeed: "re-investor-2026",
        badge: "subscriber" as const ,
      },
      category: "entity-types",
      tags: ["partnership", "general partnership", "limited partnership", "pass-through taxation", "real estate"],
      postedAt: "2026-04-02T15:30:00Z",
      viewCount: 1432,
      answerCount: 1,
      status: "answered",
      seoTitle: "General Partnership vs Limited Partnership: Tax and Liability Differences",
      seoDescription: "Comparison of general partnership (GP) and limited partnership (LP) structures including liability exposure, tax treatment, and when each is appropriate.",
    },
    answers: [
      {
        id: "a-partnership-taxation-1",
        questionId: "",
      videoId: "npr6RSctaY4",
        articleContent: {
          sections: [
            {
              heading: "Tax treatment is the same for both GP and LP",
              body: "Whether you form a general partnership or a limited partnership, the tax treatment is identical: pass-through taxation. The partnership files Form 1065 as an information return, and each partner receives a Schedule K-1 showing their share of income and deductions. The partnership itself does not pay income tax.\n\nThis means income is taxed only once — at the individual partner level. This is a significant advantage over C corporations, which face double taxation."
            },
            {
              heading: "The real difference is liability",
              body: "The key distinction between a GP and LP is liability exposure. In a general partnership, all partners have unlimited personal liability — creditors can pursue any partner's personal assets.\n\nIn a limited partnership, general partners still face unlimited liability (they manage the business), but limited partners have liability limited to their investment amount. This is why wealthy investors typically prefer the LP role: they invest capital while protecting their personal assets."
            },
            {
              heading: "Why partnerships work well for real estate projects",
              body: "Partnerships are particularly popular for real estate projects because income is taxed only once when it flows through to the partners. For a project with a defined timeline — say three to five years — this means investment capital goes in, the project generates returns, and those returns are taxed at the individual level without an entity-level tax layer.\n\nAdditionally, partnership tax law allows for flexible allocation of income, losses, and deductions among partners, which can be structured to optimize the tax position of each partner."
            }
          ],
          keyTakeaways: [
            "GP and LP have identical tax treatment: pass-through taxation via Form 1065 and K-1s",
            "General partners have unlimited liability; limited partners' liability is capped at their investment",
            "Partnership income is taxed only once at the partner level — no double taxation",
            "Partnerships allow flexible allocation of income and deductions among partners",
            "Partners can be individuals, corporations, LLCs, or other entities"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-02T18:00:00Z",
        sources: [
          { label: "IRS — Partnerships", url: "https://www.irs.gov/businesses/partnerships" },
          { label: "Form 1065 Instructions", url: "https://www.irs.gov/instructions/i1065" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #11: C Corp vs S Corp
  // =====================================================
  {
    question: {
      id: "q-c-corp-vs-s-corp",
      isFeatured: true,
      title: "C Corp vs S Corp — which one avoids double taxation and can a foreign owner use either?",
      body: "I've been reading about corporations and I'm confused about the difference between C corps and S corps. Everyone says S corps avoid double taxation but I'm a foreign national (Indian citizen). Can I use an S corp for my US business? Or am I stuck with the C corp double taxation?",
      author: {
        displayName: "Yuki S.",
        avatarSeed: "startup-india-2026",
      },
      category: "entity-types",
      tags: ["C corporation", "S corporation", "double taxation", "foreign owner", "entity selection"],
      postedAt: "2026-04-03T08:00:00Z",
      viewCount: 2156,
      answerCount: 1,
      status: "answered",
      seoTitle: "C Corp vs S Corp for Foreign Owners: Double Taxation and Eligibility Rules",
      seoDescription: "C corporation vs S corporation comparison: double taxation explained, S corp ownership restrictions for foreign nationals, and alternative structures.",
    },
    answers: [
      {
        id: "a-c-corp-vs-s-corp-1",
        questionId: "",
      videoId: "2CFOprdwqWc",
        articleContent: {
          sections: [
            {
              heading: "Foreign nationals cannot own S corporations",
              body: "Unfortunately, S corporations are only available to U.S. citizens and U.S. resident aliens. As an Indian citizen who is not a U.S. resident, you cannot be a shareholder of an S corporation. This is a strict IRS rule with no exceptions.\n\nS corporations also have other restrictions: maximum 100 shareholders, only one class of stock, and all shareholders must be individuals (not corporations or partnerships)."
            },
            {
              heading: "C corps face double taxation — but there are planning strategies",
              body: "C corporations do face double taxation: profits are taxed at the corporate level (currently 21% federal rate), and dividends distributed to shareholders are taxed again on the shareholder's personal return.\n\nHowever, there are legitimate strategies to minimize this impact: paying yourself a reasonable salary (which is deductible by the corporation), retaining earnings in the business, or structuring transactions to reduce the dividend tax layer. A tax professional can help optimize your situation."
            },
            {
              heading: "For most foreign owners: an LLC is the better choice",
              body: "For most foreign business owners, a single-member or multi-member LLC is the most practical structure. It provides liability protection, pass-through taxation (no double taxation), and no ownership restrictions for foreign nationals.\n\nAs a foreign owner of a U.S. LLC, you would file Form 5472 with a pro forma Form 1120 annually. While this is an additional filing requirement, the tax advantages of avoiding double taxation typically outweigh the administrative burden."
            }
          ],
          keyTakeaways: [
            "S corporations are restricted to U.S. citizens and resident aliens — foreign nationals are excluded",
            "C corporations face double taxation: corporate tax on profits + individual tax on dividends",
            "About half of all U.S. corporations are S corps due to their tax advantages",
            "For foreign owners, LLCs are typically the best structure — pass-through taxation with no ownership restrictions",
            "C corp double taxation can be minimized with proper tax planning strategies"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-03T11:00:00Z",
        sources: [
          { label: "IRS — S Corporations", url: "https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations" },
          { label: "IRS — Corporations", url: "https://www.irs.gov/businesses/small-businesses-self-employed/forming-a-corporation" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #12: Single Member LLC Taxes
  // =====================================================
  {
    question: {
      id: "q-smllc-taxes",
      isFeatured: true,
      title: "My single-member LLC made no money this year. Do I still need to file taxes for it?",
      body: "I'm a British citizen who formed a single-member LLC in Delaware through Firstbase about 8 months ago. I haven't launched my product yet so the LLC has $0 in revenue. Do I still need to file anything with the IRS? I heard there's a $25,000 penalty for not filing but surely that can't apply if I made no money?",
      author: {
        displayName: "Tom H.",
        avatarSeed: "uk-startup-2026",
        badge: "new-member" as const ,
      },
      category: "form-5472",
      tags: ["single-member LLC", "zero income", "form 5472", "filing requirement", "penalty"],
      postedAt: "2026-04-03T14:00:00Z",
      viewCount: 1789,
      answerCount: 1,
      status: "answered",
      seoTitle: "Do You Need to File Taxes for a Zero-Income Single-Member LLC?",
      seoDescription: "Foreign owners of U.S. single-member LLCs must file Form 5472 even with zero revenue. Learn why and how to avoid the $25,000 penalty.",
    },
    answers: [
      {
        id: "a-smllc-taxes-1",
        questionId: "",
      videoId: "pqG200vruqM",
        articleContent: {
          sections: [
            {
              heading: "Yes — you must file even with zero revenue",
              body: "As a foreign owner of a U.S. single-member LLC, you are required to file Form 5472 with a pro forma Form 1120 annually, regardless of whether the LLC earned any income. The filing requirement is triggered by the existence of 'reportable transactions,' not by revenue.\n\nForming the LLC itself, contributing capital (even the filing fee), and paying your registered agent are all reportable transactions. With zero revenue, you still have transactions to report."
            },
            {
              heading: "The $25,000 penalty applies regardless of income",
              body: "The $25,000 penalty for failure to file Form 5472 applies per form, per year — and it has nothing to do with whether your LLC made money. The IRS does not waive this penalty because you had no revenue. Many foreign LLC owners have learned this lesson the hard way.\n\nThe penalty can escalate: if the IRS sends a notice and you fail to respond within 90 days, an additional $25,000 penalty applies for each 30-day period the failure continues."
            },
            {
              heading: "What to file: Form 5472 + pro forma Form 1120",
              body: "Your LLC is a disregarded entity, so you file Form 5472 attached to a pro forma Form 1120. 'Pro forma' means the 1120 is filed with zeros in most fields — it serves as a cover sheet for the Form 5472.\n\nThe due date is April 15 (for calendar year filers), with an automatic 6-month extension available by filing Form 7004. You can prepare and file this yourself using a self-service tool or work with a tax professional."
            }
          ],
          keyTakeaways: [
            "Foreign-owned U.S. LLCs must file Form 5472 even with $0 revenue",
            "LLC formation, capital contributions, and registered agent payments are all reportable transactions",
            "The $25,000 penalty applies regardless of income — it is per form, per year",
            "File Form 5472 with a pro forma Form 1120 by April 15 (extensions available)",
            "Penalties can escalate to $50,000+ if you miss IRS response deadlines"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-03T17:00:00Z",
        sources: [
          { label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" },
          { label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #13: Sole Proprietorship Risks
  // =====================================================
  {
    question: {
      id: "q-sole-prop-risks",
      title: "What are the actual risks of operating as a sole proprietorship vs forming an LLC?",
      body: "I've been freelancing as a sole proprietor for 2 years now. My income is growing and I'm starting to worry about liability. A client threatened to sue me last month (over a disagreement, nothing serious) and it made me realize my house could be at risk. What exactly am I exposing myself to by not having an LLC? Is it really that bad?",
      author: {
        displayName: "Lisa Chen",
        avatarSeed: "worried-free-2026",
        badge: "new-member" as const ,
      },
      category: "entity-types",
      tags: ["sole proprietorship", "LLC", "liability", "personal assets", "freelancer"],
      postedAt: "2026-04-04T08:30:00Z",
      viewCount: 1654,
      answerCount: 1,
      status: "answered",
      seoTitle: "Sole Proprietorship Liability Risks: Why Freelancers Should Form an LLC",
      seoDescription: "Real risks of operating as a sole proprietor: unlimited personal liability, asset exposure, and why forming an LLC provides essential protection for freelancers.",
    },
    answers: [
      {
        id: "a-sole-prop-risks-1",
        questionId: "",
      videoId: "sKtLNjIgFCk",
        articleContent: {
          sections: [
            {
              heading: "The risk is real: unlimited personal liability",
              body: "As a sole proprietor, there is no legal separation between you and your business. If a client sues your business and wins a judgment, creditors can go after your personal assets — your home, savings, car, investment accounts, everything.\n\nThis is what 'unlimited liability' means in practice. A sole proprietorship provides zero asset protection. The legal phrase you should remember: in a sole proprietorship, the creditors can 'go after you directly.'"
            },
            {
              heading: "An LLC creates a legal shield",
              body: "An LLC creates a separate legal entity between you and your clients. If the LLC is sued, generally only the LLC's assets are at risk — not your personal property. This is the 'limited' in Limited Liability Company.\n\nHowever, this protection only holds if you maintain proper separation. You must keep business and personal finances separate, maintain a business bank account, and never commingle funds. If you blur these lines, a court can 'pierce the corporate veil' and hold you personally liable despite the LLC structure."
            },
            {
              heading: "The tax treatment stays the same",
              body: "Here is the good news: converting from a sole proprietorship to a single-member LLC does not change your tax situation by default. Both are disregarded entities — income flows through to your personal return either way.\n\nYou gain liability protection without any additional tax complexity. The only difference is the annual state filing fee for maintaining the LLC (varies by state) and, if you are a foreign owner, the Form 5472 requirement."
            }
          ],
          keyTakeaways: [
            "Sole proprietors have unlimited personal liability — creditors can pursue personal assets",
            "An LLC shields personal assets by creating a separate legal entity",
            "You must maintain separation between personal and business finances to preserve LLC protection",
            "Tax treatment is the same for both — the upgrade is purely about liability protection",
            "The cost of forming and maintaining an LLC is minimal compared to the risk of unlimited liability"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-04T11:30:00Z",
        sources: [
          { label: "IRS — Sole Proprietorships", url: "https://www.irs.gov/businesses/small-businesses-self-employed/sole-proprietorships" },
          { label: "IRS — Single Member LLCs", url: "https://www.irs.gov/businesses/small-businesses-self-employed/single-member-limited-liability-companies" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #14: Form 8832 Common Mistake
  // =====================================================
  {
    question: {
      id: "q-8832-foreign-entity-mistake",
      isFeatured: true,
      title: "I filed Form 8832 and selected 'foreign eligible entity' — but I'm a foreign owner of a US LLC. Did I make a mistake?",
      body: "I'm a German citizen who formed an LLC in Delaware. I wanted to elect corporate tax treatment so I filed Form 8832. Since I'm a foreign person, I selected 'foreign eligible entity' on the form. My accountant just told me this might be wrong. Is it? What should I do?",
      author: {
        displayName: "Mike D.",
        avatarSeed: "de-llc-owner-2026",
        badge: "new-member" as const ,
      },
      category: "form-8832",
      tags: ["form 8832", "entity classification", "foreign eligible entity", "domestic entity", "common mistake"],
      postedAt: "2026-04-04T14:00:00Z",
      viewCount: 1987,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 8832 Mistake: Foreign Eligible Entity vs Domestic Eligible Entity",
      seoDescription: "The most common Form 8832 error: selecting 'foreign eligible entity' for a U.S.-formed LLC. Learn why this is wrong and how to correct it.",
    },
    answers: [
      {
        id: "a-8832-foreign-entity-mistake-1",
        questionId: "",
      videoId: "Y5CfPVurViE",
        articleContent: {
          sections: [
            {
              heading: "Yes — this is the most common Form 8832 mistake",
              body: "Your accountant is correct. Selecting 'foreign eligible entity' for a U.S.-formed LLC is the single most common mistake on Form 8832. The form asks about the entity — not the owner.\n\nYour LLC was formed in Delaware, a U.S. state. Regardless of who owns it, the LLC is a domestic eligible entity. The fact that you are a German citizen (a foreign person) does not change the entity's domestic classification."
            },
            {
              heading: "The key rule: the election is for the entity, not the owner",
              body: "Form 8832 is about how the IRS will classify your business entity for tax purposes. The classification depends on where the entity was formed, not on the nationality of its owner.\n\nA 'foreign eligible entity' on Form 8832 refers to an entity formed under the laws of a foreign country — for example, a German GmbH, a UK Ltd, or a Japanese KK. Your Delaware LLC is not a foreign entity even though you are a foreign person."
            },
            {
              heading: "How to correct this",
              body: "You should file a corrected Form 8832 as soon as possible, selecting 'domestic eligible entity' this time. If the original filing was recent, you may be able to submit the corrected form with a letter explaining the error.\n\nIf significant time has passed, you may need to request late election relief (available under Part II of Form 8832). Your accountant can help determine the best approach based on when the original form was filed and whether the IRS has already processed it."
            }
          ],
          keyTakeaways: [
            "Selecting 'foreign eligible entity' for a U.S.-formed LLC is the most common Form 8832 mistake",
            "The election classifies the entity, not the owner — a U.S. LLC is always a domestic entity",
            "A 'foreign entity' means an entity formed under foreign law (e.g., a German GmbH)",
            "File a corrected Form 8832 as soon as possible if you made this error",
            "Late election relief is available under Part II if needed"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-04T17:00:00Z",
        sources: [
          { label: "Form 8832 Instructions", url: "https://www.irs.gov/instructions/i8832" },
          { label: "About Form 8832", url: "https://www.irs.gov/forms-pubs/about-form-8832" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #15: Form 8832 60-Month Rule
  // =====================================================
  {
    question: {
      id: "q-8832-60-month-rule",
      title: "I elected corporate treatment 2 years ago via Form 8832. Can I switch back to disregarded entity?",
      body: "Two years ago I filed Form 8832 to have my single-member LLC taxed as a corporation. It turns out the corporate tax treatment isn't working well for my situation and I want to go back to being a disregarded entity. Can I file another Form 8832 to change back? Or am I stuck for a certain period?",
      author: {
        displayName: "Anna K.",
        avatarSeed: "llc-regret-2026",
        badge: "new-member" as const ,
      },
      category: "form-8832",
      tags: ["form 8832", "60-month rule", "entity classification", "change election", "disregarded entity"],
      postedAt: "2026-04-05T09:00:00Z",
      viewCount: 1234,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 8832 60-Month Rule: Can You Change Your Entity Classification Back?",
      seoDescription: "Explanation of the IRS 60-month limitation rule on Form 8832 entity classification elections. When you can and cannot change your tax classification.",
    },
    answers: [
      {
        id: "a-8832-60-month-rule-1",
        questionId: "",
      videoId: "0yy714Fh-YU",
        articleContent: {
          sections: [
            {
              heading: "The 60-month rule blocks frequent changes",
              body: "After making an entity classification election on Form 8832, you generally cannot change your classification again for 60 months (five years). Since you filed your election only two years ago, you are within the restricted period and cannot change back to a disregarded entity under normal circumstances.\n\nThe IRS created this rule specifically to prevent businesses from switching classifications frequently to exploit short-term tax advantages."
            },
            {
              heading: "Limited exceptions exist",
              body: "There are narrow exceptions to the 60-month rule. The most common is a significant change in ownership — for example, if more than 50% of the entity's ownership changes hands. Other exceptions may apply in specific restructuring scenarios.\n\nIf none of these exceptions apply to your situation, you will need to wait until the 60-month period expires before filing a new Form 8832 to change your classification."
            },
            {
              heading: "Plan carefully before making an election",
              body: "This situation highlights why the Form 8832 election should be made carefully with professional guidance. The 60-month lock-in means you are committing to a classification for at least five years.\n\nBefore making any election, model out the tax implications for multiple years with a tax professional. Consider your projected income growth, dividend plans, and exit strategy. The election that looks best today may not be optimal three years from now."
            }
          ],
          keyTakeaways: [
            "After a Form 8832 election, you generally cannot change classification for 60 months (5 years)",
            "Exceptions exist for significant ownership changes (50%+) and certain restructuring scenarios",
            "If no exception applies, you must wait until the 60-month period expires",
            "Always consult a tax professional before making a Form 8832 election",
            "Model tax implications for multiple years before committing to a classification"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-05T12:00:00Z",
        sources: [
          { label: "Form 8832 Instructions — 60-Month Limitation", url: "https://www.irs.gov/instructions/i8832" },
          { label: "Treasury Reg. §301.7701-3(c)(1)(iv)", url: "https://www.ecfr.gov/current/title-26/chapter-I/subchapter-F/part-301/subpart-ECFRe506ac05b8b1ff1/subject-group-ECFRe2b3ce5dd3bed6c/section-301.7701-3" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #16: Form 8832 Owner Count and Classification
  // =====================================================
  {
    question: {
      id: "q-8832-owner-count",
      title: "Form 8832 asks about number of owners — how does that affect my classification options?",
      body: "I'm filling out Form 8832 for my LLC and line 3 asks if I have more than one owner. I'm the only owner. How does answering 'No' change what classifications I can elect? Also, if I add a partner later, do I need to file a new Form 8832?",
      author: {
        displayName: "Chris L.",
        avatarSeed: "solo-llc-2026",
        badge: "new-member" as const ,
      },
      category: "form-8832",
      tags: ["form 8832", "number of owners", "classification options", "single member", "multi-member"],
      postedAt: "2026-04-05T15:00:00Z",
      viewCount: 1098,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 8832 Line 3: How Number of Owners Affects Classification Options",
      seoDescription: "How the number of LLC owners determines available tax classification options on Form 8832 — single-owner vs multi-owner election choices explained.",
    },
    answers: [
      {
        id: "a-8832-owner-count-1",
        questionId: "",
      videoId: "HhU2PW-YmIM",
        articleContent: {
          sections: [
            {
              heading: "Single owner: disregarded entity or corporation",
              body: "If you answer 'No' to having more than one owner, your available classifications are:\n\n1. Disregarded entity — the default for a single-member LLC. The LLC is ignored for tax purposes and all income flows to your personal return.\n2. Association taxable as a corporation — the LLC is treated as a C corporation for tax purposes.\n\nMost single-member LLC owners keep the disregarded entity default. Electing corporate treatment is an option when corporate tax rates or planning strategies are advantageous."
            },
            {
              heading: "Multiple owners: partnership or corporation",
              body: "If the entity has more than one owner, the available classifications change:\n\n1. Partnership — the default for a multi-member LLC. Income passes through to partners via Schedule K-1.\n2. Association taxable as a corporation — treated as a C corporation for tax purposes.\n\nNote that a disregarded entity classification is not available for multi-member entities. Only single-owner entities can be disregarded."
            },
            {
              heading: "Adding a partner changes your classification automatically",
              body: "If you currently have a single-member LLC classified as a disregarded entity and you add a second member, the entity automatically becomes a partnership for tax purposes. This is not something you elect — it happens by operation of law when the ownership structure changes.\n\nYou would not need to file Form 8832 for this change. However, if you want the now-multi-member LLC to be taxed as a corporation instead of a partnership, you would need to file Form 8832 at that point."
            }
          ],
          keyTakeaways: [
            "Single-owner entities can be disregarded entities or corporations",
            "Multi-owner entities can be partnerships or corporations — disregarded entity is not an option",
            "Adding a second member automatically converts a disregarded entity to a partnership",
            "You only need Form 8832 if you want a non-default classification",
            "Owner identification (SSN, ITIN, or EIN) is required on lines 4-5 for single-owner entities"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-05T18:00:00Z",
        sources: [
          { label: "Form 8832 Instructions", url: "https://www.irs.gov/instructions/i8832" },
          { label: "Treasury Reg. §301.7701-3", url: "https://www.ecfr.gov/current/title-26/chapter-I/subchapter-F/part-301/subpart-ECFRe506ac05b8b1ff1/subject-group-ECFRe2b3ce5dd3bed6c/section-301.7701-3" },
        ],
      },
    ],
  },



  // =====================================================
  // ALL REMAINING Q&A ENTRIES (auto-generated, batch 2)
  // =====================================================

  {
    question: {
      id: "q-what-counts-as-a-u-s-llc-irs-rules-for-foreign-own",
      title: "What Counts as a U.S. LLC? IRS Rules for Foreign Owners (Form 5472)",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: What Counts as a U.S. LLC? IRS Rules for Foreign Owners. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Raj P.", avatarSeed: "expat_llc_owner-MPPazO", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-02-28T23:00:00.000Z",
      viewCount: 2378,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Counts as a U.S. LLC? IRS Rules for Foreign Owners (Form 5472)",
      seoDescription: "Expert guidance on What Counts as a U.S. LLC? IRS Rules for Foreign Owners",
    },
    answers: [{
      id: "a-what-counts-as-a-u-s-llc-irs-rules-for-foreign-own",
      questionId: "",
      videoId: "MPPazOfObwU",
      articleContent: {
        sections: [
          { heading: "What Makes a Business a U.S. LLC?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Online Formation Services Still Create U.S. LLCs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A U.S. LLC is any LLC formed by filing Articles of Organization with a U.S. state",
          "LLCs formed through platforms like Stripe Atlas, doola, or Firstbase are still U.S. LLCs",
          "Popular formation states include Delaware, Wyoming, New Mexico, and Florida"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T02:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-stripe-atlas-doola-firstbase-does-your-llc-count-a",
      title: "Stripe Atlas, Doola, Firstbase: Does Your LLC Count as U.S.? (Form 5472 Guide)",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Stripe Atlas, Doola, Firstbase: Does Your LLC Count as U.S.?. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Maria S.", avatarSeed: "foreign_founder-2lPtUC", badge: "subscriber" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-01T02:00:00.000Z",
      viewCount: 1017,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Stripe Atlas, Doola, Firstbase: Does Your LLC Count as U.S.? (Form 5472 Guide)",
      seoDescription: "Expert guidance on Stripe Atlas, Doola, Firstbase: Does Your LLC Count as U.S.?",
    },
    answers: [{
      id: "a-stripe-atlas-doola-firstbase-does-your-llc-count-a",
      questionId: "",
      videoId: "2lPtUCsRAZw",
      articleContent: {
        sections: [
          { heading: "LLCs Formed Through Online Platforms", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How These Platforms Work", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Stripe Atlas, Firstbase, and doola create genuine U.S. LLCs by filing with state agencies",
          "The platform acts as your agent — the LLC is legally yours and treated as a U.S. entity by the IRS",
          "Your filing obligations (Form 5472 + pro forma 1120) are identical to any foreign-owned U.S. LLC"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T05:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-u-s-bank-account-does-not-make-a-u-s-llc-foreign-c",
      title: "U.S. Bank Account Does Not Make a U.S. LLC: Foreign Company IRS Filing Rules",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: U.S. Bank Account Does Not Make a U.S. LLC: Foreign Company IRS Filing Rules. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Kevin W.", avatarSeed: "llc_newbie_abroad-DNLo_p", badge: "subscriber" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-01T05:00:00.000Z",
      viewCount: 2653,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "U.S. Bank Account Does Not Make a U.S. LLC: Foreign Company IRS Filing Rules",
      seoDescription: "Expert guidance on U.S. Bank Account Does Not Make a U.S. LLC: Foreign Company IRS Filing Rules",
    },
    answers: [{
      id: "a-u-s-bank-account-does-not-make-a-u-s-llc-foreign-c",
      questionId: "",
      videoId: "DNLo_pdTHg4",
      articleContent: {
        sections: [
          { heading: "Having a U.S. Bank Account Does Not Make You a U.S. LLC", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Actually Defines a U.S. LLC", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A U.S. bank account does not make your foreign company a U.S. LLC",
          "What matters is where your company was legally registered (which state or country)",
          "Having U.S. customers or revenue does not change your company's classification"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T08:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-what-is-a-reporting-corporation-irs-form-5472-key-",
      title: "What Is a Reporting Corporation? IRS Form 5472 Key Concept Explained",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: What Is a Reporting Corporation? IRS Form 5472 Key Concept Explained. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Sophie T.", avatarSeed: "digital_nomad_tax-ezWr4r", badge: "subscriber" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-01T08:00:00.000Z",
      viewCount: 1300,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Is a Reporting Corporation? IRS Form 5472 Key Concept Explained",
      seoDescription: "Expert guidance on What Is a Reporting Corporation? IRS Form 5472 Key Concept Explained",
    },
    answers: [{
      id: "a-what-is-a-reporting-corporation-irs-form-5472-key-",
      questionId: "",
      videoId: "ezWr4r6dkAI",
      articleContent: {
        sections: [
          { heading: "The Reporting Corporation Concept", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why Disregarded Entities Are Treated as Corporations Here", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A reporting corporation is any entity required to file Form 5472 with the IRS",
          "Foreign-owned single-member LLCs are treated as corporations solely for Form 5472 purposes",
          "The pro forma Form 1120 serves as a cover return to attach Form 5472"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T11:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-disregarded-entity-explained-how-single-member-llc",
      title: "Disregarded Entity Explained: How Single-Member LLCs Are Taxed by the IRS",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Disregarded Entity Explained: How Single-Member LLCs Are Taxed by the IRS. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Daniel M.", avatarSeed: "non_us_filer-afVaS-", },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-01T11:00:00.000Z",
      viewCount: 2231,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Disregarded Entity Explained: How Single-Member LLCs Are Taxed by the IRS",
      seoDescription: "Expert guidance on Disregarded Entity Explained: How Single-Member LLCs Are Taxed by the IRS",
    },
    answers: [{
      id: "a-disregarded-entity-explained-how-single-member-llc",
      questionId: "",
      videoId: "afVaS-DHhsU",
      articleContent: {
        sections: [
          { heading: "What Is a Disregarded Entity?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How Single-Member LLCs Are Taxed", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A disregarded entity is an LLC the IRS treats as not separate from its single owner",
          "Single-member LLCs are automatically classified as disregarded entities — no election needed",
          "The LLC does not file its own income tax return; income flows to the owner"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T14:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-when-must-your-llc-file-form-5472-avoid-the-25-000",
      title: "When Must Your LLC File Form 5472? Avoid the $25,000 IRS Penalty",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: When Must Your LLC File Form 5472? Avoid the $25,000 IRS Penalty. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Brandon", avatarSeed: "intl_llc_q-YV-Hk4", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-01T14:00:00.000Z",
      viewCount: 1061,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "When Must Your LLC File Form 5472? Avoid the $25,000 IRS Penalty",
      seoDescription: "Expert guidance on When Must Your LLC File Form 5472? Avoid the $25,000 IRS Penalty",
    },
    answers: [{
      id: "a-when-must-your-llc-file-form-5472-avoid-the-25-000",
      questionId: "",
      videoId: "YV-Hk4sU_m4",
      articleContent: {
        sections: [
          { heading: "When Form 5472 Filing Is Required", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Reportable Transactions", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 5472 is due whenever your LLC has reportable transactions with its foreign owner",
          "Capital contributions (funding your LLC) count as reportable transactions",
          "Even zero-income LLCs must file if the owner contributed any money to the LLC"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T17:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-did-your-llc-elect-corporate-status-form-8832-and-",
      title: "Did Your LLC Elect Corporate Status? Form 8832 and S-Corp Check",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Did Your LLC Elect Corporate Status? Form 8832 and S-Corp Check. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Mei", avatarSeed: "global_startup-4E50ao", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-01T23:00:00.000Z",
      viewCount: 539,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Did Your LLC Elect Corporate Status? Form 8832 and S-Corp Check",
      seoDescription: "Expert guidance on Did Your LLC Elect Corporate Status? Form 8832 and S-Corp Check",
    },
    answers: [{
      id: "a-did-your-llc-elect-corporate-status-form-8832-and-",
      questionId: "",
      videoId: "4E50aoGm7Hg",
      articleContent: {
        sections: [
          { heading: "Default Classification: Disregarded Entity", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Electing Corporate Status with Form 8832", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Single-member LLCs are disregarded entities by default — no election needed",
          "Form 8832 is required only if you want to change to corporate taxation",
          "If you never filed Form 8832, your LLC is still a disregarded entity"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T02:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-can-a-foreign-owned-llc-be-an-s-corp-why-the-irs-s",
      title: "Can a Foreign-Owned LLC Be an S-Corp? Why the IRS Says No",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Can a Foreign-Owned LLC Be an S-Corp? Why the IRS Says No. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Hassan", avatarSeed: "overseas_biz-BQcVoH", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-02T02:00:00.000Z",
      viewCount: 3131,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Can a Foreign-Owned LLC Be an S-Corp? Why the IRS Says No",
      seoDescription: "Expert guidance on Can a Foreign-Owned LLC Be an S-Corp? Why the IRS Says No",
    },
    answers: [{
      id: "a-can-a-foreign-owned-llc-be-an-s-corp-why-the-irs-s",
      questionId: "",
      videoId: "BQcVoHZrGwQ",
      articleContent: {
        sections: [
          { heading: "S-Corp Election Is Not Available to Foreign Owners", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why S-Corp Status Requires U.S. Persons", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Foreign owners (non-resident aliens) cannot elect S-Corp status for their LLC",
          "S-Corporation shareholders must be U.S. citizens or U.S. resident aliens",
          "Your options are: disregarded entity (default) or C-Corporation (via Form 8832)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T05:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-do-you-need-to-complete-all-sections-of-form-5472-",
      title: "Do You Need to Complete All Sections of Form 5472? Common Misconceptions",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Do You Need to Complete All Sections of Form 5472? Common Misconceptions. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Olga", avatarSeed: "remote_ceo-qGxnGL", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-02T05:00:00.000Z",
      viewCount: 1330,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Do You Need to Complete All Sections of Form 5472? Common Misconceptions",
      seoDescription: "Expert guidance on Do You Need to Complete All Sections of Form 5472? Common Misconceptions",
    },
    answers: [{
      id: "a-do-you-need-to-complete-all-sections-of-form-5472-",
      questionId: "",
      videoId: "qGxnGLQNng8",
      articleContent: {
        sections: [
          { heading: "A Common Misconception About Form 5472", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Which Parts to Complete", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "You do not need to complete every section of Form 5472 — only the parts that apply",
          "Most foreign-owned disregarded entities complete Parts I, II, III, IV, and VII",
          "Lines 43a and 43b must be left blank for disregarded entities per IRS instructions"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T08:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-3-common-misunderstandings-filing-form-1120-does-n",
      title: "3 Common Misunderstandings: Filing Form 1120 Does Not Mean Corporate Taxation",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: 3 Common Misunderstandings: Filing Form 1120 Does Not Mean Corporate Taxation. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Tomas", avatarSeed: "solo_llc_intl-FD9ax1", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-02T08:00:00.000Z",
      viewCount: 460,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "3 Common Misunderstandings: Filing Form 1120 Does Not Mean Corporate Taxation",
      seoDescription: "Expert guidance on 3 Common Misunderstandings: Filing Form 1120 Does Not Mean Corporate Taxation",
    },
    answers: [{
      id: "a-3-common-misunderstandings-filing-form-1120-does-n",
      questionId: "",
      videoId: "FD9ax1C1Lqg",
      articleContent: {
        sections: [
          { heading: "Misunderstanding #1: Filing Form 1120 Means Corporate Taxation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Misunderstanding #2: No Income Means No Filing", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Filing Form 1120 as a pro forma does NOT mean your LLC is taxed as a corporation",
          "Zero income does not eliminate the filing requirement — capital contributions trigger it",
          "The $25,000 penalty applies regardless of your LLC's size or activity level"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T11:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-foreign-owned-llc-with-no-u-s-income-you-still-mus",
      title: "Foreign-Owned LLC with No U.S. Income? You Still Must File Form 5472",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Foreign-Owned LLC with No U.S. Income? You Still Must File Form 5472. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Aisha", avatarSeed: "ecom_expat-nrd5AS", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-02T11:00:00.000Z",
      viewCount: 2880,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign-Owned LLC with No U.S. Income? You Still Must File Form 5472",
      seoDescription: "Expert guidance on Foreign-Owned LLC with No U.S. Income? You Still Must File Form 5472",
    },
    answers: [{
      id: "a-foreign-owned-llc-with-no-u-s-income-you-still-mus",
      questionId: "",
      videoId: "nrd5ASNVWJA",
      articleContent: {
        sections: [
          { heading: "Zero U.S. Income Does Not Eliminate Filing Requirements", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Triggers the Filing Requirement", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Zero income does not mean zero filing obligations for foreign-owned LLCs",
          "Capital contributions (even small amounts) trigger the Form 5472 requirement",
          "The filing requirement is based on reportable transactions, not income"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T14:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-why-the-irs-requires-form-5472-for-foreign-owned-l",
      title: "Why the IRS Requires Form 5472 for Foreign-Owned LLCs: Pro Forma 1120 Explained",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Why the IRS Requires Form 5472 for Foreign-Owned LLCs: Pro Forma 1120 Explained. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Dmitri", avatarSeed: "freelancer_abroad-3gE5BY", badge: "subscriber" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-02T14:00:00.000Z",
      viewCount: 3037,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Why the IRS Requires Form 5472 for Foreign-Owned LLCs: Pro Forma 1120 Explained",
      seoDescription: "Expert guidance on Why the IRS Requires Form 5472 for Foreign-Owned LLCs: Pro Forma 1120 Explained",
    },
    answers: [{
      id: "a-why-the-irs-requires-form-5472-for-foreign-owned-l",
      questionId: "",
      videoId: "3gE5BYgtA8A",
      articleContent: {
        sections: [
          { heading: "The Purpose of Form 5472", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What \\", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 5472 is an information return that tracks transactions between the LLC and foreign owner",
          "Pro forma means the Form 1120 is a simplified structural filing, not a full corporate return",
          "The 1120 shows zero tax liability and serves as a cover sheet for Form 5472"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T17:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-form-5472-explained-what-it-is-who-must-file-and-h",
      isFeatured: true,
      title: "Form 5472 Explained: What It Is, Who Must File, and How It Works (2025-2026)",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Form 5472 Explained: What It Is, Who Must File, and How It Works. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Camila", avatarSeed: "cross_border_biz-art-54", badge: "subscriber" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-02T23:00:00.000Z",
      viewCount: 2282,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 5472 Explained: What It Is, Who Must File, and How It Works (2025-2026)",
      seoDescription: "Expert guidance on Form 5472 Explained: What It Is, Who Must File, and How It Works",
    },
    answers: [{
      id: "a-form-5472-explained-what-it-is-who-must-file-and-h",
      questionId: "",
      videoId: "art-5472-overview",
      articleContent: {
        sections: [
          { heading: "What Is Form 5472?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Must File Form 5472?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 5472 is an information return — it reports transactions, not income or tax",
          "Foreign-owned single-member LLCs must file Form 5472 with a pro forma Form 1120 annually",
          "The LLC is treated as a \\"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-03T02:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-form-5472-reportable-transactions-what-counts-and-",
      title: "Form 5472 Reportable Transactions: What Counts and How to Report (2025-2026)",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Form 5472 Reportable Transactions: What Counts and How to Report. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Liam", avatarSeed: "eu_llc_owner-qa-547", badge: "subscriber" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-03T02:00:00.000Z",
      viewCount: 423,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 5472 Reportable Transactions: What Counts and How to Report (2025-2026)",
      seoDescription: "Expert guidance on Form 5472 Reportable Transactions: What Counts and How to Report",
    },
    answers: [{
      id: "a-form-5472-reportable-transactions-what-counts-and-",
      questionId: "",
      videoId: "qa-5472-reportable-transactions",
      articleContent: {
        sections: [
          { heading: "What is a reportable transaction on Form 5472?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What are the most common reportable transactions for foreign-owned LLCs?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A reportable transaction is any exchange of money, property, or services between you and your LLC",
          "Capital contributions (even the initial bank deposit) are reportable transactions",
          "Part IV covers monetary transactions; Part V covers formation, contributions, and distributions for DEs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-03T05:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-form-5472-penalties-25-000-deadlines-and-extension",
      isFeatured: true,
      title: "Form 5472 Penalties ($25,000), Deadlines, and Extension Rules (2025-2026)",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Form 5472 Penalties , Deadlines, and Extension Rules. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Fatima", avatarSeed: "apac_founder-qa-547", },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-03T05:00:00.000Z",
      viewCount: 2961,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 5472 Penalties ($25,000), Deadlines, and Extension Rules (2025-2026)",
      seoDescription: "Expert guidance on Form 5472 Penalties , Deadlines, and Extension Rules",
    },
    answers: [{
      id: "a-form-5472-penalties-25-000-deadlines-and-extension",
      questionId: "",
      videoId: "qa-5472-penalties-extensions",
      articleContent: {
        sections: [
          { heading: "What is the deadline for filing Form 5472?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Can I get an extension to file?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Filing deadline: April 15 for calendar-year filers (attached to pro forma Form 1120)",
          "Automatic 6-month extension available by filing Form 7004 — extends to October 15",
          "Penalty: $25,000 per form for failure to file or filing substantially incomplete"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-03T08:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-how-to-file-form-5472-step-by-step-guide-for-forei",
      isFeatured: true,
      title: "How to File Form 5472: Step-by-Step Guide for Foreign-Owned LLCs (2025-2026)",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: How to File Form 5472: Step-by-Step Guide for Foreign-Owned LLCs. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Oscar", avatarSeed: "latam_startup-qa-547", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-03T08:00:00.000Z",
      viewCount: 1041,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How to File Form 5472: Step-by-Step Guide for Foreign-Owned LLCs (2025-2026)",
      seoDescription: "Expert guidance on How to File Form 5472: Step-by-Step Guide for Foreign-Owned LLCs",
    },
    answers: [{
      id: "a-how-to-file-form-5472-step-by-step-guide-for-forei",
      questionId: "",
      videoId: "qa-5472-how-to-file",
      articleContent: {
        sections: [
          { heading: "What do I need before I start filling out Form 5472?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How do I complete Part I (Reporting Corporation)?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "You need your LLC's EIN, formation details, owner information, and transaction records before starting",
          "Part I identifies the LLC; Part II identifies the foreign owner; Part III identifies the related party",
          "Part IV reports monetary transactions; Part V reports contributions and distributions for DEs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-03T11:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-form-5472-common-mistakes-avoid-these-costly-irs-f",
      title: "Form 5472 Common Mistakes: Avoid These Costly IRS Filing Errors",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Form 5472 Common Mistakes: Avoid These Costly IRS Filing Errors. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Ingrid", avatarSeed: "mena_biz-qa-547", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-03T11:00:00.000Z",
      viewCount: 2811,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 5472 Common Mistakes: Avoid These Costly IRS Filing Errors",
      seoDescription: "Expert guidance on Form 5472 Common Mistakes: Avoid These Costly IRS Filing Errors",
    },
    answers: [{
      id: "a-form-5472-common-mistakes-avoid-these-costly-irs-f",
      questionId: "",
      videoId: "qa-5472-common-mistakes",
      articleContent: {
        sections: [
          { heading: "Not filing because the LLC had no income", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Filing a substantially incomplete Form 5472", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Zero income does not mean zero filing obligation — reportable transactions trigger the requirement",
          "A substantially incomplete Form 5472 is treated as not filed — $25,000 penalty still applies",
          "Part IV must be completed when the related party is foreign — enter '0' on lines with no transactions to show the section is complete"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-03T14:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-form-5472-address-registered-agent-vs-c-o-address-",
      title: "Form 5472 Address: Registered Agent vs C/O Address Rules for Foreign-Owned LLCs",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Form 5472 Address: Registered Agent vs C/O Address Rules for Foreign-Owned LLCs. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Ravi", avatarSeed: "uk_llc_help-qa-547", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-03T14:00:00.000Z",
      viewCount: 1678,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 5472 Address: Registered Agent vs C/O Address Rules for Foreign-Owned LLCs",
      seoDescription: "Expert guidance on Form 5472 Address: Registered Agent vs C/O Address Rules for Foreign-Owned LLCs",
    },
    answers: [{
      id: "a-form-5472-address-registered-agent-vs-c-o-address-",
      questionId: "",
      videoId: "qa-5472-address-fields",
      articleContent: {
        sections: [
          { heading: "Do not use your registered agent address as your business address", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "The IRS-approved solution: use C/O (care of) formatting", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Do NOT use your registered agent address as the business address — the IRS Form 1120 instructions explicitly prohibit this",
          "Use C/O (care of) formatting to route mail through a reliable third party — this is explicitly authorized",
          "Keep addresses consistent between Form 1120 and Form 5472 Part I"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-03T17:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-foreign-owned-llc-zero-income-must-you-still-file-",
      title: "Foreign-Owned LLC Zero Income: Must You Still File Form 5472",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Foreign-Owned LLC Zero Income: Must You Still File Form 5472. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Elena", avatarSeed: "de_saas_owner-qa-547", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-03-03T23:00:00.000Z",
      viewCount: 1198,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign-Owned LLC Zero Income: Must You Still File Form 5472",
      seoDescription: "Expert guidance on Foreign-Owned LLC Zero Income: Must You Still File Form 5472",
    },
    answers: [{
      id: "a-foreign-owned-llc-zero-income-must-you-still-file-",
      questionId: "",
      videoId: "qa-5472-zero-income-filing",
      articleContent: {
        sections: [
          { heading: "Filing is triggered by transactions, not income", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What counts as a reportable transaction", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Filing is triggered by reportable transactions, NOT income",
          "Capital contributions, registered agent payments, and formation costs all count",
          "The $25,000 penalty applies even for zero-income LLCs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-04T02:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-form-1120-for-foreign-owned-llcs-what-you-need-to-",
      title: "Form 1120 for Foreign-Owned LLCs: What You Need to Know (2025 Tax Year)",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Form 1120 for Foreign-Owned LLCs: What You Need to Know. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Jun", avatarSeed: "jp_tech_founder-phJ7Mn", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-03-04T02:00:00.000Z",
      viewCount: 1224,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 1120 for Foreign-Owned LLCs: What You Need to Know (2025 Tax Year)",
      seoDescription: "Expert guidance on Form 1120 for Foreign-Owned LLCs: What You Need to Know",
    },
    answers: [{
      id: "a-form-1120-for-foreign-owned-llcs-what-you-need-to-",
      questionId: "",
      videoId: "phJ7MnpWcBg",
      articleContent: {
        sections: [
          { heading: "Form 1120 for Disregarded Entities", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What to Include on the Pro Forma 1120", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Foreign-owned single-member LLCs file a pro forma (simplified) Form 1120",
          "The 1120 serves as a cover return for Form 5472 — it does not report income tax",
          "Include basic entity information; leave income/deduction lines blank or at zero"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-04T05:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-form-1120-explained-what-it-is-who-files-it-and-ho",
      title: "Form 1120 Explained: What It Is, Who Files It, and How It Works (2025-2026)",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Form 1120 Explained: What It Is, Who Files It, and How It Works. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Grace", avatarSeed: "au_startup_q-art-11", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-03-04T05:00:00.000Z",
      viewCount: 2446,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 1120 Explained: What It Is, Who Files It, and How It Works (2025-2026)",
      seoDescription: "Expert guidance on Form 1120 Explained: What It Is, Who Files It, and How It Works",
    },
    answers: [{
      id: "a-form-1120-explained-what-it-is-who-files-it-and-ho",
      questionId: "",
      videoId: "art-1120-overview",
      articleContent: {
        sections: [
          { heading: "What Is Form 1120?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Must File Form 1120?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 1120 is the annual income tax return for all domestic C corporations",
          "LLCs that elected C-Corp status via Form 8832 file the full Form 1120",
          "The form has 6 pages covering income, deductions, tax computation, balance sheet, and reconciliation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-04T08:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-form-1120-filing-deadlines-and-extension-rules-for",
      title: "Form 1120 Filing Deadlines and Extension Rules for C Corporations (2025-2026)",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Form 1120 Filing Deadlines and Extension Rules for C Corporations. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Samuel", avatarSeed: "ca_llc_owner-art-11", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-03-04T08:00:00.000Z",
      viewCount: 1381,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 1120 Filing Deadlines and Extension Rules for C Corporations (2025-2026)",
      seoDescription: "Expert guidance on Form 1120 Filing Deadlines and Extension Rules for C Corporations",
    },
    answers: [{
      id: "a-form-1120-filing-deadlines-and-extension-rules-for",
      questionId: "",
      videoId: "art-1120-deadlines",
      articleContent: {
        sections: [
          { heading: "When Is Form 1120 Due?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How to Request an Extension", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Calendar-year C corporations must file Form 1120 by April 15",
          "Form 7004 grants a 6-month automatic extension for filing — but not for payment",
          "Quarterly estimated tax payments are required if expected tax is $500 or more"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-04T11:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-llc-elected-as-c-corp-form-1120-filing-requirement",
      title: "LLC Elected as C-Corp: Form 1120 Filing Requirements and Special Rules",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: LLC Elected as C-Corp: Form 1120 Filing Requirements and Special Rules. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Nadia", avatarSeed: "new_1120_filer-qa-llc", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-03-04T11:00:00.000Z",
      viewCount: 2760,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "LLC Elected as C-Corp: Form 1120 Filing Requirements and Special Rules",
      seoDescription: "Expert guidance on LLC Elected as C-Corp: Form 1120 Filing Requirements and Special Rules",
    },
    answers: [{
      id: "a-llc-elected-as-c-corp-form-1120-filing-requirement",
      questionId: "",
      videoId: "qa-llc-ccorp-election",
      articleContent: {
        sections: [
          { heading: "How does an LLC elect to be taxed as a C corporation?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What forms does an LLC taxed as a C-Corp need to file?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "File Form 8832 to elect C-Corp status — attach a copy to the first Form 1120",
          "The LLC files Form 1120 identically to a traditional corporation after the election",
          "The 60-month rule prevents changing tax classification for 5 years"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-04T14:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-c-corporation-deductions-meals-entertainment-and-d",
      title: "C Corporation Deductions: Meals, Entertainment, and Depreciation Rules (2025-2026)",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: C Corporation Deductions: Meals, Entertainment, and Depreciation Rules. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Tobias", avatarSeed: "corp_tax_q-qa-112", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-03-04T14:00:00.000Z",
      viewCount: 2803,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "C Corporation Deductions: Meals, Entertainment, and Depreciation Rules (2025-2026)",
      seoDescription: "Expert guidance on C Corporation Deductions: Meals, Entertainment, and Depreciation Rules",
    },
    answers: [{
      id: "a-c-corporation-deductions-meals-entertainment-and-d",
      questionId: "",
      videoId: "qa-1120-deductions",
      articleContent: {
        sections: [
          { heading: "Are business meals deductible for C corporations?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Are entertainment expenses deductible?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Business meals: 50% deductible (the temporary 100% restaurant deduction expired after 2022)",
          "Entertainment: Fully non-deductible since the 2017 Tax Cuts and Jobs Act — no exceptions",
          "Bonus depreciation: Being phased down (40% in 2025, 20% in 2026, 0% in 2027)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-04T17:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-form-1120-schedules-explained-schedule-j-l-m-1-and",
      title: "Form 1120 Schedules Explained: Schedule J, L, M-1, and M-2",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Form 1120 Schedules Explained: Schedule J, L, M-1, and M-2. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Yara", avatarSeed: "first_filer-qa-112", },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-03-04T23:00:00.000Z",
      viewCount: 1239,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 1120 Schedules Explained: Schedule J, L, M-1, and M-2",
      seoDescription: "Expert guidance on Form 1120 Schedules Explained: Schedule J, L, M-1, and M-2",
    },
    answers: [{
      id: "a-form-1120-schedules-explained-schedule-j-l-m-1-and",
      questionId: "",
      videoId: "qa-1120-schedules",
      articleContent: {
        sections: [
          { heading: "What is Schedule J on Form 1120?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What is Schedule L (Balance Sheet)?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Schedule J: Tax computation — 21% rate, credits, payments, and refund/balance due",
          "Schedule L: Balance sheet — assets, liabilities, and equity at start and end of year",
          "Schedule M-1: Reconciliation of book income to taxable income (required if assets < $10M)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-05T02:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-net-operating-losses-for-c-corporations-carryforwa",
      title: "Net Operating Losses for C Corporations: Carryforward Rules and 80% Limitation",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Net Operating Losses for C Corporations: Carryforward Rules and 80% Limitation. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "markus_berlin", avatarSeed: "ein_help_needed-qa-nol", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-03-05T02:00:00.000Z",
      viewCount: 1069,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Net Operating Losses for C Corporations: Carryforward Rules and 80% Limitation",
      seoDescription: "Expert guidance on Net Operating Losses for C Corporations: Carryforward Rules and 80% Limitation",
    },
    answers: [{
      id: "a-net-operating-losses-for-c-corporations-carryforwa",
      questionId: "",
      videoId: "qa-nol-ccorp",
      articleContent: {
        sections: [
          { heading: "What is a net operating loss (NOL) for a C corporation?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Can NOLs be carried forward?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Post-2017 NOLs carry forward indefinitely but are limited to 80% of taxable income",
          "Pre-2018 NOLs have a 20-year carryforward with no 80% cap",
          "General carryback was eliminated — only farming and insurance company losses can be carried back"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-05T05:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-form-8832-entity-classification-election-key-rules",
      title: "Form 8832 Entity Classification Election: Key Rules You Must Know (Part 3)",
      body: "I'm considering filing Form 8832 and need to understand: Form 8832 Entity Classification Election: Key Rules You Must Know. What are the implications and what mistakes should I avoid?",
      author: { displayName: "tokyo.sarah", avatarSeed: "married_filing_q-HhU2PW", badge: "new-member" as const },
      category: "form-8832",
      tags: ["form-8832"],
      postedAt: "2026-03-05T05:00:00.000Z",
      viewCount: 1886,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8832 Entity Classification Election: Key Rules You Must Know (Part 3)",
      seoDescription: "Expert guidance on Form 8832 Entity Classification Election: Key Rules You Must Know",
    },
    answers: [{
      id: "a-form-8832-entity-classification-election-key-rules",
      questionId: "",
      videoId: "HhU2PW-YmIM",
      articleContent: {
        sections: [
          { heading: "Form 8832 Key Rules: Number of Owners", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Providing Owner Information", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Single-owner entities can elect corporation or disregarded entity status",
          "Multi-owner entities can elect partnership or corporation status",
          "Owner information (SSN or ITIN) must be provided on the form"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-05T08:00:00.000Z",
      sources: [{ label: "Form 8832 Instructions", url: "https://www.irs.gov/instructions/i8832" }],
    }],
  },

  {
    question: {
      id: "q-form-8832-entity-classification-election-step-by-s",
      title: "Form 8832 Entity Classification Election: Step-by-Step Instructions (Part 2)",
      body: "I'm considering filing Form 8832 and need to understand: Form 8832 Entity Classification Election: Step-by-Step Instructions. What are the implications and what mistakes should I avoid?",
      author: { displayName: "dave_in_london", avatarSeed: "filing_status_help-0yy714", badge: "new-member" as const },
      category: "form-8832",
      tags: ["form-8832"],
      postedAt: "2026-03-05T08:00:00.000Z",
      viewCount: 923,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8832 Entity Classification Election: Step-by-Step Instructions (Part 2)",
      seoDescription: "Expert guidance on Form 8832 Entity Classification Election: Step-by-Step Instructions",
    },
    answers: [{
      id: "a-form-8832-entity-classification-election-step-by-s",
      questionId: "",
      videoId: "0yy714Fh-YU",
      articleContent: {
        sections: [
          { heading: "Part I: Election Information", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Choosing Your Classification", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Specify whether your entity is newly formed or changing an existing classification",
          "Foreign owners can elect disregarded entity (default) or C-Corporation — not S-Corp",
          "The election must be filed within 75 days before to 12 months after the effective date"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-05T11:00:00.000Z",
      sources: [{ label: "Form 8832 Instructions", url: "https://www.irs.gov/instructions/i8832" }],
    }],
  },

  {
    question: {
      id: "q-form-8832-entity-classification-election-how-it-wo",
      title: "Form 8832 Entity Classification Election: How It Works (Part 1)",
      body: "I'm considering filing Form 8832 and need to understand: Form 8832 Entity Classification Election: How It Works. What are the implications and what mistakes should I avoid?",
      author: { displayName: "priya.m", avatarSeed: "tax_newbie-Y5CfPV", badge: "new-member" as const },
      category: "form-8832",
      tags: ["form-8832"],
      postedAt: "2026-03-05T11:00:00.000Z",
      viewCount: 960,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8832 Entity Classification Election: How It Works (Part 1)",
      seoDescription: "Expert guidance on Form 8832 Entity Classification Election: How It Works",
    },
    answers: [{
      id: "a-form-8832-entity-classification-election-how-it-wo",
      questionId: "",
      videoId: "Y5CfPVurViE",
      articleContent: {
        sections: [
          { heading: "What Is Form 8832?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "When You Need Form 8832", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8832 lets you choose a tax classification different from your entity's default",
          "Single-member LLCs default to disregarded entity status — no Form 8832 needed for this",
          "Only file Form 8832 if you want to change to corporate taxation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-05T14:00:00.000Z",
      sources: [{ label: "Form 8832 Instructions", url: "https://www.irs.gov/instructions/i8832" }],
    }],
  },

  {
    question: {
      id: "q-introduction-to-single-member-llc-complete-tax-gui",
      title: "Introduction to Single Member LLC: Complete Tax Guide for U.S. Business Owners",
      body: "I'm choosing a business structure and want to understand: Introduction to Single Member LLC: Complete Tax Guide for U.S. Business Owners. What are the tax and liability implications I should consider?",
      author: { displayName: "alex_hk", avatarSeed: "biz_tax_question-EOz9MW", badge: "new-member" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-03-05T14:00:00.000Z",
      viewCount: 2560,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Introduction to Single Member LLC: Complete Tax Guide for U.S. Business Owners",
      seoDescription: "Expert guidance on Introduction to Single Member LLC: Complete Tax Guide for U.S. Business Owners",
    },
    answers: [{
      id: "a-introduction-to-single-member-llc-complete-tax-gui",
      questionId: "",
      videoId: "EOz9MWzb8Sw",
      articleContent: {
        sections: [
          { heading: "Introduction to Single-Member LLCs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Default Tax Treatment", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A single-member LLC has one owner and is the most common structure for foreign entrepreneurs",
          "The IRS treats it as a disregarded entity by default — no separate income tax return needed",
          "Foreign owners must file Form 5472 + pro forma 1120 annually"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-05T17:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-llc-taxes-explained-how-llcs-are-taxed-by-the-irs-",
      title: "LLC Taxes Explained: How LLCs Are Taxed by the IRS (Complete Guide)",
      body: "I'm choosing a business structure and want to understand: LLC Taxes Explained: How LLCs Are Taxed by the IRS. What are the tax and liability implications I should consider?",
      author: { displayName: "nina_from_brazil", avatarSeed: "startup_tax_q-6QO8Ge", badge: "new-member" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-03-05T23:00:00.000Z",
      viewCount: 667,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "LLC Taxes Explained: How LLCs Are Taxed by the IRS (Complete Guide)",
      seoDescription: "Expert guidance on LLC Taxes Explained: How LLCs Are Taxed by the IRS",
    },
    answers: [{
      id: "a-llc-taxes-explained-how-llcs-are-taxed-by-the-irs-",
      questionId: "",
      videoId: "6QO8GeJa83M",
      articleContent: {
        sections: [
          { heading: "The LLC: A Hybrid Business Structure", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How the IRS Classifies LLCs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "LLCs are hybrid structures offering liability protection with tax flexibility",
          "The IRS classifies single-member LLCs as disregarded entities by default",
          "Multi-member LLCs are treated as partnerships; either type can elect corporate status"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-06T02:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-partnership-taxation-explained-how-the-irs-taxes-p",
      title: "Partnership Taxation Explained: How the IRS Taxes Partnerships",
      body: "I'm choosing a business structure and want to understand: Partnership Taxation Explained: How the IRS Taxes Partnerships. What are the tax and liability implications I should consider?",
      author: { displayName: "carlos.mx", avatarSeed: "llc_formation_q-npr6RS", badge: "subscriber" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-03-06T02:00:00.000Z",
      viewCount: 3057,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Partnership Taxation Explained: How the IRS Taxes Partnerships",
      seoDescription: "Expert guidance on Partnership Taxation Explained: How the IRS Taxes Partnerships",
    },
    answers: [{
      id: "a-partnership-taxation-explained-how-the-irs-taxes-p",
      questionId: "",
      videoId: "npr6RSctaY4",
      articleContent: {
        sections: [
          { heading: "General vs. Limited Partnerships", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How Partnerships Are Taxed", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Partnerships are pass-through entities — no entity-level income tax",
          "Form 1065 is filed by the partnership; K-1s are issued to each partner",
          "Partners pay tax on allocated income regardless of cash distributions received"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-06T05:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-c-corp-vs-s-corp-tax-basics-corporation-taxation-e",
      title: "C Corp vs S Corp Tax Basics: Corporation Taxation Explained",
      body: "I'm choosing a business structure and want to understand: C Corp vs S Corp Tax Basics: Corporation Taxation Explained. What are the tax and liability implications I should consider?",
      author: { displayName: "yuki_osaka", avatarSeed: "entity_choice_q-2CFOpr", badge: "subscriber" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-03-06T05:00:00.000Z",
      viewCount: 648,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "C Corp vs S Corp Tax Basics: Corporation Taxation Explained",
      seoDescription: "Expert guidance on C Corp vs S Corp Tax Basics: Corporation Taxation Explained",
    },
    answers: [{
      id: "a-c-corp-vs-s-corp-tax-basics-corporation-taxation-e",
      questionId: "",
      videoId: "2CFOprdwqWc",
      articleContent: {
        sections: [
          { heading: "Corporation Basics: More Power, More Complexity", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "C Corporation Double Taxation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "C Corps face double taxation: corporate tax on profits plus individual tax on dividends",
          "S Corps avoid double taxation through pass-through treatment (Form 2553 election)",
          "S Corp eligibility: max 100 shareholders, U.S. shareholders only, one class of stock"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-06T08:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-single-member-llc-taxes-everything-you-need-to-kno",
      title: "Single Member LLC Taxes: Everything You Need to Know (2025)",
      body: "I'm choosing a business structure and want to understand: Single Member LLC Taxes: Everything You Need to Know. What are the tax and liability implications I should consider?",
      author: { displayName: "tom_sydney", avatarSeed: "tax_credit_q-pqG200", badge: "subscriber" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-03-06T08:00:00.000Z",
      viewCount: 2465,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Single Member LLC Taxes: Everything You Need to Know (2025)",
      seoDescription: "Expert guidance on Single Member LLC Taxes: Everything You Need to Know",
    },
    answers: [{
      id: "a-single-member-llc-taxes-everything-you-need-to-kno",
      questionId: "",
      videoId: "pqG200vruqM",
      articleContent: {
        sections: [
          { heading: "Single-Member LLC Tax Overview", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Liability Protection and Tax Simplicity", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Default IRS treatment: disregarded entity — no separate entity-level tax return",
          "Domestic owners report on Schedule C; foreign owners file Form 5472 + pro forma 1120",
          "Combines liability protection with pass-through tax simplicity"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-06T11:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-sole-proprietorship-explained-taxes-pros-and-cons-",
      title: "Sole Proprietorship Explained: Taxes, Pros and Cons You Must Know",
      body: "I'm choosing a business structure and want to understand: Sole Proprietorship Explained: Taxes, Pros and Cons You Must Know. What are the tax and liability implications I should consider?",
      author: { displayName: "lisa.taipei", avatarSeed: "amt_confused-sKtLNj", },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-03-06T11:00:00.000Z",
      viewCount: 1590,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Sole Proprietorship Explained: Taxes, Pros and Cons You Must Know",
      seoDescription: "Expert guidance on Sole Proprietorship Explained: Taxes, Pros and Cons You Must Know",
    },
    answers: [{
      id: "a-sole-proprietorship-explained-taxes-pros-and-cons-",
      questionId: "",
      videoId: "sKtLNjIgFCk",
      articleContent: {
        sections: [
          { heading: "What Is a Sole Proprietorship?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Tax Treatment", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Simplest business structure — no formal filing required to create",
          "No legal separation between owner and business (unlimited personal liability)",
          "Income reported on Schedule C of Form 1040"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-06T14:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  // =====================================================
  // Q&A: DUNS Number Application
  // =====================================================
  {
    question: {
      id: "q-duns-number-llc-sole-proprietorship",
      isFeatured: true,
      title: "DUNS Number Application: Is my single-member LLC a sole proprietorship?",
      body: "I'm applying for a DUNS number for my single-member LLC (foreign-owned) so I can enroll in the Apple Developer Program. During the application, it asks \"Are you a sole proprietorship?\" — should I answer Yes or No?\n\nI've heard that the IRS treats single-member LLCs as \"disregarded entities\" which sounds similar to a sole proprietorship. I don't want to answer wrong and have my DUNS number associated with the incorrect business structure.\n\nAlso, any tips on the rest of the DUNS application process? I used my overseas address as the physical address since that's where I actually work from.",
      author: {
        displayName: "dev_shanghai",
        avatarSeed: "duns-llc-question-2026",
        badge: "new-member" as const,
      },
      category: "entity-types",
      tags: ["DUNS number", "LLC", "sole proprietorship", "Apple Developer", "Google Play", "foreign owner", "single-member LLC"],
      postedAt: "2026-04-09T10:00:00Z",
      viewCount: 892,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "DUNS Number: Is a Single-Member LLC a Sole Proprietorship? Application Guide",
      seoDescription: "Expert answer on whether to select sole proprietorship or LLC on your DUNS number application. Step-by-step guidance for foreign-owned single-member LLCs applying for Apple Developer and Google Play accounts.",
    },
    answers: [{
      id: "a-duns-number-llc-sole-proprietorship",
      questionId: "",
      articleContent: {
        sections: [
          {
            heading: "Answer: No — a single-member LLC is NOT a sole proprietorship",
            body: "Select \"No\" when asked if you are a sole proprietorship. Even though the IRS treats your single-member LLC as a \"disregarded entity\" for tax purposes, the legal structure is fundamentally different.\n\nA sole proprietorship is an unincorporated business with no formal registration — the owner and the business are legally the same person, with no liability protection. An LLC (Limited Liability Company) is a formally registered legal entity filed with a state Secretary of State. It provides personal liability protection that a sole proprietorship does not.\n\nThe \"disregarded entity\" classification only affects how the IRS taxes you — it does not change your legal structure. For D&B's purposes (and for Apple and Google developer enrollment), what matters is your legal structure, not your tax classification."
          },
          {
            heading: "How to answer each DUNS application question correctly",
            body: "Question 1 — Full legal business name: Enter your name exactly as it appears on your Articles of Organization, including punctuation. If your formation documents say \"Your Company, LLC\" — include the comma and \"LLC\" exactly.\n\nQuestion 2 — Are you a sole proprietorship? Select NO. You are an LLC.\n\nQuestion 3 — Physical business address: Use your actual principal place of business. For foreign-owned LLCs, your overseas address is correct. Do not use your U.S. registered agent address — D&B wants to know where you actually operate from.\n\nQuestion 4 — Business details: Provide your industry, formation date, and employee count (1 if you are a solo founder).\n\nQuestion 5 — Review and submit."
          },
          {
            heading: "The D&B verification process (TruePicVision inspection)",
            body: "After submitting your application, D&B may ask you to complete a verification inspection through their TruePicVision platform. You will receive an email with a link to web.truepicvision.com.\n\nThe inspection is straightforward — it re-confirms the information you already provided (legal name, address, business structure). Answer the questions honestly and consistently with your application.\n\nOnce complete, you will see a \"Success\" message confirming your inspection was submitted. Your DUNS number will be processed and sent to you via email."
          },
          {
            heading: "Using your overseas address is correct",
            body: "Yes, using your overseas address as the physical business address is the right approach. D&B wants your principal place of business — the location where you actually conduct business operations.\n\nFor foreign-owned single-member LLCs, the owner typically operates from outside the U.S. Your registered agent address in the U.S. is only for receiving state legal documents — it is not your place of business.\n\nThis is consistent with how you should handle addresses on IRS forms as well. On Form 5472, Part II asks for the foreign owner's address, and a foreign address there is expected and normal."
          },
          {
            heading: "Timeline and next steps after receiving your DUNS number",
            body: "Free applications typically process in 5-30 business days. If you applied through Apple's D-U-N-S Lookup Tool, expect about 5 business days.\n\nAfter receiving your DUNS number:\n\nFor Apple Developer Program: Wait 2 additional business days for Apple to sync with D&B, then enroll at developer.apple.com. Select \"Organization\" and enter your DUNS number. Annual cost: $99.\n\nFor Google Play Console: Enter your DUNS number during organization account setup or verification. Google may auto-verify your account. One-time registration fee: $25.\n\nKeep your DUNS number saved — you may need it for future business credit applications, government contracts, or B2B relationships."
          }
        ],
        keyTakeaways: [
          "A single-member LLC is NOT a sole proprietorship — always select 'No' on the DUNS application",
          "Use your overseas address (principal place of business), not your U.S. registered agent address",
          "D&B may verify your information through TruePicVision — answer consistently with your application",
          "Free DUNS applications take 5-30 business days; Apple's lookup tool is often faster",
          "After receiving your DUNS number, wait 2 days for Apple sync before enrolling as an organization"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-09T12:00:00Z",
      sources: [
        { label: "Apple Developer — D-U-N-S Number", url: "https://developer.apple.com/help/account/membership/D-U-N-S/" },
        { label: "Dun & Bradstreet — Get a DUNS", url: "https://www.dnb.com/en-us/smb/duns/get-a-duns.html" },
        { label: "Google Play — Developer Account Requirements", url: "https://support.google.com/googleplay/android-developer/answer/13628312" }
      ],
    }],
  },

  {
    question: {
      id: "q-form-1040-filing-status-qualifying-surviving-spous",
      title: "Form 1040 Filing Status: Qualifying Surviving Spouse Explained",
      body: "I need help with my filing status: Form 1040 Filing Status: Qualifying Surviving Spouse Explained. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "mike_toronto", avatarSeed: "deduction_help-cs9SO8", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-06T14:00:00.000Z",
      viewCount: 880,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 1040 Filing Status: Qualifying Surviving Spouse Explained",
      seoDescription: "Expert guidance on Form 1040 Filing Status: Qualifying Surviving Spouse Explained",
    },
    answers: [{
      id: "a-form-1040-filing-status-qualifying-surviving-spous",
      questionId: "",
      videoId: "cs9SO8oVpZI",
      articleContent: {
        sections: [
          { heading: "What Is Qualifying Surviving Spouse Status?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Eligibility Requirements", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Available for two tax years after the year of your spouse's death",
          "Uses the same tax rates and standard deduction as Married Filing Jointly",
          "Must not have remarried and must have a qualifying dependent child living with you"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-06T17:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qualifying-surviving-spouse-eligibility-did-not-re",
      title: "Qualifying Surviving Spouse Eligibility: Did Not Remarry Requirement (Part 1)",
      body: "I need help with my filing status: Qualifying Surviving Spouse Eligibility: Did Not Remarry Requirement. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "anna.vienna", avatarSeed: "qbi_question-2z4_cr", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-06T23:00:00.000Z",
      viewCount: 2495,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Qualifying Surviving Spouse Eligibility: Did Not Remarry Requirement (Part 1)",
      seoDescription: "Expert guidance on Qualifying Surviving Spouse Eligibility: Did Not Remarry Requirement",
    },
    answers: [{
      id: "a-qualifying-surviving-spouse-eligibility-did-not-re",
      questionId: "",
      videoId: "2z4_cru4_Yk",
      articleContent: {
        sections: [
          { heading: "QSS Requirement: Did Not Remarry", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Financial Decision Making", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Must not remarry before the end of the tax year to claim QSS",
          "QSS is available for two years following the year of spouse's death",
          "Remarrying ends QSS eligibility but opens MFJ with new spouse"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-07T02:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qualifying-surviving-spouse-entitled-to-file-requi",
      title: "Qualifying Surviving Spouse: Entitled to File Requirement (Part 2)",
      body: "I need help with my filing status: Qualifying Surviving Spouse: Entitled to File Requirement. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "mchen22", avatarSeed: "installment_q-UoqbDH", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-07T02:00:00.000Z",
      viewCount: 473,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Qualifying Surviving Spouse: Entitled to File Requirement (Part 2)",
      seoDescription: "Expert guidance on Qualifying Surviving Spouse: Entitled to File Requirement",
    },
    answers: [{
      id: "a-qualifying-surviving-spouse-entitled-to-file-requi",
      questionId: "",
      videoId: "UoqbDHw8Wb8",
      articleContent: {
        sections: [
          { heading: "Entitled to File Jointly", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Edge Cases and Exceptions", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Must have been entitled (had the legal right) to file jointly in the year of death",
          "Does not require actually having filed jointly — just the right to do so",
          "NRA spouses without a residency election may not meet this requirement"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-07T05:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qualifying-surviving-spouse-paid-more-than-50-cost",
      title: "Qualifying Surviving Spouse: Paid More Than 50% Cost of Home (Part 3)",
      body: "I need help with my filing status: Qualifying Surviving Spouse: Paid More Than 50% Cost of Home. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "jparker", avatarSeed: "cp2000_scared-uVEIQ2", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-07T05:00:00.000Z",
      viewCount: 828,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Qualifying Surviving Spouse: Paid More Than 50% Cost of Home (Part 3)",
      seoDescription: "Expert guidance on Qualifying Surviving Spouse: Paid More Than 50% Cost of Home",
    },
    answers: [{
      id: "a-qualifying-surviving-spouse-paid-more-than-50-cost",
      questionId: "",
      videoId: "uVEIQ26jcSo",
      articleContent: {
        sections: [
          { heading: "Paid More Than Half the Cost of Home", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "When Parents or Family Help", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Must pay more than 50% of household maintenance costs for the year",
          "Qualifying costs: mortgage/rent, property taxes, insurance, utilities, repairs, food in the home",
          "Excluded: clothing, education, medical bills, vacations, life insurance"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-07T08:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qualifying-surviving-spouse-cost-of-home-calculati",
      title: "Qualifying Surviving Spouse: Cost of Home Calculation Example (Part 4)",
      body: "I need help with my filing status: Qualifying Surviving Spouse: Cost of Home Calculation Example. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "s.kumar", avatarSeed: "irs_notice_q-RVkQxC", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-07T08:00:00.000Z",
      viewCount: 1071,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Qualifying Surviving Spouse: Cost of Home Calculation Example (Part 4)",
      seoDescription: "Expert guidance on Qualifying Surviving Spouse: Cost of Home Calculation Example",
    },
    answers: [{
      id: "a-qualifying-surviving-spouse-cost-of-home-calculati",
      questionId: "",
      videoId: "RVkQxClj9Vc",
      articleContent: {
        sections: [
          { heading: "Cost of Home Calculation Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Alternative Filing Options", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Calculate total household costs, then determine your percentage share",
          "Your share must exceed 50% to qualify for QSS",
          "Family contributions count against your share of household costs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-07T11:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qualifying-surviving-spouse-child-s-survivor-benef",
      title: "Qualifying Surviving Spouse: Child's Survivor Benefits Rules (Part 5)",
      body: "I need help with my filing status: Qualifying Surviving Spouse: Child's Survivor Benefits Rules. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "emilyR", avatarSeed: "foreign_income_q-aEdlkb", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-07T11:00:00.000Z",
      viewCount: 2187,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Qualifying Surviving Spouse: Child's Survivor Benefits Rules (Part 5)",
      seoDescription: "Expert guidance on Qualifying Surviving Spouse: Child's Survivor Benefits Rules",
    },
    answers: [{
      id: "a-qualifying-surviving-spouse-child-s-survivor-benef",
      questionId: "",
      videoId: "aEdlkbkSIqA",
      articleContent: {
        sections: [
          { heading: "Child's Survivor Benefits and Household Costs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Practical Impact on QSS Calculation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Social Security survivor benefits for children are NOT household upkeep costs",
          "Household costs are limited to: mortgage/rent, utilities, food in the home, property tax, insurance, repairs",
          "Child's personal expenses (school, clothing, activities) are excluded from the calculation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-07T14:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qualifying-surviving-spouse-rent-from-family-membe",
      title: "Qualifying Surviving Spouse: Rent from Family Members Rules (Part 6)",
      body: "I need help with my filing status: Qualifying Surviving Spouse: Rent from Family Members Rules. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "luisG", avatarSeed: "fbar_filing_q-mjsyD3", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-07T14:00:00.000Z",
      viewCount: 2879,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Qualifying Surviving Spouse: Rent from Family Members Rules (Part 6)",
      seoDescription: "Expert guidance on Qualifying Surviving Spouse: Rent from Family Members Rules",
    },
    answers: [{
      id: "a-qualifying-surviving-spouse-rent-from-family-membe",
      questionId: "",
      videoId: "mjsyD34uv3k",
      articleContent: {
        sections: [
          { heading: "Rent from Family Members Living in Your Home", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Structuring Family Support Correctly", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Rent paid TO you counts as your income — you then pay bills from your funds",
          "Direct bill payments BY a relative count as the relative's household contribution",
          "The structure of family financial support affects QSS qualification"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-07T17:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-head-of-household-filing-status-decision-tree-guid",
      title: "Head of Household Filing Status: Decision Tree Guide (Part 1)",
      body: "I need help with my filing status: Head of Household Filing Status: Decision Tree Guide. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "tanyaB", avatarSeed: "partnership_tax_q-BzJT_v", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-07T23:00:00.000Z",
      viewCount: 485,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Head of Household Filing Status: Decision Tree Guide (Part 1)",
      seoDescription: "Expert guidance on Head of Household Filing Status: Decision Tree Guide",
    },
    answers: [{
      id: "a-head-of-household-filing-status-decision-tree-guid",
      questionId: "",
      videoId: "BzJT_vltt78",
      articleContent: {
        sections: [
          { heading: "What Is Head of Household?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "HOH Decision Tree", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "HOH offers larger standard deduction and better tax brackets than Single",
          "Must be unmarried (or living apart from spouse for 6+ months) and maintain a home for a dependent",
          "Qualifying person: typically a dependent child living with you for more than half the year"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-08T02:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-head-of-household-for-non-resident-aliens-fast-dec",
      title: "Head of Household for Non-Resident Aliens: Fast Decision Guide (Part 2)",
      body: "I need help with my filing status: Head of Household for Non-Resident Aliens: Fast Decision Guide. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "benF", avatarSeed: "sole_prop_q-sXtSAs", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-08T02:00:00.000Z",
      viewCount: 1723,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Head of Household for Non-Resident Aliens: Fast Decision Guide (Part 2)",
      seoDescription: "Expert guidance on Head of Household for Non-Resident Aliens: Fast Decision Guide",
    },
    answers: [{
      id: "a-head-of-household-for-non-resident-aliens-fast-dec",
      questionId: "",
      videoId: "sXtSAsJ4p4U",
      articleContent: {
        sections: [
          { heading: "Head of Household for Non-Resident Aliens", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Fast HOH Decision for NRAs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "NRAs married to U.S. persons may qualify for HOH if living apart 6+ months",
          "Must maintain a home for a qualifying dependent who lives with you 6+ months",
          "Must pay more than half the cost of maintaining the home"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-08T05:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-head-of-household-qualifying-person-time-requireme",
      title: "Head of Household: Qualifying Person Time Requirements Explained",
      body: "I need help with my filing status: Head of Household: Qualifying Person Time Requirements Explained. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "noraS", avatarSeed: "scorp_eligible-SRcNDl", },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-08T05:00:00.000Z",
      viewCount: 849,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Head of Household: Qualifying Person Time Requirements Explained",
      seoDescription: "Expert guidance on Head of Household: Qualifying Person Time Requirements Explained",
    },
    answers: [{
      id: "a-head-of-household-qualifying-person-time-requireme",
      questionId: "",
      videoId: "SRcNDl-aF-g",
      articleContent: {
        sections: [
          { heading: "Qualifying Person Time Requirements", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Is a Qualifying Person?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Qualifying person must live in your home for more than half the year (183+ days)",
          "The home must be the qualifying person's principal place of abode",
          "Temporary absences (school, military, medical, vacation) count as time at home"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-08T08:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-head-of-household-qualifying-person-rules-for-kids",
      title: "Head of Household: Qualifying Person Rules for Kids and Parents",
      body: "I need help with my filing status: Head of Household: Qualifying Person Rules for Kids and Parents. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "ivanK", avatarSeed: "ccorp_vs_scorp-EhbkTX", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-08T08:00:00.000Z",
      viewCount: 1995,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Head of Household: Qualifying Person Rules for Kids and Parents",
      seoDescription: "Expert guidance on Head of Household: Qualifying Person Rules for Kids and Parents",
    },
    answers: [{
      id: "a-head-of-household-qualifying-person-rules-for-kids",
      questionId: "",
      videoId: "EhbkTXFaMzY",
      articleContent: {
        sections: [
          { heading: "Qualifying Children for HOH", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Qualifying Relatives", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Qualifying child: must live with you 6+ months and meet age, relationship, and support tests",
          "Qualifying relative: must meet support and relationship rules as a dependent",
          "Parents don't need to live with you — paying for their home counts"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-08T11:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-head-of-household-qualifying-person-advanced-rules",
      title: "Head of Household Qualifying Person: Advanced Rules for Kids and Parents",
      body: "I need help with my filing status: Head of Household Qualifying Person: Advanced Rules for Kids and Parents. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "amyZ", avatarSeed: "injured_spouse_q-m-zxR0", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-08T11:00:00.000Z",
      viewCount: 3024,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Head of Household Qualifying Person: Advanced Rules for Kids and Parents",
      seoDescription: "Expert guidance on Head of Household Qualifying Person: Advanced Rules for Kids and Parents",
    },
    answers: [{
      id: "a-head-of-household-qualifying-person-advanced-rules",
      questionId: "",
      videoId: "m-zxR0vdgbM",
      articleContent: {
        sections: [
          { heading: "The Parent Exception Explained", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Counts as a Parent?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Parents do not need to live with you for HOH — unique exception",
          "You must pay more than half the cost of maintaining their separate home",
          "Includes biological parents, adoptive parents, and stepparents"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-08T14:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-head-of-household-qualifying-person-special-cases-",
      title: "Head of Household Qualifying Person: Special Cases for Kids and Parents",
      body: "I need help with my filing status: Head of Household Qualifying Person: Special Cases for Kids and Parents. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "robertL", avatarSeed: "innocent_spouse_q-eLKtGF", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-08T14:00:00.000Z",
      viewCount: 2303,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Head of Household Qualifying Person: Special Cases for Kids and Parents",
      seoDescription: "Expert guidance on Head of Household Qualifying Person: Special Cases for Kids and Parents",
    },
    answers: [{
      id: "a-head-of-household-qualifying-person-special-cases-",
      questionId: "",
      videoId: "eLKtGF-bwVA",
      articleContent: {
        sections: [
          { heading: "Decision Tree for Qualifying Person Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Married Children and Special Cases", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Follow the decision tree step by step — each test must be passed",
          "Single children living with you 6+ months are the simplest qualifying persons",
          "Married children add complexity — joint return filing rules apply"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-08T17:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-married-filing-separately-mfs-tax-calculation-with",
      title: "Married Filing Separately: MFS Tax Calculation with Medical Bills and AGI Changes",
      body: "I need help with my filing status: Married Filing Separately: MFS Tax Calculation with Medical Bills and AGI Changes. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "claireW", avatarSeed: "estate_tax_q-vaEuMN", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-08T23:00:00.000Z",
      viewCount: 732,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Married Filing Separately: MFS Tax Calculation with Medical Bills and AGI Changes",
      seoDescription: "Expert guidance on Married Filing Separately: MFS Tax Calculation with Medical Bills and AGI Changes",
    },
    answers: [{
      id: "a-married-filing-separately-mfs-tax-calculation-with",
      questionId: "",
      videoId: "vaEuMN3CZhw",
      articleContent: {
        sections: [
          { heading: "MFS and Medical Expenses", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Calculation Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "MFS can dramatically increase medical expense deductions for one spouse",
          "Medical expenses are deductible only above 7.5% of AGI",
          "Lower AGI from MFS means a lower threshold and larger deduction"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-09T02:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-married-filing-separately-pros-and-cons-of-mfs-fil",
      title: "Married Filing Separately: Pros and Cons of MFS Filing Status",
      body: "I need help with my filing status: Married Filing Separately: Pros and Cons of MFS Filing Status. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "steveN", avatarSeed: "due_date_q-zBrYaF", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-09T02:00:00.000Z",
      viewCount: 3163,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Married Filing Separately: Pros and Cons of MFS Filing Status",
      seoDescription: "Expert guidance on Married Filing Separately: Pros and Cons of MFS Filing Status",
    },
    answers: [{
      id: "a-married-filing-separately-pros-and-cons-of-mfs-fil",
      questionId: "",
      videoId: "zBrYaF_6F8s",
      articleContent: {
        sections: [
          { heading: "Pros of Married Filing Separately", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Cons of MFS", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Pros: liability isolation, medical expense optimization, compliance protection",
          "Cons: narrower brackets, lost credits, forced matching deduction method",
          "Education credits are completely unavailable with MFS"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-09T05:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-married-filing-separately-when-and-why-to-choose-m",
      title: "Married Filing Separately: When and Why to Choose MFS",
      body: "I need help with my filing status: Married Filing Separately: When and Why to Choose MFS. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "juliaD", avatarSeed: "ss4_application_q-B0OoGz", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-09T05:00:00.000Z",
      viewCount: 723,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Married Filing Separately: When and Why to Choose MFS",
      seoDescription: "Expert guidance on Married Filing Separately: When and Why to Choose MFS",
    },
    answers: [{
      id: "a-married-filing-separately-when-and-why-to-choose-m",
      questionId: "",
      videoId: "B0OoGzCpPGM",
      articleContent: {
        sections: [
          { heading: "Legal and Liability Reasons for MFS", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Medical Expense Optimization", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "MFS separates tax liability — each spouse is only responsible for their own return",
          "Best for: distrust situations, pending divorce, or one spouse's aggressive tax positions",
          "Can optimize medical deductions when one spouse has low income and high bills"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-09T08:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-married-filing-separately-mfs-introduction-and-ove",
      title: "Married Filing Separately (MFS): Introduction and Overview",
      body: "I need help with my filing status: Married Filing Separately : Introduction and Overview. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "paulM", avatarSeed: "ein_lost_help-54O3zy", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-09T08:00:00.000Z",
      viewCount: 2672,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Married Filing Separately (MFS): Introduction and Overview",
      seoDescription: "Expert guidance on Married Filing Separately : Introduction and Overview",
    },
    answers: [{
      id: "a-married-filing-separately-mfs-introduction-and-ove",
      questionId: "",
      videoId: "54O3zyhWyxg",
      articleContent: {
        sections: [
          { heading: "Why MFS Exists", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Benefits of MFJ You Lose with MFS", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "MFS is useful for liability protection — each spouse is only responsible for their own return",
          "Filing MFJ is usually more tax-efficient but creates joint liability for the entire tax due",
          "MFS restricts access to many credits and requires both spouses to use the same deduction method"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-09T11:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-same-sex-spouse-filing-status-irs-rules-for-marrie",
      title: "Same-Sex Spouse Filing Status: IRS Rules for Married Couples",
      body: "I need help with my filing status: Same-Sex Spouse Filing Status: IRS Rules for Married Couples. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "rachelT", avatarSeed: "new_ein_q-0buk5f", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-09T11:00:00.000Z",
      viewCount: 1963,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Same-Sex Spouse Filing Status: IRS Rules for Married Couples",
      seoDescription: "Expert guidance on Same-Sex Spouse Filing Status: IRS Rules for Married Couples",
    },
    answers: [{
      id: "a-same-sex-spouse-filing-status-irs-rules-for-marrie",
      questionId: "",
      videoId: "0buk5fOIwWo",
      articleContent: {
        sections: [
          { heading: "IRS Treatment of Same-Sex Marriages", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Counts as Legally Married", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Same-sex married couples are treated identically to opposite-sex couples since 2013",
          "Can file Married Filing Jointly or Married Filing Separately",
          "Domestic partnerships and civil unions do NOT qualify as marriage for federal tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-09T14:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-married-filing-jointly-with-non-resident-alien-spo",
      title: "Married Filing Jointly with Non-Resident Alien Spouse: MFJ Qualification Rules",
      body: "I need help with my filing status: Married Filing Jointly with Non-Resident Alien Spouse: MFJ Qualification Rules. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "andrewH", avatarSeed: "form_8832_q-8Fw6t8", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-09T14:00:00.000Z",
      viewCount: 1381,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Married Filing Jointly with Non-Resident Alien Spouse: MFJ Qualification Rules",
      seoDescription: "Expert guidance on Married Filing Jointly with Non-Resident Alien Spouse: MFJ Qualification Rules",
    },
    answers: [{
      id: "a-married-filing-jointly-with-non-resident-alien-spo",
      questionId: "",
      videoId: "8Fw6t8GrCds",
      articleContent: {
        sections: [
          { heading: "Marriage Definition for Tax Purposes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "MFJ with a Non-Resident Alien Spouse", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Legal marriage on December 31 determines your filing status for the entire year",
          "Living apart does NOT equal legal separation — only a court decree changes your status",
          "U.S. citizens can elect MFJ with NRA spouses by treating them as U.S. residents"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-09T17:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-filing-status-when-spouse-passes-away-irs-rules-fo",
      title: "Filing Status When Spouse Passes Away: IRS Rules for Year of Death",
      body: "I need help with my filing status: Filing Status When Spouse Passes Away: IRS Rules for Year of Death. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "monaL", avatarSeed: "hoh_filing_q--kdgL8", },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-09T23:00:00.000Z",
      viewCount: 1340,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Filing Status When Spouse Passes Away: IRS Rules for Year of Death",
      seoDescription: "Expert guidance on Filing Status When Spouse Passes Away: IRS Rules for Year of Death",
    },
    answers: [{
      id: "a-filing-status-when-spouse-passes-away-irs-rules-fo",
      questionId: "",
      videoId: "-kdgL8qB1e0",
      articleContent: {
        sections: [
          { heading: "Marriage Timing and Filing Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "When a Spouse Passes Away During the Year", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Marital status on December 31 determines filing status for the entire year",
          "Getting married at any point in the year allows MFJ for the full year",
          "A spouse's death during the year still allows filing jointly for that year"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-10T02:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-married-filing-jointly-both-spouses-must-agree-eve",
      title: "Married Filing Jointly: Both Spouses Must Agree (Even with No Income)",
      body: "I need help with my filing status: Married Filing Jointly: Both Spouses Must Agree. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "peterC", avatarSeed: "widow_tax_help-7-n-_f", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-10T02:00:00.000Z",
      viewCount: 2119,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Married Filing Jointly: Both Spouses Must Agree (Even with No Income)",
      seoDescription: "Expert guidance on Married Filing Jointly: Both Spouses Must Agree",
    },
    answers: [{
      id: "a-married-filing-jointly-both-spouses-must-agree-eve",
      questionId: "",
      videoId: "7-n-_f3AoEQ",
      articleContent: {
        sections: [
          { heading: "Both Spouses Must Agree to MFJ", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "MFJ with No-Income or Low-Income Spouse", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Both spouses must agree to file jointly — it cannot be one-sided",
          "MFJ is available even if one spouse has zero income",
          "MFJ often provides the greatest benefit when incomes are unequal"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-10T05:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-filing-status-comparison-single-vs-married-filing-",
      title: "Filing Status Comparison: Single vs Married Filing Jointly vs Separately",
      body: "I need help with my filing status: Filing Status Comparison: Single vs Married Filing Jointly vs Separately. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "dianaR", avatarSeed: "mfs_question-XvSqTX", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-10T05:00:00.000Z",
      viewCount: 1749,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Filing Status Comparison: Single vs Married Filing Jointly vs Separately",
      seoDescription: "Expert guidance on Filing Status Comparison: Single vs Married Filing Jointly vs Separately",
    },
    answers: [{
      id: "a-filing-status-comparison-single-vs-married-filing-",
      questionId: "",
      videoId: "XvSqTX0dAA4",
      articleContent: {
        sections: [
          { heading: "Single Filing Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Married Filing Jointly (MFJ)", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Single: unmarried, legally separated, or widowed and not remarried on Dec 31",
          "MFJ: most common and usually most beneficial — combines income and maximizes deductions/credits",
          "MFJ creates joint and several liability — both spouses are responsible for the full tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-10T08:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-form-1040-basics-filing-status-personal-info-and-t",
      title: "Form 1040 Basics: Filing Status, Personal Info, and Tax Preparer Section",
      body: "I need help with my filing status: Form 1040 Basics: Filing Status, Personal Info, and Tax Preparer Section. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "newllcguy", avatarSeed: "mfj_nra_q-4s1KWy", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-10T08:00:00.000Z",
      viewCount: 1156,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 1040 Basics: Filing Status, Personal Info, and Tax Preparer Section",
      seoDescription: "Expert guidance on Form 1040 Basics: Filing Status, Personal Info, and Tax Preparer Section",
    },
    answers: [{
      id: "a-form-1040-basics-filing-status-personal-info-and-t",
      questionId: "",
      videoId: "4s1KWyCrX4k",
      articleContent: {
        sections: [
          { heading: "Form 1040: Your Annual Tax Report Card", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Basic Information and Preparer Details", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 1040 is the standard individual income tax return for all U.S. taxpayers",
          "The form collects personal information, income, deductions, credits, and calculates tax",
          "You must choose exactly one filing status — choosing incorrectly can be costly"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-10T11:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qualifying-surviving-spouse-filing-status-complete",
      title: "Qualifying Surviving Spouse Filing Status: Complete IRS Guide (Ep. 71)",
      body: "I need help with my filing status: Qualifying Surviving Spouse Filing Status: Complete IRS Guide. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "taxconfused2026", avatarSeed: "foreign_partner_q-hp8KT2", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-10T11:00:00.000Z",
      viewCount: 1352,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Qualifying Surviving Spouse Filing Status: Complete IRS Guide (Ep. 71)",
      seoDescription: "Expert guidance on Qualifying Surviving Spouse Filing Status: Complete IRS Guide",
    },
    answers: [{
      id: "a-qualifying-surviving-spouse-filing-status-complete",
      questionId: "",
      videoId: "hp8KT2wyMTM",
      articleContent: {
        sections: [
          { heading: "What Is Qualifying Surviving Spouse Status?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Eligibility Requirements", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Available for two tax years after the year of your spouse's death",
          "Uses the same tax rates and standard deduction as Married Filing Jointly",
          "Must not have remarried and must have a qualifying dependent child living with you"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-10T14:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qss-eligibility-not-remarried-requirement-explaine",
      title: "QSS Eligibility: Not Remarried Requirement Explained (Ep. 72)",
      body: "I need help with my filing status: QSS Eligibility: Not Remarried Requirement Explained. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "firsttimefiler", avatarSeed: "form_8865_q-O0-K4_", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-10T14:00:00.000Z",
      viewCount: 1015,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "QSS Eligibility: Not Remarried Requirement Explained (Ep. 72)",
      seoDescription: "Expert guidance on QSS Eligibility: Not Remarried Requirement Explained",
    },
    answers: [{
      id: "a-qss-eligibility-not-remarried-requirement-explaine",
      questionId: "",
      videoId: "O0-K4_1pPZI",
      articleContent: {
        sections: [
          { heading: "QSS Requirement: Did Not Remarry", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Financial Decision Making", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Must not remarry before the end of the tax year to claim QSS",
          "QSS is available for two years following the year of spouse's death",
          "Remarrying ends QSS eligibility but opens MFJ with new spouse"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-10T17:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qss-eligibility-entitled-to-file-requirement-ep-73",
      title: "QSS Eligibility: Entitled to File Requirement (Ep. 73)",
      body: "I need help with my filing status: QSS Eligibility: Entitled to File Requirement. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "helpwithmytax", avatarSeed: "credit_calc_q-foIYma", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-10T23:00:00.000Z",
      viewCount: 3036,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "QSS Eligibility: Entitled to File Requirement (Ep. 73)",
      seoDescription: "Expert guidance on QSS Eligibility: Entitled to File Requirement",
    },
    answers: [{
      id: "a-qss-eligibility-entitled-to-file-requirement-ep-73",
      questionId: "",
      videoId: "foIYmawMEjo",
      articleContent: {
        sections: [
          { heading: "Entitled to File Jointly", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Edge Cases and Exceptions", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Must have been entitled (had the legal right) to file jointly in the year of death",
          "Does not require actually having filed jointly — just the right to do so",
          "NRA spouses without a residency election may not meet this requirement"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-11T02:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qss-eligibility-50-cost-of-home-rule-ep-74",
      title: "QSS Eligibility: 50% Cost of Home Rule (Ep. 74)",
      body: "I need help with my filing status: QSS Eligibility: 50% Cost of Home Rule. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "justformedllc", avatarSeed: "business_credit_q-UKiizS", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-11T02:00:00.000Z",
      viewCount: 2830,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "QSS Eligibility: 50% Cost of Home Rule (Ep. 74)",
      seoDescription: "Expert guidance on QSS Eligibility: 50% Cost of Home Rule",
    },
    answers: [{
      id: "a-qss-eligibility-50-cost-of-home-rule-ep-74",
      questionId: "",
      videoId: "UKiizSGX21E",
      articleContent: {
        sections: [
          { heading: "Paid More Than Half the Cost of Home", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "When Parents or Family Help", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Must pay more than 50% of household maintenance costs for the year",
          "Qualifying costs: mortgage/rent, property taxes, insurance, utilities, repairs, food in the home",
          "Excluded: clothing, education, medical bills, vacations, life insurance"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-11T05:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qss-eligibility-cost-of-home-calculation-ep-75",
      title: "QSS Eligibility: Cost of Home Calculation (Ep. 75)",
      body: "I need help with my filing status: QSS Eligibility: Cost of Home Calculation. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "expatintax", avatarSeed: "reporting_change_q-Je4fVn", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-11T05:00:00.000Z",
      viewCount: 2840,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "QSS Eligibility: Cost of Home Calculation (Ep. 75)",
      seoDescription: "Expert guidance on QSS Eligibility: Cost of Home Calculation",
    },
    answers: [{
      id: "a-qss-eligibility-cost-of-home-calculation-ep-75",
      questionId: "",
      videoId: "Je4fVnhWNDI",
      articleContent: {
        sections: [
          { heading: "Cost of Home Calculation Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Alternative Filing Options", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Calculate total household costs, then determine your percentage share",
          "Your share must exceed 50% to qualify for QSS",
          "Family contributions count against your share of household costs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-11T08:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qss-child-survivor-benefits-rules-ep-76",
      title: "QSS: Child Survivor Benefits Rules (Ep. 76)",
      body: "I need help with my filing status: QSS: Child Survivor Benefits Rules. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "smallbizowner", avatarSeed: "life_change_tax-Bgg8Jh", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-11T08:00:00.000Z",
      viewCount: 497,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "QSS: Child Survivor Benefits Rules (Ep. 76)",
      seoDescription: "Expert guidance on QSS: Child Survivor Benefits Rules",
    },
    answers: [{
      id: "a-qss-child-survivor-benefits-rules-ep-76",
      questionId: "",
      videoId: "Bgg8JhZyksc",
      articleContent: {
        sections: [
          { heading: "Child's Survivor Benefits and Household Costs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Practical Impact on QSS Calculation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Social Security survivor benefits for children are NOT household upkeep costs",
          "Household costs are limited to: mortgage/rent, utilities, food in the home, property tax, insurance, repairs",
          "Child's personal expenses (school, clothing, activities) are excluded from the calculation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-11T11:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-qss-rent-from-family-members-ep-77",
      title: "QSS: Rent from Family Members (Ep. 77)",
      body: "I need help with my filing status: QSS: Rent from Family Members. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "confused_about_5472", avatarSeed: "carryover_q-mxpIvX", },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-11T11:00:00.000Z",
      viewCount: 1996,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "QSS: Rent from Family Members (Ep. 77)",
      seoDescription: "Expert guidance on QSS: Rent from Family Members",
    },
    answers: [{
      id: "a-qss-rent-from-family-members-ep-77",
      questionId: "",
      videoId: "mxpIvXrlYds",
      articleContent: {
        sections: [
          { heading: "Rent from Family Members Living in Your Home", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Structuring Family Support Correctly", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Rent paid TO you counts as your income — you then pay bills from your funds",
          "Direct bill payments BY a relative count as the relative's household contribution",
          "The structure of family financial support affects QSS qualification"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-11T14:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-head-of-household-decision-tree-ep-78",
      title: "Head of Household Decision Tree (Ep. 78)",
      body: "I need help with my filing status: Head of Household Decision Tree. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "needtaxhelp", avatarSeed: "nol_question-G60C6O", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-11T14:00:00.000Z",
      viewCount: 2956,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Head of Household Decision Tree (Ep. 78)",
      seoDescription: "Expert guidance on Head of Household Decision Tree",
    },
    answers: [{
      id: "a-head-of-household-decision-tree-ep-78",
      questionId: "",
      videoId: "G60C6OEt-g0",
      articleContent: {
        sections: [
          { heading: "What Is Head of Household?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "HOH Decision Tree", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "HOH offers larger standard deduction and better tax brackets than Single",
          "Must be unmarried (or living apart from spouse for 6+ months) and maintain a home for a dependent",
          "Qualifying person: typically a dependent child living with you for more than half the year"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-11T17:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-head-of-household-for-nra-quick-decision-guide-ep-",
      title: "Head of Household for NRA: Quick Decision Guide (Ep. 79)",
      body: "I need help with my filing status: Head of Household for NRA: Quick Decision Guide. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "llcquestion", avatarSeed: "depreciation_q-hHJGet", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-11T23:00:00.000Z",
      viewCount: 1989,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Head of Household for NRA: Quick Decision Guide (Ep. 79)",
      seoDescription: "Expert guidance on Head of Household for NRA: Quick Decision Guide",
    },
    answers: [{
      id: "a-head-of-household-for-nra-quick-decision-guide-ep-",
      questionId: "",
      videoId: "hHJGet0pYx0",
      articleContent: {
        sections: [
          { heading: "Head of Household for Non-Resident Aliens", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Fast HOH Decision for NRAs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "NRAs married to U.S. persons may qualify for HOH if living apart 6+ months",
          "Must maintain a home for a qualifying dependent who lives with you 6+ months",
          "Must pay more than half the cost of maintaining the home"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-12T02:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-mfs-calculation-with-medical-bills-ep-70",
      title: "MFS Calculation with Medical Bills (Ep. 70)",
      body: "I need help with my filing status: MFS Calculation with Medical Bills. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "formhelp2026", avatarSeed: "section_179_q-vF4t83", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-12T02:00:00.000Z",
      viewCount: 1011,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "MFS Calculation with Medical Bills (Ep. 70)",
      seoDescription: "Expert guidance on MFS Calculation with Medical Bills",
    },
    answers: [{
      id: "a-mfs-calculation-with-medical-bills-ep-70",
      questionId: "",
      videoId: "vF4t835BRUw",
      articleContent: {
        sections: [
          { heading: "MFS and Medical Expenses", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Calculation Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "MFS can dramatically increase medical expense deductions for one spouse",
          "Medical expenses are deductible only above 7.5% of AGI",
          "Lower AGI from MFS means a lower threshold and larger deduction"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-12T05:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-mfs-pros-and-cons-ep-69",
      title: "MFS Pros and Cons (Ep. 69)",
      body: "I need help with my filing status: MFS Pros and Cons. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "taxseason_stress", avatarSeed: "reit_ptp_q-yVOlKB", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-12T05:00:00.000Z",
      viewCount: 1856,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "MFS Pros and Cons (Ep. 69)",
      seoDescription: "Expert guidance on MFS Pros and Cons",
    },
    answers: [{
      id: "a-mfs-pros-and-cons-ep-69",
      questionId: "",
      videoId: "yVOlKBfCx5Q",
      articleContent: {
        sections: [
          { heading: "Pros of Married Filing Separately", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Cons of MFS", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Pros: liability isolation, medical expense optimization, compliance protection",
          "Cons: narrower brackets, lost credits, forced matching deduction method",
          "Education credits are completely unavailable with MFS"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-12T08:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-when-to-choose-mfs-filing-status-ep-68",
      title: "When to Choose MFS Filing Status (Ep. 68)",
      body: "I need help with my filing status: When to Choose MFS Filing Status. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "filingfirsttime", avatarSeed: "form_6252_q-UFY7dr", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-12T08:00:00.000Z",
      viewCount: 1677,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "When to Choose MFS Filing Status (Ep. 68)",
      seoDescription: "Expert guidance on When to Choose MFS Filing Status",
    },
    answers: [{
      id: "a-when-to-choose-mfs-filing-status-ep-68",
      questionId: "",
      videoId: "UFY7dr6YkW4",
      articleContent: {
        sections: [
          { heading: "Legal and Liability Reasons for MFS", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Medical Expense Optimization", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "MFS separates tax liability — each spouse is only responsible for their own return",
          "Best for: distrust situations, pending divorce, or one spouse's aggressive tax positions",
          "Can optimize medical deductions when one spouse has low income and high bills"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-12T11:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-mfs-introduction-ep-67",
      title: "MFS Introduction (Ep. 67)",
      body: "I need help with my filing status: MFS Introduction. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "ein_application", avatarSeed: "tax_basics_help-zqiwnD", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-12T11:00:00.000Z",
      viewCount: 3186,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "MFS Introduction (Ep. 67)",
      seoDescription: "Expert guidance on MFS Introduction",
    },
    answers: [{
      id: "a-mfs-introduction-ep-67",
      questionId: "",
      videoId: "zqiwnDayiLg",
      articleContent: {
        sections: [
          { heading: "Why MFS Exists", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Benefits of MFJ You Lose with MFS", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "MFS is useful for liability protection — each spouse is only responsible for their own return",
          "Filing MFJ is usually more tax-efficient but creates joint liability for the entire tax due",
          "MFS restricts access to many credits and requires both spouses to use the same deduction method"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-12T14:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-same-sex-spouse-filing-status-ep-59",
      title: "Same-Sex Spouse Filing Status (Ep. 59)",
      body: "I need help with my filing status: Same-Sex Spouse Filing Status. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "irsnotice_help", avatarSeed: "w2_1099_q-JCIdOA", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-12T14:00:00.000Z",
      viewCount: 531,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Same-Sex Spouse Filing Status (Ep. 59)",
      seoDescription: "Expert guidance on Same-Sex Spouse Filing Status",
    },
    answers: [{
      id: "a-same-sex-spouse-filing-status-ep-59",
      questionId: "",
      videoId: "JCIdOAocQFs",
      articleContent: {
        sections: [
          { heading: "IRS Treatment of Same-Sex Marriages", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Counts as Legally Married", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Same-sex married couples are treated identically to opposite-sex couples since 2013",
          "Can file Married Filing Jointly or Married Filing Separately",
          "Domestic partnerships and civil unions do NOT qualify as marriage for federal tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-12T17:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-mfj-with-nra-spouse-qualification-ep-58",
      title: "MFJ with NRA Spouse Qualification (Ep. 58)",
      body: "I need help with my filing status: MFJ with NRA Spouse Qualification. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "delawarellc", avatarSeed: "personal_info_q-R8QpEi", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-12T23:00:00.000Z",
      viewCount: 2679,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "MFJ with NRA Spouse Qualification (Ep. 58)",
      seoDescription: "Expert guidance on MFJ with NRA Spouse Qualification",
    },
    answers: [{
      id: "a-mfj-with-nra-spouse-qualification-ep-58",
      questionId: "",
      videoId: "R8QpEicRo_g",
      articleContent: {
        sections: [
          { heading: "Marriage Definition for Tax Purposes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "MFJ with a Non-Resident Alien Spouse", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Legal marriage on December 31 determines your filing status for the entire year",
          "Living apart does NOT equal legal separation — only a court decree changes your status",
          "U.S. citizens can elect MFJ with NRA spouses by treating them as U.S. residents"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-13T02:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-filing-status-after-spouse-death-ep-57",
      title: "Filing Status After Spouse Death (Ep. 57)",
      body: "I need help with my filing status: Filing Status After Spouse Death. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "wyomingllc2026", avatarSeed: "std_deduction_q-XLGDuj", badge: "subscriber" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-13T02:00:00.000Z",
      viewCount: 1882,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Filing Status After Spouse Death (Ep. 57)",
      seoDescription: "Expert guidance on Filing Status After Spouse Death",
    },
    answers: [{
      id: "a-filing-status-after-spouse-death-ep-57",
      questionId: "",
      videoId: "XLGDujMqUtg",
      articleContent: {
        sections: [
          { heading: "Marriage Timing and Filing Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "When a Spouse Passes Away During the Year", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Marital status on December 31 determines filing status for the entire year",
          "Getting married at any point in the year allows MFJ for the full year",
          "A spouse's death during the year still allows filing jointly for that year"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-13T05:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-mfj-both-spouses-must-agree-ep-56",
      title: "MFJ: Both Spouses Must Agree (Ep. 56)",
      body: "I need help with my filing status: MFJ: Both Spouses Must Agree. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "stripeatlas_user", avatarSeed: "expat_llc_owner-PV1VOi", },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-13T05:00:00.000Z",
      viewCount: 1001,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "MFJ: Both Spouses Must Agree (Ep. 56)",
      seoDescription: "Expert guidance on MFJ: Both Spouses Must Agree",
    },
    answers: [{
      id: "a-mfj-both-spouses-must-agree-ep-56",
      questionId: "",
      videoId: "PV1VOioej5I",
      articleContent: {
        sections: [
          { heading: "Both Spouses Must Agree to MFJ", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "MFJ with No-Income or Low-Income Spouse", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Both spouses must agree to file jointly — it cannot be one-sided",
          "MFJ is available even if one spouse has zero income",
          "MFJ often provides the greatest benefit when incomes are unequal"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-13T08:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-single-vs-mfj-vs-mfs-comparison-ep-55",
      title: "Single vs MFJ vs MFS Comparison (Ep. 55)",
      body: "I need help with my filing status: Single vs MFJ vs MFS Comparison. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "doola_customer", avatarSeed: "foreign_founder-cltVij", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-13T08:00:00.000Z",
      viewCount: 2532,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Single vs MFJ vs MFS Comparison (Ep. 55)",
      seoDescription: "Expert guidance on Single vs MFJ vs MFS Comparison",
    },
    answers: [{
      id: "a-single-vs-mfj-vs-mfs-comparison-ep-55",
      questionId: "",
      videoId: "cltVij2V_fY",
      articleContent: {
        sections: [
          { heading: "Single Filing Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Married Filing Jointly (MFJ)", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Single: unmarried, legally separated, or widowed and not remarried on Dec 31",
          "MFJ: most common and usually most beneficial — combines income and maximizes deductions/credits",
          "MFJ creates joint and several liability — both spouses are responsible for the full tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-13T11:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-form-1040-basics-and-tax-preparer-info-ep-54",
      title: "Form 1040 Basics and Tax Preparer Info (Ep. 54)",
      body: "I need help with my filing status: Form 1040 Basics and Tax Preparer Info. What are the rules and how do I determine what applies to my situation?",
      author: { displayName: "startupfounder", avatarSeed: "llc_newbie_abroad-yla0IZ", badge: "new-member" as const },
      category: "filing-status",
      tags: ["filing-status"],
      postedAt: "2026-03-13T11:00:00.000Z",
      viewCount: 593,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 1040 Basics and Tax Preparer Info (Ep. 54)",
      seoDescription: "Expert guidance on Form 1040 Basics and Tax Preparer Info",
    },
    answers: [{
      id: "a-form-1040-basics-and-tax-preparer-info-ep-54",
      questionId: "",
      videoId: "yla0IZuqPiM",
      articleContent: {
        sections: [
          { heading: "Form 1040: Your Annual Tax Report Card", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Basic Information and Preparer Details", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 1040 is the standard individual income tax return for all U.S. taxpayers",
          "The form collects personal information, income, deductions, credits, and calculates tax",
          "You must choose exactly one filing status — choosing incorrectly can be costly"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-13T14:00:00.000Z",
      sources: [{ label: "IRS Filing Status", url: "https://www.irs.gov/newsroom/choosing-the-correct-filing-status" }],
    }],
  },

  {
    question: {
      id: "q-form-8857-irc-section-6015-f-equitable-relief-expl",
      title: "Form 8857: IRC Section 6015(f) Equitable Relief Explained (Part 2)",
      body: "My spouse and I have a tax issue and I need to understand: Form 8857: IRC Section 6015 Equitable Relief Explained. What relief options are available and how do I qualify?",
      author: { displayName: "Marcus T.", avatarSeed: "digital_nomad_tax-QnqTWl", badge: "new-member" as const },
      category: "form-8857",
      tags: ["form-8857"],
      postedAt: "2026-03-13T14:00:00.000Z",
      viewCount: 2995,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8857: IRC Section 6015(f) Equitable Relief Explained (Part 2)",
      seoDescription: "Expert guidance on Form 8857: IRC Section 6015 Equitable Relief Explained",
    },
    answers: [{
      id: "a-form-8857-irc-section-6015-f-equitable-relief-expl",
      questionId: "",
      videoId: "QnqTWlGElDo",
      articleContent: {
        sections: [
          { heading: "Equitable Relief: How the IRS Decides Fairness", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Key Factors the IRS Considers", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Equitable relief is the most flexible innocent spouse provision — no single factor decides",
          "Divorce or separation strengthens your case; still living together weakens it",
          "Economic hardship is a powerful factor — document your financial situation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-13T17:00:00.000Z",
      sources: [{ label: "Innocent Spouse Relief", url: "https://www.irs.gov/individuals/innocent-spouse-relief" }],
    }],
  },

  {
    question: {
      id: "q-irc-6015-f-equitable-relief-for-innocent-spouse-pa",
      title: "IRC 6015(f) Equitable Relief for Innocent Spouse (Part 2)",
      body: "My spouse and I have a tax issue and I need to understand: IRC 6015 Equitable Relief for Innocent Spouse. What relief options are available and how do I qualify?",
      author: { displayName: "Sarah K.", avatarSeed: "non_us_filer-7dwvy2", badge: "new-member" as const },
      category: "form-8857",
      tags: ["form-8857"],
      postedAt: "2026-03-13T23:00:00.000Z",
      viewCount: 1127,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "IRC 6015(f) Equitable Relief for Innocent Spouse (Part 2)",
      seoDescription: "Expert guidance on IRC 6015 Equitable Relief for Innocent Spouse",
    },
    answers: [{
      id: "a-irc-6015-f-equitable-relief-for-innocent-spouse-pa",
      questionId: "",
      videoId: "7dwvy2_Irgg",
      articleContent: {
        sections: [
          { heading: "Equitable Relief: How the IRS Decides Fairness", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Key Factors the IRS Considers", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Equitable relief is the most flexible innocent spouse provision — no single factor decides",
          "Divorce or separation strengthens your case; still living together weakens it",
          "Economic hardship is a powerful factor — document your financial situation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-14T02:00:00.000Z",
      sources: [{ label: "Innocent Spouse Relief", url: "https://www.irs.gov/individuals/innocent-spouse-relief" }],
    }],
  },

  {
    question: {
      id: "q-form-8857-when-you-may-qualify-for-innocent-spouse",
      title: "Form 8857: When You May Qualify for Innocent Spouse Relief (Part 2)",
      body: "My spouse and I have a tax issue and I need to understand: Form 8857: When You May Qualify for Innocent Spouse Relief. What relief options are available and how do I qualify?",
      author: { displayName: "David Chen", avatarSeed: "intl_llc_q-HJiRFi", badge: "new-member" as const },
      category: "form-8857",
      tags: ["form-8857"],
      postedAt: "2026-03-14T02:00:00.000Z",
      viewCount: 425,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8857: When You May Qualify for Innocent Spouse Relief (Part 2)",
      seoDescription: "Expert guidance on Form 8857: When You May Qualify for Innocent Spouse Relief",
    },
    answers: [{
      id: "a-form-8857-when-you-may-qualify-for-innocent-spouse",
      questionId: "",
      videoId: "HJiRFiiJHWg",
      articleContent: {
        sections: [
          { heading: "When Your Ex's Lies Create Your Tax Bill", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Qualifying for Relief in This Scenario", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Divorce does not end liability for joint returns signed during marriage",
          "If your ex handled taxes and lied, you may qualify for innocent spouse relief",
          "Key factors: no knowledge of errors, no benefit, limited role in finances"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-14T05:00:00.000Z",
      sources: [{ label: "Innocent Spouse Relief", url: "https://www.irs.gov/individuals/innocent-spouse-relief" }],
    }],
  },

  {
    question: {
      id: "q-form-8857-introduction-what-is-innocent-spouse-rel",
      title: "Form 8857 Introduction: What Is Innocent Spouse Relief?",
      body: "My spouse and I have a tax issue and I need to understand: Form 8857 Introduction: What Is Innocent Spouse Relief?. What relief options are available and how do I qualify?",
      author: { displayName: "Emma L.", avatarSeed: "global_startup-pID466", badge: "new-member" as const },
      category: "form-8857",
      tags: ["form-8857"],
      postedAt: "2026-03-14T05:00:00.000Z",
      viewCount: 1828,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8857 Introduction: What Is Innocent Spouse Relief?",
      seoDescription: "Expert guidance on Form 8857 Introduction: What Is Innocent Spouse Relief?",
    },
    answers: [{
      id: "a-form-8857-introduction-what-is-innocent-spouse-rel",
      questionId: "",
      videoId: "pID466Sg7qQ",
      articleContent: {
        sections: [
          { heading: "What Is Innocent Spouse Relief?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Three Types of Relief", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8857 allows innocent spouses to seek relief from joint return tax liabilities",
          "Three types: classic innocent spouse, separation of liability, and equitable relief",
          "Joint filing creates joint and several liability — either spouse can be held responsible for everything"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-14T08:00:00.000Z",
      sources: [{ label: "Innocent Spouse Relief", url: "https://www.irs.gov/individuals/innocent-spouse-relief" }],
    }],
  },

  {
    question: {
      id: "q-irc-6015-f-equitable-relief-ep-66",
      title: "IRC 6015(f) Equitable Relief (Ep. 66)",
      body: "My spouse and I have a tax issue and I need to understand: IRC 6015 Equitable Relief. What relief options are available and how do I qualify?",
      author: { displayName: "James R.", avatarSeed: "overseas_biz-caUBVS", badge: "subscriber" as const },
      category: "form-8857",
      tags: ["form-8857"],
      postedAt: "2026-03-14T08:00:00.000Z",
      viewCount: 1347,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "IRC 6015(f) Equitable Relief (Ep. 66)",
      seoDescription: "Expert guidance on IRC 6015 Equitable Relief",
    },
    answers: [{
      id: "a-irc-6015-f-equitable-relief-ep-66",
      questionId: "",
      videoId: "caUBVSIJj04",
      articleContent: {
        sections: [
          { heading: "Equitable Relief: How the IRS Decides Fairness", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Key Factors the IRS Considers", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Equitable relief is the most flexible innocent spouse provision — no single factor decides",
          "Divorce or separation strengthens your case; still living together weakens it",
          "Economic hardship is a powerful factor — document your financial situation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-14T11:00:00.000Z",
      sources: [{ label: "Innocent Spouse Relief", url: "https://www.irs.gov/individuals/innocent-spouse-relief" }],
    }],
  },

  {
    question: {
      id: "q-irc-6015-f-equitable-relief-part-1-ep-65",
      title: "IRC 6015(f) Equitable Relief Part 1 (Ep. 65)",
      body: "My spouse and I have a tax issue and I need to understand: IRC 6015 Equitable Relief Part 1. What relief options are available and how do I qualify?",
      author: { displayName: "Priya M.", avatarSeed: "remote_ceo-YPbhVF", badge: "subscriber" as const },
      category: "form-8857",
      tags: ["form-8857"],
      postedAt: "2026-03-14T11:00:00.000Z",
      viewCount: 791,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "IRC 6015(f) Equitable Relief Part 1 (Ep. 65)",
      seoDescription: "Expert guidance on IRC 6015 Equitable Relief Part 1",
    },
    answers: [{
      id: "a-irc-6015-f-equitable-relief-part-1-ep-65",
      questionId: "",
      videoId: "YPbhVF24h08",
      articleContent: {
        sections: [
          { heading: "What Is Equitable Relief (IRC §6015(f))?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "When Equitable Relief Applies", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Equitable relief is the fallback when classic relief and separation of liability don't apply",
          "Can address both understatements (wrong return) AND underpayments (unpaid correct return)",
          "No fixed time deadline — but file promptly for best results"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-14T14:00:00.000Z",
      sources: [{ label: "Innocent Spouse Relief", url: "https://www.irs.gov/individuals/innocent-spouse-relief" }],
    }],
  },

  {
    question: {
      id: "q-innocent-spouse-qualification-part-2-ep-64",
      title: "Innocent Spouse Qualification Part 2 (Ep. 64)",
      body: "My spouse and I have a tax issue and I need to understand: Innocent Spouse Qualification Part 2. What relief options are available and how do I qualify?",
      author: { displayName: "Alex Wong", avatarSeed: "solo_llc_intl-0cSg8X", badge: "subscriber" as const },
      category: "form-8857",
      tags: ["form-8857"],
      postedAt: "2026-03-14T14:00:00.000Z",
      viewCount: 1692,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Innocent Spouse Qualification Part 2 (Ep. 64)",
      seoDescription: "Expert guidance on Innocent Spouse Qualification Part 2",
    },
    answers: [{
      id: "a-innocent-spouse-qualification-part-2-ep-64",
      questionId: "",
      videoId: "0cSg8XZGzSc",
      articleContent: {
        sections: [
          { heading: "When Your Ex's Lies Create Your Tax Bill", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Qualifying for Relief in This Scenario", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Divorce does not end liability for joint returns signed during marriage",
          "If your ex handled taxes and lied, you may qualify for innocent spouse relief",
          "Key factors: no knowledge of errors, no benefit, limited role in finances"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-14T17:00:00.000Z",
      sources: [{ label: "Innocent Spouse Relief", url: "https://www.irs.gov/individuals/innocent-spouse-relief" }],
    }],
  },

  {
    question: {
      id: "q-innocent-spouse-qualification-part-1-ep-63",
      title: "Innocent Spouse Qualification Part 1 (Ep. 63)",
      body: "My spouse and I have a tax issue and I need to understand: Innocent Spouse Qualification Part 1. What relief options are available and how do I qualify?",
      author: { displayName: "Nina P.", avatarSeed: "ecom_expat-41rSXb", },
      category: "form-8857",
      tags: ["form-8857"],
      postedAt: "2026-03-14T23:00:00.000Z",
      viewCount: 1946,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Innocent Spouse Qualification Part 1 (Ep. 63)",
      seoDescription: "Expert guidance on Innocent Spouse Qualification Part 1",
    },
    answers: [{
      id: "a-innocent-spouse-qualification-part-1-ep-63",
      questionId: "",
      videoId: "41rSXbLwHm4",
      articleContent: {
        sections: [
          { heading: "Qualification Requirements", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Qualifying Scenarios", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "You must not have known about your spouse's unreported income or false deductions",
          "Simply disagreeing with a tax bill does not qualify — specific criteria must be met",
          "The IRS considers your education, involvement in finances, and whether you benefited"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-15T02:00:00.000Z",
      sources: [{ label: "Innocent Spouse Relief", url: "https://www.irs.gov/individuals/innocent-spouse-relief" }],
    }],
  },

  {
    question: {
      id: "q-form-8379-allocation-between-spouses-on-joint-retu",
      title: "Form 8379: Allocation Between Spouses on Joint Return (Ep. 62)",
      body: "I believe I qualify as an injured spouse. I need help understanding: Form 8379: Allocation Between Spouses on Joint Return. How does the allocation process work?",
      author: { displayName: "Carlos G.", avatarSeed: "freelancer_abroad-4nZ_KV", badge: "new-member" as const },
      category: "form-8379",
      tags: ["form-8379"],
      postedAt: "2026-03-15T02:00:00.000Z",
      viewCount: 3036,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8379: Allocation Between Spouses on Joint Return (Ep. 62)",
      seoDescription: "Expert guidance on Form 8379: Allocation Between Spouses on Joint Return",
    },
    answers: [{
      id: "a-form-8379-allocation-between-spouses-on-joint-retu",
      questionId: "",
      videoId: "4nZ_KVEi5M8",
      articleContent: {
        sections: [
          { heading: "Walking Through Form 8379", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How Allocation Works", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8379 starts with a qualifying questionnaire — all conditions must be met",
          "Income, deductions, and credits are allocated to the spouse who earned/incurred them",
          "The injured spouse's share of any overpayment is refunded separately"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-15T05:00:00.000Z",
      sources: [{ label: "Injured Spouse Allocation", url: "https://www.irs.gov/forms-pubs/about-form-8379" }],
    }],
  },

  {
    question: {
      id: "q-who-qualifies-as-injured-spouse-form-8379-guide-ep",
      title: "Who Qualifies as Injured Spouse? Form 8379 Guide (Ep. 61)",
      body: "I believe I qualify as an injured spouse. I need help understanding: Who Qualifies as Injured Spouse? Form 8379 Guide. How does the allocation process work?",
      author: { displayName: "Yuki S.", avatarSeed: "cross_border_biz-7GSwX3", badge: "new-member" as const },
      category: "form-8379",
      tags: ["form-8379"],
      postedAt: "2026-03-15T05:00:00.000Z",
      viewCount: 2295,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Who Qualifies as Injured Spouse? Form 8379 Guide (Ep. 61)",
      seoDescription: "Expert guidance on Who Qualifies as Injured Spouse? Form 8379 Guide",
    },
    answers: [{
      id: "a-who-qualifies-as-injured-spouse-form-8379-guide-ep",
      questionId: "",
      videoId: "7GSwX37dLdU",
      articleContent: {
        sections: [
          { heading: "Qualification Requirements for Injured Spouse", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Filing Deadlines and Methods", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Must have filed jointly, had your own income, paid your own taxes, and not be responsible for the debt",
          "File within 3 years from return due date or 2 years from tax payment date (whichever is later)",
          "Can file with your joint return (faster) or separately by mail (8-14 weeks processing)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-15T08:00:00.000Z",
      sources: [{ label: "Injured Spouse Allocation", url: "https://www.irs.gov/forms-pubs/about-form-8379" }],
    }],
  },

  {
    question: {
      id: "q-injured-spouse-allocation-form-8379-introduction-e",
      title: "Injured Spouse Allocation: Form 8379 Introduction (Ep. 60)",
      body: "I believe I qualify as an injured spouse. I need help understanding: Injured Spouse Allocation: Form 8379 Introduction. How does the allocation process work?",
      author: { displayName: "Tom H.", avatarSeed: "eu_llc_owner-YxHrVi", badge: "new-member" as const },
      category: "form-8379",
      tags: ["form-8379"],
      postedAt: "2026-03-15T08:00:00.000Z",
      viewCount: 785,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Injured Spouse Allocation: Form 8379 Introduction (Ep. 60)",
      seoDescription: "Expert guidance on Injured Spouse Allocation: Form 8379 Introduction",
    },
    answers: [{
      id: "a-injured-spouse-allocation-form-8379-introduction-e",
      questionId: "",
      videoId: "YxHrViFSqZw",
      articleContent: {
        sections: [
          { heading: "What Is Injured Spouse Relief?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Injured Spouse vs. Innocent Spouse", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8379 protects your refund share when your spouse's debts cause the refund to be seized",
          "Applies to spouse debts: past-due child support, student loans, state taxes, federal debts",
          "Different from innocent spouse (Form 8857) which addresses tax errors on joint returns"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-15T11:00:00.000Z",
      sources: [{ label: "Injured Spouse Allocation", url: "https://www.irs.gov/forms-pubs/about-form-8379" }],
    }],
  },

  {
    question: {
      id: "q-form-8379-how-to-allocate-items-between-spouses-on",
      title: "Form 8379: How to Allocate Items Between Spouses on Joint Return",
      body: "I believe I qualify as an injured spouse. I need help understanding: Form 8379: How to Allocate Items Between Spouses on Joint Return. How does the allocation process work?",
      author: { displayName: "Lisa Chen", avatarSeed: "apac_founder-R3uzuZ", badge: "new-member" as const },
      category: "form-8379",
      tags: ["form-8379"],
      postedAt: "2026-03-15T11:00:00.000Z",
      viewCount: 555,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8379: How to Allocate Items Between Spouses on Joint Return",
      seoDescription: "Expert guidance on Form 8379: How to Allocate Items Between Spouses on Joint Return",
    },
    answers: [{
      id: "a-form-8379-how-to-allocate-items-between-spouses-on",
      questionId: "",
      videoId: "R3uzuZMDqJQ",
      articleContent: {
        sections: [
          { heading: "Walking Through Form 8379", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How Allocation Works", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8379 starts with a qualifying questionnaire — all conditions must be met",
          "Income, deductions, and credits are allocated to the spouse who earned/incurred them",
          "The injured spouse's share of any overpayment is refunded separately"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-15T14:00:00.000Z",
      sources: [{ label: "Injured Spouse Allocation", url: "https://www.irs.gov/forms-pubs/about-form-8379" }],
    }],
  },

  {
    question: {
      id: "q-form-8379-who-qualifies-as-the-injured-spouse",
      title: "Form 8379: Who Qualifies as the Injured Spouse?",
      body: "I believe I qualify as an injured spouse. I need help understanding: Form 8379: Who Qualifies as the Injured Spouse?. How does the allocation process work?",
      author: { displayName: "Mike D.", avatarSeed: "latam_startup-eIV4B1", badge: "new-member" as const },
      category: "form-8379",
      tags: ["form-8379"],
      postedAt: "2026-03-15T14:00:00.000Z",
      viewCount: 2540,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8379: Who Qualifies as the Injured Spouse?",
      seoDescription: "Expert guidance on Form 8379: Who Qualifies as the Injured Spouse?",
    },
    answers: [{
      id: "a-form-8379-who-qualifies-as-the-injured-spouse",
      questionId: "",
      videoId: "eIV4B1RJ_hY",
      articleContent: {
        sections: [
          { heading: "Qualification Requirements for Injured Spouse", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Filing Deadlines and Methods", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Must have filed jointly, had your own income, paid your own taxes, and not be responsible for the debt",
          "File within 3 years from return due date or 2 years from tax payment date (whichever is later)",
          "Can file with your joint return (faster) or separately by mail (8-14 weeks processing)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-15T17:00:00.000Z",
      sources: [{ label: "Injured Spouse Allocation", url: "https://www.irs.gov/forms-pubs/about-form-8379" }],
    }],
  },

  {
    question: {
      id: "q-form-8379-injured-spouse-allocation-introduction",
      title: "Form 8379: Injured Spouse Allocation Introduction",
      body: "I believe I qualify as an injured spouse. I need help understanding: Form 8379: Injured Spouse Allocation Introduction. How does the allocation process work?",
      author: { displayName: "Anna K.", avatarSeed: "mena_biz-nX4MsK", badge: "new-member" as const },
      category: "form-8379",
      tags: ["form-8379"],
      postedAt: "2026-03-15T23:00:00.000Z",
      viewCount: 1376,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8379: Injured Spouse Allocation Introduction",
      seoDescription: "Expert guidance on Form 8379: Injured Spouse Allocation Introduction",
    },
    answers: [{
      id: "a-form-8379-injured-spouse-allocation-introduction",
      questionId: "",
      videoId: "nX4MsKvPN7M",
      articleContent: {
        sections: [
          { heading: "What Is Injured Spouse Relief?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Injured Spouse vs. Innocent Spouse", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8379 protects your refund share when your spouse's debts cause the refund to be seized",
          "Applies to spouse debts: past-due child support, student loans, state taxes, federal debts",
          "Different from innocent spouse (Form 8857) which addresses tax errors on joint returns"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-16T02:00:00.000Z",
      sources: [{ label: "Injured Spouse Allocation", url: "https://www.irs.gov/forms-pubs/about-form-8379" }],
    }],
  },

  {
    question: {
      id: "q-foreign-income-filing-obligations-what-u-s-taxpaye",
      title: "Foreign Income Filing Obligations: What U.S. Taxpayers Must Report (Ep. 37)",
      body: "I have income from outside the U.S. and need guidance on: Foreign Income Filing Obligations: What U.S. Taxpayers Must Report. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Chris L.", avatarSeed: "uk_llc_help-g8waud", badge: "subscriber" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-16T02:00:00.000Z",
      viewCount: 558,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign Income Filing Obligations: What U.S. Taxpayers Must Report (Ep. 37)",
      seoDescription: "Expert guidance on Foreign Income Filing Obligations: What U.S. Taxpayers Must Report",
    },
    answers: [{
      id: "a-foreign-income-filing-obligations-what-u-s-taxpaye",
      questionId: "",
      videoId: "g8waudWi1KI",
      articleContent: {
        sections: [
          { heading: "How the IRS Determines Filing Obligations", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Three Factors That Determine Your Obligation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The IRS checks gross income (before exclusions/deductions) to determine filing requirements",
          "Filing obligation depends on income, filing status, and age",
          "You must file first, then claim exclusions and deductions — these are separate steps"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-16T05:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-foreign-income-tax-overview-irs-rules-for-u-s-taxp",
      title: "Foreign Income Tax Overview: IRS Rules for U.S. Taxpayers (Ep. 36)",
      body: "I have income from outside the U.S. and need guidance on: Foreign Income Tax Overview: IRS Rules for U.S. Taxpayers. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Raj P.", avatarSeed: "de_saas_owner-Jgz51K", badge: "subscriber" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-16T05:00:00.000Z",
      viewCount: 2068,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign Income Tax Overview: IRS Rules for U.S. Taxpayers (Ep. 36)",
      seoDescription: "Expert guidance on Foreign Income Tax Overview: IRS Rules for U.S. Taxpayers",
    },
    answers: [{
      id: "a-foreign-income-tax-overview-irs-rules-for-u-s-taxp",
      questionId: "",
      videoId: "Jgz51KUYkMY",
      articleContent: {
        sections: [
          { heading: "U.S. Worldwide Taxation: The General Rule", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Non-Resident Aliens and U.S.-Sourced Income", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "U.S. citizens and green card holders must report worldwide income to the IRS",
          "Non-resident aliens generally only pay U.S. tax on U.S.-sourced income",
          "Electing to file jointly with a U.S. spouse subjects all worldwide income to U.S. tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-16T08:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-fbar-filing-fincen-report-114-for-foreign-bank-acc",
      title: "FBAR Filing: FinCEN Report 114 for Foreign Bank Accounts (Ep. 38)",
      body: "I have income from outside the U.S. and need guidance on: FBAR Filing: FinCEN Report 114 for Foreign Bank Accounts. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Maria S.", avatarSeed: "jp_tech_founder-JL8WDS", badge: "subscriber" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-16T08:00:00.000Z",
      viewCount: 1755,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "FBAR Filing: FinCEN Report 114 for Foreign Bank Accounts (Ep. 38)",
      seoDescription: "Expert guidance on FBAR Filing: FinCEN Report 114 for Foreign Bank Accounts",
    },
    answers: [{
      id: "a-fbar-filing-fincen-report-114-for-foreign-bank-acc",
      questionId: "",
      videoId: "JL8WDS9Q8Ss",
      articleContent: {
        sections: [
          { heading: "What Is the FBAR?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Must File the FBAR?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "FBAR (FinCEN Report 114) is filed separately from your tax return — not attached to Form 1040",
          "Filing required when aggregate foreign account values exceed $10,000 at any point during the year",
          "U.S. persons includes citizens, residents, and U.S.-formed entities"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-16T11:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-8938-fatca-foreign-financial-assets-reporting",
      title: "Form 8938 FATCA: Foreign Financial Assets Reporting Introduction (Ep. 39)",
      body: "I have income from outside the U.S. and need guidance on: Form 8938 FATCA: Foreign Financial Assets Reporting Introduction. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Kevin W.", avatarSeed: "au_startup_q-xvd_H9", },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-16T11:00:00.000Z",
      viewCount: 1954,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8938 FATCA: Foreign Financial Assets Reporting Introduction (Ep. 39)",
      seoDescription: "Expert guidance on Form 8938 FATCA: Foreign Financial Assets Reporting Introduction",
    },
    answers: [{
      id: "a-form-8938-fatca-foreign-financial-assets-reporting",
      questionId: "",
      videoId: "xvd_H9_oZ5o",
      articleContent: {
        sections: [
          { heading: "FATCA and Form 8938", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Must Be Reported", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8938 is the individual reporting component of FATCA (Foreign Account Tax Compliance Act)",
          "Covers foreign bank accounts, brokerage accounts, mutual funds, and entity interests",
          "Attached to your annual tax return (unlike FBAR which is filed separately)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-16T14:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-8938-fatca-detailed-filing-requirements-and-t",
      title: "Form 8938 FATCA: Detailed Filing Requirements and Thresholds (Ep. 40)",
      body: "I have income from outside the U.S. and need guidance on: Form 8938 FATCA: Detailed Filing Requirements and Thresholds. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Sophie T.", avatarSeed: "ca_llc_owner-bMkvXZ", badge: "new-member" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-16T14:00:00.000Z",
      viewCount: 2238,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8938 FATCA: Detailed Filing Requirements and Thresholds (Ep. 40)",
      seoDescription: "Expert guidance on Form 8938 FATCA: Detailed Filing Requirements and Thresholds",
    },
    answers: [{
      id: "a-form-8938-fatca-detailed-filing-requirements-and-t",
      questionId: "",
      videoId: "bMkvXZrn3wM",
      articleContent: {
        sections: [
          { heading: "What Is Form 8938?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Filing Thresholds for U.S. Residents", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8938 is a FATCA disclosure attached to your annual tax return",
          "U.S. residents: file if foreign assets exceed $50,000 at year-end or $75,000 at any time (single)",
          "Married filing jointly: thresholds double to $100,000 year-end / $150,000 anytime"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-16T17:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-5471-reporting-foreign-corporation-ownership-",
      title: "Form 5471: Reporting Foreign Corporation Ownership to the IRS (Ep. 41)",
      body: "I have income from outside the U.S. and need guidance on: Form 5471: Reporting Foreign Corporation Ownership to the IRS. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Daniel M.", avatarSeed: "new_1120_filer-Sn1rRg", badge: "new-member" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-16T23:00:00.000Z",
      viewCount: 941,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 5471: Reporting Foreign Corporation Ownership to the IRS (Ep. 41)",
      seoDescription: "Expert guidance on Form 5471: Reporting Foreign Corporation Ownership to the IRS",
    },
    answers: [{
      id: "a-form-5471-reporting-foreign-corporation-ownership-",
      questionId: "",
      videoId: "Sn1rRgzLcY0",
      articleContent: {
        sections: [
          { heading: "What Is Form 5471?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Must File Form 5471?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 5471 is an information return for U.S. persons with interests in foreign corporations",
          "Filing is triggered by 10%+ ownership by value or voting rights",
          "Direct, indirect, and constructive ownership rules apply"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-17T02:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-3520-foreign-trust-and-gift-reporting-require",
      title: "Form 3520: Foreign Trust and Gift Reporting Requirements (Ep. 42)",
      body: "I have income from outside the U.S. and need guidance on: Form 3520: Foreign Trust and Gift Reporting Requirements. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Brandon", avatarSeed: "corp_tax_q-0Ko2lu", badge: "new-member" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-17T02:00:00.000Z",
      viewCount: 442,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 3520: Foreign Trust and Gift Reporting Requirements (Ep. 42)",
      seoDescription: "Expert guidance on Form 3520: Foreign Trust and Gift Reporting Requirements",
    },
    answers: [{
      id: "a-form-3520-foreign-trust-and-gift-reporting-require",
      questionId: "",
      videoId: "0Ko2lu11OUg",
      articleContent: {
        sections: [
          { heading: "What Is Form 3520?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Counts as a U.S. Person?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 3520 is an information return — not a tax bill — but carries penalties up to 35% for non-filing",
          "Required for certain transactions with foreign trusts and receipt of large foreign gifts ($100,000+)",
          "U.S. persons includes citizens, green card holders, and those meeting the substantial presence test"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-17T05:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-foreign-income-overview-u-s-tax-rules-for-internat",
      title: "Foreign Income Overview: U.S. Tax Rules for International Taxpayers",
      body: "I have income from outside the U.S. and need guidance on: Foreign Income Overview: U.S. Tax Rules for International Taxpayers. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Mei", avatarSeed: "first_filer-DMOQvE", badge: "new-member" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-17T05:00:00.000Z",
      viewCount: 555,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign Income Overview: U.S. Tax Rules for International Taxpayers",
      seoDescription: "Expert guidance on Foreign Income Overview: U.S. Tax Rules for International Taxpayers",
    },
    answers: [{
      id: "a-foreign-income-overview-u-s-tax-rules-for-internat",
      questionId: "",
      videoId: "DMOQvEeOnk8",
      articleContent: {
        sections: [
          { heading: "U.S. Worldwide Taxation: The General Rule", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Non-Resident Aliens and U.S.-Sourced Income", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "U.S. citizens and green card holders must report worldwide income to the IRS",
          "Non-resident aliens generally only pay U.S. tax on U.S.-sourced income",
          "Electing to file jointly with a U.S. spouse subjects all worldwide income to U.S. tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-17T08:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-foreign-income-filing-obligations-reminder-for-u-s",
      title: "Foreign Income Filing Obligations Reminder for U.S. Taxpayers",
      body: "I have income from outside the U.S. and need guidance on: Foreign Income Filing Obligations Reminder for U.S. Taxpayers. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Hassan", avatarSeed: "ein_help_needed-Nagb2C", badge: "new-member" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-17T08:00:00.000Z",
      viewCount: 1247,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign Income Filing Obligations Reminder for U.S. Taxpayers",
      seoDescription: "Expert guidance on Foreign Income Filing Obligations Reminder for U.S. Taxpayers",
    },
    answers: [{
      id: "a-foreign-income-filing-obligations-reminder-for-u-s",
      questionId: "",
      videoId: "Nagb2CRDSvU",
      articleContent: {
        sections: [
          { heading: "How the IRS Determines Filing Obligations", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Three Factors That Determine Your Obligation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The IRS checks gross income (before exclusions/deductions) to determine filing requirements",
          "Filing obligation depends on income, filing status, and age",
          "You must file first, then claim exclusions and deductions — these are separate steps"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-17T11:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-fbar-guide-fincen-report-114-for-foreign-bank-acco",
      title: "FBAR Guide: FinCEN Report 114 for Foreign Bank Account Reporting",
      body: "I have income from outside the U.S. and need guidance on: FBAR Guide: FinCEN Report 114 for Foreign Bank Account Reporting. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Olga", avatarSeed: "married_filing_q-A7bxC-", badge: "new-member" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-17T11:00:00.000Z",
      viewCount: 2436,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "FBAR Guide: FinCEN Report 114 for Foreign Bank Account Reporting",
      seoDescription: "Expert guidance on FBAR Guide: FinCEN Report 114 for Foreign Bank Account Reporting",
    },
    answers: [{
      id: "a-fbar-guide-fincen-report-114-for-foreign-bank-acco",
      questionId: "",
      videoId: "A7bxC-NKCL4",
      articleContent: {
        sections: [
          { heading: "What Is the FBAR?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Must File the FBAR?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "FBAR (FinCEN Report 114) is filed separately from your tax return — not attached to Form 1040",
          "Filing required when aggregate foreign account values exceed $10,000 at any point during the year",
          "U.S. persons includes citizens, residents, and U.S.-formed entities"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-17T14:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-8938-introduction-fatca-foreign-financial-ass",
      title: "Form 8938 Introduction: FATCA Foreign Financial Assets Reporting",
      body: "I have income from outside the U.S. and need guidance on: Form 8938 Introduction: FATCA Foreign Financial Assets Reporting. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Tomas", avatarSeed: "filing_status_help-GvKKI9", badge: "subscriber" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-17T14:00:00.000Z",
      viewCount: 2362,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8938 Introduction: FATCA Foreign Financial Assets Reporting",
      seoDescription: "Expert guidance on Form 8938 Introduction: FATCA Foreign Financial Assets Reporting",
    },
    answers: [{
      id: "a-form-8938-introduction-fatca-foreign-financial-ass",
      questionId: "",
      videoId: "GvKKI9zsR20",
      articleContent: {
        sections: [
          { heading: "FATCA and Form 8938", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Must Be Reported", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8938 is the individual reporting component of FATCA (Foreign Account Tax Compliance Act)",
          "Covers foreign bank accounts, brokerage accounts, mutual funds, and entity interests",
          "Attached to your annual tax return (unlike FBAR which is filed separately)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-17T17:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-8938-detailed-guide-thresholds-and-filing-req",
      title: "Form 8938 Detailed Guide: Thresholds and Filing Requirements",
      body: "I have income from outside the U.S. and need guidance on: Form 8938 Detailed Guide: Thresholds and Filing Requirements. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Aisha", avatarSeed: "tax_newbie-hVk7To", badge: "subscriber" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-17T23:00:00.000Z",
      viewCount: 1130,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8938 Detailed Guide: Thresholds and Filing Requirements",
      seoDescription: "Expert guidance on Form 8938 Detailed Guide: Thresholds and Filing Requirements",
    },
    answers: [{
      id: "a-form-8938-detailed-guide-thresholds-and-filing-req",
      questionId: "",
      videoId: "hVk7TovM3ZM",
      articleContent: {
        sections: [
          { heading: "What Is Form 8938?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Filing Thresholds for U.S. Residents", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8938 is a FATCA disclosure attached to your annual tax return",
          "U.S. residents: file if foreign assets exceed $50,000 at year-end or $75,000 at any time (single)",
          "Married filing jointly: thresholds double to $100,000 year-end / $150,000 anytime"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-18T02:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-5471-information-return-for-foreign-corporati",
      title: "Form 5471: Information Return for Foreign Corporation Ownership",
      body: "I have income from outside the U.S. and need guidance on: Form 5471: Information Return for Foreign Corporation Ownership. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Dmitri", avatarSeed: "biz_tax_question-rr01oI", badge: "subscriber" as const },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-18T02:00:00.000Z",
      viewCount: 1770,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 5471: Information Return for Foreign Corporation Ownership",
      seoDescription: "Expert guidance on Form 5471: Information Return for Foreign Corporation Ownership",
    },
    answers: [{
      id: "a-form-5471-information-return-for-foreign-corporati",
      questionId: "",
      videoId: "rr01oIySnFQ",
      articleContent: {
        sections: [
          { heading: "What Is Form 5471?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Must File Form 5471?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 5471 is an information return for U.S. persons with interests in foreign corporations",
          "Filing is triggered by 10%+ ownership by value or voting rights",
          "Direct, indirect, and constructive ownership rules apply"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-18T05:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-3520-foreign-trust-and-gift-reporting-guide",
      title: "Form 3520: Foreign Trust and Gift Reporting Guide",
      body: "I have income from outside the U.S. and need guidance on: Form 3520: Foreign Trust and Gift Reporting Guide. What are my reporting obligations and how do I stay compliant?",
      author: { displayName: "Camila", avatarSeed: "startup_tax_q-894FQX", },
      category: "foreign-income",
      tags: ["foreign-income"],
      postedAt: "2026-03-18T05:00:00.000Z",
      viewCount: 1597,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 3520: Foreign Trust and Gift Reporting Guide",
      seoDescription: "Expert guidance on Form 3520: Foreign Trust and Gift Reporting Guide",
    },
    answers: [{
      id: "a-form-3520-foreign-trust-and-gift-reporting-guide",
      questionId: "",
      videoId: "894FQXglQXQ",
      articleContent: {
        sections: [
          { heading: "What Is Form 3520?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Counts as a U.S. Person?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 3520 is an information return — not a tax bill — but carries penalties up to 35% for non-filing",
          "Required for certain transactions with foreign trusts and receipt of large foreign gifts ($100,000+)",
          "U.S. persons includes citizens, green card holders, and those meeting the substantial presence test"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-18T08:00:00.000Z",
      sources: [{ label: "International Taxpayers", url: "https://www.irs.gov/individuals/international-taxpayers" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-introduction-foreign-partnership-reporti",
      title: "Form 8865 Introduction: Foreign Partnership Reporting (Ep. 43)",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Introduction: Foreign Partnership Reporting. What are the filing thresholds and requirements?",
      author: { displayName: "Liam", avatarSeed: "llc_formation_q-1pb5EV", badge: "new-member" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-18T08:00:00.000Z",
      viewCount: 1834,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Introduction: Foreign Partnership Reporting (Ep. 43)",
      seoDescription: "Expert guidance on Form 8865 Introduction: Foreign Partnership Reporting",
    },
    answers: [{
      id: "a-form-8865-introduction-foreign-partnership-reporti",
      questionId: "",
      videoId: "1pb5EVOZZXw",
      articleContent: {
        sections: [
          { heading: "What Is Form 8865?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Four Categories of Filers", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8865 reports U.S. persons' interests in foreign partnerships",
          "Four categories of filers based on control, ownership percentage, contributions, and reportable events",
          "Category 1: controlling interest (>50%); Category 2: 10%+ in a U.S.-controlled partnership"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-18T11:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-category-1-filers-who-must-report-ep-44",
      title: "Form 8865 Category 1 Filers: Who Must Report? (Ep. 44)",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Category 1 Filers: Who Must Report?. What are the filing thresholds and requirements?",
      author: { displayName: "Fatima", avatarSeed: "entity_choice_q-DVRe7D", badge: "new-member" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-18T11:00:00.000Z",
      viewCount: 2917,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Category 1 Filers: Who Must Report? (Ep. 44)",
      seoDescription: "Expert guidance on Form 8865 Category 1 Filers: Who Must Report?",
    },
    answers: [{
      id: "a-form-8865-category-1-filers-who-must-report-ep-44",
      questionId: "",
      videoId: "DVRe7DTgOpA",
      articleContent: {
        sections: [
          { heading: "Category 1: Controlling Interest in Foreign Partnership", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Constructive Ownership Rules", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Category 1: U.S. persons with more than 50% control of a foreign partnership",
          "Control measured by capital, profits, losses, or deduction allocations",
          "Constructive ownership rules prevent avoidance through family or entity structures"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-18T14:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-category-2-filers-explained-ep-45",
      title: "Form 8865 Category 2 Filers Explained (Ep. 45)",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Category 2 Filers Explained. What are the filing thresholds and requirements?",
      author: { displayName: "Oscar", avatarSeed: "tax_credit_q-7mwXtJ", badge: "new-member" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-18T14:00:00.000Z",
      viewCount: 1587,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Category 2 Filers Explained (Ep. 45)",
      seoDescription: "Expert guidance on Form 8865 Category 2 Filers Explained",
    },
    answers: [{
      id: "a-form-8865-category-2-filers-explained-ep-45",
      questionId: "",
      videoId: "7mwXtJj7T1w",
      articleContent: {
        sections: [
          { heading: "Form 8865 Category 2: U.S.-Controlled Foreign Partnership", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Mutual Exclusivity with Category 1", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Category 2: you own 10%+ in a foreign partnership that is collectively U.S.-controlled (>50%)",
          "U.S. control is measured collectively across all U.S. person owners",
          "Mutually exclusive with Category 1 — if a Category 1 filer exists, no one files Category 2"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-18T17:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-category-3-filers-explained-ep-46",
      title: "Form 8865 Category 3 Filers Explained (Ep. 46)",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Category 3 Filers Explained. What are the filing thresholds and requirements?",
      author: { displayName: "Ingrid", avatarSeed: "amt_confused-zJttw2", badge: "new-member" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-18T23:00:00.000Z",
      viewCount: 685,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Category 3 Filers Explained (Ep. 46)",
      seoDescription: "Expert guidance on Form 8865 Category 3 Filers Explained",
    },
    answers: [{
      id: "a-form-8865-category-3-filers-explained-ep-46",
      questionId: "",
      videoId: "zJttw2eYKeM",
      articleContent: {
        sections: [
          { heading: "Form 8865 Category 3: Contributions to Foreign Partnerships", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Triggers Category 3", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Category 3: triggered by contributing property to a foreign partnership",
          "Applies regardless of your ownership percentage",
          "Covers all types of property: cash, equipment, IP, real estate"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-19T02:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-category-4-filers-explained-ep-47",
      title: "Form 8865 Category 4 Filers Explained (Ep. 47)",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Category 4 Filers Explained. What are the filing thresholds and requirements?",
      author: { displayName: "Ravi", avatarSeed: "deduction_help-QRi9Oi", badge: "new-member" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-19T02:00:00.000Z",
      viewCount: 1205,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Category 4 Filers Explained (Ep. 47)",
      seoDescription: "Expert guidance on Form 8865 Category 4 Filers Explained",
    },
    answers: [{
      id: "a-form-8865-category-4-filers-explained-ep-47",
      questionId: "",
      videoId: "QRi9Oi65CPU",
      articleContent: {
        sections: [
          { heading: "Form 8865 Category 4: Reportable Events", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Three Types of Reportable Events", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Category 4: triggered by acquisitions, dispositions, or proportional changes around 10% threshold",
          "Acquisition: crossing above 10% ownership",
          "Disposition: dropping below 10% ownership"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-19T05:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-category-1-control-of-foreign-partnershi",
      title: "Form 8865 Category 1: Control of Foreign Partnership",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Category 1: Control of Foreign Partnership. What are the filing thresholds and requirements?",
      author: { displayName: "Elena", avatarSeed: "qbi_question-mRspJO", badge: "new-member" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-19T05:00:00.000Z",
      viewCount: 2412,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Category 1: Control of Foreign Partnership",
      seoDescription: "Expert guidance on Form 8865 Category 1: Control of Foreign Partnership",
    },
    answers: [{
      id: "a-form-8865-category-1-control-of-foreign-partnershi",
      questionId: "",
      videoId: "mRspJOLEeGc",
      articleContent: {
        sections: [
          { heading: "Category 1: Controlling Interest in Foreign Partnership", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Constructive Ownership Rules", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Category 1: U.S. persons with more than 50% control of a foreign partnership",
          "Control measured by capital, profits, losses, or deduction allocations",
          "Constructive ownership rules prevent avoidance through family or entity structures"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-19T08:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-category-2-acquisitions-and-dispositions",
      title: "Form 8865 Category 2: Acquisitions and Dispositions",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Category 2: Acquisitions and Dispositions. What are the filing thresholds and requirements?",
      author: { displayName: "Jun", avatarSeed: "installment_q-ZO0Y0x", badge: "subscriber" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-19T08:00:00.000Z",
      viewCount: 2919,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Category 2: Acquisitions and Dispositions",
      seoDescription: "Expert guidance on Form 8865 Category 2: Acquisitions and Dispositions",
    },
    answers: [{
      id: "a-form-8865-category-2-acquisitions-and-dispositions",
      questionId: "",
      videoId: "ZO0Y0xH8Ut0",
      articleContent: {
        sections: [
          { heading: "Form 8865 Category 2: U.S.-Controlled Foreign Partnership", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Mutual Exclusivity with Category 1", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Category 2: you own 10%+ in a foreign partnership that is collectively U.S.-controlled (>50%)",
          "U.S. control is measured collectively across all U.S. person owners",
          "Mutually exclusive with Category 1 — if a Category 1 filer exists, no one files Category 2"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-19T11:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-category-3-contributions-to-foreign-part",
      title: "Form 8865 Category 3: Contributions to Foreign Partnerships",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Category 3: Contributions to Foreign Partnerships. What are the filing thresholds and requirements?",
      author: { displayName: "Grace", avatarSeed: "cp2000_scared-yWjWH_", badge: "subscriber" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-19T11:00:00.000Z",
      viewCount: 1640,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Category 3: Contributions to Foreign Partnerships",
      seoDescription: "Expert guidance on Form 8865 Category 3: Contributions to Foreign Partnerships",
    },
    answers: [{
      id: "a-form-8865-category-3-contributions-to-foreign-part",
      questionId: "",
      videoId: "yWjWH_oy4HM",
      articleContent: {
        sections: [
          { heading: "Form 8865 Category 3: Contributions to Foreign Partnerships", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Triggers Category 3", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Category 3: triggered by contributing property to a foreign partnership",
          "Applies regardless of your ownership percentage",
          "Covers all types of property: cash, equipment, IP, real estate"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-19T14:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-form-8865-category-4-large-foreign-partnership-int",
      title: "Form 8865 Category 4: Large Foreign Partnership Interests",
      body: "I have interests in a foreign partnership and need to understand: Form 8865 Category 4: Large Foreign Partnership Interests. What are the filing thresholds and requirements?",
      author: { displayName: "Samuel", avatarSeed: "irs_notice_q-VB5esr", badge: "subscriber" as const },
      category: "form-8865",
      tags: ["form-8865"],
      postedAt: "2026-03-19T14:00:00.000Z",
      viewCount: 2811,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8865 Category 4: Large Foreign Partnership Interests",
      seoDescription: "Expert guidance on Form 8865 Category 4: Large Foreign Partnership Interests",
    },
    answers: [{
      id: "a-form-8865-category-4-large-foreign-partnership-int",
      questionId: "",
      videoId: "VB5esrLsUCo",
      articleContent: {
        sections: [
          { heading: "Form 8865 Category 4: Reportable Events", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Three Types of Reportable Events", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Category 4: triggered by acquisitions, dispositions, or proportional changes around 10% threshold",
          "Acquisition: crossing above 10% ownership",
          "Disposition: dropping below 10% ownership"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-19T17:00:00.000Z",
      sources: [{ label: "About Form 8865", url: "https://www.irs.gov/forms-pubs/about-form-8865" }],
    }],
  },

  {
    question: {
      id: "q-tax-return-due-dates-general-rules-for-individual-",
      title: "Tax Return Due Dates: General Rules for Individual and Business Filers (Ep. 50)",
      body: "I'm confused about tax deadlines: Tax Return Due Dates: General Rules for Individual and Business Filers. When exactly do I need to file and what extensions are available?",
      author: { displayName: "Nadia", avatarSeed: "foreign_income_q-RiSquX", },
      category: "due-dates",
      tags: ["due-dates"],
      postedAt: "2026-03-19T23:00:00.000Z",
      viewCount: 2125,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Tax Return Due Dates: General Rules for Individual and Business Filers (Ep. 50)",
      seoDescription: "Expert guidance on Tax Return Due Dates: General Rules for Individual and Business Filers",
    },
    answers: [{
      id: "a-tax-return-due-dates-general-rules-for-individual-",
      questionId: "",
      videoId: "RiSquXkh6cs",
      articleContent: {
        sections: [
          { heading: "The General Due Date Rule", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Extensions: More Time to File, Not to Pay", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Individual returns (Form 1040): due April 15 for calendar-year taxpayers",
          "Partnerships (1065) and S-Corps (1120-S): due March 15",
          "Automatic 6-month extension available by filing Form 4868 (extends to October 15)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-20T02:00:00.000Z",
      sources: [{ label: "IRS Tax Calendar", url: "https://www.irs.gov/pub/irs-pdf/p509.pdf" }],
    }],
  },

  {
    question: {
      id: "q-tax-return-due-dates-for-decedent-and-estate-retur",
      title: "Tax Return Due Dates for Decedent and Estate Returns (Ep. 51)",
      body: "I'm confused about tax deadlines: Tax Return Due Dates for Decedent and Estate Returns. When exactly do I need to file and what extensions are available?",
      author: { displayName: "Tobias", avatarSeed: "fbar_filing_q-3HwGG-", badge: "new-member" as const },
      category: "due-dates",
      tags: ["due-dates"],
      postedAt: "2026-03-20T02:00:00.000Z",
      viewCount: 638,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Tax Return Due Dates for Decedent and Estate Returns (Ep. 51)",
      seoDescription: "Expert guidance on Tax Return Due Dates for Decedent and Estate Returns",
    },
    answers: [{
      id: "a-tax-return-due-dates-for-decedent-and-estate-retur",
      questionId: "",
      videoId: "3HwGG-HwPWg",
      articleContent: {
        sections: [
          { heading: "Filing for Someone Who Has Passed Away", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Due Dates for Decedent Returns", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Final Form 1040 covers income from January 1 through date of death — due April 15",
          "Estate income tax return (Form 1041) covers income earned by the estate after death",
          "Estate tax return (Form 706) required if estate exceeds the federal estate tax exemption"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-20T05:00:00.000Z",
      sources: [{ label: "IRS Tax Calendar", url: "https://www.irs.gov/pub/irs-pdf/p509.pdf" }],
    }],
  },

  {
    question: {
      id: "q-automatic-2-month-tax-extension-for-u-s-citizens-a",
      title: "Automatic 2-Month Tax Extension for U.S. Citizens Abroad (Ep. 52)",
      body: "I'm confused about tax deadlines: Automatic 2-Month Tax Extension for U.S. Citizens Abroad. When exactly do I need to file and what extensions are available?",
      author: { displayName: "Yara", avatarSeed: "partnership_tax_q-UyzwHy", badge: "new-member" as const },
      category: "due-dates",
      tags: ["due-dates"],
      postedAt: "2026-03-20T05:00:00.000Z",
      viewCount: 2727,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Automatic 2-Month Tax Extension for U.S. Citizens Abroad (Ep. 52)",
      seoDescription: "Expert guidance on Automatic 2-Month Tax Extension for U.S. Citizens Abroad",
    },
    answers: [{
      id: "a-automatic-2-month-tax-extension-for-u-s-citizens-a",
      questionId: "",
      videoId: "UyzwHycVzZI",
      articleContent: {
        sections: [
          { heading: "Who Qualifies for the Automatic Extension", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "The Critical Catch: Extension to File, Not to Pay", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "U.S. citizens/residents abroad on April 15 automatically get until June 15 to file",
          "No form needed — the 2-month extension is automatic based on your location",
          "Interest on unpaid taxes still accrues from April 15 — this is NOT an extension to pay"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-20T08:00:00.000Z",
      sources: [{ label: "IRS Tax Calendar", url: "https://www.irs.gov/pub/irs-pdf/p509.pdf" }],
    }],
  },

  {
    question: {
      id: "q-when-to-find-a-tax-professional-filing-deadline-ti",
      title: "When to Find a Tax Professional: Filing Deadline Tips (Ep. 53)",
      body: "I'm confused about tax deadlines: When to Find a Tax Professional: Filing Deadline Tips. When exactly do I need to file and what extensions are available?",
      author: { displayName: "markus_berlin", avatarSeed: "sole_prop_q-_dY7VR", badge: "new-member" as const },
      category: "due-dates",
      tags: ["due-dates"],
      postedAt: "2026-03-20T08:00:00.000Z",
      viewCount: 1774,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "When to Find a Tax Professional: Filing Deadline Tips (Ep. 53)",
      seoDescription: "Expert guidance on When to Find a Tax Professional: Filing Deadline Tips",
    },
    answers: [{
      id: "a-when-to-find-a-tax-professional-filing-deadline-ti",
      questionId: "",
      videoId: "_dY7VRfhFyE",
      articleContent: {
        sections: [
          { heading: "Do Not Wait Until April", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Ideal Timeline for Finding a Tax Pro", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Start looking for a tax professional in January/February — not April",
          "Tax pros are fully booked during filing season — last-minute searches lead to rushed work",
          "Look for CPAs, EAs, or tax attorneys with experience in your specific situation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-20T11:00:00.000Z",
      sources: [{ label: "IRS Tax Calendar", url: "https://www.irs.gov/pub/irs-pdf/p509.pdf" }],
    }],
  },

  {
    question: {
      id: "q-tax-return-due-dates-general-filing-deadline-rules",
      title: "Tax Return Due Dates: General Filing Deadline Rules",
      body: "I'm confused about tax deadlines: Tax Return Due Dates: General Filing Deadline Rules. When exactly do I need to file and what extensions are available?",
      author: { displayName: "tokyo.sarah", avatarSeed: "scorp_eligible-8cNAG-", badge: "new-member" as const },
      category: "due-dates",
      tags: ["due-dates"],
      postedAt: "2026-03-20T11:00:00.000Z",
      viewCount: 918,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Tax Return Due Dates: General Filing Deadline Rules",
      seoDescription: "Expert guidance on Tax Return Due Dates: General Filing Deadline Rules",
    },
    answers: [{
      id: "a-tax-return-due-dates-general-filing-deadline-rules",
      questionId: "",
      videoId: "8cNAG-PZCTA",
      articleContent: {
        sections: [
          { heading: "The General Due Date Rule", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Extensions: More Time to File, Not to Pay", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Individual returns (Form 1040): due April 15 for calendar-year taxpayers",
          "Partnerships (1065) and S-Corps (1120-S): due March 15",
          "Automatic 6-month extension available by filing Form 4868 (extends to October 15)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-20T14:00:00.000Z",
      sources: [{ label: "IRS Tax Calendar", url: "https://www.irs.gov/pub/irs-pdf/p509.pdf" }],
    }],
  },

  {
    question: {
      id: "q-due-dates-for-decedent-and-estate-tax-returns",
      title: "Due Dates for Decedent and Estate Tax Returns",
      body: "I'm confused about tax deadlines: Due Dates for Decedent and Estate Tax Returns. When exactly do I need to file and what extensions are available?",
      author: { displayName: "dave_in_london", avatarSeed: "ccorp_vs_scorp-L5bz7g", badge: "new-member" as const },
      category: "due-dates",
      tags: ["due-dates"],
      postedAt: "2026-03-20T14:00:00.000Z",
      viewCount: 3068,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Due Dates for Decedent and Estate Tax Returns",
      seoDescription: "Expert guidance on Due Dates for Decedent and Estate Tax Returns",
    },
    answers: [{
      id: "a-due-dates-for-decedent-and-estate-tax-returns",
      questionId: "",
      videoId: "L5bz7gz78I4",
      articleContent: {
        sections: [
          { heading: "Filing for Someone Who Has Passed Away", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Due Dates for Decedent Returns", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Final Form 1040 covers income from January 1 through date of death — due April 15",
          "Estate income tax return (Form 1041) covers income earned by the estate after death",
          "Estate tax return (Form 706) required if estate exceeds the federal estate tax exemption"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-20T17:00:00.000Z",
      sources: [{ label: "IRS Tax Calendar", url: "https://www.irs.gov/pub/irs-pdf/p509.pdf" }],
    }],
  },

  {
    question: {
      id: "q-automatic-2-month-tax-extension-who-qualifies",
      title: "Automatic 2-Month Tax Extension: Who Qualifies?",
      body: "I'm confused about tax deadlines: Automatic 2-Month Tax Extension: Who Qualifies?. When exactly do I need to file and what extensions are available?",
      author: { displayName: "priya.m", avatarSeed: "injured_spouse_q-C8ev6q", badge: "new-member" as const },
      category: "due-dates",
      tags: ["due-dates"],
      postedAt: "2026-03-20T23:00:00.000Z",
      viewCount: 2785,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Automatic 2-Month Tax Extension: Who Qualifies?",
      seoDescription: "Expert guidance on Automatic 2-Month Tax Extension: Who Qualifies?",
    },
    answers: [{
      id: "a-automatic-2-month-tax-extension-who-qualifies",
      questionId: "",
      videoId: "C8ev6qqr0m4",
      articleContent: {
        sections: [
          { heading: "Who Qualifies for the Automatic Extension", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "The Critical Catch: Extension to File, Not to Pay", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "U.S. citizens/residents abroad on April 15 automatically get until June 15 to file",
          "No form needed — the 2-month extension is automatic based on your location",
          "Interest on unpaid taxes still accrues from April 15 — this is NOT an extension to pay"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-21T02:00:00.000Z",
      sources: [{ label: "IRS Tax Calendar", url: "https://www.irs.gov/pub/irs-pdf/p509.pdf" }],
    }],
  },

  {
    question: {
      id: "q-when-to-hire-a-tax-professional-before-the-deadlin",
      title: "When to Hire a Tax Professional Before the Deadline",
      body: "I'm confused about tax deadlines: When to Hire a Tax Professional Before the Deadline. When exactly do I need to file and what extensions are available?",
      author: { displayName: "alex_hk", avatarSeed: "innocent_spouse_q-7vH4wK", badge: "subscriber" as const },
      category: "due-dates",
      tags: ["due-dates"],
      postedAt: "2026-03-21T02:00:00.000Z",
      viewCount: 3093,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "When to Hire a Tax Professional Before the Deadline",
      seoDescription: "Expert guidance on When to Hire a Tax Professional Before the Deadline",
    },
    answers: [{
      id: "a-when-to-hire-a-tax-professional-before-the-deadlin",
      questionId: "",
      videoId: "7vH4wK9yhj8",
      articleContent: {
        sections: [
          { heading: "Do Not Wait Until April", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Ideal Timeline for Finding a Tax Pro", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Start looking for a tax professional in January/February — not April",
          "Tax pros are fully booked during filing season — last-minute searches lead to rushed work",
          "Look for CPAs, EAs, or tax attorneys with experience in your specific situation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-21T05:00:00.000Z",
      sources: [{ label: "IRS Tax Calendar", url: "https://www.irs.gov/pub/irs-pdf/p509.pdf" }],
    }],
  },

  {
    question: {
      id: "q-reporting-tax-changes-income-adjustments-and-deduc",
      title: "Reporting Tax Changes: Income, Adjustments, and Deductions (Ep. 49)",
      body: "My circumstances changed this year and I need to understand: Reporting Tax Changes: Income, Adjustments, and Deductions. How does this affect my tax return?",
      author: { displayName: "nina_from_brazil", avatarSeed: "estate_tax_q-4zMhWN", badge: "subscriber" as const },
      category: "reporting-changes",
      tags: ["reporting-changes"],
      postedAt: "2026-03-21T05:00:00.000Z",
      viewCount: 1020,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Reporting Tax Changes: Income, Adjustments, and Deductions (Ep. 49)",
      seoDescription: "Expert guidance on Reporting Tax Changes: Income, Adjustments, and Deductions",
    },
    answers: [{
      id: "a-reporting-tax-changes-income-adjustments-and-deduc",
      questionId: "",
      videoId: "4zMhWN6Fjf8",
      articleContent: {
        sections: [
          { heading: "Three Steps to Handle Changes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Income Changes to Report", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Handle changes in three steps: income, adjustments to income, deductions and credits",
          "Report all income changes: new jobs, side businesses, investments, retirement withdrawals",
          "New deductions may arise from life changes: home purchase, business start, education"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-21T08:00:00.000Z",
      sources: [{ label: "Life Events and Taxes", url: "https://www.irs.gov/individuals/life-events" }],
    }],
  },

  {
    question: {
      id: "q-life-changes-that-affect-your-tax-return-ep-48",
      title: "Life Changes That Affect Your Tax Return (Ep. 48)",
      body: "My circumstances changed this year and I need to understand: Life Changes That Affect Your Tax Return. How does this affect my tax return?",
      author: { displayName: "carlos.mx", avatarSeed: "due_date_q-CFV0wa", badge: "subscriber" as const },
      category: "reporting-changes",
      tags: ["reporting-changes"],
      postedAt: "2026-03-21T08:00:00.000Z",
      viewCount: 2588,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Life Changes That Affect Your Tax Return (Ep. 48)",
      seoDescription: "Expert guidance on Life Changes That Affect Your Tax Return",
    },
    answers: [{
      id: "a-life-changes-that-affect-your-tax-return-ep-48",
      questionId: "",
      videoId: "CFV0wa_inQE",
      articleContent: {
        sections: [
          { heading: "Why Life Changes Affect Your Taxes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Major Life Changes That Impact Your Return", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Life changes (marriage, divorce, children, home purchase) directly affect your tax return",
          "Filing status changes with marriage or divorce — potentially changing your entire tax picture",
          "New dependents create new credit opportunities (child tax credit, dependent care credit)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-21T11:00:00.000Z",
      sources: [{ label: "Life Events and Taxes", url: "https://www.irs.gov/individuals/life-events" }],
    }],
  },

  {
    question: {
      id: "q-reporting-changes-income-adjustments-and-deduction",
      title: "Reporting Changes: Income, Adjustments, and Deduction Updates",
      body: "My circumstances changed this year and I need to understand: Reporting Changes: Income, Adjustments, and Deduction Updates. How does this affect my tax return?",
      author: { displayName: "yuki_osaka", avatarSeed: "ss4_application_q-PwHJiA", },
      category: "reporting-changes",
      tags: ["reporting-changes"],
      postedAt: "2026-03-21T11:00:00.000Z",
      viewCount: 2907,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Reporting Changes: Income, Adjustments, and Deduction Updates",
      seoDescription: "Expert guidance on Reporting Changes: Income, Adjustments, and Deduction Updates",
    },
    answers: [{
      id: "a-reporting-changes-income-adjustments-and-deduction",
      questionId: "",
      videoId: "PwHJiAKD35k",
      articleContent: {
        sections: [
          { heading: "Three Steps to Handle Changes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Income Changes to Report", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Handle changes in three steps: income, adjustments to income, deductions and credits",
          "Report all income changes: new jobs, side businesses, investments, retirement withdrawals",
          "New deductions may arise from life changes: home purchase, business start, education"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-21T14:00:00.000Z",
      sources: [{ label: "Life Events and Taxes", url: "https://www.irs.gov/individuals/life-events" }],
    }],
  },

  {
    question: {
      id: "q-life-changes-and-your-tax-return-what-to-report",
      title: "Life Changes and Your Tax Return: What to Report",
      body: "My circumstances changed this year and I need to understand: Life Changes and Your Tax Return: What to Report. How does this affect my tax return?",
      author: { displayName: "tom_sydney", avatarSeed: "ein_lost_help-jK0MVx", badge: "new-member" as const },
      category: "reporting-changes",
      tags: ["reporting-changes"],
      postedAt: "2026-03-21T14:00:00.000Z",
      viewCount: 741,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Life Changes and Your Tax Return: What to Report",
      seoDescription: "Expert guidance on Life Changes and Your Tax Return: What to Report",
    },
    answers: [{
      id: "a-life-changes-and-your-tax-return-what-to-report",
      questionId: "",
      videoId: "jK0MVxzZ6yE",
      articleContent: {
        sections: [
          { heading: "Why Life Changes Affect Your Taxes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Major Life Changes That Impact Your Return", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Life changes (marriage, divorce, children, home purchase) directly affect your tax return",
          "Filing status changes with marriage or divorce — potentially changing your entire tax picture",
          "New dependents create new credit opportunities (child tax credit, dependent care credit)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-21T17:00:00.000Z",
      sources: [{ label: "Life Events and Taxes", url: "https://www.irs.gov/individuals/life-events" }],
    }],
  },

  {
    question: {
      id: "q-foreign-tax-credit-introduction-how-to-avoid-doubl",
      title: "Foreign Tax Credit Introduction: How to Avoid Double Taxation (Ep. 21)",
      body: "I'm trying to maximize my tax credits: Foreign Tax Credit Introduction: How to Avoid Double Taxation. How do I calculate and claim these credits correctly?",
      author: { displayName: "lisa.taipei", avatarSeed: "new_ein_q-Iwmm93", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-21T23:00:00.000Z",
      viewCount: 2784,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign Tax Credit Introduction: How to Avoid Double Taxation (Ep. 21)",
      seoDescription: "Expert guidance on Foreign Tax Credit Introduction: How to Avoid Double Taxation",
    },
    answers: [{
      id: "a-foreign-tax-credit-introduction-how-to-avoid-doubl",
      questionId: "",
      videoId: "Iwmm93kDgyw",
      articleContent: {
        sections: [
          { heading: "What Is the Foreign Tax Credit?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How the FTC Works", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "FTC prevents double taxation by crediting foreign income taxes against your U.S. tax liability",
          "Credit is dollar-for-dollar — more valuable than a deduction for foreign taxes",
          "Reported on Form 1116 with separate calculations for each income category"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-22T02:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-qualified-foreign-taxes-what-counts-for-the-foreig",
      title: "Qualified Foreign Taxes: What Counts for the Foreign Tax Credit (Ep. 22)",
      body: "I'm trying to maximize my tax credits: Qualified Foreign Taxes: What Counts for the Foreign Tax Credit. How do I calculate and claim these credits correctly?",
      author: { displayName: "mike_toronto", avatarSeed: "form_8832_q-gRro7g", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-22T02:00:00.000Z",
      viewCount: 2343,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Qualified Foreign Taxes: What Counts for the Foreign Tax Credit (Ep. 22)",
      seoDescription: "Expert guidance on Qualified Foreign Taxes: What Counts for the Foreign Tax Credit",
    },
    answers: [{
      id: "a-qualified-foreign-taxes-what-counts-for-the-foreig",
      questionId: "",
      videoId: "gRro7gXmNoc",
      articleContent: {
        sections: [
          { heading: "Which Foreign Taxes Qualify for the Credit?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Taxes That Qualify vs. Don't Qualify", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Only income taxes (or taxes in lieu of income tax) qualify for the FTC",
          "The tax must be a legal, actual liability that was paid or accrued",
          "The tax must be imposed on you — you cannot claim someone else's tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-22T05:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-foreign-tax-credit-calculation-ftc-allowed-formula",
      title: "Foreign Tax Credit Calculation: FTC Allowed Formula Explained (Ep. 23)",
      body: "I'm trying to maximize my tax credits: Foreign Tax Credit Calculation: FTC Allowed Formula Explained. How do I calculate and claim these credits correctly?",
      author: { displayName: "anna.vienna", avatarSeed: "hoh_filing_q-KhyWE8", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-22T05:00:00.000Z",
      viewCount: 1865,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign Tax Credit Calculation: FTC Allowed Formula Explained (Ep. 23)",
      seoDescription: "Expert guidance on Foreign Tax Credit Calculation: FTC Allowed Formula Explained",
    },
    answers: [{
      id: "a-foreign-tax-credit-calculation-ftc-allowed-formula",
      questionId: "",
      videoId: "KhyWE8SL2tg",
      articleContent: {
        sections: [
          { heading: "The FTC Limitation Formula", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Practical Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "FTC formula: U.S. Tax × (Foreign Income ÷ Worldwide Income) = maximum credit allowed",
          "The credit cannot exceed the U.S. tax attributable to foreign-source income",
          "Excess credits carry forward 10 years and back 1 year"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-22T08:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-general-business-credit-introduction-form-3800-ove",
      title: "General Business Credit Introduction: Form 3800 Overview (Ep. 24)",
      body: "I'm trying to maximize my tax credits: General Business Credit Introduction: Form 3800 Overview. How do I calculate and claim these credits correctly?",
      author: { displayName: "mchen22", avatarSeed: "widow_tax_help-vzwr7a", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-22T08:00:00.000Z",
      viewCount: 1037,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "General Business Credit Introduction: Form 3800 Overview (Ep. 24)",
      seoDescription: "Expert guidance on General Business Credit Introduction: Form 3800 Overview",
    },
    answers: [{
      id: "a-general-business-credit-introduction-form-3800-ove",
      questionId: "",
      videoId: "vzwr7aVLRP0",
      articleContent: {
        sections: [
          { heading: "What Is the General Business Credit?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Credits Under the GBC Umbrella", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 3800 is an umbrella form combining multiple individual business tax credits",
          "It is NOT a single credit — it coordinates a family of credits",
          "Common credits: R&D, Work Opportunity, Health Insurance, Disabled Access, Energy credits"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-22T11:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-form-3800-general-business-credit-how-it-works-ep-",
      title: "Form 3800 General Business Credit: How It Works (Ep. 25)",
      body: "I'm trying to maximize my tax credits: Form 3800 General Business Credit: How It Works. How do I calculate and claim these credits correctly?",
      author: { displayName: "jparker", avatarSeed: "mfs_question-C5XtO8", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-22T11:00:00.000Z",
      viewCount: 1400,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 3800 General Business Credit: How It Works (Ep. 25)",
      seoDescription: "Expert guidance on Form 3800 General Business Credit: How It Works",
    },
    answers: [{
      id: "a-form-3800-general-business-credit-how-it-works-ep-",
      questionId: "",
      videoId: "C5XtO8bfOP4",
      articleContent: {
        sections: [
          { heading: "Form 3800: The General Business Credit Form", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How the Limitation Works", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 3800 combines all individual business credits under one umbrella",
          "Individual credits are calculated on separate forms, then brought to Form 3800",
          "The GBC has an overall limitation based on net tax liability minus other credits and TMT"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-22T14:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-form-3800-mechanics-how-the-general-business-credi",
      title: "Form 3800 Mechanics: How the General Business Credit Works (Ep. 26)",
      body: "I'm trying to maximize my tax credits: Form 3800 Mechanics: How the General Business Credit Works. How do I calculate and claim these credits correctly?",
      author: { displayName: "s.kumar", avatarSeed: "mfj_nra_q-CPY-CG", badge: "subscriber" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-22T14:00:00.000Z",
      viewCount: 2555,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 3800 Mechanics: How the General Business Credit Works (Ep. 26)",
      seoDescription: "Expert guidance on Form 3800 Mechanics: How the General Business Credit Works",
    },
    answers: [{
      id: "a-form-3800-mechanics-how-the-general-business-credi",
      questionId: "",
      videoId: "CPY-CGrrh5o",
      articleContent: {
        sections: [
          { heading: "GBC Calculation Process", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Carryback and Carryforward", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Calculate each credit separately, then combine on Form 3800",
          "GBC limitation = net tax minus greater of TMT or 25% of net tax above $25,000",
          "Allowable credit is the lesser of total credits or the limitation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-22T17:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-form-3800-calculation-example-general-business-cre",
      title: "Form 3800 Calculation Example: General Business Credit Step by Step (Ep. 27)",
      body: "I'm trying to maximize my tax credits: Form 3800 Calculation Example: General Business Credit Step by Step. How do I calculate and claim these credits correctly?",
      author: { displayName: "emilyR", avatarSeed: "foreign_partner_q-3RbtuJ", badge: "subscriber" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-22T23:00:00.000Z",
      viewCount: 1928,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 3800 Calculation Example: General Business Credit Step by Step (Ep. 27)",
      seoDescription: "Expert guidance on Form 3800 Calculation Example: General Business Credit Step by Step",
    },
    answers: [{
      id: "a-form-3800-calculation-example-general-business-cre",
      questionId: "",
      videoId: "3RbtuJQyq8Q",
      articleContent: {
        sections: [
          { heading: "Simplified GBC Calculation Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Real-World Complexity", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Simple example: $25K R&D credit against $40K tax liability = full $25K used",
          "If credits exceed the limitation, excess carries forward up to 20 years",
          "No AMT and no other credits simplifies the calculation significantly"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-23T02:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-foreign-tax-credit-introduction-to-avoiding-double",
      title: "Foreign Tax Credit: Introduction to Avoiding Double Taxation",
      body: "I'm trying to maximize my tax credits: Foreign Tax Credit: Introduction to Avoiding Double Taxation. How do I calculate and claim these credits correctly?",
      author: { displayName: "luisG", avatarSeed: "form_8865_q-JJaNK4", badge: "subscriber" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-23T02:00:00.000Z",
      viewCount: 1572,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign Tax Credit: Introduction to Avoiding Double Taxation",
      seoDescription: "Expert guidance on Foreign Tax Credit: Introduction to Avoiding Double Taxation",
    },
    answers: [{
      id: "a-foreign-tax-credit-introduction-to-avoiding-double",
      questionId: "",
      videoId: "JJaNK4jbE_A",
      articleContent: {
        sections: [
          { heading: "What Is the Foreign Tax Credit?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How the FTC Works", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "FTC prevents double taxation by crediting foreign income taxes against your U.S. tax liability",
          "Credit is dollar-for-dollar — more valuable than a deduction for foreign taxes",
          "Reported on Form 1116 with separate calculations for each income category"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-23T05:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-which-foreign-taxes-qualify-for-the-tax-credit",
      title: "Which Foreign Taxes Qualify for the Tax Credit?",
      body: "I'm trying to maximize my tax credits: Which Foreign Taxes Qualify for the Tax Credit?. How do I calculate and claim these credits correctly?",
      author: { displayName: "tanyaB", avatarSeed: "credit_calc_q-4BzUOc", },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-23T05:00:00.000Z",
      viewCount: 2578,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Which Foreign Taxes Qualify for the Tax Credit?",
      seoDescription: "Expert guidance on Which Foreign Taxes Qualify for the Tax Credit?",
    },
    answers: [{
      id: "a-which-foreign-taxes-qualify-for-the-tax-credit",
      questionId: "",
      videoId: "4BzUOcGqBM4",
      articleContent: {
        sections: [
          { heading: "Which Foreign Taxes Qualify for the Credit?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Taxes That Qualify vs. Don't Qualify", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Only income taxes (or taxes in lieu of income tax) qualify for the FTC",
          "The tax must be a legal, actual liability that was paid or accrued",
          "The tax must be imposed on you — you cannot claim someone else's tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-23T08:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-ftc-allowed-formula-how-to-calculate-your-foreign-",
      title: "FTC Allowed Formula: How to Calculate Your Foreign Tax Credit",
      body: "I'm trying to maximize my tax credits: FTC Allowed Formula: How to Calculate Your Foreign Tax Credit. How do I calculate and claim these credits correctly?",
      author: { displayName: "benF", avatarSeed: "business_credit_q-U-DH9J", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-23T08:00:00.000Z",
      viewCount: 1978,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "FTC Allowed Formula: How to Calculate Your Foreign Tax Credit",
      seoDescription: "Expert guidance on FTC Allowed Formula: How to Calculate Your Foreign Tax Credit",
    },
    answers: [{
      id: "a-ftc-allowed-formula-how-to-calculate-your-foreign-",
      questionId: "",
      videoId: "U-DH9JqaBtQ",
      articleContent: {
        sections: [
          { heading: "The FTC Limitation Formula", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Practical Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "FTC formula: U.S. Tax × (Foreign Income ÷ Worldwide Income) = maximum credit allowed",
          "The credit cannot exceed the U.S. tax attributable to foreign-source income",
          "Excess credits carry forward 10 years and back 1 year"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-23T11:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-general-business-credit-introduction-and-overview",
      title: "General Business Credit Introduction and Overview",
      body: "I'm trying to maximize my tax credits: General Business Credit Introduction and Overview. How do I calculate and claim these credits correctly?",
      author: { displayName: "noraS", avatarSeed: "reporting_change_q-JbvxzR", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-23T11:00:00.000Z",
      viewCount: 2950,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "General Business Credit Introduction and Overview",
      seoDescription: "Expert guidance on General Business Credit Introduction and Overview",
    },
    answers: [{
      id: "a-general-business-credit-introduction-and-overview",
      questionId: "",
      videoId: "JbvxzRfvMls",
      articleContent: {
        sections: [
          { heading: "What Is the General Business Credit?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Credits Under the GBC Umbrella", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 3800 is an umbrella form combining multiple individual business tax credits",
          "It is NOT a single credit — it coordinates a family of credits",
          "Common credits: R&D, Work Opportunity, Health Insurance, Disabled Access, Energy credits"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-23T14:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-form-3800-filing-the-general-business-credit",
      title: "Form 3800: Filing the General Business Credit",
      body: "I'm trying to maximize my tax credits: Form 3800: Filing the General Business Credit. How do I calculate and claim these credits correctly?",
      author: { displayName: "ivanK", avatarSeed: "life_change_tax-rrcNF3", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-23T14:00:00.000Z",
      viewCount: 3076,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 3800: Filing the General Business Credit",
      seoDescription: "Expert guidance on Form 3800: Filing the General Business Credit",
    },
    answers: [{
      id: "a-form-3800-filing-the-general-business-credit",
      questionId: "",
      videoId: "rrcNF3nMJh8",
      articleContent: {
        sections: [
          { heading: "Form 3800: The General Business Credit Form", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How the Limitation Works", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 3800 combines all individual business credits under one umbrella",
          "Individual credits are calculated on separate forms, then brought to Form 3800",
          "The GBC has an overall limitation based on net tax liability minus other credits and TMT"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-23T17:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-how-the-general-business-credit-works-form-3800-me",
      title: "How the General Business Credit Works: Form 3800 Mechanics",
      body: "I'm trying to maximize my tax credits: How the General Business Credit Works: Form 3800 Mechanics. How do I calculate and claim these credits correctly?",
      author: { displayName: "amyZ", avatarSeed: "carryover_q--r4koi", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-23T23:00:00.000Z",
      viewCount: 2182,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How the General Business Credit Works: Form 3800 Mechanics",
      seoDescription: "Expert guidance on How the General Business Credit Works: Form 3800 Mechanics",
    },
    answers: [{
      id: "a-how-the-general-business-credit-works-form-3800-me",
      questionId: "",
      videoId: "-r4koiDDk04",
      articleContent: {
        sections: [
          { heading: "GBC Calculation Process", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Carryback and Carryforward", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Calculate each credit separately, then combine on Form 3800",
          "GBC limitation = net tax minus greater of TMT or 25% of net tax above $25,000",
          "Allowable credit is the lesser of total credits or the limitation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-24T02:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-general-business-credit-calculation-example-on-for",
      title: "General Business Credit Calculation Example on Form 3800",
      body: "I'm trying to maximize my tax credits: General Business Credit Calculation Example on Form 3800. How do I calculate and claim these credits correctly?",
      author: { displayName: "robertL", avatarSeed: "nol_question-EtnfbT", badge: "new-member" as const },
      category: "tax-credits",
      tags: ["tax-credits"],
      postedAt: "2026-03-24T02:00:00.000Z",
      viewCount: 1675,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "General Business Credit Calculation Example on Form 3800",
      seoDescription: "Expert guidance on General Business Credit Calculation Example on Form 3800",
    },
    answers: [{
      id: "a-general-business-credit-calculation-example-on-for",
      questionId: "",
      videoId: "EtnfbTZtqm4",
      articleContent: {
        sections: [
          { heading: "Simplified GBC Calculation Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Real-World Complexity", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Simple example: $25K R&D credit against $40K tax liability = full $25K used",
          "If credits exceed the limitation, excess carries forward up to 20 years",
          "No AMT and no other credits simplifies the calculation significantly"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-24T05:00:00.000Z",
      sources: [{ label: "Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" }],
    }],
  },

  {
    question: {
      id: "q-what-is-the-alternative-minimum-tax-amt-complete-e",
      title: "What Is the Alternative Minimum Tax (AMT)? Complete Explanation (Ep. 15)",
      body: "I'm worried about the Alternative Minimum Tax: What Is the Alternative Minimum Tax ? Complete Explanation. How do I know if this affects me and what can I do about it?",
      author: { displayName: "claireW", avatarSeed: "depreciation_q-_uqhoI", badge: "new-member" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-24T05:00:00.000Z",
      viewCount: 1071,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Is the Alternative Minimum Tax (AMT)? Complete Explanation (Ep. 15)",
      seoDescription: "Expert guidance on What Is the Alternative Minimum Tax ? Complete Explanation",
    },
    answers: [{
      id: "a-what-is-the-alternative-minimum-tax-amt-complete-e",
      questionId: "",
      videoId: "_uqhoIAHUZI",
      articleContent: {
        sections: [
          { heading: "The Alternative Minimum Tax Explained", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How AMT Is Calculated", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "AMT is a parallel tax system ensuring high-income taxpayers pay a minimum level of tax",
          "You calculate tax under both regular and AMT systems — you pay whichever is higher",
          "Common AMT triggers: incentive stock options (ISOs), accelerated depreciation, private activity bonds"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-24T08:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-why-does-the-alternative-minimum-tax-exist-history",
      title: "Why Does the Alternative Minimum Tax Exist? History and Purpose (Ep. 16)",
      body: "I'm worried about the Alternative Minimum Tax: Why Does the Alternative Minimum Tax Exist? History and Purpose. How do I know if this affects me and what can I do about it?",
      author: { displayName: "steveN", avatarSeed: "section_179_q-BNlSp7", badge: "subscriber" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-24T08:00:00.000Z",
      viewCount: 649,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Why Does the Alternative Minimum Tax Exist? History and Purpose (Ep. 16)",
      seoDescription: "Expert guidance on Why Does the Alternative Minimum Tax Exist? History and Purpose",
    },
    answers: [{
      id: "a-why-does-the-alternative-minimum-tax-exist-history",
      questionId: "",
      videoId: "BNlSp7jLNzs",
      articleContent: {
        sections: [
          { heading: "The History Behind AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Congress's Solution", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "AMT was created in 1969 after Congress found wealthy taxpayers paying zero federal tax",
          "It serves as a check-and-balance on the regular tax system",
          "Adds back certain deductions and applies a separate exemption and rates"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-24T11:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-common-amt-triggers-incentive-stock-options-iso-ex",
      title: "Common AMT Triggers: Incentive Stock Options (ISO) Explained (Ep. 17)",
      body: "I'm worried about the Alternative Minimum Tax: Common AMT Triggers: Incentive Stock Options  Explained. How do I know if this affects me and what can I do about it?",
      author: { displayName: "juliaD", avatarSeed: "reit_ptp_q-vExMka", badge: "subscriber" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-24T11:00:00.000Z",
      viewCount: 1884,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Common AMT Triggers: Incentive Stock Options (ISO) Explained (Ep. 17)",
      seoDescription: "Expert guidance on Common AMT Triggers: Incentive Stock Options  Explained",
    },
    answers: [{
      id: "a-common-amt-triggers-incentive-stock-options-iso-ex",
      questionId: "",
      videoId: "vExMkaLN-8Q",
      articleContent: {
        sections: [
          { heading: "How Incentive Stock Options Trigger AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Practical Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The ISO 'spread' (FMV minus strike price at exercise) triggers AMT adjustments",
          "Regular tax system does not tax ISOs at exercise; AMT system does",
          "Can create substantial AMT liability without any cash received"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-24T14:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-common-amt-triggers-accelerated-depreciation-expla",
      title: "Common AMT Triggers: Accelerated Depreciation Explained (Ep. 18)",
      body: "I'm worried about the Alternative Minimum Tax: Common AMT Triggers: Accelerated Depreciation Explained. How do I know if this affects me and what can I do about it?",
      author: { displayName: "paulM", avatarSeed: "form_6252_q-r20WDt", badge: "subscriber" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-24T14:00:00.000Z",
      viewCount: 2935,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Common AMT Triggers: Accelerated Depreciation Explained (Ep. 18)",
      seoDescription: "Expert guidance on Common AMT Triggers: Accelerated Depreciation Explained",
    },
    answers: [{
      id: "a-common-amt-triggers-accelerated-depreciation-expla",
      questionId: "",
      videoId: "r20WDt6BOkQ",
      articleContent: {
        sections: [
          { heading: "Accelerated Depreciation and AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why This Matters for Business Owners", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Regular tax uses faster MACRS depreciation; AMT uses slower methods",
          "The difference creates a timing adjustment that can trigger AMT",
          "Most impactful for businesses with large depreciable asset purchases"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-24T17:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-common-amt-triggers-private-activity-bonds-pabs-ex",
      title: "Common AMT Triggers: Private Activity Bonds (PABs) Explained (Ep. 19)",
      body: "I'm worried about the Alternative Minimum Tax: Common AMT Triggers: Private Activity Bonds  Explained. How do I know if this affects me and what can I do about it?",
      author: { displayName: "rachelT", avatarSeed: "tax_basics_help-oCEl2B", },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-24T23:00:00.000Z",
      viewCount: 1647,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Common AMT Triggers: Private Activity Bonds (PABs) Explained (Ep. 19)",
      seoDescription: "Expert guidance on Common AMT Triggers: Private Activity Bonds  Explained",
    },
    answers: [{
      id: "a-common-amt-triggers-private-activity-bonds-pabs-ex",
      questionId: "",
      videoId: "oCEl2BKGD3M",
      articleContent: {
        sections: [
          { heading: "Private Activity Bonds and AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How PABs Trigger AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "PAB interest is tax-exempt under regular tax but taxable under AMT",
          "Large PAB holdings can trigger significant AMT liability",
          "General obligation municipal bonds do not trigger AMT — PABs are the exception"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-25T02:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-amt-credit-how-to-recover-your-alternative-minimum",
      title: "AMT Credit: How to Recover Your Alternative Minimum Tax (Ep. 20)",
      body: "I'm worried about the Alternative Minimum Tax: AMT Credit: How to Recover Your Alternative Minimum Tax. How do I know if this affects me and what can I do about it?",
      author: { displayName: "andrewH", avatarSeed: "w2_1099_q-MFcKKn", badge: "new-member" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-25T02:00:00.000Z",
      viewCount: 1898,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "AMT Credit: How to Recover Your Alternative Minimum Tax (Ep. 20)",
      seoDescription: "Expert guidance on AMT Credit: How to Recover Your Alternative Minimum Tax",
    },
    answers: [{
      id: "a-amt-credit-how-to-recover-your-alternative-minimum",
      questionId: "",
      videoId: "MFcKKnbYP7U",
      articleContent: {
        sections: [
          { heading: "AMT Credit Carryforward", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How to Recover AMT Paid", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "AMT paid due to timing items generates a Minimum Tax Credit (Form 8801)",
          "The credit carries forward indefinitely — it does not expire",
          "Usable when regular tax exceeds tentative minimum tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-25T05:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-alternative-minimum-tax-amt-explained-simply",
      title: "Alternative Minimum Tax (AMT) Explained Simply",
      body: "I'm worried about the Alternative Minimum Tax: Alternative Minimum Tax  Explained Simply. How do I know if this affects me and what can I do about it?",
      author: { displayName: "monaL", avatarSeed: "personal_info_q-lssIRp", badge: "new-member" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-25T05:00:00.000Z",
      viewCount: 1584,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Alternative Minimum Tax (AMT) Explained Simply",
      seoDescription: "Expert guidance on Alternative Minimum Tax  Explained Simply",
    },
    answers: [{
      id: "a-alternative-minimum-tax-amt-explained-simply",
      questionId: "",
      videoId: "lssIRpBIB0A",
      articleContent: {
        sections: [
          { heading: "The Alternative Minimum Tax Explained", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How AMT Is Calculated", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "AMT is a parallel tax system ensuring high-income taxpayers pay a minimum level of tax",
          "You calculate tax under both regular and AMT systems — you pay whichever is higher",
          "Common AMT triggers: incentive stock options (ISOs), accelerated depreciation, private activity bonds"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-25T08:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-why-the-alternative-minimum-tax-exists-a-brief-his",
      title: "Why the Alternative Minimum Tax Exists: A Brief History",
      body: "I'm worried about the Alternative Minimum Tax: Why the Alternative Minimum Tax Exists: A Brief History. How do I know if this affects me and what can I do about it?",
      author: { displayName: "peterC", avatarSeed: "std_deduction_q-U0CToP", badge: "new-member" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-25T08:00:00.000Z",
      viewCount: 2452,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Why the Alternative Minimum Tax Exists: A Brief History",
      seoDescription: "Expert guidance on Why the Alternative Minimum Tax Exists: A Brief History",
    },
    answers: [{
      id: "a-why-the-alternative-minimum-tax-exists-a-brief-his",
      questionId: "",
      videoId: "U0CToPnqVHw",
      articleContent: {
        sections: [
          { heading: "The History Behind AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Congress's Solution", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "AMT was created in 1969 after Congress found wealthy taxpayers paying zero federal tax",
          "It serves as a check-and-balance on the regular tax system",
          "Adds back certain deductions and applies a separate exemption and rates"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-25T11:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-iso-and-amt-how-incentive-stock-options-trigger-am",
      title: "ISO and AMT: How Incentive Stock Options Trigger AMT",
      body: "I'm worried about the Alternative Minimum Tax: ISO and AMT: How Incentive Stock Options Trigger AMT. How do I know if this affects me and what can I do about it?",
      author: { displayName: "dianaR", avatarSeed: "expat_llc_owner-9Crzq5", badge: "new-member" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-25T11:00:00.000Z",
      viewCount: 1129,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "ISO and AMT: How Incentive Stock Options Trigger AMT",
      seoDescription: "Expert guidance on ISO and AMT: How Incentive Stock Options Trigger AMT",
    },
    answers: [{
      id: "a-iso-and-amt-how-incentive-stock-options-trigger-am",
      questionId: "",
      videoId: "9Crzq5QcHhw",
      articleContent: {
        sections: [
          { heading: "How Incentive Stock Options Trigger AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Practical Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The ISO 'spread' (FMV minus strike price at exercise) triggers AMT adjustments",
          "Regular tax system does not tax ISOs at exercise; AMT system does",
          "Can create substantial AMT liability without any cash received"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-25T14:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-accelerated-depreciation-and-amt-common-amt-trigge",
      title: "Accelerated Depreciation and AMT: Common AMT Trigger",
      body: "I'm worried about the Alternative Minimum Tax: Accelerated Depreciation and AMT: Common AMT Trigger. How do I know if this affects me and what can I do about it?",
      author: { displayName: "newllcguy", avatarSeed: "foreign_founder-BIjHa_", badge: "new-member" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-25T14:00:00.000Z",
      viewCount: 1442,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Accelerated Depreciation and AMT: Common AMT Trigger",
      seoDescription: "Expert guidance on Accelerated Depreciation and AMT: Common AMT Trigger",
    },
    answers: [{
      id: "a-accelerated-depreciation-and-amt-common-amt-trigge",
      questionId: "",
      videoId: "BIjHa_AfEPc",
      articleContent: {
        sections: [
          { heading: "Accelerated Depreciation and AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why This Matters for Business Owners", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Regular tax uses faster MACRS depreciation; AMT uses slower methods",
          "The difference creates a timing adjustment that can trigger AMT",
          "Most impactful for businesses with large depreciable asset purchases"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-25T17:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-private-activity-bonds-and-amt-what-investors-need",
      title: "Private Activity Bonds and AMT: What Investors Need to Know",
      body: "I'm worried about the Alternative Minimum Tax: Private Activity Bonds and AMT: What Investors Need to Know. How do I know if this affects me and what can I do about it?",
      author: { displayName: "taxconfused2026", avatarSeed: "llc_newbie_abroad-LkEbHj", badge: "new-member" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-25T23:00:00.000Z",
      viewCount: 1906,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Private Activity Bonds and AMT: What Investors Need to Know",
      seoDescription: "Expert guidance on Private Activity Bonds and AMT: What Investors Need to Know",
    },
    answers: [{
      id: "a-private-activity-bonds-and-amt-what-investors-need",
      questionId: "",
      videoId: "LkEbHjjyDw4",
      articleContent: {
        sections: [
          { heading: "Private Activity Bonds and AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How PABs Trigger AMT", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "PAB interest is tax-exempt under regular tax but taxable under AMT",
          "Large PAB holdings can trigger significant AMT liability",
          "General obligation municipal bonds do not trigger AMT — PABs are the exception"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-26T02:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-amt-credit-carryforward-recovering-alternative-min",
      title: "AMT Credit Carryforward: Recovering Alternative Minimum Tax Paid",
      body: "I'm worried about the Alternative Minimum Tax: AMT Credit Carryforward: Recovering Alternative Minimum Tax Paid. How do I know if this affects me and what can I do about it?",
      author: { displayName: "firsttimefiler", avatarSeed: "digital_nomad_tax-bTLwxs", badge: "subscriber" as const },
      category: "amt",
      tags: ["amt"],
      postedAt: "2026-03-26T02:00:00.000Z",
      viewCount: 923,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "AMT Credit Carryforward: Recovering Alternative Minimum Tax Paid",
      seoDescription: "Expert guidance on AMT Credit Carryforward: Recovering Alternative Minimum Tax Paid",
    },
    answers: [{
      id: "a-amt-credit-carryforward-recovering-alternative-min",
      questionId: "",
      videoId: "bTLwxszU-rA",
      articleContent: {
        sections: [
          { heading: "AMT Credit Carryforward", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How to Recover AMT Paid", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "AMT paid due to timing items generates a Minimum Tax Credit (Form 8801)",
          "The credit carries forward indefinitely — it does not expire",
          "Usable when regular tax exceeds tentative minimum tax"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-26T05:00:00.000Z",
      sources: [{ label: "About Form 6251 (AMT)", url: "https://www.irs.gov/forms-pubs/about-form-6251" }],
    }],
  },

  {
    question: {
      id: "q-section-179-deduction-what-is-it-and-how-does-it-w",
      title: "Section 179 Deduction: What Is It and How Does It Work? (Ep. 28)",
      body: "I have questions about tax deductions: Section 179 Deduction: What Is It and How Does It Work?. What are the limits and rules I need to follow?",
      author: { displayName: "helpwithmytax", avatarSeed: "non_us_filer-Vr7kQ3", badge: "subscriber" as const },
      category: "deductions",
      tags: ["deductions"],
      postedAt: "2026-03-26T05:00:00.000Z",
      viewCount: 898,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Section 179 Deduction: What Is It and How Does It Work? (Ep. 28)",
      seoDescription: "Expert guidance on Section 179 Deduction: What Is It and How Does It Work?",
    },
    answers: [{
      id: "a-section-179-deduction-what-is-it-and-how-does-it-w",
      questionId: "",
      videoId: "Vr7kQ3w2AoI",
      articleContent: {
        sections: [
          { heading: "Section 179: Immediate Expensing for Business Assets", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Property Qualifies?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Section 179 lets businesses immediately expense qualifying property costs instead of depreciating over years",
          "Qualifying property: computers, servers, office equipment, certain software, office furniture",
          "Reported on Form 4562 (Depreciation and Amortization)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-26T08:00:00.000Z",
      sources: [{ label: "Business Deductions", url: "https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses" }],
    }],
  },

  {
    question: {
      id: "q-section-179-deduction-limits-maximum-deduction-and",
      title: "Section 179 Deduction Limits: Maximum Deduction and Phase-Out Rules (Ep. 29)",
      body: "I have questions about tax deductions: Section 179 Deduction Limits: Maximum Deduction and Phase-Out Rules. What are the limits and rules I need to follow?",
      author: { displayName: "justformedllc", avatarSeed: "intl_llc_q-pKdqrm", badge: "subscriber" as const },
      category: "deductions",
      tags: ["deductions"],
      postedAt: "2026-03-26T08:00:00.000Z",
      viewCount: 2011,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Section 179 Deduction Limits: Maximum Deduction and Phase-Out Rules (Ep. 29)",
      seoDescription: "Expert guidance on Section 179 Deduction Limits: Maximum Deduction and Phase-Out Rules",
    },
    answers: [{
      id: "a-section-179-deduction-limits-maximum-deduction-and",
      questionId: "",
      videoId: "pKdqrmu4L1c",
      articleContent: {
        sections: [
          { heading: "Three Limits on Section 179", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Dollar Limit: Maximum Annual Deduction", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Dollar limit: approximately $1.2 million maximum annual deduction (adjusted for inflation)",
          "Investment limit: deduction phases out dollar-for-dollar above ~$3 million in purchases",
          "Taxable income limit: deduction cannot create a net operating loss"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-26T11:00:00.000Z",
      sources: [{ label: "Business Deductions", url: "https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses" }],
    }],
  },

  {
    question: {
      id: "q-section-179-carryover-rule-what-happens-to-unused-",
      title: "Section 179 Carryover Rule: What Happens to Unused Deductions (Ep. 30)",
      body: "I have questions about tax deductions: Section 179 Carryover Rule: What Happens to Unused Deductions. What are the limits and rules I need to follow?",
      author: { displayName: "expatintax", avatarSeed: "global_startup-_RIsqQ", },
      category: "deductions",
      tags: ["deductions"],
      postedAt: "2026-03-26T11:00:00.000Z",
      viewCount: 2758,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Section 179 Carryover Rule: What Happens to Unused Deductions (Ep. 30)",
      seoDescription: "Expert guidance on Section 179 Carryover Rule: What Happens to Unused Deductions",
    },
    answers: [{
      id: "a-section-179-carryover-rule-what-happens-to-unused-",
      questionId: "",
      videoId: "_RIsqQ2ONm0",
      articleContent: {
        sections: [
          { heading: "The Business Income Limitation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How the Carryover Works", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Section 179 deduction is limited to your taxable business income for the year",
          "Unused Section 179 deduction carries forward indefinitely — it is never lost",
          "Particularly valuable for startups that invest heavily before generating significant revenue"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-26T14:00:00.000Z",
      sources: [{ label: "Business Deductions", url: "https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses" }],
    }],
  },

  {
    question: {
      id: "q-what-is-section-179-business-equipment-deduction-e",
      title: "What Is Section 179? Business Equipment Deduction Explained",
      body: "I have questions about tax deductions: What Is Section 179? Business Equipment Deduction Explained. What are the limits and rules I need to follow?",
      author: { displayName: "smallbizowner", avatarSeed: "overseas_biz-_vYzsc", badge: "new-member" as const },
      category: "deductions",
      tags: ["deductions"],
      postedAt: "2026-03-26T14:00:00.000Z",
      viewCount: 2936,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Is Section 179? Business Equipment Deduction Explained",
      seoDescription: "Expert guidance on What Is Section 179? Business Equipment Deduction Explained",
    },
    answers: [{
      id: "a-what-is-section-179-business-equipment-deduction-e",
      questionId: "",
      videoId: "_vYzscn9lQQ",
      articleContent: {
        sections: [
          { heading: "Section 179: Immediate Expensing for Business Assets", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Property Qualifies?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Section 179 lets businesses immediately expense qualifying property costs instead of depreciating over years",
          "Qualifying property: computers, servers, office equipment, certain software, office furniture",
          "Reported on Form 4562 (Depreciation and Amortization)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-26T17:00:00.000Z",
      sources: [{ label: "Business Deductions", url: "https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses" }],
    }],
  },

  {
    question: {
      id: "q-section-179-limits-annual-deduction-caps-and-phase",
      title: "Section 179 Limits: Annual Deduction Caps and Phase-Out Thresholds",
      body: "I have questions about tax deductions: Section 179 Limits: Annual Deduction Caps and Phase-Out Thresholds. What are the limits and rules I need to follow?",
      author: { displayName: "confused_about_5472", avatarSeed: "remote_ceo-98uV4Q", badge: "new-member" as const },
      category: "deductions",
      tags: ["deductions"],
      postedAt: "2026-03-26T23:00:00.000Z",
      viewCount: 3199,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Section 179 Limits: Annual Deduction Caps and Phase-Out Thresholds",
      seoDescription: "Expert guidance on Section 179 Limits: Annual Deduction Caps and Phase-Out Thresholds",
    },
    answers: [{
      id: "a-section-179-limits-annual-deduction-caps-and-phase",
      questionId: "",
      videoId: "98uV4QYlzx8",
      articleContent: {
        sections: [
          { heading: "Three Limits on Section 179", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Dollar Limit: Maximum Annual Deduction", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Dollar limit: approximately $1.2 million maximum annual deduction (adjusted for inflation)",
          "Investment limit: deduction phases out dollar-for-dollar above ~$3 million in purchases",
          "Taxable income limit: deduction cannot create a net operating loss"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-27T02:00:00.000Z",
      sources: [{ label: "Business Deductions", url: "https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses" }],
    }],
  },

  {
    question: {
      id: "q-section-179-carryover-rules-for-unused-deduction-a",
      title: "Section 179 Carryover: Rules for Unused Deduction Amounts",
      body: "I have questions about tax deductions: Section 179 Carryover: Rules for Unused Deduction Amounts. What are the limits and rules I need to follow?",
      author: { displayName: "needtaxhelp", avatarSeed: "solo_llc_intl-RL9heF", badge: "new-member" as const },
      category: "deductions",
      tags: ["deductions"],
      postedAt: "2026-03-27T02:00:00.000Z",
      viewCount: 2342,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Section 179 Carryover: Rules for Unused Deduction Amounts",
      seoDescription: "Expert guidance on Section 179 Carryover: Rules for Unused Deduction Amounts",
    },
    answers: [{
      id: "a-section-179-carryover-rules-for-unused-deduction-a",
      questionId: "",
      videoId: "RL9heF5LcdQ",
      articleContent: {
        sections: [
          { heading: "The Business Income Limitation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How the Carryover Works", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Section 179 deduction is limited to your taxable business income for the year",
          "Unused Section 179 deduction carries forward indefinitely — it is never lost",
          "Particularly valuable for startups that invest heavily before generating significant revenue"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-27T05:00:00.000Z",
      sources: [{ label: "Business Deductions", url: "https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses" }],
    }],
  },

  {
    question: {
      id: "q-what-is-a-pass-through-entity-qbi-deduction-basics",
      title: "What Is a Pass-Through Entity? QBI Deduction Basics (Ep. 31)",
      body: "I need help with the Qualified Business Income deduction: What Is a Pass-Through Entity? QBI Deduction Basics. How does it work and what are the carryover rules?",
      author: { displayName: "llcquestion", avatarSeed: "ecom_expat-PjVLaI", badge: "new-member" as const },
      category: "qbi",
      tags: ["qbi"],
      postedAt: "2026-03-27T05:00:00.000Z",
      viewCount: 3000,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Is a Pass-Through Entity? QBI Deduction Basics (Ep. 31)",
      seoDescription: "Expert guidance on What Is a Pass-Through Entity? QBI Deduction Basics",
    },
    answers: [{
      id: "a-what-is-a-pass-through-entity-qbi-deduction-basics",
      questionId: "",
      videoId: "PjVLaIf0xng",
      articleContent: {
        sections: [
          { heading: "Understanding Pass-Through Entities", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "The QBI Deduction: 20% Deduction on Business Income", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Pass-through entities (sole proprietorships, partnerships, S-Corps) don't pay entity-level income tax",
          "Income passes through to owners' personal returns via Schedule C or K-1 forms",
          "QBI deduction allows up to 20% deduction on qualified business income from pass-throughs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-27T08:00:00.000Z",
      sources: [{ label: "QBI Deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" }],
    }],
  },

  {
    question: {
      id: "q-negative-qbi-carryover-tax-implications-explained-",
      title: "Negative QBI Carryover: Tax Implications Explained (Ep. 32)",
      body: "I need help with the Qualified Business Income deduction: Negative QBI Carryover: Tax Implications Explained. How does it work and what are the carryover rules?",
      author: { displayName: "formhelp2026", avatarSeed: "freelancer_abroad-MlX8bU", badge: "new-member" as const },
      category: "qbi",
      tags: ["qbi"],
      postedAt: "2026-03-27T08:00:00.000Z",
      viewCount: 603,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Negative QBI Carryover: Tax Implications Explained (Ep. 32)",
      seoDescription: "Expert guidance on Negative QBI Carryover: Tax Implications Explained",
    },
    answers: [{
      id: "a-negative-qbi-carryover-tax-implications-explained-",
      questionId: "",
      videoId: "MlX8bUh3Gr0",
      articleContent: {
        sections: [
          { heading: "Negative QBI Carryover Implications", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Silver Lining", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Negative QBI means no 20% QBI deduction in the current year",
          "The negative amount carries forward to offset future positive QBI",
          "Future QBI deductions will be reduced by the carried-forward negative amount"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-27T11:00:00.000Z",
      sources: [{ label: "QBI Deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" }],
    }],
  },

  {
    question: {
      id: "q-qbi-deduction-for-reit-and-ptp-income-negative-car",
      title: "QBI Deduction for REIT and PTP Income: Negative Carryover Rules (Ep. 33)",
      body: "I need help with the Qualified Business Income deduction: QBI Deduction for REIT and PTP Income: Negative Carryover Rules. How does it work and what are the carryover rules?",
      author: { displayName: "taxseason_stress", avatarSeed: "cross_border_biz-j1QdMm", badge: "new-member" as const },
      category: "qbi",
      tags: ["qbi"],
      postedAt: "2026-03-27T11:00:00.000Z",
      viewCount: 2164,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "QBI Deduction for REIT and PTP Income: Negative Carryover Rules (Ep. 33)",
      seoDescription: "Expert guidance on QBI Deduction for REIT and PTP Income: Negative Carryover Rules",
    },
    answers: [{
      id: "a-qbi-deduction-for-reit-and-ptp-income-negative-car",
      questionId: "",
      videoId: "j1QdMmWks_U",
      articleContent: {
        sections: [
          { heading: "QBI for REITs and PTPs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Separate Buckets for Carryover", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "REIT and PTP income is tracked separately from regular pass-through QBI",
          "Three separate carryover buckets: regular QBI, REIT, and PTP",
          "Negative carryovers in one bucket do NOT offset income in another"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-27T14:00:00.000Z",
      sources: [{ label: "QBI Deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" }],
    }],
  },

  {
    question: {
      id: "q-pass-through-entity-basics-understanding-qbi-deduc",
      title: "Pass-Through Entity Basics: Understanding QBI Deduction",
      body: "I need help with the Qualified Business Income deduction: Pass-Through Entity Basics: Understanding QBI Deduction. How does it work and what are the carryover rules?",
      author: { displayName: "filingfirsttime", avatarSeed: "eu_llc_owner-B02_nw", badge: "subscriber" as const },
      category: "qbi",
      tags: ["qbi"],
      postedAt: "2026-03-27T14:00:00.000Z",
      viewCount: 2165,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Pass-Through Entity Basics: Understanding QBI Deduction",
      seoDescription: "Expert guidance on Pass-Through Entity Basics: Understanding QBI Deduction",
    },
    answers: [{
      id: "a-pass-through-entity-basics-understanding-qbi-deduc",
      questionId: "",
      videoId: "B02_nwfOdUg",
      articleContent: {
        sections: [
          { heading: "Understanding Pass-Through Entities", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "The QBI Deduction: 20% Deduction on Business Income", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Pass-through entities (sole proprietorships, partnerships, S-Corps) don't pay entity-level income tax",
          "Income passes through to owners' personal returns via Schedule C or K-1 forms",
          "QBI deduction allows up to 20% deduction on qualified business income from pass-throughs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-27T17:00:00.000Z",
      sources: [{ label: "QBI Deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" }],
    }],
  },

  {
    question: {
      id: "q-negative-qbi-carryover-what-it-means-for-your-tax-",
      title: "Negative QBI Carryover: What It Means for Your Tax Return",
      body: "I need help with the Qualified Business Income deduction: Negative QBI Carryover: What It Means for Your Tax Return. How does it work and what are the carryover rules?",
      author: { displayName: "ein_application", avatarSeed: "apac_founder--HuL1m", badge: "subscriber" as const },
      category: "qbi",
      tags: ["qbi"],
      postedAt: "2026-03-27T23:00:00.000Z",
      viewCount: 473,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Negative QBI Carryover: What It Means for Your Tax Return",
      seoDescription: "Expert guidance on Negative QBI Carryover: What It Means for Your Tax Return",
    },
    answers: [{
      id: "a-negative-qbi-carryover-what-it-means-for-your-tax-",
      questionId: "",
      videoId: "-HuL1m2yf-M",
      articleContent: {
        sections: [
          { heading: "Negative QBI Carryover Implications", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Silver Lining", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Negative QBI means no 20% QBI deduction in the current year",
          "The negative amount carries forward to offset future positive QBI",
          "Future QBI deductions will be reduced by the carried-forward negative amount"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-28T02:00:00.000Z",
      sources: [{ label: "QBI Deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" }],
    }],
  },

  {
    question: {
      id: "q-qbi-for-reit-and-ptp-carryover-rules-and-calculati",
      title: "QBI for REIT and PTP: Carryover Rules and Calculation",
      body: "I need help with the Qualified Business Income deduction: QBI for REIT and PTP: Carryover Rules and Calculation. How does it work and what are the carryover rules?",
      author: { displayName: "irsnotice_help", avatarSeed: "latam_startup-MUkY9B", badge: "subscriber" as const },
      category: "qbi",
      tags: ["qbi"],
      postedAt: "2026-03-28T02:00:00.000Z",
      viewCount: 2941,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "QBI for REIT and PTP: Carryover Rules and Calculation",
      seoDescription: "Expert guidance on QBI for REIT and PTP: Carryover Rules and Calculation",
    },
    answers: [{
      id: "a-qbi-for-reit-and-ptp-carryover-rules-and-calculati",
      questionId: "",
      videoId: "MUkY9Bs6vqg",
      articleContent: {
        sections: [
          { heading: "QBI for REITs and PTPs", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Separate Buckets for Carryover", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "REIT and PTP income is tracked separately from regular pass-through QBI",
          "Three separate carryover buckets: regular QBI, REIT, and PTP",
          "Negative carryovers in one bucket do NOT offset income in another"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-28T05:00:00.000Z",
      sources: [{ label: "QBI Deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" }],
    }],
  },

  {
    question: {
      id: "q-form-6252-introduction-installment-sale-reporting-",
      title: "Form 6252 Introduction: Installment Sale Reporting (Ep. 34)",
      body: "I'm considering an installment sale: Form 6252 Introduction: Installment Sale Reporting. How does Form 6252 work and how do I calculate the taxable gain?",
      author: { displayName: "delawarellc", avatarSeed: "mena_biz-qNdaJD", },
      category: "installment-sales",
      tags: ["installment-sales"],
      postedAt: "2026-03-28T05:00:00.000Z",
      viewCount: 3173,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 6252 Introduction: Installment Sale Reporting (Ep. 34)",
      seoDescription: "Expert guidance on Form 6252 Introduction: Installment Sale Reporting",
    },
    answers: [{
      id: "a-form-6252-introduction-installment-sale-reporting-",
      questionId: "",
      videoId: "qNdaJDudoIU",
      articleContent: {
        sections: [
          { heading: "What Are Installment Sales?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why Installment Sales Matter for Cash Flow", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Installment sales spread tax over the period payments are received (Form 6252)",
          "Prevents paying tax on gains before the cash is actually received",
          "Gross profit percentage determines the taxable portion of each payment"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-28T08:00:00.000Z",
      sources: [{ label: "About Form 6252", url: "https://www.irs.gov/forms-pubs/about-form-6252" }],
    }],
  },

  {
    question: {
      id: "q-form-6252-calculation-how-to-report-installment-sa",
      title: "Form 6252 Calculation: How to Report Installment Sales (Ep. 35)",
      body: "I'm considering an installment sale: Form 6252 Calculation: How to Report Installment Sales. How does Form 6252 work and how do I calculate the taxable gain?",
      author: { displayName: "wyomingllc2026", avatarSeed: "uk_llc_help-6Oyysg", badge: "new-member" as const },
      category: "installment-sales",
      tags: ["installment-sales"],
      postedAt: "2026-03-28T08:00:00.000Z",
      viewCount: 2786,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 6252 Calculation: How to Report Installment Sales (Ep. 35)",
      seoDescription: "Expert guidance on Form 6252 Calculation: How to Report Installment Sales",
    },
    answers: [{
      id: "a-form-6252-calculation-how-to-report-installment-sa",
      questionId: "",
      videoId: "6OyysgJm1W8",
      articleContent: {
        sections: [
          { heading: "Understanding the Installment Sale Formula", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Step-by-Step Calculation Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Gross Profit Percentage = Total Gain ÷ Total Contract Price",
          "Each payment is split: (Payment × GP%) = taxable gain, remainder = return of basis",
          "Interest on installment notes is reported separately as ordinary income"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-28T11:00:00.000Z",
      sources: [{ label: "About Form 6252", url: "https://www.irs.gov/forms-pubs/about-form-6252" }],
    }],
  },

  {
    question: {
      id: "q-installment-sales-introduction-form-6252-basics",
      title: "Installment Sales Introduction: Form 6252 Basics",
      body: "I'm considering an installment sale: Installment Sales Introduction: Form 6252 Basics. How does Form 6252 work and how do I calculate the taxable gain?",
      author: { displayName: "stripeatlas_user", avatarSeed: "de_saas_owner-JPivbS", badge: "new-member" as const },
      category: "installment-sales",
      tags: ["installment-sales"],
      postedAt: "2026-03-28T11:00:00.000Z",
      viewCount: 713,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Installment Sales Introduction: Form 6252 Basics",
      seoDescription: "Expert guidance on Installment Sales Introduction: Form 6252 Basics",
    },
    answers: [{
      id: "a-installment-sales-introduction-form-6252-basics",
      questionId: "",
      videoId: "JPivbSZDlJo",
      articleContent: {
        sections: [
          { heading: "What Are Installment Sales?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why Installment Sales Matter for Cash Flow", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Installment sales spread tax over the period payments are received (Form 6252)",
          "Prevents paying tax on gains before the cash is actually received",
          "Gross profit percentage determines the taxable portion of each payment"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-28T14:00:00.000Z",
      sources: [{ label: "About Form 6252", url: "https://www.irs.gov/forms-pubs/about-form-6252" }],
    }],
  },

  {
    question: {
      id: "q-installment-sale-calculation-step-by-step-form-625",
      title: "Installment Sale Calculation: Step-by-Step Form 6252 Guide",
      body: "I'm considering an installment sale: Installment Sale Calculation: Step-by-Step Form 6252 Guide. How does Form 6252 work and how do I calculate the taxable gain?",
      author: { displayName: "doola_customer", avatarSeed: "jp_tech_founder-HWjeOI", badge: "new-member" as const },
      category: "installment-sales",
      tags: ["installment-sales"],
      postedAt: "2026-03-28T14:00:00.000Z",
      viewCount: 1571,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Installment Sale Calculation: Step-by-Step Form 6252 Guide",
      seoDescription: "Expert guidance on Installment Sale Calculation: Step-by-Step Form 6252 Guide",
    },
    answers: [{
      id: "a-installment-sale-calculation-step-by-step-form-625",
      questionId: "",
      videoId: "HWjeOItONiI",
      articleContent: {
        sections: [
          { heading: "Understanding the Installment Sale Formula", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Step-by-Step Calculation Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Gross Profit Percentage = Total Gain ÷ Total Contract Price",
          "Each payment is split: (Payment × GP%) = taxable gain, remainder = return of basis",
          "Interest on installment notes is reported separately as ordinary income"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-28T17:00:00.000Z",
      sources: [{ label: "About Form 6252", url: "https://www.irs.gov/forms-pubs/about-form-6252" }],
    }],
  },

  {
    question: {
      id: "q-what-is-a-cp2000-notice-irs-underreported-income-l",
      title: "What Is a CP2000 Notice? IRS Underreported Income Letter Explained (Ep. 5)",
      body: "I received a CP2000 notice from the IRS: What Is a CP2000 Notice? IRS Underreported Income Letter Explained. What should I do and how do I respond properly?",
      author: { displayName: "startupfounder", avatarSeed: "au_startup_q-JhV7FE", badge: "new-member" as const },
      category: "cp2000",
      tags: ["cp2000"],
      postedAt: "2026-03-28T23:00:00.000Z",
      viewCount: 774,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Is a CP2000 Notice? IRS Underreported Income Letter Explained (Ep. 5)",
      seoDescription: "Expert guidance on What Is a CP2000 Notice? IRS Underreported Income Letter Explained",
    },
    answers: [{
      id: "a-what-is-a-cp2000-notice-irs-underreported-income-l",
      questionId: "",
      videoId: "JhV7FEra3CM",
      articleContent: {
        sections: [
          { heading: "Understanding the CP2000 Notice", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Triggers for CP2000 Notices", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A CP2000 is a proposed adjustment, not an audit — but it requires prompt attention",
          "Most CP2000s result from income reported by third parties (employers, banks, brokers) that does not appear on your return",
          "Common triggers: missing 1099-NEC, forgotten bank interest (1099-INT), unreported stock sales (1099-B)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-29T02:00:00.000Z",
      sources: [{ label: "Understanding CP2000", url: "https://www.irs.gov/individuals/understanding-your-cp2000-notice" }],
    }],
  },

  {
    question: {
      id: "q-received-a-cp2000-notice-here-s-what-to-do-next-ep",
      title: "Received a CP2000 Notice? Here's What to Do Next (Ep. 6)",
      body: "I received a CP2000 notice from the IRS: Received a CP2000 Notice? Here's What to Do Next. What should I do and how do I respond properly?",
      author: { displayName: "Marcus T.", avatarSeed: "ca_llc_owner-o5cOab", badge: "new-member" as const },
      category: "cp2000",
      tags: ["cp2000"],
      postedAt: "2026-03-29T02:00:00.000Z",
      viewCount: 997,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Received a CP2000 Notice? Here's What to Do Next (Ep. 6)",
      seoDescription: "Expert guidance on Received a CP2000 Notice? Here's What to Do Next",
    },
    answers: [{
      id: "a-received-a-cp2000-notice-here-s-what-to-do-next-ep",
      questionId: "",
      videoId: "o5cOab95_Ro",
      articleContent: {
        sections: [
          { heading: "Stay Calm and Respond", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Your Response Options", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Do not panic — a CP2000 is a proposal, not a final bill",
          "You typically have 30 days to respond to a CP2000 notice",
          "You can agree, partially agree, or disagree with the proposed adjustment"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-29T05:00:00.000Z",
      sources: [{ label: "Understanding CP2000", url: "https://www.irs.gov/individuals/understanding-your-cp2000-notice" }],
    }],
  },

  {
    question: {
      id: "q-cp2000-notice-case-study-real-world-response-scena",
      title: "CP2000 Notice Case Study: Real-World Response Scenario (Ep. 7)",
      body: "I received a CP2000 notice from the IRS: CP2000 Notice Case Study: Real-World Response Scenario. What should I do and how do I respond properly?",
      author: { displayName: "Sarah K.", avatarSeed: "new_1120_filer-ybeDft", badge: "new-member" as const },
      category: "cp2000",
      tags: ["cp2000"],
      postedAt: "2026-03-29T05:00:00.000Z",
      viewCount: 645,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "CP2000 Notice Case Study: Real-World Response Scenario (Ep. 7)",
      seoDescription: "Expert guidance on CP2000 Notice Case Study: Real-World Response Scenario",
    },
    answers: [{
      id: "a-cp2000-notice-case-study-real-world-response-scena",
      questionId: "",
      videoId: "ybeDft0lN1o",
      articleContent: {
        sections: [
          { heading: "Real-World CP2000 Scenario", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Identifying the Discrepancy", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "CP2000 notices often appear 1-2 years after filing when IRS matching programs detect discrepancies",
          "Common causes include forgotten 1099s from side gigs, bank interest, or brokerage accounts",
          "Interest accrues from the original due date — not from when you receive the notice"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-29T08:00:00.000Z",
      sources: [{ label: "Understanding CP2000", url: "https://www.irs.gov/individuals/understanding-your-cp2000-notice" }],
    }],
  },

  {
    question: {
      id: "q-cp2000-notice-explained-why-the-irs-sends-it-and-w",
      title: "CP2000 Notice Explained: Why the IRS Sends It and What It Means",
      body: "I received a CP2000 notice from the IRS: CP2000 Notice Explained: Why the IRS Sends It and What It Means. What should I do and how do I respond properly?",
      author: { displayName: "David Chen", avatarSeed: "corp_tax_q-V0_xWq", badge: "subscriber" as const },
      category: "cp2000",
      tags: ["cp2000"],
      postedAt: "2026-03-29T08:00:00.000Z",
      viewCount: 1854,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "CP2000 Notice Explained: Why the IRS Sends It and What It Means",
      seoDescription: "Expert guidance on CP2000 Notice Explained: Why the IRS Sends It and What It Means",
    },
    answers: [{
      id: "a-cp2000-notice-explained-why-the-irs-sends-it-and-w",
      questionId: "",
      videoId: "V0_xWq_N38s",
      articleContent: {
        sections: [
          { heading: "Understanding the CP2000 Notice", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Triggers for CP2000 Notices", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A CP2000 is a proposed adjustment, not an audit — but it requires prompt attention",
          "Most CP2000s result from income reported by third parties (employers, banks, brokers) that does not appear on your return",
          "Common triggers: missing 1099-NEC, forgotten bank interest (1099-INT), unreported stock sales (1099-B)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-29T11:00:00.000Z",
      sources: [{ label: "Understanding CP2000", url: "https://www.irs.gov/individuals/understanding-your-cp2000-notice" }],
    }],
  },

  {
    question: {
      id: "q-responding-to-a-cp2000-notice-step-by-step-guide",
      title: "Responding to a CP2000 Notice: Step-by-Step Guide",
      body: "I received a CP2000 notice from the IRS: Responding to a CP2000 Notice: Step-by-Step Guide. What should I do and how do I respond properly?",
      author: { displayName: "Emma L.", avatarSeed: "first_filer-Rr9K14", badge: "subscriber" as const },
      category: "cp2000",
      tags: ["cp2000"],
      postedAt: "2026-03-29T11:00:00.000Z",
      viewCount: 3071,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Responding to a CP2000 Notice: Step-by-Step Guide",
      seoDescription: "Expert guidance on Responding to a CP2000 Notice: Step-by-Step Guide",
    },
    answers: [{
      id: "a-responding-to-a-cp2000-notice-step-by-step-guide",
      questionId: "",
      videoId: "Rr9K14-V8Dg",
      articleContent: {
        sections: [
          { heading: "Stay Calm and Respond", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Your Response Options", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Do not panic — a CP2000 is a proposal, not a final bill",
          "You typically have 30 days to respond to a CP2000 notice",
          "You can agree, partially agree, or disagree with the proposed adjustment"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-29T14:00:00.000Z",
      sources: [{ label: "Understanding CP2000", url: "https://www.irs.gov/individuals/understanding-your-cp2000-notice" }],
    }],
  },

  {
    question: {
      id: "q-worst-case-cp2000-scenario-what-happens-if-you-ign",
      title: "Worst-Case CP2000 Scenario: What Happens If You Ignore It",
      body: "I received a CP2000 notice from the IRS: Worst-Case CP2000 Scenario: What Happens If You Ignore It. What should I do and how do I respond properly?",
      author: { displayName: "James R.", avatarSeed: "ein_help_needed-xzlSVi", badge: "subscriber" as const },
      category: "cp2000",
      tags: ["cp2000"],
      postedAt: "2026-03-29T14:00:00.000Z",
      viewCount: 1738,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Worst-Case CP2000 Scenario: What Happens If You Ignore It",
      seoDescription: "Expert guidance on Worst-Case CP2000 Scenario: What Happens If You Ignore It",
    },
    answers: [{
      id: "a-worst-case-cp2000-scenario-what-happens-if-you-ign",
      questionId: "",
      videoId: "xzlSVi-v-xI",
      articleContent: {
        sections: [
          { heading: "Real-World CP2000 Scenario", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Identifying the Discrepancy", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "CP2000 notices often appear 1-2 years after filing when IRS matching programs detect discrepancies",
          "Common causes include forgotten 1099s from side gigs, bank interest, or brokerage accounts",
          "Interest accrues from the original due date — not from when you receive the notice"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-29T17:00:00.000Z",
      sources: [{ label: "Understanding CP2000", url: "https://www.irs.gov/individuals/understanding-your-cp2000-notice" }],
    }],
  },

  {
    question: {
      id: "q-why-tax-filing-requirements-matter-every-u-s-taxpa",
      title: "Why Tax Filing Requirements Matter: Every U.S. Taxpayer Should Know (Ep. 1)",
      body: "I'm new to U.S. taxes and need to understand: Why Tax Filing Requirements Matter: Every U.S. Taxpayer Should Know. Can someone explain this in straightforward terms?",
      author: { displayName: "Priya M.", avatarSeed: "married_filing_q-LzEHmN", },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-29T23:00:00.000Z",
      viewCount: 549,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Why Tax Filing Requirements Matter: Every U.S. Taxpayer Should Know (Ep. 1)",
      seoDescription: "Expert guidance on Why Tax Filing Requirements Matter: Every U.S. Taxpayer Should Know",
    },
    answers: [{
      id: "a-why-tax-filing-requirements-matter-every-u-s-taxpa",
      questionId: "",
      videoId: "LzEHmNYKKxo",
      articleContent: {
        sections: [
          { heading: "Understanding Filing Requirements", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Income Thresholds and Filing Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Filing requirements depend on income, filing status, age, and dependency status",
          "Even if not required to file, you may want to — to claim refunds or refundable credits",
          "Penalties apply if you are required to file and fail to do so"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-30T02:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-standard-deduction-vs-itemized-deduction-which-sho",
      title: "Standard Deduction vs Itemized Deduction: Which Should You Choose? (Ep. 2)",
      body: "I'm new to U.S. taxes and need to understand: Standard Deduction vs Itemized Deduction: Which Should You Choose?. Can someone explain this in straightforward terms?",
      author: { displayName: "Alex Wong", avatarSeed: "filing_status_help-eTqGC7", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-30T02:00:00.000Z",
      viewCount: 1891,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Standard Deduction vs Itemized Deduction: Which Should You Choose? (Ep. 2)",
      seoDescription: "Expert guidance on Standard Deduction vs Itemized Deduction: Which Should You Choose?",
    },
    answers: [{
      id: "a-standard-deduction-vs-itemized-deduction-which-sho",
      questionId: "",
      videoId: "eTqGC7Gqatc",
      articleContent: {
        sections: [
          { heading: "Standard Deduction: The Simple Choice", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Itemized Deductions: When Your Expenses Add Up", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Standard deduction is a flat amount that varies by filing status and adjusts for inflation annually",
          "Itemizing means listing specific qualifying expenses that may exceed the standard deduction",
          "You must choose one or the other — cannot claim both standard and itemized deductions"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-30T05:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-standard-vs-itemized-deduction-gotchas-part-1-ep-3",
      title: "Standard vs Itemized Deduction Gotchas Part 1 (Ep. 3)",
      body: "I'm new to U.S. taxes and need to understand: Standard vs Itemized Deduction Gotchas Part 1. Can someone explain this in straightforward terms?",
      author: { displayName: "Nina P.", avatarSeed: "tax_newbie-QMOH7-", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-30T05:00:00.000Z",
      viewCount: 1016,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Standard vs Itemized Deduction Gotchas Part 1 (Ep. 3)",
      seoDescription: "Expert guidance on Standard vs Itemized Deduction Gotchas Part 1",
    },
    answers: [{
      id: "a-standard-vs-itemized-deduction-gotchas-part-1-ep-3",
      questionId: "",
      videoId: "QMOH7-2CFpA",
      articleContent: {
        sections: [
          { heading: "Standard Deduction: The Simple Choice", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Itemized Deductions: When Your Expenses Add Up", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Standard deduction is a flat amount that varies by filing status and adjusts for inflation annually",
          "Itemizing means listing specific qualifying expenses that may exceed the standard deduction",
          "You must choose one or the other — cannot claim both standard and itemized deductions"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-30T08:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-standard-vs-itemized-deduction-gotchas-part-2-ep-4",
      title: "Standard vs Itemized Deduction Gotchas Part 2 (Ep. 4)",
      body: "I'm new to U.S. taxes and need to understand: Standard vs Itemized Deduction Gotchas Part 2. Can someone explain this in straightforward terms?",
      author: { displayName: "Carlos G.", avatarSeed: "biz_tax_question-XUHxai", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-30T08:00:00.000Z",
      viewCount: 685,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Standard vs Itemized Deduction Gotchas Part 2 (Ep. 4)",
      seoDescription: "Expert guidance on Standard vs Itemized Deduction Gotchas Part 2",
    },
    answers: [{
      id: "a-standard-vs-itemized-deduction-gotchas-part-2-ep-4",
      questionId: "",
      videoId: "XUHxai11v9k",
      articleContent: {
        sections: [
          { heading: "Standard Deduction: The Simple Choice", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Itemized Deductions: When Your Expenses Add Up", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Standard deduction is a flat amount that varies by filing status and adjusts for inflation annually",
          "Itemizing means listing specific qualifying expenses that may exceed the standard deduction",
          "You must choose one or the other — cannot claim both standard and itemized deductions"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-30T11:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-personal-information-preparation-for-your-tax-retu",
      title: "Personal Information Preparation for Your Tax Return (Ep. 8)",
      body: "I'm new to U.S. taxes and need to understand: Personal Information Preparation for Your Tax Return. Can someone explain this in straightforward terms?",
      author: { displayName: "Yuki S.", avatarSeed: "startup_tax_q-pbYf9U", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-30T11:00:00.000Z",
      viewCount: 1964,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Personal Information Preparation for Your Tax Return (Ep. 8)",
      seoDescription: "Expert guidance on Personal Information Preparation for Your Tax Return",
    },
    answers: [{
      id: "a-personal-information-preparation-for-your-tax-retu",
      questionId: "",
      videoId: "pbYf9Ul8-5Y",
      articleContent: {
        sections: [
          { heading: "Gathering Personal Information for Your Return", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Income Documents Checklist", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Gather SSNs/ITINs for yourself, spouse, and all dependents",
          "Collect ALL income documents: W-2s, 1099s, K-1s before filing",
          "Wait until mid-February to ensure all documents have been received"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-30T14:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-key-irs-tax-forms-and-due-dates-every-taxpayer-mus",
      title: "Key IRS Tax Forms and Due Dates Every Taxpayer Must Know (Ep. 9)",
      body: "I'm new to U.S. taxes and need to understand: Key IRS Tax Forms and Due Dates Every Taxpayer Must Know. Can someone explain this in straightforward terms?",
      author: { displayName: "Tom H.", avatarSeed: "llc_formation_q-iKZWfU", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-30T14:00:00.000Z",
      viewCount: 654,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Key IRS Tax Forms and Due Dates Every Taxpayer Must Know (Ep. 9)",
      seoDescription: "Expert guidance on Key IRS Tax Forms and Due Dates Every Taxpayer Must Know",
    },
    answers: [{
      id: "a-key-irs-tax-forms-and-due-dates-every-taxpayer-mus",
      questionId: "",
      videoId: "iKZWfUJi3I0",
      articleContent: {
        sections: [
          { heading: "Income Tax: Form 1040", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Self-Employment and Estimated Taxes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 1040 (individual) is due April 15 for calendar-year taxpayers",
          "Self-employment tax (Schedule SE) is filed with your 1040, not separately",
          "Estimated taxes (1040-ES) are due quarterly: Apr 15, Jun 15, Sep 15, Jan 15"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-30T17:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-tax-return-vs-information-return-what-s-the-differ",
      title: "Tax Return vs Information Return: What's the Difference? (Ep. 10)",
      body: "I'm new to U.S. taxes and need to understand: Tax Return vs Information Return: What's the Difference?. Can someone explain this in straightforward terms?",
      author: { displayName: "Lisa Chen", avatarSeed: "entity_choice_q-h9Tfda", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-30T23:00:00.000Z",
      viewCount: 1686,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Tax Return vs Information Return: What's the Difference? (Ep. 10)",
      seoDescription: "Expert guidance on Tax Return vs Information Return: What's the Difference?",
    },
    answers: [{
      id: "a-tax-return-vs-information-return-what-s-the-differ",
      questionId: "",
      videoId: "h9Tfda_oJYA",
      articleContent: {
        sections: [
          { heading: "What Is a Tax Return?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Is an Information Return?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Tax returns report your income, deductions, and calculate your tax liability (Form 1040)",
          "Information returns are filed by third parties reporting what they paid you (W-2, 1099s)",
          "The IRS uses information returns to verify your tax return accuracy"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-31T02:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-understanding-w-2-w-2g-and-1099-forms-income-repor",
      title: "Understanding W-2, W-2G, and 1099 Forms: Income Reporting Basics (Ep. 11)",
      body: "I'm new to U.S. taxes and need to understand: Understanding W-2, W-2G, and 1099 Forms: Income Reporting Basics. Can someone explain this in straightforward terms?",
      author: { displayName: "Mike D.", avatarSeed: "tax_credit_q-AwByYn", badge: "subscriber" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-31T02:00:00.000Z",
      viewCount: 724,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Understanding W-2, W-2G, and 1099 Forms: Income Reporting Basics (Ep. 11)",
      seoDescription: "Expert guidance on Understanding W-2, W-2G, and 1099 Forms: Income Reporting Basics",
    },
    answers: [{
      id: "a-understanding-w-2-w-2g-and-1099-forms-income-repor",
      questionId: "",
      videoId: "AwByYngk7U0",
      articleContent: {
        sections: [
          { heading: "Understanding W-2 and 1099 Forms", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "W-2G: Gambling Winnings", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "W-2: reports employee wages and tax withholding",
          "1099-NEC: reports freelance/contract payments of $600+",
          "1099-INT: reports bank interest income"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-31T05:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-business-vs-personal-expenses-the-grey-area-of-tax",
      title: "Business vs Personal Expenses: The Grey Area of Tax Deductions (Ep. 12)",
      body: "I'm new to U.S. taxes and need to understand: Business vs Personal Expenses: The Grey Area of Tax Deductions. Can someone explain this in straightforward terms?",
      author: { displayName: "Anna K.", avatarSeed: "amt_confused-uY3ezn", badge: "subscriber" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-31T05:00:00.000Z",
      viewCount: 2867,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Business vs Personal Expenses: The Grey Area of Tax Deductions (Ep. 12)",
      seoDescription: "Expert guidance on Business vs Personal Expenses: The Grey Area of Tax Deductions",
    },
    answers: [{
      id: "a-business-vs-personal-expenses-the-grey-area-of-tax",
      questionId: "",
      videoId: "uY3ezn5ImNM",
      articleContent: {
        sections: [
          { heading: "The Grey Area of Business vs. Personal Expenses", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Life Insurance Premiums Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Personal life insurance premiums are always non-deductible",
          "Business-provided employee life insurance may be deductible",
          "Family business arrangements are scrutinized closely by the IRS"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-31T08:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-mixed-use-vehicle-deduction-one-car-for-business-a",
      title: "Mixed-Use Vehicle Deduction: One Car for Business and Personal Use (Ep. 13)",
      body: "I'm new to U.S. taxes and need to understand: Mixed-Use Vehicle Deduction: One Car for Business and Personal Use. Can someone explain this in straightforward terms?",
      author: { displayName: "Chris L.", avatarSeed: "deduction_help-IJ11h3", badge: "subscriber" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-31T08:00:00.000Z",
      viewCount: 499,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Mixed-Use Vehicle Deduction: One Car for Business and Personal Use (Ep. 13)",
      seoDescription: "Expert guidance on Mixed-Use Vehicle Deduction: One Car for Business and Personal Use",
    },
    answers: [{
      id: "a-mixed-use-vehicle-deduction-one-car-for-business-a",
      questionId: "",
      videoId: "IJ11h3Xu7XI",
      articleContent: {
        sections: [
          { heading: "Mixed-Use Vehicle: Business vs. Personal", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Two Methods for Deducting Vehicle Expenses", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Business use: client visits, product delivery, between business locations",
          "Personal use: commuting, errands, groceries, vacation — never deductible",
          "Two methods: Standard Mileage Rate or Actual Expense Method"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-31T11:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-stop-overpaying-taxes-carryovers-you-re-missing-an",
      title: "Stop Overpaying Taxes: Carryovers You're Missing and Filing Checklist (Ep. 14)",
      body: "I'm new to U.S. taxes and need to understand: Stop Overpaying Taxes: Carryovers You're Missing and Filing Checklist. Can someone explain this in straightforward terms?",
      author: { displayName: "Raj P.", avatarSeed: "qbi_question-Weg3Go", },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-31T11:00:00.000Z",
      viewCount: 2274,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Stop Overpaying Taxes: Carryovers You're Missing and Filing Checklist (Ep. 14)",
      seoDescription: "Expert guidance on Stop Overpaying Taxes: Carryovers You're Missing and Filing Checklist",
    },
    answers: [{
      id: "a-stop-overpaying-taxes-carryovers-you-re-missing-an",
      questionId: "",
      videoId: "Weg3GohiXVU",
      articleContent: {
        sections: [
          { heading: "Why Prior Year Returns Matter", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Carryover Items", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Always review prior year returns before filing — carryovers can reduce your tax bill",
          "Capital loss carryover: losses above $3,000/year carry forward to offset future income",
          "Passive activity losses carry forward until you have passive income or dispose of the activity"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-31T14:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-how-to-find-and-download-irs-forms-publications-an",
      title: "How to Find and Download IRS Forms, Publications, and Instructions",
      body: "I'm new to U.S. taxes and need to understand: How to Find and Download IRS Forms, Publications, and Instructions. Can someone explain this in straightforward terms?",
      author: { displayName: "Maria S.", avatarSeed: "installment_q-ntNRto", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-31T14:00:00.000Z",
      viewCount: 1236,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How to Find and Download IRS Forms, Publications, and Instructions",
      seoDescription: "Expert guidance on How to Find and Download IRS Forms, Publications, and Instructions",
    },
    answers: [{
      id: "a-how-to-find-and-download-irs-forms-publications-an",
      questionId: "",
      videoId: "ntNRtoZziZc",
      articleContent: {
        sections: [
          { heading: "Finding IRS Forms and Publications Online", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How to Search and Download", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "IRS.gov is the only reliable source for current tax forms and instructions",
          "Third-party sites may have outdated forms — always verify the tax year",
          "Publications provide detailed guidance beyond what form instructions cover"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-31T17:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-why-tax-filing-requirements-matter-for-every-u-s-t",
      title: "Why Tax Filing Requirements Matter for Every U.S. Taxpayer",
      body: "I'm new to U.S. taxes and need to understand: Why Tax Filing Requirements Matter for Every U.S. Taxpayer. Can someone explain this in straightforward terms?",
      author: { displayName: "Kevin W.", avatarSeed: "cp2000_scared-PD-nS-", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-03-31T23:00:00.000Z",
      viewCount: 2321,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Why Tax Filing Requirements Matter for Every U.S. Taxpayer",
      seoDescription: "Expert guidance on Why Tax Filing Requirements Matter for Every U.S. Taxpayer",
    },
    answers: [{
      id: "a-why-tax-filing-requirements-matter-for-every-u-s-t",
      questionId: "",
      videoId: "PD-nS-l05Pc",
      articleContent: {
        sections: [
          { heading: "Understanding Filing Requirements", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Income Thresholds and Filing Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Filing requirements depend on income, filing status, age, and dependency status",
          "Even if not required to file, you may want to — to claim refunds or refundable credits",
          "Penalties apply if you are required to file and fail to do so"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-01T02:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-standard-deduction-vs-itemized-deduction-quick-com",
      title: "Standard Deduction vs Itemized Deduction: Quick Comparison",
      body: "I'm new to U.S. taxes and need to understand: Standard Deduction vs Itemized Deduction: Quick Comparison. Can someone explain this in straightforward terms?",
      author: { displayName: "Sophie T.", avatarSeed: "irs_notice_q-KyCHKI", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-01T02:00:00.000Z",
      viewCount: 628,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Standard Deduction vs Itemized Deduction: Quick Comparison",
      seoDescription: "Expert guidance on Standard Deduction vs Itemized Deduction: Quick Comparison",
    },
    answers: [{
      id: "a-standard-deduction-vs-itemized-deduction-quick-com",
      questionId: "",
      videoId: "KyCHKINVsus",
      articleContent: {
        sections: [
          { heading: "Standard Deduction: The Simple Choice", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Itemized Deductions: When Your Expenses Add Up", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Standard deduction is a flat amount that varies by filing status and adjusts for inflation annually",
          "Itemizing means listing specific qualifying expenses that may exceed the standard deduction",
          "You must choose one or the other — cannot claim both standard and itemized deductions"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-01T05:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-standard-vs-itemized-deduction-important-catches-p",
      title: "Standard vs Itemized Deduction: Important Catches Part 1",
      body: "I'm new to U.S. taxes and need to understand: Standard vs Itemized Deduction: Important Catches Part 1. Can someone explain this in straightforward terms?",
      author: { displayName: "Daniel M.", avatarSeed: "foreign_income_q-zYLNnI", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-01T05:00:00.000Z",
      viewCount: 2247,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Standard vs Itemized Deduction: Important Catches Part 1",
      seoDescription: "Expert guidance on Standard vs Itemized Deduction: Important Catches Part 1",
    },
    answers: [{
      id: "a-standard-vs-itemized-deduction-important-catches-p",
      questionId: "",
      videoId: "zYLNnI-Jmvg",
      articleContent: {
        sections: [
          { heading: "Standard Deduction: The Simple Choice", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Itemized Deductions: When Your Expenses Add Up", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Standard deduction is a flat amount that varies by filing status and adjusts for inflation annually",
          "Itemizing means listing specific qualifying expenses that may exceed the standard deduction",
          "You must choose one or the other — cannot claim both standard and itemized deductions"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-01T08:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-tax-carryovers-you-re-missing-stop-overpaying-on-y",
      title: "Tax Carryovers You're Missing: Stop Overpaying on Your Return",
      body: "I'm new to U.S. taxes and need to understand: Tax Carryovers You're Missing: Stop Overpaying on Your Return. Can someone explain this in straightforward terms?",
      author: { displayName: "Brandon", avatarSeed: "fbar_filing_q-aWwN_d", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-01T08:00:00.000Z",
      viewCount: 1017,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Tax Carryovers You're Missing: Stop Overpaying on Your Return",
      seoDescription: "Expert guidance on Tax Carryovers You're Missing: Stop Overpaying on Your Return",
    },
    answers: [{
      id: "a-tax-carryovers-you-re-missing-stop-overpaying-on-y",
      questionId: "",
      videoId: "aWwN_dHF0hY",
      articleContent: {
        sections: [
          { heading: "Why Prior Year Returns Matter", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Carryover Items", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Always review prior year returns before filing — carryovers can reduce your tax bill",
          "Capital loss carryover: losses above $3,000/year carry forward to offset future income",
          "Passive activity losses carry forward until you have passive income or dispose of the activity"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-01T11:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-startup-with-one-car-business-and-personal-use-tax",
      title: "Startup with One Car: Business and Personal Use Tax Rules",
      body: "I'm new to U.S. taxes and need to understand: Startup with One Car: Business and Personal Use Tax Rules. Can someone explain this in straightforward terms?",
      author: { displayName: "Mei", avatarSeed: "partnership_tax_q-Xlf0C1", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-01T11:00:00.000Z",
      viewCount: 1036,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Startup with One Car: Business and Personal Use Tax Rules",
      seoDescription: "Expert guidance on Startup with One Car: Business and Personal Use Tax Rules",
    },
    answers: [{
      id: "a-startup-with-one-car-business-and-personal-use-tax",
      questionId: "",
      videoId: "Xlf0C1wacFs",
      articleContent: {
        sections: [
          { heading: "Mixed-Use Vehicle: Business vs. Personal", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Two Methods for Deducting Vehicle Expenses", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Business use: client visits, product delivery, between business locations",
          "Personal use: commuting, errands, groceries, vacation — never deductible",
          "Two methods: Standard Mileage Rate or Actual Expense Method"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-01T14:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-business-vs-personal-expenses-tax-deduction-grey-a",
      title: "Business vs Personal Expenses: Tax Deduction Grey Areas Explained",
      body: "I'm new to U.S. taxes and need to understand: Business vs Personal Expenses: Tax Deduction Grey Areas Explained. Can someone explain this in straightforward terms?",
      author: { displayName: "Hassan", avatarSeed: "sole_prop_q-TuwNWY", badge: "subscriber" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-01T14:00:00.000Z",
      viewCount: 3053,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Business vs Personal Expenses: Tax Deduction Grey Areas Explained",
      seoDescription: "Expert guidance on Business vs Personal Expenses: Tax Deduction Grey Areas Explained",
    },
    answers: [{
      id: "a-business-vs-personal-expenses-tax-deduction-grey-a",
      questionId: "",
      videoId: "TuwNWYufMsg",
      articleContent: {
        sections: [
          { heading: "The Grey Area of Business vs. Personal Expenses", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Life Insurance Premiums Example", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Personal life insurance premiums are always non-deductible",
          "Business-provided employee life insurance may be deductible",
          "Family business arrangements are scrutinized closely by the IRS"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-01T17:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-w-2-w-2g-and-1099-understanding-your-income-forms",
      title: "W-2, W-2G, and 1099: Understanding Your Income Forms",
      body: "I'm new to U.S. taxes and need to understand: W-2, W-2G, and 1099: Understanding Your Income Forms. Can someone explain this in straightforward terms?",
      author: { displayName: "Olga", avatarSeed: "scorp_eligible-udM3HF", badge: "subscriber" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-01T23:00:00.000Z",
      viewCount: 1296,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "W-2, W-2G, and 1099: Understanding Your Income Forms",
      seoDescription: "Expert guidance on W-2, W-2G, and 1099: Understanding Your Income Forms",
    },
    answers: [{
      id: "a-w-2-w-2g-and-1099-understanding-your-income-forms",
      questionId: "",
      videoId: "udM3HFuK0OI",
      articleContent: {
        sections: [
          { heading: "Understanding W-2 and 1099 Forms", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "W-2G: Gambling Winnings", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "W-2: reports employee wages and tax withholding",
          "1099-NEC: reports freelance/contract payments of $600+",
          "1099-INT: reports bank interest income"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-02T02:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-tax-return-vs-information-return-key-differences-e",
      title: "Tax Return vs Information Return: Key Differences Explained",
      body: "I'm new to U.S. taxes and need to understand: Tax Return vs Information Return: Key Differences Explained. Can someone explain this in straightforward terms?",
      author: { displayName: "Tomas", avatarSeed: "ccorp_vs_scorp-PutTqr", badge: "subscriber" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-02T02:00:00.000Z",
      viewCount: 2942,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Tax Return vs Information Return: Key Differences Explained",
      seoDescription: "Expert guidance on Tax Return vs Information Return: Key Differences Explained",
    },
    answers: [{
      id: "a-tax-return-vs-information-return-key-differences-e",
      questionId: "",
      videoId: "PutTqrwx49g",
      articleContent: {
        sections: [
          { heading: "What Is a Tax Return?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What Is an Information Return?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Tax returns report your income, deductions, and calculate your tax liability (Form 1040)",
          "Information returns are filed by third parties reporting what they paid you (W-2, 1099s)",
          "The IRS uses information returns to verify your tax return accuracy"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-02T05:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-essential-irs-forms-and-due-dates-quick-reference-",
      title: "Essential IRS Forms and Due Dates Quick Reference Guide",
      body: "I'm new to U.S. taxes and need to understand: Essential IRS Forms and Due Dates Quick Reference Guide. Can someone explain this in straightforward terms?",
      author: { displayName: "Aisha", avatarSeed: "injured_spouse_q-SpcsxH", },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-02T05:00:00.000Z",
      viewCount: 2463,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Essential IRS Forms and Due Dates Quick Reference Guide",
      seoDescription: "Expert guidance on Essential IRS Forms and Due Dates Quick Reference Guide",
    },
    answers: [{
      id: "a-essential-irs-forms-and-due-dates-quick-reference-",
      questionId: "",
      videoId: "SpcsxHZg6RY",
      articleContent: {
        sections: [
          { heading: "Income Tax: Form 1040", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Self-Employment and Estimated Taxes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 1040 (individual) is due April 15 for calendar-year taxpayers",
          "Self-employment tax (Schedule SE) is filed with your 1040, not separately",
          "Estimated taxes (1040-ES) are due quarterly: Apr 15, Jun 15, Sep 15, Jan 15"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-02T08:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-preparing-personal-information-for-your-tax-return",
      title: "Preparing Personal Information for Your Tax Return: Complete Checklist",
      body: "I'm new to U.S. taxes and need to understand: Preparing Personal Information for Your Tax Return: Complete Checklist. Can someone explain this in straightforward terms?",
      author: { displayName: "Dmitri", avatarSeed: "innocent_spouse_q-vHjGZf", badge: "new-member" as const },
      category: "tax-basics",
      tags: ["tax-basics"],
      postedAt: "2026-04-02T08:00:00.000Z",
      viewCount: 753,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Preparing Personal Information for Your Tax Return: Complete Checklist",
      seoDescription: "Expert guidance on Preparing Personal Information for Your Tax Return: Complete Checklist",
    },
    answers: [{
      id: "a-preparing-personal-information-for-your-tax-return",
      questionId: "",
      videoId: "vHjGZf1aTA0",
      articleContent: {
        sections: [
          { heading: "Gathering Personal Information for Your Return", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Income Documents Checklist", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Gather SSNs/ITINs for yourself, spouse, and all dependents",
          "Collect ALL income documents: W-2s, 1099s, K-1s before filing",
          "Wait until mid-February to ensure all documents have been received"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-02T11:00:00.000Z",
      sources: [{ label: "IRS Tax Guide", url: "https://www.irs.gov/pub/irs-pdf/p17.pdf" }],
    }],
  },

  {
    question: {
      id: "q-are-you-a-non-u-s-person-irs-definition-for-form-5",
      title: "Are You a Non-U.S. Person? IRS Definition for Form 5472 Eligibility",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Are You a Non-U.S. Person? IRS Definition for Form 5472 Eligibility. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Camila", avatarSeed: "estate_tax_q-Uzld6F", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-04-02T11:00:00.000Z",
      viewCount: 859,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Are You a Non-U.S. Person? IRS Definition for Form 5472 Eligibility",
      seoDescription: "Expert guidance on Are You a Non-U.S. Person? IRS Definition for Form 5472 Eligibility",
    },
    answers: [{
      id: "a-are-you-a-non-u-s-person-irs-definition-for-form-5",
      questionId: "",
      videoId: "Uzld6FnNN9E",
      articleContent: {
        sections: [
          { heading: "What Does 'Non-U.S. Person' Mean?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Qualifies as a U.S. Person?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A 'non-U.S. person' is the IRS term for a foreign person — someone who is not a U.S. citizen, resident alien, or domestic entity",
          "U.S. persons include U.S. citizens, green card holders, individuals passing the substantial presence test, and domestic entities",
          "Your physical location does not determine whether you are a U.S. person or non-U.S. person — legal status does"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-02T14:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-does-where-you-live-determine-your-u-s-tax-status-",
      title: "Does Where You Live Determine Your U.S. Tax Status? Form 5472 Filing Rules",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Does Where You Live Determine Your U.S. Tax Status? Form 5472 Filing Rules. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Liam", avatarSeed: "due_date_q-8n539P", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-04-02T14:00:00.000Z",
      viewCount: 1397,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Where You Live Determine Your U.S. Tax Status? Form 5472 Filing Rules",
      seoDescription: "Expert guidance on Does Where You Live Determine Your U.S. Tax Status? Form 5472 Filing Rules",
    },
    answers: [{
      id: "a-does-where-you-live-determine-your-u-s-tax-status-",
      questionId: "",
      videoId: "8n539PqxyhA",
      articleContent: {
        sections: [
          { heading: "Location Does Not Determine U.S. Person Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Examples That Illustrate the Rule", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Where you live does not determine whether you are a U.S. person or non-U.S. person",
          "A U.S. citizen living abroad is still a U.S. person",
          "A foreign national living in the U.S. on a visa may still be a non-U.S. person"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-02T17:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-dual-citizenship-and-u-s-llc-tax-filing-are-you-a-",
      title: "Dual Citizenship and U.S. LLC Tax Filing: Are You a U.S. Person? (Form 5472)",
      body: "I'm a foreign owner of a U.S. LLC and I'm trying to understand: Dual Citizenship and U.S. LLC Tax Filing: Are You a U.S. Person?. Can someone break this down in simple terms? I want to make sure I'm filing correctly and not missing anything important.",
      author: { displayName: "Fatima", avatarSeed: "ss4_application_q-kmJURy", badge: "new-member" as const },
      category: "form-5472",
      tags: ["form-5472"],
      postedAt: "2026-04-02T23:00:00.000Z",
      viewCount: 1242,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Dual Citizenship and U.S. LLC Tax Filing: Are You a U.S. Person? (Form 5472)",
      seoDescription: "Expert guidance on Dual Citizenship and U.S. LLC Tax Filing: Are You a U.S. Person?",
    },
    answers: [{
      id: "a-dual-citizenship-and-u-s-llc-tax-filing-are-you-a-",
      questionId: "",
      videoId: "kmJURyoxfOY",
      articleContent: {
        sections: [
          { heading: "Dual Citizenship and U.S. Person Status", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "The IRS Rule Is Absolute", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "If you hold dual citizenship and one is U.S. citizenship, the IRS treats you as a U.S. person",
          "U.S. person status applies regardless of where you live or what other nationality you hold",
          "Dual citizens with U.S. citizenship are not considered foreign owners of their U.S. LLCs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-03T02:00:00.000Z",
      sources: [{ label: "Form 5472 Instructions", url: "https://www.irs.gov/instructions/i5472" }],
    }],
  },

  {
    question: {
      id: "q-what-is-the-name-field-on-form-1120-how-to-enter-y",
      title: "What Is the Name Field on Form 1120? How to Enter Your LLC Name Correctly",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: What Is the Name Field on Form 1120? How to Enter Your LLC Name Correctly. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Oscar", avatarSeed: "ein_lost_help-aC2aVy", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-03T02:00:00.000Z",
      viewCount: 937,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Is the Name Field on Form 1120? How to Enter Your LLC Name Correctly",
      seoDescription: "Expert guidance on What Is the Name Field on Form 1120? How to Enter Your LLC Name Correctly",
    },
    answers: [{
      id: "a-what-is-the-name-field-on-form-1120-how-to-enter-y",
      questionId: "",
      videoId: "aC2aVyaq3y8",
      articleContent: {
        sections: [
          { heading: "The 'Name' Field on Form 1120", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Use Your LLC's Full Legal Name", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Enter your LLC's full legal name exactly as registered with the state",
          "Include the LLC designator (LLC, L.L.C., etc.) as shown on formation documents",
          "The name must match your EIN assignment letter (CP 575 or 147C)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-03T05:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-how-to-enter-your-llc-name-on-irs-forms-exact-matc",
      title: "How to Enter Your LLC Name on IRS Forms: Exact Match Rules (Form 1120 and 5472)",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: How to Enter Your LLC Name on IRS Forms: Exact Match Rules. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Ingrid", avatarSeed: "new_ein_q-vAmv4S", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-03T05:00:00.000Z",
      viewCount: 1053,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How to Enter Your LLC Name on IRS Forms: Exact Match Rules (Form 1120 and 5472)",
      seoDescription: "Expert guidance on How to Enter Your LLC Name on IRS Forms: Exact Match Rules",
    },
    answers: [{
      id: "a-how-to-enter-your-llc-name-on-irs-forms-exact-matc",
      questionId: "",
      videoId: "vAmv4SBj5S8",
      articleContent: {
        sections: [
          { heading: "Exact Match Rule for LLC Names on IRS Forms", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why Exact Matching Matters", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The LLC name on Form 1120 and 5472 must exactly match the EIN assignment notice",
          "Mismatches can cause processing delays, manual review, or rejection",
          "Verify your name against the CP 575 or 147C letter before filing"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-03T08:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-does-capitalization-matter-on-irs-forms-all-caps-v",
      title: "Does Capitalization Matter on IRS Forms? ALL CAPS vs Lowercase (Form 1120 and 5472)",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Does Capitalization Matter on IRS Forms? ALL CAPS vs Lowercase. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Ravi", avatarSeed: "form_8832_q-5zhWIW", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-03T08:00:00.000Z",
      viewCount: 1343,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Does Capitalization Matter on IRS Forms? ALL CAPS vs Lowercase (Form 1120 and 5472)",
      seoDescription: "Expert guidance on Does Capitalization Matter on IRS Forms? ALL CAPS vs Lowercase",
    },
    answers: [{
      id: "a-does-capitalization-matter-on-irs-forms-all-caps-v",
      questionId: "",
      videoId: "5zhWIWi2BuM",
      articleContent: {
        sections: [
          { heading: "ALL CAPS vs Lowercase on IRS Forms", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Best Practice: Match Your EIN Letter", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The IRS accepts both ALL CAPS and standard capitalization",
          "Match the capitalization on your CP 575 or 147C letter for best results",
          "ALL CAPS is recommended for paper filings"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-03T11:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-half-width-vs-full-width-characters-on-irs-forms-u",
      title: "Half-Width vs Full-Width Characters on IRS Forms: Use ASCII Only (Form 1120 and 5472)",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Half-Width vs Full-Width Characters on IRS Forms: Use ASCII Only. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Elena", avatarSeed: "hoh_filing_q-72Cv15", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-03T11:00:00.000Z",
      viewCount: 1256,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Half-Width vs Full-Width Characters on IRS Forms: Use ASCII Only (Form 1120 and 5472)",
      seoDescription: "Expert guidance on Half-Width vs Full-Width Characters on IRS Forms: Use ASCII Only",
    },
    answers: [{
      id: "a-half-width-vs-full-width-characters-on-irs-forms-u",
      questionId: "",
      videoId: "72Cv15b_q1M",
      articleContent: {
        sections: [
          { heading: "Half-Width vs Full-Width Characters", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why This Matters", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Always use standard half-width ASCII characters on IRS forms",
          "Full-width characters from CJK keyboards will cause processing errors",
          "Switch to English keyboard input before entering form data"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-03T14:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-spacing-and-punctuation-on-irs-forms-do-periods-co",
      title: "Spacing and Punctuation on IRS Forms: Do Periods Commas and Spaces Matter? (Form 1120 and 5472)",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Spacing and Punctuation on IRS Forms: Do Periods Commas and Spaces Matter?. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Jun", avatarSeed: "widow_tax_help-Xg6jic", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-03T14:00:00.000Z",
      viewCount: 2593,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Spacing and Punctuation on IRS Forms: Do Periods Commas and Spaces Matter? (Form 1120 and 5472)",
      seoDescription: "Expert guidance on Spacing and Punctuation on IRS Forms: Do Periods Commas and Spaces Matter?",
    },
    answers: [{
      id: "a-spacing-and-punctuation-on-irs-forms-do-periods-co",
      questionId: "",
      videoId: "Xg6jiceYJNU",
      articleContent: {
        sections: [
          { heading: "Punctuation and Spacing on IRS Forms", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Address Formatting", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Match punctuation and spacing from your CP 575 or 147C letter",
          "Minor differences (commas in LLC names) can affect IRS matching",
          "Use standard USPS formatting for addresses"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-03T17:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-how-to-enter-your-llc-name-on-form-1120-step-by-st",
      title: "How to Enter Your LLC Name on Form 1120 Step-by-Step Demo",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: How to Enter Your LLC Name on Form 1120 Step-by-Step Demo. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Grace", avatarSeed: "mfs_question-PgmaKf", },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-03T23:00:00.000Z",
      viewCount: 2377,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How to Enter Your LLC Name on Form 1120 Step-by-Step Demo",
      seoDescription: "Expert guidance on How to Enter Your LLC Name on Form 1120 Step-by-Step Demo",
    },
    answers: [{
      id: "a-how-to-enter-your-llc-name-on-form-1120-step-by-st",
      questionId: "",
      videoId: "PgmaKf-tHJY",
      articleContent: {
        sections: [
          { heading: "Step-by-Step: Entering Your LLC Name", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Entering the Name", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The entity name field is at the top of Form 1120 Page 1",
          "Use the exact name from your CP 575 or 147C letter",
          "Include the full LLC designator"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-04T02:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-what-is-the-ein-field-on-form-1120-employer-identi",
      title: "What Is the EIN Field on Form 1120? Employer Identification Number Explained",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: What Is the EIN Field on Form 1120? Employer Identification Number Explained. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Samuel", avatarSeed: "mfj_nra_q-xO1oO7", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-04T02:00:00.000Z",
      viewCount: 702,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Is the EIN Field on Form 1120? Employer Identification Number Explained",
      seoDescription: "Expert guidance on What Is the EIN Field on Form 1120? Employer Identification Number Explained",
    },
    answers: [{
      id: "a-what-is-the-ein-field-on-form-1120-employer-identi",
      questionId: "",
      videoId: "xO1oO7GJK4M",
      articleContent: {
        sections: [
          { heading: "The EIN Field on Form 1120", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why the EIN Is Critical", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The EIN is a nine-digit number (XX-XXXXXXX) at the top right of Form 1120",
          "Your EIN is on your CP 575 or 147C letter",
          "EINs are permanent and do not expire"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-04T05:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-where-to-find-your-llc-ein-cp-575-confirmation-let",
      title: "Where to Find Your LLC EIN: CP 575 Confirmation Letter Explained",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Where to Find Your LLC EIN: CP 575 Confirmation Letter Explained. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Nadia", avatarSeed: "foreign_partner_q-l1LDAt", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-04T05:00:00.000Z",
      viewCount: 2039,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Where to Find Your LLC EIN: CP 575 Confirmation Letter Explained",
      seoDescription: "Expert guidance on Where to Find Your LLC EIN: CP 575 Confirmation Letter Explained",
    },
    answers: [{
      id: "a-where-to-find-your-llc-ein-cp-575-confirmation-let",
      questionId: "",
      videoId: "l1LDAtkyv1E",
      articleContent: {
        sections: [
          { heading: "The CP 575 Confirmation Letter", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Important: The IRS Does Not Reissue CP 575s", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The CP 575 is the IRS EIN confirmation letter",
          "It is issued only once — not replaceable if lost",
          "Request a 147C as a replacement"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-04T08:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-can-the-irs-reissue-a-cp-575-letter-what-to-do-if-",
      title: "Can the IRS Reissue a CP 575 Letter? What to Do If You Lost It",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Can the IRS Reissue a CP 575 Letter? What to Do If You Lost It. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Tobias", avatarSeed: "form_8865_q-KwkCCL", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-04T08:00:00.000Z",
      viewCount: 1602,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Can the IRS Reissue a CP 575 Letter? What to Do If You Lost It",
      seoDescription: "Expert guidance on Can the IRS Reissue a CP 575 Letter? What to Do If You Lost It",
    },
    answers: [{
      id: "a-can-the-irs-reissue-a-cp-575-letter-what-to-do-if-",
      questionId: "",
      videoId: "KwkCCLveIWg",
      articleContent: {
        sections: [
          { heading: "The IRS Does Not Reissue CP 575 Letters", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Request a 147C Verification Letter Instead", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "CP 575 is a one-time document — not replaceable",
          "Request a 147C by phone as a substitute",
          "Domestic: 1-800-829-4933 | International: 267-941-1099"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-04T11:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-how-to-request-a-147c-letter-from-the-irs-ein-veri",
      title: "How to Request a 147C Letter from the IRS: EIN Verification by Phone",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: How to Request a 147C Letter from the IRS: EIN Verification by Phone. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "Yara", avatarSeed: "credit_calc_q-MBYYGa", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-04T11:00:00.000Z",
      viewCount: 2898,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How to Request a 147C Letter from the IRS: EIN Verification by Phone",
      seoDescription: "Expert guidance on How to Request a 147C Letter from the IRS: EIN Verification by Phone",
    },
    answers: [{
      id: "a-how-to-request-a-147c-letter-from-the-irs-ein-veri",
      questionId: "",
      videoId: "MBYYGa3ZDL4",
      articleContent: {
        sections: [
          { heading: "How to Request a 147C by Phone", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What to Prepare", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Call 1-800-829-4933 (domestic) or 267-941-1099 (international)",
          "Prepare: EIN, entity name, responsible party info, address",
          "Request fax delivery for fastest turnaround"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-04T14:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-where-to-find-your-llc-ein-cp-575-147c-letter-and-",
      title: "Where to Find Your LLC EIN: CP 575 147C Letter and SS-4 Explained",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Where to Find Your LLC EIN: CP 575 147C Letter and SS-4 Explained. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "markus_berlin", avatarSeed: "business_credit_q-lj23OV", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-04T14:00:00.000Z",
      viewCount: 2807,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Where to Find Your LLC EIN: CP 575 147C Letter and SS-4 Explained",
      seoDescription: "Expert guidance on Where to Find Your LLC EIN: CP 575 147C Letter and SS-4 Explained",
    },
    answers: [{
      id: "a-where-to-find-your-llc-ein-cp-575-147c-letter-and-",
      questionId: "",
      videoId: "lj23OV2rLOQ",
      articleContent: {
        sections: [
          { heading: "Three Ways to Verify Your EIN", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Which to Use", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "CP 575: original confirmation, issued once",
          "147C: replacement verification, available by phone",
          "Form SS-4 copy: backup documentation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-04T17:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-how-to-enter-your-ein-on-form-1120-step-by-step-de",
      title: "How to Enter Your EIN on Form 1120 Step-by-Step Demo",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: How to Enter Your EIN on Form 1120 Step-by-Step Demo. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "tokyo.sarah", avatarSeed: "reporting_change_q-Lp9zTT", badge: "new-member" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-04T23:00:00.000Z",
      viewCount: 1724,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How to Enter Your EIN on Form 1120 Step-by-Step Demo",
      seoDescription: "Expert guidance on How to Enter Your EIN on Form 1120 Step-by-Step Demo",
    },
    answers: [{
      id: "a-how-to-enter-your-ein-on-form-1120-step-by-step-de",
      questionId: "",
      videoId: "Lp9zTTHkhsI",
      articleContent: {
        sections: [
          { heading: "Entering Your EIN on Form 1120", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common Mistakes", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "EIN field is upper right of Form 1120 Page 1",
          "Format: XX-XXXXXXX",
          "Use entity EIN, not personal SSN/ITIN"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-05T02:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-which-u-s-state-was-your-llc-formed-in-form-1120-f",
      title: "Which U.S. State Was Your LLC Formed In? Form 1120 Filing Requirements",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Which U.S. State Was Your LLC Formed In? Form 1120 Filing Requirements. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "dave_in_london", avatarSeed: "life_change_tax-KUz3PP", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-05T02:00:00.000Z",
      viewCount: 3116,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Which U.S. State Was Your LLC Formed In? Form 1120 Filing Requirements",
      seoDescription: "Expert guidance on Which U.S. State Was Your LLC Formed In? Form 1120 Filing Requirements",
    },
    answers: [{
      id: "a-which-u-s-state-was-your-llc-formed-in-form-1120-f",
      questionId: "",
      videoId: "KUz3PPvLGC4",
      articleContent: {
        sections: [
          { heading: "State of Formation on Form 1120", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Common States", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Enter the state where your LLC was originally formed",
          "Use the two-letter abbreviation (DE, WY, NM, FL)",
          "Foreign registrations in other states don't change the state of organization"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-05T05:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-what-address-goes-on-form-1120-principal-office-vs",
      title: "What Address Goes on Form 1120? Principal Office vs Mailing Address Explained",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: What Address Goes on Form 1120? Principal Office vs Mailing Address Explained. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "priya.m", avatarSeed: "carryover_q-fg16OA", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-05T05:00:00.000Z",
      viewCount: 2307,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Address Goes on Form 1120? Principal Office vs Mailing Address Explained",
      seoDescription: "Expert guidance on What Address Goes on Form 1120? Principal Office vs Mailing Address Explained",
    },
    answers: [{
      id: "a-what-address-goes-on-form-1120-principal-office-vs",
      questionId: "",
      videoId: "fg16OAikF5E",
      articleContent: {
        sections: [
          { heading: "Principal Office vs Mailing Address", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "C/O Address for Foreign Owners", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Use principal office address, not registered agent address",
          "IRS explicitly prohibits registered agent address as business address",
          "Use C/O formatting for reliable U.S. mail delivery"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-05T08:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-can-you-use-a-p-o-box-on-form-1120-irs-address-rul",
      title: "Can You Use a P.O. Box on Form 1120? IRS Address Rules for LLCs",
      body: "I'm preparing my pro forma Form 1120 and I need help understanding: Can You Use a P.O. Box on Form 1120? IRS Address Rules for LLCs. What are the key rules I should follow to avoid processing errors or penalties?",
      author: { displayName: "alex_hk", avatarSeed: "nol_question-rZ_aiV", badge: "subscriber" as const },
      category: "form-1120",
      tags: ["form-1120"],
      postedAt: "2026-04-05T08:00:00.000Z",
      viewCount: 804,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Can You Use a P.O. Box on Form 1120? IRS Address Rules for LLCs",
      seoDescription: "Expert guidance on Can You Use a P.O. Box on Form 1120? IRS Address Rules for LLCs",
    },
    answers: [{
      id: "a-can-you-use-a-p-o-box-on-form-1120-irs-address-rul",
      questionId: "",
      videoId: "rZ_aiVYTOq0",
      articleContent: {
        sections: [
          { heading: "P.O. Boxes on Form 1120", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Limitations", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "P.O. Boxes are acceptable on Form 1120 for mailing purposes",
          "Use with C/O formatting when routing through a U.S. third party",
          "Consider mail forwarding services with street addresses"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-05T11:00:00.000Z",
      sources: [{ label: "Form 1120 Instructions", url: "https://www.irs.gov/instructions/i1120" }],
    }],
  },

  {
    question: {
      id: "q-introduction-to-u-s-partnership-taxation-how-incom",
      title: "Introduction to U.S. Partnership Taxation: How Income Flows Through to Partners (Form 1065)",
      body: "I'm choosing a business structure and want to understand: Introduction to U.S. Partnership Taxation: How Income Flows Through to Partners. What are the tax and liability implications I should consider?",
      author: { displayName: "nina_from_brazil", avatarSeed: "depreciation_q-KVUefp", },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-04-05T11:00:00.000Z",
      viewCount: 606,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Introduction to U.S. Partnership Taxation: How Income Flows Through to Partners (Form 1065)",
      seoDescription: "Expert guidance on Introduction to U.S. Partnership Taxation: How Income Flows Through to Partners",
    },
    answers: [{
      id: "a-introduction-to-u-s-partnership-taxation-how-incom",
      questionId: "",
      videoId: "KVUefpbXtnk",
      articleContent: {
        sections: [
          { heading: "How Partnership Income Flows Through", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "No Double Taxation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Partnership income flows through to partners — no entity-level tax",
          "Form 1065 is due March 15 with K-1s for each partner",
          "Partnerships avoid double taxation"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-05T14:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-form-8832-entity-classification-election-part-1-wh",
      title: "Form 8832 Entity Classification Election Part 1: What It Is and Who Uses It",
      body: "I'm choosing a business structure and want to understand: Form 8832 Entity Classification Election Part 1: What It Is and Who Uses It. What are the tax and liability implications I should consider?",
      author: { displayName: "carlos.mx", avatarSeed: "section_179_q-T53b4s", badge: "new-member" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-04-05T14:00:00.000Z",
      viewCount: 808,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8832 Entity Classification Election Part 1: What It Is and Who Uses It",
      seoDescription: "Expert guidance on Form 8832 Entity Classification Election Part 1: What It Is and Who Uses It",
    },
    answers: [{
      id: "a-form-8832-entity-classification-election-part-1-wh",
      questionId: "",
      videoId: "T53b4sKe7c4",
      articleContent: {
        sections: [
          { heading: "Form 8832: What It Is", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who Uses It", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Form 8832 lets entities choose their tax classification",
          "Only needed if you want a non-default classification",
          "The election applies to the entity, not the owner"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-05T17:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-form-8832-entity-classification-election-complete-",
      title: "Form 8832 Entity Classification Election Complete Guide Part 5",
      body: "I'm choosing a business structure and want to understand: Form 8832 Entity Classification Election Complete Guide Part 5. What are the tax and liability implications I should consider?",
      author: { displayName: "yuki_osaka", avatarSeed: "reit_ptp_q-4bWVTX", badge: "new-member" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-04-05T23:00:00.000Z",
      viewCount: 1959,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form 8832 Entity Classification Election Complete Guide Part 5",
      seoDescription: "Expert guidance on Form 8832 Entity Classification Election Complete Guide Part 5",
    },
    answers: [{
      id: "a-form-8832-entity-classification-election-complete-",
      questionId: "",
      videoId: "4bWVTXyzqGg",
      articleContent: {
        sections: [
          { heading: "Form 8832 Complete Guide", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Key Decision Points", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Always select 'domestic eligible entity' for U.S.-formed LLCs",
          "All owners must consent to the election",
          "Late election relief available under Part II"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-06T02:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-introduction-to-llcs-what-is-a-limited-liability-c",
      title: "Introduction to LLCs: What Is a Limited Liability Company? US Tax Explained",
      body: "I'm choosing a business structure and want to understand: Introduction to LLCs: What Is a Limited Liability Company? US Tax Explained. What are the tax and liability implications I should consider?",
      author: { displayName: "tom_sydney", avatarSeed: "form_6252_q-hFuL-D", badge: "new-member" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-04-06T02:00:00.000Z",
      viewCount: 899,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Introduction to LLCs: What Is a Limited Liability Company? US Tax Explained",
      seoDescription: "Expert guidance on Introduction to LLCs: What Is a Limited Liability Company? US Tax Explained",
    },
    answers: [{
      id: "a-introduction-to-llcs-what-is-a-limited-liability-c",
      questionId: "",
      videoId: "hFuL-DLbiHg",
      articleContent: {
        sections: [
          { heading: "What Is an LLC?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Key Features", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "LLCs provide limited liability — personal assets shielded from business debts",
          "Pass-through taxation by default — no entity-level federal tax",
          "No restrictions on foreign ownership"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-06T05:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-c-corp-vs-s-corp-key-tax-differences-every-busines",
      title: "C Corp vs S Corp: Key Tax Differences Every Business Owner Should Know",
      body: "I'm choosing a business structure and want to understand: C Corp vs S Corp: Key Tax Differences Every Business Owner Should Know. What are the tax and liability implications I should consider?",
      author: { displayName: "lisa.taipei", avatarSeed: "tax_basics_help-U6OkFw", badge: "new-member" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-04-06T05:00:00.000Z",
      viewCount: 487,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "C Corp vs S Corp: Key Tax Differences Every Business Owner Should Know",
      seoDescription: "Expert guidance on C Corp vs S Corp: Key Tax Differences Every Business Owner Should Know",
    },
    answers: [{
      id: "a-c-corp-vs-s-corp-key-tax-differences-every-busines",
      questionId: "",
      videoId: "U6OkFwW12lM",
      articleContent: {
        sections: [
          { heading: "C Corp vs S Corp", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "For Foreign Owners", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "C corps: double taxation; S corps: pass-through taxation",
          "S corps restricted to U.S. citizens/residents",
          "Foreign owners should use LLCs instead"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-06T08:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-introduction-to-corporations-us-tax-treatment-and-",
      title: "Introduction to Corporations: US Tax Treatment and Business Entity Overview",
      body: "I'm choosing a business structure and want to understand: Introduction to Corporations: US Tax Treatment and Business Entity Overview. What are the tax and liability implications I should consider?",
      author: { displayName: "mike_toronto", avatarSeed: "w2_1099_q-6szJ8m", badge: "new-member" as const },
      category: "entity-types",
      tags: ["entity-types"],
      postedAt: "2026-04-06T08:00:00.000Z",
      viewCount: 631,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Introduction to Corporations: US Tax Treatment and Business Entity Overview",
      seoDescription: "Expert guidance on Introduction to Corporations: US Tax Treatment and Business Entity Overview",
    },
    answers: [{
      id: "a-introduction-to-corporations-us-tax-treatment-and-",
      questionId: "",
      videoId: "6szJ8mchLSI",
      articleContent: {
        sections: [
          { heading: "U.S. Corporations Overview", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Corporate Taxation", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Corporations provide the strongest liability protection",
          "C corps face double taxation at 21% corporate rate",
          "Most flexibility for growth and raising capital"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-06T11:00:00.000Z",
      sources: [{ label: "IRS Business Structures", url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures" }],
    }],
  },

  {
    question: {
      id: "q-what-is-an-ein-why-you-need-form-ss-4-to-get-your-",
      title: "What Is an EIN? Why You Need Form SS-4 to Get Your Tax ID Number",
      body: "I need to apply for an EIN: What Is an EIN? Why You Need Form SS-4 to Get Your Tax ID Number. What's the process and what should I watch out for?",
      author: { displayName: "anna.vienna", avatarSeed: "personal_info_q-qa-ss4", badge: "new-member" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-04-06T11:00:00.000Z",
      viewCount: 452,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "What Is an EIN? Why You Need Form SS-4 to Get Your Tax ID Number",
      seoDescription: "Expert guidance on What Is an EIN? Why You Need Form SS-4 to Get Your Tax ID Number",
    },
    answers: [{
      id: "a-what-is-an-ein-why-you-need-form-ss-4-to-get-your-",
      questionId: "",
      videoId: "qa-ss4-what-is-ein",
      articleContent: {
        sections: [
          { heading: "What exactly is an EIN, and how is it different from an SSN or ITIN?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Why does the IRS require you to get an EIN?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "An EIN is a 9-digit federal tax ID number assigned to business entities by the IRS",
          "Form SS-4 is the official IRS application used to obtain an EIN",
          "The IRS limits EIN issuance to one per responsible party per business day"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-06T14:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-who-can-apply-for-an-ein-us-vs-foreign-applicants-",
      title: "Who Can Apply for an EIN? US vs Foreign Applicants Explained",
      body: "I need to apply for an EIN: Who Can Apply for an EIN? US vs Foreign Applicants Explained. What's the process and what should I watch out for?",
      author: { displayName: "mchen22", avatarSeed: "std_deduction_q-qa-ss4", badge: "subscriber" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-04-06T14:00:00.000Z",
      viewCount: 557,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Who Can Apply for an EIN? US vs Foreign Applicants Explained",
      seoDescription: "Expert guidance on Who Can Apply for an EIN? US vs Foreign Applicants Explained",
    },
    answers: [{
      id: "a-who-can-apply-for-an-ein-us-vs-foreign-applicants-",
      questionId: "",
      videoId: "qa-ss4-who-can-apply",
      articleContent: {
        sections: [
          { heading: "Is the same Form SS-4 used by both U.S. and foreign applicants?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Who qualifies to apply online vs. by phone?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "The same Form SS-4 is used by U.S. persons, resident aliens, nonresident aliens, and foreign entities",
          "Online EIN applications are only available to U.S./territory-based applicants with an SSN or ITIN",
          "International applicants must call 267-941-1099 (not toll-free) to apply by phone"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-04-06T17:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-preparing-to-file-form-ss-4-sequencing-addresses-a",
      title: "Preparing to File Form SS-4: Sequencing Addresses and Entity Classification",
      body: "I need to apply for an EIN: Preparing to File Form SS-4: Sequencing Addresses and Entity Classification. What's the process and what should I watch out for?",
      author: { displayName: "jparker", avatarSeed: "expat_llc_owner-qa-ss4", badge: "subscriber" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-02-28T23:00:00.000Z",
      viewCount: 3068,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Preparing to File Form SS-4: Sequencing Addresses and Entity Classification",
      seoDescription: "Expert guidance on Preparing to File Form SS-4: Sequencing Addresses and Entity Classification",
    },
    answers: [{
      id: "a-preparing-to-file-form-ss-4-sequencing-addresses-a",
      questionId: "",
      videoId: "qa-ss4-preparation",
      articleContent: {
        sections: [
          { heading: "What should you have ready before filling out Form SS-4?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "Does the order in which you set things up matter?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Finalize your legal name and state formation before applying for an EIN",
          "Have your approved Articles of Organization or Certificate of Incorporation ready",
          "Form SS-4 uses two address fields: mailing (Lines 4a-4b) and street (Lines 5a-5b)"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T02:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-form-ss-4-line-by-line-legal-name-address-and-resp",
      title: "Form SS-4 Line-by-Line: Legal Name Address and Responsible Party Lines 1-7",
      body: "I need to apply for an EIN: Form SS-4 Line-by-Line: Legal Name Address and Responsible Party Lines 1-7. What's the process and what should I watch out for?",
      author: { displayName: "s.kumar", avatarSeed: "foreign_founder-qa-ss4", badge: "subscriber" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-01T02:00:00.000Z",
      viewCount: 1802,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form SS-4 Line-by-Line: Legal Name Address and Responsible Party Lines 1-7",
      seoDescription: "Expert guidance on Form SS-4 Line-by-Line: Legal Name Address and Responsible Party Lines 1-7",
    },
    answers: [{
      id: "a-form-ss-4-line-by-line-legal-name-address-and-resp",
      questionId: "",
      videoId: "qa-ss4-lines-1-7",
      articleContent: {
        sections: [
          { heading: "What goes on Line 1 — Legal Name of Entity?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "When do you use Line 2 — Trade Name / DBA?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Line 1 must match your entity's legal name exactly as it appears on formation documents",
          "Line 2 is only for trade names or DBAs that differ from the legal name",
          "Line 3 is optional and used for a care-of person such as a registered agent"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T05:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-form-ss-4-line-by-line-llc-info-entity-type-and-re",
      title: "Form SS-4 Line-by-Line: LLC Info Entity Type and Reason Lines 8-12",
      body: "I need to apply for an EIN: Form SS-4 Line-by-Line: LLC Info Entity Type and Reason Lines 8-12. What's the process and what should I watch out for?",
      author: { displayName: "emilyR", avatarSeed: "llc_newbie_abroad-qa-ss4", },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-01T05:00:00.000Z",
      viewCount: 889,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form SS-4 Line-by-Line: LLC Info Entity Type and Reason Lines 8-12",
      seoDescription: "Expert guidance on Form SS-4 Line-by-Line: LLC Info Entity Type and Reason Lines 8-12",
    },
    answers: [{
      id: "a-form-ss-4-line-by-line-llc-info-entity-type-and-re",
      questionId: "",
      videoId: "qa-ss4-lines-8-12",
      articleContent: {
        sections: [
          { heading: "What do Lines 8a through 8c ask about your LLC?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How do you answer Line 9a — Type of Entity?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Lines 8a-8c determine your LLC's default tax classification based on membership and organization",
          "Line 9a for a foreign-owned U.S. DE: check \\",
          " and write \\"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T08:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-form-ss-4-line-by-line-employees-activity-and-sign",
      title: "Form SS-4 Line-by-Line: Employees Activity and Signature Lines 13-18",
      body: "I need to apply for an EIN: Form SS-4 Line-by-Line: Employees Activity and Signature Lines 13-18. What's the process and what should I watch out for?",
      author: { displayName: "luisG", avatarSeed: "digital_nomad_tax-qa-ss4", badge: "new-member" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-01T08:00:00.000Z",
      viewCount: 1235,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form SS-4 Line-by-Line: Employees Activity and Signature Lines 13-18",
      seoDescription: "Expert guidance on Form SS-4 Line-by-Line: Employees Activity and Signature Lines 13-18",
    },
    answers: [{
      id: "a-form-ss-4-line-by-line-employees-activity-and-sign",
      questionId: "",
      videoId: "qa-ss4-lines-13-18",
      articleContent: {
        sections: [
          { heading: "What goes on Line 13 — Highest Number of Employees Expected?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What is Line 14 — the Form 944 election?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Enter 0 on Line 13 if you have no employees, then skip Line 14",
          "Line 14 (Form 944 election) only applies if you have employees with low annual tax liability",
          "Enter \\"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T11:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-how-to-submit-form-ss-4-online-phone-fax-and-mail-",
      title: "How to Submit Form SS-4: Online Phone Fax and Mail Methods Compared",
      body: "I need to apply for an EIN: How to Submit Form SS-4: Online Phone Fax and Mail Methods Compared. What's the process and what should I watch out for?",
      author: { displayName: "tanyaB", avatarSeed: "non_us_filer-qa-ss4", badge: "new-member" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-01T11:00:00.000Z",
      viewCount: 839,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "How to Submit Form SS-4: Online Phone Fax and Mail Methods Compared",
      seoDescription: "Expert guidance on How to Submit Form SS-4: Online Phone Fax and Mail Methods Compared",
    },
    answers: [{
      id: "a-how-to-submit-form-ss-4-online-phone-fax-and-mail-",
      questionId: "",
      videoId: "qa-ss4-submission",
      articleContent: {
        sections: [
          { heading: "What is the fastest way to get an EIN?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How does the phone application work for international applicants?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Online: Fastest (immediate EIN), but only for U.S./territory applicants with SSN or ITIN",
          "Phone: Call 267-941-1099 for international applicants (not toll-free), EIN issued during the call",
          "Fax: Approximately 4 business days processing via the Fax-TIN program"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T14:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-foreign-owned-us-disregarded-entity-getting-an-ein",
      title: "Foreign-Owned US Disregarded Entity: Getting an EIN for Form 5472 Filing",
      body: "I need to apply for an EIN: Foreign-Owned US Disregarded Entity: Getting an EIN for Form 5472 Filing. What's the process and what should I watch out for?",
      author: { displayName: "benF", avatarSeed: "intl_llc_q-qa-ss4", badge: "new-member" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-01T14:00:00.000Z",
      viewCount: 1605,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign-Owned US Disregarded Entity: Getting an EIN for Form 5472 Filing",
      seoDescription: "Expert guidance on Foreign-Owned US Disregarded Entity: Getting an EIN for Form 5472 Filing",
    },
    answers: [{
      id: "a-foreign-owned-us-disregarded-entity-getting-an-ein",
      questionId: "",
      videoId: "qa-ss4-foreign-de",
      articleContent: {
        sections: [
          { heading: "What is a foreign-owned U.S. disregarded entity?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How do you fill out Form SS-4 specifically for this entity type?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A foreign-owned U.S. DE is typically a domestic single-member LLC owned by a foreign person or entity",
          "On Line 9a of Form SS-4: check \\",
          " and write \\"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-01T17:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-foreign-owned-us-partnership-ein-application-guide",
      title: "Foreign-Owned US Partnership EIN Application Guide Using Form SS-4",
      body: "I need to apply for an EIN: Foreign-Owned US Partnership EIN Application Guide Using Form SS-4. What's the process and what should I watch out for?",
      author: { displayName: "noraS", avatarSeed: "global_startup-qa-ss4", badge: "new-member" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-01T23:00:00.000Z",
      viewCount: 1661,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign-Owned US Partnership EIN Application Guide Using Form SS-4",
      seoDescription: "Expert guidance on Foreign-Owned US Partnership EIN Application Guide Using Form SS-4",
    },
    answers: [{
      id: "a-foreign-owned-us-partnership-ein-application-guide",
      questionId: "",
      videoId: "qa-ss4-partnership",
      articleContent: {
        sections: [
          { heading: "When is a foreign-owned LLC classified as a partnership?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How do you fill out Form SS-4 for a partnership?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "A U.S. LLC with two or more members defaults to partnership classification automatically",
          "On Form SS-4 Line 9a: check \\",
          " for a multi-member LLC"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T02:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-foreign-owned-us-c-corporation-ein-application-gui",
      title: "Foreign-Owned US C Corporation EIN Application Guide Using Form SS-4",
      body: "I need to apply for an EIN: Foreign-Owned US C Corporation EIN Application Guide Using Form SS-4. What's the process and what should I watch out for?",
      author: { displayName: "ivanK", avatarSeed: "overseas_biz-qa-ss4", badge: "new-member" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-02T02:00:00.000Z",
      viewCount: 2069,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Foreign-Owned US C Corporation EIN Application Guide Using Form SS-4",
      seoDescription: "Expert guidance on Foreign-Owned US C Corporation EIN Application Guide Using Form SS-4",
    },
    answers: [{
      id: "a-foreign-owned-us-c-corporation-ein-application-gui",
      questionId: "",
      videoId: "qa-ss4-c-corp",
      articleContent: {
        sections: [
          { heading: "When does a foreign-owned LLC file as a C corporation?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "How do you fill out Form SS-4 for a C corporation?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "C corporation status requires an affirmative Form 8832 election — it does not happen automatically",
          "On Form SS-4 Line 9a: check \\",
          " and write \\"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T05:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-form-ss-4-troubleshooting-common-errors-timeouts-a",
      title: "Form SS-4 Troubleshooting: Common Errors Timeouts and Duplicate EINs",
      body: "I need to apply for an EIN: Form SS-4 Troubleshooting: Common Errors Timeouts and Duplicate EINs. What's the process and what should I watch out for?",
      author: { displayName: "amyZ", avatarSeed: "remote_ceo-qa-ss4", badge: "new-member" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-02T05:00:00.000Z",
      viewCount: 687,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "Form SS-4 Troubleshooting: Common Errors Timeouts and Duplicate EINs",
      seoDescription: "Expert guidance on Form SS-4 Troubleshooting: Common Errors Timeouts and Duplicate EINs",
    },
    answers: [{
      id: "a-form-ss-4-troubleshooting-common-errors-timeouts-a",
      questionId: "",
      videoId: "qa-ss4-troubleshooting",
      articleContent: {
        sections: [
          { heading: "What should you do if the online application times out?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What causes name or SSN mismatches?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "Session timeouts are common on the IRS online application — try a different browser if it happens",
          "Name/SSN mismatches are the most common cause of online application rejections",
          "Never submit Form SS-4 using more than one method to avoid duplicate EINs"
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T08:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },

  {
    question: {
      id: "q-after-you-get-your-ein-cp-575-form-8822-b-and-keep",
      title: "After You Get Your EIN: CP 575 Form 8822-B and Keeping Info Current",
      body: "I need to apply for an EIN: After You Get Your EIN: CP 575 Form 8822-B and Keeping Info Current. What's the process and what should I watch out for?",
      author: { displayName: "robertL", avatarSeed: "solo_llc_intl-qa-ss4", badge: "subscriber" as const },
      category: "form-ss4",
      tags: ["form-ss4"],
      postedAt: "2026-03-02T08:00:00.000Z",
      viewCount: 3194,
      answerCount: 1,
      status: "answered" as const,
      seoTitle: "After You Get Your EIN: CP 575 Form 8822-B and Keeping Info Current",
      seoDescription: "Expert guidance on After You Get Your EIN: CP 575 Form 8822-B and Keeping Info Current",
    },
    answers: [{
      id: "a-after-you-get-your-ein-cp-575-form-8822-b-and-keep",
      questionId: "",
      videoId: "qa-ss4-after-ein",
      articleContent: {
        sections: [
          { heading: "What is the CP 575 notice and why does it matter?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." },
          { heading: "What if you never receive your CP 575?", body: "See the full article section above for a detailed explanation of this topic. The video walkthrough covers this with real-world examples and step-by-step guidance." }
        ],
        keyTakeaways: [
          "CP 575 is the one-time EIN confirmation letter — the IRS does not send replacements automatically",
          "If no CP 575 arrives within 60 days, mail a copy of your SS-4 marked \\",
          ",\n      "
        ],
      },
      author: OFFICIAL_AUTHOR,
      postedAt: "2026-03-02T11:00:00.000Z",
      sources: [{ label: "About Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" }],
    }],
  },


  // =====================================================
  // UNANSWERED COMMUNITY QUESTIONS (pending)
  // =====================================================

  {
    question: {
      id: "q-unans-0",
      title: "Has anyone used ForeignLLCTax.com to file their 5472? How was the experience?",
      body: "I just found out about the $25k penalty for not filing Form 5472 and I'm kind of panicking. Has anyone here used the self-filing tool on this site? Was it straightforward? I'm not great with tax forms.",
      author: { displayName: "Rachel M.", avatarSeed: "unans-0-has-anyo", badge: "new-member" as const, },
      category: "form-5472",
      tags: ["form 5472", "self-filing", "experience"],
      postedAt: "2026-03-07T22:00:00.000Z",
      viewCount: 651,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Has anyone used ForeignLLCTax.com to file their 5472? How was the experience?",
      seoDescription: "Community question: Has anyone used ForeignLLCTax.com to file their 5472? How was the experience?",
    },
    answers: [],
  },

  // =====================================================
  // Q&A: Form 5472 Line 1n — Country of Tax Residence
  // Source: Common confusion in foreign LLC owner communities
  // =====================================================
  {
    question: {
      id: "q-5472-line-1n-country",
      isFeatured: true,
      title: "Form 5472 Line 1n — what country do I enter for 'files an income tax return as a resident'? My LLC is a disregarded entity.",
      body: "I'm filling out Form 5472 for my foreign-owned single-member LLC (disregarded entity) and I'm stuck on Line 1n in Part I. It asks for the countries under whose laws the reporting corporation files an income tax return as a resident.\n\nSome people say I should put the United States because the LLC is registered in the U.S. and we file the pro forma 1120 with the IRS. Others say the LLC is a disregarded entity so it doesn't actually file an income tax return anywhere, and I should put my home country or leave it blank.\n\nThis is really confusing. The $25,000 penalty scares me — I don't want to get it wrong. What is the correct and safest answer here?",
      author: {
        displayName: "Kevin W.",
        avatarSeed: "line1n-country-2026",
        badge: "new-member" as const,
      },
      category: "form-5472",
      tags: ["form 5472", "line 1n", "country of residence", "disregarded entity", "pro forma 1120", "reporting corporation"],
      postedAt: "2026-04-05T16:30:00Z",
      viewCount: 2134,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 5472 Line 1n: What Country to Enter for Foreign-Owned Disregarded Entity LLC",
      seoDescription: "Expert guidance on Form 5472 Line 1n — which country to enter when your foreign-owned single-member LLC is a disregarded entity. Why 'United States' is the correct and lowest-risk answer.",
    },
    answers: [
      {
        id: "a-5472-line-1n-country-1",
        questionId: "q-5472-line-1n-country",
        articleContent: {
          sections: [
            {
              heading: "Enter \"United States\" — this is the correct and lowest-risk answer",
              body: "For a foreign-owned single-member LLC filing as a disregarded entity, enter \"United States\" on Line 1n.\n\nHere is the reasoning: The IRS, through final regulations under Section 6038A (effective for tax years beginning on or after January 1, 2017), requires foreign-owned U.S. disregarded entities to be treated as domestic corporations for purposes of Form 5472 reporting. This means the LLC — for this form — is a U.S. domestic corporation. That domestic corporation files a pro forma Form 1120 with the IRS, which is a U.S. tax authority.\n\nLine 1n asks about the reporting corporation, not the owner. The reporting corporation is the LLC. The LLC files its pro forma return in the United States. Therefore, the answer is \"United States.\""
            },
            {
              heading: "Why you should NOT enter the foreign owner's country",
              body: "Some filers mistakenly enter their home country (e.g., China, Canada, Germany) on Line 1n. This is incorrect because Line 1n asks where the reporting corporation files — not where the owner files.\n\nThe LLC itself does not file an income tax return in the foreign owner's country. The owner may file a personal tax return there, but that is the owner's filing obligation, not the LLC's. Entering the owner's country confuses the identity of the reporting corporation with the identity of the owner — two separate concepts on Form 5472."
            },
            {
              heading: "Why you should NOT leave it blank or enter \"None\"",
              body: "Some practitioners argue that because the LLC is a disregarded entity, it does not truly file an income tax return anywhere, so the answer should be \"None\" or left blank. While this argument has theoretical merit, it carries real compliance risk.\n\nThe IRS treats a substantially incomplete Form 5472 as a failure to file, which triggers the $25,000 penalty under Section 6038A. Leaving a field in Part I blank — especially one asking about tax residency — could be viewed as an incomplete filing. The IRS instructions do not provide a specific exception or carve-out for disregarded entities on this line.\n\nThe IRS created the legal fiction of treating the LLC as a corporation for this form. The safest approach is to follow that fiction consistently across every field, including Line 1n."
            },
            {
              heading: "The penalty risk is real — but choosing \"United States\" minimizes it",
              body: "The $25,000 penalty applies to failure to file, late filing, and substantially incomplete filing. Filing a Form 5472 with a blank or questionable entry in Part I could be flagged as substantially incomplete.\n\nIn practice, the vast majority of tax preparers and CPAs who handle foreign-owned SMLLC filings enter \"United States\" on Line 1n. This is the consensus approach among practitioners, it is consistent with the IRS's own framework for treating the LLC as a corporation, and no known cases exist of the IRS penalizing a filer for entering \"United States\" on this line.\n\nWhen in doubt on Form 5472, follow the IRS's own legal fiction — they built the form around it, and they expect you to play by those rules."
            }
          ],
          keyTakeaways: [
            "Enter \"United States\" on Line 1n — the LLC files its pro forma 1120 with the IRS, a U.S. tax authority",
            "Do NOT enter the foreign owner's country — Line 1n asks about the LLC, not the owner",
            "Do NOT leave it blank or write \"None\" — this risks a substantially incomplete filing and a $25,000 penalty",
            "The IRS treats the disregarded LLC as a domestic corporation for Form 5472 — follow that fiction consistently",
            "This is the consensus approach among practitioners and carries the lowest compliance risk"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-05T18:00:00Z",
        sources: [
          { label: "Form 5472 Instructions (Rev. 12/2024)", url: "https://www.irs.gov/instructions/i5472" },
          { label: "26 CFR 1.6038A-4 — Monetary Penalty", url: "https://www.law.cornell.edu/cfr/text/26/1.6038A-4" },
          { label: "IRS International Information Reporting Penalties", url: "https://www.irs.gov/payments/international-information-reporting-penalties" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A: International Courier Shipping for Form 5472
  // Source: Real-world DHL Express shipment experience
  // =====================================================
  {
    question: {
      id: "q-5472-international-shipping",
      isFeatured: true,
      title: "How do I ship Form 5472 to the IRS from overseas? Can I use DHL or FedEx instead of regular mail?",
      body: "I'm a foreign owner of a U.S. single-member LLC and I live overseas. I need to mail my Form 5472 and pro forma 1120 to the IRS in Ogden, Utah. Regular international mail from my country is unreliable and slow — I've had packages take 4-6 weeks and sometimes they never arrive.\n\nCan I use DHL, FedEx, or UPS to ship my tax forms to the IRS? If so, which service should I choose? What do I put on the shipping label? And will the IRS accept forms delivered by private courier?\n\nI'm also worried about the April 15 deadline. If I ship on April 14 but the package doesn't arrive until April 20, am I considered late?",
      author: {
        displayName: "Sarah K.",
        avatarSeed: "intl-shipping-2026",
        badge: "new-member" as const,
      },
      category: "form-5472",
      tags: ["form 5472", "international shipping", "DHL", "FedEx", "UPS", "courier", "mailing", "proof of filing"],
      postedAt: "2026-04-06T10:00:00Z",
      viewCount: 1876,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to Ship Form 5472 to the IRS from Overseas — DHL, FedEx, UPS Guide",
      seoDescription: "Step-by-step guide to shipping Form 5472 internationally via DHL Express, FedEx, or UPS. Which services are IRS-approved, what to write on the label, and how to keep proof of filing.",
    },
    answers: [
      {
        id: "a-5472-international-shipping-1",
        questionId: "q-5472-international-shipping",
        articleContent: {
          sections: [
            {
              heading: "Yes — DHL, FedEx, and UPS are IRS-approved for Form 5472 submissions",
              body: "The IRS maintains an official list of private delivery services (PDS) that qualify for the 'timely mailing treated as timely filing' rule. This means the date you hand the package to the courier counts as your filing date — not the date the IRS receives it.\n\nFor international shipments, the most commonly used IRS-approved services are:\n\nDHL: Express Worldwide (most popular for overseas filers)\nFedEx: International Priority or International First\nUPS: Worldwide Express or Worldwide Express Plus\n\nImportant: Only specific service levels are approved. Using FedEx Ground, UPS Ground, or standard postal mail does NOT qualify — you would have no IRS-recognized proof of timely filing."
            },
            {
              heading: "How to fill out the shipping label",
              body: "When creating your shipment, use these exact details:\n\nReceiver name: Internal Revenue Service\nAddress line 1: 1973 North Rulon White Boulevard\nAddress line 2: M/S 6112 Attn: PIN Unit\nCity: Ogden\nState: Utah (UT)\nZIP: 84201\nCountry: United States of America\nContact phone: +1 800-829-4933\n\nReference field: Enter 'Form 5472 / Pro Forma 1120' — this helps the IRS identify the contents.\n\nContents description: Enter 'Completed Forms' and select document (DOX) shipment type. Tax forms are paper documents, not commercial goods — no customs duties apply.\n\nWeight: A typical filing weighs under 0.5 kg (1 lb)."
            },
            {
              heading: "You are NOT late if you ship before the deadline",
              body: "Under the IRS timely mailing rule, your filing date is the date the IRS-approved courier accepts your package — not the date it arrives. If you hand your package to DHL on April 14 and it arrives at the IRS on April 20, you are considered to have filed on April 14.\n\nThis rule only applies to IRS-approved service levels. If you use a non-approved service (like regular international post), you do not get this protection — the IRS would consider your filing date as the date they receive it.\n\nKeep your shipping receipt showing the shipment date as proof."
            },
            {
              heading: "What to keep as proof of filing",
              body: "After shipping, save these items permanently:\n\n1. Waybill/tracking number — Your primary proof. It shows the shipment date, origin, destination (IRS Ogden, UT), and service level.\n\n2. Delivery confirmation — Check your courier's tracking page after a few business days. Once it shows 'Delivered,' screenshot it and save it. This proves the IRS received your package.\n\n3. Shipping receipt/invoice — Confirms the shipment date, service level (must be IRS-approved), and destination.\n\nKeep all proof for at least 7 years. There is no statute of limitations on Form 5472 penalties if the IRS claims the form was never filed — your delivery confirmation is your defense against a $25,000 penalty."
            },
            {
              heading: "Cost and timing estimates for international shipping",
              body: "Typical costs for shipping documents internationally to the U.S.:\n\nDHL Express Worldwide: $40-80 USD, 2-5 business days\nFedEx International Priority: $50-90 USD, 1-3 business days\nUPS Worldwide Express: $50-100 USD, 1-3 business days\n\nPricing varies by origin country, weight, and fuel surcharges. Book early to avoid rush pricing near the April 15 deadline.\n\nPro tip: If you are running out of time, fax your Form 5472 to the IRS at 855-887-7737 (at 300 DPI or higher) to meet the deadline, then mail the originals via courier as a backup. The fax confirmation is instant proof of filing."
            }
          ],
          keyTakeaways: [
            "DHL Express Worldwide, FedEx International Priority, and UPS Worldwide Express are all IRS-approved for Form 5472",
            "The date the courier accepts your package is your filing date — not the delivery date",
            "Ship to: IRS, 1973 North Rulon White Blvd, M/S 6112 Attn: PIN Unit, Ogden, UT 84201",
            "Put 'Form 5472 / Pro Forma 1120' in the reference field and 'Completed Forms' as contents",
            "Save your tracking number, delivery confirmation, and shipping receipt for at least 7 years",
            "If running short on time, fax first (855-887-7737) then mail originals as backup"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-06T12:00:00Z",
        sources: [
          { label: "IRS Approved Private Delivery Services", url: "https://www.irs.gov/filing/private-delivery-services-pds" },
          { label: "Form 5472 Instructions (Rev. 12/2024)", url: "https://www.irs.gov/instructions/i5472" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A: Typed vs Handwritten on Form 5472 / Form 1120
  // Source: Real-world filing experience
  // =====================================================
  {
    question: {
      id: "q-5472-typed-handwritten",
      isFeatured: false,
      title: "Can I mix typed and handwritten entries on Form 5472? My software only printed '202' in the year field and I added the '5' by hand.",
      body: "I used a filing tool to generate my Form 5472 and pro forma 1120. When I printed the forms, I noticed the year field only shows '202' instead of '2025.' I handwrote the '5' to complete it.\n\nAlso, a few other fields were left blank by the software and I filled them in by hand with a pen. Is it OK to have some fields typed and some handwritten on the same form? Will the IRS reject my filing for this?",
      author: {
        displayName: "Jason L.",
        avatarSeed: "typed-handwritten-2026",
        badge: "new-member" as const,
      },
      category: "form-5472",
      tags: ["form 5472", "form 1120", "typed", "handwritten", "mixed entries", "printing"],
      postedAt: "2026-04-07T09:00:00Z",
      viewCount: 1245,
      answerCount: 1,
      status: "answered",
      seoTitle: "Can You Mix Typed and Handwritten Entries on Form 5472 and Form 1120?",
      seoDescription: "Yes — the IRS accepts both typed and handwritten entries on the same form. Learn the rules for mixing typed and handwritten fields on Form 5472 and pro forma Form 1120.",
    },
    answers: [
      {
        id: "a-5472-typed-handwritten-1",
        questionId: "q-5472-typed-handwritten",
        articleContent: {
          sections: [
            {
              heading: "Yes — mixing typed and handwritten entries is completely fine",
              body: "The IRS accepts both typed and handwritten entries on paper tax forms, and you can absolutely mix both on the same form. This is extremely common in practice — many CPAs and tax preparers print pre-filled forms from software and then handwrite corrections, additions, or missing entries by hand.\n\nYour situation — where the software printed '202' and you completed it to '2025' by hand — is a complete non-issue. The IRS processes millions of forms with mixed typed and handwritten entries every year."
            },
            {
              heading: "Rules for handwritten entries",
              body: "When adding handwritten entries to a printed form, follow these basic rules:\n\nUse black or blue ink — never pencil. The IRS may not accept pencil entries because they can be erased or become illegible.\n\nWrite legibly — print rather than cursive if your handwriting is hard to read. The IRS processing center needs to be able to read your entries.\n\nStay within the designated fields — do not write in margins or between lines.\n\nIf you make a handwriting error, draw a single line through the incorrect entry, write the correct entry nearby, and initial the change. Do not use white-out or correction tape."
            },
            {
              heading: "What actually matters for IRS acceptance",
              body: "The IRS is not going to reject your filing because you handwrote a digit to complete a year field. What actually matters is:\n\nCorrect EIN on both Form 1120 and Form 5472.\n\nAll required parts completed — Part I (reporting corporation), Part II (foreign shareholder), Part III (related party), and Part IV or V (transactions).\n\nSignature present on Form 1120's 'Sign Here' line.\n\nFiled on time — by April 15 or by October 15 with a valid extension.\n\n'Foreign-owned U.S. DE' written across the top of Form 1120.\n\nA handwritten digit, a handwritten date, or a handwritten address on an otherwise typed form is routine and will not cause any problems."
            }
          ],
          keyTakeaways: [
            "The IRS accepts both typed and handwritten entries on the same form — this is standard practice",
            "Completing a partially-printed field by hand (like adding '5' to '202' to make '2025') is a non-issue",
            "Use black or blue ink for handwritten entries — never pencil",
            "What matters: correct EIN, all parts filled, signature present, and filed on time"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-07T10:00:00Z",
        sources: [
          { label: "Form 5472 Instructions (Rev. 12/2024)", url: "https://www.irs.gov/instructions/i5472" },
          { label: "IRS General Instructions for Forms", url: "https://www.irs.gov/forms-instructions" },
        ],
      },
    ],
  },

  {
    question: {
      id: "q-unans-1",
      title: "Can I file Form 5472 myself or do I absolutely need a CPA?",
      body: "My LLC had zero revenue this year. It seems like the filing should be pretty simple for a zero-income LLC. Is it realistic to do this myself or is it too risky without professional help?",
      author: { displayName: "thomasK", avatarSeed: "unans-1-can-i-fi", badge: "subscriber" as const, },
      category: "form-5472",
      tags: ["form 5472", "self-filing", "CPA"],
      postedAt: "2026-03-10T01:00:00.000Z",
      viewCount: 692,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Can I file Form 5472 myself or do I absolutely need a CPA?",
      seoDescription: "Community question: Can I file Form 5472 myself or do I absolutely need a CPA?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-2",
      title: "How long does it actually take to get an EIN by fax?",
      body: "I faxed my SS-4 three days ago and haven't heard back. Is this normal? The bank is pressuring me to provide my EIN.",
      author: { displayName: "jenny_hk", avatarSeed: "unans-2-how-long", badge: "new-member" as const, },
      category: "form-ss4",
      tags: ["EIN", "form SS-4", "fax", "timeline"],
      postedAt: "2026-03-08T04:00:00.000Z",
      viewCount: 501,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "How long does it actually take to get an EIN by fax?",
      seoDescription: "Community question: How long does it actually take to get an EIN by fax?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-3",
      title: "My accountant charged me $800 for a zero-income Form 5472 filing. Is that normal?",
      body: "I have a single-member LLC with literally zero transactions. My CPA charged $800 to file Form 5472 + pro forma 1120. That seems really high for what should be a simple return. What do others pay?",
      author: { displayName: "confused_expat", avatarSeed: "unans-3-my-accou",  },
      category: "form-5472",
      tags: ["form 5472", "CPA cost", "filing cost"],
      postedAt: "2026-03-07T07:00:00.000Z",
      viewCount: 336,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "My accountant charged me $800 for a zero-income Form 5472 filing. Is that normal?",
      seoDescription: "Community question: My accountant charged me $800 for a zero-income Form 5472 filing. Is that normal?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-4",
      title: "Wyoming vs Delaware LLC — does it matter for Form 5472?",
      body: "I'm about to form my LLC and can't decide between Wyoming and Delaware. From a Form 5472 perspective, does it make any difference which state I choose?",
      author: { displayName: "newbiz2026", avatarSeed: "unans-4-wyoming-", badge: "new-member" as const, },
      category: "entity-types",
      tags: ["Wyoming", "Delaware", "LLC formation", "form 5472"],
      postedAt: "2026-03-11T10:00:00.000Z",
      viewCount: 108,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Wyoming vs Delaware LLC — does it matter for Form 5472?",
      seoDescription: "Community question: Wyoming vs Delaware LLC — does it matter for Form 5472?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-5",
      title: "I missed the April 15 deadline for Form 5472. What do I do now?",
      body: "I completely forgot about filing Form 5472 and the deadline passed two weeks ago. Am I automatically getting the $25,000 penalty? Is there any way to reduce or avoid it?",
      author: { displayName: "Mike from Munich", avatarSeed: "unans-5-i-missed", badge: "subscriber" as const, },
      category: "form-5472",
      tags: ["form 5472", "deadline", "penalty", "late filing"],
      postedAt: "2026-03-11T13:00:00.000Z",
      viewCount: 873,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "I missed the April 15 deadline for Form 5472. What do I do now?",
      seoDescription: "Community question: I missed the April 15 deadline for Form 5472. What do I do now?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-6",
      title: "Does Stripe count as a reportable transaction on Form 5472?",
      body: "I receive payments through Stripe for my SaaS. Stripe deposits to my LLC's US bank account. Is each Stripe payout a reportable transaction? Or just the total for the year?",
      author: { displayName: "startup_question", avatarSeed: "unans-6-does-str", badge: "new-member" as const, },
      category: "form-5472",
      tags: ["form 5472", "Stripe", "reportable transaction"],
      postedAt: "2026-03-09T16:00:00.000Z",
      viewCount: 474,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Does Stripe count as a reportable transaction on Form 5472?",
      seoDescription: "Community question: Does Stripe count as a reportable transaction on Form 5472?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-7",
      title: "Can I get an ITIN and EIN at the same time?",
      body: "I need both an ITIN and an EIN for my new LLC. Can I apply for both simultaneously or do I need to get one before the other?",
      author: { displayName: "taxnewbie", avatarSeed: "unans-7-can-i-ge", badge: "new-member" as const, },
      category: "form-ss4",
      tags: ["ITIN", "EIN", "application order"],
      postedAt: "2026-03-09T19:00:00.000Z",
      viewCount: 619,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Can I get an ITIN and EIN at the same time?",
      seoDescription: "Community question: Can I get an ITIN and EIN at the same time?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-8",
      title: "I accidentally filed Form 8832 as foreign entity — how do I fix this?",
      body: "I filed Form 8832 and checked 'foreign eligible entity' because I'm a foreign person. I just learned this was wrong since my LLC is domestic. What's the fastest way to correct this?",
      author: { displayName: "Amit S.", avatarSeed: "unans-8-i-accide", badge: "subscriber" as const, },
      category: "form-8832",
      tags: ["form 8832", "correction", "foreign entity mistake"],
      postedAt: "2026-03-09T22:00:00.000Z",
      viewCount: 514,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "I accidentally filed Form 8832 as foreign entity — how do I fix this?",
      seoDescription: "Community question: I accidentally filed Form 8832 as foreign entity — how do I fix this?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-9",
      title: "Does my registered agent need to know about Form 5472?",
      body: "My registered agent only handles state compliance stuff. Do they need to be involved in my federal tax filing at all? Or is Form 5472 completely separate?",
      author: { displayName: "lauraB", avatarSeed: "unans-9-does-my-", badge: "new-member" as const, },
      category: "form-5472",
      tags: ["registered agent", "form 5472", "filing"],
      postedAt: "2026-03-13T01:00:00.000Z",
      viewCount: 615,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Does my registered agent need to know about Form 5472?",
      seoDescription: "Community question: Does my registered agent need to know about Form 5472?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-10",
      title: "What happens if my LLC had only $50 in the bank account the whole year?",
      body: "My LLC literally only has $50 from the initial deposit. No revenue, no expenses beyond the registered agent fee. Do I still need to file Form 5472 for this?",
      author: { displayName: "Chen Wei", avatarSeed: "unans-10-what-hap", badge: "new-member" as const, },
      category: "form-5472",
      tags: ["zero income", "form 5472", "minimal activity"],
      postedAt: "2026-03-10T04:00:00.000Z",
      viewCount: 446,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "What happens if my LLC had only $50 in the bank account the whole year?",
      seoDescription: "Community question: What happens if my LLC had only $50 in the bank account the whole year?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-11",
      title: "Filing from outside the US — do I mail Form 5472 internationally?",
      body: "I live in Germany and need to send my completed Form 5472 to the IRS. Do I mail it to a US address? Is there an international mailing address? Can I e-file?",
      author: { displayName: "frustrated_filer", avatarSeed: "unans-11-filing-f",  },
      category: "form-5472",
      tags: ["mailing", "international", "e-file"],
      postedAt: "2026-03-10T07:00:00.000Z",
      viewCount: 236,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Filing from outside the US — do I mail Form 5472 internationally?",
      seoDescription: "Community question: Filing from outside the US — do I mail Form 5472 internationally?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-12",
      title: "LLC with two foreign owners — is it still Form 5472 or something else?",
      body: "My business partner and I are both non-US persons. We formed a two-member LLC. Someone told me multi-member LLCs don't file Form 5472 but Form 1065 instead. Is that right?",
      author: { displayName: "david.london", avatarSeed: "unans-12-llc-with", badge: "subscriber" as const, },
      category: "entity-types",
      tags: ["multi-member LLC", "form 1065", "form 5472", "partnership"],
      postedAt: "2026-03-10T10:00:00.000Z",
      viewCount: 169,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "LLC with two foreign owners — is it still Form 5472 or something else?",
      seoDescription: "Community question: LLC with two foreign owners — is it still Form 5472 or something else?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-13",
      title: "How do I know if my LLC is a disregarded entity or a partnership?",
      body: "I keep seeing these terms but I'm confused. I'm the only owner of my LLC. Does that automatically make it a disregarded entity? What if I add a partner later?",
      author: { displayName: "Sato K.", avatarSeed: "unans-13-how-do-i", badge: "new-member" as const, },
      category: "entity-types",
      tags: ["disregarded entity", "partnership", "single member"],
      postedAt: "2026-03-14T13:00:00.000Z",
      viewCount: 896,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "How do I know if my LLC is a disregarded entity or a partnership?",
      seoDescription: "Community question: How do I know if my LLC is a disregarded entity or a partnership?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-14",
      title: "Is there a free way to check if my EIN is still active?",
      body: "I formed an LLC 3 years ago and never used it. I want to start using it now but I'm not sure if the EIN is still valid. How can I check without paying someone?",
      author: { displayName: "maria_mx", avatarSeed: "unans-14-is-there", badge: "new-member" as const, },
      category: "form-ss4",
      tags: ["EIN", "verification", "inactive LLC"],
      postedAt: "2026-03-11T16:00:00.000Z",
      viewCount: 659,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Is there a free way to check if my EIN is still active?",
      seoDescription: "Community question: Is there a free way to check if my EIN is still active?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-15",
      title: "Tax treaty between US and UK — does it affect my Form 5472?",
      body: "I'm a UK citizen with a US LLC. Someone mentioned tax treaties might reduce my filing obligations. Does the US-UK tax treaty change anything about Form 5472?",
      author: { displayName: "firstllc_help", avatarSeed: "unans-15-tax-trea", badge: "new-member" as const, },
      category: "foreign-income",
      tags: ["tax treaty", "UK", "form 5472"],
      postedAt: "2026-03-14T19:00:00.000Z",
      viewCount: 255,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Tax treaty between US and UK — does it affect my Form 5472?",
      seoDescription: "Community question: Tax treaty between US and UK — does it affect my Form 5472?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-16",
      title: "Amazon FBA seller — do I need Form 5472?",
      body: "I'm a foreign seller on Amazon FBA. Amazon handles everything — warehousing, shipping, payments. Do I still need to file Form 5472 for my US LLC even though Amazon manages all the operations?",
      author: { displayName: "PatrickO", avatarSeed: "unans-16-amazon-f", badge: "subscriber" as const, },
      category: "form-5472",
      tags: ["Amazon FBA", "form 5472", "e-commerce"],
      postedAt: "2026-03-14T22:00:00.000Z",
      viewCount: 145,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Amazon FBA seller — do I need Form 5472?",
      seoDescription: "Community question: Amazon FBA seller — do I need Form 5472?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-17",
      title: "Can I dissolve my LLC to avoid future Form 5472 filings?",
      body: "I'm not using my LLC anymore and the annual filing requirement is a hassle. If I dissolve the LLC, do I still need to file Form 5472 for the final year? What's the process?",
      author: { displayName: "noor_uae", avatarSeed: "unans-17-can-i-di", badge: "new-member" as const, },
      category: "form-5472",
      tags: ["LLC dissolution", "form 5472", "final filing"],
      postedAt: "2026-03-11T01:00:00.000Z",
      viewCount: 720,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Can I dissolve my LLC to avoid future Form 5472 filings?",
      seoDescription: "Community question: Can I dissolve my LLC to avoid future Form 5472 filings?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-18",
      title: "Does PayPal count as a US bank account for FBAR purposes?",
      body: "I have a PayPal business account linked to my LLC. It sometimes holds significant balances. Does this count toward the $10,000 FBAR threshold?",
      author: { displayName: "Sandy T.", avatarSeed: "unans-18-does-pay",  },
      category: "foreign-income",
      tags: ["FBAR", "PayPal", "foreign accounts"],
      postedAt: "2026-03-14T04:00:00.000Z",
      viewCount: 562,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Does PayPal count as a US bank account for FBAR purposes?",
      seoDescription: "Community question: Does PayPal count as a US bank account for FBAR purposes?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-19",
      title: "Married filing separately — will this affect my spouse's immigration case?",
      body: "My spouse is applying for a green card and we're wondering if filing separately vs jointly has any impact on the immigration process. Our tax situation makes MFS more advantageous but we don't want to jeopardize anything.",
      author: { displayName: "alexP_toronto", avatarSeed: "unans-19-married-", badge: "new-member" as const, },
      category: "filing-status",
      tags: ["MFS", "immigration", "green card"],
      postedAt: "2026-03-14T07:00:00.000Z",
      viewCount: 388,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Married filing separately — will this affect my spouse's immigration case?",
      seoDescription: "Community question: Married filing separately — will this affect my spouse's immigration case?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-20",
      title: "First year with the LLC — what records should I be keeping?",
      body: "I just formed my LLC this month. What records and documents should I start keeping from day one to make my Form 5472 filing easier next year?",
      author: { displayName: "Katerina V.", avatarSeed: "unans-20-first-ye", badge: "subscriber" as const, },
      category: "form-5472",
      tags: ["recordkeeping", "new LLC", "first year"],
      postedAt: "2026-03-14T10:00:00.000Z",
      viewCount: 662,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "First year with the LLC — what records should I be keeping?",
      seoDescription: "Community question: First year with the LLC — what records should I be keeping?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-21",
      title: "Can I pay myself a salary from my single-member LLC?",
      body: "I'm the only owner of my LLC. Can I pay myself a salary? How does that work with a disregarded entity for tax purposes?",
      author: { displayName: "ben.sydney", avatarSeed: "unans-21-can-i-pa", badge: "new-member" as const, },
      category: "entity-types",
      tags: ["salary", "single member LLC", "disregarded entity"],
      postedAt: "2026-03-17T13:00:00.000Z",
      viewCount: 704,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Can I pay myself a salary from my single-member LLC?",
      seoDescription: "Community question: Can I pay myself a salary from my single-member LLC?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-22",
      title: "IRS sent me a letter in Chinese — is this legit?",
      body: "I got a letter from the IRS that's partially in Chinese about my LLC. It mentions Form 5472 and a penalty. Is this a scam or does the IRS actually send letters in other languages?",
      author: { displayName: "hiroshi_t", avatarSeed: "unans-22-irs-sent", badge: "new-member" as const, },
      category: "cp2000",
      tags: ["IRS letter", "scam", "penalty notice"],
      postedAt: "2026-03-14T16:00:00.000Z",
      viewCount: 161,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "IRS sent me a letter in Chinese — is this legit?",
      seoDescription: "Community question: IRS sent me a letter in Chinese — is this legit?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-23",
      title: "Do I need to file anything with the state too, or just the IRS?",
      body: "Everyone talks about Form 5472 with the IRS. But does my LLC also need to file anything with the state it was formed in? My LLC is in Delaware.",
      author: { displayName: "LLC_beginner", avatarSeed: "unans-23-do-i-nee", badge: "new-member" as const, },
      category: "entity-types",
      tags: ["state filing", "Delaware", "annual report"],
      postedAt: "2026-03-17T19:00:00.000Z",
      viewCount: 648,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Do I need to file anything with the state too, or just the IRS?",
      seoDescription: "Community question: Do I need to file anything with the state too, or just the IRS?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-24",
      title: "How do I report crypto income in my LLC?",
      body: "My LLC received payments in Bitcoin and Ethereum. How do I report this on Form 5472? Is crypto considered a reportable transaction?",
      author: { displayName: "paula_brazil", avatarSeed: "unans-24-how-do-i",  },
      category: "form-5472",
      tags: ["crypto", "Bitcoin", "reportable transaction"],
      postedAt: "2026-03-14T22:00:00.000Z",
      viewCount: 198,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "How do I report crypto income in my LLC?",
      seoDescription: "Community question: How do I report crypto income in my LLC?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-25",
      title: "My doola agent set up the LLC but I never got a CP 575 — help?",
      body: "doola formed my LLC and supposedly got my EIN but I never received the CP 575 letter. They just gave me the EIN number. Is that enough or do I need the actual letter?",
      author: { displayName: "steve_nz", avatarSeed: "unans-25-my-doola", badge: "new-member" as const, },
      category: "form-ss4",
      tags: ["doola", "CP 575", "EIN", "missing letter"],
      postedAt: "2026-03-18T01:00:00.000Z",
      viewCount: 532,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "My doola agent set up the LLC but I never got a CP 575 — help?",
      seoDescription: "Community question: My doola agent set up the LLC but I never got a CP 575 — help?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-26",
      title: "Can two LLCs share the same registered agent address?",
      body: "I have two LLCs in Wyoming with the same registered agent. Is it okay for both to use the same address on their Form 1120? Or does this cause problems?",
      author: { displayName: "anon_taxpayer", avatarSeed: "unans-26-can-two-", badge: "subscriber" as const, },
      category: "form-1120",
      tags: ["registered agent", "multiple LLCs", "address"],
      postedAt: "2026-03-17T04:00:00.000Z",
      viewCount: 530,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Can two LLCs share the same registered agent address?",
      seoDescription: "Community question: Can two LLCs share the same registered agent address?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-27",
      title: "What's the difference between Form 5472 and FBAR? Do I need both?",
      body: "I keep seeing mentions of both Form 5472 and FBAR for foreign LLC owners. Are these the same thing? Do I need to file both? What's the difference?",
      author: { displayName: "rita.sg", avatarSeed: "unans-27-what-s-t", badge: "new-member" as const, },
      category: "foreign-income",
      tags: ["form 5472", "FBAR", "comparison"],
      postedAt: "2026-03-19T07:00:00.000Z",
      viewCount: 618,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "What's the difference between Form 5472 and FBAR? Do I need both?",
      seoDescription: "Community question: What's the difference between Form 5472 and FBAR? Do I need both?",
    },
    answers: [],
  },

  // =====================================================
  // Q&A: Form 5472 Part VI Attachment — Owner-Manager Relationship
  // =====================================================
  {
    question: {
      id: "q-5472-part-vi-attachment",
      isFeatured: true,
      title: "Form 5472 Part VI — do I need to attach a statement about the owner being the manager?",
      body: "My CPA added an extra attachment to my Form 5472 filing labeled 'Part VI' that says 'THE FOREIGN RELATED PARTY IS THE MEMBER MANAGER OF THE REPORTING CORPORATION.' He told me this discloses the nonmonetary relationship between me (the sole owner) and the LLC, since I'm also the manager.\n\nBut another CPA I talked to said he never adds this — he only attaches the Part V statement about the actual monetary transactions (like the setup fee and capital contributions). He says Part VI is only needed if there were actual nonmonetary exchanges of value.\n\nMy LLC was just formed this year. The only transaction was a $300 formation fee. No real business operations yet. Which CPA is right? Do I need this Part VI attachment?",
      author: {
        displayName: "Kevin W.",
        avatarSeed: "part-vi-owner-mgr-2026",
        badge: "new-member" as const,
      },
      category: "form-5472",
      tags: ["form 5472", "part VI", "nonmonetary transactions", "owner-manager", "attachment", "supporting statement", "disregarded entity"],
      postedAt: "2026-04-05T09:30:00Z",
      viewCount: 892,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 5472 Part VI Attachment: Do You Need to Disclose the Owner-Manager Relationship",
      seoDescription: "Expert guidance on whether foreign-owned U.S. disregarded entities need a Part VI attachment statement disclosing the owner-manager relationship on Form 5472. When to include it and when it's safe to skip.",
    },
    answers: [
      {
        id: "a-5472-part-vi-attachment-1",
        questionId: "",
        articleContent: {
          sections: [
            {
              heading: "What Part VI of Form 5472 actually covers",
              body: "Part VI of Form 5472 is titled 'Nonmonetary and Less Than Full Consideration Transactions Between the Reporting Corporation and the Foreign Related Party.' It is designed to capture situations where value flows between the LLC and a related foreign party without adequate monetary payment.\n\nExamples include: rent-free use of the LLC's property by the foreign owner, services provided by the owner to the LLC without compensation, use of intangible property (trademarks, patents) without a licensing fee, or any other exchange where one party provides something of value without receiving fair market consideration in return.\n\nPart VI is separate from Part V (which covers the monetary reportable transactions specific to disregarded entities, like formation fees and capital contributions)."
            },
            {
              heading: "The case for including a Part VI statement (CPA A's approach)",
              body: "The argument for adding a Part VI attachment about the owner-manager relationship is straightforward: if the sole foreign owner also serves as the member-manager of the LLC, they are arguably providing management services to the LLC without receiving a separate management fee. That could be characterized as a service rendered for less than full consideration — exactly what Part VI is designed to capture.\n\nThis approach is conservative and has zero downside. Over-disclosing to the IRS rarely causes problems, while under-disclosing can trigger the $25,000 penalty for filing a substantially incomplete Form 5472. Adding a one-sentence Part VI statement takes 30 seconds and eliminates any ambiguity about whether the filing is complete."
            },
            {
              heading: "The case for skipping Part VI (CPA B's approach)",
              body: "The counterargument is that the owner-manager relationship is a structural/legal fact about the entity, not a 'transaction.' Part VI targets actual exchanges (or non-exchanges) of value, not the mere existence of a dual role.\n\nFor a newly formed or dormant LLC with no real operations, the 'management' the owner provides is essentially nominal — signing formation documents, opening a bank account, maintaining the entity. Calling this a 'nonmonetary transaction' is a stretch when there is no business activity to manage.\n\nMany practitioners file thousands of Form 5472s for simple foreign-owned DREs without including a Part VI attachment and face no issues. The IRS has never issued specific guidance requiring disclosure of the owner-manager overlap as a standalone Part VI item."
            },
            {
              heading: "So which approach is correct?",
              body: "Neither approach is definitively wrong. The difference is in risk tolerance:\n\nIncluding the Part VI statement is more defensible. If the IRS ever examines the filing, having the disclosure shows completeness and good faith. The cost of including it is essentially zero.\n\nSkipping it is likely fine in practice for newly formed or dormant LLCs. But if the LLC has actual operations and the owner is actively managing without a management fee, omitting Part VI disclosure becomes harder to justify.\n\nThe key question is whether the owner-manager is performing services that would ordinarily be compensated in an arm's-length arrangement. For a formation-year filing with just a $300 setup fee and no operations, skipping Part VI is perfectly reasonable."
            },
            {
              heading: "When Part VI becomes more important",
              body: "Part VI matters more in these scenarios:\n\n1. The LLC has active business operations and the owner is performing management duties (marketing, sales, customer service, bookkeeping) without a management fee.\n\n2. The owner lets the LLC use personal property (equipment, vehicles, office space) without charging rent.\n\n3. The owner licenses personal intellectual property (trademarks, software, content) to the LLC without a licensing agreement.\n\n4. The LLC uses the owner's personal contacts, relationships, or reputation to generate business without compensation.\n\nIn any of these cases, including a Part VI attachment describing the nonmonetary exchange is strongly recommended."
            },
            {
              heading: "Practical recommendation for your situation",
              body: "For a newly formed LLC with only a $300 formation fee and no business operations, you do not need to amend or refile just to add a Part VI statement. The IRS is primarily interested in whether you reported the $300 transaction correctly in Part V, which you did.\n\nGoing forward, if your LLC begins active operations and you serve as the unpaid manager, consider adding the Part VI attachment in the next year's filing. It takes minimal effort and provides an extra layer of completeness.\n\nIf you want the most conservative approach from day one, our filing tool gives you the option to include a Part VI statement automatically."
            }
          ],
          keyTakeaways: [
            "Part VI of Form 5472 covers nonmonetary and less-than-full-consideration transactions — not just the owner-manager title",
            "Including a Part VI statement about the owner-manager relationship is conservative and has zero downside",
            "Skipping it is common and generally safe for newly formed or dormant LLCs with no real operations",
            "Part VI becomes more important when the LLC has active operations and the owner provides unpaid management services",
            "For a formation-year filing with just a setup fee, you do NOT need to amend to add a Part VI statement",
            "The $25,000 penalty applies to substantially incomplete filings — a missing Part VI statement for a dormant LLC is unlikely to trigger it"
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-04-06T11:00:00Z",
        sources: [
          { label: "Form 5472 Instructions — Part VI", url: "https://www.irs.gov/instructions/i5472#en_US_202412_publink100014967" },
          { label: "Form 5472 Instructions — Part V (DE Transactions)", url: "https://www.irs.gov/instructions/i5472#en_US_202412_publink100014969" },
          { label: "Treas. Reg. § 1.6038A-2(b)(6) — Nonmonetary Transactions", url: "https://www.ecfr.gov/current/title-26/chapter-I/subchapter-A/part-1/subject-group-ECFRd46e66c3e92c5c0/section-1.6038A-2" },
        ],
      },
    ],
  },

  {
    question: {
      id: "q-unans-28",
      title: "Penalty abatement for Form 5472 — has anyone succeeded?",
      body: "I got hit with the $25,000 penalty for not filing Form 5472 for 2024. I genuinely didn't know about the requirement. Has anyone successfully gotten this penalty reduced or removed? What was your approach?",
      author: { displayName: "Max F.", avatarSeed: "unans-28-penalty-", badge: "new-member" as const, },
      category: "form-5472",
      tags: ["penalty abatement", "$25000 penalty", "reasonable cause"],
      postedAt: "2026-03-18T10:00:00.000Z",
      viewCount: 133,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Penalty abatement for Form 5472 — has anyone succeeded?",
      seoDescription: "Community question: Penalty abatement for Form 5472 — has anyone succeeded?",
    },
    answers: [],
  },

  {
    question: {
      id: "q-unans-29",
      title: "Should I close my US LLC before year-end to avoid another filing?",
      body: "I'm not using my LLC anymore. If I close it before December 31, do I avoid having to file Form 5472 for this year? Or is there still a final return required?",
      author: { displayName: "delaware_newbie", avatarSeed: "unans-29-should-i", badge: "new-member" as const, },
      category: "form-5472",
      tags: ["LLC closure", "year-end", "final filing"],
      postedAt: "2026-03-17T13:00:00.000Z",
      viewCount: 174,
      answerCount: 0,
      status: "pending" as const,
      seoTitle: "Should I close my US LLC before year-end to avoid another filing?",
      seoDescription: "Community question: Should I close my US LLC before year-end to avoid another filing?",
    },
    answers: [],
  },

];

// Combine all Q&A threads from all topic files
export const SEED_THREADS: QAThread[] = [
  ...ORIGINAL_THREADS,
  ...FIRPTA_THREADS,
  ...STATE_TAX_THREADS,
  ...ECOMMERCE_THREADS,
  ...CRYPTO_THREADS,
  ...ESTATE_GIFT_THREADS,
  ...AML_THREADS,
  ...PAYROLL_THREADS,
  ...GILTI_THREADS,
  ...TRANSFER_PRICING_THREADS,
  ...EXPATRIATION_THREADS,
  ...FORMS_THREADS,
  ...IRC_THREADS,
  ...WITHHOLDING_THREADS,
  ...PENALTIES_THREADS,
  ...COUNTRY_THREADS,
  ...VISA_THREADS,
  ...TAX_PLANNING_THREADS,
  ...BANKING_THREADS,
  ...GLOBAL_TAX_THREADS,
  // Tier 1 country threads
  ...GB_TAX_THREADS,
  ...CA_TAX_THREADS,
  ...DE_TAX_THREADS,
  ...FR_TAX_THREADS,
  ...JP_TAX_THREADS,
  ...KR_TAX_THREADS,
  ...IN_TAX_THREADS,
  ...BR_TAX_THREADS,
  ...AU_TAX_THREADS,
  ...SG_TAX_THREADS,
  // Tier 2 country threads
  ...HK_TAX_THREADS,
  ...IE_TAX_THREADS,
  ...AE_TAX_THREADS,
  ...NL_TAX_THREADS,
  ...EE_TAX_THREADS,
  ...CH_TAX_THREADS,
  ...MX_TAX_THREADS,
  ...ID_TAX_THREADS,
  // Cross-border & industry
  ...NEW_CROSS_BORDER_THREADS,
  ...NEW_INDUSTRY_THREADS,
];
