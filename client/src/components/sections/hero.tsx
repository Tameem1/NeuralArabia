import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import {
  useScrollAnimation,
  useMagneticEffect,
} from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import NeuralAnimation from "@/components/neural-network/neural-animation";
import tawjeehLogo from "@assets/TawjeehAI-logo.png";
import ParticleBackground from "@/components/particles/ParticleBackground";

export default function Hero() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>();
  const { elementRef: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const magneticRef1 = useMagneticEffect<HTMLButtonElement>();
  const magneticRef2 = useMagneticEffect<HTMLButtonElement>();

  return (
    <section id="home" className="relative py-24 morphing-bg overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground className="z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 text-center ${direction === "rtl" ? "md:text-right" : "md:text-left"}`}
          >
            <h1
              ref={titleRef}
              className={`auto-font font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-white transition-all duration-1000 ${
                titleVisible ? "scroll-reveal active" : "scroll-reveal"
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
              className={`text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto md:mx-0 md:mr-0 text-white/90 transition-all duration-1000 delay-300 ${
                descVisible ? "scroll-reveal active" : "scroll-reveal"
              }`}
            >
              {t("hero.description")
                .split(t("hero.companyHighlight"))
                .map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="relative inline-block mx-1">
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur-lg animate-pulse"></span>
                        <span className="relative px-2 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl tracking-wide animate-shimmer">
                          {t("hero.companyHighlight")}
                        </span>
                      </span>
                    )}
                  </span>
                ))}
            </p>
            <div
              className={`flex flex-col sm:flex-row flex-wrap justify-center ${direction === "rtl" ? "md:justify-start gap-3 sm:gap-2 md:gap-3 lg:gap-4" : "md:justify-start gap-3 sm:gap-2 md:gap-3 lg:gap-4"}`}
            >
              <Button
                ref={magneticRef1}
                className="bg-black/20 backdrop-blur-sm text-white border border-white/30 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg auto-font font-semibold btn-magnetic ripple btn-responsive-text flex-shrink-0 min-w-0"
                size="lg"
                asChild
              >
                <a href="#ai-consulting" className="whitespace-nowrap block text-center truncate">{t("services.consulting.title")}</a>
              </Button>
              <Button
                ref={magneticRef2}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg auto-font font-semibold btn-magnetic ripple btn-responsive-text flex-shrink-0 min-w-0"
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#ai-development" className="whitespace-nowrap block text-center truncate">{t("services.development.title")}</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
              <NeuralAnimation
                className="absolute inset-0 opacity-30 hover:opacity-50 transition-opacity duration-500 z-0"
                nodesCount={20}
                connectionsCount={30}
              />
              <img
                src={tawjeehLogo}
                alt="TawjeehAI Logo"
                className="relative z-10 max-w-xs sm:max-w-sm lg:max-w-md max-h-48 sm:max-h-60 lg:max-h-72 object-contain opacity-90 hover:opacity-100 transition-all duration-500 float hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
