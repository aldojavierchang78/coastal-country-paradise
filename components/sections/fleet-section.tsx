"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, scaleIn } from "@/lib/motion";
import { images } from "@/lib/images";

export function FleetSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="fleet" ref={ref} className="relative min-h-[85vh] overflow-hidden lg:min-h-[100dvh]">
      <motion.div
        custom={0}
        variants={scaleIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute inset-0"
      >
        <Image
          src={images.fleet}
          alt="Corvette and G-Wagon at the estate"
          fill
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex min-h-[85vh] items-end px-8 pb-24 md:px-16 md:pb-32 lg:min-h-[100dvh] lg:px-24 lg:pb-40">
        <div className="mx-auto w-full max-w-[90rem]">
          <motion.p
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[10px] font-medium uppercase tracking-[0.45em] text-champagne-light"
          >
            The Fleet
          </motion.p>

          <motion.h2
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-8 max-w-3xl font-serif text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.98] tracking-tight text-white"
          >
            Arrive in Style.
          </motion.h2>

          <motion.p
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-10 max-w-lg text-base font-light leading-[1.9] text-white/70 md:text-lg"
          >
            From the Corvette to the Mercedes G-Wagon, every arrival becomes
            part of the experience.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
