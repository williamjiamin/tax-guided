// Many-to-many video ↔ topic catalog
// One video can appear under multiple topics, and one topic can have multiple videos.
//
// Curated walkthrough videos (1–21) correspond to the local .mov recordings.
// Videos 14–21 are not yet uploaded to YouTube — their IDs are PLACEHOLDER.
// Update them here once the uploads are complete.

export interface Video {
  id: string; // YouTube video ID
  title: string;
  duration: string; // e.g., "12:34"
  description: string; // one-liner shown in the hub
}

export interface VideoTopic {
  id: string;
  label: string; // pill text
  description: string; // shown when topic is selected
  icon: "overview" | "warning" | "form" | "walkthrough" | "money" | "checklist";
  videoIds: string[];
  /** Wizard step IDs this topic is relevant to */
  stepIds: string[];
  /** Specific field IDs this topic maps to (for per-field triggers) */
  fieldIds: string[];
}

// ─── Video Registry ───────────────────────────────────────────
// Ordered to match the curated 21-video walkthrough sequence.

export const VIDEOS: Video[] = [
  // ── 1–5: Form 1120 + Form 5472 Overview ──────────────────
  {
    id: "phJ7MnpWcBg",
    title: "1. Form 1120 Overview in the Foreign-Owned LLC Context",
    duration: "1:14",
    description:
      "What Form 1120 means when you're a foreign-owned single-member LLC — it's a pro forma, not a full corporate return.",
  },
  {
    id: "3gE5BYgtA8A",
    title: "2. The IRS Requires Form 5472 with a Pro Forma Form 1120",
    duration: "1:04",
    description:
      "Why Form 5472 must be attached to a pro forma Form 1120 for foreign-owned disregarded entities.",
  },
  {
    id: "FD9ax1C1Lqg",
    title: "3. Filing Form 1120 Does NOT Mean Corporate Taxation",
    duration: "1:29",
    description:
      "Common misunderstanding: filing Form 1120 as a pro forma does not change your LLC's tax classification.",
  },
  {
    id: "qGxnGLQNng8",
    title: "4. Full Completion of All Sections Is NOT Required",
    duration: "1:16",
    description:
      "You don't need to fill in every section of Form 1120 or Form 5472 — here's what's actually mandatory.",
  },
  {
    id: "nrd5ASNVWJA",
    title: "5. Example: Foreign-Owned U.S. LLC with No U.S. Income",
    duration: "1:21",
    description:
      "A real example scenario — even with zero U.S. income, you still must file Form 5472 with a pro forma 1120.",
  },

  // ── 6–8: Is It a U.S. LLC? ───────────────────────────────
  {
    id: "MPPazOfObwU",
    title: "6. What Counts as a U.S. LLC?",
    duration: "0:57",
    description:
      "What the IRS considers a U.S.-formed LLC — which states count and how online formation services qualify.",
  },
  {
    id: "2lPtUCsRAZw",
    title: "7. What About Companies Created Through Online Services?",
    duration: "1:17",
    description:
      "If you formed your LLC through Stripe Atlas, doola, or Firstbase — yes, it counts as a U.S. LLC.",
  },
  {
    id: "DNLo_pdTHg4",
    title: "8. Foreign Company with U.S. Bank Account — Is It a U.S. LLC?",
    duration: "0:37",
    description:
      "Having a U.S. bank account does NOT make your foreign company a U.S. LLC. Here's what matters.",
  },

  // ── 9–13: Single-Member / Corp Election / S-Corp ─────────
  {
    id: "ezWr4r6dkAI",
    title: "9. What Is a Reporting Corporation? (Form 5472)",
    duration: "1:41",
    description:
      "The IRS term 'reporting corporation' explained — why your single-member LLC qualifies.",
  },
  {
    id: "afVaS-DHhsU",
    title: "10. How Is a Single-Member LLC Classified?",
    duration: "1:07",
    description:
      "By default a single-member LLC is a disregarded entity for U.S. tax purposes. Here's what that means.",
  },
  {
    id: "YV-Hk4sU_m4",
    title: "11. When Does Your LLC Need to File Form 5472?",
    duration: "1:49",
    description:
      "The exact filing trigger: foreign owner + U.S. single-member LLC = must file. $25,000 penalty if you don't.",
  },
  {
    id: "4E50aoGm7Hg",
    title: "12. Has Your LLC Elected Corporate Status? (Form 8832)",
    duration: "1:11",
    description:
      "What Form 8832 does and why most foreign-owned single-member LLCs have NOT made this election.",
  },
  {
    id: "BQcVoHZrGwQ",
    title: "13. Can a Foreign-Owned LLC Be an S-Corp?",
    duration: "1:31",
    description:
      "Why foreign owners are ineligible for S-Corp status — nonresident aliens can't be S-Corp shareholders.",
  },

  // ── 14–16: Non-U.S. Person Definition ────────────────────
  {
    id: "Uzld6FnNN9E",
    title: "14. Are You a 'Non-U.S. Person'? IRS Definition Explained",
    duration: "2:12",
    description:
      "Not a U.S. citizen and not a lawful permanent resident (green card holder) = non-U.S. person for IRS purposes.",
  },
  {
    id: "8n539PqxyhA",
    title: "15. Does Where You Live Determine Your U.S. Tax Status?",
    duration: "1:17",
    description:
      "No — location does not determine this status. It's about citizenship and residency, not physical presence.",
  },
  {
    id: "kmJURyoxfOY",
    title: "16. Dual Citizenship — Are You a U.S. Person?",
    duration: "1:30",
    description:
      "If one of your citizenships is U.S., you are treated as a U.S. person for IRS purposes, even with another nationality.",
  },

  // ── 17–21: Entity Name Formatting ────────────────────────
  {
    id: "aC2aVyaq3y8",
    title: "17. What Is the 'Name' Field on Form 1120?",
    duration: "1:28",
    description:
      "This field is simply asking for the legal name of your LLC as it appears in your formation documents.",
  },
  {
    id: "vAmv4SBj5S8",
    title: "18. How to Enter Your LLC Name — Exact Match Rules",
    duration: "2:25",
    description:
      "Enter the name exactly as it appears in your registration documents — match the official filing.",
  },
  {
    id: "5zhWIWi2BuM",
    title: "19. Does Capitalization Matter? ALL CAPS vs Lowercase",
    duration: "2:31",
    description:
      "Capitalization is generally not strictly enforced, but best practice is to follow your formation documents.",
  },
  {
    id: "72Cv15b_q1M",
    title: "20. Half-Width vs Full-Width Characters — Use ASCII Only",
    duration: "2:31",
    description:
      "Use standard English (ASCII) characters — the IRS systems expect Latin characters only.",
  },
  {
    id: "Xg6jiceYJNU",
    title: "21. Spacing & Punctuation on IRS Forms",
    duration: "3:16",
    description:
      "Match spaces between words, periods (e.g., 'L.L.C.' vs 'LLC'), commas, and special characters from your formation docs.",
  },

  // ── 22–25: EIN (Employer Identification Number) ───────────
  {
    id: "xO1oO7GJK4M",
    title: "22. What Is the EIN Field Asking For? (Form 1120)",
    duration: "1:33",
    description:
      "The EIN field asks for the 9-digit number assigned by the IRS when your LLC was formed.",
  },
  {
    id: "l1LDAtkyv1E",
    title: "23. Where Can I Find My LLC's EIN?",
    duration: "1:42",
    description:
      "Find your EIN on the confirmation letter (CP 575) the IRS sent after your LLC was formed.",
  },
  {
    id: "KwkCCLveIWg",
    title: "24. Can the IRS Reissue a CP 575? (No)",
    duration: "1:23",
    description:
      "The CP 575 is only sent once when the EIN is first assigned — the IRS does not reissue it.",
  },
  {
    id: "MBYYGa3ZDL4",
    title: "25. How to Request a 147C Letter from the IRS",
    duration: "3:11",
    description:
      "Call the IRS Business & Specialty Tax Line at 1-800-829-4933 to request a 147C verification letter.",
  },

  // ── 26–28: EIN & Name Demos ───────────────────────────────
  {
    id: "lj23OV2rLOQ",
    title: "26. Where to Find Your EIN — CP 575, 147C & SS-4 Explained",
    duration: "2:53",
    description:
      "Can't find your EIN? Here are all the ways: CP 575 letter, 147C verification, and Form SS-4.",
  },
  {
    id: "PgmaKf-tHJY",
    title: "27. How to Enter Your LLC Name on Form 1120 — Demo",
    duration: "1:50",
    description:
      "Step-by-step demonstration of entering an example LLC name on Form 1120 using our filing tool.",
  },
  {
    id: "Lp9zTTHkhsI",
    title: "28. How to Enter Your EIN on Form 1120 — Demo",
    duration: "1:09",
    description:
      "Step-by-step demonstration of entering an example EIN number on Form 1120 using our filing tool.",
  },

  // ── 29–31: State of Formation & Address ──────────────────
  {
    id: "KUz3PPvLGC4",
    title: "29. Which U.S. State Was Your LLC Formed In?",
    duration: "1:49",
    description:
      "The state of formation is where you filed your Articles of Organization — it determines which state's LLC laws govern your entity.",
  },
  {
    id: "fg16OAikF5E",
    title: "30. What Address Goes on Form 1120?",
    duration: "4:33",
    description:
      "Form 1120 asks for the principal office or place of business address at the top — here's what that means for foreign-owned LLCs.",
  },
  {
    id: "rZ_aiVYTOq0",
    title: "31. Can You Use a P.O. Box on Form 1120?",
    duration: "2:25",
    description:
      "If the post office doesn't deliver to your street address, you can use a P.O. box — here's the IRS rule.",
  },

  // ── Supplementary educational videos ─────────────────────
  {
    id: "EOz9MWzb8Sw",
    title: "Introduction to Single Member LLC",
    duration: "5:35",
    description:
      "A beginner-friendly overview of what a single-member LLC is, how it's structured, and how the IRS treats it.",
  },
  {
    id: "6QO8GeJa83M",
    title: "LLC Taxes Explained — How LLCs Are Taxed",
    duration: "3:38",
    description:
      "How the IRS taxes LLCs — default classification, pass-through treatment, and what it means for your filing.",
  },
  {
    id: "npr6RSctaY4",
    title: "Partnership Taxation Explained — How Partnerships Are Taxed",
    duration: "4:45",
    description:
      "How partnership taxation works at the federal level — pass-through income, K-1s, and filing obligations.",
  },
  {
    id: "2CFOprdwqWc",
    title: "Corporations Explained — C Corp vs S Corp Tax Basics",
    duration: "8:10",
    description:
      "The key differences between C-Corps and S-Corps — tax treatment, eligibility, and which one applies to you.",
  },
  {
    id: "pqG200vruqM",
    title: "Single Member LLC Taxes — Everything You Need to Know",
    duration: "5:35",
    description:
      "Everything about single-member LLC taxation — self-employment tax, Schedule C, and how it connects to Form 5472.",
  },
  {
    id: "sKtLNjIgFCk",
    title: "Sole Proprietorship Explained — Taxes, Pros & Cons",
    duration: "8:39",
    description:
      "What a sole proprietorship is, how it's taxed, and the pros and cons compared to forming an LLC.",
  },

  // ── Form 8832 & Entity Classification ────────────────────
  {
    id: "T53b4sKe7c4",
    title: "Form 8832 Entity Classification — Part 1",
    duration: "5:56",
    description:
      "An introduction to IRS Form 8832 — the entity classification election form that lets LLCs and other entities choose how they're taxed.",
  },
  {
    id: "4bWVTXyzqGg",
    title: "Form 8832 Entity Classification — Complete Guide",
    duration: "7:35",
    description:
      "A comprehensive walkthrough of Form 8832 entity classification elections — who files, why, and how.",
  },
  {
    id: "hFuL-DLbiHg",
    title: "Introduction to LLCs — U.S. Tax Treatment",
    duration: "3:38",
    description:
      "An overview of what LLCs are, how they're classified for federal tax purposes, and why they're popular for foreign owners.",
  },
  {
    id: "U6OkFwW12lM",
    title: "C Corp vs S Corp — Key Differences",
    duration: "3:16",
    description:
      "The key tax differences between C corporations and S corporations — and what matters for foreign-owned U.S. businesses.",
  },
  {
    id: "6szJ8mchLSI",
    title: "Introduction to U.S. Corporations — Tax Overview",
    duration: "8:10",
    description:
      "How U.S. corporations are structured and taxed, including C-Corp rules relevant to foreign-owned entities.",
  },
];

