export type GigFilingStatus =
  | "single"
  | "married-joint"
  | "married-separate"
  | "head-of-household";

export interface GigTaxInputs {
  weeklyGrossIncome: number;
  weeklyBusinessMiles: number;
  weeklyOtherExpenses: number;
  annualW2Wages: number;
  annualTaxAlreadyCovered: number;
  stateMarginalRate: number;
  filingStatus: GigFilingStatus;
}

export interface GigTaxEstimate {
  taxYear: number;
  annualGrossIncome: number;
  annualMileageDeduction: number;
  annualOtherExpenses: number;
  annualNetProfit: number;
  annualTaxableEarningsForSE: number;
  annualSelfEmploymentTax: number;
  annualFederalIncomeTaxFromGig: number;
  annualStateTaxFromGig: number;
  annualEstimatedTax: number;
  annualRemainingFederalTax: number;
  annualRemainingTax: number;
  weeklySetAside: number;
  monthlySetAside: number;
  quarterlySetAside: number;
  effectiveSetAsideRate: number;
  standardDeduction: number;
  deductibleHalfSelfEmploymentTax: number;
  estimatedPaymentsLikelyRequired: boolean;
  nextDueQuarterLabel: string;
  nextDueDisplayDate: string;
  installmentsDueByNextDate: number;
  targetCoveredByNextDueDate: number;
  amountToPayByNextDueDate: number;
  paymentPace: "buffer-only" | "on-track" | "behind";
}

export const GIG_TAX_YEAR = 2026;
export const BUSINESS_MILEAGE_RATE_2026 = 0.725;
export const SOCIAL_SECURITY_WAGE_BASE_2026 = 184_500;

export const QUARTERLY_DUE_DATES_2026 = [
  { label: "Q1", dueDate: "2026-04-15", displayDate: "April 15, 2026" },
  { label: "Q2", dueDate: "2026-06-15", displayDate: "June 15, 2026" },
  { label: "Q3", dueDate: "2026-09-15", displayDate: "September 15, 2026" },
  { label: "Q4", dueDate: "2027-01-15", displayDate: "January 15, 2027" },
] as const;

const STANDARD_DEDUCTION_2026: Record<GigFilingStatus, number> = {
  single: 16_100,
  "married-joint": 32_200,
  "married-separate": 16_100,
  "head-of-household": 24_150,
};

const ADDITIONAL_MEDICARE_THRESHOLDS: Record<GigFilingStatus, number> = {
  single: 200_000,
  "married-joint": 250_000,
  "married-separate": 125_000,
  "head-of-household": 200_000,
};

const FEDERAL_BRACKETS_2026: Record<
  GigFilingStatus,
  Array<{ max: number | null; rate: number }>
> = {
  single: [
    { max: 12_400, rate: 0.1 },
    { max: 50_400, rate: 0.12 },
    { max: 106_700, rate: 0.22 },
    { max: 203_775, rate: 0.24 },
    { max: 256_225, rate: 0.32 },
    { max: 512_450, rate: 0.35 },
    { max: null, rate: 0.37 },
  ],
  "married-joint": [
    { max: 24_800, rate: 0.1 },
    { max: 100_800, rate: 0.12 },
    { max: 211_400, rate: 0.22 },
    { max: 403_550, rate: 0.24 },
    { max: 512_450, rate: 0.32 },
    { max: 768_700, rate: 0.35 },
    { max: null, rate: 0.37 },
  ],
  "married-separate": [
    { max: 12_400, rate: 0.1 },
    { max: 50_400, rate: 0.12 },
    { max: 105_700, rate: 0.22 },
    { max: 201_775, rate: 0.24 },
    { max: 256_225, rate: 0.32 },
    { max: 384_350, rate: 0.35 },
    { max: null, rate: 0.37 },
  ],
  "head-of-household": [
    { max: 17_700, rate: 0.1 },
    { max: 67_000, rate: 0.12 },
    { max: 106_700, rate: 0.22 },
    { max: 203_700, rate: 0.24 },
    { max: 255_500, rate: 0.32 },
    { max: 640_850, rate: 0.35 },
    { max: null, rate: 0.37 },
  ],
};

