import type { Metadata } from "next";
import { FilingSeasonPlaybookClient } from "@/components/guides/FilingSeasonPlaybookClient";

export const metadata: Metadata = {
  title:
    "April Filing Season Playbook: Your Week-by-Week Action Plan | TaxGuided.com",
  description:
    "An 8-week countdown to the April 15 tax deadline for foreign-owned LLCs. Week-by-week action plan covering document gathering, form preparation, review, and filing.",
  openGraph: {
    title: "April Filing Season Playbook: Your Week-by-Week Action Plan",
    description:
      "Step-by-step 8-week plan to file your foreign-owned LLC taxes on time. Avoid last-minute stress and penalties.",
    url: "https://taxguided.com/guides/filing-season-playbook",
    type: "website",
  },
  alternates: {
    canonical: "/guides/filing-season-playbook",
  },
};

export default function FilingSeasonPlaybookGuide() {
  return <FilingSeasonPlaybookClient />;
}
