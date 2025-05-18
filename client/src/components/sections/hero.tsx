import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Button } from "@/components/ui/button";
import NeuralAnimation from "@/components/neural-network/neural-animation";
import ParticleBackground from "@/components/particles/ParticleBackground";

export default function Hero() {
  const { t } = useTranslation();
  const [direction] = useDirection();

  return (
    <section
      id="home"
      className="relative py-24 bg-gradient-to-l from-accent to-white overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground className="z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 text-center ${direction === "rtl" ? "md:text-right" : "md:text-left"}`}
          >
            <h1 className="font-cairo font-bold text-4xl md:text-5xl leading-tight mb-6 text-foreground">
              {t("hero.titleStart")}{" "}
              <span className="text-primary">{t("hero.titleHighlight")}</span>{" "}
              {t("hero.titleEnd")}
            </h1>
            <p className="text-lg mb-8 max-w-md mx-auto md:mx-0 md:mr-0">
              {t("hero.description")}
            </p>
            <div
              className={`flex flex-col sm:flex-row justify-center ${direction === "rtl" ? "md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse" : "md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"}`}
            >
              <Button
                className="bg-primary text-white px-8 py-6 rounded-lg font-cairo font-semibold btn-primary"
                size="lg"
                asChild
              >
                <a href="#ai-consulting">{t("services.consulting.title")}</a>
              </Button>
              <Button
                className="bg-white text-primary border border-primary px-8 py-6 rounded-lg font-cairo font-semibold hover:bg-accent transition-colors duration-300"
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#ai-development">{t("services.development.title")}</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 neural-container neural-hover flex items-center justify-center">
            <div className="relative w-full h-80 sm:h-96 bg-accent/30 rounded-xl flex items-center justify-center overflow-hidden">
              <i className="fas fa-brain text-8xl md:text-9xl text-primary opacity-70"></i>
              <NeuralAnimation nodesCount={20} connectionsCount={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
