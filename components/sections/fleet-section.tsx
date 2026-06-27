"use client";

import { EditorialSection } from "@/components/ui/editorial-section";
import { images } from "@/lib/images";

export function FleetSection() {
  return (
    <EditorialSection
      id="fleet"
      eyebrow="The Fleet"
      headline={
        <>
          Drive Something
          <br />
          <span className="italic text-champagne-dark">Rare.</span>
        </>
      }
      subline="Corvette. G-Wagon. Every arrival, an arrival worth remembering."
      image={images.fleet}
      imageAlt="Corvette and G-Wagon at the estate"
      imagePosition="right"
      tone="ivory"
    />
  );
}
