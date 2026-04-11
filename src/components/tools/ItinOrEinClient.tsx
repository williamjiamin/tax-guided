"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";

/* ------------------------------------------------------------------ */
/*  Decision tree state machine                                        */
/* ------------------------------------------------------------------ */

type StepId = "q1" | "q2" | "q3" | "q4" | "q5" | "result";

interface Step {
  id: StepId;
  question: string;
  helpText?: string;
  options: { label: string; value: string; next: StepId }[];
}

const STEPS: Step[] = [
  {
    id: "q1",
    question: "Do you have a US-formed business (LLC, Corporation, etc.)?",
    helpText:
      "This includes any entity registered with a US state — Wyoming LLC, Delaware LLC, Florida Corp, etc.",
    options: [
      { label: "Yes, I have a US-formed business entity", value: "yes", next: "q2" },
      { label: "No, I do not have a US business", value: "no", next: "q3" },
    ],
  },
  {
    id: "q2",
    question: "Does your LLC or business already have an EIN (Employer Identification Number)?",
    helpText:
      "An EIN is a 9-digit number (XX-XXXXXXX) issued by the IRS. You would have received it when your LLC was formed, or applied for it separately using Form SS-4.",
    options: [
      { label: "Yes, my business already has an EIN", value: "yes", next: "q3" },
      { label: "No, I still need to get an EIN", value: "no", next: "q3" },
    ],
  },
  {
    id: "q3",
    question: "Are you a foreign individual (non-US citizen, no green card)?",
    helpText:
      "Foreign individuals are non-resident aliens — people who are not US citizens and do not hold a US permanent resident card (green card).",
    options: [
      { label: "Yes, I am a foreign national (non-US person)", value: "yes", next: "q4" },
      { label: "No, I am a US citizen or permanent resident", value: "no", next: "result" },
    ],
  },
  {
    id: "q4",
    question: "Do you need to file a US tax return or claim tax treaty benefits?",
    helpText:
      "Most foreign-owned single-member LLCs must file Form 1120 + Form 5472 annually. If you have ECI (Effectively Connected Income), you may also need to file Form 1040-NR. Treaty benefits can reduce or eliminate US tax.",
    options: [
      { label: "Yes, I need to file a US tax return or claim treaty benefits", value: "yes", next: "q5" },
      { label: "No, I don't think I need to file anything", value: "no", next: "result" },
    ],
  },
  {
    id: "q5",
    question: "Do you have a US Social Security Number (SSN)?",
    helpText:
      "An SSN is a 9-digit number (XXX-XX-XXXX) issued to US citizens, permanent residents, and certain work-authorized non-citizens. It is different from an EIN.",
    options: [
      { label: "Yes, I have an SSN", value: "yes", next: "result" },
      { label: "No, I do not have an SSN", value: "no", next: "result" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Result determination                                               */
/* ------------------------------------------------------------------ */

type ResultType = "ein-only" | "itin-only" | "both" | "neither";

function determineResult(answers: Record<string, string>): ResultType {
  const hasBusiness = answers.q1 === "yes";
  const hasEin = answers.q2 === "yes";
  const isForeign = answers.q3 === "yes";
  const needsToFile = answers.q4 === "yes";
  const hasSsn = answers.q5 === "yes";

  const needsEin = hasBusiness && !hasEin;
  const needsItin = isForeign && needsToFile && !hasSsn;

  if (needsEin && needsItin) return "both";
  if (needsEin) return "ein-only";
  if (needsItin) return "itin-only";
  return "neither";
}

/* ------------------------------------------------------------------ */
/*  Result cards                                                       */
/* ------------------------------------------------------------------ */

function ResultCards({
  result,
  onReset,
}: {
  result: ResultType;
  onReset: () => void;
}) {
  return (
    <div className="space-y-6">
      {/* Main result card */}
      <div
        className={`rounded-2xl border p-8 md:p-10 ${
          result === "both"
            ? "bg-purple-50 border-purple-200"
            : result === "ein-only"
              ? "bg-blue-50 border-blue-200"
              : result === "itin-only"
                ? "bg-teal-50 border-teal-200"
                : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="text-center mb-6">
          <h2
            className={`text-2xl font-extrabold tracking-tight mb-2 ${
              result === "both"
                ? "text-purple-800"
                : result === "ein-only"
                  ? "text-blue-800"
                  : result === "itin-only"
                    ? "text-teal-800"
                    : "text-gray-800"
            }`}
          >
            {result === "both" && "You Need Both an EIN and an ITIN"}
            {result === "ein-only" && "You Need an EIN"}
            {result === "itin-only" && "You Need an ITIN"}
            {result === "neither" && "You Likely Don't Need Either Right Now"}
          </h2>
        </div>

        {/* Individual result cards */}
        <div className="space-y-4">
          {(result === "ein-only" || result === "both") && (
            <div className="bg-white rounded-xl border border-blue-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="text-blue-700 font-extrabold text-sm">EIN</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Employer Identification Number (EIN)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Your US LLC needs an EIN to file taxes, open a business bank account, and
                    comply with IRS requirements. It is a 9-digit number assigned to your
                    business entity (not to you personally).
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-blue-700">
                      <span className="font-semibold">How to get it:</span> Apply using IRS
                      Form SS-4. Foreign applicants cannot use the online system and must apply
                      by fax or mail. Processing takes 4-6 weeks by mail, or 4-7 business days by fax.
                    </p>
                  </div>
                  <Link
                    href="/filer/ss4"
                    className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Apply for EIN (Form SS-4)
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {(result === "itin-only" || result === "both") && (
            <div className="bg-white rounded-xl border border-teal-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <span className="text-teal-700 font-extrabold text-xs">ITIN</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Individual Taxpayer Identification Number (ITIN)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    As a foreign individual who needs to file a US tax return (or claim
                    treaty benefits) but does not have an SSN, you need an ITIN. It is a
                    9-digit number (9XX-XX-XXXX) assigned to you personally.
                  </p>
                  <div className="bg-teal-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-teal-700">
                      <span className="font-semibold">How to get it:</span> Apply using IRS
                      Form W-7, submitted with your tax return or treaty-based claim.
                      You will need to provide identity documents (passport). Processing
                      takes 7-11 weeks.
                    </p>
                  </div>
                  <Link
                    href="/services/itin-application"
                    className="inline-flex items-center px-5 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors text-sm"
                  >
                    Apply for ITIN (Form W-7)
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {result === "neither" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm text-gray-600 mb-3">
                Based on your answers, you may not need an ITIN or a new EIN right now. However,
                requirements can change as your business evolves. If your LLC starts generating
                income or you need to file a US tax return in the future, come back and reassess.
              </p>
              <p className="text-sm text-gray-600">
                Even if you do not need an ITIN, your foreign-owned LLC likely still has
                annual filing requirements (Form 1120 + Form 5472). Make sure you stay compliant.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA bar */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help Getting Started?</h3>
        <p className="text-sm text-gray-500 mb-6">
          We can help with EIN applications, ITIN filing, and full federal compliance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/filer/ss4"
            className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Get Your EIN
          </Link>
          <Link
            href="/services/itin-application"
            className="inline-flex items-center justify-center px-5 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors text-sm"
          >
            Apply for ITIN
          </Link>
          <a
            href="https://partnersps.doola.com/foreignllctax"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            Full Formation Package
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Restart */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function ItinOrEinClient() {
  const [currentStepId, setCurrentStepId] = useState<StepId>("q1");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<StepId[]>(["q1"]);

  const currentStep = STEPS.find((s) => s.id === currentStepId);
  const isResult = currentStepId === "result";
  const result = isResult ? determineResult(answers) : null;

  /* Progress: which step in the linear flow */
  const stepIndex = STEPS.findIndex((s) => s.id === currentStepId);
  const progressSteps = isResult ? STEPS.length : stepIndex >= 0 ? stepIndex : STEPS.length;

  const handleAnswer = (value: string, next: StepId) => {
    const newAnswers = { ...answers, [currentStepId]: value };
    setAnswers(newAnswers);
    setHistory([...history, next]);
    setCurrentStepId(next);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      const prevStep = newHistory[newHistory.length - 1];
      setCurrentStepId(prevStep);
      /* Remove the answer for the step we are going back from */
      const newAnswers = { ...answers };
      delete newAnswers[currentStepId];
      setAnswers(newAnswers);
    }
  };

  const handleReset = () => {
    setCurrentStepId("q1");
    setAnswers({});
    setHistory(["q1"]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Page header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100/80 text-purple-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Decision Tool
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              ITIN vs EIN — Which Do You Need?
            </h1>
            <p className="text-lg text-gray-500">
              Answer a few simple questions to find out if you need an ITIN, an EIN, or both.
            </p>
          </div>

          {!isResult ? (
            currentStep && (
              <>
                {/* Step indicator */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  {STEPS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === progressSteps
                          ? "w-8 bg-purple-500"
                          : i < progressSteps
                            ? "w-2 bg-purple-400"
                            : "w-2 bg-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Question card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10">
                  <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-4">
                    Question {progressSteps + 1} of {STEPS.length}
                  </div>

                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {currentStep.question}
                  </h2>

                  {currentStep.helpText && (
                    <p className="text-sm text-gray-500 mb-6">
                      {currentStep.helpText}
                    </p>
                  )}

                  <div className="space-y-3">
                    {currentStep.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value, option.next)}
                        className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-[15px] font-medium ${
                          answers[currentStep.id] === option.value
                            ? "border-purple-500 bg-purple-50 text-purple-800"
                            : "border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  {/* Back button */}
                  {history.length > 1 && (
                    <button
                      onClick={handleBack}
                      className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                      Previous Question
                    </button>
                  )}
                </div>
              </>
            )
          ) : (
            result && <ResultCards result={result} onReset={handleReset} />
          )}

          {/* Educational section */}
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What Is the Difference Between an ITIN and an EIN?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mt-4">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 text-gray-500 font-semibold"></th>
                      <th className="text-left py-3 px-4 text-blue-700 font-bold">EIN</th>
                      <th className="text-left py-3 px-4 text-teal-700 font-bold">ITIN</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 pr-4 font-medium text-gray-700">Full name</td>
                      <td className="py-2.5 px-4">Employer Identification Number</td>
                      <td className="py-2.5 px-4">Individual Taxpayer Identification Number</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 pr-4 font-medium text-gray-700">Issued to</td>
                      <td className="py-2.5 px-4">Business entities (LLC, Corp)</td>
                      <td className="py-2.5 px-4">Individual persons</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 pr-4 font-medium text-gray-700">Format</td>
                      <td className="py-2.5 px-4">XX-XXXXXXX (9 digits)</td>
                      <td className="py-2.5 px-4">9XX-XX-XXXX (starts with 9)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 pr-4 font-medium text-gray-700">Application form</td>
                      <td className="py-2.5 px-4">IRS Form SS-4</td>
                      <td className="py-2.5 px-4">IRS Form W-7</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2.5 pr-4 font-medium text-gray-700">Used for</td>
                      <td className="py-2.5 px-4">Business tax filings, bank accounts, hiring</td>
                      <td className="py-2.5 px-4">Personal tax returns, treaty claims</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-medium text-gray-700">Processing time</td>
                      <td className="py-2.5 px-4">4-7 days (fax) or 4-6 weeks (mail)</td>
                      <td className="py-2.5 px-4">7-11 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Common Scenarios for Foreign LLC Owners
              </h3>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Scenario 1: New LLC, no EIN yet, no US tax return needed</p>
                  <p>You need an <strong>EIN only</strong>. Your LLC needs an EIN to open a bank account and file its annual Form 1120 + Form 5472.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Scenario 2: Existing LLC with EIN, earning US income (ECI)</p>
                  <p>You likely need an <strong>ITIN</strong> in addition to your EIN. The ITIN is used on your personal Form 1040-NR to report effectively connected income.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Scenario 3: New LLC, earning US income</p>
                  <p>You need <strong>both</strong> an EIN (for your LLC) and an ITIN (for your personal tax return).</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-400 max-w-lg mx-auto">
                This tool provides general guidance only and does not constitute legal or tax advice.
                Consult a qualified tax professional for advice specific to your situation.
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
