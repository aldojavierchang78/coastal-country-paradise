"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const phrases = [
  "The Estate.",
  "The Collection.",
  "Experiences.",
];

export function IntroSection() {
  return (
    <section id="intro" className="bg-ivory py-36 md:py-52 lg:py-72">
      <div className="mx-auto max-w-[92rem] px-7 sm:px-10 md:px-16 lg:px-24">
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {phrases.map((phrase, i) => (
            <ScrollReveal key={phrase} delay={i * 0.08}>
              <p className="font-serif text-[clamp(2rem,5.5vw,4.25rem)] font-light leading-[1.08] tracking-tight text-deep-black">
                {phrase}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-20 md:mt-28">
          <div className="h-px w-12 bg-champagne/70" />
        </ScrollReveal>

        <ScrollReveal delay={0.45} className="mt-16 md:mt-20">
          <p className="max-w-lg text-[15px] font-light leading-[2.1] text-luxury-muted md:text-base">
            A private waterfront estate — reserved for those who arrive by
            intention, not invitation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
