import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import NeuralAnimation from "@/components/neural-network/neural-animation";
import { useEffect, useState, useRef } from "react";

export default function Services() {
  const { t } = useTranslation();
  const [direction] = useDirection();
  const [isConsultingVisible, setIsConsultingVisible] = useState(false);
  const [isDevelopmentVisible, setIsDevelopmentVisible] = useState(false);
  const consultingSectionRef = useRef<HTMLDivElement>(null);
  const developmentSectionRef = useRef<HTMLDivElement>(null);
  const [activeDevTab, setActiveDevTab] = useState(0);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const consultingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsConsultingVisible(true);
      }
    }, observerOptions);

    const developmentObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsDevelopmentVisible(true);
      }
    }, observerOptions);

    if (consultingSectionRef.current) {
      consultingObserver.observe(consultingSectionRef.current);
    }

    if (developmentSectionRef.current) {
      developmentObserver.observe(developmentSectionRef.current);
    }

    return () => {
      if (consultingSectionRef.current) {
        consultingObserver.unobserve(consultingSectionRef.current);
      }
      if (developmentSectionRef.current) {
        developmentObserver.unobserve(developmentSectionRef.current);
      }
    };
  }, []);

  const consultingFeatures = [
    t("services.consulting.features.1"),
    t("services.consulting.features.2"),
    t("services.consulting.features.3"),
    t("services.consulting.features.4"),
  ];

  const developmentFeatures = [
    t("services.development.features.1"),
    t("services.development.features.2"),
    t("services.development.features.3"),
    t("services.development.features.4"),
  ];

  const developmentAreas = [
    {
      id: "nlp",
      title: "وكلاء الذكاء الاصطناعي",
      icon: "fas fa-robot",
      description:
        "تخيّل زميلًا في الفريق يعمل بلا كلل، ويتعلم باستمرار، ويتكيف مع احتياجاتك. هذا ما تعد به وكلاء الذكاء الاصطناعي. بفضل قدرتهم على المراقبة والتخطيط والعمل بشكل مستقل، يفتح وكلاء الذكاء الاصطناعي فصلًا جديدًا من التحول الشامل في مختلف القطاعات، مُبسّطين العمليات، ومُعززين رؤى البيانات، ومُعززين الإمكانات البشرية بشكل غير مسبوق.",
    },
    {
      id: "cv",
      title: "الذكاء الاصطناعي التوليدي",
      icon: "fas fa-comment-dots",
      description:
        "لقد وصل الذكاء الاصطناعي  إلى نقطة تحول جيلية. ومع توقع زيادة استثمارات الذكاء الاصطناعي التوليدي بنسبة 60% خلال السنوات الثلاث المقبلة،  تستمر طموحات الذكاء الاصطناعي والذكاء الاصطناعي التوليدي  في النمو في جميع القطاعات والوظائف.",
    },
    {
      id: "systems",
      title: "الذكاء الاصطناعي المسؤول",
      icon: "fas fa-star",
      description:
        "تطوير نظم ذكية لتقديم توصيات مخصصة للمستخدمين بناءً على تفضيلاتهم وسلوكهم",
    },
  ];

  return (
    <>
      {/* AI Consulting Section */}
      <section
        id="ai-consulting"
        className="py-24 bg-gradient-to-b from-white to-accent/20"
      >
        <div className="container mx-auto px-6" ref={consultingSectionRef}>
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isConsultingVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 text-primary">
              {t("services.consulting.title")}
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              نقدم استشارات متخصصة في مجال الذكاء الاصطناعي لمساعدة شركتك على
              تحديد أفضل الاستراتيجيات وفرص التطبيق التي تناسب أهداف عملك.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${isConsultingVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              <ul className="space-y-4 mb-8">
                {consultingFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-accent/10 hover:translate-x-1 transition-all duration-300 ${isConsultingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white mr-6">
                      {index + 1}
                    </span>
                    <span className={"mr-6"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`transition-all duration-1000 ${isConsultingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: "600ms" }}
              >
                <Button
                  className="bg-primary text-white px-8 py-6 rounded-lg font-cairo font-semibold hover:bg-primary/90 hover:shadow-lg transition-all duration-300 mt-4"
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
              className={`order-1 lg:order-2 neural-container transition-all duration-1000 delay-300 ${isConsultingVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              <div className="relative w-full h-96 bg-accent/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-lightbulb text-8xl text-primary opacity-40"></i>
                </div>
                <NeuralAnimation nodesCount={25} connectionsCount={40} />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/20 to-transparent h-32"></div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <i className="fas fa-brain text-primary text-2xl"></i>
                </div>

                {/* Floating elements with CSS animations */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  <i className="fas fa-lightbulb text-primary text-lg"></i>
                </div>

                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-md pulse">
                  <i className="fas fa-chart-line text-primary text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Section */}
      <section
        id="ai-development"
        className="py-24 bg-gradient-to-b from-accent/20 to-white"
      >
        <div className="container mx-auto px-6" ref={developmentSectionRef}>
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isDevelopmentVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="font-cairo font-bold text-3xl md:text-4xl mb-4 text-primary">
              {t("services.development.title")}
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              نطور حلول ذكاء اصطناعي مخصصة ومتكاملة مع أنظمتك الحالية لزيادة
              الكفاءة وتحسين تجربة المستخدم
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${isDevelopmentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8 glow">
                <h3 className="font-cairo font-bold text-2xl mb-4 text-primary">
                  المجالات التقنية
                </h3>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  {developmentAreas.map((area, index) => (
                    <div
                      key={area.id}
                      className={`text-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeDevTab === index
                          ? "bg-primary text-white shadow-md"
                          : "bg-accent/30 hover:bg-accent/50"
                      }`}
                      onClick={() => setActiveDevTab(index)}
                    >
                      <i className={`${area.icon} text-xl mb-2 block`}></i>
                      <span className="text-sm font-semibold">
                        {area.title}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-accent/10 rounded-lg min-h-[100px]">
                  <h4 className="font-cairo font-semibold text-lg mb-2">
                    {developmentAreas[activeDevTab].title}
                  </h4>
                  <p>{developmentAreas[activeDevTab].description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {developmentFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1 ${isDevelopmentVisible ? "opacity-100" : "opacity-0"}`}
                    style={{
                      transitionDelay: `${(index + 1) * 150}ms`,
                      transitionProperty: "all",
                      transitionDuration: "700ms",
                    }}
                  >
                    <i
                      className={`fas fa-check-circle text-primary mt-1 mr-6`}
                    ></i>
                    <span className={"mr-6"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`transition-all duration-1000 ${isDevelopmentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: "800ms" }}
              >
                <Button
                  className="bg-primary text-white px-8 py-6 rounded-lg font-cairo font-semibold hover:bg-primary/90 hover:shadow-lg transition-all duration-300 mt-4"
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
            </div>

            <div
              className={`order-1 lg:order-2 neural-container transition-all duration-1000 delay-300 ${isDevelopmentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              <div className="relative w-full h-96 bg-accent/30 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-code text-8xl text-primary opacity-40"></i>
                </div>
                <NeuralAnimation nodesCount={30} connectionsCount={50} />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/20 to-transparent h-32"></div>

                {/* Floating elements */}
                <div className="absolute float top-10 left-10 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <i className="fas fa-robot text-primary text-xl"></i>
                </div>

                <div className="absolute pulse bottom-10 right-10 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <i className="fas fa-microchip text-primary text-xl"></i>
                </div>

                <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/70 rounded-full flex items-center justify-center shadow-md">
                  <i className="fas fa-cogs text-primary text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
