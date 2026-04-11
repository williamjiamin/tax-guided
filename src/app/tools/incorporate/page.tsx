"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  INCORPORATION_COUNTRIES,
  type IncorporationCountry,
} from "@/lib/tools/incorporation-data";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BusinessType =
  | "saas"
  | "ecommerce"
  | "consulting"
  | "investment"
  | "content"
  | "other";

type RevenueRange = "under50k" | "50k-250k" | "250k-1m" | "over1m";

type Priority =
  | "lowest-tax"
  | "no-personal-tax"
  | "territorial"
  | "treaty-network"
  | "startup-ease"
  | "privacy";

interface UserAnswers {
  businessType: BusinessType | null;
  revenue: RevenueRange | null;
  residence: string;
  needsEmployees: boolean | null;
  priorities: Priority[];
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const BUSINESS_TYPES: { value: BusinessType; label: string; icon: string }[] = [
  { value: "saas", label: "SaaS / Software", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { value: "ecommerce", label: "E-commerce", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
  { value: "consulting", label: "Consulting / Services", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { value: "investment", label: "Investment / Holding", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "content", label: "Content Creation", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
  { value: "other", label: "Other", icon: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" },
];

const REVENUE_RANGES: { value: RevenueRange; label: string }[] = [
  { value: "under50k", label: "Under $50K" },
  { value: "50k-250k", label: "$50K - $250K" },
  { value: "250k-1m", label: "$250K - $1M" },
  { value: "over1m", label: "$1M+" },
];

const PRIORITIES: { value: Priority; label: string; description: string }[] = [
  { value: "lowest-tax", label: "Lowest corporate tax rate", description: "Minimize the headline corporate tax burden" },
  { value: "no-personal-tax", label: "No personal income tax", description: "Keep personal earnings tax-free" },
  { value: "territorial", label: "Territorial taxation", description: "Only taxed on locally-sourced income" },
  { value: "treaty-network", label: "Strong treaty network", description: "Reduce withholding taxes and avoid double taxation" },
  { value: "startup-ease", label: "Startup ecosystem / ease of business", description: "Fast setup, friendly regulations, tech infrastructure" },
  { value: "privacy", label: "Privacy / low reporting burden", description: "Minimal disclosure and reporting obligations" },
];

const COUNTRY_OPTIONS = INCORPORATION_COUNTRIES.map((c) => ({
  code: c.countryCode,
  name: c.country,
}));

/* ------------------------------------------------------------------ */
/*  Scoring Engine                                                     */
/* ------------------------------------------------------------------ */

function scoreCountry(country: IncorporationCountry, answers: UserAnswers): number {
  let score = 0;
  const priorities = answers.priorities;

  // Base score from priorities
  if (priorities.includes("lowest-tax")) {
    // Lower rate = higher score. Max rate in dataset ~34, so invert.
    score += Math.max(0, (35 - country.corporateRateNumeric) * 2);
  }

  if (priorities.includes("no-personal-tax")) {
    score += country.hasNoPersonalIncomeTax ? 40 : 0;
  }

  if (priorities.includes("territorial")) {
    score += country.hasTerritorialTax ? 35 : 0;
  }

  if (priorities.includes("treaty-network")) {
    score +=
      country.treatyNetworkStrength === "strong"
        ? 30
        : country.treatyNetworkStrength === "moderate"
          ? 15
          : 0;
  }

  if (priorities.includes("startup-ease")) {
    score += country.easeOfBusiness * 3;
    if (country.startupFriendly) score += 15;
  }

  if (priorities.includes("privacy")) {
    if (!country.requiresLocalPresence) score += 20;
    if (country.hasTerritorialTax) score += 10;
    if (country.vatRate === 0) score += 10;
  }

  // Business-type bonuses
  if (answers.businessType === "saas" || answers.businessType === "content") {
    if (country.hasTerritorialTax) score += 10;
    if (country.digitalNomadVisa) score += 5;
    if (!country.requiresLocalPresence) score += 5;
  }

  if (answers.businessType === "investment") {
    if (country.hasTerritorialTax) score += 15;
    if (country.hasNoPersonalIncomeTax) score += 10;
    if (country.treatyNetworkStrength === "strong") score += 10;
  }

  if (answers.businessType === "ecommerce") {
    if (country.vatRate <= 10) score += 10;
    if (country.easeOfBusiness >= 8) score += 5;
  }

  if (answers.businessType === "consulting") {
    if (country.treatyNetworkStrength === "strong") score += 10;
    if (country.easeOfBusiness >= 8) score += 5;
  }

  // Revenue-based adjustments
  if (answers.revenue === "over1m") {
    if (country.treatyNetworkStrength === "strong") score += 10;
  }
  if (answers.revenue === "under50k") {
    if (country.startupFriendly) score += 10;
    if (!country.requiresLocalPresence) score += 10;
  }

  // Employees
  if (answers.needsEmployees === false) {
    if (!country.requiresLocalPresence) score += 10;
  }

  // Slight penalty if user lives there (they may want a different jurisdiction)
  if (answers.residence === country.countryCode) {
    score -= 5;
  }

  return score;
}

function getMatchReasons(
  country: IncorporationCountry,
  priorities: Priority[],
): string[] {
  const reasons: string[] = [];

  if (priorities.includes("lowest-tax") && country.corporateRateNumeric <= 17) {
    reasons.push(`Low ${country.corporateRateNumeric}% corporate tax rate`);
  }
  if (priorities.includes("no-personal-tax") && country.hasNoPersonalIncomeTax) {
    reasons.push("Zero personal income tax");
  }
  if (priorities.includes("territorial") && country.hasTerritorialTax) {
    reasons.push("Territorial tax system -- foreign income generally untaxed");
  }
  if (priorities.includes("treaty-network") && country.treatyNetworkStrength === "strong") {
    reasons.push("Extensive double tax treaty network");
  }
  if (priorities.includes("startup-ease") && country.startupFriendly) {
    reasons.push(`Startup-friendly environment (${country.easeOfBusiness}/10 ease of business)`);
  }
  if (priorities.includes("privacy") && !country.requiresLocalPresence) {
    reasons.push("No local presence requirement");
  }

  if (reasons.length === 0) {
    if (country.corporateRateNumeric <= 17) {
      reasons.push(`Competitive ${country.corporateRateNumeric}% corporate rate`);
    }
    if (country.easeOfBusiness >= 8) {
      reasons.push(`High ease of business (${country.easeOfBusiness}/10)`);
    }
    if (country.hasTerritorialTax) {
      reasons.push("Territorial taxation");
    }
  }

  return reasons;
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                s < step
                  ? "bg-gold text-navy-dark"
                  : s === step
                    ? "bg-navy text-white ring-4 ring-navy/20"
                    : "bg-gray-200 text-gray-400"
              }`}
            >
              {s < step ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            {s < 3 && (
              <div
                className={`w-16 sm:w-32 md:w-48 h-1 mx-2 rounded-full transition-colors ${
                  s < step ? "bg-gold" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 text-center">
        Step {step} of 3 &mdash;{" "}
        {step === 1
          ? "Your Situation"
          : step === 2
            ? "Your Priorities"
            : "Recommendations"}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */

export default function IncorporatePage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<UserAnswers>({
    businessType: null,
    revenue: null,
    residence: "",
    needsEmployees: null,
    priorities: [],
  });

  const canProceedStep1 =
    answers.businessType !== null &&
    answers.revenue !== null &&
    answers.residence !== "" &&
    answers.needsEmployees !== null;

  const canProceedStep2 = answers.priorities.length > 0;

  const togglePriority = (p: Priority) => {
    setAnswers((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(p)
        ? prev.priorities.filter((x) => x !== p)
        : [...prev.priorities, p],
    }));
  };

  const rankedResults = useMemo(() => {
    if (step !== 3) return [];
    return INCORPORATION_COUNTRIES.map((country) => ({
      country,
      score: scoreCountry(country, answers),
      reasons: getMatchReasons(country, answers.priorities),
    }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [step, answers]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-16 pb-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-navy-light/60 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border border-gold/20">
              Incorporation Advisor
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Where Should You{" "}
              <span className="text-gold">Incorporate?</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Answer a few questions and we will rank the most tax-efficient
              jurisdictions for your business from our database of 20 countries.
            </p>
          </div>
        </section>

        {/* Wizard */}
        <section className="py-12 px-6 bg-gray-50 min-h-[60vh]">
          <div className="max-w-3xl mx-auto">
            <ProgressBar step={step} />

            {/* ---- STEP 1 ---- */}
            {step === 1 && (
              <div className="space-y-8">
                {/* Business type */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    What type of business do you run?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {BUSINESS_TYPES.map((bt) => (
                      <button
                        key={bt.value}
                        onClick={() =>
                          setAnswers((p) => ({ ...p, businessType: bt.value }))
                        }
                        className={`flex items-center gap-3 p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                          answers.businessType === bt.value
                            ? "border-gold bg-gold/10 text-navy-dark ring-2 ring-gold"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={bt.icon}
                          />
                        </svg>
                        {bt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Revenue */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Estimated annual revenue
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {REVENUE_RANGES.map((r) => (
                      <button
                        key={r.value}
                        onClick={() =>
                          setAnswers((p) => ({ ...p, revenue: r.value }))
                        }
                        className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                          answers.revenue === r.value
                            ? "border-gold bg-gold/10 text-navy-dark ring-2 ring-gold"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Residence */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Where do you currently live?
                  </label>
                  <select
                    value={answers.residence}
                    onChange={(e) =>
                      setAnswers((p) => ({ ...p, residence: e.target.value }))
                    }
                    className="w-full max-w-md px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select a country...</option>
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                {/* Local employees */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Do you need local employees?
                  </label>
                  <div className="flex gap-3">
                    {[
                      { label: "Yes", value: true },
                      { label: "No", value: false },
                    ].map((opt) => (
                      <button
                        key={String(opt.value)}
                        onClick={() =>
                          setAnswers((p) => ({
                            ...p,
                            needsEmployees: opt.value,
                          }))
                        }
                        className={`px-8 py-3 rounded-xl border text-sm font-medium transition-all ${
                          answers.needsEmployees === opt.value
                            ? "border-gold bg-gold/10 text-navy-dark ring-2 ring-gold"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next */}
                <div className="pt-4">
                  <button
                    disabled={!canProceedStep1}
                    onClick={() => setStep(2)}
                    className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all ${
                      canProceedStep1
                        ? "bg-navy text-white hover:bg-navy-light shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Next: Set Your Priorities
                  </button>
                </div>
              </div>
            )}

            {/* ---- STEP 2 ---- */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    What matters most to you?
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Select one or more priorities. We will weight our
                    recommendations accordingly.
                  </p>
                  <div className="space-y-3">
                    {PRIORITIES.map((p) => (
                      <button
                        key={p.value}
                        onClick={() => togglePriority(p.value)}
                        className={`w-full flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${
                          answers.priorities.includes(p.value)
                            ? "border-gold bg-gold/10 ring-2 ring-gold"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                            answers.priorities.includes(p.value)
                              ? "bg-gold border-gold text-navy-dark"
                              : "border-gray-300"
                          }`}
                        >
                          {answers.priorities.includes(p.value) && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {p.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {p.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 rounded-xl border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    disabled={!canProceedStep2}
                    onClick={() => setStep(3)}
                    className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all ${
                      canProceedStep2
                        ? "bg-gold text-navy-dark hover:bg-gold-light shadow-lg shadow-gold/20"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Show My Recommendations
                  </button>
                </div>
              </div>
            )}

            {/* ---- STEP 3 ---- */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                    Your Top Jurisdictions
                  </h2>
                  <p className="text-sm text-gray-500">
                    Ranked by how well each country matches your priorities.
                    Results are for educational purposes only &mdash; consult a
                    tax professional before making decisions.
                  </p>
                </div>

                <div className="space-y-5">
                  {rankedResults.map((result, idx) => (
                    <div
                      key={result.country.countryCode}
                      className={`bg-white rounded-2xl border p-6 transition-all ${
                        idx === 0
                          ? "border-gold shadow-lg ring-2 ring-gold/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                              idx === 0
                                ? "bg-gold text-navy-dark"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">
                              {result.country.country}
                            </h3>
                            <span className="inline-block mt-0.5 text-[10px] font-bold uppercase tracking-wider bg-navy/10 text-navy px-2 py-0.5 rounded">
                              {result.country.countryCode}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-extrabold text-navy">
                            {result.country.corporateRateNumeric}%
                          </div>
                          <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                            Corp. Tax
                          </div>
                        </div>
                      </div>

                      {/* Why it fits */}
                      {result.reasons.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gold-dark mb-2">
                            Why It Fits
                          </h4>
                          <ul className="space-y-1">
                            {result.reasons.map((r) => (
                              <li
                                key={r}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <svg
                                  className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {result.country.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="text-navy mt-1 flex-shrink-0">
                                &bull;
                              </span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Caveats */}
                      <div className="mb-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                          Watch Out For
                        </h4>
                        <ul className="space-y-1">
                          {result.country.caveats.map((c) => (
                            <li
                              key={c}
                              className="flex items-start gap-2 text-sm text-gray-500"
                            >
                              <svg
                                className="w-4 h-4 text-red-300 flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                />
                              </svg>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Link to compare */}
                      <Link
                        href={`/compare?countries=${result.country.countryCode}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
                      >
                        View full tax profile
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors"
                  >
                    Adjust Priorities
                  </button>
                  <button
                    onClick={() => {
                      setStep(1);
                      setAnswers({
                        businessType: null,
                        revenue: null,
                        residence: "",
                        needsEmployees: null,
                        priorities: [],
                      });
                    }}
                    className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors"
                  >
                    Start Over
                  </button>
                  <Link
                    href="/compare"
                    className="px-6 py-3 rounded-xl bg-navy text-white font-bold text-sm hover:bg-navy-light transition-colors text-center"
                  >
                    Compare Countries Side-by-Side
                  </Link>
                </div>

                {/* Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="text-sm font-bold text-amber-800 mb-1">
                        For Educational Purposes Only
                      </h4>
                      <p className="text-xs text-amber-700 leading-relaxed">
                        This tool provides general information based on headline
                        tax rates and common characteristics. Tax laws are
                        complex and change frequently. Your actual tax liability
                        depends on many factors including your specific
                        circumstances, applicable treaties, and local
                        regulations. Always consult a qualified tax professional
                        before making incorporation decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
