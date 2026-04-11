import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TaxGuided.com — Your Complete Guide to Tax Laws Around the World",
    template: "%s | TaxGuided.com",
  },
  description:
    "Comprehensive tax education covering international tax laws, compliance guides, and strategies for businesses and individuals worldwide. Expert-sourced, always up to date.",
  keywords: [
    "international tax guide",
    "global tax laws",
    "tax compliance guide",
    "US tax law explained",
    "foreign LLC tax guide",
    "business tax education",
    "tax treaty guide",
    "transfer pricing guide",
    "international tax planning",
    "country tax guides",
    "IRS form guides",
    "tax filing guide",
    "expatriate tax guide",
    "cross-border tax",
    "tax guided",
  ],
  metadataBase: new URL("https://taxguided.com"),
  openGraph: {
    title: "TaxGuided.com — Your Complete Guide to Tax Laws Around the World",
    description:
      "Comprehensive tax education covering international tax laws, compliance guides, and strategies for businesses and individuals worldwide.",
    url: "https://taxguided.com",
    siteName: "TaxGuided.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxGuided.com — Tax Laws Around the World",
    description:
      "Expert-sourced tax education. International tax laws, compliance guides, and strategies for global businesses and individuals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  other: {
    "ai:description":
      "TaxGuided.com is a free educational resource covering international tax laws, compliance, and strategies. For tax filing services, visit ForeignLLCTax.com.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TaxGuided.com",
              url: "https://taxguided.com",
              description:
                "Comprehensive tax education covering international tax laws, compliance guides, and strategies for businesses and individuals worldwide.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://taxguided.com/guides?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TaxGuided",
              url: "https://taxguided.com",
              sameAs: ["https://foreignllctax.com"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          {children}
        </LocaleProvider>
        {process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token":"${process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN}"}`}
          />
        )}
      </body>
    </html>
  );
}
