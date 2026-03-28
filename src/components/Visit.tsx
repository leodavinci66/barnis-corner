"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Montag – Freitag", time: "07:00 – 18:00" },
  { day: "Samstag", time: "08:00 – 19:00" },
  { day: "Sonntag", time: "08:00 – 16:00" },
];

export default function Visit() {
  return (
    <section id="visit" className="py-20 md:py-28 px-6 md:px-8 bg-surface-container">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-secondary uppercase tracking-widest font-[family-name:var(--font-body)] mb-3">
            Kontakt
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl text-on-surface">
            Besuchen Sie uns
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface rounded-xl p-6 md:p-8"
          >
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-5 text-on-surface">
              Öffnungszeiten
            </h3>
            <div className="space-y-4">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">{h.day}</span>
                  <span className="font-medium text-on-surface">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface rounded-xl p-6 md:p-8"
          >
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-5 text-on-surface">
              Standort
            </h3>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <p>
                Herzog-Leopold-Straße 2
                <br />
                2700 Wiener Neustadt
              </p>
              <p>In der Nähe des Hauptbahnhofs</p>
            </div>
            {/* Map placeholder */}
            <div className="mt-5 aspect-[4/3] rounded-lg bg-surface-high flex items-center justify-center text-on-surface-variant text-xs">
              Karte
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface rounded-xl p-6 md:p-8"
          >
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-5 text-on-surface">
              Kontakt
            </h3>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+4366765474399"
                className="block text-on-surface-variant hover:text-primary transition-colors"
              >
                +43 667 654 74399
              </a>
              <a
                href="mailto:hello@barniscorner.com"
                className="block text-on-surface-variant hover:text-primary transition-colors"
              >
                hello@barniscorner.com
              </a>
              <a
                href="#"
                className="block text-secondary font-medium hover:text-primary transition-colors"
              >
                @barniscorner
              </a>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-secondary-container text-primary font-medium rounded-full transition-colors text-sm hover:bg-secondary/20"
              >
                Nachricht senden
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
