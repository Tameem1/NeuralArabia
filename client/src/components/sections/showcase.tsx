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
            {t("showcase.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            {t("showcase.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {technologies.map((tech) => (
            <Card
              key={tech.id}
              className="neural-container neural-hover rounded-xl overflow-hidden shadow-lg border-none relative min-h-[250px] flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-card border border-border flex items-center justify-center">
                <i
                  className={`${tech.icon} text-7xl text-gradient-cyan opacity-60`}
                ></i>
                <NeuralAnimation nodesCount={15} connectionsCount={25} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gradient-cyan/80 to-transparent p-6 z-10">
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
