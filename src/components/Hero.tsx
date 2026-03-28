"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-end md:items-center pt-14 bg-surface-container"
    >
      {/* Background image placeholder — warm cafe interior */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 via-surface-tint/20 to-surface/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-xl">
          {/* Est. label */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm text-on-surface-variant tracking-widest uppercase font-[family-name:var(--font-body)] mb-4"
          >
            Est. 2026
          </motion.p>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-[family-name:var(--font-heading)] font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.1] text-on-surface"
          >
            Barni&apos;s
            <br />
            Corner
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-on-surface-variant text-base sm:text-lg max-w-md leading-relaxed"
          >
            Ihre gemütliche Ecke in der Nachbarschaft. Wir brauen Momente der
            Ruhe in jeder Tasse.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center gap-2 bg-surface-high/80 backdrop-blur-sm text-on-surface-variant text-sm px-4 py-2.5 rounded-lg">
              <span className="text-secondary">&#9733;</span>
              Toller Ort zum Lernen
            </span>
            <span className="inline-flex items-center gap-2 bg-secondary-container text-primary font-semibold text-sm px-4 py-2.5 rounded-lg">
              <span>&#127891;</span>
              20% Studentenrabatt
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary hover:bg-primary-container text-on-primary font-medium rounded-full transition-colors text-sm"
            >
              Speisekarte entdecken
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
