import type { Metadata } from "next";
import { ProtectiveFiling1120fGuideClient } from "@/components/guides/ProtectiveFiling1120fGuideClient";

export const metadata: Metadata = {
  title:
    "Protective Filing of Form 1120-F for Foreign-Owned LLCs | ForeignLLCTax.com",
  description:
    "Learn about protective Form 1120-F filing — a strategy foreign-owned LLC owners use to preserve tax deductions in case the IRS later determines US trade or business exists.",
  openGraph: {
    title: "Protective Filing of Form 1120-F for Foreign LLC Owners",
    description:
      "Why foreign-owned LLCs with borderline US nexus should consider filing Form 1120-F on a protective basis.",
    url: "https://foreignllctax.com/guides/protective-filing-1120f",
    type: "website",
  },
  alternates: { canonical: "/guides/protective-filing-1120f" },
};

export default function ProtectiveFiling1120fGuidePage() {
  return <ProtectiveFiling1120fGuideClient />;
}
