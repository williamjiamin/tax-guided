// Complete YouTube video catalog from @RIPPATaxStudio channel
// Auto-generated from channel scrape on 2026-03-28

export type ContentType = "video" | "article" | "qa";

export interface VideoEntry {
  id: string;
  title: string;
  slug: string;
  duration: string;
  category: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  /** Content format: "video" (YouTube embed), "article" (text only), "qa" (Q&A format). Defaults to "video". */
  contentType: ContentType;
}

// Categories for organizing content
export const CATEGORIES = {
  "form-5472": "Form 5472 & Foreign-Owned LLCs",
  "form-1120": "Form 1120 Corporate Tax Return",
  "form-8832": "Form 8832 Entity Classification",
  "form-1040": "Form 1040 Individual Tax Return",
  "filing-status": "Filing Status Guide",
  "form-8857": "Form 8857 Innocent Spouse Relief",
  "form-8379": "Form 8379 Injured Spouse",
  "foreign-income": "Foreign Income Reporting",
  "form-8865": "Form 8865 Foreign Partnerships",
  "tax-credits": "Tax Credits (FTC, GBC)",
  "amt": "Alternative Minimum Tax (AMT)",
  "deductions": "Deductions & Section 179",
  "qbi": "QBI & Pass-Through Entities",
  "installment-sales": "Installment Sales (Form 6252)",
  "cp2000": "CP2000 Notices",
  "tax-basics": "Tax Basics & Filing Requirements",
  "entity-types": "Business Entity Types",
  "due-dates": "Tax Return Due Dates",
  "reporting-changes": "Reporting Changes",
  "form-ss4": "Form SS-4 & EIN Application",
  "firpta": "FIRPTA & Real Estate",
  "state-tax": "State Tax for Foreign LLCs",
  "ecommerce": "E-Commerce Tax",
  "crypto": "Cryptocurrency Tax",
  "aml": "AML & BSA Compliance",
  "estate-gift": "Estate & Gift Tax",
  "international-corporate": "GILTI, Subpart F & BEAT",
  "tax-treaties": "Tax Treaty Benefits",
  "transfer-pricing": "Transfer Pricing",
  "payroll": "Payroll & Employment Tax",
  "expatriation": "Expatriation & Residency",
  "tax-planning": "Tax Planning & Strategy",
  "penalties": "Penalties & Compliance",
  "banking": "Banking & Payments",
  "visa-immigration": "Visa & Immigration Tax",
} as const;

export type Category = keyof typeof CATEGORIES;

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

