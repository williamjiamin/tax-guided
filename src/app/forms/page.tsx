import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import {
  getExpansionCoverageSummary,
  getFormCountries,
  getForms,
} from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Global Tax Forms Library",
  description:
    "Browse the first TaxGuided forms library pages, with source-linked metadata for high-impact federal filing forms and an architecture ready to scale by country.",
  path: "/forms",
});

export default function FormsPage() {
  const forms = getForms();
  const countries = getFormCountries();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 1"
      title="Global Tax Forms Library"
      description="A source-linked forms library built for the world-class expansion plan. The public beta starts with high-impact U.S. forms and the same route model can now scale country by country."
      meta={[
        { label: "Public beta forms", value: String(summary.forms) },
        { label: "Seed countries", value: String(countries.length) },
        { label: "Architecture target", value: "5,000+" },
        { label: "Update model", value: "R2-ready" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Global Tax Forms Library",
          description:
            "TaxGuided forms library index for country-level tax form metadata and official source links.",
          url: absoluteUrl("/forms"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Forms", path: "/forms" },
        ])}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Coverage by country</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Each country index is designed to become a canonical landing page for official forms,
          instructions, due dates, penalties, and related guidance.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {countries.map((country) => (
            <Link
              key={country.code}
              href={`/forms/${country.code}`}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-[#c9a84c] hover:bg-white hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {country.code.toUpperCase()}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#0a1628]">{country.name}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {country.count} public beta {country.count === 1 ? "form" : "forms"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Seed library</h2>
        <div className="mt-6 space-y-4">
          {forms.map((form) => (
            <Link
              key={form.id}
              href={`/forms/${form.country}/${form.slug}`}
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-[#c9a84c] hover:shadow-sm"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {form.authority} Form {form.formNumber}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#0a1628]">{form.formName}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{form.description}</p>
                </div>
                <div className="shrink-0 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-600">
                  <p>Revision year: {form.currentRevisionYear}</p>
                  <p className="mt-1">Methods: {form.filingMethod.join(", ")}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
