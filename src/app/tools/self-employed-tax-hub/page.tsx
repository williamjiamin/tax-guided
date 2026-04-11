import type { Metadata } from "next";
import { SelfEmployedTaxHubClient } from "@/components/tools/SelfEmployedTaxHubClient";

export const metadata: Metadata = {
  title: "Self-Employed Tax Hub (2026) | 1099 Tools, Deadlines & IRS Links",
  description:
    "A transparent starting point for freelancers, gig workers, and other 1099 filers. Use free tools for tax set-aside math, extension routing, deadline reminders, and official IRS links.",
  openGraph: {
    title: "Self-Employed Tax Hub (2026)",
    description:
      "Free tools and clear next steps for freelancers, side hustles, and 1099 workers before full filing.",
    url: "https://foreignllctax.com/tools/self-employed-tax-hub",
    type: "website",
  },
  alternates: {
    canonical: "/tools/self-employed-tax-hub",
  },
};

export default function SelfEmployedTaxHubPage() {
  return <SelfEmployedTaxHubClient />;
}
