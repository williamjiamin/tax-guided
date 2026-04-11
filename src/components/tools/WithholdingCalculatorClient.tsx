"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

interface Partner {
  name: string;
  type: "individual" | "corporation";
  ownership: number;
}

function createPartner(): Partner {
  return { name: "", type: "individual", ownership: 0 };
}

function calculateWithholding(ecti: number, partners: Partner[]) {
  const breakdown = partners.map((p, i) => {
    const ectiShare = ecti * (p.ownership / 100);
    const rate = p.type === "individual" ? 0.37 : 0.21;
    const withholding = ectiShare * rate;
    return {
      index: i,
      name: p.name || `Partner ${i + 1}`,
      type: p.type,
      ownership: p.ownership,
      ectiShare,
      rate,
      withholding,
    };
  });
  const totalWithholding = breakdown.reduce((s, b) => s + b.withholding, 0);
  return { breakdown, totalWithholding };
}

export function WithholdingCalculatorClient() {
  const { t } = useT();

  const [ecti, setEcti] = useState<string>("");
  const [partners, setPartners] = useState<Partner[]>([createPartner()]);

  const ectiNum = Number(ecti) || 0;

  const totalOwnership = partners.reduce((s, p) => s + p.ownership, 0);
  const ownershipError = totalOwnership > 100;

  const result = useMemo(
    () => calculateWithholding(ectiNum, partners),
    [ectiNum, partners]
  );

  const formatCurrency = (n: number) =>
    "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const quarterlyAmount = result.totalWithholding / 4;

  const updatePartner = (index: number, updates: Partial<Partner>) => {
    setPartners((prev) =>
      prev.map((p, i) => (i === index ? { ...p, ...updates } : p))
    );
  };

  const addPartner = () => {
    if (partners.length < 10) {
      setPartners((prev) => [...prev, createPartner()]);
    }
  };

  const removePartner = (index: number) => {
    if (partners.length > 1) {
      setPartners((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("withholdingCalc.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("withholdingCalc.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("withholdingCalc.subtitle")}
            </p>
          </div>

          {/* Inputs Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10">
            <div className="space-y-6 mb-8">
              {/* ECTI Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("withholdingCalc.ectiLabel")}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                  <input
                    type="number"
                    min={0}
                    value={ecti}
                    onChange={(e) => setEcti(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-lg font-medium text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Partner Count Display */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("withholdingCalc.partnerCountLabel").replace("{count}", String(partners.length))}
                </label>
                {ownershipError && (
                  <p className="text-sm text-red-600 font-medium">
                    {t("withholdingCalc.ownershipError").replace("{total}", totalOwnership.toFixed(1))}
                  </p>
                )}
              </div>

              {/* Partner Rows */}
              <div className="space-y-4">
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl p-4 bg-gray-50/50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-700">
                        {t("withholdingCalc.partnerLabel").replace("{n}", String(i + 1))}
                      </h3>
                      {partners.length > 1 && (
                        <button
                          onClick={() => removePartner(i)}
                          className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
                        >
                          {t("withholdingCalc.remove")}
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* Name */}
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          {t("withholdingCalc.nameLabel")}
                        </label>
                        <input
                          type="text"
                          value={partner.name}
                          onChange={(e) =>
                            updatePartner(i, { name: e.target.value })
                          }
                          placeholder={`Partner ${i + 1}`}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>

                      {/* Type */}
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          {t("withholdingCalc.partnerTypeLabel")}
                        </label>
                        <div className="flex flex-col gap-1.5 mt-0.5">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name={`type-${i}`}
                              checked={partner.type === "individual"}
                              onChange={() =>
                                updatePartner(i, { type: "individual" })
                              }
                              className="accent-teal-600"
                            />
                            <span className="text-xs text-gray-700">{t("withholdingCalc.typeIndividual")}</span>
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name={`type-${i}`}
                              checked={partner.type === "corporation"}
                              onChange={() =>
                                updatePartner(i, { type: "corporation" })
                              }
                              className="accent-teal-600"
                            />
                            <span className="text-xs text-gray-700">{t("withholdingCalc.typeCorporation")}</span>
                          </label>
                        </div>
                      </div>

                      {/* Ownership */}
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          {t("withholdingCalc.ownershipLabel")}
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min={0}
                            max={100}
                            value={partner.ownership || ""}
                            onChange={(e) =>
                              updatePartner(i, {
                                ownership: Math.min(100, Math.max(0, Number(e.target.value) || 0)),
                              })
                            }
                            placeholder="0"
                            className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Partner Button */}
              {partners.length < 10 && (
                <button
                  onClick={addPartner}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-teal-300 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  {t("withholdingCalc.addPartner")}
                </button>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-8" />

            {/* Results */}
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                {t("withholdingCalc.totalWithholding")}
              </p>
              <p className="text-5xl md:text-6xl font-extrabold text-teal-600 tracking-tight mb-6">
                {formatCurrency(result.totalWithholding)}
              </p>

              {/* Breakdown Table */}
              {partners.some((p) => p.ownership > 0) && ectiNum > 0 && (
                <div className="mt-6 mb-8 overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="pb-2 font-semibold text-gray-600">{t("withholdingCalc.tablePartner")}</th>
                        <th className="pb-2 font-semibold text-gray-600">{t("withholdingCalc.tableType")}</th>
                        <th className="pb-2 font-semibold text-gray-600 text-right">{t("withholdingCalc.tableOwnership")}</th>
                        <th className="pb-2 font-semibold text-gray-600 text-right">{t("withholdingCalc.tableEctiShare")}</th>
                        <th className="pb-2 font-semibold text-gray-600 text-right">{t("withholdingCalc.tableRate")}</th>
                        <th className="pb-2 font-semibold text-gray-600 text-right">{t("withholdingCalc.tableWithholding")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.breakdown
                        .filter((b) => b.ownership > 0)
                        .map((b) => (
                          <tr key={b.index} className="border-b border-gray-100">
                            <td className="py-2 text-gray-900">{b.name}</td>
                            <td className="py-2 text-gray-600 capitalize">{b.type}</td>
                            <td className="py-2 text-gray-600 text-right">{b.ownership}%</td>
                            <td className="py-2 text-gray-900 text-right">{formatCurrency(b.ectiShare)}</td>
                            <td className="py-2 text-gray-600 text-right">{(b.rate * 100).toFixed(0)}%</td>
                            <td className="py-2 font-semibold text-gray-900 text-right">{formatCurrency(b.withholding)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Required Forms */}
              <div className="bg-gray-50 rounded-xl p-6 text-left mb-6">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">
                  {t("withholdingCalc.requiredForms")}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <span className="font-semibold">Form 8813</span> — {t("withholdingCalc.form8813Desc")}
                  </li>
                  <li>
                    <span className="font-semibold">Form 8804</span> — {t("withholdingCalc.form8804Desc")}
                  </li>
                  <li>
                    <span className="font-semibold">Form 8805</span> — {t("withholdingCalc.form8805Desc")}
                  </li>
                </ul>
              </div>

              {/* Payment Schedule */}
              {result.totalWithholding > 0 && (
                <div className="bg-teal-50 rounded-xl p-6 text-left mb-8">
                  <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-3">
                    {t("withholdingCalc.quarterlySchedule")}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Q1", date: "April 15" },
                      { label: "Q2", date: "June 15" },
                      { label: "Q3", date: "Sept 15" },
                      { label: "Q4", date: "Dec 15" },
                    ].map((q) => (
                      <div key={q.label} className="bg-white rounded-lg p-3 text-center">
                        <p className="text-xs text-teal-600 font-semibold">{q.label}</p>
                        <p className="text-xs text-gray-500">{q.date}</p>
                        <p className="text-sm font-bold text-gray-900 mt-1">
                          {formatCurrency(quarterlyAmount)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link
                href="/filer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors text-[15px] shadow-lg shadow-teal-600/20"
              >
                {t("withholdingCalc.fileCta")}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Educational Section */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t("withholdingCalc.eduSection1446Title")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("withholdingCalc.eduSection1446Desc")}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t("withholdingCalc.eduWhenTitle")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("withholdingCalc.eduWhenDesc")}
              </p>
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm font-semibold text-amber-800">
                  {t("withholdingCalc.eduWhenImportant")}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t("withholdingCalc.eduReduceTitle")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("withholdingCalc.eduReduceDesc")}
              </p>
            </div>

            {/* Related Tools */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {t("withholdingCalc.relatedTools")}
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/eci-assessment"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {t("withholdingCalc.eciAssessmentLink")}
                </Link>
                <Link
                  href="/tools/penalty-calculator"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {t("withholdingCalc.penaltyCalcLink")}
                </Link>
                <Link
                  href="/tools/forms-wizard"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {t("withholdingCalc.formsWizardLink")}
                </Link>
              </div>
            </div>
          </div>

          {/* IRS Source */}
          <div className="text-center mt-6">
            <a
              href="https://www.irs.gov/instructions/i8804"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {t("withholdingCalc.irsSource")}
            </a>
          </div>

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
