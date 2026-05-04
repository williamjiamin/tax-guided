import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { getCountryName } from "@/lib/expansion/constants";
import { absoluteUrl, buildBreadcrumbJsonLd, buildMetadata } from "@/lib/expansion/seo";
import { getCaseByPath, getTaxCaseById } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; court: string; year: string; caseId: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, court, year, caseId } = await params;
  const entry = getCaseByPath(country, court, year, caseId);
  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: entry.caseName,
    description: entry.holding,
    path: `/case-law/${country}/${court}/${year}/${caseId}`,
  });
}

export default async function CaseDetailPage({ params }: Props) {
  const { country, court, year, caseId } = await params;
  const entry = getCaseByPath(country, court, year, caseId);
  if (!entry) {
    notFound();
  }

  const citedCases = entry.citedCases
    .map((relatedCaseId) => getTaxCaseById(relatedCaseId))
    .filter((relatedCase): relatedCase is NonNullable<typeof relatedCase> => Boolean(relatedCase));
  const citingCases = entry.citingCases
    .map((relatedCaseId) => getTaxCaseById(relatedCaseId))
    .filter((relatedCase): relatedCase is NonNullable<typeof relatedCase> => Boolean(relatedCase));

  return (
    <ExpansionPageShell
      eyebrow="Case detail"
      title={entry.caseName}
      description={entry.citation}
      backHref={`/case-law/${country}/${court}`}
      backLabel={`${entry.court} cases`}
      meta={[
        { label: "Court", value: entry.court },
        { label: "Date", value: entry.decisionDate },
        { label: "Outcome", value: entry.outcome },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "LegalCase",
          name: entry.caseName,
          datePublished: entry.decisionDate,
          court: {
            "@type": "Organization",
            name: entry.court,
          },
          url: absoluteUrl(`/case-law/${country}/${court}/${year}/${caseId}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case law", path: "/case-law" },
          { name: entry.court, path: `/case-law/${country}/${court}` },
          { name: entry.caseName, path: `/case-law/${country}/${court}/${year}/${caseId}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Holding</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">{entry.holding}</p>

          <h2 className="mt-8 text-xl font-semibold text-gray-900">Facts</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">{entry.facts}</p>

          <h2 className="mt-8 text-xl font-semibold text-gray-900">Reasoning</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">{entry.reasoning}</p>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Case metadata</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                Jurisdiction: {getCountryName(entry.country)}
              </div>
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                Topics: {entry.topics.join(", ")}
              </div>
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                Statutes applied: {entry.statutesApplied.join(", ")}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Official opinion</h2>
            <a
              href={entry.fullDecisionPdfUrl ?? entry.fullDecisionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-xl bg-[#0a1628] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#122544]"
            >
              Open official decision
            </a>
          </div>

          {citedCases.length ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-900">Cases cited</h2>
              <div className="mt-4 space-y-3">
                {citedCases.map((relatedCase) => (
                  <Link
                    key={relatedCase.id}
                    href={`/case-law/${relatedCase.country}/${relatedCase.court.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/${relatedCase.decisionDate.slice(0, 4)}/${relatedCase.slug ?? relatedCase.id}`}
                    className="block rounded-2xl bg-gray-50 p-4 text-sm text-gray-700 transition hover:bg-white hover:shadow-sm"
                  >
                    <p className="font-semibold text-[#0a1628]">{relatedCase.caseName}</p>
                    <p className="mt-1 text-xs text-gray-500">{relatedCase.citation}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {citingCases.length ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-900">Later cases in this library</h2>
              <div className="mt-4 space-y-3">
                {citingCases.map((relatedCase) => (
                  <Link
                    key={relatedCase.id}
                    href={`/case-law/${relatedCase.country}/${relatedCase.court.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/${relatedCase.decisionDate.slice(0, 4)}/${relatedCase.slug ?? relatedCase.id}`}
                    className="block rounded-2xl bg-gray-50 p-4 text-sm text-gray-700 transition hover:bg-white hover:shadow-sm"
                  >
                    <p className="font-semibold text-[#0a1628]">{relatedCase.caseName}</p>
                    <p className="mt-1 text-xs text-gray-500">{relatedCase.citation}</p>
                  </Link>
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
