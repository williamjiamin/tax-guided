import type { BankFormat, ParsedTransaction } from "./types";

/** Split CSV line respecting quoted fields */
function splitCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

/** Detect bank format from the first row of headers */
function detectBank(headerRow: string): BankFormat {
  const h = headerRow.toLowerCase();
  if (h.includes("status") && h.includes("description") && h.includes("amount") && !h.includes("post date"))
    return "mercury";
  if (h.includes("post date") && h.includes("category") && h.includes("type"))
    return "chase";
  if (h.includes("transferwise") || (h.includes("currency") && h.includes("description") && h.includes("amount")))
    return "wise";
  if (h.includes("running bal"))
    return "bofa";
  // Wells Fargo typically has no header row — detected by caller
  return "generic";
}

/** Normalize date strings to YYYY-MM-DD */
function normalizeDate(raw: string): string {
  // MM/DD/YYYY or M/D/YYYY
  const slashMatch = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashMatch) {
    const [, m, d, y] = slashMatch;
    return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }
  // YYYY-MM-DD already
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  // DD Mon YYYY (e.g., 15 Jan 2025)
  const monthMap: Record<string, string> = {
    jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
    jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12",
  };
  const dmy = raw.match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (dmy) {
    const [, d, mon, y] = dmy;
    const mm = monthMap[mon.toLowerCase()];
    if (mm) return `${y}-${mm}-${d.padStart(2, "0")}`;
  }
  // Mon DD, YYYY
  const mdyComma = raw.match(/^([A-Za-z]{3})\s+(\d{1,2}),?\s+(\d{4})$/);
  if (mdyComma) {
    const [, mon, d, y] = mdyComma;
    const mm = monthMap[mon.toLowerCase()];
    if (mm) return `${y}-${mm}-${d.padStart(2, "0")}`;
  }
  return raw; // return as-is if unparseable
}

/** Parse a number from various formats: "$1,234.56", "(1234.56)", "-1234.56" */
function parseAmount(raw: string): { value: number; isNegative: boolean } {
  const cleaned = raw.replace(/[$,\s]/g, "");
  // Parentheses = negative
  if (cleaned.startsWith("(") && cleaned.endsWith(")")) {
    return { value: Math.abs(parseFloat(cleaned.slice(1, -1))), isNegative: true };
  }
  const num = parseFloat(cleaned);
  return { value: Math.abs(num), isNegative: num < 0 };
}

function parseMercury(lines: string[]): ParsedTransaction[] {
  // Header: Date,Description,Amount,Status (or similar)
  const headerFields = splitCSVLine(lines[0]).map((f) => f.toLowerCase());
  const dateIdx = headerFields.findIndex((h) => h === "date");
  const descIdx = headerFields.findIndex((h) => h === "description");
  const amtIdx = headerFields.findIndex((h) => h === "amount");

  if (dateIdx < 0 || descIdx < 0 || amtIdx < 0) return [];

  return lines.slice(1).filter(Boolean).map((line) => {
    const fields = splitCSVLine(line);
    const { value, isNegative } = parseAmount(fields[amtIdx] || "0");
    return {
      date: normalizeDate(fields[dateIdx] || ""),
      description: fields[descIdx] || "",
      amount: value,
      direction: isNegative ? "outflow" as const : "inflow" as const,
      originalRow: line,
      bankSource: "mercury" as const,
    };
  }).filter((tx) => tx.amount > 0 && tx.date);
}

function parseChase(lines: string[]): ParsedTransaction[] {
  const headerFields = splitCSVLine(lines[0]).map((f) => f.toLowerCase());
  const dateIdx = headerFields.findIndex((h) => h.includes("transaction date") || h === "date");
  const descIdx = headerFields.findIndex((h) => h === "description");
  const amtIdx = headerFields.findIndex((h) => h === "amount");

  if (dateIdx < 0 || descIdx < 0 || amtIdx < 0) return [];

  return lines.slice(1).filter(Boolean).map((line) => {
    const fields = splitCSVLine(line);
    const { value, isNegative } = parseAmount(fields[amtIdx] || "0");
    return {
      date: normalizeDate(fields[dateIdx] || ""),
      description: fields[descIdx] || "",
      amount: value,
      direction: isNegative ? "outflow" as const : "inflow" as const,
      originalRow: line,
      bankSource: "chase" as const,
    };
  }).filter((tx) => tx.amount > 0 && tx.date);
}

