import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Bot,
  Cloud,
  Folder,
  Layers,
  Mail,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";
import { useDirection } from "@/hooks/use-direction";
import logoLight from "@/assets/tawjeeh-logo-light.png";
import wordmark from "@/assets/tawjeeh-wordmark.png";
import mark from "@/assets/tawjeeh-mark.png";
// Brand glass-blob renders (sized per slot — see image filename = export size)
import bgCard from "@/assets/backgrounds/1440x1152.jpg";
import bgCardAlt from "@/assets/backgrounds/2000x1250.jpg";
import bgFull from "@/assets/backgrounds/2560x1440.jpg";
import { BubbleBackground } from "@/components/interactive/bubble-background";
import {
  IndustriesCarousel,
  type Industry,
} from "@/components/interactive/industries-carousel";

type PillarItem = {
  title: string;
  description: string;
  href?: string;
};

/** Cohere-style line-art icons: thin strokes, brand petrol-ink color. */
function SecurityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="6" y="6" width="52" height="52" transform="rotate(45 32 32)" />
      <rect x="16" y="16" width="32" height="32" transform="rotate(45 32 32)" />
      <rect x="24" y="24" width="16" height="16" transform="rotate(45 32 32)" />
      <rect x="28" y="28" width="8" height="8" />
    </svg>
  );
}

function DeploymentIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="32" cy="32" r="24" />
      <ellipse cx="32" cy="32" rx="24" ry="10" />
      <ellipse cx="32" cy="32" rx="14" ry="22" />
      <ellipse cx="32" cy="32" rx="22" ry="14" />
      <path d="M8 32 H56" />
      <path d="M32 8 V56" />
    </svg>
  );
}

function CustomizationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="8" y="8" width="48" height="48" />
      <path d="M8 20 H56" />
      <path d="M8 32 H56" />
      <path d="M8 44 H56" />
      <path d="M20 8 V56" />
      <path d="M32 8 V56" />
      <path d="M44 8 V56" />
    </svg>
  );
}

const pillarIcons = [SecurityIcon, DeploymentIcon, CustomizationIcon];

