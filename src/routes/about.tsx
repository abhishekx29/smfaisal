import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/page-shell";
import { About, AcademicProfile } from "@/components/site/about";
import { Achievements } from "@/components/site/timelines";
import { Stats } from "@/components/site/stats";

const title = "About | Dr. Syed Mohammad Faisal";
const description =
  "Biography of Dr. Syed Mohammad Faisal â€” MBA and PhD in Finance with over 20 years of teaching, research and academic administration experience at Jazan University, Saudi Arabia.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="Dr. Syed Mohammad Faisal"
        description="Finance Strategist | Finance Researcher | Jazan University, Saudi Arabia"
      />
      <About />
      <AcademicProfile />
      <Stats />
      <Achievements />
    </PageShell>
  );
}

