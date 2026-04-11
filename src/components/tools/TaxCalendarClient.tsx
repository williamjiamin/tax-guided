"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";

/* ------------------------------------------------------------------ */
/*  Deadline data                                                      */
/* ------------------------------------------------------------------ */

type DeadlineCategory = "federal" | "estimated" | "state" | "extension";

interface Deadline {
  month: number; /* 1-12 */
  day: number;
  title: string;
  description: string;
  category: DeadlineCategory;
  forms?: string[];
}

const DEADLINES: Deadline[] = [
  /* January */
  {
    month: 1,
    day: 15,
    title: "Q4 Estimated Tax Payment Due",
    description:
      "Fourth quarter estimated tax payment due for filers with Effectively Connected Income (ECI). Use Form 1040-ES (NR).",
    category: "estimated",
    forms: ["1040-ES (NR)"],
  },
  /* March */
  {
    month: 3,
    day: 1,
    title: "Delaware Franchise Tax Due (LLCs)",
    description:
      "Annual Delaware LLC franchise tax ($300 flat fee) is due. Late payment incurs a $200 penalty plus 1.5% monthly interest.",
    category: "state",
  },
  {
    month: 3,
    day: 15,
    title: "Form 1065 Due (Partnerships)",
    description:
      "Partnership tax return (Form 1065) due for calendar year partnerships. Schedule K-1s must also be issued to all partners by this date.",
    category: "federal",
    forms: ["1065", "K-1"],
  },
  /* April */
  {
    month: 4,
    day: 15,
    title: "Form 1120 + Form 5472 Due",
    description:
      "Annual information return for foreign-owned single-member LLCs. Form 1120 (pro forma) with attached Form 5472 reporting related-party transactions. $25,000 penalty per form if missed.",
    category: "federal",
    forms: ["1120", "5472"],
  },
  {
    month: 4,
    day: 15,
    title: "Form 1040-NR Due (ECI Filers)",
    description:
      "Non-resident alien income tax return for individuals with Effectively Connected Income. Report all US-source ECI and claim applicable deductions and treaty benefits.",
    category: "federal",
    forms: ["1040-NR"],
  },
  {
    month: 4,
    day: 15,
    title: "FBAR Due (Auto-Extended to Oct 15)",
    description:
      "Report of Foreign Bank and Financial Accounts (FinCEN Form 114). Due April 15 with automatic extension to October 15. No form needed for the extension.",
    category: "federal",
    forms: ["FinCEN 114"],
  },
  {
    month: 4,
    day: 15,
    title: "Q1 Estimated Tax Payment Due",
    description:
      "First quarter estimated tax payment for the current tax year. Required if you expect to owe $1,000 or more in US tax.",
    category: "estimated",
    forms: ["1040-ES (NR)"],
  },
  /* June */
  {
    month: 6,
    day: 1,
    title: "Delaware Franchise Tax Due (Corps)",
    description:
      "Annual franchise tax for Delaware corporations. Amount varies based on authorized shares or assumed par value method.",
    category: "state",
  },
  {
    month: 6,
    day: 15,
    title: "Q2 Estimated Tax Payment Due",
    description:
      "Second quarter estimated tax payment due for ECI filers.",
    category: "estimated",
    forms: ["1040-ES (NR)"],
  },
  {
    month: 6,
    day: 15,
    title: "Automatic 2-Month Extension (Taxpayers Abroad)",
    description:
      "Non-resident aliens outside the US get an automatic 2-month extension (to June 15) for filing Form 1040-NR. No application needed, but interest accrues from April 15.",
    category: "extension",
    forms: ["1040-NR"],
  },
  /* September */
  {
    month: 9,
    day: 15,
    title: "Q3 Estimated Tax Payment Due",
    description:
      "Third quarter estimated tax payment due for ECI filers.",
    category: "estimated",
    forms: ["1040-ES (NR)"],
  },
  {
    month: 9,
    day: 15,
    title: "Extended Form 1065 Due",
    description:
      "Partnership return due if a 6-month extension (Form 7004) was filed by March 15.",
    category: "extension",
    forms: ["1065"],
  },
  /* October */
  {
    month: 10,
    day: 15,
    title: "Extended Form 1120 + 5472 Due",
    description:
      "Extended deadline for Form 1120 + Form 5472 if a 6-month extension (Form 7004) was filed by April 15. This is the final deadline.",
    category: "extension",
    forms: ["1120", "5472"],
  },
  {
    month: 10,
    day: 15,
    title: "Extended Form 1040-NR Due",
    description:
      "Extended deadline for non-resident alien income tax return if Form 4868 was filed.",
    category: "extension",
    forms: ["1040-NR"],
  },
  {
    month: 10,
    day: 15,
    title: "FBAR Final Deadline",
    description:
      "Final deadline for filing the Report of Foreign Bank and Financial Accounts (FinCEN Form 114). No further extensions available.",
    category: "federal",
    forms: ["FinCEN 114"],
  },
  /* December */
  {
    month: 12,
    day: 31,
    title: "Tax Year End",
    description:
      "End of the calendar tax year for most filers. Ensure all bookkeeping is complete and all transactions are recorded for the year.",
    category: "federal",
  },
  /* Wyoming — state */
  {
    month: 1,
    day: 1,
    title: "Wyoming Annual Report Period Opens",
    description:
      "Wyoming LLC annual reports can be filed starting January 1. Due on the first day of the anniversary month of LLC formation. $60 minimum fee.",
    category: "state",
  },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const CATEGORY_CONFIG: Record<
  DeadlineCategory,
  { label: string; color: string; bg: string; border: string; dot: string; badge: string }
> = {
  federal: {
    label: "Federal Deadline",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
    dot: "bg-red-500",
    badge: "bg-red-100 text-red-700",
  },
  estimated: {
    label: "Estimated Payment",
    color: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
    dot: "bg-orange-400",
    badge: "bg-orange-100 text-orange-700",
  },
  state: {
    label: "State Deadline",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    dot: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  extension: {
    label: "Extension Deadline",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    dot: "bg-green-500",
    badge: "bg-green-100 text-green-700",
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function TaxCalendarClient() {
  const [expandedDeadline, setExpandedDeadline] = useState<string | null>(null);
  const [filter, setFilter] = useState<DeadlineCategory | "all">("all");

  /* Group deadlines by month */
  const deadlinesByMonth = MONTH_NAMES.map((name, i) => {
    const monthNum = i + 1;
    const monthDeadlines = DEADLINES.filter(
      (d) => d.month === monthNum && (filter === "all" || d.category === filter)
    );
    return { name, month: monthNum, deadlines: monthDeadlines };
  });

  const toggleDeadline = (key: string) => {
    setExpandedDeadline((prev) => (prev === key ? null : key));
  };

  /* Filtered deadlines for summary list */
  const filteredDeadlines = DEADLINES.filter(
    (d) => filter === "all" || d.category === filter
  ).sort((a, b) => a.month - b.month || a.day - b.day);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Page header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky-100/80 text-sky-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Tax Calendar
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              US Tax Calendar for Foreign LLC Owners
            </h1>
            <p className="text-lg text-gray-500">
              Every IRS deadline you need to know — federal filings, estimated payments, state obligations, and extensions.
            </p>
          </div>

          {/* Legend + filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {(["all", "federal", "estimated", "state", "extension"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? cat === "all"
                      ? "bg-gray-900 text-white"
                      : `${CATEGORY_CONFIG[cat].badge} ring-2 ring-offset-1 ring-current`
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat !== "all" && (
                  <span className={`w-2.5 h-2.5 rounded-full ${CATEGORY_CONFIG[cat].dot}`} />
                )}
                {cat === "all"
                  ? "All Deadlines"
                  : CATEGORY_CONFIG[cat].label + "s"}
              </button>
            ))}
          </div>

          {/* 12-month grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {deadlinesByMonth.map(({ name, month, deadlines: monthDeadlines }) => (
              <div
                key={month}
                className={`rounded-xl border p-4 transition-all ${
                  monthDeadlines.length > 0
                    ? "bg-white border-gray-200 shadow-sm"
                    : "bg-gray-50 border-gray-100"
                }`}
              >
                <h3
                  className={`text-sm font-bold mb-3 ${
                    monthDeadlines.length > 0 ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {name}
                </h3>

                {monthDeadlines.length === 0 ? (
                  <p className="text-xs text-gray-300">No deadlines</p>
                ) : (
                  <div className="space-y-2">
                    {monthDeadlines.map((d, i) => {
                      const key = `${month}-${d.day}-${i}`;
                      const cfg = CATEGORY_CONFIG[d.category];
                      const isExpanded = expandedDeadline === key;

                      return (
                        <button
                          key={key}
                          onClick={() => toggleDeadline(key)}
                          className={`w-full text-left rounded-lg border p-3 transition-all ${
                            isExpanded
                              ? `${cfg.bg} ${cfg.border}`
                              : "border-gray-100 hover:border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${cfg.dot}`} />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-xs font-bold text-gray-400">
                                  {MONTH_NAMES[month - 1].slice(0, 3)} {d.day}
                                </span>
                              </div>
                              <p className="text-xs font-semibold text-gray-800 leading-snug">
                                {d.title}
                              </p>

                              {isExpanded && (
                                <div className="mt-2 space-y-2">
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {d.description}
                                  </p>
                                  {d.forms && d.forms.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                      {d.forms.map((f) => (
                                        <span
                                          key={f}
                                          className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500"
                                        >
                                          Form {f}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                            <svg
                              className={`w-3.5 h-3.5 text-gray-300 shrink-0 mt-1 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Save dates CTA */}
          <div className="bg-sky-50 rounded-2xl border border-sky-200 p-6 md:p-8 text-center mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Save These Dates
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Bookmark this page or set reminders so you never miss a deadline. Late filing penalties for Form 5472 start at $25,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/tools/deadline-reminder"
                className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors text-sm"
              >
                Set Deadline Reminders
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </Link>
              <Link
                href="/filer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                File Form 5472 Now
              </Link>
            </div>
          </div>

          {/* Full deadline list */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Complete Deadline Summary
            </h3>
            <div className="space-y-3">
              {filteredDeadlines.map((d, i) => {
                const cfg = CATEGORY_CONFIG[d.category];
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-3 rounded-lg ${cfg.bg} ${cfg.border} border`}
                  >
                    <div className="w-16 shrink-0">
                      <p className="text-xs font-bold text-gray-500">
                        {MONTH_NAMES[d.month - 1].slice(0, 3)} {d.day}
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-semibold text-gray-800">{d.title}</p>
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${cfg.badge}`}>
                          {cfg.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{d.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Compliant Year-Round</h3>
            <p className="text-sm text-gray-500 mb-6">
              File your annual return, set up reminders, and let us handle the paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/filer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-600/20"
              >
                File Form 5472 — $49
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="https://partnersps.doola.com/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                Full Compliance with doola
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-400 max-w-lg mx-auto">
              Deadlines shown are for the current tax year and apply to calendar year filers. If a deadline
              falls on a weekend or federal holiday, the actual due date may shift to the next business day.
              This tool provides general guidance only and does not constitute legal or tax advice.
            </p>
          </div>

          <EmailCaptureBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
}
