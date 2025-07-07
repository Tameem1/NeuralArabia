import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import NeuralAnimation from "@/components/neural-network/neural-animation";
import { useEffect, useState, useRef } from "react";
import tawjeehAIIcon from "@assets/TawjeehAI-icon.png";

export default function Services() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const [isConsultingVisible, setIsConsultingVisible] = useState(false);
  const [isDevelopmentVisible, setIsDevelopmentVisible] = useState(false);
  const consultingSectionRef = useRef<HTMLDivElement>(null);
  const developmentSectionRef = useRef<HTMLDivElement>(null);
  const [activeDevTab, setActiveDevTab] = useState(0);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const consultingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsConsultingVisible(true);
      }
    }, observerOptions);

    const developmentObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsDevelopmentVisible(true);
      }
    }, observerOptions);

    if (consultingSectionRef.current) {
      consultingObserver.observe(consultingSectionRef.current);
    }

    if (developmentSectionRef.current) {
      developmentObserver.observe(developmentSectionRef.current);
    }

    return () => {
      if (consultingSectionRef.current) {
        consultingObserver.unobserve(consultingSectionRef.current);
      }
      if (developmentSectionRef.current) {
        developmentObserver.unobserve(developmentSectionRef.current);
      }
    };
  }, []);

  const consultingFeatures = [
    t("services.consulting.features.1"),
    t("services.consulting.features.2"),
    t("services.consulting.features.3"),
    t("services.consulting.features.4"),
  ];

  const developmentFeatures = [
    t("services.development.features.1"),
    t("services.development.features.2"),
    t("services.development.features.3"),
    t("services.development.features.4"),
  ];

  const developmentAreas = [
    {
      id: "agents",
      title: t("aiDevelopment.areas.agents.title"),
      icon: "fas fa-robot",
      description: t("aiDevelopment.areas.agents.description"),
    },
    {
      id: "generative",
      title: t("aiDevelopment.areas.generative.title"),
      icon: "fas fa-comment-dots",
      description: t("aiDevelopment.areas.generative.description"),
    },
    {
      id: "responsible",
      title: t("aiDevelopment.areas.responsible.title"),
      icon: "fas fa-star",
      description: t("aiDevelopment.areas.responsible.description"),
    },
  ];

  return (
    <>
      {/* AI Consulting Section */}
      <section
        id="ai-consulting"
        className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 dark:from-slate-900/50 dark:via-blue-900/20 dark:to-purple-900/30 relative overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl"></div>
        </div>
        <div
          className="container mx-auto px-6 relative z-10"
          ref={consultingSectionRef}
        >
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isConsultingVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="auto-font font-bold text-3xl md:text-4xl mb-4 text-gradient-tawjeeh leading-tight pb-2">
              {t("services.consulting.title")}
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              {t("services.consulting.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${isConsultingVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              <ul className="space-y-4 mb-8">
                {consultingFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start bg-card border border-border p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-accent/10 hover:translate-x-1 transition-all duration-300 ${isConsultingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-tawjeeh text-white mr-6">
                      {index + 1}
                    </span>
                    <span className={"mr-6 text-card-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`transition-all duration-1000 ${isConsultingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: "600ms" }}
              >
                <Button
                  className="bg-gradient-tawjeeh text-white px-12 py-8 rounded-lg auto-font font-bold text-xl hover:opacity-90 hover:shadow-lg transition-all duration-300 mt-4"
                  size="lg"
                  onClick={() => {
                    const calendlySection = document.querySelector('#calendly-booking');
                    if (calendlySection) {
                      calendlySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t("services.consulting.cta")}
                </Button>
              </div>
            </div>

            <div
              className={`order-1 lg:order-2 neural-container transition-all duration-1000 delay-300 ${isConsultingVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              <div className="relative w-full h-96 bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-lightbulb text-8xl text-gradient-cyan opacity-40"></i>
                </div>
                <NeuralAnimation nodesCount={25} connectionsCount={40} />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gradient-cyan/20 to-transparent h-32"></div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <img
                    src={tawjeehAIIcon}
                    alt="TawjeehAI"
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Floating elements with CSS animations */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-background/80 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  <i className="fas fa-lightbulb text-gradient-purple text-lg"></i>
                </div>

                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-background/80 rounded-full flex items-center justify-center shadow-md pulse">
                  <i className="fas fa-chart-line text-gradient-yellow text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Section */}
      <section
        id="ai-development"
        className="py-24 bg-gradient-to-tl from-slate-900 via-slate-800/90 to-slate-900 relative overflow-hidden"
      >
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-full blur-2xl"></div>
        </div>
        <div
          className="container mx-auto px-6 relative z-10"
          ref={developmentSectionRef}
        >
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isDevelopmentVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="auto-font font-bold text-3xl md:text-4xl mb-4 text-gradient-tawjeeh leading-tight pb-2">
              {t("services.development.title")}
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              {t("services.development.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${isDevelopmentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              <div className="bg-card border border-border rounded-xl p-6 shadow-lg mb-8 glow">
                <h3 className="auto-font font-bold text-2xl mb-4 text-gradient-tawjeeh leading-tight pb-1">
                  {t("services.development.technicalAreas")}
                </h3>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  {developmentAreas.map((area, index) => (
                    <div
                      key={area.id}
                      className={`text-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeDevTab === index
                          ? "bg-gradient-tawjeeh text-white shadow-md"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                      onClick={() => setActiveDevTab(index)}
                    >
                      <i className={`${area.icon} text-xl mb-2 block`}></i>
                      <span className="text-sm font-semibold">
                        {area.title}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-muted/50 rounded-lg min-h-[100px]">
                  <h4 className="auto-font font-semibold text-lg mb-2 text-card-foreground">
                    {developmentAreas[activeDevTab].title}
                  </h4>
                  <p className="text-muted-foreground">
                    {developmentAreas[activeDevTab].description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {developmentFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start bg-card border border-border p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1 ${isDevelopmentVisible ? "opacity-100" : "opacity-0"}`}
                    style={{
                      transitionDelay: `${(index + 1) * 150}ms`,
                      transitionProperty: "all",
                      transitionDuration: "700ms",
                    }}
                  >
                    <i
                      className={`fas fa-check-circle text-gradient-cyan mt-1 mr-6`}
                    ></i>
                    <span className={"mr-6 text-card-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`transition-all duration-1000 ${isDevelopmentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: "800ms" }}
              >
                <Button
                  className="bg-gradient-tawjeeh text-white px-12 py-8 rounded-lg auto-font font-bold text-xl hover:opacity-90 hover:shadow-lg transition-all duration-300 mt-4"
                  size="lg"
                  onClick={() => {
                    const calendlySection = document.querySelector('#calendly-booking');
                    if (calendlySection) {
                      calendlySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t("services.development.cta")}
                </Button>
              </div>
            </div>

            <div
              className={`order-1 lg:order-2 neural-container transition-all duration-1000 delay-300 ${isDevelopmentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              <div className="relative w-full h-96 bg-card border border-border rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-code text-8xl text-gradient-cyan opacity-40"></i>
                </div>
                <NeuralAnimation nodesCount={30} connectionsCount={50} />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gradient-cyan/20 to-transparent h-32"></div>

                {/* Floating elements */}
                <div className="absolute float top-10 left-10 w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-md">
                  <i className="fas fa-robot text-gradient-cyan text-xl"></i>
                </div>

                <div className="absolute pulse bottom-10 right-10 w-16 h-16 bg-background rounded-lg flex items-center justify-center shadow-md">
                  <i className="fas fa-microchip text-gradient-purple text-xl"></i>
                </div>

                <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-background/70 rounded-full flex items-center justify-center shadow-md">
                  <i className="fas fa-cogs text-gradient-yellow text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
