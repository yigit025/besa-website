import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'tr' | 'en' | 'ru';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getLanguageFromPath = (): Language | null => {
  const firstPath = window.location.pathname.split('/').filter(Boolean)[0];

  if (firstPath === 'tr' || firstPath === 'en' || firstPath === 'ru') {
    return firstPath;
  }

  return null;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const pathLanguage = getLanguageFromPath();

    if (pathLanguage) {
      localStorage.setItem('language', pathLanguage);
      return pathLanguage;
    }

    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage === 'tr' || savedLanguage === 'en' || savedLanguage === 'ru') {
      return savedLanguage;
    }

    return 'tr';
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);

    const nextUrl = `/${newLanguage}${window.location.search}${window.location.hash}`;

    window.history.pushState(null, '', nextUrl);
    document.documentElement.lang = newLanguage;
  };

  useEffect(() => {
    document.documentElement.lang = language;

    const pathLanguage = getLanguageFromPath();

    if (!pathLanguage) {
      window.history.replaceState(
        null,
        '',
        `/${language}${window.location.search}${window.location.hash}`
      );
    }

    const handlePopState = () => {
      const newPathLanguage = getLanguageFromPath();

      if (newPathLanguage) {
        setLanguageState(newPathLanguage);
        localStorage.setItem('language', newPathLanguage);
        document.documentElement.lang = newPathLanguage;
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
