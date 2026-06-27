"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { galleryItems } from "@/lib/images";

const aspectClasses = {
  tall: "aspect-[3/4] md:aspect-[4/5]",
  wide: "aspect-[16/10] md:aspect-[16/9]",
  square: "aspect-square",
};

export function GallerySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-60px" });

  return (
    <section id="gallery" className="bg-warm-white py-32 md:py-48 lg:py-64">
      <div className="mx-auto max-w-[90rem] px-8 md:px-16 lg:px-24">
        <motion.div
          ref={headerRef}
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="mb-24 md:mb-32"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-champagne-dark">
            Visual Archive
          </p>
          <h2 className="mt-8 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.04] tracking-tight text-deep-black">
            Editorial Gallery
          </h2>
          <div className="mt-10 h-px w-14 bg-champagne" />
        </motion.div>

        <motion.div
          ref={galleryRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isGalleryInView ? "visible" : "hidden"}
          className="columns-1 gap-8 space-y-8 md:columns-2 md:gap-12 md:space-y-12 lg:columns-3 lg:gap-16 lg:space-y-16"
        >
          {galleryItems.map((item, i) => (
            <motion.figure
              key={item.src}
              variants={fadeUp}
              custom={i * 0.05}
              className={`break-inside-avoid ${i % 3 === 1 ? "md:mt-16 lg:mt-24" : ""} ${i % 3 === 2 ? "lg:mt-8" : ""}`}
            >
              <div
                className={`relative overflow-hidden ${aspectClasses[item.aspect]}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={92}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5 text-[10px] font-light uppercase tracking-[0.25em] text-luxury-muted">
                {item.alt}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
