import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildBreadcrumbJsonLd, buildMetadata, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getExpansionCoverageSummary, getIndustryGuides } from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Industry tax guides",
  description:
    "Browse industry-specific tax guides for e-commerce, crypto, real estate, hospitality, consulting, and VAT-threshold workflows.",
  path: "/industry",
});

export default function IndustryPage() {
  const guides = getIndustryGuides();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 10"
      title="Industry tax guides"
      description="The industry pillar is live with sector-specific pages built around the real places businesses get tripped up: marketplace rules, FIRPTA, VAT category splits, and solo-operator thresholds."
      meta={[
        { label: "Public guides", value: String(summary.industryGuides) },
        { label: "Seed industries", value: String(guides.length) },
        { label: "Target scale", value: "500+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Industry tax guides",
          url: absoluteUrl("/industry"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industry", path: "/industry" },
        ])}
      />

      <section className="grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            href={`/industry/${guide.country}/${guide.slug ?? guide.industry}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {getCountryName(guide.country)} · {guide.industry}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{guide.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{guide.sections[0]?.body}</p>
          </Link>
        ))}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
