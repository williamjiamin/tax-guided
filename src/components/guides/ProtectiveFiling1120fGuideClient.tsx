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

function WarningIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-600 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
}

export function ProtectiveFiling1120fGuideClient() {
  const TOC = [
    { id: "what-is-protective-filing", label: "What Is Protective Filing?" },
    { id: "deduction-trap", label: "Why It Matters -- The Deduction Trap" },
    { id: "who-should-consider", label: "Who Should Consider This" },
    { id: "who-doesnt-need", label: "Who Probably Doesn't Need It" },
    { id: "how-it-works", label: "How Protective Filing Works" },
    { id: "timing", label: "Timing Is Critical" },
    { id: "not-diy", label: "This Is Not a DIY Task" },
    { id: "key-takeaways", label: "Key Takeaways" },
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
            <span className="text-gray-600">Protective Filing 1120-F</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Advanced Strategy
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Protective Filing of Form 1120-F for Foreign-Owned LLCs
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Filing a US corporate tax return &quot;on a protective basis&quot; can save you
              hundreds of thousands of dollars in taxes if the IRS ever determines your LLC
              was engaged in a US trade or business.
            </p>
          </div>

          {/* Key Takeaways (top summary) */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Protective filing preserves your right to claim tax deductions if the IRS later
                determines you had US trade or business
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Without it, the IRS can tax your gross income with zero deductions -- a
                potentially catastrophic outcome
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                The protective return must be filed within 18 months of the original due date
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                This is an advanced cross-border tax strategy that requires professional help --
                do not attempt this on your own
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

          {/* Section 1: What Is Protective Filing? */}
          <section id="what-is-protective-filing" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is Protective Filing?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Filing Form 1120-F &quot;on a protective basis&quot; means submitting a US
              corporate income tax return to the IRS even when you believe your foreign-owned
              LLC does <strong>not</strong> have a US trade or business (USTB). It is,
              essentially, insurance.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The logic is straightforward: you file the return claiming zero taxable income
              because you believe no USTB exists. But if the IRS later audits you and
              determines that USTB <em>did</em> exist, the fact that you filed a timely return
              preserves your right to claim deductions against that income.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Think of it as filing a placeholder return that says: &quot;I do not believe I owe
              US tax, but if you disagree, here is my return so I can still deduct my
              expenses.&quot;
            </p>
          </section>

          {/* Section 2: The Deduction Trap */}
          <section id="deduction-trap" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why It Matters -- The Deduction Trap
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Under IRC Section 882(c)(2), a foreign corporation (or an LLC treated as one)
              that fails to file a timely tax return can be <strong>denied all deductions and
              credits</strong> if the IRS later determines that US trade or business existed.
              This means the IRS taxes your <em>gross</em> income, not your net profit.
            </p>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3 mb-3">
                <WarningIcon />
                <h3 className="text-sm font-bold text-amber-900">
                  The financial impact can be devastating
                </h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Scenario: With Protective Filing
                  </h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Gross Revenue</span>
                      <span className="font-medium">$500,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business Expenses</span>
                      <span className="font-medium text-green-700">($400,000)</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-1">
                      <span>Taxable Income</span>
                      <span className="font-medium">$100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax at 21% Corporate Rate</span>
                      <span className="font-bold text-green-700">$21,000</span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50/80 rounded-lg p-4 border border-red-200">
                  <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
                    Scenario: Without Protective Filing
                  </h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Gross Revenue</span>
                      <span className="font-medium">$500,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business Expenses</span>
                      <span className="font-medium text-red-600 line-through">($400,000) -- DISALLOWED</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-1">
                      <span>Taxable Income</span>
                      <span className="font-medium">$500,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax at 21% Corporate Rate</span>
                      <span className="font-bold text-red-700">$105,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-amber-800 mt-4 font-medium">
                That is $84,000 in additional tax -- simply because no protective return was
                filed. The deductions existed. The expenses were real. But the IRS disallows
                them entirely under Section 882(c)(2).
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              The larger your revenue and expenses, the more painful this becomes. For a
              business with $2 million in revenue and $1.8 million in expenses, failing to
              file protectively could mean paying $420,000 in tax instead of $42,000.
            </p>
          </section>

          {/* Section 3: Who Should Consider This */}
          <section id="who-should-consider" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Who Should Consider Protective Filing
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Protective filing is most relevant for foreign-owned LLCs and foreign
              corporations that have some connection to the United States but are not certain
              whether that connection rises to the level of &quot;US trade or business.&quot;
              If any of the following apply to you, protective filing may be worth discussing
              with a tax professional:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "US customers (even if served remotely)",
                  desc: "If a significant portion of your revenue comes from US-based clients, the IRS could argue that you are conducting business within the United States, even if all work is performed abroad.",
                },
                {
                  title: "US contractors or part-time workers",
                  desc: "Hiring US-based independent contractors or employees, even on a limited basis, can create arguments for US trade or business presence.",
                },
                {
                  title: "Occasional business travel to the US",
                  desc: "Traveling to the US to attend meetings, conferences, or negotiate deals with clients can establish physical presence that supports a USTB determination.",
                },
                {
                  title: "US bank accounts used for business operations",
                  desc: "While simply holding a US bank account is not enough by itself, using it actively for business operations adds to the overall nexus picture.",
                },
                {
                  title: "Any gray-area US nexus",
                  desc: "If you have read about US trade or business rules and cannot confidently say you are completely outside them, that uncertainty itself is a reason to consider protective filing.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Who Doesn't Need It */}
          <section id="who-doesnt-need" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Who Probably Does Not Need Protective Filing
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              If your LLC has absolutely zero connection to the United States, protective
              filing is likely unnecessary. Specifically, if <strong>all</strong> of the
              following are true:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 ml-2">
              {[
                "You have no US customers whatsoever",
                "You do not have a US bank account (or use one only passively to receive payments)",
                "You have no US employees or independent contractors",
                "You do not travel to the US for any business purpose",
                "All work is performed entirely from outside the United States",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-700">
                In this case, a standard Form 5472 + pro-forma Form 1120 filing is almost
                certainly sufficient. The IRS has no basis to argue that USTB existed when
                there is genuinely no US activity. You can file these forms yourself using
                our <Link href="/filer" className="text-amber-600 hover:text-amber-800 underline">guided filer</Link>.
              </p>
            </div>
          </section>

          {/* Section 5: How It Works */}
          <section id="how-it-works" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How Protective Filing Works
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The mechanics of a protective filing are relatively straightforward, though the
              legal nuances require professional guidance. Here is what is involved at a high
              level:
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "File Form 1120-F with the IRS",
                  desc: "This is the US income tax return for foreign corporations. Even if your LLC is a disregarded entity, you file Form 1120-F on behalf of the foreign owner on a protective basis.",
                },
                {
                  step: "2",
                  title: "Report zero taxable income",
                  desc: "Because you believe no US trade or business exists, you report zero effectively connected income. The return itself is filed as a protective measure, not as an admission of tax liability.",
                },
                {
                  step: "3",
                  title: "Attach a protective filing statement",
                  desc: "A written statement is attached to the return explaining that it is filed on a protective basis. This statement explains why you believe no USTB exists but that you are filing to preserve deduction rights under IRC Section 882(c)(2).",
                },
                {
                  step: "4",
                  title: "Include any required Form 5472",
                  desc: "If your LLC has reportable transactions with its foreign owner or other related parties, Form 5472 should be included with the 1120-F filing, just as it would be with a standard pro-forma 1120.",
                },
                {
                  step: "5",
                  title: "Preserve the right to claim deductions",
                  desc: "By filing on time, you ensure that if the IRS later challenges your position and determines that USTB did exist, you can amend the return to claim all allowable deductions against that income.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Timing */}
          <section id="timing" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Timing Is Critical
            </h2>
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <WarningIcon />
                <div>
                  <h3 className="text-sm font-bold text-amber-900 mb-1">
                    18-month filing deadline
                  </h3>
                  <p className="text-sm text-amber-800">
                    The protective return must be filed within <strong>18 months</strong> of the
                    original due date of the return to preserve deduction rights. For a
                    calendar-year entity with an April 15 due date, that means the protective
                    1120-F must be filed by October 15 of the following year at the latest.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Missing this 18-month window permanently eliminates the protection. There is no
              extension, no reasonable cause exception, and no way to retroactively file once
              the deadline has passed. The IRS is strict about this rule.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              This is why awareness of protective filing is so important. By the time you
              realize you needed it -- typically when the IRS sends a notice asserting USTB --
              it is often too late. The 18-month window has already closed, and your
              deductions are permanently lost.
            </p>
          </section>

          {/* Section 7: Not DIY */}
          <section id="not-diy" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              This Is Not a DIY Task
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              We are strong advocates of DIY filing for straightforward Form 5472 + pro-forma
              1120 situations. But protective filing of Form 1120-F is different. It involves
              complex cross-border tax law, nuanced legal positions, and a written statement
              that must be carefully drafted to protect your interests.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-bold text-red-800 mb-2">
                Why you need a professional for this
              </h3>
              <ul className="space-y-2 text-sm text-red-800">
                {[
                  "The protective statement must correctly articulate your legal position -- a poorly worded statement can actually hurt your case",
                  "Form 1120-F has different filing requirements than the pro-forma 1120 used with Form 5472",
                  "The analysis of whether USTB exists involves facts-and-circumstances tests that require legal judgment",
                  "Getting it wrong could mean the protective filing is treated as invalid, defeating the entire purpose",
                  "A tax attorney can also advise whether treaty benefits might apply to your situation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you believe your LLC might need protective filing, consult a tax attorney
              or CPA who specializes in international tax. This is the kind of situation
              where the DIY approach can backfire badly. The cost of professional help
              ($1,000-3,000 typically) is a small fraction of what you could lose if
              deductions are disallowed.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <strong>This guide is for awareness only.</strong> It is intended to help you
                understand what protective filing is and why it matters so you can have an
                informed conversation with a qualified tax professional. It is not a
                substitute for professional tax advice.
              </p>
            </div>
          </section>

          {/* Section 8: Key Takeaways */}
          <section id="key-takeaways" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Key Takeaways
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <ul className="space-y-3 text-sm text-amber-900">
                {[
                  "Protective filing means filing Form 1120-F even when you believe no US trade or business exists -- it is insurance against the IRS disagreeing with you later.",
                  "Without a timely filed return, the IRS can disallow ALL deductions under IRC Section 882(c)(2), forcing you to pay tax on gross revenue instead of net profit.",
                  "The protective return must be filed within 18 months of the original due date. Miss this deadline and you permanently lose the protection.",
                  "Foreign-owned LLCs with US customers, US contractors, US travel, or any gray-area US nexus should seriously consider protective filing.",
                  "If your LLC has zero US connections, a standard Form 5472 + pro-forma 1120 filing is almost certainly sufficient.",
                  "Protective filing requires professional help -- consult a tax attorney or international tax CPA. Do not attempt this on your own.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "File your standard Form 5472 + pro-forma 1120 ($49)", href: "/filer" },
                { text: "Learn about DIY filing vs hiring a CPA", href: "/guides/diy-vs-cpa" },
                { text: "Read common Form 5472 mistakes to avoid", href: "/guides/form-5472-common-mistakes" },
                { text: "Understand what foreign-owned LLCs must file", href: "/guides/start-your-business" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {item.text}
                </Link>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-gray-100 rounded-2xl p-6 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> This guide is for informational purposes only and
              does not constitute tax, legal, or financial advice. Protective filing of Form
              1120-F involves complex international tax law. Consult a qualified tax attorney
              or CPA who specializes in international taxation before making any filing
              decisions. ForeignLLCTax.com is not a law firm or accounting firm.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
