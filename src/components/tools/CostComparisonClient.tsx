"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

type FilingType = "single" | "multi" | "both";
type Complexity = "simple" | "standard" | "complex";
type Location = "us" | "international";

interface CostBreakdown {
  cpa: number;
  platform: number;
  ours: number;
}

function calculateCosts(
  filingType: FilingType,
  years: number,
  complexity: Complexity,
  location: Location
): CostBreakdown {
  // CPA costs per filing
  const cpaBase: Record<FilingType, Record<Complexity, number>> = {
    single: { simple: 400, standard: 650, complex: 900 },
    multi: { simple: 800, standard: 1600, complex: 2500 },
    both: { simple: 1200, standard: 2250, complex: 3400 },
  };

  let cpaPerYear = cpaBase[filingType][complexity];
  if (location === "international") {
    cpaPerYear = Math.round(cpaPerYear * 1.3);
  }
  const cpaTotal = cpaPerYear * years;

  // Online platform costs
  const platformBase: Record<FilingType, Record<Complexity, number>> = {
    single: { simple: 150, standard: 225, complex: 300 },
    multi: { simple: 300, standard: 450, complex: 600 },
    both: { simple: 450, standard: 675, complex: 900 },
  };
  const subscriptionFee: Record<Complexity, number> = {
    simple: 50,
    standard: 75,
    complex: 100,
  };

  const platformPerYear =
    platformBase[filingType][complexity] + subscriptionFee[complexity];
  const platformTotal = platformPerYear * years;

  // Our costs — flat rate, no subscription
  const ourBase: Record<FilingType, number> = {
    single: 49,
    multi: 199,
    both: 248,
  };
  const oursTotal = ourBase[filingType] * years;

  return { cpa: cpaTotal, platform: platformTotal, ours: oursTotal };
}

function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

