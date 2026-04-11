"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

type Answer = string | null;

interface Question {
  id: number;
  questionKey: string;
  options: { labelKey: string; value: string }[];
}

function getQuestions(t: (key: string) => string): { id: number; question: string; options: { label: string; value: string }[] }[] {
  return [
    {
      id: 1,
      question: t("eciAssessment.q1"),
      options: [
        { label: t("eciAssessment.q1OptYes"), value: "yes" },
        { label: t("eciAssessment.q1OptNo"), value: "no" },
      ],
    },
    {
      id: 2,
      question: t("eciAssessment.q2"),
      options: [
        { label: t("eciAssessment.q2OptYes"), value: "yes" },
        { label: t("eciAssessment.q2OptNo"), value: "no" },
      ],
    },
    {
      id: 3,
      question: t("eciAssessment.q3"),
      options: [
        { label: t("eciAssessment.q3OptRegularly"), value: "regularly" },
        { label: t("eciAssessment.q3OptOccasionally"), value: "occasionally" },
        { label: t("eciAssessment.q3OptNo"), value: "no" },
      ],
    },
    {
      id: 4,
      question: t("eciAssessment.q4"),
      options: [
        { label: t("eciAssessment.q4OptYes"), value: "yes" },
        { label: t("eciAssessment.q4OptNo"), value: "no" },
      ],
    },
    {
      id: 5,
      question: t("eciAssessment.q5"),
      options: [
        { label: t("eciAssessment.q5OptYes"), value: "yes" },
        { label: t("eciAssessment.q5OptNo"), value: "no" },
      ],
    },
    {
      id: 6,
      question: t("eciAssessment.q6"),
      options: [
        { label: t("eciAssessment.q6OptYes"), value: "yes" },
        { label: t("eciAssessment.q6OptNo"), value: "no" },
      ],
    },
  ];
}

type Outcome = "high" | "possible" | "low";

function determineOutcome(answers: Answer[], t: (key: string) => string): {
  outcome: Outcome;
  triggers: string[];
} {
  const triggers: string[] = [];

  if (answers[0] === "yes")
    triggers.push(t("eciAssessment.triggerEmployees"));
  if (answers[1] === "yes")
    triggers.push(t("eciAssessment.triggerOffice"));
  if (answers[2] === "regularly")
    triggers.push(t("eciAssessment.triggerServicesRegular"));
  if (answers[3] === "yes")
    triggers.push(t("eciAssessment.triggerFulfillment"));
  if (answers[5] === "yes")
    triggers.push(t("eciAssessment.triggerRental"));

  if (triggers.length > 0) {
    return { outcome: "high", triggers };
  }

  if (answers[2] === "occasionally") {
    return {
      outcome: "possible",
      triggers: [t("eciAssessment.triggerServicesOccasional")],
    };
  }

  return { outcome: "low", triggers: [] };
}

