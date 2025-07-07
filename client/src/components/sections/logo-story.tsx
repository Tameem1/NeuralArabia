import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Triangle, Mountain, Diamond } from "lucide-react";
import logoIcon from "@assets/TawjeehAI-icon.png";

export default function LogoStory() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation();

  // Function to create highlighted text with special effects for key words
  const createHighlightedText = (text: string) => {
    if (direction === 'rtl') {
      // Target the word "لتوجيه" specifically
      if (text.includes('لتوجيه')) {
        return text.replace(
          'لتوجيه', 
          '<span class="tawjeeh-highlight">لتوجيه</span>'
        );
      }
    }
    return text;
  };

  const logoElements = [
    {
      id: "mountain",
      icon: Mountain,
      title: t("logoStory.elements.mountain.title"),
      description: t("logoStory.elements.mountain.description"),
      color: "text-blue-500",
    },
    {
      id: "triangles",
      icon: Triangle,
      title: t("logoStory.elements.triangles.title"),
      description: t("logoStory.elements.triangles.description"),
      color: "text-purple-500",
    },
    {
      id: "diamond",
      icon: Diamond,
      title: t("logoStory.elements.diamond.title"),
      description: t("logoStory.elements.diamond.description"),
      color: "text-amber-500",
    },
  ];

  return (
    <section
      id="logo-story"
      className="py-24 bg-gradient-to-br from-background via-accent/20 to-background relative overflow-hidden"
    >
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
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
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
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div
              className={`space-y-6 ${direction === "rtl" ? "lg:order-2" : ""}`}
            >
              <div className="prose prose-lg max-w-none">
                <p 
                  className="text-lg leading-relaxed text-foreground/90 mb-6"
                  dangerouslySetInnerHTML={{ __html: createHighlightedText(t("logoStory.paragraph1")) }}
                />
                <p 
                  className="text-lg leading-relaxed text-foreground/90 font-medium"
                  dangerouslySetInnerHTML={{ __html: createHighlightedText(t("logoStory.paragraph2")) }}
                />
              </div>
            </div>

            {/* Visual Elements */}
            <div className={`${direction === "rtl" ? "lg:order-1" : ""}`}>
              <div className="relative">
                {/* Logo Display */}
                <div className="relative w-full h-80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl backdrop-blur-sm"></div>

                  {/* Actual Logo */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="relative group">
                      <img
                        src={logoIcon}
                        alt="TawjeehAI Logo"
                        className="w-48 h-48 object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Glowing effect */}
                      <div className="absolute inset-0 w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                      {/* Floating decorative elements */}
                      <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary/60 rounded-full animate-bounce delay-100"></div>
                      <div className="absolute -top-2 -right-6 w-2 h-2 bg-secondary/60 rounded-full animate-bounce delay-300"></div>
                      <div className="absolute -bottom-3 -left-2 w-4 h-4 bg-accent/60 rounded-full animate-bounce delay-500"></div>
                      <div className="absolute -bottom-4 -right-3 w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-700"></div>
                    </div>
                  </div>

                  {/* Animated rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 border border-primary/20 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border border-secondary/20 rounded-full animate-ping delay-1000"></div>
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
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-background to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
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
