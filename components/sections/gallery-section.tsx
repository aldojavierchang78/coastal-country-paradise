"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { galleryItems } from "@/lib/images";

const layoutClasses: Record<
  (typeof galleryItems)[number]["layout"],
  string
> = {
  hero: "col-span-1 md:col-span-12 min-h-[55vh] md:min-h-[75vh]",
  "tall-left": "col-span-1 md:col-span-5 md:col-start-1 min-h-[50vh] md:min-h-[85vh] md:mt-24",
  "wide-right":
    "col-span-1 md:col-span-6 md:col-start-7 min-h-[45vh] md:min-h-[55vh]",
  portrait:
    "col-span-1 md:col-span-4 md:col-start-2 min-h-[55vh] md:min-h-[70vh] md:mt-32",
  landscape:
    "col-span-1 md:col-span-7 md:col-start-6 min-h-[40vh] md:min-h-[55vh] md:mt-16",
};

export function GallerySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-60px" });

  return (
    <section id="gallery" className="bg-ivory py-36 md:py-52 lg:py-72">
      <div className="mx-auto max-w-[92rem] px-7 sm:px-10 md:px-16 lg:px-24">
        <motion.div
          ref={headerRef}
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="mb-28 md:mb-40"
        >
          <p className="text-[9px] font-light uppercase tracking-[0.5em] text-champagne-dark">
            Gallery
          </p>
          <h2 className="mt-10 font-serif text-[clamp(2.5rem,5vw,4.25rem)] font-light leading-[1.04] tracking-tight text-deep-black">
            A visual journal
          </h2>
        </motion.div>

        <motion.div
          ref={galleryRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isGalleryInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-12 md:gap-y-0 lg:gap-x-16"
        >
          {galleryItems.map((item, i) => (
            <motion.figure
              key={item.src}
              variants={fadeUp}
              custom={i * 0.06}
              className={`relative overflow-hidden ${layoutClasses[item.layout]}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={95}
                sizes={
                  item.layout === "hero"
                    ? "100vw"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                className="object-cover"
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
