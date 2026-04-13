import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — TaxGuided.com",
  description:
    "Privacy Policy for TaxGuided.com. Learn how we collect, use, and protect your personal information when using our tax filing tools.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 px-6">
        <article className="max-w-3xl mx-auto prose prose-gray prose-sm">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Last updated: April 8, 2026
          </p>

          <h2>1. Introduction</h2>
          <p>
            TaxGuided.com, operated by RippaX Labs (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;), respects your privacy. This Privacy Policy explains what
            information we collect, how we use it, and your rights regarding
            your data.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>
              <strong>Tax form data:</strong> Information you enter into our
              filing tools (LLC name, EIN, owner details, transaction amounts).
              This data is processed in your browser and used solely to generate
              your tax documents.
            </li>
            <li>
              <strong>Email address:</strong> If you sign up for an account,
              purchase a service, or subscribe to reminders.
            </li>
            <li>
              <strong>Payment information:</strong> Processed directly by Stripe.
              We do not store credit card numbers on our servers.
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Usage data:</strong> Pages visited, features used, and
              general interaction patterns (via Cloudflare analytics).
            </li>
            <li>
              <strong>Device information:</strong> Browser type, operating
              system, and screen resolution for optimizing your experience.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To generate and deliver your tax filing documents.</li>
            <li>To process payments and provide purchase confirmations.</li>
            <li>
              To send transactional emails (purchase receipts, magic link
              authentication, filing reminders you opted into).
            </li>
            <li>To improve our tools, content, and user experience.</li>
            <li>To respond to your support inquiries.</li>
          </ul>

          <h2>4. Data Storage and Security</h2>
          <p>
            Tax form data you enter is processed primarily in your browser
            (client-side). Generated PDFs are created server-side and delivered
            to you immediately — we do not retain copies of your completed tax
            forms.
          </p>
          <p>
            Account and session data is stored securely using Cloudflare Workers
            KV with encryption at rest. Payment data is handled entirely by
            Stripe in accordance with PCI DSS standards.
          </p>

          <h2>5. Data Sharing</h2>
          <p>We do not sell, rent, or trade your personal information. We share data only with:</p>
          <ul>
            <li>
              <strong>Stripe:</strong> For payment processing.
            </li>
            <li>
              <strong>Resend:</strong> For transactional email delivery.
            </li>
            <li>
              <strong>Cloudflare:</strong> For hosting, security, and analytics.
            </li>
          </ul>
          <p>
            We may disclose information if required by law or to protect our
            rights.
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use essential cookies for authentication (session tokens) and
            locale preferences. We do not use advertising or tracking cookies.
            Cloudflare may set security cookies (e.g., bot detection) as part of
            its CDN service.
          </p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>
              Request data portability (we can provide your data in a standard
              format).
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:info@foreignllctax.com"
              className="text-blue-600 hover:underline"
            >
              info@foreignllctax.com
            </a>
            .
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We retain account information for as long as your account is active.
            Email subscription data is retained until you unsubscribe. Payment
            records are retained as required by applicable tax and financial
            regulations.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted on this page with an updated &quot;Last updated&quot; date.
          </p>

          <h2>11. Contact</h2>
          <p>
            For privacy-related questions, contact us at:{" "}
            <a
              href="mailto:info@foreignllctax.com"
              className="text-blue-600 hover:underline"
            >
              info@foreignllctax.com
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
