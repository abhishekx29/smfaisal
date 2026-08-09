import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { articles } from "@/data/profile";
import { publications } from "@/data/publications";

export function Publications({ full = false }: { full?: boolean }) {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(full ? 24 : 9);

  const sorted = useMemo(
    () => [...publications].sort((a, b) => b.year - a.year),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((p) => p.citation.toLowerCase().includes(q));
  }, [query, sorted]);

  return (
    <Section
      id="publications"
      tone="surface"
      eyebrow="Publications"
      title={`${publications.length} peer-reviewed papers, chapters and proceedings`}
      description="Complete publication record, preserved exactly as listed on the academic website — journal articles, Springer and Emerald chapters, IEEE proceedings, and indexed research output."
    >
      <div className="mb-8 flex max-w-md items-center gap-2 rounded-xl border border-border bg-card px-3">
        <Search className="size-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(9);
          }}
          placeholder="Search by title, journal, or year"
          aria-label="Search publications"
          className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.slice(0, visible).map((p, i) => (
          <Reveal key={`${p.citation.slice(0, 40)}-${i}`} delay={(i % 6) * 0.05}>
            <article className="elevate-card flex h-full flex-col rounded-2xl p-6">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="rounded-full">
                  {p.year || "—"}
                </Badge>
                {p.doi && (
                  <Badge variant="outline" className="rounded-full text-[11px]">
                    DOI
                  </Badge>
                )}
              </div>
              <h3 className="mt-4 text-pretty text-base font-semibold leading-snug tracking-tight">
                {p.title}
              </h3>
              {p.venue && (
                <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground">
                  {p.venue}
                </p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground/85">{p.citation}</p>
              {p.doi && (
                <div className="mt-5 pt-1">
                  <Button asChild size="sm" variant="outline" className="rounded-xl">
                    <a href={p.doi} target="_blank" rel="noreferrer">
                      View Publication <ExternalLink className="size-3.5" />
                    </a>
                  </Button>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {visible < filtered.length && (
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl"
            onClick={() => setVisible((v) => v + 12)}
          >
            Show more ({filtered.length - visible} remaining)
          </Button>
        </div>
      )}

      <Reveal className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight">Articles</h3>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a} className="elevate-card rounded-2xl p-5 text-sm leading-relaxed">
              {a}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
