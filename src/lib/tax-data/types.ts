/* ------------------------------------------------------------------ */
/*  Tax system comparison types                                       */
/* ------------------------------------------------------------------ */

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

export interface TaxSystem {
  country: string;
  countryCode: string;
  currency: string;
  currencySymbol: string;

  corporateRate: string;
  corporateDetails: string;

  individualBrackets: TaxBracket[];

  capitalGainsRate: string;
  capitalGainsDetails: string;

  vatOrSalesTax: string;
  vatDetails: string;

  socialSecurity: string;
  socialSecurityDetails: string;

  withholding: {
    dividends: string;
    interest: string;
    royalties: string;
  };

  filingDeadline: string;

  taxAuthority: string;
  taxAuthorityUrl: string;

  keyFeatures: string[];

  lastUpdated: string;
}
