import type { Metadata } from "next";
import { Itin1040NrConnectionGuideClient } from "@/components/guides/Itin1040NrConnectionGuideClient";

export const metadata: Metadata = {
  title:
    "ITIN and Form 1040-NR — How to Get Your Tax ID When Filing as a Nonresident | ForeignLLCTax.com",
  description:
    "Learn how to apply for an ITIN using Form W-7 when filing Form 1040-NR as a nonresident alien. Step-by-step guide covering the simultaneous application process, identity documents, and common mistakes.",
  openGraph: {
    title: "ITIN and Form 1040-NR — How to Get Your Tax ID When Filing as a Nonresident",
    description:
      "Step-by-step guide to getting an ITIN when you need to file Form 1040-NR. Learn the simultaneous application process, timeline, and common mistakes to avoid.",
    url: "https://foreignllctax.com/guides/itin-1040nr-connection",
    type: "website",
  },
  alternates: {
    canonical: "/guides/itin-1040nr-connection",
  },
};

export default function Itin1040NrConnectionGuide() {
  return <Itin1040NrConnectionGuideClient />;
}
