"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { images } from "@/lib/images";

const experiencePillars = [
  {
    title: "Equestrian",
    lines: [
      "Private paddocks and portrait moments among the horses.",
      "The country rhythm, unhurried and entirely yours.",
    ],
  },
  {
    title: "Couture & Portrait",
    lines: [
      "Editorial photography and couture within the estate grounds.",
      "Each frame composed with the restraint of a fashion house.",
    ],
  },
  {
    title: "Private Gatherings",
    lines: [
      "Celebrations, retreats and evenings without ordinary.",
      "Every occasion held with discretion and grace.",
    ],
  },
] as const;

export function ExperiencesSection() {
  return (
    <section id="experiences" className="bg-warm-white">
      <div className="mx-auto max-w-[92rem] px-7 sm:px-10 md:px-16 lg:px-24">
        <div className="pt-36 pb-24 md:pt-52 md:pb-32 lg:pt-72 lg:pb-40">
          <ScrollReveal>
            <p className="text-[9px] font-light uppercase tracking-[0.5em] text-champagne-dark">
              Experiences
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="mt-12 max-w-[16ch] font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.06] tracking-tight text-deep-black lg:mt-14">
              Moments Composed With Intention
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-14 max-w-xl text-[15px] font-light leading-[2.1] text-luxury-muted md:mt-16 md:text-base lg:max-w-2xl">
              Beyond the estate and the collection — rare experiences arranged
              for those who value privacy, beauty and time well spent.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24} className="mt-20 md:mt-28">
            <div className="h-px w-12 bg-champagne/70" />
          </ScrollReveal>

          <div className="mt-24 grid gap-20 md:mt-32 md:grid-cols-3 md:gap-12 lg:mt-40 lg:gap-20">
            {experiencePillars.map((pillar, i) => (
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

      <ScrollReveal delay={0.1}>
        <div className="relative h-[58vh] min-h-[360px] w-full md:h-[72vh] lg:h-[80vh]">
          <Image
            src={images.lifestyle}
            alt="Private experience at the estate"
            fill
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
