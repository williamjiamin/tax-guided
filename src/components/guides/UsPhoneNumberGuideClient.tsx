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

export function UsPhoneNumberGuideClient() {
  const TOC = [
    { id: "why-needed", label: "Why You Need a US Phone Number" },
    { id: "ultra-mobile", label: "Option 1: Ultra Mobile PayGo (Recommended)" },
    { id: "wifi-calling", label: "WiFi Calling Setup (Critical Step)" },
    { id: "tello", label: "Option 2: Tello (eSIM Only)" },
    { id: "google-voice", label: "Option 3: Google Voice (Not Recommended)" },
    { id: "comparison", label: "Cost Comparison" },
    { id: "tips", label: "Important Tips" },
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
            <span className="text-gray-600">US Phone Number</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Business Setup
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Get a US Phone Number for Your LLC
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Required for Stripe activation and useful for banking. Best options ranked by cost and reliability.
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
                US phone number required for Stripe customer support field
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Ultra Mobile PayGo: $3/month, real carrier number (not VoIP)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Must enable WiFi Calling to use outside the US
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Real carrier &gt; Google Voice for business (some services reject VoIP)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Keep balance topped up — losing this number affects your business accounts
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

          {/* Why You Need a US Phone Number */}
          <section id="why-needed" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why You Need a US Phone Number
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When you activate your Stripe account, you are required to provide a US phone number
              for the customer support field. This is the number your customers will see on their
              credit card statements. Stripe requires a valid US number — international numbers
              are not accepted for this field.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              A US phone number is also helpful when setting up a Mercury bank account and other
              US-based financial services. Having a real carrier number (not VoIP) makes your
              business appear more legitimate and trustworthy.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Why Real Carrier Matters</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>Some services (Stripe, banks) reject VoIP numbers during verification</li>
                <li>Real carrier numbers on the T-Mobile network are much harder to spoof</li>
                <li>Better reliability for receiving SMS verification codes</li>
                <li>More professional appearance for customer-facing support lines</li>
              </ul>
            </div>
          </section>

          {/* Option 1: Ultra Mobile PayGo */}
          <section id="ultra-mobile" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Option 1: Ultra Mobile PayGo (Recommended)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Ultra Mobile PayGo is the best option for most foreign founders. It costs just $3/month
              and gives you a real T-Mobile carrier number — not VoIP.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">What&apos;s Included ($3/month)</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>Real T-Mobile network number</li>
                <li>WiFi Calling: 100 minutes + 100 texts included</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Overage Rates</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>Calls: $3.59/min</li>
                <li>Texts received: $0.10/text</li>
                <li>Texts sent: $0.50/text</li>
                <li>Data: $0.20/MB</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Where to Buy</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                You can purchase from JD.com (some sellers pre-activate the SIM for you) or directly
                from ultramobile.com. Pre-activated SIMs save you the hassle of activation.
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              <Link href="/go/ultra-mobile" className="text-blue-600 hover:text-blue-800 underline">
                Get Ultra Mobile PayGo
              </Link>
            </p>
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Note:</strong> Ultra Mobile PayGo had risk control issues in 2025, but these
                were resolved as of August 2025. The service is currently stable and working normally.
              </p>
            </div>
          </section>

          {/* WiFi Calling Setup */}
          <section id="wifi-calling" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              WiFi Calling Setup (Critical Step)
            </h2>
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">Critical Warning</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                You <strong>must</strong> enable WiFi Calling to use your Ultra Mobile SIM outside the
                United States. Without WiFi Calling enabled, the SIM will not work internationally.
                This is the most common mistake — do not skip this step.
              </p>
            </div>
            <div className="space-y-4 mb-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Insert SIM card</h3>
                  <p className="text-sm text-gray-600">
                    Insert the Ultra Mobile SIM into your iPhone.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Open WiFi Calling settings</h3>
                  <p className="text-sm text-gray-600">
                    Go to Settings &rarr; Cellular &rarr; WiFi Calling &rarr; Enable WiFi Calling on This iPhone.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Enter E911 address</h3>
                  <p className="text-sm text-gray-600">
                    You need a US address for E911 registration. Use any valid US address from
                    Google Maps. Some addresses are overused and may fail — try different ones if
                    the first doesn&apos;t work.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Example E911 Address Format</h3>
              <p className="text-sm text-gray-600 font-mono">
                2900 Ford Rd, Bristol, PA 19007 US
              </p>
            </div>
          </section>

          {/* Option 2: Tello */}
          <section id="tello" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Option 2: Tello (eSIM Only)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Tello offers flexible plans starting from $5/month with eSIM support. This is a good
              alternative when Ultra Mobile is unavailable or if you prefer eSIM.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Details</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li>Plans starting from $5/month</li>
                <li>eSIM only — no physical SIM option</li>
                <li>WiFi Calling supported</li>
                <li>Flexible plan customization</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Note:</strong> If your phone does not support eSIM natively, you will need an
                eSIM adapter such as PlanB Switch to use Tello.
              </p>
            </div>
          </section>

          {/* Option 3: Google Voice */}
          <section id="google-voice" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Option 3: Google Voice (Not Recommended)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Google Voice is free but uses VoIP technology. While it works for personal use, it is
              not recommended for business purposes.
            </p>
            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-red-900 mb-2">Why We Don&apos;t Recommend It</h3>
              <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                <li>VoIP-based — some services (Stripe, banks) reject VoIP numbers</li>
                <li>Requires an existing US number to set up (catch-22 for foreign founders)</li>
                <li>OK for personal use, but risky for business-critical accounts</li>
                <li>Number portability is limited</li>
              </ul>
            </div>
          </section>

          {/* Cost Comparison */}
          <section id="comparison" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Cost Comparison
            </h2>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Service</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Monthly</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">WiFi Calling</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Ultra Mobile PayGo</td>
                    <td className="py-3 px-3 text-gray-600">$3</td>
                    <td className="py-3 px-3 text-gray-600">Real carrier</td>
                    <td className="py-3 px-3 text-gray-600">Yes</td>
                    <td className="py-3 px-3 text-green-700 font-medium">Yes (best value)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Tello</td>
                    <td className="py-3 px-3 text-gray-600">$5+</td>
                    <td className="py-3 px-3 text-gray-600">eSIM</td>
                    <td className="py-3 px-3 text-gray-600">Yes</td>
                    <td className="py-3 px-3 text-green-700 font-medium">Yes (backup)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Google Voice</td>
                    <td className="py-3 px-3 text-gray-600">Free</td>
                    <td className="py-3 px-3 text-gray-600">VoIP</td>
                    <td className="py-3 px-3 text-gray-600">N/A</td>
                    <td className="py-3 px-3 text-red-600 font-medium">No (business)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Skype Number</td>
                    <td className="py-3 px-3 text-gray-600">$3/mo</td>
                    <td className="py-3 px-3 text-gray-600">VoIP</td>
                    <td className="py-3 px-3 text-gray-600">N/A</td>
                    <td className="py-3 px-3 text-red-600 font-medium">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4 mb-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Ultra Mobile PayGo</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Monthly:</span> <span className="text-gray-800">$3</span></p>
                  <p><span className="text-gray-500">Type:</span> <span className="text-gray-800">Real carrier</span></p>
                  <p><span className="text-gray-500">WiFi Calling:</span> <span className="text-gray-800">Yes</span></p>
                  <p><span className="text-gray-500">Recommended:</span> <span className="text-green-700 font-medium">Yes (best value)</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Tello</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Monthly:</span> <span className="text-gray-800">$5+</span></p>
                  <p><span className="text-gray-500">Type:</span> <span className="text-gray-800">eSIM</span></p>
                  <p><span className="text-gray-500">WiFi Calling:</span> <span className="text-gray-800">Yes</span></p>
                  <p><span className="text-gray-500">Recommended:</span> <span className="text-green-700 font-medium">Yes (backup)</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Google Voice</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Monthly:</span> <span className="text-gray-800">Free</span></p>
                  <p><span className="text-gray-500">Type:</span> <span className="text-gray-800">VoIP</span></p>
                  <p><span className="text-gray-500">WiFi Calling:</span> <span className="text-gray-800">N/A</span></p>
                  <p><span className="text-gray-500">Recommended:</span> <span className="text-red-600 font-medium">No (business)</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Skype Number</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Monthly:</span> <span className="text-gray-800">$3/mo</span></p>
                  <p><span className="text-gray-500">Type:</span> <span className="text-gray-800">VoIP</span></p>
                  <p><span className="text-gray-500">WiFi Calling:</span> <span className="text-gray-800">N/A</span></p>
                  <p><span className="text-gray-500">Recommended:</span> <span className="text-red-600 font-medium">No</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Important Tips */}
          <section id="tips" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Important Tips
            </h2>
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">Keep Your Balance Topped Up!</h3>
              <p className="text-sm text-amber-800 leading-relaxed mb-2">
                Number deactivation causes major issues with Stripe and banking. If you lose your
                US phone number, you may lose access to critical business accounts that rely on it
                for verification.
              </p>
              <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                <li>Charge extra credit in one go — each top-up has taxes added</li>
                <li>Set calendar reminders for monthly top-ups</li>
                <li>Pre-pay 2-3 months at a time when possible</li>
                <li>This number is a critical business asset — treat it accordingly</li>
              </ul>
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
                  Can I use a non-US number for Stripe?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No. Stripe requires a valid US phone number for the customer support field on your
                  account. International numbers are not accepted for this purpose.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Can I port my number to another carrier later?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes. You can port your Ultra Mobile number to another carrier if needed. Make sure
                  to initiate the port before your current plan expires to avoid losing the number.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  What if Ultra Mobile is unavailable or down?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Use Tello as your backup option. Tello offers eSIM plans starting at $5/month with
                  WiFi Calling support.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
