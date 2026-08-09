import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/page-shell";
import { Publications } from "@/components/site/publications";
import { publications } from "@/data/publications";

const title = "Publications | Dr. Syed Mohammad Faisal";
const description = `Complete list of ${publications.length} research publications by Dr. Syed Mohammad Faisal across finance, ESG, FinTech, AI in accounting, and financial markets.`;

export const Route = createFileRoute("/publications")({
  component: PublicationsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/publications" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
});

function PublicationsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Publications"
        title="Research publications"
        description="Journal articles, book chapters, conference proceedings and editorial articles, preserved exactly as published."
      />
      <Publications full />
    </PageShell>
  );
}
