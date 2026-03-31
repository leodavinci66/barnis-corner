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
      className="relative min-h-[85vh] flex items-center px-8 md:px-20 pt-20 overflow-hidden"
    >
      <div className="z-10 max-w-2xl">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
        >
          Est. 2026
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl text-on-surface font-bold leading-tight mb-6"
        >
          Barni&apos;s
          <br />
          Corner
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-on-surface/80 mb-8 max-w-lg leading-relaxed"
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
          className="flex flex-col gap-4 mb-10"
        >
          <div className="flex items-center gap-3 text-on-surface bg-surface-high self-start px-5 py-3 rounded-lg border border-outline/10">
            <span className="text-primary text-lg">&#9733;</span>
            <span className="font-semibold">Toller Ort zum Lernen</span>
          </div>
          <div className="flex items-center gap-3 text-on-primary bg-primary self-start px-5 py-3 rounded-lg">
            <span>&#127891;</span>
            <span className="font-bold">20% Studentenrabatt</span>
          </div>
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs text-primary font-bold uppercase tracking-[0.2em] mb-10 italic"
        >
          3 herzen, 1 vision; together we build our next chapter
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#visit"
            className="inline-flex items-center justify-center bg-primary text-on-primary px-10 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-colors"
          >
            Besuchen Sie uns
          </a>
        </motion.div>
      </div>

      {/* Hero image — right half */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block p-12">
        <div className="relative w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover rounded-lg shadow-2xl brightness-75 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB31UwszCWLASH0ColrFtQrye6zyYhH7Jgs_AZgA0XJ9YJ19SewBZHT4ndZWQlxtVyLYEyOWjvUCwPGCUWjfnY7gUxvjuaBXlVnzCT3tFCgC7TyWwEAbkO5DkLdPvJfb26__wHCiixkXv_8pglPODXW7UfG63G8eLG1Rk5CrreYxOFco6yHpHWWYXbx33n-ZNkzzzZbb4rlbsnyBh58O1oGS2lbCVEizkZn8hLb145QTkETD9Ai1k-lN3dBzuiT_EaSUquuA008L31J"
            alt="A cozy latte in a rustic ceramic mug on a weathered wooden table with warm morning sunlight"
          />
        </div>
      </div>
    </section>
  );
}
