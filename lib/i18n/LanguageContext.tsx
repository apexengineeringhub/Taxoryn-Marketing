"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  SupportedLanguage,
  LanguageOption,
  TranslationSchema,
} from "./types";
import { en } from "./en";
import { hi } from "./hi";

const DEFAULT_LANGUAGE: SupportedLanguage = "en";
const LANGUAGE_STORAGE_KEY = "taxoryn-language";
const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", direction: "ltr" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", direction: "ltr" },
];
const translations: Record<SupportedLanguage, TranslationSchema> = { en, hi };

interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationSchema;
  availableLanguages: LanguageOption[];
  isHindi: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: translations[DEFAULT_LANGUAGE],
  availableLanguages: AVAILABLE_LANGUAGES,
  isHindi: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(DEFAULT_LANGUAGE);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize from localStorage on client
  useEffect(() => {
    setIsMounted(true);
    try {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as SupportedLanguage | null;
        if (stored && (stored === "en" || stored === "hi")) {
          setLanguageState(stored);
          document.documentElement.lang = stored;
        }
      }
    } catch {
      // Ignore localStorage errors (e.g. storage disabled / sandbox)
    }
  }, []);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    if (lang !== "en" && lang !== "hi") return;
    setLanguageState(lang);

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        document.documentElement.lang = lang;
      }
    } catch {
      // Fail safely
    }
  }, []);

  const currentTranslation = translations[language] || translations[DEFAULT_LANGUAGE];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslation,
        availableLanguages: AVAILABLE_LANGUAGES,
        isHindi: language === "hi",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: DEFAULT_LANGUAGE,
      setLanguage: () => {},
      t: translations[DEFAULT_LANGUAGE],
      availableLanguages: AVAILABLE_LANGUAGES,
      isHindi: false,
    };
  }
  return context;
}
