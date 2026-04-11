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

export function DiyVsCpaGuideClient() {
  const TOC = [
    { id: "overview", label: "The Real Question" },
    { id: "cpa-costs", label: "What a CPA Actually Costs" },
    { id: "diy-option", label: "The DIY Option" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "when-cpa", label: "When You Actually Need a CPA" },
    { id: "when-diy", label: "When DIY Makes Sense" },
    { id: "middle-ground", label: "The Smart Middle Ground" },
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
            <span className="text-gray-600">DIY vs CPA</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100/80 text-green-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Cost Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              DIY Tax Filing vs CPA for Foreign-Owned LLCs
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Should you pay $500-2,000+ for a CPA, or handle your Form 5472 filing yourself?
              A practical cost-benefit analysis from someone who has seen both sides.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-green-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Most foreign-owned LLCs with simple structures do not need a CPA
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                CPAs typically charge $500-2,000+ per year for Form 5472 + Form 1120 filings
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                ForeignLLCTax.com lets you file the same forms for $49 with guided assistance
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Complex situations (US-source income, multiple entities, ECI) may warrant professional help
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

          {/* The Real Question */}
          <section id="overview" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Real Question
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Every foreign-owned single-member LLC must file Form 5472 (attached to a pro-forma
              Form 1120) with the IRS each year. This is true even if your LLC had zero revenue
              and zero expenses. The penalty for not filing is $25,000 per form, per year.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The question is not whether to file — it is how. You have three options:
            </p>
            <div className="space-y-3">
              {[
                { title: "Hire a CPA", cost: "$500 - $2,000+/year", desc: "A certified public accountant handles everything. You provide documents, they file." },
                { title: "DIY with ForeignLLCTax.com", cost: "$49/year", desc: "Our guided filer walks you through every field. You fill in the data, we generate IRS-ready PDFs." },
                { title: "Fully Manual DIY", cost: "Free (plus your time)", desc: "Download IRS forms, read the instructions, fill them out by hand, and mail them yourself." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{item.cost}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CPA Costs */}
          <section id="cpa-costs" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What a CPA Actually Costs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              CPA fees for foreign-owned LLC filings vary widely depending on complexity and location.
              Here is what you can realistically expect:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Service</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "Form 5472 + Pro-forma 1120 (simple, no activity)", cost: "$500 - $800" },
                    { service: "Form 5472 + 1120 with transactions", cost: "$800 - $1,500" },
                    { service: "Multiple Form 5472s (multiple related parties)", cost: "$1,200 - $2,000+" },
                    { service: "Bookkeeping + filing bundle", cost: "$1,500 - $3,000+" },
                    { service: "Rush filing (last 2 weeks before deadline)", cost: "Add 25-50% surcharge" },
                  ].map((row) => (
                    <tr key={row.service} className="border-b border-gray-100">
                      <td className="py-3 px-3 text-gray-600">{row.service}</td>
                      <td className="py-3 px-3 text-gray-800 font-medium">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Hidden cost:</strong> Many CPAs are not specialists in foreign-owned LLC
                filings. Generalist CPAs may charge the same fees but make errors on Form 5472
                because they rarely handle them. Always ask how many Form 5472s a CPA files per
                year before hiring.
              </p>
            </div>
          </section>

          {/* DIY Option */}
          <section id="diy-option" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The DIY Option
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Filing Form 5472 yourself is entirely legal and, for most simple LLCs, straightforward.
              The IRS does not require you to use a paid preparer. You can download the forms directly
              from IRS.gov, fill them in, and mail them to the IRS.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The challenge with fully manual DIY is that Form 5472 has specific formatting
              requirements, country codes, reference IDs, and transaction categorizations that are
              easy to get wrong. A single error can trigger a $25,000 penalty notice.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                ForeignLLCTax.com — The guided DIY approach
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed mb-3">
                Our platform is designed specifically for foreign-owned LLC owners who want to
                file correctly without paying CPA fees. For $49, you get:
              </p>
              <ul className="space-y-1.5 text-sm text-blue-800 ml-2">
                <li className="flex items-start gap-2"><CheckIcon /> Step-by-step guided filer with plain-English explanations</li>
                <li className="flex items-start gap-2"><CheckIcon /> Real-time WYSIWYG preview showing exactly how your IRS forms will look</li>
                <li className="flex items-start gap-2"><CheckIcon /> Automatic generation of both Form 5472 and pro-forma Form 1120</li>
                <li className="flex items-start gap-2"><CheckIcon /> Built-in validation to catch common errors before you file</li>
                <li className="flex items-start gap-2"><CheckIcon /> Downloadable IRS-ready PDFs</li>
              </ul>
            </div>
          </section>

          {/* Comparison */}
          <section id="comparison" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Factor</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">CPA</th>
                    <th className="text-left py-3 px-3 font-semibold text-blue-700 bg-blue-50/50">ForeignLLCTax.com</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Manual DIY</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: "Cost", cpa: "$500 - $2,000+", us: "$49", diy: "Free" },
                    { factor: "Time Required", cpa: "1-2 hours (gathering docs)", us: "30-60 minutes", diy: "2-4 hours" },
                    { factor: "Error Protection", cpa: "High (if specialist)", us: "High (built-in validation)", diy: "Low" },
                    { factor: "IRS Audit Support", cpa: "Yes (usually extra)", us: "Self-represented", diy: "Self-represented" },
                    { factor: "Control", cpa: "Low — you trust the CPA", us: "Full — you see every field", diy: "Full" },
                    { factor: "Learning", cpa: "None — black box", us: "Yes — you understand your filing", diy: "Yes — steep curve" },
                    { factor: "Speed", cpa: "1-3 weeks turnaround", us: "Same day", diy: "Same day" },
                  ].map((row) => (
                    <tr key={row.factor} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.factor}</td>
                      <td className="py-3 px-3 text-gray-600">{row.cpa}</td>
                      <td className="py-3 px-3 text-blue-700 bg-blue-50/50 font-medium">{row.us}</td>
                      <td className="py-3 px-3 text-gray-600">{row.diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* When CPA */}
          <section id="when-cpa" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              When You Actually Need a CPA
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              There are legitimate situations where professional tax help is worth the cost:
            </p>
            <div className="space-y-3">
              {[
                { title: "Your LLC earns US-source income (ECI)", desc: "If your LLC has effectively connected income, you may owe US taxes. This requires Form 1120-F or Form 1040-NR, which are more complex filings." },
                { title: "You have transfer pricing concerns", desc: "If your LLC transacts with related foreign entities and the IRS could question your pricing, professional guidance on arm's-length standards is valuable." },
                { title: "You are under IRS examination", desc: "If you have received a penalty notice or audit letter, a tax professional can help craft a reasonable cause argument." },
                { title: "Multi-member LLC or partnership structure", desc: "Partnerships require Form 1065, Schedule K-1s, and potentially withholding under Section 1446. This is meaningfully more complex." },
                { title: "You need a formal tax opinion", desc: "If your business structure is unusual or you need documentation for a treaty position, a tax attorney or CPA can provide a written opinion." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When DIY */}
          <section id="when-diy" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              When DIY Makes Sense
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Self-filing is the right choice for the majority of foreign-owned LLCs. You are a
              good candidate for DIY if:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>Your LLC is a single-member (disregarded entity) owned by a non-resident</li>
              <li>Your LLC does not earn US-source income — it provides services or sells products to customers outside the US</li>
              <li>Your transactions are straightforward — capital contributions, management fees, operating expenses</li>
              <li>You have fewer than 20-30 transactions per year to report</li>
              <li>You are comfortable reading form instructions and entering data accurately</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-green-800">
                <strong>This describes 80%+ of foreign-owned LLCs.</strong> If your LLC is a
                straightforward vehicle for freelancing, consulting, e-commerce, or SaaS, you
                almost certainly do not need a CPA for your annual filing.
              </p>
            </div>
          </section>

          {/* Middle Ground */}
          <section id="middle-ground" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Smart Middle Ground
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              ForeignLLCTax.com exists because we believe there should be a better option between
              paying $1,000+ to a CPA and struggling through blank IRS forms alone.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Our approach gives you the control and cost savings of DIY with the error prevention
              of a professional tool. You see every field, understand what you are filing, and can
              verify everything before you submit. And at $49, it pays for itself compared to a
              CPA in the first year alone.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Many of our users start with our platform and only consult a CPA if they encounter
              an unusual situation. This is the most cost-effective approach — use guided self-filing
              for routine years and save professional fees for when you genuinely need expert advice.
            </p>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
                { text: "Learn about common Form 5472 mistakes", href: "/guides/form-5472-common-mistakes" },
                { text: "Set up bookkeeping for your LLC", href: "/guides/foreign-llc-bookkeeping" },
                { text: "Read the April filing season playbook", href: "/guides/filing-season-playbook" },
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
