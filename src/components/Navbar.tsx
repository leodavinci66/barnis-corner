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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-14 md:h-16">
        <a
          href="#hero"
          className="font-[family-name:var(--font-heading)] font-semibold text-lg text-primary"
        >
          Barni&apos;s Corner
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-on-surface-variant hover:text-primary transition-colors font-[family-name:var(--font-body)]"
            >
              {link.label}
            </a>
          ))}
          <span className="text-xs text-outline font-medium tracking-wider">
            DE / EN
          </span>
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
            className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
