import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import NeuralAnimation from "@/components/neural-network/neural-animation";

export default function Services() {
  const { t } = useTranslation();
  const [direction] = useDirection();

  const services = [
    {
      id: "consulting",
      title: t("services.consulting.title"),
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      imageAlt: t("services.consulting.imageAlt"),
      features: [
        t("services.consulting.features.1"),
        t("services.consulting.features.2"),
        t("services.consulting.features.3"),
        t("services.consulting.features.4")
      ],
      ctaText: t("services.consulting.cta")
    },
    {
      id: "development",
      title: t("services.development.title"),
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      imageAlt: t("services.development.imageAlt"),
      features: [
        t("services.development.features.1"),
        t("services.development.features.2"),
        t("services.development.features.3"),
        t("services.development.features.4")
      ],
      ctaText: t("services.development.cta")
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 text-foreground">{t("services.title")}</h2>
          <p className="text-lg max-w-2xl mx-auto">{t("services.description")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <Card key={service.id} className="service-card bg-accent rounded-2xl p-2 shadow-md hover:shadow-xl border-none">
              <CardContent className="p-6">
                <div className="mb-6 neural-hover relative overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt} 
                    className="w-full h-64 object-cover rounded-lg" 
                  />
                  <NeuralAnimation nodesCount={10} connectionsCount={15} />
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-cairo font-bold text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className={`fas fa-check-circle text-primary mt-1 ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <CardFooter className="p-0 pt-2">
                  <Button 
                    className="bg-primary text-white rounded-lg font-cairo font-semibold hover:bg-primary/90 transition-colors duration-300"
                    asChild
                  >
                    <a href="#contact">{service.ctaText}</a>
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
