import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'id' || saved === 'en') return saved;

      // Otomatis mendeteksi bahasa browser:
      // Jika browser menggunakan bahasa Indonesia ('id', 'id-ID'), tampilkan Indonesia.
      // Jika browser selain Indonesia (misal: 'en-US', 'en', dll), otomatis tampilkan Bahasa Inggris!
      const browserLang = navigator.language || navigator.userLanguage || 'id';
      if (browserLang.toLowerCase().startsWith('id')) {
        return 'id';
      }
      return 'en';
    }
    return 'id';
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_lang', language);
      document.documentElement.lang = language;
    } catch (e) {
      // ignore storage errors
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const t = translations[language] || translations.id;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