// Raw video data from YouTube channel
const RAW_VIDEOS: Array<{
  id: string;
  title: string;
  duration: string;
  category: Category;
  seoTitle: string;
  contentType?: ContentType;
}> = [
  // === Form 5472 & Foreign-Owned LLCs ===
  { id: "MPPazOfObwU", title: "What Counts as a U.S. LLC? — IRS Rules for Foreign Owners", duration: "0:57", category: "form-5472", seoTitle: "What Counts as a U.S. LLC? IRS Rules for Foreign Owners (Form 5472)" },
  { id: "2lPtUCsRAZw", title: "Stripe Atlas, doola, Firstbase — Does Your LLC Count as U.S.? (Form 5472)", duration: "1:17", category: "form-5472", seoTitle: "Stripe Atlas, Doola, Firstbase: Does Your LLC Count as U.S.? (Form 5472 Guide)" },
  { id: "DNLo_pdTHg4", title: "U.S. Bank Account ≠ U.S. LLC — Foreign Company Filing Rules Explained", duration: "0:37", category: "form-5472", seoTitle: "U.S. Bank Account Does Not Make a U.S. LLC: Foreign Company IRS Filing Rules" },
  { id: "ezWr4r6dkAI", title: "What Is a Reporting Corporation? — IRS Form 5472 Key Concept Explained", duration: "1:41", category: "form-5472", seoTitle: "What Is a Reporting Corporation? IRS Form 5472 Key Concept Explained" },
  { id: "afVaS-DHhsU", title: "Disregarded Entity Explained — How Single-Member LLCs Are Taxed", duration: "1:07", category: "form-5472", seoTitle: "Disregarded Entity Explained: How Single-Member LLCs Are Taxed by the IRS" },
  { id: "YV-Hk4sU_m4", title: "When Must Your LLC File Form 5472? The $25,000 Penalty Trigger", duration: "1:49", category: "form-5472", seoTitle: "When Must Your LLC File Form 5472? Avoid the $25,000 IRS Penalty" },
  { id: "4E50aoGm7Hg", title: "Did Your LLC Elect Corporate Status? (Form 8832 / S-Corp Check)", duration: "1:11", category: "form-5472", seoTitle: "Did Your LLC Elect Corporate Status? Form 8832 and S-Corp Check" },
  { id: "BQcVoHZrGwQ", title: "Can a Foreign-Owned LLC Be an S-Corp? (Why the Answer Is No)", duration: "1:31", category: "form-5472", seoTitle: "Can a Foreign-Owned LLC Be an S-Corp? Why the IRS Says No" },
  { id: "qGxnGLQNng8", title: "Do You Need to Complete ALL Sections of Form 5472? (Common Misconception Explained)", duration: "1:16", category: "form-5472", seoTitle: "Do You Need to Complete All Sections of Form 5472? Common Misconceptions" },
  { id: "FD9ax1C1Lqg", title: "3 Common Misunderstandings Filing Form 1120 does not mean corporate taxation", duration: "1:29", category: "form-5472", seoTitle: "3 Common Misunderstandings: Filing Form 1120 Does Not Mean Corporate Taxation" },
  { id: "nrd5ASNVWJA", title: "Foreign-Owned LLC with No U.S. Income? You Still Must File Form 5472 (Example Walkthrough)", duration: "1:21", category: "form-5472", seoTitle: "Foreign-Owned LLC with No U.S. Income? You Still Must File Form 5472" },
  { id: "3gE5BYgtA8A", title: "Why the IRS Requires Form 5472 for Your Foreign-Owned LLC (Pro Forma 1120 Explained)", duration: "1:04", category: "form-5472", seoTitle: "Why the IRS Requires Form 5472 for Foreign-Owned LLCs: Pro Forma 1120 Explained" },

  // --- Form 5472 Articles & Q&A (text-only, no video) ---
  { id: "art-5472-overview", title: "Form 5472 Explained — What It Is, Who Must File, and How It Works", duration: "12 min read", category: "form-5472", seoTitle: "Form 5472 Explained: What It Is, Who Must File, and How It Works (2025-2026)", contentType: "article" },
  { id: "qa-5472-reportable-transactions", title: "Form 5472 Reportable Transactions — What Counts and How to Report Them", duration: "8 min read", category: "form-5472", seoTitle: "Form 5472 Reportable Transactions: What Counts and How to Report (2025-2026)", contentType: "qa" },
  { id: "qa-5472-penalties-extensions", title: "Form 5472 Penalties, Deadlines, and Extensions — What You Need to Know", duration: "6 min read", category: "form-5472", seoTitle: "Form 5472 Penalties ($25,000), Deadlines, and Extension Rules (2025-2026)", contentType: "qa" },
  { id: "qa-5472-how-to-file", title: "How to File Form 5472 — Step-by-Step for Foreign-Owned LLCs", duration: "10 min read", category: "form-5472", seoTitle: "How to File Form 5472: Step-by-Step Guide for Foreign-Owned LLCs (2025-2026)", contentType: "qa" },
  { id: "qa-5472-common-mistakes", title: "Form 5472 Common Mistakes — Avoid These Costly Filing Errors", duration: "7 min read", category: "form-5472", seoTitle: "Form 5472 Common Mistakes: Avoid These Costly IRS Filing Errors", contentType: "qa" },
  { id: "qa-5472-address-fields", title: "Form 5472 Address Rules — Registered Agent vs C/O vs Foreign Address", duration: "9 min read", category: "form-5472", seoTitle: "Form 5472 Address: Registered Agent vs C/O Address Rules for Foreign-Owned LLCs", contentType: "qa" },
  { id: "qa-5472-zero-income-filing", title: "Zero-Income Foreign LLC — Do You Still Need to File Form 5472?", duration: "5 min read", category: "form-5472", seoTitle: "Foreign-Owned LLC Zero Income: Must You Still File Form 5472", contentType: "qa" },
  { id: "qa-5472-part-vi-attachment", title: "Form 5472 Part VI — Do You Need a Statement About the Owner-Manager Relationship?", duration: "8 min read", category: "form-5472", seoTitle: "Form 5472 Part VI Attachment: Owner-Manager Nonmonetary Transaction Disclosure", contentType: "qa" },
  { id: "qa-5472-business-activity-code", title: "Form 5472 Part 1d — Principal Business Activity Code for Foreign-Owned LLCs", duration: "7 min read", category: "form-5472", seoTitle: "Form 5472 Business Activity Code: Which Code to Use for Your Foreign-Owned LLC (2025-2026)", contentType: "qa" },

  // === Form 1120 ===
  { id: "phJ7MnpWcBg", title: "Form 1120 for Foreign-Owned LLCs — What You Need to Know (2025)", duration: "1:14", category: "form-1120", seoTitle: "Form 1120 for Foreign-Owned LLCs: What You Need to Know (2025 Tax Year)" },

  // --- Form 1120 Articles & Q&A (text-only, no video) ---
  { id: "art-1120-overview", title: "Form 1120 Explained — What It Is, Who Files, and How It Works", duration: "8 min read", category: "form-1120", seoTitle: "Form 1120 Explained: What It Is, Who Files It, and How It Works (2025-2026)", contentType: "article" },
  { id: "art-1120-deadlines", title: "Form 1120 Filing Deadlines, Extensions, and Payment Rules", duration: "5 min read", category: "form-1120", seoTitle: "Form 1120 Filing Deadlines and Extension Rules for C Corporations (2025-2026)", contentType: "article" },
  { id: "qa-llc-ccorp-election", title: "LLC Elected as C-Corp — Filing Requirements and Special Rules", duration: "6 min read", category: "form-1120", seoTitle: "LLC Elected as C-Corp: Form 1120 Filing Requirements and Special Rules", contentType: "qa" },
  { id: "qa-1120-deductions", title: "C-Corp Deductions — Meals, Entertainment, and Depreciation Rules (2025–2026)", duration: "5 min read", category: "form-1120", seoTitle: "C Corporation Deductions: Meals, Entertainment, and Depreciation Rules (2025-2026)", contentType: "qa" },
  { id: "qa-1120-schedules", title: "Form 1120 Schedules Explained — Schedule J, L, M-1, and M-2", duration: "7 min read", category: "form-1120", seoTitle: "Form 1120 Schedules Explained: Schedule J, L, M-1, and M-2", contentType: "qa" },
  { id: "qa-nol-ccorp", title: "Net Operating Losses for C Corporations — Carryforward and 80% Rule", duration: "4 min read", category: "form-1120", seoTitle: "Net Operating Losses for C Corporations: Carryforward Rules and 80% Limitation", contentType: "qa" },

  // === Form 8832 Entity Classification ===
  { id: "HhU2PW-YmIM", title: "Form 8832 Entity Classification Election - Key Rules (Part 3)", duration: "5:23", category: "form-8832", seoTitle: "Form 8832 Entity Classification Election: Key Rules You Must Know (Part 3)" },
  { id: "0yy714Fh-YU", title: "Form 8832 Entity Classification Election - Step by Step (Part 2)", duration: "3:56", category: "form-8832", seoTitle: "Form 8832 Entity Classification Election: Step-by-Step Instructions (Part 2)" },
  { id: "Y5CfPVurViE", title: "Form 8832 Entity Classification Election - How It Works (Part 1)", duration: "5:56", category: "form-8832", seoTitle: "Form 8832 Entity Classification Election: How It Works (Part 1)" },

  // --- Entity Types Articles (text-only, no video) ---
  { id: "art-duns-number-guide", title: "How to Apply for a DUNS Number — Step-by-Step Guide for Apple & Google Developers", duration: "10 min read", category: "entity-types", seoTitle: "How to Apply for a DUNS Number: Step-by-Step Guide for Apple and Google Play Developer Accounts (2025-2026)", contentType: "article" },

  // === Single Member LLC / Entity Types ===
  { id: "EOz9MWzb8Sw", title: "US Tax – Ep. 85: Introduction to Single Member LLC", duration: "5:35", category: "entity-types", seoTitle: "Introduction to Single Member LLC: Complete Tax Guide for U.S. Business Owners" },
  { id: "6QO8GeJa83M", title: "LLC Taxes Explained - How LLCs Are Taxed", duration: "3:38", category: "entity-types", seoTitle: "LLC Taxes Explained: How LLCs Are Taxed by the IRS (Complete Guide)" },
  { id: "npr6RSctaY4", title: "Partnership Taxation Explained - How Partnerships Are Taxed", duration: "4:45", category: "entity-types", seoTitle: "Partnership Taxation Explained: How the IRS Taxes Partnerships" },
  { id: "2CFOprdwqWc", title: "Corporations Explained - C Corp vs S Corp Tax Basics", duration: "8:10", category: "entity-types", seoTitle: "C Corp vs S Corp Tax Basics: Corporation Taxation Explained" },
  { id: "pqG200vruqM", title: "Single Member LLC Taxes - Everything You Need to Know", duration: "5:35", category: "entity-types", seoTitle: "Single Member LLC Taxes: Everything You Need to Know (2025)" },
  { id: "sKtLNjIgFCk", title: "Sole Proprietorship Explained - Taxes, Pros & Cons You Must Know", duration: "8:39", category: "entity-types", seoTitle: "Sole Proprietorship Explained: Taxes, Pros and Cons You Must Know" },

  // === Filing Status (Form 1040) ===
  { id: "cs9SO8oVpZI", title: "Form 1040 Filing Status 11 Qualifying Surviving Spouse", duration: "5:21", category: "filing-status", seoTitle: "Form 1040 Filing Status: Qualifying Surviving Spouse Explained" },
  { id: "2z4_cru4_Yk", title: "100 Form 1040 Filing Status 12 Eligibility Requirements of QSS PART 1 Did not remarry", duration: "6:05", category: "filing-status", seoTitle: "Qualifying Surviving Spouse Eligibility: Did Not Remarry Requirement (Part 1)" },
  { id: "UoqbDHw8Wb8", title: "Form 1040 Filing Status 13 Eligibility Requirements of QSS PART 2 Entitled to file", duration: "5:33", category: "filing-status", seoTitle: "Qualifying Surviving Spouse: Entitled to File Requirement (Part 2)" },
  { id: "uVEIQ26jcSo", title: "Form 1040 Filing Status 14 Eligibility Requirements of QSS PART 3 Paid more than 50%", duration: "12:42", category: "filing-status", seoTitle: "Qualifying Surviving Spouse: Paid More Than 50% Cost of Home (Part 3)" },
  { id: "RVkQxClj9Vc", title: "Form 1040 Filing Status 15 Eligibility Requirements of QSS PART 4 Paid more than 50% Example", duration: "3:58", category: "filing-status", seoTitle: "Qualifying Surviving Spouse: Cost of Home Calculation Example (Part 4)" },
  { id: "aEdlkbkSIqA", title: "Form 1040 Filing Status 16 Eligibility Requirements of QSS PART 5 Child's Survivor Benefits Don't", duration: "6:13", category: "filing-status", seoTitle: "Qualifying Surviving Spouse: Child's Survivor Benefits Rules (Part 5)" },
  { id: "mjsyD34uv3k", title: "Form 1040 Filing Status 17 Eligibility Requirements of QSS PART 6 Getting Rent from Family and Q", duration: "13:17", category: "filing-status", seoTitle: "Qualifying Surviving Spouse: Rent from Family Members Rules (Part 6)" },
  { id: "BzJT_vltt78", title: "Form 1040 Filing Status 18 Head of Household PART 1 Decision tree", duration: "8:40", category: "filing-status", seoTitle: "Head of Household Filing Status: Decision Tree Guide (Part 1)" },
  { id: "sXtSAsJ4p4U", title: "Form 1040 Filing Status 19 Head of Household PART 2 NRA fast HOH decision", duration: "5:31", category: "filing-status", seoTitle: "Head of Household for Non-Resident Aliens: Fast Decision Guide (Part 2)" },
  { id: "SRcNDl-aF-g", title: "Tax Side Notes HOH Qualifying Person Time", duration: "4:28", category: "filing-status", seoTitle: "Head of Household: Qualifying Person Time Requirements Explained" },
  { id: "EhbkTXFaMzY", title: "Tax Side Notes HOH Qualifying Person kids and parents", duration: "6:12", category: "filing-status", seoTitle: "Head of Household: Qualifying Person Rules for Kids and Parents" },
  { id: "m-zxR0vdgbM", title: "Tax Side Notes HOH Qualifying Person kids and parents 2", duration: "4:33", category: "filing-status", seoTitle: "Head of Household Qualifying Person: Advanced Rules for Kids and Parents" },
  { id: "eLKtGF-bwVA", title: "Tax Side Notes HOH Qualifying Person kids and parents 3", duration: "3:55", category: "filing-status", seoTitle: "Head of Household Qualifying Person: Special Cases for Kids and Parents" },
  { id: "vaEuMN3CZhw", title: "Form 1040 Filing Status 10 MFS calculation if there is medical bill and AGI change", duration: "9:51", category: "filing-status", seoTitle: "Married Filing Separately: MFS Tax Calculation with Medical Bills and AGI Changes" },
  { id: "zBrYaF_6F8s", title: "Form 1040 Filing Status 9 MFS pros and cons", duration: "5:58", category: "filing-status", seoTitle: "Married Filing Separately: Pros and Cons of MFS Filing Status" },
  { id: "B0OoGzCpPGM", title: "Form 1040 Filing Status 8 MFS Why choose it?", duration: "5:41", category: "filing-status", seoTitle: "Married Filing Separately: When and Why to Choose MFS" },
  { id: "54O3zyhWyxg", title: "Form 1040 Filing Status 7 MFS Intro", duration: "5:15", category: "filing-status", seoTitle: "Married Filing Separately (MFS): Introduction and Overview" },
  { id: "0buk5fOIwWo", title: "Form 1040 Filing Status 6 Same Sex Spouses Filing Status Explained", duration: "4:23", category: "filing-status", seoTitle: "Same-Sex Spouse Filing Status: IRS Rules for Married Couples" },
  { id: "8Fw6t8GrCds", title: "Form 1040 Filing Status 5 What is consider qualify for MFJ and NRA", duration: "4:08", category: "filing-status", seoTitle: "Married Filing Jointly with Non-Resident Alien Spouse: MFJ Qualification Rules" },
  { id: "-kdgL8qB1e0", title: "Form 1040 Filing Status 4 Married time point and spouse pass away", duration: "4:18", category: "filing-status", seoTitle: "Filing Status When Spouse Passes Away: IRS Rules for Year of Death" },
  { id: "7-n-_f3AoEQ", title: "Form 1040 Filing Status 3 MFJ Both Sposes must agree Non income OK", duration: "3:40", category: "filing-status", seoTitle: "Married Filing Jointly: Both Spouses Must Agree (Even with No Income)" },
  { id: "XvSqTX0dAA4", title: "Form 1040 Filing Status 2 Single MFJ MFS", duration: "5:43", category: "filing-status", seoTitle: "Filing Status Comparison: Single vs Married Filing Jointly vs Separately" },
  { id: "4s1KWyCrX4k", title: "Form 1040 Filing Status 1 Basic Info and Tax Preparer Info", duration: "4:32", category: "filing-status", seoTitle: "Form 1040 Basics: Filing Status, Personal Info, and Tax Preparer Section" },

  // Duplicate "US Tax – Ep." versions of filing status (podcast format)
  { id: "hp8KT2wyMTM", title: "US Tax – Ep. 71: Form 1040-Filing Status-11-Qualifying Surviving Spouse", duration: "5:21", category: "filing-status", seoTitle: "Qualifying Surviving Spouse Filing Status: Complete IRS Guide (Ep. 71)" },
  { id: "O0-K4_1pPZI", title: "US Tax – Ep. 72: Form 1040-Filing Status-12-Eligibility Requirements of QSS-PART 1- Did not remarry", duration: "6:05", category: "filing-status", seoTitle: "QSS Eligibility: Not Remarried Requirement Explained (Ep. 72)" },
  { id: "foIYmawMEjo", title: "US Tax – Ep. 73: Form 1040-Filing Status-13-Eligibility Requirements of QSS-PART 2-Entitled to file", duration: "5:33", category: "filing-status", seoTitle: "QSS Eligibility: Entitled to File Requirement (Ep. 73)" },
  { id: "UKiizSGX21E", title: "US Tax – Ep. 74: Form 1040-Filing Status-14-Eligibility Requirements of QSS-PART 3-Paid more than 50%", duration: "12:42", category: "filing-status", seoTitle: "QSS Eligibility: 50% Cost of Home Rule (Ep. 74)" },
  { id: "Je4fVnhWNDI", title: "US Tax – Ep. 75 Form 1040-Filing Status-15-Eligibility Requirements of QSS-PART 4-Paid more than ...", duration: "3:58", category: "filing-status", seoTitle: "QSS Eligibility: Cost of Home Calculation (Ep. 75)" },
  { id: "Bgg8JhZyksc", title: "US Tax – Ep. 76 Form 1040-Filing Status-16-Eligibility Requirements of QSS-PART 5-Child's Survivo...", duration: "6:13", category: "filing-status", seoTitle: "QSS: Child Survivor Benefits Rules (Ep. 76)" },
  { id: "mxpIvXrlYds", title: "US Tax – Ep. 77 Form 1040-Filing Status-17-Eligibility Requirements of QSS-PART 6-Getting Rent fr...", duration: "13:17", category: "filing-status", seoTitle: "QSS: Rent from Family Members (Ep. 77)" },
  { id: "G60C6OEt-g0", title: "US Tax – Ep. 78 Form 1040-Filing Status-18-Head of Household-PART 1-Decision tree", duration: "8:40", category: "filing-status", seoTitle: "Head of Household Decision Tree (Ep. 78)" },
  { id: "hHJGet0pYx0", title: "US Tax – Ep. 79 Form 1040-Filing Status-19-Head of Household-PART 2-NRA fast HOH decision", duration: "5:31", category: "filing-status", seoTitle: "Head of Household for NRA: Quick Decision Guide (Ep. 79)" },
  { id: "vF4t835BRUw", title: "US Tax – Ep. 70: Form 1040-Filing Status-10-MFS calculation if there is medical bill and AGI change", duration: "9:51", category: "filing-status", seoTitle: "MFS Calculation with Medical Bills (Ep. 70)" },
  { id: "yVOlKBfCx5Q", title: "US Tax – Ep. 69: Form 1040-Filing Status-9-MFS pros and cons", duration: "5:58", category: "filing-status", seoTitle: "MFS Pros and Cons (Ep. 69)" },
  { id: "UFY7dr6YkW4", title: "US Tax – Ep. 68:Form 1040-Filing Status-8-MFS Why choose it?", duration: "5:41", category: "filing-status", seoTitle: "When to Choose MFS Filing Status (Ep. 68)" },
  { id: "zqiwnDayiLg", title: "US Tax – Ep. 67:Form 1040-Filing Status-7-MFS Intro", duration: "5:15", category: "filing-status", seoTitle: "MFS Introduction (Ep. 67)" },
  { id: "JCIdOAocQFs", title: "US Tax – Ep. 59: Form 1040-Filing Status-6-Same Sex Spouses Filing Status Explained", duration: "4:23", category: "filing-status", seoTitle: "Same-Sex Spouse Filing Status (Ep. 59)" },
  { id: "R8QpEicRo_g", title: "US Tax – Ep. 58: Form 1040-Filing Status-5-What is consider qualify for MFJ and NRA", duration: "4:08", category: "filing-status", seoTitle: "MFJ with NRA Spouse Qualification (Ep. 58)" },
  { id: "XLGDujMqUtg", title: "US Tax – Ep. 57: Form 1040-Filing Status-4-Married time point and spouse pass away", duration: "4:18", category: "filing-status", seoTitle: "Filing Status After Spouse Death (Ep. 57)" },
  { id: "PV1VOioej5I", title: "US Tax – Ep. 56: Form 1040-Filing Status-3-MFJ Both Sposes must agree-Non income OK", duration: "3:40", category: "filing-status", seoTitle: "MFJ: Both Spouses Must Agree (Ep. 56)" },
  { id: "cltVij2V_fY", title: "US Tax – Ep. 55: Form 1040-Filing Status-2-Single-MFJ-MFS", duration: "5:43", category: "filing-status", seoTitle: "Single vs MFJ vs MFS Comparison (Ep. 55)" },
  { id: "yla0IZuqPiM", title: "US Tax – Ep. 54: Form 1040-Filing Status-1-Basic Info and Tax Preparer Info", duration: "4:32", category: "filing-status", seoTitle: "Form 1040 Basics and Tax Preparer Info (Ep. 54)" },

  // === Form 8857 Innocent Spouse Relief ===
  { id: "QnqTWlGElDo", title: "Form 8857 5 IRC §6015f Equitable relief PART 2", duration: "7:32", category: "form-8857", seoTitle: "Form 8857: IRC Section 6015(f) Equitable Relief Explained (Part 2)" },
  { id: "7dwvy2_Irgg", title: "Form 8857 5 IRC §6015fEquitable relief PART 2", duration: "7:32", category: "form-8857", seoTitle: "IRC 6015(f) Equitable Relief for Innocent Spouse (Part 2)" },
  { id: "BglTxKvdvAI", title: "Form 8857 4 IRC §6015f Equitable relief PART 1", duration: "6:18", category: "form-8857", seoTitle: "Form 8857: IRC Section 6015(f) Equitable Relief Explained (Part 1)" },
  { id: "HJiRFiiJHWg", title: "Form 8857 3 When you may qualify PART 2", duration: "5:44", category: "form-8857", seoTitle: "Form 8857: When You May Qualify for Innocent Spouse Relief (Part 2)" },
  { id: "g0JGdss6Y9E", title: "Form 8857 2 When you may qualify PART 1", duration: "4:56", category: "form-8857", seoTitle: "Form 8857: When You May Qualify for Innocent Spouse Relief (Part 1)" },
  { id: "pID466Sg7qQ", title: "Form 8857 1 Intro of Innocent Spouse Relief", duration: "3:28", category: "form-8857", seoTitle: "Form 8857 Introduction: What Is Innocent Spouse Relief?" },
  { id: "caUBVSIJj04", title: "US Tax – Ep. 66:Form 8857-5-IRC §6015(f) Equitable relief PART 2", duration: "7:32", category: "form-8857", seoTitle: "IRC 6015(f) Equitable Relief (Ep. 66)" },
  { id: "YPbhVF24h08", title: "US Tax – Ep. 65:Form 8857-4-IRC §6015(f) Equitable relief PART 1", duration: "6:18", category: "form-8857", seoTitle: "IRC 6015(f) Equitable Relief Part 1 (Ep. 65)" },
  { id: "0cSg8XZGzSc", title: "US Tax – Ep. 64:Form 8857-3-When you may qualify-PART 2", duration: "5:44", category: "form-8857", seoTitle: "Innocent Spouse Qualification Part 2 (Ep. 64)" },
  { id: "41rSXbLwHm4", title: "US Tax – Ep. 63:Form 8857-2-When you may qualify-PART 1", duration: "4:56", category: "form-8857", seoTitle: "Innocent Spouse Qualification Part 1 (Ep. 63)" },

  // === Form 8379 Injured Spouse ===
  { id: "4nZ_KVEi5M8", title: "US Tax – Ep. 62:Form 8379-3-Allocation Between Spouses of Items on the Joint Return", duration: "6:45", category: "form-8379", seoTitle: "Form 8379: Allocation Between Spouses on Joint Return (Ep. 62)" },
  { id: "7GSwX37dLdU", title: "US Tax – Ep. 61:Form 8379-2-Who qualifies as the Injured Spouse", duration: "5:33", category: "form-8379", seoTitle: "Who Qualifies as Injured Spouse? Form 8379 Guide (Ep. 61)" },
  { id: "YxHrViFSqZw", title: "US Tax – Ep. 60:Form 8379-1-Injured Spouse Allocation", duration: "4:18", category: "form-8379", seoTitle: "Injured Spouse Allocation: Form 8379 Introduction (Ep. 60)" },
  { id: "R3uzuZMDqJQ", title: "Form 8379 3 Allocation Between Spouses of Items on the Joint Return", duration: "6:45", category: "form-8379", seoTitle: "Form 8379: How to Allocate Items Between Spouses on Joint Return" },
  { id: "eIV4B1RJ_hY", title: "Form 8379 2 Who qualifies as the Injured Spouse", duration: "5:33", category: "form-8379", seoTitle: "Form 8379: Who Qualifies as the Injured Spouse?" },
  { id: "nX4MsKvPN7M", title: "Form 8379 1 Injured Spouse Allocation", duration: "4:18", category: "form-8379", seoTitle: "Form 8379: Injured Spouse Allocation Introduction" },

  // === Foreign Income Reporting ===
  { id: "g8waudWi1KI", title: "US Tax – Ep. 37: Tax Side Notes-Foreign Income-2-Filing Obligation Reminder", duration: "3:22", category: "foreign-income", seoTitle: "Foreign Income Filing Obligations: What U.S. Taxpayers Must Report (Ep. 37)" },
  { id: "Jgz51KUYkMY", title: "US Tax – Ep. 36: Tax Side Notes-Foreign Income-1-Overview", duration: "4:15", category: "foreign-income", seoTitle: "Foreign Income Tax Overview: IRS Rules for U.S. Taxpayers (Ep. 36)" },
  { id: "JL8WDS9Q8Ss", title: "US Tax – Ep. 38: Tax Side Notes-Foreign Income-3-FBAR FinCEN Report 114", duration: "5:42", category: "foreign-income", seoTitle: "FBAR Filing: FinCEN Report 114 for Foreign Bank Accounts (Ep. 38)" },
  { id: "xvd_H9_oZ5o", title: "US Tax – Ep. 39: Tax Side Notes-Foreign Income-4-Form 8938 Intro", duration: "4:55", category: "foreign-income", seoTitle: "Form 8938 FATCA: Foreign Financial Assets Reporting Introduction (Ep. 39)" },
  { id: "bMkvXZrn3wM", title: "US Tax – Ep. 40: Tax Side Notes-Foreign Income-5-Form 8938 Detail", duration: "6:30", category: "foreign-income", seoTitle: "Form 8938 FATCA: Detailed Filing Requirements and Thresholds (Ep. 40)" },
  { id: "Sn1rRgzLcY0", title: "US Tax – Ep. 41: Tax Side Notes-Foreign Income-6-Form 5471", duration: "5:18", category: "foreign-income", seoTitle: "Form 5471: Reporting Foreign Corporation Ownership to the IRS (Ep. 41)" },
  { id: "0Ko2lu11OUg", title: "US Tax – Ep. 42: Tax Side Notes-Foreign Income-7-Form 3520", duration: "4:44", category: "foreign-income", seoTitle: "Form 3520: Foreign Trust and Gift Reporting Requirements (Ep. 42)" },
  { id: "DMOQvEeOnk8", title: "Tax Side Notes Foreign Income 1 Overview", duration: "4:15", category: "foreign-income", seoTitle: "Foreign Income Overview: U.S. Tax Rules for International Taxpayers" },
  { id: "Nagb2CRDSvU", title: "Tax Side Notes Foreign Income 2 Filing Obligation Reminder", duration: "3:22", category: "foreign-income", seoTitle: "Foreign Income Filing Obligations Reminder for U.S. Taxpayers" },
  { id: "A7bxC-NKCL4", title: "Tax Side Notes Foreign Income 3 FBAR FinCEN Report 114", duration: "5:42", category: "foreign-income", seoTitle: "FBAR Guide: FinCEN Report 114 for Foreign Bank Account Reporting" },
  { id: "GvKKI9zsR20", title: "Tax Side Notes Foreign Income 4 Form 8938 Intro", duration: "4:55", category: "foreign-income", seoTitle: "Form 8938 Introduction: FATCA Foreign Financial Assets Reporting" },
  { id: "hVk7TovM3ZM", title: "Tax Side Notes Foreign Income 5 Form 8938 Detail", duration: "6:30", category: "foreign-income", seoTitle: "Form 8938 Detailed Guide: Thresholds and Filing Requirements" },
  { id: "rr01oIySnFQ", title: "Tax Side Notes Foreign Income 6 Form 5471", duration: "5:18", category: "foreign-income", seoTitle: "Form 5471: Information Return for Foreign Corporation Ownership" },
  { id: "894FQXglQXQ", title: "Tax Side Notes Foreign Income 7 Form 3520", duration: "4:44", category: "foreign-income", seoTitle: "Form 3520: Foreign Trust and Gift Reporting Guide" },

  // === Form 8865 Foreign Partnerships ===
  { id: "1pb5EVOZZXw", title: "US Tax – Ep. 43: Tax Side Notes-Foreign Income-8-Form 8865 Intro", duration: "5:06", category: "form-8865", seoTitle: "Form 8865 Introduction: Foreign Partnership Reporting (Ep. 43)" },
  { id: "DVRe7DTgOpA", title: "US Tax – Ep. 44: Tax Side Notes-Foreign Income-9-Form 8865 Category 1", duration: "4:32", category: "form-8865", seoTitle: "Form 8865 Category 1 Filers: Who Must Report? (Ep. 44)" },
  { id: "7mwXtJj7T1w", title: "US Tax – Ep. 45: Tax Side Notes-Foreign Income-10-Form 8865 Category 2", duration: "4:18", category: "form-8865", seoTitle: "Form 8865 Category 2 Filers Explained (Ep. 45)" },
  { id: "zJttw2eYKeM", title: "US Tax – Ep. 46: Tax Side Notes-Foreign Income-11-Form 8865 Category 3", duration: "3:55", category: "form-8865", seoTitle: "Form 8865 Category 3 Filers Explained (Ep. 46)" },
  { id: "QRi9Oi65CPU", title: "US Tax – Ep. 47: Tax Side Notes-Foreign Income-12-Form 8865 Category 4", duration: "4:08", category: "form-8865", seoTitle: "Form 8865 Category 4 Filers Explained (Ep. 47)" },
  { id: "i2-TKTeSLZM", title: "Tax Side Notes Foreign Income 8 Form 8865 Intro", duration: "5:06", category: "form-8865", seoTitle: "Form 8865 Introduction: Foreign Partnership Reporting Requirements" },
  { id: "mRspJOLEeGc", title: "Tax Side Notes Foreign Income 9 Form 8865 Category 1", duration: "4:32", category: "form-8865", seoTitle: "Form 8865 Category 1: Control of Foreign Partnership" },
  { id: "ZO0Y0xH8Ut0", title: "Tax Side Notes Foreign Income 10 Form 8865 Category 2", duration: "4:18", category: "form-8865", seoTitle: "Form 8865 Category 2: Acquisitions and Dispositions" },
  { id: "yWjWH_oy4HM", title: "Tax Side Notes Foreign Income 11 Form 8865 Category 3", duration: "3:55", category: "form-8865", seoTitle: "Form 8865 Category 3: Contributions to Foreign Partnerships" },
  { id: "VB5esrLsUCo", title: "Tax Side Notes Foreign Income 12 Form 8865 Category 4", duration: "4:08", category: "form-8865", seoTitle: "Form 8865 Category 4: Large Foreign Partnership Interests" },

  // === Tax Return Due Dates ===
  { id: "RiSquXkh6cs", title: "US Tax – Ep. 50: Tax Return Due Dates-1-General Rule", duration: "3:44", category: "due-dates", seoTitle: "Tax Return Due Dates: General Rules for Individual and Business Filers (Ep. 50)" },
  { id: "3HwGG-HwPWg", title: "US Tax – Ep. 51: Tax Return Due Dates-2-Decedent or Estate Returns", duration: "4:12", category: "due-dates", seoTitle: "Tax Return Due Dates for Decedent and Estate Returns (Ep. 51)" },
  { id: "UyzwHycVzZI", title: "US Tax – Ep. 52: Tax Return Due Dates-3-Automatic 2-Month Extension", duration: "3:28", category: "due-dates", seoTitle: "Automatic 2-Month Tax Extension for U.S. Citizens Abroad (Ep. 52)" },
  { id: "_dY7VRfhFyE", title: "US Tax – Ep. 53: Tax Return Due Dates-4-When to Find a Tax Pro", duration: "4:55", category: "due-dates", seoTitle: "When to Find a Tax Professional: Filing Deadline Tips (Ep. 53)" },
  { id: "8cNAG-PZCTA", title: "Tax Return Due Dates 1 General Rule", duration: "3:44", category: "due-dates", seoTitle: "Tax Return Due Dates: General Filing Deadline Rules" },
  { id: "L5bz7gz78I4", title: "Tax Return Due Dates 2 Decedent or Estate Returns", duration: "4:12", category: "due-dates", seoTitle: "Due Dates for Decedent and Estate Tax Returns" },
  { id: "C8ev6qqr0m4", title: "Tax Return Due Dates 3 Automatic 2 Month Extension", duration: "3:28", category: "due-dates", seoTitle: "Automatic 2-Month Tax Extension: Who Qualifies?" },
  { id: "7vH4wK9yhj8", title: "Tax Return Due Dates 4 When to Find a Tax Pro", duration: "4:55", category: "due-dates", seoTitle: "When to Hire a Tax Professional Before the Deadline" },

  // === Reporting Changes ===
  { id: "4zMhWN6Fjf8", title: "US Tax – Ep. 49: Reporting Changes-2-Income-Adjustment-Deductions", duration: "5:22", category: "reporting-changes", seoTitle: "Reporting Tax Changes: Income, Adjustments, and Deductions (Ep. 49)" },
  { id: "CFV0wa_inQE", title: "US Tax – Ep. 48: Reporting Changes-1-Life changes so does your Tax", duration: "4:38", category: "reporting-changes", seoTitle: "Life Changes That Affect Your Tax Return (Ep. 48)" },
  { id: "PwHJiAKD35k", title: "Reporting Changes 2 Income Adjustment Deductions", duration: "5:22", category: "reporting-changes", seoTitle: "Reporting Changes: Income, Adjustments, and Deduction Updates" },
  { id: "jK0MVxzZ6yE", title: "Reporting Changes 1 Life changes so does your Tax", duration: "4:38", category: "reporting-changes", seoTitle: "Life Changes and Your Tax Return: What to Report" },

  // === Tax Credits ===
  { id: "Iwmm93kDgyw", title: "US Tax – Ep. 21: Tax Side Notes-Foreign Tax Credit-1-Intro", duration: "3:42", category: "tax-credits", seoTitle: "Foreign Tax Credit Introduction: How to Avoid Double Taxation (Ep. 21)" },
  { id: "gRro7gXmNoc", title: "US Tax – Ep. 22: Tax Side Notes-Foreign Tax Credit-2-Qualified Foreign Taxes", duration: "4:28", category: "tax-credits", seoTitle: "Qualified Foreign Taxes: What Counts for the Foreign Tax Credit (Ep. 22)" },
  { id: "KhyWE8SL2tg", title: "US Tax – Ep. 23: Tax Side Notes-Foreign Tax Credit-3-FTC Allowed Formula", duration: "5:15", category: "tax-credits", seoTitle: "Foreign Tax Credit Calculation: FTC Allowed Formula Explained (Ep. 23)" },
  { id: "vzwr7aVLRP0", title: "US Tax – Ep. 24: Tax Side Notes-General Business Credit-1-Intro", duration: "3:55", category: "tax-credits", seoTitle: "General Business Credit Introduction: Form 3800 Overview (Ep. 24)" },
  { id: "C5XtO8bfOP4", title: "US Tax – Ep. 25: Tax Side Notes-General Business Credit-2-Form 3800", duration: "4:42", category: "tax-credits", seoTitle: "Form 3800 General Business Credit: How It Works (Ep. 25)" },
  { id: "CPY-CGrrh5o", title: "US Tax – Ep. 26: Tax Side Notes-General Business Credit-3-Form 3800 How it works", duration: "5:33", category: "tax-credits", seoTitle: "Form 3800 Mechanics: How the General Business Credit Works (Ep. 26)" },
  { id: "3RbtuJQyq8Q", title: "US Tax – Ep. 27: Tax Side Notes-General Business Credit-4-Form 3800 Simple Calculation", duration: "6:08", category: "tax-credits", seoTitle: "Form 3800 Calculation Example: General Business Credit Step by Step (Ep. 27)" },
  { id: "JJaNK4jbE_A", title: "Tax Side Notes Foreign Tax Credit 1 Intro", duration: "3:42", category: "tax-credits", seoTitle: "Foreign Tax Credit: Introduction to Avoiding Double Taxation" },
  { id: "4BzUOcGqBM4", title: "Tax Side Notes Foreign Tax Credit 2 Qualified Foreign Taxes", duration: "4:28", category: "tax-credits", seoTitle: "Which Foreign Taxes Qualify for the Tax Credit?" },
  { id: "U-DH9JqaBtQ", title: "Tax Side Notes Foreign Tax Credit 3 FTC Allowed Formula", duration: "5:15", category: "tax-credits", seoTitle: "FTC Allowed Formula: How to Calculate Your Foreign Tax Credit" },
  { id: "JbvxzRfvMls", title: "Tax Side Notes General Business Credit 1 Intro", duration: "3:55", category: "tax-credits", seoTitle: "General Business Credit Introduction and Overview" },
  { id: "rrcNF3nMJh8", title: "Tax Side Notes General Business Credit 2 Form 3800", duration: "4:42", category: "tax-credits", seoTitle: "Form 3800: Filing the General Business Credit" },
  { id: "-r4koiDDk04", title: "Tax Side Notes General Business Credit 3 Form 3800 How it works", duration: "5:33", category: "tax-credits", seoTitle: "How the General Business Credit Works: Form 3800 Mechanics" },
  { id: "EtnfbTZtqm4", title: "Tax Side Notes General Business Credit 4 Form 3800 Simple Calculation", duration: "6:08", category: "tax-credits", seoTitle: "General Business Credit Calculation Example on Form 3800" },

  // === AMT ===
  { id: "_uqhoIAHUZI", title: "US Tax – Ep. 15: Tax Side Notes-What is AMT?", duration: "4:22", category: "amt", seoTitle: "What Is the Alternative Minimum Tax (AMT)? Complete Explanation (Ep. 15)" },
  { id: "BNlSp7jLNzs", title: "US Tax – Ep. 16: Tax Side Notes-Tax Side Notes-Why AMT Exists?", duration: "3:55", category: "amt", seoTitle: "Why Does the Alternative Minimum Tax Exist? History and Purpose (Ep. 16)" },
  { id: "vExMkaLN-8Q", title: "US Tax – Ep. 17: Tax Side Notes-Common AMT Triggers：ISO", duration: "5:18", category: "amt", seoTitle: "Common AMT Triggers: Incentive Stock Options (ISO) Explained (Ep. 17)" },
  { id: "r20WDt6BOkQ", title: "US Tax – Ep. 18: Tax Side Notes-Common AMT Triggers-2-AD", duration: "4:44", category: "amt", seoTitle: "Common AMT Triggers: Accelerated Depreciation Explained (Ep. 18)" },
  { id: "oCEl2BKGD3M", title: "US Tax – Ep. 19: Tax Side Notes-Common AMT Triggers-3-PABs", duration: "4:08", category: "amt", seoTitle: "Common AMT Triggers: Private Activity Bonds (PABs) Explained (Ep. 19)" },
  { id: "MFcKKnbYP7U", title: "US Tax – Ep. 20: Items Affecting Future Returns-2-AMT Credit", duration: "5:33", category: "amt", seoTitle: "AMT Credit: How to Recover Your Alternative Minimum Tax (Ep. 20)" },
  { id: "lssIRpBIB0A", title: "Tax Side Notes What is AMT?", duration: "4:22", category: "amt", seoTitle: "Alternative Minimum Tax (AMT) Explained Simply" },
  { id: "U0CToPnqVHw", title: "Tax Side Notes Why AMT Exists?", duration: "3:55", category: "amt", seoTitle: "Why the Alternative Minimum Tax Exists: A Brief History" },
  { id: "9Crzq5QcHhw", title: "Tax Side Notes Common AMT Triggers：ISO", duration: "5:18", category: "amt", seoTitle: "ISO and AMT: How Incentive Stock Options Trigger AMT" },
  { id: "BIjHa_AfEPc", title: "Tax Side Notes Common AMT Triggers 2 AD", duration: "4:44", category: "amt", seoTitle: "Accelerated Depreciation and AMT: Common AMT Trigger" },
  { id: "LkEbHjjyDw4", title: "Tax Side Notes Common AMT Triggers 3 PABs", duration: "4:08", category: "amt", seoTitle: "Private Activity Bonds and AMT: What Investors Need to Know" },
  { id: "bTLwxszU-rA", title: "Items Affecting Future Returns 2 AMT Credit", duration: "5:33", category: "amt", seoTitle: "AMT Credit Carryforward: Recovering Alternative Minimum Tax Paid" },

  // === Deductions & Section 179 ===
  { id: "Vr7kQ3w2AoI", title: "US Tax – Ep. 28: Tax Side Notes- Section 179 Deduction-1-What is Section 179?", duration: "4:55", category: "deductions", seoTitle: "Section 179 Deduction: What Is It and How Does It Work? (Ep. 28)" },
  { id: "pKdqrmu4L1c", title: "US Tax – Ep. 29: Tax Side Notes- Section 179 Deduction-2-Limits on Section 179?", duration: "5:22", category: "deductions", seoTitle: "Section 179 Deduction Limits: Maximum Deduction and Phase-Out Rules (Ep. 29)" },
  { id: "_RIsqQ2ONm0", title: "US Tax – Ep. 30: Tax Side Notes- Section 179 Deduction-3-The Carryover Rule", duration: "4:08", category: "deductions", seoTitle: "Section 179 Carryover Rule: What Happens to Unused Deductions (Ep. 30)" },
  { id: "_vYzscn9lQQ", title: "Tax Side Notes  Section 179 Deduction 1 What is Section 179?", duration: "4:55", category: "deductions", seoTitle: "What Is Section 179? Business Equipment Deduction Explained" },
  { id: "98uV4QYlzx8", title: "Tax Side Notes  Section 179 Deduction 2 Limits on Section 179?", duration: "5:22", category: "deductions", seoTitle: "Section 179 Limits: Annual Deduction Caps and Phase-Out Thresholds" },
  { id: "RL9heF5LcdQ", title: "Tax Side Notes  Section 179 Deduction 3 The Carryover Rule", duration: "4:08", category: "deductions", seoTitle: "Section 179 Carryover: Rules for Unused Deduction Amounts" },

  // === QBI ===
  { id: "PjVLaIf0xng", title: "US Tax – Ep. 31: Tax Side Notes-Negative QBI Carryover-1-What is pass‑through entity", duration: "4:42", category: "qbi", seoTitle: "What Is a Pass-Through Entity? QBI Deduction Basics (Ep. 31)" },
  { id: "MlX8bUh3Gr0", title: "US Tax – Ep. 32: Tax Side Notes-Negative QBI Carryover-2-The implications", duration: "5:15", category: "qbi", seoTitle: "Negative QBI Carryover: Tax Implications Explained (Ep. 32)" },
  { id: "j1QdMmWks_U", title: "US Tax – Ep. 33: Tax Side Notes-Negative QBI Carryover-3-QBI-REIT-PTP", duration: "4:55", category: "qbi", seoTitle: "QBI Deduction for REIT and PTP Income: Negative Carryover Rules (Ep. 33)" },
  { id: "B02_nwfOdUg", title: "Tax Side Notes Negative QBI Carryover 1 What is pass‑through entity", duration: "4:42", category: "qbi", seoTitle: "Pass-Through Entity Basics: Understanding QBI Deduction" },
  { id: "-HuL1m2yf-M", title: "Tax Side Notes Negative QBI Carryover 2 The implications", duration: "5:15", category: "qbi", seoTitle: "Negative QBI Carryover: What It Means for Your Tax Return" },
  { id: "MUkY9Bs6vqg", title: "Tax Side Notes Negative QBI Carryover 3 QBI REIT PTP", duration: "4:55", category: "qbi", seoTitle: "QBI for REIT and PTP: Carryover Rules and Calculation" },

  // === Installment Sales ===
  { id: "qNdaJDudoIU", title: "US Tax – Ep. 34: Tax Side Notes-Installment Sales-1-Intro of Form 6252", duration: "4:18", category: "installment-sales", seoTitle: "Form 6252 Introduction: Installment Sale Reporting (Ep. 34)" },
  { id: "6OyysgJm1W8", title: "US Tax – Ep. 35: Tax Side Notes-Installment Sales-2-Calculation of Form 6252", duration: "5:44", category: "installment-sales", seoTitle: "Form 6252 Calculation: How to Report Installment Sales (Ep. 35)" },
  { id: "JPivbSZDlJo", title: "Tax Side Notes Installment Sales 1 Intro of Form 6252", duration: "4:18", category: "installment-sales", seoTitle: "Installment Sales Introduction: Form 6252 Basics" },
  { id: "HWjeOItONiI", title: "Tax Side Notes Installment Sales 2 Calculation of Form 6252", duration: "5:44", category: "installment-sales", seoTitle: "Installment Sale Calculation: Step-by-Step Form 6252 Guide" },

  // === CP2000 ===
  { id: "JhV7FEra3CM", title: "US Tax – Ep. 5: What is CP2000 Notice?", duration: "7:18", category: "cp2000", seoTitle: "What Is a CP2000 Notice? IRS Underreported Income Letter Explained (Ep. 5)" },
  { id: "o5cOab95_Ro", title: "US Tax – Ep. 6: What to do after receive CP2000 Notice?", duration: "1:48", category: "cp2000", seoTitle: "Received a CP2000 Notice? Here's What to Do Next (Ep. 6)" },
  { id: "ybeDft0lN1o", title: "US Tax – Ep. 7: Case Scenario of Receiving a CP2000", duration: "10:10", category: "cp2000", seoTitle: "CP2000 Notice Case Study: Real-World Response Scenario (Ep. 7)" },
  { id: "V0_xWq_N38s", title: "Tax Side Notes What is CP2000 Notice?", duration: "7:18", category: "cp2000", seoTitle: "CP2000 Notice Explained: Why the IRS Sends It and What It Means" },
  { id: "Rr9K14-V8Dg", title: "Tax Side Notes What to do after receive CP2000 Notice?", duration: "1:48", category: "cp2000", seoTitle: "Responding to a CP2000 Notice: Step-by-Step Guide" },
  { id: "xzlSVi-v-xI", title: "Tax Side Notes Worst Case Scenario of Receiving a CP2000", duration: "10:10", category: "cp2000", seoTitle: "Worst-Case CP2000 Scenario: What Happens If You Ignore It" },

  // === Tax Basics ===
  { id: "LzEHmNYKKxo", title: "US Tax – Ep. 1: Why Filing Requirements Matter", duration: "1:39", category: "tax-basics", seoTitle: "Why Tax Filing Requirements Matter: Every U.S. Taxpayer Should Know (Ep. 1)" },
  { id: "eTqGC7Gqatc", title: "US Tax – Ep. 2: Standard Deduction vs Itemised deduction", duration: "1:49", category: "tax-basics", seoTitle: "Standard Deduction vs Itemized Deduction: Which Should You Choose? (Ep. 2)" },
  { id: "QMOH7-2CFpA", title: "US Tax – Ep. 3: Tax Side Notes Standard Deduction vs Itemised deduction Catch 1", duration: "7:17", category: "tax-basics", seoTitle: "Standard vs Itemized Deduction Gotchas Part 1 (Ep. 3)" },
  { id: "XUHxai11v9k", title: "US Tax – Ep. 4: Tax Side Notes Standard Deduction vs Itemised deduction Catch 2", duration: "5:43", category: "tax-basics", seoTitle: "Standard vs Itemized Deduction Gotchas Part 2 (Ep. 4)" },
  { id: "pbYf9Ul8-5Y", title: "US Tax – Ep. 8: Personal Information Preparation", duration: "14:15", category: "tax-basics", seoTitle: "Personal Information Preparation for Your Tax Return (Ep. 8)" },
  { id: "iKZWfUJi3I0", title: "US Tax – Ep. 9: Key IRS Forms & Due Dates", duration: "8:07", category: "tax-basics", seoTitle: "Key IRS Tax Forms and Due Dates Every Taxpayer Must Know (Ep. 9)" },
  { id: "h9Tfda_oJYA", title: "US Tax – Ep. 10: Tax return versus Information return", duration: "8:12", category: "tax-basics", seoTitle: "Tax Return vs Information Return: What's the Difference? (Ep. 10)" },
  { id: "AwByYngk7U0", title: "US Tax – Ep. 11: W-2 and W-2G/ From 1099s", duration: "4:43", category: "tax-basics", seoTitle: "Understanding W-2, W-2G, and 1099 Forms: Income Reporting Basics (Ep. 11)" },
  { id: "uY3ezn5ImNM", title: "US Tax – Ep. 12: Business vs. Personal? The Grey Area of Tax Deductions Explained", duration: "5:28", category: "tax-basics", seoTitle: "Business vs Personal Expenses: The Grey Area of Tax Deductions (Ep. 12)" },
  { id: "IJ11h3Xu7XI", title: "US Tax – Ep. 13: A U.S. start-up with only one car, used both personally and for company business...", duration: "6:42", category: "tax-basics", seoTitle: "Mixed-Use Vehicle Deduction: One Car for Business and Personal Use (Ep. 13)" },
  { id: "Weg3GohiXVU", title: "US Tax – Ep. 14: Stop Overpaying: Tax Carryovers You're Missing + Filing Checklist", duration: "8:55", category: "tax-basics", seoTitle: "Stop Overpaying Taxes: Carryovers You're Missing and Filing Checklist (Ep. 14)" },
  { id: "ntNRtoZziZc", title: "How to Search and Download the lastest IRS Publication Forms and Instructions", duration: "3:15", category: "tax-basics", seoTitle: "How to Find and Download IRS Forms, Publications, and Instructions" },
  { id: "PD-nS-l05Pc", title: "Why Filing Requirements Matter", duration: "1:39", category: "tax-basics", seoTitle: "Why Tax Filing Requirements Matter for Every U.S. Taxpayer" },
  { id: "KyCHKINVsus", title: "Standard Deduction vs Itemised deduction", duration: "1:49", category: "tax-basics", seoTitle: "Standard Deduction vs Itemized Deduction: Quick Comparison" },
  { id: "zYLNnI-Jmvg", title: "Tax Side Notes Standard Deduction vs Itemised deduction Catch 1", duration: "7:17", category: "tax-basics", seoTitle: "Standard vs Itemized Deduction: Important Catches Part 1" },
  { id: "xLSUhiHwXyk", title: "Tax Side Notes Standard Deduction vs Itemised deduction Catch 2", duration: "5:43", category: "tax-basics", seoTitle: "Standard vs Itemized Deduction: Important Catches Part 2" },
  { id: "aWwN_dHF0hY", title: "Stop Overpaying: Tax Carryovers You're Missing + Filing Checklist", duration: "8:55", category: "tax-basics", seoTitle: "Tax Carryovers You're Missing: Stop Overpaying on Your Return" },
  { id: "Xlf0C1wacFs", title: "A U.S. start-up with only one car, used both personally and for company business – what to do?", duration: "6:42", category: "tax-basics", seoTitle: "Startup with One Car: Business and Personal Use Tax Rules" },
  { id: "TuwNWYufMsg", title: "Business vs. Personal? The Grey Area of Tax Deductions Explained", duration: "5:28", category: "tax-basics", seoTitle: "Business vs Personal Expenses: Tax Deduction Grey Areas Explained" },
  { id: "udM3HFuK0OI", title: "W-2 and W-2G/ From 1099s", duration: "4:43", category: "tax-basics", seoTitle: "W-2, W-2G, and 1099: Understanding Your Income Forms" },
  { id: "PutTqrwx49g", title: "Tax return versus Information return", duration: "8:12", category: "tax-basics", seoTitle: "Tax Return vs Information Return: Key Differences Explained" },
  { id: "SpcsxHZg6RY", title: "Key IRS Forms & Due Dates", duration: "8:07", category: "tax-basics", seoTitle: "Essential IRS Forms and Due Dates Quick Reference Guide" },
  { id: "vHjGZf1aTA0", title: "Personal Information Preparation for Your Tax Return", duration: "14:15", category: "tax-basics", seoTitle: "Preparing Personal Information for Your Tax Return: Complete Checklist" },

  // === Form 5472 Name Entry Series (Videos 14–21) ===
  { id: "Uzld6FnNN9E", title: "Are You a 'Non-U.S. Person'? IRS Definition for Form 5472 Eligibility", duration: "2:10", category: "form-5472", seoTitle: "Are You a Non-U.S. Person? IRS Definition for Form 5472 Eligibility" },
  { id: "8n539PqxyhA", title: "Does Where You Live Determine Your U.S. Tax Status? (Form 5472 Filing Rules)", duration: "2:15", category: "form-5472", seoTitle: "Does Where You Live Determine Your U.S. Tax Status? Form 5472 Filing Rules" },
  { id: "kmJURyoxfOY", title: "Dual Citizenship & U.S. LLC Tax Filing — Are You a U.S. Person? (Form 5472)", duration: "2:20", category: "form-5472", seoTitle: "Dual Citizenship and U.S. LLC Tax Filing: Are You a U.S. Person? (Form 5472)" },
  { id: "aC2aVyaq3y8", title: "What Is the 'Name' Field on Form 1120? How to Enter Your LLC Name Correctly", duration: "1:28", category: "form-1120", seoTitle: "What Is the Name Field on Form 1120? How to Enter Your LLC Name Correctly" },
  { id: "vAmv4SBj5S8", title: "How to Enter Your LLC Name on IRS Forms — Exact Match Rules (Form 1120 & 5472)", duration: "2:25", category: "form-1120", seoTitle: "How to Enter Your LLC Name on IRS Forms: Exact Match Rules (Form 1120 and 5472)" },
  { id: "5zhWIWi2BuM", title: "Does Capitalization Matter on IRS Forms? ALL CAPS vs Lowercase (Form 1120 & 5472)", duration: "2:31", category: "form-1120", seoTitle: "Does Capitalization Matter on IRS Forms? ALL CAPS vs Lowercase (Form 1120 and 5472)" },
  { id: "72Cv15b_q1M", title: "Half-Width vs Full-Width Characters on IRS Forms — Use ASCII Only (Form 1120 & 5472)", duration: "2:31", category: "form-1120", seoTitle: "Half-Width vs Full-Width Characters on IRS Forms: Use ASCII Only (Form 1120 and 5472)" },
  { id: "Xg6jiceYJNU", title: "Spacing & Punctuation on IRS Forms — Do Periods, Commas & Spaces Matter? (Form 1120 & 5472)", duration: "3:16", category: "form-1120", seoTitle: "Spacing and Punctuation on IRS Forms: Do Periods Commas and Spaces Matter? (Form 1120 and 5472)" },
  { id: "PgmaKf-tHJY", title: "How to Enter Your LLC Name on Form 1120 — Step-by-Step Demo", duration: "1:50", category: "form-1120", seoTitle: "How to Enter Your LLC Name on Form 1120 Step-by-Step Demo" },
  { id: "xO1oO7GJK4M", title: "What Is the EIN Field on Form 1120? Employer Identification Number Explained", duration: "1:33", category: "form-1120", seoTitle: "What Is the EIN Field on Form 1120? Employer Identification Number Explained" },
  { id: "l1LDAtkyv1E", title: "Where to Find Your LLC's EIN — CP 575 Confirmation Letter Explained", duration: "1:42", category: "form-1120", seoTitle: "Where to Find Your LLC EIN: CP 575 Confirmation Letter Explained" },
  { id: "KwkCCLveIWg", title: "Can the IRS Reissue a CP 575 Letter? No — Here's What to Do Instead", duration: "1:23", category: "form-1120", seoTitle: "Can the IRS Reissue a CP 575 Letter? What to Do If You Lost It" },
  { id: "MBYYGa3ZDL4", title: "How to Request a 147C Letter from the IRS — EIN Verification by Phone", duration: "3:11", category: "form-1120", seoTitle: "How to Request a 147C Letter from the IRS: EIN Verification by Phone" },
  { id: "lj23OV2rLOQ", title: "Where to Find Your LLC's EIN — CP 575, 147C Letter & SS-4 Explained", duration: "2:53", category: "form-1120", seoTitle: "Where to Find Your LLC EIN: CP 575 147C Letter and SS-4 Explained" },
  { id: "Lp9zTTHkhsI", title: "How to Enter Your EIN on Form 1120 — Step-by-Step Demo", duration: "1:09", category: "form-1120", seoTitle: "How to Enter Your EIN on Form 1120 Step-by-Step Demo" },
  { id: "KUz3PPvLGC4", title: "Which U.S. State Was Your LLC Formed In? (Form 1120 Filing)", duration: "1:49", category: "form-1120", seoTitle: "Which U.S. State Was Your LLC Formed In? Form 1120 Filing Requirements" },
  { id: "fg16OAikF5E", title: "What Address Goes on Form 1120? Principal Office vs Mailing Address", duration: "4:33", category: "form-1120", seoTitle: "What Address Goes on Form 1120? Principal Office vs Mailing Address Explained" },
  { id: "rZ_aiVYTOq0", title: "Can You Use a P.O. Box on Form 1120? (IRS Address Rules)", duration: "2:25", category: "form-1120", seoTitle: "Can You Use a P.O. Box on Form 1120? IRS Address Rules for LLCs" },

  // === Partnership Tax & Entity Types ===
  { id: "KVUefpbXtnk", title: "Introduction to U.S. Partnership Taxation — How Income Flows Through to Partners (Form 1065)", duration: "4:45", category: "entity-types", seoTitle: "Introduction to U.S. Partnership Taxation: How Income Flows Through to Partners (Form 1065)" },
  { id: "T53b4sKe7c4", title: "Form 8832 Entity Classification Election — Part 1 (What It Is & Who Uses It)", duration: "5:56", category: "entity-types", seoTitle: "Form 8832 Entity Classification Election Part 1: What It Is and Who Uses It" },
  { id: "4bWVTXyzqGg", title: "Form 8832 Entity Classification Election — Complete Guide (Part 5)", duration: "7:35", category: "entity-types", seoTitle: "Form 8832 Entity Classification Election Complete Guide Part 5" },
  { id: "hFuL-DLbiHg", title: "Introduction to LLCs — What Is a Limited Liability Company?", duration: "3:38", category: "entity-types", seoTitle: "Introduction to LLCs: What Is a Limited Liability Company? US Tax Explained" },
  { id: "U6OkFwW12lM", title: "C Corp vs S Corp — Key Differences Every Taxpayer Should Know", duration: "3:16", category: "entity-types", seoTitle: "C Corp vs S Corp: Key Tax Differences Every Business Owner Should Know" },
  { id: "6szJ8mchLSI", title: "Introduction to Corporations — U.S. Tax Treatment Explained", duration: "8:10", category: "entity-types", seoTitle: "Introduction to Corporations: US Tax Treatment and Business Entity Overview" },

  // === Form SS-4 & EIN Application (Q&A articles) ===
  { id: "qa-ss4-what-is-ein", title: "What Is an EIN and Why Do You Need Form SS-4?", duration: "4 min read", category: "form-ss4", seoTitle: "What Is an EIN? Why You Need Form SS-4 to Get Your Tax ID Number", contentType: "qa" },
  { id: "qa-ss4-who-can-apply", title: "Who Can Apply for an EIN? US vs Foreign Applicants", duration: "4 min read", category: "form-ss4", seoTitle: "Who Can Apply for an EIN? US vs Foreign Applicants Explained", contentType: "qa" },
  { id: "qa-ss4-preparation", title: "Preparing to File Form SS-4 — Sequencing, Addresses & Entity Classification", duration: "5 min read", category: "form-ss4", seoTitle: "Preparing to File Form SS-4: Sequencing Addresses and Entity Classification", contentType: "qa" },
  { id: "qa-ss4-lines-1-7", title: "Form SS-4 Line-by-Line: Legal Name, Address & Responsible Party (Lines 1–7)", duration: "5 min read", category: "form-ss4", seoTitle: "Form SS-4 Line-by-Line: Legal Name Address and Responsible Party Lines 1-7", contentType: "qa" },
  { id: "qa-ss4-lines-8-12", title: "Form SS-4 Line-by-Line: LLC Info, Entity Type & Reason (Lines 8–12)", duration: "5 min read", category: "form-ss4", seoTitle: "Form SS-4 Line-by-Line: LLC Info Entity Type and Reason Lines 8-12", contentType: "qa" },
  { id: "qa-ss4-lines-13-18", title: "Form SS-4 Line-by-Line: Employees, Activity & Signature (Lines 13–18)", duration: "5 min read", category: "form-ss4", seoTitle: "Form SS-4 Line-by-Line: Employees Activity and Signature Lines 13-18", contentType: "qa" },
  { id: "qa-ss4-submission", title: "How to Submit Form SS-4 — Online, Phone, Fax & Mail Methods", duration: "5 min read", category: "form-ss4", seoTitle: "How to Submit Form SS-4: Online Phone Fax and Mail Methods Compared", contentType: "qa" },
  { id: "qa-ss4-foreign-de", title: "Foreign-Owned US Disregarded Entity — Getting an EIN for Form 5472", duration: "5 min read", category: "form-ss4", seoTitle: "Foreign-Owned US Disregarded Entity: Getting an EIN for Form 5472 Filing", contentType: "qa" },
  { id: "qa-ss4-partnership", title: "Foreign-Owned US Partnership — EIN Application Guide", duration: "4 min read", category: "form-ss4", seoTitle: "Foreign-Owned US Partnership EIN Application Guide Using Form SS-4", contentType: "qa" },
  { id: "qa-ss4-c-corp", title: "Foreign-Owned US C Corporation — EIN Application Guide", duration: "4 min read", category: "form-ss4", seoTitle: "Foreign-Owned US C Corporation EIN Application Guide Using Form SS-4", contentType: "qa" },
  { id: "qa-ss4-troubleshooting", title: "Form SS-4 Troubleshooting — Common Errors, Timeouts & Duplicate EINs", duration: "4 min read", category: "form-ss4", seoTitle: "Form SS-4 Troubleshooting: Common Errors Timeouts and Duplicate EINs", contentType: "qa" },
  { id: "qa-ss4-after-ein", title: "After You Get Your EIN — CP 575, Form 8822-B & Keeping Info Current", duration: "4 min read", category: "form-ss4", seoTitle: "After You Get Your EIN: CP 575 Form 8822-B and Keeping Info Current", contentType: "qa" },
];

