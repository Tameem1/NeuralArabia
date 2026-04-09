import { useEffect } from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Globe,
  Layers3,
  MoveRight,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import logoLight from "@/assets/tawjeeh-logo-light.png";
import logoDark from "@/assets/tawjeeh-logo-dark.png";
import mark from "@/assets/tawjeeh-mark.png";

const capabilityCards = [
  {
    icon: Globe,
    title: "Arabic-native guidance flows",
    description:
      "Design language, content hierarchy, and interaction cues built for Arabic-first journeys without losing clarity for bilingual teams.",
    tag: "LANGUAGE LAYER",
  },
  {
    icon: BrainCircuit,
    title: "Structured AI decision support",
    description:
      "Turn complex guidance, eligibility, and advisory logic into clean AI-assisted paths that feel reliable instead of improvised.",
    tag: "INTELLIGENCE CORE",
  },
  {
    icon: ShieldCheck,
    title: "Human-reviewed by default",
    description:
      "Confidence markers, review loops, and escalation states make the experience feel precise, trustworthy, and ready for real institutions.",
    tag: "CONTROL SYSTEM",
  },
  {
    icon: Layers3,
    title: "Brand-ready launch surfaces",
    description:
      "Landing pages, onboarding sequences, and product showcases share one disciplined visual system so the brand stays cohesive from first click to demo.",
    tag: "EXPERIENCE SHELL",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Map the guidance logic",
    description: "We turn messy advisory flows into a clean decision architecture that teams can actually ship and maintain.",
  },
  {
    step: "02",
    title: "Shape the operating surface",
    description: "Cards, states, CTAs, and content rhythms are designed around the logo’s geometric precision and the brand’s fluid teal atmosphere.",
  },
  {
    step: "03",
    title: "Stage the intelligence layer",
    description: "AI suggestions, confidence signals, and escalation moments are placed where they create clarity, not noise.",
  },
  {
    step: "04",
    title: "Launch with polish",
    description: "Responsive behavior, performance-minded visuals, and strong call-to-action hierarchy give the landing page its final production feel.",
  },
];

const systemHighlights = [
  "Hero built on Pure Mist and Sea Glass surfaces, not generic white.",
  "Rounded-tech typography using Sora, Inter, and IBM Plex Mono.",
  "Teal used as a signature accent instead of flooding every surface.",
  "Dark petrol contrast reserved for showcase and CTA moments.",
];

const showcasePanels = [
  { label: "Guidance Accuracy", value: "94%", tone: "Operational confidence" },
  { label: "Review Touchpoints", value: "03", tone: "Human approval gates" },
  { label: "Launch Surfaces", value: "08", tone: "Reusable modules" },
];

