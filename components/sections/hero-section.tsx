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
      {/* Background */}
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
            className="object-cover object-[center_42%] contrast-[1.12] saturate-[1.06] brightness-[1.02]"
          />
        </motion.div>
      </div>

      {/* Premium overlay — restrained, not too dark */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,.26), rgba(0,0,0,.36))",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-28 pt-44 sm:px-11 sm:pb-32 md:px-16 md:pb-36 lg:px-24 lg:pb-[12.5rem]">
        <div className="mx-auto w-full max-w-[92rem]">
          <motion.h1
            custom={2.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[16ch] font-serif font-light text-white sm:max-w-none"
          >
            <span className="block text-[clamp(2.62rem,7.82vw,6.67rem)] leading-[1.08] tracking-[0.018em]">
              Where Luxury
            </span>
            <span className="mt-1 block text-[clamp(2.85rem,8.5vw,7.25rem)] leading-[1.1] tracking-[0.022em] italic text-[#CFAE63]">
              Becomes Personal.
            </span>
          </motion.h1>

          <motion.p
            custom={2.68}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-inter mt-12 max-w-md text-[14px] font-light leading-[1.9] tracking-[0.03em] text-white/48 md:mt-14 md:text-[15px]"
          >
            Curated for private moments.
          </motion.p>

          <motion.div
            custom={2.86}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-16 flex flex-col gap-10 sm:mt-[4.5rem] sm:flex-row sm:items-center sm:gap-14 md:mt-20 md:gap-[4.5rem]"
          >
            <a href="#book" className="hero-btn-reserve">
              Reserve Your Experience
            </a>
            <a href="#estate" className="hero-link-explore">
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
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4 md:bottom-12"
        aria-label="Scroll to explore"
      >
        <span className="font-inter text-[8px] font-light uppercase tracking-[0.55em] text-white/32">
          Scroll
        </span>
        <motion.span
          animate={
            prefersReducedMotion
              ? { opacity: 0.4 }
              : { opacity: [0.2, 0.65, 0.2], y: [0, 10, 0] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
          }
          className="block h-16 w-px origin-top bg-gradient-to-b from-white/35 via-white/18 to-transparent"
        />
      </motion.a>
    </section>
  );
}
