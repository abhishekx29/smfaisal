import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "surface";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-12 sm:py-16",
        tone === "surface" && "surface-section border-y border-border",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {(eyebrow || title || description) && (
          <Reveal className="mb-12 max-w-3xl sm:mb-16">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy/80">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