export function CostComparisonClient() {
  const { t } = useT();
  const [filingType, setFilingType] = useState<FilingType>("single");
  const [years, setYears] = useState(1);
  const [complexity, setComplexity] = useState<Complexity>("simple");
  const [location, setLocation] = useState<Location>("us");

  const costs = useMemo(
    () => calculateCosts(filingType, years, complexity, location),
    [filingType, years, complexity, location]
  );

  const maxCost = Math.max(costs.cpa, costs.platform, costs.ours, 1);

  const cpaSavings = costs.cpa - costs.ours;
  const platformSavings = costs.platform - costs.ours;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("costComparison.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("costComparison.title")}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t("costComparison.subtitle")}
            </p>
          </div>

          {/* Inputs Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Filing Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("costComparison.filingTypeLabel")}
                </label>
                <select
                  value={filingType}
                  onChange={(e) => setFilingType(e.target.value as FilingType)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors bg-white"
                >
                  <option value="single">
                    {t("costComparison.filingTypeSingle")}
                  </option>
                  <option value="multi">
                    {t("costComparison.filingTypeMulti")}
                  </option>
                  <option value="both">{t("costComparison.filingTypeBoth")}</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("costComparison.cpaLocationLabel")}
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value as Location)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors bg-white"
                >
                  <option value="us">{t("costComparison.cpaLocationUs")}</option>
                  <option value="international">{t("costComparison.cpaLocationIntl")}</option>
                </select>
              </div>

              {/* Complexity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("costComparison.complexityLabel")}
                </label>
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value as Complexity)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors bg-white"
                >
                  <option value="simple">{t("costComparison.complexitySimple")}</option>
                  <option value="standard">
                    {t("costComparison.complexityStandard")}
                  </option>
                  <option value="complex">
                    {t("costComparison.complexityComplex")}
                  </option>
                </select>
              </div>

              {/* Years Slider */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("costComparison.yearsLabel")}{" "}
                  <span className="text-indigo-600">{years}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mt-2"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{t("costComparison.year1")}</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>{t("costComparison.year5")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t("costComparison.totalCostTitle")
                .replace("{years}", String(years))
                .replace("{yearLabel}", years === 1 ? t("costComparison.yearSingular") : t("costComparison.yearPlural"))}
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              {t("costComparison.estimatedDesc")}
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="pb-3 font-semibold text-gray-600"></th>
                    <th className="pb-3 font-semibold text-gray-600 text-center">
                      {t("costComparison.colGeneralCpa")}
                    </th>
                    <th className="pb-3 font-semibold text-gray-600 text-center">
                      {t("costComparison.colOnlinePlatform")}
                    </th>
                    <th className="pb-3 font-semibold text-violet-700 text-center">
                      {t("costComparison.colForeignLlcTax")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700 font-medium">
                      {t("costComparison.rowPerYear")}
                    </td>
                    <td className="py-3 text-gray-900 text-center font-medium">
                      {formatCurrency(Math.round(costs.cpa / years))}
                    </td>
                    <td className="py-3 text-gray-900 text-center font-medium">
                      {formatCurrency(Math.round(costs.platform / years))}
                    </td>
                    <td className="py-3 text-violet-700 text-center font-bold">
                      {formatCurrency(Math.round(costs.ours / years))}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700 font-medium">
                      {t("costComparison.rowSubscription")}
                    </td>
                    <td className="py-3 text-gray-500 text-center">{t("costComparison.subscriptionNa")}</td>
                    <td className="py-3 text-gray-900 text-center">
                      {t("costComparison.subscriptionIncluded")}
                    </td>
                    <td className="py-3 text-green-600 text-center font-semibold">
                      {t("costComparison.subscriptionNone")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700 font-medium">
                      {t("costComparison.rowYearTotal").replace("{years}", String(years))}
                    </td>
                    <td className="py-3 text-gray-900 text-center text-lg font-bold">
                      {formatCurrency(costs.cpa)}
                    </td>
                    <td className="py-3 text-gray-900 text-center text-lg font-bold">
                      {formatCurrency(costs.platform)}
                    </td>
                    <td className="py-3 text-violet-700 text-center text-lg font-extrabold">
                      {formatCurrency(costs.ours)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-700 font-medium">
                      {t("costComparison.rowYouSave")}
                    </td>
                    <td className="py-3 text-green-600 text-center font-bold">
                      {formatCurrency(cpaSavings)}
                    </td>
                    <td className="py-3 text-green-600 text-center font-bold">
                      {formatCurrency(platformSavings)}
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-flex items-center gap-1 bg-violet-100 text-violet-700 px-2.5 py-0.5 rounded-full text-xs font-bold">
                        {t("costComparison.bestValue")}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Visual Bar Chart */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                {t("costComparison.visualComparison")}
              </h3>

              {/* CPA Bar */}
              <div className="flex items-center gap-4">
                <div className="w-32 sm:w-40 text-sm text-gray-700 font-medium text-right shrink-0">
                  {t("costComparison.colGeneralCpa")}
                </div>
                <div className="flex-1 relative">
                  <div
                    className="h-10 bg-gray-300 rounded-lg transition-all duration-500 ease-out flex items-center"
                    style={{
                      width: `${Math.max((costs.cpa / maxCost) * 100, 8)}%`,
                    }}
                  >
                    <span className="text-sm font-bold text-gray-700 px-3 whitespace-nowrap">
                      {formatCurrency(costs.cpa)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Platform Bar */}
              <div className="flex items-center gap-4">
                <div className="w-32 sm:w-40 text-sm text-gray-700 font-medium text-right shrink-0">
                  {t("costComparison.colOnlinePlatform")}
                </div>
                <div className="flex-1 relative">
                  <div
                    className="h-10 bg-indigo-200 rounded-lg transition-all duration-500 ease-out flex items-center"
                    style={{
                      width: `${Math.max((costs.platform / maxCost) * 100, 8)}%`,
                    }}
                  >
                    <span className="text-sm font-bold text-indigo-700 px-3 whitespace-nowrap">
                      {formatCurrency(costs.platform)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Our Bar */}
              <div className="flex items-center gap-4">
                <div className="w-32 sm:w-40 text-sm text-violet-700 font-bold text-right shrink-0">
                  {t("costComparison.colForeignLlcTax")}
                </div>
                <div className="flex-1 relative">
                  <div
                    className="h-10 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg transition-all duration-500 ease-out flex items-center"
                    style={{
                      width: `${Math.max((costs.ours / maxCost) * 100, 8)}%`,
                    }}
                  >
                    <span className="text-sm font-bold text-white px-3 whitespace-nowrap">
                      {formatCurrency(costs.ours)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's NOT Included Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              {t("costComparison.cheaperOptionsTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {t("costComparison.card1Title")}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("costComparison.card1Text")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {t("costComparison.card2Title")}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("costComparison.card2Text")}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {t("costComparison.card3Title")}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("costComparison.card3Text")}
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-200 shadow-sm p-6">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-violet-900 mb-2">
                  {t("costComparison.card4Title")}
                </h3>
                <p className="text-sm text-violet-700 leading-relaxed">
                  {t("costComparison.card4Text")}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/filer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all text-[15px] shadow-lg shadow-violet-600/20"
            >
              {t("costComparison.ctaButton")}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              {t("costComparison.ctaSubtext")}
            </p>
          </div>

          {/* Related Tools */}
          <div className="mt-12 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t("costComparison.relatedTools")}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/penalty-calculator"
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {t("costComparison.linkPenaltyCalc")}
              </Link>
              <Link
                href="/tools/forms-wizard"
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {t("costComparison.linkFormsWizard")}
              </Link>
              <Link
                href="/tools/eci-assessment"
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {t("costComparison.linkEciAssessment")}
              </Link>
            </div>
          </div>

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
