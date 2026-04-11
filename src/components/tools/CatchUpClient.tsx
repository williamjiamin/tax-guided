"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

export function CatchUpClient() {
  const { t } = useT();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("catchUp.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("catchUp.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("catchUp.subtitle")}
            </p>
          </div>

          {/* Why Act Now */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-red-900 mb-3">
              {t("catchUp.whyActNow")}
            </h2>
            <p className="text-sm text-red-800 leading-relaxed mb-3">
              {t("catchUp.whyActNowDesc")}
            </p>
            <p className="text-sm font-bold text-red-700 bg-red-100 rounded-lg p-3">
              {t("catchUp.penaltyExample")}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-10">
            {([
              { key: "step1", num: 1, color: "blue" },
              { key: "step2", num: 2, color: "blue" },
              { key: "step3", num: 3, color: "amber" },
              { key: "step4", num: 4, color: "emerald" },
            ] as const).map(({ key, num, color }) => (
              <div
                key={key}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      color === "amber"
                        ? "bg-amber-100"
                        : color === "emerald"
                          ? "bg-emerald-100"
                          : "bg-blue-100"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold ${
                        color === "amber"
                          ? "text-amber-600"
                          : color === "emerald"
                            ? "text-emerald-600"
                            : "text-blue-600"
                      }`}
                    >
                      {num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t(`catchUp.${key}Title`)}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t(`catchUp.${key}Desc`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reasonable Cause */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t("catchUp.reasonableCause")}
            </h2>
            <ul className="space-y-3 mb-4">
              {(["rc1", "rc2", "rc3", "rc4"] as const).map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    {t(`catchUp.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 bg-gray-50 rounded-lg p-3">
              {t("catchUp.rcNote")}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/filer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20"
            >
              {t("catchUp.startFiling")}
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
            <Link
              href="/tools/penalty-calculator"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-[15px]"
            >
              {t("catchUp.calcPenalty")}
            </Link>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            {t("catchUp.filePerYear")}
          </p>

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
