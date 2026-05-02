import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName, getTaxTypeLabel } from "@/lib/expansion/constants";
import { getHistoricalEntry } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; taxType: string; year: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, taxType, year } = await params;
  const entry = getHistoricalEntry(country, taxType, Number(year));
  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: `${getCountryName(country)} ${getTaxTypeLabel(taxType)} in ${entry.year}`,
    description: `Historical ${getTaxTypeLabel(taxType)} detail for ${getCountryName(country)} in ${entry.year}.`,
    path: `/historical/${country}/${taxType}/${year}`,
  });
}

export default async function HistoricalYearPage({ params }: Props) {
  const { country, taxType, year } = await params;
  const entry = getHistoricalEntry(country, taxType, Number(year));

  if (!entry) {
    notFound();
  }

  const countryName = getCountryName(country);
  const taxTypeLabel = getTaxTypeLabel(taxType);

  return (
    <ExpansionPageShell
      eyebrow="Historical year detail"
      title={`${countryName} ${taxTypeLabel} in ${entry.year}`}
      description={entry.notes}
      backHref={`/historical/${country}/${taxType}`}
      backLabel={`${countryName} ${taxTypeLabel} history`}
      meta={[
        { label: "Country", value: countryName },
        { label: "Series", value: taxTypeLabel },
        { label: "Year", value: String(entry.year) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: `${countryName} ${taxTypeLabel} ${entry.year}`,
          url: absoluteUrl(`/historical/${country}/${taxType}/${entry.year}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Historical", path: "/historical" },
          { name: `${countryName} ${taxTypeLabel}`, path: `/historical/${country}/${taxType}` },
          { name: String(entry.year), path: `/historical/${country}/${taxType}/${entry.year}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Rate structure</h2>
          {entry.tableHeaders?.length && entry.tableRows?.length ? (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500">
                    {entry.tableHeaders.map((header) => (
                      <th key={header} className="px-3 py-2">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {entry.tableRows.map((row) => (
                    <tr key={row.join("|")} className="border-b border-gray-100">
                      {row.map((cell) => (
                        <td key={cell} className="px-3 py-3 text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500">
                    <th className="px-3 py-2">Min</th>
                    <th className="px-3 py-2">Max</th>
                    <th className="px-3 py-2">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {entry.brackets.map((bracket) => (
                    <tr key={`${bracket.min}-${bracket.max ?? "open"}`} className="border-b border-gray-100">
                      <td className="px-3 py-3">${bracket.min.toLocaleString()}</td>
                      <td className="px-3 py-3">
                        {bracket.max === null ? "No upper limit" : `$${bracket.max.toLocaleString()}`}
                      </td>
                      <td className="px-3 py-3 font-medium text-gray-900">{bracket.rate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Enacting authority</h2>
          <p className="mt-3 text-sm font-medium text-gray-900">{entry.enactingLegislation.name}</p>
          <p className="mt-1 text-sm text-gray-600">{entry.enactingLegislation.citation}</p>
          <a
            href={entry.enactingLegislation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-xl bg-[#0a1628] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#122544]"
          >
            Open legislation source
          </a>
          {entry.inflationAdjustedTo2026.length === 0 ? (
            <p className="mt-4 text-sm text-gray-600">
              Inflation-adjusted brackets have not been loaded for this starter record yet.
            </p>
          ) : null}
        </div>
      </section>

      <SourceList sources={entry.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
