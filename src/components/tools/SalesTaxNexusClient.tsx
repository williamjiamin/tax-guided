"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";

/* ------------------------------------------------------------------ */
/*  State nexus thresholds                                             */
/* ------------------------------------------------------------------ */

interface StateThreshold {
  state: string;
  abbr: string;
  salesThreshold: number;
  transactionThreshold: number | null;
  note: string;
}

const STATE_THRESHOLDS: StateThreshold[] = [
  { state: "Alabama", abbr: "AL", salesThreshold: 250_000, transactionThreshold: null, note: "Marketplace facilitator law applies" },
  { state: "Arizona", abbr: "AZ", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "California", abbr: "CA", salesThreshold: 500_000, transactionThreshold: null, note: "Highest threshold in the US" },
  { state: "Colorado", abbr: "CO", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Connecticut", abbr: "CT", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Florida", abbr: "FL", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Georgia", abbr: "GA", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Hawaii", abbr: "HI", salesThreshold: 100_000, transactionThreshold: 200, note: "GET applies instead of traditional sales tax" },
  { state: "Idaho", abbr: "ID", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Illinois", abbr: "IL", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Indiana", abbr: "IN", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Iowa", abbr: "IA", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Kansas", abbr: "KS", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Kentucky", abbr: "KY", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Louisiana", abbr: "LA", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Maine", abbr: "ME", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Maryland", abbr: "MD", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Massachusetts", abbr: "MA", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Michigan", abbr: "MI", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Minnesota", abbr: "MN", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Mississippi", abbr: "MS", salesThreshold: 250_000, transactionThreshold: null, note: "" },
  { state: "Missouri", abbr: "MO", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Nebraska", abbr: "NE", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Nevada", abbr: "NV", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "New Jersey", abbr: "NJ", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "New Mexico", abbr: "NM", salesThreshold: 100_000, transactionThreshold: null, note: "Gross receipts tax instead of sales tax" },
  { state: "New York", abbr: "NY", salesThreshold: 500_000, transactionThreshold: 100, note: "Both thresholds must be met" },
  { state: "North Carolina", abbr: "NC", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "North Dakota", abbr: "ND", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Ohio", abbr: "OH", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Oklahoma", abbr: "OK", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Pennsylvania", abbr: "PA", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Rhode Island", abbr: "RI", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "South Carolina", abbr: "SC", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "South Dakota", abbr: "SD", salesThreshold: 100_000, transactionThreshold: 200, note: "Wayfair v. South Dakota — landmark case" },
  { state: "Tennessee", abbr: "TN", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Texas", abbr: "TX", salesThreshold: 500_000, transactionThreshold: null, note: "" },
  { state: "Utah", abbr: "UT", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Vermont", abbr: "VT", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Virginia", abbr: "VA", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Washington", abbr: "WA", salesThreshold: 100_000, transactionThreshold: null, note: "B&O tax also applies" },
  { state: "West Virginia", abbr: "WV", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
  { state: "Wisconsin", abbr: "WI", salesThreshold: 100_000, transactionThreshold: null, note: "" },
  { state: "Wyoming", abbr: "WY", salesThreshold: 100_000, transactionThreshold: 200, note: "" },
];

/* States with no sales tax */
const NO_SALES_TAX_STATES = ["Alaska", "Delaware", "Montana", "New Hampshire", "Oregon"];

/* Common formation states for the dropdown */
const FORMATION_STATES = [
  "Wyoming", "Delaware", "New Mexico", "Florida", "Texas", "California", "Nevada", "Other",
];

/* Popular states for the multi-select */
const POPULAR_STATES = [
  "California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania",
  "Ohio", "Georgia", "North Carolina", "Michigan", "New Jersey", "Virginia",
  "Washington", "Arizona", "Massachusetts", "Tennessee", "Indiana", "Maryland",
  "Colorado", "Minnesota", "South Carolina", "Wisconsin", "Missouri",
  "Oregon", "Connecticut", "Nevada", "Utah", "Kentucky", "South Dakota",
];

/* ------------------------------------------------------------------ */
/*  Nexus result type                                                  */
/* ------------------------------------------------------------------ */

type NexusStatus = "nexus" | "approaching" | "none";

interface StateResult {
  state: string;
  abbr: string;
  status: NexusStatus;
  salesThreshold: number;
  transactionThreshold: number | null;
  note: string;
  reason: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function SalesTaxNexusClient() {
  /* Quiz state */
  const [step, setStep] = useState(0);
  const [formationState, setFormationState] = useState("");
  const [sellsPhysical, setSellsPhysical] = useState<boolean | null>(null);
  const [sellsDigital, setSellsDigital] = useState<boolean | null>(null);
  const [annualSales, setAnnualSales] = useState("");
  const [hasPhysicalPresence, setHasPhysicalPresence] = useState<boolean | null>(null);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const salesAmount = parseInt(annualSales.replace(/[^0-9]/g, ""), 10) || 0;

  /* Compute results */
  const results: StateResult[] = useMemo(() => {
    if (!showResults) return [];

    const noSalesAtAll = sellsPhysical === false && sellsDigital === false;
    if (noSalesAtAll) return [];

    return selectedStates
      .map((stateName) => {
        /* No sales tax state */
        if (NO_SALES_TAX_STATES.includes(stateName)) {
          return {
            state: stateName,
            abbr: "",
            status: "none" as NexusStatus,
            salesThreshold: 0,
            transactionThreshold: null,
            note: "No state sales tax",
            reason: `${stateName} does not impose a state sales tax.`,
          };
        }

        const info = STATE_THRESHOLDS.find((s) => s.state === stateName);
        if (!info) return null;

        /* Physical presence always creates nexus */
        if (hasPhysicalPresence) {
          return {
            ...info,
            status: "nexus" as NexusStatus,
            reason: "You have physical presence (employees, inventory, or office) in this state, which creates nexus regardless of sales volume.",
          };
        }

        /* Economic nexus check */
        const overThreshold = salesAmount >= info.salesThreshold;
        const approaching = salesAmount >= info.salesThreshold * 0.8;

        if (overThreshold) {
          return {
            ...info,
            status: "nexus" as NexusStatus,
            reason: `Your annual sales ($${salesAmount.toLocaleString()}) exceed the $${info.salesThreshold.toLocaleString()} economic nexus threshold.`,
          };
        }

        if (approaching) {
          return {
            ...info,
            status: "approaching" as NexusStatus,
            reason: `Your annual sales ($${salesAmount.toLocaleString()}) are within 20% of the $${info.salesThreshold.toLocaleString()} threshold. Monitor closely.`,
          };
        }

        return {
          ...info,
          status: "none" as NexusStatus,
          reason: `Your annual sales ($${salesAmount.toLocaleString()}) are below the $${info.salesThreshold.toLocaleString()} threshold.`,
        };
      })
      .filter(Boolean) as StateResult[];
  }, [showResults, sellsPhysical, sellsDigital, salesAmount, hasPhysicalPresence, selectedStates]);

  const noSalesAtAll = sellsPhysical === false && sellsDigital === false;

  /* Toggle state selection */
  const toggleState = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  /* Step validation */
  const canProceed = (): boolean => {
    switch (step) {
      case 0: return formationState !== "";
      case 1: return sellsPhysical !== null;
      case 2: return sellsDigital !== null;
      case 3: return annualSales !== "" && salesAmount > 0;
      case 4: return hasPhysicalPresence !== null;
      case 5: return selectedStates.length > 0;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < 5) {
      /* Skip sales amount + physical presence + state selection if no US sales */
      if (step === 2 && sellsPhysical === false && sellsDigital === false) {
        setShowResults(true);
        return;
      }
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleReset = () => {
    setStep(0);
    setFormationState("");
    setSellsPhysical(null);
    setSellsDigital(null);
    setAnnualSales("");
    setHasPhysicalPresence(null);
    setSelectedStates([]);
    setShowResults(false);
  };

  const totalSteps = 6;

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Page header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Sales Tax Assessment
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Sales Tax Nexus Analyzer
            </h1>
            <p className="text-lg text-gray-500">
              Find out if your foreign-owned LLC has sales tax obligations in any US state.
            </p>
          </div>

          {!showResults ? (
            <>
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === step
                        ? "w-8 bg-indigo-500"
                        : i < step
                          ? "w-2 bg-indigo-400"
                          : "w-2 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Question card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10">
                <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-4">
                  Question {step + 1} of {totalSteps}
                </div>

                {/* Q0: Formation state */}
                {step === 0 && (
                  <>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug">
                      Where is your US LLC formed?
                    </h2>
                    <div className="space-y-3">
                      {FORMATION_STATES.map((s) => (
                        <button
                          key={s}
                          onClick={() => setFormationState(s)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-[15px] font-medium ${
                            formationState === s
                              ? "border-indigo-500 bg-indigo-50 text-indigo-800"
                              : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Q1: Physical products */}
                {step === 1 && (
                  <>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug">
                      Do you sell physical products to US customers?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { label: "Yes, I sell physical goods shipped to US addresses", value: true },
                        { label: "No, I do not sell physical products in the US", value: false },
                      ].map((opt) => (
                        <button
                          key={String(opt.value)}
                          onClick={() => setSellsPhysical(opt.value)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-[15px] font-medium ${
                            sellsPhysical === opt.value
                              ? "border-indigo-500 bg-indigo-50 text-indigo-800"
                              : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Q2: Digital products */}
                {step === 2 && (
                  <>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug">
                      Do you sell digital products or services to US customers?
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      This includes SaaS, digital downloads, online courses, consulting, etc.
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "Yes, I sell digital products/services to US customers", value: true },
                        { label: "No, I have no US-based customers", value: false },
                      ].map((opt) => (
                        <button
                          key={String(opt.value)}
                          onClick={() => setSellsDigital(opt.value)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-[15px] font-medium ${
                            sellsDigital === opt.value
                              ? "border-indigo-500 bg-indigo-50 text-indigo-800"
                              : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Q3: Annual sales */}
                {step === 3 && (
                  <>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug">
                      What are your annual US sales (approximately)?
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Enter your total annual revenue from US-based customers. This is used to check against economic nexus thresholds.
                    </p>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={annualSales}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/[^0-9]/g, "");
                          if (raw) {
                            setAnnualSales(parseInt(raw, 10).toLocaleString("en-US"));
                          } else {
                            setAnnualSales("");
                          }
                        }}
                        placeholder="100,000"
                        className="w-full pl-8 pr-4 py-4 rounded-xl border-2 border-gray-200 text-lg font-semibold text-gray-900 placeholder:text-gray-300 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[25_000, 50_000, 100_000, 250_000, 500_000, 1_000_000].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => setAnnualSales(amt.toLocaleString("en-US"))}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                        >
                          ${amt >= 1_000_000 ? `${amt / 1_000_000}M` : `${amt / 1_000}K`}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Q4: Physical presence */}
                {step === 4 && (
                  <>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug">
                      Do you have employees, an office, or inventory in any US state?
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Physical presence in a state creates automatic sales tax nexus in that state.
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "Yes, I have physical presence in at least one US state", value: true },
                        { label: "No, I operate entirely from outside the US", value: false },
                      ].map((opt) => (
                        <button
                          key={String(opt.value)}
                          onClick={() => setHasPhysicalPresence(opt.value)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-[15px] font-medium ${
                            hasPhysicalPresence === opt.value
                              ? "border-indigo-500 bg-indigo-50 text-indigo-800"
                              : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Q5: Which states */}
                {step === 5 && (
                  <>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug">
                      Which states do you ship to or have customers in?
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Select all states where you have sales activity. We will check nexus thresholds for each.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
                      {POPULAR_STATES.map((s) => (
                        <button
                          key={s}
                          onClick={() => toggleState(s)}
                          className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                            selectedStates.includes(s)
                              ? "border-indigo-500 bg-indigo-50 text-indigo-800"
                              : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-3">
                      {selectedStates.length} state{selectedStates.length !== 1 ? "s" : ""} selected
                    </p>
                  </>
                )}

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between">
                  {step > 0 ? (
                    <button
                      onClick={handleBack}
                      className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-[15px] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {step === 5 ? "Analyze Nexus" : "Next"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* ----- RESULTS ----- */
            <div className="space-y-6">
              {/* No US sales reassurance */}
              {noSalesAtAll ? (
                <div className="rounded-2xl border p-8 md:p-10 bg-green-50 border-green-200">
                  <div className="text-center mb-6">
                    <div className="text-4xl text-green-500 mb-3">{"\u2705"}</div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-green-800 mb-2">
                      No Sales Tax Obligations
                    </h2>
                  </div>
                  <div className="text-[15px] leading-relaxed text-green-700 space-y-4">
                    <p>
                      Based on your answers, your foreign-owned LLC does not sell physical or digital
                      products to US customers. This means you almost certainly have <strong>no sales
                      tax nexus</strong> in any US state.
                    </p>
                    <p>
                      Most foreign-owned disregarded entities (single-member LLCs) with no physical US presence
                      and no US-based sales have <strong>zero sales tax obligations</strong>. This is very
                      common for foreign entrepreneurs who formed a US LLC for banking, payment processing,
                      or credibility but serve international customers.
                    </p>
                    <div className="bg-white/60 rounded-xl p-4 mt-4">
                      <p className="text-sm">
                        <span className="font-semibold">Remember:</span> Even without sales tax obligations,
                        your LLC still has federal filing requirements. Single-member LLCs owned by a foreign
                        person must file Form 1120 + Form 5472 annually with the IRS.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 text-center space-y-3">
                    <Link
                      href="/filer"
                      className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20"
                    >
                      File Form 5472 Now — $49
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  {/* Summary banner */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8">
                    <h2 className="text-xl font-extrabold text-gray-900 mb-2">
                      Your Sales Tax Nexus Results
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                      Based on ${salesAmount.toLocaleString()} in annual US sales across {selectedStates.length} state{selectedStates.length !== 1 ? "s" : ""}.
                    </p>

                    {/* Legend */}
                    <div className="flex flex-wrap gap-4 mb-6 text-xs font-medium">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500" /> Likely has nexus
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-amber-400" /> Approaching threshold
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-green-500" /> No nexus
                      </span>
                    </div>

                    {/* State results */}
                    <div className="space-y-3">
                      {results.map((r) => (
                        <div
                          key={r.state}
                          className={`rounded-xl border p-4 ${
                            r.status === "nexus"
                              ? "bg-red-50 border-red-200"
                              : r.status === "approaching"
                                ? "bg-amber-50 border-amber-200"
                                : "bg-green-50 border-green-200"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className={`w-2.5 h-2.5 rounded-full ${
                                    r.status === "nexus"
                                      ? "bg-red-500"
                                      : r.status === "approaching"
                                        ? "bg-amber-400"
                                        : "bg-green-500"
                                  }`}
                                />
                                <h3 className="font-bold text-gray-900">{r.state}</h3>
                                <span
                                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                    r.status === "nexus"
                                      ? "bg-red-100 text-red-700"
                                      : r.status === "approaching"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-green-100 text-green-700"
                                  }`}
                                >
                                  {r.status === "nexus"
                                    ? "Nexus Likely"
                                    : r.status === "approaching"
                                      ? "Approaching"
                                      : "No Nexus"}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">{r.reason}</p>
                              {r.salesThreshold > 0 && (
                                <p className="text-xs text-gray-400 mt-1">
                                  Threshold: ${r.salesThreshold.toLocaleString()} in sales
                                  {r.transactionThreshold ? ` or ${r.transactionThreshold} transactions` : ""}
                                </p>
                              )}
                              {r.note && (
                                <p className="text-xs text-gray-400 mt-0.5 italic">{r.note}</p>
                              )}
                            </div>
                          </div>

                          {r.status === "nexus" && (
                            <div className="mt-3 pt-3 border-t border-red-200/60">
                              <p className="text-xs font-semibold text-red-700 mb-1">What you need to do:</p>
                              <ul className="text-xs text-red-600 space-y-0.5 list-disc list-inside">
                                <li>Register for a sales tax permit in {r.state}</li>
                                <li>Collect sales tax on applicable transactions</li>
                                <li>File and remit sales tax on the required schedule</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA section */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help with Compliance?</h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Sales tax is complex. Federal filing (Form 5472) is required regardless of sales tax status.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/filer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-600/20"
                      >
                        File Form 5472 Now
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <a
                        href="https://partnersps.doola.com/foreignllctax"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                      >
                        Full Compliance with doola
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              )}

              {/* Restart */}
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}

          {/* Educational section */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What Is Sales Tax Nexus?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Sales tax nexus is a connection between your business and a state that requires
                you to collect and remit sales tax. There are two main types: physical nexus
                (having employees, inventory, or an office in a state) and economic nexus
                (exceeding a state&apos;s sales threshold).
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Since the 2018 South Dakota v. Wayfair Supreme Court decision, states can require
                out-of-state sellers to collect sales tax once they pass economic thresholds.
                Most states set this at $100,000 in sales or 200 transactions per year.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do Foreign LLCs Need to Worry About Sales Tax?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                In most cases, <strong>no</strong>. If you are a foreign entrepreneur who formed a
                US LLC primarily for banking, payment processing, or business credibility, and you
                serve customers outside the US, you likely have no sales tax obligations in any state.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sales tax only applies when you sell taxable goods or services to customers
                located in a US state where you have nexus. Most foreign-owned disregarded entities
                fall below all state thresholds.
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-400 max-w-lg mx-auto">
                This tool provides general guidance only and does not constitute legal or tax advice.
                Sales tax rules vary by state and change frequently. Consult a qualified tax professional
                for advice specific to your situation.
              </p>
            </div>
          </div>

          <EmailCaptureBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
}
