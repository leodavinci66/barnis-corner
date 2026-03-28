"use client";

import { motion } from "framer-motion";

const photos = [
  { label: "Latte Art", color: "from-primary-container/40 to-surface-tint/20" },
  { label: "Unsere Ecke", color: "from-surface-tint/30 to-surface-high" },
  { label: "Frisches Gebäck", color: "from-secondary/20 to-secondary-container/30" },
  { label: "Gemütliche Momente", color: "from-surface-dim to-surface-high" },
  { label: "Barni der Hund", color: "from-secondary-container/40 to-primary/10" },
  { label: "Kaffeebohnen", color: "from-primary/20 to-primary-container/30" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 px-6 md:px-8 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-secondary uppercase tracking-widest font-[family-name:var(--font-body)] mb-3">
            Galerie
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl text-on-surface">
            Momente im Barni&apos;s
          </h2>
          <p className="text-on-surface-variant mt-3 text-sm">
            Folgen Sie unserer täglichen Reise{" "}
            <span className="text-secondary font-medium">@barniscorner</span>
          </p>
        </motion.div>

        {/* Asymmetric masonry-ish grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-xl overflow-hidden cursor-pointer ${
                i === 0 || i === 5 ? "aspect-[4/5]" : "aspect-square"
              }`}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${photo.color} flex items-end p-4`}
              >
                <span className="text-xs font-medium text-on-surface-variant bg-surface/60 backdrop-blur-sm px-3 py-1.5 rounded-md">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
