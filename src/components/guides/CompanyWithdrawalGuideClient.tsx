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

function WarningIcon() {
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
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function CompanyWithdrawalGuideClient() {
  const TOC = [
    { id: "why-separate", label: "Why You Cannot Mix Funds" },
    { id: "distributions", label: "The Correct Way: Owner Distributions" },
    { id: "tax-reporting", label: "Tax Reporting Requirements" },
    { id: "transfer-overview", label: "Transfer Methods Overview" },
    { id: "method-mercury-wise", label: "Step 1: Mercury \u2192 Wise" },
    { id: "method-fps", label: "Method A: Small Amounts via FPS (Instant)" },
    { id: "method-swift", label: "Method B: Large Amounts via SWIFT" },
    { id: "method-cny", label: "Method C: Convert to CNY" },
    { id: "best-practices", label: "Best Practices" },
    { id: "faq", label: "FAQ" },
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
            <span className="text-gray-600">Company to Personal Withdrawal</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Financial Operations
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Withdraw Funds from Your US LLC to Personal Account
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A compliant guide to making owner distributions — moving money from your business
              bank to your personal bank safely and legally
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="space-y-3 mb-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-3">
                Important Warnings
              </h2>
              <ul className="space-y-2 text-sm text-amber-900">
                <li className="flex items-start gap-2">
                  <WarningIcon />
                  Company funds should ONLY be used for business expenses
                </li>
                <li className="flex items-start gap-2">
                  <WarningIcon />
                  Using company money for personal spending risks piercing the corporate veil
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
                Key Takeaways
              </h2>
              <ul className="space-y-2 text-sm text-blue-900">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  The correct method: formal owner distribution from company to personal account
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Must report all distributions on Form 5472 Part V
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Common path: Mercury → Wise → Personal bank (HK, mainland, etc.)
                </li>
              </ul>
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

          {/* Why You Cannot Mix Funds */}
          <section id="why-separate" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why You Cannot Mix Funds
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Warning:</strong> Using LLC funds for personal purchases can pierce the
                corporate veil — you lose limited liability protection. This means your personal
                assets could be exposed to business debts and lawsuits.
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Your LLC is a separate legal entity. Its bank account is <strong>not</strong> your
              personal wallet. Mixing business and personal funds — known as commingling — is one
              of the fastest ways to lose your liability protection.
            </p>

            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-red-900 mb-2">What NOT to Do</h3>
              <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                <li>Buying personal items with the business debit card</li>
                <li>Paying personal bills from the business account</li>
                <li>Charging personal subscriptions (Netflix, gym, etc.) to the business</li>
                <li>Using the business account as your everyday spending account</li>
              </ul>
            </div>
          </section>

          {/* The Correct Way: Owner Distributions */}
          <section id="distributions" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Correct Way: Owner Distributions
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              To use company profits personally, you make a formal <strong>distribution</strong>{" "}
              (also called an owner draw or member distribution). This is a transfer from your
              company bank account to your personal bank account.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The transfer is treated as a distribution to you as the LLC member. This is
              completely standard and expected — every LLC owner does this. You just need to do
              it properly and document it.
            </p>
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-green-900 mb-2">The Right Way</h3>
              <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                <li>Transfer from business bank → personal bank as a formal distribution</li>
                <li>Record the date, amount, and description in your books</li>
                <li>Label it as &ldquo;Owner Distribution&rdquo; or &ldquo;Member Draw&rdquo;</li>
                <li>Then spend from your personal account however you like</li>
              </ul>
            </div>
          </section>

          {/* Tax Reporting Requirements */}
          <section id="tax-reporting" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Tax Reporting Requirements
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              After making distributions, you must report them on{" "}
              <strong>Form 5472 Part V (Reportable Transactions)</strong>. This form is required
              for all foreign-owned single-member LLCs.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">What to Record</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li><strong>Date</strong> of each distribution</li>
                <li><strong>Amount</strong> transferred</li>
                <li><strong>Description</strong> (e.g., &ldquo;Q1 2026 Owner Distribution&rdquo;)</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900 leading-relaxed">
                Our{" "}
                <Link href="/filer" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  Form 5472 filing service
                </Link>{" "}
                handles this automatically — just enter your distributions and we generate the
                correct Form 5472 with all reportable transactions filled in.
              </p>
            </div>
          </section>

          {/* Transfer Methods Overview */}
          <section id="transfer-overview" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Transfer Methods Overview
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The most common path for Chinese founders:{" "}
              <strong>Mercury (US bank) → Wise (intermediary) → Personal bank</strong>.
            </p>

            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Why Wise as Intermediary?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mercury limits international SWIFT transfers for companies that are not primarily
                  operating in the US. Wise specializes in international transfers and offers
                  competitive exchange rates with transparent fees.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Why Not Send Directly from Stripe?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mercury is an FDIC-insured real bank. Wise is a financial services company.
                  Keep your funds in Mercury for safety, and use Wise only for the transfer step.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              If you don&apos;t have Wise yet,{" "}
              <Link href="/go/wise" className="text-blue-600 hover:text-blue-800 underline">
                sign up here
              </Link>{" "}
              for a fee-free first transfer.
            </p>
          </section>

          {/* Step 1: Mercury → Wise */}
          <section id="method-mercury-wise" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 1: Mercury → Wise
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              First, move funds from your Mercury business bank to your Wise account. You have
              two options.
            </p>

            <div className="space-y-4 mb-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Option A: ACH Transfer</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Set up ACH pull from the Wise side</li>
                  <li>Takes 2-3 business days</li>
                  <li>Lower fees (often free)</li>
                  <li>Best for non-urgent transfers</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Option B: Domestic Wire</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Send from Mercury using Wise&apos;s USD wire details</li>
                  <li>Same-day or next-day arrival</li>
                  <li>$5 domestic wire fee from Mercury</li>
                  <li>Best for urgent transfers</li>
                </ul>
              </div>
            </div>

            {/* Fee comparison mini-table */}
            <div className="hidden md:block overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Method</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Speed</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">ACH</td>
                    <td className="py-3 px-3 text-gray-600">2-3 business days</td>
                    <td className="py-3 px-3 text-gray-600">Free</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Domestic Wire</td>
                    <td className="py-3 px-3 text-gray-600">Same day</td>
                    <td className="py-3 px-3 text-gray-600">$5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4 mb-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">ACH</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Speed:</span> <span className="text-gray-800">2-3 business days</span></p>
                  <p><span className="text-gray-500">Cost:</span> <span className="text-gray-800">Free</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Domestic Wire</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Speed:</span> <span className="text-gray-800">Same day</span></p>
                  <p><span className="text-gray-500">Cost:</span> <span className="text-gray-800">$5</span></p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Enter Wise&apos;s USD account details in Mercury&apos;s Send function. Wise
              provides these details in your account under &ldquo;USD balance &gt; Add funds.&rdquo;
            </p>
          </section>

          {/* Method A: Small Amounts via FPS */}
          <section id="method-fps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Method A: Small Amounts via FPS (Instant)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Convert USD to HKD via Wise and send through FPS (Faster Payment System) to your
              Hong Kong bank account. Near-instant arrival.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Details</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>Currency: USD → HKD</li>
                <li>Speed: Near-instant</li>
                <li>Fee: Proportional to amount — more expensive for larger sums</li>
                <li>Requires HK bank with FPS registered (ZA Bank, HSBC, Bank of China HK)</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>Best for:</strong> Amounts under $1,000 where speed matters and
                percentage-based fees are acceptable.
              </p>
            </div>
          </section>

          {/* Method B: Large Amounts via SWIFT */}
          <section id="method-swift" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Method B: Large Amounts via SWIFT
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Send USD via SWIFT through Wise to your HK or mainland bank&apos;s USD account.
              Fixed fee regardless of amount.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Details</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>Currency: USD → USD (no conversion)</li>
                <li>Speed: 1-3 business days</li>
                <li>Fee: Fixed ~$14 regardless of amount</li>
                <li>Receives into your bank&apos;s USD savings/current account</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>Best for:</strong> Amounts over $1,000 where the fixed $14 fee beats the
                percentage-based FPS fee.
              </p>
            </div>
          </section>

          {/* Method C: Convert to CNY */}
          <section id="method-cny" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Method C: Convert to CNY
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Convert USD to CNY via Wise and send to your Alipay, WeChat, or Chinese bank
              account. Wise offers competitive exchange rates compared to traditional banks.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Details</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>Currency: USD → CNY</li>
                <li>Exchange rate: Competitive mid-market rate via Wise</li>
                <li>Recipients: Alipay, WeChat Pay, Chinese bank accounts</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">Important Compliance Warnings</h3>
              <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                <li>Large amounts may require income proof documentation</li>
                <li>You must declare this income in China — 20% personal income tax may apply</li>
                <li>Amounts above certain thresholds trigger compliance checks</li>
                <li>Keep all transfer records for tax filing purposes</li>
              </ul>
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Best Practices
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Never mix personal and business expenses — keep accounts completely separate
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Document every distribution with date, amount, and description
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Make regular distributions (monthly or quarterly) instead of large lump sums
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Keep a buffer in your business account for upcoming expenses and taxes
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  File Form 5472 accurately with all distributions reported
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              Use our{" "}
              <Link href="/filer" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                Form 5472 filing service
              </Link>{" "}
              to ensure all your distributions are properly reported to the IRS.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              FAQ
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  How much can I withdraw?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  As much as is available in your business account, as long as you keep a
                  reasonable buffer for upcoming expenses, taxes, and operating costs. There is no
                  legal maximum for owner distributions.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Do I owe US tax on distributions?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For a single-member LLC with a foreign owner, distributions are generally not
                  subject to US income tax. However, you must report all distributions on Form
                  5472. The LLC itself is treated as a disregarded entity for US tax purposes.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  What about taxes in my home country?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You are generally required to report worldwide income in your country of tax
                  residence. This includes income earned through your US LLC. Consult a local tax
                  professional for specific guidance on reporting requirements.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Can I pay myself a salary instead?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For a single-member LLC, distributions are simpler and more common. Paying
                  yourself a salary creates additional tax complexity — you would need to set up
                  payroll, withhold taxes, and file payroll returns. Most foreign-owned
                  single-member LLCs use distributions instead.
                </p>
              </div>
            </div>
          </section>

          {/* Tip */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>Pro Tip:</strong> Set up a recurring monthly or quarterly distribution on a
              fixed schedule. This creates a clean paper trail and makes Form 5472 reporting much
              easier at tax time. Avoid irregular large withdrawals that may trigger additional
              compliance questions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
