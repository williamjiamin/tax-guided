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

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function StripeAccountTipsGuideClient() {
  const TOC = [
    { id: "why-risk-controls", label: "Why Stripe Has Strict Risk Controls" },
    { id: "common-triggers", label: "Common Risk Triggers" },
    { id: "warm-up", label: "Account Warm-Up Strategy" },
    { id: "website-requirements", label: "Website Requirements" },
    { id: "pricing-guidelines", label: "Pricing Guidelines for New Accounts" },
    { id: "account-restricted", label: "What to Do If Your Account Gets Restricted" },
    { id: "best-practices", label: "Best Practices Checklist" },
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
            <span className="text-gray-600">Stripe Account Tips</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Payment Management
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Stripe Account Health Guide — How to Avoid Risk Flags and Account Holds
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Essential tips to maintain a healthy Stripe account. Learn what triggers risk
              flags, how to build account reputation, and how to avoid payment holds.
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
                New accounts should ramp up revenue gradually — don&apos;t go from $0 to thousands immediately
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Keep dispute rate below 0.75% (Stripe threshold) and ideally below 0.5%
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Your website must look legitimate with privacy policy, terms of service, and contact info
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Subscription billing is flagged as higher risk — keep initial prices moderate
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                If your account gets restricted, appeal promptly and consider opening a second merchant account
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

          {/* Why Stripe Has Strict Risk Controls */}
          <section id="why-risk-controls" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Stripe Has Strict Risk Controls
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Stripe processes billions of dollars in payments globally and is responsible
              for protecting merchants, cardholders, and the broader payment ecosystem from
              fraud. Credit card fraud is a massive problem, and Stripe must proactively guard
              against chargebacks and fraudulent merchants.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Their machine learning systems continuously monitor transaction patterns and flag
              anything that looks unusual. This is a good thing overall — it keeps the payment
              ecosystem safe — but it means that legitimate businesses can sometimes get caught
              in the net.
            </p>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> Getting flagged does not mean you did anything wrong.
                It simply means Stripe&apos;s automated systems detected a pattern that warrants
                review. Understanding what triggers these flags helps you avoid them entirely.
              </p>
            </div>
          </section>

          {/* Common Risk Triggers */}
          <section id="common-triggers" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common Risk Triggers
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              These are the most common reasons Stripe flags or restricts an account. Avoiding
              these patterns will keep your account in good standing.
            </p>
            <div className="space-y-3">
              <div className="bg-red-50 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <WarningIcon />
                  <div>
                    <h3 className="text-sm font-semibold text-red-900 mb-1">Sudden high volume on a new account</h3>
                    <p className="text-sm text-red-800">
                      Going from zero revenue to thousands of dollars in a short period is the
                      single most common trigger. New accounts are expected to ramp up gradually.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <WarningIcon />
                  <div>
                    <h3 className="text-sm font-semibold text-red-900 mb-1">High dispute/chargeback rate (&gt;0.75%)</h3>
                    <p className="text-sm text-red-800">
                      Stripe&apos;s threshold is 0.75% dispute rate. Exceeding this triggers automatic
                      review and potential account restrictions. Keep your rate below 0.5% for safety.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <WarningIcon />
                  <div>
                    <h3 className="text-sm font-semibold text-red-900 mb-1">High refund ratio</h3>
                    <p className="text-sm text-red-800">
                      A high percentage of refunds signals potential customer dissatisfaction or
                      product quality issues. Keep refund rates reasonable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <WarningIcon />
                  <div>
                    <h3 className="text-sm font-semibold text-red-900 mb-1">Unprofessional or suspicious website</h3>
                    <p className="text-sm text-red-800">
                      Stripe reviews your website. If it looks incomplete, lacks basic pages
                      (privacy policy, terms), or has a vague product description, it raises red flags.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <WarningIcon />
                  <div>
                    <h3 className="text-sm font-semibold text-red-900 mb-1">Prohibited business types</h3>
                    <p className="text-sm text-red-800">
                      Stripe has a list of restricted businesses. Check stripe.com/legal/restricted-businesses
                      to make sure your business type is allowed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <WarningIcon />
                  <div>
                    <h3 className="text-sm font-semibold text-red-900 mb-1">Subscription/recurring billing</h3>
                    <p className="text-sm text-red-800">
                      Subscription businesses are flagged as a higher risk category because they
                      generate more chargebacks on average. This does not mean you cannot do
                      subscriptions — just be extra careful with pricing and customer communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Account Warm-Up Strategy */}
          <section id="warm-up" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Account Warm-Up Strategy
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The most effective way to avoid risk flags is to gradually build your transaction
              history. Think of it like building a credit score — start small and scale up.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">First 1-2 Months</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Start with small transactions from known and trusted customers</li>
                  <li>Do not publicly launch with full pricing immediately</li>
                  <li>Process a handful of transactions per week to establish a pattern</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Months 2-3</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Gradually increase transaction volume</li>
                  <li>Begin onboarding real customers at moderate price points</li>
                  <li>Monitor your dispute rate and keep it at zero</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">After Month 3</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>With a clean transaction history, you can scale more aggressively</li>
                  <li>Raise prices and increase volume as needed</li>
                  <li>Your account now has established reputation with Stripe</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Target:</strong> Build a clean transaction history with zero disputes
                before scaling. A few weeks of low-volume, clean transactions goes a long way
                toward establishing account trust.
              </p>
            </div>
          </section>

          {/* Website Requirements */}
          <section id="website-requirements" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Website Requirements
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Stripe reviews your website both during initial activation and periodically
              afterward. Your website is a key factor in how Stripe assesses your risk level.
            </p>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <p className="font-semibold text-gray-800">Your website must have:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>Privacy Policy page</strong> — explains how you handle customer data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>Terms of Service page</strong> — outlines your business terms and conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>Contact information</strong> — email address and US phone number</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>Clear product/service description</strong> — visitors should immediately understand what you sell</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>Professional appearance</strong> — design does not need to be fancy, but the content needs to be clear and complete</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Tip:</strong> If your business model might seem unusual to a payment
                  processor (e.g., digital products, courses, consulting), do not submit your
                  main product site for review if it could raise questions. Instead, use a clean
                  company landing page that clearly describes what your business does.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Guidelines for New Accounts */}
          <section id="pricing-guidelines" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Pricing Guidelines for New Accounts
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              High-ticket items on a brand-new account are more likely to trigger risk flags.
              These are not hard rules, but patterns that reduce your risk of being flagged.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Subscription products</h3>
                <p className="text-sm text-gray-600">
                  Keep individual MRR (monthly recurring revenue per customer) under $100 initially.
                  Subscriptions are already flagged as higher risk, so moderate pricing reduces
                  additional risk.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">SaaS products</h3>
                <p className="text-sm text-gray-600">
                  Keep price points under $200 initially. Once you have 2-3 months of clean
                  transaction history, you can raise prices.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">One-time purchases</h3>
                <p className="text-sm text-gray-600">
                  One-time purchases are generally lower risk than subscriptions. Still, avoid
                  processing very high-value transactions on a brand-new account.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>After 2-3 months</strong> of clean history with zero disputes, you can
                raise prices and increase volume. The key is building trust with Stripe&apos;s risk
                systems first.
              </p>
            </div>
          </section>

          {/* What to Do If Your Account Gets Restricted */}
          <section id="account-restricted" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What to Do If Your Account Gets Restricted
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              If your Stripe account gets restricted, do not panic. Follow these steps to
              resolve the situation.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600 ml-2 mb-4">
              <li>
                <strong>Respond to Stripe&apos;s email promptly</strong> — delays can make the
                situation worse. Stripe gives you a window to provide documentation.
              </li>
              <li>
                <strong>Prepare documentation</strong> — common required documents include your
                business license, bank statements, and detailed product descriptions.
              </li>
              <li>
                <strong>If the appeal fails</strong> — you can open additional merchant accounts
                under the same company. One company can have multiple Stripe accounts.
              </li>
              <li>
                <strong>Work with Stripe support</strong> to transfer any held funds to your bank
                account. Stripe is required to release legitimate funds.
              </li>
              <li>
                <strong>Consider parallel payment processors</strong> as backup — PayPal, Paddle,
                or Lemon Squeezy can serve as alternatives if you need immediate payment processing.
              </li>
            </ol>
            <div className="bg-amber-50 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Pro tip:</strong> Always have a backup payment processor configured and
                  ready to go. Stripe restrictions can happen at any time, and having an alternative
                  means your business is not disrupted.
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices Checklist */}
          <section id="best-practices" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Best Practices Checklist
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Follow these best practices to keep your Stripe account healthy and avoid
              unnecessary risk flags.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Keep dispute rate <strong>under 0.5%</strong> — well below Stripe&apos;s 0.75% threshold</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Respond to disputes <strong>within 24 hours</strong> with clear evidence and documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Use <strong>Stripe Radar</strong> for automated fraud prevention — it catches most fraudulent charges before they process</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Set up <strong>webhook alerts</strong> for unusual activity — monitor for chargebacks, failed charges, and suspicious patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Maintain a <strong>professional website</strong> with privacy policy, terms, and contact information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Start small, scale gradually</strong> — build transaction history before processing high volumes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Keep a <strong>backup payment processor</strong> configured (PayPal, Paddle, or Lemon Squeezy)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Read the <Link href="/guides/stripe-setup" className="text-blue-600 hover:text-blue-800 underline">Stripe Setup Guide</Link> if you have not activated your account yet</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
