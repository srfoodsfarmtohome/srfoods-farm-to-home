"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageBanner({
  eyebrow,
  title,
  telugu,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  telugu?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-maroon py-20 md:py-28 text-cream">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(232,178,42,0.5), transparent 45%), radial-gradient(circle at 70% 70%, rgba(200,16,46,0.5), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 text-center md:px-8">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-turmeric"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display mt-3 text-5xl font-black md:text-7xl"
        >
          {title}
        </motion.h1>
        {telugu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-display mt-3 text-xl italic text-turmeric"
          >
            {telugu}
          </motion.div>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl text-cream/80"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
