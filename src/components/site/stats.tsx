import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "./section";
import { Reveal, Counter } from "./reveal";
import { stats, testimonials } from "@/data/profile";
import fbg from "@/assets/fbg.jpg";

export function Stats() {
  return (
    <section
      className="relative overflow-hidden border-y border-border py-16 text-primary-foreground sm:py-20"
      style={{
        backgroundImage: `url(${fbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/70" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07} className="text-center lg:text-left">
            <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-primary-foreground/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="In his own words"
      title="Academic statement"
      description="Statements drawn directly from the academic profile."
    >
      <Carousel opts={{ loop: true }} className="mx-auto max-w-3xl">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.quote}>
              <figure className="elevate-card rounded-3xl p-8 sm:p-12">
                <Quote className="size-8 text-navy/40" />
                <blockquote className="mt-6 text-pretty text-xl leading-relaxed tracking-tight sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <span className="font-semibold">{t.author}</span>
                  <span className="text-muted-foreground"> — {t.role}</span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  );
}
