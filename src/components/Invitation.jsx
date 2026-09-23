import { motion } from 'framer-motion'
import wedding from '../config/wedding'

export default function Invitation() {
  const { images, copy } = wedding

  return (
    <section id="invitation" className="section-pad relative z-10">
      <div className="mx-auto max-w-lg">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
            Our Invitation
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text">
            You Are Invited
          </h2>
          <div className="ornament-line mt-4">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <motion.div
          className="group relative mx-auto"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="glass-strong relative overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(62,58,54,0.12)] golden-border p-3 sm:p-4 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={images.invitation}
              alt="Wedding invitation of Saranya and Akhilraj"
              className="w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-center font-heading italic text-text-soft text-lg">
            {copy.receptionNote}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
