"use client";

import { EditorialSection } from "@/components/ui/editorial-section";
import { images } from "@/lib/images";

export function EstateSection() {
  return (
    <EditorialSection
      id="estate"
      eyebrow="The Estate"
      headline={
        <>
          Stay
          <br />
          <span className="italic text-champagne-dark">Extraordinary.</span>
        </>
      }
      subline="A private waterfront retreat — architecture, privacy and stillness in equal measure."
      image={images.mansion}
      imageAlt="Aerial view of the private waterfront estate"
      imagePosition="left"
      tone="warm-white"
    />
  );
}
