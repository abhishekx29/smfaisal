import { useState } from "react";
import { BookOpen, ExternalLink, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { books } from "@/data/profile";
import capitalCover from "@/assets/books/capital market and investment management.jpg";
import financeCover from "@/assets/books/finance in accounting.jpg";
import strategicCover from "@/assets/books/strategic framework.jpg";

export function Books() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Section
      id="books"
      eyebrow="Books"
      title="Books & edited volumes"
      description="Books Publications Overview — authored and edited titles in capital markets, accounting thought, and FinTech risk."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {books.map((book, i) => {
          const cover =
            book.index === "1"
              ? capitalCover
              : book.index === "2"
              ? financeCover
              : strategicCover;

          return (
            <Reveal key={book.title} delay={i * 0.08}>
              <article className="elevate-card flex h-full flex-col overflow-hidden rounded-3xl">
                <div
                  className="relative flex aspect-[3/2] items-end p-6"
                  style={{
                    backgroundImage: `url(${cover})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-slate-950/40" aria-hidden />
                  <BookOpen className="absolute right-5 top-5 size-6 text-white/75" />
                  <h3 className="relative text-pretty text-xl font-semibold leading-tight tracking-tight text-white">
                    {book.title}
                  </h3>
                </div>

              <div className="flex flex-1 flex-col p-6">
                <dl className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="font-medium text-foreground/70">Publisher:</dt>
                    <dd>{book.publisher}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-foreground/70">ISBN:</dt>
                    <dd>{book.isbn}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-foreground/70">Published:</dt>
                    <dd>{book.index === "3" ? "2026" : "Available now"}</dd>
                  </div>
                </dl>

                <p
                  className={`mt-4 text-sm leading-relaxed text-muted-foreground ${
                    expanded === book.title ? "" : "line-clamp-4"
                  }`}
                >
                  {book.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <Button asChild size="sm" className="rounded-xl">
                    <a href={book.amazon} target="_blank" rel="noreferrer">
                      <ShoppingCart className="size-3.5" /> Amazon
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-xl"
                    onClick={() => setExpanded(expanded === book.title ? null : book.title)}
                  >
                    {expanded === book.title ? "Read less" : "Read more"}
                  </Button>
                  {book.doi && (
                    <Button asChild size="sm" variant="ghost" className="rounded-xl">
                      <a href={book.doi} target="_blank" rel="noreferrer">
                        DOI <ExternalLink className="size-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
