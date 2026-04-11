"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import {
  type QuickCheckAnswers,
  type QuickCheckEntity,
  type QuickCheckForeignOwnership,
  type QuickCheckTaxIds,
  type QuickCheckTiming,
  type QuickCheckUsActivity,
  getQuickTaxCheckResult,
} from "@/lib/quick-tax-check";

interface Choice<T extends string> {
  value: T;
  label: string;
  description: string;
}

const ENTITY_CHOICES: Choice<QuickCheckEntity>[] = [
  {
    value: "single-member-llc",
    label: "Single-member LLC",
    description: "One owner, no corporate election.",
  },
  {
    value: "multi-member-llc",
    label: "Multi-member LLC",
    description: "Two or more owners taxed as a partnership.",
  },
  {
    value: "corporate-election",
    label: "Corporate election",
    description: "LLC elected to be taxed as a corporation.",
  },
  {
    value: "not-sure",
    label: "Not sure",
    description: "You need a routing answer before full filing.",
  },
];

const FOREIGN_OWNERSHIP_CHOICES: Choice<QuickCheckForeignOwnership>[] = [
  {
    value: "yes",
    label: "Yes, foreign-owned",
    description: "At least one foreign owner is involved.",
  },
  {
    value: "no",
    label: "No",
    description: "This is probably outside the site's main niche.",
  },
  {
    value: "not-sure",
    label: "Not sure",
    description: "Ownership facts or election history are unclear.",
  },
];

const US_ACTIVITY_CHOICES: Choice<QuickCheckUsActivity>[] = [
  {
    value: "no",
    label: "No U.S. trade or business",
    description: "Mostly formation costs or foreign-side activity.",
  },
  {
    value: "yes",
    label: "Yes, likely U.S. activity",
    description: "Customers, operations, or service work touch the U.S.",
  },
  {
    value: "not-sure",
    label: "Not sure",
    description: "You want to check ECI risk without doing a full return.",
  },
];

const TAX_ID_CHOICES: Choice<QuickCheckTaxIds>[] = [
  {
    value: "all-set",
    label: "EIN/ITIN ready",
    description: "Nothing missing on the tax ID side.",
  },
  {
    value: "need-ein",
    label: "Need EIN",
    description: "The business still needs its IRS business identifier.",
  },
  {
    value: "need-itin",
    label: "Need ITIN",
    description: "An individual filer may need a U.S. taxpayer ID.",
  },
  {
    value: "need-both",
    label: "Need both",
    description: "Neither the entity nor individual ID path is fully ready.",
  },
];

const TIMING_CHOICES: Choice<QuickCheckTiming>[] = [
  {
    value: "on-time",
    label: "On time",
    description: "You are checking your filing path before the deadline.",
  },
  {
    value: "need-extension",
    label: "Need more time",
    description: "You probably need the official extension path.",
  },
  {
    value: "late",
    label: "Already late",
    description: "You need the fastest safe route back to compliance.",
  },
];

const DEFAULT_ANSWERS: QuickCheckAnswers = {
  entity: "single-member-llc",
  foreignOwnership: "yes",
  usActivity: "no",
  taxIds: "all-set",
  timing: "on-time",
};

