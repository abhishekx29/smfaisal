import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { Hero } from "@/components/site/hero";
import { About, AcademicProfile, ResearchInterests } from "@/components/site/about";
import { Stats, Testimonials } from "@/components/site/stats";
import { Publications } from "@/components/site/publications";
import { Books } from "@/components/site/books";
import { Achievements, Conferences, Teaching } from "@/components/site/timelines";
import { Gallery } from "@/components/site/gallery";
import { Contact } from "@/components/site/contact";
import { profile } from "@/data/profile";

const title = "Dr. Syed Mohammad Faisal | Professor, Researcher & Computer Scientist";
const description =
  "Official website of Dr. Syed Mohammad Faisal featuring research publications, academic profile, patents, books, conferences, teaching, and contact information.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: profile.portrait },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: profile.portrait },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Finance Strategist",
          description,
          image: profile.portrait,
          url: "/",
          affiliation: {
            "@type": "CollegeOrUniversity",
            name: "Jazan University",
            address: "Jazan, Saudi Arabia",
          },
          knowsAbout: [
            "Corporate Finance",
            "ESG",
            "Corporate Governance",
            "FinTech",
            "Artificial Intelligence in Accounting and Finance",
            "Sustainable Business",
            "Financial Markets",
          ],
          sameAs: [profile.source, profile.linkedin],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <About />
      <AcademicProfile />
      <ResearchInterests />
      <Stats />
      <Publications />
      <Books />
      <Conferences />
      <Achievements />
      <Teaching />
      <Gallery />
      <Testimonials />
      <Contact />
    </PageShell>
  );
}

