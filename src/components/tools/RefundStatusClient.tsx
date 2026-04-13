"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import {
  FILING_METHOD_OPTIONS,
  RETURN_TYPE_OPTIONS,
  formatDateInput,
  formatDisplayDate,
  getRefundScenario,
  getSupportedFilingMethods,
  parseDateInput,
  type RefundFilingMethod,
  type RefundReturnType,
} from "@/lib/refund-status";

const EXTERNAL_LINK_PROPS = {
  rel: "noreferrer",
  target: "_blank",
} as const;

function EventCard({
  title,
  description,
  date,
  tone = "neutral",
}: {
  title: string;
  description: string;
  date?: Date;
  tone?: "primary" | "neutral" | "warning";
}) {
  const toneClasses =
    tone === "primary"
      ? "border-blue-200 bg-blue-50"
      : tone === "warning"
        ? "border-amber-200 bg-amber-50"
        : "border-gray-200 bg-white";

  return (
    <div className={`rounded-2xl border p-5 ${toneClasses}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
        {formatDisplayDate(date)}
      </p>
      <h3 className="mt-3 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}

export function RefundStatusClient() {
  const [returnType, setReturnType] = useState<RefundReturnType>("individual");
  const [filingMethod, setFilingMethod] =
    useState<RefundFilingMethod>("efile-current");
  const [filedOn, setFiledOn] = useState(() => formatDateInput(new Date()));

  const supportedMethods = getSupportedFilingMethods(returnType);
  const activeFilingMethod = supportedMethods.includes(filingMethod)
    ? filingMethod
    : supportedMethods[0];
  const methodOptions = supportedMethods.map((value) => FILING_METHOD_OPTIONS[value]);

  const parsedFiledOn = parseDateInput(filedOn) ?? parseDateInput(formatDateInput(new Date()));
  const scenario = getRefundScenario({
    returnType,
    filingMethod: activeFilingMethod,
    filedOn: parsedFiledOn ?? new Date(),
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-slate-50 via-white to-blue-50/40">
        <section className="border-b border-slate-200/70 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_40%),linear-gradient(to_bottom,_rgba(255,255,255,0.98),_rgba(248,250,252,0.94))]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Post-filing tool
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                IRS Refund Status Tracker
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Find out if you qualify for an IRS refund, when to check your status,
                and get directed to the correct IRS tool. Your sensitive information
                stays on <span className="font-semibold text-slate-900">irs.gov</span> — we never ask for your SSN or ITIN.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Personalized timeline
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Tell us what you filed
                </h2>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Privacy
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  No SSN, ITIN, or refund amount stored here.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <label className="block text-sm font-semibold text-slate-900">
                  What kind of filing did you send?
                </label>
                <div className="mt-3 grid gap-3">
                  {RETURN_TYPE_OPTIONS.map((option) => {
                    const isActive = option.value === returnType;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setReturnType(option.value)}
                        className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
                          isActive
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-base font-semibold text-slate-900">
                            {option.label}
                          </span>
                          <span
                            className={`h-3 w-3 rounded-full ${
                              isActive ? "bg-blue-600" : "bg-slate-200"
                            }`}
                          />
                        </div>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600">
                          {option.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900">
                  How was it submitted?
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {methodOptions.map((option) => {
                    const isActive = option.value === activeFilingMethod;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFilingMethod(option.value)}
                        className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
                          isActive
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-slate-900">
                            {option.label}
                          </span>
                          <span
                            className={`h-3 w-3 rounded-full ${
                              isActive ? "bg-blue-600" : "bg-slate-200"
                            }`}
                          />
                        </div>
                        <p className="mt-1.5 text-xs leading-5 text-slate-600">
                          {option.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="filed-on"
                  className="block text-sm font-semibold text-slate-900"
                >
                  When did you file or mail it?
                </label>
                <input
                  id="filed-on"
                  type="date"
                  value={filedOn}
                  onChange={(event) => setFiledOn(event.target.value)}
                  className="mt-3 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  We only use this date locally to build your timeline. The actual refund
                  lookup still happens directly on the IRS website.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-900 bg-slate-950 p-7 text-white shadow-xl shadow-slate-900/15">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Official path
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              {scenario.headline}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {scenario.summary}
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Source to use
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                {scenario.statusSourceLabel}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {scenario.statusUpdateNote}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={scenario.primaryAction.href}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-400"
                {...EXTERNAL_LINK_PROPS}
              >
                {scenario.primaryAction.label}
              </a>
              {scenario.secondaryActions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                  {...EXTERNAL_LINK_PROPS}
                >
                  {action.label}
                </a>
              ))}
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  What you will need on irs.gov
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
                  {scenario.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Your privacy comes first
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Checking your refund status requires your SSN/ITIN, filing status, and exact refund amount.
                  For your security, we direct you to the official IRS tool rather than collecting
                  this sensitive information. The IRS updates refund status once every 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-4">
          <div className="grid gap-4 md:grid-cols-3">
            {scenario.events.map((event) => (
              <EventCard
                key={`${event.title}-${event.description}`}
                title={event.title}
                description={event.description}
                date={event.date}
                tone={event.tone}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Notes that matter
              </p>
              <div className="mt-5 space-y-4">
                {scenario.notes.map((note) => (
                  <div
                    key={note}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-blue-200 bg-blue-50/70 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                After filing
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                Use the right next step for the filing you actually sent
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                TaxGuided helps with a mix of informational and refund-related filings.
                Standard consumer advice often assumes a Form 1040 refund, but many of our
                users really need submission proof, IRS processing guidance, or annual
                deadline reminders instead.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Open dashboard
                </Link>
                <Link
                  href="/tools/deadline-reminder"
                  className="inline-flex items-center rounded-2xl border border-blue-300 px-5 py-3 text-sm font-semibold text-blue-800 transition-colors hover:bg-white/70"
                >
                  Set deadline reminders
                </Link>
              </div>
            </div>
          </div>

          <EmailCaptureBanner />
        </section>
      </main>

      <Footer />
    </div>
  );
}
