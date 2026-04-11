"use client";

import Link from "next/link";
import { useMemo, useState, type ChangeEvent } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { parseCSV } from "@/lib/bank-parser/csv-parser";
import type { BankFormat, ParsedTransaction } from "@/lib/bank-parser/types";
import { summarizeGigTransactions } from "@/lib/gig-tax-import";
import {
  BUSINESS_MILEAGE_RATE_2026,
  GIG_TAX_YEAR,
  QUARTERLY_DUE_DATES_2026,
  type GigFilingStatus,
  estimateGigTaxSetAside,
} from "@/lib/gig-tax-set-aside";

type Preset = {
  label: string;
  gross: string;
  miles: string;
  expenses: string;
  filingStatus: GigFilingStatus;
  w2: string;
  covered: string;
  stateRate: string;
};

const PRESETS: Preset[] = [
  {
    label: "Blank",
    gross: "",
    miles: "",
    expenses: "",
    filingStatus: "single",
    w2: "",
    covered: "",
    stateRate: "4",
  },
  {
    label: "After-work side hustle",
    gross: "350",
    miles: "120",
    expenses: "12",
    filingStatus: "single",
    w2: "72000",
    covered: "",
    stateRate: "4",
  },
  {
    label: "Full-time driver",
    gross: "1500",
    miles: "550",
    expenses: "35",
    filingStatus: "single",
    w2: "",
    covered: "",
    stateRate: "4",
  },
  {
    label: "Weekend resale + delivery",
    gross: "650",
    miles: "80",
    expenses: "60",
    filingStatus: "married-joint",
    w2: "98000",
    covered: "1200",
    stateRate: "5",
  },
];

const FILING_STATUS_OPTIONS: Array<{
  value: GigFilingStatus;
  label: string;
  description: string;
}> = [
  {
    value: "single",
    label: "Single",
    description: "No spouse on the return.",
  },
  {
    value: "married-joint",
    label: "Married filing jointly",
    description: "Use your combined household picture.",
  },
  {
    value: "head-of-household",
    label: "Head of household",
    description: "Single filer supporting a dependent household.",
  },
  {
    value: "married-separate",
    label: "Married filing separately",
    description: "Use carefully, especially with side-income planning.",
  },
];

const BANK_OPTIONS: Array<{ value: BankFormat | "auto"; label: string }> = [
  { value: "auto", label: "Auto-detect" },
  { value: "mercury", label: "Mercury" },
  { value: "chase", label: "Chase" },
  { value: "wise", label: "Wise" },
  { value: "bofa", label: "Bank of America" },
  { value: "wells_fargo", label: "Wells Fargo" },
  { value: "generic", label: "Other / Generic CSV" },
];

