"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 text-amber-500 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function FlowStepYes() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
      YES
    </span>
  );
}

function FlowStepNo() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
      NO
    </span>
  );
}

export function WhenForm1040NrGuideClient() {
  const TOC = [
    { id: "what-is-1040nr", label: "What Is Form 1040-NR?" },
    { id: "two-triggers", label: "Two Triggers for 1040-NR Filing" },
    { id: "decision-flowchart", label: "Decision Flowchart" },
    { id: "eci-examples", label: "ECI Examples for LLC Owners" },
    { id: "itin-requirement", label: "ITIN Requirement" },
    { id: "whats-on-1040nr", label: "What Goes on the 1040-NR" },
    { id: "relationship-5472", label: "The Relationship Between 1040-NR and 5472" },
    { id: "what-we-cover", label: "What ForeignLLCTax.com Covers Today" },
    { id: "coming-soon", label: "Coming Soon: 1040-NR Filing Support" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/guides/start-your-business" className="hover:text-gray-600">Guides</Link>
            <span>/</span>
            <span className="text-gray-600">When You Need 1040-NR</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Decision Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              When Do Foreign LLC Owners Need Form 1040-NR?
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Not every foreign-owned LLC triggers a personal tax return. Use this guide to
              determine whether you need to file Form 1040-NR with the IRS, and what to do
              if you do.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Form 1040-NR is a personal income tax return for nonresident aliens with US-source income
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Two main triggers: Effectively Connected Income (ECI) or FDAP income with insufficient withholding
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Most foreign-owned LLCs that only file Form 5472 do NOT also need 1040-NR
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                If you do need 1040-NR, you will also need an ITIN (Individual Taxpayer Identification Number)
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              In This Guide
            </h2>
            <ol className="space-y-1.5">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-sm text-amber-600 hover:text-amber-800 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* What Is Form 1040-NR? */}
          <section id="what-is-1040nr" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is Form 1040-NR?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Form 1040-NR is the United States income tax return for nonresident aliens. If you
              are not a US citizen and do not meet the green card test or substantial presence test,
              you are classified as a nonresident alien. When you have certain types of US-source
              income, the IRS requires you to file this form to report and pay tax on that income.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              It is critical to understand that Form 1040-NR is NOT the same as Form 1040. Form
              1040 is the standard tax return for US persons (citizens and residents). If you are
              a foreign LLC owner living abroad, the 1040-NR is the form that applies to your
              personal US tax obligations, if any exist.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Important distinction:</strong> Form 5472 (attached to a pro-forma Form
                1120) is an information return about your LLC. Form 1040-NR is your personal
                income tax return. They serve entirely different purposes and are filed separately.
              </p>
            </div>
          </section>

          {/* Two Triggers for 1040-NR Filing */}
          <section id="two-triggers" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Two Triggers for 1040-NR Filing
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              There are two primary situations that require a nonresident alien to file Form
              1040-NR. Understanding which trigger applies to your situation is the key to
              determining your filing obligations.
            </p>

            {/* Trigger 1 */}
            <div className="bg-gray-50 rounded-xl p-5 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold">1</span>
                <h3 className="text-sm font-bold text-gray-900">
                  Effectively Connected Income (ECI)
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                You have income that is effectively connected with the conduct of a trade or
                business in the United States. This is the most common trigger for foreign LLC
                owners. If your LLC is actively conducting business within the US, the income
                generated from that business activity is considered ECI.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Examples of activities that create ECI:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>Running a business through your LLC that operates on US soil</li>
                <li>Owning and operating rental real estate in the United States</li>
                <li>Performing personal services (consulting, freelancing) while physically present in the US</li>
                <li>Operating a retail or wholesale business with a physical US location</li>
              </ul>
            </div>

            {/* Trigger 2 */}
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold">2</span>
                <h3 className="text-sm font-bold text-gray-900">
                  FDAP Income with Insufficient Withholding
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                You received Fixed, Determinable, Annual, or Periodical (FDAP) income from US
                sources, and the required withholding was not properly applied. FDAP income
                includes dividends, interest, royalties, rents, and similar periodic payments.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                By default, FDAP income paid to nonresident aliens is subject to a 30% withholding
                tax (or a reduced rate under an applicable tax treaty). If the withholding agent
                (the entity paying you) correctly withholds the full amount, you generally do not
                need to file a 1040-NR for that income.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                However, if the withholding was insufficient, incorrect, or you want to claim a
                refund because a treaty entitles you to a lower rate, you file Form 1040-NR to
                settle the difference with the IRS.
              </p>
            </div>
          </section>

          {/* Decision Flowchart */}
          <section id="decision-flowchart" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Decision Flowchart
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Walk through these steps in order to determine whether you need to file Form
              1040-NR. Stop at the first step that gives you a definitive answer.
            </p>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-amber-700 text-xs font-bold">
                    1
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Are you a US person?
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2 ml-9">
                  A US person includes US citizens, green card holders, and individuals who meet
                  the substantial presence test. If you are a US person, Form 1040-NR does not
                  apply to you.
                </p>
                <div className="ml-9 space-y-1.5">
                  <div className="flex items-center gap-2 text-sm">
                    <FlowStepYes />
                    <span className="text-gray-700">
                      You file Form 1040 (the standard return), not Form 1040-NR.{" "}
                      <strong className="text-amber-700">Stop here.</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FlowStepNo />
                    <span className="text-gray-700">Continue to Step 2.</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-amber-700 text-xs font-bold">
                    2
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Does your LLC conduct a trade or business in the US?
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2 ml-9">
                  This includes operating a physical business, performing services on US soil,
                  managing rental property, or any activity that constitutes a US trade or
                  business under IRC Section 864(b).
                </p>
                <div className="ml-9 space-y-1.5">
                  <div className="flex items-center gap-2 text-sm">
                    <FlowStepYes />
                    <span className="text-gray-700">
                      You likely have Effectively Connected Income (ECI).{" "}
                      <strong className="text-amber-700">File Form 1040-NR.</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FlowStepNo />
                    <span className="text-gray-700">Continue to Step 3.</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-amber-700 text-xs font-bold">
                    3
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Did you receive US-source FDAP income?
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2 ml-9">
                  FDAP income includes dividends from US companies, interest from US bank
                  accounts (above the exemption threshold), royalties from US intellectual
                  property, and rental income from US real property.
                </p>
                <div className="ml-9 space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <FlowStepYes />
                    <span className="text-gray-700">
                      Was proper withholding (typically 30%, or treaty rate) applied to all of
                      this income?
                    </span>
                  </div>
                  <div className="ml-12 space-y-1.5">
                    <div className="flex items-center gap-2 text-sm">
                      <FlowStepYes />
                      <span className="text-gray-600">
                        Generally no 1040-NR needed (withholding satisfied your obligation).
                        Continue to Step 4.
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FlowStepNo />
                      <span className="text-gray-700">
                        <strong className="text-amber-700">
                          File Form 1040-NR
                        </strong>{" "}
                        to claim a refund or pay the difference.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FlowStepNo />
                    <span className="text-gray-700">Continue to Step 4.</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border border-amber-200 bg-amber-50/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500 text-white text-xs font-bold">
                    4
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900">
                    None of the above apply
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed ml-9">
                  If you are a nonresident alien, your LLC does not conduct a US trade or business,
                  and you have no US-source FDAP income requiring settlement, then you do{" "}
                  <strong>not</strong> need to file Form 1040-NR. Your only obligation is the
                  information return:{" "}
                  <strong>Form 5472 + pro-forma Form 1120</strong>, which reports your LLC
                  ownership and related-party transactions.
                </p>
              </div>
            </div>
          </section>

          {/* ECI Examples for LLC Owners */}
          <section id="eci-examples" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              ECI Examples for LLC Owners
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Determining whether your income qualifies as Effectively Connected Income can be
              nuanced. Here are real-world scenarios to help you assess your situation:
            </p>

            <div className="space-y-3">
              {[
                {
                  emoji: "✅",
                  label: "ECI",
                  bg: "bg-green-50 border-green-200",
                  title: "Vending machine business in Florida",
                  desc: "You own an LLC that operates vending machines in the United States. The machines are physically located on US soil, generate revenue from US customers, and require regular servicing. This is a clear US trade or business generating ECI.",
                },
                {
                  emoji: "✅",
                  label: "ECI",
                  bg: "bg-green-50 border-green-200",
                  title: "E-commerce selling physical goods from a US warehouse",
                  desc: "Your LLC stores inventory in a US warehouse and fulfills orders to US and international customers. The presence of inventory, warehouse operations, and order fulfillment activity in the US creates a US trade or business.",
                },
                {
                  emoji: "✅",
                  label: "ECI",
                  bg: "bg-green-50 border-green-200",
                  title: "Consulting services performed while visiting the US",
                  desc: "You travel to the US on a B-1 visa and perform consulting work for clients while physically present. Personal services performed in the US generate ECI, even if the contract was signed abroad.",
                },
                {
                  emoji: "❌",
                  label: "NOT ECI",
                  bg: "bg-red-50 border-red-200",
                  title: "Holding stocks in a US brokerage account",
                  desc: "Your LLC holds a portfolio of US stocks through a brokerage account. Trading in stocks and securities for your own account is generally not considered a US trade or business. Dividends are FDAP income (subject to withholding), and capital gains of nonresident aliens from stock sales are generally not taxed by the US.",
                },
                {
                  emoji: "✅",
                  label: "ECI (with election)",
                  bg: "bg-green-50 border-green-200",
                  title: "Owning rental property in the United States",
                  desc: "Your LLC owns an apartment building in Texas. By default, rental income from US real property is FDAP subject to 30% gross withholding. However, you can elect under IRC Section 871(d) to treat this income as ECI, which allows you to deduct expenses and be taxed on net income instead. Most property owners make this election because it results in lower taxes.",
                },
                {
                  emoji: "⚠️",
                  label: "Gray Area",
                  bg: "bg-yellow-50 border-yellow-200",
                  title: "SaaS business with all work done abroad, US customers",
                  desc: "Your LLC sells software subscriptions to US customers, but all development, support, and operations are performed outside the United States. Whether this creates a US trade or business depends on the specific facts: where decisions are made, whether you have US-based employees or agents, and the nature of your US presence. This is a common gray area that may require professional guidance.",
                },
              ].map((item) => (
                <div key={item.title} className={`${item.bg} border rounded-xl p-4`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-sm">{item.emoji}</span>
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ITIN Requirement */}
          <section id="itin-requirement" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              ITIN Requirement
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              To file Form 1040-NR, you need a US taxpayer identification number. This is either
              a Social Security Number (SSN) or an Individual Taxpayer Identification Number
              (ITIN). Since most foreign LLC owners are not eligible for an SSN, you will need to
              apply for an ITIN.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The ITIN is obtained by filing Form W-7 (Application for IRS Individual Taxpayer
              Identification Number). The good news is that you can submit Form W-7 together with
              your Form 1040-NR. The IRS will process your ITIN application and tax return at the
              same time.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The W-7 application requires you to include original identification documents (such
              as a passport) or certified copies from the issuing agency. You can also apply
              through an IRS-authorized Certifying Acceptance Agent (CAA) to avoid mailing
              original documents.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Timeline:</strong> ITIN processing typically takes 7 to 11 weeks. If you
                are filing 1040-NR with a W-7, plan ahead so you do not miss the filing deadline.
                You may need to file for an extension using Form 4868.
              </p>
            </div>

            <Link
              href="/guides/itin-1040nr-connection"
              className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-medium"
            >
              <ArrowIcon />
              Read our full guide on the ITIN and 1040-NR connection
            </Link>
          </section>

          {/* What Goes on the 1040-NR */}
          <section id="whats-on-1040nr" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Goes on the 1040-NR
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Form 1040-NR consists of the main form plus several schedules that may apply
              depending on your income types. Here is a high-level overview of the key components:
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Page 1: Filing Status, Exemptions, and Income",
                  desc: "The first page captures your basic information, filing status, and a summary of your income. Nonresident aliens have limited filing status options compared to US residents. You report your gross income from US sources here.",
                },
                {
                  title: "Schedule C: Profit or Loss from Business",
                  desc: "If your LLC generates business income that is ECI, you attach Schedule C to report your business revenue, expenses, and net profit or loss. This is the same Schedule C that US sole proprietors use.",
                },
                {
                  title: "Schedule NEC: Income Not Effectively Connected",
                  desc: "FDAP income (dividends, interest, royalties, certain rents) that is not effectively connected with a US trade or business is reported on Schedule NEC. This schedule calculates the tax on that income, typically at the 30% rate or a reduced treaty rate.",
                },
                {
                  title: "Schedule OI: Other Information",
                  desc: "This schedule collects additional details specific to nonresident aliens: your visa type (if applicable), the number of days you were present in the US, your country of residence, and any tax treaty claims you are making to reduce your tax rate.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Additional schedules may apply depending on your situation.
                For example, Schedule A (Itemized Deductions) is available to nonresident aliens for
                certain deductions connected with ECI. Schedule SE (Self-Employment Tax) may also
                apply if your LLC income is subject to self-employment tax under a totalization
                agreement.
              </p>
            </div>
          </section>

          {/* Relationship Between 1040-NR and 5472 */}
          <section id="relationship-5472" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Relationship Between 1040-NR and 5472
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This is one of the most common sources of confusion for foreign LLC owners. Let us
              clarify exactly how these two filings relate to each other.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-amber-800 mb-2">
                  Form 5472 + Pro-Forma 1120
                </h3>
                <ul className="space-y-1.5 text-sm text-amber-900">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">--</span>
                    An information return about your LLC
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">--</span>
                    Reports related-party transactions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">--</span>
                    Filed by the LLC (as a disregarded entity)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">--</span>
                    Mailed or faxed to the IRS in Ogden, UT
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">--</span>
                    Required for ALL foreign-owned LLCs
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-blue-800 mb-2">
                  Form 1040-NR
                </h3>
                <ul className="space-y-1.5 text-sm text-blue-900">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">--</span>
                    Your personal income tax return
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">--</span>
                    Reports your US-source income and tax liability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">--</span>
                    Filed by you as an individual
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">--</span>
                    Mailed to the IRS in Austin, TX
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">--</span>
                    Only required if you have ECI or unsettled FDAP
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                <strong>You file BOTH forms if both apply.</strong> The Form 5472 + pro-forma
                1120 goes to one IRS address. The Form 1040-NR goes to a completely different
                address. They are processed by different IRS departments.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Many foreign LLC owners only need the 5472 + pro-forma 1120. If your LLC is
                simply a holding entity or operates entirely outside the US, the 1040-NR likely
                does not apply to you. However, if your LLC generates ECI, you need both.
              </p>
            </div>
          </section>

          {/* What ForeignLLCTax.com Covers Today */}
          <section id="what-we-cover" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What ForeignLLCTax.com Covers Today
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Our platform specializes in the filing that every foreign-owned LLC needs: Form
              5472 attached to a pro-forma Form 1120. This is the information return that reports
              your LLC ownership structure and related-party transactions to the IRS.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              For $49, our guided filer walks you through every field, validates your inputs in
              real time, and generates IRS-ready PDFs that you can download, print, and mail.
              The entire process takes about 30 to 60 minutes.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              For Form 1040-NR filing, we currently recommend working with a tax professional who
              specializes in nonresident alien returns. The 1040-NR involves income calculations,
              treaty analysis, and potential self-employment tax considerations that benefit from
              professional guidance.
            </p>

            <div className="space-y-3 mb-5">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-green-600 text-sm font-bold">We handle</span>
                </div>
                <ul className="space-y-1 text-sm text-green-800 ml-1">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Form 5472 (Information Return of a 25% Foreign-Owned US Corporation)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Pro-forma Form 1120 (US Corporation Income Tax Return)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Step-by-step guidance, real-time validation, and IRS-ready PDFs
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-600 text-sm font-bold">Consult a professional for</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-600 ml-1">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">--</span>
                    Form 1040-NR (Nonresident Alien Income Tax Return)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">--</span>
                    ECI calculations and treaty position analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">--</span>
                    Complex multi-entity structures or transfer pricing
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/filer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-8 py-3 rounded-xl transition-colors"
            >
              File Your Form 5472 Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </section>

          {/* Coming Soon — 1040-NR Filing Support */}
          <section id="coming-soon" className="mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  Coming Soon
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-extrabold mb-2">
                1040-NR Filing Support
              </h2>
              <p className="text-sm text-blue-100 leading-relaxed mb-5 max-w-xl">
                We are building tools to help foreign LLC owners file Form 1040-NR. The same
                guided experience you know from our Form 5472 filer, applied to your personal
                nonresident alien tax return. Join the waitlist to be first in line.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/30"
                  readOnly
                />
                <button
                  type="button"
                  className="bg-white text-blue-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors cursor-default"
                >
                  Notify Me
                </button>
              </div>

              <p className="text-xs text-blue-200 mt-3">
                No spam. We will only email you when 1040-NR filing is available.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Related Guides
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
                { text: "ITIN and 1040-NR connection explained", href: "/guides/itin-1040nr-connection" },
                { text: "Form 1040-NR overview and schedules", href: "/guides/form-1040-nr" },
                { text: "DIY tax filing vs hiring a CPA", href: "/guides/diy-vs-cpa" },
                { text: "Understanding ECI and US trade or business risk", href: "/guides/ustb-risk" },
                { text: "Common Form 5472 mistakes to avoid", href: "/guides/form-5472-common-mistakes" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800"
                >
                  <ArrowIcon />
                  {item.text}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
