import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { buildMetadata, buildBreadcrumbJsonLd, absoluteUrl } from "@/lib/expansion/seo";
import { getCountryName } from "@/lib/expansion/constants";
import { getFormByCountryAndSlug, getForms } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string; formId: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { country, formId } = await params;
  const form = getFormByCountryAndSlug(country, formId);

  if (!form) {
    return {};
  }

  return buildMetadata({
    title: `${form.authority} Form ${form.formNumber}`,
    description: `${form.formName}. Filing methods, who must file, due-date notes, penalties, and official source links.`,
    path: `/forms/${country}/${formId}`,
  });
}

export default async function FormDetailPage({ params }: Props) {
  const { country, formId } = await params;
  const form = getFormByCountryAndSlug(country, formId);

  if (!form) {
    notFound();
  }

  const countryName = getCountryName(country);
  const primaryDocumentLabel = form.pdfUrl.toLowerCase().endsWith(".pdf")
    ? "Open official form PDF"
    : "Open official form page";
  const relatedForms = form.relatedForms
    .map((id) => getForms().find((entry) => entry.id === id))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  return (
    <ExpansionPageShell
      eyebrow="Form detail"
      title={`${form.authority} Form ${form.formNumber}`}
      description={form.formName}
      backHref={`/forms/${country}`}
      backLabel={`${countryName} forms`}
      meta={[
        { label: "Country", value: countryName },
        { label: "Revision year", value: String(form.currentRevisionYear) },
        { label: "Methods", value: form.filingMethod.join(", ") },
        { label: "Updated", value: form.lastUpdated.slice(0, 10) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          name: `${form.authority} Form ${form.formNumber}`,
          description: form.description,
          provider: {
            "@type": "GovernmentOrganization",
            name: form.authority,
          },
          areaServed: countryName,
          url: absoluteUrl(`/forms/${country}/${form.slug}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Forms", path: "/forms" },
          { name: countryName, path: `/forms/${country}` },
          { name: form.formNumber, path: `/forms/${country}/${form.slug}` },
        ])}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900">{form.formName}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{form.description}</p>
            <p className="mt-4 text-sm leading-6 text-gray-700">
              <span className="font-semibold text-gray-900">Who must file:</span>{" "}
              {form.whoMustFile}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={form.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#0a1628] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#122544]"
            >
              {primaryDocumentLabel}
            </a>
            {form.instructionsUrl ? (
              <a
                href={form.instructionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-900 transition hover:border-[#c9a84c] hover:text-[#0a1628]"
              >
                Open instructions
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          {form.practicalOverview ? (
            <>
              <h2 className="text-xl font-semibold text-gray-900">Practical overview</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{form.practicalOverview}</p>
            </>
          ) : null}

          {form.practicalSteps?.length ? (
            <>
              <h2 className="mt-8 text-xl font-semibold text-gray-900">Practical steps</h2>
              <ul className="mt-4 space-y-3">
                {form.practicalSteps.map((step) => (
                  <li
                    key={step}
                    className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-600"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <h2 className="text-xl font-semibold text-gray-900">Due-date notes</h2>
          <div className="mt-4 space-y-4">
            {form.dueDates.map((dueDate) => (
              <div key={`${dueDate.description}-${dueDate.date}`} className="rounded-2xl bg-gray-50 p-4">
                <p className="font-medium text-gray-900">{dueDate.description}</p>
                <p className="mt-2 text-sm text-gray-600">Timing: {dueDate.date}</p>
                {dueDate.extension ? (
                  <p className="mt-1 text-sm text-gray-600">Extension reference: {dueDate.extension}</p>
                ) : null}
              </div>
            ))}
          </div>

          <h2 className="mt-8 text-xl font-semibold text-gray-900">Penalty snapshot</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {form.penalty ?? "No standard monetary penalty is listed in this seed record."}
          </p>
        </div>

        <div className="space-y-6">
          {relatedForms.length ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-900">Related forms</h2>
              <div className="mt-4 space-y-3">
                {relatedForms.map((relatedForm) => (
                  <Link
                    key={relatedForm.id}
                    href={`/forms/${relatedForm.country}/${relatedForm.slug}`}
                    className="block rounded-2xl bg-gray-50 p-4 text-sm text-gray-700 transition hover:bg-white hover:shadow-sm"
                  >
                    <p className="font-semibold text-[#0a1628]">
                      {relatedForm.formNumber} · {relatedForm.formName}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {form.relatedGuides.length ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {form.relatedGuides.map((guide) => (
                  <Link
                    key={guide}
                    href={`/guides/${guide}`}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700 transition hover:bg-[#0a1628] hover:text-white"
                  >
                    {guide}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <SourceList sources={form.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