// ─── Topic Taxonomy ───────────────────────────────────────────
// videoIds are ordered curated-first so the walkthrough videos always appear at the top.

export const TOPICS: VideoTopic[] = [
  {
    id: "eligibility-us-llc",
    label: "Is My LLC a U.S. LLC?",
    description: "Understand what the IRS considers a U.S.-formed LLC and whether yours qualifies.",
    icon: "overview",
    videoIds: ["MPPazOfObwU", "2lPtUCsRAZw", "DNLo_pdTHg4", "KUz3PPvLGC4"],
    stepIds: ["eligibility"],
    fieldIds: ["qualifyUsEntity"],
  },
  {
    id: "eligibility-single-member",
    label: "Single-Member & Disregarded Entity",
    description: "What 'single-member' and 'disregarded entity' mean — and why it triggers Form 5472.",
    icon: "overview",
    videoIds: ["ezWr4r6dkAI", "afVaS-DHhsU", "YV-Hk4sU_m4", "4E50aoGm7Hg", "BQcVoHZrGwQ", "T53b4sKe7c4", "4bWVTXyzqGg", "EOz9MWzb8Sw", "pqG200vruqM"],
    stepIds: ["eligibility"],
    fieldIds: ["qualifySingleMember", "qualifyCorpElection"],
  },
  {
    id: "eligibility-foreign-owner",
    label: "Are You a Non-U.S. Person?",
    description: "What 'non-U.S. person' means for the IRS — citizenship, residency, and dual nationality.",
    icon: "warning",
    videoIds: ["Uzld6FnNN9E", "8n539PqxyhA", "kmJURyoxfOY", "YV-Hk4sU_m4", "3gE5BYgtA8A"],
    stepIds: ["eligibility"],
    fieldIds: ["qualifyForeignOwner"],
  },
  {
    id: "getting-started",
    label: "Getting Started",
    description: "New to this? Start here to understand what you're filing and why.",
    icon: "overview",
    videoIds: ["phJ7MnpWcBg", "3gE5BYgtA8A", "FD9ax1C1Lqg", "qGxnGLQNng8", "nrd5ASNVWJA", "KUz3PPvLGC4", "fg16OAikF5E", "rZ_aiVYTOq0"],
    stepIds: ["entity-info", "entity-address"],
    fieldIds: ["stateOfFormation", "dateIncorporated", "isInitialReturn", "taxYearBeginning", "taxYearEnding"],
  },
  {
    id: "form-1120-basics",
    label: "Form 1120 Basics",
    description: "How to fill out the pro forma Form 1120 — the header page of your filing.",
    icon: "form",
    videoIds: ["phJ7MnpWcBg", "FD9ax1C1Lqg", "qGxnGLQNng8", "fg16OAikF5E", "rZ_aiVYTOq0"],
    stepIds: ["entity-info", "entity-address"],
    fieldIds: ["addressType", "streetAddress", "cityTown", "stateProvince", "country", "zipCode"],
  },
  {
    id: "ein-explained",
    label: "EIN (Employer Identification Number)",
    description: "What the EIN field means, where to find your number, and how to get a replacement letter.",
    icon: "form",
    videoIds: ["xO1oO7GJK4M", "l1LDAtkyv1E", "KwkCCLveIWg", "MBYYGa3ZDL4", "lj23OV2rLOQ", "Lp9zTTHkhsI"],
    stepIds: ["entity-info"],
    fieldIds: ["ein"],
  },
  {
    id: "entity-name-formatting",
    label: "How to Enter Your LLC Name",
    description: "Exact formatting rules for entering your LLC name on IRS forms — capitalization, punctuation, and matching requirements.",
    icon: "form",
    videoIds: ["aC2aVyaq3y8", "vAmv4SBj5S8", "5zhWIWi2BuM", "72Cv15b_q1M", "Xg6jiceYJNU", "PgmaKf-tHJY"],
    stepIds: ["entity-info"],
    fieldIds: ["entityName"],
  },
  {
    id: "why-form-5472",
    label: "Why Form 5472?",
    description: "The legal requirement behind Form 5472 and what happens if you don't file.",
    icon: "warning",
    videoIds: ["3gE5BYgtA8A", "qGxnGLQNng8", "nrd5ASNVWJA"],
    stepIds: ["entity-info", "owner-identification", "owner-tax-ids"],
    fieldIds: ["isInitialReturn", "ownerFullName", "ownerCountryCitizenship"],
  },
  {
    id: "common-mistakes",
    label: "Common Mistakes",
    description: "The top errors that trigger IRS notices — avoid these before you submit.",
    icon: "warning",
    videoIds: ["FD9ax1C1Lqg", "phJ7MnpWcBg"],
    stepIds: ["entity-info", "entity-address", "owner-tax-ids"],
    fieldIds: ["ownerReferenceId", "ownerFTIN"],
  },
  {
    id: "owner-info",
    label: "Foreign Owner Details",
    description: "How to correctly enter the owner's identity, tax IDs, and address on Form 5472.",
    icon: "form",
    videoIds: ["qGxnGLQNng8", "nrd5ASNVWJA"],
    stepIds: ["owner-identification", "owner-tax-ids", "owner-address"],
    fieldIds: ["ownerFullName", "ownerCountryCitizenship", "ownerSSN", "ownerReferenceId", "ownerFTIN", "ownerAddress", "ownerBusinessCountries", "ownerTaxResidentCountries"],
  },
  {
    id: "business-activity",
    label: "Business Activity & Codes",
    description: "Picking the right NAICS code and describing your business for the IRS.",
    icon: "checklist",
    videoIds: ["qGxnGLQNng8", "nrd5ASNVWJA"],
    stepIds: ["business-activity", "countries-of-operation"],
    fieldIds: ["businessDescription", "businessActivityCode", "countryOfIncorporation", "countriesBusinessConducted", "countriesIncomeTaxResident"],
  },
  {
    id: "transactions",
    label: "Reporting Transactions",
    description: "What counts as a reportable transaction and how to fill in Parts IV and V.",
    icon: "money",
    videoIds: ["nrd5ASNVWJA", "qGxnGLQNng8"],
    stepIds: ["transaction-overview", "monetary-transactions", "de-transactions", "part-v-attachment"],
    fieldIds: ["hadMonetaryTransactions", "hadFormationTransactions", "hadDistributions", "formationDescription", "formationAmount", "partVRequired", "partVTransactionDate", "partVPayerName", "partVPayeeName", "partVAmount", "partVPurpose", "partVReimbursed"],
  },
  {
    id: "full-walkthrough",
    label: "Full Filing Example",
    description: "Watch someone fill out the entire filing from start to finish — the best way to learn.",
    icon: "walkthrough",
    videoIds: ["nrd5ASNVWJA", "phJ7MnpWcBg", "PgmaKf-tHJY", "Lp9zTTHkhsI", "lj23OV2rLOQ"],
    stepIds: ["entity-info", "entity-address", "owner-identification", "owner-tax-ids", "owner-address", "business-activity", "countries-of-operation", "transaction-overview", "monetary-transactions", "de-transactions", "part-v-attachment", "additional-questions"],
    fieldIds: [],
  },
];

// ─── Lookup Helpers ───────────────────────────────────────────

export function getVideoById(videoId: string): Video | undefined {
  return VIDEOS.find((v) => v.id === videoId);
}

export function getTopicsForField(fieldId: string): VideoTopic[] {
  return TOPICS.filter((t) => t.fieldIds.includes(fieldId));
}

export function getTopicsForStep(stepId: string): VideoTopic[] {
  return TOPICS.filter((t) => t.stepIds.includes(stepId));
}

export function getVideosForTopic(topicId: string): Video[] {
  const topic = TOPICS.find((t) => t.id === topicId);
  if (!topic) return [];
  return topic.videoIds
    .map(getVideoById)
    .filter((v): v is Video => !!v && !v.id.startsWith("PLACEHOLDER"));
}

export function hasVideosForField(fieldId: string): boolean {
  return TOPICS.some(
    (t) =>
      t.fieldIds.includes(fieldId) &&
      t.videoIds.some((vid) => !vid.startsWith("PLACEHOLDER"))
  );
}
