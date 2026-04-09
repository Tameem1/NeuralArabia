import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arTranslation from '../locales/ar.json';
import enTranslation from '../locales/en.json';

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const storedLanguage = window.localStorage.getItem('tawjeeh-language');
  if (storedLanguage === 'ar' || storedLanguage === 'en') {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: arTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
