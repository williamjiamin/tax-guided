// ID_TAX_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const ID_TAX_THREADS: QAThread[] = [
  {
    question: {
      id: "q-id-corporate-tax",
      title: "How does corporate income tax work in Indonesia now, and when does the 22% headline stop being the whole story?",
      body: "I want the real Indonesia answer, not a one-line rate card. Please explain the current 22% corporate income tax rate, why Article 25 installments mean companies live with tax every month, and when the small-company reduction actually matters instead of being used as a generic startup talking point.",
      author: {
        displayName: "Rizky Pratama",
        avatarSeed: "id-rizky-pratama",
        badge: "subscriber",
      },
      category: "id-tax",
      tags: ["Indonesia", "corporate tax", "PPh Badan", "Article 25"],
      postedAt: "2025-11-18T08:00:00.000Z",
      viewCount: 3340,
      answerCount: 1,
      status: "answered",
      seoTitle: "How Indonesia corporate tax works with 22% PPh Badan",
      seoDescription: "Indonesia corporate tax explained with the 22% rate, Article 25 monthly installments, the 30 April filing deadline, and SME relief details.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-id-corporate-tax",
        questionId: "q-id-corporate-tax",
        articleContent: {
          sections: [
            {
              heading: "The current Indonesian corporate headline is 22%, but the tax system is built around taxable income rather than a flat levy on turnover",
              body: `The Directorate General of Taxes is clear on the main rate: resident corporate taxpayers and permanent establishments are taxed at 22%. That is the starting point. The same official corporate-calculation page also shows the logic beneath the headline: a company computes taxable income after identifying tax objects, deducting deductible costs, and carrying losses forward where the law allows. So the rate is simple, but the tax base still needs real work.\n\nThat matters because Indonesia is often described as if the company answer ends at '22%'. It does not. The compliance quality of the books still determines whether that 22% figure lands on a clean taxable base or on a messy reconstruction after the fact.`,
            },
            {
              heading: "For many companies, the system feels monthly because Article 25 installments keep tax live throughout the year",
              body: `The DGT's Article 25 installment guidance explains the practical rhythm: taxpayers outside the final-tax carve-outs generally make monthly Article 25 installments, and those installments must be paid no later than the 15th day of the month immediately following the end of the tax period. In other words, corporate income tax in Indonesia is not something that suddenly appears only at year-end.\n\nThis is why founders who focus only on the annual return usually underestimate the operational burden. Tax in Indonesia sits close to cash flow, because monthly installments are part of the architecture, not a side note.`,
            },
            {
              heading: "The small-company facility is real, but it is narrower than marketing copy usually suggests",
              body: `The DGT corporate-calculation page also explains the reduction facility for domestic corporate taxpayers with gross income of up to Rp50 billion. The facility is a 50% reduction against the normal rate, but only for the portion of taxable income calculated from up to Rp4.8 billion of gross income. That is more nuanced than the phrase 'SMEs get half tax'.\n\nThe annual return deadline still matters too. The DGT due-date page says the annual corporate return is due no later than four months after year-end, which is 30 April for a calendar-year taxpayer. This answer is educational only and not tax advice. For Indonesia, the best framing is 22% as the headline, Article 25 as the operating rhythm, and the Rp50 billion facility as a targeted relief rather than a universal startup discount.`,
            },
          ],
          keyTakeaways: [
            "Indonesia's standard corporate income tax rate is 22% for resident corporate taxpayers and permanent establishments.",
            "Article 25 monthly installments make corporate tax a live year-round obligation.",
            "Those Article 25 installments are generally paid by the 15th day of the following month.",
            "The SME relief is limited: the 50% rate reduction applies only to taxable income derived from up to Rp4.8 billion of gross income within the Rp50 billion gross-income threshold.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-11-20T10:00:00.000Z",
        sources: [
          {
            label: "Income Tax Calculation Mechanism Entity",
            url: "https://pajak.go.id/en/income-tax-calculation-mechanism-entity",
          },
          {
            label: "Calculation of Article 25 Income Tax Installment",
            url: "https://pajak.go.id/en/calculation-article-25-income-tax-installment",
          },
          {
            label: "Due Date for Tax Return Filing",
            url: "https://www.pajak.go.id/en/due-date-tax-return-filing",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-id-income-tax-rate",
      title: "What personal income tax rate applies in Indonesia now, and why are older bracket summaries often wrong?",
      body: "I need the current Indonesian individual-tax answer, not an old explainer. Please explain the live Article 17 resident brackets, why the 35% top rate does not mean everyone faces 35%, and how the March annual return deadline fits into the actual personal-tax workflow.",
      author: {
        displayName: "Nadia Putri",
        avatarSeed: "id-nadia-putri",
        badge: "new-member",
      },
      category: "id-tax",
      tags: ["Indonesia", "personal tax", "Article 17", "PPh Orang Pribadi"],
      postedAt: "2025-12-09T08:00:00.000Z",
      viewCount: 3090,
      answerCount: 1,
      status: "answered",
      seoTitle: "Current Indonesia personal income tax rates explained",
      seoDescription: "Indonesia personal tax explained with the current Article 17 brackets from 5% to 35% and the 31 March annual filing deadline.",
    },
    answers: [
      {
        id: "a-id-income-tax-rate",
        questionId: "q-id-income-tax-rate",
        articleContent: {
          sections: [
            {
              heading: "The current resident-individual brackets in Indonesia run from 5% to 35%",
              body: `The safest official source here is the current compilation of Indonesia's tax laws, because some older explainer pages on the tax website still reflect pre-HPP brackets. The current Article 17 table says resident individuals are taxed at 5% up to Rp60 million, 15% for the next layer up to Rp250 million, 25% up to Rp500 million, 30% up to Rp5 billion, and 35% above Rp5 billion.\n\nThat is the practical answer taxpayers need in 2026. The top rate exists, but it only applies to the top slice above Rp5 billion. So saying 'Indonesia personal tax is 35%' is the same kind of half-truth that confuses people everywhere else.`,
            },
            {
              heading: "The real personal-tax question is about layers, not one number",
              body: `A progressive system changes the conversation. The point is not merely what the highest rate is, but how much income falls into each layer and what annual calculation emerges after the personal non-taxable amount and the year's withholding are accounted for. That is why practical Indonesian tax planning still starts from facts and records, not from memorising the top bracket.\n\nThis matters especially for people with mixed income streams. Once a taxpayer has salary plus freelance income, or domestic income plus foreign-source questions, the gap between a slogan and an actual annual computation becomes very obvious.`,
            },
            {
              heading: "The filing calendar still matters because the annual return closes the personal-tax picture",
              body: `The DGT due-date page says the annual individual tax return is due no later than three months following the end of the tax year, which means 31 March for a calendar-year taxpayer. So for 2025 income, the current annual deadline is 31 March 2026.\n\nThis answer is educational only and not tax advice. In Indonesia, the clean way to think about personal income tax is as a progressive Article 17 calculation that settles through the annual return, not as a single rate attached to your job title.`,
            },
          ],
          keyTakeaways: [
            "Indonesia's current resident-individual income tax brackets run from 5% up to 35%.",
            "The 35% rate only applies to taxable income above Rp5 billion, not to all income.",
            "Older summaries can be outdated, so the current Article 17 table matters.",
            "For calendar-year taxpayers, the annual individual return is due by 31 March of the following year.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-12-11T10:00:00.000Z",
        sources: [
          {
            label: "Compilation Into Single Document Of Taxation Laws",
            url: "https://pajak.go.id/sites/default/files/2022-04/Compilation%20Into%20Single%20Document%20Of%20Taxation%20Laws.pdf",
          },
          {
            label: "Due Date for Tax Return Filing",
            url: "https://www.pajak.go.id/en/due-date-tax-return-filing",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-id-vat-rules",
      title: "What VAT rate really applies in Indonesia now, and why do so many people say 12% when ordinary transactions still feel like 11%?",
      body: "I want the practical Indonesian VAT answer for 2026. Please explain the post-2025 position properly, including the formal 12% rate, the 11/12 tax-base mechanism for non-luxury goods and services, and the monthly filing deadline because that is where the compliance burden shows up.",
      author: {
        displayName: "Bagus Santoso",
        avatarSeed: "id-bagus-santoso",
        badge: "subscriber",
      },
      category: "id-tax",
      tags: ["Indonesia", "VAT", "PPN", "PKP"],
      postedAt: "2026-01-08T08:00:00.000Z",
      viewCount: 3715,
      answerCount: 1,
      status: "answered",
      seoTitle: "Indonesia VAT after 2025 explained for 2026",
      seoDescription: "Indonesia VAT explained with the formal 12% rule, the effective 11% treatment for ordinary non-luxury supplies, and monthly filing timing.",
    },
    answers: [
      {
        id: "a-id-vat-rules",
        questionId: "q-id-vat-rules",
        articleContent: {
          sections: [
            {
              heading: "The clean official answer is that Indonesia moved to a 12% VAT framework from 2025",
              body: `The DGT's 2025 VAT guidance says the government adjusted the VAT rate to 12% from 1 January 2025. That is the formal headline. If you stop there, though, you will misunderstand how many ordinary transactions are actually being handled in practice.\n\nThe same official materials explain that the government did not want the 2025 adjustment to hit non-luxury goods and services in the same way as luxury supplies. That is where the '11 versus 12' confusion starts.`,
            },
            {
              heading: "For non-luxury supplies, the 11/12 tax-base mechanism keeps the practical burden at 11%",
              body: `The DGT announcement on PMK-11/2025 explains that the 12% rate is applied using a special tax-base mechanism of 11/12 for many non-luxury transactions. A separate DGT explanation from early 2025 says this plainly: the 12% rate applies, but for non-luxury goods and services the other-value calculation neutralises the result so the practical burden remains 11%. By contrast, luxury goods and services are the category where the full 12% burden is meant to bite.\n\nThat means both sides of the online debate are partially right. The legal framework says 12%. The business experience for ordinary non-luxury transactions often still looks like 11%.`,
            },
            {
              heading: "VAT becomes a real operating issue because filing stays monthly",
              body: `Indonesia's filing timetable is not subtle. The DGT due-date guidance says VAT returns are due no later than the end of the month immediately following the end of the tax period, and the periodic VAT-return page says that deadline applies whether or not the VAT enterprise made any transaction. So once you are in the VAT system, a quiet month is still a reporting month.\n\nThis answer is educational only and not tax advice. The safest Indonesian VAT habit in 2026 is to separate three questions clearly: what the formal rate is, whether the 11/12 mechanism applies to the supply, and whether your monthly reporting workflow is strong enough to avoid mistakes.`,
            },
          ],
          keyTakeaways: [
            "Indonesia's VAT framework moved to a 12% rate from 1 January 2025.",
            "For many non-luxury goods and services, the 11/12 tax-base mechanism keeps the practical burden at 11%.",
            "Luxury supplies are where the full 12% burden is intended to apply.",
            "Periodic VAT returns are generally due by the end of the month following the tax period, even in a month with no transactions.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-10T10:00:00.000Z",
        sources: [
          {
            label: "Pemerintah Terbitkan Aturan DPP Nilai Lain dan Besaran Tertentu PPN",
            url: "https://www.pajak.go.id/index.php/en/node/114038",
          },
          {
            label: "Penyesuaian Tarif PPN, Pajak Sidrap Jelaskan Perhitungannya",
            url: "https://www.pajak.go.id/en/node/113886",
          },
          {
            label: "Due Date for Tax Return Filing",
            url: "https://www.pajak.go.id/en/due-date-tax-return-filing",
          },
          {
            label: "Periodic Value-Added Tax Return Filing",
            url: "https://stats.pajak.go.id/en/periodic-value-added-tax-return-filing",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-id-tax-deadlines",
      title: "What tax deadlines matter most in Indonesia for individuals, companies and monthly taxes?",
      body: "I need the operational Indonesian answer, not a generic 'file on time' reminder. Please explain the 31 March and 30 April annual deadlines, how monthly income tax and VAT deadlines differ, and why businesses should separate payment deadlines from filing deadlines instead of treating them as the same thing.",
      author: {
        displayName: "Dewi Lestari",
        avatarSeed: "id-dewi-lestari",
        badge: "new-member",
      },
      category: "id-tax",
      tags: ["Indonesia", "tax deadlines", "Article 25", "VAT"],
      postedAt: "2026-02-06T08:00:00.000Z",
      viewCount: 2950,
      answerCount: 1,
      status: "answered",
      seoTitle: "Indonesia tax deadlines for individuals companies and monthly taxes",
      seoDescription: "Indonesia tax deadlines explained with the 31 March and 30 April annual filings, monthly Article 25 payments, and VAT month-end returns.",
    },
    answers: [
      {
        id: "a-id-tax-deadlines",
        questionId: "q-id-tax-deadlines",
        articleContent: {
          sections: [
            {
              heading: "The annual deadlines are straightforward if you separate individuals from companies",
              body: `The DGT due-date page lays out the core annual calendar very clearly. The annual individual return is due no later than three months after year-end, which means 31 March for a calendar-year taxpayer. The annual corporate return is due no later than four months after year-end, which means 30 April.\n\nThat separation is simple but important. A lot of deadline confusion comes from people carrying the individual date into company work or assuming one annual deadline covers every taxpayer.`,
            },
            {
              heading: "Indonesia also separates monthly payment timing from monthly filing timing",
              body: `This is the part businesses most often blur together. The DGT's Article 25 guidance says monthly Article 25 installments must be paid by the 15th day of the following month. But the DGT due-date page says periodic Article 25 income tax returns are due by the 20th day following the end of the tax period. Those are not the same deadline.\n\nOnce you add staff withholding and other periodic taxes, the calendar becomes even more layered. Treating 'monthly tax' as one single date is how avoidable late-compliance problems begin.`,
            },
            {
              heading: "VAT has its own month-end rhythm and should be managed as a separate compliance stream",
              body: `The DGT says VAT returns are due no later than the end of the month immediately following the tax period, and the periodic VAT-return guidance adds that this applies whether or not there were transactions. So Indonesia effectively runs different clocks at the same time: annual returns, monthly income-tax payments, periodic income-tax filings, and month-end VAT reporting.\n\nThis answer is educational only and not tax advice. The practical move is to keep an Indonesia tax calendar with separate lines for 15th, 20th, month-end, 31 March and 30 April rather than trusting memory.`,
            },
          ],
          keyTakeaways: [
            "For calendar-year taxpayers, annual individual returns are due by 31 March and annual corporate returns by 30 April.",
            "Article 25 monthly installments are generally paid by the 15th of the following month.",
            "Periodic Article 25 income tax returns are generally due by the 20th of the following month.",
            "Periodic VAT returns are generally due by the end of the following month, even if the period is nil.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-02-08T10:00:00.000Z",
        sources: [
          {
            label: "Due Date for Tax Return Filing",
            url: "https://www.pajak.go.id/en/due-date-tax-return-filing",
          },
          {
            label: "Calculation of Article 25 Income Tax Installment",
            url: "https://pajak.go.id/en/calculation-article-25-income-tax-installment",
          },
          {
            label: "Periodic Value-Added Tax Return Filing",
            url: "https://stats.pajak.go.id/en/periodic-value-added-tax-return-filing",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-id-start-business",
      title: "How do you start a business in Indonesia now, and why is getting an NIB only one part of the setup?",
      body: "I want the practical Indonesian setup answer, not a generic investment pitch. Please explain how OSS and the NIB fit into risk-based business licensing, why founders still need to think about tax registration at the same time, and why 'I already have an NIB' is not the same thing as saying every legal and tax setup step is finished.",
      author: {
        displayName: "Andi Wijaya",
        avatarSeed: "id-andi-wijaya",
        badge: "subscriber",
      },
      category: "entity-setup",
      tags: ["Indonesia", "start a business", "OSS", "NIB", "NPWP"],
      postedAt: "2026-02-24T08:00:00.000Z",
      viewCount: 3415,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to start a business in Indonesia with OSS NIB and tax registration",
      seoDescription: "How to start a business in Indonesia, covering OSS, NIB, risk-based licensing, and how NPWP registration fits into the setup process.",
    },
    answers: [
      {
        id: "a-id-start-business",
        questionId: "q-id-start-business",
        articleContent: {
          sections: [
            {
              heading: "In Indonesia, the practical licensing doorway is OSS and the key business identifier is the NIB",
              body: `The official OSS platform positions itself as the integrated electronic system for business licensing, and the NIB sits at the center of that workflow. DGT's own field guidance describes NIB creation as something normally done through Online Single Submission, which is why founders quickly learn that OSS is not an optional side portal. It is the operating doorway for risk-based licensing.\n\nThat is the part people usually hear first, and it is true. But hearing 'get your NIB' is not the same as hearing 'everything about the business is now finished.'`,
            },
            {
              heading: "Tax registration is increasingly integrated, but it still deserves its own attention",
              body: `The 2024 Coretax registration manual shows how the tax side is evolving. DGT says taxpayer registration is now available through multiple channels, including OSS for entrepreneurs and AHU Online for business entities and legal bodies. That is a meaningful simplification because founders no longer have to think of tax identity as something entirely detached from the licensing ecosystem.\n\nEven so, integration is not the same as automatic completeness. A business still needs its tax profile, legal-entity details and related records to line up correctly. If those pieces are inconsistent, the fact that everything touches digital portals will not save the founder from later admin friction.`,
            },
            {
              heading: "The right mental model is 'licensing plus tax setup,' not a single magic button",
              body: `That is also the message in DGT's coordination work with local investment offices: NIB and NPWP services are being aligned because entrepreneurs need both. In other words, Indonesia is moving toward a more joined-up startup experience, but the joined-up experience still has more than one obligation inside it.\n\nThis answer is educational only and not tax or legal advice. The practical sequence is to treat OSS and the NIB as the core licensing track, and to treat NPWP and tax administration as part of the same launch project instead of as paperwork you postpone until the business is already running.`,
            },
          ],
          keyTakeaways: [
            "OSS is the practical gateway for Indonesia's risk-based business licensing system.",
            "NIB is central to that OSS licensing workflow, but it is not the whole setup by itself.",
            "DGT now expands taxpayer registration channels through OSS for entrepreneurs and AHU Online for business entities and legal bodies.",
            "Founders should treat licensing and tax registration as one coordinated setup project, not two unrelated chores.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-02-26T10:00:00.000Z",
        sources: [
          {
            label: "Panduan Pembuatan NIB",
            url: "https://oss.go.id/id/panduan/676a8758cde449ca8bf75911",
          },
          {
            label: "Pajak Bengkulu Satu dan DPMPTSP Bengkulu Sinergikan Layanan Berusaha",
            url: "https://www.pajak.go.id/index.php/en/node/111375",
          },
          {
            label: "Buku Manual Coretax 2024 - Pendaftaran Wajib Pajak PMSE",
            url: "https://www.pajak.go.id/sites/default/files/2024-09/Buku%20Manual%20Coretax%202024%20-%204%20Pendaftaran%20WP%20PMSE_1.pdf",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-id-article-25-installments",
      title: "Why do Indonesian businesses keep hearing about Article 25 installments even before the annual return is filed?",
      body: "I want the practical DGT answer, not a loose monthly-tax summary. Please explain what Article 25 is trying to do, how the installment is broadly computed, and why new taxpayers should not assume their first nil result means the monthly system is irrelevant forever.",
      author: {
        displayName: "Nadia Pratama",
        avatarSeed: "id-nadia-pratama",
        badge: "new-member",
      },
      category: "id-tax",
      tags: ["Indonesia", "Article 25", "monthly installments", "corporate tax"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 2155,
      answerCount: 1,
      status: "answered",
      seoTitle: "Indonesia Article 25 tax installments explained",
      seoDescription: "Indonesia Article 25 tax installments explained, including why they exist, how they are broadly computed, and why nil installments for new taxpayers are not permanent.",
    },
    answers: [
      {
        id: "a-id-article-25-installments",
        questionId: "q-id-article-25-installments",
        articleContent: {
          sections: [
            {
              heading: "Article 25 exists to spread the tax burden during the year rather than leave everything to the end",
              body: `DGT's Article 25 guidance says the installments are meant to ease the burden of tax expense payable at year-end by requiring monthly installments for taxpayers who are not inside the specified final-tax or certain individual-entrepreneur exceptions. That is why Article 25 turns up so early in Indonesian tax conversations. It is a structural part of the yearly payment rhythm, not an afterthought.`,
            },
            {
              heading: "The broad computation starts from net income and turns the annual idea into a monthly payment stream",
              body: `The same DGT page explains the general logic: net income is multiplied by the applicable tax rate and then divided by twelve or by the number of months in the relevant part of the tax year. For individuals, non-taxable income is deducted first. For corporate taxpayers, fiscal net income is determined after deductible expenses are subtracted from gross income. So the installment is not an arbitrary monthly guess. It is an annual tax concept translated into monthly cash flow.`,
            },
            {
              heading: "A nil installment for a newly registered taxpayer is a starting rule, not a permanent identity",
              body: `DGT also says newly registered individual and corporate taxpayers in the specified cases can have nil Article 25 installments at the start. That helps new businesses, but it should not be misunderstood as proof that Article 25 never matters to them. This answer is educational only and not tax advice. In Indonesia, founders should treat the nil-installment rule as an early-stage concession inside a monthly system they are still growing into.`,
            },
          ],
          keyTakeaways: [
            "Article 25 is designed to spread income-tax payment through monthly installments.",
            "The installment is broadly derived from net income and the applicable tax rate, translated into monthly amounts.",
            "The DGT guidance distinguishes the individual and corporate computation routes.",
            "Nil installments for newly registered taxpayers do not mean Article 25 is irrelevant forever.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
        sources: [
          {
            label: "Calculation of Article 25 Income Tax Installment",
            url: "https://pajak.go.id/en/calculation-article-25-income-tax-installment",
          },
          {
            label: "Income Tax Calculation Mechanism Entity",
            url: "https://pajak.go.id/en/income-tax-calculation-mechanism-entity",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-id-pmse-registration-coretax",
      title: "How does PMSE tax registration work in Indonesia now for foreign digital sellers using Coretax?",
      body: "I want the operational answer, not a generic digital-tax headline. Please explain why PMSE registration has its own Coretax workflow, what kind of taxpayer profile the manual is built around, and why foreign digital sellers should not assume ordinary domestic business registration steps already covered this tax track.",
      author: {
        displayName: "Bagus Santoso",
        avatarSeed: "id-bagus-santoso",
        badge: "subscriber",
      },
      category: "ecommerce",
      tags: ["Indonesia", "PMSE", "Coretax", "digital sellers"],
      postedAt: "2026-04-15T08:00:00.000Z",
      viewCount: 1998,
      answerCount: 1,
      status: "answered",
      seoTitle: "Indonesia PMSE Coretax registration explained",
      seoDescription: "Indonesia PMSE Coretax registration explained for foreign digital sellers, including the dedicated registration path and taxpayer data expected in the workflow.",
    },
    answers: [
      {
        id: "a-id-pmse-registration-coretax",
        questionId: "q-id-pmse-registration-coretax",
        articleContent: {
          sections: [
            {
              heading: "Indonesia now treats PMSE registration as a dedicated Coretax workflow, not as an afterthought inside a general startup form",
              body: `The 2024 DGT Coretax manual is explicit that it is a registration guide for PMSE taxpayers. It explains that prospective PMSE taxpayers can use the PMSE NPWP registration menu in the Coretax application and that this menu is built for PMSE taxpayers, including the "Foreign eCommerce VAT Collector (PMSE)" path. That is operationally important because it tells foreign digital sellers they are entering a specific tax-registration lane rather than simply reusing a generic domestic business-registration assumption.`,
            },
            {
              heading: "The workflow shows the tax authority wants a real taxpayer profile, not just a market-presence slogan",
              body: `The manual walks through concrete data points such as company name, country of origin, contact details, address information, economic codes and annual income. That level of detail shows what the DGT is after. The PMSE regime is not just about knowing that an overseas seller exists. It is about building an administratively usable taxpayer profile inside Coretax.`,
            },
            {
              heading: "That is why foreign digital sellers should separate licensing questions from PMSE tax-registration questions",
              body: `Indonesia's wider startup and OSS discussions can make it tempting to assume all business registration is one unified issue. For PMSE taxpayers, the Coretax manual shows otherwise. This answer is educational only and not tax advice. A foreign digital seller into Indonesia should test whether the PMSE route applies and then follow that route deliberately instead of assuming general business-launch paperwork already solved the Indonesian tax side.`,
            },
          ],
          keyTakeaways: [
            "Indonesia's PMSE tax registration now has a dedicated Coretax workflow.",
            "The manual includes a path for Foreign eCommerce VAT Collector PMSE registration.",
            "The registration process expects detailed identity, contact, address and economic data.",
            "Foreign digital sellers should not assume general startup registration automatically solved the PMSE tax track.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-17T10:00:00.000Z",
        sources: [
          {
            label: "Buku Manual Coretax 2024 - Pendaftaran Wajib Pajak PMSE",
            url: "https://www.pajak.go.id/sites/default/files/2024-09/Buku%20Manual%20Coretax%202024%20-%204%20Pendaftaran%20WP%20PMSE_1.pdf",
          },
          {
            label: "Pemerintah Terbitkan Aturan DPP Nilai Lain dan Besaran Tertentu PPN",
            url: "https://www.pajak.go.id/index.php/en/node/114038",
          },
        ],
      },
    ],
  },
];
