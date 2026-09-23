import { motion } from 'framer-motion'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import wedding from '../config/wedding'

export default function FloatingButtons({ musicPlaying, onToggleMusic }) {
  const { contact } = wedding

  const buttons = [
    {
      id: 'music',
      label: musicPlaying ? 'Pause music' : 'Play music',
      icon: FaHeart,
      onClick: onToggleMusic,
      href: null,
      active: musicPlaying,
    },
    {
      id: 'map',
      label: 'Open location',
      icon: FiMapPin,
      href: '#map',
      onClick: null,
    },
    {
      id: 'call',
      label: 'Call now',
      icon: FiPhone,
      href: contact.phoneHref,
      onClick: null,
    },
  ]

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      {buttons.map((btn, i) => {
        const Icon = btn.icon
        const className = `flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          btn.active
            ? 'bg-primary text-cream'
            : 'bg-cream/90 text-primary border border-accent/40 backdrop-blur-md hover:bg-accent hover:text-cream'
        }`

        const content = (
          <motion.span
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 260 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className={className}
          >
            <Icon size={btn.id === 'music' ? 16 : 18} />
          </motion.span>
        )

        if (btn.href) {
          return (
            <a
              key={btn.id}
              href={btn.href}
              target={btn.href.startsWith('http') ? '_blank' : undefined}
              rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={btn.label}
              title={btn.label}
            >
              {content}
            </a>
          )
        }

        return (
          <button
            key={btn.id}
            type="button"
            onClick={btn.onClick}
            aria-label={btn.label}
            title={btn.label}
            className="p-0 border-0 bg-transparent"
          >
            {content}
          </button>
        )
      })}
    </div>
  )
}
