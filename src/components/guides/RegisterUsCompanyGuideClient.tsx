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

export function RegisterUsCompanyGuideClient() {
  const TOC = [
    { id: "before-you-start", label: "Before You Start" },
    { id: "comparison", label: "Quick Comparison Table" },
    { id: "stripe-atlas", label: "Option 1: Stripe Atlas" },
    { id: "doola", label: "Option 2: Doola (Recommended)" },
    { id: "firstbase", label: "Option 3: Firstbase" },
    { id: "diy-wyoming", label: "Option 4: DIY Wyoming" },
    { id: "which-one", label: "Which One Should You Choose?" },
    { id: "next-steps", label: "After Registration — Next Steps" },
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
            <span className="text-gray-600">Register US Company</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Formation Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Register a US Company — Service Comparison for Foreign Founders
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Compare Stripe Atlas, Doola, Firstbase, and DIY Wyoming. Costs, timelines, and which is best for your situation.
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
                Stripe Atlas: $500 ($350 via Mercury), Delaware, slow EIN (~1 month)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Doola: $297+, Wyoming option, faster EIN, bookkeeping add-ons
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Firstbase: $399, Y Combinator backed, comprehensive
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                DIY Wyoming: $154 total, cheapest, more self-management
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                For most founders, a formation service saves significant time
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

          {/* Before You Start */}
          <section id="before-you-start" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Before You Start
            </h2>
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">Important Warning</h3>
              <p className="text-sm text-amber-800 leading-relaxed mb-3">
                Registering a US company is a real legal commitment. You must:
              </p>
              <ul className="list-disc list-inside text-sm text-amber-800 space-y-1.5 ml-2">
                <li>File annual tax returns (Form 5472 at minimum)</li>
                <li>Pay state annual fees</li>
                <li>Maintain good standing</li>
                <li>If you stop operating, formally dissolve the company</li>
              </ul>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">What You Need</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>Passport</li>
              <li>Home address with proof (utility bill, bank statement, etc.)</li>
              <li>Business description or website</li>
            </ul>
          </section>

          {/* Quick Comparison Table */}
          <section id="comparison" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Quick Comparison Table
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Here is how the four most popular formation options stack up for foreign founders.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Stripe Atlas</th>
                    <th className="text-left py-3 px-3 font-semibold text-blue-700">Doola</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Firstbase</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">DIY Wyoming</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Price</td>
                    <td className="py-3 px-3 text-gray-600">$500 ($350 w/ Mercury)</td>
                    <td className="py-3 px-3 text-gray-600 bg-blue-50/50">$297+</td>
                    <td className="py-3 px-3 text-gray-600">$399</td>
                    <td className="py-3 px-3 text-gray-600">$154</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">State</td>
                    <td className="py-3 px-3 text-gray-600">Delaware</td>
                    <td className="py-3 px-3 text-gray-600 bg-blue-50/50">WY/DE/other</td>
                    <td className="py-3 px-3 text-gray-600">DE/WY</td>
                    <td className="py-3 px-3 text-gray-600">Wyoming</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">EIN Timeline</td>
                    <td className="py-3 px-3 text-gray-600">~1 month</td>
                    <td className="py-3 px-3 text-gray-600 bg-blue-50/50">1-2 weeks</td>
                    <td className="py-3 px-3 text-gray-600">1-2 weeks</td>
                    <td className="py-3 px-3 text-gray-600">DIY (1-2 days via Fiverr)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Registered Agent</td>
                    <td className="py-3 px-3 text-gray-600">Included 1yr</td>
                    <td className="py-3 px-3 text-gray-600 bg-blue-50/50">Included</td>
                    <td className="py-3 px-3 text-gray-600">Included</td>
                    <td className="py-3 px-3 text-gray-600">Included 1yr</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Annual State Fee</td>
                    <td className="py-3 px-3 text-gray-600">$300/yr (DE)</td>
                    <td className="py-3 px-3 text-gray-600 bg-blue-50/50">$60/yr (WY)</td>
                    <td className="py-3 px-3 text-gray-600">Varies</td>
                    <td className="py-3 px-3 text-gray-600">$60/yr (WY)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Stripe Credits</td>
                    <td className="py-3 px-3 text-gray-600">$2,500</td>
                    <td className="py-3 px-3 text-gray-600 bg-blue-50/50">None</td>
                    <td className="py-3 px-3 text-gray-600">None</td>
                    <td className="py-3 px-3 text-gray-600">None</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">Best For</td>
                    <td className="py-3 px-3 text-gray-600">Stripe integration</td>
                    <td className="py-3 px-3 text-gray-600 bg-blue-50/50">Budget + service</td>
                    <td className="py-3 px-3 text-gray-600">VC startups</td>
                    <td className="py-3 px-3 text-gray-600">Maximum savings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4 mb-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Stripe Atlas</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Price:</span> <span className="text-gray-800">$500 ($350 w/ Mercury)</span></p>
                  <p><span className="text-gray-500">State:</span> <span className="text-gray-800">Delaware</span></p>
                  <p><span className="text-gray-500">EIN Timeline:</span> <span className="text-gray-800">~1 month</span></p>
                  <p><span className="text-gray-500">Annual Fee:</span> <span className="text-gray-800">$300/yr (DE)</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">Stripe integration</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-blue-300 bg-blue-50/50 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Doola <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full ml-1">Recommended</span></h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Price:</span> <span className="text-gray-800">$297+</span></p>
                  <p><span className="text-gray-500">State:</span> <span className="text-gray-800">WY/DE/other</span></p>
                  <p><span className="text-gray-500">EIN Timeline:</span> <span className="text-gray-800">1-2 weeks</span></p>
                  <p><span className="text-gray-500">Annual Fee:</span> <span className="text-gray-800">$60/yr (WY)</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">Budget + service</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Firstbase</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Price:</span> <span className="text-gray-800">$399</span></p>
                  <p><span className="text-gray-500">State:</span> <span className="text-gray-800">DE/WY</span></p>
                  <p><span className="text-gray-500">EIN Timeline:</span> <span className="text-gray-800">1-2 weeks</span></p>
                  <p><span className="text-gray-500">Annual Fee:</span> <span className="text-gray-800">Varies</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">VC startups</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">DIY Wyoming</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Price:</span> <span className="text-gray-800">$154</span></p>
                  <p><span className="text-gray-500">State:</span> <span className="text-gray-800">Wyoming</span></p>
                  <p><span className="text-gray-500">EIN Timeline:</span> <span className="text-gray-800">DIY (1-2 days via Fiverr)</span></p>
                  <p><span className="text-gray-500">Annual Fee:</span> <span className="text-gray-800">$60/yr (WY)</span></p>
                  <p><span className="text-gray-500">Best For:</span> <span className="text-gray-800">Maximum savings</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Option 1: Stripe Atlas */}
          <section id="stripe-atlas" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Option 1: Stripe Atlas
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">$500 ($350 via Mercury)</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">Delaware</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">LLC or C-Corp</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Stripe Atlas is the most well-known formation service. It includes company formation, EIN
              application, registered agent (1 year), operating agreement, Stripe account setup, and
              Mercury bank integration.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              <strong>Stripe product credits:</strong> $2,500 (was $100K — significantly reduced).
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Pros</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Seamless Stripe integration</li>
                  <li>Clean dashboard</li>
                  <li>One-stop setup with Mercury</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">Cons</h3>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                  <li>EIN takes ~1 month currently</li>
                  <li>Payment during signup often gets declined (try Apple Pay on mobile)</li>
                  <li>Delaware = $300/year franchise tax</li>
                  <li>Credits reduced from $100K to $2,500</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-1">Payment Tip</h3>
              <p className="text-sm text-blue-800">
                Use direct internet (no VPN/proxy). If your card gets declined, try Apple Pay or
                Google Pay on a mobile browser.
              </p>
            </div>
          </section>

          {/* Option 2: Doola */}
          <section id="doola" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Option 2: Doola (Recommended)
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">Starting at $297</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">Wyoming / Delaware / Others</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Doola offers company formation, EIN, registered agent, and operating agreement. Optional
              add-ons include bookkeeping, tax filing, and compliance monitoring — making it a good
              choice for founders who want ongoing support.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Pros</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Faster EIN than Atlas (1-2 weeks)</li>
                  <li>Wyoming option ($60/yr vs $300/yr)</li>
                  <li>Bookkeeping and compliance add-ons</li>
                  <li>Real customer support</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-green-900 leading-relaxed">
                <Link href="/go/doola" className="text-green-800 hover:text-green-900 underline font-semibold">
                  Get started with Doola — 10% OFF with code FOREIGNLLC10
                </Link>
              </p>
            </div>
          </section>

          {/* Option 3: Firstbase */}
          <section id="firstbase" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Option 3: Firstbase
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">$399</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">Delaware / Wyoming</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">Y Combinator backed</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Firstbase provides company formation, EIN, registered agent, and mail forwarding.
              Backed by Y Combinator, it has a strong reputation and comprehensive service.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Pros</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Comprehensive package</li>
                  <li>Strong reputation (Y Combinator backed)</li>
                  <li>Mail forwarding included</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <Link href="/go/firstbase" className="text-blue-600 hover:text-blue-800 underline">
                Start with Firstbase
              </Link>
            </p>
          </section>

          {/* Option 4: DIY Wyoming */}
          <section id="diy-wyoming" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Option 4: DIY Wyoming
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">$154 total</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">Wyoming</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">via wyomingagents.com</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Through Wyoming Agents (wyomingagents.com), you can form a Wyoming LLC for $154 total.
              This includes company formation, registered agent (1 year), and Certificate of Formation.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">What&apos;s NOT Included</h3>
              <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                <li>EIN (use Fiverr $20-50, takes 1-2 days)</li>
                <li>Bank account setup</li>
                <li>Operating agreement (use a template)</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              <strong>Annual cost:</strong> $60/year (Wyoming annual report).
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Pros</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Cheapest option by far</li>
                  <li>Wyoming = best privacy + lowest annual fees</li>
                  <li>Full control over the process</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-900 mb-2">Cons</h3>
                <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                  <li>More DIY work required</li>
                  <li>EIN application is separate</li>
                  <li>No hand-holding or customer support</li>
                </ul>
              </div>
            </div>

            {/* DIY Steps */}
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">DIY Steps</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <p className="text-sm text-gray-600">Go to wyomingagents.com &rarr; Form a Company</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <p className="text-sm text-gray-600">Enter company name (primary + backup)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <p className="text-sm text-gray-600">Select LLC, Member Managed</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <p className="text-sm text-gray-600">Fill in founder details</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">5</div>
                  <p className="text-sm text-gray-600">Pay by credit card</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">6</div>
                  <p className="text-sm text-gray-600">Wait for Certificate of Formation email</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">7</div>
                  <p className="text-sm text-gray-600">Get EIN separately (Fiverr or IRS directly)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Which One Should You Choose? */}
          <section id="which-one" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Which One Should You Choose?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Use this decision tree to find the best option for your situation:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <strong>Cheapest?</strong> &rarr; DIY Wyoming ($154 + $60/yr)
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <strong>Full service + low annual?</strong> &rarr; Doola ($297 + $60/yr WY)
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <strong>Need Stripe specifically?</strong> &rarr; Stripe Atlas ($350-500 + $300/yr)
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <strong>Premium + VC credibility?</strong> &rarr; Firstbase ($399)
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <strong>Planning VC funding?</strong> &rarr; Delaware (Atlas or Firstbase)
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <strong>Solo dev / small team?</strong> &rarr; Wyoming (DIY or Doola)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* After Registration — Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              After Registration — Next Steps
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Once your company is formed, here is what to do next:
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <p className="text-sm text-gray-800">
                    Get EIN — <Link href="/tools/ein-guide" className="text-blue-600 hover:text-blue-800 underline">EIN Guide</Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <p className="text-sm text-gray-800">
                    Open bank account — <Link href="/guides/mercury-bank-guide" className="text-blue-600 hover:text-blue-800 underline">Mercury Bank Guide</Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <p className="text-sm text-gray-800">
                    Get US phone number — <Link href="/guides/us-phone-number" className="text-blue-600 hover:text-blue-800 underline">Phone Guide</Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <div>
                  <p className="text-sm text-gray-800">
                    Activate Stripe — <Link href="/guides/stripe-setup" className="text-blue-600 hover:text-blue-800 underline">Stripe Setup</Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">5</div>
                <div>
                  <p className="text-sm text-gray-800">
                    Understand tax obligations — <Link href="/guides/start-your-business" className="text-blue-600 hover:text-blue-800 underline">Start Your Business</Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">6</div>
                <div>
                  <p className="text-sm text-gray-800">
                    File BOI report if needed — <Link href="/guides/boi-report" className="text-blue-600 hover:text-blue-800 underline">BOI Report</Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">7</div>
                <div>
                  <p className="text-sm text-gray-800">
                    Set up compliance reminders
                  </p>
                </div>
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
                  Do I need to be in the US to register?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No. All four options support 100% remote registration. You do not need to visit
                  the US at any point during the formation process.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  LLC or C-Corp?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  LLC for most solo founders and small teams — simpler taxes with pass-through
                  treatment. C-Corp only if you are planning to raise venture capital funding.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Wyoming or Delaware?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Wyoming for lower costs ($60/yr vs $300/yr). Delaware for VC fundraising or
                  complex equity structures. See our{" "}
                  <Link href="/guides/best-states-foreign-llc" className="text-blue-600 hover:text-blue-800 underline">
                    Best States guide
                  </Link>{" "}
                  for a detailed comparison.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Can I change states later?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, through a process called domestication, but it is complicated and involves
                  additional fees. Choose wisely upfront to avoid the hassle.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  What about New Mexico?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  New Mexico has a $0 annual fee, making it the cheapest state to maintain long-term.
                  See our{" "}
                  <Link href="/guides/best-states-foreign-llc" className="text-blue-600 hover:text-blue-800 underline">
                    Best States guide
                  </Link>{" "}
                  for details.
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
