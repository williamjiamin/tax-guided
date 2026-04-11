"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function TransferPricingGuideClient() {
  const TOC = [
    { id: "what-is-transfer-pricing", label: "What Is Transfer Pricing?" },
    { id: "why-it-matters", label: "Why It Matters for Foreign-Owned LLCs" },
    { id: "common-transactions", label: "Common Related-Party Transactions" },
    { id: "form-5472-part-v", label: "How Form 5472 Part V Captures Transactions" },
    { id: "arms-length", label: "The Arm's Length Principle" },
    { id: "documentation", label: "Documentation Requirements" },
    { id: "examples", label: "Examples of Proper Documentation" },
    { id: "penalties", label: "Penalties for Non-Compliance" },
    { id: "next-steps", label: "Next Steps" },
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
            <span className="text-gray-600">Transfer Pricing</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Tax Compliance Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Transfer Pricing for Foreign-Owned LLCs
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              How the IRS reviews transactions between you and your LLC — and how to document
              them properly on Form 5472.
            </p>
          </div>

          {/* Key Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-3">Key Facts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Reported On", value: "Form 5472, Part V" },
                { label: "Standard", value: "Arm's length principle" },
                { label: "Penalty", value: "$25,000 per form for non-compliance" },
                { label: "Key Focus", value: "All related-party transactions" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-blue-700 w-28 flex-shrink-0">{item.label}:</span>
                  <span className="text-sm text-blue-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              In This Guide
            </h2>
            <ol className="space-y-1.5">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* What Is Transfer Pricing? */}
          <section id="what-is-transfer-pricing" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is Transfer Pricing?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Transfer pricing refers to the pricing of transactions between related parties. For
              foreign-owned LLCs, this means any financial transaction between the LLC and its
              foreign owner (or other related entities).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The IRS requires that these transactions be conducted at &quot;arm&apos;s length&quot; —
              meaning the terms should reflect what unrelated parties would agree to in a comparable
              transaction. This prevents related parties from manipulating prices to shift profits
              out of the U.S. or otherwise avoid U.S. tax obligations.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              For most foreign-owned single-member LLCs (which are treated as disregarded entities for
              tax purposes), transfer pricing primarily concerns the accurate reporting of transactions
              on Form 5472, Part V.
            </p>
          </section>

          {/* Why It Matters */}
          <section id="why-it-matters" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Transfer Pricing Matters for Foreign-Owned LLCs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The IRS specifically scrutinizes transactions between foreign owners and their U.S. LLCs
              because these transactions occur between related parties who can set whatever terms
              they choose. Unlike arm&apos;s length transactions between strangers, there is no market
              mechanism to ensure fair pricing.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>Form 5472 is the IRS&apos;s primary tool for monitoring these transactions</li>
              <li>Even disregarded entities (single-member LLCs) must report all related-party transactions</li>
              <li>The $25,000 penalty for non-compliance underscores how seriously the IRS takes this</li>
              <li>Inadequate documentation can trigger audits and additional penalties</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Key point:</strong> Even if your LLC has zero income and zero U.S. tax liability,
                you must still report all transactions with the foreign owner on Form 5472. The IRS
                wants to see the complete picture.
              </p>
            </div>
          </section>

          {/* Common Transactions */}
          <section id="common-transactions" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common Related-Party Transactions
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              For most foreign-owned single-member LLCs, these are the typical transactions that
              occur between the owner and the LLC:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Capital Contributions",
                  desc: "The owner transfers money into the LLC's bank account to fund the business. This is the most common transaction for new LLCs.",
                  example: "Owner wires $5,000 to the LLC's Mercury bank account to cover startup costs.",
                },
                {
                  title: "Owner Pays for LLC Formation",
                  desc: "The owner pays a formation service (like doola or Firstbase) to set up the LLC. This is a related-party transaction even though the payment went to a third party.",
                  example: "Owner pays $500 to Firstbase for LLC formation on behalf of the LLC.",
                },
                {
                  title: "Owner Covers Operating Expenses",
                  desc: "The owner pays for software subscriptions, hosting, or other business expenses from their personal account.",
                  example: "Owner pays $200/month for web hosting using their personal credit card.",
                },
                {
                  title: "LLC Reimburses Owner",
                  desc: "The LLC sends money to the owner as reimbursement for expenses paid on the LLC's behalf.",
                  example: "LLC reimburses owner $1,200 for hosting costs paid during the year.",
                },
                {
                  title: "Distributions to Owner",
                  desc: "The LLC distributes profits to the foreign owner.",
                  example: "LLC distributes $10,000 in profits to the owner's foreign bank account.",
                },
                {
                  title: "Loans Between Owner and LLC",
                  desc: "The owner lends money to the LLC (or vice versa). Loan terms should be documented and at arm's length interest rates.",
                  example: "Owner lends $20,000 to the LLC with a 5% annual interest rate, documented in a promissory note.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-xs text-gray-400 italic">Example: {item.example}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Form 5472 Part V */}
          <section id="form-5472-part-v" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How Form 5472 Part V Captures Transactions
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Part V of Form 5472 is titled &quot;Reportable Transactions of a Reporting Corporation
              with a Foreign or Domestic Related Party.&quot; It lists specific transaction categories
              with dollar amounts:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Lines 1-7:</strong> Sales, purchases, and compensation-related transactions</li>
                <li><strong>Lines 8-12:</strong> Commissions, rents, royalties, and interest paid/received</li>
                <li><strong>Lines 13-15:</strong> Insurance premiums, service fees, and other amounts</li>
                <li><strong>Lines 16-22:</strong> Capital contributions, loans, accounts payable/receivable, and other balances</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              For most single-member LLCs, the relevant lines are:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li><strong>Line 13(b):</strong> Other amounts paid to the related party (reimbursements, distributions)</li>
              <li><strong>Line 15(b):</strong> Other amounts received from the related party (capital contributions, expense payments)</li>
              <li><strong>Lines 16-22:</strong> Loan balances and accounts payable/receivable</li>
            </ul>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>Our filer handles this automatically:</strong> When you use our{" "}
                <Link href="/filer" className="underline hover:text-green-900">
                  Form 5472 filer
                </Link>
                , Part V is populated based on the transaction information you enter. No need to
                figure out which lines to use.
              </p>
            </div>
          </section>

          {/* Arm's Length Principle */}
          <section id="arms-length" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Arm&apos;s Length Principle
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The arm&apos;s length principle (IRC Section 482) requires that transactions between
              related parties be priced as if they occurred between unrelated parties in comparable
              circumstances.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              For most foreign-owned single-member LLCs, applying the arm&apos;s length principle
              is straightforward:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li><strong>Capital contributions:</strong> These are at face value — there&apos;s no pricing issue.</li>
              <li><strong>Expense reimbursements:</strong> Reimburse at actual cost — keep receipts.</li>
              <li><strong>Loans:</strong> Charge a market-rate interest. The IRS publishes Applicable Federal Rates (AFR) monthly.</li>
              <li><strong>Services:</strong> If the owner provides services to the LLC, the compensation should reflect market rates.</li>
              <li><strong>IP licensing:</strong> If the LLC uses the owner&apos;s intellectual property, any royalties should be at market rates.</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>For most small LLCs:</strong> The transactions are simple (contributions and
                reimbursements) and the arm&apos;s length standard is easily met. Complex transfer
                pricing studies are typically only needed for larger businesses with significant
                intercompany transactions.
              </p>
            </div>
          </section>

          {/* Documentation Requirements */}
          <section id="documentation" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Documentation Requirements
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The IRS requires that you maintain records sufficient to establish the correctness of
              each reported transaction. Good documentation protects you in an audit and strengthens
              reasonable cause arguments if penalties are assessed.
            </p>
            <div className="space-y-3">
              {[
                { title: "Bank Statements", desc: "Monthly statements showing all transfers between the owner and LLC." },
                { title: "Wire Transfer Records", desc: "Confirmation documents for each international transfer." },
                { title: "Invoices and Receipts", desc: "For any expenses the owner pays on behalf of the LLC." },
                { title: "Loan Agreements", desc: "Written promissory notes for any loans between the owner and LLC." },
                { title: "Operating Agreement", desc: "Your LLC's operating agreement defining contribution and distribution terms." },
                { title: "Transaction Log", desc: "A simple spreadsheet tracking each transaction with date, amount, description, and category." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Examples of Proper Documentation */}
          <section id="examples" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Examples of Proper Documentation
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Example 1: Capital Contribution</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Owner wires $10,000 from their personal bank to the LLC&apos;s U.S. bank account.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500">
                  <strong>Documentation:</strong> Wire transfer confirmation, bank statement showing
                  receipt, note in transaction log: &quot;Jan 15, 2025 — $10,000 capital contribution
                  from owner, wire ref #12345.&quot;
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Example 2: Owner Pays for Software</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Owner pays $1,200 for annual software subscription used by the LLC.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500">
                  <strong>Documentation:</strong> Software invoice, credit card statement, note in
                  transaction log: &quot;Mar 1, 2025 — Owner paid $1,200 for SaaS subscription on
                  behalf of LLC.&quot; Report as amount received from related party.
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Example 3: Owner Loan to LLC</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Owner lends $50,000 to the LLC at 5% annual interest.
                </p>
                <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500">
                  <strong>Documentation:</strong> Signed promissory note with loan terms (amount,
                  interest rate, repayment schedule), wire transfer records, interest calculation
                  worksheet, comparison to IRS AFR rates showing the rate is at or above market.
                </div>
              </div>
            </div>
          </section>

          {/* Penalties */}
          <section id="penalties" className="bg-red-50 rounded-2xl border border-red-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-red-900 mb-3">
              Penalties for Non-Compliance
            </h2>
            <p className="text-sm text-red-800 leading-relaxed mb-3">
              Transfer pricing non-compliance for foreign-owned LLCs primarily manifests as Form 5472
              penalties:
            </p>
            <ul className="list-disc list-inside text-sm text-red-800 space-y-1.5 ml-2 mb-4">
              <li><strong>$25,000 per form</strong> for failure to file, late filing, or filing with incomplete/inaccurate information</li>
              <li><strong>Additional $25,000</strong> for each 30-day period of continued non-compliance after IRS notice</li>
              <li><strong>Record-keeping penalties</strong> for failure to maintain adequate documentation</li>
              <li><strong>IRC Section 482 adjustments</strong> — the IRS can reallocate income between the owner and LLC if pricing is not at arm&apos;s length</li>
            </ul>
            <p className="text-sm text-red-800 leading-relaxed">
              Accurate, well-documented reporting on Form 5472 is your best protection against
              transfer pricing penalties.
            </p>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Tools
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/filer"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">File Form 5472</h3>
                <p className="text-xs text-gray-500 mt-1">Our filer handles Part V transaction reporting automatically.</p>
              </Link>
              <Link
                href="/tools/transaction-categorizer"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Transaction Categorizer</h3>
                <p className="text-xs text-gray-500 mt-1">Categorize your related-party transactions for Form 5472.</p>
              </Link>
              <Link
                href="/guides/form-5472-amendment"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Form 5472 Amendment Guide</h3>
                <p className="text-xs text-gray-500 mt-1">Need to correct Part V transactions on a prior filing?</p>
              </Link>
              <Link
                href="/tools/penalty-calculator"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Penalty Calculator</h3>
                <p className="text-xs text-gray-500 mt-1">Estimate potential penalties for non-compliance.</p>
              </Link>
            </div>
          </section>

          {/* doola CTA */}
          <div className="bg-white rounded-2xl border-2 border-indigo-600 shadow-lg p-6 md:p-8 mb-6 relative">
            <div className="absolute -top-3 left-5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Let doola Handle Your Bookkeeping
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Proper bookkeeping is the foundation of transfer pricing compliance. doola provides
              dedicated bookkeeping for foreign-owned LLCs — every transaction categorized and
              ready for Form 5472 reporting.
            </p>
            <a
              href="https://partnersps.doola.com/foreignllctax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              Explore doola Bookkeeping
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              File Form 5472 with Part V Done Right
            </h2>
            <p className="text-sm text-blue-100 mb-6 max-w-lg mx-auto">
              Our guided filer walks you through Part V transaction reporting step by step.
              Enter your transactions and we handle the rest.
            </p>
            <Link
              href="/filer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-[15px] shadow-lg"
            >
              Start Filing — $49
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
