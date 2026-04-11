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

type MemberCount = "single" | "multiple" | null;
type ForeignOwner = "yes" | "no" | null;
type HasECI = "yes" | "no" | "not-sure" | null;
type CorpElection = "no" | "yes" | null;

interface Answers {
  memberCount: MemberCount;
  foreignOwner: ForeignOwner;
  hasECI: HasECI;
  corpElection: CorpElection;
}

interface FormCard {
  form: string;
  name: string;
  why: string;
  dueDate: string;
  penalty: string;
  status: "supported" | "coming-soon" | "external" | "cpa";
  link: string;
  price?: string;
}

/* ------------------------------------------------------------------ */
/*  Result logic                                                       */
/* ------------------------------------------------------------------ */

function getResults(answers: Answers, t: (key: string) => string): { forms: FormCard[]; note?: string } {
  const { memberCount, foreignOwner, hasECI, corpElection } = answers;

  // D) Corp election
  if (corpElection === "yes") {
    return {
      forms: [
        {
          form: "Form 1120",
          name: t("formsWizard.form1120Name"),
          why: t("formsWizard.form1120Why"),
          dueDate: t("formsWizard.form1120DueDate"),
          penalty: t("formsWizard.form1120Penalty"),
          status: "cpa",
          link: "https://www.irs.gov/forms-pubs/about-form-1120",
        },
        {
          form: "Form 5472",
          name: t("formsWizard.form5472Name"),
          why: t("formsWizard.form5472WhyCorp"),
          dueDate: t("formsWizard.form5472DueDate"),
          penalty: t("formsWizard.form5472Penalty"),
          status: "cpa",
          link: "https://www.irs.gov/forms-pubs/about-form-5472",
        },
        {
          form: "Form 1042 / 1042-S",
          name: t("formsWizard.form1042Name"),
          why: t("formsWizard.form1042Why"),
          dueDate: t("formsWizard.form1042DueDate"),
          penalty: t("formsWizard.form1042Penalty"),
          status: "cpa",
          link: "https://www.irs.gov/forms-pubs/about-form-1042",
        },
      ],
      note: t("formsWizard.corpNote"),
    };
  }

  // C) Multi-member + foreign + no corp election
  if (memberCount === "multiple" && foreignOwner === "yes") {
    const forms: FormCard[] = [
      {
        form: "Form 1065 + Schedule K-1 + K-3",
        name: t("formsWizard.form1065Name"),
        why: t("formsWizard.form1065Why"),
        dueDate: t("formsWizard.form1065DueDate"),
        penalty: t("formsWizard.form1065Penalty"),
        status: "coming-soon",
        link: "https://www.irs.gov/forms-pubs/about-form-1065",
        price: "$199",
      },
      {
        form: "Form 5472",
        name: t("formsWizard.form5472Name"),
        why: t("formsWizard.form5472WhyPartnership"),
        dueDate: t("formsWizard.form5472DueDatePartnership"),
        penalty: t("formsWizard.form5472Penalty"),
        status: "external",
        link: "https://www.irs.gov/forms-pubs/about-form-5472",
      },
    ];

    if (hasECI === "yes") {
      forms.push(
        {
          form: "Form 8804 / 8805 / 8813",
          name: t("formsWizard.form8804Name"),
          why: t("formsWizard.form8804Why"),
          dueDate: t("formsWizard.form8804DueDate"),
          penalty: t("formsWizard.form8804Penalty"),
          status: "cpa",
          link: "https://www.irs.gov/forms-pubs/about-form-8804",
        }
      );
    }

    forms.push({
      form: "Form 7004",
      name: t("formsWizard.form7004Name"),
      why: t("formsWizard.form7004Why"),
      dueDate: t("formsWizard.form7004DueDate"),
      penalty: t("formsWizard.form7004Penalty"),
      status: "external",
      link: "https://www.irs.gov/forms-pubs/about-form-7004",
    });

    return { forms };
  }

  // A, B, E) Single member + foreign + no corp election
  if (memberCount === "single" && foreignOwner === "yes") {
    const forms: FormCard[] = [
      {
        form: "Form 5472 + Pro Forma 1120",
        name: t("formsWizard.form5472DEName"),
        why: t("formsWizard.form5472DEWhy"),
        dueDate: t("formsWizard.form5472DEDueDate"),
        penalty: t("formsWizard.form5472Penalty"),
        status: "supported",
        link: "/filer",
        price: "$49",
      },
    ];

    // B) Has ECI
    if (hasECI === "yes") {
      forms.push(
        {
          form: "Form 1040-NR or 1120-F",
          name: t("formsWizard.form1040NRName"),
          why: t("formsWizard.form1040NRWhy"),
          dueDate: t("formsWizard.form1040NRDueDate"),
          penalty: t("formsWizard.form1040NRPenalty"),
          status: "coming-soon",
          link: "https://www.irs.gov/forms-pubs/about-form-1040-nr",
        },
        {
          form: "Form 7004 / 4868",
          name: t("formsWizard.form7004ExtName"),
          why: t("formsWizard.form7004ExtWhy"),
          dueDate: t("formsWizard.form7004DueDate"),
          penalty: t("formsWizard.form7004Penalty"),
          status: "external",
          link: "https://www.irs.gov/forms-pubs/about-form-7004",
        }
      );
    } else if (hasECI === "not-sure") {
      // E) Not sure about ECI
      forms.push({
        form: "Form 7004",
        name: t("formsWizard.form7004Name"),
        why: t("formsWizard.form7004Why"),
        dueDate: t("formsWizard.form7004DueDate"),
        penalty: t("formsWizard.form7004Penalty"),
        status: "external",
        link: "https://www.irs.gov/forms-pubs/about-form-7004",
      });

      return {
        forms,
        note: t("formsWizard.noteEciUnsure"),
      };
    } else {
      // A) No ECI
      forms.push({
        form: "Form 7004",
        name: t("formsWizard.form7004Name"),
        why: t("formsWizard.form7004Why"),
        dueDate: t("formsWizard.form7004DueDate"),
        penalty: t("formsWizard.form7004Penalty"),
        status: "external",
        link: "https://www.irs.gov/forms-pubs/about-form-7004",
      });
    }

    return { forms };
  }

  return { forms: [] };
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StepIndicator({ current, total, label }: { current: number; total: number; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              i + 1 === current
                ? "bg-indigo-600 text-white"
                : i + 1 < current
                ? "bg-indigo-200 text-indigo-700"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            {i + 1 < current ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < total - 1 && (
            <div
              className={`w-8 h-0.5 ${
                i + 1 < current ? "bg-indigo-300" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
      <span className="ml-3 text-sm text-gray-400">
        {label}
      </span>
    </div>
  );
}

function OptionButton({
  selected,
  onClick,
  children,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  description?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
        selected
          ? "border-indigo-500 bg-indigo-50 shadow-md"
          : "border-gray-200 bg-white hover:border-indigo-200 hover:bg-indigo-50/30"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
            selected ? "border-indigo-500" : "border-gray-300"
          }`}
        >
          {selected && <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />}
        </div>
        <div>
          <p className={`font-semibold ${selected ? "text-indigo-900" : "text-gray-800"}`}>
            {children}
          </p>
          {description && (
            <p className="text-sm text-gray-500 mt-0.5">{description}</p>
          )}
        </div>
      </div>
    </button>
  );
}

function ResultFormCard({ card, t }: { card: FormCard; t: (key: string) => string }) {
  const statusConfig = {
    supported: {
      icon: (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: t("formsWizard.statusWeHandle"),
      badgeClass: "bg-green-100 text-green-700",
      borderClass: "border-green-200",
    },
    "coming-soon": {
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: t("formsWizard.statusComingSoon"),
      badgeClass: "bg-amber-100 text-amber-700",
      borderClass: "border-amber-200",
    },
    external: {
      icon: (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      ),
      badge: t("formsWizard.statusIrsGov"),
      badgeClass: "bg-gray-100 text-gray-600",
      borderClass: "border-gray-200",
    },
    cpa: {
      icon: (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      badge: t("formsWizard.statusCpa"),
      badgeClass: "bg-gray-100 text-gray-500",
      borderClass: "border-gray-200",
    },
  };

  const config = statusConfig[card.status];

  return (
    <div className={`rounded-xl border-2 ${config.borderClass} bg-white p-6 transition-shadow hover:shadow-md`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {config.icon}
          <h3 className="text-lg font-bold text-gray-900">{card.form}</h3>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badgeClass}`}>
          {config.badge}
          {card.price && ` \u2014 ${card.price}`}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-3">{card.name}</p>
      <p className="text-sm text-gray-700 mb-4">{card.why}</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">{t("formsWizard.dueDateLabel")}</p>
          <p className="text-sm font-medium text-gray-700">{card.dueDate}</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3">
          <p className="text-[11px] font-semibold text-red-400 uppercase tracking-wider mb-1">{t("formsWizard.penaltyLabel")}</p>
          <p className="text-sm font-medium text-red-700">{card.penalty}</p>
        </div>
      </div>

      {card.status === "supported" ? (
        <Link
          href={card.link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
        >
          {t("formsWizard.startFiling")}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      ) : (
        <a
          href={card.link}
          target={card.link.startsWith("/") ? undefined : "_blank"}
          rel={card.link.startsWith("/") ? undefined : "noopener noreferrer"}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
        >
          {card.status === "coming-soon" ? t("formsWizard.learnMore") : t("formsWizard.viewOnIrs")}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function FormsWizardClient() {
  const { t } = useT();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    memberCount: null,
    foreignOwner: null,
    hasECI: null,
    corpElection: null,
  });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 4;

  function goNext() {
    // If step 2 answer is "no", skip to end early
    if (step === 2 && answers.foreignOwner === "no") {
      setShowResults(true);
      return;
    }
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  }

  function goBack() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function startOver() {
    setStep(1);
    setAnswers({
      memberCount: null,
      foreignOwner: null,
      hasECI: null,
      corpElection: null,
    });
    setShowResults(false);
  }

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return answers.memberCount !== null;
      case 2:
        return answers.foreignOwner !== null;
      case 3:
        return answers.hasECI !== null;
      case 4:
        return answers.corpElection !== null;
      default:
        return false;
    }
  }

  // Non-foreign-owner early exit
  if (showResults && answers.foreignOwner === "no") {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-gradient-to-b from-indigo-50/50 to-white">
          <div className="max-w-2xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
                {t("formsWizard.noForeignBadge")}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                {t("formsWizard.noForeignTitle")}
              </h1>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                {t("formsWizard.noForeignDesc")}
              </p>
              <p className="text-sm text-gray-500 mb-8">
                {t("formsWizard.noForeignHint")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.irs.gov/businesses/small-businesses-self-employed/business-structures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
                >
                  {t("formsWizard.visitIrs")}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button
                  onClick={startOver}
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                >
                  {t("formsWizard.startOver")}
                </button>
              </div>
            </div>

            <EmailCaptureBanner />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Results page
  if (showResults) {
    const { forms, note } = getResults(answers, t);

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-gradient-to-b from-indigo-50/50 to-white">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
                {t("formsWizard.resultsBadge")}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                {t("formsWizard.resultsTitle")}
              </h1>
              <p className="text-lg text-gray-500">
                {t("formsWizard.resultsSubtitle")}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {forms.map((card) => (
                <ResultFormCard key={card.form} card={card} t={t} />
              ))}
            </div>

            {note && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-sm text-amber-800">
                    {note}
                    {answers.hasECI === "not-sure" && (
                      <>
                        {" "}
                        <Link href="/tools/eci-assessment" className="font-semibold text-indigo-600 hover:text-indigo-700 underline">
                          {t("formsWizard.takeEciAssessment")}
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/filer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-[15px] shadow-lg shadow-indigo-600/20"
              >
                {t("formsWizard.startYourFiling")}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button
                onClick={startOver}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-[15px]"
              >
                {t("formsWizard.startOver")}
              </button>
            </div>

            <EmailCaptureBanner />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Wizard steps
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("formsWizard.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("formsWizard.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("formsWizard.subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10">
            <StepIndicator current={step} total={totalSteps} label={t("formsWizard.stepOf").replace("{current}", String(step)).replace("{total}", String(totalSteps))} />

            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {t("formsWizard.q1")}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t("formsWizard.q1Hint")}
                </p>
                <div className="space-y-3">
                  <OptionButton
                    selected={answers.memberCount === "single"}
                    onClick={() => setAnswers({ ...answers, memberCount: "single" })}
                    description={t("formsWizard.q1OptSingleDesc")}
                  >
                    {t("formsWizard.q1OptSingle")}
                  </OptionButton>
                  <OptionButton
                    selected={answers.memberCount === "multiple"}
                    onClick={() => setAnswers({ ...answers, memberCount: "multiple" })}
                    description={t("formsWizard.q1OptMultipleDesc")}
                  >
                    {t("formsWizard.q1OptMultiple")}
                  </OptionButton>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {t("formsWizard.q2")}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t("formsWizard.q2Hint")}
                </p>
                <div className="space-y-3">
                  <OptionButton
                    selected={answers.foreignOwner === "yes"}
                    onClick={() => setAnswers({ ...answers, foreignOwner: "yes" })}
                    description={t("formsWizard.q2OptYesDesc")}
                  >
                    {t("formsWizard.q2OptYes")}
                  </OptionButton>
                  <OptionButton
                    selected={answers.foreignOwner === "no"}
                    onClick={() => setAnswers({ ...answers, foreignOwner: "no" })}
                    description={t("formsWizard.q2OptNoDesc")}
                  >
                    {t("formsWizard.q2OptNo")}
                  </OptionButton>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {t("formsWizard.q3")}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t("formsWizard.q3Hint")}
                </p>
                <div className="space-y-3">
                  <OptionButton
                    selected={answers.hasECI === "yes"}
                    onClick={() => setAnswers({ ...answers, hasECI: "yes" })}
                    description={t("formsWizard.q3OptYesDesc")}
                  >
                    {t("formsWizard.q3OptYes")}
                  </OptionButton>
                  <OptionButton
                    selected={answers.hasECI === "no"}
                    onClick={() => setAnswers({ ...answers, hasECI: "no" })}
                    description={t("formsWizard.q3OptNoDesc")}
                  >
                    {t("formsWizard.q3OptNo")}
                  </OptionButton>
                  <OptionButton
                    selected={answers.hasECI === "not-sure"}
                    onClick={() => setAnswers({ ...answers, hasECI: "not-sure" })}
                    description={t("formsWizard.q3OptNotSureDesc")}
                  >
                    {t("formsWizard.q3OptNotSure")}
                  </OptionButton>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {t("formsWizard.q4")}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {t("formsWizard.q4Hint")}
                </p>
                <div className="space-y-3">
                  <OptionButton
                    selected={answers.corpElection === "no"}
                    onClick={() => setAnswers({ ...answers, corpElection: "no" })}
                    description={t("formsWizard.q4OptNoDesc")}
                  >
                    {t("formsWizard.q4OptNo")}
                  </OptionButton>
                  <OptionButton
                    selected={answers.corpElection === "yes"}
                    onClick={() => setAnswers({ ...answers, corpElection: "yes" })}
                    description={t("formsWizard.q4OptYesDesc")}
                  >
                    {t("formsWizard.q4OptYes")}
                  </OptionButton>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  {t("formsWizard.back")}
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={goNext}
                disabled={!canProceed()}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  canProceed()
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {step === totalSteps ? t("formsWizard.seeResults") : t("formsWizard.continue")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          <EmailCaptureBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
}