function parseCurrency(value: string): number {
  return Number(value.replace(/,/g, "")) || 0;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

function formatWindowDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00Z`));
}

function BreakdownRow({
  label,
  value,
  amount,
  accentClass,
}: {
  label: string;
  value: string;
  amount: number;
  accentClass: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">{label}</p>
          <p className="mt-1 text-xs leading-relaxed text-gray-500">{value}</p>
        </div>
        <p className={`text-sm font-semibold ${accentClass}`}>
          {formatCurrency(amount)}
        </p>
      </div>
    </div>
  );
}

export function GigTaxSetAsideClient() {
  const [weeklyGrossIncome, setWeeklyGrossIncome] = useState("");
  const [weeklyBusinessMiles, setWeeklyBusinessMiles] = useState("");
  const [weeklyOtherExpenses, setWeeklyOtherExpenses] = useState("");
  const [annualW2Wages, setAnnualW2Wages] = useState("");
  const [annualTaxAlreadyCovered, setAnnualTaxAlreadyCovered] = useState("");
  const [stateRate, setStateRate] = useState("4");
  const [filingStatus, setFilingStatus] = useState<GigFilingStatus>("single");
  const [importBank, setImportBank] = useState<BankFormat | "auto">("auto");
  const [treatImportedOutflowsAsExpenses, setTreatImportedOutflowsAsExpenses] =
    useState(false);
  const [importedTransactions, setImportedTransactions] = useState<
    ParsedTransaction[]
  >([]);
  const [importFileName, setImportFileName] = useState("");
  const [importError, setImportError] = useState("");

  const result = useMemo(
    () =>
      estimateGigTaxSetAside({
        weeklyGrossIncome: parseCurrency(weeklyGrossIncome),
        weeklyBusinessMiles: parseCurrency(weeklyBusinessMiles),
        weeklyOtherExpenses: parseCurrency(weeklyOtherExpenses),
        annualW2Wages: parseCurrency(annualW2Wages),
        annualTaxAlreadyCovered: parseCurrency(annualTaxAlreadyCovered),
        stateMarginalRate: (Number(stateRate) || 0) / 100,
        filingStatus,
      }),
    [
      annualTaxAlreadyCovered,
      annualW2Wages,
      filingStatus,
      stateRate,
      weeklyBusinessMiles,
      weeklyGrossIncome,
      weeklyOtherExpenses,
    ]
  );

  const importSummary = useMemo(
    () =>
      summarizeGigTransactions(importedTransactions, {
        includeOutflowsAsExpenses: treatImportedOutflowsAsExpenses,
      }),
    [importedTransactions, treatImportedOutflowsAsExpenses]
  );

  const applyPreset = (preset: Preset) => {
    setWeeklyGrossIncome(preset.gross);
    setWeeklyBusinessMiles(preset.miles);
    setWeeklyOtherExpenses(preset.expenses);
    setFilingStatus(preset.filingStatus);
    setAnnualW2Wages(preset.w2);
    setAnnualTaxAlreadyCovered(preset.covered);
    setStateRate(preset.stateRate);
  };

  const resetCalculator = () => {
    applyPreset(PRESETS[0]);
    setImportBank("auto");
    setTreatImportedOutflowsAsExpenses(false);
    setImportedTransactions([]);
    setImportFileName("");
    setImportError("");
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setImportError("");

    const isCsvLike =
      file.name.endsWith(".csv") ||
      file.name.endsWith(".tsv") ||
      file.type === "text/csv";

    if (!isCsvLike) {
      setImportError("Upload a CSV export from your payout or business account.");
      event.target.value = "";
      return;
    }

    try {
      const text = await file.text();
      const parsed = parseCSV(
        text,
        importBank === "auto" ? undefined : importBank
      );

      if (parsed.length === 0) {
        setImportError(
          "No transactions were detected. Try exporting a cleaner date range or choosing the bank format manually."
        );
        event.target.value = "";
        return;
      }

      setImportedTransactions(parsed);
      setImportFileName(file.name);
    } catch (error) {
      setImportError(
        `Could not read that CSV: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }

    event.target.value = "";
  };

  const applyImportedAverages = () => {
    if (!importSummary) {
      return;
    }

    setWeeklyGrossIncome(Math.round(importSummary.weeklyGrossIncome).toString());

    if (treatImportedOutflowsAsExpenses) {
      setWeeklyOtherExpenses(
        Math.round(importSummary.weeklyOtherExpenses).toString()
      );
    }
  };

  const hasInputs =
    parseCurrency(weeklyGrossIncome) > 0 ||
    parseCurrency(weeklyBusinessMiles) > 0 ||
    parseCurrency(weeklyOtherExpenses) > 0 ||
    parseCurrency(annualW2Wages) > 0;

  const paymentStatus = useMemo(() => {
    if (!hasInputs) {
      return {
        tone: "slate",
        eyebrow: "Need a right-now answer?",
        title: `Enter one week of numbers or import a CSV to see what may be due by ${result.nextDueDisplayDate}.`,
        body: "The calculator turns a quick weekly picture into a projected annual tax gap, a quarterly target, and a pace check for the next IRS estimated-tax deadline.",
      };
    }

    if (!result.estimatedPaymentsLikelyRequired) {
      return {
        tone: "emerald",
        eyebrow: "Quarterly payments may not be required",
        title: "Your current federal gap is below the usual IRS $1,000 estimated-tax trigger.",
        body: "You may still want a reserve buffer, but you likely do not need to send estimated payments yet based on the inputs above.",
      };
    }

    if (result.paymentPace === "behind") {
      return {
        tone: "amber",
        eyebrow: `Potential payment by ${result.nextDueDisplayDate}`,
        title: `Move about ${formatCurrency(
          result.amountToPayByNextDueDate
        )} by ${result.nextDueDisplayDate}.`,
        body: `That keeps you roughly on pace for ${result.installmentsDueByNextDate} estimated payment ${
          result.installmentsDueByNextDate === 1 ? "installment" : "installments"
        } based on this year's projected tax gap and the amount already covered so far.`,
      };
    }

    return {
      tone: "sky",
      eyebrow: `On pace for ${result.nextDueDisplayDate}`,
      title: `You appear covered through ${result.nextDueDisplayDate}.`,
      body: `Based on the amount already withheld or paid, you have roughly ${formatCurrency(
        result.targetCoveredByNextDueDate
      )} covered for the next checkpoint. Keep moving about ${formatCurrency(
        result.weeklySetAside
      )} a week to stay there.`,
    };
  }, [hasInputs, result]);

  const paymentStatusClasses = {
    slate: "border-white/10 bg-white/5 text-slate-100",
    emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-100",
    amber: "border-amber-300/20 bg-amber-300/10 text-amber-100",
    sky: "border-sky-300/20 bg-sky-300/10 text-sky-100",
  }[paymentStatus.tone];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_32%),linear-gradient(to_bottom,_#fffaf0,_#ffffff_42%,_#f8fafc)]">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm">
                New free tool
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
                Quarterly Gig Tax Check
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                Fast answer first. Type a week of income, miles, and expenses, or
                import a CSV from your payout or business account, to estimate whether
                you likely owe quarterly taxes and what to move before the next due
                date for {GIG_TAX_YEAR}.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  CSV import, no bank login
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  Uses {GIG_TAX_YEAR} mileage + federal rate tables
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  Built for quick quarterly checks, not full filing
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-gray-200 bg-white/95 p-6 shadow-xl shadow-amber-100/40 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                    1. Start fast
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Use a preset if you want a quick benchmark, or import a CSV to
                    reduce manual typing before you fine-tune the numbers.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
                >
                  Reset
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className="rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-gray-200 bg-slate-50/90 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                      Import a CSV instead
                    </p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
                      If you already have a payout or business-account export, this
                      tool can estimate weekly averages from the observed date range
                      without sending your statement anywhere.
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
                    Browser-only parsing
                  </span>
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-4">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-gray-900">
                        CSV format
                      </span>
                      <select
                        value={importBank}
                        onChange={(event) =>
                          setImportBank(event.target.value as BankFormat | "auto")
                        }
                        className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      >
                        {BANK_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                      <input
                        type="checkbox"
                        checked={treatImportedOutflowsAsExpenses}
                        onChange={(event) =>
                          setTreatImportedOutflowsAsExpenses(event.target.checked)
                        }
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span>
                        <span className="block text-sm font-semibold text-gray-900">
                          Treat outflows as deductible expenses
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-gray-500">
                          Turn this on only if the CSV is from a dedicated business or
                          payout account. If the statement mixes personal spending, leave
                          it off and keep expenses manual.
                        </span>
                      </span>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-gray-900">
                        Upload CSV
                      </span>
                      <input
                        type="file"
                        accept=".csv,.tsv,text/csv"
                        onChange={handleImportFile}
                        className="block w-full rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-amber-50 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-amber-700 hover:border-amber-300"
                      />
                    </label>

                    {importError && (
                      <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                        {importError}
                      </div>
                    )}
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-5">
                    {importSummary ? (
                      <>
                        <p className="text-sm font-semibold text-slate-900">
                          Imported from {importFileName}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-gray-500">
                          Observation window: {formatWindowDate(importSummary.startDate)}{" "}
                          to {formatWindowDate(importSummary.endDate)} (
                          {importSummary.daysCovered} days). Export a tighter date range
                          if you want a tighter weekly average.
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                              Total inflows
                            </p>
                            <p className="mt-2 text-2xl font-bold text-slate-950">
                              {formatCurrency(importSummary.totalInflows)}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {importSummary.inflowCount} deposits or payouts
                            </p>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                              Weekly gross
                            </p>
                            <p className="mt-2 text-2xl font-bold text-slate-950">
                              {formatCurrency(importSummary.weeklyGrossIncome)}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              Averaged across {importSummary.weeksCovered.toFixed(1)}{" "}
                              weeks
                            </p>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                              Total outflows
                            </p>
                            <p className="mt-2 text-2xl font-bold text-slate-950">
                              {formatCurrency(importSummary.totalOutflows)}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {importSummary.outflowCount} debits in the file
                            </p>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                              Weekly expenses
                            </p>
                            <p className="mt-2 text-2xl font-bold text-slate-950">
                              {formatCurrency(importSummary.weeklyOtherExpenses)}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {treatImportedOutflowsAsExpenses
                                ? "Auto-filled only because business-only mode is on"
                                : "Left at $0 until you turn on business-only mode"}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={applyImportedAverages}
                          className="mt-5 inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          Use imported averages
                        </button>
                      </>
                    ) : (
                      <div className="flex h-full min-h-52 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 text-center text-sm leading-relaxed text-gray-500">
                        Upload a CSV to see the date range, total deposits, and
                        estimated weekly averages before you apply them to the
                        calculator.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                    2. Weekly numbers
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-gray-900">
                        Gross weekly earnings
                      </span>
                      <span className="mb-2 block text-xs text-gray-500">
                        Before tax. Include app payouts, cash tips you report, and any
                        other side-income you expect to be taxable.
                      </span>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          $
                        </span>
                        <input
                          type="number"
                          min={0}
                          value={weeklyGrossIncome}
                          onChange={(event) => setWeeklyGrossIncome(event.target.value)}
                          placeholder="900"
                          className="w-full rounded-2xl border border-gray-300 bg-white py-3 pl-8 pr-4 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                      </div>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-gray-900">
                        Business miles per week
                      </span>
                      <span className="mb-2 block text-xs text-gray-500">
                        Use 0 for work with no driving. The tool uses the IRS standard
                        mileage rate of {(BUSINESS_MILEAGE_RATE_2026 * 100).toFixed(1)}
                        cents per mile.
                      </span>
                      <input
                        type="number"
                        min={0}
                        value={weeklyBusinessMiles}
                        onChange={(event) => setWeeklyBusinessMiles(event.target.value)}
                        placeholder="250"
                        className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      />
                    </label>

                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-semibold text-gray-900">
                        Other ordinary weekly expenses
                      </span>
                      <span className="mb-2 block text-xs text-gray-500">
                        Think insulated bags, parking, tolls, software, supplies, and
                        non-vehicle costs. If you use actual vehicle costs instead of the
                        mileage method, set miles to 0 and enter those costs here so you
                        do not double count.
                      </span>
                      <div className="relative max-w-sm">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          $
                        </span>
                        <input
                          type="number"
                          min={0}
                          value={weeklyOtherExpenses}
                          onChange={(event) =>
                            setWeeklyOtherExpenses(event.target.value)
                          }
                          placeholder="25"
                          className="w-full rounded-2xl border border-gray-300 bg-white py-3 pl-8 pr-4 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                    3. Tax context
                  </p>
                  <div className="mt-4 grid gap-4">
                    <div>
                      <span className="mb-3 block text-sm font-semibold text-gray-900">
                        Filing status
                      </span>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {FILING_STATUS_OPTIONS.map((option) => {
                          const selected = filingStatus === option.value;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setFilingStatus(option.value)}
                              className={`rounded-2xl border p-4 text-left transition ${
                                selected
                                  ? "border-amber-400 bg-amber-50"
                                  : "border-gray-200 bg-white hover:border-amber-200 hover:bg-amber-50/40"
                              }`}
                            >
                              <p
                                className={`text-sm font-semibold ${
                                  selected ? "text-amber-900" : "text-gray-800"
                                }`}
                              >
                                {option.label}
                              </p>
                              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                                {option.description}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <label className="block max-w-sm">
                      <span className="mb-2 block text-sm font-semibold text-gray-900">
                        Marginal state tax rate
                      </span>
                      <span className="mb-2 block text-xs text-gray-500">
                        Use 0 if you live in a no-income-tax state. This is a simple
                        buffer rate applied to net side-income.
                      </span>
                      <div className="relative">
                        <input
                          type="number"
                          min={0}
                          max={15}
                          step="0.1"
                          value={stateRate}
                          onChange={(event) => setStateRate(event.target.value)}
                          className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 pr-10 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                          %
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                <details className="rounded-3xl border border-gray-200 bg-gray-50/80 p-5">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900">
                    Optional if you also have a W-2 job or already paid something
                  </summary>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    These fields matter because W-2 wages can already use up part of the
                    Social Security wage base, and the amount already paid so far changes
                    what may still be due by the next quarterly deadline.
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-gray-900">
                        Annual W-2 wages
                      </span>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          $
                        </span>
                        <input
                          type="number"
                          min={0}
                          value={annualW2Wages}
                          onChange={(event) => setAnnualW2Wages(event.target.value)}
                          placeholder="65000"
                          className="w-full rounded-2xl border border-gray-300 bg-white py-3 pl-8 pr-4 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                      </div>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-gray-900">
                        Tax already covered so far this year
                      </span>
                      <span className="mb-2 block text-xs text-gray-500">
                        Include extra W-2 withholding or estimated payments you have
                        already aimed at this side income.
                      </span>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          $
                        </span>
                        <input
                          type="number"
                          min={0}
                          value={annualTaxAlreadyCovered}
                          onChange={(event) =>
                            setAnnualTaxAlreadyCovered(event.target.value)
                          }
                          placeholder="800"
                          className="w-full rounded-2xl border border-gray-300 bg-white py-3 pl-8 pr-4 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                      </div>
                    </label>
                  </div>
                </details>
              </div>
            </div>

            <div className="lg:sticky lg:top-6 lg:self-start">
              <div className="overflow-hidden rounded-[2rem] border border-slate-900 bg-slate-950 text-white shadow-2xl shadow-slate-900/15">
                <div className="border-b border-white/10 bg-[linear-gradient(135deg,_rgba(251,191,36,0.18),_rgba(15,23,42,0.12))] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                    Weekly reserve target
                  </p>
                  <p className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
                    {formatCurrency(result.weeklySetAside)}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
                    {hasInputs
                      ? `That is about ${formatPercent(
                          result.effectiveSetAsideRate * 100
                        )} of your weekly gross payouts based on the inputs above.`
                      : `Enter your weekly numbers to see a ${GIG_TAX_YEAR} quarterly-payment estimate.`}
                  </p>

                  <div
                    className={`mt-6 rounded-3xl border p-5 ${paymentStatusClasses}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                      {paymentStatus.eyebrow}
                    </p>
                    <p className="mt-3 text-xl font-bold tracking-tight">
                      {paymentStatus.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      {paymentStatus.body}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Pay by {result.nextDueQuarterLabel}
                      </p>
                      <p className="mt-2 text-2xl font-bold">
                        {formatCurrency(result.amountToPayByNextDueDate)}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {result.nextDueDisplayDate}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Quarterly target
                      </p>
                      <p className="mt-2 text-2xl font-bold">
                        {formatCurrency(result.quarterlySetAside)}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Annual projected gap
                      </p>
                      <p className="mt-2 text-2xl font-bold">
                        {formatCurrency(result.annualRemainingTax)}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Estimated net profit
                      </p>
                      <p className="mt-2 text-2xl font-bold">
                        {formatCurrency(result.annualNetProfit)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6 sm:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Estimated breakdown
                    </p>
                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
                          <span>Self-employment tax</span>
                          <span>{formatCurrency(result.annualSelfEmploymentTax)}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-amber-300"
                            style={{
                              width: `${
                                result.annualEstimatedTax > 0
                                  ? (result.annualSelfEmploymentTax /
                                      result.annualEstimatedTax) *
                                    100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
                          <span>Federal income tax from gig income</span>
                          <span>
                            {formatCurrency(result.annualFederalIncomeTaxFromGig)}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-sky-300"
                            style={{
                              width: `${
                                result.annualEstimatedTax > 0
                                  ? (result.annualFederalIncomeTaxFromGig /
                                      result.annualEstimatedTax) *
                                    100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
                          <span>State tax buffer</span>
                          <span>{formatCurrency(result.annualStateTaxFromGig)}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-emerald-300"
                            style={{
                              width: `${
                                result.annualEstimatedTax > 0
                                  ? (result.annualStateTaxFromGig /
                                      result.annualEstimatedTax) *
                                    100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {GIG_TAX_YEAR} schedule
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {QUARTERLY_DUE_DATES_2026.map((item, index) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                            {item.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            {item.displayDate}
                          </p>
                          <p className="mt-2 text-lg font-bold text-white">
                            {formatCurrency(result.quarterlySetAside * (index + 1))}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            Pace to have paid by this deadline
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-400">
                    Estimate only. This quick check excludes itemized deductions,
                    credits, the QBI deduction, special {GIG_TAX_YEAR} deductions for
                    tips or overtime, and local taxes. Recheck the number if your income
                    changes materially during the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            <BreakdownRow
              label="Mileage still moves the answer"
              value={`The calculator annualizes your miles and applies the official ${GIG_TAX_YEAR} IRS business rate before estimating tax.`}
              amount={result.annualMileageDeduction}
              accentClass="text-amber-700"
            />
            <BreakdownRow
              label="W-2 context changes the math"
              value="W-2 wages can already use up part of the Social Security wage base and can push gig profit into a higher federal bracket."
              amount={parseCurrency(annualW2Wages)}
              accentClass="text-sky-700"
            />
            <BreakdownRow
              label="Already covered tax changes the amount due now"
              value="Enter what you have already paid or withheld this year so the pace check does not double count it."
              amount={parseCurrency(annualTaxAlreadyCovered)}
              accentClass="text-emerald-700"
            />
          </div>
        </section>

        <section className="px-6 py-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                What we verified
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                The gap is buried estimated-tax guidance, not missing software
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                We checked official product pages plus recent App Store and support
                sources. Broad tax products already offer filing funnels and general
                calculators, but the recurring friction is still the same: 1099 users
                want a fast quarterly answer without getting dragged through a full tax
                workflow.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="https://apps.apple.com/us/app/turbotax-file-your-tax-return/id940247939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    TurboTax reviews still complain about buried estimated-tax entry and
                    1099 friction
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Recent March and April {GIG_TAX_YEAR} reviews describe users hunting
                    for estimated-tax payment fields, hitting 1099 upsells, and losing
                    time inside a heavy filing flow.
                  </p>
                </a>
                <a
                  href="https://apps.apple.com/us/app/h-r-block-tax-prep-file-taxes/id482050344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    H&amp;R Block fares better for some people, but navigation and 1099
                    editing still show up in reviews
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    The latest reviews are mixed: some users say self-employed entry is
                    easier, others still report getting stuck while editing or locating
                    the right 1099 path.
                  </p>
                </a>
                <a
                  href="https://community.freetaxusa.com/discussion/2583/guesstimating-next-year-taxes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    FreeTaxUSA users still ask for next-year estimated-tax calculations
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Their own support forum says the software does not calculate next
                    year&apos;s estimated tax payment amounts, which leaves a real gap for
                    quick quarterly planning.
                  </p>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                IRS sources
              </p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  This tool uses the official {GIG_TAX_YEAR} business mileage rate, the
                  current federal tax brackets, the Social Security wage base, and the
                  IRS estimated-tax payment framework.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://www.irs.gov/eitc/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50"
                  >
                    2026 standard mileage rate
                  </a>
                  <a
                    href="https://www.irs.gov/filing/federal-income-tax-rates-and-brackets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50"
                  >
                    Federal income tax rates and brackets
                  </a>
                  <a
                    href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50"
                  >
                    IRS estimated tax overview
                  </a>
                  <a
                    href="https://www.irs.gov/businesses/small-businesses-self-employed/sole-proprietorships"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50"
                  >
                    Sole proprietorship and self-employed filing basics
                  </a>
                  <a
                    href="https://www.irs.gov/businesses/understanding-your-form-1099-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50"
                  >
                    Understanding Form 1099-K
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <EmailCaptureBanner
              title="Get quarterly tax reminder emails"
              subtitle="We’ll send deadline reminders and practical tax tips for side hustles, 1099 work, and self-employed income."
              successTitle="You’re on the reminder list."
              successSubtitle="We’ll send practical tax reminders before the next quarterly due date."
              ctaLabel="Get reminders"
            />

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/tools"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                Browse all tools
              </Link>
              <a
                href="https://www.irs.gov/payments/direct-pay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 font-medium text-amber-800 transition-colors hover:bg-amber-100"
              >
                Make an IRS payment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
