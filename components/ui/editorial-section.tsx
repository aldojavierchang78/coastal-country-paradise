"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

type EditorialSectionProps = {
  id: string;
  eyebrow: string;
  headline: ReactNode;
  subline?: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  tone?: "ivory" | "warm-white" | "white";
};

const toneClasses = {
  ivory: "bg-ivory",
  "warm-white": "bg-warm-white",
  white: "bg-white",
};

export function EditorialSection({
  id,
  eyebrow,
  headline,
  subline,
  image,
  imageAlt,
  imagePosition = "left",
  tone = "warm-white",
}: EditorialSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const imageVariant = imagePosition === "left" ? slideInLeft : slideInRight;
  const textVariant = fadeUp;

  const imageBlock = (
    <motion.div
      custom={0}
      variants={imageVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative min-h-[65vh] lg:min-h-[100dvh]"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        quality={95}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </motion.div>
  );

  const textBlock = (
    <motion.div
      custom={0.15}
      variants={textVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col justify-center px-8 py-28 md:px-16 md:py-36 lg:min-h-[100dvh] lg:px-20 lg:py-48 xl:px-32"
    >
      <p className="text-[9px] font-light uppercase tracking-[0.5em] text-champagne-dark">
        {eyebrow}
      </p>

      <h2 className="mt-12 font-serif text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.04] tracking-tight text-deep-black">
        {headline}
      </h2>

      {subline && (
        <>
          <div className="mt-14 h-px w-12 bg-champagne/80" />
          <p className="mt-14 max-w-sm text-[15px] font-light leading-[2] text-luxury-muted md:text-base">
            {subline}
          </p>
        </>
      )}
    </motion.div>
  );

  return (
    <section id={id} ref={ref} className={toneClasses[tone]}>
      <div className="grid lg:grid-cols-2">
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
