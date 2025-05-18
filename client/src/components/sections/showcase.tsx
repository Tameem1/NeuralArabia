import { useTranslation } from "react-i18next";
import NeuralAnimation from "@/components/neural-network/neural-animation";
import { Card } from "@/components/ui/card";

export default function Showcase() {
  const { t } = useTranslation();

  const technologies = [
    {
      id: "neural",
      icon: "fas fa-network-wired",
      title: t("showcase.neural.title"),
      description: t("showcase.neural.description"),
    },
    {
      id: "nlp",
      icon: "fa fa-robot",
      title: t("showcase.nlp.title"),
      description: t("showcase.nlp.description"),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 text-foreground">
            {t("showcase.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            {t("showcase.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {technologies.map((tech) => (
            <Card
              key={tech.id}
              className="neural-container neural-hover rounded-xl overflow-hidden shadow-lg border-none relative min-h-[250px] flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-accent/30 flex items-center justify-center">
                <i
                  className={`${tech.icon} text-7xl text-primary opacity-60`}
                ></i>
                <NeuralAnimation nodesCount={15} connectionsCount={25} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6 z-10">
                <h3 className="font-cairo font-bold text-xl text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-white">{tech.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
