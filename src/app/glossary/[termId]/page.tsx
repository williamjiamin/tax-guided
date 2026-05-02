import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import { getGlossaryTerm, getGlossaryTerms } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ termId: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { termId } = await params;
  const term = getGlossaryTerm(termId);
  if (!term) {
    return {};
  }

  return buildMetadata({
    title: term.term,
    description: term.shortDefinition,
    path: `/glossary/${termId}`,
  });
}

export default async function GlossaryTermPage({ params }: Props) {
  const { termId } = await params;
  const term = getGlossaryTerm(termId);
  if (!term) {
    notFound();
  }

  const relatedTerms = term.relatedTerms
    .map((id) => getGlossaryTerms().find((entry) => entry.id === id))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  return (
    <ExpansionPageShell
      eyebrow="Glossary term"
      title={term.term}
      description={term.shortDefinition}
      backHref="/glossary"
      backLabel="All glossary terms"
      meta={[
        { label: "Related terms", value: String(relatedTerms.length) },
        { label: "Jurisdictions", value: term.jurisdictions.join(", ") },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: term.term,
          description: term.fullDefinition,
          url: absoluteUrl(`/glossary/${term.id}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
          { name: term.term, path: `/glossary/${term.id}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Definition</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">{term.fullDefinition}</p>

          <h2 className="mt-8 text-xl font-semibold text-gray-900">Examples</h2>
          <ul className="mt-4 space-y-3">
            {term.examples.map((example) => (
              <li key={example} className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">
                {example}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {relatedTerms.length ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-900">Related terms</h2>
              <div className="mt-4 space-y-3">
                {relatedTerms.map((relatedTerm) => (
                  <Link
                    key={relatedTerm.id}
                    href={`/glossary/${relatedTerm.id}`}
                    className="block rounded-2xl bg-gray-50 p-4 text-sm font-medium text-[#0a1628] transition hover:bg-white hover:shadow-sm"
                  >
                    {relatedTerm.term}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Translations</h2>
            <div className="mt-4 space-y-3">
              {Object.entries(term.translations).map(([locale, value]) => (
                <div key={locale} className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">{locale.toUpperCase()}</span>
                  <span className="ml-2">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Citations</h2>
            <div className="mt-4 space-y-3">
              {term.cites.map((cite) => (
                <div key={`${cite.statute}-${cite.section}`} className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                  {cite.statute} · {cite.section}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SourceList sources={term.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
