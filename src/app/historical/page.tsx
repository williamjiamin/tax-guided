import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import {
  getExpansionCoverageSummary,
  getHistoricalSeriesSummaries,
} from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Historical tax rate tables",
  description:
    "Browse seeded historical tax rate timelines designed for year-by-year tax history pages, comparison views, and source-linked rate references.",
  path: "/historical",
});

export default function HistoricalPage() {
  const series = getHistoricalSeriesSummaries();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 5"
      title="Historical tax rate tables"
      description="Year-anchored tax history pages are now live. The initial implementation focuses on U.S. corporate tax history and supports timeline and year-detail routes out of the box."
      meta={[
        { label: "Seed records", value: String(summary.historicalRates) },
        { label: "Seed series", value: String(series.length) },
        { label: "Target scale", value: "500+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Historical tax rate tables",
          url: absoluteUrl("/historical"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Historical", path: "/historical" },
        ])}
      />

      <div className="grid gap-4">
        {series.map((entry) => (
          <Link
            key={`${entry.country}-${entry.taxType}`}
            href={`/historical/${entry.country}/${entry.taxType}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {entry.country.toUpperCase()}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{entry.label}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {entry.count} seeded years · latest year {entry.latestYear}
            </p>
          </Link>
        ))}
      </div>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
