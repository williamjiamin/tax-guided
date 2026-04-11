import type { Metadata } from "next";
import { StartYourBusinessClient } from "@/components/guides/StartYourBusinessClient";

export const metadata: Metadata = {
  title: "How to Start a Foreign-Owned U.S. LLC — Step-by-Step Guide",
  description:
    "Free step-by-step guide to starting a foreign-owned U.S. LLC. Choose a formation service, register your LLC, open a bank account, set up payments, and understand your tax obligations.",
  alternates: { canonical: "/guides/start-your-business" },
};

export default function StartYourBusinessPage() {
  return <StartYourBusinessClient />;
}
