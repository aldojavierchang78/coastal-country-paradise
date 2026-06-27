"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { luxuryEase } from "@/lib/motion";

const navLinks = [
  { label: "Estate", href: "#estate" },
  { label: "Fleet", href: "#fleet" },
  { label: "Water", href: "#water" },
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
      setScrolled(y > 48);
      setOnHero(y < window.innerHeight * 0.75);
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 2.2, ease: luxuryEase }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-6 pt-7 md:px-14 md:pt-9 lg:px-20"
      >
        <nav className="pointer-events-auto mx-auto flex max-w-[92rem] items-center justify-between">
          <Link href="#" className="inline-flex shrink-0 bg-transparent">
            <Logo priority />
          </Link>

          <ul className="hidden items-center gap-14 lg:flex xl:gap-20">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-[9px] font-light uppercase tracking-[0.42em] transition-colors duration-700 ${
                    lightNav
                      ? "text-white/70 hover:text-white"
                      : "text-charcoal/55 hover:text-deep-black"
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
              className={`text-[9px] font-light uppercase tracking-[0.38em] transition-colors duration-700 ${
                lightNav
                  ? "text-white/60 hover:text-champagne-light"
                  : "text-charcoal/55 hover:text-deep-black"
              }`}
            >
              Concierge
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
              className={`block h-px w-5 transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-[3.5px] rotate-45 bg-deep-black"
                  : lightNav
                    ? "bg-white/80"
                    : "bg-deep-black"
              }`}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 ${
                mobileOpen
                  ? "-translate-y-[3.5px] -rotate-45 bg-deep-black"
                  : lightNav
                    ? "bg-white/80"
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
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-14">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, ease: luxuryEase }}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-3xl font-light tracking-tight text-deep-black"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#book"
                onClick={() => setMobileOpen(false)}
                className="mt-6 text-[9px] font-light uppercase tracking-[0.38em] text-luxury-muted"
              >
                Concierge
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
