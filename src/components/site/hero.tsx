import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, FileText, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import portraitDesk from "@/assets/portrait-desk.jpg";


export function Hero() {
  return (
    <section className="aurora relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-8 sm:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-2xl text-center sm:mx-0 sm:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <MapPin className="size-3.5 text-navy" />
            {profile.institution}, {profile.location}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Assistant Professor", "Author", "Researcher"].map((role) => (
              <span
                key={role}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {role}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.welcome[1]}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full justify-center rounded-xl sm:w-auto">
              <a href="#profile">
                <FileText className="size-4" /> View CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full justify-center rounded-xl sm:w-auto">
              <a href="#publications">
                <BookOpen className="size-4" /> Publications
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full justify-center rounded-xl sm:w-auto">
              <a href="#contact">
                <Mail className="size-4" /> Contact
              </a>
            </Button>
          </div>

          <Link
            to="/research"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy underline-offset-4 hover:underline"
          >
            Explore research interests <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[320px] sm:max-w-sm lg:max-w-none"
        >
          <div className="glass-panel overflow-hidden rounded-3xl p-3">
            <img
              src={portraitDesk}
              alt="Professor's study at Jazan University with finance journals, notebook and reading glasses"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>

          <div className="glass-panel absolute -bottom-6 -left-4 hidden rounded-2xl px-5 py-4 sm:block">
            <p className="text-2xl font-semibold tracking-tight">20+</p>
            <p className="text-xs text-muted-foreground">Years in academia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
