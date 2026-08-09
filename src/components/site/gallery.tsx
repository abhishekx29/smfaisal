import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "motion/react";
import { Section } from "./section";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "University lecture hall", w: 1200, h: 900 },
  { src: g2, alt: "Academic conference presentation", w: 1200, h: 1500 },
  { src: g3, alt: "Finance research papers and market charts", w: 1200, h: 900 },
  { src: g4, alt: "University library reading room", w: 1200, h: 1400 },
  { src: g5, alt: "Graduation ceremony", w: 1200, h: 900 },
  { src: g6, alt: "Research workshop session", w: 1200, h: 1300 },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="Academic life"
      description="Moments from teaching, conferences, workshops and research."
    >
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((img, i) => (
          <motion.button
            key={img.alt}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Open image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              loading="lazy"
              decoding="async"
              className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </motion.button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active]!.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-5 top-5 rounded-full bg-background/90 p-2 text-foreground"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[active]!.src}
            alt={images[active]!.alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </Section>
  );
}
