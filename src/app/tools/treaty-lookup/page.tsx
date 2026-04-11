import type { Metadata } from "next";
import { TreatyLookupClient } from "@/components/tools/TreatyLookupClient";

export const metadata: Metadata = {
  title: "U.S. Tax Treaty Benefits Lookup | ForeignLLCTax.com",
  description:
    "Check tax treaty benefits between your country and the United States. Compare withholding rates on dividends, interest, and royalties. Free lookup tool.",
  openGraph: {
    title: "U.S. Tax Treaty Benefits Lookup",
    description:
      "Check tax treaty benefits between your country and the US. Compare withholding rates on dividends, interest, and royalties.",
    url: "https://foreignllctax.com/tools/treaty-lookup",
    type: "website",
  },
  alternates: {
    canonical: "/tools/treaty-lookup",
  },
};

export default function TreatyLookupPage() {
  return <TreatyLookupClient />;
}
