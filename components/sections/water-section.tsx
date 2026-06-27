"use client";

import { EditorialSection } from "@/components/ui/editorial-section";
import { images } from "@/lib/images";

export function WaterSection() {
  return (
    <EditorialSection
      id="water"
      eyebrow="The Water"
      headline={
        <>
          Sail Into
          <br />
          <span className="italic text-champagne-dark">Stillness.</span>
        </>
      }
      subline="Private yacht and coastal waters — unhurried, open and entirely yours."
      image={images.boat}
      imageAlt="Private yacht on calm waters"
      imagePosition="left"
      tone="ivory"
    />
  );
}
