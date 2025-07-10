
import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { translations } from "@/lib/translations"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Detect user's preferred language
    const detectLanguage = (): Language => {
      // Check localStorage first
      const stored = localStorage.getItem("language") as Language
      if (stored && (stored === "en" || stored === "fr")) {
        return stored
      }

      // Check browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("fr")) {
        return "fr"
      }

      return "en"
    }

    setLanguage(detectLanguage())
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = translations[language]

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
