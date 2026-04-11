"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function WarningIcon() {
  return (
    <svg
      className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
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

export function W8benBrokerageGuideClient() {
  const TOC = [
    { id: "common-mistake", label: "The Common Mistake" },
    { id: "why-w9-wrong", label: "Why W-9 Is Wrong" },
    { id: "consequences", label: "Two Serious Consequences" },
    { id: "fdap-withholding", label: "How FDAP Withholding Should Work" },
    { id: "joint-liability", label: "Joint and Several Liability" },
    { id: "what-to-file", label: "What You Would Need to File" },
    { id: "how-to-fix", label: "How to Fix It" },
    { id: "prevention", label: "Prevention Checklist" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-red-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/guides/start-your-business" className="hover:text-gray-600">Guides</Link>
            <span>/</span>
            <span className="text-gray-600">W-8BEN Brokerage Trap</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100/80 text-red-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Tax Trap Warning
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              W-8BEN vs W-9 for Foreign LLC Owners — The Brokerage Account Trap
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Foreign LLC owners who open US brokerage accounts often complete the wrong
              withholding certificate. This mistake can create perjury risk and unexpected
              tax liability.
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
                Foreign-owned disregarded LLCs must use W-8BEN or W-8BEN-E — never W-9
              </li>
              <li className="flex items-start gap-2">
                <WarningIcon />
                Filing a W-9 as a non-US person constitutes a false certification under penalty of perjury
              </li>
              <li className="flex items-start gap-2">
                <WarningIcon />
                Without proper withholding, YOU owe the 30% tax on US-source dividends and interest
              </li>
              <li className="flex items-start gap-2">
                <WarningIcon />
                The IRS can match 1099 reports to your account — ignoring this will not make it go away
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

          {/* Section 1: The Common Mistake */}
          <section id="common-mistake" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Common Mistake
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Here is the scenario. You are a non-US person who has formed a single-member LLC
              in the United States. The LLC is treated as a disregarded entity for US tax purposes.
              You decide to open a US brokerage account through your LLC to invest in stocks,
              bonds, or other securities.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              During the account opening process, the brokerage runs you through a &quot;tax
              interview&quot; or asks you to complete a withholding certificate. You see two
              options: W-9 and W-8BEN. Your LLC has a US EIN. It has a US address. It was
              formed in a US state. So you complete the W-9 to &quot;make the paperwork look
              right.&quot;
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-red-800">
                <strong>This is a serious mistake.</strong> The W-9 is exclusively for US persons.
                Having a US-formed LLC does not make you a US person. The tax status of a
                disregarded LLC flows through to its owner — and if the owner is a non-resident
                alien, the correct withholding certificate is W-8BEN (for individuals) or
                W-8BEN-E (for entities).
              </p>
            </div>
          </section>

          {/* Section 2: Why W-9 Is Wrong */}
          <section id="why-w9-wrong" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why W-9 Is Wrong
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Form W-9 (Request for Taxpayer Identification Number and Certification) is
              designed exclusively for US persons. When you sign a W-9, you are certifying
              under penalty of perjury that you are a US citizen, US resident alien, or a
              US entity.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A disregarded entity does not have its own tax identity separate from its owner.
              This is the entire point of &quot;disregarded&quot; status. When the IRS looks at
              your single-member LLC, they look through it to the owner. If the owner is a
              foreign person, the entity is treated as foreign for withholding purposes.
            </p>

            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Who should file W-9</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    US citizens or US resident aliens
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    LLCs owned by US persons
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    US corporations, partnerships, and trusts
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Who should file W-8BEN / W-8BEN-E</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Non-resident aliens (individuals) — use W-8BEN
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Foreign entities — use W-8BEN-E
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Disregarded LLCs with a foreign owner — use W-8BEN (individual owner) or W-8BEN-E (entity owner)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Key point:</strong> The fact that your LLC was formed in Wyoming, Delaware,
                or any other US state is irrelevant. The fact that your LLC has a US EIN is
                irrelevant. What matters for withholding purposes is the tax residency of the
                owner, not the formation jurisdiction of the LLC.
              </p>
            </div>
          </section>

          {/* Section 3: Two Serious Consequences */}
          <section id="consequences" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Two Serious Consequences
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Submitting the wrong withholding certificate is not a minor paperwork error.
              It triggers two distinct problems, each serious on its own.
            </p>

            <div className="space-y-4">
              {/* Consequence 1 */}
              <div className="bg-red-50 border border-red-300 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-700 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-red-900 mb-2">Perjury Risk</h3>
                    <p className="text-sm text-red-800 leading-relaxed mb-2">
                      When you sign a W-9, the certification section states (in part): &quot;Under
                      penalties of perjury, I certify that... I am a U.S. citizen or other U.S.
                      person.&quot;
                    </p>
                    <p className="text-sm text-red-800 leading-relaxed">
                      If you are not a US person, you have made a false statement under penalty
                      of perjury on a federal tax document. While the IRS rarely prosecutes
                      individual perjury cases for withholding certificates, the legal exposure
                      exists. More practically, this false certification undermines any future
                      argument that you acted in good faith if the IRS examines your account.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consequence 2 */}
              <div className="bg-red-50 border border-red-300 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-700 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-red-900 mb-2">Missing Tax Withholding</h3>
                    <p className="text-sm text-red-800 leading-relaxed mb-2">
                      When the broker receives a W-9, they classify you as a US person. US persons
                      are not subject to the 30% withholding tax on US-source investment income.
                      So the broker pays you the full amount — no withholding.
                    </p>
                    <p className="text-sm text-red-800 leading-relaxed">
                      But you are actually a non-US person. You were always subject to that 30%
                      withholding (or a reduced treaty rate). The tax is still owed. The only
                      difference is that nobody collected it at the source. Now you owe it directly
                      to the IRS, and you may not even realize it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: How FDAP Withholding Should Work */}
          <section id="fdap-withholding" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How FDAP Withholding Should Work
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              FDAP stands for Fixed, Determinable, Annual, or Periodical income. This category
              includes dividends, interest, rents, royalties, and certain other types of passive
              income. When a US payor (like a broker) pays FDAP income to a non-US person,
              they are required to withhold tax at the source.
            </p>

            <div className="bg-gray-50 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Example: $1,000 Dividend Payment</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Gross dividend earned</span>
                  <span className="font-medium text-gray-900">$1,000.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Required withholding (30%)</span>
                  <span className="font-medium text-red-600">- $300.00</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Amount paid to you</span>
                  <span className="font-bold text-gray-900">$700.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Amount sent to IRS by broker</span>
                  <span className="font-medium text-gray-900">$300.00</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              This is how it is supposed to work when the broker has a valid W-8BEN on file.
              The broker withholds 30% (or the applicable treaty rate), sends the withheld
              amount to the IRS, and pays you the remainder. The broker reports this on Form
              1042-S.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Treaty rates may apply.</strong> Many countries have tax treaties with the
                US that reduce the 30% withholding rate on dividends to 15% or even lower. To
                claim a treaty rate, you must provide a properly completed W-8BEN or W-8BEN-E
                that includes your treaty country and the applicable article. If you filed a W-9
                instead, you cannot claim any treaty benefits.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4">
              <h3 className="text-sm font-bold text-red-800 mb-2">What happens with a W-9 on file</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-700">Gross dividend earned</span>
                  <span className="font-medium text-red-900">$1,000.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-700">Withholding (broker thinks you are US person)</span>
                  <span className="font-medium text-red-600">$0.00</span>
                </div>
                <div className="border-t border-red-200 pt-2 flex items-center justify-between text-sm">
                  <span className="text-red-700">Amount paid to you</span>
                  <span className="font-bold text-red-900">$1,000.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-700">Tax still owed to IRS</span>
                  <span className="font-bold text-red-600">$300.00</span>
                </div>
              </div>
              <p className="text-sm text-red-800 mt-3">
                You received the full $1,000 — but you still owe $300 (or the applicable treaty
                rate) to the IRS. The tax obligation does not disappear because the broker
                failed to withhold.
              </p>
            </div>
          </section>

          {/* Section 5: Joint and Several Liability */}
          <section id="joint-liability" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Joint and Several Liability
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Under US tax law, the withholding agent (in this case, your broker) is the primary
              party responsible for collecting and remitting withholding tax on FDAP payments to
              non-US persons. This is sometimes called the &quot;first line of defense&quot; in
              the withholding system.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              However, the liability for the underlying tax is joint and several. This means
              both the withholding agent and the beneficial owner (you) can be held responsible
              for the unpaid tax.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              In practice, here is what happens: If the broker failed to withhold because you
              provided a W-9 (causing them to treat you as a US person), the broker may argue
              that they relied on your certification in good faith. The IRS may then pursue
              you directly for the missing tax.
            </p>

            <div className="bg-red-50 border border-red-300 rounded-xl p-5">
              <h3 className="text-sm font-bold text-red-900 mb-3">The chain of liability</h3>
              <div className="space-y-3">
                {[
                  {
                    step: "1",
                    title: "Broker is the primary withholding agent",
                    desc: "The broker is supposed to withhold 30% on FDAP payments to non-US persons.",
                  },
                  {
                    step: "2",
                    title: "You gave the broker a W-9",
                    desc: "The broker relied on your W-9 and classified you as a US person. No withholding was applied.",
                  },
                  {
                    step: "3",
                    title: "The broker may be protected",
                    desc: "If the broker had no reason to doubt the W-9, they may argue reliance on your certification.",
                  },
                  {
                    step: "4",
                    title: "Liability falls to you",
                    desc: "You are ultimately responsible for the tax on your own income. You must now file a return and pay.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold text-xs">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-900">{item.title}</h4>
                      <p className="text-sm text-red-800">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: What You Would Need to File */}
          <section id="what-to-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What You Would Need to File
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              If you owe FDAP withholding tax that was not collected at source, you are required
              to file a US tax return to report the income and pay the tax. The specific form
              depends on your entity structure.
            </p>

            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  For individual foreign owners
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span>Form 1040-NR (US Nonresident Alien Income Tax Return)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span>ITIN required (apply with Form W-7 if you do not already have one)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span>Report FDAP income and calculate tax owed at 30% (or treaty rate)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  For foreign corporate owners
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span>Form 1120-F (US Income Tax Return of a Foreign Corporation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span>Separate EIN required for the foreign corporation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    <span>Report FDAP income and calculate tax owed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> These filings are in addition to your annual Form 5472
                obligation. Your disregarded LLC must still file Form 5472 (attached to a pro-forma
                Form 1120) to report reportable transactions. The FDAP withholding issue creates
                a separate filing requirement on top of your existing one.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-3">
              <p className="text-sm text-red-800">
                <strong>Penalties for non-filing:</strong> If you owe tax and do not file the
                required return, the IRS can assess penalties for failure to file (up to 25% of
                the tax owed) and failure to pay (0.5% per month). Interest also accrues from the
                original due date. These add up quickly.
              </p>
            </div>
          </section>

          {/* Section 7: How to Fix It */}
          <section id="how-to-fix" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Fix It
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              If you have already submitted a W-9 to your US broker when you should have filed
              a W-8BEN or W-8BEN-E, here are the steps you should take. Do not ignore this —
              the IRS receives copies of all 1099 forms issued by your broker and can match
              them against expected withholding.
            </p>

            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "Contact your broker immediately",
                  desc: "Call or write to your brokerage and explain that you need to update your withholding certificate. Request to replace the W-9 on file with a W-8BEN (if you are an individual) or W-8BEN-E (if the LLC is owned by a foreign entity). Most brokers have a process for this.",
                },
                {
                  step: "2",
                  title: "Determine the tax impact",
                  desc: "Review all US-source income you received while the W-9 was on file. This includes dividends, interest, capital gains distributions from mutual funds, and any other FDAP income. Calculate the 30% withholding tax (or applicable treaty rate) that should have been withheld.",
                },
                {
                  step: "3",
                  title: "Consult a tax professional",
                  desc: "If the amounts involved are significant, work with a tax professional who understands international withholding. They can help you determine the exact filing requirements, apply any treaty benefits you may be entitled to, and navigate the process for paying the missing tax.",
                },
                {
                  step: "4",
                  title: "File the required returns",
                  desc: "If tax is owed, you will need to file the appropriate US tax return (Form 1040-NR or Form 1120-F) and pay the outstanding tax. You may need to obtain an ITIN first if you do not already have one.",
                },
                {
                  step: "5",
                  title: "Keep documentation of the correction",
                  desc: "Save copies of your W-9 replacement, the new W-8BEN/W-8BEN-E, all correspondence with the broker, and any amended 1099 or 1042-S forms you receive. This documentation shows the IRS that you acted to correct the error.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 font-bold text-xs">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-300 rounded-xl p-4 mt-4">
              <p className="text-sm text-red-800">
                <strong>Do NOT ignore this.</strong> The IRS receives information returns (Form
                1099-DIV, 1099-INT, etc.) from every US broker. If your account was classified as
                a US person account and you received dividends or interest, the IRS has a record
                of those payments. When no corresponding tax return matches that income, it raises
                a flag. Correcting the error proactively is always better than waiting for the IRS
                to contact you.
              </p>
            </div>
          </section>

          {/* Section 8: Prevention Checklist */}
          <section id="prevention" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Prevention Checklist
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Follow these rules to avoid the W-8BEN/W-9 trap and ensure your US brokerage
              account is set up correctly from the start.
            </p>

            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Always do</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Use W-8BEN (individuals) or W-8BEN-E (entities) for any account where the beneficial owner is a non-US person
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Update your W-8 form every three years — they expire, and the broker will begin backup withholding at 24% if they lapse
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Include your tax treaty country and article number on the W-8BEN if a treaty applies — this is how you claim a reduced withholding rate
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Keep records of all US-source income, including dividends, interest, and capital gains distributions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Verify the withholding shown on your 1042-S matches the expected rate for your treaty country
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Check if your country has a tax treaty with the US that reduces the 30% default withholding rate
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">Never do</h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Never submit a W-9 if you are not a US person — regardless of the fact that your LLC is US-formed
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Never assume a US EIN makes you a US person for withholding purposes
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Never let a W-8 form expire without submitting a renewal
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Never ignore 1099 forms from your broker — if you received a 1099-DIV or 1099-INT instead of a 1042-S, your account may be incorrectly classified
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Quick test:</strong> If your broker sends you a 1042-S at year end, your
                account is correctly classified as a foreign person account. If your broker sends
                you a 1099-DIV or 1099-INT, they think you are a US person — and you likely have
                a W-9 on file that needs to be replaced.
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
                { text: "File your Form 5472 for your foreign-owned LLC ($49)", href: "/filer" },
                { text: "Learn about Form 1040-NR for nonresident aliens", href: "/guides/form-1040-nr" },
                { text: "Learn about Form 1120-F for foreign corporations", href: "/guides/form-1120-f" },
                { text: "Read about common Form 5472 mistakes", href: "/guides/form-5472-common-mistakes" },
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

          {/* Disclaimer */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              Disclaimer
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              This guide is for informational purposes only and does not constitute legal or tax
              advice. Tax laws are complex and subject to change. The information presented here
              is based on general principles and may not apply to your specific situation. You
              should consult a qualified tax professional before making any decisions about your
              tax filings, withholding certificates, or compliance obligations. ForeignLLCTax.com
              is not a law firm, CPA firm, or registered tax advisor.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
