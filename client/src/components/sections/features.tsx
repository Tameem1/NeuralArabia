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
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
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
