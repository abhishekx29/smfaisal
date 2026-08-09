import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/page-shell";
import { ResearchInterests } from "@/components/site/about";
import { Conferences } from "@/components/site/timelines";

const title = "Research | Dr. Syed Mohammad Faisal";
const description =
  "Research interests of Dr. Syed Mohammad Faisal: Corporate Finance, ESG, Corporate Governance, FinTech, Artificial Intelligence in Accounting and Finance, Sustainable Business and Financial Markets.";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/research" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
});

function ResearchPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Research"
        title="Research interests & scholarly activity"
        description="Finance, ESG, Corporate Governance, FinTech, Artificial Intelligence in Accounting and Finance, and Sustainable Business."
      />
      <ResearchInterests />
      <Conferences />
    </PageShell>
  );
}
