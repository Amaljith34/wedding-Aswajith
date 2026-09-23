import { useRef } from 'react'
import { motion } from 'framer-motion'
import wedding from '../config/wedding'

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

function CornerOrnament({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M12 3c.35 3.1 2.7 5.45 5.8 5.8-3.1.35-5.45 2.7-5.8 5.8-.35-3.1-2.7-5.45-5.8-5.8 3.1-.35 5.45-2.7 5.8-5.8Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    </svg>
  )
}

function InviteOrnaments() {
  return (
    <svg
      viewBox="0 0 640 118"
      className="mx-auto w-full max-w-md"
      aria-hidden="true"
    >
      <g fill="none" stroke="#C4A574" strokeLinecap="round">
        <path d="M118 2v62" strokeWidth="0.7" />
        <path d="M104 2v18" strokeWidth="0.55" />
        <path d="M132 2v22" strokeWidth="0.55" />
        <path d="M522 2v62" strokeWidth="0.7" />
        <path d="M508 2v22" strokeWidth="0.55" />
        <path d="M536 2v18" strokeWidth="0.55" />
      </g>

      {[
        [118, 14],
        [118, 28],
        [118, 42],
        [118, 56],
        [104, 16],
        [132, 20],
        [522, 14],
        [522, 28],
        [522, 42],
        [522, 56],
        [508, 20],
        [536, 16],
      ].map(([cx, cy], i) => (
        <circle
          key={`pearl-${i}`}
          cx={cx}
          cy={cy}
          r={i % 5 === 0 ? 2.15 : 1.7}
          fill="#FBF7F0"
          stroke="#C4A574"
          strokeWidth="0.7"
        />
      ))}

      {[
        [104, 24, '#C9A08A'],
        [132, 30, '#C9A08A'],
        [508, 30, '#C9A08A'],
        [536, 24, '#C9A08A'],
      ].map(([cx, cy, fill], i) => (
        <circle key={`bead-${i}`} cx={cx} cy={cy} r="1.35" fill={fill} />
      ))}

      <g transform="translate(102 68)">
        <path
          d="M16 6c1.2-4.2 4.6-6.6 4.6-6.6S17.2 2.4 16 6Z"
          fill="#C4A574"
        />
        <path
          d="M4 14c2.4-4 6.4-6 12-6s9.6 2 12 6c-3 1.6-7.2 2.4-12 2.4S7 15.6 4 14Z"
          fill="#C4A574"
        />
        <ellipse cx="16" cy="15.4" rx="9" ry="2.1" fill="#A88858" />
      </g>
      <g transform="translate(506 68)">
        <path
          d="M16 6c1.2-4.2 4.6-6.6 4.6-6.6S17.2 2.4 16 6Z"
          fill="#C4A574"
        />
        <path
          d="M4 14c2.4-4 6.4-6 12-6s9.6 2 12 6c-3 1.6-7.2 2.4-12 2.4S7 15.6 4 14Z"
          fill="#C4A574"
        />
        <ellipse cx="16" cy="15.4" rx="9" ry="2.1" fill="#A88858" />
      </g>

      <g transform="translate(296 4)" fill="#C4A574">
        <path d="M24 6.5c.2-2.2 1.5-3.8 1.5-3.8S24.6 4.6 24 6.5Z" />
        <circle cx="24" cy="8.4" r="1.5" />
        <path d="M16 16.5h16l-2.2-5.2H18.2L16 16.5Z" />
        <rect x="18.4" y="16.5" width="11.2" height="8.2" />
        <path d="M14 26.2h20l-1.6-1.5H15.6L14 26.2Z" />
        <rect x="13" y="26.2" width="22" height="3.2" rx="0.4" />
        <rect x="10.5" y="29.4" width="27" height="2.6" rx="0.4" />
        <rect x="20.6" y="18.2" width="6.8" height="7.2" fill="#FBF7F0" />
        <path d="M20.6 18.2h6.8v7.2H20.6Z" fill="#FBF7F0" opacity="0.35" />
        <path
          d="M22 20.2h4v3.4h-4z"
          fill="#C4A574"
          opacity="0.55"
        />
      </g>
    </svg>
  )
}

function FlapMonogram({ brideInitial, groomInitial }) {
  return (
    <div className="flap-monogram" aria-hidden="true">
      <span className="flap-monogram-s font-heading">{brideInitial}</span>
      <span className="flap-monogram-ornament">✦</span>
      <span className="flap-monogram-a font-heading">{groomInitial}</span>
    </div>
  )
}

export default function LoadingScreen({ onOpen }) {
  const btnRef = useRef(null)
  const { bride, groom, copy, date } = wedding

  const handleClick = (e) => {
    if (btnRef.current) createRipple(e, btnRef.current)
    setTimeout(onOpen, 280)
  }

  return (
    <motion.section
      className="loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden px-4 py-8 sm:px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="invite-suite relative z-10 w-full">
        <motion.article
          className="invite-paper invite-card"
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <CornerOrnament className="invite-corner invite-corner-tl" />
          <CornerOrnament className="invite-corner invite-corner-tr" />
          <CornerOrnament className="invite-corner invite-corner-bl" />
          <CornerOrnament className="invite-corner invite-corner-br" />

          <InviteOrnaments />

          <p className="invite-mono font-heading">
            {bride.initial} & {groom.initial}
          </p>
          <h2 className="invite-names font-heading">
            {bride.firstName}
            <span className="invite-names-amp">&</span>
            {groom.firstName}
          </h2>
          <p className="invite-jewel" aria-hidden="true">
            ✦
          </p>
          <p className="invite-date">{date.displayUpper}</p>
        </motion.article>

        <motion.article
          className="invite-paper invite-envelope"
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <CornerOrnament className="invite-corner invite-corner-bl" />
          <CornerOrnament className="invite-corner invite-corner-br" />

          <svg
            className="envelope-flap"
            viewBox="0 0 800 210"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M28 30 L400 188 L772 30"
              fill="none"
              stroke="#4A2230"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <FlapMonogram
            brideInitial={bride.initial}
            groomInitial={groom.initial}
          />

          <motion.button
            type="button"
            onClick={handleClick}
            className="wax-seal"
            aria-label={copy.openInvitation}
            initial={{ scale: 0.72, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="wax-seal-ring" aria-hidden="true" />
            <span className="wax-seal-ring wax-seal-ring-delay" aria-hidden="true" />
            <span ref={btnRef} className="wax-seal-face">
              <span className="wax-seal-text font-heading">
                {bride.initial} & {groom.initial}
              </span>
            </span>
          </motion.button>
        </motion.article>
      </div>
    </motion.section>
  )
}