// Generate the full video catalog with slugs and SEO descriptions
export const VIDEO_CATALOG: VideoEntry[] = RAW_VIDEOS.map((v) => {
  const categoryLabel = CATEGORIES[v.category];
  const ct = v.contentType ?? "video";
  const actionVerb = ct === "video" ? "Watch this video from ForeignLLCTax and get" : "Read this guide and get";
  return {
    id: v.id,
    title: v.title,
    slug: slugify(v.seoTitle),
    duration: v.duration,
    category: v.category,
    tags: generateTags(v.category, v.title),
    seoTitle: v.seoTitle,
    seoDescription: `Learn about ${v.seoTitle.toLowerCase()}. ${actionVerb} expert guidance on ${categoryLabel.toLowerCase()}. File your foreign-owned LLC taxes at foreignllctax.com.`,
    contentType: ct,
  };
});

function generateTags(category: Category, title: string): string[] {
  const baseTags: Record<Category, string[]> = {
    "form-5472": ["form 5472", "foreign-owned LLC", "IRS reporting", "pro forma 1120", "$25000 penalty"],
    "form-1120": ["form 1120", "corporate tax", "foreign-owned LLC"],
    "form-8832": ["form 8832", "entity classification", "LLC election", "check-the-box"],
    "form-1040": ["form 1040", "individual tax", "personal tax return"],
    "filing-status": ["filing status", "form 1040", "single", "married filing jointly", "head of household"],
    "form-8857": ["form 8857", "innocent spouse relief", "equitable relief", "IRC 6015"],
    "form-8379": ["form 8379", "injured spouse", "joint return allocation"],
    "foreign-income": ["foreign income", "FBAR", "form 8938", "FATCA", "foreign reporting"],
    "form-8865": ["form 8865", "foreign partnership", "international tax"],
    "tax-credits": ["tax credits", "foreign tax credit", "general business credit", "form 3800"],
    "amt": ["AMT", "alternative minimum tax", "ISO", "tax preference items"],
    "deductions": ["section 179", "depreciation", "business deductions", "tax deductions"],
    "qbi": ["QBI", "qualified business income", "pass-through", "section 199A"],
    "installment-sales": ["installment sales", "form 6252", "deferred gain"],
    "cp2000": ["CP2000", "IRS notice", "underreported income", "IRS letter"],
    "tax-basics": ["tax basics", "filing requirements", "IRS forms", "tax preparation"],
    "entity-types": ["LLC", "S-Corp", "C-Corp", "sole proprietorship", "partnership"],
    "due-dates": ["tax due dates", "filing deadline", "extension", "tax calendar"],
    "reporting-changes": ["reporting changes", "life changes", "tax adjustments"],
    "form-ss4": ["form ss-4", "EIN", "employer identification number", "tax ID", "EIN application"],
    "firpta": ["FIRPTA", "foreign real estate", "IRC 897", "withholding", "U.S. real property"],
    "state-tax": ["state tax", "franchise tax", "state income tax", "nexus", "annual report"],
    "ecommerce": ["e-commerce", "Amazon FBA", "Shopify", "online seller", "marketplace facilitator"],
    "crypto": ["cryptocurrency", "bitcoin", "digital assets", "crypto tax", "Form 8949"],
    "aml": ["AML", "BSA", "anti-money laundering", "KYC", "compliance"],
    "estate-gift": ["estate tax", "gift tax", "NRA", "Form 706-NA", "inheritance"],
    "international-corporate": ["GILTI", "Subpart F", "BEAT", "CFC", "international tax"],
    "tax-treaties": ["tax treaty", "withholding", "treaty benefits", "Form 8833"],
    "transfer-pricing": ["transfer pricing", "IRC 482", "arm's length", "intercompany"],
    "payroll": ["payroll tax", "FICA", "FUTA", "Form 941", "employment tax"],
    "expatriation": ["expatriation", "exit tax", "dual-status", "substantial presence"],
    "tax-planning": ["tax planning", "entity structure", "deductions", "optimization"],
    "penalties": ["penalties", "abatement", "compliance", "IRS enforcement"],
    "banking": ["banking", "bank account", "wire transfer", "payments"],
    "visa-immigration": ["visa", "immigration", "B-1", "E-2", "green card", "tax status"],
  };
  return baseTags[category] || [];
}

