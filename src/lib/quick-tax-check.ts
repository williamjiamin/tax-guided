export type QuickCheckEntity =
  | "single-member-llc"
  | "multi-member-llc"
  | "corporate-election"
  | "not-sure";

export type QuickCheckForeignOwnership = "yes" | "no" | "not-sure";
export type QuickCheckUsActivity = "no" | "yes" | "not-sure";
export type QuickCheckTaxIds = "all-set" | "need-ein" | "need-itin" | "need-both";
export type QuickCheckTiming = "on-time" | "need-extension" | "late";

export interface QuickCheckAnswers {
  entity: QuickCheckEntity;
  foreignOwnership: QuickCheckForeignOwnership;
  usActivity: QuickCheckUsActivity;
  taxIds: QuickCheckTaxIds;
  timing: QuickCheckTiming;
}

export interface QuickCheckAction {
  label: string;
  description: string;
  href: string;
  external?: boolean;
  featured?: boolean;
}

export interface QuickCheckResult {
  tone: "ready" | "watch" | "urgent";
  badge: string;
  headline: string;
  summary: string;
  forms: string[];
  signals: string[];
  actions: QuickCheckAction[];
  note?: string;
}

function addTaxIdActions(
  actions: QuickCheckAction[],
  taxIds: QuickCheckTaxIds,
  includeItin: boolean
) {
  if (taxIds === "need-ein" || taxIds === "need-both") {
    actions.push({
      label: "Get your EIN workflow ready",
      description: "Use the guided SS-4 flow before your filing package is finalized.",
      href: "/services/ss4-application",
    });
  }

  if (includeItin && (taxIds === "need-itin" || taxIds === "need-both")) {
    actions.push({
      label: "Prepare Form W-7",
      description: "If an individual return is required, line up the ITIN application early.",
      href: "/services/itin-application",
    });
  }
}

