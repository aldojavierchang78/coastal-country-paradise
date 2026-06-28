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
  { label: "Concierge", href: "#book" },
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

  const linkClass = (label: string) =>
    `font-inter text-[9px] font-light uppercase tracking-[0.48em] transition-colors duration-700 ${
      label === "Concierge"
        ? lightNav
          ? "text-white/55 hover:text-champagne-light"
          : "text-charcoal/50 hover:text-deep-black"
        : lightNav
          ? "text-white/65 hover:text-white"
          : "text-charcoal/55 hover:text-deep-black"
    }`;

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 2.2, ease: luxuryEase }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-6 pt-6 md:px-14 md:pt-8 lg:px-20"
      >
        <nav className="pointer-events-auto mx-auto grid max-w-[92rem] grid-cols-[1fr_auto] items-start gap-x-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-10">
          <div className="flex flex-col items-start gap-2 md:gap-2.5">
            <Link href="#" className="inline-flex shrink-0">
              <Logo priority />
            </Link>
            <p
              className={`font-inter text-[7px] font-light uppercase tracking-[0.58em] transition-colors duration-700 md:text-[8px] md:tracking-[0.62em] ${
                lightNav ? "text-white/40" : "text-luxury-muted"
              }`}
            >
              Coastal & Country Paradise
            </p>
          </div>

          <ul className="hidden items-center gap-10 pt-3 lg:flex xl:gap-14 xl:pt-3.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass(link.label)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-end lg:col-start-3">
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
          </div>
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
