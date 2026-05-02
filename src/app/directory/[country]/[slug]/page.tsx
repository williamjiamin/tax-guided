import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { getCountryName } from "@/lib/expansion/constants";
import { absoluteUrl, buildBreadcrumbJsonLd, buildMetadata } from "@/lib/expansion/seo";
import { getDirectoryRegistry } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, slug } = await params;
  const registry = getDirectoryRegistry(country, slug);
  if (!registry) {
    return {};
  }

  return buildMetadata({
    title: registry.name,
    description: registry.description,
    path: `/directory/${country}/${slug}`,
  });
}

export default async function DirectoryRegistryPage({ params }: Props) {
  const { country, slug } = await params;
  const registry = getDirectoryRegistry(country, slug);
  if (!registry) {
    notFound();
  }

  return (
    <ExpansionPageShell
      eyebrow="Directory source"
      title={registry.name}
      description={registry.description}
      backHref="/directory"
      backLabel="All directory sources"
      meta={[
        { label: "Country", value: getCountryName(registry.country) },
        { label: "Authority", value: registry.authority },
        { label: "Cadence", value: registry.updateCadence },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: registry.name,
          url: absoluteUrl(`/directory/${country}/${slug}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Directory", path: "/directory" },
          { name: registry.name, path: `/directory/${country}/${slug}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Coverage</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">{registry.coverage}</p>

          <h2 className="mt-8 text-xl font-semibold text-gray-900">What to capture</h2>
          <ul className="mt-4 space-y-3">
            {registry.whatToCapture.map((item) => (
              <li key={item} className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Caveats</h2>
            <ul className="mt-4 space-y-3">
              {registry.caveats.map((caveat) => (
                <li key={caveat} className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                  {caveat}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-gray-900">Official registry</h2>
            <a
              href={registry.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-xl bg-[#0a1628] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#122544]"
            >
              Open official registry
            </a>
          </div>
        </div>
      </section>

      <SourceList sources={registry.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
