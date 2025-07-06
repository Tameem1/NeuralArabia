import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Button } from "@/components/ui/button";
import NeuralAnimation from "@/components/neural-network/neural-animation";
import { useEffect, useState, useRef } from "react";

export default function AIConsulting() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    t("services.consulting.features.1"),
    t("services.consulting.features.2"),
    t("services.consulting.features.3"),
    t("services.consulting.features.4")
  ];

  return (
    <section 
      id="ai-consulting" 
      className="py-24 bg-background"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`font-cairo font-bold text-3xl md:text-4xl mb-4 text-gradient-tawjeeh transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {t("services.consulting.title")}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto text-muted-foreground transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            نقدم استشارات متخصصة في مجال الذكاء الاصطناعي لمساعدة شركتك على تحديد أفضل الاستراتيجيات وفرص التطبيق التي تناسب أهداف عملك.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-start bg-card border border-border p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-accent/10 hover:translate-x-1 transition-all duration-300 delay-${(index + 1) * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-tawjeeh text-white mr-3">
                    {index + 1}
                  </span>
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                className="bg-gradient-tawjeeh text-white px-8 py-6 rounded-lg font-cairo font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-300 mt-4"
                size="lg"
                asChild
              >
                <a 
                  href="https://forms.gle/tCunX1J4ANmDCdZW6"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t("services.consulting.cta")}
                </a>
              </Button>
            </div>
          </div>
          
          <div 
            className={`order-1 lg:order-2 neural-container transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            <div className="relative w-full h-96 bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-lightbulb text-8xl text-gradient-cyan opacity-40"></i>
              </div>
              <NeuralAnimation nodesCount={25} connectionsCount={40} />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gradient-cyan/20 to-transparent h-32"></div>
              
              <div className="absolute top-4 right-4 w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-md animate-pulse">
                <i className="fas fa-brain text-gradient-cyan text-2xl"></i>
              </div>
              
              {/* Floating elements with CSS animations */}
              <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-background/80 rounded-full flex items-center justify-center shadow-md animate-bounce">
                <i className="fas fa-lightbulb text-gradient-purple text-lg"></i>
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-md animate-ping">
                <i className="fas fa-chart-line text-primary text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}