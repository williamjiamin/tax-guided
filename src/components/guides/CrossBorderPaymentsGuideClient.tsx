"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Shared icon                                                        */
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

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function CrossBorderPaymentsGuideClient() {
  const TOC = [
    { id: "overview", label: "Payment Gateway vs Transfer Service" },
    { id: "stripe", label: "Stripe" },
    { id: "paypal", label: "PayPal" },
    { id: "wise", label: "Wise (for Payouts)" },
    { id: "paddle", label: "Paddle & Lemon Squeezy" },
    { id: "comparison", label: "Comparison Table" },
    { id: "recommendation", label: "Our Recommendation" },
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
            <span className="text-gray-600">Cross-Border Payments</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Payment Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Cross-Border Payment Platform Comparison
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Stripe vs PayPal vs Wise vs Paddle — fees, features, and which is best for your
              foreign-owned US LLC
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
                Stripe: 2.9% + $0.30 + 1% cross-border + 1% currency conversion — best for SaaS
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                PayPal: 3.49% + $0.49 + 1.5% cross-border — expensive but widely recognized
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Wise: best for international payouts, not a payment gateway
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Paddle/Lemon Squeezy: ~5% all-in but handles tax compliance automatically
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

          {/* Payment Gateway vs Transfer Service */}
          <section id="overview" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Payment Gateway vs Transfer Service
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When running a US LLC from overseas, you need two separate things: a{" "}
              <strong>payment gateway</strong> to accept customer payments, and a{" "}
              <strong>transfer solution</strong> to move money from your business bank to your
              personal account. These are different tools for different jobs.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">Payment Gateways</h3>
                <p className="text-sm text-blue-800">
                  Accept credit cards, process subscriptions, handle refunds. Examples: Stripe,
                  PayPal, Paddle. Money goes into your US business bank account.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Transfer Services</h3>
                <p className="text-sm text-gray-600">
                  Move money internationally between bank accounts. Example: Wise. Used to send
                  owner distributions from your US business bank to your personal bank overseas.
                </p>
              </div>
            </div>
          </section>

          {/* Stripe */}
          <section id="stripe" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Stripe
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The most popular payment processor for SaaS and digital products. Excellent developer
              tools and the broadest feature set of any payment gateway.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Fee Structure</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li><strong>Domestic US cards:</strong> 2.9% + $0.30 per transaction</li>
                <li><strong>International cards:</strong> +1% additional</li>
                <li><strong>Currency conversion:</strong> +1% additional</li>
                <li><strong>Payout to US bank:</strong> Free (2-day rolling basis)</li>
              </ul>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Pros</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Best-in-class developer tools and documentation</li>
                  <li>Radar fraud prevention included</li>
                  <li>Supports subscriptions, invoicing, and one-time payments</li>
                  <li>Widely trusted by customers</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">Cons</h3>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                  <li>Strict risk controls — new accounts may face holds or freezes</li>
                  <li>Cross-border + currency fees add up for international sellers</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-blue-900">
                <strong>Best for:</strong> SaaS, digital products, subscriptions
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-4">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Note:</strong> Stripe Atlas credits have been reduced from $100K to $2,500.
                If you&apos;re considering Stripe Atlas for LLC formation, factor this into your
                decision.
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              See our{" "}
              <Link href="/guides/stripe-setup" className="text-blue-600 hover:text-blue-800 underline">
                Stripe Setup Guide
              </Link>{" "}
              and{" "}
              <Link href="/guides/stripe-account-tips" className="text-blue-600 hover:text-blue-800 underline">
                Account Health Guide
              </Link>{" "}
              for detailed instructions.
            </p>
          </section>

          {/* PayPal */}
          <section id="paypal" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              PayPal
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The most widely recognized payment brand globally. Higher fees than Stripe but
              offers buyer protection that some customers prefer.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Fee Structure</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li><strong>Standard rate:</strong> 3.49% + $0.49 per transaction</li>
                <li><strong>Cross-border:</strong> +1.5% additional</li>
                <li><strong>Currency conversion:</strong> 3-4% above mid-market rate</li>
              </ul>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Pros</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Strong brand recognition worldwide</li>
                  <li>Buyer protection builds customer trust</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">Cons</h3>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                  <li>Most expensive total fees of any major processor</li>
                  <li>Frequent account freezes and holds</li>
                  <li>Poor developer experience compared to Stripe</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>Best for:</strong> Marketplaces, customers who insist on PayPal
              </p>
            </div>
          </section>

          {/* Wise */}
          <section id="wise" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Wise (for Payouts)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Wise is <strong>not</strong> a payment gateway — it is an international transfer
              service for moving money between bank accounts. Use it for payouts from your US
              business bank to your personal bank overseas.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Fee Structure</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li><strong>Currency conversion:</strong> ~0.5-1.5% (mid-market rate)</li>
                <li><strong>USD SWIFT transfer:</strong> Fixed $14 fee</li>
                <li><strong>FPS to Hong Kong:</strong> Near-instant, proportional fee</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-blue-900">
                <strong>Best for:</strong> Moving money from US business bank to personal overseas
                bank (owner distributions)
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Sign up through{" "}
              <Link href="/go/wise" className="text-blue-600 hover:text-blue-800 underline">
                our link
              </Link>{" "}
              to get your first transfer fee-free.
            </p>
          </section>

          {/* Paddle & Lemon Squeezy */}
          <section id="paddle" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Paddle & Lemon Squeezy
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Merchant of Record (MoR) services. They handle everything — payment processing,
              sales tax, VAT collection, invoicing — so you don&apos;t have to.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Fee Structure</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li><strong>All-in rate:</strong> ~5% + $0.50 per transaction</li>
                <li><strong>Includes:</strong> Payment processing, sales tax, VAT, invoicing</li>
              </ul>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Pros</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Zero tax compliance headache — they handle everything</li>
                  <li>No chargebacks (they absorb them as merchant of record)</li>
                  <li>Simple integration</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">Cons</h3>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                  <li>Higher effective rate than Stripe</li>
                  <li>Less control over the checkout experience</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>Best for:</strong> Solo developers who don&apos;t want to deal with tax
                compliance work
              </p>
            </div>
          </section>

          {/* Comparison Table */}
          <section id="comparison" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Comparison Table
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Side-by-side comparison of all platforms.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Base Fee</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Cross-Border</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Currency Conv.</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Tax Handling</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Stripe</td>
                    <td className="py-3 px-3 text-gray-600">2.9%+$0.30</td>
                    <td className="py-3 px-3 text-gray-600">+1%</td>
                    <td className="py-3 px-3 text-gray-600">+1%</td>
                    <td className="py-3 px-3 text-gray-600">Manual</td>
                    <td className="py-3 px-3 text-gray-600">SaaS/digital</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">PayPal</td>
                    <td className="py-3 px-3 text-gray-600">3.49%+$0.49</td>
                    <td className="py-3 px-3 text-gray-600">+1.5%</td>
                    <td className="py-3 px-3 text-gray-600">3-4%</td>
                    <td className="py-3 px-3 text-gray-600">Manual</td>
                    <td className="py-3 px-3 text-gray-600">Marketplace</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Wise</td>
                    <td className="py-3 px-3 text-gray-600">Transfer only</td>
                    <td className="py-3 px-3 text-gray-600">N/A</td>
                    <td className="py-3 px-3 text-gray-600">0.5-1.5%</td>
                    <td className="py-3 px-3 text-gray-600">N/A</td>
                    <td className="py-3 px-3 text-gray-600">Payouts</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Paddle</td>
                    <td className="py-3 px-3 text-gray-600">~5%+$0.50</td>
                    <td className="py-3 px-3 text-gray-600">Included</td>
                    <td className="py-3 px-3 text-gray-600">Included</td>
                    <td className="py-3 px-3 text-gray-600">Automatic</td>
                    <td className="py-3 px-3 text-gray-600">SaaS (hands-off)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Lemon Squeezy</td>
                    <td className="py-3 px-3 text-gray-600">~5%+$0.50</td>
                    <td className="py-3 px-3 text-gray-600">Included</td>
                    <td className="py-3 px-3 text-gray-600">Included</td>
                    <td className="py-3 px-3 text-gray-600">Automatic</td>
                    <td className="py-3 px-3 text-gray-600">SaaS (hands-off)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4 mb-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Stripe</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Base Fee:</span> <span className="text-gray-800">2.9%+$0.30</span></p>
                  <p><span className="text-gray-500">Cross-Border:</span> <span className="text-gray-800">+1%</span></p>
                  <p><span className="text-gray-500">Currency Conv.:</span> <span className="text-gray-800">+1%</span></p>
                  <p><span className="text-gray-500">Tax Handling:</span> <span className="text-gray-800">Manual</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">SaaS/digital</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">PayPal</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Base Fee:</span> <span className="text-gray-800">3.49%+$0.49</span></p>
                  <p><span className="text-gray-500">Cross-Border:</span> <span className="text-gray-800">+1.5%</span></p>
                  <p><span className="text-gray-500">Currency Conv.:</span> <span className="text-gray-800">3-4%</span></p>
                  <p><span className="text-gray-500">Tax Handling:</span> <span className="text-gray-800">Manual</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">Marketplace</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Wise</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Base Fee:</span> <span className="text-gray-800">Transfer only</span></p>
                  <p><span className="text-gray-500">Cross-Border:</span> <span className="text-gray-800">N/A</span></p>
                  <p><span className="text-gray-500">Currency Conv.:</span> <span className="text-gray-800">0.5-1.5%</span></p>
                  <p><span className="text-gray-500">Tax Handling:</span> <span className="text-gray-800">N/A</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">Payouts</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Paddle</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Base Fee:</span> <span className="text-gray-800">~5%+$0.50</span></p>
                  <p><span className="text-gray-500">Cross-Border:</span> <span className="text-gray-800">Included</span></p>
                  <p><span className="text-gray-500">Currency Conv.:</span> <span className="text-gray-800">Included</span></p>
                  <p><span className="text-gray-500">Tax Handling:</span> <span className="text-gray-800">Automatic</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">SaaS (hands-off)</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Lemon Squeezy</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Base Fee:</span> <span className="text-gray-800">~5%+$0.50</span></p>
                  <p><span className="text-gray-500">Cross-Border:</span> <span className="text-gray-800">Included</span></p>
                  <p><span className="text-gray-500">Currency Conv.:</span> <span className="text-gray-800">Included</span></p>
                  <p><span className="text-gray-500">Tax Handling:</span> <span className="text-gray-800">Automatic</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">SaaS (hands-off)</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Recommendation */}
          <section id="recommendation" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Our Recommendation
            </h2>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">For Most Foreign LLCs</h3>
                <p className="text-sm text-green-800 leading-relaxed">
                  <strong>Stripe for payments + Wise for payouts.</strong> This combination gives
                  you the best developer tools, lowest effective fees for most use cases, and the
                  cheapest international transfer rates.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">Don&apos;t Want Tax Headaches?</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Use <strong>Paddle or Lemon Squeezy</strong>. The higher rate buys you complete
                  peace of mind — they handle sales tax, VAT, and invoicing automatically as your
                  merchant of record.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Pro Tip:</strong> Always have a backup payment processor. If your primary
                  account gets frozen (it happens), you need a way to keep accepting payments while
                  you resolve the issue.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              FAQ
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Which platform has the lowest fees?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For domestic US transactions, Stripe has the lowest fees at 2.9% + $0.30. For
                  international transactions with currency conversion, Paddle&apos;s all-in ~5%
                  rate can actually be competitive once you add Stripe&apos;s cross-border and
                  currency conversion fees together.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Can I use multiple platforms at the same time?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, and it&apos;s recommended. Many businesses use Stripe as their primary
                  processor and offer PayPal as an alternative for customers who prefer it. Having
                  multiple processors also protects you if one account gets frozen.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Do I need to collect sales tax?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  It depends on whether you have nexus in any US state. If you use Paddle or Lemon
                  Squeezy, they handle this for you. Otherwise, check your obligations with our{" "}
                  <Link href="/tools/sales-tax-nexus" className="text-blue-600 hover:text-blue-800 underline">
                    Sales Tax Nexus Tool
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Tip */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>Pro Tip:</strong> Set up your payment processor <strong>before</strong> you
              launch your product. Account verification and approval can take days or even weeks,
              especially for foreign-owned businesses. Don&apos;t wait until you have customers
              ready to pay.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
