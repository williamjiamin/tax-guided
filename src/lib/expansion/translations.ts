import { LOCALE_META } from "@/lib/i18n/types";

export const TRANSLATION_LOCALES = [
  "es",
  "pt",
  "zh",
  "fr",
  "de",
  "ar",
  "hi",
  "ja",
  "ko",
] as const;

export type TranslationLocale = (typeof TRANSLATION_LOCALES)[number];

export interface DraftGuideTitle {
  englishTitle: string;
  translatedTitle: string;
  href: string;
}

export interface DraftGlossaryTermTranslation {
  termId: string;
  english: string;
  translated: string;
}

const FEATURED_GUIDE_TITLES: Partial<Record<TranslationLocale, DraftGuideTitle[]>> = {
  es: [
    {
      englishTitle: "Form 5472 guide",
      translatedTitle:
        "Guía del Formulario 5472 para LLC de un solo miembro con propietario extranjero",
      href: "/forms/us/5472",
    },
    {
      englishTitle: "California LLC annual tax guide",
      translatedTitle: "Guía del impuesto anual de LLC en California",
      href: "/states/us-ca",
    },
    {
      englishTitle: "UK Self Assessment deadlines guide",
      translatedTitle: "Guía de plazos de Self Assessment del Reino Unido",
      href: "/forms/gb/self-assessment",
    },
  ],
  pt: [
    {
      englishTitle: "Form 5472 guide",
      translatedTitle:
        "Guia do Formulário 5472 para LLC de sócio único com proprietário estrangeiro",
      href: "/forms/us/5472",
    },
    {
      englishTitle: "California LLC annual tax guide",
      translatedTitle: "Guia do imposto anual de LLC na Califórnia",
      href: "/states/us-ca",
    },
    {
      englishTitle: "UK Self Assessment deadlines guide",
      translatedTitle: "Guia de prazos do Self Assessment do Reino Unido",
      href: "/forms/gb/self-assessment",
    },
  ],
  zh: [
    {
      englishTitle: "Form 5472 guide",
      translatedTitle: "外国人拥有的单成员 LLC 的 5472 表格指南",
      href: "/forms/us/5472",
    },
    {
      englishTitle: "California LLC annual tax guide",
      translatedTitle: "加州 LLC 年度税指南",
      href: "/states/us-ca",
    },
    {
      englishTitle: "UK Self Assessment deadlines guide",
      translatedTitle: "英国 Self Assessment 截止日期指南",
      href: "/forms/gb/self-assessment",
    },
  ],
  fr: [
    {
      englishTitle: "Form 5472 guide",
      translatedTitle:
        "Guide du formulaire 5472 pour les LLC à associé unique détenues par des étrangers",
      href: "/forms/us/5472",
    },
    {
      englishTitle: "California LLC annual tax guide",
      translatedTitle: "Guide de la taxe annuelle des LLC en Californie",
      href: "/states/us-ca",
    },
    {
      englishTitle: "UK Self Assessment deadlines guide",
      translatedTitle: "Guide des échéances de la Self Assessment au Royaume-Uni",
      href: "/forms/gb/self-assessment",
    },
  ],
  de: [
    {
      englishTitle: "Form 5472 guide",
      translatedTitle:
        "Leitfaden zu Formular 5472 für ausländisch gehaltene Single-Member-LLCs",
      href: "/forms/us/5472",
    },
    {
      englishTitle: "California LLC annual tax guide",
      translatedTitle: "Leitfaden zur jährlichen LLC-Steuer in Kalifornien",
      href: "/states/us-ca",
    },
    {
      englishTitle: "UK Self Assessment deadlines guide",
      translatedTitle: "Leitfaden zu Fristen der britischen Self Assessment",
      href: "/forms/gb/self-assessment",
    },
  ],
};

const CORE_GLOSSARY_TRANSLATIONS: Record<TranslationLocale, DraftGlossaryTermTranslation[]> = {
  es: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "entidad no considerada separada" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "ingreso efectivamente conectado" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "establecimiento permanente" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "impuesto de retención" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "tratado fiscal" },
  ],
  pt: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "entidade desconsiderada" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "renda efetivamente vinculada" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "estabelecimento permanente" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "imposto retido na fonte" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "tratado tributário" },
  ],
  zh: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "被忽略实体" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "有效关联收入" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "常设机构" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "预提税" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "税收协定" },
  ],
  fr: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "entité ignorée fiscalement" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "revenu effectivement lié" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "établissement stable" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "retenue à la source" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "convention fiscale" },
  ],
  de: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "steuerlich nicht berücksichtigte Einheit" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "effektiv verbundenes Einkommen" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "Betriebsstätte" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "Quellensteuer" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "Steuerabkommen" },
  ],
  ar: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "كيان مهمل ضريبياً" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "دخل مرتبط فعلياً" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "منشأة دائمة" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "ضريبة الاستقطاع" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "اتفاقية ضريبية" },
  ],
  hi: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "कर उद्देश्यों के लिए उपेक्षित इकाई" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "प्रभावी रूप से जुड़ी आय" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "स्थायी प्रतिष्ठान" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "स्रोत पर कर कटौती" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "कर संधि" },
  ],
  ja: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "税務上無視される事業体" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "実質的に関連する所得" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "恒久的施設" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "源泉徴収税" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "租税条約" },
  ],
  ko: [
    { termId: "disregarded-entity", english: "Disregarded entity", translated: "세법상 무시되는 법인" },
    { termId: "effectively-connected-income", english: "Effectively connected income", translated: "실질적으로 관련된 소득" },
    { termId: "permanent-establishment", english: "Permanent establishment", translated: "고정사업장" },
    { termId: "withholding-tax", english: "Withholding tax", translated: "원천징수세" },
    { termId: "tax-treaty", english: "Tax treaty", translated: "조세 조약" },
  ],
};

export function isTranslationLocale(value: string): value is TranslationLocale {
  return TRANSLATION_LOCALES.includes(value as TranslationLocale);
}

export function getTranslationLanguageName(locale: TranslationLocale): string {
  return LOCALE_META[locale].label;
}

export function getTranslationNativeName(locale: TranslationLocale): string {
  return LOCALE_META[locale].nativeName;
}

export function getDraftGuideTitles(locale: TranslationLocale): DraftGuideTitle[] {
  return FEATURED_GUIDE_TITLES[locale] ?? [];
}

export function getCoreGlossaryTranslations(
  locale: TranslationLocale
): DraftGlossaryTermTranslation[] {
  return CORE_GLOSSARY_TRANSLATIONS[locale];
}
