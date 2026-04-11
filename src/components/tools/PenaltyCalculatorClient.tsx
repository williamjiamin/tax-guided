"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

function calculatePenalty(
  formsMissed: number,
  yearsMissed: number,
  daysAfterNotice: number
) {
  const basePenalty = formsMissed * yearsMissed * 25000;
  const additionalPeriods = Math.max(
    0,
    Math.floor((daysAfterNotice - 90) / 30)
  );
  const additionalPenalty =
    additionalPeriods * 25000 * formsMissed * yearsMissed;
  return {
    basePenalty,
    additionalPenalty,
    total: basePenalty + additionalPenalty,
    additionalPeriods,
  };
}

export function PenaltyCalculatorClient() {
  const { t } = useT();
  const [formsMissed, setFormsMissed] = useState(1);
  const [yearsMissed, setYearsMissed] = useState(1);
  const [daysAfterNotice, setDaysAfterNotice] = useState(0);

  const penalty = useMemo(
    () => calculatePenalty(formsMissed, yearsMissed, daysAfterNotice),
    [formsMissed, yearsMissed, daysAfterNotice]
  );

  const formatCurrency = (n: number) =>
    "$" + n.toLocaleString("en-US");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-red-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100/80 text-red-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("penaltyCalc.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("penaltyCalc.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("penaltyCalc.subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10">
            {/* Inputs */}
            <div className="space-y-6 mb-8">
              {/* Forms Missed */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("penaltyCalc.formsMissed")}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={formsMissed}
                    onChange={(e) => setFormsMissed(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <span className="w-10 text-center text-lg font-bold text-gray-900">
                    {formsMissed}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {t("penaltyCalc.formsMissedHint")}
                </p>
              </div>

              {/* Years Missed */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("penaltyCalc.yearsMissed")}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={yearsMissed}
                    onChange={(e) => setYearsMissed(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <span className="w-10 text-center text-lg font-bold text-gray-900">
                    {yearsMissed}
                  </span>
                </div>
              </div>

              {/* Days After Notice */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("penaltyCalc.daysAfterNotice")}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={0}
                    max={365}
                    step={30}
                    value={daysAfterNotice}
                    onChange={(e) => setDaysAfterNotice(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <span className="w-14 text-center text-lg font-bold text-gray-900">
                    {daysAfterNotice}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {t("penaltyCalc.daysHint")}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-8" />

            {/* Result */}
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                {t("penaltyCalc.totalExposure")}
              </p>
              <p className="text-5xl md:text-6xl font-extrabold text-red-600 tracking-tight mb-4">
                {formatCurrency(penalty.total)}
              </p>

              {/* Breakdown */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="bg-gray-50 rounded-xl p-4 flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    {t("penaltyCalc.basePenalty")}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {formatCurrency(penalty.basePenalty)}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {formsMissed} x {yearsMissed} x $25,000
                  </p>
                </div>
                {penalty.additionalPenalty > 0 && (
                  <div className="bg-red-50 rounded-xl p-4 flex-1">
                    <p className="text-xs text-red-600 mb-1">
                      {t("penaltyCalc.additionalPenalty")}
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      +{formatCurrency(penalty.additionalPenalty)}
                    </p>
                    <p className="text-[11px] text-red-400 mt-0.5">
                      {penalty.additionalPeriods} x 30-day periods after 90 days
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                href="/filer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20"
              >
                {t("penaltyCalc.fileCta")}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-[11px] text-gray-400 mt-4">
                {t("penaltyCalc.onlyForty9")}
              </p>
            </div>
          </div>

          {/* IRS Source */}
          <div className="text-center mt-6">
            <a
              href="https://www.irs.gov/instructions/i5472"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {t("penaltyCalc.source")}
            </a>
          </div>

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
