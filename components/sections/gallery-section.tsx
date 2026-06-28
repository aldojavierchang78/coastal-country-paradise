"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
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
  return (
    <section id="gallery" className="bg-ivory py-36 md:py-52 lg:py-72">
      <div className="mx-auto max-w-[92rem] px-7 sm:px-10 md:px-16 lg:px-24">
        <ScrollReveal>
          <p className="text-[9px] font-light uppercase tracking-[0.5em] text-champagne-dark">
            Gallery
          </p>
          <h2 className="mt-12 font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.06] tracking-tight text-deep-black">
            A Visual Journal of Residence
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-14 md:mt-16">
          <p className="max-w-lg text-[15px] font-light leading-[2.1] text-luxury-muted md:text-base">
            Light, landscape and the quiet rhythm of private life — captured
            without hurry.
          </p>
        </ScrollReveal>

        <div className="mt-28 grid grid-cols-1 gap-10 md:mt-40 md:grid-cols-12 md:gap-x-12 md:gap-y-0 lg:gap-x-16">
          {galleryItems.map((item, i) => (
            <ScrollReveal
              key={item.src}
              delay={0.08 + i * 0.06}
              className={`relative ${layoutClasses[item.layout]}`}
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
