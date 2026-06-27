"use client";

import { EditorialSection } from "@/components/ui/editorial-section";
import { images } from "@/lib/images";

export function LifestyleSection() {
  return (
    <EditorialSection
      id="lifestyle"
      eyebrow="The Lifestyle"
      headline={
        <>
          Celebrate Without
          <br />
          <span className="italic text-champagne-dark">Ordinary.</span>
        </>
      }
      subline="Couture, photography, equestrian portraits, exotic birds and private gatherings — each moment composed with care."
      image={images.lifestyle}
      imageAlt="Country lifestyle portrait at the estate"
      imagePosition="right"
      tone="warm-white"
    />
  );
}
