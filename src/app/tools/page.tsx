import type { Metadata } from "next";
import { ToolsPageClient } from "@/components/tools/ToolsPageClient";

export const metadata: Metadata = {
  title: "Free Tax Tools — Calculators, Guides & Assessments",
  description:
    "Free interactive tax tools for foreign LLC owners, self-employed workers, and deadline-driven filers. Calculators, extension guidance, refund tracking, compliance checklists, treaty lookups, and more — no account needed.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
