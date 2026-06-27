"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Select your date",
    description: "Choose the dates for your private stay or celebration.",
  },
  {
    number: "02",
    title: "Choose your experiences",
    description:
      "Curate your itinerary — estate, fleet, lifestyle and beyond.",
  },
  {
    number: "03",
    title: "Send a private booking request",
    description:
      "Our concierge will respond personally to confirm availability.",
  },
];

export function BookingCtaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="book"
      ref={ref}
      className="bg-deep-black py-36 md:py-52 lg:py-64"
    >
      <div className="mx-auto max-w-[90rem] px-8 md:px-16 lg:px-24">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-[10px] font-medium uppercase tracking-[0.5em] text-champagne-light"
        >
          Concierge
        </motion.p>

        <motion.h2
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-10 max-w-3xl text-center font-serif text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.04] tracking-tight text-white"
        >
          Begin Your Private Experience.
        </motion.h2>

        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-12 h-px w-14 bg-champagne"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-24 grid max-w-4xl gap-16 md:grid-cols-3 md:gap-12"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="text-center md:text-left"
            >
              <span className="font-serif text-sm font-light tracking-widest text-champagne/70">
                {step.number}
              </span>
              <h3 className="mt-6 font-serif text-2xl font-light text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-[1.9] text-white/45">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-24 flex flex-col items-center"
        >
          <a
            href="mailto:coastalandcountryparadise@gmail.com?subject=Private%20Experience%20Inquiry"
            className="inline-flex min-w-[280px] items-center justify-center border border-champagne bg-champagne px-14 py-5 text-[10px] font-medium uppercase tracking-[0.32em] text-deep-black transition-all duration-500 hover:bg-transparent hover:text-champagne-light"
          >
            Request Availability
          </a>
          <p className="mt-10 text-[10px] font-light uppercase tracking-[0.3em] text-white/25">
            By appointment only · No payment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
