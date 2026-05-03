import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import {
  getExpansionCoverageSummary,
  getStateCountries,
  getStates,
} from "@/lib/expansion/repository";
import { getCountryName } from "@/lib/expansion/constants";

export const metadata = buildMetadata({
  title: "State and provincial tax library",
  description:
    "Country-by-country entry points for subnational tax coverage, including state income tax, franchise tax, sales tax, and filing-deadline snapshots.",
  path: "/states",
});

export default function StatesPage() {
  const countries = getStateCountries();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 2"
      title="State and provincial tax library"
      description="The expansion plan's subnational route family is live. Country-level landing pages can now branch into state, province, canton, or territory detail pages without changing the URL model."
      meta={[
        { label: "Seed jurisdictions", value: String(summary.states) },
        { label: "Seed countries", value: String(countries.length) },
        { label: "Target scale", value: "4,000+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "State and provincial tax library",
          url: absoluteUrl("/states"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "States", path: "/states" },
        ])}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {countries.map((country) => (
          <Link
            key={country.code}
            href={`/states/${country.code}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {country.code.toUpperCase()}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{country.name}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {country.count} seeded {country.count === 1 ? "jurisdiction" : "jurisdictions"}
            </p>
          </Link>
        ))}
      </section>

      {/* Direct deep links to every state. Click depth from /states is 1
          instead of 2, so Googlebot can reach state pages without traversing
          the country index page first. */}
      {(() => {
        const states = getStates();
        if (states.length === 0) return null;
        const byCountry = new Map<string, typeof states>();
        for (const s of states) {
          const list = byCountry.get(s.country) ?? [];
          list.push(s);
          byCountry.set(s.country, list);
        }
        return (
          <section className="mt-8 space-y-6">
            <h2 className="text-base font-semibold text-[#0a1628]">
              Browse every jurisdiction
            </h2>
            {Array.from(byCountry.entries()).map(([country, list]) => (
              <div key={country}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                  {getCountryName(country)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {list.map((state) => (
                    <Link
                      key={state.id}
                      href={`/states/${state.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700 hover:border-[#c9a84c] hover:text-[#0a1628]"
                    >
                      {state.state}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        );
      })()}

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
