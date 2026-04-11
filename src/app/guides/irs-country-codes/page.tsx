import type { Metadata } from "next";
import { IrsCountryCodesGuideClient } from "@/components/guides/IrsCountryCodesGuideClient";

export const metadata: Metadata = {
  title:
    "IRS Country Codes for Form 5472 — Complete Reference Guide | ForeignLLCTax.com",
  description:
    "IRS country codes differ from ISO codes. Using the wrong code on Form 5472 can cause processing issues. Find your correct IRS country code for tax forms.",
  openGraph: {
    title: "IRS Country Codes for Form 5472 — Complete Reference",
    description:
      "Don't use ISO country codes on IRS forms. Find the correct IRS country code for your nationality.",
    url: "https://foreignllctax.com/guides/irs-country-codes",
    type: "website",
  },
  alternates: { canonical: "/guides/irs-country-codes" },
};

export default function IrsCountryCodesGuidePage() {
  return <IrsCountryCodesGuideClient />;
}
