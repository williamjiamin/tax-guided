import Link from "next/link";
import { notFound } from "next/navigation";
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
  isTranslationLocale,
  type TranslationLocale,
} from "@/lib/expansion/translations";

export const dynamicParams = false;
export const revalidate = 86400;

interface Props {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return TRANSLATION_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isTranslationLocale(lang)) {
    return {};
  }

  return buildMetadata({
    title: `${getTranslationLanguageName(lang)} translation library`,
    description: `Draft ${getTranslationLanguageName(lang)} tax terminology and translated title pack linked to TaxGuided's English source pages.`,
    path: `/translations/${lang}`,
  });
}

export default async function TranslationLocalePage({ params }: Props) {
  const { lang } = await params;
  if (!isTranslationLocale(lang)) {
    notFound();
  }

  const locale = lang as TranslationLocale;
  const guideTitles = getDraftGuideTitles(locale);
  const glossaryTerms = getCoreGlossaryTranslations(locale);
  const languageName = getTranslationLanguageName(locale);
  const nativeName = getTranslationNativeName(locale);

  return (
    <ExpansionPageShell
      eyebrow="Draft translations"
      title={`${nativeName} tax translation library`}
      description={`Source-backed draft terminology and translated title pack for ${languageName}. This page is designed as a multilingual discovery surface that still points readers back to the current English legal reference pages.`}
      backHref="/translations"
      backLabel="All translation libraries"
      meta={[
        { label: "Language", value: languageName },
        { label: "Native name", value: nativeName },
        { label: "Core glossary terms", value: String(glossaryTerms.length) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${languageName} translation library`,
          url: absoluteUrl(`/translations/${locale}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Translations", path: "/translations" },
          { name: languageName, path: `/translations/${locale}` },
        ])}
      />

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-amber-900">Publishing note</h2>
        <p className="mt-3 text-sm leading-7 text-amber-900/80">
          This library uses draft translations built from source-backed English content. It is
          useful for multilingual SEO, orientation, and glossary lookup, but native-speaker tax QA
          should still review final publication wording.
        </p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Core glossary translation pack</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {glossaryTerms.map((term) => (
            <Link
              key={term.termId}
              href={`/glossary/${term.termId}`}
              className="rounded-2xl border border-gray-200 p-5 transition hover:border-[#c9a84c] hover:shadow-sm"
            >
              <p className="text-lg font-semibold text-[#0a1628]">{term.translated}</p>
              <p className="mt-2 text-sm text-gray-600">{term.english}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                English reference page
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Featured translated titles</h2>
        {guideTitles.length ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guideTitles.map((entry) => (
              <Link
                key={`${entry.href}-${entry.translatedTitle}`}
                href={entry.href}
                className="rounded-2xl border border-gray-200 p-5 transition hover:border-[#c9a84c] hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Draft translated title
                </p>
                <p className="mt-3 text-lg font-semibold text-[#0a1628]">{entry.translatedTitle}</p>
                <p className="mt-3 text-sm text-gray-600">English source page: {entry.englishTitle}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm leading-6 text-gray-600">
            This language currently has the core glossary pack live. Featured guide-title
            translations will expand in later batches.
          </p>
        )}
      </section>

      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
