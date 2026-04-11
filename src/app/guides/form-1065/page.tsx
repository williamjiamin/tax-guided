import type { Metadata } from "next";
import { Form1065GuideClient } from "@/components/guides/Form1065GuideClient";

export const metadata: Metadata = {
  title:
    "Form 1065 Guide — US Partnership Return for Foreign-Owned LLCs | ForeignLLCTax.com",
  description:
    "Complete guide to IRS Form 1065 for foreign-owned LLCs. Learn who must file, key schedules, deadlines, penalties, and common mistakes. Covers Schedule K-1, K-3, and international partnership rules.",
  openGraph: {
    title: "Form 1065 Guide — US Partnership Return for Foreign-Owned LLCs",
    description:
      "Everything foreign LLC owners need to know about filing Form 1065, the US partnership return. Deadlines, penalties, Schedule K-1 and K-3 explained.",
    url: "https://foreignllctax.com/guides/form-1065",
    type: "website",
  },
  alternates: {
    canonical: "/guides/form-1065",
  },
};

export default function Form1065GuidePage() {
  return <Form1065GuideClient />;
}
