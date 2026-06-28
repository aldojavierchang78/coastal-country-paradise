"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { images } from "@/lib/images";

const pillars = [
  {
    title: "Architecture",
    lines: [
      "Clean lines and generous volumes frame every arrival.",
      "Natural light moves through curated interiors with quiet intention.",
      "Each detail speaks of permanence, craft and calm.",
    ],
  },
  {
    title: "Privacy",
    lines: [
      "Gated grounds and discreet service ensure complete seclusion.",
      "Your party moves unseen through private corridors and gardens.",
      "An address reserved for those who arrive by intention.",
    ],
  },
  {
    title: "Waterfront",
    lines: [
      "Direct access to still waters and unhurried golden-hour horizons.",
      "Morning light on the dock, evenings without witness.",
      "The coast becomes your private gallery.",
    ],
  },
] as const;

export function EstateSection() {
  return (
    <section id="estate" className="bg-warm-white">
      <div className="mx-auto max-w-[92rem] px-7 sm:px-10 md:px-16 lg:px-24">
        <div className="pt-36 pb-24 md:pt-52 md:pb-32 lg:pt-72 lg:pb-40">
          <ScrollReveal>
            <p className="text-[9px] font-light uppercase tracking-[0.5em] text-champagne-dark">
              The Estate
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="mt-12 max-w-[16ch] font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.06] tracking-tight text-deep-black md:max-w-[20ch] lg:mt-14">
              An Estate Designed for Extraordinary Moments
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-14 max-w-xl text-[15px] font-light leading-[2.1] text-luxury-muted md:mt-16 md:text-base lg:max-w-2xl">
              A private waterfront residence where architecture, seclusion and
              the sea converge — composed for celebrations, retreats and days
              without schedule.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24} className="mt-20 md:mt-28">
            <div className="h-px w-12 bg-champagne/70" />
          </ScrollReveal>

          <div className="mt-24 grid gap-20 md:mt-32 md:grid-cols-3 md:gap-12 lg:mt-40 lg:gap-20">
            {pillars.map((pillar, i) => (
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
            src={images.mansion}
            alt="Aerial view of the private waterfront estate"
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
