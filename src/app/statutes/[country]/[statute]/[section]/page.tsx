import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { getCountryName } from "@/lib/expansion/constants";
import { absoluteUrl, buildBreadcrumbJsonLd, buildMetadata } from "@/lib/expansion/seo";
import { getStatuteSection, getTaxCaseById } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; statute: string; section: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, statute, section } = await params;
  const entry = getStatuteSection(country, statute, section);
  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: `${entry.statute.toUpperCase()} section ${entry.section}`,
    description: entry.title,
    path: `/statutes/${country}/${statute}/${section}`,
  });
}

export default async function StatuteSectionPage({ params }: Props) {
  const { country, statute, section } = await params;
  const entry = getStatuteSection(country, statute, section);
  if (!entry) {
    notFound();
  }

  const relatedCases = entry.caseLaw.map((caseId) => getTaxCaseById(caseId));

  return (
    <ExpansionPageShell
      eyebrow="Statute section"
      title={`${entry.statute.toUpperCase()} section ${entry.section}`}
      description={entry.title}
      backHref={`/statutes/${country}/${statute}`}
      backLabel={`${getCountryName(country)} ${entry.statute.toUpperCase()} sections`}
      meta={[
        { label: "Country", value: getCountryName(country) },
        { label: "Section", value: entry.section },
        { label: "Updated", value: entry.lastUpdated.slice(0, 10) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Legislation",
          name: `${entry.statute.toUpperCase()} section ${entry.section}`,
          legislationIdentifier: entry.section,
          legislationJurisdiction: getCountryName(country),
          url: absoluteUrl(`/statutes/${country}/${statute}/${section}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Statutes", path: "/statutes" },
          { name: `${getCountryName(country)} ${entry.statute.toUpperCase()}`, path: `/statutes/${country}/${statute}` },
          { name: `Section ${entry.section}`, path: `/statutes/${country}/${statute}/${section}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Operative text</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">{entry.fullText}</p>

          {entry.amendmentHistory.length ? (
            <>
              <h2 className="mt-8 text-xl font-semibold text-gray-900">Amendment history</h2>
              <div className="mt-4 space-y-3">
                {entry.amendmentHistory.map((amendment) => (
                  <div key={`${amendment.date}-${amendment.description}`} className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">{amendment.date}</p>
                    {amendment.publicLaw ? <p className="mt-1">{amendment.publicLaw}</p> : null}
                    <p className="mt-2">{amendment.description}</p>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Cross-references</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.crossReferences.map((reference) => (
                <span
                  key={reference}
                  className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700"
                >
                  {reference}
                </span>
              ))}
            </div>
          </div>

          {entry.guidesOnSite.length ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.guidesOnSite.map((guide) => (
                  <Link
                    key={guide}
                    href={`/guides/${guide}`}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700 transition hover:bg-[#0a1628] hover:text-white"
                  >
                    {guide}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {entry.caseLaw.length ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-900">Related cases</h2>
              <div className="mt-4 space-y-2">
                {relatedCases.map((caseEntry, index) => (
                  caseEntry ? (
                    <Link
                      key={caseEntry.id}
                      href={`/case-law/${caseEntry.country}/${caseEntry.court.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/${caseEntry.decisionDate.slice(0, 4)}/${caseEntry.slug ?? caseEntry.id}`}
                      className="block rounded-2xl bg-gray-50 p-4 text-sm text-gray-700 transition hover:bg-white hover:shadow-sm"
                    >
                      <p className="font-semibold text-[#0a1628]">{caseEntry.caseName}</p>
                      <p className="mt-1 text-xs text-gray-500">{caseEntry.citation}</p>
                    </Link>
                  ) : (
                    <div
                      key={`${entry.caseLaw[index]}-missing`}
                      className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700"
                    >
                      {entry.caseLaw[index]}
                    </div>
                  )
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <SourceList sources={entry.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
