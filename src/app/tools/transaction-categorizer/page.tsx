import type { Metadata } from "next";
import { TxCategorizerClient } from "@/components/tools/TxCategorizerClient";

export const metadata: Metadata = {
  title:
    "Form 5472 Transaction Categorizer — Which Line Do Your Transactions Go On?",
  description:
    "Free tool to categorize your LLC transactions for Form 5472 Part IV. Enter your transactions and find out which line they belong on — capital contributions, service payments, and more.",
  openGraph: {
    title: "Form 5472 Transaction Categorizer",
    description:
      "Not sure which line of Form 5472 your transactions go on? We'll categorize them for you — free.",
    url: "https://taxguided.com/tools/transaction-categorizer",
    type: "website",
  },
  alternates: {
    canonical: "/tools/transaction-categorizer",
  },
};

export default function TxCategorizerPage() {
  return <TxCategorizerClient />;
}
