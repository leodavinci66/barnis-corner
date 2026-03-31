"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-20 bg-surface-high">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image with accent card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="w-full h-[500px] rounded-lg overflow-hidden border border-outline/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7sSpm6TfESTuu3rD7IDdZ_nLTad07hqiCFjt4tJXk9PqRaeRVPOhfRn2o_yEjpseB89W3Kuxe_aSErbT6mu0SphMH7_oCAiEFwS8G7zPHKVxk4jIay92IxoOjPA2XvXDYXcRvCJdG_e0nZOXzZm1-AQqqDqNz0G3roVtZq0z4IATrPRVMXtLGL1IqDsy7WGr7nkYfjCtJvSU7nLVkn7nIGFcKkAxBNjMGv88tYhvtQmqQStB9eVE231-VZshuSHj9thZleIW1XII-"
              alt="Artisan coffee brewing process with steam rising and vintage equipment"
            />
          </div>
          {/* Rotated accent card */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center text-on-primary text-center p-4 rotate-6 shadow-xl">
            <span className="font-bold text-sm">Made with love</span>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-on-surface font-bold mb-8">
            Gemeinschaft gestalten, Bohne für Bohne.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-on-surface/70">
            <p>
              Barni&apos;s Corner begann als einfacher Traum: ein Ort, an dem
              der Duft von frischem Mahlgut und warmem Zimt als Zufluchtsort vor
              dem Trubel der Stadt dienen kann. Wir glauben, dass ein Café mehr
              ist als nur ein Ort für Koffein — es ist das Herz des Viertels.
            </p>
            <p>
              Jeder Sack Bohnen, den wir beziehen, ist ethisch gehandelt, und
              jedes Gebäck wird in unserer eigenen kleinen Küche gebacken, bevor
              die Sonne voll aufgeht. Wir haben es nach Barni benannt, dem
              Golden Retriever unseres Gründers, der uns gelehrt hat, dass ein
              herzliches Willkommen und ein wedelnder Schwanz der beste Start in
              den Tag sind.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4 text-primary">
            <span className="text-4xl">&#127807;</span>
            <span className="font-bold tracking-wide uppercase text-sm">
              Nachhaltige &amp; lokale Beschaffung
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
