import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const { elementRef: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

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
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden bg-dots-pattern"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full icon-float stagger-1"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full icon-bounce stagger-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full icon-float stagger-3"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-full icon-bounce stagger-4"></div>
        <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-teal-500 rounded-full icon-float stagger-5"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 gradient-text-animated">
            {t("features.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            {t("features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className={`bg-card border-border rounded-xl p-6 perspective-card tilt-hover ripple transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="p-0">
                <div className={`text-gradient-tawjeeh text-4xl mb-4 icon-bounce stagger-${index + 1}`}>
                  <i className={`fas fa-${feature.icon}`}></i>
                </div>
                <CardTitle className="font-cairo font-bold text-xl mb-3 text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
