// Payroll, employment tax, and hiring Q&A content for foreign-owned U.S. LLC owners
// Each thread covers a specific payroll/employment topic with IRS-sourced guidance

import type { QAThread, QAAuthor } from "./qa-catalog";

const OFFICIAL_AUTHOR: QAAuthor = {
  displayName: "ForeignLLCTax Official",
  avatarSeed: "rippa-official",
  isOfficial: true,
  badge: "expert",
};

export const PAYROLL_THREADS: QAThread[] = [

  // =====================================================
  // Q&A #1: Foreign LLC Hiring U.S. Employees — Payroll Tax Overview
  // =====================================================
  {
    question: {
      id: "q-payroll-hiring-overview",
      isFeatured: true,
      title: "I'm a foreign LLC owner hiring my first U.S. employee — what payroll taxes do I owe?",
      body: "I own a single-member LLC registered in Delaware as a non-resident alien living in the UK. I just hired a full-time employee in Texas to handle customer support. This is my first hire and I have no idea what payroll taxes I need to withhold or pay. I've heard about FICA, FUTA, and federal income tax withholding but I'm confused about what applies to a foreign-owned LLC. Do I need to register with the IRS separately as an employer? And are there any extra obligations because I'm a foreign owner? I really don't want to get hit with penalties for doing this wrong.",
      author: {
        displayName: "James W.",
        avatarSeed: "uk-llc-hire-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["payroll tax", "foreign LLC", "hiring employees", "FICA", "FUTA", "withholding", "employer obligations"],
      postedAt: "2026-01-12T09:30:00Z",
      viewCount: 2847,
      answerCount: 1,
      status: "answered",
      seoTitle: "Foreign LLC Hiring U.S. Employees: Payroll Tax Obligations",
      seoDescription: "Complete guide to payroll tax obligations when a foreign-owned U.S. LLC hires employees. Covers FICA, FUTA, federal withholding, and employer registration requirements.",
    },
    answers: [
      {
        id: "a-payroll-hiring-overview-1",
        questionId: "q-payroll-hiring-overview",
        articleContent: {
          sections: [
            {
              heading: "Foreign-owned LLCs have the same employer obligations as any U.S. employer",
              body: "Once your LLC hires a U.S. employee, you become an employer subject to all federal employment tax requirements regardless of your personal residency or citizenship. The IRS treats your LLC as a U.S. entity for employment tax purposes because it was formed under U.S. state law. There is no exemption from payroll taxes simply because the owner is a non-resident alien. You must withhold federal income tax from employee wages, withhold the employee share of FICA taxes (Social Security and Medicare), pay the employer share of FICA, pay Federal Unemployment Tax (FUTA), and file the required quarterly and annual returns.",
            },
            {
              heading: "Registering as an employer with the IRS",
              body: "If you already have an EIN for your LLC (which you should, since foreign-owned LLCs need one for Form 5472 filing), that same EIN is used for employment tax purposes. However, you need to make sure the IRS knows your LLC is now an employer. When you file your first Form 941 (quarterly employment tax return), the IRS will update your account to reflect employer status. You should also verify your LLC's classification is correct — a single-member LLC owned by a foreign person is a disregarded entity for income tax but is still the employer of record for employment taxes.",
            },
            {
              heading: "The three main federal payroll tax components",
              body: "Federal payroll taxes have three components. First, federal income tax withholding — you must withhold federal income tax from each employee's wages based on their Form W-4 elections. Second, FICA taxes — both you and the employee each pay 6.2% for Social Security (on wages up to $176,100 in 2026) and 1.45% for Medicare (no wage cap), for a combined employer cost of 7.65%. Third, FUTA — the employer pays federal unemployment tax of 6.0% on the first $7,000 of each employee's wages, though credits for state unemployment tax typically reduce this to 0.6%.",
            },
            {
              heading: "Deposit schedules and deadlines",
              body: "The IRS requires employment taxes to be deposited on a schedule that depends on your total tax liability. New employers are generally monthly depositors — you must deposit employment taxes by the 15th of the following month. If your total employment tax liability exceeds $50,000 during the lookback period, you become a semiweekly depositor. All deposits must be made electronically through EFTPS (Electronic Federal Tax Payment System). Late deposits trigger penalties starting at 2% for deposits 1-5 days late and escalating to 15% for amounts still unpaid more than 10 days after the first IRS notice.",
            },
            {
              heading: "State-level payroll obligations",
              body: "Beyond federal taxes, you must comply with the state where your employee works. Texas does not have a state income tax, so you won't need to withhold state income tax for a Texas employee. However, Texas does require State Unemployment Tax (SUTA) registration and payments. Most states also require workers' compensation insurance. Each state has its own registration process, tax rates, and filing deadlines. If you hire employees in multiple states, you must register and comply with each state separately.",
            },
            {
              heading: "Practical steps for your first hire",
              body: "Here is the sequence you should follow: (1) Have the employee complete Form W-4 (federal withholding) and Form I-9 (employment eligibility). (2) Register for EFTPS if you haven't already. (3) Register with your state's unemployment insurance agency. (4) Set up a payroll system — many foreign LLC owners use a payroll service like Gusto, ADP, or a PEO to handle calculations, deposits, and filings. (5) Begin withholding and depositing taxes with each pay period. (6) File Form 941 quarterly. (7) File Form 940 annually. (8) Issue Form W-2 to the employee by January 31 of the following year.",
            },
          ],
          keyTakeaways: [
            "Foreign-owned LLCs have identical employer payroll tax obligations as any U.S. employer — no exemptions for foreign ownership",
            "You must withhold federal income tax and FICA (employee share) from wages, plus pay employer FICA and FUTA",
            "Employment tax deposits must be made electronically via EFTPS on a monthly or semiweekly schedule",
            "Register with the state where your employee works for state unemployment tax and workers' compensation",
            "Consider using a payroll service or PEO to handle the complexity of compliance as a foreign owner",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-13T11:00:00Z",
        sources: [
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
          { label: "IRS — Depositing and Reporting Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/depositing-and-reporting-employment-taxes" },
          { label: "IRS — About Form 941", url: "https://www.irs.gov/forms-pubs/about-form-941" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #2: FICA (Social Security + Medicare) Tax
  // =====================================================
  {
    question: {
      id: "q-payroll-fica",
      isFeatured: false,
      title: "How does FICA tax work for foreign LLC employers — do I pay both employer and employee shares?",
      body: "My foreign-owned LLC in Florida has two employees. I understand I need to pay FICA taxes but I'm confused about the split. Do I withhold the employee's portion from their paycheck AND pay a separate employer portion on top? What are the exact rates for 2026? Also, is there a wage cap? One of my employees earns over $180,000 and I want to make sure I'm calculating this correctly. Does the Additional Medicare Tax apply to the employer too?",
      author: {
        displayName: "Priya M.",
        avatarSeed: "india-fl-fica-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["FICA", "Social Security", "Medicare", "employer tax", "wage cap", "Additional Medicare Tax"],
      postedAt: "2026-01-18T14:15:00Z",
      viewCount: 1923,
      answerCount: 1,
      status: "answered",
      seoTitle: "FICA Tax for Foreign LLC Employers: Rates and Wage Caps",
      seoDescription: "How FICA (Social Security and Medicare) tax works for foreign-owned LLC employers. Employer and employee shares, wage base limits, and Additional Medicare Tax rules.",
    },
    answers: [
      {
        id: "a-payroll-fica-1",
        questionId: "q-payroll-fica",
        articleContent: {
          sections: [
            {
              heading: "FICA is a shared tax — employer and employee each pay their half",
              body: "FICA stands for the Federal Insurance Contributions Act and funds Social Security and Medicare. It is a shared tax: the employee pays half and the employer pays a matching half. As the LLC employer, you must withhold the employee's share from their wages each pay period and then pay an equal employer share out of your own funds. You remit both portions together to the IRS through EFTPS. The total FICA rate is 15.3% of wages, split evenly at 7.65% each.",
            },
            {
              heading: "Social Security tax rate and wage base limit",
              body: "The Social Security portion of FICA is 6.2% for the employee and 6.2% for the employer, totaling 12.4%. This tax applies only up to the Social Security wage base limit, which is $176,100 for 2026. Once an employee's cumulative wages for the year exceed this threshold, you stop withholding and paying Social Security tax on the excess. For your employee earning over $180,000, you would withhold Social Security tax on the first $176,100 of wages and nothing on the remaining amount above that.",
            },
            {
              heading: "Medicare tax has no wage cap",
              body: "The Medicare portion of FICA is 1.45% for the employee and 1.45% for the employer, totaling 2.9%. Unlike Social Security, there is no wage base limit for Medicare tax — it applies to all wages regardless of amount. So even after your high-earning employee exceeds the Social Security cap, you continue to withhold and pay Medicare tax on all their wages.",
            },
            {
              heading: "Additional Medicare Tax is employee-only",
              body: "The Additional Medicare Tax is an extra 0.9% that applies to employee wages exceeding $200,000 in a calendar year (for single filers). This is exclusively an employee-side tax — there is no employer match for the Additional Medicare Tax. You are required to begin withholding the Additional Medicare Tax in the pay period when wages exceed $200,000, regardless of the employee's filing status. The employee may owe additional amounts or receive a credit when they file their individual tax return, depending on their actual filing status and combined income.",
            },
            {
              heading: "How to calculate FICA for a pay period",
              body: "For each pay period, calculate as follows: (1) Determine gross wages subject to FICA. (2) Multiply by 6.2% for the employee Social Security withholding (check if cumulative wages have exceeded $176,100). (3) Multiply by 1.45% for the employee Medicare withholding. (4) If cumulative wages exceed $200,000, also withhold the additional 0.9% Medicare. (5) Calculate the employer's matching share: 6.2% Social Security (same wage cap) and 1.45% Medicare. (6) Deposit the total (employee withholding plus employer share) via EFTPS by the applicable deposit deadline.",
            },
          ],
          keyTakeaways: [
            "FICA is split evenly: employer pays 7.65% and employee pays 7.65% (6.2% Social Security + 1.45% Medicare each)",
            "Social Security tax applies only to the first $176,100 of wages in 2026 — no tax on wages above this cap",
            "Medicare tax has no wage cap and applies to all wages at 1.45% for both employer and employee",
            "Additional Medicare Tax (0.9% on wages over $200,000) is employee-only — no employer match required",
            "All FICA deposits must be made electronically via EFTPS on the applicable deposit schedule",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-19T10:30:00Z",
        sources: [
          { label: "IRS — Topic 751: Social Security and Medicare Withholding Rates", url: "https://www.irs.gov/taxtopics/tc751" },
          { label: "IRS — Questions and Answers for the Additional Medicare Tax", url: "https://www.irs.gov/businesses/small-businesses-self-employed/questions-and-answers-for-the-additional-medicare-tax" },
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #3: FUTA (Federal Unemployment Tax)
  // =====================================================
  {
    question: {
      id: "q-payroll-futa",
      isFeatured: false,
      title: "What is FUTA and how much does a foreign-owned LLC pay for federal unemployment tax?",
      body: "I keep seeing references to FUTA when reading about employer taxes for my foreign-owned LLC. I understand FICA but FUTA is confusing me. Is this separate from state unemployment tax? How much is it? I read somewhere it's 6% but then there's a credit that brings it down. Can someone explain exactly how FUTA works for a foreign-owned LLC with three employees in California?",
      author: {
        displayName: "Carlos R.",
        avatarSeed: "mx-ca-futa-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["FUTA", "unemployment tax", "Form 940", "state unemployment", "foreign LLC"],
      postedAt: "2026-01-25T16:40:00Z",
      viewCount: 1456,
      answerCount: 1,
      status: "answered",
      seoTitle: "FUTA Tax for Foreign-Owned LLCs: Rates and Credits Explained",
      seoDescription: "How Federal Unemployment Tax (FUTA) works for foreign-owned LLCs. Tax rate, wage base, state unemployment credit, and annual filing requirements on Form 940.",
    },
    answers: [
      {
        id: "a-payroll-futa-1",
        questionId: "q-payroll-futa",
        articleContent: {
          sections: [
            {
              heading: "FUTA is a federal employer-only tax that funds unemployment benefits",
              body: "The Federal Unemployment Tax Act (FUTA) imposes a tax on employers to fund the federal unemployment insurance program. Unlike FICA, FUTA is paid entirely by the employer — you do not withhold any portion from employee wages. FUTA works alongside state unemployment tax (SUTA) systems. The federal program provides a funding mechanism, while states administer the actual unemployment benefits. As a foreign-owned LLC with employees, you are subject to FUTA just like any other U.S. employer.",
            },
            {
              heading: "The FUTA tax rate and wage base",
              body: "The gross FUTA tax rate is 6.0% and applies to the first $7,000 of wages paid to each employee during the calendar year. Once an employee's cumulative wages for the year exceed $7,000, no additional FUTA tax is due for that employee. With three employees, your maximum FUTA wage base is $21,000 (3 x $7,000). At the gross rate of 6.0%, the maximum gross FUTA liability would be $1,260 per year before credits.",
            },
            {
              heading: "The state unemployment tax credit reduces FUTA significantly",
              body: "Employers who pay state unemployment tax (SUTA) on time receive a credit against their FUTA tax of up to 5.4%. This reduces the effective FUTA rate from 6.0% to just 0.6%. California is not currently a credit reduction state, so you receive the full 5.4% credit as long as you pay your California SUTA on time. At the effective rate of 0.6%, your actual FUTA cost would be $42 per employee per year ($7,000 x 0.006), or $126 total for three employees. However, if a state has outstanding federal unemployment loans, the credit may be reduced — check the IRS credit reduction states list annually.",
            },
            {
              heading: "FUTA deposit rules",
              body: "If your cumulative FUTA tax liability exceeds $500 during a quarter, you must deposit it by the last day of the month following the end of the quarter. If your liability is $500 or less, you can carry it forward to the next quarter. Most small employers with a few employees find their quarterly FUTA liability is under $500, meaning they deposit once a year when they file Form 940. FUTA deposits must be made through EFTPS, like all employment tax deposits.",
            },
            {
              heading: "Form 940 is the annual FUTA return",
              body: "You file Form 940 annually by January 31 of the following year (or February 10 if you deposited all FUTA tax when due). Form 940 reports your total FUTA tax liability, credits for state unemployment tax, deposits made during the year, and any balance due or overpayment. Even if your net FUTA tax is very small due to the state credit, you must still file Form 940 if you paid wages of $1,500 or more in any calendar quarter or had at least one employee on any given day in each of 20 or more different calendar weeks.",
            },
          ],
          keyTakeaways: [
            "FUTA is an employer-only tax at 6.0% on the first $7,000 of each employee's wages per year",
            "A credit of up to 5.4% for state unemployment tax payments typically reduces the effective FUTA rate to just 0.6%",
            "With three employees, maximum annual FUTA cost is typically only $126 (3 x $7,000 x 0.6%) after state credit",
            "Deposit FUTA via EFTPS when cumulative quarterly liability exceeds $500; otherwise carry forward",
            "File Form 940 annually by January 31 to report FUTA tax liability and payments",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-26T08:45:00Z",
        sources: [
          { label: "IRS — About Form 940", url: "https://www.irs.gov/forms-pubs/about-form-940" },
          { label: "IRS — FUTA Tax", url: "https://www.irs.gov/businesses/small-businesses-self-employed/futa-tax" },
          { label: "IRS — FUTA Credit Reduction", url: "https://www.irs.gov/businesses/small-businesses-self-employed/futa-credit-reduction" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #4: Form 941 — Quarterly Federal Tax Return
  // =====================================================
  {
    question: {
      id: "q-payroll-form-941",
      isFeatured: true,
      title: "How do I file Form 941 for my foreign-owned LLC — what gets reported each quarter?",
      body: "My foreign-owned LLC started paying employees in February. I know I need to file Form 941 quarterly but I'm not sure what exactly goes on it. Is it just wages and taxes withheld? Do I report the employer's share of FICA too? When are the deadlines for each quarter? I've heard the IRS is strict about late filings for employment tax returns. Can I e-file Form 941 or does it have to be mailed?",
      author: {
        displayName: "Tomoko S.",
        avatarSeed: "jp-941-filing-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["Form 941", "quarterly filing", "employment tax return", "e-file", "deadlines"],
      postedAt: "2026-02-03T11:20:00Z",
      viewCount: 2134,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 941 for Foreign-Owned LLCs: Quarterly Filing Guide",
      seoDescription: "Step-by-step guide to filing Form 941 quarterly federal tax return for foreign-owned LLCs. What to report, filing deadlines, and e-file options.",
    },
    answers: [
      {
        id: "a-payroll-form-941-1",
        questionId: "q-payroll-form-941",
        articleContent: {
          sections: [
            {
              heading: "Form 941 reports all federal employment taxes for the quarter",
              body: "Form 941, Employer's Quarterly Federal Tax Return, is the primary form for reporting employment taxes. Each quarter, you report: total wages paid to employees, total federal income tax withheld from employee wages, both the employee and employer shares of Social Security and Medicare taxes, and any adjustments. The form reconciles the total tax liability for the quarter with deposits you have already made via EFTPS, showing any balance due or overpayment.",
            },
            {
              heading: "Yes, you report the employer share of FICA on Form 941",
              body: "Form 941 captures both sides of the FICA equation. Line 5a reports taxable Social Security wages and the combined tax (employee plus employer share at 12.4%). Line 5c reports taxable Medicare wages and the combined tax (employee plus employer at 2.9%). Line 5d reports wages subject to the Additional Medicare Tax (0.9%, employee-only). The form calculates the total tax liability including both the amount you withheld from employees and the matching amount you owe as the employer.",
            },
            {
              heading: "Quarterly deadlines",
              body: "Form 941 is due by the last day of the month following the end of each quarter. The deadlines are: Q1 (January-March) due April 30, Q2 (April-June) due July 31, Q3 (July-September) due October 31, and Q4 (October-December) due January 31 of the following year. If the due date falls on a weekend or legal holiday, the deadline moves to the next business day. Since you started paying employees in February, your first Form 941 covers Q1 (January through March) and is due April 30.",
            },
            {
              heading: "E-filing options for Form 941",
              body: "Yes, you can e-file Form 941. The IRS encourages electronic filing and offers several options. You can use IRS-approved e-file providers or tax preparation software that supports Form 941 e-filing. If you use a payroll service (like Gusto, ADP, or Paychex), they typically handle Form 941 filing on your behalf — both the calculation and the electronic submission. Many foreign LLC owners find that using a payroll service for 941 filing is worth the cost given the complexity of getting every line correct.",
            },
            {
              heading: "Penalties for late filing and underpayment",
              body: "The IRS imposes separate penalties for late filing and late payment of employment taxes. The failure-to-file penalty for Form 941 is 5% of the unpaid tax per month, up to 25%. The failure-to-pay penalty is 0.5% per month up to 25%. These are in addition to interest on any unpaid amount. More importantly, employment taxes are considered trust fund taxes — the income tax and employee FICA you withhold from wages are held in trust for the government. Failing to remit trust fund taxes can result in the Trust Fund Recovery Penalty (TFRP), which can be assessed personally against responsible individuals.",
            },
            {
              heading: "Common mistakes to avoid on Form 941",
              body: "Foreign LLC owners commonly make these errors: (1) Not filing Form 941 for quarters where no wages were paid — if you have an active employer status, you should file a zero return or request to deactivate your filing obligation. (2) Mismatching deposit amounts with amounts reported on Form 941 — the IRS cross-references deposits with returns. (3) Forgetting to include the employer share of FICA when calculating total tax liability. (4) Missing the Additional Medicare Tax withholding for employees earning over $200,000. (5) Not reconciling year-end Form 941 totals with W-2 amounts — the IRS performs this match automatically.",
            },
          ],
          keyTakeaways: [
            "Form 941 reports wages, federal income tax withheld, and both employee and employer shares of FICA quarterly",
            "Filing deadlines are April 30, July 31, October 31, and January 31 for each respective quarter",
            "E-filing is available and encouraged — payroll services typically handle 941 filing automatically",
            "Late filing triggers a 5% per month penalty; late payment of trust fund taxes can lead to personal liability (TFRP)",
            "Year-end Form 941 totals must reconcile with W-2 amounts — the IRS cross-checks automatically",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-04T09:00:00Z",
        sources: [
          { label: "IRS — About Form 941", url: "https://www.irs.gov/forms-pubs/about-form-941" },
          { label: "IRS — Depositing and Reporting Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/depositing-and-reporting-employment-taxes" },
          { label: "IRS — Employment Tax Penalties", url: "https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #5: Form 940 — Annual FUTA Return
  // =====================================================
  {
    question: {
      id: "q-payroll-form-940",
      isFeatured: false,
      title: "When do I file Form 940 for my foreign-owned LLC and what information do I need?",
      body: "I just finished my first year of having employees in my foreign-owned LLC. I've been filing Form 941 quarterly but now I'm told I also need to file Form 940 for FUTA. How is this different from 941? What exactly do I report on Form 940 and when is it due? My LLC is in a state that I've heard might have credit reduction issues. How do I figure that out?",
      author: {
        displayName: "David C.",
        avatarSeed: "au-940-annual-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["Form 940", "FUTA", "annual return", "credit reduction", "foreign LLC"],
      postedAt: "2026-01-30T13:50:00Z",
      viewCount: 987,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 940 Annual FUTA Return for Foreign-Owned LLCs",
      seoDescription: "Guide to filing Form 940 for foreign-owned LLCs. Annual FUTA reporting requirements, credit reduction states, due dates, and how Form 940 differs from Form 941.",
    },
    answers: [
      {
        id: "a-payroll-form-940-1",
        questionId: "q-payroll-form-940",
        articleContent: {
          sections: [
            {
              heading: "Form 940 is the annual FUTA return — separate from Form 941",
              body: "While Form 941 reports income tax withholding and FICA taxes quarterly, Form 940 reports only your Federal Unemployment Tax (FUTA) liability for the entire year. Form 940 is filed once per year and covers all four quarters. You report total wages paid, wages excluded from FUTA (amounts over $7,000 per employee), your gross FUTA tax, the credit for state unemployment tax (SUTA) payments, and the net FUTA tax due. The form also reconciles any quarterly FUTA deposits you made during the year with the total annual liability.",
            },
            {
              heading: "Filing deadline and extensions",
              body: "Form 940 is due by January 31 of the year following the tax year. For the 2025 tax year, it was due January 31, 2026. If you deposited all FUTA tax when due during the year, you get an automatic 10-day extension, making the deadline February 10. The form can be filed on paper or electronically. If you use a payroll service, they typically file Form 940 on your behalf as part of their year-end processing.",
            },
            {
              heading: "Understanding the state unemployment tax credit",
              body: "The FUTA credit is critical to understanding your actual tax cost. Employers who pay state unemployment tax receive a credit against FUTA of up to 5.4%, reducing the effective rate from 6.0% to 0.6%. To receive the full credit, you must pay all required SUTA contributions by the Form 940 due date. If your state has outstanding loans from the federal unemployment trust fund, the IRS may apply a credit reduction, meaning your FUTA credit is less than 5.4% and your effective FUTA rate is higher. The IRS publishes the list of credit reduction states each November for the prior tax year.",
            },
            {
              heading: "How to check if your state has a credit reduction",
              body: "The IRS publishes a list of credit reduction states on its website each year, typically in November. States end up on this list when they borrow from the federal unemployment trust fund and fail to repay the loans within the required timeframe. If your state is on the list, you must complete Schedule A (Form 940) and pay the additional FUTA tax. For example, if your state has a credit reduction of 0.3%, your effective FUTA rate increases from 0.6% to 0.9%. Check the IRS website or Form 940 instructions for the current year's credit reduction states.",
            },
            {
              heading: "Reporting multi-state employees on Form 940",
              body: "If you have employees in more than one state, you must complete Schedule A (Form 940) to report wages by state. This is necessary because different states may have different SUTA rates and some may be credit reduction states. Each state's wages are reported separately so the IRS can calculate the correct FUTA credit for each state. Foreign-owned LLCs with remote employees in multiple states frequently need Schedule A even if no states have credit reductions, simply to properly allocate the state-by-state wage breakdown.",
            },
          ],
          keyTakeaways: [
            "Form 940 is filed annually by January 31 (or February 10 if all FUTA deposits were made on time)",
            "It reports only FUTA tax — separate from Form 941 which covers income tax withholding and FICA",
            "The state unemployment tax credit typically reduces the effective FUTA rate from 6.0% to just 0.6%",
            "Check the IRS credit reduction states list annually — affected states increase your FUTA cost",
            "Multi-state employers must complete Schedule A (Form 940) to report wages by state",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-31T10:15:00Z",
        sources: [
          { label: "IRS — About Form 940", url: "https://www.irs.gov/forms-pubs/about-form-940" },
          { label: "IRS — Form 940 Instructions", url: "https://www.irs.gov/instructions/i940" },
          { label: "IRS — FUTA Credit Reduction", url: "https://www.irs.gov/businesses/small-businesses-self-employed/futa-credit-reduction" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #6: Form 944 — Annual Federal Tax Return (Small Employers)
  // =====================================================
  {
    question: {
      id: "q-payroll-form-944",
      isFeatured: false,
      title: "Can my foreign-owned LLC file Form 944 instead of quarterly Form 941?",
      body: "I have a tiny foreign-owned LLC with one part-time employee whose total annual wages are about $8,000. Filing Form 941 every quarter seems like a lot of paperwork for such a small amount. I heard there's a Form 944 for small employers that lets you file just once a year. Am I eligible? How do I switch from 941 to 944? Is there a downside to filing 944 instead?",
      author: {
        displayName: "Annika H.",
        avatarSeed: "se-944-small-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["Form 944", "small employer", "annual filing", "Form 941", "foreign LLC"],
      postedAt: "2026-02-10T08:30:00Z",
      viewCount: 743,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 944 vs Form 941: Annual Filing for Small Foreign LLCs",
      seoDescription: "Can your foreign-owned LLC file Form 944 annually instead of quarterly Form 941? Eligibility rules, how to request the switch, and considerations for small employers.",
    },
    answers: [
      {
        id: "a-payroll-form-944-1",
        questionId: "q-payroll-form-944",
        articleContent: {
          sections: [
            {
              heading: "Form 944 is for employers with $1,000 or less in annual employment tax liability",
              body: "Form 944, Employer's Annual Federal Tax Return, allows qualifying small employers to file employment taxes once per year instead of quarterly. To be eligible, your total annual liability for Social Security, Medicare, and withheld federal income taxes must be $1,000 or less. With $8,000 in annual wages, your employment tax liability would include federal income tax withholding (varies by W-4 elections) plus FICA taxes (employer and employee shares combined at 15.3%). At $8,000 in wages, the FICA alone would be about $1,224, which likely exceeds the $1,000 threshold. You may not qualify.",
            },
            {
              heading: "How to request permission to file Form 944",
              body: "You cannot simply choose to file Form 944 — the IRS must authorize it. For new employers, the IRS may notify you of your eligibility when you apply for an EIN. For existing employers who file Form 941, you must contact the IRS by phone or in writing during the first calendar month of the tax year (January) to request the switch. Call the IRS Business and Specialty Tax Line at 1-800-829-4933. The IRS will review your estimated annual liability and either approve or deny the request. You cannot switch mid-year.",
            },
            {
              heading: "Filing and deposit requirements for Form 944 filers",
              body: "Form 944 is due by January 31 of the year following the tax year. If your total annual tax liability is less than $2,500, you can pay the full amount with the return rather than making periodic deposits. If your liability is $2,500 or more, you must follow the same deposit rules as Form 941 filers (monthly or semiweekly). The form reports the same information as Form 941 but covers the entire year: total wages, federal income tax withheld, Social Security and Medicare taxes for all four quarters combined.",
            },
            {
              heading: "Considerations before switching to Form 944",
              body: "While filing once a year sounds simpler, there are trade-offs. First, as noted, the $1,000 threshold is quite low — many employers with even one part-time employee exceed it. Second, if your business grows and you hire additional employees mid-year, you cannot switch back to Form 941 until the following year with IRS approval. Third, some payroll services do not support Form 944, which could limit your service options. Fourth, quarterly filing with Form 941 forces regular reconciliation of your payroll taxes, which can help catch errors early.",
            },
          ],
          keyTakeaways: [
            "Form 944 eligibility requires total annual employment tax liability of $1,000 or less — most employers with even one employee exceed this",
            "You must receive IRS authorization to file Form 944 — you cannot simply choose it over Form 941",
            "Request the switch by contacting the IRS in January of the tax year you want to begin filing Form 944",
            "With $8,000 in annual wages, FICA alone would be approximately $1,224, likely making you ineligible for Form 944",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-11T09:45:00Z",
        sources: [
          { label: "IRS — About Form 944", url: "https://www.irs.gov/forms-pubs/about-form-944" },
          { label: "IRS — Form 944 Instructions", url: "https://www.irs.gov/instructions/i944" },
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #7: W-2 Reporting Obligations
  // =====================================================
  {
    question: {
      id: "q-payroll-w2",
      isFeatured: false,
      title: "What are the W-2 reporting obligations for a foreign-owned LLC with employees?",
      body: "My foreign-owned LLC had two employees in 2025. I know I need to issue W-2s but I have several questions. What's the deadline? Do I send copies to the IRS too? I've heard about the W-3 transmittal form — do I need that? What happens if I issue them late? Also, does the W-2 show the foreign owner's information anywhere or just the LLC's EIN?",
      author: {
        displayName: "Wei L.",
        avatarSeed: "cn-w2-report-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["W-2", "Form W-3", "wage reporting", "SSA filing", "deadline"],
      postedAt: "2026-01-08T15:10:00Z",
      viewCount: 1678,
      answerCount: 1,
      status: "answered",
      seoTitle: "W-2 Reporting for Foreign-Owned LLCs: Deadlines and Rules",
      seoDescription: "W-2 filing obligations for foreign-owned LLC employers. Deadlines for employee copies and SSA submission, W-3 transmittal, penalties for late filing, and what information appears on the W-2.",
    },
    answers: [
      {
        id: "a-payroll-w2-1",
        questionId: "q-payroll-w2",
        articleContent: {
          sections: [
            {
              heading: "W-2 deadline: January 31 for both employees and the SSA",
              body: "You must furnish Copy B and Copy C of Form W-2 to each employee by January 31 of the year following the tax year. The same January 31 deadline applies for filing Copy A of all W-2s with the Social Security Administration (SSA). This unified deadline — employees and SSA both by January 31 — was implemented to combat tax fraud. There is no automatic extension for furnishing W-2s to employees. For the SSA filing, you can request a 30-day extension using Form 8809, but this is generally discouraged and only granted for certain reasons.",
            },
            {
              heading: "Form W-3: the transmittal form for paper filings",
              body: "If you file paper W-2s with the SSA, you must include Form W-3, Transmittal of Wage and Tax Statements. The W-3 summarizes all the W-2s you are submitting — total wages, total Social Security taxes, total Medicare taxes, and total federal income tax withheld across all employees. If you e-file through the SSA's Business Services Online (BSO) system, the W-3 information is generated automatically as part of the electronic submission. Employers filing 10 or more W-2s are required to file electronically.",
            },
            {
              heading: "What appears on the W-2 — LLC information, not owner information",
              body: "The W-2 identifies the employer as the LLC, using the LLC's EIN and legal name. The foreign owner's personal information does not appear on the W-2. Box (a) shows the employee's Social Security number, boxes (b) shows the employer's EIN, box (c) shows the employer's name and address (your LLC), and boxes (d) through (f) show the employee's name and address. The remaining boxes report wages and tax amounts. Your personal status as a foreign owner has no bearing on how the W-2 is prepared.",
            },
            {
              heading: "Reconciliation: W-2 totals must match Form 941 totals",
              body: "The SSA and IRS cross-reference the totals on your W-2s and W-3 with the amounts reported on your four quarterly Form 941s. The total wages, Social Security wages, Medicare wages, and tax amounts should match. If there are discrepancies, you may receive a notice from the IRS or SSA asking for correction. This is why it is important to reconcile your payroll records at year-end before issuing W-2s. If you discover errors after filing, you can file Form W-2c (Corrected Wage and Tax Statement) and Form W-3c (Transmittal of Corrected Wage and Tax Statements).",
            },
            {
              heading: "Penalties for late or incorrect W-2 filings",
              body: "Penalties for late W-2 filings depend on how late they are. If filed within 30 days of the due date, the penalty is $60 per W-2. If filed more than 30 days late but by August 1, the penalty is $130 per W-2. If filed after August 1 or not at all, the penalty is $330 per W-2. For intentional disregard of filing requirements, the penalty is $660 per W-2 with no maximum. Small businesses (average annual gross receipts of $5 million or less) have lower maximum penalties. These penalties apply per W-2, so with two employees, each late W-2 incurs its own penalty.",
            },
          ],
          keyTakeaways: [
            "W-2s must be furnished to employees and filed with the SSA by January 31 — one unified deadline",
            "Form W-3 is required for paper filings as a transmittal summary; e-filing generates it automatically",
            "The W-2 shows the LLC's EIN and name — the foreign owner's personal information does not appear",
            "W-2 totals must reconcile with quarterly Form 941 totals; discrepancies trigger IRS/SSA notices",
            "Late filing penalties range from $60 to $330+ per W-2 depending on how late the filing is",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-09T10:30:00Z",
        sources: [
          { label: "IRS — About Form W-2", url: "https://www.irs.gov/forms-pubs/about-form-w-2" },
          { label: "IRS — General Instructions for Forms W-2 and W-3", url: "https://www.irs.gov/instructions/iw2w3" },
          { label: "SSA — Business Services Online", url: "https://www.ssa.gov/bso/bsowelcome.htm" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #8: Can a Foreign LLC Owner Pay Themselves a Salary?
  // =====================================================
  {
    question: {
      id: "q-payroll-owner-salary",
      isFeatured: true,
      title: "Can I pay myself a salary from my foreign-owned single-member LLC?",
      body: "I'm a non-resident alien from Brazil who owns a single-member LLC in the U.S. The LLC does web development work and earns good revenue. I want to pay myself a regular salary like an employee. Is this allowed? Would I be subject to U.S. payroll taxes? I've read that LLC members can't be employees of their own LLC — is that true? What's the best way to take money out of the LLC as a foreign owner?",
      author: {
        displayName: "Rafael G.",
        avatarSeed: "br-owner-salary-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["owner salary", "self-employment", "single-member LLC", "guaranteed payments", "NRA owner"],
      postedAt: "2026-02-15T10:00:00Z",
      viewCount: 2567,
      answerCount: 1,
      status: "answered",
      seoTitle: "Can a Foreign LLC Owner Pay Themselves a Salary?",
      seoDescription: "Whether a non-resident alien owner of a single-member LLC can pay themselves a salary. IRS rules on LLC member employment, owner draws, and tax implications.",
    },
    answers: [
      {
        id: "a-payroll-owner-salary-1",
        questionId: "q-payroll-owner-salary",
        articleContent: {
          sections: [
            {
              heading: "LLC members generally cannot be W-2 employees of their own LLC",
              body: "Under IRS Revenue Ruling 69-184, a partnership (or a multi-member LLC taxed as a partnership) cannot treat its partners as employees for employment tax purposes. For a single-member LLC, the entity is disregarded for tax purposes, meaning you and the LLC are treated as the same taxpayer. You cannot employ yourself — it would be like paying yourself wages from your own bank account. This is true regardless of whether the LLC owner is a U.S. person or a non-resident alien. The only exception is if the LLC has elected to be taxed as an S-corporation or C-corporation.",
            },
            {
              heading: "How foreign LLC owners typically take money out of their LLC",
              body: "As a single-member LLC owner, you take money out through owner draws (also called distributions). This is simply a transfer from the LLC's bank account to your personal account. Owner draws are not wages and are not subject to payroll tax withholding. They are not deductible business expenses either — they are a reduction of your equity in the LLC. For a non-resident alien owner of a disregarded entity LLC with no U.S. effectively connected income, these draws generally have no U.S. income tax consequence, though you must still file Form 5472 to report transactions between you and the LLC.",
            },
            {
              heading: "Self-employment tax generally does not apply to NRA LLC owners",
              body: "Self-employment tax (the self-employed equivalent of FICA) applies to U.S. citizens and resident aliens who earn self-employment income. Non-resident aliens are generally not subject to U.S. self-employment tax on income from a U.S. LLC, unless a totalization agreement between the U.S. and their home country provides otherwise. Since you are a non-resident alien from Brazil, and the U.S. does not have a totalization agreement with Brazil, you would not owe U.S. self-employment tax on your LLC income. However, you may owe social security contributions in Brazil on this income.",
            },
            {
              heading: "The S-corp or C-corp election changes the rules",
              body: "If your LLC elects to be taxed as an S-corporation (Form 2553) or C-corporation (Form 8832), the entity becomes a separate taxpayer that can employ its owners. As a corporate officer performing services, you would be required to pay yourself a reasonable salary, subject to all payroll taxes. However, S-corp election is generally not available to non-resident aliens (S-corps cannot have NRA shareholders). A C-corp election is possible but creates double taxation (corporate tax on profits plus withholding tax on distributions). Most foreign-owned single-member LLCs remain as disregarded entities.",
            },
            {
              heading: "Practical approach for your situation",
              body: "For a non-resident alien owner of a disregarded entity LLC: (1) Take owner draws as needed rather than a salary. (2) You are not subject to U.S. self-employment tax as an NRA. (3) If your LLC's income is not effectively connected with a U.S. trade or business, there may be no U.S. income tax on the draws. (4) Continue to file Form 5472 annually to report all reportable transactions. (5) If you want the structure and regularity of a paycheck, you can set up scheduled owner draws — just understand they are draws, not salary, and carry different tax treatment.",
            },
          ],
          keyTakeaways: [
            "LLC members generally cannot be W-2 employees of their own LLC — IRS Revenue Ruling 69-184 prohibits this",
            "Foreign single-member LLC owners take money out through owner draws, not salary",
            "Non-resident aliens are generally not subject to U.S. self-employment tax on LLC income",
            "Only if the LLC elects corporate taxation (C-corp) can the owner be paid a salary — S-corp is unavailable to NRAs",
            "Owner draws are not wages, not subject to payroll withholding, and not deductible business expenses",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-16T11:30:00Z",
        sources: [
          { label: "IRS — Self-Employment Tax", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
          { label: "IRS — Single Member Limited Liability Companies", url: "https://www.irs.gov/businesses/small-businesses-self-employed/single-member-limited-liability-companies" },
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #9: Self-Employment Tax for Foreign LLC Owners
  // =====================================================
  {
    question: {
      id: "q-payroll-self-employment-tax",
      isFeatured: false,
      title: "Does self-employment tax apply to non-resident alien LLC owners in the U.S.?",
      body: "I'm a non-resident alien from South Korea who owns a single-member LLC. My accountant mentioned something about self-employment tax being 15.3% on top of income tax. That seems really high. As a non-resident alien, do I have to pay this? I've seen conflicting information — some sources say NRAs are exempt, others say it depends on whether you have a totalization agreement. What's the actual rule?",
      author: {
        displayName: "Joon K.",
        avatarSeed: "kr-se-tax-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["self-employment tax", "NRA", "non-resident alien", "totalization", "FICA", "Social Security"],
      postedAt: "2026-02-20T12:15:00Z",
      viewCount: 1834,
      answerCount: 1,
      status: "answered",
      seoTitle: "Self-Employment Tax: Does It Apply to NRA LLC Owners?",
      seoDescription: "Whether non-resident alien owners of U.S. LLCs owe self-employment tax. Rules for NRAs, totalization agreement impact, and how the 15.3% SE tax works.",
    },
    answers: [
      {
        id: "a-payroll-self-employment-tax-1",
        questionId: "q-payroll-self-employment-tax",
        articleContent: {
          sections: [
            {
              heading: "What self-employment tax is and how the 15.3% rate works",
              body: "Self-employment tax is the Social Security and Medicare tax for individuals who work for themselves. It is essentially the equivalent of FICA — but since there is no employer to pay the other half, self-employed individuals pay both halves. The rate is 15.3%, composed of 12.4% for Social Security (on net earnings up to the Social Security wage base of $176,100 in 2026) and 2.9% for Medicare (no cap). An additional 0.9% Medicare tax applies to net self-employment earnings above $200,000. Self-employment tax is reported on Schedule SE of the individual's tax return.",
            },
            {
              heading: "The general rule: NRAs are not subject to U.S. self-employment tax",
              body: "Under IRC Section 1402(b), self-employment income includes net earnings from self-employment. However, for non-resident aliens, the IRS generally does not impose self-employment tax on income that is not effectively connected with a U.S. trade or business. Even for income that is effectively connected, NRAs are typically not covered under the U.S. Social Security system and therefore are not subject to self-employment tax. The key distinction is between being subject to U.S. income tax (which NRAs can be, on ECI) and being covered by the U.S. Social Security system (which NRAs generally are not).",
            },
            {
              heading: "Totalization agreements can change the analysis",
              body: "The U.S. has bilateral Social Security agreements (totalization agreements) with about 30 countries. These agreements determine which country's Social Security system covers a worker. If you are from a country with a totalization agreement and you are self-employed in the U.S. (or your self-employment is connected with the U.S.), the agreement may require you to pay into one country's system or the other — but not both. South Korea does have a totalization agreement with the U.S. Under this agreement, your coverage is generally determined by where you are a resident. As a resident of South Korea performing services through a U.S. LLC, you would typically remain covered under the Korean social security system.",
            },
            {
              heading: "Certificate of coverage: proving your exemption",
              body: "If a totalization agreement applies and you are covered by your home country's social security system, you can obtain a Certificate of Coverage from your home country's social security agency. This certificate proves to the IRS that you are covered under the foreign system and exempt from U.S. self-employment tax. For South Korea, you would request this from the National Pension Service. While not always strictly required, having a Certificate of Coverage provides clear documentation in case of an IRS inquiry.",
            },
            {
              heading: "When self-employment tax might apply to an NRA",
              body: "There are limited scenarios where an NRA could be subject to U.S. self-employment tax. If an NRA becomes a U.S. resident alien (for example, by meeting the substantial presence test), they become subject to self-employment tax on their worldwide self-employment income, just like a U.S. citizen. Additionally, certain totalization agreements may assign U.S. coverage to a self-employed individual in specific circumstances, such as when the individual is working in the U.S. for an extended period. If your tax status changes from NRA to resident alien, consult a tax professional immediately as this triggers significant additional obligations.",
            },
          ],
          keyTakeaways: [
            "Non-resident aliens are generally NOT subject to U.S. self-employment tax — they are not covered by U.S. Social Security",
            "Self-employment tax is 15.3% (12.4% Social Security + 2.9% Medicare) — the self-employed equivalent of FICA",
            "Totalization agreements between the U.S. and ~30 countries determine which country's social security system applies",
            "South Korea has a totalization agreement with the U.S. — Korean residents typically remain under the Korean system",
            "Obtain a Certificate of Coverage from your home country's social security agency to document your exemption",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-21T09:00:00Z",
        sources: [
          { label: "IRS — Self-Employment Tax", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
          { label: "SSA — International Agreements", url: "https://www.ssa.gov/international/agreements_overview.html" },
          { label: "IRS — Social Security Tax Consequences of Working Abroad", url: "https://www.irs.gov/individuals/international-taxpayers/social-security-tax-consequences-of-working-abroad" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #10: Independent Contractors vs Employees
  // =====================================================
  {
    question: {
      id: "q-payroll-contractor-vs-employee",
      isFeatured: true,
      title: "How does my foreign-owned LLC decide if a worker is an employee or independent contractor?",
      body: "I have a foreign-owned LLC and I'm working with several people in the U.S. — a web developer who works from home on their own schedule, a virtual assistant who works set hours, and a marketing consultant who handles specific projects. I've been paying them all as independent contractors with 1099s. But I've read that misclassifying employees as contractors can lead to huge penalties. How do I know if any of these workers should actually be classified as employees? What factors does the IRS look at?",
      author: {
        displayName: "Elena V.",
        avatarSeed: "ru-classify-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["independent contractor", "employee", "classification", "misclassification", "1099", "W-2"],
      postedAt: "2026-02-25T14:30:00Z",
      viewCount: 2891,
      answerCount: 1,
      status: "answered",
      seoTitle: "Employee vs Independent Contractor: Classification for Foreign LLCs",
      seoDescription: "How foreign-owned LLCs classify workers as employees or independent contractors. IRS common law rules, behavioral and financial control tests, and misclassification penalties.",
    },
    answers: [
      {
        id: "a-payroll-contractor-vs-employee-1",
        questionId: "q-payroll-contractor-vs-employee",
        articleContent: {
          sections: [
            {
              heading: "The IRS uses a three-category test for worker classification",
              body: "The IRS examines the relationship between the worker and the business using three categories of evidence: behavioral control, financial control, and the type of relationship. Behavioral control asks whether the business has the right to direct and control how the worker does the work — not just what work is done, but the methods and means used. Financial control considers whether the business has the right to control the financial aspects of the worker's job, including how the worker is paid, whether expenses are reimbursed, and who provides tools and supplies. Type of relationship looks at written contracts, employee benefits, permanency of the relationship, and whether the services performed are a key activity of the business.",
            },
            {
              heading: "Applying the test to your three workers",
              body: "Based on your descriptions: The web developer who works from home on their own schedule, using their own equipment and methods, with project-based deliverables, is more likely to be correctly classified as an independent contractor. The virtual assistant who works set hours raises more flags — set hours suggest behavioral control, especially if you dictate when and how work is performed. The marketing consultant handling specific projects with defined scope and deliverables is more likely an independent contractor, assuming they control how the work gets done. However, no single factor is determinative — the IRS looks at the totality of the circumstances.",
            },
            {
              heading: "Key indicators that suggest employee status",
              body: "The following factors point toward employee classification: you set the worker's hours or schedule, you provide the tools, equipment, or workspace, you train the worker on how to do the job, you control the order or sequence of work, you pay by the hour/week/month rather than by project, the worker cannot profit or lose money on the engagement, the worker performs services exclusively or primarily for you, the relationship is ongoing with no defined end date, and you provide benefits like insurance or paid time off. The more of these factors present, the stronger the case for employee status.",
            },
            {
              heading: "Penalties for misclassification are severe",
              body: "If the IRS determines you misclassified employees as independent contractors, you become liable for the employer's share of FICA taxes that should have been withheld, plus a portion of the employee's share of FICA, federal income tax that should have been withheld, and penalties. Under IRC Section 3509, the assessment is typically 1.5% of wages for income tax withholding and 20% of the employee share of FICA. If the misclassification is intentional, penalties are doubled and you do not qualify for Section 3509 reduced rates. You may also face state-level penalties for failure to carry workers' compensation insurance and pay state unemployment taxes.",
            },
            {
              heading: "Form SS-8: requesting an IRS determination",
              body: "If you are unsure about a worker's classification, you or the worker can file Form SS-8, Determination of Worker Status for Purposes of Federal Employment Taxes and Income Tax Withholding. The IRS will review the facts and circumstances and issue a determination letter. However, the process takes several months, and the IRS determination may not align with your preference. Section 530 relief may provide protection from employment tax liability if you had a reasonable basis for treating workers as independent contractors and you filed all required 1099 forms consistently.",
            },
            {
              heading: "Best practices for foreign LLC owners",
              body: "To protect your LLC: (1) Document the classification basis for each worker in writing. (2) Use clear independent contractor agreements that specify the scope of work, deliverables, and the independent nature of the relationship. (3) Allow contractors to control how they perform the work. (4) Pay contractors by the project, not by the hour (where practical). (5) Do not provide ongoing training. (6) File Form 1099-NEC for all contractors paid $600 or more. (7) If a worker's situation changes — for example, a project-based consultant becomes a full-time, ongoing role — reassess the classification. (8) Consider consulting an employment attorney for borderline cases, especially for the virtual assistant role you described.",
            },
          ],
          keyTakeaways: [
            "The IRS uses three categories — behavioral control, financial control, and type of relationship — to classify workers",
            "Set hours, employer-provided tools, and ongoing relationships suggest employee status; project-based, self-directed work suggests contractor status",
            "Misclassification penalties include back FICA taxes, income tax withholding, and additional penalties under IRC Section 3509",
            "File Form SS-8 to request an IRS determination if classification is unclear",
            "Document the classification basis and use written contractor agreements to support independent contractor treatment",
            "Re-evaluate classification if the working relationship changes over time",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-02-26T10:00:00Z",
        sources: [
          { label: "IRS — Independent Contractor vs Employee", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" },
          { label: "IRS — Worker Classification", url: "https://www.irs.gov/businesses/small-businesses-self-employed/worker-classification-101-employee-or-independent-contractor" },
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #11: Form 1099-NEC for Contractor Payments
  // =====================================================
  {
    question: {
      id: "q-payroll-1099-nec",
      isFeatured: false,
      title: "How does my foreign-owned LLC file Form 1099-NEC for independent contractor payments?",
      body: "My foreign-owned single-member LLC paid three independent contractors in the U.S. during 2025 — a graphic designer ($4,500), a content writer ($12,000), and an accountant ($3,200). Do I need to issue a 1099-NEC to all of them? What's the filing threshold? How do I get their tax information — do they fill out a W-9? And do I file the 1099-NECs with the IRS or just give them to the contractors?",
      author: {
        displayName: "Sophie D.",
        avatarSeed: "fr-1099-nec-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["Form 1099-NEC", "independent contractor", "W-9", "filing threshold", "information return"],
      postedAt: "2026-01-05T09:45:00Z",
      viewCount: 2245,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 1099-NEC: Filing Guide for Foreign-Owned LLCs",
      seoDescription: "How foreign-owned LLCs file Form 1099-NEC for independent contractor payments. Filing threshold, W-9 collection, deadlines, and e-filing requirements.",
    },
    answers: [
      {
        id: "a-payroll-1099-nec-1",
        questionId: "q-payroll-1099-nec",
        articleContent: {
          sections: [
            {
              heading: "The $600 threshold determines who gets a 1099-NEC",
              body: "You must file Form 1099-NEC for each person to whom you paid $600 or more during the year for services performed as a non-employee. Based on your payments: the graphic designer ($4,500), the content writer ($12,000), and the accountant ($3,200) all exceed the $600 threshold. You need to issue 1099-NECs to all three. The threshold applies per payee per year — it does not matter whether the $600 was paid in one lump sum or across multiple payments throughout the year.",
            },
            {
              heading: "Collect Form W-9 before making the first payment",
              body: "Before you pay any independent contractor, request they complete Form W-9, Request for Taxpayer Identification Number and Certification. The W-9 provides their legal name, business name (if different), entity type, address, and Taxpayer Identification Number (TIN — either their Social Security Number or Employer Identification Number). You keep the W-9 in your records — do not send it to the IRS. The information from the W-9 is what you use to prepare the 1099-NEC. Best practice is to collect the W-9 before making any payment, because if a contractor refuses to provide a TIN, you may be required to apply backup withholding at 24%.",
            },
            {
              heading: "Filing deadline and where to file",
              body: "Form 1099-NEC must be filed with the IRS and furnished to the payee by January 31 of the year following the payment year. Unlike some other information returns, there is no extended due date — January 31 is the hard deadline for both. You file Copy A with the IRS (along with transmittal Form 1096 if filing on paper) and furnish Copy B to each contractor. If filing 10 or more information returns (including 1099-NECs and any other types), you are required to e-file. You can e-file through the IRS FIRE (Filing Information Returns Electronically) system.",
            },
            {
              heading: "Payments to corporations are generally exempt",
              body: "You generally do not need to issue a 1099-NEC for payments made to corporations (both C-corps and S-corps), with some exceptions. Payments for legal services must be reported on Form 1099-NEC regardless of the payee's entity type. This is why collecting the W-9 upfront is important — Box 3 on the W-9 indicates the entity type. If your accountant is operating as a corporation, you may not need to issue them a 1099-NEC (unless they are providing legal services). If they are a sole proprietor, partnership, or LLC, the 1099-NEC is required.",
            },
            {
              heading: "Penalties for failure to file or furnish 1099-NEC",
              body: "Penalties for not filing 1099-NECs with the IRS or not furnishing copies to payees are assessed per form. The penalty for filing within 30 days of the due date is $60 per form. For filing more than 30 days late but by August 1, the penalty is $130 per form. For filing after August 1 or not at all, the penalty is $330 per form. For intentional disregard, the penalty is $660 per form with no maximum. These amounts are per 1099-NEC, so with three contractors, each unfiled form incurs its own penalty. Small business caps on maximum penalties apply based on gross receipts.",
            },
          ],
          keyTakeaways: [
            "Issue Form 1099-NEC to any independent contractor paid $600 or more during the year — all three of your contractors qualify",
            "Collect Form W-9 from every contractor before the first payment to get their TIN and entity type",
            "The filing deadline is January 31 for both IRS filing and furnishing to the contractor — no extensions available",
            "Payments to corporations are generally exempt from 1099-NEC reporting (with exceptions for legal services)",
            "Late filing penalties range from $60 to $660 per form depending on how late and whether the failure is intentional",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-01-06T11:00:00Z",
        sources: [
          { label: "IRS — About Form 1099-NEC", url: "https://www.irs.gov/forms-pubs/about-form-1099-nec" },
          { label: "IRS — Instructions for Form 1099-NEC", url: "https://www.irs.gov/instructions/i1099nec" },
          { label: "IRS — About Form W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #12: Backup Withholding (24%)
  // =====================================================
  {
    question: {
      id: "q-payroll-backup-withholding",
      isFeatured: false,
      title: "A contractor for my foreign-owned LLC won't give me their TIN — do I have to withhold 24%?",
      body: "I hired a freelance writer through my foreign-owned LLC. When I asked for their W-9, they said they'd send it later and never did. I've already paid them $2,500 over several months. Now they're pushing back on providing their Social Security number. I've heard about something called backup withholding at 24%. Am I required to do this? How does it work practically — do I just keep 24% of each payment? Where does that money go?",
      author: {
        displayName: "Marco B.",
        avatarSeed: "it-backup-wh-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["backup withholding", "TIN", "W-9", "24%", "Form 945", "independent contractor"],
      postedAt: "2026-03-01T11:00:00Z",
      viewCount: 1123,
      answerCount: 1,
      status: "answered",
      seoTitle: "Backup Withholding at 24%: When Contractors Won't Provide TIN",
      seoDescription: "When and how foreign-owned LLCs must apply 24% backup withholding on contractor payments. Rules for missing TINs, deposit requirements, and reporting on Form 945.",
    },
    answers: [
      {
        id: "a-payroll-backup-withholding-1",
        questionId: "q-payroll-backup-withholding",
        articleContent: {
          sections: [
            {
              heading: "Yes — backup withholding at 24% is required when a payee fails to provide a TIN",
              body: "Under IRC Section 3406, you are required to withhold 24% from payments to a payee who fails to furnish a correct Taxpayer Identification Number (TIN). This is called backup withholding. It applies to payments reportable on Form 1099-NEC, among other information returns. If your contractor refuses or fails to provide their TIN via Form W-9, you must begin withholding 24% from each payment. This is not optional — it is a legal obligation for the payer (your LLC).",
            },
            {
              heading: "How backup withholding works in practice",
              body: "When you make a payment to the contractor, you calculate the gross amount, withhold 24%, and pay the contractor the remaining 76%. For example, if you owe the contractor $1,000 for a project, you pay them $760 and withhold $240. The withheld $240 is deposited with the IRS using EFTPS, similar to employment tax deposits. You should have started backup withholding from the very first payment when the contractor failed to provide a W-9. For the $2,500 already paid without withholding, you may have liability for failing to withhold. Going forward, begin withholding immediately on all future payments.",
            },
            {
              heading: "Depositing and reporting backup withholding",
              body: "Backup withholding is deposited with the IRS through EFTPS, but it is separate from employment taxes. The deposit rules for backup withholding follow the same schedule as employment taxes — either monthly or semiweekly depending on your total tax liability. At year-end, you report total backup withholding on Form 945, Annual Return of Withheld Federal Income Tax. Form 945 is due by January 31 of the following year. On the contractor's Form 1099-NEC, you report the gross payment amount in Box 1 and the amount of backup withholding in Box 4.",
            },
            {
              heading: "Penalties for failing to apply backup withholding",
              body: "If you were required to backup withhold and did not, you are liable for the amount that should have been withheld. For the $2,500 already paid, the IRS could assess $600 (24% of $2,500) against your LLC, plus penalties and interest. The penalty for failure to make backup withholding deposits on time is the same as for employment tax deposits: 2% to 15% depending on how late. Additionally, the IRS can hold the payer responsible for the full amount of backup withholding that should have been collected, even if it was not actually withheld from the payee's payments.",
            },
            {
              heading: "Getting the contractor to provide their TIN",
              body: "You have several practical options: (1) Firmly inform the contractor that you are legally required to withhold 24% from all future payments until they provide a completed W-9 with a valid TIN. This financial incentive often resolves the issue. (2) If they still refuse, continue withholding 24% and file the 1099-NEC at year-end with the TIN field blank and backup withholding reported in Box 4. (3) Consider whether this contractor relationship is worth continuing — a contractor who refuses to provide a TIN is either trying to avoid taxes or has other issues that could create problems for your LLC. (4) For future contractor relationships, always collect the W-9 before making the first payment.",
            },
          ],
          keyTakeaways: [
            "Backup withholding at 24% is legally required when a contractor fails to provide a TIN via Form W-9",
            "Withhold 24% from each gross payment, deposit the withheld amount via EFTPS, and report on Form 945 annually",
            "Report the gross payment on 1099-NEC Box 1 and backup withholding amount in Box 4",
            "Failure to apply backup withholding makes your LLC liable for the amount that should have been withheld, plus penalties",
            "Always collect Form W-9 before making the first payment to any contractor to avoid this situation",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-02T08:30:00Z",
        sources: [
          { label: "IRS — Backup Withholding", url: "https://www.irs.gov/businesses/small-businesses-self-employed/backup-withholding" },
          { label: "IRS — About Form 945", url: "https://www.irs.gov/forms-pubs/about-form-945" },
          { label: "IRS — About Form 1099-NEC", url: "https://www.irs.gov/forms-pubs/about-form-1099-nec" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #13: NRA Employees — Special Withholding Rules
  // =====================================================
  {
    question: {
      id: "q-payroll-nra-employees",
      isFeatured: false,
      title: "My foreign-owned LLC hired a non-resident alien employee — are there special withholding rules?",
      body: "My foreign-owned LLC just hired someone on an H-1B visa to work in our New York office. They told me they are a non-resident alien for tax purposes since they just arrived in the U.S. Are there different withholding rules for NRA employees compared to U.S. citizens? I've heard they can't claim certain exemptions on the W-4. Do I also need to file any special forms for NRA employees? Is FICA still required?",
      author: {
        displayName: "Ravi P.",
        avatarSeed: "in-nra-emp-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["NRA employee", "non-resident alien", "withholding", "W-4", "H-1B", "Form 8233"],
      postedAt: "2026-03-05T10:30:00Z",
      viewCount: 1567,
      answerCount: 1,
      status: "answered",
      seoTitle: "NRA Employee Withholding Rules for Foreign-Owned LLCs",
      seoDescription: "Special payroll withholding rules when a foreign-owned LLC hires a non-resident alien employee. W-4 restrictions, FICA applicability, and treaty-based exemptions.",
    },
    answers: [
      {
        id: "a-payroll-nra-employees-1",
        questionId: "q-payroll-nra-employees",
        articleContent: {
          sections: [
            {
              heading: "NRA employees have different W-4 and withholding rules",
              body: "Non-resident alien employees must follow special instructions when completing Form W-4. An NRA employee cannot claim filing status of \"Married filing jointly\" and cannot claim the standard deduction amount on Step 3 of the W-4. Instead, NRA employees generally must write \"Nonresident Alien\" or \"NRA\" above Step 1(c) on their W-4 form. For withholding purposes, the IRS instructs employers to add an additional amount to the employee's wages for the purpose of calculating federal income tax withholding. This is described in IRS Publication 15 (Circular E) and Notice 1392.",
            },
            {
              heading: "FICA taxes apply to H-1B visa holders",
              body: "FICA (Social Security and Medicare) taxes generally apply to NRA employees who are working in the United States. H-1B visa holders are subject to FICA regardless of their non-resident alien tax status. The key FICA exemption for NRAs applies to F-1, J-1, M-1, and Q-1 visa holders who are still in their exempt period (generally 5 years for F-1 students and 2 years for J-1 scholars). Since your employee is on an H-1B visa, you must withhold and pay FICA taxes (Social Security and Medicare) just as you would for a U.S. citizen or resident alien employee.",
            },
            {
              heading: "Tax treaty benefits may reduce withholding",
              body: "If the NRA employee is from a country that has an income tax treaty with the United States, certain types of compensation may be partially or fully exempt from U.S. tax. To claim treaty benefits on wages, the employee must file Form 8233, Exemption from Withholding on Compensation for Independent (and Certain Dependent) Personal Services of a Nonresident Alien Individual. You as the employer must review the form, accept it if it appears valid, and adjust withholding accordingly. Common treaty provisions include exemptions for teaching and research income, and reduced tax rates on certain compensation. Not all employees will qualify for treaty benefits — it depends on the specific treaty and the nature of the services.",
            },
            {
              heading: "Form W-2 reporting for NRA employees",
              body: "At year-end, you issue a standard Form W-2 to NRA employees — there is no separate version. The W-2 reports wages paid and taxes withheld in the same boxes as for any other employee. If the NRA employee claimed treaty benefits and you reduced withholding accordingly, the W-2 should reflect the actual wages paid and actual taxes withheld. The employee will file Form 1040-NR (U.S. Nonresident Alien Income Tax Return) instead of Form 1040, but your W-2 reporting is the same regardless of which form the employee files individually.",
            },
            {
              heading: "Additional compliance considerations",
              body: "Other items to be aware of: (1) FUTA tax applies to NRA employees working in the U.S. on H-1B visas. (2) State tax withholding rules for NRAs vary by state — New York requires state income tax withholding for NRA employees working in New York. (3) Verify the employee's work authorization with Form I-9 and E-Verify (if applicable in your state or for your company size). (4) If the employee leaves the U.S. mid-year and becomes a non-resident, you may need to adjust withholding. (5) Keep copies of Form 8233 and any treaty documentation in your payroll records.",
            },
          ],
          keyTakeaways: [
            "NRA employees must write 'NRA' on their W-4 and cannot claim married filing jointly status or the standard deduction",
            "H-1B visa holders are fully subject to FICA (Social Security and Medicare) — the NRA FICA exemption applies only to F-1, J-1, M-1, and Q-1 visa holders",
            "Tax treaty benefits may reduce or eliminate withholding — the employee must file Form 8233 to claim this",
            "Form W-2 reporting is the same for NRA employees; the employee files Form 1040-NR individually",
            "FUTA and state taxes also apply to NRA employees working in the United States",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-06T09:15:00Z",
        sources: [
          { label: "IRS — Withholding on Nonresident Aliens", url: "https://www.irs.gov/individuals/international-taxpayers/withholding-on-nonresident-aliens" },
          { label: "IRS — About Form 8233", url: "https://www.irs.gov/forms-pubs/about-form-8233" },
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #14: Totalization Agreements
  // =====================================================
  {
    question: {
      id: "q-payroll-totalization",
      isFeatured: false,
      title: "What are totalization agreements and can they reduce my LLC's payroll tax obligations?",
      body: "I'm from Germany and I own a U.S. LLC. I'm considering moving to the U.S. temporarily to work in my own business. A friend mentioned totalization agreements could help me avoid paying Social Security taxes in both Germany and the U.S. simultaneously. How do these agreements work? Which countries have them with the U.S.? If I send a German employee to work at my U.S. LLC temporarily, do they pay into the U.S. or German system?",
      author: {
        displayName: "Klaus M.",
        avatarSeed: "de-total-agree-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["totalization agreement", "Social Security", "Germany", "double taxation", "certificate of coverage"],
      postedAt: "2026-03-08T15:20:00Z",
      viewCount: 1345,
      answerCount: 1,
      status: "answered",
      seoTitle: "Totalization Agreements: Avoiding Double Social Security Tax",
      seoDescription: "How U.S. totalization agreements work for foreign LLC owners. Which countries have agreements, how to avoid dual Social Security taxation, and obtaining a Certificate of Coverage.",
    },
    answers: [
      {
        id: "a-payroll-totalization-1",
        questionId: "q-payroll-totalization",
        articleContent: {
          sections: [
            {
              heading: "Totalization agreements prevent double Social Security taxation",
              body: "The United States has bilateral Social Security agreements (called totalization agreements) with about 30 countries, including Germany. The primary purpose is to eliminate dual Social Security taxation — the situation where a worker pays Social Security taxes to both countries simultaneously on the same earnings. Without these agreements, you could owe social insurance contributions to both the U.S. and German systems when you work in the U.S. Totalization agreements establish rules for determining which country's social security system covers a worker based on the circumstances of their employment.",
            },
            {
              heading: "The general rule: you pay into the system where you work",
              body: "The default rule under most totalization agreements is the territoriality principle — you pay Social Security taxes in the country where you physically perform the work. If you move to the U.S. to work in your LLC, you would generally be subject to the U.S. Social Security system (FICA or self-employment tax) and not the German social insurance system. However, there is an important exception for temporary assignments and self-employed persons.",
            },
            {
              heading: "Temporary detachment rule for employees",
              body: "Most totalization agreements include a detachment rule: if an employer sends an employee from one country to work temporarily in the other country, the employee can remain covered by the home country's system for a limited period (typically up to 5 years under the U.S.-Germany agreement). So if you send a German employee to work at your U.S. LLC for up to 5 years, they can continue paying into the German system and be exempt from U.S. FICA. To claim this exemption, the employee needs a Certificate of Coverage (known as an A1 certificate in the EU or a certificate from the Deutsche Rentenversicherung for Germany). The employer presents this certificate to establish exemption from U.S. FICA.",
            },
            {
              heading: "Self-employed persons under totalization agreements",
              body: "For self-employed individuals, totalization agreements generally assign coverage based on the country of residence. Under the U.S.-Germany agreement, if you are a German resident who becomes self-employed through a U.S. LLC, you would typically remain covered by the German system. However, if you physically move to the U.S. and become a U.S. resident, the U.S. system would generally apply. The specific rules depend on your residency status, where you perform the work, and the provisions of the particular agreement. Since Germany has a comprehensive agreement with the U.S., consult the text of the specific agreement or contact the Deutsche Rentenversicherung for guidance on your situation.",
            },
            {
              heading: "Countries with U.S. totalization agreements",
              body: "The U.S. has totalization agreements with approximately 30 countries. These include most Western European nations (Germany, France, United Kingdom, Italy, Spain, Netherlands, Belgium, and others), as well as Australia, Canada, Japan, South Korea, Chile, Czech Republic, and others. Notable countries without a totalization agreement include China, India, Brazil, Mexico, and Russia. If your country does not have a totalization agreement with the U.S., there is no mechanism to avoid dual social security taxation, and you may owe contributions to both systems. The Social Security Administration maintains a complete list of countries with active agreements.",
            },
            {
              heading: "How to obtain a Certificate of Coverage",
              body: "To claim exemption from one country's social security system under a totalization agreement, you need a Certificate of Coverage from the other country. For a German employee working temporarily in the U.S., apply to the Deutsche Rentenversicherung Bund in Germany for the certificate. For a U.S. worker going to Germany, apply to the U.S. Social Security Administration using Form SSA-2032. The certificate is presented to the employer (and retained in payroll records) to justify the exemption from the local country's social security tax. Without the certificate, the employer should apply the local country's social security taxes by default.",
            },
          ],
          keyTakeaways: [
            "Totalization agreements between the U.S. and ~30 countries prevent workers from paying Social Security taxes to both countries simultaneously",
            "The default rule is that you pay into the system where you physically work — agreements provide exceptions for temporary assignments",
            "German employees sent to a U.S. LLC temporarily (up to 5 years) can remain in the German system with a Certificate of Coverage",
            "Self-employed coverage is generally based on country of residence under most totalization agreements",
            "Countries without agreements (China, India, Brazil, Mexico) offer no protection against dual social security taxation",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-09T10:00:00Z",
        sources: [
          { label: "SSA — International Agreements Overview", url: "https://www.ssa.gov/international/agreements_overview.html" },
          { label: "IRS — Social Security Tax Consequences of Working Abroad", url: "https://www.irs.gov/individuals/international-taxpayers/social-security-tax-consequences-of-working-abroad" },
          { label: "SSA — U.S.-Germany Agreement", url: "https://www.ssa.gov/international/Agreement_Pamphlets/germany.html" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #15: State Payroll Tax Obligations
  // =====================================================
  {
    question: {
      id: "q-payroll-state-taxes",
      isFeatured: false,
      title: "What state-level payroll taxes must my foreign-owned LLC pay beyond federal taxes?",
      body: "I understand federal payroll taxes (FICA, FUTA, income tax withholding) but I'm completely lost on state requirements. My foreign-owned LLC is registered in Wyoming but my employee works in California. Which state's rules apply? I've heard California has high payroll taxes and some kind of disability insurance. What state-level taxes do I need to deal with and how do I register?",
      author: {
        displayName: "Akira N.",
        avatarSeed: "jp-state-tax-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["state payroll tax", "SUTA", "SDI", "state withholding", "California", "multi-state"],
      postedAt: "2026-02-28T13:45:00Z",
      viewCount: 1789,
      answerCount: 1,
      status: "answered",
      seoTitle: "State Payroll Tax Obligations for Foreign-Owned LLCs",
      seoDescription: "State-level payroll taxes for foreign-owned LLCs with employees. State income tax withholding, unemployment tax, disability insurance, and registration by state.",
    },
    answers: [
      {
        id: "a-payroll-state-taxes-1",
        questionId: "q-payroll-state-taxes",
        articleContent: {
          sections: [
            {
              heading: "State payroll taxes are based on where the employee works, not where the LLC is formed",
              body: "A critical distinction: your LLC is registered in Wyoming, but your employee works in California. State payroll obligations follow the employee's work location. You must comply with California's payroll tax requirements, not Wyoming's. Wyoming's lack of state income tax does not help you — your employee is performing services in California and is subject to California payroll rules. This is true regardless of where the LLC is registered or where the owner resides.",
            },
            {
              heading: "California's four state payroll taxes",
              body: "California has four separate payroll tax programs: (1) State income tax withholding (PIT) — you must withhold California state income tax from your employee's wages based on their DE-4 form and the California withholding tables. (2) State Unemployment Insurance (SUI) — employer-only tax, currently assessed on the first $7,000 of each employee's wages per year, with rates varying by employer experience. New employers pay a standard rate (currently 3.4% for most). (3) Employment Training Tax (ETT) — employer-only tax of 0.1% on the first $7,000 of wages per employee. (4) State Disability Insurance (SDI) — employee-only tax withheld from wages at 1.1% with no wage cap. SDI funds both short-term disability and Paid Family Leave benefits.",
            },
            {
              heading: "How to register with California's EDD",
              body: "You must register with the California Employment Development Department (EDD) as a new employer. Registration can be done online through the EDD's e-Services for Business portal. When you register, you will receive a California employer account number and your SUI tax rate. Registration must be completed within 20 days of paying more than $100 in wages in a calendar quarter. After registration, you must file Form DE-9 (Quarterly Contribution Return) and Form DE-9C (Quarterly Contribution Return and Report of Wages) each quarter, reporting wages and paying state payroll taxes.",
            },
            {
              heading: "States with no income tax still have payroll obligations",
              body: "Even states without a personal income tax (Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming) have payroll obligations. Every state has an unemployment insurance program that employers must contribute to. Some states have additional taxes — for example, Washington has a Paid Family and Medical Leave program funded by both employer and employee contributions. Do not assume that hiring in a no-income-tax state eliminates all state payroll compliance. You must research and register in each state where you have employees.",
            },
            {
              heading: "Practical steps for foreign-owned LLC compliance",
              body: "To manage state payroll taxes as a foreign LLC owner: (1) Register with the state employment/tax agency in every state where you have employees. (2) Obtain the state employer account number and tax rate. (3) Set up withholding for state income tax (if applicable) and any employee-paid taxes. (4) Make quarterly state payroll tax filings and payments. (5) Consider using a payroll service that handles multi-state compliance — this is especially valuable for foreign owners who may not be familiar with individual state requirements. (6) Check whether the state requires foreign LLCs to register to do business in the state (foreign qualification), as having employees is generally considered doing business in a state.",
            },
          ],
          keyTakeaways: [
            "State payroll taxes are based on where the employee works, not where the LLC is formed or the owner resides",
            "California has four payroll taxes: state income tax withholding, SUI, ETT, and SDI — totaling significant employer costs",
            "Register with each state's employment agency within the required timeframe after hiring (20 days in California)",
            "Even states with no income tax have unemployment insurance and potentially other payroll obligations",
            "A payroll service with multi-state capability is strongly recommended for foreign LLC owners",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-01T09:00:00Z",
        sources: [
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
          { label: "California EDD — Employer Taxes", url: "https://edd.ca.gov/en/payroll_taxes/" },
          { label: "IRS — State Government Websites", url: "https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #16: Workers' Compensation Requirements
  // =====================================================
  {
    question: {
      id: "q-payroll-workers-comp",
      isFeatured: false,
      title: "Does my foreign-owned LLC need workers' compensation insurance for its employees?",
      body: "I'm setting up my foreign-owned LLC to hire employees in multiple states. I know about FICA, FUTA, and state unemployment tax, but someone mentioned workers' compensation. Is this another tax? Is it mandatory for all employers? My LLC is in a low-risk industry (software development) — do I still need it? What happens if an employee gets injured and I don't have coverage?",
      author: {
        displayName: "Yuki T.",
        avatarSeed: "jp-workcomp-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["workers compensation", "insurance", "employer requirement", "state law", "foreign LLC"],
      postedAt: "2026-03-10T09:00:00Z",
      viewCount: 892,
      answerCount: 1,
      status: "answered",
      seoTitle: "Workers' Compensation for Foreign-Owned LLCs: Requirements",
      seoDescription: "Workers' compensation insurance requirements for foreign-owned LLCs with employees. State-by-state rules, coverage costs, and penalties for non-compliance.",
    },
    answers: [
      {
        id: "a-payroll-workers-comp-1",
        questionId: "q-payroll-workers-comp",
        articleContent: {
          sections: [
            {
              heading: "Workers' compensation is insurance, not a tax — but it is legally required in most states",
              body: "Workers' compensation is an insurance program that provides benefits to employees who are injured or become ill as a result of their job. Unlike FICA or FUTA, it is not a federal tax — it is governed by state law. Nearly every state requires employers to carry workers' compensation insurance once they have at least one employee. Texas and a few other states allow employers to opt out, but even in those states, opting out exposes you to significant liability. As a foreign-owned LLC, you have the same workers' compensation obligations as any domestic employer.",
            },
            {
              heading: "Requirements vary by state — and your LLC must comply in each state where employees work",
              body: "Each state has its own workers' compensation laws, including minimum employee thresholds, coverage requirements, and approved insurance carriers. In most states, you must have coverage as soon as you hire your first employee. Some states (like Alabama) require coverage once you have 5 or more employees. A few states are monopolistic — meaning you must purchase workers' comp from the state fund (Ohio, North Dakota, Washington, and Wyoming). In all other states, you can purchase from private insurance carriers or through the state fund. You need separate coverage in each state where your employees work.",
            },
            {
              heading: "Even low-risk industries need coverage",
              body: "Software development is indeed a low-risk industry from a workers' compensation perspective, and your premiums will reflect that. Workers' comp premiums are based on classification codes that correspond to the type of work employees perform. Office and clerical work has very low rates — often less than $1 per $100 of payroll. However, having low premiums does not exempt you from the requirement. Even software developers can have workplace injuries (repetitive strain injuries, slip-and-fall in the office, etc.), and the legal requirement applies regardless of industry risk level.",
            },
            {
              heading: "Penalties for not carrying workers' compensation",
              body: "Penalties for failing to maintain required workers' compensation coverage are severe. Depending on the state, consequences include: fines ranging from $100 per day to $100,000 or more, criminal misdemeanor or felony charges, personal liability for workplace injuries with no insurance protection, stop-work orders that shut down your business until coverage is obtained, and ineligibility for state contracts. If an employee is injured and you do not have coverage, you are personally liable for all medical costs, lost wages, and disability payments — which can easily reach hundreds of thousands of dollars for a serious injury.",
            },
          ],
          keyTakeaways: [
            "Workers' compensation insurance is required in nearly every state once you have employees — regardless of industry risk",
            "It is state-governed insurance, not a federal tax — you need coverage in each state where employees work",
            "Software development is low-risk with very low premiums, but the legal requirement still applies",
            "Penalties for non-compliance include daily fines, criminal charges, stop-work orders, and personal liability for injuries",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-11T08:45:00Z",
        sources: [
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
          { label: "U.S. DOL — Workers' Compensation", url: "https://www.dol.gov/general/topic/workcomp" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #17: Hiring Remote Workers — Multi-State Compliance
  // =====================================================
  {
    question: {
      id: "q-payroll-remote-multistate",
      isFeatured: true,
      title: "My foreign-owned LLC has remote employees in 4 states — how do I handle multi-state payroll?",
      body: "I own a foreign LLC and my team is fully remote across the U.S. — I have employees in New York, Texas, Oregon, and Florida. Each state seems to have completely different payroll tax rules. Do I need to register as an employer in all four states? What about states with no income tax vs. those with high income tax? This is getting really complicated and I'm worried I'm missing something. Is there a way to simplify multi-state payroll compliance?",
      author: {
        displayName: "Henrik J.",
        avatarSeed: "dk-remote-multi-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["remote workers", "multi-state payroll", "state registration", "nexus", "compliance"],
      postedAt: "2026-03-12T11:30:00Z",
      viewCount: 2456,
      answerCount: 1,
      status: "answered",
      seoTitle: "Multi-State Payroll for Foreign LLCs with Remote Employees",
      seoDescription: "How foreign-owned LLCs manage payroll for remote employees across multiple states. Registration requirements, varying tax rules, and strategies to simplify compliance.",
    },
    answers: [
      {
        id: "a-payroll-remote-multistate-1",
        questionId: "q-payroll-remote-multistate",
        articleContent: {
          sections: [
            {
              heading: "Yes — you must register as an employer in every state where employees work",
              body: "With employees in New York, Texas, Oregon, and Florida, you must register as an employer with each of those four states' tax and employment agencies. Having an employee working in a state creates nexus for payroll tax purposes, regardless of where your LLC is formed or where you as the owner reside. Each state will issue you a state employer account number and tax rate. Failure to register and comply in any state exposes your LLC to penalties, back taxes, and interest.",
            },
            {
              heading: "Your four states have very different payroll tax landscapes",
              body: "Here is a snapshot of your four states: New York has state income tax withholding (rates up to 10.9%), state unemployment insurance (SUI), and additional requirements like the Paid Family Leave contribution. Texas has no state income tax, so no withholding is needed, but you must pay Texas Workforce Commission unemployment tax. Oregon has state income tax withholding (rates up to 9.9%), a statewide transit tax, and Paid Leave Oregon contributions. Florida has no state income tax and no additional payroll taxes beyond state unemployment insurance. The complexity difference between these states is significant — New York and Oregon are among the most complex, while Texas and Florida are relatively simple.",
            },
            {
              heading: "State unemployment insurance (SUI) applies everywhere",
              body: "Regardless of whether a state has income tax, every state has a state unemployment insurance program that employers must contribute to. New employer SUI rates vary significantly by state, and your rate will adjust over time based on your experience (how many former employees file unemployment claims). You typically file quarterly state unemployment tax returns and pay the tax on the first $X of wages per employee — the wage base varies by state (for example, New York's SUI wage base is $12,800, while Florida's is $7,000). Track each state's wage base, rate, and filing deadlines separately.",
            },
            {
              heading: "Workers' compensation in each state",
              body: "You need workers' compensation coverage in all four states. New York, Oregon, and Florida all require workers' compensation insurance. Texas is unique — it does not require private employers to carry workers' compensation (it is one of the few opt-out states). However, even in Texas, not carrying workers' comp means you lose significant legal protections and can be sued directly by injured employees. Most payroll services and PEOs will arrange workers' comp coverage in each state as part of their service.",
            },
            {
              heading: "How to simplify multi-state payroll compliance",
              body: "For a foreign LLC owner managing employees in four states, the practical solution is to use a payroll service that specializes in multi-state compliance. Services like Gusto, ADP Run, Paychex, or a PEO (Professional Employer Organization) will: register your LLC in each state, calculate correct withholding for each employee based on their state, make tax deposits to each state and the IRS, file quarterly and annual returns in each state, and manage workers' compensation across states. The cost of a payroll service (typically $40-$100/month base plus $5-$15 per employee) is far less than the penalties for multi-state payroll errors. For foreign owners unfamiliar with the U.S. system, this is not an area to manage manually.",
            },
            {
              heading: "Foreign qualification requirements",
              body: "Having employees in a state typically triggers a requirement to register your LLC as a foreign LLC in that state (called foreign qualification). This is separate from payroll registration. If your LLC is formed in Wyoming but has employees in New York, California, Texas, and Florida, you may need to foreign-qualify in those states. Foreign qualification involves filing paperwork with the state's Secretary of State, appointing a registered agent in that state, and potentially paying annual fees or franchise taxes. Failure to foreign-qualify can result in penalties and the inability to enforce contracts in that state's courts.",
            },
          ],
          keyTakeaways: [
            "You must register as an employer in every state where remote employees work — four states means four registrations",
            "Each state has different income tax, SUI, and additional payroll requirements — no two states are identical",
            "State unemployment insurance is universal; income tax withholding depends on whether the state has income tax",
            "A multi-state payroll service or PEO is strongly recommended for foreign LLC owners — manual compliance is error-prone",
            "Having employees in a state may also trigger foreign LLC qualification requirements with the Secretary of State",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-13T09:30:00Z",
        sources: [
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
          { label: "IRS — State Government Websites", url: "https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites" },
          { label: "U.S. DOL — State Unemployment Insurance", url: "https://www.dol.gov/general/topic/unemployment-insurance" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #18: PEO (Professional Employer Organization)
  // =====================================================
  {
    question: {
      id: "q-payroll-peo",
      isFeatured: false,
      title: "Should my foreign-owned LLC use a PEO for payroll and HR — what are the pros and cons?",
      body: "As a foreign owner of a U.S. LLC, I find U.S. payroll incredibly confusing. Someone recommended a PEO (Professional Employer Organization) that would handle everything — payroll, benefits, HR compliance. But I've heard they become a co-employer of my workers. That sounds concerning. How does a PEO actually work? Would the PEO file taxes under their EIN or mine? What are the real benefits and risks for a foreign-owned LLC?",
      author: {
        displayName: "Ingrid S.",
        avatarSeed: "no-peo-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["PEO", "Professional Employer Organization", "co-employment", "payroll outsourcing", "HR compliance"],
      postedAt: "2026-03-15T14:00:00Z",
      viewCount: 1678,
      answerCount: 1,
      status: "answered",
      seoTitle: "PEO for Foreign-Owned LLCs: Benefits, Risks, and How It Works",
      seoDescription: "How Professional Employer Organizations (PEOs) work for foreign-owned LLCs. Co-employment model, tax filing, benefits access, and considerations for foreign owners.",
    },
    answers: [
      {
        id: "a-payroll-peo-1",
        questionId: "q-payroll-peo",
        articleContent: {
          sections: [
            {
              heading: "How a PEO works: the co-employment model",
              body: "A PEO enters into a co-employment arrangement with your LLC. Under this model, the PEO becomes the employer of record for tax and benefits purposes, while you retain day-to-day control over your employees' work. Your employees technically work for both your LLC (which directs their tasks and manages their performance) and the PEO (which handles payroll, benefits administration, workers' compensation, and HR compliance). This is a well-established model used by hundreds of thousands of small businesses in the United States.",
            },
            {
              heading: "Tax filing under the PEO's EIN vs. yours",
              body: "In a standard PEO arrangement, the PEO files employment tax returns (Form 941, Form 940, W-2s) under the PEO's own EIN, not your LLC's EIN. The IRS has recognized this through the CPEO (Certified Professional Employer Organization) program. CPEOs that are certified by the IRS take on full liability for employment taxes and file under their own EIN. If you use a non-certified PEO, the arrangement may still work this way, but the legal protections are less clear. Using a CPEO provides the strongest assurance that employment tax obligations are properly handled.",
            },
            {
              heading: "Key benefits for foreign-owned LLCs",
              body: "PEOs offer several advantages specifically relevant to foreign LLC owners: (1) Complete payroll compliance — the PEO handles all federal and state payroll tax calculations, deposits, and filings. (2) Multi-state compliance — a PEO is registered in all states and manages state-specific requirements automatically. (3) Workers' compensation — the PEO provides workers' comp coverage under their master policy. (4) Benefits access — small businesses gain access to large-group health insurance rates, 401(k) plans, and other benefits that individual small LLCs could not obtain or afford. (5) HR compliance — the PEO helps with hiring paperwork, employment law compliance, and termination procedures. (6) Reduced administrative burden — for a foreign owner managing a business from overseas, a PEO dramatically reduces the operational complexity of having U.S. employees.",
            },
            {
              heading: "Risks and considerations",
              body: "There are real considerations to weigh: (1) Cost — PEO fees typically range from $150 to $250 per employee per month (or a percentage of payroll), which adds meaningful overhead. (2) Loss of some control — the PEO sets certain HR policies and you must follow their processes. (3) Co-employment complexity — if you terminate the PEO relationship, you must transition all payroll, benefits, and compliance back in-house, which can be disruptive. (4) Not all PEOs are equal — an uncertified PEO that fails to pay employment taxes could leave your LLC liable. Always verify CPEO certification. (5) Employee experience — some employees may be confused or concerned about being co-employed by a company they did not choose to work for.",
            },
            {
              heading: "Alternatives to a full PEO",
              body: "If a full co-employment PEO feels too heavy, consider these alternatives: (1) Standard payroll service (Gusto, ADP Run, Paychex) — handles payroll processing, tax filings, and deposits without co-employment. You remain the sole employer. (2) ASO (Administrative Services Organization) — similar to a PEO but without co-employment; they provide HR and benefits administration as a service provider, not a co-employer. (3) EOR (Employer of Record) — a third party that is the full legal employer of your workers; you have no direct employment relationship. This can be useful if your LLC cannot or does not want to register as an employer. Each option has different levels of control, liability, and cost.",
            },
          ],
          keyTakeaways: [
            "A PEO becomes a co-employer and handles payroll, taxes, benefits, and HR compliance for your LLC's employees",
            "Certified PEOs (CPEOs) file employment taxes under their own EIN and take on full employment tax liability",
            "Key benefits for foreign owners include multi-state compliance, benefits access, and dramatically reduced administrative burden",
            "PEO costs typically range from $150-$250 per employee per month — weigh this against the compliance complexity saved",
            "Always verify CPEO certification with the IRS to ensure the PEO properly handles employment tax obligations",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-16T10:00:00Z",
        sources: [
          { label: "IRS — Certified Professional Employer Organizations", url: "https://www.irs.gov/tax-professionals/cpeo-frequently-asked-questions" },
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #19: EOR (Employer of Record) Services
  // =====================================================
  {
    question: {
      id: "q-payroll-eor",
      isFeatured: false,
      title: "What is an Employer of Record (EOR) and when should a foreign-owned LLC use one?",
      body: "I'm a non-resident alien who owns a U.S. LLC but I don't want to deal with registering as an employer, running payroll, or dealing with state taxes. Someone suggested using an EOR (Employer of Record). How is this different from a PEO? With an EOR, who is the actual employer of the worker? Can I still manage the worker's day-to-day activities? Is this common for foreign-owned LLCs?",
      author: {
        displayName: "Liam O.",
        avatarSeed: "ie-eor-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["EOR", "Employer of Record", "payroll outsourcing", "foreign LLC", "PEO vs EOR"],
      postedAt: "2026-03-18T10:15:00Z",
      viewCount: 1234,
      answerCount: 1,
      status: "answered",
      seoTitle: "EOR Services for Foreign-Owned LLCs: Complete Guide",
      seoDescription: "How Employer of Record (EOR) services work for foreign-owned LLCs. Difference from PEOs, when to use an EOR, legal structure, and practical considerations.",
    },
    answers: [
      {
        id: "a-payroll-eor-1",
        questionId: "q-payroll-eor",
        articleContent: {
          sections: [
            {
              heading: "An EOR is the sole legal employer of the worker — not a co-employer",
              body: "The fundamental difference between an EOR and a PEO is the employment relationship. With a PEO, your LLC and the PEO are co-employers. With an EOR, the EOR is the sole legal employer of the worker. The worker is on the EOR's payroll, covered by the EOR's benefits, and the EOR files all employment taxes under its own EIN. Your LLC has a service agreement with the EOR, not an employment agreement with the worker. You direct the worker's day-to-day activities, but the EOR handles all employment-related legal, tax, and administrative responsibilities.",
            },
            {
              heading: "When a foreign-owned LLC should consider an EOR",
              body: "An EOR makes sense in several scenarios: (1) You do not want to register as an employer in the U.S. or in specific states. (2) You want to hire workers quickly without the lead time of setting up payroll infrastructure. (3) You are testing the U.S. market and want to hire a few workers before committing to full employer setup. (4) Your LLC is a disregarded entity and you want to keep the employment relationship separate from your personal tax situation. (5) You need to hire in multiple states and want to avoid the complexity of multi-state registration. An EOR is particularly popular among foreign-owned LLCs whose owners live abroad and want minimal direct involvement with U.S. employment administration.",
            },
            {
              heading: "How the day-to-day relationship works",
              body: "In practice, you manage the worker's assignments, projects, performance, and schedule just as you would a direct employee. The EOR handles: onboarding paperwork (I-9, W-4), payroll processing and tax deposits, benefits administration, workers' compensation coverage, compliance with employment laws (federal and state), and offboarding if the worker is terminated. The worker knows they are employed by the EOR and that they provide services to your LLC. From the worker's perspective, the EOR is their employer; from your perspective, the EOR is a vendor providing staffing services.",
            },
            {
              heading: "Cost structure and considerations",
              body: "EOR services typically charge a monthly fee per worker or a percentage of the worker's compensation (often 15-25% markup on top of the worker's salary). This is generally more expensive than a PEO or standard payroll service because the EOR assumes full employer liability. However, the total cost must be weighed against the administrative savings: no employer registration, no payroll tax filings, no workers' comp procurement, and no state compliance management. For a foreign-owned LLC with a small number of U.S. workers, the convenience may justify the premium.",
            },
            {
              heading: "Important limitations and risks",
              body: "EOR arrangements have some limitations: (1) You have less control over HR policies since the EOR's policies apply. (2) The worker's loyalty and sense of belonging may be affected by the third-party employer structure. (3) If you part ways with the EOR, transitioning workers to direct employment requires careful planning. (4) Some clients, contracts, or government agencies may require that workers be direct employees of the contracting LLC. (5) The IRS could potentially recharacterize the arrangement if the economic reality suggests a direct employment relationship. Choose a reputable EOR with established compliance procedures and clear contractual terms.",
            },
          ],
          keyTakeaways: [
            "An EOR is the sole legal employer — unlike a PEO, there is no co-employment with your LLC",
            "The EOR handles all payroll, taxes, benefits, and compliance; you manage the worker's day-to-day activities",
            "EOR is ideal for foreign LLC owners who want U.S. workers without registering as an employer or managing payroll",
            "EOR costs are higher than PEO or payroll services (15-25% markup) but eliminate all employment administration",
            "Choose a reputable EOR and understand the limitations around control, worker loyalty, and potential IRS recharacterization",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-19T09:00:00Z",
        sources: [
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
          { label: "IRS — Worker Classification", url: "https://www.irs.gov/businesses/small-businesses-self-employed/worker-classification-101-employee-or-independent-contractor" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #20: Payroll Tax Penalties
  // =====================================================
  {
    question: {
      id: "q-payroll-penalties",
      isFeatured: true,
      title: "What are the penalties if my foreign-owned LLC is late on payroll tax deposits or filings?",
      body: "I'm behind on payroll tax deposits for my foreign-owned LLC. I missed two monthly EFTPS deposits and I'm panicking. How bad are the penalties? I've heard the IRS is extremely aggressive about employment tax compliance. Are there different penalties for late deposits vs. late filing of Form 941? Is there any way to get penalties reduced or waived? I want to understand exactly what I'm facing so I can fix this.",
      author: {
        displayName: "Ahmed K.",
        avatarSeed: "eg-penalties-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["penalties", "late deposit", "Form 941", "payroll compliance", "penalty abatement"],
      postedAt: "2026-03-20T08:00:00Z",
      viewCount: 2678,
      answerCount: 1,
      status: "answered",
      seoTitle: "Payroll Tax Penalties: Late Deposits and Filings for Foreign LLCs",
      seoDescription: "Payroll tax penalty structure for late deposits and filings. Penalty rates by days late, failure-to-file vs failure-to-pay, and options for penalty abatement.",
    },
    answers: [
      {
        id: "a-payroll-penalties-1",
        questionId: "q-payroll-penalties",
        articleContent: {
          sections: [
            {
              heading: "Late deposit penalties escalate quickly",
              body: "The IRS imposes penalties for late employment tax deposits under a tiered structure: 2% of the unpaid deposit if 1-5 days late, 5% if 6-15 days late, 10% if more than 15 days late, and 15% if the tax is still unpaid more than 10 days after the IRS issues the first notice demanding payment (or the day you receive notice and demand for immediate payment, whichever is earlier). These percentages are applied to the amount of the underpayment for each deposit period. Since you missed two monthly deposits, each missed deposit incurs its own penalty based on how late it is.",
            },
            {
              heading: "Failure-to-file penalty for Form 941",
              body: "The failure-to-file penalty for Form 941 is separate from the late deposit penalty. If you file Form 941 late, the penalty is 5% of the unpaid tax for each month (or part of a month) the return is late, up to a maximum of 25%. If you file more than 60 days late, the minimum penalty is the lesser of $510 or 100% of the unpaid tax. The failure-to-pay penalty is 0.5% per month up to 25%. If both the failure-to-file and failure-to-pay penalties apply for the same month, the failure-to-file penalty is reduced by the failure-to-pay amount (so the combined rate is 5% per month, not 5.5%).",
            },
            {
              heading: "Interest compounds on top of penalties",
              body: "In addition to penalties, the IRS charges interest on unpaid employment taxes from the due date until the date of payment. The interest rate is determined quarterly and is the federal short-term rate plus 3 percentage points. Interest compounds daily. This means the longer you wait to make the deposits, the more interest accumulates on top of the penalties. Interest cannot be waived or abated — even if you qualify for penalty relief, you will still owe interest.",
            },
            {
              heading: "Options for penalty relief",
              body: "The IRS offers several paths to penalty reduction: (1) First-time penalty abatement (FTA) — if you have a clean compliance history for the prior three tax years (filed all returns on time, paid all taxes, and had no penalties), you may qualify for one-time penalty relief. (2) Reasonable cause — if you can demonstrate that the late deposits were due to circumstances beyond your control (not merely ignorance of the rules), the IRS may abate penalties. Acceptable reasons include serious illness, natural disaster, or reliance on erroneous IRS advice. (3) Requesting abatement by phone (for smaller amounts) or by writing a letter to the IRS explaining your situation. The key is to act quickly — deposit the overdue amounts immediately, file any late returns, and then pursue penalty relief.",
            },
            {
              heading: "Immediate steps to minimize damage",
              body: "Here is what you should do right now: (1) Make both overdue deposits via EFTPS immediately — every day you wait increases penalties and interest. (2) Set up a system to prevent future missed deposits (payroll service, calendar reminders, automatic payments). (3) File Form 941 on time for the current quarter — do not let a missed deposit become a missed filing too. (4) After making the deposits, call the IRS at 1-800-829-4933 or write to request first-time penalty abatement if eligible. (5) Consider hiring a tax professional to help navigate the penalty relief process and ensure your payroll system is set up correctly going forward.",
            },
          ],
          keyTakeaways: [
            "Late deposit penalties range from 2% (1-5 days late) to 15% (unpaid after IRS notice) — they escalate quickly",
            "Late filing of Form 941 carries a separate 5% per month penalty up to 25% of unpaid tax",
            "Interest compounds daily on unpaid employment taxes and cannot be waived even with penalty relief",
            "First-time penalty abatement may be available if you have a clean three-year compliance history",
            "Act immediately: deposit overdue amounts via EFTPS now, then pursue penalty relief afterward",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-21T09:00:00Z",
        sources: [
          { label: "IRS — Depositing and Reporting Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/depositing-and-reporting-employment-taxes" },
          { label: "IRS — Failure to Deposit Penalty", url: "https://www.irs.gov/payments/failure-to-deposit-penalty" },
          { label: "IRS — Penalty Relief", url: "https://www.irs.gov/payments/penalty-relief" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #21: Trust Fund Recovery Penalty (TFRP)
  // =====================================================
  {
    question: {
      id: "q-payroll-tfrp",
      isFeatured: false,
      title: "What is the Trust Fund Recovery Penalty and can it hit me personally as a foreign LLC owner?",
      body: "My attorney mentioned something terrifying called the Trust Fund Recovery Penalty (TFRP) related to payroll taxes. He said the IRS can go after me personally even though my LLC is supposed to protect me from personal liability. Is this true? I'm the sole owner of a foreign-owned LLC and I manage payroll. What exactly is a trust fund tax? How does the IRS decide who is personally liable? Can they reach my personal assets overseas?",
      author: {
        displayName: "Mikhail Z.",
        avatarSeed: "ru-tfrp-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["TFRP", "Trust Fund Recovery Penalty", "personal liability", "responsible person", "payroll tax"],
      postedAt: "2026-03-22T16:30:00Z",
      viewCount: 1890,
      answerCount: 1,
      status: "answered",
      seoTitle: "Trust Fund Recovery Penalty: Personal Liability for LLC Owners",
      seoDescription: "How the Trust Fund Recovery Penalty (TFRP) can create personal liability for foreign LLC owners. What trust fund taxes are, who is a responsible person, and how the IRS collects.",
    },
    answers: [
      {
        id: "a-payroll-tfrp-1",
        questionId: "q-payroll-tfrp",
        articleContent: {
          sections: [
            {
              heading: "Trust fund taxes are the employee's share — they belong to the government, not the employer",
              body: "When you withhold federal income tax and the employee's share of FICA from wages, those amounts are held in trust for the U.S. government. They are not your LLC's money — they belong to the government from the moment they are withheld. The employer's share of FICA and FUTA are not trust fund taxes because they come from the employer's own funds. The distinction matters because trust fund taxes receive special enforcement treatment, including the ability to pierce the LLC's liability protection and hold individuals personally liable.",
            },
            {
              heading: "The TFRP equals 100% of the unpaid trust fund taxes",
              body: "The Trust Fund Recovery Penalty under IRC Section 6672 is equal to 100% of the trust fund taxes that were withheld (or should have been withheld) from employees but not paid over to the IRS. This is not a percentage penalty on top of the tax — it is a penalty equal to the full amount of the unpaid trust fund taxes. If your LLC withheld $10,000 in federal income tax and $5,000 in employee FICA but failed to deposit these amounts, the TFRP would be $15,000 assessed personally against each responsible person. This is in addition to the LLC's own liability for the same amount.",
            },
            {
              heading: "Who is a 'responsible person' under the TFRP",
              body: "The IRS can assess the TFRP against any person who was: (1) responsible for collecting, accounting for, and paying over the trust fund taxes, AND (2) willfully failed to do so. As the sole owner and manager of your LLC who handles payroll, you clearly meet the 'responsible person' test. Responsibility is broadly defined — it includes anyone with authority over the LLC's financial affairs, including officers, directors, shareholders with significant control, and even bookkeepers or payroll managers in some cases. 'Willful' does not require intent to defraud — it means you were aware of the unpaid taxes and either intentionally disregarded the obligation or were recklessly indifferent to it.",
            },
            {
              heading: "Your LLC's liability protection does not shield you from TFRP",
              body: "This is the critical point: the TFRP is a personal penalty assessed against the individual, not the entity. Your LLC's limited liability structure protects you from general business debts and contract claims, but it does not protect you from trust fund tax penalties. The IRS can and will pursue your personal assets — bank accounts, investments, real property — to collect the TFRP. This is one of the most aggressive collection tools in the IRS arsenal and is actively used against business owners who fail to remit payroll taxes.",
            },
            {
              heading: "Can the IRS reach overseas assets?",
              body: "The IRS has tools to pursue assets internationally, though enforcement is more difficult overseas. The U.S. has tax treaties and information exchange agreements with many countries that facilitate cross-border tax collection. The Foreign Account Tax Compliance Act (FATCA) requires foreign financial institutions to report accounts held by U.S. persons (and in some cases accounts connected to U.S. tax obligations). Additionally, if you ever have U.S.-based assets — bank accounts, real estate, or business interests — the IRS can levy those directly. The practical reality is that the IRS has increasing ability to pursue international collections, and a TFRP assessment creates a federal tax lien that can follow you indefinitely.",
            },
            {
              heading: "How to prevent TFRP exposure",
              body: "The best defense is prevention: (1) Never use withheld payroll taxes for other business expenses — treat them as government money that you are temporarily holding. (2) Make all employment tax deposits on time via EFTPS. (3) Use a reputable payroll service that handles deposits automatically. (4) If cash flow is tight, prioritize payroll tax deposits over other bills — the consequences of non-payment are uniquely severe. (5) If you realize you cannot make a deposit, contact a tax professional immediately — there are options like installment agreements that can help manage the situation before it escalates to a TFRP assessment.",
            },
          ],
          keyTakeaways: [
            "Trust fund taxes (withheld income tax and employee FICA) belong to the government — failing to remit them triggers severe personal liability",
            "The TFRP is equal to 100% of unpaid trust fund taxes and is assessed personally against responsible persons",
            "LLC liability protection does NOT shield you from TFRP — the IRS can pursue your personal assets",
            "As sole owner managing payroll, you are clearly a 'responsible person' under IRC Section 6672",
            "Prevention is critical: use a payroll service, make deposits on time, and never divert withheld taxes to other expenses",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-23T09:15:00Z",
        sources: [
          { label: "IRS — Trust Fund Recovery Penalty", url: "https://www.irs.gov/businesses/small-businesses-self-employed/trust-fund-recovery-penalty" },
          { label: "IRS — Employment Tax Compliance", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
          { label: "IRS — IRC Section 6672", url: "https://www.irs.gov/irm/part5/irm_05-007-003" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #22: Form 2678 — Appointment of Fiscal Agent
  // =====================================================
  {
    question: {
      id: "q-payroll-form-2678",
      isFeatured: false,
      title: "Can I appoint someone in the U.S. to handle my foreign-owned LLC's payroll tax filings using Form 2678?",
      body: "I'm a foreign owner of a U.S. LLC and I live overseas. Managing payroll tax deposits and filing Form 941 from abroad is difficult. I heard about Form 2678 that lets you appoint a fiscal agent to handle employment tax responsibilities. How does this work? Is the fiscal agent then responsible for making deposits and filing returns? Does this reduce my personal liability? Can my CPA serve as the fiscal agent?",
      author: {
        displayName: "Laura F.",
        avatarSeed: "ar-fiscal-agent-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["Form 2678", "fiscal agent", "payroll tax", "appointment", "foreign owner"],
      postedAt: "2026-03-25T12:00:00Z",
      viewCount: 567,
      answerCount: 1,
      status: "answered",
      seoTitle: "Form 2678: Appointing a Fiscal Agent for Payroll Taxes",
      seoDescription: "How foreign LLC owners can use Form 2678 to appoint a fiscal agent for employment tax responsibilities. What the agent does, liability implications, and IRS approval process.",
    },
    answers: [
      {
        id: "a-payroll-form-2678-1",
        questionId: "q-payroll-form-2678",
        articleContent: {
          sections: [
            {
              heading: "Form 2678 authorizes a fiscal agent to perform payroll tax duties",
              body: "Form 2678, Employer/Payer Appointment of Agent, authorizes a designated agent to perform certain employment tax duties on behalf of the employer. Once approved by the IRS, the agent can file employment tax returns (Form 941, Form 940), make employment tax deposits, and issue W-2s to employees — all using the agent's own EIN. This is different from a power of attorney (Form 2848), which authorizes someone to communicate with the IRS on your behalf but does not transfer filing responsibilities. The fiscal agent arrangement under Form 2678 transfers the operational responsibility for payroll tax compliance.",
            },
            {
              heading: "How the approval process works",
              body: "To appoint a fiscal agent, you file Form 2678 with the IRS. Both the employer (your LLC) and the proposed agent must sign the form. The IRS reviews the application and may approve or deny it. Approval is not automatic — the IRS considers whether the arrangement is appropriate. Processing can take several weeks. Once approved, the agent reports employment taxes under their own EIN and the employer's wages are included in the agent's aggregate filings. This arrangement is particularly useful for home care and domestic service employers, but it is available to any employer.",
            },
            {
              heading: "Can your CPA serve as the fiscal agent?",
              body: "Yes, a CPA, accounting firm, payroll service provider, or other qualified third party can serve as the fiscal agent under Form 2678. However, the agent must be willing to accept the operational responsibilities — filing returns, making deposits, and issuing W-2s. Some CPAs may be comfortable with this arrangement; others may prefer to handle payroll through a standard payroll service relationship without the formal fiscal agent designation. Discuss the Form 2678 arrangement with your CPA to understand whether they are willing to serve in this capacity and what their fee structure would be.",
            },
            {
              heading: "Liability implications: Form 2678 does not eliminate your LLC's responsibility",
              body: "This is critical to understand: appointing a fiscal agent under Form 2678 does not eliminate your LLC's tax liability. The IRS holds both the employer and the agent jointly and severally liable for the employment taxes. If the agent fails to make deposits or file returns, the IRS can (and will) pursue the employer for the unpaid taxes. The TFRP (Trust Fund Recovery Penalty) can still be assessed against you personally as a responsible person. Form 2678 transfers operational duties but not ultimate liability. It is a delegation of tasks, not a transfer of responsibility.",
            },
            {
              heading: "Alternatives to Form 2678 for foreign LLC owners",
              body: "For most foreign-owned LLCs, a standard payroll service or PEO may be more practical than a Form 2678 fiscal agent arrangement. Payroll services (Gusto, ADP, Paychex) file returns and make deposits on your behalf as part of their service, without the formal IRS approval process. A CPEO (Certified Professional Employer Organization) actually assumes sole liability for employment taxes, which is a stronger protection than the Form 2678 arrangement. Form 2678 is most commonly used in specific situations like home health care agencies or small household employers, rather than as a general payroll outsourcing tool. Evaluate whether a payroll service or CPEO might better serve your needs before pursuing the Form 2678 route.",
            },
          ],
          keyTakeaways: [
            "Form 2678 authorizes a fiscal agent to file employment tax returns, make deposits, and issue W-2s on your behalf",
            "The agent files under their own EIN, but the employer and agent are jointly and severally liable for employment taxes",
            "IRS approval is required and not automatic — processing takes several weeks",
            "Form 2678 does NOT eliminate your personal TFRP exposure as a responsible person",
            "For most foreign LLC owners, a standard payroll service or CPEO may be more practical than a Form 2678 arrangement",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-26T09:00:00Z",
        sources: [
          { label: "IRS — About Form 2678", url: "https://www.irs.gov/forms-pubs/about-form-2678" },
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
          { label: "IRS — CPEOs", url: "https://www.irs.gov/tax-professionals/cpeo-frequently-asked-questions" },
        ],
      },
    ],
  },

  // =====================================================
  // Q&A #23: Household Employee Tax
  // =====================================================
  {
    question: {
      id: "q-payroll-household-employee",
      isFeatured: false,
      title: "I'm a foreign LLC owner living in the U.S. — do I owe 'nanny tax' for my household employee?",
      body: "I'm a non-resident alien who owns a U.S. LLC and I recently moved to the U.S. on a work visa. I hired a housekeeper who comes twice a week and I pay her $500/week in cash. A friend told me I might owe 'nanny tax' and could get in trouble for paying her in cash. Is this related to my LLC at all? What is the household employee tax threshold? Do I need to withhold taxes from her pay? I'm already overwhelmed with my LLC's payroll obligations and now this too?",
      author: {
        displayName: "Fatima A.",
        avatarSeed: "ae-nanny-tax-2026",
        badge: "new-member" as const,
      },
      category: "payroll",
      tags: ["household employee", "nanny tax", "Schedule H", "domestic worker", "cash wages"],
      postedAt: "2026-03-28T10:45:00Z",
      viewCount: 934,
      answerCount: 1,
      status: "answered",
      seoTitle: "Household Employee Tax (Nanny Tax) for Foreign LLC Owners",
      seoDescription: "Household employee tax obligations for foreign LLC owners living in the U.S. Cash wage threshold, FICA requirements, Schedule H filing, and how it differs from LLC payroll.",
    },
    answers: [
      {
        id: "a-payroll-household-employee-1",
        questionId: "q-payroll-household-employee",
        articleContent: {
          sections: [
            {
              heading: "This is a personal obligation — separate from your LLC's payroll",
              body: "Household employee tax (commonly called 'nanny tax') is a personal obligation, not a business obligation. Your housekeeper works for you personally, not for your LLC. The taxes are reported on Schedule H (Household Employment Taxes) attached to your personal tax return, not through your LLC's Form 941. However, as a non-resident alien living in the U.S. on a work visa, you may be filing Form 1040 or Form 1040-NR, and Schedule H would be attached to whichever return applies to your personal filing situation.",
            },
            {
              heading: "The $2,700 threshold triggers FICA obligations (2026)",
              body: "If you pay a household employee $2,700 or more in cash wages during the calendar year, you must withhold and pay Social Security and Medicare taxes (FICA). At $500 per week, you are paying $26,000 per year — far above the threshold. You owe the employer share of FICA (7.65%) and must withhold the employee share (7.65%) from the housekeeper's pay. You are not required to withhold federal income tax from household employee wages unless the employee requests it and you agree. However, you are required to pay FUTA on the first $7,000 of wages if you paid $1,000 or more in any calendar quarter.",
            },
            {
              heading: "Paying in cash does not avoid tax obligations",
              body: "Paying in cash is not illegal, but it does not exempt you from employment tax obligations. The IRS requires household employers to track cash wages, withhold and pay FICA when the threshold is met, and report the wages. Paying 'under the table' — meaning paying cash and not reporting it — is tax evasion and carries penalties including back taxes, penalties, interest, and potential criminal charges. Additionally, your housekeeper may not be able to claim Social Security benefits in the future if her wages are unreported, which creates a separate legal issue.",
            },
            {
              heading: "How to comply: EIN, Schedule H, and W-2",
              body: "Here is what you need to do: (1) Obtain a separate EIN for household employment if you do not already have one — or you can use your LLC's EIN or your personal ITIN. (2) Begin withholding 7.65% FICA from your housekeeper's wages each pay period. (3) Pay the employer's 7.65% FICA share from your own funds. (4) Either make estimated tax payments quarterly or increase withholding on your own wages to cover the household employment taxes. (5) Issue Form W-2 to your housekeeper by January 31. (6) File Schedule H with your personal tax return to report household employment taxes. (7) File Form W-3 with the SSA along with Copy A of the W-2.",
            },
            {
              heading: "Verify the housekeeper's work authorization",
              body: "As a household employer, you must verify your employee's identity and work authorization by completing Form I-9. This requirement applies to all employers, including household employers. You must examine the employee's documents (such as a passport, permanent resident card, or work permit plus Social Security card) and retain the completed I-9 form in your records. Failure to complete Form I-9 can result in fines. If your housekeeper is not authorized to work in the U.S., you cannot legally employ them regardless of the tax implications.",
            },
          ],
          keyTakeaways: [
            "Household employee tax is a personal obligation — separate from your LLC's payroll and reported on Schedule H",
            "At $500/week ($26,000/year), you far exceed the $2,700 FICA threshold and must withhold and pay FICA taxes",
            "Paying in cash does not avoid tax obligations — unreported cash wages constitute tax evasion",
            "Issue a W-2 to your household employee by January 31 and file Schedule H with your personal tax return",
            "Complete Form I-9 to verify your household employee's identity and work authorization",
          ],
        },
        author: OFFICIAL_AUTHOR,
        postedAt: "2026-03-29T10:00:00Z",
        sources: [
          { label: "IRS — Household Employer's Tax Guide (Pub 926)", url: "https://www.irs.gov/publications/p926" },
          { label: "IRS — About Schedule H", url: "https://www.irs.gov/forms-pubs/about-schedule-h-form-1040" },
          { label: "IRS — Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes" },
        ],
      },
    ],
  },

];
