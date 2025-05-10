import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/tawjeehAI-logo.png";

export default function Header() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    { href: "#services", label: t("header.services") },
    { href: "#about", label: t("header.about") },
    { href: "#contact", label: t("header.contact") },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-sm transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <a href="#home" className="block">
              <img 
                src={logoImage} 
                alt="TawjeehAI Logo" 
                className={`${isScrolled ? 'h-12' : 'h-16'} transition-all duration-300`}
              />
            </a>
          </div>
          <nav className="hidden md:flex">
            <ul className={`flex ${direction === 'rtl' ? 'space-x-8 space-x-reverse' : 'space-x-8'} text-foreground`}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="hover:text-primary transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block hover:text-primary transition duration-300"
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
