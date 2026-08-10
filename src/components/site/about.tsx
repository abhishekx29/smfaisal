import * as Icons from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { academicProfile, profile, researchInterests } from "@/data/profile";

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <Cmp className={className} />;
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="An academic career built on finance, research and mentorship"
      description="Welcome to my academic website."
    >
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-6">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-pretty text-lg leading-[1.85] text-foreground/85">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="left" className="space-y-4">
          {[
            { label: "Education", value: "MBA and PhD in Finance" },
            { label: "Teaching Experience", value: "20+ years across India and Saudi Arabia" },
            {
              label: "Research Interests",
              value: researchInterests.map((r) => r.title).join(", "),
            },
            {
              label: "Academic Journey",
              value: "From institutes in Lucknow, India to Jazan University, Saudi Arabia",
            },
            {
              label: "Professional Achievements",
              value: "120+ research publications, 3 books, international conference presenter",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-gradient-to-r from-amber-300 via-amber-100 to-white p-px shadow-md shadow-amber-200/24"
            >
              <div className="elevate-card rounded-[1.125rem] bg-white/95 p-5 dark:bg-slate-950/95">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

export function AcademicProfile() {
  return (
    <Section
      id="profile"
      tone="surface"
      eyebrow="Academic Profile"
      title="Credentials at a glance"
      description="Qualifications, position and scholarly footprint, as presented on the academic profile."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {academicProfile.map((item, i) => (
          <Reveal key={item.value} delay={i * 0.06}>
            <div className="rounded-2xl bg-gradient-to-r from-amber-300 via-amber-100 to-white p-px shadow-md shadow-amber-200/24 dark:shadow-none">
              <article className="group h-full rounded-[1.125rem] bg-white/95 p-6 transition-transform duration-300 hover:-translate-y-1 dark:bg-slate-950/95">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 transition-transform duration-300 group-hover:scale-110 dark:bg-amber-400/10 dark:text-amber-300">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-medium leading-snug tracking-tight text-slate-900 dark:text-slate-100">{item.value}</p>
              </article>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ResearchInterests() {
  return (
    <Section
      id="research"
      eyebrow="Research Interests"
      title="Where the work is focused"
      description="Corporate Finance, ESG, Corporate Governance, FinTech, Artificial Intelligence in Accounting and Finance, Sustainable Business, and Financial Markets."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {researchInterests.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <div className="rounded-2xl bg-gradient-to-r from-amber-300 via-amber-100 to-white p-px shadow-md shadow-amber-200/24 dark:shadow-none">
              <article className="group h-full rounded-[1.125rem] bg-white/95 p-6 transition-transform duration-300 hover:-translate-y-1 dark:bg-slate-950/95">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 transition-transform duration-300 group-hover:scale-110 dark:bg-amber-400/10 dark:text-amber-300">
                  <Icon name={r.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight text-slate-900 dark:text-slate-100">{r.title}</h3>
              </article>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
