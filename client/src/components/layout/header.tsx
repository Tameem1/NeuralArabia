import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import logoImage from "@assets/TawjeehAI-icon.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [direction, changeLanguage] = useDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ar' ? 'en' : 'ar';
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "#home", label: t("header.home") },
    { href: "#ai-consulting", label: t("header.aiConsulting") },
    { href: "#ai-development", label: t("header.aiDevelopment") },
    { href: "#logo-story", label: t("header.logoStory") },
    { href: "#features", label: t("header.whyChooseUs") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 transition-all duration-300 ${
        isScrolled ? "py-1 shadow-lg" : "py-2"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <a href="#home" className="block">
              <img
                src={logoImage}
                alt="TawjeehAI Logo"
                className={`${
                  isScrolled ? "h-12" : "h-16"
                } transition-all duration-300 object-cover object-center`}
              />
            </a>
          </div>
          <nav className="hidden lg:flex items-center">
            <ul
              className={`flex ${direction === "rtl" ? "space-x-6 xl:space-x-8 space-x-reverse" : "space-x-6 xl:space-x-8"} text-foreground`}
            >
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative hover:text-primary transition-all duration-300 auto-font font-medium group whitespace-nowrap ${
                      isScrolled ? "text-sm xl:text-base" : "text-base xl:text-lg"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-tawjeeh transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className={`${direction === "rtl" ? "mr-4 xl:mr-6" : "ml-4 xl:ml-6"}`}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-1 xl:gap-2 hover:text-primary transition-colors duration-300"
              >
                <Globe className="w-3 h-3 xl:w-4 xl:h-4" />
                <span className="font-medium text-sm xl:text-base">
                  {i18n.language === 'ar' ? 'EN' : 'عر'}
                </span>
              </Button>
            </div>
          </nav>
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1 hover:text-primary transition-colors duration-300"
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-sm sm:text-base font-medium">
                {i18n.language === 'ar' ? 'EN' : 'عر'}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={
                isMenuOpen ? t("header.closeMenu") : t("header.openMenu")
              }
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-lg sm:text-xl`}
              ></i>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-border/50 mt-2">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 px-2 rounded-md hover:text-primary hover:bg-background/50 transition duration-300 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
