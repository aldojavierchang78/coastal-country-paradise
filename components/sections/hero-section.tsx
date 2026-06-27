"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, luxuryEase } from "@/lib/motion";
import { images } from "@/lib/images";

const KEN_BURNS_DURATION = 25;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative h-[100dvh] min-h-[640px] overflow-hidden">
      {/* Ken Burns background */}
      <div className="absolute inset-0" aria-hidden>
        <motion.div
          className="absolute inset-0 will-change-transform"
          initial={false}
          animate={
            prefersReducedMotion
              ? { scale: 1.02, x: "0%" }
              : { scale: [1.02, 1.1], x: ["-1.25%", "1.25%"] }
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
            className="object-cover object-center contrast-[1.02] saturate-[1.03]"
          />
        </motion.div>
      </div>

      {/* Left gradient — text readability */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"
        aria-hidden
      />

      {/* Bottom depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        aria-hidden
      />

      {/* Edge vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.28)_100%)]"
        aria-hidden
      />

      {/* Soft warm light sweep */}
      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <motion.div
            className="absolute -inset-y-1/4 h-[150%] w-[45%] bg-gradient-to-r from-transparent via-[rgba(201,169,98,0.07)] to-transparent"
            animate={{ x: ["-60%", "160%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col justify-end px-7 pb-20 pt-36 sm:px-10 sm:pb-24 md:px-16 md:pb-28 lg:px-24 lg:pb-32">
        <div className="mx-auto w-full max-w-[92rem]">
          <motion.p
            custom={2.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[9px] font-light uppercase tracking-[0.55em] text-white/50"
          >
            Coastal & Country Paradise
          </motion.p>

          <motion.h1
            custom={2.55}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 max-w-[18ch] font-serif text-[clamp(2.5rem,7.5vw,6.5rem)] font-light leading-[0.96] tracking-[-0.01em] text-white sm:max-w-none sm:mt-12"
          >
            Where Luxury
            <br />
            <span className="italic text-champagne-light/90">
              Becomes Personal.
            </span>
          </motion.h1>

          <motion.p
            custom={2.7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 max-w-md text-[15px] font-light leading-[1.9] text-white/55 md:mt-14 md:text-base"
          >
            Curated for private moments.
          </motion.p>

          <motion.div
            custom={2.85}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-16 flex flex-col gap-8 sm:mt-20 sm:flex-row sm:items-center sm:gap-14"
          >
            <a
              href="#book"
              className="inline-flex w-fit items-center justify-center border border-white/80 px-11 py-3.5 text-[9px] font-light uppercase tracking-[0.36em] text-white transition-all duration-700 hover:bg-white hover:text-deep-black"
            >
              Reserve Your Experience
            </a>
            <a
              href="#estate"
              className="text-[9px] font-light uppercase tracking-[0.36em] text-white/45 transition-colors duration-500 hover:text-white/80"
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
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-10"
        aria-label="Scroll to explore"
      >
        <span className="text-[8px] font-light uppercase tracking-[0.5em] text-white/30">
          Scroll
        </span>
        <motion.span
          animate={prefersReducedMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
          className="block h-12 w-px bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.a>
    </section>
  );
}
