"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function WarningIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

export function UstbRiskGuideClient() {
  const TOC = [
    { id: "what-is-ustb", label: "What Is US Trade or Business?" },
    { id: "when-5472-not-enough", label: "When Form 5472 Alone Is Not Enough" },
    { id: "deduction-disallowance", label: "The Deduction Disallowance Nightmare" },
    { id: "branch-profits-tax", label: "Branch Profits Tax (BPT)" },
    { id: "ustb-triggers", label: "USTB Triggers to Watch For" },
    { id: "clean-scenario", label: 'What a "Clean" Scenario Looks Like' },
    { id: "protective-filing", label: "Protective Filing Strategy (Form 1120-F)" },
    { id: "fdap-income", label: "FDAP Income Risk" },
    { id: "what-you-should-do", label: "What You Should Do" },
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
            <span className="text-gray-600">USTB Risk</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Risk Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              US Trade or Business (USTB) Risk for Foreign LLC Owners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              When filing Form 5472 alone is not enough. Understand the hidden tax risks
              that could turn your US LLC into a six-figure liability.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-5 mb-8">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> This guide is for educational purposes only and does not
              constitute legal, tax, or financial advice. Tax law is complex and highly
              fact-specific. Every situation is different. You should consult with a qualified
              cross-border tax attorney or CPA before making decisions about your tax filing
              obligations. The information below reflects general principles and should not be
              relied upon as a substitute for professional advice tailored to your circumstances.
            </p>
          </div>

          {/* Key Warnings */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-red-800 uppercase tracking-wide mb-3">
              Critical Warnings
            </h2>
            <ul className="space-y-2 text-sm text-red-900">
              <li className="flex items-start gap-2">
                <WarningIcon />
                If your LLC has US trade or business activity, Form 5472 alone does NOT satisfy your filing obligations
              </li>
              <li className="flex items-start gap-2">
                <WarningIcon />
                The IRS can disallow ALL deductions if you fail to file the correct returns on time
              </li>
              <li className="flex items-start gap-2">
                <WarningIcon />
                Foreign corporations face both corporate tax AND branch profits tax on USTB income
              </li>
              <li className="flex items-start gap-2">
                <WarningIcon />
                The $25,000 penalty for missing Form 5472 still applies even when additional filings are required
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
                  <a href={`#${item.id}`} className="text-sm text-amber-700 hover:text-amber-900 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1: What Is USTB? */}
          <section id="what-is-ustb" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. What Is US Trade or Business?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Here is the uncomfortable truth: the Internal Revenue Code does not clearly define
              what constitutes a &quot;US trade or business.&quot; There is no single checklist in the tax
              code that says &quot;if you do X, Y, and Z, you have USTB.&quot; Instead, this determination
              comes from decades of case law, IRS regulations, revenue rulings, and tax treaties.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              In general terms, a foreign person is engaged in a US trade or business when they
              conduct regular, continuous, and considerable business activities within the United
              States. This is a facts-and-circumstances test, which means the IRS and courts look
              at the totality of what your business does, where it does it, and who does it.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Key principles from case law and regulations include:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>The activity must be &quot;considerable, continuous, and regular&quot; (not just isolated transactions)</li>
              <li>A single transaction can constitute USTB if it is substantial enough</li>
              <li>Having a dependent agent in the US who regularly exercises authority to conclude contracts can create USTB</li>
              <li>The location where the profit-generating activities occur matters more than where the contract is signed</li>
              <li>Services performed in the US, even temporarily, can trigger USTB under certain circumstances</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Why this matters for LLC owners:</strong> Many foreign entrepreneurs form a
                US LLC for its liability protection, banking access, or credibility with US clients.
                They may assume they only need to file Form 5472 (the informational return for
                foreign-owned disregarded entities). But if the LLC&apos;s activities cross the line into
                US trade or business, significantly more complex and expensive filing obligations arise.
              </p>
            </div>
          </section>

          {/* Section 2: When Form 5472 Alone Is Not Enough */}
          <section id="when-5472-not-enough" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. When Form 5472 Alone Is NOT Enough
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Every foreign-owned single-member LLC must file Form 5472 attached to a pro-forma
              Form 1120. This is true regardless of whether the LLC has USTB or not. The $25,000
              penalty for failing to file Form 5472 applies in all cases.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              However, if your LLC is engaged in US trade or business and earns effectively
              connected income (ECI), the foreign owner has additional tax return obligations
              depending on whether the owner is an individual or a corporation:
            </p>

            <div className="space-y-4">
              {/* Individual Owner */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-red-900 mb-2">
                  If the Foreign Owner Is an Individual
                </h3>
                <p className="text-sm text-red-800 leading-relaxed mb-3">
                  A foreign individual with effectively connected income must file:
                </p>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span><strong>Form 1040-NR</strong> (US Nonresident Alien Income Tax Return)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span><strong>Schedule C</strong> (Profit or Loss from Business) attached to the 1040-NR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span><strong>ITIN</strong> (Individual Taxpayer Identification Number) — required to file 1040-NR if you do not have a Social Security Number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span><strong>Form 5472</strong> still required in addition to all of the above</span>
                  </li>
                </ul>
                <p className="text-sm text-red-800 leading-relaxed mt-3">
                  The effectively connected income is taxed at graduated rates up to 37% for
                  individuals (2024 rates), but the individual can claim deductions for expenses
                  properly allocable to that income — if they file on time.
                </p>
              </div>

              {/* Corporate Owner */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-red-900 mb-2">
                  If the Foreign Owner Is a Corporation
                </h3>
                <p className="text-sm text-red-800 leading-relaxed mb-3">
                  A foreign corporation with effectively connected income must file:
                </p>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span><strong>Form 1120-F</strong> (US Income Tax Return of a Foreign Corporation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span><strong>Separate EIN</strong> for the foreign corporation itself (different from the LLC&apos;s EIN)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span><strong>Form 5472</strong> still required in addition to Form 1120-F</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span><strong>Branch Profits Tax</strong> may apply on top of the regular corporate tax (see Section 4 below)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>The key point:</strong> Form 5472 is an informational return. It reports
                transactions between the LLC and its foreign owner. It does not, by itself, report
                or pay any tax on income. If there is USTB with ECI, a separate income tax return
                (1040-NR or 1120-F) is required to report that income and pay the tax owed.
              </p>
            </div>
          </section>

          {/* Section 3: Deduction Disallowance */}
          <section id="deduction-disallowance" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. The Deduction Disallowance Nightmare
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              This is the single most devastating consequence of failing to properly file when
              you have USTB. Under IRC Section 882(c)(2) for corporations and Section 874(a) for
              individuals, if you do not file a true and accurate return on a timely basis, the
              IRS can disallow all deductions and credits allocable to your effectively
              connected income.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              What does this mean in practice? It means the IRS taxes your gross revenue, not
              your net profit. No deductions for expenses, salaries, rent, software, travel,
              professional fees, or anything else. Here is how the math works:
            </p>

            <div className="space-y-4 mb-4">
              {/* Individual Example */}
              <div className="bg-red-50 border border-red-300 rounded-xl p-5">
                <h3 className="text-sm font-bold text-red-900 mb-3">
                  Example: Foreign Individual Owner
                </h3>
                <div className="space-y-2 text-sm text-red-800">
                  <div className="flex justify-between items-center py-1 border-b border-red-200">
                    <span>LLC gross revenue</span>
                    <span className="font-mono font-semibold">$1,000,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-red-200">
                    <span>Actual business expenses</span>
                    <span className="font-mono font-semibold">$700,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-red-200">
                    <span>Actual net profit</span>
                    <span className="font-mono font-semibold">$300,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-red-200">
                    <span>Tax if filed properly (37% on $300K)</span>
                    <span className="font-mono font-semibold text-amber-700">~$111,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 bg-red-100 rounded px-2">
                    <span className="font-bold">Tax with deductions disallowed (37% on $1M)</span>
                    <span className="font-mono font-bold text-red-700">$370,000</span>
                  </div>
                </div>
                <p className="text-xs text-red-700 mt-3">
                  That is $259,000 in additional tax — more than triple — simply because the
                  return was not filed on time. This does not include penalties and interest.
                </p>
              </div>

              {/* Corporate Example */}
              <div className="bg-red-50 border border-red-300 rounded-xl p-5">
                <h3 className="text-sm font-bold text-red-900 mb-3">
                  Example: Foreign Corporate Owner
                </h3>
                <div className="space-y-2 text-sm text-red-800">
                  <div className="flex justify-between items-center py-1 border-b border-red-200">
                    <span>LLC gross revenue</span>
                    <span className="font-mono font-semibold">$1,000,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-red-200">
                    <span>Actual business expenses</span>
                    <span className="font-mono font-semibold">$700,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-red-200">
                    <span>Tax if filed properly (21% on $300K net)</span>
                    <span className="font-mono font-semibold text-amber-700">$63,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-red-200">
                    <span>Tax with deductions disallowed (21% on $1M gross)</span>
                    <span className="font-mono font-semibold text-red-700">$210,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 bg-red-100 rounded px-2">
                    <span className="font-bold">Plus Branch Profits Tax (30% on deemed repatriation)</span>
                    <span className="font-mono font-bold text-red-700">+ up to $300,000</span>
                  </div>
                </div>
                <p className="text-xs text-red-700 mt-3">
                  For a corporate owner, the combined hit of deduction disallowance plus branch
                  profits tax can exceed 50% of gross revenue. This is not a theoretical risk — it
                  is the statutory consequence of non-filing.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Can you get deductions back?</strong> In limited circumstances, the IRS may
                allow deductions even on a late-filed return if the taxpayer can demonstrate
                reasonable cause for the delay. However, this is not guaranteed and typically
                requires professional representation. The safest approach is always to file on time
                or to file on a protective basis (see Section 7).
              </p>
            </div>
          </section>

          {/* Section 4: Branch Profits Tax */}
          <section id="branch-profits-tax" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Branch Profits Tax (BPT)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Branch profits tax is an additional tax that applies specifically to foreign
              corporations (not individuals) that earn effectively connected income through
              a US branch or, in this context, a US LLC.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The logic behind BPT is this: when a US subsidiary of a foreign corporation earns
              profits and distributes them as dividends, those dividends are subject to
              withholding tax (typically 30%, reduced by treaty). Without BPT, a foreign
              corporation could avoid this withholding by operating through a branch (or
              disregarded LLC) instead of a subsidiary. BPT closes that loophole.
            </p>

            <div className="bg-red-50 border border-red-300 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-bold text-red-900 mb-3">
                The Double Tax Hit for Foreign Corporations
              </h3>
              <div className="space-y-2 text-sm text-red-800">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-700 w-6 flex-shrink-0">1.</span>
                  <span><strong>Regular corporate tax at 21%</strong> on effectively connected taxable income (after deductions, if allowed)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-red-700 w-6 flex-shrink-0">2.</span>
                  <span><strong>Branch profits tax at 30%</strong> (or lower treaty rate) on the &quot;dividend equivalent amount&quot; — essentially the after-tax earnings deemed to be repatriated to the foreign parent</span>
                </div>
              </div>
              <p className="text-sm text-red-800 mt-3">
                The combined effective rate can reach approximately 44.7% (21% + 30% of the
                remaining 79%) before any treaty reductions. If deductions are also disallowed,
                this applies to gross revenue rather than net profit.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Treaty relief:</strong> Many US tax treaties reduce or eliminate the branch
                profits tax rate. For example, the US-UK treaty reduces BPT to 5%, and several
                treaties eliminate it entirely. If the foreign corporate owner is resident in a
                treaty country, the BPT rate may be significantly lower than 30%. However,
                claiming treaty benefits requires proper disclosure on the tax return.
              </p>
            </div>
          </section>

          {/* Section 5: USTB Triggers */}
          <section id="ustb-triggers" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. USTB Triggers to Watch For
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              While no single factor automatically creates USTB, the following indicators raise
              the risk. The more of these factors present in your business, the more likely the
              IRS would argue that your LLC is engaged in US trade or business:
            </p>

            <div className="space-y-3 mb-4">
              {[
                {
                  title: "US-Based Employees",
                  desc: "Having employees physically located in the United States who perform services on behalf of the LLC is one of the strongest indicators of USTB. Even a single full-time US employee can be sufficient.",
                  risk: "high",
                },
                {
                  title: "US-Based Contractors Performing Core Functions",
                  desc: "Independent contractors in the US who regularly perform core business functions (not just occasional tasks) can look like employees to the IRS. If they work exclusively or primarily for your LLC, the risk increases substantially.",
                  risk: "high",
                },
                {
                  title: "Physical Presence in the US for Business",
                  desc: "Traveling to the US to meet clients, attend business conferences, negotiate deals, or perform services creates nexus. Extended or frequent business trips are particularly risky.",
                  risk: "medium",
                },
                {
                  title: "US-Based Customers",
                  desc: "Having US customers alone does not automatically create USTB, but it is a factor the IRS considers. If the services are performed entirely outside the US for US customers, the risk is lower. If any work is performed in the US, the risk rises.",
                  risk: "medium",
                },
                {
                  title: "US Bank Accounts",
                  desc: "Having a US bank account is commonly cited as a potential factor. On its own, a US bank account is unlikely to create USTB, but combined with other factors, it strengthens the IRS argument that substantial business activity occurs in the US.",
                  risk: "low",
                },
                {
                  title: "US Office Space or Mailing Address",
                  desc: "Maintaining a physical office, co-working space, or even a virtual office with a US address used for business operations (not just registered agent purposes) adds weight to a USTB determination.",
                  risk: "medium",
                },
                {
                  title: "Inventory or Goods Stored in the US",
                  desc: "If your LLC stores inventory in the US (including Amazon FBA warehouses), this is a strong indicator of US business activity. E-commerce businesses using US fulfillment centers should pay close attention.",
                  risk: "high",
                },
                {
                  title: "Decision-Making Authority in the US",
                  desc: "If key business decisions — pricing, hiring, strategy, contract approvals — are made by someone in the US (even if that person is the foreign owner visiting temporarily), this weighs toward USTB.",
                  risk: "medium",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl p-4 border ${
                    item.risk === "high"
                      ? "bg-red-50 border-red-200"
                      : item.risk === "medium"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-yellow-50 border-yellow-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.risk === "high"
                          ? "bg-red-200 text-red-800"
                          : item.risk === "medium"
                          ? "bg-amber-200 text-amber-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {item.risk} risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> These factors are not applied mechanically. The IRS
                looks at the overall picture. A foreign owner with two or three &quot;low risk&quot; factors
                may have no USTB, while a foreign owner with a single &quot;high risk&quot; factor may
                clearly have USTB. Context and degree matter enormously.
              </p>
            </div>
          </section>

          {/* Section 6: Clean Scenario */}
          <section id="clean-scenario" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. What a &quot;Clean&quot; Scenario Looks Like
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              To understand what clearly does NOT constitute USTB, consider this example:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-bold text-green-900 mb-3">
                Example: No USTB Risk
              </h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Owner is a French citizen who lives and works in Paris full-time
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  All services are performed from the owner&apos;s home office in France
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  The LLC&apos;s bank account is with a UK bank
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  All clients are located in Europe — no US customers
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  No US employees or contractors
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Owner has never traveled to the US for business purposes
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  The US LLC is used solely for liability protection and European client invoicing
                </li>
              </ul>
              <p className="text-sm text-green-800 mt-3">
                In this scenario, there is no US trade or business. The owner&apos;s only US filing
                obligation is Form 5472 (attached to a pro-forma Form 1120) reporting transactions
                between the LLC and its foreign owner.
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Now consider how this changes with minor modifications:
            </p>

            <div className="space-y-3">
              {[
                {
                  change: "Owner hires a US-based virtual assistant who works 20 hours/week",
                  impact: "Moderate USTB risk — the VA could be seen as a US employee performing regular business functions.",
                },
                {
                  change: "Owner starts serving US clients who account for 40% of revenue",
                  impact: "Elevated USTB risk if any work is performed in the US; lower risk if all work is still done from France.",
                },
                {
                  change: "Owner travels to the US quarterly to attend client meetings",
                  impact: "Significant USTB risk — regular business travel to the US to perform services or meet clients.",
                },
                {
                  change: "Owner opens a US bank account and starts using Amazon FBA for product fulfillment",
                  impact: "High USTB risk — physical inventory in US warehouses is a strong nexus indicator.",
                },
              ].map((item) => (
                <div key={item.change} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm text-amber-900 mb-1"><strong>Change:</strong> {item.change}</p>
                  <p className="text-sm text-amber-800"><strong>Impact:</strong> {item.impact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Protective Filing */}
          <section id="protective-filing" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. Protective Filing Strategy (Form 1120-F)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Protective filing is one of the most important risk mitigation strategies
              available to foreign-owned businesses with any degree of US nexus. It is
              specifically designed for situations where USTB status is uncertain.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Here is how it works: a foreign corporation files Form 1120-F on a
              &quot;protective basis,&quot; reporting zero effectively connected income and claiming
              that it does not believe it has USTB. The return essentially says: &quot;We do not
              think we owe US tax, but if the IRS later determines that we do have USTB, we
              want to preserve our right to claim deductions.&quot;
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-bold text-blue-900 mb-3">
                Why Protective Filing Matters
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <ShieldIcon />
                  <span><strong>Preserves deductions:</strong> If the IRS later determines you had USTB, you can amend the return to claim deductions because you filed on time</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldIcon />
                  <span><strong>No tax payment required:</strong> A protective return reports zero ECI and zero tax due — it costs nothing in taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldIcon />
                  <span><strong>Low filing cost:</strong> The return is relatively simple since it reports no income or deductions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldIcon />
                  <span><strong>Eliminates the worst-case scenario:</strong> Without a timely return, the IRS can disallow ALL deductions (see Section 3)</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Who should consider protective filing?</strong> Any foreign corporation
                that owns a US LLC and has borderline USTB factors — some US customers, occasional
                US travel, US contractors, or other indicators that are not clear-cut. The cost of
                protective filing is minimal compared to the potential downside of deduction
                disallowance.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Protective Filing Requirements
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
                <li>The foreign corporation must have its own EIN (separate from the LLC&apos;s EIN)</li>
                <li>Form 1120-F must be filed by the due date (generally the 15th day of the 6th month after the corporation&apos;s tax year ends)</li>
                <li>The return should include a statement that it is being filed on a protective basis</li>
                <li>Form 5472 must still be filed separately for the LLC</li>
                <li>Consult a cross-border tax professional for proper preparation</li>
              </ul>
            </div>
          </section>

          {/* Section 8: FDAP Income */}
          <section id="fdap-income" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. FDAP Income Risk
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Even if your LLC does not have USTB, there is another category of US-source income
              that foreign owners need to be aware of: Fixed, Determinable, Annual, Periodical
              (FDAP) income.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              FDAP income includes:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { type: "Dividends", desc: "From US stocks or mutual funds" },
                { type: "Interest", desc: "From US bank accounts or bonds (with exceptions)" },
                { type: "Rents", desc: "From US real property" },
                { type: "Royalties", desc: "From US-source intellectual property" },
                { type: "Compensation", desc: "For personal services performed in the US (if not USTB)" },
                { type: "Annuities", desc: "From US sources" },
              ].map((item) => (
                <div key={item.type} className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900">{item.type}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-amber-800">
                <strong>The withholding problem:</strong> FDAP income from US sources is generally
                subject to 30% withholding tax at source (reduced by applicable tax treaties).
                The payor (the entity making the payment) is supposed to withhold and remit this
                tax to the IRS. However, if the payor does not know the recipient is a foreign
                person and fails to withhold, the foreign person is still responsible for the tax.
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              FDAP income is taxed differently from ECI:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">ECI (USTB Income)</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">FDAP Income</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: "Tax basis", eci: "Net income (after deductions)", fdap: "Gross income (no deductions)" },
                    { factor: "Tax rate", eci: "Graduated rates (up to 37%/21%)", fdap: "Flat 30% (or treaty rate)" },
                    { factor: "Filing required", eci: "1040-NR or 1120-F", fdap: "Generally withheld at source" },
                    { factor: "Deductions allowed", eci: "Yes (if filed on time)", fdap: "No" },
                    { factor: "Treaty benefits", eci: "May reduce rate or exempt", fdap: "May reduce rate or exempt" },
                  ].map((row) => (
                    <tr key={row.factor} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.factor}</td>
                      <td className="py-3 px-3 text-gray-600">{row.eci}</td>
                      <td className="py-3 px-3 text-gray-600">{row.fdap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 9: What You Should Do */}
          <section id="what-you-should-do" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. What You Should Do
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              If you own a foreign-owned US LLC, here are the practical steps to protect yourself
              from USTB-related risks:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Analyze Your Business for USTB Indicators",
                  desc: "Review the USTB triggers in Section 5 above. Be honest about where your business activities actually occur, who performs them, and where your customers are located. Document everything.",
                },
                {
                  step: "2",
                  title: "File Form 5472 on Time — Regardless",
                  desc: "Even if you determine you have no USTB, Form 5472 is still required for every foreign-owned disregarded entity. The $25,000 penalty for non-filing applies separately from any income tax obligations. Do not skip this filing because you are focused on the USTB question.",
                },
                {
                  step: "3",
                  title: "Consult a Cross-Border Tax Attorney If Borderline",
                  desc: "If your situation involves any meaningful US nexus factors — US contractors, US customers, US travel, US inventory — do not try to make the USTB determination on your own. A qualified cross-border tax attorney can analyze your specific facts and provide a defensible position.",
                },
                {
                  step: "4",
                  title: "Consider Protective Filing",
                  desc: "If your foreign owner is a corporation and there is any doubt about USTB status, discuss protective filing of Form 1120-F with your tax advisor. The cost of a protective return is trivial compared to the potential cost of deduction disallowance.",
                },
                {
                  step: "5",
                  title: "Keep Detailed Records of Where Business Is Conducted",
                  desc: "Maintain records showing where services are performed, where decisions are made, where employees and contractors are located, and where customers are based. If the IRS ever questions your USTB status, contemporaneous documentation is your best defense.",
                },
                {
                  step: "6",
                  title: "Review Your Structure Annually",
                  desc: "USTB status can change from year to year as your business evolves. Hiring a US contractor, adding US customers, or starting to travel to the US for business could shift your situation. Review your USTB analysis at least annually.",
                },
                {
                  step: "7",
                  title: "Do Not Ignore FDAP Income",
                  desc: "If your LLC receives any US-source FDAP income (interest from US banks, dividends from US stocks, rents from US property), verify that appropriate withholding has occurred. If not, you may need to file a return and pay the tax directly.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber-700">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-bold text-green-900 mb-2">
                The Good News for Most Foreign LLC Owners
              </h3>
              <p className="text-sm text-green-800 leading-relaxed">
                The majority of foreign-owned LLCs — particularly those used by freelancers,
                consultants, and digital service providers who live and work entirely outside the
                US — do not have USTB. If you live abroad, work from abroad, serve non-US clients,
                and have no US employees or contractors, your filing obligation is likely limited
                to Form 5472 with a pro-forma Form 1120. The key is to understand where the line
                is so you can stay on the right side of it.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-blue-900 mb-2">
                File Your Form 5472 with Confidence
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed mb-3">
                For foreign-owned LLCs without USTB, ForeignLLCTax.com provides a guided
                Form 5472 filer that walks you through every field. Our tool generates IRS-ready
                PDFs for both Form 5472 and the pro-forma Form 1120 for $49 — a fraction of what
                a CPA charges for the same filing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/filer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Your Filing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/eci"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  Check ECI Risk
                </Link>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Related Guides
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
                { text: "ECI Assessment Tool — Check your risk", href: "/eci" },
                { text: "DIY vs CPA — What makes sense for your situation", href: "/guides/diy-vs-cpa" },
                { text: "Common Form 5472 mistakes to avoid", href: "/guides/form-5472-common-mistakes" },
                { text: "Filing season playbook for April deadlines", href: "/guides/filing-season-playbook" },
                { text: "Foreign-owned LLC bookkeeping guide", href: "/guides/foreign-llc-bookkeeping" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {item.text}
                </Link>
              ))}
            </div>
          </section>

          {/* Final Disclaimer */}
          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-5">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> The information in this guide is provided for general
              educational purposes only. It does not constitute legal advice, tax advice, or
              financial advice, and should not be relied upon as such. Tax law is complex,
              frequently changing, and highly dependent on individual facts and circumstances.
              The application of USTB rules varies significantly based on the specific details
              of each situation. You should consult a qualified cross-border tax attorney or CPA
              who is familiar with your specific circumstances before making any decisions about
              your tax filing obligations. ForeignLLCTax.com is a tax preparation software tool
              and does not provide legal or tax advisory services.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
