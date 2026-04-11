import type { Metadata } from "next";
import { EinGuideClient } from "@/components/tools/EinGuideClient";

export const metadata: Metadata = {
  title: "How to Get an EIN for Your Foreign-Owned LLC — Free Guide",
  description:
    "Step-by-step guide to getting an Employer Identification Number (EIN) for your foreign-owned U.S. LLC. Apply online, by fax, or by mail. Free — no sign-up required.",
  openGraph: {
    title: "How to Get an EIN for Your Foreign-Owned LLC",
    description:
      "Step-by-step guide to getting an EIN for your LLC. Online, fax, or mail options explained.",
    url: "https://foreignllctax.com/tools/ein-guide",
    type: "website",
  },
  alternates: {
    canonical: "/tools/ein-guide",
  },
};

export default function EinGuidePage() {
  return <EinGuideClient />;
}