export default function Home() {
  useEffect(() => {
    document.title = "Tawjeeh AI | Arabic-First AI Guidance Systems";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Tawjeeh AI delivers precise, Arabic-first AI guidance experiences through a clean teal-led brand system and production-ready landing surfaces.",
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (ogTitle) {
      ogTitle.setAttribute("content", "Tawjeeh AI | Arabic-First AI Guidance Systems");
    }

    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "A redesigned landing experience shaped around the new Tawjeeh AI identity, with light aqua surfaces, precise geometry, and disciplined motion.",
      );
    }
  }, []);

  return (
    <div className="relative overflow-hidden text-[#0F1720]">
      <div className="brand-aura left-[-120px] top-[90px] h-64 w-64 bg-[#57E6D9]/40" />
      <div className="brand-aura right-[-80px] top-[420px] h-72 w-72 bg-[#40E0D0]/25 soft-float" />
      <div className="brand-aura bottom-[240px] left-[12%] h-52 w-52 bg-[#D9F3F0] soft-float-delay" />

      <header className="sticky top-0 z-40 border-b border-white/60 bg-[#F7FCFC]/80 backdrop-blur-xl">
        <div className="section-shell">
          <nav className="flex items-center justify-between gap-6 py-4">
            <a href="#top" className="flex items-center">
              <img src={logoLight} alt="Tawjeeh AI" className="h-9 w-auto sm:h-10" />
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <a href="#capabilities" className="nav-link">
                Capabilities
              </a>
              <a href="#workflow" className="nav-link">
                Workflow
              </a>
              <a href="#showcase" className="nav-link">
                Showcase
              </a>
              <a href="#launch" className="nav-link">
                Launch
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a href="#showcase" className="secondary-cta hidden sm:inline-flex">
                View the system
              </a>
              <a href="#launch" className="primary-cta">
                Book a strategy call
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="section-shell pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="fade-in-up">
              <p className="eyebrow mb-5">Precision intelligence in motion</p>
              <h1 className="max-w-3xl text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0F1720] sm:text-[3.35rem] lg:text-[4.5rem]">
                Arabic-first AI guidance, redesigned with calm precision.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">
                The new Tawjeeh AI landing experience brings the brand guide to life with bright aqua-tinted surfaces, disciplined teal accents, and a
                cleaner product story built for modern institutions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#launch" className="primary-cta gap-2">
                  Start the project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#capabilities" className="secondary-cta gap-2">
                  Explore the redesign
                  <MoveRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="brand-card rounded-[24px] p-5">
                  <p className="eyebrow">Signal</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#0D2B33]">Light-first</p>
                  <p className="mt-2 text-sm leading-6 text-[#6B7C85]">Pure Mist surfaces and aqua neutrals replace the old dark-heavy presentation.</p>
                </div>
                <div className="brand-card rounded-[24px] p-5">
                  <p className="eyebrow">Identity</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#0D2B33]">Teal-led</p>
                  <p className="mt-2 text-sm leading-6 text-[#6B7C85]">The new mark becomes the unmistakable accent without overwhelming content areas.</p>
                </div>
                <div className="brand-card rounded-[24px] p-5">
                  <p className="eyebrow">Delivery</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#0D2B33]">Responsive</p>
                  <p className="mt-2 text-sm leading-6 text-[#6B7C85]">Hero scale, card spacing, and CTA hierarchy all compress cleanly from desktop to mobile.</p>
                </div>
              </div>
            </div>

            <div className="fade-in-up-delay">
              <div className="brand-card relative overflow-hidden rounded-[32px] p-4 sm:p-6">
                <div className="brand-outline" />
                <div className="absolute inset-0 brand-grid opacity-40" />
                <div className="relative rounded-[28px] border border-[#D5E7E6] bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(234,248,247,0.96))] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4 border-b border-[#E8F2F2] pb-4">
                    <div>
                      <p className="eyebrow">Landing blueprint</p>
                      <p className="mt-2 text-lg font-medium text-[#0F1720]">Calm surfaces. Clear structure. Strong AI story.</p>
                    </div>
                    <span className="rounded-full bg-[#D9F3F0] px-3 py-1 text-xs font-medium text-[#129A92]">LIVE SYSTEM</span>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="brand-dark-card relative overflow-hidden rounded-[28px] p-5 text-white">
                      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(87,230,217,0.24),transparent_70%)]" />
                      <div className="relative">
                        <img src={mark} alt="" className="h-14 w-14 rounded-2xl bg-white/10 p-2" />
                        <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-white/65">System preview</p>
                        <p className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em]">Guidance that feels engineered, not improvised.</p>
                        <div className="mt-6 grid gap-3">
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Confidence band</p>
                            <div className="mt-3 h-2 rounded-full bg-white/10">
                              <div className="h-2 w-[78%] rounded-full bg-[#40E0D0]" />
                            </div>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Active layers</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {["Advisory", "Eligibility", "Escalation"].map((item) => (
                                <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {showcasePanels.map((panel) => (
                        <div key={panel.label} className="rounded-[24px] border border-[#D5E7E6] bg-white/90 p-5">
                          <p className="eyebrow">{panel.label}</p>
                          <div className="mt-3 flex items-end justify-between gap-4">
                            <p className="text-4xl font-semibold tracking-[-0.05em] text-[#0D2B33]">{panel.value}</p>
                            <p className="max-w-[10rem] text-right text-sm leading-6 text-[#6B7C85]">{panel.tone}</p>
                          </div>
                        </div>
                      ))}

                      <div className="rounded-[24px] border border-[#D5E7E6] bg-[#EAF8F7] p-5">
                        <div className="flex items-center gap-3">
                          <Sparkles className="h-5 w-5 text-[#129A92]" />
                          <p className="text-sm font-medium text-[#0D2B33]">Signature flow gradient reserved for emphasis</p>
                        </div>
                        <div className="mt-4 h-24 rounded-[20px] bg-[linear-gradient(135deg,#B7F2EC_0%,#40E0D0_52%,#16B8AE_100%)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-shell py-20">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="eyebrow">Core capabilities</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl">
                A landing page system that finally matches the new identity.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#334155] sm:text-lg">
                The redesign follows the guide closely: light surfaces, rounded-tech typography, strict teal discipline, and dark petrol contrast only where
                the story needs weight.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {capabilityCards.map(({ icon: Icon, title, description, tag }) => (
                <article key={title} className="brand-card rounded-[28px] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8F7] text-[#129A92]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="eyebrow mt-5">{tag}</p>
                  <h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.03em] text-[#0F1720]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6B7C85]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="section-shell py-20">
          <div className="brand-card overflow-hidden rounded-[36px]">
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative overflow-hidden border-b border-[#E8F2F2] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="brand-aura left-[-64px] top-[-64px] h-40 w-40 bg-[#57E6D9]/25" />
                <div className="relative">
                  <p className="eyebrow">Build sequence</p>
                  <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0D2B33]">
                    From advisory complexity to a clean operating rhythm.
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-7 text-[#334155]">
                    Every section is organized to feel engineered and approachable at the same time: structured geometry up front, fluid teal atmosphere
                    behind it, and clear control states throughout.
                  </p>

                  <div className="mt-8 space-y-4">
                    {systemHighlights.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#E8F2F2] bg-white/80 px-4 py-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16B8AE]" />
                        <p className="text-sm leading-6 text-[#334155]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <div className="space-y-5">
                  {workflowSteps.map((item) => (
                    <div key={item.step} className="flex gap-4 rounded-[28px] border border-[#D5E7E6] bg-white p-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0D2B33] font-mono text-sm text-white">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium tracking-[-0.02em] text-[#0F1720]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[#6B7C85]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="relative overflow-hidden bg-[linear-gradient(180deg,#21454D_0%,#0D2B33_100%)] py-24 text-white">
          <div className="brand-aura left-[5%] top-[10%] h-64 w-64 bg-[#40E0D0]/20" />
          <div className="brand-aura right-[8%] bottom-[10%] h-80 w-80 bg-[#57E6D9]/10 soft-float" />

          <div className="section-shell relative">
            <div className="max-w-2xl">
              <p className="eyebrow !text-[#7CEDE3]">Showcase section</p>
              <img src={logoDark} alt="Tawjeeh AI" className="mt-4 h-10 w-auto sm:h-12" />
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Dark petrol used with intent, so the product story lands with contrast.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                This is the contrast moment in the system: rich enough to spotlight the technology, restrained enough to keep the teal mark feeling premium.
              </p>
            </div>

            <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="brand-dark-card relative overflow-hidden rounded-[36px] p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(87,230,217,0.2),transparent_34%),linear-gradient(rgba(124,237,227,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(124,237,227,0.08)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px]" />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/60">Experience surface</p>
                      <p className="mt-2 text-xl font-medium text-white">Guidance dashboard preview</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                      <Radar className="h-3.5 w-3.5" />
                      Adaptive signal layer
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-white/55">Primary track</p>
                          <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Admissions guidance</p>
                        </div>
                        <img src={mark} alt="" className="h-12 w-12 rounded-2xl bg-white/10 p-2" />
                      </div>
                      <div className="mt-6 space-y-3">
                        {[
                          "Arabic-first applicant triage",
                          "Eligibility logic with fallback review",
                          "Escalation routing to advisors",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                            <CheckCircle2 className="h-4 w-4 text-[#40E0D0]" />
                            <span className="text-sm text-white/82">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/55">Response quality</p>
                        <p className="mt-3 text-5xl font-semibold tracking-[-0.05em]">4.8</p>
                        <p className="mt-2 text-sm text-white/70">Interface confidence scored through structured answer quality and review readiness.</p>
                      </div>
                      <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/55">Flow preview</p>
                        <div className="mt-4 h-28 rounded-[22px] bg-[linear-gradient(135deg,rgba(183,242,236,0.9),rgba(64,224,208,0.7),rgba(22,184,174,0.55))]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <p className="eyebrow !text-[#7CEDE3]">Why it works</p>
                  <div className="mt-5 space-y-4">
                    {[
                      {
                        icon: Bot,
                        title: "AI feels productized",
                        description: "Cards, labels, and interaction density are designed to feel like a real operating system, not a generic marketing template.",
                      },
                      {
                        icon: Workflow,
                        title: "Narrative stays structured",
                        description: "Each section follows a confident rhythm: signal, proof, system detail, then call to action.",
                      },
                      {
                        icon: Sparkles,
                        title: "Brand expression stays disciplined",
                        description: "The teal gradient appears as atmosphere and emphasis, never as a distracting wallpaper.",
                      },
                    ].map(({ icon: Icon, title, description }) => (
                      <div key={title} className="rounded-[24px] border border-white/10 bg-black/10 p-5">
                        <Icon className="h-5 w-5 text-[#40E0D0]" />
                        <h3 className="mt-4 text-xl font-medium text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/72">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <p className="eyebrow !text-[#7CEDE3]">System notes</p>
                  <div className="mt-4 space-y-3">
                    {["Sora for confident headings", "Inter for all readable UI text", "IBM Plex Mono for labels and telemetry"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/78">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="launch" className="section-shell py-24">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="eyebrow">Launch ready</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0F1720] sm:text-5xl">
                Ready for a polished first impression and a clearer product narrative.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#334155] sm:text-lg">
                This redesign sets the visual foundation for the rest of the brand: cleaner navigation, a more premium hero, stronger showcase contrast, and
                a better match to the new Tawjeeh AI mark.
              </p>
            </div>

            <div className="brand-card rounded-[36px] p-8 sm:p-10">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <img src={logoLight} alt="Tawjeeh AI" className="h-10 w-auto" />
                  <p className="mt-5 text-xl font-medium leading-8 text-[#0D2B33]">
                    A bright, refined landing page built strictly around the new brand system and logo family.
                  </p>
                </div>
                <a href="mailto:hello@tawjeeh.ai" className="dark-cta gap-2 whitespace-nowrap">
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-[#D5E7E6] bg-white p-5">
                  <p className="eyebrow">Visual system</p>
                  <p className="mt-3 text-sm leading-7 text-[#334155]">Pure Mist background, aqua neutrals, disciplined teal accents, and low-shadow depth.</p>
                </div>
                <div className="rounded-[24px] border border-[#D5E7E6] bg-white p-5">
                  <p className="eyebrow">Page rhythm</p>
                  <p className="mt-3 text-sm leading-7 text-[#334155]">Hero, capabilities, workflow, showcase, and CTA organized into a tighter narrative arc.</p>
                </div>
                <div className="rounded-[24px] border border-[#D5E7E6] bg-white p-5">
                  <p className="eyebrow">Brand assets</p>
                  <p className="mt-3 text-sm leading-7 text-[#334155]">Light and dark logo lockups paired with the standalone mark for modular usage across sections.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E8F2F2] bg-white/70 py-8 backdrop-blur-sm">
        <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <img src={logoLight} alt="Tawjeeh AI" className="h-8 w-auto" />
            <p className="mt-3 text-sm text-[#6B7C85]">Arabic-first AI guidance systems with a calmer, sharper visual language.</p>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#6B7C85]">Designed around teal geometry and fluid motion</p>
        </div>
      </footer>
    </div>
  );
}