function parseWise(lines: string[]): ParsedTransaction[] {
  const headerFields = splitCSVLine(lines[0]).map((f) => f.toLowerCase());
  const dateIdx = headerFields.findIndex((h) => h === "date" || h.includes("date"));
  const descIdx = headerFields.findIndex((h) => h === "description" || h.includes("description"));
  const amtIdx = headerFields.findIndex((h) => h === "amount" || h.includes("amount"));

  if (dateIdx < 0 || descIdx < 0 || amtIdx < 0) return [];

  return lines.slice(1).filter(Boolean).map((line) => {
    const fields = splitCSVLine(line);
    const { value, isNegative } = parseAmount(fields[amtIdx] || "0");
    return {
      date: normalizeDate(fields[dateIdx] || ""),
      description: fields[descIdx] || "",
      amount: value,
      direction: isNegative ? "outflow" as const : "inflow" as const,
      originalRow: line,
      bankSource: "wise" as const,
    };
  }).filter((tx) => tx.amount > 0 && tx.date);
}

function parseBofa(lines: string[]): ParsedTransaction[] {
  const headerFields = splitCSVLine(lines[0]).map((f) => f.toLowerCase());
  const dateIdx = headerFields.findIndex((h) => h === "date");
  const descIdx = headerFields.findIndex((h) => h === "description");
  const amtIdx = headerFields.findIndex((h) => h === "amount");

  if (dateIdx < 0 || descIdx < 0 || amtIdx < 0) return [];

  return lines.slice(1).filter(Boolean).map((line) => {
    const fields = splitCSVLine(line);
    const { value, isNegative } = parseAmount(fields[amtIdx] || "0");
    return {
      date: normalizeDate(fields[dateIdx] || ""),
      description: fields[descIdx] || "",
      amount: value,
      direction: isNegative ? "outflow" as const : "inflow" as const,
      originalRow: line,
      bankSource: "bofa" as const,
    };
  }).filter((tx) => tx.amount > 0 && tx.date);
}

function parseWellsFargo(lines: string[]): ParsedTransaction[] {
  // Wells Fargo CSVs often have no header row: Date,Amount,,*,Description (5 cols)
  const results: ParsedTransaction[] = [];
  for (const line of lines) {
    if (!line) continue;
    const fields = splitCSVLine(line);
    if (fields.length < 2) continue;

    const dateField = fields[0];
    if (!/\d/.test(dateField)) continue;

    const { value, isNegative } = parseAmount(fields[1] || "0");
    if (value <= 0) continue;

    const description = fields[fields.length - 1] || fields[4] || fields[2] || "";
    const date = normalizeDate(dateField);
    if (!date) continue;

    results.push({
      date,
      description,
      amount: value,
      direction: isNegative ? "outflow" : "inflow",
      originalRow: line,
      bankSource: "wells_fargo",
    });
  }
  return results;
}

function parseGeneric(lines: string[]): ParsedTransaction[] {
  const headerFields = splitCSVLine(lines[0]).map((f) => f.toLowerCase());

  // Try to find date, description, and amount columns
  const dateIdx = headerFields.findIndex((h) => h.includes("date"));
  const descIdx = headerFields.findIndex((h) =>
    h.includes("description") || h.includes("memo") || h.includes("payee") || h.includes("name")
  );
  const amtIdx = headerFields.findIndex((h) =>
    h.includes("amount") || h.includes("debit") || h.includes("credit")
  );

  if (dateIdx < 0 || amtIdx < 0) return [];

  return lines.slice(1).filter(Boolean).map((line) => {
    const fields = splitCSVLine(line);
    const { value, isNegative } = parseAmount(fields[amtIdx] || "0");
    return {
      date: normalizeDate(fields[dateIdx] || ""),
      description: descIdx >= 0 ? (fields[descIdx] || "") : "",
      amount: value,
      direction: isNegative ? "outflow" as const : "inflow" as const,
      originalRow: line,
      bankSource: "generic" as const,
    };
  }).filter((tx) => tx.amount > 0 && tx.date);
}

/**
 * Parse a CSV string into transactions.
 * All processing happens in the browser — no network calls.
 */
export function parseCSV(text: string, bankHint?: BankFormat): ParsedTransaction[] {
  const lines = text.split(/\r?\n/).filter((l) => l.trim());
  if (lines.length < 2) return [];

  const bank = bankHint || detectBank(lines[0]);

  switch (bank) {
    case "mercury": return parseMercury(lines);
    case "chase": return parseChase(lines);
    case "wise": return parseWise(lines);
    case "bofa": return parseBofa(lines);
    case "wells_fargo": return parseWellsFargo(lines);
    default: return parseGeneric(lines);
  }
}

export { detectBank };
