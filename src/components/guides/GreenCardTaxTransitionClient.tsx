"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Shared icons                                                       */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-400 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function GreenCardTaxTransitionClient() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides/start-your-business" className="hover:text-blue-600">
              Guides
            </Link>
            <span>/</span>
            <span className="text-gray-600">Green Card Tax Transition</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Tax Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Green Card Tax Transition Guide for Foreign LLC Owners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Getting a green card fundamentally changes your tax obligations.
              Here&apos;s what every foreign LLC owner needs to know about the
              transition from nonresident to US tax resident.
            </p>
          </div>

          {/* CPA disclaimer banner */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 mb-10">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.999L13.732 4.001c-.77-1.333-2.694-1.333-3.464 0L3.34 16.001C2.57 17.334 3.532 19 5.072 19z"
                />
              </svg>
              <div>
                <h2 className="text-sm font-bold text-amber-800 mb-1">
                  Tax Disclaimer
                </h2>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Consult a CPA for your specific tax transition. The green
                  card tax transition involves complex reporting requirements
                  that vary based on your individual circumstances, income
                  sources, and timing. This guide provides general information
                  only.
                </p>
              </div>
            </div>
          </div>

          {/* Key summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
              The Big Picture
            </h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              Before your green card, you are a nonresident alien -- only
              US-source income is taxed, and you file Form 5472. After your
              green card, you are a US person -- your worldwide income is
              taxed, and you file Form 1040. This is one of the most
              significant tax transitions a foreign LLC owner can face.
            </p>
            <div className="flex items-center gap-3 text-sm text-blue-800 font-medium">
              <span className="bg-white border border-blue-200 rounded-lg px-3 py-1.5">
                Form 5472 + 1120
              </span>
              <ArrowIcon />
              <span className="bg-white border border-blue-200 rounded-lg px-3 py-1.5">
                Form 1040 + Schedule C
              </span>
            </div>
          </div>

          {/* Before vs After comparison */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Before vs. After Green Card
            </h2>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Category
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 bg-gray-50">
                      Before Green Card
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 bg-blue-50">
                      After Green Card
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: "Tax Status",
                      before: "Nonresident alien",
                      after: "US person (resident alien)",
                    },
                    {
                      category: "Income Taxed",
                      before: "US-source income only",
                      after: "Worldwide income",
                    },
                    {
                      category: "LLC Classification",
                      before: "Foreign-owned disregarded entity",
                      after: "Domestic disregarded entity",
                    },
                    {
                      category: "Primary Tax Form",
                      before: "Form 5472 + pro forma 1120",
                      after: "Form 1040 (Schedule C)",
                    },
                    {
                      category: "Self-Employment Tax",
                      before: "Does not apply",
                      after: "15.3% on net earnings",
                    },
                    {
                      category: "Estimated Payments",
                      before: "Generally not required",
                      after: "Quarterly payments required",
                    },
                    {
                      category: "Foreign Account Reporting",
                      before: "Not required",
                      after: "FBAR + FATCA may apply",
                    },
                    {
                      category: "Tax Treaties",
                      before: "May reduce US withholding",
                      after: "Limited applicability",
                    },
                  ].map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-gray-100"
                    >
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {row.category}
                      </td>
                      <td className="py-3 px-4 text-gray-600 bg-gray-50">
                        {row.before}
                      </td>
                      <td className="py-3 px-4 text-gray-600 bg-blue-50">
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {[
                {
                  category: "Tax Status",
                  before: "Nonresident alien",
                  after: "US person (resident alien)",
                },
                {
                  category: "Income Taxed",
                  before: "US-source income only",
                  after: "Worldwide income",
                },
                {
                  category: "LLC Classification",
                  before: "Foreign-owned disregarded entity",
                  after: "Domestic disregarded entity",
                },
                {
                  category: "Primary Tax Form",
                  before: "Form 5472 + pro forma 1120",
                  after: "Form 1040 (Schedule C)",
                },
                {
                  category: "Self-Employment Tax",
                  before: "Does not apply",
                  after: "15.3% on net earnings",
                },
                {
                  category: "Estimated Payments",
                  before: "Generally not required",
                  after: "Quarterly payments required",
                },
                {
                  category: "Foreign Account Reporting",
                  before: "Not required",
                  after: "FBAR + FATCA may apply",
                },
              ].map((row) => (
                <div
                  key={row.category}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {row.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <span className="block text-gray-400 mb-0.5">Before</span>
                      <span className="text-gray-700">{row.before}</span>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2">
                      <span className="block text-blue-400 mb-0.5">After</span>
                      <span className="text-blue-700">{row.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed: What changes */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              What Changes in Detail
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Worldwide Income Taxation
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  As a nonresident, only your US-source income was subject to
                  US tax. After getting your green card, all income you earn
                  anywhere in the world is subject to US taxation. This
                  includes income from businesses, investments, rental
                  properties, and bank accounts in your home country. You may
                  be able to claim a Foreign Tax Credit for taxes paid to
                  other countries, but the filing requirements are
                  significantly more complex.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  LLC Becomes a Domestic Disregarded Entity
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your single-member LLC changes classification from a
                  foreign-owned disregarded entity to a domestic disregarded
                  entity. This means LLC income and expenses are reported on
                  Schedule C of your personal Form 1040, rather than on Form
                  5472 with a pro forma 1120. The LLC itself still does not
                  pay taxes -- it passes through to you -- but the reporting
                  mechanism is entirely different.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Self-Employment Tax
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  As a nonresident, self-employment tax (Social Security and
                  Medicare) generally did not apply to your LLC income. After
                  your green card, if your LLC earns more than $400 in net
                  profit, you owe self-employment tax at 15.3% (12.4% Social
                  Security + 2.9% Medicare) on net earnings.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-sm text-red-800">
                    <strong>Example:</strong> If your LLC earns $100,000 in
                    net profit, self-employment tax alone would be
                    approximately $14,130 -- in addition to regular income
                    tax. This is often the biggest surprise for new green
                    card holders.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Quarterly Estimated Payments
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  As a US tax resident with self-employment income, you must
                  make quarterly estimated tax payments to the IRS (and
                  possibly your state). These are due on April 15, June 15,
                  September 15, and January 15 of the following year. Failing
                  to make estimated payments can result in underpayment
                  penalties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  FBAR and FATCA
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  As a US person, you may be required to report your foreign
                  financial accounts:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      FBAR (FinCEN Form 114)
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Required if the aggregate value of your foreign
                      financial accounts exceeds $10,000 at any time during
                      the year. Filed electronically with FinCEN, not the
                      IRS. Due April 15 with automatic extension to October
                      15.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      FATCA (Form 8938)
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Required if your specified foreign financial assets
                      exceed $50,000 on the last day of the year or $75,000
                      at any point during the year (higher thresholds for
                      joint filers and those living abroad). Filed with your
                      Form 1040.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key transition steps */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Key Transition Steps
            </h2>

            <ol className="space-y-6">
              {[
                {
                  step: 1,
                  title: "File Final Form 5472 for the Partial Year",
                  desc: "For the year you receive your green card, you may need to file a final Form 5472 covering the portion of the year before you became a US person. This is your last Form 5472 filing for this LLC.",
                  link: {
                    href: "/filer",
                    text: "File your final Form 5472",
                  },
                },
                {
                  step: 2,
                  title: "Start Filing Form 1040",
                  desc: "Beginning with your green card year, you file Form 1040 as a US resident. Your LLC income goes on Schedule C (Profit or Loss From Business). If this is mid-year, your first 1040 may cover a partial year as a resident.",
                },
                {
                  step: 3,
                  title: "Report Worldwide Income",
                  desc: "All income from all sources worldwide must be reported on your Form 1040. This includes foreign business income, rental income, interest, dividends, and capital gains from your home country.",
                },
                {
                  step: 4,
                  title: "Set Up Quarterly Estimated Tax Payments",
                  desc: "Calculate your expected tax liability (income tax + self-employment tax) and begin making quarterly payments using Form 1040-ES. The IRS expects you to pay as you earn throughout the year.",
                },
                {
                  step: 5,
                  title: "File FBAR and FATCA if Required",
                  desc: "Determine if your foreign financial accounts trigger FBAR ($10,000 threshold) or FATCA ($50,000 threshold) reporting. Set up a system to track your foreign account balances throughout the year.",
                },
                {
                  step: 6,
                  title: "Update LLC Registration if Needed",
                  desc: "Depending on your state, you may need to update your LLC's registered agent, business address, or member information to reflect your new US address and status.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        {item.link.text}
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Common mistakes */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Common Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Not Filing the Transition Year Correctly",
                  desc: "The year you receive your green card requires careful handling. You may need to file both a final Form 5472 (for the nonresident portion) and a Form 1040 (for the resident portion, or dual-status return). Many people miss one or the other.",
                },
                {
                  title: "Missing FBAR Requirements",
                  desc: "FBAR penalties are severe -- up to $10,000 per account per year for non-willful violations, and up to the greater of $100,000 or 50% of account balances for willful violations. Many new green card holders are unaware of this requirement for their home country bank accounts.",
                },
                {
                  title: "Not Realizing Self-Employment Tax Applies",
                  desc: "The 15.3% self-employment tax is often the biggest surprise. Unlike income tax (which may be partially offset by foreign tax credits), self-employment tax is owed regardless of taxes paid to other countries.",
                },
                {
                  title: "Forgetting Quarterly Estimated Payments",
                  desc: "If you don't make estimated payments and owe more than $1,000 at tax time, you'll face underpayment penalties. Start making quarterly payments as soon as you receive your green card.",
                },
                {
                  title: "Not Reporting Foreign Income",
                  desc: "Some new green card holders continue to think only US income is taxable. All worldwide income must be reported -- including income from businesses, properties, and investments in your home country.",
                },
                {
                  title: "Continuing to File Form 5472",
                  desc: "Once you're a US person, your single-member LLC is no longer a foreign-owned entity. Continuing to file Form 5472 instead of transitioning to Form 1040 with Schedule C is incorrect and can trigger IRS scrutiny.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-red-50 border border-red-100 rounded-xl p-4"
                >
                  <h3 className="text-sm font-semibold text-red-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-red-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA: File final 5472 */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 mb-6 text-white">
            <h2 className="text-xl font-bold mb-2">
              File Your Final Form 5472 Before the Transition
            </h2>
            <p className="text-sm text-blue-100 mb-5 max-w-2xl">
              If you are about to receive your green card or recently received
              it, make sure your final Form 5472 is filed for the nonresident
              portion of the year. Missing this filing carries a $25,000
              penalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/filer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm shadow-lg"
              >
                File Form 5472 -- $49
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/services/eci-filing"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                ECI Filing Service
              </Link>
            </div>
          </section>

          {/* Related resources */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "File Form 5472",
                  desc: "File your annual (or final) Form 5472 for your foreign-owned LLC.",
                  href: "/filer",
                },
                {
                  title: "ECI Filing Service",
                  desc: "If you have Effectively Connected Income, we handle the complex filing.",
                  href: "/services/eci-filing",
                },
                {
                  title: "E-2 Treaty Investor Visa Guide",
                  desc: "Considering the E-2 visa before your green card? Understand the tax implications.",
                  href: "/guides/e2-visa",
                },
                {
                  title: "Start Your Foreign-Owned LLC",
                  desc: "The complete guide from formation to filing -- for those still in the nonresident phase.",
                  href: "/guides/start-your-business",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-blue-600 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
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
