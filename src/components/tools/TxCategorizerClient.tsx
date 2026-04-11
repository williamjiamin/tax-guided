"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  direction: "owner-to-llc" | "llc-to-owner";
  line: number;
  lineLabel: string;
}

/** Simple keyword-based categorization for Form 5472 Part IV lines */
function categorize(
  description: string,
  direction: "owner-to-llc" | "llc-to-owner"
): { line: number; lineLabel: string } {
  const d = description.toLowerCase();

  if (direction === "owner-to-llc") {
    // Capital contributions
    if (
      d.includes("capital") ||
      d.includes("fund") ||
      d.includes("invest") ||
      d.includes("deposit") ||
      d.includes("initial contribution") ||
      d.includes("wire") ||
      d.includes("transfer to")
    )
      return { line: 22, lineLabel: "Capital contributions" };

    // Loans
    if (d.includes("loan") || d.includes("lend") || d.includes("borrow"))
      return { line: 17, lineLabel: "Loan amounts" };

    // Formation / setup costs
    if (
      d.includes("formation") ||
      d.includes("filing fee") ||
      d.includes("state fee") ||
      d.includes("registered agent") ||
      d.includes("incorporat") ||
      d.includes("setup") ||
      d.includes("llc fee")
    )
      return { line: 19, lineLabel: "Other amounts paid or accrued" };

    // Services
    if (
      d.includes("consult") ||
      d.includes("salary") ||
      d.includes("wage") ||
      d.includes("compensation") ||
      d.includes("service")
    )
      return { line: 15, lineLabel: "Compensation paid" };

    // Rent
    if (
      d.includes("rent") ||
      d.includes("office") ||
      d.includes("lease")
    )
      return { line: 14, lineLabel: "Rents paid" };

    // Software, hosting, tools
    if (
      d.includes("software") ||
      d.includes("hosting") ||
      d.includes("domain") ||
      d.includes("subscription") ||
      d.includes("saas") ||
      d.includes("aws") ||
      d.includes("cloud")
    )
      return { line: 19, lineLabel: "Other amounts paid or accrued" };

    // Default for owner-to-llc
    return { line: 19, lineLabel: "Other amounts paid or accrued" };
  }

  // LLC to Owner
  // Distributions
  if (
    d.includes("distribut") ||
    d.includes("dividend") ||
    d.includes("withdrawal") ||
    d.includes("draw") ||
    d.includes("payout")
  )
    return { line: 24, lineLabel: "Other amounts received" };

  // Compensation
  if (
    d.includes("consult") ||
    d.includes("salary") ||
    d.includes("compensation") ||
    d.includes("service") ||
    d.includes("freelance")
  )
    return { line: 15, lineLabel: "Compensation paid" };

  // Rent
  if (d.includes("rent") || d.includes("lease"))
    return { line: 14, lineLabel: "Rents paid" };

  // Loan repayment
  if (d.includes("loan") || d.includes("repay"))
    return { line: 17, lineLabel: "Loan amounts" };

  // Interest
  if (d.includes("interest"))
    return { line: 13, lineLabel: "Interest paid" };

  // Default for llc-to-owner
  return { line: 24, lineLabel: "Other amounts received" };
}

let nextId = 1;

export function TxCategorizerClient() {
  const { t } = useT();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [direction, setDirection] = useState<"owner-to-llc" | "llc-to-owner">(
    "owner-to-llc"
  );

  const addTransaction = () => {
    if (!desc.trim() || !amount.trim()) return;
    const cat = categorize(desc, direction);
    setTransactions((prev) => [
      ...prev,
      {
        id: nextId++,
        description: desc.trim(),
        amount: parseFloat(amount) || 0,
        direction,
        ...cat,
      },
    ]);
    setDesc("");
    setAmount("");
  };

  const removeTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  const total = useMemo(
    () => transactions.reduce((sum, tx) => sum + tx.amount, 0),
    [transactions]
  );

  const formatCurrency = (n: number) => "$" + n.toLocaleString("en-US");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("txCategorizer.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("txCategorizer.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("txCategorizer.subtitle")}
            </p>
          </div>

          {/* Add Transaction Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {t("txCategorizer.addTx")}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t("txCategorizer.txDescription")}
                </label>
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder={t("txCategorizer.txDescPlaceholder")}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  onKeyDown={(e) => e.key === "Enter" && addTransaction()}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t("txCategorizer.txAmount")}
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={t("txCategorizer.txAmountPlaceholder")}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    min={0}
                    step={0.01}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {t("txCategorizer.txDirection")}
                  </label>
                  <select
                    value={direction}
                    onChange={(e) =>
                      setDirection(
                        e.target.value as "owner-to-llc" | "llc-to-owner"
                      )
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  >
                    <option value="owner-to-llc">
                      {t("txCategorizer.dirOwnerToLlc")}
                    </option>
                    <option value="llc-to-owner">
                      {t("txCategorizer.dirLlcToOwner")}
                    </option>
                  </select>
                </div>
              </div>

              <button
                onClick={addTransaction}
                disabled={!desc.trim() || !amount.trim()}
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/20"
              >
                {t("txCategorizer.categorize")}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {t("txCategorizer.result")}
            </h2>

            {transactions.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">
                {t("txCategorizer.noTx")}
              </p>
            ) : (
              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {tx.description}
                      </p>
                      <p className="text-xs text-indigo-600 mt-1">
                        {t("txCategorizer.line", {
                          line: String(tx.line),
                        })}{" "}
                        — {tx.lineLabel}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">
                        {formatCurrency(tx.amount)}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {tx.direction === "owner-to-llc"
                          ? "Owner → LLC"
                          : "LLC → Owner"}
                      </p>
                    </div>
                    <button
                      onClick={() => removeTransaction(tx.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                      aria-label="Remove"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}

                {/* Total */}
                <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-indigo-900">
                    {t("txCategorizer.totalReportable")}
                  </p>
                  <p className="text-xl font-bold text-indigo-700">
                    {formatCurrency(total)}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Common Examples */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {t("txCategorizer.commonExamples")}
            </h2>
            <ul className="space-y-2.5">
              {(["ex1", "ex2", "ex3", "ex4", "ex5", "ex6"] as const).map(
                (key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {t(`txCategorizer.${key}`)}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/filer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20"
            >
              {t("hero.cta")}
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
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[11px] text-gray-400 mt-4">
            {t("txCategorizer.disclaimer")}
          </p>

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
