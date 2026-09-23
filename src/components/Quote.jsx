import { motion } from 'framer-motion'
import wedding from '../config/wedding'

export default function Quote() {
  const lines = wedding.copy.quote.split('\n')

  return (
    <section id="quote" className="section-pad relative z-10">
      <motion.div
        className="mx-auto max-w-xl px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-accent text-3xl mb-6">❝</p>
        {lines.map((line, i) => (
          <motion.p
            key={line}
            className="font-heading text-3xl sm:text-4xl text-text leading-relaxed"
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 * i }}
          >
            {line}
          </motion.p>
        ))}
        <div className="ornament-line mt-8">
          <span className="text-accent">✦</span>
        </div>
      </motion.div>
    </section>
  )
}
