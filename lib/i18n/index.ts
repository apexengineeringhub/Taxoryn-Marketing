import { SupportedLanguage, LanguageOption, TranslationSchema } from "./types";
import { en } from "./en";
import { hi } from "./hi";

export * from "./types";
export * from "./LanguageContext";
export { en, hi };

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";
export const LANGUAGE_STORAGE_KEY = "taxoryn-language";

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    direction: "ltr",
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
    direction: "ltr",
  },
];

export const translations: Record<SupportedLanguage, TranslationSchema> = {
  en,
  hi,
};

export function getTranslation(lang: SupportedLanguage = DEFAULT_LANGUAGE): TranslationSchema {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
}
