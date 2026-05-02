import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import {
  getExpansionCoverageSummary,
  getGlossaryTerms,
} from "@/lib/expansion/repository";

export const metadata = buildMetadata({
  title: "Tax glossary",
  description:
    "A plain-English glossary for international tax terms, with examples, related concepts, and source-linked definitions.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const terms = getGlossaryTerms();
  const summary = getExpansionCoverageSummary();

  return (
    <ExpansionPageShell
      eyebrow="Pillar 8"
      title="Tax glossary"
      description="The glossary route family is live with structured term definitions, examples, related-term links, and translation fields that can expand into multilingual terminology pages."
      meta={[
        { label: "Seed terms", value: String(summary.glossaryTerms) },
        { label: "Target scale", value: "3,000+" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Tax glossary",
          url: absoluteUrl("/glossary"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
        ])}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {terms.map((term) => (
          <Link
            key={term.id}
            href={`/glossary/${term.id}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#0a1628]">{term.term}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{term.shortDefinition}</p>
          </Link>
        ))}
      </div>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
