import type { Metadata } from "next";
import { Form5472NuancesGuideClient } from "@/components/guides/Form5472NuancesGuideClient";

export const metadata: Metadata = {
  title:
    "Form 5472 Nuances & Filing Tips Most Guides Miss | ForeignLLCTax.com",
  description:
    "Advanced Form 5472 tips: Part IV vs Part V, reference ID consistency, extension procedures, no e-file confirmation, Schedule K quirks, and the 25% ownership rule explained.",
  openGraph: {
    title: "Form 5472 Nuances & Filing Tips Most Guides Miss",
    description:
      "Advanced tips for Form 5472 filing that go beyond the basics — avoid costly mistakes with these expert insights.",
    url: "https://foreignllctax.com/guides/form-5472-nuances",
    type: "website",
  },
  alternates: { canonical: "/guides/form-5472-nuances" },
};

export default function Form5472NuancesGuidePage() {
  return <Form5472NuancesGuideClient />;
}
