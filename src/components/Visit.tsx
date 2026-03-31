"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Mo – Fr", time: "07:00 – 18:00" },
  { day: "Samstag", time: "08:00 – 19:00" },
  { day: "Sonntag", time: "08:00 – 16:00" },
];

export default function Visit() {
  return (
    <section id="visit" className="py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container rounded-lg overflow-hidden flex flex-col md:flex-row border border-outline/10"
        >
          {/* Info column */}
          <div className="p-12 md:w-1/2">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl text-on-surface font-bold mb-8">
              Besuchen Sie uns
            </h2>
            <div className="space-y-8">
              {/* Hours */}
              <div className="flex items-start gap-4">
                <span className="text-primary mt-1 text-xl">&#128339;</span>
                <div>
                  <p className="font-bold text-lg text-on-surface">
                    Öffnungszeiten
                  </p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-2">
                    {hours.map((h) => (
                      <span key={h.day} className="contents">
                        <span className="text-on-surface/60">{h.day}</span>
                        <span className="text-on-surface font-medium">
                          {h.time}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <span className="text-primary mt-1 text-xl">&#128205;</span>
                <div>
                  <p className="font-bold text-lg text-on-surface">
                    Unser Standort
                  </p>
                  <p className="text-on-surface/60 mt-1">
                    Herzog-Leopold-Strasse 2,
                    <br />
                    2700 Wiener Neustadt
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <span className="text-primary mt-1 text-xl">&#128241;</span>
                <div>
                  <p className="font-bold text-lg text-on-surface">Kontakt</p>
                  <p className="text-on-surface/60 mt-1">
                    +43 667 654 74399
                    <br />
                    hello@barniscorner.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map column */}
          <div className="md:w-1/2 min-h-[400px] bg-background relative">
            <div className="w-full h-full grayscale brightness-50 opacity-80 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIEDa8TbLYEn9LNJ-LC-O_wkLBZ5oz81jO_OIVN6aXurLd_I9EVeom2rQszk1mMab5DqBr8BO4GtTGtCFCcuNUUG9OvLnN7wgd4cIEPA4UAUS6jIBHr2PHvlQBMv1F2Zl426oWv5wMOwxJKcL0o9jQ9YQ0c32xGTCYtrY9n6HVh0Ir2aZhnL2Xqol3w_o_EJtmr7lv5_S0Vo2VKG8VvEWRN6JA7Zy0LTqVQ5TUVuYkJ8jgHIjANB6guIKh1LiJ8LmE-AlfI504zmRo"
                alt="Map of Wiener Neustadt neighborhood"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-on-primary p-4 rounded-full shadow-2xl animate-bounce">
                  <span className="text-3xl">&#128205;</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
