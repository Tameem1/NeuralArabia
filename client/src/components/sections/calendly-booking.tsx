import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, MessageSquare } from "lucide-react";

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

  const handleBookingClick = () => {
    // Open Calendly in a new tab - replace with actual Calendly URL
    window.open("https://calendly.com/your-calendly-link", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 text-gradient-tawjeeh leading-tight pb-2">
            {t("calendly.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground mb-8">
            {t("calendly.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleBookingClick}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t("calendly.bookButton")}
            </Button>
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{t("calendly.duration")}</span>
            </div>
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
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
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

        <div className="mt-16 text-center">
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-cairo font-bold text-xl mb-3 text-foreground">
              {t("calendly.availability.title")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("calendly.availability.description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{t("calendly.availability.times")}</span>
              </div>
              <div className="flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{t("calendly.availability.days")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}