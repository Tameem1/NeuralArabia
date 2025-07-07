import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Triangle, Mountain, Diamond } from "lucide-react";

export default function LogoStory() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const logoElements = [
    {
      id: "mountain",
      icon: Mountain,
      title: t("logoStory.elements.mountain.title"),
      description: t("logoStory.elements.mountain.description"),
      color: "text-blue-500"
    },
    {
      id: "triangles",
      icon: Triangle,
      title: t("logoStory.elements.triangles.title"),
      description: t("logoStory.elements.triangles.description"),
      color: "text-purple-500"
    },
    {
      id: "diamond",
      icon: Diamond,
      title: t("logoStory.elements.diamond.title"),
      description: t("logoStory.elements.diamond.description"),
      color: "text-amber-500"
    }
  ];

  return (
    <section id="logo-story" className="py-24 bg-gradient-to-br from-background via-accent/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-secondary/20 rotate-12 animate-pulse delay-300"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="auto-font font-bold text-4xl md:text-5xl mb-4 text-foreground">
            {t("logoStory.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("logoStory.subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div 
          ref={contentRef}
          className={`transition-all duration-1000 delay-300 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className={`space-y-6 ${direction === 'rtl' ? 'lg:order-2' : ''}`}>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  {t("logoStory.paragraph1")}
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  {t("logoStory.paragraph2")}
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  {t("logoStory.paragraph3")}
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                  {t("logoStory.paragraph4")}
                </p>
              </div>
            </div>

            {/* Visual Elements */}
            <div className={`${direction === 'rtl' ? 'lg:order-1' : ''}`}>
              <div className="relative">
                {/* Large Triangle Background */}
                <div className="relative w-full h-80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl backdrop-blur-sm"></div>
                  
                  {/* Logo representation */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-40 h-40 relative">
                      {/* Main triangle */}
                      <div className="absolute inset-0 border-4 border-primary/60 rotate-0 transform">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 clip-triangle"></div>
                      </div>
                      
                      {/* Small triangles */}
                      <div className="absolute top-8 left-8 w-8 h-8 bg-primary/40 clip-triangle animate-pulse"></div>
                      <div className="absolute top-12 right-12 w-6 h-6 bg-secondary/40 clip-triangle animate-pulse delay-300"></div>
                      <div className="absolute bottom-16 left-16 w-10 h-10 bg-accent/40 clip-triangle animate-pulse delay-500"></div>
                      
                      {/* Diamond in center */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rotate-45 animate-pulse delay-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Elements Cards */}
          <div className="mt-16">
            <h3 className="auto-font font-bold text-2xl mb-8 text-center text-foreground">
              {t("logoStory.elements.title")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {logoElements.map((element, index) => (
                <Card 
                  key={element.id} 
                  className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-background to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <element.icon className={`w-8 h-8 ${element.color}`} />
                    </div>
                    <h4 className="auto-font font-semibold text-lg mb-2 text-foreground">
                      {element.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {element.description}
                    </p>
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