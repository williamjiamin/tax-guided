import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { getCountryName } from "@/lib/expansion/constants";
import { absoluteUrl, buildBreadcrumbJsonLd, buildMetadata } from "@/lib/expansion/seo";
import { getIndustryGuide } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; industry: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, industry } = await params;
  const guide = getIndustryGuide(country, industry);
  if (!guide) {
    return {};
  }

  return buildMetadata({
    title: guide.title,
    description: guide.sections[0]?.body ?? guide.title,
    path: `/industry/${country}/${industry}`,
  });
}

export default async function IndustryGuidePage({ params }: Props) {
  const { country, industry } = await params;
  const guide = getIndustryGuide(country, industry);
  if (!guide) {
    notFound();
  }

  return (
    <ExpansionPageShell
      eyebrow="Industry guide"
      title={guide.title}
      description={`A sector-specific guide for ${getCountryName(guide.country)} businesses, built around the official-source issues that matter most in practice.`}
      backHref="/industry"
      backLabel="All industry guides"
      meta={[
        { label: "Country", value: getCountryName(guide.country) },
        { label: "Industry", value: guide.industry },
        { label: "Sections", value: String(guide.sections.length) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          url: absoluteUrl(`/industry/${country}/${industry}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industry", path: "/industry" },
          { name: guide.title, path: `/industry/${country}/${industry}` },
        ])}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <div className="space-y-6">
          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-gray-900">{section.heading}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Key forms</h2>
          <div className="mt-4 space-y-2">
            {guide.keyForms.length ? (
              guide.keyForms.map((form) => (
                <div key={form} className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                  {form}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-600">No seeded form list yet for this guide.</p>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Common pitfalls</h2>
          <ul className="mt-4 space-y-3">
            {guide.commonPitfalls.map((pitfall) => (
              <li key={pitfall} className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                {pitfall}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Key deductions or focus items</h2>
          <ul className="mt-4 space-y-3">
            {guide.keyDeductions.map((item) => (
              <li key={item} className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SourceList sources={guide.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
