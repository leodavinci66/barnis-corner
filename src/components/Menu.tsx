"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Kaffee",
    items: [
      { name: "Oat Milk Latte", price: "€5,50", desc: "Cremig, sanft, Hausröstung" },
      { name: "Flat White", price: "€4,75", desc: "Samtig-weicher Micro-Foam Espresso" },
      { name: "Cold Brew", price: "€5,25", desc: "12 Stunden gezogen, Schokoladennoten" },
    ],
  },
  {
    name: "Gebäck",
    items: [
      { name: "Mandel-Croissant", price: "€4,50", desc: "Doppelt gebacken, butterig-gut" },
      { name: "Zimtschnecke", price: "€4,25", desc: "Warme Gewürze, Frischkäse-Glasur" },
      { name: "Barni's Cookie", price: "€3,75", desc: "Miso, dunkle Schokolade, Meersalz" },
    ],
  },
  {
    name: "Snacks",
    items: [
      { name: "Avocado Smash", price: "€12,00", desc: "Sauerteig, Chiliflocken, Limette" },
      { name: "Açaí Bowl", price: "€11,50", desc: "Beeren, Granola, Honig" },
      { name: "Trüffel-Toastie", price: "€9,75", desc: "Sauerteig, Dreikäse-Mischung" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 px-6 md:px-8 bg-surface-low">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-secondary uppercase tracking-widest font-[family-name:var(--font-body)] mb-3">
            Speisekarte
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl sm:text-4xl text-on-surface">
            Unsere Highlights
          </h2>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xl mb-5 text-on-surface">
                {cat.name}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.06,
                      duration: 0.4,
                      ease: "easeOut" as const,
                    }}
                    className="flex items-start justify-between gap-4 bg-surface-container rounded-lg p-5 hover:bg-surface-high transition-colors"
                  >
                    <div>
                      <p className="font-medium text-on-surface">{item.name}</p>
                      <p className="text-sm text-on-surface-variant mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-[family-name:var(--font-heading)] font-semibold text-primary whitespace-nowrap">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-7 py-3 bg-primary hover:bg-primary-container text-on-primary font-medium rounded-full transition-colors text-sm"
          >
            Vollständige Speisekarte
          </a>
        </motion.div>
      </div>
    </section>
  );
}
