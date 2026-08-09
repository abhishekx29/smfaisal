import { Link } from "@tanstack/react-router";
import { ArrowUp, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, profile } from "@/data/profile";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/books", label: "Books" },
  { to: "/teaching", label: "Teaching" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="surface-section border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
        </div>

        <nav aria-label="Quick links">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <GraduationCap className="mt-0.5 size-4 shrink-0 text-navy" />
              <span>
                {contact.department}, {contact.institution}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-navy" />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ExternalLink className="mt-0.5 size-4 shrink-0 text-navy" />
              <a
                href={contact.website}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                Original academic website
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="size-4" /> Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}
