"use client";

import { motion } from "framer-motion";

const photos = [
  {
    label: "Unsere Ecke",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEbGk5lZmlHOO5WZDinJZLJBKVhwENLs_30KCW71jRoL_bBmVrM7tIRbqoe_MeCKYXCl1Y2JnWckoCc8nOq_nj5_y5z63CRwA3n6o-DQMjDBS7OCVt64uv1vSwuF88P2xZpudOmc45QjXWEDpLM3mw3lp1oiQ3p0SQgT_p3nXlcBCiZgVgza1Gp1WkdXcl2y-R5WYWzEtFiTex7pruGvPrGkmtt5A2BbZlUNFzLEBNZOaL8fxlDvVvhZ9ArjTxBZwDVBj0ir-4QfdE",
    alt: "Stylish minimalist cafe interior with people chatting and working",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Espresso",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqjjUD1cJtUgwPB5o6gOeK3GjkTTloL8TYTGMqVG3AzrYwSrxYQKi8UBUSVmbyMkeNYVdx7zZQly0KBoeQLA8KNcly3kgaZRHlInXMXMmpnTPL6tx9D5Npn8JwvZ6nubn3mkF5qNv-Z50tB60-FEGdPXrrR_Zv65KYckmtAECVh4aZuTlJOaTj_CW911FhGl2rzaYRRXPMSrAQJOFD0vc90UvT_B_GxHwDcHb_PkrOwNJNHAYZO5lsCvrVDJZCH9k_YYpRaZL0g5VT",
    alt: "Espresso machine pouring rich dark coffee into a white cup",
    span: "",
  },
  {
    label: "Gemütliche Momente",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa44mTq7LBNpBBpx8xxiQlwE1e0Xcx7RXEdQDjNVxlDPFcVSIP6wcPzB8umYyxoetYEX_rNvaYZkY7k1qHbzaKpYpzYgoO14yeFcfnXVVIKiCKveMRPAnAT8QWTu4OgA-91isTaOKQePokCZnXYQDJOSPXxw58TGQGCibhbtm5yr62bSaTZcXbsaxJjhq9r9-gKMawtWRmpeLPDzjRz_NTODOTKWc3q_IiibVzzCPMJNoZyS9PDKNbg1Ei7joUcfcEacjzepwzm16V",
    alt: "Coffee cup and open book on a wooden table with sunlight",
    span: "",
  },
  {
    label: "Draußen genießen",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC910UNHpHT72bdARvu7nKearhpoY7feZ_GU6Bz7iLw2lMrOn1FIJWoBcX4FMa62Mv5YTAXGhSLOkFzYurdeusAtZdbDLuz7iGElZyTGNVVJvR6IT5jiaSOZp_fZ-2zu4xKtrPwm3crwt0ARXMXlh8iCUfGBxV5i_FF9d0fMt8-sKT9-wSTVCf1CH-nr3akF5XRNFcPcrjpie0WMRerFNBSFu0VXM2DmxaWMbhkgrURo4WOIGsepQf3wrmTNMH0heSyTA0HenYmck8M",
    alt: "Outdoor cafe seating on a charming cobblestone street",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 md:px-20 bg-surface-highest/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-on-surface mb-2">
            Momente im Barni&apos;s
          </h2>
          <p className="text-primary italic text-sm tracking-wide">
            Folgen Sie unserer täglichen Reise @barniscorner
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[700px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`rounded-lg overflow-hidden relative group border border-outline/10 ${photo.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                src={photo.src}
                alt={photo.alt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
