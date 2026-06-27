"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, scaleIn } from "@/lib/motion";
import { images } from "@/lib/images";

const experiences = [
  "Couture Dresses",
  "Photography",
  "Private Celebrations",
  "Equestrian",
  "Exotic Birds",
  "Yacht & Boat",
];

export function LifestyleSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lifestyle" ref={ref} className="relative overflow-hidden">
      <motion.div
        custom={0}
        variants={scaleIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative min-h-[90vh] lg:min-h-[100dvh]"
      >
        <Image
          src={images.lifestyle}
          alt="Country lifestyle portrait at the estate"
          fill
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="absolute inset-0 z-10 flex items-end px-8 pb-24 md:px-16 md:pb-32 lg:px-24 lg:pb-40">
        <div className="mx-auto w-full max-w-[90rem]">
          <motion.p
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[10px] font-medium uppercase tracking-[0.45em] text-champagne-light"
          >
            Lifestyle & Memories
          </motion.p>

          <motion.h2
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.04] tracking-tight text-white"
          >
            Designed for the Moments
            <br />
            <span className="italic text-champagne-light">You Never Forget.</span>
          </motion.h2>

          <motion.p
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-10 max-w-2xl text-base font-light leading-[1.95] text-white/65 md:text-lg"
          >
            From couture dresses and professional photography to private
            celebrations, equestrian portraits, exotic bird encounters and yacht
            excursions — every experience is curated with the intimacy of a
            private retreat and the refinement of a world-class resort.
          </motion.p>

          <motion.ul
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4"
          >
            {experiences.map((item) => (
              <li
                key={item}
                className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
