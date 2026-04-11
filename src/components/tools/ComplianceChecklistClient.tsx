"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

interface CheckItem {
  key: string;
  checked: boolean;
}

interface CheckSection {
  titleKey: string;
  items: CheckItem[];
}

const INITIAL_SECTIONS: CheckSection[] = [
  {
    titleKey: "checklist.llcInfo",
    items: [
      { key: "checklist.llcName", checked: false },
      { key: "checklist.ein", checked: false },
      { key: "checklist.formationDate", checked: false },
      { key: "checklist.formationState", checked: false },
    ],
  },
  {
    titleKey: "checklist.ownerInfo",
    items: [
      { key: "checklist.ownerName", checked: false },
      { key: "checklist.ownerCountry", checked: false },
      { key: "checklist.ownerAddress", checked: false },
      { key: "checklist.ownerTin", checked: false },
    ],
  },
  {
    titleKey: "checklist.transactions",
    items: [
      { key: "checklist.capitalContributions", checked: false },
      { key: "checklist.formationCosts", checked: false },
      { key: "checklist.expenses", checked: false },
      { key: "checklist.distributions", checked: false },
      { key: "checklist.servicePayments", checked: false },
    ],
  },
  {
    titleKey: "checklist.filingPrep",
    items: [
      { key: "checklist.taxYear", checked: false },
      { key: "checklist.priorFilings", checked: false },
      { key: "checklist.deadline", checked: false },
      { key: "checklist.deliveryMethod", checked: false },
    ],
  },
];

export function ComplianceChecklistClient() {
  const { t } = useT();
  const [sections, setSections] = useState<CheckSection[]>(
    () => INITIAL_SECTIONS.map((s) => ({
      ...s,
      items: s.items.map((i) => ({ ...i })),
    }))
  );

  const toggle = (sectionIdx: number, itemIdx: number) => {
    setSections((prev) =>
      prev.map((s, si) =>
        si !== sectionIdx
          ? s
          : {
              ...s,
              items: s.items.map((item, ii) =>
                ii !== itemIdx ? item : { ...item, checked: !item.checked }
              ),
            }
      )
    );
  };

  const { done, total } = useMemo(() => {
    let d = 0;
    let tot = 0;
    for (const s of sections) {
      for (const item of s.items) {
        tot++;
        if (item.checked) d++;
      }
    }
    return { done: d, total: tot };
  }, [sections]);

  const allDone = done === total;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("checklist.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("checklist.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("checklist.subtitle")}
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                {t("checklist.progress", { done: String(done), total: String(total) })}
              </span>
              <span className="text-sm font-bold text-emerald-600">{pct}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, si) => (
              <div
                key={section.titleKey}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  {t(section.titleKey)}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, ii) => (
                    <label
                      key={item.key}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => toggle(si, ii)}
                          className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                      </div>
                      <span
                        className={`text-sm leading-relaxed transition-colors ${
                          item.checked
                            ? "text-gray-400 line-through"
                            : "text-gray-700 group-hover:text-gray-900"
                        }`}
                      >
                        {t(item.key)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            {allDone ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">&#10003;</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                  {t("checklist.allDone")}
                </h3>
                <p className="text-sm text-emerald-600 mb-6">
                  {t("checklist.allDoneDesc")}
                </p>
                <Link
                  href="/filer"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20"
                >
                  {t("checklist.startFiling")}
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
              </div>
            ) : (
              <p className="text-center text-sm text-gray-400">
                {t("checklist.notReady")}
              </p>
            )}
          </div>

          {/* Print / Download buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => window.print()}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors underline"
            >
              {t("checklist.printChecklist")}
            </button>
          </div>

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
