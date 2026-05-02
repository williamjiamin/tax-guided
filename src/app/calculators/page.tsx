import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import { getCalculators, getExpansionCoverageSummary } from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Tax calculators",
  description:
    "Interactive tax calculators for deadlines, penalties, VAT, and state filing costs built from official source material.",
  path: "/calculators",
});

export default function CalculatorsPage() {
  const calculators = getCalculators();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 3"
      title="Tax calculators"
      description="The calculator pillar is live as working product, not just a plan. These tools turn official filing rules, rate tables, and penalty ladders into interactive workflows."
      meta={[
        { label: "Public calculators", value: String(summary.calculators) },
        { label: "Coverage model", value: "Deadline, cost, VAT, penalty" },
        { label: "Target scale", value: "200+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Tax calculators",
          url: absoluteUrl("/calculators"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Calculators", path: "/calculators" },
        ])}
      />

      <section className="grid gap-4 md:grid-cols-2">
        {calculators.map((calculator) => (
          <Link
            key={calculator.id}
            href={`/calculators/${calculator.slug}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {calculator.category}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{calculator.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{calculator.summary}</p>
          </Link>
        ))}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
