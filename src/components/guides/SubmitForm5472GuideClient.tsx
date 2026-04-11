"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Shared icons                                                       */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"
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
  );
}

function WarningIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Table of contents data                                             */
/* ------------------------------------------------------------------ */

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "signature-requirements", label: "Signature Requirements" },
  { id: "option-fax", label: "Option 1: Fax (Recommended)" },
  { id: "option-mail", label: "Option 2: Mail" },
  { id: "approved-delivery-services", label: "IRS-Approved Delivery Services" },
  { id: "proof-of-filing", label: "Proof of Filing" },
  { id: "filing-deadline", label: "Filing Deadline" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "next-steps", label: "Next Steps" },
];

/* ------------------------------------------------------------------ */
/*  FAQ data                                                           */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "Can I e-file Form 5472?",
    a: "No. The IRS does not accept Form 5472 with a pro forma Form 1120 via e-file. You must submit by fax or mail. This applies to all foreign-owned single-member LLCs treated as disregarded entities.",
  },
  {
    q: "Do I need to sign with a real pen?",
    a: "It depends on your submission method. If you fax your return, an electronic signature drawn on screen and embedded in the PDF is fully accepted by the IRS. If you mail your return, you must print the forms and sign with a real pen (wet ink signature).",
  },
  {
    q: "What if I miss the filing deadline?",
    a: "File as soon as possible. The penalty for late or missing Form 5472 is $25,000 per form per year. However, the IRS may abate the penalty if you can demonstrate reasonable cause for the delay. Include a reasonable cause statement with your late filing explaining the circumstances.",
  },
  {
    q: "Can someone else sign for me?",
    a: "Only with proper authorization. You must file Form 2848 (Power of Attorney and Declaration of Representative) with the IRS to authorize a CPA, enrolled agent, or attorney to sign on your behalf. A general power of attorney from your home country is not sufficient.",
  },
  {
    q: "Do I need to include a payment with my filing?",
    a: "No. A pro forma Form 1120 filed by a foreign-owned disregarded entity reports zero taxable income and zero tax due. There is no payment required with this filing.",
  },
  {
    q: "How do I know the IRS received my filing?",
    a: "For fax submissions, your fax confirmation page serves as proof. It shows the date, time, and IRS fax number. For mailed submissions, use USPS Certified Mail (which provides a mailing receipt and delivery confirmation) or an IRS-approved private delivery service with tracking.",
  },
  {
    q: "Can I fax from my computer without a fax machine?",
    a: "Yes. Online fax services like Alohi Fax, eFax, and Fax.Plus let you send faxes directly from your computer or phone. Simply upload your signed PDF and enter the IRS fax number. No physical fax machine is needed.",
  },
  {
    q: "What if the IRS fax line is busy?",
    a: "The IRS fax line can occasionally be busy, especially close to filing deadlines. Most online fax services will automatically retry. Try again during off-peak hours (early morning or evening Eastern Time). If you cannot get through by the deadline, mail your return using an IRS-approved delivery service to preserve your timely filing proof.",
  },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function SubmitForm5472GuideClient() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/guides/start-your-business"
              className="hover:text-blue-600"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-gray-600">How to Submit Form 5472</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Filing Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Submit Form 5472 to the IRS
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Form 5472 with a pro forma Form 1120 cannot be e-filed. This guide
              walks you through the two accepted submission methods -- fax and
              mail -- including signature requirements, IRS addresses, and how to
              protect yourself from the $25,000 late filing penalty.
            </p>
          </div>

          {/* Key summary box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Form 5472 with pro forma 1120 cannot be e-filed -- fax or mail
                only
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Fax is the fastest and cheapest method -- no printing or postage
                required
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Electronic signatures drawn on screen are valid when faxing to
                the IRS
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Always keep proof of filing -- the penalty is $25,000 per form
                per year
              </li>
            </ul>
          </div>

          {/* Table of contents */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
            <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3">
              In This Guide
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-xs font-semibold text-gray-400 w-5">
                      {i + 1}.
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* -------------------------------------------------------- */}
          {/*  Section 1: Overview                                      */}
          {/* -------------------------------------------------------- */}
          <section
            id="overview"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Every foreign-owned single-member LLC that is treated as a
              disregarded entity for US tax purposes must file Form 5472
              (Information Return of a 25% Foreign-Owned U.S. Corporation)
              attached to a pro forma Form 1120 (U.S. Corporation Income Tax
              Return) each year.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Unlike most other IRS forms, Form 5472 with a pro forma 1120
              cannot be submitted electronically (e-filed). The IRS requires
              that this specific combination be submitted either by fax or by
              mail. This is not a limitation of ForeignLLCTax.com -- it is an
              IRS requirement that applies to all filers, including those who
              use CPAs or major tax preparation firms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-green-800 mb-2">
                  Option 1: Fax (Recommended)
                </h3>
                <ul className="space-y-1.5 text-sm text-green-900">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Fastest method
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    100% electronic -- no printing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Electronic signature accepted
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Instant confirmation
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  Option 2: Mail
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Traditional submission method
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Requires printing
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Wet ink signature required
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Slower delivery (days to weeks)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 2: Signature Requirements                        */}
          {/* -------------------------------------------------------- */}
          <section
            id="signature-requirements"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Signature Requirements
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The IRS requires a signature on Form 1120 (the cover return for
              your Form 5472). Understanding what counts as a valid signature
              will save you time and uncertainty.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <h3 className="text-sm font-bold text-blue-800 mb-2">
                The Key Rule
              </h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                The IRS requires what it calls a &quot;wet ink&quot; signature
                -- meaning a signature made by hand, not a typed name or
                DocuSign-style electronic signature. However, because the IRS
                accepts faxed submissions, a signature that is drawn on screen,
                embedded in the PDF, and then faxed is fully valid. The IRS
                provides a dedicated fax number specifically for this purpose.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-bold text-gray-800">
                What Counts as a Valid Signature
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="text-xs font-bold text-green-800 uppercase tracking-wide mb-2">
                    Accepted
                  </h4>
                  <ul className="space-y-2 text-sm text-green-900">
                    <li className="flex items-start gap-2">
                      <CheckIcon />
                      Pen signature on printed form (for mail)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon />
                      Electronic signature drawn on screen, embedded in PDF,
                      then faxed to IRS
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon />
                      Pen signature on printed form, then faxed to IRS
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="text-xs font-bold text-red-800 uppercase tracking-wide mb-2">
                    Not Accepted
                  </h4>
                  <ul className="space-y-2 text-sm text-red-900">
                    <li className="flex items-start gap-2">
                      <XIcon />
                      Typed name (e.g., /s/ John Smith)
                    </li>
                    <li className="flex items-start gap-2">
                      <XIcon />
                      DocuSign or similar e-signature platform
                    </li>
                    <li className="flex items-start gap-2">
                      <XIcon />
                      Pasted image of a signature without faxing
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-bold text-green-800 mb-2">
                How It Works on ForeignLLCTax.com
              </h3>
              <p className="text-sm text-green-900 leading-relaxed">
                Our filing tool includes a built-in signature pad. You draw your
                signature on screen using your mouse, trackpad, or finger (on
                mobile). This signature is embedded directly into the PDF. You
                then download the signed PDF and fax it to the IRS. This is the
                same process used by CPAs and major tax preparation firms.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <div>
                  <h3 className="text-sm font-bold text-amber-800 mb-1">
                    COVID E-Signature Program Does Not Apply
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    The IRS introduced a temporary e-signature program during
                    COVID-19, but it does not cover Form 1120 or Form 5472. Do
                    not rely on DocuSign or typed signatures for this filing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 3: Option 1 -- Fax                               */}
          {/* -------------------------------------------------------- */}
          <section
            id="option-fax"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Option 1: Fax (Recommended)
              </h2>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-green-900 leading-relaxed">
                Faxing is the fastest, cheapest, and most convenient way to
                submit Form 5472. The entire process is electronic -- no
                printing, no postage, no trip to the post office. This is the
                method we recommend for most filers.
              </p>
            </div>

            <h3 className="text-sm font-bold text-gray-800 mb-4">
              Step-by-Step Instructions
            </h3>
            <ol className="space-y-5 mb-8">
              {[
                {
                  step: 1,
                  title: "Complete your filing on ForeignLLCTax.com",
                  desc: "Enter your LLC information, ownership details, and reportable transactions in our step-by-step filer. The system generates your Form 5472 and pro forma Form 1120 automatically.",
                  link: { href: "/filer", text: "Start Filing Now" },
                },
                {
                  step: 2,
                  title: "Sign electronically using our signature pad",
                  desc: "On the signature step, draw your signature using your mouse, trackpad, or finger. Your signature is embedded directly into the PDF, creating a valid signed return for faxing.",
                },
                {
                  step: 3,
                  title: "Download your signed PDF",
                  desc: "After completing payment, download your signed filing package. This PDF contains your completed Form 1120 (with signature) and Form 5472, ready to fax.",
                },
                {
                  step: 4,
                  title: "Fax to the IRS",
                  desc: "Send your signed PDF to the IRS dedicated fax number. Use an online fax service -- no physical fax machine needed.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 mt-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        {item.link.text}
                        <svg
                          className="w-3.5 h-3.5"
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
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {/* IRS Fax Number */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
              <h3 className="text-sm font-bold text-blue-800 mb-2">
                IRS Fax Number
              </h3>
              <p className="text-2xl font-bold text-blue-900 mb-2">
                855-887-7737
              </p>
              <p className="text-sm text-blue-800">
                This is the dedicated IRS fax number for Form 5472 with pro
                forma Form 1120 filed by foreign-owned disregarded entities.
              </p>
            </div>

            {/* Recommended Fax Services */}
            <h3 className="text-sm font-bold text-gray-800 mb-3">
              Recommended Online Fax Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <a
                href="https://ref.alohi.com/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-blue-200 bg-blue-50/50 rounded-xl p-4 hover:border-blue-400 transition-colors"
              >
                <h4 className="text-sm font-bold text-gray-900 mb-1">
                  Alohi Fax
                </h4>
                <p className="text-xs text-gray-500">
                  Our recommended option. Simple interface, reliable delivery,
                  and keeps a permanent record of your fax confirmations.
                </p>
              </a>
              <div className="border border-gray-200 rounded-xl p-4">
                <h4 className="text-sm font-bold text-gray-900 mb-1">eFax</h4>
                <p className="text-xs text-gray-500">
                  Established online fax service. Offers a free trial for new
                  users. Available on desktop and mobile.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h4 className="text-sm font-bold text-gray-900 mb-1">
                  Fax.Plus
                </h4>
                <p className="text-xs text-gray-500">
                  Free tier available with limited pages. Good option if you
                  only need to send one fax per year.
                </p>
              </div>
            </div>

            {/* Fax Tips */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="text-sm font-bold text-green-800 mb-2">
                Tips for a Successful Fax
              </h3>
              <ul className="space-y-1.5 text-sm text-green-900">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Use at least 300 DPI resolution for clear, readable output
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Keep the fax confirmation page -- this is your proof of filing
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Fax during off-peak hours if the line is busy (early morning
                  or evening Eastern Time)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Verify the page count matches your filing package before
                  sending
                </li>
              </ul>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 4: Option 2 -- Mail                              */}
          {/* -------------------------------------------------------- */}
          <section
            id="option-mail"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Option 2: Mail
              </h2>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              If you prefer to mail your filing, you will need to print your
              forms, sign with a pen, and use a mailing method that provides
              proof of delivery.
            </p>

            <h3 className="text-sm font-bold text-gray-800 mb-4">
              Step-by-Step Instructions
            </h3>
            <ol className="space-y-5 mb-8">
              {[
                {
                  step: 1,
                  title: "Complete your filing on ForeignLLCTax.com",
                  desc: "Enter your LLC information, ownership details, and reportable transactions in our step-by-step filer.",
                  link: { href: "/filer", text: "Start Filing Now" },
                },
                {
                  step: 2,
                  title: "Download your PDF (without electronic signature)",
                  desc: "Download your filing package. Since you will be signing by hand, you can skip the electronic signature step.",
                },
                {
                  step: 3,
                  title: "Print the filing package",
                  desc: "Print all pages of your filing package on standard 8.5\" x 11\" paper. Use black ink and ensure all text is legible.",
                },
                {
                  step: 4,
                  title: "Sign with a pen on the \"Sign Here\" line",
                  desc: "Locate the signature area on Form 1120 and sign with a pen. Use blue or black ink. Also print your name, title, and date.",
                },
                {
                  step: 5,
                  title: "Mail to the IRS using Certified Mail or an approved delivery service",
                  desc: "Mail your signed filing package to the IRS address below. You MUST use USPS Certified Mail or an IRS-approved Private Delivery Service to have proof of timely filing.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 mt-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        {item.link.text}
                        <svg
                          className="w-3.5 h-3.5"
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
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {/* IRS Mailing Address */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
              <h3 className="text-sm font-bold text-blue-800 mb-2">
                IRS Mailing Address
              </h3>
              <div className="text-sm text-blue-900 font-mono leading-relaxed">
                <p>Internal Revenue Service</p>
                <p>1973 Rulon White Blvd</p>
                <p>M/S 6112 Attn: PIN Unit</p>
                <p>Ogden, UT 84201</p>
              </div>
            </div>

            {/* Mailing Cost Comparison */}
            <h3 className="text-sm font-bold text-gray-800 mb-3">
              Mailing Cost Comparison
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">
                      Service
                    </th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">
                      Cost
                    </th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">
                      Delivery Time
                    </th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-700">
                      Proof of Filing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-green-50/50">
                    <td className="py-3 px-3 font-medium text-gray-800">
                      USPS Certified Mail
                      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Best Value
                      </span>
                    </td>
                    <td className="py-3 px-3 text-gray-600">$4 -- $7</td>
                    <td className="py-3 px-3 text-gray-600">3 -- 5 days</td>
                    <td className="py-3 px-3 text-center">
                      <CheckIcon />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">
                      FedEx Priority Overnight
                    </td>
                    <td className="py-3 px-3 text-gray-600">$30+</td>
                    <td className="py-3 px-3 text-gray-600">Next business day</td>
                    <td className="py-3 px-3 text-center">
                      <CheckIcon />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">
                      UPS Next Day Air
                    </td>
                    <td className="py-3 px-3 text-gray-600">$30+</td>
                    <td className="py-3 px-3 text-gray-600">Next business day</td>
                    <td className="py-3 px-3 text-center">
                      <CheckIcon />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50/30">
                    <td className="py-3 px-3 font-medium text-gray-800">
                      Regular USPS Mail
                    </td>
                    <td className="py-3 px-3 text-gray-600">$0.73</td>
                    <td className="py-3 px-3 text-gray-600">3 -- 10 days</td>
                    <td className="py-3 px-3 text-center">
                      <XIcon />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <div>
                  <h3 className="text-sm font-bold text-amber-800 mb-1">
                    Never Use Regular Mail
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Regular USPS mail (first-class, priority) provides no proof
                    of delivery. If the IRS claims they never received your
                    filing, you will have no way to prove you sent it. With a
                    $25,000 penalty at stake, always use Certified Mail or an
                    IRS-approved private delivery service.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 5: IRS-Approved Private Delivery Services         */}
          {/* -------------------------------------------------------- */}
          <section
            id="approved-delivery-services"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              IRS-Approved Private Delivery Services
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The IRS maintains an official list of private delivery services
              (PDS) that qualify for the &quot;timely mailing treated as timely
              filing&quot; rule. Only the specific service levels listed below
              are approved. Using a non-approved service (such as FedEx Ground
              or UPS Ground) means you have no IRS-recognized proof of timely
              filing.
            </p>

            <div className="space-y-4 mb-6">
              {/* DHL */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  DHL Express
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Express 9:00",
                    "Express 10:30",
                    "Express 12:00",
                    "Express Worldwide",
                    "Express Envelope",
                    "Import Express 10:30",
                    "Import Express 12:00",
                    "Import Express Worldwide",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* FedEx */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  FedEx
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Priority Overnight",
                    "Standard Overnight",
                    "2Day",
                    "International Priority",
                    "International First",
                    "International Priority Express",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* UPS */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  UPS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next Day Air",
                    "Next Day Air Saver",
                    "2nd Day Air",
                    "2nd Day Air A.M.",
                    "Worldwide Express Plus",
                    "Worldwide Express",
                    "Worldwide Expedited",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="text-sm font-bold text-red-800 mb-2">
                NOT on the Approved List
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  "FedEx Ground",
                  "FedEx Home Delivery",
                  "UPS Ground",
                  "UPS SurePost",
                  "USPS Priority Mail",
                  "USPS First-Class Mail",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-red-100 border border-red-200 text-red-800 px-2.5 py-1 rounded-lg"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-sm text-red-800 leading-relaxed">
                These services are NOT recognized by the IRS for the timely
                filing rule. If your return arrives late or the IRS claims
                non-receipt, these services will not protect you from the
                $25,000 penalty. Always use USPS Certified Mail or one of the
                approved services listed above.
              </p>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 5b: International Courier Shipping Tips          */}
          {/* -------------------------------------------------------- */}
          <section className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Shipping from Overseas? Here&apos;s How to Do It Right
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              If you are filing Form 5472 from outside the United States, use an
              IRS-approved courier instead of regular international mail.
              Regular post can take 2-6 weeks and may get lost — with no proof
              of filing, you risk a $25,000 penalty.
            </p>

            <div className="bg-white rounded-xl border border-purple-100 p-4 mb-4">
              <h3 className="text-sm font-bold text-gray-800 mb-3">
                Shipping Label — What to Enter
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Receiver / To:</p>
                  <p className="font-mono text-xs leading-relaxed text-gray-600">
                    Internal Revenue Service<br />
                    1973 North Rulon White Boulevard<br />
                    M/S 6112 Attn: PIN Unit<br />
                    84201 Ogden, Utah<br />
                    United States of America<br />
                    Contact: +1 800-829-4933
                  </p>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Reference:</p>
                    <p className="text-xs text-gray-600">Form 5472 / Pro Forma 1120</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Contents:</p>
                    <p className="text-xs text-gray-600">Completed Forms</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Shipment type:</p>
                    <p className="text-xs text-gray-600">Documents (DOX) — no customs duties</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Weight:</p>
                    <p className="text-xs text-gray-600">~0.5 kg (typical for paper filing)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-purple-100 p-4 mb-4">
              <h3 className="text-sm font-bold text-gray-800 mb-2">
                Recommended Services for International Filers
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-yellow-100 border border-yellow-300 text-yellow-800 px-2 py-0.5 rounded-lg font-medium">DHL</span>
                  <span>Express Worldwide — $40-80 USD, 2-5 business days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-purple-100 border border-purple-300 text-purple-800 px-2 py-0.5 rounded-lg font-medium">FedEx</span>
                  <span>International Priority — $50-90 USD, 1-3 business days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-amber-100 border border-amber-300 text-amber-800 px-2 py-0.5 rounded-lg font-medium">UPS</span>
                  <span>Worldwide Express — $50-100 USD, 1-3 business days</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="text-sm font-bold text-green-800 mb-2">
                The Timely Mailing Rule Protects You
              </h3>
              <p className="text-sm text-green-900 leading-relaxed">
                When you use an IRS-approved courier, the date the courier
                accepts your package is your filing date — not the date the IRS
                receives it. If you ship on April 14 and it arrives April 20,
                you are considered to have filed on April 14. Keep your
                shipping receipt as proof.
              </p>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 6: Proof of Filing                               */}
          {/* -------------------------------------------------------- */}
          <section
            id="proof-of-filing"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Proof of Filing
            </h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <div>
                  <h3 className="text-sm font-bold text-amber-800 mb-1">
                    Why This Matters
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    The penalty for a late or missing Form 5472 is $25,000 per
                    form per year. If the IRS has no record of your filing and
                    you have no proof you submitted it, you may be assessed the
                    full penalty. Proof of filing is your insurance policy.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-green-800 mb-2">
                  Proof for Fax Submissions
                </h3>
                <ul className="space-y-1.5 text-sm text-green-900">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Fax confirmation page (shows date, time, and IRS fax number)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Save as PDF or screenshot and store permanently
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Online fax services keep a permanent record in your account
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-green-800 mb-2">
                  Proof for Mail Submissions
                </h3>
                <ul className="space-y-1.5 text-sm text-green-900">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    USPS Certified Mail receipt (PS Form 3800)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    USPS tracking number showing delivery confirmation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Private delivery service tracking number and delivery record
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
              <h3 className="text-sm font-bold text-blue-800 mb-2">
                How Long to Keep Your Proof
              </h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                Keep your proof of filing for at least 7 years. The IRS
                generally has 3 years to assess penalties, but this extends to 6
                years in cases of substantial understatement. For Form 5472,
                there is no statute of limitations if the form was never filed,
                so retaining your proof indefinitely is the safest approach.
              </p>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 7: Filing Deadline                                */}
          {/* -------------------------------------------------------- */}
          <section
            id="filing-deadline"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Filing Deadline
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">
                  Standard Deadline
                </p>
                <p className="text-2xl font-bold text-blue-900">April 15</p>
                <p className="text-sm text-blue-800 mt-1">
                  Same as the corporate tax return deadline
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">
                  Extended Deadline
                </p>
                <p className="text-2xl font-bold text-gray-900">October 15</p>
                <p className="text-sm text-gray-600 mt-1">
                  With Form 7004 (automatic 6-month extension)
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-bold text-green-800 mb-2">
                Requesting an Extension
              </h3>
              <p className="text-sm text-green-900 leading-relaxed">
                If you cannot file by April 15, you can request an automatic
                6-month extension by filing Form 7004 (Application for Automatic
                Extension of Time to File Certain Business Income Tax,
                Information, and Other Returns) on or before April 15. Form
                7004 can be e-filed. The extension moves your deadline to
                October 15.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <div>
                  <h3 className="text-sm font-bold text-amber-800 mb-1">
                    Extension Only Extends the Filing Deadline
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Since a pro forma Form 1120 for a disregarded entity reports
                    zero tax due, there is no payment deadline concern. However,
                    you must still file Form 7004 by April 15 to receive the
                    extension. Filing late without an extension can result in the
                    $25,000 penalty.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 8: FAQ                                           */}
          {/* -------------------------------------------------------- */}
          <section
            id="faq"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Section 9: Next Steps                                    */}
          {/* -------------------------------------------------------- */}
          <section
            id="next-steps"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Next Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/filer"
                className="block bg-blue-600 text-white rounded-xl p-5 hover:bg-blue-700 transition-colors"
              >
                <h3 className="text-sm font-bold mb-1">
                  Start Your Filing
                </h3>
                <p className="text-sm text-blue-100">
                  Complete your Form 5472 and pro forma Form 1120 in minutes
                  with our step-by-step filer.
                </p>
              </Link>
              <a
                href="https://ref.alohi.com/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
              >
                <h3 className="text-sm font-semibold text-blue-600 mb-1">
                  Get an Online Fax Service
                </h3>
                <p className="text-sm text-gray-500">
                  Alohi Fax lets you fax directly from your computer. No fax
                  machine needed.
                </p>
              </a>
              <Link
                href="/tools/deadline-reminder"
                className="block border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
              >
                <h3 className="text-sm font-semibold text-blue-600 mb-1">
                  Set a Deadline Reminder
                </h3>
                <p className="text-sm text-gray-500">
                  Never miss the April 15 deadline. Set up free email reminders
                  so you file on time.
                </p>
              </Link>
              <Link
                href="/tools/penalty-calculator"
                className="block border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
              >
                <h3 className="text-sm font-semibold text-blue-600 mb-1">
                  Penalty Calculator
                </h3>
                <p className="text-sm text-gray-500">
                  See the potential penalties for late or missing filings and
                  understand the stakes.
                </p>
              </Link>
            </div>
          </section>

          {/* Related resources */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "What Is Form 5472?",
                  desc: "Learn what Form 5472 is, who must file it, and what information it requires.",
                  href: "/guides/start-your-business",
                },
                {
                  title: "File Form 5472 Online",
                  desc: "Use our step-by-step filer to generate your Form 5472 and pro forma 1120.",
                  href: "/filer",
                },
                {
                  title: "Form 5472 Amendment Guide",
                  desc: "Need to correct a previously filed Form 5472? Learn how to file an amendment.",
                  href: "/guides/form-5472-amendment",
                },
                {
                  title: "Penalty Calculator",
                  desc: "Calculate the potential penalties for late or missing Form 5472 filings.",
                  href: "/tools/penalty-calculator",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-blue-600 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
