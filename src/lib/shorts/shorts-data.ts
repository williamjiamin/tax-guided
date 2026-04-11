/* ------------------------------------------------------------------ */
/*  Tax Shorts — bite-sized video script data                         */
/* ------------------------------------------------------------------ */

export interface ShortBeat {
  windowLabel: string;
  headline: string;
  script: string;
  visualPrompt: string;
}

export interface OfficialLink {
  label: string;
  url: string;
}

export interface TaxShort {
  id: string;
  title: string;
  duration: string;
  formatLabel: string;
  audienceLabel: string;
  summary: string;
  hook: string;
  whyItWorks: string;
  commonMistake: string;
  callToAction: string;
  tags: string[];
  filters: string[];
  beats: ShortBeat[];
  officialLinks: OfficialLink[];
}

/* ------------------------------------------------------------------ */
/*  Filters                                                           */
/* ------------------------------------------------------------------ */

export const SHORTS_FILTERS = [
  { id: "all", label: "All shorts" },
  { id: "creators", label: "Creators" },
  { id: "platforms", label: "Platforms" },
  { id: "self-employed", label: "Self-employed" },
  { id: "records", label: "Records" },
  { id: "cross-border", label: "Cross-border" },
  { id: "beginners", label: "Beginners" },
  { id: "students", label: "Students" },
  { id: "us", label: "US" },
];

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

