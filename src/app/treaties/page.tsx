import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildBreadcrumbJsonLd, buildMetadata, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getExpansionCoverageSummary, getTreaties } from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Tax treaties library",
  description:
    "Browse source-linked treaty pages covering withholding, permanent establishment, pensions, and article-level practical summaries.",
  path: "/treaties",
});

export default function TreatiesPage() {
  const treaties = getTreaties();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 4"
      title="Tax treaties library"
      description="The treaty pillar is live with real article summaries, withholding snapshots, and source links to the full treaty documents."
      meta={[
        { label: "Public treaties", value: String(summary.treaties) },
        { label: "Coverage model", value: "Article + withholding + PE" },
        { label: "Target scale", value: "3,000+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Tax treaties library",
          url: absoluteUrl("/treaties"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Treaties", path: "/treaties" },
        ])}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {treaties.map((treaty) => (
          <Link
            key={treaty.id}
            href={`/treaties/${treaty.slug ?? treaty.id}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {getCountryName(treaty.countryA)} · {getCountryName(treaty.countryB)}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">
              {getCountryName(treaty.countryA)} - {getCountryName(treaty.countryB)}
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Signed {treaty.signedDate}. Interest {treaty.withholdingMatrix.interest.rate}%,
              royalties {treaty.withholdingMatrix.royalties.rate}% in the seeded summary.
            </p>
          </Link>
        ))}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
