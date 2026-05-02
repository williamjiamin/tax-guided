import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getComplianceDeadlinesByCountry } from "@/lib/expansion/repository";

function formatDate(value: string): string {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country } = await params;
  const deadlines = getComplianceDeadlinesByCountry(country);
  if (!deadlines.length) {
    return {};
  }

  return buildMetadata({
    title: `${getCountryName(country)} tax deadlines`,
    description: `Seeded tax deadline tracker for ${getCountryName(country)}.`,
    path: `/calendar/${country}`,
  });
}

export default async function CountryCalendarPage({ params }: Props) {
  const { country } = await params;
  const deadlines = getComplianceDeadlinesByCountry(country);
  if (!deadlines.length) {
    notFound();
  }

  const countryName = getCountryName(country);
  const sources = Array.from(
    new Map(deadlines.flatMap((deadline) => deadline.sources).map((source) => [source.url, source])).values()
  );

  return (
    <ExpansionPageShell
      eyebrow="Compliance calendar"
      title={`${countryName} tax deadlines`}
      description={`Seeded deadline records for ${countryName}. The calendar schema is designed to expand into country, year, month, and export views.`}
      backHref="/calendar"
      backLabel="All calendar countries"
      meta={[
        { label: "Country", value: countryName },
        { label: "Seed deadlines", value: String(deadlines.length) },
      ]}
    >
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Calendar", path: "/calendar" },
          { name: countryName, path: `/calendar/${country}` },
        ])}
      />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${countryName} tax deadlines`,
          url: absoluteUrl(`/calendar/${country}`),
        }}
      />

      <section className="space-y-4">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="rounded-3xl border border-gray-200 bg-white p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {deadline.jurisdiction} · {deadline.taxType}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{deadline.description}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{deadline.penalty}</p>
                <p className="mt-3 text-sm text-gray-600">
                  Extension available:{" "}
                  <span className="font-medium text-gray-900">
                    {deadline.extensionAvailable ? "Yes" : "No"}
                  </span>
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900">
                {formatDate(deadline.dueDate)}
              </div>
            </div>
          </div>
        ))}
      </section>

      <SourceList sources={sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
