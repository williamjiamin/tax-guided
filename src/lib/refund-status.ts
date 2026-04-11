export type RefundReturnType =
  | "individual"
  | "nonresident"
  | "amended"
  | "business";

export type RefundFilingMethod =
  | "efile-current"
  | "efile-prior"
  | "paper";

export interface RefundOption<T extends string> {
  value: T;
  label: string;
  description: string;
}

export interface RefundScenarioEvent {
  title: string;
  description: string;
  date?: Date;
  tone?: "primary" | "neutral" | "warning";
}

export interface RefundScenarioLink {
  label: string;
  href: string;
}

export interface RefundScenario {
  headline: string;
  summary: string;
  statusSourceLabel: string;
  statusUpdateNote: string;
  primaryAction: RefundScenarioLink;
  secondaryActions: RefundScenarioLink[];
  checklist: string[];
  notes: string[];
  events: RefundScenarioEvent[];
}

export const IRS_LINKS = {
  refund: "https://www.irs.gov/wheres-my-refund",
  amended: "https://www.irs.gov/filing/wheres-my-amended-return",
  processing: "https://www.irs.gov/help/processing-status-for-tax-forms",
  account: "https://www.irs.gov/payments/your-online-account",
  apiClientId: "https://www.irs.gov/filing/get-an-api-client-id",
} as const;

export const RETURN_TYPE_OPTIONS: Array<RefundOption<RefundReturnType>> = [
  {
    value: "individual",
    label: "Standard individual return",
    description: "Form 1040 filed for a typical refund claim.",
  },
  {
    value: "nonresident",
    label: "Nonresident / ITIN-related return",
    description: "Form 1040-NR or a refund path that depends on ITIN processing.",
  },
  {
    value: "amended",
    label: "Amended individual return",
    description: "Form 1040-X after you corrected a prior filing.",
  },
  {
    value: "business",
    label: "Business or informational return",
    description: "Form 5472, 1120, 1065, or another non-1040 filing.",
  },
];

export const FILING_METHOD_OPTIONS: Record<
  RefundFilingMethod,
  RefundOption<RefundFilingMethod>
> = {
  "efile-current": {
    value: "efile-current",
    label: "E-filed current-year return",
    description: "Typical online filing during the active tax season.",
  },
  "efile-prior": {
    value: "efile-prior",
    label: "E-filed prior-year return",
    description: "An electronically filed return for an earlier tax year.",
  },
  paper: {
    value: "paper",
    label: "Mailed or paper-filed return",
    description: "Printed, mailed, or otherwise submitted on paper.",
  },
};

const SUPPORTED_METHODS: Record<
  RefundReturnType,
  RefundFilingMethod[]
> = {
  individual: ["efile-current", "efile-prior", "paper"],
  nonresident: ["efile-current", "efile-prior", "paper"],
  amended: ["efile-current", "efile-prior", "paper"],
  business: ["efile-current", "paper"],
};

function atUtcMidnight(value: Date) {
  return new Date(
    Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate())
  );
}

