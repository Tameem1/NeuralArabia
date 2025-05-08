import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { t } = useTranslation();
  const [direction] = useDirection();

  const stats = [
    {
      id: "projects",
      value: "+50",
      label: t("about.stats.projects")
    },
    {
      id: "experts",
      value: "+25",
      label: t("about.stats.experts")
    }
  ];

  return (
    <section id="about" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="w-full h-64 md:h-[350px] bg-accent/40 rounded-xl shadow-lg flex items-center justify-center neural-container">
              <div className="relative w-full h-full flex items-center justify-center">
                <i className="fas fa-users text-8xl text-primary opacity-70"></i>
                <div className="absolute inset-0 bg-primary/5 rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 ${direction === 'rtl' ? 'md:pr-12' : 'md:pl-12'}`}>
            <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-6 text-foreground">{t("about.title")}</h2>
            <p className="text-lg mb-6">{t("about.description1")}</p>
            <p className="text-lg mb-6">{t("about.description2")}</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              {stats.map((stat) => (
                <Card key={stat.id} className="bg-white p-4 rounded-lg shadow border-none">
                  <CardContent className="p-0">
                    <span className="block font-cairo font-bold text-3xl text-primary">{stat.value}</span>
                    <span className="text-foreground">{stat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
