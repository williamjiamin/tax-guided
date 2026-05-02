import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildBreadcrumbJsonLd, buildMetadata, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getCasesByCourt } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; court: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, court } = await params;
  const cases = getCasesByCourt(country, court);
  if (!cases.length) {
    return {};
  }

  return buildMetadata({
    title: `${cases[0].court} tax cases`,
    description: `Browse ${cases[0].court} tax cases in the ${getCountryName(country)} library.`,
    path: `/case-law/${country}/${court}`,
  });
}

export default async function CourtCaseIndexPage({ params }: Props) {
  const { country, court } = await params;
  const cases = getCasesByCourt(country, court).reverse();
  if (!cases.length) {
    notFound();
  }

  const courtName = cases[0].court;
  const countryName = getCountryName(country);

  return (
    <ExpansionPageShell
      eyebrow="Court index"
      title={`${courtName} tax cases`}
      description={`Seeded tax cases from the ${courtName} in ${countryName}.`}
      backHref="/case-law"
      backLabel="All case law"
      meta={[
        { label: "Country", value: countryName },
        { label: "Court", value: courtName },
        { label: "Cases", value: String(cases.length) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${courtName} tax cases`,
          url: absoluteUrl(`/case-law/${country}/${court}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case law", path: "/case-law" },
          { name: courtName, path: `/case-law/${country}/${court}` },
        ])}
      />

      <section className="space-y-4">
        {cases.map((entry) => (
          <Link
            key={entry.id}
            href={`/case-law/${country}/${court}/${entry.decisionDate.slice(0, 4)}/${entry.slug ?? entry.id}`}
            className="block rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              {entry.decisionDate.slice(0, 4)}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{entry.caseName}</h2>
            <p className="mt-2 text-sm text-gray-500">{entry.citation}</p>
            <p className="mt-3 text-sm leading-6 text-gray-600">{entry.holding}</p>
          </Link>
        ))}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
