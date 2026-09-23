import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import wedding from '../config/wedding'

const cards = [
  {
    icon: FiCalendar,
    title: 'Date',
    lines: () => [wedding.date.weekday, wedding.date.displayLong],
  },
  {
    icon: FiClock,
    title: 'Wedding',
    lines: () => [wedding.date.muhurtham, wedding.locations.ceremony.name],
  },
  {
    icon: FiMapPin,
    title: 'Reception',
    lines: () => [
      wedding.date.receptionTime,
      wedding.locations.reception.name,
    ],
  },
]

export default function Details() {
  return (
    <section id="details" className="section-pad relative z-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker mb-2">
            The Celebration
          </p>
          <h2 className="section-title text-4xl sm:text-5xl text-text">
            Event Details
          </h2>
          <div className="ornament-line mt-4">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            const lines = card.lines()
            return (
              <motion.article
                key={card.title}
                className="glass-strong golden-border lift-card rounded-2xl px-6 py-8 text-center shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading text-2xl text-text mb-3">
                  {card.title}
                </h3>
                {lines.map((line) => (
                  <p key={line} className="text-sm text-text-soft leading-relaxed">
                    {line}
                  </p>
                ))}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
