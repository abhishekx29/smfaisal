import { Link } from "@tanstack/react-router";
import { ArrowUp, ExternalLink, GraduationCap, MapPin, Mail, Phone } from "lucide-react";
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
    <footer className="bg-[#f7f8fa] dark:bg-[#0b1220] text-[#0f172a] dark:text-[#cbd5e1] border-t border-border">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#374151] dark:text-[#94a3b8]">
            {profile.tagline}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href={contact.website} target="_blank" rel="noreferrer" className="text-sm text-[#374151] dark:text-[#cbd5e1] hover:underline">
              {new URL(contact.website).hostname.replace('www.', '')}
            </a>
          </div>
        </div>

        <nav aria-label="Quick links">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280] dark:text-[#94a3b8]">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to} className="transition-transform transform hover:scale-105 duration-200">
                <Link
                  to={l.to}
                  className="text-sm text-[#334155] dark:text-[#e6eef8] transition-colors hover:text-[#0f172a] dark:hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280] dark:text-[#94a3b8]">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[#374151] dark:text-[#94a3b8]">
            <li className="flex items-start gap-2.5 transition-transform transform hover:scale-105 duration-200">
              <GraduationCap className="mt-0.5 size-4 shrink-0 text-[#374151] dark:text-[#94a3b8] transition-colors" />
              <span className="transition-colors hover:text-[#0f172a] dark:hover:text-white">{contact.department}, {contact.institution}</span>
            </li>
            <li className="flex items-start gap-2.5 transition-transform transform hover:scale-105 duration-200">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#374151] dark:text-[#94a3b8] transition-colors" />
              <span className="transition-colors hover:text-[#0f172a] dark:hover:text-white">{contact.address}</span>
            </li>
            <li className="flex items-start gap-2.5 transition-transform transform hover:scale-105 duration-200">
              <Mail className="mt-0.5 size-4 shrink-0 text-[#374151] dark:text-[#94a3b8] transition-colors" />
              <a href={`mailto:${contact.email}`} className="hover:underline transition-colors hover:text-[#0f172a] dark:hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 transition-transform transform hover:scale-105 duration-200">
              <Phone className="mt-0.5 size-4 shrink-0 text-[#374151] dark:text-[#94a3b8] transition-colors" />
              <a href={`tel:${contact.phone}`} className="hover:underline transition-colors hover:text-[#0f172a] dark:hover:text-white">
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-[#6b7280] dark:text-[#94a3b8]">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href={contact.website} target="_blank" rel="noreferrer" className="text-sm text-[#334155] dark:text-[#e6eef8] hover:underline transition-transform transform hover:scale-105 duration-200">
              Visit website
            </a>
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl transition-transform transform hover:scale-105 duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="size-4" /> Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
