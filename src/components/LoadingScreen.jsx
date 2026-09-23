import { useRef } from 'react'
import { motion } from 'framer-motion'
import wedding from '../config/wedding'
import FloatingLeaves from './FloatingLeaves'

function createRipple(e, container) {
  const rect = container.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = e.clientX - rect.left - size / 2
  const y = e.clientY - rect.top - size / 2
  const ripple = document.createElement('span')
  ripple.className = 'ripple'
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`
  container.appendChild(ripple)
  setTimeout(() => ripple.remove(), 600)
}

export default function LoadingScreen({ onOpen }) {
  const btnRef = useRef(null)
  const { bride, groom, copy } = wedding

  const handleClick = (e) => {
    if (btnRef.current) createRipple(e, btnRef.current)
    setTimeout(onOpen, 280)
  }

  return (
    <motion.section
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream px-6 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <FloatingLeaves count={8} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        <motion.div
          className="relative mb-8 flex h-40 w-40 items-center justify-center rounded-full sm:h-48 sm:w-48"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-full border border-accent/60" />
          <div className="absolute inset-[6px] rounded-full border border-accent/35" />
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: '0 0 40px rgba(196, 165, 116, 0.35)',
            }}
            animate={{
              boxShadow: [
                '0 0 28px rgba(196, 165, 116, 0.25)',
                '0 0 48px rgba(196, 165, 116, 0.45)',
                '0 0 28px rgba(196, 165, 116, 0.25)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="font-heading text-center leading-none text-primary">
            <span className="block text-5xl sm:text-6xl font-medium tracking-wide">
              {bride.initial}
            </span>
            <span className="block font-script text-3xl text-accent my-0.5">&</span>
            <span className="block text-5xl sm:text-6xl font-medium tracking-wide">
              {groom.initial}
            </span>
          </div>
        </motion.div>

        <motion.h2
          className="font-heading text-4xl sm:text-5xl text-text font-medium tracking-wide"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {bride.firstName}
        </motion.h2>
        <motion.p
          className="font-script text-4xl text-accent my-1 leading-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          &
        </motion.p>
        <motion.h2
          className="font-heading text-4xl sm:text-5xl text-text font-medium tracking-wide mb-3"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {groom.firstName}
        </motion.h2>

        <motion.p
          className="text-sm tracking-[0.25em] uppercase text-text-soft mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          {copy.loadingSubtitle}
        </motion.p>

        <motion.button
          ref={btnRef}
          type="button"
          onClick={handleClick}
          className="btn-glow relative rounded-full px-10 py-3.5 text-sm font-medium tracking-[0.18em] uppercase transition-transform duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          whileTap={{ scale: 0.96 }}
        >
          {copy.openInvitation}
        </motion.button>
      </div>
    </motion.section>
  )
}
