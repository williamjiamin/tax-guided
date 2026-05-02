import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { getCountryName } from "@/lib/expansion/constants";
import { absoluteUrl, buildBreadcrumbJsonLd, buildMetadata } from "@/lib/expansion/seo";
import { getTreatyBySlug } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ countryPair: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { countryPair } = await params;
  const treaty = getTreatyBySlug(countryPair);
  if (!treaty) {
    return {};
  }

  const title = `${getCountryName(treaty.countryA)} - ${getCountryName(treaty.countryB)} tax treaty`;

  return buildMetadata({
    title,
    description: `Withholding, permanent-establishment, and article summary page for the ${title.toLowerCase()}.`,
    path: `/treaties/${treaty.slug ?? treaty.id}`,
  });
}

export default async function TreatyDetailPage({ params }: Props) {
  const { countryPair } = await params;
  const treaty = getTreatyBySlug(countryPair);
  if (!treaty) {
    notFound();
  }

  const title = `${getCountryName(treaty.countryA)} - ${getCountryName(treaty.countryB)} tax treaty`;

  return (
    <ExpansionPageShell
      eyebrow="Treaty detail"
      title={title}
      description="A practical treaty page built around the official treaty text, key withholding categories, permanent-establishment rules, and article-level summaries."
      backHref="/treaties"
      backLabel="All treaties"
      meta={[
        { label: "Signed", value: treaty.signedDate },
        { label: "Effective", value: treaty.effectiveDate },
        { label: "Articles seeded", value: String(treaty.articles.length) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          url: absoluteUrl(`/treaties/${treaty.slug ?? treaty.id}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Treaties", path: "/treaties" },
          { name: title, path: `/treaties/${treaty.slug ?? treaty.id}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Withholding snapshot</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">Dividends</p>
              <p className="mt-2">
                Individual rate: {treaty.withholdingMatrix.dividends.individualRate}% · Corporate
                rate: {treaty.withholdingMatrix.dividends.corporateRate}%
              </p>
              <p className="mt-2">{treaty.withholdingMatrix.dividends.conditions}</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">Interest</p>
              <p className="mt-2">Rate: {treaty.withholdingMatrix.interest.rate}%</p>
              <p className="mt-2">{treaty.withholdingMatrix.interest.exceptions}</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">Royalties</p>
              <p className="mt-2">Rate: {treaty.withholdingMatrix.royalties.rate}%</p>
              <p className="mt-2">{treaty.withholdingMatrix.royalties.type}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Permanent establishment</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Construction threshold: {treaty.permanentEstablishment.constructionThreshold}
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {treaty.permanentEstablishment.dependentAgentRules}
          </p>
          <h2 className="mt-8 text-xl font-semibold text-gray-900">Other treaty flags</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
              Pensions: {treaty.pensions.taxedIn}
            </div>
            <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
              Exchange of information: {treaty.exchangeOfInformation ? "Yes" : "No"}
            </div>
            <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
              Student article: {treaty.studentClause ? "Yes" : "No"}
            </div>
            <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
              Teacher article: {treaty.teachersClause ? "Yes" : "No"}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">Seeded article summaries</h2>
        <div className="mt-6 space-y-4">
          {treaty.articles.map((article) => (
            <div key={article.number} className="rounded-2xl border border-gray-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Article {article.number}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#0a1628]">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{article.summary}</p>
              <p className="mt-3 text-sm leading-6 text-gray-600">{article.fullText}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">Official text</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={treaty.fullTextUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#0a1628] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#122544]"
          >
            Open treaty PDF
          </a>
          {treaty.fullTextHtmlUrl ? (
            <a
              href={treaty.fullTextHtmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-900 transition hover:border-[#c9a84c]"
            >
              Open official treaty page
            </a>
          ) : null}
        </div>
      </section>

      <SourceList sources={treaty.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
