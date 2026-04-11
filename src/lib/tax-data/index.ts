/* ------------------------------------------------------------------ */
/*  Tax System Data — Central Index                                   */
/* ------------------------------------------------------------------ */

export type { TaxSystem, TaxBracket } from "./types";

export { US_TAX_SYSTEM } from "./us-tax-system";
export { CN_TAX_SYSTEM } from "./cn-tax-system";
export { UK_TAX_SYSTEM } from "./uk-tax-system";
export { DE_TAX_SYSTEM } from "./de-tax-system";
export { FR_TAX_SYSTEM } from "./fr-tax-system";
export { JP_TAX_SYSTEM } from "./jp-tax-system";
export { KR_TAX_SYSTEM } from "./kr-tax-system";
export { IN_TAX_SYSTEM } from "./in-tax-system";
export { BR_TAX_SYSTEM } from "./br-tax-system";
export { CA_TAX_SYSTEM } from "./ca-tax-system";
export { AU_TAX_SYSTEM } from "./au-tax-system";
export { SG_TAX_SYSTEM } from "./sg-tax-system";
export { HK_TAX_SYSTEM } from "./hk-tax-system";
export { AE_TAX_SYSTEM } from "./ae-tax-system";
export { IE_TAX_SYSTEM } from "./ie-tax-system";
export { NL_TAX_SYSTEM } from "./nl-tax-system";
export { CH_TAX_SYSTEM } from "./ch-tax-system";
export { MX_TAX_SYSTEM } from "./mx-tax-system";
export { ID_TAX_SYSTEM } from "./id-tax-system";
export { EE_TAX_SYSTEM } from "./ee-tax-system";

import type { TaxSystem } from "./types";
import { US_TAX_SYSTEM } from "./us-tax-system";
import { CN_TAX_SYSTEM } from "./cn-tax-system";
import { UK_TAX_SYSTEM } from "./uk-tax-system";
import { DE_TAX_SYSTEM } from "./de-tax-system";
import { FR_TAX_SYSTEM } from "./fr-tax-system";
import { JP_TAX_SYSTEM } from "./jp-tax-system";
import { KR_TAX_SYSTEM } from "./kr-tax-system";
import { IN_TAX_SYSTEM } from "./in-tax-system";
import { BR_TAX_SYSTEM } from "./br-tax-system";
import { CA_TAX_SYSTEM } from "./ca-tax-system";
import { AU_TAX_SYSTEM } from "./au-tax-system";
import { SG_TAX_SYSTEM } from "./sg-tax-system";
import { HK_TAX_SYSTEM } from "./hk-tax-system";
import { AE_TAX_SYSTEM } from "./ae-tax-system";
import { IE_TAX_SYSTEM } from "./ie-tax-system";
import { NL_TAX_SYSTEM } from "./nl-tax-system";
import { CH_TAX_SYSTEM } from "./ch-tax-system";
import { MX_TAX_SYSTEM } from "./mx-tax-system";
import { ID_TAX_SYSTEM } from "./id-tax-system";
import { EE_TAX_SYSTEM } from "./ee-tax-system";

/* ------------------------------------------------------------------ */
/*  Aggregated collections                                            */
/* ------------------------------------------------------------------ */

export const ALL_TAX_SYSTEMS: TaxSystem[] = [
  US_TAX_SYSTEM,
  CN_TAX_SYSTEM,
  UK_TAX_SYSTEM,
  DE_TAX_SYSTEM,
  FR_TAX_SYSTEM,
  JP_TAX_SYSTEM,
  KR_TAX_SYSTEM,
  IN_TAX_SYSTEM,
  BR_TAX_SYSTEM,
  CA_TAX_SYSTEM,
  AU_TAX_SYSTEM,
  SG_TAX_SYSTEM,
  HK_TAX_SYSTEM,
  AE_TAX_SYSTEM,
  IE_TAX_SYSTEM,
  NL_TAX_SYSTEM,
  CH_TAX_SYSTEM,
  MX_TAX_SYSTEM,
  ID_TAX_SYSTEM,
  EE_TAX_SYSTEM,
];

export const TAX_SYSTEMS_BY_CODE: Record<string, TaxSystem> = Object.fromEntries(
  ALL_TAX_SYSTEMS.map((s) => [s.countryCode, s]),
);
