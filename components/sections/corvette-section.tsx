"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, slideInRight } from "@/lib/motion";
import { images } from "@/lib/images";

export function CorvetteSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="corvette" ref={ref} className="bg-deep-black">
      <div className="grid lg:grid-cols-2">
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="order-2 flex flex-col justify-center px-8 py-24 md:px-16 md:py-32 lg:order-1 lg:min-h-[100dvh] lg:px-20 lg:py-40 xl:px-28"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-champagne-light">
            Drive Extraordinary
          </p>

          <h2 className="mt-10 font-serif text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight text-white">
            The Corvette.
            <br />
            <span className="italic text-champagne-light">Pure Performance.</span>
          </h2>

          <div className="mt-12 h-px w-14 bg-champagne" />

          <p className="mt-12 max-w-md text-base font-light leading-[2] text-white/60 md:text-lg">
            Iconic American engineering captured at golden hour. A striking
            silhouette against coastal light — sculpted for moments that demand
            presence and precision.
          </p>

          <p className="mt-8 max-w-md text-sm font-light leading-[1.95] text-white/40">
            Private sessions with chauffeured delivery, sunset backdrops and
            white-glove coordination throughout your stay.
          </p>

          <a
            href="#book"
            className="group mt-16 inline-flex items-center gap-6 text-[10px] font-medium uppercase tracking-[0.32em] text-white/80 transition-colors duration-500 hover:text-champagne-light"
          >
            Reserve the Corvette
            <span className="block h-px w-12 bg-white/20 transition-all duration-700 ease-out group-hover:w-20 group-hover:bg-champagne-light" />
          </a>
        </motion.div>

        <motion.div
          custom={0}
          variants={slideInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative order-1 min-h-[70vh] lg:order-2 lg:min-h-[100dvh]"
        >
          <Image
            src={images.corvette}
            alt="Red Corvette luxury experience"
            fill
            quality={95}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black/20 via-transparent to-transparent lg:bg-gradient-to-l lg:from-deep-black/30" />
        </motion.div>
      </div>
    </section>
  );
}
