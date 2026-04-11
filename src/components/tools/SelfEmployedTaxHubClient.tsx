import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";

const WORKFLOW_STEPS = [
  {
    step: "1. Reserve first",
    title: "Estimate what to move out of your payout account",
    description:
      "Start with weekly income, miles, and ordinary expenses. The goal is a simple reserve target before you touch full filing software.",
    href: "/tools/gig-tax-set-aside",
    cta: "Open set-aside calculator",
  },
  {
    step: "2. Handle the deadline",
    title: "Use the fastest extension path if you are not ready",
    description:
      "When April pressure hits, route yourself to IRS payment, IRS Free File, or Form 4868 instead of guessing which path applies.",
    href: "/tools/file-tax-extension",
    cta: "Route my extension",
  },
  {
    step: "3. Stay on track",
    title: "Keep the reminder and follow-up layer in place",
    description:
      "Quarterly deadlines, refund-status confusion, and missed follow-through are where self-employed filers lose time and money.",
    href: "/tools/deadline-reminder",
    cta: "Set reminders",
  },
];

const TOOLKIT_CARDS = [
  {
    title: "1099 reserve math",
    description:
      "Mileage-aware weekly, monthly, and quarterly set-aside guidance for drivers, freelancers, resellers, and side hustles.",
    href: "/tools/gig-tax-set-aside",
  },
  {
    title: "Extension routing",
    description:
      "Fast answers for Form 4868, IRS Direct Pay as an extension move, or the right fallback when you are already late.",
    href: "/tools/file-tax-extension",
  },
  {
    title: "Refund and status guidance",
    description:
      "Know when Where's My Refund applies, when it is worth checking, and which IRS status path fits your filing.",
    href: "/tools/refund-status",
  },
  {
    title: "Reminder capture",
    description:
      "Set deadline reminders and stay in the loop if we ship a no-surprise self-employed filing product later.",
    href: "/tools/deadline-reminder",
  },
];

const WHAT_THIS_IS = [
  "A transparent starting point for 1099-NEC, 1099-K, freelance, and app-based income.",
  "A way to get the weekly reserve math, extension routing, and reminder layer in place before filing.",
  "A lightweight alternative to wandering into a full checkout flow before you even know what you owe.",
];

const WHAT_THIS_IS_NOT = [
  "Not a full Schedule C and Form 1040 filing product today.",
  "Not an automatic bank, Uber, or DoorDash account integration.",
  "Not a replacement for a CPA on multi-state, entity, payroll, or unusually complex returns.",
];

const OFFICIAL_SOURCES = [
  {
    label: "Sole proprietorship and self-employed basics",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/sole-proprietorships",
  },
  {
    label: "Estimated taxes and paying on time",
    href: "https://www.irs.gov/payments/pay-taxes-on-time",
  },
  {
    label: "Understanding Form 1099-K",
    href: "https://www.irs.gov/businesses/understanding-your-form-1099-k",
  },
  {
    label: "Get an extension to file your tax return",
    href: "https://www.irs.gov/filing/get-an-extension-to-file-your-tax-return",
  },
  {
    label: "IRS Free File",
    href: "https://www.irs.gov/filing/irs-free-file-do-your-taxes-for-free",
  },
];

export function SelfEmployedTaxHubClient() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_28%),linear-gradient(to_bottom,_#f8fbff,_#ffffff_42%,_#f8fafc)]">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
                Transparent 1099 workflow
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
                Self-Employed Tax Hub
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                Start here if you are paid through apps, clients, or marketplaces and
                want the plain-English version first. This hub packages the free tools
                that help before full filing: reserve math, extension routing,
                deadline reminders, and official IRS links.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  Built for 1099-NEC and 1099-K income
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  No account needed to start
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                  Uses official IRS guidance
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/tools/gig-tax-set-aside"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition-colors hover:bg-sky-700"
                >
                  Estimate my tax set-aside
                </Link>
                <Link
                  href="/tools/file-tax-extension"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Find my extension path
                </Link>
              </div>
            </div>

            <div className="mt-10 max-w-4xl rounded-[2rem] border border-amber-200 bg-amber-50/80 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                Scope note
              </p>
              <p className="mt-3 text-sm leading-relaxed text-amber-950">
                This page is intentionally honest about scope. It helps with the setup
                work that self-employed filers usually need first, but it is not a full
                Form 1040 or Schedule C filing flow today.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {WORKFLOW_STEPS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                    {item.step}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-sky-700 transition-colors hover:text-sky-800"
                  >
                    {item.cta}
                    <svg
                      className="ml-1.5 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Why this exists
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                The trust problem is real. The wedge is clarity before checkout.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                We verified the market before shipping this page. The loudest pain is
                not that tax software exists. It is that self-employed filers often hit
                pricing and complexity walls after they have already invested time. This
                hub takes the opposite approach: useful free tools first, explicit scope
                second, and no pretending we already built a full filing product when we
                have not.
              </p>

              <div className="mt-6 grid gap-4">
                {TOOLKIT_CARDS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-3xl border border-gray-200 bg-gray-50 px-5 py-4 transition hover:border-sky-200 hover:bg-sky-50/50"
                  >
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  What this helps with
                </p>
                <div className="mt-4 space-y-3">
                  {WHAT_THIS_IS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white/80 p-4"
                    >
                      <span className="mt-0.5 text-emerald-600">+</span>
                      <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-gray-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                  What this does not do yet
                </p>
                <div className="mt-4 space-y-3">
                  {WHAT_THIS_IS_NOT.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/80 p-4"
                    >
                      <span className="mt-0.5 text-slate-500">-</span>
                      <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Official IRS paths
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-950">
                Use the public rules, not platform folklore
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                These are the IRS pages we want self-employed visitors to reach quickly
                when they need the primary source on extensions, payments, or 1099
                reporting.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {OFFICIAL_SOURCES.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium text-gray-700 transition hover:border-sky-200 hover:bg-sky-50/50 hover:text-sky-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <EmailCaptureBanner
              title="Want transparent self-employed filing if we build it?"
              subtitle="Join the list for 1099 reminders now and first access if we launch a no-surprise filing flow later."
              successTitle="You’re on the 1099 list."
              successSubtitle="We’ll send the current tools and let you know if a transparent filing product ships."
              ctaLabel="Join the list"
              source="self-employed-tax-hub"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