export default function Home() {
  const { t, i18n } = useTranslation();
  const [direction, changeLanguage] = useDirection();

  const pillars = t("landing.pillars.items", { returnObjects: true }) as PillarItem[];
  const industries = t("landing.industries.items", { returnObjects: true }) as { title: string }[];

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

  // Curated stock photography for each industry (Unsplash, hot-linked + tinted).
  // Order matches landing.industries.items in the locale files:
  // Financial Services, Accounting, Technology, Manufacturing, Linguistics.
  const industryPhotos = [
    // Financial Services — modern skyscrapers at dusk
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    // Accounting — tax forms, calculator, ledger
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    // Technology — circuit board / silicon
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    // Manufacturing — industrial workshop / machinery
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    // Linguistics — open books / typography
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80",
  ];

  const industryItems: Industry[] = industries.map((industry, idx) => ({
    title: industry.title,
    background: `linear-gradient(180deg, rgba(13,43,51,0.05) 0%, rgba(13,43,51,0.65) 100%), url(${industryPhotos[idx % industryPhotos.length]}) center/cover no-repeat`,
  }));

  return (
    <div dir={direction} className="relative text-start text-[#0F1720]">
      <header className="sticky top-0 z-40 border-b border-[#E8F2F2] bg-[#F7FCFC]/95 backdrop-blur">
        <div className="section-shell">
          <nav className="flex items-center justify-between gap-4 py-4">
            <a
              href="#top"
              aria-label={t("landing.nav.homeLabel")}
              className="flex items-center"
            >
              {/* Tight-cropped wordmark PNG (no whitespace) — actual brand asset, not typed */}
              <img
                src={wordmark}
                alt="Tawjeeh AI"
                className="logo-motion-target h-7 w-auto sm:h-8"
              />
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <a href="#pillars" className="nav-link">
                {t("landing.nav.products")}
              </a>
              <a href="#masar" className="nav-link">
                {t("landing.nav.solutions")}
              </a>
              <a href="#industries" className="nav-link">
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
                      i18n.language === language.code
                        ? "bg-[#0D2B33] text-white"
                        : "text-[#334155] hover:text-[#129A92]"
                    }`}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
              <a href="#contact" className="dark-cta hidden sm:inline-flex">
                {t("landing.nav.cta")}
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ───── Hero ───── */}
        <section className="section-shell pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-3xl text-center fade-in-up">
            <h1 className="font-display text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#0F1720] sm:text-[4.4rem] lg:text-[5.4rem]">
              {t("landing.hero.title")}
            </h1>
            <p className="mt-6 text-base leading-7 text-[#334155] sm:text-lg">
              {t("landing.hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <a href="#contact" className="dark-cta gap-2">
                {t("landing.hero.primaryCta")}
              </a>
              <a href="#pillars" className="inline-flex items-center gap-2 border-b border-[#0F1720] pb-1 text-sm font-semibold text-[#0F1720] transition hover:text-[#16B8AE] hover:border-[#16B8AE]">
                {t("landing.hero.secondaryCta")}
              </a>
            </div>
          </div>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2 fade-in-up-delay">
            {/* Left: glass-blob backdrop + agent card overlay */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#D5E7E6] min-h-[420px] sm:min-h-[480px]">
              <img
                src={bgCard}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Product card overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="rounded-[20px] border border-white/10 bg-[#0D2B33]/95 p-5 text-white shadow-[0_30px_80px_rgba(13,43,51,0.25)] backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-white">
                      <span className="text-sm font-semibold text-[#0D2B33]">M</span>
                    </div>
                    <p className="text-base font-medium">{t("landing.hero.agentName")}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    {[Folder, Cloud, Bot].map((Icon, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5"
                      >
                        <Icon className="h-3.5 w-3.5 text-[#7CEDE3]" />
                        <span className="text-[10px] font-semibold tracking-[0.14em] text-white/70">
                          • {t("landing.hero.agentStatus")}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: glass-blob backdrop with brand caption */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#D5E7E6] min-h-[420px] sm:min-h-[480px]">
              <img
                src={bgCardAlt}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Bottom-anchored gradient veil so the white caption stays legible */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,43,51,0)_45%,rgba(13,43,51,0.55)_100%)]" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  {t("landing.hero.captionEyebrow")}
                </p>
                <p className="mt-3 max-w-md text-2xl font-medium leading-snug tracking-[-0.02em]">
                  {t("landing.hero.caption")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Pillars — Cohere inline layout: line-art icon + title + copy + learn more ───── */}
        <section id="pillars" className="section-shell py-24 lg:py-32">
          <h2 className="mx-auto max-w-4xl text-center font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl lg:text-[3.6rem]">
            {t("landing.pillars.title")}
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10 lg:mt-20 lg:gap-14">
            {pillars.map((item, index) => {
              const Icon = pillarIcons[index] ?? SecurityIcon;
              return (
                <div key={item.title} className="flex flex-col">
                  <Icon className="h-16 w-16 text-[#0D2B33]" />
                  <h3 className="mt-7 text-2xl font-medium tracking-[-0.02em] text-[#0F1720]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#334155]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ───── Masar — sovereign workplace (full-page background) ───── */}
        <section id="masar" className="relative isolate min-h-[92vh] overflow-hidden text-white">
          {/* Layered background — soft brand gradient + abstract terrain */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#072027_0%,#0D2B33_40%,#21454D_85%)]" />
            <svg
              aria-hidden
              viewBox="0 0 1440 900"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <radialGradient id="m-glow-1" cx="20%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#16B8AE" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#16B8AE" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="m-glow-2" cx="80%" cy="20%" r="40%">
                  <stop offset="0%" stopColor="#40E0D0" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#40E0D0" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="m-ridge" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0D2B33" stopOpacity="0" />
                  <stop offset="100%" stopColor="#072027" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect width="1440" height="900" fill="url(#m-glow-1)" />
              <rect width="1440" height="900" fill="url(#m-glow-2)" />
              {/* Organic ridge lines mimicking terrain */}
              <path d="M0,620 C200,560 380,680 600,600 C820,520 1040,640 1260,560 L1440,580 L1440,900 L0,900 Z" fill="#0A2229" opacity="0.9" />
              <path d="M0,720 C220,660 420,780 660,700 C880,620 1100,740 1320,680 L1440,700 L1440,900 L0,900 Z" fill="#072027" opacity="0.9" />
              <rect width="1440" height="900" fill="url(#m-ridge)" />
            </svg>
          </div>

          <div className="section-shell relative flex min-h-[92vh] flex-col py-16 lg:py-24">
            {/* Logo + label */}
            <div className="flex items-center gap-3">
              <img src={mark} alt="" className="h-9 w-9 logo-motion-target" />
              <span className="text-2xl font-semibold tracking-[-0.02em] text-white">
                {t("landing.masar.brand")}
              </span>
            </div>

            <div className="mt-12 grid flex-1 items-center gap-12 lg:mt-16 lg:grid-cols-[0.95fr_1.05fr]">
              {/* Left: copy + CTA */}
              <div className="max-w-xl">
                <h2 className="font-display text-[3rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                  {t("landing.masar.title")}
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
                  {t("landing.masar.description")}
                </p>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0D2B33] transition hover:bg-[#D9F3F0]"
                >
                  {t("landing.masar.cta")}
                </a>
              </div>

              {/* Right: product screenshot placeholder */}
              <div className="relative">
                <div className="rounded-[24px] border border-white/10 bg-[#0D2B33]/85 p-5 shadow-[0_60px_120px_rgba(0,0,0,0.35)] backdrop-blur">
                  <div className="flex gap-4">
                    {/* Sidebar */}
                    <div className="flex w-12 shrink-0 flex-col items-center gap-4 rounded-[16px] bg-[#072027] py-4">
                      {[Layers, Bot, Sparkles, Folder, Settings2].map((Icon, i) => (
                        <button
                          key={i}
                          className={`grid h-8 w-8 place-items-center rounded-full ${
                            i === 2 ? "bg-white text-[#0D2B33]" : "text-white/55 hover:text-white"
                          }`}
                          aria-hidden
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      ))}
                    </div>

                    {/* Main panel */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-xl font-semibold text-white">
                              {t("landing.masar.product.title")}
                            </p>
                            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                              {t("landing.masar.product.badge")}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-white/55">
                            {t("landing.masar.product.subtitle")}
                          </p>
                        </div>
                        <button className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-white/80">
                          + {t("landing.masar.product.new")}
                        </button>
                      </div>

                      <div className="mt-4 flex items-center gap-5 border-b border-white/10 text-xs text-white/55">
                        {(["discovery", "runs", "myBuilds", "monitor"] as const).map((key, i) => (
                          <span
                            key={key}
                            className={`pb-2 ${i === 0 ? "border-b-2 border-white text-white" : ""}`}
                          >
                            {t(`landing.masar.product.tabs.${key}`)}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/55">
                        <Search className="h-3.5 w-3.5" />
                        <span>{t("landing.masar.product.search")}</span>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-3">
                        {(t("landing.masar.product.cards", { returnObjects: true }) as { title: string; description: string; by: string }[]).map(
                          (card) => (
                            <div
                              key={card.title}
                              className="rounded-[14px] border border-white/10 bg-[#0A2229] p-3"
                            >
                              <div className="flex gap-1.5">
                                <span className="grid h-6 w-6 place-items-center rounded-md bg-white/10 text-white/70">
                                  <Folder className="h-3 w-3" />
                                </span>
                                <span className="grid h-6 w-6 place-items-center rounded-md bg-white/10 text-white/70">
                                  <Sparkles className="h-3 w-3" />
                                </span>
                              </div>
                              <p className="mt-3 text-sm font-semibold text-white">{card.title}</p>
                              <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-white/55">
                                {card.description}
                              </p>
                              <p className="mt-3 text-[10px] text-white/40">{card.by}</p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Industries carousel ───── */}
        <section id="industries" className="section-shell py-20 lg:py-28">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0F1720] sm:text-4xl">
              {t("landing.industries.title")}
            </h2>
          </div>

          <IndustriesCarousel
            items={industryItems}
            ariaLabel={t("landing.industries.title")}
            direction={direction === "rtl" ? "rtl" : "ltr"}
          />
        </section>

        {/* ───── Developer resources ───── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0D2B33_0%,#16B8AE_50%,#40E0D0_100%)]" />
          <BubbleBackground
            variant="dusk"
            className="absolute inset-0 -z-10 h-full w-full opacity-80"
          />
          <div className="section-shell grid gap-10 py-20 text-white lg:grid-cols-2 lg:py-28">
            <div className="flex flex-col justify-end">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                {t("landing.developer.title")}
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-white/75 sm:text-lg">
                {t("landing.developer.description")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0D2B33] transition hover:bg-[#D9F3F0]"
                >
                  {t("landing.developer.cta")}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  {t("landing.developer.linkCta")}
                  <ArrowRight className="h-4 w-4 -rotate-45" />
                </a>
              </div>
            </div>

            {/* Docs mockup */}
            <div className="self-end overflow-hidden rounded-tl-[28px] border border-white/10 bg-white text-[#0F1720] shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-3 border-b border-[#E8F2F2] px-5 py-3">
                <div className="flex items-center gap-2">
                  <img src={mark} alt="" className="h-5 w-5" />
                  <span className="text-sm font-semibold">{t("landing.developer.docsTitle")}</span>
                </div>
                <span className="ml-auto rounded-md border border-[#D5E7E6] px-2 py-0.5 text-[10px] font-semibold text-[#6B7C85]">
                  v2 API
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 border-b border-[#E8F2F2] px-5 py-3 text-[11px] font-semibold">
                {(t("landing.developer.docsTabs", { returnObjects: true }) as string[]).map(
                  (tab, idx) => (
                    <span
                      key={tab}
                      className={`rounded-full border px-3 py-1 ${
                        idx === 0 ? "border-[#0D2B33] bg-[#0D2B33] text-white" : "border-[#D5E7E6] bg-white text-[#334155]"
                      }`}
                    >
                      {tab}
                    </span>
                  ),
                )}
              </div>
              <div className="grid grid-cols-[180px_1fr]">
                <aside className="border-r border-[#E8F2F2] px-4 py-5 text-xs">
                  <p className="font-semibold text-[#0D2B33]">{t("landing.developer.docsNav.getStartedLabel")}</p>
                  <ul className="mt-3 space-y-2 text-[#334155]">
                    {(t("landing.developer.docsNav.getStarted", { returnObjects: true }) as string[]).map(
                      (entry, idx) => (
                        <li
                          key={entry}
                          className={
                            idx === 2 ? "rounded-md bg-[#EAF8F7] px-2 py-1 font-semibold text-[#0D2B33]" : ""
                          }
                        >
                          {entry}
                        </li>
                      ),
                    )}
                  </ul>
                  <p className="mt-5 font-semibold text-[#0D2B33]">{t("landing.developer.docsNav.modelsLabel")}</p>
                  <ul className="mt-3 space-y-2 text-[#334155]">
                    {(t("landing.developer.docsNav.models", { returnObjects: true }) as string[]).map(
                      (entry) => (
                        <li key={entry}>{entry}</li>
                      ),
                    )}
                  </ul>
                </aside>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6B7C85]">
                    {t("landing.developer.docsBody.eyebrow")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#0D2B33]">
                    {t("landing.developer.docsBody.title")}
                  </h3>
                  <p className="mt-1 text-xs text-[#6B7C85]">{t("landing.developer.docsBody.subtitle")}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-[#6B7C85]">
                    <span className="border-b-2 border-[#0D2B33] pb-1 text-[#0D2B33]">Python</span>
                    <span className="pb-1">TypeScript</span>
                    <span className="pb-1">Java</span>
                    <span className="pb-1">Go</span>
                  </div>
                  <pre className="mt-3 rounded-[12px] bg-[#0D2B33] p-4 text-[11px] leading-relaxed text-[#7CEDE3]">
                    <code>
                      <span className="text-white/60">1</span>{"  "}<span className="text-[#40E0D0]">import</span> tawjeeh{"\n"}
                      <span className="text-white/60">2</span>{"\n"}
                      <span className="text-white/60">3</span>{"  "}client = tawjeeh.<span className="text-[#40E0D0]">ClientV2</span>(api_key=<span className="text-[#7CEDE3]">"YOUR_API_KEY"</span>)
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Final CTA — full-bleed glass-blob backdrop ───── */}
        <section id="contact" className="relative overflow-hidden">
          <img
            src={bgFull}
            alt=""
            aria-hidden
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          {/* Subtle dark vignette only on edges so the dark CTA button reads */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_55%,rgba(13,43,51,0.18)_100%)]" />
          <div className="section-shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center lg:py-32">
            <h2 className="font-display text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F1720] sm:text-[4rem] lg:text-[4.6rem]">
              {t("landing.finalCta.title")}
            </h2>
            <a
              href="mailto:hello@tawjeeh.ai"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0D2B33] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(13,43,51,0.25)] transition hover:bg-[#21454D]"
            >
              {t("landing.finalCta.button")}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E8F2F2] bg-white py-12">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
            <div>
              <img src={logoLight} alt="Tawjeeh AI" className="h-8 w-auto" />
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#6B7C85]">
                {t("landing.footer.tagline")}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {(t("landing.footer.columns", { returnObjects: true }) as { title: string; links: string[] }[]).map(
                (column) => (
                  <div key={column.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D2B33]">
                      {column.title}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-[#334155]">
                      {column.links.map((link) => (
                        <li key={link}>
                          <a href="#" className="hover:text-[#16B8AE]">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[#E8F2F2] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-[#6B7C85]">{t("landing.footer.note")}</p>
            <form className="flex w-full max-w-md items-center gap-2 sm:w-auto">
              <label htmlFor="newsletter" className="sr-only">
                {t("landing.footer.newsletterLabel")}
              </label>
              <div className="flex flex-1 items-center gap-2 rounded-full border border-[#D5E7E6] bg-white px-4 py-2.5">
                <Mail className="h-4 w-4 text-[#6B7C85]" />
                <input
                  id="newsletter"
                  type="email"
                  placeholder={t("landing.footer.newsletterPlaceholder") as string}
                  className="w-full bg-transparent text-sm text-[#0F1720] placeholder:text-[#6B7C85] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[#0D2B33] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#21454D]"
              >
                {t("landing.footer.newsletterCta")}
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