export function getQuickTaxCheckResult(
  answers: QuickCheckAnswers
): QuickCheckResult {
  const { entity, foreignOwnership, usActivity, taxIds, timing } = answers;

  if (foreignOwnership === "no") {
    return {
      tone: "ready",
      badge: "Outside our core niche",
      headline: "This probably is not a foreign-owned LLC filing case.",
      summary:
        "ForeignLLCTax is built for foreign-owned U.S. LLC compliance. If the owner is not foreign, the right path is usually a broader IRS or domestic small-business workflow.",
      forms: ["Varies by entity classification"],
      signals: [
        "You may not need the Form 5472 workflow that powers this product.",
        "A general IRS business-structure guide is a better first stop than our filing flow.",
      ],
      actions: [
        {
          label: "Review IRS business structures",
          description: "Start with the IRS overview of how different U.S. entities are taxed.",
          href: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures",
          external: true,
          featured: true,
        },
        {
          label: "Use the detailed forms wizard",
          description: "If ownership is mixed or you are still unsure, get a more granular form checklist.",
          href: "/tools/forms-wizard",
        },
      ],
    };
  }

  if (entity === "not-sure" || foreignOwnership === "not-sure") {
    return {
      tone: timing === "late" ? "urgent" : "watch",
      badge: timing === "late" ? "Resolve this first" : "Needs a clearer entity map",
      headline: "You need entity clarity before you start filing.",
      summary:
        "The fastest safe move is to confirm the entity type and foreign-ownership facts first. Once those are clear, the required IRS forms usually become straightforward.",
      forms: ["Likely Form 5472, 1065, or 1120 family filings"],
      signals: [
        "Unclear entity classification creates the biggest routing risk.",
        timing === "late"
          ? "Because you may already be late, do not wait to clarify the filing path."
          : "You can still use a lighter-weight check before committing to a full filing flow.",
      ],
      actions: [
        {
          label: "Run the forms wizard",
          description: "Get the more detailed filing map for your ownership and activity pattern.",
          href: "/tools/forms-wizard",
          featured: true,
        },
        {
          label: "Take the quick eligibility quiz",
          description: "Use the 5-question check if you want a simpler yes/no answer first.",
          href: "/quiz",
        },
        {
          label: "Book a consultation",
          description: "Use a human review if your ownership or election history is messy.",
          href: "/consultation",
        },
      ],
      note:
        "This tool is an estimate only. Corporate elections, hybrid entities, and restructuring events can change the form set.",
    };
  }

  if (entity === "corporate-election") {
    const actions: QuickCheckAction[] = [
      {
        label: "Review Form 1120 requirements",
        description: "Corporate-election cases usually need a traditional corporate return path.",
        href: "https://www.irs.gov/forms-pubs/about-form-1120",
        external: true,
        featured: true,
      },
      {
        label: "Review Form 5472",
        description: "Foreign ownership can still trigger Form 5472 alongside the corporate return.",
        href: "https://www.irs.gov/forms-pubs/about-form-5472",
        external: true,
      },
      {
        label: "Book a consultation",
        description: "This is higher-risk than our standard single-member filing flow.",
        href: "/consultation",
      },
    ];

    if (timing === "need-extension" || timing === "late") {
      actions.push({
        label: "Check Form 7004",
        description: "Use the official IRS extension path for business returns if you need more time.",
        href: "https://www.irs.gov/forms-pubs/about-form-7004",
        external: true,
      });
    }

    return {
      tone: timing === "late" ? "urgent" : "watch",
      badge: "Complex business return",
      headline: "This looks like a corporate-return scenario, not our core DIY flow.",
      summary:
        "Once an LLC has a corporate election, the filing path becomes meaningfully more complex. You should treat this as a Form 1120-led case with Form 5472 layered in for foreign ownership.",
      forms: ["Form 1120", "Form 5472"],
      signals: [
        "Corporate-election returns are outside the main product path on this site.",
        timing === "late"
          ? "Because timing is tight, start with the official extension or return instructions immediately."
          : "You should validate deadlines and extensions before you wait on any optional cleanup work.",
      ],
      actions,
      note:
        "If the company also has U.S.-effectively connected income, treaty issues, or related-party transactions beyond basic formation activity, professional review is usually warranted.",
    };
  }

  if (entity === "single-member-llc") {
    const actions: QuickCheckAction[] = [
      {
        label: "Start the single-member filing flow",
        description: "Generate Form 5472 plus the pro forma 1120 package in the guided filer.",
        href: "/filer",
        featured: true,
      },
    ];

    const forms = ["Form 5472", "Pro forma Form 1120"];
    const signals = [
      "This is the core ForeignLLCTax workflow and the cleanest fit for the product.",
    ];
    const tone: QuickCheckResult["tone"] =
      timing === "late"
        ? "urgent"
        : usActivity === "yes" || usActivity === "not-sure"
          ? "watch"
          : "ready";
    let badge = timing === "late" ? "Act now" : "Best fit";
    let headline = "You likely need the standard foreign-owned single-member LLC filing.";
    let summary =
      "Start with Form 5472 plus the pro forma 1120 package. That is usually the base annual filing for a foreign-owned disregarded LLC, even with zero revenue.";

    if (usActivity === "yes") {
      forms.push("Possible Form 1040-NR or Form 1120-F");
      signals.push(
        "U.S. trade or business activity can create an additional income-tax filing on top of the base 5472 package."
      );
      headline = "Start with the base 5472 filing, then check the ECI layer.";
      summary =
        "Your base compliance likely still starts with Form 5472 plus pro forma 1120, but U.S. business activity may also require an income-tax return.";
      actions.push({
        label: "Run the ECI assessment",
        description: "Check whether the activity points toward a 1040-NR or 1120-F filing requirement.",
        href: "/tools/eci-assessment",
      });
      actions.push({
        label: "Open the ECI filing service",
        description: "Use the dedicated ECI flow if you already know an extra return is required.",
        href: "/services/eci-filing",
      });
    } else if (usActivity === "not-sure") {
      signals.push(
        "The base filing still matters, but your next decision is whether effectively connected income is in play."
      );
      badge = timing === "late" ? "Act now" : "Check one more thing";
      headline = "Your base filing looks clear, but your ECI status does not.";
      summary =
        "You likely still need Form 5472 plus pro forma 1120. The main unknown is whether your U.S. activity also creates an income-tax filing.";
      actions.push({
        label: "Take the ECI assessment",
        description: "Use the lighter-weight ECI check before committing to the extra filing path.",
        href: "/tools/eci-assessment",
      });
    } else {
      signals.push(
        "If the LLC only had formation costs or foreign-owner transactions, the base filing is usually the main event."
      );
    }

    addTaxIdActions(actions, taxIds, usActivity !== "no");

    if (timing === "need-extension") {
      signals.push(
        "If you are not ready to file, line up the extension route before the original deadline passes."
      );
      actions.push({
        label: "Review Form 7004",
        description: "Use the official IRS business-extension page for more time to file.",
        href: "https://www.irs.gov/forms-pubs/about-form-7004",
        external: true,
      });
      actions.push({
        label: "Track the deadline",
        description: "Use the reminder tool if you want email prompts before the filing cutoff.",
        href: "/tools/deadline-reminder",
      });
    }

    if (timing === "late") {
      signals.push(
        "Late Form 5472 filings can trigger severe penalties, so cleanup work should start immediately."
      );
      actions.push({
        label: "Estimate penalty exposure",
        description: "Use the late-filing calculator to understand the downside while you catch up.",
        href: "/tools/penalty-calculator",
      });
      actions.push({
        label: "Read the catch-up guide",
        description: "See the recommended order for getting compliant after a missed year.",
        href: "/tools/catch-up",
      });
    }

    return {
      tone,
      badge,
      headline,
      summary,
      forms,
      signals,
      actions,
      note:
        "This check does not replace IRS instructions. Transfer pricing, treaty positions, and multi-entity structures can change the right filing path.",
    };
  }

  const actions: QuickCheckAction[] = [
    {
      label: "Open the partnership filing service",
      description: "Start the guided multi-member LLC path for Form 1065 and related schedules.",
      href: "/services/partnership-filing",
      featured: true,
    },
    {
      label: "Read the Form 1065 guide",
      description: "Review the partnership deadlines, schedules, and common mistakes.",
      href: "/guides/form-1065",
    },
  ];
  const forms = ["Form 1065", "Schedule K-1", "Schedule K-3", "Form 5472"];
  const signals = [
    "This is a partnership-style filing, which is more complex than the single-member 5472 flow.",
    "Foreign-owned partnerships can have both partnership-return and related-party reporting obligations.",
  ];

  if (usActivity === "yes") {
    forms.push("Possible Forms 8804, 8805, and 8813");
    signals.push(
      "If the partnership has effectively connected income, Section 1446 withholding can become part of the filing burden."
    );
    actions.push({
      label: "Estimate withholding exposure",
      description: "Use the Section 1446 calculator for the withholding layer.",
      href: "/tools/withholding-calculator",
    });
  } else if (usActivity === "not-sure") {
    signals.push(
      "Your next open question is whether the activity profile creates an ECI or withholding issue."
    );
    actions.push({
      label: "Run the ECI assessment",
      description: "Use the activity check before you assume the partnership return is the whole job.",
      href: "/tools/eci-assessment",
    });
  }

  addTaxIdActions(actions, taxIds, usActivity !== "no");

  if (timing === "need-extension" || timing === "late") {
    actions.push({
      label: "Review Form 7004",
      description: "Use the official IRS extension form for partnership and business return timing.",
      href: "https://www.irs.gov/forms-pubs/about-form-7004",
      external: true,
    });
  }

  if (timing === "late") {
    actions.push({
      label: "Read the catch-up guide",
      description: "Use the late-filing guide before you start sending incomplete partnership paperwork.",
      href: "/tools/catch-up",
    });
  }

  return {
    tone: timing === "late" ? "urgent" : usActivity === "yes" ? "urgent" : "watch",
    badge: timing === "late" ? "Deadline risk" : "Partnership complexity",
    headline:
      usActivity === "yes"
        ? "You likely need the partnership return plus an ECI/withholding review."
        : "You likely need the foreign-owned partnership filing path.",
    summary:
      usActivity === "yes"
        ? "Start from Form 1065, but do not ignore the withholding and related-party layers if the partnership has U.S. business activity."
        : "This looks like a Form 1065-based filing with extra international reporting, not the simpler single-member LLC route.",
    forms,
    signals,
    actions,
    note:
      "Partnership penalties and withholding rules can vary by partner count, income type, and activity. Use this as a routing estimate, not a filing opinion.",
  };
}
