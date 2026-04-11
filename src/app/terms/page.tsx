import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — ForeignLLCTax.com",
  description:
    "Terms of Service for ForeignLLCTax.com. Read our terms governing the use of our IRS tax filing tools and services for foreign-owned U.S. LLCs.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 px-6">
        <article className="max-w-3xl mx-auto prose prose-gray prose-sm">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Last updated: April 8, 2026
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using ForeignLLCTax.com (the &quot;Site&quot;), operated by
            RippaX Labs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by
            these Terms of Service. If you do not agree, do not use the Site.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            ForeignLLCTax.com provides self-service tax form preparation tools
            that help foreign-owned U.S. LLC owners generate IRS Form 5472, pro
            forma Form 1120, and related tax documents. We also provide
            educational articles, calculators, and guides.
          </p>
          <p>
            We are <strong>not</strong> a law firm or CPA firm. Our tools assist
            you in preparing your own tax forms based on information you provide.
            We do not file returns on your behalf unless explicitly stated in a
            separate service agreement.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>
              Providing accurate, complete, and truthful information when using
              our tools.
            </li>
            <li>
              Reviewing all generated forms for accuracy before filing with the
              IRS.
            </li>
            <li>
              Timely filing of your tax returns with the appropriate IRS office.
            </li>
            <li>
              Consulting a qualified tax professional if you have questions about
              your specific tax situation.
            </li>
          </ul>

          <h2>4. Payments and Refunds</h2>
          <p>
            Payments are processed securely through Stripe. Prices are displayed
            before purchase. All sales are final once the filing package (PDF
            documents) has been generated and downloaded. If you experience a
            technical issue preventing document generation, contact us for
            assistance.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on ForeignLLCTax.com — including text, guides, tools,
            software, graphics, and design — is owned by RippaX Labs or its
            licensors and is protected by copyright and intellectual property
            laws. IRS forms and instructions are public domain U.S. government
            works.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, ForeignLLCTax.com and RippaX
            Labs shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of the
            Site, including but not limited to IRS penalties, late filing fees,
            or tax liabilities resulting from errors in information you provided.
          </p>
          <p>
            Our total liability for any claim arising from these Terms or your
            use of the Site shall not exceed the amount you paid to us in the
            twelve (12) months preceding the claim.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The Site and all services are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, whether express or
            implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of the Site is also governed by our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            , which describes how we collect, use, and protect your information.
          </p>

          <h2>9. Modifications</h2>
          <p>
            We may update these Terms at any time. Changes take effect when
            posted on this page. Your continued use of the Site after changes
            constitutes acceptance of the updated Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws
            of the State of Wyoming, United States, without regard to its
            conflict of law principles.
          </p>

          <h2>11. Contact</h2>
          <p>
            If you have questions about these Terms, contact us at:{" "}
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
