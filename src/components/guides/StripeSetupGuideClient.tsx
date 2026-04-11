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

export function StripeSetupGuideClient() {
  const TOC = [
    { id: "prerequisites", label: "Prerequisites" },
    { id: "create-account", label: "Step 1: Create Your Stripe Account" },
    { id: "verify-business", label: "Step 2: Verify Your Business" },
    { id: "business-details", label: "Step 3: Business Details" },
    { id: "link-bank", label: "Step 4: Link Your Bank Account" },
    { id: "tax-settings", label: "Step 5: Tax Settings" },
    { id: "submit-review", label: "Step 6: Submit for Review" },
    { id: "after-activation", label: "After Activation" },
    { id: "troubleshooting", label: "Troubleshooting" },
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
            <span className="text-gray-600">Stripe Setup</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Payment Setup
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Set Up Stripe for Your US LLC — Step-by-Step Activation Guide
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Complete guide to activating Stripe payments for your foreign-owned US LLC.
              Covers business verification, bank account linking, and tax configuration.
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
                You can start Stripe activation after receiving your EIN from the IRS
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                As of 2025, you can begin activation without EIN (US cards only) — full features unlock after EIN
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Business address should be your registered agent address
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Link your Mercury (or other US) bank account for payouts
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                The entire process takes about 15-20 minutes
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

          {/* Prerequisites */}
          <section id="prerequisites" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Prerequisites
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Before you begin Stripe activation, make sure you have the following ready. Having
              everything prepared in advance will make the process smooth and avoid delays.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>EIN from the IRS</strong> — or you can apply and start with limited features while waiting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>US bank account</strong> — Mercury is recommended for foreign-owned LLCs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Registered agent address</strong> — this will be your business address on Stripe</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>US phone number</strong> — required for the customer support field</span>
              </li>
            </ul>
            <div className="bg-amber-50 rounded-xl p-4 mt-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  If you do not have an EIN yet, you can still create a Stripe account and begin
                  the setup process. However, full payment processing features (including ACH and
                  international cards) will only unlock after you provide your EIN.
                </p>
              </div>
            </div>
          </section>

          {/* Step 1: Create Your Stripe Account */}
          <section id="create-account" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 1: Create Your Stripe Account
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Start by creating your Stripe account. This is straightforward and takes just a
              few minutes.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 ml-2">
              <li>Go to <strong>stripe.com</strong> and click &quot;Start now&quot; or &quot;Create account&quot;</li>
              <li>Sign up with your <strong>business email address</strong> — use the same email you use for your LLC</li>
              <li>Select your country as <strong>United States</strong></li>
              <li>Choose your business type — select <strong>LLC</strong> or <strong>C-Corp</strong> depending on your entity</li>
            </ol>
            <div className="bg-blue-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> Use a professional email address (e.g., yourname@yourdomain.com)
                rather than a free email provider. This helps with account verification and looks
                more professional.
              </p>
            </div>
          </section>

          {/* Step 2: Verify Your Business */}
          <section id="verify-business" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 2: Verify Your Business
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Stripe needs to verify your business identity. This is where your registered agent
              address and LLC documentation come in.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Enter your <strong>business address</strong> — use your registered agent address (e.g., your Wyoming or Delaware address)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Select your <strong>industry</strong> — choose the category that best describes your business (e.g., &quot;Software&quot; or &quot;Consulting&quot;)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Fill in <strong>company representative info</strong> — your personal address can be your home country address, but it must match what you used during LLC formation</span>
              </li>
            </ul>
            <div className="bg-amber-50 rounded-xl p-4 mt-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  Make sure the representative information matches your LLC formation documents exactly.
                  Mismatches between your Stripe application and your Articles of Organization can
                  cause verification delays.
                </p>
              </div>
            </div>
          </section>

          {/* Step 3: Business Details */}
          <section id="business-details" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 3: Business Details
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This section asks for information that Stripe uses to understand your business and
              set up your public-facing payment pages.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Company description</strong> — write a clear, professional description of what your business does</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Website URL</strong> — this is important. Make sure your website looks professional before submitting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Customer support phone number</strong> — must be a US number. This is why getting a US phone number first is important</span>
              </li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> Your website is one of the first things Stripe reviews. Make sure
                it has a clear product/service description, contact information, a privacy policy,
                and terms of service before you submit your Stripe application.
              </p>
            </div>
          </section>

          {/* Step 4: Link Your Bank Account */}
          <section id="link-bank" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 4: Link Your Bank Account
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Connect your US bank account so Stripe can deposit your earnings. This is where
              your revenue will be paid out.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Connect your <strong>Mercury bank account</strong> (or other US bank) — Stripe supports instant verification with most major banks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>All <strong>payouts will go to this account</strong> — you can set up automatic daily or weekly transfers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>You can <strong>change banks later</strong> — if you switch banks in the future, simply update your payout settings</span>
              </li>
            </ul>
          </section>

          {/* Step 5: Tax Settings */}
          <section id="tax-settings" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 5: Tax Settings
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Configure your tax settings correctly to avoid issues down the road. This is
              especially important for foreign LLC owners.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Enable automatic tax collection</strong> if you are selling to US customers — Stripe Tax can handle sales tax calculations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Select <strong>&quot;I do not have an SSN&quot;</strong> — foreign owners use their EIN only, not a Social Security Number</span>
              </li>
            </ul>
            <div className="bg-amber-50 rounded-xl p-4 mt-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  Do not enter a random SSN or use someone else&apos;s. Stripe verifies this information
                  with the IRS. Foreign LLC owners should only provide their EIN in the tax ID field.
                </p>
              </div>
            </div>
          </section>

          {/* Step 6: Submit for Review */}
          <section id="submit-review" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 6: Submit for Review
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Before submitting, take a moment to review all the information you have entered.
              Once submitted, Stripe will review your application.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Review all information</strong> for accuracy — double-check your business name, address, and EIN</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Submit your application</strong> — approval is usually instant for straightforward applications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>If <strong>rejected</strong>, check your website and business description — these are the most common reasons for rejection</span>
              </li>
            </ul>
            <div className="bg-green-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-green-800">
                <strong>Good news:</strong> Most LLC applications are approved within minutes. If
                your business description is clear and your website looks professional, you should
                have no issues.
              </p>
            </div>
          </section>

          {/* After Activation */}
          <section id="after-activation" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              After Activation
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Congratulations! Once approved, you can immediately start accepting payments.
              Here is what to do next:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Start accepting payments immediately</strong> — integrate Stripe into your website or use Stripe Payment Links for quick setup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Payout schedule: 2-day rolling (US)</strong> — funds are available in your bank account 2 business days after a successful payment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Consider setting up Stripe Tax</strong> for automated sales tax collection if selling to US customers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Read our <Link href="/guides/stripe-account-tips" className="text-blue-600 hover:text-blue-800 underline">Stripe Account Health Guide</Link> to maintain a healthy account and avoid risk flags</span>
              </li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Troubleshooting
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Running into issues during setup? Here are solutions to the most common problems.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Payment declined during signup</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Try using <strong>Apple Pay or Google Pay</strong> on mobile instead of entering card details manually</li>
                  <li>Use a <strong>direct internet connection</strong> — VPNs and proxies can trigger fraud detection</li>
                  <li>Try a different card if the first one is declined</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Application rejected</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Ensure your <strong>website looks professional</strong> — include a privacy policy, terms of service, and contact information</li>
                  <li>Make your <strong>business description clear</strong> — avoid vague or generic descriptions</li>
                  <li>Verify that your <strong>business type is not restricted</strong> by Stripe</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">EIN taking too long</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>IRS processing can take 4-8 weeks for mail/fax applications</li>
                  <li>Consider using <strong>Fiverr</strong> to find a service that can expedite your EIN application</li>
                  <li>You can begin Stripe setup with limited features while waiting for your EIN</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
