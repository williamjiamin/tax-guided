"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";

type FilingType =
  | "individual"
  | "nonresident"
  | "single-member-llc"
  | "partnership"
  | "corporation";
type DeadlineStatus = "before-deadline" | "after-deadline";
type PaymentChoice = "can-pay-now" | "need-more-time" | "refund-or-unsure";
type ActionStyle = "primary" | "secondary" | "ghost";
type Tone = "blue" | "emerald" | "amber" | "red";

interface Answers {
  filingType: FilingType | null;
  deadlineStatus: DeadlineStatus | null;
  paymentChoice: PaymentChoice | null;
  estimatedDue: string;
}

interface Action {
  label: string;
  href: string;
  external?: boolean;
  style: ActionStyle;
}

interface ResultCard {
  tone: Tone;
  badge: string;
  headline: string;
  summary: string;
  dueDateLabel: string;
  dueDate: string;
  extensionPath: string;
  steps: string[];
  warnings: string[];
  actions: Action[];
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCurrentFilingTaxYear(now = new Date()) {
  const currentYear = now.getFullYear();
  const extensionDeadline = new Date(currentYear, 9, 15);
  return now > extensionDeadline ? currentYear : currentYear - 1;
}

function parseCurrency(input: string) {
  const value = Number(input);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getSeasonDates(taxYear: number) {
  return {
    taxYear,
    individualDue: new Date(taxYear + 1, 3, 15),
    individualExtended: new Date(taxYear + 1, 9, 15),
    businessDue: new Date(taxYear + 1, 3, 15),
    businessExtended: new Date(taxYear + 1, 9, 15),
    partnershipDue: new Date(taxYear + 1, 2, 15),
    partnershipExtended: new Date(taxYear + 1, 8, 15),
  };
}

function getLateReturnAction(filingType: FilingType): Action[] {
  switch (filingType) {
    case "single-member-llc":
      return [
        { label: "Open Form 5472 Filer", href: "/filer", style: "primary" },
        {
          label: "Read IRS Form 7004 Rules",
          href: "https://www.irs.gov/forms-pubs/about-form-7004",
          external: true,
          style: "secondary",
        },
      ];
    case "partnership":
      return [
        {
          label: "Open Partnership Filing",
          href: "/services/partnership-filing",
          style: "primary",
        },
        {
          label: "Read IRS Form 7004 Rules",
          href: "https://www.irs.gov/forms-pubs/about-form-7004",
          external: true,
          style: "secondary",
        },
      ];
    case "corporation":
    case "nonresident":
      return [
        {
          label: "Open ECI / 1040-NR Guidance",
          href: "/services/eci-filing",
          style: "primary",
        },
        {
          label: "Read IRS Extension Rules",
          href: "https://www.irs.gov/filing/get-an-extension-to-file-your-tax-return",
          external: true,
          style: "secondary",
        },
      ];
    case "individual":
    default:
      return [
        {
          label: "Pay the IRS Now",
          href: "https://www.irs.gov/payments/direct-pay",
          external: true,
          style: "primary",
        },
        {
          label: "Read IRS Extension Rules",
          href: "https://www.irs.gov/filing/get-an-extension-to-file-your-tax-return",
          external: true,
          style: "secondary",
        },
      ];
  }
}

function buildResult(answers: Answers, taxYear: number): ResultCard | null {
  if (!answers.filingType || !answers.deadlineStatus || !answers.paymentChoice) {
    return null;
  }

  const dates = getSeasonDates(taxYear);
  const estimatedDue = parseCurrency(answers.estimatedDue);
  const estimateLabel = estimatedDue > 0 ? formatCurrency(estimatedDue) : "your best estimate";
  const amountReminder =
    estimatedDue > 0
      ? `Try to pay at least ${formatCurrency(estimatedDue)} by the original due date if you can.`
      : "Estimate what you owe as closely as you can before submitting the extension.";

  if (answers.deadlineStatus === "after-deadline") {
    const dueDate =
      answers.filingType === "partnership"
        ? formatDate(dates.partnershipDue)
        : answers.filingType === "nonresident"
          ? `April 15 or June 15, ${dates.taxYear + 1}`
          : formatDate(dates.businessDue);

    return {
      tone: "red",
      badge: "Time-sensitive",
      headline: "The on-time extension window is likely closed",
      summary:
        "Once the original deadline has passed, the extension usually no longer fixes late-filing exposure. The best move is to file the actual return as soon as possible and pay what you can now.",
      dueDateLabel: "Original deadline",
      dueDate,
      extensionPath: "Shift from extension mode to file-and-pay-asap mode",
      steps: [
        "Make an IRS payment now if you still owe tax.",
        "Prepare and file the actual return instead of relying on a late extension.",
        "Keep proof of payment and filing dates for your records.",
      ],
      warnings: [
        "An extension gives more time to file, not more time to pay.",
        estimatedDue > 0
          ? `If ${formatCurrency(estimatedDue)} is close to your unpaid balance, pay it now to slow down interest and penalties.`
          : "If you expect a refund, filing late can still delay getting your money back.",
      ],
      actions: getLateReturnAction(answers.filingType),
    };
  }

  switch (answers.filingType) {
    case "individual":
      if (answers.paymentChoice === "can-pay-now") {
        return {
          tone: "emerald",
          badge: "Fastest official path",
          headline: "Pay online and count it as your extension",
          summary:
            "For a regular individual return, the fastest path is usually an IRS payment marked for an extension. That avoids a full tax-software flow and gives you a confirmation number immediately.",
          dueDateLabel: `Tax year ${taxYear} deadline`,
          dueDate: formatDate(dates.individualDue),
          extensionPath: `Automatic extension to ${formatDate(dates.individualExtended)} via IRS payment or Form 4868`,
          steps: [
            `Use ${estimateLabel} as your working unpaid-balance estimate.`,
            "Pay online with IRS Direct Pay and mark the payment as an extension.",
            `Save the confirmation number and finish the actual return by ${formatDate(dates.individualExtended)}.`,
          ],
          warnings: [
            amountReminder,
            "If you underpay, interest and late-payment penalties can still apply on the unpaid portion.",
          ],
          actions: [
            {
              label: "Pay with IRS Direct Pay",
              href: "https://www.irs.gov/payments/direct-pay",
              external: true,
              style: "primary",
            },
            {
              label: "Use IRS Free File Instead",
              href: "https://www.irs.gov/filing/irs-free-file-do-your-taxes-for-free",
              external: true,
              style: "secondary",
            },
            {
              label: "Read IRS Extension Rules",
              href: "https://www.irs.gov/filing/get-an-extension-to-file-your-tax-return",
              external: true,
              style: "ghost",
            },
          ],
        };
      }

      return {
        tone: "blue",
        badge: "Best self-serve path",
        headline: "Use IRS Free File or Form 4868",
        summary:
          "If you are not ready to pay in full, the cleanest individual path is usually IRS Free File or another e-file partner submitting Form 4868. The extension buys time to file, but not to pay.",
        dueDateLabel: `Tax year ${taxYear} deadline`,
        dueDate: formatDate(dates.individualDue),
        extensionPath: `Form 4868 or IRS Free File extension until ${formatDate(dates.individualExtended)}`,
        steps: [
          `Estimate your unpaid tax at ${estimateLabel}.`,
          "Submit the extension electronically through IRS Free File or file Form 4868.",
          "Pay as much as you can by the original due date, then finish the return by October 15.",
        ],
        warnings: [
          "IRS Free File has no income limit for extension requests.",
          answers.paymentChoice === "refund-or-unsure"
            ? "If you expect a refund, an extension is still fine, but filing the full return may be simpler once ready."
            : amountReminder,
        ],
        actions: [
          {
            label: "Use IRS Free File",
            href: "https://www.irs.gov/filing/irs-free-file-do-your-taxes-for-free",
            external: true,
            style: "primary",
          },
          {
            label: "Open IRS Form 4868",
            href: "https://www.irs.gov/forms-pubs/about-form-4868",
            external: true,
            style: "secondary",
          },
          {
            label: "Read IRS Extension Rules",
            href: "https://www.irs.gov/filing/get-an-extension-to-file-your-tax-return",
            external: true,
            style: "ghost",
          },
        ],
      };

    case "nonresident":
      return {
        tone: "amber",
        badge: "Check your facts first",
        headline: "Your original due date may be April 15 or June 15",
        summary:
          "Form 1040-NR filers can have different original deadlines depending on wages and U.S. office facts. If you still need more time beyond your original due date, Form 4868 is the extension path to October 15.",
        dueDateLabel: `Tax year ${taxYear} due date`,
        dueDate: `April 15 or June 15, ${dates.taxYear + 1}`,
        extensionPath: `Form 4868 to reach ${formatDate(dates.individualExtended)}`,
        steps: [
          "Confirm whether your original 1040-NR due date is April 15 or June 15.",
          `Estimate any unpaid tax at ${estimateLabel} and pay what you can by that original due date.`,
          "Use Form 4868 if you need the extra time through October 15.",
        ],
        warnings: [
          "The extra time to file does not change the original payment date.",
          "If you also have foreign-owned LLC reporting or ECI issues, your extension plan can involve both entity-level and owner-level forms.",
        ],
        actions: [
          {
            label: "Open 1040-NR / ECI Flow",
            href: "/services/eci-filing",
            style: "primary",
          },
          {
            label: "Read Form 1040-NR Guide",
            href: "/guides/form-1040-nr",
            style: "secondary",
          },
          {
            label: "Open IRS Form 4868",
            href: "https://www.irs.gov/forms-pubs/about-form-4868",
            external: true,
            style: "ghost",
          },
        ],
      };

    case "single-member-llc":
      return {
        tone: "blue",
        badge: "Business extension path",
        headline: "Your LLC extension path is Form 7004",
        summary:
          "For a foreign-owned single-member LLC, the deadline extension is handled through the business return path, not the individual Form 4868 path. The extension buys time for the actual filing package, including the pro forma Form 1120 / Form 5472 return set.",
        dueDateLabel: `Tax year ${taxYear} deadline`,
        dueDate: formatDate(dates.businessDue),
        extensionPath: `Form 7004 to reach ${formatDate(dates.businessExtended)}`,
        steps: [
          "File Form 7004 by the original business deadline.",
          `Pay any expected tax by ${formatDate(dates.businessDue)} if tax is due.`,
          "Come back later to finish the actual Form 5472 filing package.",
        ],
        warnings: [
          "Form 7004 extends the filing deadline, not the payment deadline.",
          "The extension request is not the same thing as filing Form 5472 itself.",
        ],
        actions: [
          {
            label: "Read IRS Form 7004",
            href: "https://www.irs.gov/forms-pubs/about-form-7004",
            external: true,
            style: "primary",
          },
          {
            label: "Open Form 5472 Filer",
            href: "/filer",
            style: "secondary",
          },
          {
            label: "Review Form Deadlines",
            href: "/tools/deadline-reminder",
            style: "ghost",
          },
        ],
      };

    case "partnership":
      return {
        tone: "blue",
        badge: "Partnership path",
        headline: "Partnership returns use Form 7004",
        summary:
          "Calendar-year partnerships have an earlier deadline than individual returns, so the fast move is to file Form 7004 before the partnership due date and then complete the Form 1065 package later.",
        dueDateLabel: `Tax year ${taxYear} deadline`,
        dueDate: formatDate(dates.partnershipDue),
        extensionPath: `Form 7004 to reach ${formatDate(dates.partnershipExtended)}`,
        steps: [
          "File Form 7004 on or before the partnership due date.",
          "Make any tax payments that cannot wait for the extended deadline.",
          "Prepare Form 1065, K-1s, and related withholding forms on the extended timeline.",
        ],
        warnings: [
          "The extension does not postpone tax payments owed by the entity.",
          "Foreign-partner withholding and K-1 timing can still create downstream pressure even after the extension is filed.",
        ],
        actions: [
          {
            label: "Open Partnership Filing",
            href: "/services/partnership-filing",
            style: "primary",
          },
          {
            label: "Read IRS Form 7004",
            href: "https://www.irs.gov/forms-pubs/about-form-7004",
            external: true,
            style: "secondary",
          },
          {
            label: "Check Partnership Guide",
            href: "/guides/form-1065",
            style: "ghost",
          },
        ],
      };

    case "corporation":
      return {
        tone: "amber",
        badge: "Business extension path",
        headline: "Most corporations extend with Form 7004",
        summary:
          "For most calendar-year corporations, Form 7004 is the extension path. Foreign corporations filing Form 1120-F can have different underlying due dates, so confirm the original filing date before you rely on the extension window.",
        dueDateLabel: `Typical deadline for tax year ${taxYear}`,
        dueDate: formatDate(dates.businessDue),
        extensionPath: `Form 7004, usually to ${formatDate(dates.businessExtended)}`,
        steps: [
          "Confirm the original deadline for the exact return you are filing.",
          `Estimate your unpaid balance at ${estimateLabel} and pay what is due by the original date.`,
          "Use Form 7004 to secure the filing extension window.",
        ],
        warnings: [
          "Form 1120-F timing can differ from domestic Form 1120 timing.",
          "If you have ECI or treaty issues, the extension is only the first step; the substantive return is still the hard part.",
        ],
        actions: [
          {
            label: "Open ECI / 1120-F Flow",
            href: "/services/eci-filing",
            style: "primary",
          },
          {
            label: "Read IRS Form 7004",
            href: "https://www.irs.gov/forms-pubs/about-form-7004",
            external: true,
            style: "secondary",
          },
          {
            label: "Read 1120-F Guide",
            href: "/guides/form-1120-f",
            style: "ghost",
          },
        ],
      };
  }
}

function getResultToneClasses(tone: Tone) {
  switch (tone) {
    case "emerald":
      return {
        badge: "bg-emerald-100 text-emerald-700",
        border: "border-emerald-200",
        soft: "bg-emerald-50",
      };
    case "amber":
      return {
        badge: "bg-amber-100 text-amber-700",
        border: "border-amber-200",
        soft: "bg-amber-50",
      };
    case "red":
      return {
        badge: "bg-red-100 text-red-700",
        border: "border-red-200",
        soft: "bg-red-50",
      };
    case "blue":
    default:
      return {
        badge: "bg-blue-100 text-blue-700",
        border: "border-blue-200",
        soft: "bg-blue-50",
      };
  }
}

function StepButton({
  selected,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition-all ${
        selected
          ? "border-blue-500 bg-blue-50 shadow-sm"
          : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50/40"
      }`}
    >
      <p className={`text-sm font-semibold ${selected ? "text-blue-900" : "text-gray-900"}`}>
        {title}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-gray-500">{description}</p>
    </button>
  );
}

function ActionLink({ action }: { action: Action }) {
  const className =
    action.style === "primary"
      ? "inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      : action.style === "secondary"
        ? "inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        : "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors";

  if (action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}

export function TaxExtensionFastTrackClient() {
  const taxYear = getCurrentFilingTaxYear();
  const season = useMemo(() => getSeasonDates(taxYear), [taxYear]);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    filingType: null,
    deadlineStatus: null,
    paymentChoice: null,
    estimatedDue: "",
  });

  const result = useMemo(() => buildResult(answers, taxYear), [answers, taxYear]);

  const canContinue = Boolean(
    (step === 1 && answers.filingType) ||
      (step === 2 && answers.deadlineStatus) ||
      (step === 3 && answers.paymentChoice)
  );

  const resultTone = result ? getResultToneClasses(result.tone) : null;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.45),_transparent_38%),linear-gradient(to_bottom,_#f8fbff,_#ffffff_42%)]">
        <section className="px-6 pb-8 pt-16 sm:pt-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Tax Extension Fast Track
                </div>
                <h1 className="mt-6 max-w-2xl text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                  Find the fastest legitimate extension path in under two minutes
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                  Answer a few questions and we&apos;ll determine the right extension path for your situation:
                  <strong>IRS Direct Pay</strong>, <strong>Form 4868</strong>,
                  <strong> Form 7004</strong>, or file your return directly.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                      Individuals
                    </p>
                    <p className="mt-2 text-lg font-bold text-gray-900">April 15</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Fastest path is often Direct Pay or IRS Free File.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                      Partnerships
                    </p>
                    <p className="mt-2 text-lg font-bold text-gray-900">March 15</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Extension path is Form 7004, not Form 4868.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                      Foreign-owned LLCs
                    </p>
                    <p className="mt-2 text-lg font-bold text-gray-900">April 15</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Extend the filing path, then come back for the actual return.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_30px_90px_-45px_rgba(37,99,235,0.45)] sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                      Step {step} of 3
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                      {step === 1
                        ? "What are you extending?"
                        : step === 2
                          ? "Has the original deadline passed?"
                          : "What do you think you still owe?"}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setAnswers({
                        filingType: null,
                        deadlineStatus: null,
                        paymentChoice: null,
                        estimatedDue: "",
                      });
                    }}
                    className="text-sm font-medium text-gray-400 hover:text-gray-600"
                  >
                    Reset
                  </button>
                </div>

                <div className="mt-6 flex gap-2">
                  {[1, 2, 3].map((value) => (
                    <div
                      key={value}
                      className={`h-1.5 flex-1 rounded-full ${
                        value <= step ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {step === 1 && (
                  <div className="mt-6 space-y-3">
                    <StepButton
                      selected={answers.filingType === "individual"}
                      title="Personal return (Form 1040)"
                      description="W-2s, 1099s, side income, or a normal individual deadline."
                      onClick={() => setAnswers((prev) => ({ ...prev, filingType: "individual" }))}
                    />
                    <StepButton
                      selected={answers.filingType === "nonresident"}
                      title="Nonresident return (Form 1040-NR)"
                      description="You are filing as a nonresident alien individual, often with U.S.-source or ECI income."
                      onClick={() => setAnswers((prev) => ({ ...prev, filingType: "nonresident" }))}
                    />
                    <StepButton
                      selected={answers.filingType === "single-member-llc"}
                      title="Foreign-owned single-member LLC"
                      description="You still need the entity-level filing path, not a consumer 1040 extension flow."
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, filingType: "single-member-llc" }))
                      }
                    />
                    <StepButton
                      selected={answers.filingType === "partnership"}
                      title="Partnership / multi-member LLC"
                      description="Form 1065 and related filings. Earlier deadline, different extension form."
                      onClick={() => setAnswers((prev) => ({ ...prev, filingType: "partnership" }))}
                    />
                    <StepButton
                      selected={answers.filingType === "corporation"}
                      title="Corporation / foreign corporation"
                      description="Form 1120 or 1120-F style filing path."
                      onClick={() => setAnswers((prev) => ({ ...prev, filingType: "corporation" }))}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="mt-6 space-y-3">
                    <StepButton
                      selected={answers.deadlineStatus === "before-deadline"}
                      title="No, I’m still before the original deadline"
                      description="I want the fastest clean extension route right now."
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, deadlineStatus: "before-deadline" }))
                      }
                    />
                    <StepButton
                      selected={answers.deadlineStatus === "after-deadline"}
                      title="Yes, the original deadline already passed"
                      description="I may already be late and need the least-bad next move."
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, deadlineStatus: "after-deadline" }))
                      }
                    />

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                      U.S. citizens and resident aliens living abroad may get an automatic extra two months
                      for an individual return, but that does <strong>not</strong> extend the time to pay.
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="mt-6 space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">
                        Rough estimate of unpaid tax
                      </label>
                      <div className="mt-2 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-semibold text-gray-500">$</span>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1"
                            value={answers.estimatedDue}
                            onChange={(e) =>
                              setAnswers((prev) => ({ ...prev, estimatedDue: e.target.value }))
                            }
                            placeholder="0"
                            className="w-full border-0 bg-transparent p-0 text-lg font-semibold text-gray-900 outline-none"
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-gray-400">
                        This does not have to be exact. The goal is to choose the fastest next step, not finish the return here.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <StepButton
                        selected={answers.paymentChoice === "can-pay-now"}
                        title="I can pay most or all of that now"
                        description="Best fit if you want the fastest official extension path and can make an IRS payment today."
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, paymentChoice: "can-pay-now" }))
                        }
                      />
                      <StepButton
                        selected={answers.paymentChoice === "need-more-time"}
                        title="I need more time to pay too"
                        description="You should still file the extension, but the result will emphasize payment risk."
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, paymentChoice: "need-more-time" }))
                        }
                      />
                      <StepButton
                        selected={answers.paymentChoice === "refund-or-unsure"}
                        title="I may be due a refund or I’m not sure"
                        description="You still need the right extension path, but urgency around payment may be lower."
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, paymentChoice: "refund-or-unsure" }))
                        }
                      />
                    </div>
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                    disabled={step === 1}
                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (step < 3) {
                        setStep((prev) => prev + 1);
                      }
                    }}
                    disabled={!canContinue || step === 3}
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {result && resultTone && (
          <section className="px-6 pb-6">
            <div className="mx-auto max-w-6xl">
              <div className={`rounded-[28px] border ${resultTone.border} bg-white p-6 shadow-sm sm:p-8`}>
                <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                  <div>
                    <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${resultTone.badge}`}>
                      {result.badge}
                    </div>
                    <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900">
                      {result.headline}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                      {result.summary}
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className={`rounded-2xl border ${resultTone.border} ${resultTone.soft} p-5`}>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                          {result.dueDateLabel}
                        </p>
                        <p className="mt-2 text-xl font-bold text-gray-900">{result.dueDate}</p>
                      </div>
                      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                          Recommended extension path
                        </p>
                        <p className="mt-2 text-xl font-bold text-gray-900">{result.extensionPath}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {result.actions.map((action) => (
                        <ActionLink key={`${action.label}-${action.href}`} action={action} />
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                        What to do next
                      </p>
                      <div className="mt-4 space-y-3">
                        {result.steps.map((item, index) => (
                          <div key={item} className="flex gap-3">
                            <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                              {index + 1}
                            </div>
                            <p className="text-sm leading-relaxed text-gray-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                        Don’t miss this
                      </p>
                      <div className="mt-4 space-y-3">
                        {result.warnings.map((item) => (
                          <div key={item} className="flex gap-3">
                            <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                            <p className="text-sm leading-relaxed text-red-900">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="px-6 py-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[28px] border border-gray-200 bg-gray-950 p-6 text-white sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                    Current filing season
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight">
                    Tax year {season.taxYear} deadline map
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300">
                    These are the dates this tool is optimizing around right now. The result above picks the
                    right lane, but the calendar pressure depends on the form family.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Individuals</p>
                    <p className="mt-2 text-lg font-bold">{formatDate(season.individualDue)}</p>
                    <p className="text-sm text-gray-300">Extended: {formatDate(season.individualExtended)}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Partnerships</p>
                    <p className="mt-2 text-lg font-bold">{formatDate(season.partnershipDue)}</p>
                    <p className="text-sm text-gray-300">Extended: {formatDate(season.partnershipExtended)}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Foreign-owned LLCs</p>
                    <p className="mt-2 text-lg font-bold">{formatDate(season.businessDue)}</p>
                    <p className="text-sm text-gray-300">Extended: {formatDate(season.businessExtended)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8">
          <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Official Source</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">IRS extension page</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The IRS explicitly says you can pay online and count it as your extension, or use Free File for an extension with no income limit.
              </p>
              <a
                href="https://www.irs.gov/filing/get-an-extension-to-file-your-tax-return"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Read the IRS page
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Official Source</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Topic 304</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The IRS repeats the key rule here: an extension to file is not an extension to pay, and online payment is one of the official extension methods.
              </p>
              <a
                href="https://www.irs.gov/taxtopics/tc304"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Open Topic 304
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Official Source</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Business returns use Form 7004</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                If you are extending a partnership, corporation, or foreign-owned LLC filing path, start with the IRS Form 7004 rules instead of a consumer 4868 flow.
              </p>
              <a
                href="https://www.irs.gov/forms-pubs/about-form-7004"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Open Form 7004
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-gray-900">
              About This Tool
            </h2>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
              <p>
                This tool helps you determine the correct IRS extension form for your situation and generates
                a ready-to-file extension request. It does <strong>not</strong> electronically transmit the form to the IRS on your behalf.
              </p>
              <p>
                After generating your extension form, you can fax it to the IRS or mail it using an
                IRS-approved delivery service. See our <a href="/guides/how-to-submit-form-5472" className="text-blue-600 hover:underline">filing submission guide</a> for step-by-step instructions.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <EmailCaptureBanner />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
