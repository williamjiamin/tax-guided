"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
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
      className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0"
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

export function Form1120CCorpGuideClient() {
  const TOC = [
    { id: "who-this-is-for", label: "Who This Guide Is For" },
    { id: "corp-vs-dre", label: "Corporation vs Disregarded Entity" },
    { id: "three-scenarios", label: "Three Scenarios Requiring Form 5472" },
    { id: "foreign-person", label: 'Who Is a "Foreign Person"?' },
    { id: "form-1120-sections", label: "Form 1120 Key Sections" },
    { id: "additional-forms", label: "Additional Required Forms" },
    { id: "form-5472-parts", label: "Form 5472 Part by Part" },
    { id: "dividend-withholding", label: "Dividend Withholding Warning" },
    { id: "gross-payments", label: "Calculating Gross Payments (1F/1H)" },
    { id: "de-minimis", label: "De Minimis Exception Clarification" },
    { id: "how-to-submit", label: "How to Submit" },
    { id: "penalties", label: "Penalties" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/guides/start-your-business" className="hover:text-gray-600">Guides</Link>
            <span>/</span>
            <span className="text-gray-600">Form 1120 C-Corp</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Corporate Filing Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Form 1120 + Form 5472 for Foreign-Owned C-Corporations
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              How to file an actual (not pro forma) Form 1120 corporate tax return with Form 5472
              when your US corporation has 25%+ foreign ownership. This guide covers regarded entities,
              not disregarded LLCs.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                A US C-Corporation with 25%+ foreign ownership must file Form 5472 with its Form 1120
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                The 25% threshold is per individual shareholder, not aggregate foreign ownership
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                This is a real Form 1120 with actual tax liability, not a pro forma filing
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Part 4 of Form 5472 reports monetary transactions (unlike DREs that use Part 5)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Dividends to foreign shareholders trigger 30% withholding (or treaty rate)
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
                  <a href={`#${item.id}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1: Who This Guide Is For */}
          <section id="who-this-is-for" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Who This Guide Is For
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              This guide is for US domestic corporations (C-Corporations) where at least one
              shareholder is a foreign person or entity that owns 25% or more of the total voting
              power or total value of all classes of stock. If your business is structured as a
              C-Corporation and has foreign shareholders meeting this threshold, you are required
              to file Form 5472 alongside your annual Form 1120 corporate income tax return.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This guide does not cover foreign-owned single-member LLCs (disregarded entities),
              which file a pro forma Form 1120 with Form 5472. If you have a disregarded LLC,
              see our other guides on that topic.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                Understanding the 25% Ownership Threshold
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed mb-3">
                The 25% threshold is measured per individual foreign person, not as an aggregate
                of all foreign shareholders combined. This is a critical distinction that many
                people misunderstand.
              </p>
              <div className="space-y-2">
                <div className="bg-white/60 rounded-lg p-3">
                  <p className="text-sm text-blue-900">
                    <strong>Triggers Form 5472:</strong> A US corporation has 3 shareholders.
                    One foreign individual owns 30% of the stock. Because a single foreign person
                    holds 25% or more, the corporation must file Form 5472 for transactions with
                    that shareholder.
                  </p>
                </div>
                <div className="bg-white/60 rounded-lg p-3">
                  <p className="text-sm text-blue-900">
                    <strong>Does NOT trigger Form 5472:</strong> A US corporation has 100
                    shareholders, all foreign, each owning 1% of the stock. Even though 100%
                    of the corporation is foreign-owned in aggregate, no single person meets
                    the 25% threshold. Form 5472 is not required under the 25% ownership rule.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Note that the 25% test considers both direct and indirect ownership. If a foreign
              person owns 25% of a foreign entity that in turn owns stock in the US corporation,
              the attribution rules may apply. Consult the Form 5472 instructions for the full
              attribution rules under Sections 267(c) and 318.
            </p>
          </section>

          {/* Section 2: Corporation vs Disregarded Entity */}
          <section id="corp-vs-dre" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Corporation vs Disregarded Entity
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              This is one of the most important distinctions in foreign-owned US entity tax
              filing, and getting it wrong can lead to serious errors.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-blue-700 bg-blue-50/50">C-Corporation (This Guide)</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Disregarded Entity LLC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Entity type", ccorp: "Corporation (or LLC that elected C-Corp via Form 8832)", dre: "Single-member LLC (default classification)" },
                    { feature: "Form 1120 type", ccorp: "Actual Form 1120 with real income/expenses", dre: "Pro forma Form 1120 (zeros on most lines)" },
                    { feature: "Pays its own taxes", ccorp: "Yes, at corporate tax rate (21%)", dre: "No, pass-through to owner" },
                    { feature: "Form 5472 Part used", ccorp: "Part 4 (monetary transactions)", dre: "Part 5 (reportable transactions of DRE)" },
                    { feature: "Form 5472 Box 3", ccorp: "Left blank", dre: "Checked (identifies as DRE)" },
                    { feature: "Balance sheet required", ccorp: "Yes (Schedule L)", dre: "Usually zeros" },
                    { feature: "Shareholder distributions", ccorp: "Taxable dividends with withholding", dre: "Not taxable distributions" },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.feature}</td>
                      <td className="py-3 px-3 text-blue-700 bg-blue-50/50">{row.ccorp}</td>
                      <td className="py-3 px-3 text-gray-600">{row.dre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>If your LLC elected C-Corporation status via Form 8832:</strong> You
                are filing a real Form 1120. Your LLC is treated as a corporation for all tax
                purposes. The C-Corp pays its own income tax at the 21% corporate rate. This
                is fundamentally different from the pro forma Form 1120 filed by a disregarded
                entity, which reports no income and no tax.
              </p>
            </div>
          </section>

          {/* Section 3: Three Scenarios */}
          <section id="three-scenarios" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Three Scenarios Requiring Form 5472
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Form 5472 is required in three distinct situations. Each involves a different
              underlying tax return and different reporting obligations.
            </p>

            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  Scenario 1: US Domestic Corporation with 25%+ Foreign Ownership
                </h3>
                <p className="text-sm text-blue-800 mb-2">
                  A US-incorporated C-Corporation (or an LLC taxed as a C-Corp) where at least
                  one foreign person owns 25% or more of the stock. Form 5472 is attached to
                  the regular Form 1120 corporate income tax return.
                </p>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                  This guide covers this scenario
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Scenario 2: Foreign Corporation in US Trade or Business
                </h3>
                <p className="text-sm text-gray-600">
                  A foreign corporation engaged in a US trade or business that has a 25%
                  foreign shareholder. Form 5472 is attached to Form 1120-F (the US income
                  tax return for foreign corporations). This situation typically arises when
                  a foreign company has a US branch or permanent establishment.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Scenario 3: Foreign-Owned Disregarded Entity (LLC)
                </h3>
                <p className="text-sm text-gray-600">
                  A US single-member LLC owned by a foreign person. The LLC files a pro forma
                  Form 1120 (with zeros on most lines) solely as a vehicle to attach Form 5472.
                  This is the most common filing scenario and is covered in our other guides.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Who Is a Foreign Person */}
          <section id="foreign-person" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Who Is a &ldquo;Foreign Person&rdquo;?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              For purposes of Form 5472 and the 25% ownership test, a &ldquo;foreign
              person&rdquo; includes any of the following:
            </p>

            <div className="space-y-2 mb-4">
              {[
                {
                  title: "Foreign Individual",
                  desc: "A person who is not a US citizen, does not hold a US green card (lawful permanent resident), and does not meet the substantial presence test for the tax year in question.",
                },
                {
                  title: "Foreign Corporation",
                  desc: "A corporation organized under the laws of a foreign country. This includes foreign parent companies that own shares in a US subsidiary.",
                },
                {
                  title: "Foreign Partnership",
                  desc: "A partnership organized under foreign law or one in which 50% or more of the income or capital interests are held by foreign persons.",
                },
                {
                  title: "Foreign Trust or Estate",
                  desc: "A trust or estate that does not meet the definition of a domestic trust under Section 7701(a)(30). Generally, a trust is foreign if a US court does not exercise primary supervision over its administration and US persons do not control all substantial decisions.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> A person who was a US resident at the beginning of
                the tax year but moved abroad and terminated their residency during the year may
                still be considered a foreign person for the portion of the year after the
                termination date. The 25% test is applied on a yearly basis.
              </p>
            </div>
          </section>

          {/* Section 5: Form 1120 Key Sections */}
          <section id="form-1120-sections" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Form 1120 Key Sections for Foreign-Owned Corporations
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              When a C-Corporation has foreign ownership, certain sections of Form 1120
              require particular attention. Below are the areas that are most commonly
              relevant or where errors frequently occur.
            </p>

            {/* Page 1 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Page 1: Income, Deductions, and Tax Computation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unlike a pro forma filing for a disregarded entity, this is a real tax return.
                Report all gross receipts, cost of goods sold, and deductions from actual
                business operations. The corporation computes its taxable income and pays
                federal income tax at the 21% corporate rate. Line 30 shows taxable income
                and Line 31 shows total tax. The corporation must also make estimated tax
                payments throughout the year if it expects to owe $500 or more.
              </p>
            </div>

            {/* Schedule K */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Schedule K: Other Information
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Schedule K contains yes/no questions that are critical for foreign-owned
                corporations. Pay close attention to:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 ml-2">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gray-700 flex-shrink-0">Question 4b:</span>
                  <span>
                    Asks whether any individual or estate owns 20% or more of the voting
                    stock. If your foreign shareholder owns 20% or more, answer Yes and
                    provide the details.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gray-700 flex-shrink-0">Question 7:</span>
                  <span>
                    Asks whether at any time during the tax year, a foreign person owned
                    25% or more of the total voting power or value of the corporation&apos;s
                    stock. This is the core question that triggers the Form 5472 requirement.
                    Answer Yes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gray-700 flex-shrink-0">Question 10:</span>
                  <span>
                    Total number of shareholders at end of tax year. Report the actual count.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gray-700 flex-shrink-0">Question 19:</span>
                  <span>
                    Asks whether the corporation paid dividends or made other distributions
                    to its shareholders during the year. If dividends were paid to foreign
                    shareholders, this triggers withholding obligations under Sections 1441
                    and 1442 (covered in the Dividend Withholding section below).
                  </span>
                </li>
              </ul>
            </div>

            {/* Schedule L */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Schedule L: Balance Sheet per Books
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Schedule L reports the corporation&apos;s balance sheet at the beginning and
                end of the tax year. For foreign-owned corporations, pay particular attention
                to loans from shareholders. If a foreign shareholder has loaned money to the
                corporation, this appears as a liability on the balance sheet and must also be
                reported as a transaction on Form 5472 Part 4. Shareholder loans are one of
                the most common reportable transactions for foreign-owned C-Corps.
              </p>
            </div>

            {/* Schedule G */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Schedule G: Stock Ownership of Persons Owning 20% or More
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                List each shareholder who owns 20% or more of the corporation&apos;s stock.
                For each, provide the name, identifying number (SSN, ITIN, or EIN), country
                of citizenship or organization, and percentage of stock owned. Foreign
                shareholders without a US tax ID should use their foreign tax identification
                number or enter &ldquo;FOREIGNUS&rdquo; as a placeholder while an ITIN
                application is pending.
              </p>
            </div>

            {/* Schedule N */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Schedule N: Foreign Operations of US Corporations
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                If the corporation has foreign operations, income from foreign sources, or
                makes payments to foreign persons, Schedule N must be completed. This schedule
                asks about foreign tax credits, Subpart F income, controlled foreign
                corporation relationships, and other international tax items. For a simple
                corporation with only foreign ownership (but all operations in the US), many
                of these questions will be answered No. However, if the foreign shareholder
                also controls foreign entities that transact with the US corporation, some
                questions may apply.
              </p>
            </div>
          </section>

          {/* Section 6: Additional Required Forms */}
          <section id="additional-forms" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Additional Required Forms
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Depending on the corporation&apos;s circumstances, several additional forms
              may be required along with Form 1120 and Form 5472.
            </p>

            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Form 1125-E: Compensation of Officers
                </h3>
                <p className="text-sm text-gray-600">
                  Required if the corporation&apos;s total receipts (Line 1a plus Lines 4
                  through 10 on page 1 of Form 1120) are $500,000 or more. Lists each
                  officer&apos;s name, SSN or ITIN, percentage of time devoted to business,
                  percentage of stock owned, and amount of compensation. If the foreign
                  shareholder is also an officer receiving compensation, this creates a
                  reportable transaction on Form 5472 as well.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Form 8858: Information Return for Foreign Disregarded Entities and Foreign Branches
                </h3>
                <p className="text-sm text-gray-600">
                  If the US corporation has a foreign branch, or if the foreign shareholder
                  has a physical business presence abroad that relates to the US corporation&apos;s
                  operations, Form 8858 may be required. This form reports the activities of
                  foreign disregarded entities and branches of US persons.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Section 351 Statement (First-Year Filing)
                </h3>
                <p className="text-sm text-gray-600">
                  When a corporation is first formed and the shareholder transfers cash (or
                  other property) to the corporation in exchange for stock, this is a Section
                  351 transaction. The transferor must attach a statement to their tax return
                  (and the corporation should attach one to Form 1120) describing the property
                  transferred, the stock received, and confirming that the transaction qualifies
                  for nonrecognition under Section 351. This is especially important in the
                  first year of the corporation&apos;s existence.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Forms 1042-S and 1042 (If Dividends Paid)
                </h3>
                <p className="text-sm text-gray-600">
                  If the corporation distributes dividends to foreign shareholders, it must
                  withhold tax and report the withholding on Form 1042-S (for each recipient)
                  and Form 1042 (the annual summary). See the Dividend Withholding section
                  below for details.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Form 5472 Part by Part */}
          <section id="form-5472-parts" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Form 5472 for Corporations: Part by Part
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              When filed by a C-Corporation (as opposed to a disregarded entity), Form 5472
              uses different parts. Below is a walkthrough of each section as it applies to
              a US domestic corporation with foreign ownership.
            </p>

            {/* Part 1 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-3">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                Part 1: Reporting Corporation
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed mb-2">
                Enter the US corporation&apos;s identifying information:
              </p>
              <ul className="space-y-1.5 text-sm text-blue-800 ml-2">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Corporation name and address as it appears on Form 1120
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Employer Identification Number (EIN)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Principal business activity and NAICS code
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Total assets at end of tax year (from Schedule L)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <strong>Line 1F:</strong> Total value of gross payments made TO related parties (from Part 4)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <strong>Line 1H:</strong> Total value of gross payments received FROM related parties (from Part 4)
                </li>
              </ul>
            </div>

            {/* Box 2 and 3 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Box 2 and Box 3
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                <strong>Box 2 (Check if applicable):</strong> Check this box if the reporting
                corporation is 50% or more foreign-owned at any time during the tax year. If
                your foreign shareholder owns 50% or more of the stock, check Box 2.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                <p className="text-sm text-amber-800">
                  <strong>Box 3: Leave blank.</strong> Box 3 is checked only when the filing
                  entity is a foreign-owned US disregarded entity. Since this guide covers
                  C-Corporations (regarded entities), Box 3 should never be checked.
                </p>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-3">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                Part 2: 25% Foreign Shareholder
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed mb-2">
                Identify the foreign shareholder that triggers the filing requirement:
              </p>
              <ul className="space-y-1.5 text-sm text-blue-800 ml-2">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Full legal name of the foreign person or entity
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Address (use the foreign address, not a US mailing address)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  US taxpayer identification number (if any) or foreign TIN
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Unique Reference ID number (you assign this, it must be consistent year to year)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Country of citizenship, organization, or incorporation
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Percentage of stock owned (voting and value)
                </li>
              </ul>
              <p className="text-sm text-blue-800 leading-relaxed mt-2">
                If there are multiple foreign shareholders each meeting the 25% threshold,
                file a separate Form 5472 for each one.
              </p>
            </div>

            {/* Part 3 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Part 3: Related Party
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                If the transactions being reported are with a related party other than the
                25% shareholder identified in Part 2, provide that party&apos;s information
                here. For example, if the foreign shareholder also controls a foreign
                corporation that transacts with your US corporation, the foreign corporation
                would be listed in Part 3.  If all transactions are directly with the
                shareholder in Part 2, Part 3 can reference back to Part 2.
              </p>
            </div>

            {/* Part 4 */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-3">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                Part 4: Monetary Transactions Between Reporting Corporation and Foreign Related Party
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed mb-3">
                This is the most important section for C-Corporations. Unlike disregarded
                entities (which use Part 5), corporations report their related-party
                transactions in Part 4. This section captures the dollar amounts flowing
                between the corporation and its foreign shareholder or related parties.
              </p>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">
                    Lines 9-22: Amounts Received (Inflows to Corporation)
                  </h4>
                  <ul className="space-y-1 text-sm text-blue-800 ml-2">
                    <li>Line 9: Purchases of stock in trade</li>
                    <li>Line 10: Purchases of tangible property (not stock in trade)</li>
                    <li>Line 11: Platform contribution transaction payments received</li>
                    <li>Line 13: Loan proceeds received from the foreign related party</li>
                    <li>Line 14: Interest received on loans to the foreign related party</li>
                    <li>Line 15: Premiums received for insurance or reinsurance</li>
                    <li>Line 17: Rents and royalties received</li>
                    <li>Line 20: Capital contributions received from the foreign related party</li>
                    <li>Line 22: Total (sum of Lines 9 through 21)</li>
                  </ul>
                </div>
                <div className="bg-white/60 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">
                    Lines 23-36: Amounts Paid (Outflows from Corporation)
                  </h4>
                  <ul className="space-y-1 text-sm text-blue-800 ml-2">
                    <li>Line 23: Sales of stock in trade</li>
                    <li>Line 24: Sales of tangible property (not stock in trade)</li>
                    <li>Line 25: Platform contribution transaction payments made</li>
                    <li>Line 27: Loan payments made to the foreign related party</li>
                    <li>Line 28: Interest paid on loans from the foreign related party</li>
                    <li>Line 30: Compensation paid to the foreign related party for services</li>
                    <li>Line 31: Rents and royalties paid</li>
                    <li>Line 33: Dividends paid to the foreign shareholder</li>
                    <li>Line 36: Total (sum of Lines 23 through 35)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Part 5 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Part 5: Reportable Transactions of a Foreign-Owned US Disregarded Entity
              </h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-sm text-amber-800">
                  <strong>Leave Part 5 entirely blank.</strong> Part 5 is exclusively for
                  foreign-owned US disregarded entities. Since you are filing as a
                  C-Corporation (a regarded entity), Part 5 does not apply. All monetary
                  transactions are reported in Part 4 instead.
                </p>
              </div>
            </div>

            {/* Part 6 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Part 6: Nonmonetary and Less-Than-Full Consideration Transactions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Report nonmonetary transactions such as when the foreign shareholder serves
                as an officer or director of the corporation without compensation, or when
                services or property are exchanged at less than fair market value. If the
                foreign shareholder is both an owner and a director, describe that
                relationship here. Common entries include &ldquo;Shareholder serves as
                director&rdquo; or &ldquo;Related party provides management services.&rdquo;
              </p>
            </div>

            {/* Part 7 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Part 7: Additional Information
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Part 7 asks about the nature of the business relationship between the
                reporting corporation and the related party. It also asks whether the
                corporation was a participant in any cost sharing arrangement and whether
                it claimed any transfer pricing adjustments. For most small to mid-size
                foreign-owned corporations, the answers will be straightforward.
              </p>
            </div>

            {/* Part 8 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Part 8: Cost Sharing Arrangements
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                This section applies only if the US corporation and a foreign related party
                share the costs and risks of developing intangible property (such as software,
                patents, or trademarks) under a qualified cost sharing arrangement (CSA).
                For most small corporations, this section is not applicable.
              </p>
            </div>

            {/* Part 9 */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Part 9: Base Erosion Payments and Base Erosion Tax Benefits (Section 59A)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The base erosion and anti-abuse tax (BEAT) under Section 59A applies only
                to corporations with average annual gross receipts of $500 million or more
                over the three preceding tax years. For the vast majority of foreign-owned
                C-Corporations, this section does not apply and can be left blank.
              </p>
            </div>
          </section>

          {/* Section 8: Dividend Withholding */}
          <section id="dividend-withholding" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Dividend Withholding Warning
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <WarningIcon />
                <div>
                  <h3 className="text-sm font-semibold text-amber-900 mb-2">
                    Critical: 30% Withholding on Dividends to Foreign Shareholders
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    If the C-Corporation distributes dividends to its foreign shareholders,
                    these distributions are US-source Fixed, Determinable, Annual, or
                    Periodical (FDAP) income subject to a 30% withholding tax rate. The
                    corporation is the withholding agent and is legally responsible for
                    deducting and remitting the tax to the IRS. Failure to withhold creates
                    personal liability for the corporation and potentially for its officers.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When dividends are paid to foreign shareholders, the corporation must:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 ml-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-gray-700 flex-shrink-0">1.</span>
                <span>
                  Withhold 30% (or the applicable treaty rate) from each dividend payment
                  before distributing the net amount to the foreign shareholder.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-gray-700 flex-shrink-0">2.</span>
                <span>
                  File Form 1042-S for each foreign recipient, reporting the gross income
                  paid and the tax withheld. Due by March 15 of the following year.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-gray-700 flex-shrink-0">3.</span>
                <span>
                  File Form 1042 (Annual Withholding Tax Return for US Source Income of
                  Foreign Persons) as the summary return. Due by March 15.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-gray-700 flex-shrink-0">4.</span>
                <span>
                  Deposit withheld taxes according to the IRS deposit schedule (generally
                  within days of payment for large amounts, or quarterly for smaller amounts).
                </span>
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Treaty Rate Reduction:</strong> Many US tax treaties reduce the
                dividend withholding rate below 30%. For example, certain treaties provide
                a 15% rate for portfolio dividends and 5% for direct investment dividends
                (where the shareholder owns 10% or more of the voting stock). To claim a
                reduced treaty rate, the foreign shareholder must provide the corporation
                with a valid Form W-8BEN or W-8BEN-E certifying treaty eligibility before
                the dividend is paid.
              </p>
            </div>
          </section>

          {/* Section 9: Gross Payments */}
          <section id="gross-payments" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Calculating Gross Payments (Lines 1F and 1H)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Part 1 of Form 5472 requires you to report the total value of gross payments
              made and received. These amounts are derived from the totals in Part 4.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">How to Calculate</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <p>
                  <strong>Line 1F (Gross payments made to related party):</strong> Enter the
                  amount from Part 4, Line 36 (total outflows from the corporation to the
                  foreign related party).
                </p>
                <p>
                  <strong>Line 1H (Gross payments received from related party):</strong> Enter
                  the amount from Part 4, Line 22 (total inflows from the foreign related
                  party to the corporation).
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              If the corporation files multiple Form 5472s (because it has transactions with
              multiple foreign related parties each meeting the 25% threshold), the amounts
              on each individual Form 5472 reflect only the transactions with that specific
              related party. Do not consolidate amounts across multiple 5472s onto a single
              form. Each form stands alone with its own Part 4 totals flowing to its own
              Lines 1F and 1H.
            </p>
          </section>

          {/* Section 10: De Minimis Exception */}
          <section id="de-minimis" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              De Minimis Exception Clarification
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <WarningIcon />
                <div>
                  <h3 className="text-sm font-semibold text-amber-900 mb-2">
                    The $10M Small Corporation Exception Does NOT Exempt You from Filing Form 5472
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    There is a common misconception that small corporations with less than
                    $10 million in US gross receipts are exempt from Form 5472 requirements.
                    This is incorrect.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The small corporation exception under Section 6038A applies only to certain
              recordkeeping and agent appointment requirements, not to the Form 5472 filing
              obligation itself. Specifically:
            </p>

            <div className="space-y-2 mb-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  What the exception exempts (Section 6038A-3 and 6038A-5):
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Certain record maintenance requirements under Reg. 1.6038A-3</li>
                  <li>The requirement to authorize a US agent for the foreign related party under Reg. 1.6038A-5</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  What the exception does NOT exempt:
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Filing Form 5472 (this is always required regardless of size)</li>
                  <li>Answering Schedule K Question 7 on Form 1120</li>
                  <li>Reporting transactions with foreign related parties</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Even if your corporation has zero revenue, you must still file Form 5472 for
              any tax year in which a reportable transaction occurred with a 25% foreign
              shareholder. There is no revenue threshold for the filing obligation.
            </p>
          </section>

          {/* Section 11: How to Submit */}
          <section id="how-to-submit" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Submit
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Form 5472 cannot be e-filed. It must be submitted on paper, either by mail
              or by fax. This is true even if the corporation e-files its Form 1120. When
              the Form 1120 is e-filed, Form 5472 must be sent separately to the IRS.
            </p>

            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Option 1: Mail</h3>
                <p className="text-sm text-gray-600">
                  Mail Form 5472 to the IRS address specified in the form instructions.
                  The mailing address depends on whether payment is included. Use certified
                  mail with return receipt requested so you have proof of delivery. The IRS
                  does not send an acknowledgment when it receives Form 5472.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Option 2: Fax</h3>
                <p className="text-sm text-gray-600">
                  Form 5472 can also be faxed to the IRS. The fax number is provided in the
                  form instructions. Keep the fax confirmation page as your proof of
                  submission. Note that fax quality must be clear and legible.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>No confirmation from the IRS:</strong> Unlike e-filed returns that
                receive an electronic acceptance, paper-filed Form 5472 submissions do not
                receive any confirmation from the IRS. You will not know whether the IRS
                received your form unless you used certified mail or have a fax confirmation.
                Always retain proof of submission in your records.
              </p>
            </div>
          </section>

          {/* Section 12: Penalties */}
          <section id="penalties" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Penalties
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <div className="flex items-start gap-3">
                <WarningIcon />
                <div>
                  <h3 className="text-sm font-semibold text-amber-900 mb-2">
                    $25,000 Penalty Per Form, Per Year
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    The penalty for failure to file Form 5472, or for filing a substantially
                    incomplete Form 5472, is $25,000 per form per tax year. This penalty was
                    increased from $10,000 to $25,000 effective for returns filed after
                    December 31, 2017 (Tax Cuts and Jobs Act). The penalty applies per form,
                    meaning if you are required to file multiple Form 5472s and fail to file
                    all of them, the penalty is $25,000 for each missing form.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Additional penalty consequences include:
            </p>

            <div className="space-y-2 mb-4">
              {[
                {
                  title: "Continuation Penalty",
                  desc: "If the IRS sends a notice of failure to file and you do not comply within 90 days, an additional $25,000 penalty is assessed for each 30-day period (or fraction thereof) that the failure continues after the 90-day period expires.",
                },
                {
                  title: "Criminal Penalties",
                  desc: "Willful failure to file may result in criminal penalties under Section 7203 (failure to file) or Section 7206 (fraud and false statements), in addition to the civil penalties.",
                },
                {
                  title: "Reduction of Foreign Tax Credit",
                  desc: "The IRS may reduce or disallow the corporation's foreign tax credit if it fails to comply with the information reporting requirements under Section 6038A.",
                },
                {
                  title: "Withholding Penalties (If Applicable)",
                  desc: "If the corporation fails to withhold tax on dividends paid to foreign shareholders, it is liable for the amount that should have been withheld, plus interest and potential penalties under Section 6656 (failure to make deposit of taxes).",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Reasonable Cause Defense:</strong> The $25,000 penalty may be waived
                if the corporation can demonstrate reasonable cause for the failure to file.
                Reasonable cause generally requires showing that the corporation exercised
                ordinary business care and prudence but was nonetheless unable to comply.
                Common arguments include reliance on a professional tax advisor, good faith
                efforts to comply, and lack of willful neglect. If you receive a penalty
                notice, respond within 30 days with a reasonable cause explanation.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing", href: "/filer" },
                { text: "Learn about Form 5472 common mistakes", href: "/guides/form-5472-common-mistakes" },
                { text: "Read about Form 1120-F for foreign corporations", href: "/guides/form-1120-f" },
                { text: "Understand transfer pricing basics", href: "/guides/transfer-pricing" },
                { text: "How to submit Form 5472 to the IRS", href: "/guides/how-to-submit-form-5472" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
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
