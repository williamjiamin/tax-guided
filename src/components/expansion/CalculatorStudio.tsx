"use client";

import { useMemo, useState } from "react";
import type { CalculatorDefinition } from "@/lib/expansion/types";

interface Props {
  calculator: CalculatorDefinition;
}

function parseIsoDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function dueDateByYearEnd(yearEnd: string, monthOffset: number, day: number): Date {
  const parsed = parseIsoDate(yearEnd);
  return new Date(Date.UTC(parsed.getUTCFullYear(), parsed.getUTCMonth() + monthOffset, day));
}

function dueDateByYearStart(yearStart: string, monthOffset: number, day: number): Date {
  const parsed = parseIsoDate(yearStart);
  return new Date(Date.UTC(parsed.getUTCFullYear(), parsed.getUTCMonth() + monthOffset, day));
}

function currency(value: number, code = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    maximumFractionDigits: 2,
  }).format(value);
}

function ResultCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-[#0a1628]">{value}</p>
      {hint ? <p className="mt-2 text-sm leading-6 text-gray-600">{hint}</p> : null}
    </div>
  );
}

function Form5472DeadlineCalculator() {
  const [yearEnd, setYearEnd] = useState("2025-12-31");
  const [entityType, setEntityType] = useState("foreign-owned-us-de");

  const dueDate = useMemo(() => dueDateByYearEnd(yearEnd, 4, 15), [yearEnd]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Tax year end</span>
          <input
            type="date"
            value={yearEnd}
            onChange={(event) => setYearEnd(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Entity type</span>
          <select
            value={entityType}
            onChange={(event) => setEntityType(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          >
            <option value="foreign-owned-us-de">Foreign-owned U.S. disregarded entity</option>
            <option value="domestic-reporting-corporation">Domestic reporting corporation</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <ResultCard label="Original due date" value={formatDate(dueDate)} />
        <ResultCard
          label="Extension request due date"
          value={formatDate(dueDate)}
          hint="Form 7004 generally has to be filed by the original due date."
        />
      </div>
      <ResultCard
        label="Filing package"
        value={
          entityType === "foreign-owned-us-de"
            ? "Form 5472 + pro forma Form 1120"
            : "Form 5472 attached to the income tax return"
        }
        hint="The foreign-owned disregarded-entity workflow is especially important because the IRS instructions say it cannot be e-filed in that situation."
      />
      <ResultCard
        label="Penalty warning"
        value="$25,000 base penalty"
        hint="Failure to file when due, in the prescribed manner, or with complete information can trigger the base penalty."
      />
    </div>
  );
}

function CaliforniaLlcCalendarCalculator() {
  const [yearStart, setYearStart] = useState("2026-01-01");
  const [yearEnd, setYearEnd] = useState("2026-12-31");
  const [classification, setClassification] = useState("single-member");

  const annualTaxDue = useMemo(() => dueDateByYearStart(yearStart, 3, 15), [yearStart]);
  const estimatedFeeDue = useMemo(() => dueDateByYearStart(yearStart, 5, 15), [yearStart]);
  const returnDue = useMemo(() => {
    const monthOffset = classification === "partnership" ? 3 : 4;
    return dueDateByYearEnd(yearEnd, monthOffset, 15);
  }, [classification, yearEnd]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Tax year start</span>
          <input
            type="date"
            value={yearStart}
            onChange={(event) => setYearStart(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Tax year end</span>
          <input
            type="date"
            value={yearEnd}
            onChange={(event) => setYearEnd(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Classification</span>
          <select
            value={classification}
            onChange={(event) => setClassification(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          >
            <option value="single-member">Single-member or disregarded-style workflow</option>
            <option value="partnership">Partnership-style LLC workflow</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <ResultCard label="Annual tax due (FTB 3522)" value={formatDate(annualTaxDue)} />
        <ResultCard label="Estimated LLC fee due (FTB 3536)" value={formatDate(estimatedFeeDue)} />
        <ResultCard label="Return due" value={formatDate(returnDue)} />
      </div>
      <ResultCard
        label="Reminder"
        value="Annual tax and LLC fee are different layers"
        hint="The fixed annual tax and the income-based LLC fee are separate California concepts and both need to be checked."
      />
    </div>
  );
}

function TexasFranchiseChecker() {
  const [revenue, setRevenue] = useState("1000000");
  const [entityCategory, setEntityCategory] = useState("other");

  const totalRevenue = Number(revenue) || 0;
  const threshold = 2_650_000;
  const rate = entityCategory === "retail" ? 0.00375 : 0.0075;
  const taxDue = totalRevenue > threshold ? totalRevenue * rate : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Annualized total revenue</span>
          <input
            type="number"
            min="0"
            step="1"
            value={revenue}
            onChange={(event) => setRevenue(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Entity category</span>
          <select
            value={entityCategory}
            onChange={(event) => setEntityCategory(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          >
            <option value="other">Other taxable entity</option>
            <option value="retail">Retail or wholesale entity</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <ResultCard
          label="Threshold status"
          value={totalRevenue <= threshold ? "At or below threshold" : "Above threshold"}
          hint="For 2026 and 2027, the public no-tax-due threshold is $2,650,000."
        />
        <ResultCard
          label="Seeded rate"
          value={`${(rate * 100).toFixed(3)}%`}
          hint="This is the public rate for the selected category."
        />
        <ResultCard
          label="Estimated tax due"
          value={currency(taxDue)}
          hint="This is a simplified illustration using total revenue, not a full margin-method computation."
        />
      </div>
      <ResultCard
        label="Likely filing package"
        value={totalRevenue <= threshold ? "PIR or OIR still likely required" : "Franchise report plus PIR or OIR"}
        hint="For reports due on or after January 1, 2024, entities at or below the threshold generally no longer file a No Tax Due Report."
      />
    </div>
  );
}

function SwitzerlandVatCalculator() {
  const [amount, setAmount] = useState("1000");
  const [direction, setDirection] = useState("net-to-gross");
  const [rateCategory, setRateCategory] = useState("normal");

  const rates: Record<string, number> = {
    normal: 0.081,
    reduced: 0.026,
    accommodation: 0.038,
  };

  const numericAmount = Number(amount) || 0;
  const rate = rates[rateCategory];
  const net = direction === "net-to-gross" ? numericAmount : numericAmount / (1 + rate);
  const gross = direction === "net-to-gross" ? numericAmount * (1 + rate) : numericAmount;
  const vat = gross - net;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Amount (CHF)</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Direction</span>
          <select
            value={direction}
            onChange={(event) => setDirection(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          >
            <option value="net-to-gross">Net to gross</option>
            <option value="gross-to-net">Gross to net</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Rate category</span>
          <select
            value={rateCategory}
            onChange={(event) => setRateCategory(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          >
            <option value="normal">Normal 8.1%</option>
            <option value="reduced">Reduced 2.6%</option>
            <option value="accommodation">Accommodation 3.8%</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <ResultCard label="Net amount" value={currency(net, "CHF")} />
        <ResultCard label="VAT amount" value={currency(vat, "CHF")} />
        <ResultCard label="Gross amount" value={currency(gross, "CHF")} />
      </div>
    </div>
  );
}

function UkLateFilingCalculator() {
  const [daysLate, setDaysLate] = useState("0");
  const [taxDue, setTaxDue] = useState("0");

  const lateDays = Number(daysLate) || 0;
  const taxAmount = Number(taxDue) || 0;
  let penalty = lateDays > 0 ? 100 : 0;

  if (lateDays > 90) {
    penalty += Math.min(lateDays - 90, 90) * 10;
  }

  if (lateDays > 182) {
    penalty += Math.max(taxAmount * 0.05, 300);
  }

  if (lateDays > 365) {
    penalty += Math.max(taxAmount * 0.05, 300);
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Days late</span>
          <input
            type="number"
            min="0"
            step="1"
            value={daysLate}
            onChange={(event) => setDaysLate(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Tax due (GBP)</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={taxDue}
            onChange={(event) => setTaxDue(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <ResultCard label="Estimated late-filing penalty" value={currency(penalty, "GBP")} />
        <ResultCard
          label="Important reminder"
          value="Late payment is separate"
          hint="This estimate covers the filing-penalty stack only. HMRC can also charge late-payment penalties and interest."
        />
      </div>
    </div>
  );
}

function FloridaAnnualReportCalculator() {
  const [entityType, setEntityType] = useState("llc");
  const [filedOnTime, setFiledOnTime] = useState("yes");

  const feeTable = {
    llc: 138.75,
    corporation: 150,
    nonprofit: 61.25,
    lp: 500,
  };

  const baseFee = feeTable[entityType as keyof typeof feeTable];
  const lateFee = filedOnTime === "yes" || entityType === "nonprofit" ? 0 : 400;
  const total = baseFee + lateFee;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Entity type</span>
          <select
            value={entityType}
            onChange={(event) => setEntityType(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          >
            <option value="llc">LLC</option>
            <option value="corporation">Profit corporation</option>
            <option value="nonprofit">Not-for-profit corporation</option>
            <option value="lp">LP or LLLP</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-900">Filed on or before May 1?</span>
          <select
            value={filedOnTime}
            onChange={(event) => setFiledOnTime(event.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <ResultCard label="Base filing fee" value={currency(baseFee)} />
        <ResultCard label="Late fee" value={currency(lateFee)} />
        <ResultCard label="Estimated total" value={currency(total)} />
      </div>
    </div>
  );
}

export function CalculatorStudio({ calculator }: Props) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">Calculator rules</h2>
        <ul className="mt-4 space-y-3">
          {calculator.formulas.map((formula) => (
            <li key={formula} className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">
              {formula}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">Interactive calculator</h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">{calculator.description}</p>

        <div className="mt-6">
          {calculator.slug === "form-5472-deadline-calculator" ? <Form5472DeadlineCalculator /> : null}
          {calculator.slug === "california-llc-calendar-calculator" ? (
            <CaliforniaLlcCalendarCalculator />
          ) : null}
          {calculator.slug === "texas-franchise-obligation-checker" ? (
            <TexasFranchiseChecker />
          ) : null}
          {calculator.slug === "switzerland-vat-calculator" ? <SwitzerlandVatCalculator /> : null}
          {calculator.slug === "uk-self-assessment-late-filing-calculator" ? (
            <UkLateFilingCalculator />
          ) : null}
          {calculator.slug === "florida-annual-report-cost-calculator" ? (
            <FloridaAnnualReportCalculator />
          ) : null}
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-950">
        <p className="font-semibold">Calculator caution</p>
        <p className="mt-1 leading-6">{calculator.caution}</p>
      </div>
    </div>
  );
}
