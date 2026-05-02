import { notFound } from "next/navigation";
import { CalculatorStudio } from "@/components/expansion/CalculatorStudio";
import { ExpansionPageShell } from "@/components/expansion/ExpansionPageShell";
import { DisclaimerCard } from "@/components/expansion/DisclaimerCard";
import { JsonLdScript } from "@/components/expansion/JsonLdScript";
import { SourceList } from "@/components/expansion/SourceList";
import { absoluteUrl, buildBreadcrumbJsonLd, buildMetadata } from "@/lib/expansion/seo";
import { getCalculatorBySlug } from "@/lib/expansion/repository";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);
  if (!calculator) {
    return {};
  }

  return buildMetadata({
    title: calculator.title,
    description: calculator.summary,
    path: `/calculators/${calculator.slug}`,
  });
}

export default async function CalculatorDetailPage({ params }: Props) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);
  if (!calculator) {
    notFound();
  }

  return (
    <ExpansionPageShell
      eyebrow="Calculator detail"
      title={calculator.title}
      description={calculator.summary}
      backHref="/calculators"
      backLabel="All calculators"
      meta={[
        { label: "Category", value: calculator.category },
        { label: "Rule count", value: String(calculator.formulas.length) },
      ]}
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: calculator.title,
          description: calculator.summary,
          applicationCategory: "FinanceApplication",
          url: absoluteUrl(`/calculators/${calculator.slug}`),
        }}
      />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Calculators", path: "/calculators" },
          { name: calculator.title, path: `/calculators/${calculator.slug}` },
        ])}
      />

      <CalculatorStudio calculator={calculator} />
      <SourceList sources={calculator.sources} />
      <DisclaimerCard />
    </ExpansionPageShell>
  );
}
