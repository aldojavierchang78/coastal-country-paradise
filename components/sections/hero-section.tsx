"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, luxuryEase } from "@/lib/motion";
import { images } from "@/lib/images";

const KEN_BURNS_DURATION = 28;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative h-[100dvh] min-h-[640px] overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0" aria-hidden>
        <motion.div
          className="absolute inset-0 will-change-transform"
          initial={false}
          animate={
            prefersReducedMotion
              ? { scale: 1.04, x: "0%" }
              : { scale: [1.04, 1.12], x: ["-1.5%", "1.5%"] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: KEN_BURNS_DURATION,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "linear",
                }
          }
        >
          <Image
            src={images.hero}
            alt="Luxury mansion estate at golden hour"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[center_42%] contrast-[1.14] saturate-[1.06] brightness-[0.86]"
          />
        </motion.div>
      </div>

      {/* Premium dark overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-black/45"
        aria-hidden
      />

      {/* Left editorial gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"
        aria-hidden
      />

      {/* Top atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent"
        aria-hidden
      />

      {/* Bottom depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"
        aria-hidden
      />

      {/* Cinematic vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.52)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-7 pb-24 pt-40 sm:px-10 sm:pb-28 md:px-16 md:pb-32 lg:px-24 lg:pb-36">
        <div className="mx-auto w-full max-w-[92rem]">
          <motion.h1
            custom={2.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[16ch] font-serif text-[clamp(2.85rem,8.5vw,7.25rem)] font-light leading-[0.92] tracking-[-0.015em] text-white sm:max-w-none"
          >
            Where Luxury
            <br />
            <span className="italic text-champagne-light">
              Becomes Personal.
            </span>
          </motion.h1>

          <motion.p
            custom={2.68}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-inter mt-10 max-w-md text-[14px] font-light leading-[1.85] tracking-[0.02em] text-white/50 md:mt-12 md:text-[15px]"
          >
            Curated for private moments.
          </motion.p>

          <motion.div
            custom={2.86}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-14 flex flex-col gap-8 sm:mt-16 sm:flex-row sm:items-center sm:gap-12 md:mt-20 md:gap-16"
          >
            <a
              href="#book"
              className="font-inter inline-flex w-fit items-center justify-center border border-white/85 px-12 py-4 text-[9px] font-light uppercase tracking-[0.44em] text-white transition-all duration-700 hover:border-white hover:bg-white hover:text-deep-black"
            >
              Reserve Your Experience
            </a>
            <a
              href="#estate"
              className="font-inter text-[9px] font-light uppercase tracking-[0.44em] text-white/40 transition-colors duration-500 hover:text-white/75"
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
        transition={{ delay: 3.4, duration: 1.2, ease: luxuryEase }}
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-11"
        aria-label="Scroll to explore"
      >
        <span className="font-inter text-[8px] font-light uppercase tracking-[0.55em] text-white/35">
          Scroll
        </span>
        <motion.span
          animate={prefersReducedMotion ? { y: 0 } : { y: [0, 9, 0] }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
          }
          className="block h-14 w-px bg-gradient-to-b from-white/30 via-white/15 to-transparent"
        />
      </motion.a>
    </section>
  );
}
