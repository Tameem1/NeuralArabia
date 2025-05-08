import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arTranslation from '../locales/ar.json';
import enTranslation from '../locales/en.json';

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
    lng: 'ar', // Default language
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
