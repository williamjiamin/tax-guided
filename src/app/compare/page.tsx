import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { US_TAX_SYSTEM } from "@/lib/tax-data/us-tax-system";
import { CN_TAX_SYSTEM } from "@/lib/tax-data/cn-tax-system";
import type { TaxSystem, TaxBracket } from "@/lib/tax-data/types";

export const metadata: Metadata = {
  title:
    "US vs China Tax Comparison — Side-by-Side Tax System Overview | TaxGuided.com",
  description:
    "Compare the United States and China tax systems side by side: corporate rates, individual brackets, capital gains, VAT, withholding, and key features.",
  openGraph: {
    title: "US vs China Tax Comparison | TaxGuided.com",
    description:
      "Side-by-side comparison of the US and China tax systems for businesses and individuals.",
    url: "https://foreignllctax.com/compare",
    type: "website",
  },
  alternates: {
    canonical: "/compare",
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function formatCurrency(amount: number, symbol: string) {
  return `${symbol}${amount.toLocaleString()}`;
}

function BracketTable({
  brackets,
  symbol,
}: {
  brackets: TaxBracket[];
  symbol: string;
}) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-2 pr-3 font-semibold text-gray-700">
            Income range
          </th>
          <th className="text-right py-2 font-semibold text-gray-700">Rate</th>
        </tr>
      </thead>
      <tbody>
        {brackets.map((b, i) => (
          <tr key={i} className="border-b border-gray-100 last:border-0">
            <td className="py-2 pr-3 text-gray-600">
              {b.max
                ? `${formatCurrency(b.min, symbol)} - ${formatCurrency(b.max, symbol)}`
                : `Over ${formatCurrency(b.min, symbol)}`}
            </td>
            <td className="py-2 text-right font-medium text-gray-900">
              {b.rate}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ComparisonRow({
  label,
  usValue,
  cnValue,
  usDetail,
  cnDetail,
}: {
  label: string;
  usValue: string;
  cnValue: string;
  usDetail?: string;
  cnDetail?: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-4 py-6 border-b border-gray-100 last:border-0">
      <div className="font-bold text-gray-900 text-sm md:pt-0.5">{label}</div>
      <div>
        <p className="text-lg font-semibold text-navy">{usValue}</p>
        {usDetail && (
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            {usDetail}
          </p>
        )}
      </div>
      <div>
        <p className="text-lg font-semibold text-navy">{cnValue}</p>
        {cnDetail && (
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            {cnDetail}
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ComparePage() {
  const us = US_TAX_SYSTEM;
  const cn = CN_TAX_SYSTEM;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-20 pb-14 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-navy-light/60 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 border border-gold/20">
              <span>Tax System Comparison</span>
            </div>
            <h1 className="text-[2.5rem] md:text-[3.25rem] font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
              {us.country} vs {cn.country}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A side-by-side look at corporate rates, individual brackets,
              capital gains, VAT, withholding, and the key features that shape
              each system.
            </p>
          </div>
        </section>

        {/* Country headers */}
        <section className="bg-gray-50/50 border-b border-gray-100 py-6 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-4">
            <div />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-sm">
                US
              </div>
              <div>
                <p className="font-bold text-gray-900">{us.country}</p>
                <a
                  href={us.taxAuthorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold-dark hover:underline"
                >
                  {us.taxAuthority}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-sm">
                CN
              </div>
              <div>
                <p className="font-bold text-gray-900">{cn.country}</p>
                <a
                  href={cn.taxAuthorityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold-dark hover:underline"
                >
                  {cn.taxAuthority}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison rows */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <ComparisonRow
              label="Corporate rate"
              usValue={us.corporateRate}
              cnValue={cn.corporateRate}
              usDetail={us.corporateDetails}
              cnDetail={cn.corporateDetails}
            />

            <ComparisonRow
              label="Capital gains"
              usValue={us.capitalGainsRate}
              cnValue={cn.capitalGainsRate}
              usDetail={us.capitalGainsDetails}
              cnDetail={cn.capitalGainsDetails}
            />

            <ComparisonRow
              label="VAT / Sales tax"
              usValue={us.vatOrSalesTax}
              cnValue={cn.vatOrSalesTax}
              usDetail={us.vatDetails}
              cnDetail={cn.vatDetails}
            />

            <ComparisonRow
              label="Social security"
              usValue={us.socialSecurity}
              cnValue={cn.socialSecurity}
              usDetail={us.socialSecurityDetails}
              cnDetail={cn.socialSecurityDetails}
            />

            <ComparisonRow
              label="Filing deadline"
              usValue={us.filingDeadline}
              cnValue={cn.filingDeadline}
            />
          </div>
        </section>

        {/* Individual brackets side by side */}
        <section className="py-10 px-6 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              Individual income tax brackets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* US brackets */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    US
                  </span>
                  <h3 className="font-bold text-gray-900">
                    {us.country} ({us.currencySymbol})
                  </h3>
                </div>
                <BracketTable
                  brackets={us.individualBrackets}
                  symbol={us.currencySymbol}
                />
              </div>

              {/* CN brackets */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    CN
                  </span>
                  <h3 className="font-bold text-gray-900">
                    {cn.country} ({cn.currencySymbol})
                  </h3>
                </div>
                <BracketTable
                  brackets={cn.individualBrackets}
                  symbol={cn.currencySymbol}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Withholding rates */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              Withholding tax rates (non-residents)
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left py-3 px-4 font-semibold">Type</th>
                    <th className="text-center py-3 px-4 font-semibold">
                      {us.country}
                    </th>
                    <th className="text-center py-3 px-4 font-semibold">
                      {cn.country}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700">
                      Dividends
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {us.withholding.dividends}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {cn.withholding.dividends}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-700">
                      Interest
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {us.withholding.interest}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {cn.withholding.interest}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">
                      Royalties
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {us.withholding.royalties}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      {cn.withholding.royalties}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key features */}
        <section className="py-10 px-6 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              Key features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* US features */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    US
                  </span>
                  <h3 className="font-bold text-gray-900">{us.country}</h3>
                </div>
                <ul className="space-y-3">
                  {us.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex gap-2.5 text-sm">
                      <span className="text-gold mt-0.5 flex-shrink-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CN features */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    CN
                  </span>
                  <h3 className="font-bold text-gray-900">{cn.country}</h3>
                </div>
                <ul className="space-y-3">
                  {cn.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex gap-2.5 text-sm">
                      <span className="text-gold mt-0.5 flex-shrink-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-400 leading-relaxed text-center">
              This comparison is for educational purposes only and reflects
              general federal-level tax rules as of{" "}
              {us.lastUpdated.split("-")[0]}. Tax laws change frequently and may
              vary by jurisdiction. Consult a qualified tax professional for
              advice specific to your situation.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
