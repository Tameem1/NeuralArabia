import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NeuralAnimation from "@/components/neural-network/neural-animation";

export default function AIDevelopment() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    t("services.development.features.1"),
    t("services.development.features.2"),
    t("services.development.features.3"),
    t("services.development.features.4")
  ];

  const developmentAreas = [
    {
      id: "nlp",
      title: "معالجة اللغة الطبيعية",
      icon: "fas fa-comment-dots",
      description: "تطوير نماذج فهم وتحليل اللغة العربية لاستخراج الأفكار والمعلومات بشكل آلي"
    },
    {
      id: "cv",
      title: "رؤية الحاسوب",
      icon: "fas fa-camera",
      description: "تحليل ومعالجة الصور والفيديو باستخدام خوارزميات الذكاء الاصطناعي"
    },
    {
      id: "systems",
      title: "أنظمة التوصية",
      icon: "fas fa-star",
      description: "تطوير نظم ذكية لتقديم توصيات مخصصة للمستخدمين بناءً على تفضيلاتهم وسلوكهم"
    }
  ];

  return (
    <section id="ai-development" className="py-24 bg-gradient-to-b from-accent/20 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 text-foreground">
            {t("services.development.title")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            نطور حلول ذكاء اصطناعي مخصصة ومتكاملة مع أنظمتك الحالية لزيادة الكفاءة وتحسين تجربة المستخدم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="font-cairo font-bold text-2xl mb-4 text-primary">
                المجالات التقنية
              </h3>
              
              <div className="grid grid-cols-3 gap-2 mb-6">
                {developmentAreas.map((area, index) => (
                  <div 
                    key={area.id}
                    className={`text-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${activeTab === index 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-accent/30 hover:bg-accent/50'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <i className={`${area.icon} text-xl mb-2 block`}></i>
                    <span className="text-sm font-semibold">{area.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-accent/10 rounded-lg min-h-[100px]">
                <h4 className="font-cairo font-semibold text-lg mb-2">
                  {developmentAreas[activeTab].title}
                </h4>
                <p>{developmentAreas[activeTab].description}</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1">
                  <i className={`fas fa-check-circle text-primary mt-1 ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`}></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="bg-primary text-white px-8 py-6 rounded-lg font-cairo font-semibold hover:bg-primary/90 transition-colors duration-300 mt-4"
              size="lg"
              asChild
            >
              <a 
                href="https://forms.gle/8ERwqfnDoKtFFexRA"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t("services.development.cta")}
              </a>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 neural-container">
            <div className="relative w-full h-96 bg-accent/30 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-code text-8xl text-primary opacity-40"></i>
              </div>
              <NeuralAnimation nodesCount={30} connectionsCount={50} />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/20 to-transparent h-32"></div>
              
              {/* Floating elements */}
              <div className="absolute animate-bounce top-10 left-10 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                <i className="fas fa-robot text-primary text-xl"></i>
              </div>
              
              <div className="absolute animate-pulse bottom-10 right-10 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                <i className="fas fa-microchip text-primary text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}