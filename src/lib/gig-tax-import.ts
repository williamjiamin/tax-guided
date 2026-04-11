import type { ParsedTransaction } from "@/lib/bank-parser/types";

export interface GigImportSummary {
  startDate: string;
  endDate: string;
  daysCovered: number;
  weeksCovered: number;
  transactionCount: number;
  inflowCount: number;
  outflowCount: number;
  totalInflows: number;
  totalOutflows: number;
  weeklyGrossIncome: number;
  weeklyOtherExpenses: number;
}

function parseIsoDate(date: string): number | null {
  const timestamp = Date.parse(`${date}T00:00:00Z`);
  return Number.isNaN(timestamp) ? null : timestamp;
}

export function summarizeGigTransactions(
  transactions: ParsedTransaction[],
  options?: { includeOutflowsAsExpenses?: boolean }
): GigImportSummary | null {
  const datedTransactions = transactions
    .map((transaction) => ({
      transaction,
      timestamp: parseIsoDate(transaction.date),
    }))
    .filter(
      (
        item
      ): item is {
        transaction: ParsedTransaction;
        timestamp: number;
      } => item.timestamp != null
    )
    .sort((a, b) => a.timestamp - b.timestamp);

  if (datedTransactions.length === 0) {
    return null;
  }

  const startDate = datedTransactions[0].transaction.date;
  const endDate =
    datedTransactions[datedTransactions.length - 1].transaction.date;
  const startTimestamp = datedTransactions[0].timestamp;
  const endTimestamp = datedTransactions[datedTransactions.length - 1].timestamp;
  const daysCovered = Math.max(
    1,
    Math.floor((endTimestamp - startTimestamp) / 86_400_000) + 1
  );
  const weeksCovered = Math.max(1, daysCovered / 7);
  const totalInflows = datedTransactions
    .filter(({ transaction }) => transaction.direction === "inflow")
    .reduce((sum, { transaction }) => sum + transaction.amount, 0);
  const totalOutflows = datedTransactions
    .filter(({ transaction }) => transaction.direction === "outflow")
    .reduce((sum, { transaction }) => sum + transaction.amount, 0);

  return {
    startDate,
    endDate,
    daysCovered,
    weeksCovered,
    transactionCount: datedTransactions.length,
    inflowCount: datedTransactions.filter(
      ({ transaction }) => transaction.direction === "inflow"
    ).length,
    outflowCount: datedTransactions.filter(
      ({ transaction }) => transaction.direction === "outflow"
    ).length,
    totalInflows,
    totalOutflows,
    weeklyGrossIncome: totalInflows / weeksCovered,
    weeklyOtherExpenses: options?.includeOutflowsAsExpenses
      ? totalOutflows / weeksCovered
      : 0,
  };
}
