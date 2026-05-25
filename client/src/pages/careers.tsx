import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { useDirection } from "@/hooks/use-direction";
import logoLight from "@/assets/tawjeeh-logo-light.png";
import wordmark from "@/assets/tawjeeh-wordmark.png";
import mark from "@/assets/tawjeeh-mark.png";
import bgCard from "@/assets/backgrounds/1440x1152.jpg";
import bgFull from "@/assets/backgrounds/2560x1440.jpg";

type Role = { title: string; team: string; location: string };
type Principle = { title: string; description: string };
type Benefit = { title: string; description: string };
type Stat = { value: string; label: string };
type LocationItem = { city: string; country: string; blurb: string };

const locationImages: Record<string, string> = {
  Riyadh:
    "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=900&q=80",
  Dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  Cairo:
    "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80",
  الرياض:
    "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=900&q=80",
  دبي:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  القاهرة:
    "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80",
};

export default function Careers() {
  const { t, i18n } = useTranslation();
  const [direction, changeLanguage] = useDirection();

  const stats = t("careers.hero.stats", { returnObjects: true }) as Stat[];
  const principles = t("careers.principles.items", { returnObjects: true }) as Principle[];
  const benefits = t("careers.benefits.items", { returnObjects: true }) as Benefit[];
  const roles = t("careers.roles.items", { returnObjects: true }) as Role[];
  const locations = t("careers.locations.items", { returnObjects: true }) as LocationItem[];

  const teams = useMemo(() => {
    const set = new Set<string>();
    roles.forEach((r) => set.add(r.team));
    return Array.from(set);
  }, [roles]);

  const [activeTeam, setActiveTeam] = useState<string>("__all__");

  useEffect(() => {
    setActiveTeam("__all__");
  }, [i18n.language]);

  useEffect(() => {
    document.title = `${t("careers.hero.eyebrow")} | Tawjeeh AI`;
  }, [t, i18n.language]);

  const filteredRoles =
    activeTeam === "__all__" ? roles : roles.filter((r) => r.team === activeTeam);

  return (
    <div dir={direction} className="relative text-start text-[#0F1720]">
      <header className="sticky top-0 z-40 border-b border-[#E8F2F2] bg-[#F7FCFC]/95 backdrop-blur">
        <div className="section-shell">
          <nav className="flex items-center justify-between gap-4 py-4">
            <Link href="/" aria-label={t("landing.nav.homeLabel")} className="flex items-center">
              <img
                src={wordmark}
                alt="Tawjeeh AI"
                className="logo-motion-target h-7 w-auto sm:h-8"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              <Link href="/#pillars" className="nav-link">
                {t("landing.nav.products")}
              </Link>
              <Link href="/#masar" className="nav-link">
                {t("landing.nav.solutions")}
              </Link>
              <Link href="/#industries" className="nav-link">
                {t("landing.nav.research")}
              </Link>
              <Link href="/careers" className="nav-link text-[#0D2B33] font-semibold">
                {t("careers.nav.link")}
              </Link>
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
              <a href="#open-roles" className="dark-cta hidden sm:inline-flex">
                {t("careers.nav.openRoles")}
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ───── Hero ───── */}
        <section className="section-shell pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center fade-in-up">
            <p className="eyebrow">{t("careers.hero.eyebrow")}</p>
            <h1 className="mt-4 font-display text-[3rem] font-semibold leading-[1.04] tracking-[-0.05em] text-[#0F1720] sm:text-[4.2rem] lg:text-[5rem]">
              {t("careers.hero.title")}
            </h1>
            <p className="mt-6 text-base leading-7 text-[#334155] sm:text-lg">
              {t("careers.hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <a href="#open-roles" className="dark-cta gap-2">
                {t("careers.hero.primaryCta")}
              </a>
              <a
                href="#principles"
                className="inline-flex items-center gap-2 border-b border-[#0F1720] pb-1 text-sm font-semibold text-[#0F1720] transition hover:text-[#16B8AE] hover:border-[#16B8AE]"
              >
                {t("careers.hero.secondaryCta")}
              </a>
            </div>
          </div>

          {/* Hero panel: brand backdrop + stats overlay */}
          <div className="mt-14 relative overflow-hidden rounded-[32px] border border-[#D5E7E6] min-h-[360px] sm:min-h-[440px] fade-in-up-delay">
            <img
              src={bgCard}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,43,51,0)_45%,rgba(13,43,51,0.55)_100%)]" />
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
              <div className="rounded-[20px] border border-white/10 bg-[#0D2B33]/95 p-6 text-white shadow-[0_30px_80px_rgba(13,43,51,0.25)] backdrop-blur sm:p-8">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Mission / Why Tawjeeh ───── */}
        <section className="section-shell py-20 lg:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow">{t("careers.mission.eyebrow")}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl lg:text-[3.4rem]">
                {t("careers.mission.title")}
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-base leading-8 text-[#334155] sm:text-lg">
                {t("careers.mission.body")}
              </p>
              <div className="rounded-[24px] border border-[#D5E7E6] bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16B8AE]">
                  {t("careers.mission.captionEyebrow")}
                </p>
                <p className="mt-3 text-xl font-medium leading-snug tracking-[-0.01em] text-[#0F1720] sm:text-2xl">
                  {t("careers.mission.caption")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Principles ───── */}
        <section id="principles" className="relative isolate overflow-hidden text-white">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#072027_0%,#0D2B33_50%,#21454D_100%)]" />
          <svg
            aria-hidden
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 -z-10 h-full w-full opacity-80"
          >
            <defs>
              <radialGradient id="p-glow-1" cx="15%" cy="30%" r="45%">
                <stop offset="0%" stopColor="#16B8AE" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#16B8AE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="p-glow-2" cx="85%" cy="80%" r="45%">
                <stop offset="0%" stopColor="#40E0D0" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#40E0D0" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="800" fill="url(#p-glow-1)" />
            <rect width="1440" height="800" fill="url(#p-glow-2)" />
          </svg>

          <div className="section-shell py-24 lg:py-32">
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem]">
                {t("careers.principles.title")}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                {t("careers.principles.subtitle")}
              </p>
            </div>

            <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
              {principles.map((principle, idx) => (
                <li key={principle.title} className="flex flex-col">
                  <span className="font-mono text-xs font-medium tracking-[0.18em] text-[#7CEDE3]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {principle.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───── Benefits ───── */}
        <section className="section-shell py-24 lg:py-32">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl">
              {t("careers.benefits.title")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#334155] sm:text-lg">
              {t("careers.benefits.subtitle")}
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-[#D5E7E6] bg-[#D5E7E6] sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col bg-white p-7 transition-colors hover:bg-[#EAF8F7] sm:p-8"
              >
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-[#0D2B33]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#334155]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── Open roles ───── */}
        <section id="open-roles" className="section-shell pb-24 pt-4 lg:pb-32">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl">
                {t("careers.roles.title")}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#334155]">
                {t("careers.roles.subtitle")}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="me-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7C85]">
              {t("careers.roles.filtersLabel")}
            </span>
            <button
              type="button"
              onClick={() => setActiveTeam("__all__")}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeTeam === "__all__"
                  ? "border-[#0D2B33] bg-[#0D2B33] text-white"
                  : "border-[#D5E7E6] bg-white text-[#334155] hover:border-[#16B8AE] hover:text-[#129A92]"
              }`}
            >
              {t("careers.roles.allDepartments")}
            </button>
            {teams.map((team) => (
              <button
                key={team}
                type="button"
                onClick={() => setActiveTeam(team)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  activeTeam === team
                    ? "border-[#0D2B33] bg-[#0D2B33] text-white"
                    : "border-[#D5E7E6] bg-white text-[#334155] hover:border-[#16B8AE] hover:text-[#129A92]"
                }`}
              >
                {team}
              </button>
            ))}
          </div>

          <ul className="mt-10 divide-y divide-[#E8F2F2] overflow-hidden rounded-[24px] border border-[#E8F2F2] bg-white">
            {filteredRoles.length === 0 && (
              <li className="px-6 py-10 text-center text-sm text-[#6B7C85] sm:px-8">
                {t("careers.roles.emptyLabel")}
              </li>
            )}
            {filteredRoles.map((role) => (
              <li
                key={`${role.team}-${role.title}`}
                className="group flex flex-col gap-4 px-6 py-6 transition-colors hover:bg-[#F7FCFC] sm:flex-row sm:items-center sm:justify-between sm:px-8"
              >
                <div className="min-w-0">
                  <p className="text-lg font-semibold tracking-[-0.01em] text-[#0D2B33] sm:text-xl">
                    {role.title}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-medium text-[#6B7C85]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#16B8AE]" />
                      {role.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {role.location}
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:careers@tawjeeh.ai"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#D5E7E6] bg-white px-5 py-2.5 text-sm font-semibold text-[#0D2B33] transition group-hover:border-[#0D2B33] group-hover:bg-[#0D2B33] group-hover:text-white"
                >
                  {t("careers.roles.applyCta")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ───── Locations ───── */}
        <section className="section-shell pb-24 lg:pb-32">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl">
              {t("careers.locations.title")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#334155]">
              {t("careers.locations.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {locations.map((loc) => {
              const photo = locationImages[loc.city];
              return (
                <article
                  key={loc.city}
                  className="group relative overflow-hidden rounded-[24px] border border-[#D5E7E6] min-h-[320px]"
                >
                  {photo && (
                    <img
                      src={photo}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,43,51,0.0)_30%,rgba(13,43,51,0.85)_100%)]" />
                  <div className="relative flex h-full flex-col justify-end p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      {loc.country}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em]">
                      {loc.city}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/80">{loc.blurb}</p>
                  </div>
                </article>
              );
            })}

            {/* Remote tile */}
            <article className="relative overflow-hidden rounded-[24px] border border-[#D5E7E6] bg-[#EAF8F7] min-h-[320px]">
              <div className="flex h-full flex-col justify-between p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-[#16B8AE]/30 bg-white text-[#0D2B33]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16B8AE]">
                    MENA
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] text-[#0D2B33]">
                    {t("careers.locations.remote.title")}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#334155]">
                    {t("careers.locations.remote.blurb")}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ───── Final CTA ───── */}
        <section className="relative overflow-hidden">
          <img
            src={bgFull}
            alt=""
            aria-hidden
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_55%,rgba(13,43,51,0.18)_100%)]" />
          <div className="section-shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center lg:py-32">
            <p className="eyebrow">{t("careers.finalCta.eyebrow")}</p>
            <h2 className="mt-4 font-display text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F1720] sm:text-[3.6rem] lg:text-[4.4rem]">
              {t("careers.finalCta.title")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#334155]">
              {t("careers.finalCta.subtitle")}
            </p>
            <a
              href="mailto:careers@tawjeeh.ai"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0D2B33] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(13,43,51,0.25)] transition hover:bg-[#21454D]"
            >
              {t("careers.finalCta.button")}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E8F2F2] bg-white py-12">
        <div className="section-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <img src={logoLight} alt="Tawjeeh AI" className="h-8 w-auto" />
            <p className="text-sm text-[#6B7C85]">{t("landing.footer.tagline")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
