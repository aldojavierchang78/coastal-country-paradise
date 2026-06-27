"use client";

import { useState } from "react";
import { LuxuryLoader } from "@/components/layout/loader";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { EstateSection } from "@/components/sections/estate-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { CorvetteSection } from "@/components/sections/corvette-section";
import { GwagonSection } from "@/components/sections/gwagon-section";
import { LifestyleSection } from "@/components/sections/lifestyle-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { BookingCtaSection } from "@/components/sections/booking-cta-section";

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
        <FleetSection />
        <CorvetteSection />
        <GwagonSection />
        <LifestyleSection />
        <GallerySection />
        <BookingCtaSection />
      </main>
      <Footer />
    </>
  );
}
