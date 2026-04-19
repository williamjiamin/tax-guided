// MX_TAX_THREADS — auto-extracted from Codex output
import type { QAThread, QAAuthor } from "./qa-catalog";

const TEAM_AUTHOR: QAAuthor = {
  displayName: "TaxGuided Team",
  avatarSeed: "taxguided-team",
  isOfficial: true,
  badge: "expert",
};

export const MX_TAX_THREADS: QAThread[] = [
  {
    question: {
      id: "q-mx-corporate-tax",
      title: "How does corporate income tax actually work in Mexico if the headline rate is 30% but compliance is monthly?",
      body: "I want the real Mexico answer, not a relocation-sales summary. Please explain the standard 30% corporate ISR rate, why monthly provisional payments matter so much in practice, and why the annual return in March is only the end of a year-long compliance process instead of the whole tax story.",
      author: {
        displayName: "Alejandro Ruiz",
        avatarSeed: "mx-alejandro-ruiz",
        badge: "subscriber",
      },
      category: "mx-tax",
      tags: ["Mexico", "corporate tax", "ISR", "personas morales"],
      postedAt: "2025-11-10T08:00:00.000Z",
      viewCount: 3410,
      answerCount: 1,
      status: "answered",
      seoTitle: "How Mexico corporate tax works with 30% ISR and monthly payments",
      seoDescription: "Mexico corporate tax explained with the 30% ISR rate, monthly provisional payments, and the March annual return deadline for companies.",
      isFeatured: true,
    },
    answers: [
      {
        id: "a-mx-corporate-tax",
        questionId: "q-mx-corporate-tax",
        articleContent: {
          sections: [
            {
              heading: "The standard Mexico headline for companies is 30% ISR on the fiscal result",
              body: `SAT's own Article 9 page gives the clean starting point: personas morales calculate income tax by applying a 30% rate to the resultado fiscal for the year. That is the number most founders have heard. The useful part is what sits underneath it. Mexico is not describing a crude tax on gross revenue. The company first works through taxable income, authorised deductions, prior losses where available, and the rest of the fiscal-result machinery before that 30% rate lands.\n\nSo the headline is real, but it is only the last step of the annual computation, not the whole compliance picture.`,
            },
            {
              heading: "Mexico company tax is lived monthly because provisional payments are built into the system",
              body: `Article 14 of the ISR law is what turns the abstract 30% rate into an operating discipline. SAT says companies make monthly provisional payments on account of the annual tax, generally no later than the 17th day of the following month, using the utility-coefficient mechanism described in the law. The SAT declaration service for personas morales repeats the same deadline and frames it as a monthly filing rhythm.\n\nThat matters much more than many one-page explainers admit. In Mexico, cash flow, invoicing hygiene and tax compliance move together throughout the year. If the books are weak in May, the problem does not politely wait until the annual return season.`,
            },
            {
              heading: "The annual return is still critical, but it is a true-up at the end of an already active tax year",
              body: `SAT's 2025 company-return microsite says Régimen General, RESICO and other standard company regimes must file by 31 March 2026 for the 2025 exercise. Article 9 itself also states that the annual tax is paid within the three months following the end of the fiscal year. In other words, the March filing is a major deadline, but it is not the first time the company meets the tax system.\n\nThis answer is educational only and not tax advice. The practical Mexico mindset is to treat corporate ISR as a year-round filing process with a March close, not as a single annual event that can be handled from memory.`,
            },
          ],
          keyTakeaways: [
            "The standard Mexican corporate ISR rate for personas morales is 30% of the fiscal result.",
            "Companies generally make monthly provisional ISR payments, usually by the 17th of the following month.",
            "The annual company return for the 2025 exercise is due by 31 March 2026 for the standard company regimes SAT lists.",
            "In practice, Mexico corporate tax is a monthly compliance system with an annual true-up, not a once-a-year formality.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-11-12T10:00:00.000Z",
        sources: [
          {
            label: "Artículo 9 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/93578/articulo-9",
          },
          {
            label: "Artículo 14 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/36326/articulo-14",
          },
          {
            label: "Declaración Anual 2025 Empresas",
            url: "https://www.sat.gob.mx/minisitio/DeclaracionAnual/Empresas/index.html",
          },
          {
            label: "Pagos provisionales o definitivos de personas morales",
            url: "https://wwwmatnp.sat.gob.mx/declaracion/95291/declaracion-mensual-para-tu-empresa-en-el-servicio-de-declaraciones-y-pagos",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-mx-income-tax-rate",
      title: "What income tax rate applies to individuals in Mexico now, and why is a single percentage almost always the wrong answer?",
      body: "I need the current Mexico personal-tax answer, not a lazy '35%' soundbite. Please explain how the progressive ISR structure works, what the 2026 tariff tables show, and why people still have to think about deductions and the April annual return instead of treating their tax rate like one fixed number.",
      author: {
        displayName: "Mariana León",
        avatarSeed: "mx-mariana-leon",
        badge: "new-member",
      },
      category: "mx-tax",
      tags: ["Mexico", "income tax", "ISR", "personas físicas"],
      postedAt: "2025-12-02T08:00:00.000Z",
      viewCount: 3175,
      answerCount: 1,
      status: "answered",
      seoTitle: "Current Mexico income tax rates for individuals explained",
      seoDescription: "Mexico personal tax explained with the 2026 ISR tariffs, the progressive 1.92% to 35% structure, and the April annual return rules.",
    },
    answers: [
      {
        id: "a-mx-income-tax-rate",
        questionId: "q-mx-income-tax-rate",
        articleContent: {
          sections: [
            {
              heading: "Mexico personal ISR is progressive, so a single percentage hides the actual structure",
              body: `SAT's Article 152 makes the framework clear: individuals calculate annual ISR by aggregating the relevant income covered by the rule, applying authorised deductions and personal deductions where available, and then applying the annual tariff. That alone should make people suspicious of one-line answers.\n\nThe 2026 Anexo 8 tables make the practical range visible. For the current year, the published tariffs start at 1.92% in the lowest bracket and rise to 35% at the top marginal bracket. So saying 'Mexico income tax is 35%' is only true in the narrow sense that 35% is the top marginal rate, not the universal rate every person pays on all income.`,
            },
            {
              heading: "Your actual Mexico tax outcome still depends on the tariff, the income type and the deductions that survive the year",
              body: `That is why two people with the same headline earnings can still land in different places. Article 152 refers directly to the annual calculation after the relevant deductions, and the SAT annual-return materials keep pointing taxpayers back to the filing process rather than to a single static number. In other words, the tariff matters, but the taxable base matters too.\n\nThis is where stale expat summaries usually disappoint. They often mention the top rate and skip the mechanics, even though the mechanics are what determine whether a person ends the year with tax still due, a balance in favour, or nothing further to pay.`,
            },
            {
              heading: "The annual filing calendar still matters because many individuals settle the final picture in April",
              body: `SAT's Article 150 says individuals who must present an annual return do so in April of the following year. The current SAT annual-return microsite for personas físicas repeats the same instruction in operational language: file it in April. So for 2025 income, the live filing month is April 2026.\n\nThis answer is educational only and not tax advice. The sensible Mexico question is not 'What is my one rate?' but 'Which tariff applies to my income and what does my annual return look like after deductions and prior withholding?'`,
            },
          ],
          keyTakeaways: [
            "Mexico personal ISR is progressive, not flat.",
            "SAT's 2026 published tariffs run from 1.92% in the lowest bracket up to 35% at the top marginal bracket.",
            "The annual result still depends on deductions, income type and prior withholding.",
            "For taxpayers who must file, the annual personal return is presented in April of the following year.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2025-12-04T10:00:00.000Z",
        sources: [
          {
            label: "Artículo 150 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/83662/articulo-150",
          },
          {
            label: "Artículo 152 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/36785/articulo-152",
          },
          {
            label: "Anexo 8 de la RMF 2026",
            url: "https://www.sat.gob.mx/minisitio/NormatividadRMFyRGCE/documentos2026/rmf/anexos/Anexo-8-RMF-2026_DOF-28122025.pdf",
          },
          {
            label: "Declaración Anual 2025 Personas",
            url: "https://www.sat.gob.mx/minisitio/DeclaracionAnual/Personas/calendario.html",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-mx-vat-rules",
      title: "What VAT rate applies in Mexico, and is there really no standard registration threshold like in many other countries?",
      body: "I want the practical Mexico VAT answer, not a comparison article copied from Europe. Please explain the general 16% VAT rule, why Mexico doesn't give most businesses a simple domestic registration threshold answer, and how the monthly filing deadline changes the way IVA should be managed in real life.",
      author: {
        displayName: "Jorge Cárdenas",
        avatarSeed: "mx-jorge-cardenas",
        badge: "subscriber",
      },
      category: "mx-tax",
      tags: ["Mexico", "IVA", "VAT", "ISR"],
      postedAt: "2026-01-07T08:00:00.000Z",
      viewCount: 3620,
      answerCount: 1,
      status: "answered",
      seoTitle: "Mexico VAT rules with 16% IVA and monthly filing explained",
      seoDescription: "Mexico VAT explained with the 16% IVA rule, the lack of a standard registration threshold, and the monthly filing deadline.",
    },
    answers: [
      {
        id: "a-mx-vat-rules",
        questionId: "q-mx-vat-rules",
        articleContent: {
          sections: [
            {
              heading: "Mexico's general IVA starting point is 16%, and the law states it directly",
              body: `SAT's Article 1 page is refreshingly direct. Individuals and legal entities in Mexico that sell goods, provide independent services, grant temporary use of goods or import goods or services are subject to IVA, and the law says the tax is calculated at 16% on the values defined by the statute. That is the general rule people usually want first.\n\nThe important nuance is that the liability rule is framed around carrying out taxable acts or activities in national territory, not around waiting to cross one clean turnover threshold that magically turns tax on.`,
            },
            {
              heading: "For many ordinary businesses, Mexico is not a threshold-led VAT system in the way founders expect",
              body: `That is where comparisons with the UK or many EU guides can mislead people. SAT's Article 1 is about who is subject to IVA when taxable acts are performed, and Article 5-D then moves straight into the monthly declaration mechanism. In practical terms, Mexico does not hand most businesses the kind of universal domestic registration-threshold shortcut that entrepreneurs often assume exists elsewhere.\n\nThat changes the planning conversation. The question is less 'When do I finally become a VAT taxpayer?' and more 'Are my activities already inside the IVA rules, and am I invoicing and tracking acreditable IVA properly?'`,
            },
            {
              heading: "IVA becomes operational very quickly because the payment cycle is monthly",
              body: `Article 5-D says the tax is calculated for each calendar month and paid through a declaration submitted no later than the 17th day of the following month. The SAT monthly-declaration services repeat that deadline in operational language. That is why IVA in Mexico feels administrative very early: the monthly clock keeps running whether the business finds tax enjoyable or not.\n\nThis answer is educational only and not tax advice. In Mexico, IVA is safest when treated as a live monthly system tied to invoicing and cash collection, not as a year-end accounting clean-up.`,
            },
          ],
          keyTakeaways: [
            "The general Mexican IVA rate is 16% under the standard rule in Article 1.",
            "Mexico's IVA rules are framed around performing taxable acts or activities, not around one simple general registration threshold for ordinary businesses.",
            "IVA is calculated monthly.",
            "Monthly IVA declarations are generally due by the 17th day of the following month.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-01-09T10:00:00.000Z",
        sources: [
          {
            label: "Artículo 1 IVA",
            url: "https://wwwmat.sat.gob.mx/articulo/19848/articulo-1",
          },
          {
            label: "Artículo 5-D IVA",
            url: "https://wwwmat.sat.gob.mx/articulo/73134/articulo-5-d",
          },
          {
            label: "Pagos provisionales o definitivos de personas morales",
            url: "https://wwwmatnp.sat.gob.mx/declaracion/95291/declaracion-mensual-para-tu-empresa-en-el-servicio-de-declaraciones-y-pagos",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-mx-tax-deadlines",
      title: "What tax deadlines matter most in Mexico for companies, individuals and monthly returns?",
      body: "I need the operational Mexico answer, not a vague reminder to 'stay compliant.' Please explain the company annual deadline, the individual annual filing month, and the recurring monthly deadline for provisional or definitive returns because those are the dates that actually shape how a business and a freelancer live with Mexican tax.",
      author: {
        displayName: "Fernanda Soto",
        avatarSeed: "mx-fernanda-soto",
        badge: "new-member",
      },
      category: "mx-tax",
      tags: ["Mexico", "tax deadlines", "SAT", "declaraciones"],
      postedAt: "2026-02-03T08:00:00.000Z",
      viewCount: 2895,
      answerCount: 1,
      status: "answered",
      seoTitle: "Mexico tax deadlines for companies individuals and monthly returns",
      seoDescription: "Mexico tax deadlines explained with the 31 March company deadline, April personal returns, and the monthly day-17 filing rhythm.",
    },
    answers: [
      {
        id: "a-mx-tax-deadlines",
        questionId: "q-mx-tax-deadlines",
        articleContent: {
          sections: [
            {
              heading: "For companies, the annual deadline is not abstract this year: SAT says 31 March 2026 for the 2025 return",
              body: `SAT's company-return microsite is unusually explicit. For the standard company regimes it lists, the Declaración Anual 2025 is due by 31 March 2026. Article 9 of the ISR law also states the annual tax is paid within the three months following the end of the fiscal year, which is why the March deadline is not just marketing copy on the microsite but a reflection of the legal structure.\n\nIf a company waits until late March to understand its numbers, it is already behind. The return may be annual, but the preparation never is.`,
            },
            {
              heading: "For individuals, the live annual filing month is April 2026 for 2025 income",
              body: `SAT's Article 150 says individuals who must file an annual return do so in April of the following year. The current annual-return microsite for personas físicas uses the same practical instruction: present it in April. That is the key calendar point most freelancers, side-income earners and mixed-income taxpayers need to hold onto right now.\n\nThis is also where people get caught by the false comfort of payroll withholding. Withholding solves part of the story for many employees, but it does not erase annual-return obligations in every case.`,
            },
            {
              heading: "The monthly deadline is the rhythm that shapes day-to-day tax life in Mexico",
              body: `For recurring compliance, both the ISR and IVA systems keep pointing taxpayers back to the same cadence. Article 14 for company ISR and Article 5-D for IVA both anchor monthly payments, and the SAT declaration services say the filing is due no later than the 17th day of the following month, subject to the extra working-day extensions linked to the sixth RFC digit where applicable.\n\nThis answer is educational only and not tax advice. In practice, Mexico tax management works best when you track three clocks separately: the company annual return, the individual annual return, and the monthly declarations that keep the whole system moving.`,
            },
          ],
          keyTakeaways: [
            "For standard company regimes, SAT lists 31 March 2026 as the deadline for the 2025 annual company return.",
            "Individuals who must file present the annual return in April of the following year.",
            "Monthly ISR and IVA filings are generally due by the 17th day of the following month.",
            "In Mexico, the monthly declaration cycle is the deadline that most directly shapes daily compliance behavior.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-02-05T10:00:00.000Z",
        sources: [
          {
            label: "Artículo 9 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/93578/articulo-9",
          },
          {
            label: "Declaración Anual 2025 Empresas",
            url: "https://www.sat.gob.mx/minisitio/DeclaracionAnual/Empresas/index.html",
          },
          {
            label: "Artículo 150 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/83662/articulo-150",
          },
          {
            label: "Declaración Anual 2025 Personas",
            url: "https://www.sat.gob.mx/minisitio/DeclaracionAnual/Personas/calendario.html",
          },
          {
            label: "Artículo 14 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/36326/articulo-14",
          },
          {
            label: "Artículo 5-D IVA",
            url: "https://wwwmat.sat.gob.mx/articulo/73134/articulo-5-d",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-mx-start-business",
      title: "How do you actually start a company in Mexico, and why is SAT registration only one part of the setup?",
      body: "I want the practical Mexico setup answer, not a startup brochure. Please explain how the company name authorization fits in, when the digital SAS route is relevant, and why the RFC registration step still depends on the constitutive documents, domicile proof and the representative's tax position instead of being just a quick online form.",
      author: {
        displayName: "Ricardo Pineda",
        avatarSeed: "mx-ricardo-pineda",
        badge: "subscriber",
      },
      category: "entity-setup",
      tags: ["Mexico", "start a business", "RFC", "SAS", "SAT"],
      postedAt: "2026-02-21T08:00:00.000Z",
      viewCount: 3285,
      answerCount: 1,
      status: "answered",
      seoTitle: "How to start a company in Mexico with name approval and RFC registration",
      seoDescription: "How to start a company in Mexico, covering name authorization, the SAS route, SAT RFC registration, and the core formation documents.",
    },
    answers: [
      {
        id: "a-mx-start-business",
        questionId: "q-mx-start-business",
        articleContent: {
          sections: [
            {
              heading: "The setup process starts before SAT with the company's legal identity",
              body: `Mexico's official company-formation flow does not begin with a tax return. The Secretaría de Economía's denomination process is the first practical checkpoint for many entities: the government says the authorisation of a denominación or razón social is the favourable resolution that allows the applicant to use the proposed company name, the process is done online, it is free, it requires e.firma, and the response should arrive within a maximum of two business days.\n\nThat is worth stressing because many founders mentally skip to the RFC. In reality, the legal identity of the entity is settled first, and tax registration follows the existence of that entity rather than replacing it.`,
            },
            {
              heading: "The digital SAS route exists, but it is only one route inside the broader Mexico formation landscape",
              body: `The Secretaría de Economía's SAS guidance is helpful precisely because it does not pretend every business uses the same lane. It says you need name authorisation and a valid e.firma to form a Sociedad por Acciones Simplificada, and the guide walks through the digital constitution process. That makes SAS a real online option for qualifying founders, but not a universal description of how every Mexican company comes into being.\n\nThis is where low-friction startup content often oversells the idea of 'open a company online in minutes.' Mexico does have a digital route, but it sits inside a legal formation framework rather than wiping that framework away.`,
            },
            {
              heading: "SAT registration is where the tax system starts to verify the company as a real operating taxpayer",
              body: `SAT's RFC registration page for companies makes the practical demands hard to ignore. The representative and the partners or shareholders that form part of the organic structure must be registered in the RFC, and SAT asks for the constitutive document plus domicile evidence. The page also lists concrete proof options such as utility bills, bank-opening documents, lease or service contracts, and it says the company registration is handled at SAT offices with a prior appointment.\n\nThis answer is educational only and not tax or legal advice. In Mexico, the clean setup sequence is to secure the company name, choose the right formation route, complete the constitutive documents, and then approach the RFC step with the supporting paperwork already in order.`,
            },
          ],
          keyTakeaways: [
            "Mexico company setup often starts with authorisation of the company name, not with SAT filing.",
            "The name-authorisation process is online, free and requires e.firma.",
            "The SAS route is a real digital option, but it is not the only formation path for Mexican companies.",
            "SAT RFC registration for a company still depends on the constitutive document, domicile support and the representative's tax status.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-02-23T10:00:00.000Z",
        sources: [
          {
            label: "Autorización de uso de denominación o razón social",
            url: "https://www.gob.mx/tramites/ficha/autorizacion-de-uso-de-denominacion-o-razon-social/SE66",
          },
          {
            label: "Guía para constituir una SAS",
            url: "https://www.gob.mx/se/articulos/conoce-la-guia-para-que-constituyas-paso-a-paso-tu-sociedad-por-acciones-simplificada-sas",
          },
          {
            label: "Sociedad por Acciones Simplificada (SAS)",
            url: "https://www.gob.mx/tuempresa/articulos/crea-tu-sociedad-por-acciones",
          },
          {
            label: "Inscribe tu empresa en el RFC",
            url: "https://wwwmat.sat.gob.mx/tramites/33804/inscribe-tu-empresa-en-el-rfc",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-mx-monthly-provisional-payments",
      title: "Why does Mexican company tax feel monthly even though people keep quoting the 30% annual rate?",
      body: "I want the real SAT workflow, not a headline rate summary. Please explain why provisional payments matter, when they are due, and why founders who think only about the annual rate often underestimate how early the compliance burden starts.",
      author: {
        displayName: "Fernanda Cruz",
        avatarSeed: "mx-fernanda-cruz",
        badge: "new-member",
      },
      category: "mx-tax",
      tags: ["Mexico", "ISR", "monthly payments", "corporate tax"],
      postedAt: "2026-04-11T08:00:00.000Z",
      viewCount: 2292,
      answerCount: 1,
      status: "answered",
      seoTitle: "Mexico monthly provisional company tax payments explained",
      seoDescription: "Mexico company tax explained through SAT's monthly provisional-payment system, including the filing deadline and why annual-rate summaries are incomplete.",
    },
    answers: [
      {
        id: "a-mx-monthly-provisional-payments",
        questionId: "q-mx-monthly-provisional-payments",
        articleContent: {
          sections: [
            {
              heading: "Mexico's company-tax reality is monthly long before it feels annual",
              body: `SAT's monthly-declarations service page makes the practical point very clearly: corporate taxpayers present provisional or definitive federal tax declarations through the declarations-and-payments service, and the periodicity is monthly. That means the Mexican company-tax conversation cannot stop at the annual 30% rate. The operating system of compliance begins much earlier and repeats throughout the year.`,
            },
            {
              heading: "The deadline pressure arrives fast after the end of each month",
              body: `SAT says the monthly provisional or definitive payment is filed no later than the 17th day of the following month, subject to the additional-business-day schedule tied to the RFC digit rules. This timing matters because it changes how founders should think about bookkeeping. The question is not only what the year's tax burden will be. It is whether the company is ready to produce timely monthly tax information almost immediately.`,
            },
            {
              heading: "That is why headline-rate talk is one of the least useful ways to understand Mexican company tax",
              body: `The annual rate still matters, but the compliance experience is built around recurring declarations for ISR, VAT and other federal taxes as applicable. This answer is educational only and not tax advice. In Mexico, a serious tax plan starts with the monthly compliance rhythm and only then moves up to the annual-rate discussion.`,
            },
          ],
          keyTakeaways: [
            "Mexican company tax compliance is structured around monthly provisional or definitive declarations.",
            "The filing is generally due by the 17th day of the following month, with possible extra business days by RFC digit.",
            "Bookkeeping has to be ready early because the tax cycle starts monthly, not only annually.",
            "The annual 30% headline rate does not describe the lived compliance rhythm by itself.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-13T10:00:00.000Z",
        sources: [
          {
            label: "Pagos provisionales o definitivos de personas morales",
            url: "https://wwwmatnp.sat.gob.mx/declaracion/95291/declaracion-mensual-para-tu-empresa-en-el-servicio-de-declaraciones-y-pagos",
          },
          {
            label: "Artículo 14 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/36326/articulo-14",
          },
        ],
      },
    ],
  },
  {
    question: {
      id: "q-mx-annual-individual-return-april",
      title: "Why does Mexico's annual individual return in April still matter even if tax was already withheld during the year?",
      body: "I want the official SAT answer, not a generic filing-season reminder. Please explain why the annual return still matters for many individuals, what April means in the formal rule, and why payments made during the year do not automatically make the final annual calculation irrelevant.",
      author: {
        displayName: "Julian Ortega",
        avatarSeed: "mx-julian-ortega",
        badge: "subscriber",
      },
      category: "compliance",
      tags: ["Mexico", "annual return", "individual tax", "April filing"],
      postedAt: "2026-04-15T08:00:00.000Z",
      viewCount: 2078,
      answerCount: 1,
      status: "answered",
      seoTitle: "Mexico annual individual return in April explained",
      seoDescription: "Mexico annual individual return explained, including the April filing rule and why prior payments and withholdings do not always settle the final tax.",
    },
    answers: [
      {
        id: "a-mx-annual-individual-return-april",
        questionId: "q-mx-annual-individual-return-april",
        articleContent: {
          sections: [
            {
              heading: "Mexico's annual individual return is a formal annual tax obligation, not just a seasonal website campaign",
              body: `SAT's Article 150 page says individuals who obtain income in a calendar year, other than exempt income and income already subject to final tax, are obliged to pay annual tax through a return presented in the month of April of the following year. SAT's annual-return microsite echoes that message in practical filing-season language by telling individuals to submit it in April. So the April deadline is not marketing. It is the formal annual filing window embedded in the tax rule and the public-facing service flow.`,
            },
            {
              heading: "The annual calculation still has a job to do even where money was already paid or withheld during the year",
              body: `Article 152 explains why. The annual tax is calculated by bringing the relevant income categories together, applying the authorised deductions, and then crediting provisional payments and creditable taxes. In other words, prior payments are part of the annual computation, not proof that the annual computation has become unnecessary. Withholding and provisional payments feed the final calculation; they do not always replace it.`,
            },
            {
              heading: "The practical mistake is treating withholding as the end of the tax story",
              body: `That mistake is especially common when a taxpayer had several income types or crossed a filing threshold without noticing. This answer is educational only and not tax advice. In Mexico, the safer habit is to treat April as the point where the year's tax position is finalised, with earlier withholdings and provisional payments brought into the calculation rather than used as a reason to ignore it.`,
            },
          ],
          keyTakeaways: [
            "Mexico's annual individual return is formally presented in April of the following year.",
            "SAT's public filing-season guidance reflects that legal April filing window.",
            "Annual tax is calculated after bringing income together and then crediting provisional payments and creditable taxes.",
            "Prior withholding does not automatically make the annual return irrelevant.",
          ],
        },
        author: TEAM_AUTHOR,
        postedAt: "2026-04-17T10:00:00.000Z",
        sources: [
          {
            label: "Artículo 150 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/83662/articulo-150",
          },
          {
            label: "Artículo 152 ISR",
            url: "https://wwwmat.sat.gob.mx/articulo/36785/articulo-152",
          },
          {
            label: "Declaración Anual 2025 Personas",
            url: "https://www.sat.gob.mx/minisitio/DeclaracionAnual/Personas/calendario.html",
          },
        ],
      },
    ],
  },
];
