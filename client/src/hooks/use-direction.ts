import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Direction = 'rtl' | 'ltr';

export function useDirection(): [Direction, (lang: string) => void] {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState<Direction>(i18n.language === 'ar' ? 'rtl' : 'ltr');

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setDirection(i18n.language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return [direction, changeLanguage];
}
