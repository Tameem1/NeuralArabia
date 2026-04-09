import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Direction = 'rtl' | 'ltr';

export function useDirection(): [Direction, (lang: string) => void] {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState<Direction>(i18n.language === 'ar' ? 'rtl' : 'ltr');

  const changeLanguage = (lang: string) => {
    if (lang === 'ar' || lang === 'en') {
      window.localStorage.setItem('tawjeeh-language', lang);
    }
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const nextDirection = i18n.language === 'ar' ? 'rtl' : 'ltr';
    setDirection(nextDirection);
    document.documentElement.dir = nextDirection;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return [direction, changeLanguage];
}
