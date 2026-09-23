import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import wedding from '../config/wedding'

export default function Contact() {
  const { contact } = wedding

  return (
    <section id="contact" className="section-pad relative z-10">
      <div className="mx-auto max-w-md text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
            Get in Touch
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text mb-8">
            Contact
          </h2>
        </motion.div>

        <motion.div
          className="glass-strong golden-border rounded-3xl px-8 py-10 shadow-md"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-accent">
            <FiPhone size={20} />
          </div>
          <p className="font-heading text-2xl sm:text-3xl text-text tracking-wide mb-7">
            {contact.phone}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={contact.phoneHref}
              className="btn-glow inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3 text-xs tracking-[0.18em] uppercase font-medium transition-transform duration-300"
            >
              <FiPhone size={14} />
              Call
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3 text-xs tracking-[0.18em] uppercase font-medium transition-transform duration-300"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
