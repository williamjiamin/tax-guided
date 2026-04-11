"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";

import { useT } from "@/lib/i18n";

function getFilingDates(taxYear: number) {
  const regularDeadline = new Date(taxYear + 1, 3, 15); // April 15
  const extensionDeadline = new Date(taxYear + 1, 9, 15); // October 15
  return { regularDeadline, extensionDeadline };
}

function daysUntil(date: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function DeadlineReminderClient() {
  const { t } = useT();
  const currentYear = new Date().getFullYear();
  const [taxYear, setTaxYear] = useState(currentYear - 1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { regularDeadline, extensionDeadline } = useMemo(
    () => getFilingDates(taxYear),
    [taxYear]
  );

  const regularDays = daysUntil(regularDeadline);
  const extensionDays = daysUntil(extensionDeadline);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "deadline-reminder" }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const DeadlineCard = ({
    label,
    date,
    days,
    isPrimary,
  }: {
    label: string;
    date: Date;
    days: number;
    isPrimary?: boolean;
  }) => {
    const isOverdue = days < 0;
    const isDueToday = days === 0;

    return (
      <div
        className={`rounded-2xl border p-6 ${
          isPrimary
            ? "border-blue-200 bg-blue-50/50"
            : "border-gray-200 bg-white"
        }`}
      >
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-2xl font-bold text-gray-900 mb-2">
          {formatDate(date)}
        </p>
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            isOverdue
              ? "bg-red-100 text-red-700"
              : isDueToday
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isOverdue
                ? "bg-red-500"
                : isDueToday
                  ? "bg-amber-500"
                  : "bg-emerald-500"
            }`}
          />
          {isOverdue
            ? t("deadline.overdue", { days: String(Math.abs(days)) })
            : isDueToday
              ? t("deadline.dueToday")
              : t("deadline.daysRemaining", { days: String(days) })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("deadline.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("deadline.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("deadline.subtitle")}
            </p>
          </div>

          {/* Tax Year Selector */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t("deadline.taxYear")}
            </label>
            <select
              value={taxYear}
              onChange={(e) => {
                setTaxYear(Number(e.target.value));
                setSubmitted(false);
              }}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {Array.from({ length: 5 }, (_, i) => currentYear - 1 - i).map(
                (y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Spacer */}
          <div className="mb-6" />

          {/* Deadline Cards */}
          <div className="grid gap-4 sm:grid-cols-2 mb-10">
            <DeadlineCard
              label={t("deadline.regularDeadline")}
              date={regularDeadline}
              days={regularDays}
              isPrimary
            />
            <DeadlineCard
              label={t("deadline.extensionDeadline")}
              date={extensionDeadline}
              days={extensionDays}
            />
          </div>

          {/* Email Reminder Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
            {submitted ? (
              <div className="text-center">
                <div className="text-4xl mb-3">&#9993;</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                  {t("deadline.reminderSet")}
                </h3>
                <p className="text-sm text-gray-500">
                  {t("deadline.reminderSetDesc")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("deadline.emailLabel")}
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("deadline.emailPlaceholder")}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-600/20"
                  >
                    {t("deadline.remindMe")}
                  </button>
                </div>
                <p className="text-[11px] text-gray-400 mt-2">
                  {t("deadline.noSpam")}
                </p>
              </form>
            )}
          </div>

          {/* Key Dates */}
          <div className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {t("deadline.keyDates", { year: String(taxYear) })}
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  {t("deadline.dateRegular", { year: String(taxYear + 1) })}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  {t("deadline.dateExtension", { year: String(taxYear + 1) })}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  {t("deadline.datePenalty")}
                </p>
              </div>
            </div>
          </div>

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
