"use client";

import { useState } from "react";
import { LuxuryLoader } from "@/components/layout/loader";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { EstateSection } from "@/components/sections/estate-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ReserveSection } from "@/components/sections/reserve-section";

export function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LuxuryLoader onComplete={() => setLoaded(true)} />}
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <EstateSection />
        <CollectionSection />
        <ExperiencesSection />
        <GallerySection />
        <ReserveSection />
      </main>
      <Footer />
    </>
  );
}
