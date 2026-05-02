import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import {
  getStateById,
  getStatesByCountry,
  getForms,
  isStateCountrySlug,
} from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  if (isStateCountrySlug(slug)) {
    const countryName = getCountryName(slug);
    return buildMetadata({
      title: `${countryName} state and provincial taxes`,
      description: `Browse seeded subnational tax profiles for ${countryName}.`,
      path: `/states/${slug}`,
    });
  }

  const state = getStateById(slug);
  if (!state) {
    return {};
  }

  return buildMetadata({
    title: `${state.state} tax guide`,
    description: `${state.state} subnational tax snapshot covering income tax, sales tax, filing deadlines, and official authority links.`,
    path: `/states/${slug}`,
  });
}

export default async function StatesSlugPage({ params }: Props) {
  const { slug } = await params;

  if (isStateCountrySlug(slug)) {
    const countryStates = getStatesByCountry(slug);
    const countryName = getCountryName(slug);

    return (
      <ExpansionPageShell
        eyebrow="Subnational coverage"
        title={`${countryName} state and provincial taxes`}
        description={`Seeded jurisdiction profiles for ${countryName}. This route pattern supports both country indexes and individual state detail pages at /states/{country-code}-{state-code}.`}
        backHref="/states"
        backLabel="All state tax libraries"
        meta={[
          { label: "Country", value: countryName },
          { label: "Seed jurisdictions", value: String(countryStates.length) },
        ]}
      >
        <JsonLdScript
          data={buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "States", path: "/states" },
            { name: countryName, path: `/states/${slug}` },
          ])}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {countryStates.map((state) => (
            <Link
              key={state.id}
              href={`/states/${state.id}`}
              className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-[#c9a84c] hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {state.code}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[#0a1628]">{state.state}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">{state.corporateTax.notes}</p>
            </Link>
          ))}
        </div>
        <DisclaimerCard />
      </ExpansionPageShell>
    );
  }

  const state = getStateById(slug);
  if (!state) {
    notFound();
  }
  const formLookup = new Map(getForms().map((form) => [form.id, form]));

  return (
    <ExpansionPageShell
      eyebrow="Jurisdiction detail"
      title={`${state.state} tax guide`}
      description={`A seeded subnational profile for ${state.state}, built on the schema from the world-class expansion plan.`}
      backHref={`/states/${state.country}`}
      backLabel={`${getCountryName(state.country)} states`}
      meta={[
        { label: "Country", value: getCountryName(state.country) },
        { label: "Tax year", value: state.taxYear },
        { label: "Authority", value: state.authority.name },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${state.state} tax guide`,
          description: `Tax snapshot for ${state.state}`,
          url: absoluteUrl(`/states/${state.id}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "States", path: "/states" },
          { name: getCountryName(state.country), path: `/states/${state.country}` },
          { name: state.state, path: `/states/${state.id}` },
        ])}
      />

      <section className="grid gap-6 lg:grid-cols-2">
        {state.overview ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">{state.overview}</p>
            {state.practicalPointers?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {state.practicalPointers.map((pointer) => (
                  <span
                    key={pointer}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700"
                  >
                    {pointer}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Individual income tax</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {state.individualTax.hasOwnTax
              ? state.individualTax.notes ?? "This jurisdiction has its own income tax regime."
              : "This jurisdiction does not impose its own individual income tax."}
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Type: <span className="font-medium text-gray-900">{state.individualTax.type}</span>
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Business tax</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">{state.corporateTax.notes}</p>
          {typeof state.corporateTax.rate === "number" ? (
            <p className="mt-3 text-sm text-gray-600">
              Reference rate:{" "}
              <span className="font-medium text-gray-900">{state.corporateTax.rate}%</span>
            </p>
          ) : null}
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Sales or indirect tax</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">{state.salesTax.nexusRules}</p>
          <p className="mt-3 text-sm text-gray-600">
            Base rate:{" "}
            <span className="font-medium text-gray-900">
              {typeof state.salesTax.rate === "number" ? `${state.salesTax.rate}%` : "Varies"}
            </span>
          </p>
          {state.salesTax.notes ? (
            <p className="mt-2 text-sm text-gray-600">{state.salesTax.notes}</p>
          ) : null}
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-900">Deadlines and forms</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">{state.filingDeadline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {state.forms.map((formId) => {
              const form = formLookup.get(formId);

              if (form) {
                return (
                  <Link
                    key={formId}
                    href={`/forms/${form.country}/${form.slug}`}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700 transition hover:bg-[#0a1628] hover:text-white"
                  >
                    {form.formNumber}
                  </Link>
                );
              }

              return (
                <span
                  key={formId}
                  className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700"
                >
                  {formId}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">Official authority</h2>
        <a
          href={state.authority.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-xl bg-[#0a1628] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#122544]"
        >
          Visit {state.authority.name}
        </a>
      </section>

      <SourceList sources={state.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
