import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — ForeignLLCTax.com",
  description:
    "Legal disclaimer for ForeignLLCTax.com. Important information about the limitations of our tax filing tools and educational content.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 px-6">
        <article className="max-w-3xl mx-auto prose prose-gray prose-sm">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
            Disclaimer
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Last updated: April 8, 2026
          </p>

          <h2>Not Tax or Legal Advice</h2>
          <p>
            The information provided on ForeignLLCTax.com — including articles,
            guides, calculators, Q&amp;A content, and filing tools — is for
            general educational and informational purposes only. It does not
            constitute tax advice, legal advice, or professional consulting of
            any kind.
          </p>
          <p>
            While we strive to keep all content accurate and up to date, tax
            laws and IRS rules change frequently. You should not rely solely on
            information from this website to make tax filing decisions.
          </p>

          <h2>Consult a Qualified Professional</h2>
          <p>
            Every tax situation is unique. We strongly recommend consulting a
            qualified tax professional (CPA, Enrolled Agent, or tax attorney)
            for advice specific to your circumstances — especially if your
            situation involves complex ownership structures, multiple entities,
            treaty benefits, or ECI determinations.
          </p>

          <h2>IRS Registered Tax Professional</h2>
          <p>
            The founder of ForeignLLCTax.com is an IRS-registered tax
            professional. Credentials can be verified through the{" "}
            <a
              href="https://irs.treasury.gov/rpo/rpo.jsf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              IRS Return Preparer Office Directory
            </a>
            . However, using this website does not create a tax
            preparer-client relationship.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            All form-filling tools on this site reference official IRS forms and
            instructions. We source our forms directly from{" "}
            <a
              href="https://www.irs.gov/forms-instructions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              IRS.gov
            </a>
            . However, we make no guarantee that all information is current or
            error-free. IRS forms and instructions are updated periodically, and
            there may be a delay between IRS updates and our tools reflecting
            those changes.
          </p>

          <h2>No Guarantee of Outcomes</h2>
          <p>
            Using our tools does not guarantee acceptance of your filing by the
            IRS, avoidance of penalties, or any particular tax outcome. You are
            solely responsible for the accuracy of information you enter and the
            timely filing of your returns.
          </p>

          <h2>Third-Party Links and Services</h2>
          <p>
            This website may contain links to third-party websites and services
            (e.g., IRS.gov, LLC formation providers, payment processors). We are
            not responsible for the content, privacy practices, or accuracy of
            third-party sites. Some links may be affiliate or partner links.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            ForeignLLCTax.com and RippaX Labs shall not be held liable for any
            losses, penalties, interest, or damages arising from your use of
            this website or reliance on information provided herein. See our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            for full details.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this disclaimer, contact us at:{" "}
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
