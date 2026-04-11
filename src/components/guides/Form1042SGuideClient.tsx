"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function AlertIcon() {
  return (
    <svg
      className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

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
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

export function Form1042SGuideClient() {
  const TOC = [
    { id: "what-is-1042s", label: "What Is Form 1042-S?" },
    { id: "why-you-received", label: "Why You Received One" },
    { id: "key-fields", label: "Key Fields on Form 1042-S" },
    { id: "do-you-need-to-file", label: "Do You Need to File a Tax Return?" },
    { id: "treaty-benefits", label: "Treaty Benefits" },
    { id: "not-replace-5472", label: "Form 1042-S Does NOT Replace Form 5472" },
    { id: "what-to-do", label: "What to Do When You Receive a 1042-S" },
    { id: "coming-soon", label: "Coming Soon: 1040-NR Filing" },
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
            <span className="text-gray-600">Form 1042-S</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Tax Form Explained
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Form 1042-S for Foreign LLC Owners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              You received a Form 1042-S in the mail or from your broker. What does it mean,
              do you owe taxes, and what should you do next? This guide walks you through it.
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
                Form 1042-S reports US-source income paid to foreign persons and the tax withheld
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                If withholding was correct, you may not need to file a return at all
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                If you were over-withheld, file Form 1040-NR to claim a refund
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Receiving a 1042-S does NOT replace your Form 5472 filing obligation
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

          {/* Section 1: What Is Form 1042-S? */}
          <section id="what-is-1042s" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is Form 1042-S?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Form 1042-S is officially titled &ldquo;Foreign Person&rsquo;s U.S. Source Income Subject
              to Withholding.&rdquo; It is an IRS information return that reports payments of
              US-source income made to foreign persons (nonresident aliens, foreign corporations,
              foreign partnerships, etc.) and the amount of federal tax withheld from those payments.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you are a foreign person and received US-source FDAP income &mdash; dividends,
              interest, royalties, rents, or certain other types of fixed or determinable annual
              or periodical income &mdash; the withholding agent (your broker, bank, or the
              entity paying you) is required to send you a Form 1042-S showing the gross income
              paid and the amount of federal tax withheld.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Think of it this way:</strong> Form 1042-S is the nonresident equivalent of
                a 1099. US persons receive 1099-DIV for dividends and 1099-INT for interest.
                Foreign persons receive a single Form 1042-S that covers all types of FDAP income.
              </p>
            </div>
          </section>

          {/* Section 2: Why You Received One */}
          <section id="why-you-received" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why You Received One
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              There are several common scenarios that trigger a Form 1042-S. If any of these
              apply to you, that explains why you received one:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "US brokerage account paid dividends",
                  desc: "You hold US stocks or ETFs in a brokerage account. The dividends are US-source income. The broker withheld 30% (or a treaty-reduced rate) and issued you a 1042-S reporting the dividends and withholding.",
                },
                {
                  title: "US bank account paid interest",
                  desc: "You have a US bank account that earned interest. The bank withheld 30% (or a treaty-reduced rate) on the interest payments and reported them on a 1042-S.",
                },
                {
                  title: "US company paid you royalties",
                  desc: "You licensed intellectual property, software, or creative work to a US company. The company withheld 30% (or a treaty-reduced rate) from your royalty payments and reported them on a 1042-S.",
                },
                {
                  title: "Partnership issued a K-1 with ECI",
                  desc: "You are a partner in a US partnership that has effectively connected income. The partnership applied withholding under Section 1446 and issued you a 1042-S showing the withholding applied to your share of ECI.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              In all of these cases, the common thread is that a US-based payer was required to
              withhold federal tax on income paid to you as a foreign person and then report
              both the income and the withholding to the IRS on Form 1042-S.
            </p>
          </section>

          {/* Section 3: Key Fields on Form 1042-S */}
          <section id="key-fields" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Key Fields on Form 1042-S
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Form 1042-S contains many boxes, but these are the ones that matter most when
              you are reviewing your form:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Box</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Description</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">What It Tells You</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { box: "Box 1", desc: "Income code", detail: "Identifies the type of income (e.g., 06 = Dividends, 01 = Interest, 12 = Royalties)" },
                    { box: "Box 2", desc: "Gross income", detail: "The total amount of US-source income paid to you before withholding" },
                    { box: "Box 3", desc: "Chapter indicator", detail: "Whether withholding is under Chapter 3 (NRA withholding) or Chapter 4 (FATCA)" },
                    { box: "Box 7", desc: "Federal tax withheld", detail: "The amount of US federal tax that was withheld from your income" },
                    { box: "Box 12a/12b", desc: "Withholding agent", detail: "The name and EIN of the entity that withheld the tax (your broker, bank, etc.)" },
                    { box: "Box 13", desc: "Recipient info", detail: "Your name, address, and taxpayer identification number (that is you)" },
                  ].map((row) => (
                    <tr key={row.box} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800 whitespace-nowrap">{row.box}</td>
                      <td className="py-3 px-3 text-gray-600">{row.desc}</td>
                      <td className="py-3 px-3 text-gray-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <h3 className="text-sm font-semibold text-amber-800 mb-2">Common Income Codes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { code: "01", label: "Interest paid by US obligors" },
                  { code: "06", label: "Dividends paid by US corporations" },
                  { code: "12", label: "Royalties" },
                ].map((item) => (
                  <div key={item.code} className="bg-white rounded-lg p-3 border border-amber-100">
                    <span className="text-xs font-bold text-amber-700 block mb-0.5">Code {item.code}</span>
                    <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Do You Need to File a Tax Return? */}
          <section id="do-you-need-to-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Do You Need to File a Tax Return?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This is the most common question foreign persons ask when they receive a 1042-S.
              The answer depends on your specific situation:
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-800 mb-1">
                  You may NOT need to file
                </h3>
                <p className="text-sm text-green-700">
                  If the withholding was correct (30% statutory rate or the correct treaty rate)
                  and you have no other US-source income, you may not need to file a US tax return.
                  The withholding already satisfies your US tax obligation on that income. The
                  tax was collected at the source and remitted to the IRS on your behalf.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-800 mb-1">
                  File Form 1040-NR to claim a REFUND
                </h3>
                <p className="text-sm text-blue-700">
                  If you were over-withheld &mdash; for example, your broker withheld at 30% but
                  a tax treaty entitles you to a lower rate (such as 15%) &mdash; you should file
                  Form 1040-NR (U.S. Nonresident Alien Income Tax Return) to claim a refund of
                  the excess withholding. This is the most common reason foreign persons file
                  a 1040-NR.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-800 mb-1">
                  File Form 1040-NR if withholding was INSUFFICIENT
                </h3>
                <p className="text-sm text-red-700">
                  If the withholding agent under-withheld (rare, but it happens), you need to
                  file Form 1040-NR to report the correct amount and pay the difference. This
                  typically occurs when a withholding agent incorrectly applied a treaty rate
                  you were not entitled to.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-800 mb-1">
                  File 1040-NR if you have ECI from an LLC
                </h3>
                <p className="text-sm text-amber-700">
                  If you have effectively connected income (ECI) from a US LLC or partnership,
                  you are required to file Form 1040-NR regardless. In that case, you would
                  report your 1042-S income on the same return. The 1042-S withholding becomes
                  a credit against your total tax liability.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Treaty Benefits */}
          <section id="treaty-benefits" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Treaty Benefits
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The United States has income tax treaties with many countries. These treaties often
              reduce the standard 30% withholding rate on certain types of income. If a treaty
              applies to your situation, you may be entitled to a lower rate of withholding.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              For example, the US-UK tax treaty reduces the withholding rate on dividends from
              30% to 15% for portfolio dividends. If your US broker withheld 30% on your
              dividends but the treaty rate is 15%, you are entitled to a refund of the 15%
              difference.
            </p>

            <div className="bg-gray-50 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">How Treaty Refunds Work</h3>
              <div className="space-y-2">
                {[
                  "Your broker withholds 30% on $10,000 in dividends = $3,000 withheld",
                  "Your country's treaty reduces the dividend rate to 15% = $1,500 should have been withheld",
                  "You file Form 1040-NR reporting the dividends and claiming $1,500 refund",
                  "You attach Form 8833 (Treaty-Based Return Position Disclosure) to disclose the treaty claim",
                  "The IRS processes your return and sends you a $1,500 refund check",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> To claim treaty benefits on your 1040-NR, you must
                attach Form 8833 (Treaty-Based Return Position Disclosure). This form tells the
                IRS which treaty article you are relying on and why you are entitled to a reduced
                rate. Failing to include Form 8833 can result in your treaty claim being denied.
              </p>
            </div>
          </section>

          {/* Section 6: Does NOT Replace Form 5472 */}
          <section id="not-replace-5472" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Form 1042-S Does NOT Replace Form 5472
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <AlertIcon />
                <div>
                  <h3 className="text-sm font-semibold text-red-800 mb-1">
                    This is a common misconception
                  </h3>
                  <p className="text-sm text-red-700 leading-relaxed">
                    Receiving a Form 1042-S does not change, reduce, or eliminate your Form 5472
                    filing obligation. These are completely separate requirements under different
                    sections of the Internal Revenue Code.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Requirement</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Form 1042-S</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Form 5472</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { req: "What it reports", s: "US-source FDAP income and withholding", f: "Reportable transactions between LLC and foreign owner" },
                    { req: "Who files it", s: "The withholding agent (broker, bank, payer)", f: "You (the LLC / reporting corporation)" },
                    { req: "Triggered by", s: "Payment of US-source income to a foreign person", f: "Ownership of a US LLC by a foreign person" },
                    { req: "Filed with", s: "Sent to you; copy goes to IRS", f: "Attached to pro-forma Form 1120, mailed to IRS" },
                    { req: "Penalty for not filing", s: "N/A (you do not file it)", f: "$25,000 per form, per year" },
                  ].map((row) => (
                    <tr key={row.req} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.req}</td>
                      <td className="py-3 px-3 text-gray-600">{row.s}</td>
                      <td className="py-3 px-3 text-gray-600">{row.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              If you own a single-member LLC that is treated as a disregarded entity, you must
              file Form 5472 (attached to a pro-forma Form 1120) every year, regardless of
              whether you also received a 1042-S. The two filings serve different purposes and
              are governed by different rules. Do not skip one because you filed the other.
            </p>
          </section>

          {/* Section 7: What to Do When You Receive a 1042-S */}
          <section id="what-to-do" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What to Do When You Receive a 1042-S
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Follow these steps when a Form 1042-S arrives:
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "Step 1",
                  title: "Verify the amounts match your records",
                  desc: "Compare Box 2 (gross income) against your own records of income received. Compare Box 7 (federal tax withheld) against the withholding you observed during the year. If there are discrepancies, contact the withholding agent to request a corrected form.",
                },
                {
                  step: "Step 2",
                  title: "Determine if the withholding rate was correct",
                  desc: "Check Box 3a (tax rate) on your 1042-S. Was 30% withheld? Was a treaty rate applied? Compare the rate actually applied against the rate you believe you are entitled to under any applicable tax treaty.",
                },
                {
                  step: "Step 3",
                  title: "Check if a tax treaty applies to reduce your rate",
                  desc: "Look up the US tax treaty with your country of residence. Find the article that covers your type of income (dividends, interest, royalties). If the treaty rate is lower than what was withheld, you may be entitled to a refund.",
                },
                {
                  step: "Step 4",
                  title: "If refund possible or additional tax owed, file 1040-NR",
                  desc: "If you were over-withheld (treaty rate is lower than the amount withheld) or under-withheld, file Form 1040-NR. Report the 1042-S income, claim the withholding as a credit, and calculate any refund due or additional tax owed. Attach Form 8833 if claiming treaty benefits.",
                },
                {
                  step: "Step 5",
                  title: "File your Form 5472 + 1120 as normal",
                  desc: "Your Form 5472 filing obligation is separate and independent. Continue to file Form 5472 (attached to a pro-forma Form 1120) for your disregarded LLC as you normally would. The 1042-S does not change this requirement.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {item.step.replace("Step ", "")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: Coming Soon CTA */}
          <section id="coming-soon" className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Coming Soon: 1040-NR Filing for 1042-S Recipients
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Need to file Form 1040-NR to claim a refund on over-withheld tax? We are building
              guided tools to help foreign persons file their 1040-NR correctly, claim treaty
              benefits, and get their refund. Join the waitlist to be notified when it launches.
            </p>
            <div className="bg-white rounded-xl border border-amber-200 p-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <button
                  type="button"
                  className="px-6 py-2.5 bg-amber-600 text-white text-sm font-semibold rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                No spam. We will only email you when the 1040-NR filing tool is ready.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Related Guides
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
                { text: "Learn about common Form 5472 mistakes", href: "/guides/form-5472-common-mistakes" },
                { text: "DIY filing vs hiring a CPA", href: "/guides/diy-vs-cpa" },
                { text: "ECI assessment for foreign LLC owners", href: "/eci" },
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
