import { motion } from "motion/react";
import { cloneElement, isValidElement, type ReactNode } from "react";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

function StickySocialBar() {
  return (
    <div className="hidden sm:flex fixed left-0 top-1/2 z-50 -translate-y-1/2 flex-col gap-3 w-auto">
      <SocialLink
        href="https://www.facebook.com"
        label="Facebook"
        icon={<Facebook className="h-4 w-4 sm:h-5 sm:w-5" />}
        color="text-[#1877f2]"
      />
      <SocialLink
        href="https://twitter.com"
        label="Twitter"
        icon={<Twitter className="h-4 w-4 sm:h-5 sm:w-5" />}
        color="text-[#1d9bf0]"
      />
      <SocialLink
        href="https://www.linkedin.com/in/dr-syed-mohammad-faisal-92b39122?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        label="LinkedIn"
        icon={<Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />}
        color="text-[#0a66c2]"
      />
      <SocialLink
        href="https://www.youtube.com"
        label="YouTube"
        icon={<Youtube className="h-4 w-4 sm:h-5 sm:w-5" />}
        color="text-[#ff0000]"
      />
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
  color,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  color: string;
}) {
  const coloredIcon = isValidElement(icon)
    ? cloneElement(icon, {
        className: `${color} ${icon.props.className ?? ""}`.trim(),
      })
    : icon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group flex h-8 sm:h-10 items-center justify-center rounded-r-full px-2 text-slate-700 transition-all duration-300 hover:border hover:border-slate-300 hover:text-slate-900 dark:text-slate-200 dark:hover:border-slate-700"
    >
      {coloredIcon}
      <span className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-lg opacity-0 transition-all duration-300 delay-75 transform translate-x-2 group-hover:delay-0 group-hover:translate-x-0 group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
        {label}
      </span>
    </a>
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
