"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Answers {
  owners: "single" | "multi" | null;
  foreignOwners: "yes" | "no" | null;
  corpElection: "yes" | "no" | "unsure" | null;
  business: string | null;
  vcFunding: "yes" | "maybe" | "no" | null;
  revenue: string | null;
}

const INITIAL: Answers = {
  owners: null,
  foreignOwners: null,
  corpElection: null,
  business: null,
  vcFunding: null,
  revenue: null,
};

/* ------------------------------------------------------------------ */
/*  Steps                                                              */
/* ------------------------------------------------------------------ */

interface StepConfig {
  key: keyof Answers;
  questionKey: string;
  optionKeys: { labelKey: string; value: string }[];
}

const STEP_CONFIGS: StepConfig[] = [
  {
    key: "owners",
    questionKey: "entityAdvisor.q1",
    optionKeys: [
      { labelKey: "entityAdvisor.q1OptSingle", value: "single" },
      { labelKey: "entityAdvisor.q1OptMulti", value: "multi" },
    ],
  },
  {
    key: "foreignOwners",
    questionKey: "entityAdvisor.q2",
    optionKeys: [
      { labelKey: "entityAdvisor.q2OptYes", value: "yes" },
      { labelKey: "entityAdvisor.q2OptNo", value: "no" },
    ],
  },
  {
    key: "corpElection",
    questionKey: "entityAdvisor.q3",
    optionKeys: [
      { labelKey: "entityAdvisor.q3OptYes", value: "yes" },
      { labelKey: "entityAdvisor.q3OptNo", value: "no" },
      { labelKey: "entityAdvisor.q3OptUnsure", value: "unsure" },
    ],
  },
  {
    key: "business",
    questionKey: "entityAdvisor.q4",
    optionKeys: [
      { labelKey: "entityAdvisor.q4OptSoftware", value: "software" },
      { labelKey: "entityAdvisor.q4OptEcommerce", value: "ecommerce" },
      { labelKey: "entityAdvisor.q4OptConsulting", value: "consulting" },
      { labelKey: "entityAdvisor.q4OptRealEstate", value: "realestate" },
      { labelKey: "entityAdvisor.q4OptHolding", value: "holding" },
      { labelKey: "entityAdvisor.q4OptOther", value: "other" },
    ],
  },
  {
    key: "vcFunding",
    questionKey: "entityAdvisor.q5",
    optionKeys: [
      { labelKey: "entityAdvisor.q5OptYes", value: "yes" },
      { labelKey: "entityAdvisor.q5OptMaybe", value: "maybe" },
      { labelKey: "entityAdvisor.q5OptNo", value: "no" },
    ],
  },
  {
    key: "revenue",
    questionKey: "entityAdvisor.q6",
    optionKeys: [
      { labelKey: "entityAdvisor.q6OptZero", value: "zero" },
      { labelKey: "entityAdvisor.q6OptUnder50k", value: "under50k" },
      { labelKey: "entityAdvisor.q6Opt50k250k", value: "50k-250k" },
      { labelKey: "entityAdvisor.q6Opt250k1m", value: "250k-1m" },
      { labelKey: "entityAdvisor.q6OptOver1m", value: "over1m" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Recommendation logic                                               */
/* ------------------------------------------------------------------ */

function getRecommendation(a: Answers, t: (key: string) => string): {
  highlighted: "disregarded" | "partnership" | "ccorp";
  message: string;
} {
  // Corp election already filed
  if (a.corpElection === "yes") {
    return {
      highlighted: "ccorp",
      message: t("entityAdvisor.recCorpElection"),
    };
  }

  // Multi-member => partnership
  if (a.owners === "multi") {
    return {
      highlighted: "partnership",
      message: t("entityAdvisor.recPartnership"),
    };
  }

  // Single-member + VC or high revenue => suggest C-Corp
  const highRevenue =
    a.revenue === "250k-1m" || a.revenue === "over1m";
  const vcActive = a.vcFunding === "yes";

  if (
    a.owners === "single" &&
    a.foreignOwners === "yes" &&
    (vcActive || highRevenue)
  ) {
    return {
      highlighted: "ccorp",
      message: t("entityAdvisor.recCcorp"),
    };
  }

  // Single-member + foreign + low revenue / no ECI indicators
  if (a.owners === "single" && a.foreignOwners === "yes") {
    return {
      highlighted: "disregarded",
      message: t("entityAdvisor.recDisregardedForeign"),
    };
  }

  // Single-member + domestic owner
  if (a.owners === "single" && a.foreignOwners === "no") {
    return {
      highlighted: "disregarded",
      message: t("entityAdvisor.recDisregardedDomestic"),
    };
  }

  // Fallback
  return {
    highlighted: "disregarded",
    message: t("entityAdvisor.recFallback"),
  };
}

/* ------------------------------------------------------------------ */
/*  Classification cards data                                          */
/* ------------------------------------------------------------------ */

interface ClassificationCard {
  id: "disregarded" | "partnership" | "ccorp";
  titleKey: string;
  defaultForKey: string;
  taxFilingKey: string;
  ownerFilingKey: string;
  prosKeys: string[];
  consKeys: string[];
  bestForKey: string;
  noteKey?: string;
}

const CARD_CONFIGS: ClassificationCard[] = [
  {
    id: "disregarded",
    titleKey: "entityAdvisor.cardDisregardedTitle",
    defaultForKey: "entityAdvisor.cardDisregardedDefault",
    taxFilingKey: "entityAdvisor.cardDisregardedTaxFiling",
    ownerFilingKey: "entityAdvisor.cardDisregardedOwnerFiling",
    prosKeys: [
      "entityAdvisor.cardDisregardedPro1",
      "entityAdvisor.cardDisregardedPro2",
      "entityAdvisor.cardDisregardedPro3",
    ],
    consKeys: [
      "entityAdvisor.cardDisregardedCon1",
      "entityAdvisor.cardDisregardedCon2",
    ],
    bestForKey: "entityAdvisor.cardDisregardedBest",
    noteKey: "entityAdvisor.cardDisregardedNote",
  },
  {
    id: "partnership",
    titleKey: "entityAdvisor.cardPartnershipTitle",
    defaultForKey: "entityAdvisor.cardPartnershipDefault",
    taxFilingKey: "entityAdvisor.cardPartnershipTaxFiling",
    ownerFilingKey: "entityAdvisor.cardPartnershipOwnerFiling",
    prosKeys: [
      "entityAdvisor.cardPartnershipPro1",
      "entityAdvisor.cardPartnershipPro2",
    ],
    consKeys: [
      "entityAdvisor.cardPartnershipCon1",
      "entityAdvisor.cardPartnershipCon2",
      "entityAdvisor.cardPartnershipCon3",
    ],
    bestForKey: "entityAdvisor.cardPartnershipBest",
  },
  {
    id: "ccorp",
    titleKey: "entityAdvisor.cardCcorpTitle",
    defaultForKey: "entityAdvisor.cardCcorpDefault",
    taxFilingKey: "entityAdvisor.cardCcorpTaxFiling",
    ownerFilingKey: "entityAdvisor.cardCcorpOwnerFiling",
    prosKeys: [
      "entityAdvisor.cardCcorpPro1",
      "entityAdvisor.cardCcorpPro2",
      "entityAdvisor.cardCcorpPro3",
    ],
    consKeys: [
      "entityAdvisor.cardCcorpCon1",
      "entityAdvisor.cardCcorpCon2",
      "entityAdvisor.cardCcorpCon3",
    ],
    bestForKey: "entityAdvisor.cardCcorpBest",
    noteKey: "entityAdvisor.cardCcorpNote",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function EntityAdvisorClient() {
  const { t } = useT();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(INITIAL);
  const [showResults, setShowResults] = useState(false);

  const totalSteps = STEP_CONFIGS.length;

  const handleSelect = (key: keyof Answers, value: string) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers(INITIAL);
    setShowResults(false);
  };

  const recommendation = getRecommendation(answers, t);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Page header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-100/80 text-violet-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("entityAdvisor.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("entityAdvisor.title")}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t("entityAdvisor.subtitle")}
            </p>
          </div>

          {/* -------- Question flow -------- */}
          {!showResults && (
            <div className="max-w-2xl mx-auto">
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {STEP_CONFIGS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i < step
                        ? "w-8 bg-violet-500"
                        : i === step
                        ? "w-10 bg-violet-600"
                        : "w-8 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Question card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10">
                <p className="text-xs font-semibold text-violet-500 uppercase tracking-wider mb-2">
                  {t("entityAdvisor.stepOf").replace("{current}", String(step + 1)).replace("{total}", String(totalSteps))}
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  {t(STEP_CONFIGS[step].questionKey)}
                </h2>

                <div className="space-y-3">
                  {STEP_CONFIGS[step].optionKeys.map((opt) => {
                    const isSelected =
                      answers[STEP_CONFIGS[step].key] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() =>
                          handleSelect(STEP_CONFIGS[step].key, opt.value)
                        }
                        className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 font-medium ${
                          isSelected
                            ? "border-violet-500 bg-violet-50 text-violet-800"
                            : "border-gray-200 bg-white text-gray-700 hover:border-violet-300 hover:bg-violet-50/50"
                        }`}
                      >
                        {t(opt.labelKey)}
                      </button>
                    );
                  })}
                </div>

                {/* Back button */}
                {step > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {t("entityAdvisor.back")}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* -------- Results -------- */}
          {showResults && (
            <>
              {/* Recommendation box */}
              <div className="max-w-3xl mx-auto mb-10">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                  <p className="text-sm font-semibold uppercase tracking-wider text-violet-200 mb-2">
                    {t("entityAdvisor.ourRecommendation")}
                  </p>
                  <p className="text-lg md:text-xl font-bold leading-relaxed">
                    {recommendation.message}
                  </p>
                  <div className="flex gap-3 mt-6">
                    <Link
                      href="/filer"
                      className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-violet-700 font-semibold rounded-lg hover:bg-violet-50 transition-colors text-sm shadow"
                    >
                      {t("entityAdvisor.startFiling")}
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
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-6 py-2.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
                    >
                      {t("entityAdvisor.startOver")}
                    </button>
                  </div>
                </div>
              </div>

              {/* Comparison cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {CARD_CONFIGS.map((card) => {
                  const isHighlighted =
                    recommendation.highlighted === card.id;
                  return (
                    <div
                      key={card.id}
                      className={`rounded-2xl border-2 p-6 transition-all ${
                        isHighlighted
                          ? "border-violet-500 bg-violet-50/60 shadow-lg shadow-violet-200/40 ring-2 ring-violet-200"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      {isHighlighted && (
                        <div className="inline-flex items-center gap-1 bg-violet-600 text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3">
                          {t("entityAdvisor.recommended")}
                        </div>
                      )}
                      <h3 className="text-lg font-extrabold text-gray-900 mb-3">
                        {t(card.titleKey)}
                      </h3>

                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold text-gray-500 text-xs uppercase tracking-wider">
                            {t("entityAdvisor.defaultFor")}
                          </p>
                          <p className="text-gray-800">{t(card.defaultForKey)}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-500 text-xs uppercase tracking-wider">
                            {t("entityAdvisor.taxFiling")}
                          </p>
                          <p className="text-gray-800">{t(card.taxFilingKey)}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-500 text-xs uppercase tracking-wider">
                            {card.id === "ccorp"
                              ? t("entityAdvisor.taxRate")
                              : t("entityAdvisor.ownerFiles")}
                          </p>
                          <p className="text-gray-800">
                            {t(card.ownerFilingKey)}
                          </p>
                        </div>

                        {/* Pros */}
                        <div>
                          <p className="font-semibold text-green-600 text-xs uppercase tracking-wider mb-1">
                            {t("entityAdvisor.pros")}
                          </p>
                          <ul className="space-y-1">
                            {card.prosKeys.map((pKey, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-1.5 text-gray-700"
                              >
                                <span className="text-green-500 mt-0.5 shrink-0">
                                  +
                                </span>
                                {t(pKey)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div>
                          <p className="font-semibold text-red-600 text-xs uppercase tracking-wider mb-1">
                            {t("entityAdvisor.cons")}
                          </p>
                          <ul className="space-y-1">
                            {card.consKeys.map((cKey, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-1.5 text-gray-700"
                              >
                                <span className="text-red-400 mt-0.5 shrink-0">
                                  -
                                </span>
                                {t(cKey)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Best for */}
                        <div className="pt-2 border-t border-gray-100">
                          <p className="font-semibold text-gray-500 text-xs uppercase tracking-wider">
                            {t("entityAdvisor.bestFor")}
                          </p>
                          <p className="text-gray-800">{t(card.bestForKey)}</p>
                        </div>

                        {/* Note */}
                        {card.noteKey && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
                            <span className="font-semibold">{t("entityAdvisor.note")}</span>{" "}
                            {t(card.noteKey)}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Disclaimers */}
              <div className="max-w-3xl mx-auto space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
                  <span className="font-bold">{t("entityAdvisor.disclaimerImportant")}</span>{" "}
                  {t("entityAdvisor.disclaimerScorp")}
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
                  {t("entityAdvisor.disclaimerGeneral")}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                  {t("entityAdvisor.disclaimerElection")}
                </div>
              </div>

              {/* Back / Reset */}
              <div className="text-center mt-8">
                <button
                  onClick={handleBack}
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors mr-4"
                >
                  {t("entityAdvisor.backToLastQuestion")}
                </button>
                <button
                  onClick={handleReset}
                  className="text-sm text-violet-500 hover:text-violet-700 transition-colors"
                >
                  {t("entityAdvisor.startOver")}
                </button>
              </div>
            </>
          )}

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