// Get unique videos (deduplicate podcast episodes vs standalone)
// Many videos exist in two formats: "US Tax – Ep. X" and standalone title
// For the learn section, prefer the standalone (non-episode) version when both exist
export function getUniqueVideos(): VideoEntry[] {
  const seen = new Set<string>();
  const unique: VideoEntry[] = [];

  // First pass: add non-episode versions
  for (const v of VIDEO_CATALOG) {
    if (!v.title.startsWith("US Tax")) {
      const key = v.category + "|" + v.duration;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(v);
      }
    }
  }

  // Second pass: add episode versions that don't have standalone equivalents
  for (const v of VIDEO_CATALOG) {
    if (v.title.startsWith("US Tax")) {
      const key = v.category + "|" + v.duration;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(v);
      }
    }
  }

  return unique;
}

// Get videos by category
export function getVideosByCategory(category: Category): VideoEntry[] {
  return getUniqueVideos().filter((v) => v.category === category);
}

// Get a single video by slug
export function getVideoBySlug(slug: string): VideoEntry | undefined {
  return VIDEO_CATALOG.find((v) => v.slug === slug);
}

// Spotify podcast info
export const SPOTIFY_PODCAST = {
  name: "Money & Tax Talk with Rippa",
  subtitle: "U.S. & Global Entrepreneurs & Individuals | Finance, Business & Growth",
  url: "https://open.spotify.com/show/5tnnhWZJR2GBHJJW7WNb2O",
  description: "Taxes, money, finance — simplified. Real talk, office-hours style answers, and insights you can actually use.",
  rating: "5/5",
  reviews: "10 ratings",
  publisher: "RippaX Labs",
};

// YouTube channel info
export const YOUTUBE_CHANNEL = {
  name: "ForeignLLCTax",
  handle: "@RIPPATaxStudio",
  url: "https://www.youtube.com/@RIPPATaxStudio",
  subscribers: "26",
  totalVideos: 187,
};
