import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ID_TAX_SYSTEM } from "@/lib/tax-data";

export const metadata: Metadata = {
  title: "Indonesia Tax System Guide — Corporate, Individual & VAT Rates",
  description:
    "Complete guide to Indonesia's tax system: 22% corporate rate, progressive individual brackets up to 35%, 11% VAT, MSME incentives, and tax holiday programs.",
  alternates: { canonical: "/guides/tax-system-indonesia" },
};

export default function TaxSystemIndonesiaPage() {
  const tax = ID_TAX_SYSTEM;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-16 pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-5xl mb-4">🇮🇩</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {tax.country} Tax System Guide
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about taxation in {tax.country} — corporate rates, individual
              brackets, VAT, MSME incentives, and tax holiday programs for investors.
            </p>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Corporate Tax Rate</p>
              <p className="text-3xl font-extrabold text-navy mt-2">{tax.corporateRate}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">VAT Rate</p>
              <p className="text-3xl font-extrabold text-navy mt-2">{tax.vatOrSalesTax}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Top Individual Rate</p>
              <p className="text-3xl font-extrabold text-navy mt-2">35%</p>
            </div>
          </div>
        </section>

        {/* Corporate Tax */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Corporate Tax</h2>
            <p className="text-gray-700 leading-relaxed">{tax.corporateDetails}</p>
          </div>
        </section>

        {/* Individual Tax Brackets */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Individual Income Tax Brackets</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-navy">
                    <th className="py-3 px-4 text-sm font-semibold text-gray-600">Income Range ({tax.currencySymbol})</th>
                    <th className="py-3 px-4 text-sm font-semibold text-gray-600">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tax.individualBrackets.map((bracket, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-white">
                      <td className="py-3 px-4 text-gray-700">
                        {tax.currencySymbol}{bracket.min.toLocaleString()}
                        {bracket.max ? ` — ${tax.currencySymbol}${bracket.max.toLocaleString()}` : "+"}
                      </td>
                      <td className="py-3 px-4 font-semibold text-navy">{bracket.rate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Capital Gains */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Capital Gains Tax</h2>
            <p className="text-gray-700 leading-relaxed">{tax.capitalGainsDetails}</p>
          </div>
        </section>

        {/* VAT */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Value Added Tax (PPN)</h2>
            <p className="text-gray-700 leading-relaxed">{tax.vatDetails}</p>
          </div>
        </section>

        {/* Social Security */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Social Security — {tax.socialSecurity}</h2>
            <p className="text-gray-700 leading-relaxed">{tax.socialSecurityDetails}</p>
          </div>
        </section>

        {/* Withholding Rates */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Withholding Tax Rates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-5 border border-gray-100">
                <p className="text-sm font-semibold text-gray-500">Dividends</p>
                <p className="text-lg font-bold text-navy mt-1">{tax.withholding.dividends}</p>
              </div>
              <div className="bg-white rounded-lg p-5 border border-gray-100">
                <p className="text-sm font-semibold text-gray-500">Interest</p>
                <p className="text-lg font-bold text-navy mt-1">{tax.withholding.interest}</p>
              </div>
              <div className="bg-white rounded-lg p-5 border border-gray-100">
                <p className="text-sm font-semibold text-gray-500">Royalties</p>
                <p className="text-lg font-bold text-navy mt-1">{tax.withholding.royalties}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filing & Authority */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Filing Deadline</h2>
              <p className="text-gray-700">{tax.filingDeadline}</p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tax Authority</h2>
              <p className="text-gray-700">{tax.taxAuthority}</p>
              <a
                href={tax.taxAuthorityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-navy font-semibold hover:underline"
              >
                Visit official website &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Why Businesses Choose */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Why Businesses Choose {tax.country}
            </h2>
            <ul className="space-y-3">
              {tax.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-navy-dark transition-colors"
            >
              Compare {tax.country} with Other Jurisdictions &rarr;
            </Link>
            <a
              href="https://foreignllctax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition-colors"
            >
              Need to File U.S. Taxes? Visit ForeignLLCTax.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-6 px-6 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-400">
              Rates and thresholds last verified: {tax.lastUpdated}. Always confirm with{" "}
              <a href={tax.taxAuthorityUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-navy">
                {tax.taxAuthority}
              </a>{" "}
              for the most current information.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