export const SHORTS: TaxShort[] = [
  /* 1 ─ Quarterly Estimates ---------------------------------------- */
  {
    id: "quarterly-estimates",
    title: "Quarterly taxes start before April",
    duration: "58 sec",
    formatLabel: "Vertical explainer",
    audienceLabel: "US freelancers / creators",
    summary:
      "If you earn income without withholding, the IRS expects payments four times a year — not once. Missing the quarterly rhythm can lead to estimated-tax penalties even if you pay everything by April.",
    hook: "Think tax season is in April? If you freelance, you already missed three deadlines.",
    whyItWorks:
      "Most first-time freelancers discover estimated taxes the hard way — at filing time. Surfacing the quarterly rhythm early prevents the penalty surprise.",
    commonMistake:
      "Waiting until April 15 to pay all self-employment tax for the prior year instead of making quarterly estimated payments throughout the year.",
    callToAction:
      "Download Form 1040-ES from the IRS and mark the four due dates in your calendar now — before the next quarter sneaks up.",
    tags: ["Self-employed", "Quarterly", "Beginners"],
    filters: ["self-employed", "creators", "beginners", "us"],
    beats: [
      {
        windowLabel: "0 – 09 s",
        headline: "The hook",
        script:
          "You finished your first year of freelancing. You earned well, saved some, and felt great — until the IRS told you that you owe a penalty. Not because you didn't pay your taxes, but because you paid them all at once instead of four times a year.",
        visualPrompt:
          "Calendar page flipping from January to April with four highlighted payment dates; a freelancer at a desk looking surprised at a penalty notice.",
      },
      {
        windowLabel: "9 – 21 s",
        headline: "The concept",
        script:
          "When no employer withholds taxes from your paychecks, the IRS expects you to pay estimated taxes quarterly. The due dates are April 15, June 15, September 15, and January 15 of the following year. Miss those, and an underpayment penalty kicks in even if your return is correct.",
        visualPrompt:
          "Four calendar cards showing each quarter's due date; arrows from income flowing into quarterly IRS payments; a timeline bar tracking the tax year.",
      },
      {
        windowLabel: "21 – 35 s",
        headline: "How it works",
        script:
          "You estimate your annual income, calculate the tax owed, divide by four, and send a payment each quarter using Form 1040-ES. If your income is uneven, the annualized-income method lets you adjust each quarter so you do not overpay early or underpay late.",
        visualPrompt:
          "A simple calculation breakdown: annual income estimate divided by four; a 1040-ES voucher being filled in; a bar chart with uneven quarterly income.",
      },
      {
        windowLabel: "35 – 48 s",
        headline: "The mistake to avoid",
        script:
          "The most common mistake is treating April 15 as the only deadline. By that date, three quarterly payments have already passed. Even if you file on time and pay in full, the IRS can charge a penalty for each quarter you were late. The safe harbor is paying at least 100 percent of last year's tax.",
        visualPrompt:
          "A penalty notice overlaid on a calendar with missed Q1-Q3 dates circled in red; a checkmark next to the 100% safe harbor rule.",
      },
      {
        windowLabel: "48 – 58 s",
        headline: "The takeaway",
        script:
          "Quarterly estimated taxes are not optional for freelancers. Mark four dates, estimate conservatively, and pay on time. It is one of the simplest ways to stay penalty-free and avoid a nasty surprise at filing time.",
        visualPrompt:
          "A phone calendar with four recurring reminders; a freelancer calmly reviewing a clean tax return; a checkmark animation.",
      },
    ],
    officialLinks: [
      {
        label: "IRS Form 1040-ES — Estimated Tax for Individuals",
        url: "https://www.irs.gov/forms-pubs/about-form-1040-es",
      },
      {
        label: "IRS Topic 355 — Estimated Tax",
        url: "https://www.irs.gov/taxtopics/tc355",
      },
      {
        label: "IRS Publication 505 — Tax Withholding and Estimated Tax",
        url: "https://www.irs.gov/forms-pubs/about-publication-505",
      },
    ],
  },

  /* 2 ─ W-9 vs 1099 ----------------------------------------------- */
  {
    id: "w9-vs-1099",
    title: "A W-9 is setup, not the tax bill",
    duration: "52 sec",
    formatLabel: "Myth-buster short",
    audienceLabel: "Creators / contractors",
    summary:
      "A W-9 is an identity form you hand to a client so they know who to report payments to. The 1099 is the form they send you (and the IRS) after the year ends. Confusing the two leads to unnecessary panic.",
    hook: "You got a W-9 request and panicked. Relax — it is not a tax bill. It is closer to giving someone your mailing address.",
    whyItWorks:
      "New contractors often freeze when they see a W-9 for the first time, assuming it triggers an immediate tax obligation. Clarifying the W-9 / 1099 sequence removes the fear.",
    commonMistake:
      "Refusing to fill out a W-9 because it feels like signing up for extra taxes, when in reality the income is taxable regardless of whether a W-9 is filed.",
    callToAction:
      "Next time a client sends a W-9, fill it out promptly and keep a copy — then watch for the 1099 the following January.",
    tags: ["Contractors", "Beginners", "Records"],
    filters: ["creators", "beginners", "records", "us"],
    beats: [
      {
        windowLabel: "0 – 08 s",
        headline: "The hook",
        script:
          "A client just emailed you a W-9 form and your stomach dropped. You think it means extra taxes or IRS trouble. But a W-9 is not a tax bill — it is closer to introducing yourself to the IRS through your client.",
        visualPrompt:
          "An email notification with 'W-9 Request' subject line; a contractor looking worried; the W-9 form appearing with a friendly handshake icon.",
      },
      {
        windowLabel: "8 – 20 s",
        headline: "What a W-9 actually is",
        script:
          "Form W-9 collects your name, address, and taxpayer identification number. You give it to the business paying you so they can report those payments to the IRS at year end. You are not sending money, filing a return, or triggering an audit — you are just providing your information.",
        visualPrompt:
          "A W-9 form with three fields highlighted: name, address, TIN; an arrow pointing from contractor to client; no dollar signs or IRS logos.",
      },
      {
        windowLabel: "20 – 32 s",
        headline: "Where the 1099 comes in",
        script:
          "After the year ends, if the client paid you $600 or more, they use your W-9 details to generate a 1099 form. That 1099 goes to both you and the IRS. It simply reports how much you were paid — it is not a bill, it is a receipt the IRS already has a copy of.",
        visualPrompt:
          "A timeline: W-9 submitted during the year, then a 1099 appearing in January; two copies — one to contractor, one to IRS.",
      },
      {
        windowLabel: "32 – 44 s",
        headline: "The mistake to avoid",
        script:
          "Some contractors avoid filling out the W-9 thinking it will reduce their taxes. It will not. The income is taxable whether you fill out the form or not. Worse, refusing or delaying a W-9 can cause the client to withhold 24 percent of your pay as backup withholding.",
        visualPrompt:
          "A split screen: left side shows a smooth payment flow with W-9 completed; right side shows 24% backup withholding deducted from a check.",
      },
      {
        windowLabel: "44 – 52 s",
        headline: "The takeaway",
        script:
          "A W-9 is just setup. A 1099 is just the report. Neither is a tax bill. Fill out the W-9 promptly, track your income, and file your return when the time comes.",
        visualPrompt:
          "A checklist: W-9 sent (check), income tracked (check), 1099 received (check), return filed (check); calm contractor nodding.",
      },
    ],
    officialLinks: [
      {
        label: "IRS Form W-9 — Request for Taxpayer Identification Number",
        url: "https://www.irs.gov/forms-pubs/about-form-w-9",
      },
      {
        label: "IRS Instructions for 1099-NEC and 1099-MISC",
        url: "https://www.irs.gov/forms-pubs/about-form-1099-nec",
      },
    ],
  },

  /* 3 ─ Platform 1099-K ------------------------------------------- */
  {
    id: "platform-1099k",
    title: "1099-K may reflect gross platform payments",
    duration: "57 sec",
    formatLabel: "Platform explainer",
    audienceLabel: "Marketplace creators",
    summary:
      "A 1099-K from a platform like Etsy, eBay, or Uber shows gross payments processed — before fees, refunds, or returns. It is not your taxable profit, and confusing the two can cause you to overreport income.",
    hook: "Your 1099-K says you earned $30,000 on Etsy. But after fees, shipping, and refunds, your actual profit was half that. Which number matters?",
    whyItWorks:
      "Platform sellers see a 1099-K number that looks far higher than their actual earnings and panic. Explaining the gross-vs-net distinction prevents overreporting and unnecessary tax bills.",
    commonMistake:
      "Reporting the gross 1099-K amount as income on Schedule C without subtracting platform fees, refunds, shipping costs, and cost of goods sold.",
    callToAction:
      "Download your platform's full transaction history and reconcile it against the 1099-K before filing — the difference is often significant.",
    tags: ["Platforms", "Records", "Self-employed"],
    filters: ["platforms", "self-employed", "records", "us"],
    beats: [
      {
        windowLabel: "0 – 09 s",
        headline: "The hook",
        script:
          "You sold handmade goods on Etsy all year. Then January arrives and your 1099-K says thirty thousand dollars. But wait — after Etsy fees, shipping labels, refunds, and materials, your actual profit was maybe fifteen thousand. If you report the gross number, you will pay taxes on money you never kept.",
        visualPrompt:
          "A 1099-K form with $30,000 in bold; next to it, a breakdown showing fees, shipping, refunds subtracting down to $15,000 actual profit.",
      },
      {
        windowLabel: "9 – 21 s",
        headline: "What the 1099-K reports",
        script:
          "A 1099-K shows the total gross payment volume a payment processor handled for you. It includes everything: the product price, sales tax collected, shipping charges paid by the buyer, and even payments that were later refunded. It does not subtract any costs, fees, or returns.",
        visualPrompt:
          "A funnel graphic: all payments flow in at the top (gross); nothing is subtracted; the 1099-K sits at the top of the funnel capturing everything.",
      },
      {
        windowLabel: "21 – 35 s",
        headline: "What you actually report",
        script:
          "On your tax return, you report your net income — gross revenue minus business expenses. On Schedule C, you list the gross income from the 1099-K, then subtract cost of goods sold, platform fees, shipping, advertising, and other legitimate deductions to arrive at your actual taxable profit.",
        visualPrompt:
          "A Schedule C form with gross income at top, expense lines filling in below, and a net profit number at the bottom highlighted in green.",
      },
      {
        windowLabel: "35 – 47 s",
        headline: "The mistake to avoid",
        script:
          "The biggest mistake is entering the 1099-K amount as your total income and stopping there. If you do not claim your expenses, you pay taxes on revenue that went to shipping companies, platform fees, and refunded customers. Keep detailed records so every deductible dollar is accounted for.",
        visualPrompt:
          "Split screen: left — a return with only gross income, huge tax bill; right — a return with expenses listed, much lower tax bill; a scale tipping.",
      },
      {
        windowLabel: "47 – 57 s",
        headline: "The takeaway",
        script:
          "A 1099-K is a starting point, not the finish line. Reconcile it with your actual transaction records, subtract your legitimate expenses, and report your real profit. The platform reports gross — your return should reflect net.",
        visualPrompt:
          "A checkmark on a reconciled spreadsheet; the 1099-K and Schedule C side by side with an equals sign between gross minus expenses and net profit.",
      },
    ],
    officialLinks: [
      {
        label: "IRS Form 1099-K — Payment Card and Third-Party Transactions",
        url: "https://www.irs.gov/forms-pubs/about-form-1099-k",
      },
      {
        label: "IRS: Understanding Your 1099-K",
        url: "https://www.irs.gov/businesses/understanding-your-form-1099-k",
      },
      {
        label: "IRS Schedule C — Profit or Loss from Business",
        url: "https://www.irs.gov/forms-pubs/about-schedule-c-form-1040",
      },
    ],
  },

  /* 4 ─ Home Office ------------------------------------------------ */
  {
    id: "home-office",
    title: "Home office means exclusive use",
    duration: "56 sec",
    formatLabel: "Deduction explainer",
    audienceLabel: "Self-employed",
    summary:
      "The home office deduction requires a space used regularly and exclusively for business. A kitchen table you also eat dinner at does not qualify, no matter how many hours you work there.",
    hook: "You work from home every day but the IRS says your home office deduction is invalid. The reason? Your office doubles as a guest room.",
    whyItWorks:
      "The exclusive-use rule is the most commonly misunderstood requirement of the home office deduction. Clarifying it upfront prevents rejected claims.",
    commonMistake:
      "Claiming a home office deduction for a room that serves dual purposes — like a spare bedroom that is also a home office — without meeting the exclusive-use test.",
    callToAction:
      "Walk through your space today. If your office area is used for anything personal, either rearrange it or switch to the simplified method to stay safe.",
    tags: ["Self-employed", "Deductions", "Beginners"],
    filters: ["self-employed", "beginners", "us"],
    beats: [
      {
        windowLabel: "0 – 09 s",
        headline: "The hook",
        script:
          "You have been working from your spare bedroom for two years. You claim the home office deduction because you work there every single day. Then the IRS flags it — because that room also has a guest bed your in-laws sleep in twice a year. That is enough to disqualify the deduction.",
        visualPrompt:
          "A room with a desk and computer on one side and a guest bed on the other; a red X appears over the room; an IRS audit flag icon.",
      },
      {
        windowLabel: "9 – 21 s",
        headline: "The exclusive-use rule",
        script:
          "The IRS requires that your home office space be used regularly and exclusively for business. Exclusive means no personal use at all. If your children do homework at your desk, or you watch TV in that room on weekends, the exclusive-use test fails. The space does not need to be a separate room, but the area you claim must be solely for work.",
        visualPrompt:
          "A floor plan with a clearly marked office zone; icons showing personal activities (TV, homework) being pushed outside the zone boundary.",
      },
      {
        windowLabel: "21 – 34 s",
        headline: "Two methods to calculate",
        script:
          "If you qualify, you can choose between the regular method and the simplified method. The regular method calculates the actual percentage of your home used for business and applies it to mortgage or rent, utilities, and insurance. The simplified method gives you five dollars per square foot, up to 300 square feet, for a maximum deduction of fifteen hundred dollars.",
        visualPrompt:
          "Two paths: left — a detailed expense worksheet with percentages; right — a simple calculation of $5 x square feet = deduction; both leading to a tax savings number.",
      },
      {
        windowLabel: "34 – 46 s",
        headline: "The mistake to avoid",
        script:
          "Do not assume that working from home automatically means you qualify. W-2 employees generally cannot claim this deduction at the federal level since the 2017 tax reform. It is primarily available to self-employed individuals and independent contractors who meet the exclusive-use test.",
        visualPrompt:
          "A W-2 badge with a red circle-slash next to the home office deduction; a 1099 badge with a green checkmark next to it.",
      },
      {
        windowLabel: "46 – 56 s",
        headline: "The takeaway",
        script:
          "The home office deduction is real and valuable, but exclusive use means exclusive. Dedicate a space, document it, and choose the calculation method that works best for your situation.",
        visualPrompt:
          "A clean, dedicated home office with a 'business only' sign; a calculator showing the deduction amount; a satisfied self-employed worker.",
      },
    ],
    officialLinks: [
      {
        label: "IRS Publication 587 — Business Use of Your Home",
        url: "https://www.irs.gov/forms-pubs/about-publication-587",
      },
      {
        label: "IRS: Home Office Deduction",
        url: "https://www.irs.gov/businesses/small-businesses-self-employed/home-office-deduction",
      },
    ],
  },

  /* 5 ─ Education Credits ------------------------------------------ */
  {
    id: "education-credits",
    title: "Education credits are a choice, not a surprise bonus",
    duration: "55 sec",
    formatLabel: "Credit explainer",
    audienceLabel: "Students",
    summary:
      "The American Opportunity Credit and Lifetime Learning Credit both reduce your tax bill for education expenses, but you must choose one per student per year. Picking the wrong one — or missing both — leaves money on the table.",
    hook: "You paid eight thousand dollars in tuition and got zero education credits. Not because you did not qualify, but because you never claimed one.",
    whyItWorks:
      "Many students and parents do not realize education credits exist or that they must actively choose between them. This short makes the choice visible and actionable.",
    commonMistake:
      "Assuming education tax benefits are applied automatically through the school, or trying to claim both the American Opportunity Credit and Lifetime Learning Credit for the same student in the same year.",
    callToAction:
      "Gather your 1098-T from your school and compare both credits using IRS Form 8863 before you file — you might save up to $2,500.",
    tags: ["Students", "Credits", "Beginners"],
    filters: ["students", "beginners", "us"],
    beats: [
      {
        windowLabel: "0 – 09 s",
        headline: "The hook",
        script:
          "You just finished your first year of college and paid eight thousand dollars in tuition. Tax time comes and you get nothing back for education. Not because you did not qualify — but because you did not know you had to claim the credit yourself. No one does it for you.",
        visualPrompt:
          "A tuition bill for $8,000; a blank tax return with no education credit claimed; a student looking confused at the missed opportunity.",
      },
      {
        windowLabel: "9 – 21 s",
        headline: "Two credits, one choice",
        script:
          "The IRS offers two main education credits. The American Opportunity Credit gives up to $2,500 per year for the first four years of college and is partially refundable. The Lifetime Learning Credit gives up to $2,000 per year with no limit on how many years you can claim it. You pick one per student per year.",
        visualPrompt:
          "Two cards side by side: AOTC ($2,500, 4-year limit, partially refundable) and LLC ($2,000, no year limit, non-refundable); a toggle switch between them.",
      },
      {
        windowLabel: "21 – 34 s",
        headline: "How to claim",
        script:
          "Your school sends a Form 1098-T showing tuition billed or paid. You use that information to fill out IRS Form 8863, which calculates your credit. The credit directly reduces your tax bill, dollar for dollar — it is not just a deduction that lowers taxable income.",
        visualPrompt:
          "A 1098-T flowing into Form 8863; the resulting credit amount being subtracted directly from a tax bill; a green arrow showing the reduction.",
      },
      {
        windowLabel: "34 – 46 s",
        headline: "The mistake to avoid",
        script:
          "Do not assume your school or your tax software will automatically apply the best credit. You need to compare both options. And do not try to claim both for the same student in the same year — the IRS will reject it. Also check income limits: both credits phase out at higher income levels.",
        visualPrompt:
          "A warning icon next to a return claiming both credits; an income scale showing phase-out ranges; a comparison checklist for choosing the right credit.",
      },
      {
        windowLabel: "46 – 55 s",
        headline: "The takeaway",
        script:
          "Education credits are valuable but not automatic. Get your 1098-T, compare the American Opportunity Credit and Lifetime Learning Credit, and claim the one that saves you more. Missing this step means paying more tax than you owe.",
        visualPrompt:
          "A student holding a 1098-T next to Form 8863; a calculator showing $2,500 in savings; a graduation cap with a dollar sign.",
      },
    ],
    officialLinks: [
      {
        label: "IRS Form 8863 — Education Credits",
        url: "https://www.irs.gov/forms-pubs/about-form-8863",
      },
      {
        label: "IRS: American Opportunity Tax Credit",
        url: "https://www.irs.gov/credits-deductions/individuals/aotc",
      },
      {
        label: "IRS: Lifetime Learning Credit",
        url: "https://www.irs.gov/credits-deductions/individuals/llc",
      },
    ],
  },

  /* 6 ─ YouTube Tax Prompt ----------------------------------------- */
  {
    id: "youtube-tax-prompt",
    title: "A YouTube tax prompt is not just a settings annoyance",
    duration: "59 sec",
    formatLabel: "Cross-border explainer",
    audienceLabel: "YouTube creators",
    summary:
      "When YouTube asks for your tax information, it is conducting a real tax interview on behalf of Google Payments. Your answers determine withholding rates on U.S.-sourced ad revenue and which IRS form gets filed.",
    hook: "YouTube asked for your tax info and you almost clicked through it like a cookie banner. That prompt determines how much of your ad revenue the IRS keeps.",
    whyItWorks:
      "Many creators treat the YouTube tax prompt as a nuisance pop-up. Revealing that it controls real withholding rates and IRS reporting makes them pay attention.",
    commonMistake:
      "Rushing through the YouTube tax information prompt without understanding which form applies (W-9, W-8BEN, or W-8BEN-E), leading to incorrect withholding or rejected submissions.",
    callToAction:
      "Before completing the prompt, read Google's tax info help page and confirm whether you need a W-9, W-8BEN, or W-8BEN-E based on your tax residency and entity type.",
    tags: ["Creators", "Platforms", "Cross-border"],
    filters: ["creators", "platforms", "cross-border"],
    beats: [
      {
        windowLabel: "0 – 09 s",
        headline: "The hook",
        script:
          "YouTube pops up a notification asking for your tax information. It looks like just another settings prompt, so you rush through it. But this is not a cookie banner. Your answers here determine whether the IRS withholds zero, 15, or 30 percent of your U.S.-sourced ad revenue — permanently until you fix it.",
        visualPrompt:
          "A YouTube Studio notification badge; the tax info prompt appearing; three paths showing 0%, 15%, and 30% withholding rates branching from the form.",
      },
      {
        windowLabel: "9 – 22 s",
        headline: "What the prompt is doing",
        script:
          "Google Payments acts as a withholding agent for the IRS. When you submit tax info, Google determines your tax status and applies the correct withholding rate to your U.S.-sourced income. For non-U.S. creators, that means income from U.S. viewers watching ads. The form you fill out becomes an official IRS document.",
        visualPrompt:
          "A flow diagram: YouTube ad revenue -> Google Payments -> IRS withholding -> your payment; the tax form sitting in the middle controlling the rate.",
      },
      {
        windowLabel: "22 – 36 s",
        headline: "Which form applies",
        script:
          "If you are a U.S. person, you fill out a W-9. If you are a non-U.S. individual, you fill out a W-8BEN and may claim a reduced withholding rate under a tax treaty. If you are a non-U.S. entity like an LLC or company, you may need a W-8BEN-E instead. Choosing the wrong form can result in the maximum 30 percent withholding.",
        visualPrompt:
          "Three form cards: W-9 (US person), W-8BEN (non-US individual), W-8BEN-E (non-US entity); decision tree arrows leading to each based on residency and entity type.",
      },
      {
        windowLabel: "36 – 49 s",
        headline: "The mistake to avoid",
        script:
          "Do not guess your way through the prompts. If you select the wrong taxpayer type, enter an incorrect TIN, or skip the treaty section, Google may apply the default 30 percent withholding rate. Fixing it later requires resubmitting the form and waiting for processing, during which your payments continue at the wrong rate.",
        visualPrompt:
          "A form with incorrect fields highlighted in red; a payment statement showing 30% withheld; a clock icon representing the delay to fix it.",
      },
      {
        windowLabel: "49 – 59 s",
        headline: "The takeaway",
        script:
          "The YouTube tax prompt is a real tax interview with real consequences. Take it seriously, choose the correct form, claim any treaty benefits you are entitled to, and keep a record of what you submitted. It directly affects every payment you receive.",
        visualPrompt:
          "A creator reviewing the completed form carefully; a payment statement with the correct withholding rate; a file folder labeled 'tax records'.",
      },
    ],
    officialLinks: [
      {
        label: "Google Help: Submit tax info to Google",
        url: "https://support.google.com/youtube/answer/10390801",
      },
      {
        label: "IRS Form W-8BEN",
        url: "https://www.irs.gov/forms-pubs/about-form-w-8-ben",
      },
      {
        label: "IRS Form W-8BEN-E",
        url: "https://www.irs.gov/forms-pubs/about-form-w-8-ben-e",
      },
    ],
  },

  /* 7 ─ Foreign Earned Income Exclusion ----------------------------- */
  {
    id: "foreign-earned-income",
    title: "Foreign earned income exclusion is not a filing escape hatch",
    duration: "59 sec",
    formatLabel: "Cross-border explainer",
    audienceLabel: "Workers abroad",
    summary:
      "The Foreign Earned Income Exclusion lets qualifying Americans abroad exclude up to $126,500 (2024) of earned income from U.S. tax. But you still have to file a return, meet strict presence or residency tests, and it does not cover investment or self-employment tax.",
    hook: "You moved abroad and heard you do not have to pay U.S. taxes anymore. That is dangerously half-true.",
    whyItWorks:
      "Americans overseas often believe the FEIE means they can stop filing. Showing the limits and requirements prevents costly non-filing penalties.",
    commonMistake:
      "Assuming the Foreign Earned Income Exclusion means you do not need to file a U.S. tax return, or that it covers all types of income including investment gains and self-employment tax.",
    callToAction:
      "If you live abroad, confirm you meet either the bona-fide-residence or physical-presence test, then file Form 2555 with your return — even if your exclusion covers all your earned income.",
    tags: ["Cross-border", "Expats", "Self-employed"],
    filters: ["cross-border", "self-employed", "us"],
    beats: [
      {
        windowLabel: "0 – 09 s",
        headline: "The hook",
        script:
          "You are an American living in Berlin, earning euros, paying German taxes, and someone tells you the Foreign Earned Income Exclusion means you are off the hook with the IRS. So you stop filing. Two years later, the IRS sends you a notice — with penalties and interest. The exclusion is real, but it is not an escape from filing.",
        visualPrompt:
          "An American in Berlin receiving an IRS notice; a split showing the FEIE benefit on one side and the filing requirement on the other.",
      },
      {
        windowLabel: "9 – 22 s",
        headline: "What the FEIE does",
        script:
          "The Foreign Earned Income Exclusion lets qualifying U.S. citizens and resident aliens exclude a portion of their foreign earned income from U.S. federal tax. For 2024, the limit is $126,500. This can significantly reduce or eliminate your U.S. tax on wages and self-employment earnings from abroad, but only if you actively claim it on your return.",
        visualPrompt:
          "A bar chart showing gross foreign income with $126,500 excluded (grayed out) and the remainder taxable; Form 2555 appearing below.",
      },
      {
        windowLabel: "22 – 36 s",
        headline: "The qualification tests",
        script:
          "To qualify, you must pass one of two tests. The bona-fide-residence test requires you to be a bona fide resident of a foreign country for an entire tax year. The physical-presence test requires you to be physically present in a foreign country for at least 330 full days during a 12-month period. Short trips home count against you.",
        visualPrompt:
          "Two paths: a residency card icon for bona-fide-residence and a calendar with 330 days highlighted for physical-presence; a counter tracking days abroad.",
      },
      {
        windowLabel: "36 – 49 s",
        headline: "What it does not cover",
        script:
          "The FEIE only applies to earned income — wages, salaries, and self-employment earnings. It does not cover investment income like dividends, interest, capital gains, or rental income. And even if your earned income is fully excluded, you still owe self-employment tax on that income. The exclusion reduces income tax, not Social Security and Medicare tax.",
        visualPrompt:
          "Two columns: left shows earned income with a checkmark and FEIE applied; right shows investment income and SE tax with red X marks — not covered.",
      },
      {
        windowLabel: "49 – 59 s",
        headline: "The takeaway",
        script:
          "The FEIE is a powerful benefit, but it requires filing, passing a test, and understanding its limits. You must file Form 2555 with your tax return every year you claim it. Living abroad does not mean the IRS forgets about you — it means you have an extra form to file.",
        visualPrompt:
          "A globe with a U.S. flag pin and Form 2555; a filing cabinet with yearly returns; a calm expat reviewing paperwork with confidence.",
      },
    ],
    officialLinks: [
      {
        label: "IRS Form 2555 — Foreign Earned Income",
        url: "https://www.irs.gov/forms-pubs/about-form-2555",
      },
      {
        label: "IRS Publication 54 — Tax Guide for U.S. Citizens Abroad",
        url: "https://www.irs.gov/forms-pubs/about-publication-54",
      },
      {
        label: "IRS: Foreign Earned Income Exclusion",
        url: "https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion",
      },
    ],
  },
];
