import type { Locale } from "./types";

interface DemoPersona {
  ownerName: string;
  companyName: string;
  country: string;
  citizenship: string;
}

export const DEMO_PERSONAS: Record<Locale, DemoPersona> = {
  en: {
    ownerName: "James Mitchell",
    companyName: "Acme Global Services LLC",
    country: "United Kingdom",
    citizenship: "United Kingdom",
  },
  zh: {
    ownerName: "王建明",
    companyName: "华远科技有限责任公司",
    country: "China",
    citizenship: "China",
  },
  es: {
    ownerName: "Carlos Mendoza",
    companyName: "Mendoza Digital Services LLC",
    country: "Mexico",
    citizenship: "Mexico",
  },
  pt: {
    ownerName: "Lucas Oliveira",
    companyName: "Oliveira Tech LLC",
    country: "Brazil",
    citizenship: "Brazil",
  },
  hi: {
    ownerName: "Rajesh Sharma",
    companyName: "Sharma Software LLC",
    country: "India",
    citizenship: "India",
  },
  ar: {
    ownerName: "أحمد الحسن",
    companyName: "Al-Hassan Trading LLC",
    country: "United Arab Emirates",
    citizenship: "United Arab Emirates",
  },
  fr: {
    ownerName: "Pierre Dumont",
    companyName: "Dumont Consulting LLC",
    country: "France",
    citizenship: "France",
  },
  de: {
    ownerName: "Markus Weber",
    companyName: "Weber Digital LLC",
    country: "Germany",
    citizenship: "Germany",
  },
  ja: {
    ownerName: "田中太郎",
    companyName: "Tanaka Global LLC",
    country: "Japan",
    citizenship: "Japan",
  },
  ko: {
    ownerName: "김민수",
    companyName: "Kim Ventures LLC",
    country: "South Korea",
    citizenship: "South Korea",
  },
};
