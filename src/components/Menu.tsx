"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Kaffee",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-EJoqU5mvPXe5sOZNJrHDnZnBPVtkzKTjGNa7WXTUcOt12LsnawjdgHL0Y_2HT42Ad9Arh_QOMcgyqCAKX36WQvAC07EFXjxkD9FDiUyoi4NmZdThmqAUJMFceC1b0QXX5HSYZGy-vSXy-P53pv39pheBuJ6sJCCeq0eWaVYVzXTe7nnEmBF7KYWJAZbLfz07vOXmCx5T29mvo-wp8t4oBEYYmGdruDFYPu_N2_6Yza-06q1gjvHjRjrRl4ieUQtt-eY0tLsAZxrV",
    imageAlt: "Latte art in a ceramic cup on a marble surface",
    featured: false,
    items: [
      { name: "Oat Milk Latte", price: "€5,50", desc: "Cremig, sanft, Hausröstung" },
      { name: "Flat White", price: "€4,75", desc: "Samtig-weicher Micro-Foam Espresso" },
      { name: "Cold Brew", price: "€5,25", desc: "12 Stunden gezogen, Schokoladennoten" },
    ],
  },
  {
    name: "Gebäck",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIKEQ0WNZMVcHFtA2gcu1uxSxdDNJd0PeaDVV5K21pF6M0A5SC1-iTVXTA1xRwvEO93Ux7r7qwMsxWPyeeI_S7Xunw7pk1wQPVwkuxZXbCFSlEmX9LYDBf2HLOAxuz1b6-eC4EiCsUmodWAdJNOQgfLOmLZKMEqWJ-fEgN8GQiGakfmhnBIK9kolyVMaOswM4tGqsr7_ohntE2d7RPr_PJxWAlRz73WVa7FUiMYxrXoHPFdsL_gzimi6p5eLqthZGSLdVc3rDMtWAK",
    imageAlt: "Golden flaky croissants on a rustic cooling rack",
    featured: true,
    items: [
      { name: "Mandel-Croissant", price: "€4,50", desc: "Doppelt gebacken, butterig-gut" },
      { name: "Zimtschnecke", price: "€4,25", desc: "Warme Gewürze, Frischkäse-Glasur" },
      { name: "Barni's Cookie", price: "€3,75", desc: "Miso, dunkle Schokolade, Meersalz" },
    ],
  },
  {
    name: "Snacks",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeGySQDi1hMqsacVKFuEbVpYqGNiF4xgwi837LFpmopwFAmdEgyKK51roLBdSwvQbiNLSycNkTsV4v199oMtPbCPLSqSs1u16pVOCU8ZNQGo98jjEyL3RyVp4q3FrWYK3PpSnWMNKTpNVujW7O4h7JsCwHKeXHLaWVXZoPlO79bLO8uxCsdKotcyzz8mbaUy7i-O7YHgq09Y6bGxD6QPVOsFnToR_LGKE79Xmd3H0LjnD2tHTjldxVZSk0PGWwcAgPUeeVGXpRKD47",
    imageAlt: "Avocado toast topped with poached egg and red pepper flakes",
    featured: false,
    items: [
      { name: "Avocado Smash", price: "€12,00", desc: "Sauerteig, Chiliflocken, Limette" },
      { name: "Açaí Bowl", price: "€11,50", desc: "Beeren, Granola, Honig" },
      { name: "Trüffel-Toastie", price: "€9,75", desc: "Sauerteig, Dreikäse-Mischung" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-on-surface font-bold mb-4">
            Unsere Highlights
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className={`bg-surface-container p-8 rounded-lg group border border-outline/10 ${
                cat.featured
                  ? "scale-105 shadow-xl ring-1 ring-primary/20"
                  : ""
              }`}
            >
              <div className="h-48 overflow-hidden rounded-lg mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90"
                  src={cat.image}
                  alt={cat.imageAlt}
                />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-primary font-bold mb-6">
                {cat.name}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`flex justify-between items-end ${
                      i < cat.items.length - 1
                        ? "border-b border-outline/10 pb-2"
                        : ""
                    }`}
                  >
                    <div>
                      <p className="font-bold text-on-surface">{item.name}</p>
                      <p className="text-xs text-on-surface/50 italic">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-bold text-primary">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center border-2 border-primary text-primary px-12 py-4 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all uppercase tracking-widest text-sm"
          >
            Vollständige Speisekarte
          </a>
        </motion.div>
      </div>
    </section>
  );
}
