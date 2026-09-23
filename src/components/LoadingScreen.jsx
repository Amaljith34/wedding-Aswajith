import { useRef } from 'react'
import { motion } from 'framer-motion'
import wedding from '../config/wedding'
import inviteCover from '../assets/images/invite-cover.jpg'

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
      className="loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden px-3 py-6 sm:px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.div
        className="invite-cover"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={inviteCover}
          alt={`${bride.firstName} and ${groom.firstName} wedding invitation`}
          draggable="false"
        />

        <div className="wax-seal-anchor">
          <motion.button
            type="button"
            onClick={handleClick}
            className="wax-seal"
            aria-label={copy.openInvitation}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="wax-seal-ring" aria-hidden="true" />
            <span className="wax-seal-ring wax-seal-ring-delay" aria-hidden="true" />
            <span ref={btnRef} className="wax-seal-hotspot" />
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  )
}
