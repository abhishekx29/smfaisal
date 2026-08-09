import * as Icons from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { achievements, teaching } from "@/data/profile";
import { conferences, workshops, type TimelineItem } from "@/data/events";

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <Cmp className={className} />;
}

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
      {items.map((item, i) => (
        <Reveal key={`${item.text.slice(0, 30)}-${i}`} delay={(i % 6) * 0.04}>
          <li className="relative">
            <span className="absolute -left-[1.9rem] top-2 size-2.5 rounded-full bg-navy ring-4 ring-background sm:-left-[2.4rem]" />
            <div className="elevate-card rounded-2xl p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-semibold text-navy">
                  {item.kind}
                </span>
                {item.year && (
                  <span className="text-xs font-medium text-muted-foreground">{item.year}</span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{item.text}</p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function Conferences() {
  return (
    <Section
      id="conferences"
      tone="surface"
      eyebrow="Conferences"
      title="Seminars & conferences — organized, attended and presented"
      description="A complete chronological record of seminars, conferences and workshops from 2004 to 2026."
    >
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-lg font-semibold tracking-tight">Seminars & Conferences</h3>
          <TimelineList items={conferences} />
        </div>
        <div>
          <h3 className="mb-6 text-lg font-semibold tracking-tight">Workshops</h3>
          <TimelineList items={workshops} />
        </div>
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Awards & Achievements"
      title="Recognition and professional milestones"
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <li className="relative">
              <span className="absolute -left-[2.35rem] top-3 flex size-8 items-center justify-center rounded-full border border-border bg-card text-navy sm:-left-[2.85rem]">
                <Icon name={a.icon} className="size-4" />
              </span>
              <div className="elevate-card rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                  {a.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Teaching() {
  return (
    <Section
      id="teaching"
      tone="surface"
      eyebrow="Teaching Experience"
      title="Two decades in the classroom"
      description="Over 20 years of teaching, research and academic administration experience across India and Saudi Arabia."
    >
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
        {teaching.map((t, i) => (
          <Reveal key={t.period} delay={i * 0.08}>
            <li className="relative">
              <span className="absolute -left-[1.9rem] top-3 size-2.5 rounded-full bg-navy ring-4 ring-[var(--surface)] sm:-left-[2.4rem]" />
              <div className="elevate-card rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                  {t.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{t.role}</h3>
                <p className="text-sm font-medium text-muted-foreground">{t.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
