import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { useScrollAnimation, useMagneticEffect } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import NeuralAnimation from "@/components/neural-network/neural-animation";
import tawjeehLogo from "../../assets/TawjeehAI-logo.png";
import ParticleBackground from "@/components/particles/ParticleBackground";

export default function Hero() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const magneticRef1 = useMagneticEffect<HTMLButtonElement>();
  const magneticRef2 = useMagneticEffect<HTMLButtonElement>();

  return (
    <section
      id="home"
      className="relative py-24 morphing-bg overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground className="z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 text-center ${direction === "rtl" ? "md:text-right" : "md:text-left"}`}
          >
            <h1 
              ref={titleRef}
              className={`font-cairo font-bold text-4xl md:text-5xl leading-tight mb-6 text-white transition-all duration-1000 ${
                titleVisible ? 'scroll-reveal active' : 'scroll-reveal'
              }`}
            >
              {t("hero.titleStart")}{" "}
              <span className="text-white drop-shadow-lg gradient-text-animated">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.titleEnd")}
            </h1>
            <p 
              ref={descRef}
              className={`text-lg mb-8 max-w-md mx-auto md:mx-0 md:mr-0 text-white/90 transition-all duration-1000 delay-300 ${
                descVisible ? 'scroll-reveal active' : 'scroll-reveal'
              }`}
            >
              {t("hero.description").split("توجيه AI").map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="relative inline-block mx-1">
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur-lg animate-pulse"></span>
                      <span className="relative px-2 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl tracking-wide animate-shimmer">
                        توجيه AI
                      </span>
                    </span>
                  )}
                </span>
              ))}
            </p>
            <div
              className={`flex flex-col sm:flex-row justify-center ${direction === "rtl" ? "md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse" : "md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"}`}
            >
              <Button
                ref={magneticRef1}
                className="bg-black/20 backdrop-blur-sm text-white border border-white/30 px-8 py-6 rounded-lg font-cairo font-semibold btn-magnetic ripple"
                size="lg"
                asChild
              >
                <a href="#ai-consulting">{t("services.consulting.title")}</a>
              </Button>
              <Button
                ref={magneticRef2}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-6 rounded-lg font-cairo font-semibold btn-magnetic ripple"
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#ai-development">{t("services.development.title")}</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex items-center justify-center">
            <div className="relative w-full h-80 sm:h-96 flex items-center justify-center overflow-hidden">
              <img
                src={tawjeehLogo}
                alt="TawjeehAI Logo"
                className="max-w-lg max-h-80 object-contain opacity-90 hover:opacity-100 transition-all duration-500 float glow hover:scale-110"
              />
              <NeuralAnimation 
                className="opacity-30 hover:opacity-50 transition-opacity duration-500" 
                nodesCount={20} 
                connectionsCount={30} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
