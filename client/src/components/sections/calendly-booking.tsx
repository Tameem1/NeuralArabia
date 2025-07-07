import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, MessageSquare } from "lucide-react";
import ParticleBackground from "@/components/particles/ParticleBackground";

export default function CalendlyBooking() {
  const { t } = useTranslation();

  const bookingSteps = [
    {
      icon: Calendar,
      title: t("calendly.steps.schedule.title"),
      description: t("calendly.steps.schedule.description"),
    },
    {
      icon: MessageSquare,
      title: t("calendly.steps.discuss.title"),
      description: t("calendly.steps.discuss.description"),
    },
    {
      icon: Users,
      title: t("calendly.steps.plan.title"),
      description: t("calendly.steps.plan.description"),
    },
  ];

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="calendly-booking" className="relative py-24 morphing-bg overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground className="z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 text-gradient-tawjeeh leading-tight pb-2">
            {t("calendly.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground mb-8">
            {t("calendly.description")}
          </p>
          <div className="flex items-center justify-center text-muted-foreground mb-8">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{t("calendly.duration")}</span>
          </div>
        </div>

        {/* Calendly Embedded Widget */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 shadow-lg">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/tamemkabbani24/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bookingSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border/50 p-6 text-center hover:bg-card/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <h3 className="font-cairo font-bold text-lg mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
