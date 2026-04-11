"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

export function ForeignLlcBookkeepingGuideClient() {
  const TOC = [
    { id: "why-bookkeeping", label: "Why Bookkeeping Matters for Foreign LLCs" },
    { id: "what-to-track", label: "What You Need to Track" },
    { id: "chart-of-accounts", label: "Chart of Accounts for Foreign LLCs" },
    { id: "tools", label: "Recommended Tools" },
    { id: "monthly-habits", label: "Monthly Bookkeeping Habits" },
    { id: "organizing-receipts", label: "Organizing Receipts" },
    { id: "preparing-for-5472", label: "Preparing for Form 5472 Season" },
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
            <span className="text-gray-600">Bookkeeping</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100/80 text-purple-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Bookkeeping Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              A Simple Bookkeeping System for Foreign-Owned LLCs
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              You do not need an accounting degree to keep clean books. Here is a practical system
              that takes 30 minutes a month and makes tax season painless.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-purple-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Track every dollar that moves between you and your LLC
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                A spreadsheet is sufficient for most single-member foreign LLCs
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Monthly bookkeeping takes 30 minutes and prevents tax season chaos
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Every transaction category maps directly to a line on Form 5472
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

          {/* Why Bookkeeping */}
          <section id="why-bookkeeping" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Bookkeeping Matters for Foreign LLCs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Form 5472 requires you to report the exact dollar amounts of every transaction between
              your LLC and its foreign owner (that is you). The IRS does not accept estimates or
              approximations. If they audit your filing, they will ask for documentation supporting
              every number.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Good bookkeeping is not about complexity — it is about consistency. The goal is simple:
              at any point during the year, you should be able to answer the question &quot;how much
              money has moved between me and my LLC, and why?&quot;
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Common mistake:</strong> Many LLC owners dump all transactions into a single
                &quot;miscellaneous&quot; category and try to sort them out at tax time. This leads to
                inaccurate Form 5472 filings and panic in April. Spend 30 minutes a month now to
                save hours of stress later.
              </p>
            </div>
          </section>

          {/* What to Track */}
          <section id="what-to-track" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What You Need to Track
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              For a foreign-owned single-member LLC, you need to record every transaction that
              involves your LLC. These fall into a few categories:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Capital Contributions",
                  desc: "Money you (the foreign owner) put into the LLC. This includes initial funding, additional investments, and any personal funds used for business expenses.",
                  example: "You transfer $5,000 from your personal account to your LLC bank account to cover startup costs.",
                  form5472: "Part IV, Line 13 — Capital contributions",
                },
                {
                  title: "Distributions / Withdrawals",
                  desc: "Money the LLC sends back to you. This includes profit distributions, return of capital, and any funds transferred from the LLC to your personal accounts.",
                  example: "Your LLC sends $3,000 to your personal account as a profit distribution.",
                  form5472: "Part IV, Line 17 — Other amounts paid or accrued to the foreign related party",
                },
                {
                  title: "Loans (Either Direction)",
                  desc: "Money lent from you to the LLC or from the LLC to you. These must be documented with proper loan agreements including interest rates and repayment terms.",
                  example: "You lend your LLC $10,000 at 3% interest to cover equipment purchases.",
                  form5472: "Part IV, Lines 9-12 — Loan-related transactions",
                },
                {
                  title: "Management / Service Fees",
                  desc: "Payments for services you provide to the LLC (or vice versa). If you manage the LLC, any compensation or management fee is a reportable transaction.",
                  example: "The LLC pays you $2,000/month as a management fee for running operations.",
                  form5472: "Part IV, Lines 4-6 — Compensation and service fees",
                },
                {
                  title: "Rent and Royalties",
                  desc: "Payments for use of property, intellectual property, or other assets between you and the LLC.",
                  example: "The LLC pays you $500/month to license your software IP.",
                  form5472: "Part IV, Lines 7-8 — Rents, royalties, and license fees",
                },
                {
                  title: "Operating Expenses (Third-Party)",
                  desc: "Expenses paid to unrelated parties — hosting, software, marketing, legal fees. These are not reportable on Form 5472 but should be tracked for your records.",
                  example: "LLC pays $200/month for web hosting to a third-party provider.",
                  form5472: "Not reported on Form 5472 (third-party transactions)",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-xs text-gray-500 italic mb-1">Example: {item.example}</p>
                  <p className="text-xs text-blue-600 font-medium">{item.form5472}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Chart of Accounts */}
          <section id="chart-of-accounts" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Chart of Accounts for Foreign LLCs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A chart of accounts is simply a list of categories you use to classify transactions.
              For a foreign-owned LLC, keep it simple. Here is a starter chart:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Account</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Use For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { account: "Business Checking", type: "Asset", use: "Main LLC bank account balance" },
                    { account: "Owner Capital", type: "Equity", use: "Money invested by the foreign owner" },
                    { account: "Owner Draws", type: "Equity", use: "Money withdrawn by the foreign owner" },
                    { account: "Owner Loan Payable", type: "Liability", use: "Loans from the owner to the LLC" },
                    { account: "Service Revenue", type: "Revenue", use: "Income from services or products" },
                    { account: "Management Fees", type: "Expense", use: "Fees paid to the owner for management" },
                    { account: "Software & Hosting", type: "Expense", use: "SaaS tools, servers, domains" },
                    { account: "Professional Services", type: "Expense", use: "Legal, accounting, registered agent" },
                    { account: "Marketing", type: "Expense", use: "Advertising, social media, content" },
                    { account: "Bank Fees", type: "Expense", use: "Wire fees, account maintenance" },
                    { account: "Office & Supplies", type: "Expense", use: "Equipment, supplies, subscriptions" },
                  ].map((row) => (
                    <tr key={row.account} className="border-b border-gray-100">
                      <td className="py-2.5 px-3 font-medium text-gray-800">{row.account}</td>
                      <td className="py-2.5 px-3 text-gray-600">{row.type}</td>
                      <td className="py-2.5 px-3 text-gray-600">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              You can add more accounts as needed, but start simple. It is easier to split a
              category later than to merge them.
            </p>
          </section>

          {/* Tools */}
          <section id="tools" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Recommended Tools
            </h2>
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  Foreign LLC Ledger (Coming Soon)
                </h3>
                <p className="text-sm text-blue-800">
                  We are building a purpose-built ledger for foreign-owned LLCs that maps directly
                  to Form 5472 categories. Track transactions throughout the year, and when tax
                  season arrives, export your data directly into our filer. Stay tuned.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Google Sheets / Excel</h3>
                <p className="text-sm text-gray-600">
                  A simple spreadsheet works perfectly for most single-member LLCs. Create columns
                  for date, description, amount, category, and whether it is a related-party
                  transaction. Free and accessible from anywhere.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Wave Accounting</h3>
                <p className="text-sm text-gray-600">
                  Free cloud accounting software. Good for LLCs with more transactions. Connects
                  to your bank account for automatic imports. Overkill for most foreign LLCs with
                  simple structures.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">QuickBooks Online</h3>
                <p className="text-sm text-gray-600">
                  Industry standard, but starts at $30/month. Only worth it if your LLC has
                  significant volume (50+ transactions/month) or you need invoicing and payroll
                  features.
                </p>
              </div>
            </div>
          </section>

          {/* Monthly Habits */}
          <section id="monthly-habits" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Monthly Bookkeeping Habits (30 Minutes)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Set aside 30 minutes at the end of each month. Here is exactly what to do:
            </p>
            <div className="space-y-3">
              {[
                { step: "1", title: "Download bank statement", desc: "Export your LLC bank statement for the month. Most banks let you download CSV or PDF.", time: "2 min" },
                { step: "2", title: "Record each transaction", desc: "Enter each transaction into your ledger with date, amount, description, and category. Flag related-party transactions.", time: "10 min" },
                { step: "3", title: "Categorize expenses", desc: "Assign each expense to the correct account from your chart of accounts. Be consistent month to month.", time: "5 min" },
                { step: "4", title: "Reconcile bank balance", desc: "Verify that your ledger balance matches your bank statement ending balance. If they do not match, find the discrepancy.", time: "5 min" },
                { step: "5", title: "Save receipts", desc: "Ensure every expense over $25 has a receipt saved in your digital filing system. Screenshot or photograph paper receipts.", time: "5 min" },
                { step: "6", title: "Note any owner transactions", desc: "Specifically highlight any money that moved between you personally and the LLC. These go on Form 5472.", time: "3 min" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Organizing Receipts */}
          <section id="organizing-receipts" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Organizing Receipts
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The IRS can request documentation for any transaction reported on Form 5472. A simple
              folder structure keeps everything accessible:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm text-gray-700">
              <p>LLC-Name/</p>
              <p className="ml-4">2025/</p>
              <p className="ml-8">01-January/</p>
              <p className="ml-8">02-February/</p>
              <p className="ml-8">...</p>
              <p className="ml-8">12-December/</p>
              <p className="ml-8">bank-statements/</p>
              <p className="ml-8">tax-filings/</p>
              <p className="ml-8">formation-docs/</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              Use Google Drive, Dropbox, or any cloud storage. The key is consistency — every receipt
              goes into the correct month folder immediately. Name files descriptively:
              &quot;2025-03-15-hosting-aws-$200.pdf&quot; is much better than &quot;receipt.pdf&quot;.
            </p>
          </section>

          {/* Preparing for Form 5472 */}
          <section id="preparing-for-5472" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Preparing for Form 5472 Season
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you have been doing monthly bookkeeping, tax season preparation should take less
              than an hour. Here is the process:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>Total all related-party transactions for the year by category</li>
              <li>Verify totals match your bank statements</li>
              <li>Identify the Form 5472 Part IV line for each transaction type</li>
              <li>Gather your LLC formation documents (name, EIN, address)</li>
              <li>Gather your personal information (name, address, country, reference ID)</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>With our filer:</strong> Enter your transaction totals into our
                step-by-step Form 5472 filer and it will place everything on the correct lines
                automatically.{" "}
                <Link href="/filer" className="underline hover:text-green-900">
                  Start your filing here.
                </Link>
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Set up your monthly compliance routine", href: "/guides/monthly-compliance-routine" },
                { text: "Read the April filing season playbook", href: "/guides/filing-season-playbook" },
                { text: "Avoid common Form 5472 mistakes", href: "/guides/form-5472-common-mistakes" },
                { text: "File your Form 5472 ($49)", href: "/filer" },
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
