import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/page-shell";
import { Books } from "@/components/site/books";

const title = "Books | Dr. Syed Mohammad Faisal";
const description =
  "Books authored and edited by Dr. Syed Mohammad Faisal: Capital Market and Investment Management, Finance in Accounting Thought, and Strategic Frameworks for Managing Risk in FinTech Ecosystems.";

export const Route = createFileRoute("/books")({
  component: BooksPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "book" },
      { property: "og:url", content: "/books" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/books" }],
  }),
});

function BooksPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Books"
        title="Books & edited volumes"
        description="Books Publications Overview — authored and edited titles published in India and the United States."
      />
      <Books />
    </PageShell>
  );
}
