"use client";

import { Logo } from "@/components/ui/logo";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { luxuryEase } from "@/lib/motion";

type LuxuryLoaderProps = {
  onComplete: () => void;
};

export function LuxuryLoader({ onComplete }: LuxuryLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: luxuryEase }}
          >
            <Logo
              priority
              sizes="100px"
              className="h-auto w-[100px] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
