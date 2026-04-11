import type { Metadata } from "next";
import { FormsWizardClient } from "@/components/tools/FormsWizardClient";

export const metadata: Metadata = {
  title: "Which IRS Forms Do I Need? — Free Assessment | ForeignLLCTax.com",
  description:
    "Find out which IRS forms your foreign-owned LLC needs to file. Answer a few questions and get a personalized list of required forms, due dates, and penalties. Free interactive wizard.",
  openGraph: {
    title: "Which IRS Forms Do I Need? — Free Assessment",
    description:
      "Answer a few questions to find out which IRS forms your foreign-owned LLC must file. Free interactive wizard.",
    url: "https://foreignllctax.com/tools/forms-wizard",
    type: "website",
  },
  alternates: {
    canonical: "/tools/forms-wizard",
  },
};

export default function FormsWizardPage() {
  return <FormsWizardClient />;
}
