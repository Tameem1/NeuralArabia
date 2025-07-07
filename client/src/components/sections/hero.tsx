import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Button } from "@/components/ui/button";
import NeuralAnimation from "@/components/neural-network/neural-animation";
import tawjeehLogo from "../../assets/TawjeehAI-logo.png";
import ParticleBackground from "@/components/particles/ParticleBackground";

export default function Hero() {
  const { t } = useTranslation();
  const [direction] = useDirection();

  return (
    <section
      id="home"
      className="relative py-24 bg-gradient-tawjeeh overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground className="z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 text-center ${direction === "rtl" ? "md:text-right" : "md:text-left"}`}
          >
            <h1 className="font-cairo font-bold text-4xl md:text-5xl leading-tight mb-6 text-white">
              {t("hero.titleStart")}{" "}
              <span className="text-white drop-shadow-lg">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.titleEnd")}
            </h1>
            <p className="text-lg mb-8 max-w-md mx-auto md:mx-0 md:mr-0 text-white/90">
              {t("hero.description")}
            </p>
            <div
              className={`flex flex-col sm:flex-row justify-center ${direction === "rtl" ? "md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse" : "md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"}`}
            >
              <Button
                className="bg-black/20 backdrop-blur-sm text-white border border-white/30 px-8 py-6 rounded-lg font-cairo font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                size="lg"
                asChild
              >
                <a href="#ai-consulting">{t("services.consulting.title")}</a>
              </Button>
              <Button
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-6 rounded-lg font-cairo font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#ai-development">{t("services.development.title")}</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex items-center justify-center">
            <div className="relative w-full h-80 sm:h-96 bg-accent/30 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={tawjeehLogo}
                alt="TawjeehAI Logo"
                className="max-w-xs max-h-64 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
