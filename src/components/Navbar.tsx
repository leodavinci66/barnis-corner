"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Unsere Geschichte", href: "#about" },
  { label: "Speisekarte", href: "#menu" },
  { label: "Galerie", href: "#gallery" },
  { label: "Öffnungszeiten", href: "#visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline/20">
      <div className="w-full px-8 flex items-center justify-between h-16 md:h-20">
        <a
          href="#hero"
          className="font-[family-name:var(--font-heading)] font-bold text-2xl text-primary"
        >
          Barni&apos;s Corner
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium text-sm tracking-tight transition-colors duration-300 ${
                i === 0
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <span className="text-primary cursor-default">DE</span>
            <span className="opacity-40">/</span>
            <a className="text-on-surface/60 hover:text-primary transition-colors" href="#">
              EN
            </a>
          </div>
          <a
            href="#visit"
            className="bg-primary text-on-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Besuchen Sie uns
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menü öffnen"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-primary rounded-full"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-primary rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-primary rounded-full"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-8 py-5 gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-on-surface hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold text-center mt-2"
              >
                Besuchen Sie uns
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
