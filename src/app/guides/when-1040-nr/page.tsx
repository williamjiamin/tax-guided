import type { Metadata } from "next";
import { WhenForm1040NrGuideClient } from "@/components/guides/WhenForm1040NrGuideClient";

export const metadata: Metadata = {
  title:
    "When Do Foreign LLC Owners Need Form 1040-NR? | TaxGuided.com",
  description:
    "Learn when foreign LLC owners must file Form 1040-NR. Covers ECI triggers, FDAP income, ITIN requirements, and how 1040-NR relates to Form 5472 filing.",
  openGraph: {
    title: "When Do Foreign LLC Owners Need Form 1040-NR?",
    description:
      "A decision guide for foreign LLC owners to determine whether they need to file Form 1040-NR with the IRS.",
    url: "https://taxguided.com/guides/when-1040-nr",
    type: "website",
  },
  alternates: {
    canonical: "/guides/when-1040-nr",
  },
};

export default function WhenForm1040NrGuide() {
  return <WhenForm1040NrGuideClient />;
}
