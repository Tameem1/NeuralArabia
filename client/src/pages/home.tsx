import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  FlaskConical,
  Globe,
  LayoutDashboard,
  LibraryBig,
  MoveRight,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useDirection } from "@/hooks/use-direction";
import logoLight from "@/assets/tawjeeh-logo-light.png";
import mark from "@/assets/tawjeeh-mark.png";

type HeroMetric = {
  value: string;
  label: string;
  description: string;
};

type CardItem = {
  tag: string;
  title: string;
  description: string;
};

type PanelItem = {
  title: string;
  description: string;
};

const productIcons = [LayoutDashboard, Bot, ShieldCheck];
const solutionIcons = [Workflow, Globe, BriefcaseBusiness, Network];
const researchIcons = [BrainCircuit, FlaskConical, Radar];
const resourceIcons = [BookOpen, LibraryBig, Sparkles];

export default function Home() {
  const { t, i18n } = useTranslation();
  const [direction, changeLanguage] = useDirection();
  const isArabic = i18n.language === "ar";

  const heroMetrics = t("landing.hero.metrics", { returnObjects: true }) as HeroMetric[];
  const heroPanelItems = t("landing.hero.panelItems", { returnObjects: true }) as PanelItem[];
  const products = t("landing.products.items", { returnObjects: true }) as CardItem[];
  const solutions = t("landing.solutions.items", { returnObjects: true }) as CardItem[];
  const research = t("landing.research.items", { returnObjects: true }) as CardItem[];
  const resources = t("landing.resources.items", { returnObjects: true }) as CardItem[];

  useEffect(() => {
    document.title = t("seo.title");

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("seo.description"));
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (ogTitle) {
      ogTitle.setAttribute("content", t("seo.ogTitle"));
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", t("seo.ogDescription"));
    }
  }, [t, i18n.language]);

  return (
    <div dir={direction} className="relative overflow-hidden text-start text-[#0F1720]">
      <div className="brand-aura left-[-120px] top-[90px] h-64 w-64 bg-[#57E6D9]/40" />
      <div className="brand-aura right-[-80px] top-[420px] h-72 w-72 bg-[#40E0D0]/25 soft-float" />
      <div className="brand-aura bottom-[240px] left-[12%] h-52 w-52 bg-[#D9F3F0] soft-float-delay" />

      <header className="sticky top-0 z-40 border-b border-white/60 bg-[#F7FCFC]/82 backdrop-blur-xl">
        <div className="section-shell">
          <nav className="flex items-center justify-between gap-4 py-4">
            <a href="#top" aria-label={t("landing.nav.homeLabel")} className="flex items-center">
              <span className="rounded-[20px] border border-[#D5E7E6] bg-white/80 p-2 shadow-[0_12px_30px_rgba(13,43,51,0.06)]">
                <img src={mark} alt="" className="logo-motion-target h-11 w-11 sm:h-12 sm:w-12" />
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <a href="#products" className="nav-link">
                {t("landing.nav.products")}
              </a>
              <a href="#solutions" className="nav-link">
                {t("landing.nav.solutions")}
              </a>
              <a href="#research" className="nav-link">
                {t("landing.nav.research")}
              </a>
              <a href="#resources" className="nav-link">
                {t("landing.nav.resources")}
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center rounded-full border border-[#D5E7E6] bg-white/75 p-1 backdrop-blur-md">
                {[
                  { code: "en", label: "EN" },
                  { code: "ar", label: "العربية" },
                ].map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => changeLanguage(language.code)}
                    aria-pressed={i18n.language === language.code}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 sm:px-4 ${
                      i18n.language === language.code ? "bg-[#0D2B33] text-white" : "text-[#334155] hover:text-[#129A92]"
                    }`}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
              <a href="#resources" className="primary-cta hidden sm:inline-flex">
                {t("landing.nav.cta")}
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="section-shell pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="fade-in-up">
              <p className="eyebrow mb-5">{t("landing.hero.eyebrow")}</p>
              <h1 className="max-w-3xl text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0F1720] sm:text-[3.35rem] lg:text-[4.5rem]">
                {t("landing.hero.title")}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">
                {t("landing.hero.description")}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#products" className="primary-cta gap-2">
                  {t("landing.hero.primaryCta")}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#solutions" className="secondary-cta gap-2">
                  {t("landing.hero.secondaryCta")}
                  <MoveRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="brand-card rounded-[24px] p-5 border-l-2 border-l-[#40E0D0]">
                    <p className="eyebrow">{metric.label}</p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#0D2B33]">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6B7C85]">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-up-delay">
              <div className="brand-card relative overflow-hidden rounded-[32px] p-4 sm:p-6">
                <div className="brand-outline" />
                <div className="absolute inset-0 brand-grid opacity-40" />
                <div className="relative rounded-[28px] border border-[#D5E7E6] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(234,248,247,0.98))] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4 border-b border-[#E8F2F2] pb-4">
                    <div>
                      <p className="eyebrow">{t("landing.hero.panelEyebrow")}</p>
                      <p className="mt-2 text-lg font-medium text-[#0F1720]">{t("landing.hero.panelTitle")}</p>
                    </div>
                    <span className="rounded-full bg-[#D9F3F0] px-3 py-1 text-xs font-medium text-[#129A92]">{t("landing.hero.panelBadge")}</span>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="brand-dark-card relative overflow-hidden rounded-[28px] p-5 text-white">
                      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(87,230,217,0.24),transparent_70%)]" />
                      <div className="relative">
                        <div className="inline-flex rounded-2xl bg-white/10 p-2">
                          <img src={mark} alt="" className="logo-motion-target h-14 w-14" />
                        </div>
                        <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-white/65">{t("landing.hero.panelSubhead")}</p>
                        <p className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em]">{t("landing.hero.panelDescription")}</p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {heroPanelItems.map((item, index) => {
                        const icons = [LayoutDashboard, Workflow, BrainCircuit, BookOpen];
                        const Icon = icons[index];

                        return (
                          <div key={item.title} className="rounded-[24px] border border-[#D5E7E6] bg-white/90 p-5">
                            <div className="flex items-start gap-3">
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF8F7] text-[#129A92]">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-lg font-medium tracking-[-0.02em] text-[#0D2B33]">{item.title}</p>
                                <p className="mt-2 text-sm leading-6 text-[#6B7C85]">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section-shell py-20">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="eyebrow">{t("landing.products.eyebrow")}</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl">
                {t("landing.products.title")}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#334155] sm:text-lg">{t("landing.products.description")}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {products.map((item, index) => {
                const Icon = productIcons[index];

                return (
                  <article key={item.title} className="brand-card rounded-[28px] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8F7] text-[#129A92]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="eyebrow mt-5">{item.tag}</p>
                    <h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.03em] text-[#0F1720]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#6B7C85]">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="solutions" className="section-shell py-20">
          <div className="brand-card overflow-hidden rounded-[36px]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden border-b border-[#E8F2F2] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="brand-aura left-[-64px] top-[-64px] h-40 w-40 bg-[#57E6D9]/25" />
                <div className="relative">
                  <p className="eyebrow">{t("landing.solutions.eyebrow")}</p>
                  <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0D2B33] sm:text-5xl">
                    {t("landing.solutions.title")}
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-7 text-[#334155] sm:text-lg">{t("landing.solutions.description")}</p>

                  <div className="mt-8 rounded-[28px] border border-[#D5E7E6] bg-white/85 p-5">
                    <img src={logoLight} alt="Tawjeeh AI" className="h-10 w-auto" />
                    <p className="mt-4 text-base leading-7 text-[#334155]">{t("landing.solutions.callout")}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  {solutions.map((item, index) => {
                    const Icon = solutionIcons[index];

                    return (
                      <div key={item.title} className="rounded-[28px] border border-[#D5E7E6] bg-white p-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF8F7] text-[#129A92]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="eyebrow mt-4">{item.tag}</p>
                        <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-[#0F1720]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[#6B7C85]">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="relative overflow-hidden bg-[linear-gradient(180deg,#21454D_0%,#0D2B33_100%)] py-24 text-white">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(87,230,217,0.18),transparent_65%)]" />
          <div className="brand-aura left-[5%] top-[10%] h-64 w-64 bg-[#40E0D0]/20" />
          <div className="brand-aura right-[8%] bottom-[10%] h-80 w-80 bg-[#57E6D9]/10 soft-float" />

          <div className="section-shell relative">
            <div className="max-w-2xl">
              <p className="eyebrow !text-[#7CEDE3]">{t("landing.research.eyebrow")}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">{t("landing.research.title")}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">{t("landing.research.description")}</p>
            </div>

            <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="brand-dark-card relative overflow-hidden rounded-[36px] p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(87,230,217,0.2),transparent_34%),linear-gradient(rgba(124,237,227,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(124,237,227,0.08)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px]" />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/60">{t("landing.research.featuredEyebrow")}</p>
                      <p className="mt-2 text-xl font-medium text-white">{t("landing.research.featuredTitle")}</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                      <Radar className="h-3.5 w-3.5" />
                      {t("landing.research.featuredBadge")}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-white/55">{t("landing.research.featuredPanelLabel")}</p>
                          <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{t("landing.research.featuredPanelTitle")}</p>
                        </div>
                        <div className="rounded-2xl bg-white/10 p-2">
                          <img src={mark} alt="" className="logo-motion-target h-12 w-12" />
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-white/76">{t("landing.research.featuredPanelDescription")}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/55">{t("landing.research.stats.labelOne")}</p>
                        <p className="mt-3 text-5xl font-semibold tracking-[-0.05em]">{t("landing.research.stats.valueOne")}</p>
                        <p className="mt-2 text-sm text-white/70">{t("landing.research.stats.descriptionOne")}</p>
                      </div>
                      <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/55">{t("landing.research.stats.labelTwo")}</p>
                        <div className="mt-4 h-28 rounded-[22px] bg-[linear-gradient(135deg,rgba(183,242,236,0.9),rgba(64,224,208,0.7),rgba(22,184,174,0.55))]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {research.map((item, index) => {
                  const Icon = researchIcons[index];

                  return (
                    <div key={item.title} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                      <Icon className="h-5 w-5 text-[#40E0D0]" />
                      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/60">{item.tag}</p>
                      <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/72">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="section-shell py-24">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="eyebrow">{t("landing.resources.eyebrow")}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl">{t("landing.resources.title")}</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#334155] sm:text-lg">{t("landing.resources.description")}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {resources.map((item, index) => {
                const Icon = resourceIcons[index];

                return (
                  <article key={item.title} className="brand-card rounded-[28px] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8F7] text-[#129A92]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="eyebrow mt-5">{item.tag}</p>
                    <h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.03em] text-[#0F1720]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#6B7C85]">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[36px]">
            <div className="brand-aura left-[-60px] top-[-40px] h-52 w-52 bg-[#57E6D9]/30" />
            <div className="brand-dark-card relative rounded-[36px] p-8 sm:p-10">
              <div className="brand-outline" />
              <div className="absolute inset-0 brand-grid opacity-[0.07]" />
              <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="eyebrow !text-[#7CEDE3]">{t("landing.finalCta.eyebrow")}</p>
                  <p className="mt-4 text-2xl font-medium leading-9 text-white">{t("landing.finalCta.title")}</p>
                  <p className="mt-3 text-base leading-7 text-white/72">{t("landing.finalCta.description")}</p>
                </div>
                <a href="mailto:hello@tawjeeh.ai" className="primary-cta gap-2 whitespace-nowrap">
                  {t("landing.finalCta.button")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-[#E8F2F2] bg-white/70 py-8 backdrop-blur-sm">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#40E0D0]/50 to-transparent" />
        <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <img src={logoLight} alt="Tawjeeh AI" className="h-8 w-auto" />
            <p className="max-w-lg text-sm text-[#6B7C85]">{t("landing.footer.tagline")}</p>
          </div>
          <p className={`text-xs uppercase tracking-[0.16em] text-[#6B7C85] ${isArabic ? "font-[Alexandria]" : "font-mono"}`}>
            {t("landing.footer.note")}
          </p>
        </div>
      </footer>
    </div>
  );
}
