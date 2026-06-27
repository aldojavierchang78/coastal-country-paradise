"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { luxuryEase } from "@/lib/motion";
import { images } from "@/lib/images";

const navLinks = [
  { label: "Estate", href: "#estate" },
  { label: "Fleet", href: "#fleet" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Gallery", href: "#gallery" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setOnHero(y < window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const lightNav = onHero && !scrolled && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.4, ease: luxuryEase }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-6 pt-8 md:px-12 md:pt-10"
      >
        <nav className="pointer-events-auto mx-auto flex max-w-[90rem] items-center justify-between">
          <Link
            href="#"
            className="relative h-16 w-52 shrink-0 md:h-20 md:w-64 lg:h-24 lg:w-72"
          >
            <Image
              src={images.logo}
              alt="Coastal & Country Paradise"
              fill
              sizes="288px"
              quality={95}
              className={`object-contain object-left transition-all duration-700 ${
                lightNav
                  ? "drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]"
                  : "brightness-0"
              }`}
              priority
            />
          </Link>

          <ul className="hidden items-center gap-12 lg:flex xl:gap-16">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-[10px] font-medium uppercase tracking-[0.35em] transition-colors duration-500 ${
                    lightNav
                      ? "text-white/80 hover:text-white"
                      : "text-charcoal/70 hover:text-deep-black"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#book"
              className={`inline-flex px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.32em] transition-all duration-500 ${
                lightNav
                  ? "border border-white/35 text-white hover:border-champagne hover:text-champagne-light"
                  : "border border-deep-black text-deep-black hover:bg-deep-black hover:text-white"
              }`}
            >
              Reserve
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-[3.5px] rotate-45 bg-deep-black"
                  : lightNav
                    ? "bg-white"
                    : "bg-deep-black"
              }`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                mobileOpen
                  ? "-translate-y-[3.5px] -rotate-45 bg-deep-black"
                  : lightNav
                    ? "bg-white"
                    : "bg-deep-black"
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, ease: luxuryEase }}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-4xl font-light tracking-tight text-deep-black"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="mt-8 border border-deep-black px-14 py-4 text-[10px] font-medium uppercase tracking-[0.32em] text-deep-black"
              >
                Reserve
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
