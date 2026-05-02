import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildBreadcrumbJsonLd, buildMetadata, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getStatuteSections } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; statute: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, statute } = await params;
  const sections = getStatuteSections(country, statute);
  if (!sections.length) {
    return {};
  }

  return buildMetadata({
    title: `${getCountryName(country)} ${statute.toUpperCase()} sections`,
    description: `Section index for ${getCountryName(country)} ${statute.toUpperCase()}.`,
    path: `/statutes/${country}/${statute}`,
  });
}

export default async function StatuteCodePage({ params }: Props) {
  const { country, statute } = await params;
  const sections = getStatuteSections(country, statute);
  if (!sections.length) {
    notFound();
  }

  const countryName = getCountryName(country);
  const codeLabel = statute.toUpperCase();

  return (
    <ExpansionPageShell
      eyebrow="Statute code"
      title={`${countryName} ${codeLabel} sections`}
      description={`Seeded section records for ${countryName} ${codeLabel}.`}
      backHref="/statutes"
      backLabel="All statutes"
      meta={[
        { label: "Country", value: countryName },
        { label: "Code", value: codeLabel },
        { label: "Sections", value: String(sections.length) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${countryName} ${codeLabel} sections`,
          url: absoluteUrl(`/statutes/${country}/${statute}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Statutes", path: "/statutes" },
          { name: `${countryName} ${codeLabel}`, path: `/statutes/${country}/${statute}` },
        ])}
      />

      <section className="space-y-4">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/statutes/${country}/${statute}/${section.slug ?? section.section}`}
            className="block rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Section {section.section}
              {section.subsection ? `(${section.subsection})` : ""}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{section.fullText}</p>
          </Link>
        ))}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
