import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/page-shell";
import { Contact } from "@/components/site/contact";

const title = "Contact | Dr. Syed Mohammad Faisal";
const description =
  "Contact Dr. Syed Mohammad Faisal, Assistant Professor at Applied College, Jazan University, Saudi Arabia, for research collaboration and academic enquiries.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Research collaboration, speaking invitations and academic enquiries."
      />
      <Contact />
    </PageShell>
  );
}