function clampNonNegative(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function annualize(value: number): number {
  return clampNonNegative(value) * 52;
}

function getQuarterlyCheckpoint(asOfDate = new Date()) {
  for (const [index, item] of QUARTERLY_DUE_DATES_2026.entries()) {
    const due = new Date(`${item.dueDate}T23:59:59`);
    if (asOfDate <= due) {
      return {
        ...item,
        installmentsDue: index + 1,
      };
    }
  }

  const lastQuarter = QUARTERLY_DUE_DATES_2026[QUARTERLY_DUE_DATES_2026.length - 1];
  return {
    ...lastQuarter,
    installmentsDue: QUARTERLY_DUE_DATES_2026.length,
  };
}

export function calculateFederalIncomeTax(
  taxableIncome: number,
  filingStatus: GigFilingStatus
): number {
  const remainingIncome = clampNonNegative(taxableIncome);
  let previousMax = 0;
  let tax = 0;

  for (const bracket of FEDERAL_BRACKETS_2026[filingStatus]) {
    if (remainingIncome <= previousMax) {
      break;
    }

    const ceiling = bracket.max ?? remainingIncome;
    const taxableSlice = Math.max(0, Math.min(remainingIncome, ceiling) - previousMax);

    tax += taxableSlice * bracket.rate;

    if (bracket.max == null || remainingIncome <= ceiling) {
      break;
    }

    previousMax = ceiling;
  }

  return tax;
}

export function estimateGigTaxSetAside(
  inputs: GigTaxInputs,
  options?: { asOfDate?: Date }
): GigTaxEstimate {
  const weeklyGrossIncome = clampNonNegative(inputs.weeklyGrossIncome);
  const weeklyBusinessMiles = clampNonNegative(inputs.weeklyBusinessMiles);
  const weeklyOtherExpenses = clampNonNegative(inputs.weeklyOtherExpenses);
  const annualW2Wages = clampNonNegative(inputs.annualW2Wages);
  const annualTaxAlreadyCovered = clampNonNegative(inputs.annualTaxAlreadyCovered);
  const stateMarginalRate = Math.min(0.15, clampNonNegative(inputs.stateMarginalRate));

  const annualGrossIncome = annualize(weeklyGrossIncome);
  const annualMileageDeduction =
    annualize(weeklyBusinessMiles) * BUSINESS_MILEAGE_RATE_2026;
  const annualOtherExpenses = annualize(weeklyOtherExpenses);
  const annualNetProfit = Math.max(
    0,
    annualGrossIncome - annualMileageDeduction - annualOtherExpenses
  );

  const annualTaxableEarningsForSE = annualNetProfit * 0.9235;
  const socialSecurityBaseRemaining = Math.max(
    0,
    SOCIAL_SECURITY_WAGE_BASE_2026 - annualW2Wages
  );
  const socialSecurityTaxBase = Math.min(
    annualTaxableEarningsForSE,
    socialSecurityBaseRemaining
  );
  const socialSecurityTax =
    annualTaxableEarningsForSE >= 400 ? socialSecurityTaxBase * 0.124 : 0;
  const medicareTax =
    annualTaxableEarningsForSE >= 400 ? annualTaxableEarningsForSE * 0.029 : 0;
  const additionalMedicareThreshold =
    ADDITIONAL_MEDICARE_THRESHOLDS[inputs.filingStatus];
  const additionalMedicareBase = Math.max(
    0,
    annualTaxableEarningsForSE - Math.max(0, additionalMedicareThreshold - annualW2Wages)
  );
  const additionalMedicareTax = additionalMedicareBase * 0.009;
  const annualSelfEmploymentTax =
    socialSecurityTax + medicareTax + additionalMedicareTax;

  const deductibleHalfSelfEmploymentTax = (socialSecurityTax + medicareTax) / 2;
  const standardDeduction = STANDARD_DEDUCTION_2026[inputs.filingStatus];

  const taxableIncomeWithoutGig = Math.max(0, annualW2Wages - standardDeduction);
  const federalTaxWithoutGig = calculateFederalIncomeTax(
    taxableIncomeWithoutGig,
    inputs.filingStatus
  );

  const taxableIncomeWithGig = Math.max(
    0,
    annualW2Wages + annualNetProfit - deductibleHalfSelfEmploymentTax - standardDeduction
  );
  const federalTaxWithGig = calculateFederalIncomeTax(
    taxableIncomeWithGig,
    inputs.filingStatus
  );
  const annualFederalIncomeTaxFromGig = Math.max(
    0,
    federalTaxWithGig - federalTaxWithoutGig
  );

  const annualStateTaxFromGig = annualNetProfit * stateMarginalRate;
  const annualFederalAndSelfEmploymentTax =
    annualSelfEmploymentTax + annualFederalIncomeTaxFromGig;
  const annualEstimatedTax =
    annualFederalAndSelfEmploymentTax + annualStateTaxFromGig;
  const annualRemainingFederalTax = Math.max(
    0,
    annualFederalAndSelfEmploymentTax - annualTaxAlreadyCovered
  );
  const annualRemainingTax = Math.max(
    0,
    annualEstimatedTax - annualTaxAlreadyCovered
  );
  const weeklySetAside = annualRemainingTax / 52;
  const monthlySetAside = annualRemainingTax / 12;
  const quarterlySetAside = annualRemainingTax / 4;
  const effectiveSetAsideRate =
    weeklyGrossIncome > 0 ? weeklySetAside / weeklyGrossIncome : 0;
  const estimatedPaymentsLikelyRequired = annualRemainingFederalTax >= 1_000;
  const quarterlyCheckpoint = getQuarterlyCheckpoint(options?.asOfDate);
  const targetCoveredByNextDueDate =
    quarterlySetAside * quarterlyCheckpoint.installmentsDue;
  const amountToPayByNextDueDate = Math.max(
    0,
    targetCoveredByNextDueDate - annualTaxAlreadyCovered
  );
  const paymentPace: GigTaxEstimate["paymentPace"] = !estimatedPaymentsLikelyRequired
    ? "buffer-only"
    : amountToPayByNextDueDate > 0
      ? "behind"
      : "on-track";

  return {
    taxYear: GIG_TAX_YEAR,
    annualGrossIncome,
    annualMileageDeduction,
    annualOtherExpenses,
    annualNetProfit,
    annualTaxableEarningsForSE,
    annualSelfEmploymentTax,
    annualFederalIncomeTaxFromGig,
    annualStateTaxFromGig,
    annualEstimatedTax,
    annualRemainingFederalTax,
    annualRemainingTax,
    weeklySetAside,
    monthlySetAside,
    quarterlySetAside,
    effectiveSetAsideRate,
    standardDeduction,
    deductibleHalfSelfEmploymentTax,
    estimatedPaymentsLikelyRequired,
    nextDueQuarterLabel: quarterlyCheckpoint.label,
    nextDueDisplayDate: quarterlyCheckpoint.displayDate,
    installmentsDueByNextDate: quarterlyCheckpoint.installmentsDue,
    targetCoveredByNextDueDate,
    amountToPayByNextDueDate,
    paymentPace,
  };
}
