"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image — asymmetric offset */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-surface-container overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary-container/30 via-surface-tint/20 to-surface-high flex items-center justify-center">
                <span className="text-7xl opacity-60">&#9749;</span>
              </div>
            </div>
            {/* Offset accent card */}
            <div className="absolute -bottom-4 -right-4 md:-right-8 bg-surface-highest rounded-xl p-4 shadow-[0_20px_40px_rgba(71,57,49,0.08)]">
              <p className="text-xs text-on-surface-variant font-[family-name:var(--font-body)]">
                &#127807; Nachhaltige &amp; lokale Beschaffung
              </p>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-secondary uppercase tracking-widest font-[family-name:var(--font-body)] mb-3">
              Unsere Geschichte
            </p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl leading-snug text-on-surface">
              Gemeinschaft gestalten, Bohne für Bohne.
            </h2>
            <div className="mt-6 space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Barni&apos;s Corner begann als eine einfache Idee: ein Ort, an dem
                sich die Nachbarschaft treffen kann, um guten Kaffee zu genießen
                und echte Verbindungen zu knüpfen.
              </p>
              <p>
                Unsere Bohnen sind ethisch bezogen, unsere Gebäcke werden täglich
                frisch im Haus gebacken, und unser Name? Der stammt von Barni, dem
                Golden Retriever des Gründers — dem wahren Herz dieses Cafés.
              </p>
              <p>
                Ob du für eine Prüfung lernst, dich mit Freunden triffst oder
                einfach einen ruhigen Moment brauchst — bei uns bist du zu Hause.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
