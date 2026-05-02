import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getFormsByCountry } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country } = await params;
  const forms = getFormsByCountry(country);

  if (!forms.length) {
    return {};
  }

  return buildMetadata({
    title: `${getCountryName(country)} tax forms`,
    description: `Browse source-linked tax form metadata for ${getCountryName(country)}, including filing methods, due-date notes, and official download links.`,
    path: `/forms/${country}`,
  });
}

export default async function CountryFormsPage({ params }: Props) {
  const { country } = await params;
  const forms = getFormsByCountry(country);

  if (!forms.length) {
    notFound();
  }

  const countryName = getCountryName(country);
  const authorities = Array.from(new Set(forms.map((form) => form.authority)));
  const authorityLabel = authorities.length === 1 ? authorities[0] : "Multiple authorities";
  const sources = Array.from(
    new Map(forms.flatMap((form) => form.sources).map((source) => [source.url, source])).values()
  );

  return (
    <ExpansionPageShell
      eyebrow="Forms library"
      title={`${countryName} tax forms`}
      description={`Browse official-form metadata for ${countryName}. Each record is structured so the library can scale to full country coverage without changing route patterns.`}
      backHref="/forms"
      backLabel="All form countries"
      meta={[
        { label: "Country", value: countryName },
        { label: "Public beta forms", value: String(forms.length) },
        { label: "Authority", value: authorityLabel },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${countryName} tax forms`,
          url: absoluteUrl(`/forms/${country}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Forms", path: "/forms" },
          { name: countryName, path: `/forms/${country}` },
        ])}
      />

      <section className="space-y-4">
        {forms.map((form) => (
          <Link
            key={form.id}
            href={`/forms/${country}/${form.slug}`}
            className="block rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {form.authority} Form {form.formNumber}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{form.formName}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{form.description}</p>
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Who must file:</span>{" "}
                  {form.whoMustFile}
                </p>
              </div>
              <div className="shrink-0 rounded-2xl bg-gray-50 px-4 py-4 text-sm text-gray-600">
                <p>Revision year: {form.currentRevisionYear}</p>
                <p className="mt-1">Methods: {form.filingMethod.join(", ")}</p>
                <p className="mt-1">Category: {form.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <SourceList sources={sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
