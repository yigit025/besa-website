import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const BASE_URL = 'https://www.besamimarlikinsaat.com';

const initialTitle =
  typeof document !== 'undefined' && document.title
    ? document.title
    : 'BESA Mimarlık İnşaat';

const initialDescription =
  typeof document !== 'undefined'
    ? document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content') ||
      'BESA Mimarlık İnşaat modern mimari ve kaliteli yaşam alanları geliştirir.'
    : 'BESA Mimarlık İnşaat modern mimari ve kaliteli yaşam alanları geliştirir.';

const setMetaTag = (
  attribute: 'name' | 'property',
  key: string,
  content: string
) => {
  let tag = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
};

export const SEO: React.FC = () => {
  const { language } = useLanguage();

  const seo = {
    tr: {
      title: initialTitle,
      description: initialDescription,
      locale: 'tr_TR'
    },
    en: {
      title:
        'BESA Architecture & Construction | Villa and Residential Projects in Dalaman, Muğla',
      description:
        'BESA Architecture & Construction develops modern villa and residential projects in Dalaman and Muğla with quality craftsmanship and contemporary architectural design.',
      locale: 'en_US'
    },
    ru: {
      title:
        'BESA Архитектура и Строительство | Виллы и жилые проекты в Даламане, Мугла',
      description:
        'BESA разрабатывает современные виллы и жилые проекты в Даламане и Мугла, сочетая качественное строительство и современную архитектуру.',
      locale: 'ru_RU'
    }
  };

  const currentSeo = seo[language];
  const canonicalUrl = `${BASE_URL}/${language}`;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = currentSeo.title;

    setMetaTag('name', 'description', currentSeo.description);

    setMetaTag('property', 'og:title', currentSeo.title);
    setMetaTag('property', 'og:description', currentSeo.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:locale', currentSeo.locale);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', currentSeo.title);
    setMetaTag('name', 'twitter:description', currentSeo.description);

    setCanonical(canonicalUrl);
  }, [language, currentSeo.title, currentSeo.description, currentSeo.locale, canonicalUrl]);

  return null;
};
