/**
 * International money transfer data for country-specific guides.
 * Each entry contains transfer methods, fees, regulations, and tips
 * for sending money from a US LLC bank account to the target country.
 */

export interface TransferMethod {
  name: string;
  fees: string;
  speed: string;
  exchangeRate: string;
  notes: string;
}

export interface CountryTransferData {
  name: string;
  slug: string;
  flag: string;
  currency: string;
  currencyCode: string;
  /** Best overall transfer methods ranked */
  methods: TransferMethod[];
  /** Average bank wire fee range */
  bankWireFee: string;
  /** Typical transfer speed */
  typicalSpeed: string;
  /** Country-specific regulations or restrictions */
  regulations: string[];
  /** Common pitfalls when transferring to this country */
  pitfalls: string[];
  /** Tax implications (both US and receiving country) */
  taxImplications: string[];
  /** Pro tips for minimizing costs */
  tips: string[];
  /** Whether SWIFT is the primary method or alternatives exist */
  swiftPrimary: boolean;
  /** Special considerations (e.g., China's $50K limit) */
  specialNotes: string;
}

export const COUNTRY_TRANSFER_DATA: Record<string, CountryTransferData> = {
  china: {
    name: "China",
    slug: "china",
    flag: "\u{1F1E8}\u{1F1F3}",
    currency: "Chinese Yuan",
    currencyCode: "CNY",
    bankWireFee: "$25\u2013$50",
    typicalSpeed: "1\u20133 business days",
    swiftPrimary: true,
    specialNotes:
      "China has strict foreign exchange controls enforced by SAFE (State Administration of Foreign Exchange). Individuals have a $50,000 annual foreign exchange quota. Business transfers require proper documentation including invoices and contracts. Receiving banks may hold funds for compliance review.",
    methods: [
      {
        name: "Wise (TransferWise)",
        fees: "0.5\u20131.5% of transfer amount",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate (best available)",
        notes:
          "Best overall option for most transfers under $30K. Supports transfers to Chinese bank accounts (UnionPay). Cannot transfer to WeChat Pay or Alipay directly.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$50 sending + $10\u201320 receiving + intermediary fees",
        speed: "2\u20135 business days",
        exchangeRate: "Bank markup of 1\u20133% above mid-market",
        notes:
          "Reliable for large amounts. Receiving bank (e.g., Bank of China, ICBC) may require CNAPS code. Always include the beneficiary's Chinese name in characters.",
      },
      {
        name: "Payoneer",
        fees: "Up to 2% above mid-market rate",
        speed: "2\u20135 business days",
        exchangeRate: "1\u20132% markup",
        notes:
          "Popular for e-commerce sellers (Amazon, Shopify). Can receive USD directly into Payoneer account, then withdraw to Chinese bank.",
      },
      {
        name: "Western Union",
        fees: "$5\u2013$50 depending on amount",
        speed: "Minutes (cash pickup) or 1\u20133 days (bank deposit)",
        exchangeRate: "2\u20134% markup",
        notes:
          "Good for urgent small transfers. Cash pickup available at many locations in China.",
      },
    ],
    regulations: [
      "SAFE enforces a $50,000/year individual foreign exchange quota for Chinese residents",
      "Business transfers require supporting documents (invoices, contracts, tax certificates)",
      "Receiving bank may ask for proof of the source of funds",
      "Transfers over $5,000 USD equivalent require additional reporting to SAFE",
      "Cryptocurrency transfers are prohibited by Chinese regulations",
    ],
    pitfalls: [
      "Funds may be frozen or delayed if proper documentation is not provided",
      "Chinese name must match exactly (in Chinese characters) with the bank account",
      "Some Chinese banks reject transfers from certain US fintech banks",
      "WeChat Pay and Alipay cannot receive international wire transfers directly",
      "Exchange rate can fluctuate significantly \u2014 consider rate alerts",
    ],
    taxImplications: [
      "US LLC distributions to foreign owners may trigger Form 5472 reporting",
      "No US withholding tax on distributions from a disregarded entity (single-member LLC)",
      "Chinese residents must report worldwide income to China's SAT (State Administration of Taxation)",
      "US-China tax treaty may reduce double taxation \u2014 consult a cross-border tax advisor",
      "FBAR filing required if aggregate foreign accounts exceed $10,000 at any time during the year",
    ],
    tips: [
      "Use Wise for the best exchange rate on transfers under $30,000",
      "For large transfers (>$50K), split across multiple methods or use a business account",
      "Always include the CNAPS bank code (12 digits) for faster processing",
      "Send a small test transfer first to verify the receiving account details",
      "Keep all transfer receipts for IRS recordkeeping and FBAR filing",
    ],
  },

  japan: {
    name: "Japan",
    slug: "japan",
    flag: "\u{1F1EF}\u{1F1F5}",
    currency: "Japanese Yen",
    currencyCode: "JPY",
    bankWireFee: "$25\u2013$45",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "Japan has a well-regulated banking system. Transfers are generally smooth with proper SWIFT codes. Japanese banks (MUFG, SMBC, Mizuho) are familiar with international transfers. The Bank of Japan requires reporting for transfers over \u00a530 million (~$200K).",
    methods: [
      {
        name: "Wise",
        fees: "0.4\u20131.0%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes:
          "Best option for most transfers. Fast and transparent. Supports transfers to all major Japanese banks.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$45 + receiving fees",
        speed: "1\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes:
          "Standard for large amounts. Japanese banks typically charge \u00a52,500\u2013\u00a54,000 receiving fee.",
      },
      {
        name: "PayPal",
        fees: "2.5\u20134% total cost",
        speed: "Instant to PayPal, 1\u20133 days to bank",
        exchangeRate: "3\u20134% markup",
        notes: "Convenient but expensive. Only use for small amounts.",
      },
      {
        name: "Remitly",
        fees: "$1.99\u2013$4.99",
        speed: "1\u20133 business days",
        exchangeRate: "Competitive",
        notes: "Good for personal remittances, limited business use.",
      },
    ],
    regulations: [
      "Bank of Japan requires reporting for transfers over \u00a530 million (~$200K)",
      "Japanese residents must report foreign income and foreign accounts",
      "No special restrictions on receiving international transfers",
      "Japanese banks require the recipient's branch code and account number",
    ],
    pitfalls: [
      "Japanese bank account numbers are branch-specific \u2014 always include the branch code",
      "Some Japanese banks charge high receiving fees (\u00a52,500\u2013\u00a54,000)",
      "Name on the transfer must match the Japanese bank account exactly (katakana)",
      "Transfers on Japanese holidays will be delayed",
    ],
    taxImplications: [
      "No US withholding on LLC distributions to Japanese residents (disregarded entity)",
      "US-Japan tax treaty provides favorable treatment for many income types",
      "Japanese residents must report worldwide income to the NTA (National Tax Agency)",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Use Wise for the best rates on transfers under $50,000",
      "Include the Zengin bank code (4 digits) and branch code (3 digits)",
      "Avoid transferring on Japanese national holidays",
      "Japanese banks process faster with correct katakana name formatting",
    ],
  },

  singapore: {
    name: "Singapore",
    slug: "singapore",
    flag: "\u{1F1F8}\u{1F1EC}",
    currency: "Singapore Dollar",
    currencyCode: "SGD",
    bankWireFee: "$25\u2013$40",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "Singapore is one of the easiest countries to receive international transfers. DBS, OCBC, and UOB are the major banks and all handle international wires efficiently. No foreign exchange controls.",
    methods: [
      {
        name: "Wise",
        fees: "0.4\u20130.8%",
        speed: "Within hours to 1 business day",
        exchangeRate: "Mid-market rate",
        notes: "Fastest and cheapest option. Wise has a Singapore office.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$40",
        speed: "1\u20132 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Standard for large amounts. Singapore banks rarely charge receiving fees.",
      },
      {
        name: "Payoneer",
        fees: "Up to 2%",
        speed: "2\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Good for freelancers and e-commerce sellers.",
      },
      {
        name: "OFX",
        fees: "No transfer fee (built into rate)",
        speed: "1\u20132 business days",
        exchangeRate: "0.5\u20131% markup",
        notes: "Good for amounts over $10,000.",
      },
    ],
    regulations: [
      "No foreign exchange controls in Singapore",
      "MAS (Monetary Authority of Singapore) regulates banking but does not restrict inflows",
      "Transfers over SGD 20,000 may require source of funds documentation",
    ],
    pitfalls: [
      "Ensure SWIFT code matches the correct DBS/OCBC/UOB branch",
      "PayNow (local system) cannot receive international transfers",
      "Some US fintech banks may not support SWIFT to Singapore \u2014 use a traditional bank",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Singapore does not tax foreign-sourced income unless remitted (territorial system)",
      "US-Singapore tax treaty available for certain income types",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Wise is the fastest and cheapest for most transfers",
      "For large amounts (>$50K), compare OFX rates with Wise",
      "Singapore banks process quickly \u2014 expect same-day or next-day credit",
      "DBS has the best international transfer infrastructure",
    ],
  },

  australia: {
    name: "Australia",
    slug: "australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    currency: "Australian Dollar",
    currencyCode: "AUD",
    bankWireFee: "$25\u2013$45",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "Australia has a well-regulated banking system (Big Four: CBA, ANZ, NAB, Westpac). No foreign exchange controls. AUSTRAC monitors large transactions for anti-money laundering.",
    methods: [
      {
        name: "Wise",
        fees: "0.5\u20131.0%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best overall option. Wise has an Australian financial license.",
      },
      {
        name: "OFX",
        fees: "No transfer fee",
        speed: "1\u20132 business days",
        exchangeRate: "0.4\u20130.8% markup",
        notes: "Australian company, excellent for large transfers. Lock in rates in advance.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$45",
        speed: "1\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Standard for large amounts. BSB + account number required.",
      },
      {
        name: "Remitly",
        fees: "$1.99\u2013$4.99",
        speed: "1\u20133 business days",
        exchangeRate: "Competitive",
        notes: "Good for smaller personal remittances.",
      },
    ],
    regulations: [
      "AUSTRAC requires reporting of international transfers over AUD 10,000",
      "No foreign exchange controls",
      "Australian banks may request source of funds documentation for large transfers",
    ],
    pitfalls: [
      "BSB (Bank-State-Branch) code is required for all Australian bank transfers",
      "Australian banks may hold large transfers for 24\u201348 hours for compliance checks",
      "Avoid sending on Australian public holidays",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Australian residents must report worldwide income to the ATO",
      "US-Australia tax treaty provides favorable treatment",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "OFX is an Australian company and often has the best AUD rates",
      "Always include the BSB code (6 digits) with the account number",
      "Consider rate alerts \u2014 AUD/USD can be volatile",
      "For amounts over $50K, negotiate rates with OFX or a bank",
    ],
  },

  canada: {
    name: "Canada",
    slug: "canada",
    flag: "\u{1F1E8}\u{1F1E6}",
    currency: "Canadian Dollar",
    currencyCode: "CAD",
    bankWireFee: "$25\u2013$40",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "Canada is one of the easiest countries to transfer to from the US due to proximity and strong banking relationships. Big Five banks (RBC, TD, BMO, Scotiabank, CIBC) all handle USD transfers natively.",
    methods: [
      {
        name: "Wise",
        fees: "0.4\u20130.7%",
        speed: "Within hours to 1 business day",
        exchangeRate: "Mid-market rate",
        notes: "Best for most transfers. Extremely fast to Canadian banks.",
      },
      {
        name: "Bank Wire (SWIFT/Fedwire)",
        fees: "$15\u2013$40",
        speed: "Same day to 1 business day",
        exchangeRate: "0.5\u20132% markup",
        notes: "Very fast due to US-Canada banking corridor. Many Canadian banks have US branches.",
      },
      {
        name: "OFX",
        fees: "No transfer fee",
        speed: "1\u20132 business days",
        exchangeRate: "0.4\u20130.8% markup",
        notes: "Good for larger amounts. Canadian presence.",
      },
      {
        name: "PayPal",
        fees: "2.5\u20134%",
        speed: "Instant to PayPal, 1\u20132 days to bank",
        exchangeRate: "3\u20134% markup",
        notes: "Convenient but expensive. Only for small, quick transfers.",
      },
    ],
    regulations: [
      "FINTRAC requires reporting of transfers over CAD 10,000",
      "No foreign exchange controls",
      "Canadian banks are highly familiar with US transfers",
    ],
    pitfalls: [
      "Canadian transit number (5 digits) + institution number (3 digits) required",
      "Some Canadian banks charge CAD 15\u201325 receiving fee for international wires",
      "Do not confuse Canadian routing numbers with US ABA routing numbers",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Canadian residents must report worldwide income to CRA",
      "US-Canada tax treaty is comprehensive \u2014 generally favorable",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
      "Form T1135 (Foreign Income Verification) required for Canadian residents with foreign assets over CAD 100,000",
    ],
    tips: [
      "Wise or a direct bank wire are both excellent for US-Canada transfers",
      "TD Bank operates in both the US and Canada \u2014 may offer internal transfers",
      "CAD/USD rate is closely watched \u2014 use rate alerts for large transfers",
      "Consider keeping a USD account at a Canadian bank (most Big Five offer this)",
    ],
  },

  uk: {
    name: "United Kingdom",
    slug: "uk",
    flag: "\u{1F1EC}\u{1F1E7}",
    currency: "British Pound",
    currencyCode: "GBP",
    bankWireFee: "$25\u2013$40",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "The UK has a highly developed banking system with easy international transfer infrastructure. Faster Payments system enables near-instant domestic transfers. UK banks are very familiar with US transfers.",
    methods: [
      {
        name: "Wise",
        fees: "0.3\u20130.7%",
        speed: "Within hours",
        exchangeRate: "Mid-market rate",
        notes: "Wise is UK-headquartered. Fastest and cheapest option for GBP transfers.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$40",
        speed: "1\u20132 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Standard for large amounts. Sort code (6 digits) + account number (8 digits) required.",
      },
      {
        name: "OFX",
        fees: "No transfer fee",
        speed: "1\u20132 business days",
        exchangeRate: "0.4\u20130.8% markup",
        notes: "Good for large transfers. UK-regulated.",
      },
      {
        name: "Revolut",
        fees: "0\u20130.5% (depends on plan)",
        speed: "Instant to Revolut, 1 day to bank",
        exchangeRate: "Mid-market on weekdays",
        notes: "Great rates but weekend markup applies. Good for Revolut users.",
      },
    ],
    regulations: [
      "FCA regulates financial services including international transfers",
      "No foreign exchange controls",
      "HMRC may request source of funds documentation for large transfers",
    ],
    pitfalls: [
      "Sort code format is XX-XX-XX (6 digits with hyphens)",
      "IBAN is used for European transfers but UK domestic uses sort code + account number",
      "Post-Brexit, some EU transfer services may not work for UK accounts",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "UK residents must report worldwide income to HMRC",
      "US-UK tax treaty is comprehensive",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Wise is headquartered in the UK \u2014 fastest GBP transfers available",
      "For large amounts, compare OFX with Wise for the best rate",
      "UK sort code can be found on bank statements or online banking",
      "Consider opening a Wise multi-currency account for ongoing transfers",
    ],
  },

  germany: {
    name: "Germany",
    slug: "germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    currency: "Euro",
    currencyCode: "EUR",
    bankWireFee: "$25\u2013$45",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: false,
    specialNotes:
      "Germany uses SEPA (Single Euro Payments Area) for EUR transfers within Europe. For US-to-Germany transfers, SWIFT is used. IBAN is required for all German bank accounts.",
    methods: [
      {
        name: "Wise",
        fees: "0.3\u20130.8%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best overall option. Has European banking license.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$45",
        speed: "1\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "IBAN (22 characters starting with DE) + BIC/SWIFT code required.",
      },
      {
        name: "OFX",
        fees: "No transfer fee",
        speed: "1\u20132 business days",
        exchangeRate: "0.4\u20130.8% markup",
        notes: "Good for amounts over \u20ac10,000.",
      },
      {
        name: "N26 / Revolut",
        fees: "0\u20131%",
        speed: "Instant to account, 1 day to German bank",
        exchangeRate: "Near mid-market",
        notes: "Digital banks popular in Germany. Good for tech-savvy users.",
      },
    ],
    regulations: [
      "BaFin regulates financial services",
      "No foreign exchange controls within EU/EEA",
      "German banks require IBAN for all incoming transfers",
      "Large transfers (>\u20ac12,500) are reported to Bundesbank for statistical purposes",
    ],
    pitfalls: [
      "IBAN is mandatory \u2014 account number alone will not work",
      "German banks may charge \u20ac5\u201315 receiving fee for SWIFT transfers",
      "SEPA transfers from US are not possible \u2014 must use SWIFT or Wise",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "German residents must report worldwide income to Finanzamt",
      "US-Germany tax treaty provides favorable treatment",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Always use IBAN format for German bank accounts (starts with DE)",
      "Wise EUR transfers are often credited within hours",
      "For recurring transfers, set up a Wise or OFX recurring payment",
      "Avoid bank-to-bank SWIFT for small amounts \u2014 fees are disproportionate",
    ],
  },

  india: {
    name: "India",
    slug: "india",
    flag: "\u{1F1EE}\u{1F1F3}",
    currency: "Indian Rupee",
    currencyCode: "INR",
    bankWireFee: "$25\u2013$50",
    typicalSpeed: "1\u20133 business days",
    swiftPrimary: true,
    specialNotes:
      "India has strict foreign exchange regulations under FEMA (Foreign Exchange Management Act) enforced by RBI (Reserve Bank of India). Transfers must comply with RBI guidelines. The Liberalised Remittance Scheme (LRS) governs outward remittances from India, but inward remittances to India are generally unrestricted.",
    methods: [
      {
        name: "Wise",
        fees: "0.5\u20131.5%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best option for most transfers. Transfers directly to Indian bank accounts via IMPS/NEFT.",
      },
      {
        name: "Remitly",
        fees: "$1.99\u2013$4.99",
        speed: "Minutes to 1 business day",
        exchangeRate: "Competitive (near mid-market)",
        notes: "Excellent for transfers to India. Very fast with bank deposit or UPI.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$50",
        speed: "2\u20134 business days",
        exchangeRate: "1\u20133% markup",
        notes: "Standard for large amounts. IFSC code required. Indian banks may hold funds for compliance.",
      },
      {
        name: "Payoneer",
        fees: "Up to 2%",
        speed: "2\u20135 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Popular with Indian freelancers and e-commerce sellers.",
      },
    ],
    regulations: [
      "FEMA governs all foreign exchange transactions in India",
      "Inward remittances to India are generally unrestricted (no cap on receiving)",
      "Recipient must provide purpose code for the transfer (e.g., P1301 for business income)",
      "RBI requires banks to report all inward remittances",
      "FCRA (Foreign Contribution Regulation Act) applies to certain non-profit transfers",
    ],
    pitfalls: [
      "IFSC code (11 characters) is mandatory for Indian bank transfers",
      "Purpose code must be specified correctly or transfer may be delayed",
      "Indian banks may hold funds for 24\u201348 hours for compliance verification",
      "NRO vs NRE accounts \u2014 know which account type to send to",
      "Transfers to Indian UPI addresses are not supported by SWIFT",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Indian residents must report worldwide income to Income Tax Department",
      "US-India tax treaty available but complex",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
      "Indian tax on foreign income may be offset by foreign tax credits",
    ],
    tips: [
      "Wise and Remitly both offer excellent INR rates",
      "For large transfers (>$10K), compare bank wire with Wise",
      "Always include IFSC code and the correct purpose code",
      "NRE accounts can receive foreign currency \u2014 NRO accounts receive INR",
      "Timing matters \u2014 INR rates fluctuate; use rate alerts",
    ],
  },

  brazil: {
    name: "Brazil",
    slug: "brazil",
    flag: "\u{1F1E7}\u{1F1F7}",
    currency: "Brazilian Real",
    currencyCode: "BRL",
    bankWireFee: "$25\u2013$50",
    typicalSpeed: "1\u20133 business days",
    swiftPrimary: true,
    specialNotes:
      "Brazil has foreign exchange regulations managed by the Central Bank of Brazil (BCB). All international transfers must go through authorized banks or exchange brokers. IOF tax (Imposto sobre Opera\u00e7\u00f5es Financeiras) applies to incoming transfers.",
    methods: [
      {
        name: "Wise",
        fees: "1\u20132%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best rate but slightly higher fees than for other countries due to Brazilian regulations.",
      },
      {
        name: "Remitly",
        fees: "$2.99\u2013$4.99",
        speed: "1\u20133 business days",
        exchangeRate: "Competitive",
        notes: "Good option for smaller transfers to Brazilian bank accounts.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$35\u2013$50",
        speed: "2\u20135 business days",
        exchangeRate: "1\u20133% markup",
        notes: "Brazilian CPF/CNPJ number required. Receiving bank handles FX conversion.",
      },
      {
        name: "Western Union",
        fees: "$5\u2013$25",
        speed: "Minutes (cash) or 1\u20133 days (bank)",
        exchangeRate: "2\u20134% markup",
        notes: "Widely available in Brazil for cash pickup.",
      },
    ],
    regulations: [
      "Central Bank of Brazil (BCB) regulates all foreign exchange transactions",
      "Recipient must provide CPF (individual) or CNPJ (business) number",
      "IOF tax (0.38% for most transfers) applies to international transfers",
      "Large transfers may require a c\u00e2mbio (exchange contract) at the receiving bank",
    ],
    pitfalls: [
      "CPF/CNPJ number is mandatory \u2014 transfer will be rejected without it",
      "IOF tax is deducted automatically from the received amount",
      "Brazilian banks may take 24\u201348 hours to process and credit incoming transfers",
      "Pix (Brazil's instant payment system) cannot receive international transfers directly",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Brazilian residents must report worldwide income to Receita Federal",
      "IOF tax (0.38%) applies to international money transfers into Brazil",
      "US-Brazil tax treaty does NOT exist \u2014 risk of double taxation",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Always have the recipient's CPF or CNPJ ready before initiating transfer",
      "Wise offers the best exchange rate despite higher fees for BRL",
      "Consider timing \u2014 BRL/USD rate can be very volatile",
      "For business payments, use CNPJ; for personal, use CPF",
    ],
  },

  mexico: {
    name: "Mexico",
    slug: "mexico",
    flag: "\u{1F1F2}\u{1F1FD}",
    currency: "Mexican Peso",
    currencyCode: "MXN",
    bankWireFee: "$25\u2013$40",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "Mexico is the largest remittance recipient from the US. Many transfer services specialize in US-Mexico corridor. CLABE (18-digit interbank code) is required for all Mexican bank transfers.",
    methods: [
      {
        name: "Wise",
        fees: "0.5\u20131.2%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best rate for bank-to-bank transfers.",
      },
      {
        name: "Remitly",
        fees: "$0\u2013$3.99",
        speed: "Minutes to 1 business day",
        exchangeRate: "Very competitive",
        notes: "Excellent for US-Mexico transfers. Express delivery available.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$40",
        speed: "1\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "CLABE number (18 digits) required.",
      },
      {
        name: "Xoom (PayPal)",
        fees: "$0\u2013$4.99",
        speed: "Minutes to 1 business day",
        exchangeRate: "Competitive",
        notes: "Fast delivery, multiple pickup options including OXXO stores.",
      },
    ],
    regulations: [
      "Banco de M\u00e9xico regulates foreign exchange",
      "No restrictions on receiving international transfers",
      "SAT (Mexican tax authority) monitors large incoming transfers",
      "Cash deposits over MXN 15,000/month trigger reporting",
    ],
    pitfalls: [
      "CLABE (18 digits) is mandatory for bank deposits",
      "Do not confuse CLABE with debit card number",
      "Mexican banks may charge receiving fees for SWIFT transfers",
      "USD accounts at Mexican banks have different CLABE than MXN accounts",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Mexican residents must report worldwide income to SAT",
      "US-Mexico tax treaty provides favorable treatment",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Remitly often has the best rates for the US-Mexico corridor",
      "Always use CLABE, not account number, for bank transfers",
      "For large amounts, compare Wise with Remitly",
      "Consider keeping some funds in a USD account at a Mexican bank",
    ],
  },

  "south-korea": {
    name: "South Korea",
    slug: "south-korea",
    flag: "\u{1F1F0}\u{1F1F7}",
    currency: "South Korean Won",
    currencyCode: "KRW",
    bankWireFee: "$25\u2013$45",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "South Korea has foreign exchange regulations managed by the Bank of Korea. Transfers over $50,000/year require documentation. Korean banks (KB Kookmin, Shinhan, Hana, Woori) are well-equipped for international transfers.",
    methods: [
      {
        name: "Wise",
        fees: "0.5\u20131.2%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best option for most transfers. Fast and transparent.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$45",
        speed: "1\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Korean bank account number + SWIFT code required.",
      },
      {
        name: "Payoneer",
        fees: "Up to 2%",
        speed: "2\u20135 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Popular with Korean freelancers and sellers.",
      },
      {
        name: "Remitly",
        fees: "$1.99\u2013$4.99",
        speed: "1\u20133 business days",
        exchangeRate: "Competitive",
        notes: "Good for smaller personal transfers.",
      },
    ],
    regulations: [
      "Bank of Korea regulates foreign exchange",
      "Transfers over $50,000/year require source of funds documentation",
      "Korean banks may ask for the purpose of the transfer",
      "Residents must report foreign accounts to NTS (National Tax Service)",
    ],
    pitfalls: [
      "Korean name must match exactly with bank account (in Hangul)",
      "Korean banks may hold transfers for compliance review",
      "Transfers on Korean holidays (Chuseok, Lunar New Year) will be delayed",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Korean residents must report worldwide income to NTS",
      "US-Korea tax treaty provides favorable treatment",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Wise offers the best KRW exchange rate",
      "Include the Korean beneficiary name in Hangul if possible",
      "KB Kookmin and Shinhan have the best international transfer processing",
      "Avoid Lunar New Year and Chuseok holiday periods",
    ],
  },

  philippines: {
    name: "Philippines",
    slug: "philippines",
    flag: "\u{1F1F5}\u{1F1ED}",
    currency: "Philippine Peso",
    currencyCode: "PHP",
    bankWireFee: "$25\u2013$45",
    typicalSpeed: "1\u20133 business days",
    swiftPrimary: true,
    specialNotes:
      "The Philippines is one of the top remittance-receiving countries globally. BSP (Bangko Sentral ng Pilipinas) regulates foreign exchange. Many transfer services specialize in the US-Philippines corridor.",
    methods: [
      {
        name: "Wise",
        fees: "0.5\u20131.5%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best rate available. Transfers to all major Philippine banks.",
      },
      {
        name: "Remitly",
        fees: "$0\u2013$3.99",
        speed: "Minutes to 1 business day",
        exchangeRate: "Very competitive",
        notes: "Excellent for US-Philippines corridor. Cash pickup at 30,000+ locations.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$45",
        speed: "2\u20134 business days",
        exchangeRate: "1\u20133% markup",
        notes: "Standard for large amounts. Philippine banks may charge PHP 100\u2013500 receiving fee.",
      },
      {
        name: "GCash / Maya",
        fees: "Varies by sending service",
        speed: "Instant",
        exchangeRate: "Varies",
        notes: "Can receive from Remitly and other services directly to mobile wallet.",
      },
    ],
    regulations: [
      "BSP regulates foreign exchange transactions",
      "No restrictions on receiving international transfers",
      "Transactions over PHP 500,000 require supporting documentation",
      "AMLC (Anti-Money Laundering Council) monitors large transfers",
    ],
    pitfalls: [
      "Philippine bank account numbers vary in length by bank",
      "Some Philippine banks charge receiving fees",
      "GCash and Maya have daily/monthly transfer limits",
      "Transfers during Philippine holidays (many!) may be delayed",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Philippine residents must report worldwide income to BIR",
      "US-Philippines tax treaty available",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Remitly is the best for small to medium transfers to the Philippines",
      "Wise has the best rate for larger transfers",
      "Cash pickup via Remitly is available at cebuana lhuillier, M Lhuillier, and more",
      "GCash integration with Remitly makes instant transfers possible",
    ],
  },

  vietnam: {
    name: "Vietnam",
    slug: "vietnam",
    flag: "\u{1F1FB}\u{1F1F3}",
    currency: "Vietnamese Dong",
    currencyCode: "VND",
    bankWireFee: "$25\u2013$50",
    typicalSpeed: "1\u20133 business days",
    swiftPrimary: true,
    specialNotes:
      "Vietnam has foreign exchange controls managed by the State Bank of Vietnam (SBV). VND is not freely convertible. Transfers to Vietnam must go through authorized banks. Receiving banks handle the FX conversion.",
    methods: [
      {
        name: "Wise",
        fees: "0.8\u20132%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best available rate. Transfers directly to Vietnamese bank accounts.",
      },
      {
        name: "Remitly",
        fees: "$2.99\u2013$4.99",
        speed: "1\u20133 business days",
        exchangeRate: "Competitive",
        notes: "Good for personal remittances to Vietnam.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$30\u2013$50",
        speed: "2\u20135 business days",
        exchangeRate: "1\u20133% markup",
        notes: "Vietnamese banks (Vietcombank, BIDV, VietinBank) handle conversion. Slower than other countries.",
      },
      {
        name: "Western Union",
        fees: "$5\u2013$30",
        speed: "Minutes (cash pickup)",
        exchangeRate: "2\u20134% markup",
        notes: "Cash pickup widely available.",
      },
    ],
    regulations: [
      "State Bank of Vietnam controls foreign exchange",
      "VND is not freely convertible \u2014 receiving bank handles conversion",
      "Transfers over $5,000 may require source documentation",
      "Vietnamese residents have limitations on holding foreign currency",
    ],
    pitfalls: [
      "VND is not freely traded \u2014 rates can vary by bank",
      "Vietnamese banks may hold funds for 1\u20133 days for compliance",
      "Account holder name must be in Vietnamese (with diacritical marks)",
      "Some Vietnamese banks have limited SWIFT connectivity",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Vietnamese residents must report worldwide income",
      "No US-Vietnam tax treaty \u2014 risk of double taxation",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Wise offers the best VND rate despite slightly higher fees",
      "Vietcombank and BIDV have the best international transfer infrastructure",
      "Send a small test transfer first to verify the account details",
      "Consider using Remitly for amounts under $1,000",
    ],
  },

  thailand: {
    name: "Thailand",
    slug: "thailand",
    flag: "\u{1F1F9}\u{1F1ED}",
    currency: "Thai Baht",
    currencyCode: "THB",
    bankWireFee: "$25\u2013$45",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "Thailand has moderate foreign exchange regulations managed by the Bank of Thailand. THB transfers are generally smooth. Bangkok Bank, Kasikorn Bank, and SCB are well-equipped for international transfers.",
    methods: [
      {
        name: "Wise",
        fees: "0.5\u20131.2%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best overall option for THB transfers.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$45",
        speed: "1\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Thai bank account number + SWIFT code required. Bangkok Bank has strong international presence.",
      },
      {
        name: "DeeMoney",
        fees: "Low (specialized Thailand service)",
        speed: "1\u20132 business days",
        exchangeRate: "Competitive",
        notes: "Thailand-focused transfer service with good rates.",
      },
      {
        name: "Remitly",
        fees: "$1.99\u2013$4.99",
        speed: "1\u20133 business days",
        exchangeRate: "Competitive",
        notes: "Good for personal transfers.",
      },
    ],
    regulations: [
      "Bank of Thailand regulates foreign exchange",
      "Transfers over $50,000 require documentation",
      "Foreign currency deposits over $50,000/year have reporting requirements",
      "No restrictions on receiving international transfers for personal use",
    ],
    pitfalls: [
      "Thai bank account numbers are typically 10 digits",
      "Thai banks may ask for purpose of transfer (select 'other' or 'income')",
      "Transfers during Thai holidays (Songkran, etc.) will be delayed",
      "PromptPay (Thai instant payment) cannot receive international transfers",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Thailand taxes foreign income only if remitted in the same year it was earned",
      "US-Thailand tax treaty provides favorable treatment for certain income types",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Wise is the clear winner for THB transfers",
      "Bangkok Bank has offices in the US (New York) for easier SWIFT transfers",
      "Avoid transferring during Songkran (mid-April) week",
      "Keep transfer receipts \u2014 Thai tax authorities may request them",
    ],
  },

  indonesia: {
    name: "Indonesia",
    slug: "indonesia",
    flag: "\u{1F1EE}\u{1F1E9}",
    currency: "Indonesian Rupiah",
    currencyCode: "IDR",
    bankWireFee: "$25\u2013$50",
    typicalSpeed: "1\u20133 business days",
    swiftPrimary: true,
    specialNotes:
      "Indonesia has foreign exchange regulations managed by Bank Indonesia (BI). IDR is not fully convertible. Large transfers may trigger additional compliance checks. BCA, Bank Mandiri, and BNI are the major banks.",
    methods: [
      {
        name: "Wise",
        fees: "0.5\u20131.5%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best available rate for IDR transfers.",
      },
      {
        name: "Remitly",
        fees: "$2.99\u2013$4.99",
        speed: "1\u20133 business days",
        exchangeRate: "Competitive",
        notes: "Good for personal remittances.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$30\u2013$50",
        speed: "2\u20135 business days",
        exchangeRate: "1\u20133% markup",
        notes: "BCA is the most international-friendly Indonesian bank.",
      },
      {
        name: "Western Union",
        fees: "$5\u2013$25",
        speed: "Minutes (cash pickup)",
        exchangeRate: "2\u20134% markup",
        notes: "Cash pickup available nationwide.",
      },
    ],
    regulations: [
      "Bank Indonesia regulates all foreign exchange transactions",
      "Transfers over $25,000 require source of funds documentation",
      "BI requires banks to report all international transfers",
      "Foreign currency holdings by residents may have reporting requirements",
    ],
    pitfalls: [
      "Indonesian bank account numbers vary by bank (10\u201315 digits)",
      "IDR is not fully convertible \u2014 rates can vary",
      "Indonesian banks may hold funds for compliance review",
      "GoPay and OVO cannot receive international transfers",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Indonesian residents must report worldwide income to DGT (Direktorat Jenderal Pajak)",
      "US-Indonesia tax treaty provides favorable treatment",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "BCA is the best Indonesian bank for receiving international transfers",
      "Wise offers the best IDR rate",
      "Always verify the bank's SWIFT code (many Indonesian banks have branch-specific codes)",
      "Send a test transfer first for new recipients",
    ],
  },

  nigeria: {
    name: "Nigeria",
    slug: "nigeria",
    flag: "\u{1F1F3}\u{1F1EC}",
    currency: "Nigerian Naira",
    currencyCode: "NGN",
    bankWireFee: "$30\u2013$50",
    typicalSpeed: "1\u20133 business days",
    swiftPrimary: true,
    specialNotes:
      "Nigeria has multiple exchange rate tiers managed by the CBN (Central Bank of Nigeria). The official rate and parallel market rate can differ significantly. Transfers through official channels use the CBN rate.",
    methods: [
      {
        name: "Wise",
        fees: "0.8\u20132%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Uses the official CBN rate. Best transparent option.",
      },
      {
        name: "Remitly",
        fees: "$0\u2013$4.99",
        speed: "Minutes to 1 business day",
        exchangeRate: "Competitive",
        notes: "Fast delivery to Nigerian bank accounts.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$35\u2013$50",
        speed: "2\u20135 business days",
        exchangeRate: "CBN official rate",
        notes: "Nigerian banks (GT Bank, Zenith, Access) handle conversion at CBN rate.",
      },
      {
        name: "WorldRemit",
        fees: "$1.99\u2013$4.99",
        speed: "Minutes to 1 business day",
        exchangeRate: "Competitive",
        notes: "Good for personal remittances. Mobile wallet delivery available.",
      },
    ],
    regulations: [
      "CBN regulates all foreign exchange transactions",
      "Multiple exchange rate tiers may apply",
      "BVN (Bank Verification Number) required for Nigerian bank accounts",
      "Domiciliary (foreign currency) accounts available at Nigerian banks",
    ],
    pitfalls: [
      "Official rate vs parallel market rate can differ by 20\u201340%",
      "NGN is volatile \u2014 rates can change significantly day to day",
      "Nigerian banks may take 24\u201348 hours to credit incoming transfers",
      "Some US banks flag Nigeria transfers for enhanced compliance review",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Nigerian residents must report worldwide income to FIRS",
      "No US-Nigeria tax treaty \u2014 risk of double taxation",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Use a domiciliary (USD) account at a Nigerian bank to avoid NGN conversion",
      "Wise or Remitly are the most reliable options",
      "Always check the current CBN rate before transferring",
      "Consider timing \u2014 NGN can fluctuate significantly",
    ],
  },

  uae: {
    name: "United Arab Emirates",
    slug: "uae",
    flag: "\u{1F1E6}\u{1F1EA}",
    currency: "UAE Dirham",
    currencyCode: "AED",
    bankWireFee: "$25\u2013$40",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "UAE has a well-developed banking system with no foreign exchange controls. AED is pegged to the USD at a fixed rate (~3.67 AED = 1 USD), making transfers predictable. Emirates NBD, ADCB, FAB are major banks.",
    methods: [
      {
        name: "Wise",
        fees: "0.4\u20130.8%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate (near peg rate)",
        notes: "Best option. AED/USD peg means minimal exchange rate risk.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$40",
        speed: "1\u20132 business days",
        exchangeRate: "Near peg rate + 0.5\u20131% markup",
        notes: "IBAN (23 characters starting with AE) required for all UAE bank transfers.",
      },
      {
        name: "OFX",
        fees: "No transfer fee",
        speed: "1\u20132 business days",
        exchangeRate: "Near peg rate",
        notes: "Good for large amounts.",
      },
      {
        name: "Payoneer",
        fees: "Up to 2%",
        speed: "2\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Popular with UAE-based freelancers and businesses.",
      },
    ],
    regulations: [
      "CBUAE (Central Bank of UAE) regulates financial services",
      "No foreign exchange controls",
      "IBAN required for all bank transfers",
      "UAE has strong AML/CFT regulations",
    ],
    pitfalls: [
      "IBAN is mandatory (23 characters, starts with AE)",
      "Some UAE banks require beneficiary Emirates ID for compliance",
      "Transfers during Ramadan may experience delays",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "UAE has no personal income tax (0% federal income tax)",
      "Corporate tax (9%) introduced in 2023 for businesses with profit >AED 375,000",
      "No US-UAE income tax treaty (but TIEA exists for information exchange)",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "AED/USD peg means exchange rate risk is minimal",
      "Wise is the cheapest option for most transfer amounts",
      "IBAN can be found in your UAE online banking or bank statement",
      "Consider maintaining a USD account at a UAE bank to avoid conversion entirely",
    ],
  },

  "hong-kong": {
    name: "Hong Kong",
    slug: "hong-kong",
    flag: "\u{1F1ED}\u{1F1F0}",
    currency: "Hong Kong Dollar",
    currencyCode: "HKD",
    bankWireFee: "$25\u2013$40",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "Hong Kong has no foreign exchange controls and a highly developed banking system. HKD is pegged to USD (7.75\u20137.85 HKD = 1 USD). HSBC, Standard Chartered, and Bank of China (HK) are major banks. Transfers are fast and efficient.",
    methods: [
      {
        name: "Wise",
        fees: "0.3\u20130.7%",
        speed: "Within hours to 1 business day",
        exchangeRate: "Mid-market rate (near peg)",
        notes: "Best option. HKD peg makes costs predictable.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$40",
        speed: "1\u20132 business days",
        exchangeRate: "Near peg rate + 0.5\u20131% markup",
        notes: "Bank code (3 digits) + branch code (3 digits) + account number required.",
      },
      {
        name: "OFX",
        fees: "No transfer fee",
        speed: "1\u20132 business days",
        exchangeRate: "Near peg rate",
        notes: "Good for large amounts to Hong Kong.",
      },
      {
        name: "PayPal",
        fees: "2.5\u20134%",
        speed: "Instant to PayPal, 1\u20132 days to bank",
        exchangeRate: "3\u20134% markup",
        notes: "Only for small, quick transfers.",
      },
    ],
    regulations: [
      "HKMA regulates financial services",
      "No foreign exchange controls",
      "No restrictions on receiving international transfers",
      "Hong Kong has strong AML regulations",
    ],
    pitfalls: [
      "Hong Kong bank codes are different from mainland China bank codes",
      "Do not confuse HK bank accounts with mainland China accounts",
      "Some HSBC transfers can route through London, adding a day",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Hong Kong uses territorial taxation \u2014 only HK-sourced income is taxed",
      "No US-Hong Kong specific tax treaty (covered by US-China treaty provisions for some purposes)",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "HKD/USD peg means exchange rate risk is minimal",
      "Wise is extremely fast for HKD transfers",
      "HSBC has dual presence in US and HK \u2014 may offer internal transfers",
      "Consider maintaining a USD account at a HK bank",
    ],
  },

  taiwan: {
    name: "Taiwan",
    slug: "taiwan",
    flag: "\u{1F1F9}\u{1F1FC}",
    currency: "New Taiwan Dollar",
    currencyCode: "TWD",
    bankWireFee: "$25\u2013$45",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: true,
    specialNotes:
      "Taiwan has moderate foreign exchange regulations managed by its central banking authority. Foreign exchange transactions over $500,000 TWD require reporting. Mega Bank, CTBC, and E.Sun Bank are well-equipped for international transfers.",
    methods: [
      {
        name: "Wise",
        fees: "0.5\u20131.5%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best available rate for TWD transfers.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$45",
        speed: "1\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Standard for large amounts. Taiwanese bank account number + SWIFT code required.",
      },
      {
        name: "Payoneer",
        fees: "Up to 2%",
        speed: "2\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "Available for business transfers.",
      },
      {
        name: "Western Union",
        fees: "$5\u2013$25",
        speed: "Minutes (cash pickup) or 1\u20133 days (bank)",
        exchangeRate: "2\u20134% markup",
        notes: "Cash pickup available in Taiwan.",
      },
    ],
    regulations: [
      "Taiwan's central banking authority regulates foreign exchange",
      "Annual foreign exchange limit of $5 million USD for individuals",
      "Transfers over TWD 500,000 (~$15K) require reporting",
      "Banks may request purpose of transfer documentation",
    ],
    pitfalls: [
      "Taiwanese bank account format: branch code (4 digits) + account number",
      "Some Taiwanese banks have limited English-language SWIFT services",
      "Transfers during Lunar New Year holidays will be significantly delayed",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "Taiwan residents must report worldwide income to the local taxation bureau",
      "No formal US-Taiwan tax treaty (informal arrangements exist for some purposes)",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Wise offers the best TWD rate",
      "CTBC and E.Sun Bank have the best international transfer services",
      "Avoid Lunar New Year period for transfers",
      "Mega Bank has a New York branch \u2014 useful for direct transfers",
    ],
  },

  france: {
    name: "France",
    slug: "france",
    flag: "\u{1F1EB}\u{1F1F7}",
    currency: "Euro",
    currencyCode: "EUR",
    bankWireFee: "$25\u2013$45",
    typicalSpeed: "1\u20132 business days",
    swiftPrimary: false,
    specialNotes:
      "France is part of SEPA (Single Euro Payments Area). For US-to-France transfers, SWIFT is used. IBAN is required for all French bank accounts. Major banks include BNP Paribas, Soci\u00e9t\u00e9 G\u00e9n\u00e9rale, Cr\u00e9dit Agricole.",
    methods: [
      {
        name: "Wise",
        fees: "0.3\u20130.8%",
        speed: "1\u20132 business days",
        exchangeRate: "Mid-market rate",
        notes: "Best option for EUR transfers to France.",
      },
      {
        name: "Bank Wire (SWIFT)",
        fees: "$25\u2013$45",
        speed: "1\u20133 business days",
        exchangeRate: "1\u20132% markup",
        notes: "IBAN (27 characters starting with FR) + BIC code required.",
      },
      {
        name: "OFX",
        fees: "No transfer fee",
        speed: "1\u20132 business days",
        exchangeRate: "0.4\u20130.8% markup",
        notes: "Good for large amounts.",
      },
      {
        name: "Revolut",
        fees: "0\u20130.5%",
        speed: "Instant to Revolut, 1 day to bank",
        exchangeRate: "Near mid-market on weekdays",
        notes: "Very popular in France.",
      },
    ],
    regulations: [
      "Banque de France / ACPR regulates financial services",
      "No foreign exchange controls within EU",
      "IBAN mandatory for all bank transfers",
      "Tracfin (French FIU) monitors suspicious transactions",
    ],
    pitfalls: [
      "IBAN is mandatory \u2014 27 characters starting with FR",
      "French banks may charge \u20ac5\u201315 for receiving SWIFT transfers",
      "SEPA cannot be used for US-France transfers \u2014 must use SWIFT",
    ],
    taxImplications: [
      "No US withholding on LLC distributions (disregarded entity)",
      "French residents must report worldwide income to DGFiP (tax authority)",
      "US-France tax treaty provides favorable treatment",
      "France requires declaration of foreign accounts (Formulaire 3916)",
      "FBAR filing required if aggregate foreign accounts exceed $10,000",
    ],
    tips: [
      "Wise EUR transfers are often credited within hours",
      "For recurring transfers, set up Wise auto-convert",
      "French IBAN always starts with FR76 (the check digits vary)",
      "Revolut is a good alternative if the recipient already has an account",
    ],
  },
};

/** Get all available country slugs for transfer guides */
export function getTransferCountrySlugs(): string[] {
  return Object.keys(COUNTRY_TRANSFER_DATA);
}

/** Get transfer data for a specific country */
export function getTransferData(slug: string): CountryTransferData | undefined {
  return COUNTRY_TRANSFER_DATA[slug];
}