function ResultCard({
  outcome,
  triggers,
  onReset,
  t,
}: {
  outcome: Outcome;
  triggers: string[];
  onReset: () => void;
  t: (key: string) => string;
}) {
  return (
    <div className="space-y-6">
      {/* Result Card */}
      <div
        className={`rounded-2xl border p-8 md:p-10 ${
          outcome === "high"
            ? "bg-red-50 border-red-200"
            : outcome === "possible"
              ? "bg-amber-50 border-amber-200"
              : "bg-green-50 border-green-200"
        }`}
      >
        <div className="text-center mb-6">
          <div
            className={`text-4xl mb-3 ${
              outcome === "high"
                ? "text-red-500"
                : outcome === "possible"
                  ? "text-amber-500"
                  : "text-green-500"
            }`}
          >
            {outcome === "high"
              ? "\uD83D\uDD34"
              : outcome === "possible"
                ? "\uD83D\uDFE1"
                : "\uD83D\uDFE2"}
          </div>
          <h2
            className={`text-2xl font-extrabold tracking-tight mb-2 ${
              outcome === "high"
                ? "text-red-800"
                : outcome === "possible"
                  ? "text-amber-800"
                  : "text-green-800"
            }`}
          >
            {outcome === "high"
              ? t("eciAssessment.resultHighTitle")
              : outcome === "possible"
                ? t("eciAssessment.resultPossibleTitle")
                : t("eciAssessment.resultLowTitle")}
          </h2>
        </div>

        <div
          className={`text-[15px] leading-relaxed space-y-4 ${
            outcome === "high"
              ? "text-red-700"
              : outcome === "possible"
                ? "text-amber-700"
                : "text-green-700"
          }`}
        >
          {outcome === "high" && (
            <>
              <p>{t("eciAssessment.resultHighDesc1")}</p>
              <p>{t("eciAssessment.resultHighDesc2")}</p>

              {triggers.length > 0 && (
                <div className="bg-white/60 rounded-xl p-4 mt-4">
                  <p className="font-semibold text-sm mb-2">
                    {t("eciAssessment.resultHighFactors")}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {triggers.map((trigger, i) => (
                      <li key={i}>{trigger}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-white/60 rounded-xl p-4 mt-2">
                <p className="text-sm">
                  <span className="font-semibold">{t("eciAssessment.resultHighImportant")}</span>{" "}
                  {t("eciAssessment.resultHighImportantDesc")}
                </p>
              </div>
            </>
          )}

          {outcome === "possible" && (
            <>
              <p>{t("eciAssessment.resultPossibleDesc1")}</p>
              <p>{t("eciAssessment.resultPossibleDesc2")}</p>

              {triggers.length > 0 && (
                <div className="bg-white/60 rounded-xl p-4 mt-4">
                  <p className="font-semibold text-sm mb-2">
                    {t("eciAssessment.resultPossibleFactors")}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {triggers.map((trigger, i) => (
                      <li key={i}>{trigger}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="font-medium">
                {t("eciAssessment.resultPossibleRecommend")}
              </p>
            </>
          )}

          {outcome === "low" && (
            <>
              <p>{t("eciAssessment.resultLowDesc1")}</p>
              <p>{t("eciAssessment.resultLowDesc2")}</p>
            </>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-8 text-center space-y-3">
          <Link
            href="/filer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20"
          >
            {outcome === "low"
              ? t("eciAssessment.ctaLow")
              : t("eciAssessment.ctaOther")}
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

          {outcome === "high" && (
            <p className="text-xs text-red-500/70">
              {t("eciAssessment.comingSoonEci")}
            </p>
          )}

          {outcome === "possible" && (
            <p className="text-xs text-amber-600/70">
              {t("eciAssessment.form5472StillRequired")}
            </p>
          )}
        </div>
      </div>

      {/* Restart */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2"
        >
          {t("eciAssessment.retakeAssessment")}
        </button>
      </div>
    </div>
  );
}

function EducationalSection({ t }: { t: (key: string) => string }) {
  return (
    <div className="mt-12 space-y-8">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {t("eciAssessment.eduEciTitle")}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {t("eciAssessment.eduEciDesc")}
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {t("eciAssessment.eduUstbTitle")}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {t("eciAssessment.eduUstbDesc")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/tools/penalty-calculator"
          className="text-sm text-amber-700 hover:text-amber-900 transition-colors font-medium underline underline-offset-2"
        >
          {t("eciAssessment.penaltyCalcLink")}
        </Link>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-400 max-w-lg mx-auto">
          {t("eciAssessment.disclaimer")}
        </p>
      </div>
    </div>
  );
}

export function EciAssessmentClient() {
  const { t } = useT();
  const QUESTIONS = getQuestions(t);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(
    Array(QUESTIONS.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = value;
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setShowResults(false);
  };

  const result = showResults ? determineOutcome(answers, t) : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("eciAssessment.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("eciAssessment.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("eciAssessment.subtitle")}
            </p>
          </div>

          {!showResults ? (
            <>
              {/* Step Indicator */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? "w-8 bg-amber-500"
                        : i < currentStep
                          ? "w-2 bg-amber-400"
                          : "w-2 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-4">
                  {t("eciAssessment.stepOf").replace("{current}", String(currentStep + 1)).replace("{total}", String(QUESTIONS.length))}
                </div>

                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-8 leading-snug">
                  {QUESTIONS[currentStep].question}
                </h2>

                <div className="space-y-3">
                  {QUESTIONS[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-[15px] font-medium ${
                        answers[currentStep] === option.value
                          ? "border-amber-500 bg-amber-50 text-amber-800"
                          : "border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:bg-amber-50/50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                {/* Back Button */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 17l-5-5m0 0l5-5m-5 5h12"
                      />
                    </svg>
                    {t("eciAssessment.previousQuestion")}
                  </button>
                )}
              </div>
            </>
          ) : (
            result && (
              <ResultCard
                outcome={result.outcome}
                triggers={result.triggers}
                onReset={handleReset}
                t={t}
              />
            )
          )}

          {/* Educational Section (always visible) */}
          <EducationalSection t={t} />

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
