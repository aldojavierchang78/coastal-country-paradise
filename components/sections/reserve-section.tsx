"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ReserveSection() {
  return (
    <section id="reserve" className="bg-warm-white py-40 md:py-56 lg:py-72">
      <span id="book" className="sr-only" aria-hidden="true" />
      <div className="mx-auto max-w-2xl px-7 text-center sm:px-10 md:px-16">
        <ScrollReveal>
          <p className="text-[9px] font-light uppercase tracking-[0.5em] text-champagne-dark">
            Reserve
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-12 font-serif text-[clamp(2.25rem,5.5vw,4.25rem)] font-light leading-[1.06] tracking-tight text-deep-black">
            A Private Invitation
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-20 md:mt-24">
          <div className="mx-auto h-px w-12 bg-champagne/70" />
        </ScrollReveal>

        <ScrollReveal delay={0.28}>
          <p className="mx-auto mt-16 text-[15px] font-light leading-[2.1] text-luxury-muted md:mt-20 md:text-base">
            Share your preferred dates and intentions. Our team will respond
            with availability and a curated proposal.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.36} className="mt-20 md:mt-24">
          <a
            href="mailto:coastalandcountryparadise@gmail.com?subject=Private%20Estate%20Inquiry"
            className="text-[9px] font-light uppercase tracking-[0.4em] text-charcoal/55 transition-colors duration-700 hover:text-deep-black"
          >
            Inquire Privately
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
