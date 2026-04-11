import type { Metadata } from "next";
import { FbarGuideClient } from "@/components/guides/FbarGuideClient";

export const metadata: Metadata = {
  title:
    "FBAR Guide (FinCEN 114) — Foreign Bank Account Reporting for LLC Owners | ForeignLLCTax.com",
  description:
    "Complete guide to FBAR (FinCEN Form 114) for foreign-owned LLC owners. Understand who must file, how FBAR relates to your LLC, FBAR vs FATCA, deadlines, penalties, and how to file via BSA E-Filing.",
  openGraph: {
    title: "FBAR Guide (FinCEN 114) — Foreign Bank Account Reporting for LLC Owners",
    description:
      "Everything foreign LLC owners need to know about FBAR filing — who must file, deadlines, penalties, FBAR vs FATCA, and common misconceptions.",
    url: "https://foreignllctax.com/guides/fbar",
    type: "website",
  },
  alternates: {
    canonical: "/guides/fbar",
  },
};

export default function FbarGuidePage() {
  return <FbarGuideClient />;
}
