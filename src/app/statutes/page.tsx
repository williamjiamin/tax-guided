import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildBreadcrumbJsonLd, buildMetadata, absoluteUrl } from "@/lib/expansion/seo";
import {
  getExpansionCoverageSummary,
  getStatuteCodesByCountry,
  getStatuteCountries,
  getStatuteSections,
} from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Statutory text library",
  description:
    "Browse statute sections with plain-language summaries, amendment notes, cross-references, and primary-source links.",
  path: "/statutes",
});

export default function StatutesPage() {
  const countries = getStatuteCountries();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 6"
      title="Statutory text library"
      description="The statutory-text pillar is live with section-level records, source links, and routes that can scale into a much larger code library."
      meta={[
        { label: "Public sections", value: String(summary.statutes) },
        { label: "Seed countries", value: String(countries.length) },
        { label: "Target scale", value: "50,000+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Statutory text library",
          url: absoluteUrl("/statutes"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Statutes", path: "/statutes" },
        ])}
      />

      <section className="grid gap-4 md:grid-cols-2">
        {countries.map((country) => (
          <div key={country.code} className="rounded-3xl border border-gray-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {country.code.toUpperCase()}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{country.name}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {country.count} public section records
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {getStatuteCodesByCountry(country.code).map((code) => (
                <Link
                  key={`${country.code}-${code}`}
                  href={`/statutes/${country.code}/${code}`}
                  className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700 transition hover:bg-[#0a1628] hover:text-white"
                >
                  {code.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Direct deep links to every statute section. Eliminates the click-depth-3
          requirement for reaching e.g. /statutes/us/irc/61 — Googlebot can now
          follow a one-hop link from /statutes. */}
      {(() => {
        type Section = {
          country: string;
          statute: string;
          section: string;
          slug?: string;
          title: string;
        };
        const allSections: Section[] = [];
        for (const country of countries) {
          for (const code of getStatuteCodesByCountry(country.code)) {
            for (const sec of getStatuteSections(country.code, code)) {
              allSections.push({
                country: country.code,
                statute: code,
                section: sec.section,
                slug: sec.slug,
                title: sec.title,
              });
            }
          }
        }
        if (allSections.length === 0) return null;
        return (
          <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6">
            <h2 className="text-base font-semibold text-[#0a1628] mb-4">
              Browse every section
            </h2>
            <ul className="space-y-2 text-sm">
              {allSections.map((s) => (
                <li key={`${s.country}-${s.statute}-${s.section}`}>
                  <Link
                    href={`/statutes/${s.country}/${s.statute}/${s.slug ?? s.section}`}
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {s.country.toUpperCase()} {s.statute.toUpperCase()} §{s.section} —{" "}
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })()}

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
