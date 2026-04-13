import type { CountryCatalog, CountrySummary } from "./types";

import usData from "../../../data/catalog/us.json";
import cnData from "../../../data/catalog/cn.json";
import gbData from "../../../data/catalog/gb.json";
import deData from "../../../data/catalog/de.json";
import frData from "../../../data/catalog/fr.json";
import jpData from "../../../data/catalog/jp.json";
import krData from "../../../data/catalog/kr.json";
import inData from "../../../data/catalog/in.json";
import brData from "../../../data/catalog/br.json";
import caData from "../../../data/catalog/ca.json";
import auData from "../../../data/catalog/au.json";
import sgData from "../../../data/catalog/sg.json";
import hkData from "../../../data/catalog/hk.json";
import aeData from "../../../data/catalog/ae.json";
import ieData from "../../../data/catalog/ie.json";
import nlData from "../../../data/catalog/nl.json";
import chData from "../../../data/catalog/ch.json";
import mxData from "../../../data/catalog/mx.json";
import idData from "../../../data/catalog/id.json";
import eeData from "../../../data/catalog/ee.json";

const CATALOG_MAP: Record<string, CountryCatalog> = {
  us: usData as CountryCatalog,
  cn: cnData as CountryCatalog,
  gb: gbData as CountryCatalog,
  de: deData as CountryCatalog,
  fr: frData as CountryCatalog,
  jp: jpData as CountryCatalog,
  kr: krData as CountryCatalog,
  in: inData as CountryCatalog,
  br: brData as CountryCatalog,
  ca: caData as CountryCatalog,
  au: auData as CountryCatalog,
  sg: sgData as CountryCatalog,
  hk: hkData as CountryCatalog,
  ae: aeData as CountryCatalog,
  ie: ieData as CountryCatalog,
  nl: nlData as CountryCatalog,
  ch: chData as CountryCatalog,
  mx: mxData as CountryCatalog,
  id: idData as CountryCatalog,
  ee: eeData as CountryCatalog,
};

export const ALL_COUNTRY_CODES = Object.keys(CATALOG_MAP);

export const ALL_COUNTRIES: CountrySummary[] = ALL_COUNTRY_CODES.map(
  (code) => {
    const cat = CATALOG_MAP[code];
    return {
      code: cat.countryCode,
      name: cat.countryName,
      entryCount: cat.totalEntries,
      agencyCount: cat.agencies.length,
      agencies: cat.agencies.map((a) => a.name),
    };
  }
);

export function getCountryCatalog(code: string): CountryCatalog | null {
  return CATALOG_MAP[code.toLowerCase()] ?? null;
}

export function getTotalEntries(): number {
  return ALL_COUNTRIES.reduce((sum, c) => sum + c.entryCount, 0);
}

export function getTotalAgencies(): number {
  return ALL_COUNTRIES.reduce((sum, c) => sum + c.agencyCount, 0);
}
