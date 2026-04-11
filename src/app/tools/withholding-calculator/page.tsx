import type { Metadata } from "next";
import { WithholdingCalculatorClient } from "@/components/tools/WithholdingCalculatorClient";

export const metadata: Metadata = {
  title: "Section 1446 Partnership Withholding Calculator | ForeignLLCTax.com",
  description:
    "Calculate the required withholding tax on effectively connected taxable income (ECTI) allocated to foreign partners under Section 1446. Free calculator for partnerships.",
  openGraph: {
    title: "Section 1446 Partnership Withholding Calculator",
    description:
      "Calculate required withholding on ECTI allocated to foreign partners. 37% for individuals, 21% for corporations.",
    url: "https://foreignllctax.com/tools/withholding-calculator",
    type: "website",
  },
  alternates: {
    canonical: "/tools/withholding-calculator",
  },
};

export default function WithholdingCalculatorPage() {
  return <WithholdingCalculatorClient />;
}
