import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface MetaItem {
  label: string;
  value: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
  meta?: MetaItem[];
  children: React.ReactNode;
}

export function ExpansionPageShell({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  meta,
  children,
}: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-[#0a1628] py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            {backHref && backLabel ? (
              <Link
                href={backHref}
                className="mb-4 inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#c9a84c]"
              >
                <span aria-hidden="true">←</span>
                <span>{backLabel}</span>
              </Link>
            ) : null}
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
              {description}
            </p>
            {meta?.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {meta.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="space-y-8">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
