export type BankFormat = "mercury" | "chase" | "wise" | "bofa" | "wells_fargo" | "generic";

export interface ParsedTransaction {
  date: string; // YYYY-MM-DD
  description: string;
  amount: number; // always positive
  direction: "inflow" | "outflow";
  originalRow: string;
  bankSource: BankFormat;
}

export type ConfidenceLevel = "high" | "medium" | "low";

export interface ClassifiedTransaction extends ParsedTransaction {
  category: string; // ledger category key (pt4_*)
  confidence: ConfidenceLevel;
  reason: string; // educational explanation
  formLine: number; // Form 5472 Part IV line number
  suggestedType: "income" | "expense";
}

/** Extended LedgerTransaction with import metadata */
export interface ImportedLedgerTransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  currency: string;
  category: string;
  type: "income" | "expense";
  payerName: string;
  payeeName: string;
  notes: string;
  source?: "csv_import" | "pdf_import" | "ios_scan";
  importedAt?: number;
  originalDescription?: string;
  classificationConfidence?: ConfidenceLevel;
}
