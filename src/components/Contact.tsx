"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-8 bg-surface-low">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm text-secondary uppercase tracking-widest font-[family-name:var(--font-body)] mb-3">
            Schreiben Sie uns
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl text-on-surface">
            Wir freuen uns auf Sie
          </h2>
          <p className="text-on-surface-variant mt-3">
            Fragen, Catering oder einfach Hallo sagen — wir sind für Sie da.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 bg-surface-container rounded-xl p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1.5">
                Name
              </label>
              <input
                type="text"
                placeholder="Ihr Name"
                className="w-full bg-surface-highest rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-surface-tint/20 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1.5">
                E-Mail
              </label>
              <input
                type="email"
                placeholder="ihre@email.com"
                className="w-full bg-surface-highest rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-surface-tint/20 transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">
              Nachricht
            </label>
            <textarea
              rows={4}
              placeholder="Was möchten Sie uns mitteilen?"
              className="w-full bg-surface-highest rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-surface-tint/20 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-container text-on-primary font-medium rounded-full transition-colors text-sm"
          >
            Nachricht senden
          </button>
        </motion.form>
      </div>
    </section>
  );
}
