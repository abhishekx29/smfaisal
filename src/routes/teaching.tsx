import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/page-shell";
import { Teaching, Conferences } from "@/components/site/timelines";

const title = "Teaching | Dr. Syed Mohammad Faisal";
const description =
  "Over 20 years of teaching, research and academic administration experience in India and Saudi Arabia, including seminars and workshops organized at Jazan University.";

export const Route = createFileRoute("/teaching")({
  component: TeachingPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/teaching" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/teaching" }],
  }),
});

function TeachingPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Teaching"
        title="Teaching experience"
        description="Two decades of classroom teaching, research supervision and academic leadership."
      />
      <Teaching />
      <Conferences />
    </PageShell>
  );
}
