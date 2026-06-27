"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, luxuryEase } from "@/lib/motion";
import { images } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <Image
        src={images.hero}
        alt="Luxury mansion estate at golden hour"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />

      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-24 md:px-16 md:pb-32 lg:px-24 lg:pb-36">
        <div className="mx-auto w-full max-w-[90rem]">
          <motion.p
            custom={2.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[10px] font-medium uppercase tracking-[0.55em] text-champagne-light"
          >
            Coastal & Country Paradise
          </motion.p>

          <motion.h1
            custom={2.75}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-5xl font-serif text-[clamp(2.75rem,8vw,7rem)] font-light leading-[0.95] tracking-tight text-white"
          >
            Where Luxury
            <br />
            <span className="italic text-champagne-light">Becomes Personal.</span>
          </motion.h1>

          <motion.p
            custom={2.9}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 max-w-xl text-base font-light leading-[1.85] text-white/70 md:mt-12 md:text-lg"
          >
            A private estate and curated lifestyle experience designed for
            unforgettable stays, celebrations and memories.
          </motion.p>

          <motion.div
            custom={3.05}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10 md:mt-16"
          >
            <a
              href="#book"
              className="inline-flex w-fit items-center justify-center border border-white bg-white px-12 py-4 text-[10px] font-medium uppercase tracking-[0.32em] text-deep-black transition-all duration-500 hover:bg-transparent hover:text-white"
            >
              Reserve Your Experience
            </a>
            <a
              href="#estate"
              className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/65 transition-colors duration-300 hover:text-champagne-light"
            >
              Explore the Estate
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 1, ease: luxuryEase }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4"
        aria-label="Scroll to explore"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-white/35">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-14 w-px bg-gradient-to-b from-champagne-light/60 to-transparent"
        />
      </motion.a>
    </section>
  );
}
