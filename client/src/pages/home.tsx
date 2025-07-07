import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import CalendlyBooking from "@/components/sections/calendly-booking";
import Services from "@/components/sections/services";

export default function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document title
    document.title = i18n.t("seo.title");
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", i18n.t("seo.description"));
    }
    
    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute("content", i18n.t("seo.ogTitle"));
    }
    
    if (ogDescription) {
      ogDescription.setAttribute("content", i18n.t("seo.ogDescription"));
    }
  }, [i18n]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="service-sections relative section-transition">
          <Services />
        </div>
        <div className="section-transition">
          <Features />
        </div>
        <div className="section-transition">
          <CalendlyBooking />
        </div>
      </main>
      <Footer />
    </div>
  );
}
