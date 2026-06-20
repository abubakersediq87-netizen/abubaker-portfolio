import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Language } from '../data/translations'
import { translations } from '../data/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language
    return saved && (saved === 'en' || saved === 'ps' || saved === 'fa') ? saved : 'en'
  })

  const dir = language === 'ps' || language === 'fa' ? 'rtl' : 'ltr'

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.dir = dir
    document.documentElement.lang = language
  }, [language, dir])

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}