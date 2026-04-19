// NL_TAX_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const NL_TAX_THREADS: QAThread[] = [
  {
    question: {
      id: "q-nl-corporate-tax",
      title: "How does corporate income tax work in the Netherlands for BVs and growing companies?",
      body: "I want the current Dutch answer, not a generic Europe summary. Please explain the corporate income tax bands, who is always expected to file, and why the return deadline matters more than some founders think when they switch from a sole proprietorship into a BV.",
      author: {
        displayName: "Daan de Vries",
        avatarSeed: "nl-daan-de-vries",
        badge: "subscriber",
      },
      category: "nl-tax",
      tags: ["Netherlands", "corporate tax", "BV", "vennootschapsbelasting"],
      postedAt: "2025-02-19T08:00:00.000Z",
      viewCount: 3485,
      answerCount: 1,
      status: "answered",
      seoTitle: "How corporate income tax works in the Netherlands for BVs",
      seoDescription: "Netherlands corporate income tax explained with the 19% and 25.8% bands, BV filing duties, and the Dutch return deadlines companies must watch.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-nl-corporate-tax",
        questionId: "q-nl-corporate-tax",
        articleContent: {
          sections: [
            {
              heading: "Dutch corporate tax starts with the rate bands, but the filing obligation comes first",
              body: `The Belastingdienst corporate tax pages make the basic scope quite clear. If you run a Dutch bv or nv, filing vennootschapsbelasting is part of the structure, not an optional extra. The administration also notes that some foundations and associations may have to file in certain circumstances, but legal forms like a bv and nv are always in the corporate-tax world.\n\nThat matters because founders often focus on the rate discussion before they have even accepted the compliance shift. Moving from a one-person business into a bv changes not only liability and governance, but also the tax-return architecture.`,
            },
            {
              heading: "The 2026 rate structure is simple on paper and less simple in planning",
              body: `Belastingdienst states that in 2026 the corporate income tax rate is 19% on taxable profit up to €200,000 and 25.8% above that amount. Those numbers are easy to quote, but the practical question is what the taxable amount really is after expenses, loss utilisation and the company's actual year-end position. A founder who reads only the headline rate can still misjudge the true corporate tax profile.\n\nThis is especially relevant for companies that expect profit to move sharply as they scale. Crossing the first band does not make the Dutch system opaque, but it does make the planning conversation more granular than "the Netherlands taxes companies at one flat rate."`,
            },
            {
              heading: "The deadline catches more companies than the rate does",
              body: `The filing page is the real operational warning. If the company's financial year matches the calendar year, the return is due by 1 June of the next calendar year. If the company has a broken financial year, the return must generally be filed within five months after the end of that book year. That sounds generous until the accounts, adviser workflow and sign-off process are all running late at once.\n\nThis answer is educational only and not tax advice. Before treating a bv as merely a liability shield, read the current Belastingdienst pages on who files, which rate band applies, and when the Dutch return must actually be submitted.`,
            },
          ],
          keyTakeaways: [
            "Dutch BVs and NVs are inside the corporate income tax filing system by default.",
            "For 2026, the Dutch corporate tax rates are 19% up to €200,000 and 25.8% above that level.",
            "The taxable amount matters more than the headline rate alone.",
            "Calendar-year returns are generally due by 1 June, while broken-year returns are generally due within five months after year end.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-02-21T10:00:00.000Z",
        sources: [
          {
            label: "Vennootschapsbelasting",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/vennootschapsbelasting/",
          },
          {
            label: "Tarieven voor de vennootschapsbelasting",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/vennootschapsbelasting/tarieven_vennootschapsbelasting?post_id=noID",
          },
          {
            label: "Aangifte vennootschapsbelasting doen",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/vennootschapsbelasting/aangifte-vennootschapsbelasting-doen/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-nl-income-tax-bands",
      title: "What are the current Dutch income tax bands, and why are the box rules easy to oversimplify?",
      body: "I need the current Dutch income tax answer without the usual one-line summary. Please explain the 2026 box 1 bands, why the Dutch system talks about boxes instead of only brackets, and why a worker or sole proprietor should not assume the headline rate is the same thing as the final bill after credits and allowances.",
      author: {
        displayName: "Sanne Jansen",
        avatarSeed: "nl-sanne-jansen",
        badge: "new-member",
      },
      category: "nl-tax",
      tags: ["Netherlands", "income tax", "box 1", "tax rates"],
      postedAt: "2025-03-25T08:00:00.000Z",
      viewCount: 3240,
      answerCount: 1,
      status: "answered",
      seoTitle: "Current Dutch income tax bands explained for 2026",
      seoDescription: "Netherlands income tax explained for 2026 with box 1 rates, the Dutch box system, and why credits and allowances still change the final bill.",
    },
    answers: [
      {
        id: "a-nl-income-tax-bands",
        questionId: "q-nl-income-tax-bands",
        articleContent: {
          sections: [
            {
              heading: "Dutch personal tax starts with boxes, not just with brackets",
              body: `The Belastingdienst income tax page is a helpful corrective to oversimplified articles because it begins by separating the system into kinds of income. Income from work and home falls in box 1, while assets are addressed separately in box 3. That means the Dutch answer is never only "what bracket am I in?" The tax result depends on which box the income belongs to in the first place.\n\nThat distinction matters for anyone reading comparisons with other countries. The Netherlands is not unusual because it has tax bands; it is unusual because those bands sit inside a broader box-based framework that changes how income is classified before rates are applied.`,
            },
            {
              heading: "The current 2026 box 1 bands are straightforward, but they are not the whole answer",
              body: `Belastingdienst states that in 2026, for someone who has not yet reached AOW age, box 1 income is taxed at 35.75% up to €38,883, 37.56% from €38,883 to €78,426, and 49.50% above that. The same page also notes that people who have reached AOW age face lower rates in the relevant bands. Those are the percentages people tend to remember.\n\nBut the page also reminds you that deductions, debts and tax credits can still influence the final position. So quoting the rate band without the rest of the return is useful for orientation, but not enough for an actual budget or filing decision.`,
            },
            {
              heading: "The final Dutch bill is shaped by more than the top line on your payslip",
              body: `Belastingdienst explicitly says it cannot tell you the final income tax outcome "just like that" because the result depends on more than gross earnings. That is the practical point many taxpayers miss. Sole proprietors, employees and mixed-income households all need to look past the headline percentage if they want a realistic view of the tax year.\n\nThis answer is educational only and not tax advice. Before making salary or self-employment decisions, use the live Belastingdienst rates and filing guidance so the box classification, age status, deductions and deadlines are all read together.`,
            },
          ],
          keyTakeaways: [
            "Dutch personal taxation is organised by boxes, not just by brackets.",
            "In 2026, box 1 rates for people below AOW age are 35.75%, 37.56% and 49.50% across the stated income bands.",
            "AOW status can change the applicable box 1 rates.",
            "The final liability still depends on deductions, credits and the broader return position.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-03-27T10:00:00.000Z",
        sources: [
          {
            label: "Hoeveel inkomstenbelasting moet ik betalen?",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/hoeveel-inkomstenbelasting-betalen",
          },
          {
            label: "Definitieve aanslag inkomstenbelasting",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aanslag/definitieve_aanslag",
          },
          {
            label: "Aanvraag uitstel aangifte inkomstenbelasting",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/programmas_en_formulieren/aanvraag-uitstel-aangifte-inkomstenbelasting",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-nl-vat-rates-thresholds",
      title: "What VAT rates, small-business thresholds and filing rules matter in the Netherlands now?",
      body: "I want the Dutch VAT answer in practical terms. Please explain the 21%, 9% and 0% rates, the small-entrepreneur registration threshold that now matters for some starters, and why Dutch VAT administration still becomes very real as soon as you cross into normal filing territory.",
      author: {
        displayName: "Milan Bakker",
        avatarSeed: "nl-milan-bakker",
        badge: "subscriber",
      },
      category: "vat-gst",
      tags: ["Netherlands", "VAT", "btw", "small business"],
      postedAt: "2025-05-14T08:00:00.000Z",
      viewCount: 3610,
      answerCount: 1,
      status: "answered",
      seoTitle: "Netherlands VAT rates and small business thresholds explained",
      seoDescription: "Netherlands VAT explained with 21%, 9% and 0% rates, the small-entrepreneur registration threshold, KOR, and Dutch filing rules.",
    },
    answers: [
      {
        id: "a-nl-vat-rates-thresholds",
        questionId: "q-nl-vat-rates-thresholds",
        articleContent: {
          sections: [
            {
              heading: "The Dutch VAT rate story is simple until your business model is not",
              body: `Belastingdienst's VAT guidance still starts with three familiar numbers. The general rate is 21%, some goods and services fall under the reduced 9% rate, and in defined situations a 0% rate can apply, especially around certain international transactions. That makes the Dutch headline easier to remember than the detailed application.\n\nBut the hard part is not remembering the three rates. It is working out which supplies actually belong in which bucket, especially if a business sells mixed products, cross-border services or bundles that combine items with different treatment.`,
            },
            {
              heading: "For very small Dutch businesses, the key threshold may be the registration threshold before KOR",
              body: `The Belastingdienst page on the registratiedrempel for kleine ondernemers adds an important layer that many older explainers miss. If a small entrepreneur uses this registration threshold, there is no need to register as a VAT entrepreneur until turnover exceeds €2,200 in a calendar year. Once turnover rises above that amount, the entrepreneur must register from that point and begin applying the normal VAT rules.\n\nThat threshold is easy to confuse with the KOR, but Belastingdienst separately notes that if annual turnover does not exceed €20,000, the entrepreneur may choose the small-business scheme. In practice, that means Dutch starters need to distinguish between the threshold that delays entry into the VAT system and the broader KOR framework that may apply once they are in view of VAT at all.`,
            },
            {
              heading: "The filing cycle becomes real very quickly after registration",
              body: `Belastingdienst also makes clear that once you are in the normal VAT system, payment must reach the tax authority within one month after the end of the filing period. If registration happened late because the entrepreneur also registered late with KVK, the first Dutch VAT periods can even be handled on paper. So the administrative shift can feel abrupt: one day the business is tiny, and the next day it is dealing with return periods, invoice rules and payment deadlines.\n\nThis answer is educational only and not tax advice. Before assuming Dutch VAT is easy because the rate table looks short, check the live Belastingdienst pages on rates, the small-entrepreneur threshold and payment timing against the way your business will actually trade.`,
            },
          ],
          keyTakeaways: [
            "The main Dutch VAT rates are 21%, 9% and 0%, depending on the supply.",
            "Small entrepreneurs can use a registration threshold that keeps them out of VAT registration until turnover exceeds €2,200 in a calendar year.",
            "If annual turnover is not more than €20,000, the KOR may still be relevant.",
            "Once registered, Dutch VAT payment is generally due within one month after the end of the filing period.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-05-16T10:00:00.000Z",
        sources: [
          {
            label: "Btw (omzetbelasting)",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/btw",
          },
          {
            label: "Registratiedrempel voor kleine ondernemers",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/kleineondernemersregeling/registratiedrempel-voor-kleine-ondernemers",
          },
          {
            label: "Btw op tijd betalen",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_aangifte_doen_en_betalen/btw_betalen/op_tijd_betalen?projectid=d1c89b08-08bf-4e5e-b3ed-0123d0899cfa",
          },
          {
            label: "Veelgestelde vragen over inschrijven",
            url: "https://www.kvk.nl/hulp-en-contact/hulp-bij-inschrijven/",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-nl-deadlines-penalties",
      title: "What Dutch tax deadlines and penalties matter most for income tax, corporate tax and VAT?",
      body: "I need the operational Dutch answer, not a vague compliance warning. Please explain the usual income tax deadline, how extension works, the corporate tax return timing for calendar and broken years, and the kinds of late-filing or late-payment penalties entrepreneurs actually risk in the Netherlands.",
      author: {
        displayName: "Eva Smit",
        avatarSeed: "nl-eva-smit",
      },
      category: "compliance",
      tags: ["Netherlands", "tax deadlines", "penalties", "VAT"],
      postedAt: "2025-07-11T08:00:00.000Z",
      viewCount: 2935,
      answerCount: 1,
      status: "answered",
      seoTitle: "Dutch tax deadlines and penalties for entrepreneurs explained",
      seoDescription: "Netherlands tax deadlines explained for income tax, corporate tax and VAT, including extensions, late-filing penalties and payment fines.",
    },
    answers: [
      {
        id: "a-nl-deadlines-penalties",
        questionId: "q-nl-deadlines-penalties",
        articleContent: {
          sections: [
            {
              heading: "The Dutch personal deadline is still built around 1 May, unless you secure extra time",
              body: `Belastingdienst's income tax guidance uses a very clear example: for a normal annual filing cycle, the income tax return is due by 1 May of the following year. If a taxpayer receives four months of extension, the return can be due by 1 September instead. That structure is simple, but only if the taxpayer asks for extension before the original deadline.\n\nThe practical issue is that many entrepreneurs know the 1 May date but treat it as flexible by default. It is not. Dutch extension is something you request on time, not something you assume after the deadline has already passed.`,
            },
            {
              heading: "Corporate tax and VAT run on different clocks",
              body: `For vennootschapsbelasting, Belastingdienst says calendar-year companies must file by 1 June of the next year, while broken-year companies generally file within five months after the end of the financial year. VAT is faster and more repetitive. Payment must be received within one month after the end of the VAT filing period, and late KVK registration can even turn the first returns into paper filings.\n\nThat is why Dutch businesses should not think in terms of one annual tax deadline. In practice there are several clocks running at once, and the most painful one may be the one that arrives most often.`,
            },
            {
              heading: "Dutch penalties are often small enough to be ignored once, and large enough to become a pattern",
              body: `Belastingdienst's penalty page shows how quickly lateness becomes more than a nuisance. Not filing income tax on time can trigger a verzuimboete of €469, rising to €6,709 for repeated failures. For corporate tax, the late-filing penalty is €3,354 and can also rise to €6,709 for repeated non-compliance. Late payment of an assessment can trigger a 5% payment penalty, with a minimum of €50 and a maximum of €6,709. For VAT, there is a seven-calendar-day grace period after the due date, but after that a missed return can still lead to a penalty.\n\nThis answer is educational only and not tax advice. The safest Dutch compliance habit is to treat personal tax, corporate tax and VAT as separate deadline systems and build a calendar for each of them rather than relying on one annual reminder.`,
            },
          ],
          keyTakeaways: [
            "The standard Dutch income tax return deadline is 1 May of the following year.",
            "If you obtain extension on time, income tax filing can move later, commonly by four months in the first extension request.",
            "Dutch corporate tax and VAT operate on different filing clocks, so businesses need separate deadline tracking.",
            "Late filing and late payment can trigger real penalties for income tax, corporate tax and VAT.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-07-13T10:00:00.000Z",
        sources: [
          {
            label: "Definitieve aanslag inkomstenbelasting",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aanslag/definitieve_aanslag",
          },
          {
            label: "Aanvraag uitstel aangifte inkomstenbelasting",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/programmas_en_formulieren/aanvraag-uitstel-aangifte-inkomstenbelasting",
          },
          {
            label: "Aangifte vennootschapsbelasting doen",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/vennootschapsbelasting/aangifte-vennootschapsbelasting-doen/",
          },
          {
            label: "Btw op tijd betalen",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_aangifte_doen_en_betalen/btw_betalen/op_tijd_betalen?projectid=d1c89b08-08bf-4e5e-b3ed-0123d0899cfa",
          },
          {
            label: "Boete",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/standaard_functies/prive/contact/rechten_en_plichten_bij_de_belastingdienst/boete",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-nl-start-business",
      title: "How should a founder choose between an eenmanszaak and a BV when starting in the Netherlands?",
      body: "I want the practical Dutch startup answer, not a generic checklist. Please explain how an eenmanszaak and a BV differ in liability and administration, when KVK registration happens, and how the handoff to the Belastingdienst fits into the first tax steps after the business starts.",
      author: {
        displayName: "Jesse Visser",
        avatarSeed: "nl-jesse-visser",
        badge: "subscriber",
      },
      category: "entity-setup",
      tags: ["Netherlands", "start a business", "eenmanszaak", "BV"],
      postedAt: "2026-01-12T08:00:00.000Z",
      viewCount: 3165,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to choose an eenmanszaak or BV in the Netherlands",
      seoDescription: "How to start a business in the Netherlands, comparing an eenmanszaak and BV, KVK registration, and the first Dutch tax steps after launch.",
    },
    answers: [
      {
        id: "a-nl-start-business",
        questionId: "q-nl-start-business",
        articleContent: {
          sections: [
            {
              heading: "The Dutch choice is about risk and admin as much as it is about tax",
              body: `KVK's legal-form guidance makes the contrast vivid. An eenmanszaak is fast to start and has one owner, but the owner is personally liable for business debts. A bv separates private and business assets more clearly, but it is more formal to set up and brings more administrative requirements, including annual accounts. That means the legal form choice should start with risk, ownership and ambition, not only with tax optimisation.\n\nThis is where founders often drift into bad framing. They ask which form is "cheaper" before deciding whether they need investors, liability protection or a structure that can support long-term growth more cleanly.`,
            },
            {
              heading: "KVK registration is the practical gateway, and timing still matters",
              body: `KVK's help pages say you generally register a business in the week before or after the start of business activities. Once you register as an entrepreneur, KVK passes your details to the Belastingdienst. If you are liable for VAT, the tax authority then sends your omzetbelastingnummer and btw-id after the start date. In other words, the Dutch setup flow is connected, but the founder still needs to understand each step.\n\nThe timing point matters because late registration can create downstream issues. Belastingdienst's startup VAT page shows that if filing periods have already passed by the time the entrepreneur registers, the first VAT returns may need to be done on paper.`,
            },
            {
              heading: "A calm Dutch launch comes from matching form, registration and tax reality",
              body: `The cleanest start usually comes from deciding first how the business will operate, then choosing the right legal form, and then making sure KVK registration and Belastingdienst follow-through happen on time. A founder who chooses a bv for limited liability but forgets the extra administrative burden is just as exposed as a founder who chooses an eenmanszaak without thinking through private liability.\n\nThis answer is educational only and not tax advice. Before launching, read the current KVK guidance on legal form and registration together with the Belastingdienst startup VAT material so the first Dutch filing steps match the structure you actually chose.`,
            },
          ],
          keyTakeaways: [
            "An eenmanszaak is simpler to start, but the owner is personally liable for business debts.",
            "A BV offers stronger separation between business and private assets, but comes with more formal administration.",
            "KVK registration is the gateway step and your data is then passed to the Belastingdienst.",
            "Registering late can complicate the first Dutch VAT filing periods.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-14T10:00:00.000Z",
        sources: [
          {
            label: "Een eenmanszaak of bv als rechtsvorm kiezen",
            url: "https://www.kvk.nl/starten/een-eenmanszaak-of-bv-als-rechtsvorm-kiezen/",
          },
          {
            label: "Veelgestelde vragen over inschrijven",
            url: "https://www.kvk.nl/hulp-en-contact/hulp-bij-inschrijven/",
          },
          {
            label: "Moet je je bedrijf inschrijven bij KVK?",
            url: "https://www.kvk.nl/starten/moet-ik-mijn-bedrijf-inschrijven-bij-kvk/",
          },
          {
            label: "Ik ben een startende ondernemer - moet ik mijn 1e btw-aangifte op papier doen?",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/startende-ondernemer/content/btw-aangifte-startende-ondernemer",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-nl-definitive-assessment-meaning",
      title: "Why can the Dutch definitive income tax assessment still differ from what you expected after filing?",
      body: "I want the practical Belastingdienst answer, not a generic statement that the tax office checks returns. Please explain why a final assessment can still change the picture, why a prior provisional expectation is not the same thing as the definitive result, and why taxpayers should read the assessment instead of assuming it is just a formality.",
      author: {
        displayName: "Sanne de Boer",
        avatarSeed: "nl-sanne-de-boer",
        badge: "new-member",
      },
      category: "nl-tax",
      tags: ["Netherlands", "definitive assessment", "income tax", "Belastingdienst"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 2221,
      answerCount: 1,
      status: "answered",
      seoTitle: "Dutch definitive income tax assessment explained",
      seoDescription: "Dutch definitive income tax assessment explained, including why it can differ from expectations and why the final notice still needs careful review.",
    },
    answers: [
      {
        id: "a-nl-definitive-assessment-meaning",
        questionId: "q-nl-definitive-assessment-meaning",
        articleContent: {
          sections: [
            {
              heading: "The definitive assessment is the tax office's settled view, not just a polite confirmation email",
              body: `Belastingdienst gives the definitive income tax assessment its own guidance page because the final notice is a real legal tax outcome, not a ceremonial repeat of the submitted return. That matters because taxpayers often treat the filing itself as the final event and the assessment as mere admin afterwards. In practice, the assessment is the point where the authorities crystallise what they say is due or refundable.`,
            },
            {
              heading: "A provisional expectation and a definitive assessment do not serve the same function",
              body: `The Dutch system is structured to leave room between what the taxpayer expects and what the final notice determines. That is why the definitive assessment deserves reading rather than autopilot. A prior expectation may have rested on preliminary data, optimistic assumptions or a provisional estimate, while the final notice is the formal result the taxpayer has to react to if something is wrong.`,
            },
            {
              heading: "The practical discipline is to treat the final notice as a document to test, not as something to archive unopened",
              body: `This is especially important when a return involved multiple income boxes, deductions or late adjustments. The safest habit is to compare the final notice with the actual filing position and understand any difference before the response window drifts away. This answer is educational only and not tax advice. In the Netherlands, the definitive assessment is the point where passive filing should end and deliberate checking should begin.`,
            },
          ],
          keyTakeaways: [
            "The definitive assessment is the formal tax outcome, not just a routine confirmation.",
            "It can differ from what the taxpayer expected at filing or under a provisional view.",
            "Taxpayers should compare the assessment with their actual filing position.",
            "Reading the final notice carefully is part of Dutch tax compliance, not optional admin.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
        sources: [
          {
            label: "Definitieve aanslag inkomstenbelasting",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aanslag/definitieve_aanslag",
          },
          {
            label: "Hoeveel inkomstenbelasting moet ik betalen?",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/hoeveel-inkomstenbelasting-betalen",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-nl-income-tax-extension-request",
      title: "How does Dutch filing extension for income tax actually work, and why is waiting until after 1 May the wrong habit?",
      body: "I want the practical answer, not a vague note that extension exists. Please explain when online extension is still available, what date it can push the filing to, and why taxpayers should not confuse extension to file with a cost-free pause on the rest of the tax process.",
      author: {
        displayName: "Lotte Meijer",
        avatarSeed: "nl-lotte-meijer",
        badge: "subscriber",
      },
      category: "compliance",
      tags: ["Netherlands", "income tax", "extension", "filing deadline"],
      postedAt: "2026-04-15T08:00:00.000Z",
      viewCount: 2089,
      answerCount: 1,
      status: "answered",
      seoTitle: "Dutch income tax filing extension explained",
      seoDescription: "Dutch income tax filing extension explained, including the request timing before 1 May, the extension to 1 September, and the interest risk.",
    },
    answers: [
      {
        id: "a-nl-income-tax-extension-request",
        questionId: "q-nl-income-tax-extension-request",
        articleContent: {
          sections: [
            {
              heading: "Belastingdienst does allow extension, but it expects the request before the normal deadline bites",
              body: `The official extension form page says taxpayers can request extension online up to 1 May and that this online route gives extension until 1 September. The same page also says the request has to be made before the return was due. So the Dutch extension process is real, but it is designed as a pre-deadline action rather than as a rescue tool after procrastination has already hardened into lateness.`,
            },
            {
              heading: "Extension changes the filing date, not the need to keep reading the tax position carefully",
              body: `Belastingdienst also warns on the extension page that taxpayers who receive extension will usually still face tax interest. That is the point many people miss when they hear only the word "uitstel." The system is giving more time to file, not promising that delay is financially neutral or that the wider tax process has paused in a costless way.`,
            },
            {
              heading: "The practical lesson is to use extension deliberately, not as a substitute for planning",
              body: `Extension can be useful where records are incomplete or the tax position still needs support, but the good use of the tool is early and deliberate. This answer is educational only and not tax advice. In the Netherlands, the clean habit is to decide before 1 May whether the return can be filed properly, and if not, request extension in time instead of gambling on a late explanation later.`,
            },
          ],
          keyTakeaways: [
            "Dutch income-tax extension can generally be requested online up to 1 May.",
            "The online request can give extension until 1 September.",
            "The request must be made before the normal filing due date passes.",
            "Extension can still leave the taxpayer exposed to tax interest.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-17T10:00:00.000Z",
        sources: [
          {
            label: "Aanvraag uitstel aangifte inkomstenbelasting",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/programmas_en_formulieren/aanvraag-uitstel-aangifte-inkomstenbelasting",
          },
          {
            label: "Boete",
            url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/standaard_functies/prive/contact/rechten_en_plichten_bij_de_belastingdienst/boete",
          },
        ],
      },
    ],
  },
];
