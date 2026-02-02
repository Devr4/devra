"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "./translations"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    // Check localStorage for saved locale preference
    const savedLocale = localStorage.getItem("devra-locale") as Locale | null
    if (savedLocale && translations[savedLocale]) {
      setLocale(savedLocale)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0] as Locale
      if (translations[browserLang]) {
        setLocale(browserLang)
      }
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("devra-locale", newLocale)
  }

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale: handleSetLocale,
        t: translations[locale],
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
