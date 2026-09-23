import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import wedding from '../config/wedding'

export default function Map() {
  const { locations, copy } = wedding
  const cards = [locations.ceremony, locations.reception]

  return (
    <section id="map" className="section-pad relative z-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
            {copy.locationEyebrow}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-text font-medium">
            {copy.locationHeading}
          </h2>
          <div className="ornament-line mt-4">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((place, i) => (
            <motion.article
              key={place.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-ivory shadow-[0_18px_50px_rgba(44,36,32,0.08)] ring-1 ring-accent/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <div className="aspect-[16/10] w-full bg-[#EDE6D9]">
                <iframe
                  title={`Map of ${place.name}`}
                  src={place.embedUrl}
                  className="h-full w-full border-0 grayscale-[15%] contrast-[0.96] saturate-[0.85]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="px-6 pt-7 pb-8 text-center sm:px-8">
                <p className="text-[11px] tracking-[0.28em] uppercase text-text-soft mb-3">
                  {place.eyebrow}
                  <span className="mx-2 text-accent">·</span>
                  {place.time}
                </p>
                <h3 className="font-heading text-2xl sm:text-[1.7rem] text-text tracking-wide mb-2">
                  {place.name}
                </h3>
                {place.lines.map((line) => (
                  <p key={line} className="text-sm text-text-soft leading-relaxed">
                    {line}
                  </p>
                ))}
                <a
                  href={place.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-view-btn"
                >
                  View on Map
                  <FiExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
