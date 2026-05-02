import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName, getTaxTypeLabel } from "@/lib/expansion/constants";
import { getHistoricalTimeline } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; taxType: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, taxType } = await params;
  const timeline = getHistoricalTimeline(country, taxType);
  if (!timeline.length) {
    return {};
  }

  return buildMetadata({
    title: `${getCountryName(country)} ${getTaxTypeLabel(taxType)} history`,
    description: `Historical timeline for ${getCountryName(country)} ${getTaxTypeLabel(taxType)}.`,
    path: `/historical/${country}/${taxType}`,
  });
}

export default async function HistoricalTimelinePage({ params }: Props) {
  const { country, taxType } = await params;
  const timeline = getHistoricalTimeline(country, taxType);

  if (!timeline.length) {
    notFound();
  }

  const countryName = getCountryName(country);
  const taxTypeLabel = getTaxTypeLabel(taxType);
  const sources = Array.from(
    new Map(timeline.flatMap((entry) => entry.sources).map((source) => [source.url, source])).values()
  );

  return (
    <ExpansionPageShell
      eyebrow="Historical rates"
      title={`${countryName} ${taxTypeLabel} history`}
      description={`A year-by-year entry point for ${countryName} ${taxTypeLabel}. The detail pages are optimized for queries like “what was the tax rate in [year]?”`}
      backHref="/historical"
      backLabel="All historical series"
      meta={[
        { label: "Country", value: countryName },
        { label: "Series", value: taxTypeLabel },
        { label: "Seed years", value: String(timeline.length) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: `${countryName} ${taxTypeLabel} history`,
          url: absoluteUrl(`/historical/${country}/${taxType}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Historical", path: "/historical" },
          { name: `${countryName} ${taxTypeLabel}`, path: `/historical/${country}/${taxType}` },
        ])}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <div className="space-y-4">
          {timeline.map((entry) => (
            <Link
              key={entry.id}
              href={`/historical/${country}/${taxType}/${entry.year}`}
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-[#c9a84c] hover:shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#0a1628]">{entry.year}</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{entry.notes}</p>
                </div>
                <div className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-600">
                  <p>Legislation</p>
                  <p className="mt-1 font-medium text-gray-900">{entry.enactingLegislation.citation}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SourceList sources={sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
