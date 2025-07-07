import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      id: "expertise",
      icon: "brain",
      title: t("features.expertise.title"),
      description: t("features.expertise.description"),
    },
    {
      id: "customized",
      icon: "project-diagram",
      title: t("features.customized.title"),
      description: t("features.customized.description"),
    },
    {
      id: "measurable",
      icon: "chart-line",
      title: t("features.measurable.title"),
      description: t("features.measurable.description"),
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 text-foreground">
            {t("features.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="bg-card border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 service-card"
            >
              <CardHeader className="p-0">
                <div className="text-gradient-tawjeeh text-3xl mb-4">
                  <i className={`fas fa-${feature.icon}`}></i>
                </div>
                <CardTitle className="font-cairo font-bold text-xl mb-3 text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
