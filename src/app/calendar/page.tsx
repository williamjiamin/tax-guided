import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import {
  getComplianceCountries,
  getComplianceDeadlines,
  getExpansionCoverageSummary,
} from "@/lib/expansion/repository";

function formatDate(value: string): string {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const metadata = buildMetadata({
  title: "Compliance calendar",
  description:
    "Track seeded tax deadlines by country and jurisdiction, with official-source links for filing timing, extensions, and penalty notes.",
  path: "/calendar",
});

export default function CalendarPage() {
  const deadlines = getComplianceDeadlines();
  const countries = getComplianceCountries();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 9"
      title="Compliance calendar"
      description="The master deadline layer is now live with country filters, date-ordered entries, and schema-ready records for future ICS exports and year/month drill-down pages."
      meta={[
        { label: "Seed deadlines", value: String(summary.deadlines) },
        { label: "Countries", value: String(countries.length) },
        { label: "Target scale", value: "100+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Compliance calendar",
          url: absoluteUrl("/calendar"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Calendar", path: "/calendar" },
        ])}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {countries.map((country) => (
          <Link
            key={country.code}
            href={`/calendar/${country.code}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {country.code.toUpperCase()}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{country.name}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {country.count} seeded {country.count === 1 ? "deadline" : "deadlines"}
            </p>
          </Link>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Upcoming seeded deadlines</h2>
        <div className="mt-6 space-y-4">
          {deadlines.map((deadline) => (
            <div
              key={deadline.id}
              className="rounded-2xl border border-gray-200 p-5"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {deadline.country.toUpperCase()} · {deadline.jurisdiction}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0a1628]">{deadline.description}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{deadline.penalty}</p>
                </div>
                <div className="rounded-2xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900">
                  {formatDate(deadline.dueDate)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
