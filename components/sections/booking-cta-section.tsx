"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/motion";

export function BookingCtaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="book"
      ref={ref}
      className="bg-deep-black py-40 md:py-56 lg:py-72"
    >
      <div className="mx-auto max-w-2xl px-7 text-center sm:px-10 md:px-16">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[9px] font-light uppercase tracking-[0.5em] text-champagne-light/80"
        >
          Private Concierge
        </motion.p>

        <motion.h2
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.06] tracking-tight text-white"
        >
          Begin Your Private Experience.
        </motion.h2>

        <motion.div
          custom={0.18}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-14 h-px w-12 bg-champagne/60"
        />

        <motion.p
          custom={0.25}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-14 text-[15px] font-light leading-[2.1] text-white/45 md:text-base"
        >
          Share your preferred date, occasion and experiences. Our team will
          respond with availability and a curated proposal.
        </motion.p>

        <motion.div
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <a
            href="mailto:coastalandcountryparadise@gmail.com?subject=Private%20Experience%20Inquiry"
            className="inline-flex items-center justify-center border border-champagne/80 px-14 py-4 text-[9px] font-light uppercase tracking-[0.36em] text-champagne-light transition-all duration-700 hover:bg-champagne hover:text-deep-black"
          >
            Request Availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