export function addUtcDays(value: Date, days: number) {
  const next = atUtcMidnight(value);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

export function parseDateInput(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const parsed = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return atUtcMidnight(parsed);
}

export function formatDateInput(value: Date) {
  return atUtcMidnight(value).toISOString().slice(0, 10);
}

export function formatDisplayDate(value?: Date) {
  if (!value) {
    return "Official guidance";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(value);
}

export function getSupportedFilingMethods(returnType: RefundReturnType) {
  return SUPPORTED_METHODS[returnType];
}

function normalizeMethod(
  returnType: RefundReturnType,
  filingMethod: RefundFilingMethod
) {
  const supported = getSupportedFilingMethods(returnType);
  return supported.includes(filingMethod) ? filingMethod : supported[0];
}

function buildIndividualScenario(
  filingMethod: RefundFilingMethod,
  filedOn: Date
): RefundScenario {
  const startCheckingDays =
    filingMethod === "efile-current"
      ? 1
      : filingMethod === "efile-prior"
        ? 3
        : 28;
  const normalWindowDays = filingMethod === "paper" ? 42 : 21;

  return {
    headline: "Use the IRS refund tracker, not a third-party poller",
    summary:
      "Where's My Refund? is the official source for a standard Form 1040 refund. The IRS updates it once per day, so repeated checks during the day usually add no value.",
    statusSourceLabel: "Where's My Refund?",
    statusUpdateNote: "IRS refund data is typically updated once overnight.",
    primaryAction: {
      label: "Open Where's My Refund?",
      href: IRS_LINKS.refund,
    },
    secondaryActions: [
      {
        label: "Open IRS Online Account",
        href: IRS_LINKS.account,
      },
      {
        label: "View IRS processing status",
        href: IRS_LINKS.processing,
      },
    ],
    checklist: [
      "SSN or ITIN",
      "Filing status",
      "Exact whole-dollar refund amount",
      "Tax year",
    ],
    notes: [
      "Most e-filed refunds with direct deposit arrive within 21 days, but errors, identity checks, offsets, or bank delays can slow them down.",
      "The IRS does not recommend checking more than once a day because the tracker is not real-time.",
    ],
    events: [
      {
        title: "Start checking the IRS tool",
        description:
          filingMethod === "paper"
            ? "Paper returns usually need several weeks before the tracker becomes useful."
            : "Your return should begin appearing in the IRS tracker around this date.",
        date: addUtcDays(filedOn, startCheckingDays),
        tone: "primary",
      },
      {
        title: "Typical refund window",
        description:
          filingMethod === "paper"
            ? "Paper returns often take 6 weeks or longer to reach payment."
            : "The IRS says most e-filed Form 1040 refunds are issued within 21 days.",
        date: addUtcDays(filedOn, normalWindowDays),
      },
      {
        title: "Escalate only if it is still stalled",
        description:
          "If the IRS tool has not moved or asks for more information, use the processing-status page or the IRS contact path shown there.",
        date: addUtcDays(filedOn, normalWindowDays),
        tone: "warning",
      },
    ],
  };
}

function buildNonresidentScenario(
  filingMethod: RefundFilingMethod,
  filedOn: Date
): RefundScenario {
  const startCheckingDays =
    filingMethod === "efile-current"
      ? 1
      : filingMethod === "efile-prior"
        ? 3
        : 28;

  return {
    headline: "Expect a longer runway for Form 1040-NR refunds",
    summary:
      "Nonresident and ITIN-related refund cases can still start with the IRS refund tools, but the IRS says Form 1040-NR processing may take up to 6 months from the filing date.",
    statusSourceLabel: "Where's My Refund?",
    statusUpdateNote:
      "Status may appear on the standard IRS tracker, but 1040-NR processing is often materially slower.",
    primaryAction: {
      label: "Open Where's My Refund?",
      href: IRS_LINKS.refund,
    },
    secondaryActions: [
      {
        label: "Open IRS Online Account",
        href: IRS_LINKS.account,
      },
      {
        label: "View IRS processing status",
        href: IRS_LINKS.processing,
      },
    ],
    checklist: [
      "SSN or ITIN",
      "Filing status",
      "Exact whole-dollar refund amount",
      "Tax year",
    ],
    notes: [
      "Form 1040-NR refunds can take much longer than standard Form 1040 refunds, especially when identity or ITIN review is involved.",
      "If you also mailed Form W-7 documentation, expect the refund timeline to stretch well beyond the normal 21-day consumer tax pattern.",
    ],
    events: [
      {
        title: "Start checking the IRS tool",
        description:
          filingMethod === "paper"
            ? "Paper nonresident returns need several weeks before status lookup becomes useful."
            : "Your return may start appearing in the IRS tracker around this date.",
        date: addUtcDays(filedOn, startCheckingDays),
        tone: "primary",
      },
      {
        title: "Normal consumer refund expectations stop being useful",
        description:
          "For 1040-NR filings, the IRS says processing may take up to 6 months from the filing date.",
        date: addUtcDays(filedOn, 180),
      },
      {
        title: "Escalate with IRS processing guidance",
        description:
          "If you are still waiting deep into that window, use the IRS processing-status page or transcript path before assuming something is wrong.",
        date: addUtcDays(filedOn, 180),
        tone: "warning",
      },
    ],
  };
}

function buildAmendedScenario(filedOn: Date): RefundScenario {
  return {
    headline: "Amended returns have their own status tool",
    summary:
      "Where's My Amended Return? is the right path for Form 1040-X. The IRS says amended return status is generally available about 3 weeks after you submit the amendment.",
    statusSourceLabel: "Where's My Amended Return?",
    statusUpdateNote:
      "Amended returns move on a slower cadence than standard refunds and often take up to 16 weeks.",
    primaryAction: {
      label: "Open Where's My Amended Return?",
      href: IRS_LINKS.amended,
    },
    secondaryActions: [
      {
        label: "View IRS processing status",
        href: IRS_LINKS.processing,
      },
      {
        label: "Open IRS Online Account",
        href: IRS_LINKS.account,
      },
    ],
    checklist: [
      "SSN or ITIN",
      "Date you mailed the amended return",
      "Tax year",
      "Exact refund amount if the amendment creates one",
    ],
    notes: [
      "Amended returns are not the same as original refunds. The timing is slower, and patience matters more than frequent checking.",
      "Use the amended-return tracker, not the standard refund tool.",
      "The amended-return tracker cannot provide status for business returns or returns with a foreign address.",
    ],
    events: [
      {
        title: "Start checking amended status",
        description:
          "The IRS says Form 1040-X status is usually available about 3 weeks after filing.",
        date: addUtcDays(filedOn, 21),
        tone: "primary",
      },
      {
        title: "Expected processing window",
        description:
          "Amended returns often take up to 16 weeks to process.",
        date: addUtcDays(filedOn, 112),
      },
      {
        title: "Escalate after the long window, not before",
        description:
          "If you are well past the expected window, use the IRS processing-status resources to decide whether a call is justified.",
        date: addUtcDays(filedOn, 112),
        tone: "warning",
      },
    ],
  };
}

function buildBusinessScenario(
  filingMethod: RefundFilingMethod,
  filedOn: Date
): RefundScenario {
  const standardReviewDate =
    filingMethod === "paper" ? addUtcDays(filedOn, 42) : addUtcDays(filedOn, 21);

  return {
    headline: "Most filings in this product do not belong in Where's My Refund?",
    summary:
      "Form 5472, pro forma Form 1120, Form 1065, and similar business or informational filings are outside the normal individual refund tracker. Keep proof of filing and use IRS processing guidance instead.",
    statusSourceLabel: "IRS processing status",
    statusUpdateNote:
      "There is no public IRS refund-status API for this use case, and the normal refund tool is not the right source for non-1040 filings.",
    primaryAction: {
      label: "Open IRS processing status",
      href: IRS_LINKS.processing,
    },
    secondaryActions: [
      {
        label: "IRS API catalog",
        href: IRS_LINKS.apiClientId,
      },
    ],
    checklist: [
      "EIN or business tax identity details",
      "Form type you filed",
      "Fax confirmation, certified mail receipt, or e-file acceptance",
      "Tax year",
    ],
    notes: [
      "For business returns, the IRS says original e-filed returns are generally processed within 21 days. Paper timelines depend on the live processing backlog.",
      "If you need refund status for a non-1040 federal return, use the IRS Business & Specialty Tax line at 800-829-4933, or 267-941-1000 from outside the U.S.",
      "For ForeignLLCTax's core single-member LLC filing, the normal issue is proof of submission and compliance, not an individual refund payment.",
    ],
    events: [
      {
        title: "Keep proof of filing from day one",
        description:
          "Save your fax confirmation, certified mail receipt, or e-file acceptance. That is your first line of evidence if the IRS has not processed the filing yet.",
        date: filedOn,
        tone: "primary",
      },
      {
        title: "Review current IRS processing tables",
        description:
          filingMethod === "paper"
            ? "Paper business returns move according to the IRS backlog tables, not the consumer refund tracker."
            : "Original business e-files are generally processed within 21 days according to the IRS.",
        date: standardReviewDate,
      },
      {
        title: "Use the business contact path only when needed",
        description:
          "If the live IRS processing page shows your form type should already be worked and you still have no movement, use the Business & Specialty Tax contact path.",
        date: standardReviewDate,
        tone: "warning",
      },
    ],
  };
}

export function getRefundScenario({
  returnType,
  filingMethod,
  filedOn,
}: {
  returnType: RefundReturnType;
  filingMethod: RefundFilingMethod;
  filedOn: Date;
}) {
  const normalizedMethod = normalizeMethod(returnType, filingMethod);

  switch (returnType) {
    case "individual":
      return buildIndividualScenario(normalizedMethod, filedOn);
    case "nonresident":
      return buildNonresidentScenario(normalizedMethod, filedOn);
    case "amended":
      return buildAmendedScenario(filedOn);
    case "business":
      return buildBusinessScenario(normalizedMethod, filedOn);
  }
}
