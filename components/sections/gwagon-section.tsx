"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, slideInLeft } from "@/lib/motion";
import { images } from "@/lib/images";

export function GwagonSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gwagon" ref={ref} className="bg-ivory">
      <div className="grid lg:grid-cols-2">
        <motion.div
          custom={0}
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative min-h-[70vh] lg:min-h-[100dvh]"
        >
          <Image
            src={images.gwagon}
            alt="White Mercedes G-Wagon"
            fill
            quality={95}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col justify-center px-8 py-24 md:px-16 md:py-32 lg:min-h-[100dvh] lg:px-20 lg:py-40 xl:px-28"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-champagne-dark">
            Command the Road
          </p>

          <h2 className="mt-10 font-serif text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight text-deep-black">
            The G-Wagon.
            <br />
            <span className="italic text-champagne-dark">Unmistakable Power.</span>
          </h2>

          <div className="mt-12 h-px w-14 bg-champagne" />

          <p className="mt-12 max-w-md text-base font-light leading-[2] text-luxury-muted md:text-lg">
            The definitive statement of luxury utility. Bold, commanding and
            unmistakably refined — a pristine Mercedes-Benz G-Class against
            paradise.
          </p>

          <p className="mt-8 max-w-md text-sm font-light leading-[1.95] text-charcoal/55">
            Coastal and countryside locations with private chauffeured sessions
            — every detail orchestrated for effortless arrival and departure.
          </p>

          <a
            href="#book"
            className="group mt-16 inline-flex items-center gap-6 text-[10px] font-medium uppercase tracking-[0.32em] text-deep-black transition-colors duration-500 hover:text-champagne-dark"
          >
            Reserve the G-Wagon
            <span className="block h-px w-12 bg-deep-black/15 transition-all duration-700 ease-out group-hover:w-20 group-hover:bg-champagne" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