function QuestionGroup<T extends string>({
  label,
  choices,
  value,
  onChange,
}: {
  label: string;
  choices: Choice<T>[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-900 mb-3">{label}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {choices.map((choice) => {
          const selected = value === choice.value;

          return (
            <button
              key={choice.value}
              type="button"
              onClick={() => onChange(choice.value)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                selected
                  ? "border-blue-500 bg-blue-50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50/40"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                    selected ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {selected && <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${selected ? "text-blue-900" : "text-gray-800"}`}>
                    {choice.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {choice.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function QuickTaxCheckClient() {
  const [answers, setAnswers] = useState<QuickCheckAnswers>(DEFAULT_ANSWERS);
  const result = useMemo(() => getQuickTaxCheckResult(answers), [answers]);

  const toneClasses = {
    ready: {
      badge: "bg-emerald-100 text-emerald-700",
      panel: "border-emerald-200 bg-emerald-50/60",
      accent: "text-emerald-700",
    },
    watch: {
      badge: "bg-amber-100 text-amber-700",
      panel: "border-amber-200 bg-amber-50/60",
      accent: "text-amber-700",
    },
    urgent: {
      badge: "bg-red-100 text-red-700",
      panel: "border-red-200 bg-red-50/60",
      accent: "text-red-700",
    },
  }[result.tone];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="border-b border-gray-100 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_45%),linear-gradient(to_bottom,_#eff6ff,_#ffffff_55%)] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                New free tool
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
                5-Minute Filing Check
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                Quick answer first. Filing second. This is a mobile-friendly routing tool
                for foreign-owned LLC owners who want to see the likely forms, urgency,
                and next step before committing to a full workflow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  Estimate only
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  Built for foreign-owned LLCs
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  Uses official IRS paths for extensions
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Tell us the shape of the case
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    These five inputs mirror the decision points that actually change the
                    routing: entity type, foreign ownership, U.S. activity, tax IDs, and timing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAnswers(DEFAULT_ANSWERS)}
                  className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-8">
                <QuestionGroup
                  label="1. Which entity path are you on?"
                  choices={ENTITY_CHOICES}
                  value={answers.entity}
                  onChange={(entity) => setAnswers((current) => ({ ...current, entity }))}
                />
                <QuestionGroup
                  label="2. Is there foreign ownership?"
                  choices={FOREIGN_OWNERSHIP_CHOICES}
                  value={answers.foreignOwnership}
                  onChange={(foreignOwnership) =>
                    setAnswers((current) => ({ ...current, foreignOwnership }))
                  }
                />
                <QuestionGroup
                  label="3. Is U.S. trade or business activity involved?"
                  choices={US_ACTIVITY_CHOICES}
                  value={answers.usActivity}
                  onChange={(usActivity) => setAnswers((current) => ({ ...current, usActivity }))}
                />
                <QuestionGroup
                  label="4. Are the tax IDs ready?"
                  choices={TAX_ID_CHOICES}
                  value={answers.taxIds}
                  onChange={(taxIds) => setAnswers((current) => ({ ...current, taxIds }))}
                />
                <QuestionGroup
                  label="5. What is the timing situation?"
                  choices={TIMING_CHOICES}
                  value={answers.timing}
                  onChange={(timing) => setAnswers((current) => ({ ...current, timing }))}
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-6 lg:self-start">
              <div className={`rounded-[2rem] border p-6 shadow-sm sm:p-8 ${toneClasses.panel}`}>
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${toneClasses.badge}`}>
                  {result.badge}
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-950">
                  {result.headline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {result.summary}
                </p>

                <div className="mt-6 rounded-2xl bg-white/85 p-5 ring-1 ring-black/5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Likely form set
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.forms.map((form) => (
                      <span
                        key={form}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700"
                      >
                        {form}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    What the check is noticing
                  </p>
                  <div className="mt-3 space-y-3">
                    {result.signals.map((signal) => (
                      <div key={signal} className="flex gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-black/5">
                        <div className={`mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ${result.tone === "ready" ? "bg-emerald-500" : result.tone === "watch" ? "bg-amber-500" : "bg-red-500"}`} />
                        <p className="text-sm leading-relaxed text-gray-700">{signal}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Best next steps
                    </p>
                    <Link
                      href="/tools/forms-wizard"
                      className={`text-xs font-semibold ${toneClasses.accent} transition-colors hover:text-gray-900`}
                    >
                      Open detailed wizard
                    </Link>
                  </div>
                  <div className="mt-3 space-y-3">
                    {result.actions.map((action) =>
                      action.external ? (
                        <a
                          key={action.label}
                          href={action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block rounded-2xl border p-4 transition-all ${
                            action.featured
                              ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                              : "border-white/70 bg-white/85 text-gray-800 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm font-semibold">{action.label}</p>
                              <p className={`mt-1 text-xs leading-relaxed ${action.featured ? "text-gray-300" : "text-gray-500"}`}>
                                {action.description}
                              </p>
                            </div>
                            <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h4" />
                            </svg>
                          </div>
                        </a>
                      ) : (
                        <Link
                          key={action.label}
                          href={action.href}
                          className={`block rounded-2xl border p-4 transition-all ${
                            action.featured
                              ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                              : "border-white/70 bg-white/85 text-gray-800 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm font-semibold">{action.label}</p>
                              <p className={`mt-1 text-xs leading-relaxed ${action.featured ? "text-gray-300" : "text-gray-500"}`}>
                                {action.description}
                              </p>
                            </div>
                            <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {result.note && (
                  <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white/75 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Keep in mind
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {result.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-12">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              {
                title: "Quick Filing Check",
                body: "Answer a few quick questions to find out if your foreign-owned LLC has a filing obligation — before committing to the full filing process.",
              },
              {
                title: "No Commitment Required",
                body: "No hidden filing commitment and no assumptions about your entity classification. We guide you through the key questions first.",
              },
              {
                title: "Best companion tools",
                body: "Use this check with the forms wizard, ECI assessment, and deadline reminder when the quick answer points to an edge case.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-200 bg-gray-50/70 p-6">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <EmailCaptureBanner />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
