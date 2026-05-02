import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildBreadcrumbJsonLd, buildMetadata, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getExpansionCoverageSummary, getTaxCases } from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Tax case law library",
  description:
    "Browse tax cases with plain-language holdings, facts, reasoning, and direct links to official opinions.",
  path: "/case-law",
});

export default function CaseLawPage() {
  const cases = getTaxCases().reverse();
  const summary = getExpansionCoverageSummary();
  const countries = Array.from(new Set(cases.map((entry) => entry.country)));

  return (
    <ExpansionPageShell
      eyebrow="Pillar 7"
      title="Tax case law library"
      description="The case-law pillar is live with case briefs, holdings, reasoning summaries, and direct links to official opinions."
      meta={[
        { label: "Public cases", value: String(summary.cases) },
        { label: "Seed countries", value: String(countries.length) },
        { label: "Target scale", value: "20,000+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Tax case law library",
          url: absoluteUrl("/case-law"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case law", path: "/case-law" },
        ])}
      />

      <section className="space-y-4">
        {cases.map((entry) => {
          const year = entry.decisionDate.slice(0, 4);
          const courtSlug = entry.court.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
          return (
            <Link
              key={entry.id}
              href={`/case-law/${entry.country}/${courtSlug}/${year}/${entry.slug ?? entry.id}`}
              className="block rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {getCountryName(entry.country)} · {entry.court} · {year}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{entry.caseName}</h2>
              <p className="mt-2 text-sm text-gray-500">{entry.citation}</p>
              <p className="mt-3 text-sm leading-6 text-gray-600">{entry.holding}</p>
            </Link>
          );
        })}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
