import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/page-shell";
import { Gallery } from "@/components/site/gallery";

const title = "Gallery | Dr. Syed Mohammad Faisal";
const description =
  "A visual record of academic life — lectures, conferences, workshops and research at Jazan University and beyond.";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Gallery"
        title="Academic life in pictures"
        description="Lectures, conferences, workshops and research moments."
      />
      <Gallery />
    </PageShell>
  );
}
