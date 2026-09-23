import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import wedding from '../config/wedding'

export default function Gallery() {
  const { images } = wedding
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="section-pad relative z-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker mb-2">
            Memories
          </p>
          <h2 className="section-title text-4xl sm:text-5xl text-text">
            Gallery
          </h2>
          <div className="ornament-line mt-4">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.gallery.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              onClick={() => setActive(img)}
              className={`gallery-tile group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                img.featured
                  ? 'col-span-2 aspect-[16/10] md:col-span-2'
                  : 'aspect-square'
              }`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-text/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative max-h-[85vh] max-w-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute -right-2 -top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-text shadow-lg"
                aria-label="Close preview"
              >
                <FiX size={20} />
              </button>
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
