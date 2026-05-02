import Link from "next/link";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import {
  TRANSLATION_LOCALES,
  getCoreGlossaryTranslations,
  getDraftGuideTitles,
  getTranslationLanguageName,
  getTranslationNativeName,
} from "@/lib/expansion/translations";

export const metadata = buildMetadata({
  title: "Translation library",
  description:
    "Draft multilingual tax terminology and translated page-title library built from source-backed English tax content.",
  path: "/translations",
});

export default function TranslationLibraryPage() {
  return (
    <ExpansionPageShell
      eyebrow="Pillar 11"
      title="Translation library"
      description="A public multilingual library is now live for draft tax terminology and translated title packs. Each language page links back to the current English source pages and marks draft translation work clearly."
      meta={[
        { label: "Languages", value: String(TRANSLATION_LOCALES.length) },
        { label: "Core glossary pack", value: "5 terms per language" },
        { label: "Translation status", value: "Draft with QA notice" },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Translation library",
          url: absoluteUrl("/translations"),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Translations", path: "/translations" },
        ])}
      />

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-amber-900">Draft translation notice</h2>
        <p className="mt-3 text-sm leading-7 text-amber-900/80">
          These pages publish draft translations created from source-backed English tax content.
          They are useful for discovery and orientation, but legal publication should still receive
          native-speaker tax review before relying on the translated phrasing alone.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {TRANSLATION_LOCALES.map((locale) => {
          const glossaryCount = getCoreGlossaryTranslations(locale).length;
          const titleCount = getDraftGuideTitles(locale).length;

          return (
            <Link
              key={locale}
              href={`/translations/${locale}`}
              className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {locale.toUpperCase()}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">
                {getTranslationNativeName(locale)}
              </h2>
              <p className="mt-1 text-sm text-gray-500">{getTranslationLanguageName(locale)}</p>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>{glossaryCount} core glossary translations</p>
                <p>{titleCount} translated featured titles</p>
              </div>
            </Link>
          );
        })}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
