import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildBreadcrumbJsonLd, buildMetadata, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getDirectoryCountries, getDirectoryRegistries, getExpansionCoverageSummary } from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Practitioner directory sources",
  description:
    "Official registry and credential-verification sources for tax professionals, accountants, and preparers.",
  path: "/directory",
});

export default function DirectoryPage() {
  const registries = getDirectoryRegistries();
  const countries = getDirectoryCountries();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 12"
      title="Practitioner directory sources"
      description="The directory pillar is live as a high-trust registry layer built from official preparer and credential-verification sources instead of scraped marketing profiles."
      meta={[
        { label: "Public registries", value: String(summary.directoryRegistries) },
        { label: "Seed countries", value: String(countries.length) },
        { label: "Target scale", value: "10,000+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Practitioner directory sources",
          url: absoluteUrl("/directory"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Directory", path: "/directory" },
        ])}
      />

      <section className="grid gap-4 md:grid-cols-2">
        {registries.map((registry) => (
          <Link
            key={registry.id}
            href={`/directory/${registry.country}/${registry.slug}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {getCountryName(registry.country)} · {registry.authority}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{registry.name}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{registry.description}</p>
          </Link>
        ))}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
