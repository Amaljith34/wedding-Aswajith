import { motion } from 'framer-motion'
import wedding from '../config/wedding'

export default function Footer() {
  const { bride, groom, date, copy } = wedding

  return (
    <footer className="relative z-10 border-t border-accent/20 bg-[#F3EEE4]/90 px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm text-text-soft mb-2">{copy.footerLove}</p>
        <p className="font-heading text-3xl sm:text-4xl text-text mb-1 tracking-[0.04em]">
          {bride.firstName} <span className="font-script text-accent text-3xl">&</span> {groom.firstName}
        </p>
        <p className="section-kicker">
          {date.displayLong}
        </p>
        <div className="ornament-line mt-6">
          <span className="text-accent text-sm">✦</span>
        </div>
      </motion.div>
    </footer>
  )
}
