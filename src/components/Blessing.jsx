import { motion } from 'framer-motion'
import wedding from '../config/wedding'

export default function Blessing() {
  const { copy } = wedding

  return (
    <section id="blessing" className="section-pad relative z-10">
      <motion.div
        className="mx-auto max-w-2xl text-center px-4"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
      >
        <div className="glass-strong golden-border rounded-3xl px-8 py-12 sm:px-12 shadow-lg">
          <p className="text-accent text-2xl mb-4">❦</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-text leading-snug mb-6">
            {copy.blessingHeading}
          </h2>
          <div className="ornament-line mb-6">
            <span className="text-accent text-sm">✦</span>
          </div>
          <p className="font-heading text-xl sm:text-2xl italic text-text-soft leading-relaxed">
            {copy.blessingText}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
