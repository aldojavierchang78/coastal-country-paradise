"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function IntroSection() {
  return (
    <section id="intro" className="bg-ivory py-32 md:py-48 lg:py-64">
      <div className="mx-auto max-w-[90rem] px-8 md:px-16 lg:px-24">
        <ScrollReveal>
          <h2 className="max-w-5xl font-serif text-[clamp(2.75rem,7vw,6rem)] font-light leading-[1.02] tracking-tight text-deep-black">
            Stay. Drive. Sail. Celebrate.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16 md:mt-20">
          <div className="h-px w-16 bg-champagne" />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16 md:mt-20">
          <p className="max-w-2xl text-base font-light leading-[2] text-luxury-muted md:text-lg">
            A private destination where coastal elegance meets country charm —
            created for luxury stays, photo sessions, private events and
            once-in-a-lifetime experiences.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
