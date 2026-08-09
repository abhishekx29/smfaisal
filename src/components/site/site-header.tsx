import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import smfaisalLogo from "../../assets/smfaisal.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { useTheme } from "./theme-provider";

export const navSections = [
  { id: "about", label: "About" },
  { id: "profile", label: "Profile" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "books", label: "Books" },
  { id: "conferences", label: "Conferences" },
  { id: "teaching", label: "Teaching" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/books", label: "Books" },
  { to: "/teaching", label: "Teaching" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const items = isHome ? navSections.map((s) => ({ href: `#${s.id}`, label: s.label, id: s.id })) : [];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4",
            scrolled ? "glass-panel" : "border border-transparent",
          )}
        >
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={smfaisalLogo}
              alt="SM Faisal"
              className="size-9 rounded-xl object-cover"
            />
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              {profile.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {(isHome ? items : pages.map((p) => ({ href: p.to, label: p.label, id: p.to }))).map(
              (item) =>
                isHome ? (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                      active === item.id && "bg-accent text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-accent [&.active]:text-foreground"
                  >
                    {item.label}
                  </Link>
                ),
            )}
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle dark mode"
              onClick={toggle}
              className="rounded-xl"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button asChild size="sm" className="hidden rounded-xl sm:inline-flex">
              {isHome ? <a href="#contact">Get in touch</a> : <Link to="/contact">Get in touch</Link>}
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm">
                <div className="mt-10 flex flex-col gap-1 px-4">
                  <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Pages
                  </p>
                  {pages.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/85 transition-colors hover:bg-accent"
                    >
                      {p.label}
                    </Link>
                  ))}
                  {isHome && (
                    <>
                      <p className="px-3 pb-2 pt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Sections
                      </p>
                      {navSections.map((s) => (
                        <a
                          key={s.id}
                          href={`#${s.id}`}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {s.label}
                        </a>
                      ))}
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
