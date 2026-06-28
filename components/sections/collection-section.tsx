"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { images } from "@/lib/images";

const collectionPillars = [
  {
    title: "Automobiles",
    lines: [
      "Performance vehicles and refined grand tourers, curated for the drive itself.",
      "From open-road arrivals to unhurried coastal passages.",
    ],
  },
  {
    title: "Watercraft",
    lines: [
      "Private yachts and coastal vessels for still waters and golden horizons.",
      "The sea, entirely at your pace.",
    ],
  },
  {
    title: "Land & Leisure",
    lines: [
      "Golf carts and considered additions for ease across the grounds.",
      "Every detail of movement, quietly provided.",
    ],
  },
] as const;

const collectionImages = [
  {
    src: images.fleet,
    alt: "Curated automobiles at the estate",
  },
  {
    src: images.boat,
    alt: "Private watercraft on calm waters",
  },
] as const;

export function CollectionSection() {
  return (
    <section id="collection" className="bg-ivory">
      <div className="mx-auto max-w-[92rem] px-7 sm:px-10 md:px-16 lg:px-24">
        <div className="pt-36 pb-24 md:pt-52 md:pb-32 lg:pt-72 lg:pb-40">
          <ScrollReveal>
            <p className="text-[9px] font-light uppercase tracking-[0.5em] text-champagne-dark">
              The Collection
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="mt-12 max-w-[18ch] font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.06] tracking-tight text-deep-black lg:mt-14">
              Every Premium Asset, Curated as One
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-14 max-w-xl text-[15px] font-light leading-[2.1] text-luxury-muted md:mt-16 md:text-base lg:max-w-2xl">
              Luxury cars, boats, yachts and land conveyances — assembled with
              the discernment of a private collection, never a rental fleet.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24} className="mt-20 md:mt-28">
            <div className="h-px w-12 bg-champagne/70" />
          </ScrollReveal>

          <div className="mt-24 grid gap-20 md:mt-32 md:grid-cols-3 md:gap-12 lg:mt-40 lg:gap-20">
            {collectionPillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={0.12 + i * 0.1}>
                <div>
                  <h3 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-light tracking-tight text-deep-black">
                    {pillar.title}
                  </h3>
                  <div className="mt-8 space-y-5">
                    {pillar.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[14px] font-light leading-[1.95] text-luxury-muted md:text-[15px]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-0">
        {collectionImages.map((item, i) => (
          <ScrollReveal key={item.src} delay={0.08 + i * 0.06}>
            <div className="relative h-[52vh] min-h-[320px] w-full md:h-[68vh] lg:h-[76vh]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
