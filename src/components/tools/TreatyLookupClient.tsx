"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

interface TreatyData {
  country: string;
  hasTreaty: boolean;
  dividendsGeneral: number | null;
  dividendsQualified: number | null;
  interest: number | null;
  royalties: number | null;
  hasLOB: boolean;
  notes: string;
  articles: string;
}

const TREATY_DATA: TreatyData[] = [
  {
    country: "United Kingdom",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "One of the most comprehensive US tax treaties. Zero withholding on interest and royalties. Qualified dividends rate requires 80% ownership.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Canada",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties under the 2007 Protocol. Qualified dividends rate requires 10% ownership.",
    articles: "Articles X (Dividends), XI (Interest), XII (Royalties)",
  },
  {
    country: "Australia",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 10,
    royalties: 5,
    hasLOB: true,
    notes:
      "Qualified dividends rate requires 10% ownership. Reduced royalty rate applies to industrial royalties.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "India",
    hasTreaty: true,
    dividendsGeneral: 25,
    dividendsQualified: 15,
    interest: 15,
    royalties: 15,
    hasLOB: true,
    notes:
      "Higher withholding rates compared to many other treaties. Qualified dividends rate requires 10% ownership. LOB article is strict.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "China",
    hasTreaty: true,
    dividendsGeneral: 10,
    dividendsQualified: 10,
    interest: 10,
    royalties: 10,
    hasLOB: true,
    notes:
      "Flat 10% rate across all categories. No further reduced qualified dividend rate. Treaty applies to mainland China only, not Hong Kong or Macau.",
    articles: "Articles 9 (Dividends), 10 (Interest), 11 (Royalties)",
  },
  {
    country: "Japan",
    hasTreaty: true,
    dividendsGeneral: 10,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "2019 Protocol eliminated withholding on interest and royalties. Qualified dividends rate requires 10% ownership. Strong LOB article.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "South Korea",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 10,
    interest: 12,
    royalties: 15,
    hasLOB: true,
    notes:
      "Qualified dividends rate requires 10% ownership. Interest rate applies to most types of interest income.",
    articles: "Articles 12 (Dividends), 13 (Interest), 14 (Royalties)",
  },
  {
    country: "Germany",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership. Comprehensive LOB article.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "France",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Netherlands",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership. Strong LOB provisions.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Singapore",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No comprehensive income tax treaty with the US. Subject to statutory 30% withholding on FDAP income. A limited agreement exists for shipping and aircraft income only.",
    articles: "N/A",
  },
  {
    country: "Hong Kong",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No tax treaty with the US. Subject to statutory 30% withholding on FDAP income. Hong Kong is treated separately from China for treaty purposes.",
    articles: "N/A",
  },
  {
    country: "Brazil",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No tax treaty with the US. Subject to statutory 30% withholding on FDAP income. Brazil is one of the largest economies without a US tax treaty.",
    articles: "N/A",
  },
  {
    country: "Mexico",
    hasTreaty: true,
    dividendsGeneral: 10,
    dividendsQualified: 5,
    interest: 15,
    royalties: 10,
    hasLOB: true,
    notes:
      "Qualified dividends rate requires 10% ownership. Interest rate is 15% for most types; 4.9% for certain bank interest.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Israel",
    hasTreaty: true,
    dividendsGeneral: 25,
    dividendsQualified: 12.5,
    interest: 17.5,
    royalties: 15,
    hasLOB: true,
    notes:
      "Higher withholding rates. Qualified dividends rate requires 10% ownership. Interest rate is 17.5% general; lower for certain types.",
    articles: "Articles 11 (Dividends), 12 (Interest), 13 (Royalties)",
  },
  {
    country: "Ireland",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership. Important treaty for US-Ireland corporate structures.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Switzerland",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership. Strong LOB article.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Sweden",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Norway",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 15,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. No reduced qualified dividend rate under current treaty.",
    articles: "Articles 8 (Dividends), 9 (Interest), 10 (Royalties)",
  },
  {
    country: "Denmark",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Italy",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 10,
    royalties: 8,
    hasLOB: true,
    notes:
      "Qualified dividends rate requires 25% ownership. Royalty rate is 8% for industrial royalties; 0% for certain copyright royalties.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Spain",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 10,
    interest: 10,
    royalties: 10,
    hasLOB: true,
    notes:
      "Qualified dividends rate requires 25% ownership. 2019 Protocol updated several provisions.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Belgium",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties under the 2006 Protocol. Qualified dividends rate requires 10% ownership.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Austria",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "New Zealand",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 10,
    royalties: 10,
    hasLOB: true,
    notes:
      "Qualified dividends rate requires 10% ownership. Interest and royalty rates are 10%.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Taiwan",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No tax treaty with the US. Subject to statutory 30% withholding on FDAP income. Due to diplomatic considerations, no treaty is expected in the near term.",
    articles: "N/A",
  },
  {
    country: "United Arab Emirates",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No tax treaty with the US. Subject to statutory 30% withholding on FDAP income. The UAE has no income tax domestically, which complicates treaty negotiations.",
    articles: "N/A",
  },
  {
    country: "Russia",
    hasTreaty: true,
    dividendsGeneral: 10,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Note: The US suspended the treaty with Russia effective in 2024. Treaty benefits may no longer be available. Check current IRS guidance.",
    articles:
      "Articles 10 (Dividends), 11 (Interest), 12 (Royalties) — Treaty suspended",
  },
  {
    country: "Turkey",
    hasTreaty: true,
    dividendsGeneral: 20,
    dividendsQualified: 15,
    interest: 15,
    royalties: 10,
    hasLOB: true,
    notes:
      "Higher withholding rates. Qualified dividends rate requires 10% ownership.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Poland",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 10,
    hasLOB: true,
    notes:
      "Zero withholding on interest. Qualified dividends rate requires 10% ownership. 2013 Protocol updated the treaty.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Thailand",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 10,
    interest: 15,
    royalties: 8,
    hasLOB: false,
    notes:
      "No LOB article in this older treaty. Qualified dividends rate requires 25% ownership. Royalty rate is 5% for copyright royalties, 8% for industrial.",
    articles: "Articles 11 (Dividends), 12 (Interest), 13 (Royalties)",
  },
  {
    country: "Philippines",
    hasTreaty: true,
    dividendsGeneral: 25,
    dividendsQualified: 20,
    interest: 15,
    royalties: 15,
    hasLOB: false,
    notes:
      "Higher withholding rates. One of the older US tax treaties. No LOB article. Qualified dividends rate requires 10% ownership.",
    articles: "Articles 11 (Dividends), 12 (Interest), 13 (Royalties)",
  },
  {
    country: "Colombia",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No tax treaty with the US. Subject to statutory 30% withholding on FDAP income.",
    articles: "N/A",
  },
  {
    country: "Argentina",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No tax treaty with the US. Subject to statutory 30% withholding on FDAP income.",
    articles: "N/A",
  },
  {
    country: "South Africa",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 0,
    royalties: 0,
    hasLOB: true,
    notes:
      "Zero withholding on interest and royalties. Qualified dividends rate requires 10% ownership.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Nigeria",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No tax treaty with the US. Subject to statutory 30% withholding on FDAP income.",
    articles: "N/A",
  },
  {
    country: "Malaysia",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No comprehensive income tax treaty with the US. Subject to statutory 30% withholding on FDAP income.",
    articles: "N/A",
  },
  {
    country: "Vietnam",
    hasTreaty: false,
    dividendsGeneral: null,
    dividendsQualified: null,
    interest: null,
    royalties: null,
    hasLOB: false,
    notes:
      "No tax treaty with the US. Subject to statutory 30% withholding on FDAP income.",
    articles: "N/A",
  },
  {
    country: "Indonesia",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 10,
    interest: 10,
    royalties: 10,
    hasLOB: true,
    notes:
      "Qualified dividends rate requires 25% ownership. Treaty entered into force in 1997.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
  {
    country: "Chile",
    hasTreaty: true,
    dividendsGeneral: 15,
    dividendsQualified: 5,
    interest: 15,
    royalties: 10,
    hasLOB: true,
    notes:
      "Relatively recent treaty (2023). Qualified dividends rate requires 10% ownership. Interest rate is 15% general; 4% for certain financial institution interest.",
    articles: "Articles 10 (Dividends), 11 (Interest), 12 (Royalties)",
  },
];

const STATUTORY_RATE = 30;

function CountrySelector({
  label,
  selectedCountry,
  onSelect,
  id,
  t,
}: {
  label: string;
  selectedCountry: string;
  onSelect: (country: string) => void;
  id: string;
  t: (key: string) => string;
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return TREATY_DATA;
    const lower = query.toLowerCase();
    return TREATY_DATA.filter((td) => td.country.toLowerCase().includes(lower));
  }, [query]);

  return (
    <div ref={wrapperRef} className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={t("treatyLookup.searchPlaceholder")}
        value={selectedCountry || query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSelect("");
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-0 focus:outline-none text-[15px] text-gray-900 placeholder:text-gray-400 transition-colors"
      />
      {isOpen && filtered.length > 0 && !selectedCountry && (
        <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {filtered.map((td) => (
            <li key={td.country}>
              <button
                type="button"
                onClick={() => {
                  onSelect(td.country);
                  setQuery("");
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors flex items-center justify-between"
              >
                <span>{td.country}</span>
                {td.hasTreaty ? (
                  <span className="text-xs font-medium text-emerald-600">
                    {t("treatyLookup.treatyLabel")}
                  </span>
                ) : (
                  <span className="text-xs font-medium text-red-500">
                    {t("treatyLookup.noTreatyLabel")}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
      {isOpen && filtered.length === 0 && query && (
        <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg p-4 text-sm text-gray-500">
          {t("treatyLookup.noCountryFound")}
        </div>
      )}
    </div>
  );
}

function RateRow({
  label,
  statutory,
  treaty,
  t,
}: {
  label: string;
  statutory: number;
  treaty: number | null;
  t: (key: string) => string;
}) {
  const savings =
    treaty !== null ? statutory - treaty : 0;
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-3 px-4 text-sm font-medium text-gray-700">{label}</td>
      <td className="py-3 px-4 text-sm text-center text-gray-500">
        {statutory}%
      </td>
      <td className="py-3 px-4 text-sm text-center font-semibold text-emerald-700">
        {treaty !== null ? `${treaty}%` : "N/A"}
      </td>
      <td className="py-3 px-4 text-sm text-center">
        {savings > 0 ? (
          <span className="text-emerald-600 font-semibold">
            {t("treatyLookup.saved").replace("{pct}", String(savings))}
          </span>
        ) : (
          <span className="text-gray-400">--</span>
        )}
      </td>
    </tr>
  );
}

function TreatyResult({ data, t }: { data: TreatyData; t: (key: string) => string }) {
  return (
    <div className="space-y-6">
      {/* Treaty Status Badge */}
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-bold text-gray-900">{data.country}</h3>
        {data.hasTreaty ? (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
            {t("treatyLookup.treatyInEffect")}
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
            {t("treatyLookup.noTreaty")}
          </span>
        )}
      </div>

      {data.hasTreaty ? (
        <>
          {/* Withholding Rate Comparison Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h4 className="text-sm font-bold text-gray-700">
                {t("treatyLookup.withholdingRateComparison")}
              </h4>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 text-left uppercase tracking-wider">
                    {t("treatyLookup.incomeType")}
                  </th>
                  <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 text-center uppercase tracking-wider">
                    {t("treatyLookup.statutory")}
                  </th>
                  <th className="py-2.5 px-4 text-xs font-semibold text-emerald-600 text-center uppercase tracking-wider">
                    {t("treatyLookup.treaty")}
                  </th>
                  <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 text-center uppercase tracking-wider">
                    {t("treatyLookup.savings")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <RateRow
                  label={t("treatyLookup.dividendsGeneral")}
                  statutory={STATUTORY_RATE}
                  treaty={data.dividendsGeneral}
                  t={t}
                />
                <RateRow
                  label={t("treatyLookup.dividendsQualified")}
                  statutory={STATUTORY_RATE}
                  treaty={data.dividendsQualified}
                  t={t}
                />
                <RateRow
                  label={t("treatyLookup.interest")}
                  statutory={STATUTORY_RATE}
                  treaty={data.interest}
                  t={t}
                />
                <RateRow
                  label={t("treatyLookup.royalties")}
                  statutory={STATUTORY_RATE}
                  treaty={data.royalties}
                  t={t}
                />
              </tbody>
            </table>
          </div>

          {/* LOB Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${data.hasLOB ? "bg-amber-100" : "bg-gray-100"}`}
              >
                <span className="text-xs">
                  {data.hasLOB ? "!" : "-"}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">
                  {t("treatyLookup.lobTitle")}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {data.hasLOB
                    ? t("treatyLookup.lobHasArticle")
                    : t("treatyLookup.lobNoArticle")}
                </p>
              </div>
            </div>
          </div>

          {/* Key Provisions */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h4 className="text-sm font-bold text-gray-800 mb-2">
              {t("treatyLookup.keyProvisions")}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {data.notes}
            </p>
            <p className="text-xs text-gray-400 mt-3">
              {t("treatyLookup.relevantArticles").replace("{articles}", data.articles)}
            </p>
          </div>

          {/* Link to IRS */}
          <a
            href="https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors underline underline-offset-2"
          >
            {t("treatyLookup.viewFullTreaty")}
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </>
      ) : (
        <>
          {/* No Treaty Message */}
          <div className="bg-red-50 rounded-xl border border-red-200 p-6">
            <h4 className="text-sm font-bold text-red-800 mb-2">
              {t("treatyLookup.statutory30Title")}
            </h4>
            <p className="text-sm text-red-700 leading-relaxed">
              {t("treatyLookup.statutory30Desc").replace("{country}", data.country)}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h4 className="text-sm font-bold text-gray-800 mb-2">
              {t("treatyLookup.whatThisMeans").replace("{country}", data.country)}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1 flex-shrink-0">-</span>
                <span>{t("treatyLookup.noTreatyPoint1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1 flex-shrink-0">-</span>
                <span>{t("treatyLookup.noTreatyPoint2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1 flex-shrink-0">-</span>
                <span>{t("treatyLookup.noTreatyPoint3")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
            <h4 className="text-sm font-bold text-amber-800 mb-2">
              {t("treatyLookup.altPlanningTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-amber-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1 flex-shrink-0">-</span>
                <span>{t("treatyLookup.altPlanningPoint1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1 flex-shrink-0">-</span>
                <span>{t("treatyLookup.altPlanningPoint2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1 flex-shrink-0">-</span>
                <span>{t("treatyLookup.altPlanningPoint3")}</span>
              </li>
            </ul>
          </div>

          {/* Additional Notes */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h4 className="text-sm font-bold text-gray-800 mb-2">
              {t("treatyLookup.additionalNotes")}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {data.notes}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function CompareView({
  country1,
  country2,
  t,
}: {
  country1: TreatyData;
  country2: TreatyData;
  t: (key: string) => string;
}) {
  const categories = [
    { label: t("treatyLookup.dividendsGeneral"), key: "dividendsGeneral" as const },
    { label: t("treatyLookup.dividendsQualified"), key: "dividendsQualified" as const },
    { label: t("treatyLookup.interest"), key: "interest" as const },
    { label: t("treatyLookup.royalties"), key: "royalties" as const },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 flex-wrap">
        <h3 className="text-xl font-bold text-gray-900">
          {country1.country} vs {country2.country}
        </h3>
      </div>

      {/* Status Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          className={`rounded-xl border p-4 text-center ${country1.hasTreaty ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}
        >
          <p className="text-sm font-bold text-gray-800">
            {country1.country}
          </p>
          <p
            className={`text-xs font-semibold mt-1 ${country1.hasTreaty ? "text-emerald-600" : "text-red-600"}`}
          >
            {country1.hasTreaty ? t("treatyLookup.treatyInEffect") : t("treatyLookup.noTreatyPct")}
          </p>
        </div>
        <div
          className={`rounded-xl border p-4 text-center ${country2.hasTreaty ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}
        >
          <p className="text-sm font-bold text-gray-800">
            {country2.country}
          </p>
          <p
            className={`text-xs font-semibold mt-1 ${country2.hasTreaty ? "text-emerald-600" : "text-red-600"}`}
          >
            {country2.hasTreaty ? t("treatyLookup.treatyInEffect") : t("treatyLookup.noTreatyPct")}
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h4 className="text-sm font-bold text-gray-700">
            {t("treatyLookup.withholdingRateComparison")}
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 text-left uppercase tracking-wider">
                  {t("treatyLookup.incomeType")}
                </th>
                <th className="py-2.5 px-4 text-xs font-semibold text-gray-500 text-center uppercase tracking-wider">
                  {t("treatyLookup.statutory")}
                </th>
                <th className="py-2.5 px-4 text-xs font-semibold text-emerald-600 text-center uppercase tracking-wider">
                  {country1.country}
                </th>
                <th className="py-2.5 px-4 text-xs font-semibold text-emerald-600 text-center uppercase tracking-wider">
                  {country2.country}
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => {
                const rate1 = country1.hasTreaty ? country1[cat.key] : STATUTORY_RATE;
                const rate2 = country2.hasTreaty ? country2[cat.key] : STATUTORY_RATE;
                return (
                  <tr
                    key={cat.key}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">
                      {cat.label}
                    </td>
                    <td className="py-3 px-4 text-sm text-center text-gray-500">
                      {STATUTORY_RATE}%
                    </td>
                    <td
                      className={`py-3 px-4 text-sm text-center font-semibold ${rate1 !== null && rate1 < STATUTORY_RATE ? "text-emerald-700" : "text-gray-500"}`}
                    >
                      {rate1 !== null ? `${rate1}%` : "30%"}
                    </td>
                    <td
                      className={`py-3 px-4 text-sm text-center font-semibold ${rate2 !== null && rate2 < STATUTORY_RATE ? "text-emerald-700" : "text-gray-500"}`}
                    >
                      {rate2 !== null ? `${rate2}%` : "30%"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* LOB Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            {country1.country} {t("treatyLookup.lobLabel")}
          </p>
          <p className="text-sm text-gray-700">
            {country1.hasTreaty
              ? country1.hasLOB
                ? t("treatyLookup.hasLobArticle")
                : t("treatyLookup.noLobArticle")
              : t("treatyLookup.noTreatyNa")}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            {country2.country} {t("treatyLookup.lobLabel")}
          </p>
          <p className="text-sm text-gray-700">
            {country2.hasTreaty
              ? country2.hasLOB
                ? t("treatyLookup.hasLobArticle")
                : t("treatyLookup.noLobArticle")
              : t("treatyLookup.noTreatyNa")}
          </p>
        </div>
      </div>

      {/* Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {country1.country} {t("treatyLookup.notesLabel")}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {country1.notes}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {country2.country} {t("treatyLookup.notesLabel")}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {country2.notes}
          </p>
        </div>
      </div>

      <a
        href="https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors underline underline-offset-2"
      >
        {t("treatyLookup.viewFullTreaties")}
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}

function EducationalSection({ t }: { t: (key: string) => string }) {
  return (
    <div className="mt-12 space-y-8">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {t("treatyLookup.eduTitle")}
        </h3>
        <div className="text-sm text-gray-600 leading-relaxed space-y-3">
          <p>
            {t("treatyLookup.eduIntro")}
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5 flex-shrink-0">-</span>
              <span>
                <strong>{t("treatyLookup.eduPoint1Bold")}</strong>{" "}
                {t("treatyLookup.eduPoint1").replace(t("treatyLookup.eduPoint1Bold"), "").trim()}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5 flex-shrink-0">-</span>
              <span>
                <strong>{t("treatyLookup.eduPoint2Bold")}</strong>{" "}
                {t("treatyLookup.eduPoint2").replace(t("treatyLookup.eduPoint2Bold"), "").trim()}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5 flex-shrink-0">-</span>
              <span>
                <strong>{t("treatyLookup.eduPoint3Bold")}</strong>{" "}
                {t("treatyLookup.eduPoint3").replace(t("treatyLookup.eduPoint3Bold"), "").trim()}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5 flex-shrink-0">-</span>
              <span>
                <strong>{t("treatyLookup.eduPoint4Bold")}</strong>{" "}
                {t("treatyLookup.eduPoint4").replace(t("treatyLookup.eduPoint4Bold"), "").trim()}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {t("treatyLookup.disclaimerTitle")}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {t("treatyLookup.disclaimerText")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/tools/eci-assessment"
          className="text-sm text-emerald-700 hover:text-emerald-900 transition-colors font-medium underline underline-offset-2"
        >
          {t("treatyLookup.linkEci")}
        </Link>
        <Link
          href="/tools/penalty-calculator"
          className="text-sm text-amber-700 hover:text-amber-900 transition-colors font-medium underline underline-offset-2"
        >
          {t("treatyLookup.linkPenalty")}
        </Link>
      </div>
    </div>
  );
}

export function TreatyLookupClient() {
  const { t } = useT();
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [compareMode, setCompareMode] = useState(false);

  const data1 = useMemo(
    () => TREATY_DATA.find((td) => td.country === country1) ?? null,
    [country1]
  );
  const data2 = useMemo(
    () => TREATY_DATA.find((td) => td.country === country2) ?? null,
    [country2]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("treatyLookup.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("treatyLookup.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("treatyLookup.subtitle")}
            </p>
          </div>

          {/* Compare Mode Toggle */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span
              className={`text-sm font-medium ${!compareMode ? "text-gray-900" : "text-gray-400"}`}
            >
              {t("treatyLookup.singleCountry")}
            </span>
            <button
              onClick={() => {
                setCompareMode(!compareMode);
                setCountry2("");
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${compareMode ? "bg-emerald-500" : "bg-gray-300"}`}
              aria-label="Toggle compare mode"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${compareMode ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
            <span
              className={`text-sm font-medium ${compareMode ? "text-gray-900" : "text-gray-400"}`}
            >
              {t("treatyLookup.compareTwoCountries")}
            </span>
          </div>

          {/* Country Selectors */}
          <div
            className={`bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10 mb-8 ${compareMode ? "space-y-6" : ""}`}
          >
            <CountrySelector
              label={compareMode ? t("treatyLookup.firstCountry") : t("treatyLookup.selectCountry")}
              selectedCountry={country1}
              onSelect={setCountry1}
              id="country-1"
              t={t}
            />
            {compareMode && (
              <CountrySelector
                label={t("treatyLookup.secondCountry")}
                selectedCountry={country2}
                onSelect={setCountry2}
                id="country-2"
                t={t}
              />
            )}
          </div>

          {/* Results */}
          {!compareMode && data1 && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10 mb-8">
              <TreatyResult data={data1} t={t} />
            </div>
          )}

          {compareMode && data1 && data2 && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10 mb-8">
              <CompareView country1={data1} country2={data2} t={t} />
            </div>
          )}

          {compareMode && data1 && !data2 && (
            <div className="text-center text-sm text-gray-400 py-8">
              {t("treatyLookup.selectSecondCountry")}
            </div>
          )}

          {!country1 && (
            <div className="text-center text-sm text-gray-400 py-8">
              {t("treatyLookup.selectCountryPrompt")}
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              href="/filer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20"
            >
              {t("treatyLookup.ctaButton")}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Educational Section */}
          <EducationalSection t={t} />

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
