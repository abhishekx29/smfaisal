import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

function StickySocialBar() {
  return (
    <>
      <div className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dbeafe] bg-[#eef4ff] text-[#1877f2] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <Facebook className="size-5" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#1d9bf0] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <Twitter className="size-5" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c7d2fe] bg-[#eef2ff] text-[#0a66c2] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <Linkedin className="size-5" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#fecaca] bg-[#fff1f2] text-[#ff0000] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <Youtube className="size-5" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-4 z-50 flex items-center justify-center lg:hidden px-4">
        <div className="flex items-center gap-3 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-slate-900/10 backdrop-blur-xl dark:bg-slate-950/85 dark:shadow-slate-950/20">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dbeafe] bg-[#eef4ff] text-[#1877f2] transition hover:-translate-y-0.5"
          >
            <Facebook className="size-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#1d9bf0] transition hover:-translate-y-0.5"
          >
            <Twitter className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c7d2fe] bg-[#eef2ff] text-[#0a66c2] transition hover:-translate-y-0.5"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#fecaca] bg-[#fff1f2] text-[#ff0000] transition hover:-translate-y-0.5"
          >
            <Youtube className="size-5" />
          </a>
        </div>
      </div>
    </>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />
      <StickySocialBar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 min-w-0"
      >
        {children}
      </motion.main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="aurora relative overflow-hidden pb-10 pt-36 sm:pt-44">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy/80">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
