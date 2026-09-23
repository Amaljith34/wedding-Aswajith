import { useEffect, useRef } from 'react'
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

function CornerFlourish({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="none" stroke="#C4A574" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 42c1-14 8-25 24-32" strokeWidth="1.1" />
        <path d="M8 30c6-3 14-5 22-4" strokeWidth="0.8" />
        <path d="M18 42c2-8 8-14 18-16" strokeWidth="0.8" />
        <path d="M28 8c3 1.2 6 4 7 8" strokeWidth="0.7" />
      </g>
      <path
        d="M30 6c.4 2.6 2.2 4.6 4.8 5.2-2.6.6-4.4 2.6-4.8 5.2-.4-2.6-2.2-4.6-4.8-5.2 2.6-.6 4.4-2.6 4.8-5.2Z"
        fill="#C4A574"
      />
    </svg>
  )
}

function TempleMotif() {
  return (
    <svg className="front-temple" viewBox="0 0 86 72" aria-hidden="true">
      <g fill="#C4A574">
        <path d="M42.2 2.2c.15-1.6 1.15-2.8 1.15-2.8s-.85 1.3-1.15 2.8Z" />
        <circle cx="43" cy="6.2" r="2.1" />
        <path d="M31 16.8h24l-3.2-7.6H34.2L31 16.8Z" />
        <rect x="34.6" y="16.8" width="16.8" height="12.2" />
        <path d="M28.2 31.2h29.6l-2.3-2.2H30.5l-2.3 2.2Z" />
        <rect x="26.6" y="31.2" width="32.8" height="4.4" rx="0.5" />
        <rect x="22.8" y="35.6" width="40.4" height="3.6" rx="0.5" />
        <rect x="38.2" y="19.4" width="9.6" height="8.4" fill="#FBF6EE" />
        <path d="M40.2 21.6h5.6v3.8h-5.6z" opacity="0.45" />
        <path d="M14 46.2 43 39l29 7.2-3.2 3.4H17.2L14 46.2Z" />
        <rect x="16.4" y="49.4" width="53.2" height="3.2" rx="0.4" />
        <rect x="12.8" y="52.6" width="60.4" height="2.8" rx="0.4" />
        <rect x="8.6" y="55.4" width="68.8" height="2.2" rx="0.4" />
        <circle cx="20" cy="46.8" r="1.1" />
        <circle cx="66" cy="46.8" r="1.1" />
      </g>
    </svg>
  )
}

function SideOrnaments({ side }) {
  const pearls = [
    [34, 18],
    [34, 34],
    [34, 50],
    [34, 66],
    [34, 82],
    [18, 22],
    [18, 40],
    [50, 26],
    [50, 44],
  ]

  return (
    <svg
      className={`front-side-ornament front-side-${side}`}
      viewBox="0 0 72 168"
      aria-hidden="true"
    >
      <g fill="none" stroke="#C4A574" strokeLinecap="round">
        <path d="M34 0v92" strokeWidth="0.85" />
        <path d="M18 0v48" strokeWidth="0.65" />
        <path d="M50 0v52" strokeWidth="0.65" />
      </g>
      {pearls.map(([cx, cy], i) => (
        <circle
          key={`${side}-p-${i}`}
          cx={cx}
          cy={cy}
          r={i % 4 === 0 ? 2.35 : 1.85}
          fill="#FBF6EE"
          stroke="#C4A574"
          strokeWidth="0.7"
        />
      ))}
      <circle cx="18" cy="56" r="1.55" fill="#C9A08A" />
      <circle cx="50" cy="60" r="1.55" fill="#C9A08A" />
      <circle cx="34" cy="98" r="1.7" fill="#C48B8B" />

      <g transform="translate(20 108)" fill="#C4A574">
        <path d="M16 4c1.1-3.8 4.2-6 4.2-6S17.2 1.8 16 4Z" />
        <path d="M3.5 14c2.3-3.8 6.2-5.8 12.5-5.8S25.7 10.2 28 14c-3 1.5-7.2 2.3-12.5 2.3S6.5 15.5 3.5 14Z" />
        <ellipse cx="16" cy="15.6" rx="9.2" ry="2.15" fill="#A88858" />
        <path d="M16 8.2c2.4 0 4.2 1 4.2 2.2S18.4 12.6 16 12.6 11.8 11.6 11.8 10.4 13.6 8.2 16 8.2Z" fill="#D8C094" />
      </g>
    </svg>
  )
}

function LotusMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 18" aria-hidden="true">
      <path
        d="M24 16c-2.4-3.8-7-6.4-11.8-6.6 3.4-1.2 7.2-.4 11.8 3.4 4.6-3.8 8.4-4.6 11.8-3.4C31 9.6 26.4 12.2 24 16Z"
        fill="#C4A574"
        opacity="0.9"
      />
      <circle cx="24" cy="8.2" r="1.15" fill="#C4A574" />
    </svg>
  )
}

function Jewel() {
  return (
    <span className="front-jewel" aria-hidden="true">
      <span />
    </span>
  )
}

function FlapMonogram({ brideInitial, groomInitial }) {
  return (
    <div className="front-monogram" aria-hidden="true">
      <svg viewBox="0 0 88 88" className="front-monogram-ring">
        <circle cx="44" cy="44" r="41" fill="none" stroke="#C4A574" strokeWidth="0.9" />
        <circle cx="44" cy="44" r="36.5" fill="none" stroke="#C4A574" strokeWidth="0.55" />
        {[0, 90, 180, 270].map((deg) => (
          <circle
            key={deg}
            cx="44"
            cy="7"
            r="1.2"
            fill="#C4A574"
            transform={`rotate(${deg} 44 44)`}
          />
        ))}
      </svg>
      <span className="front-monogram-s font-heading">{brideInitial}</span>
      <span className="front-monogram-amp">&</span>
      <span className="front-monogram-a font-heading">{groomInitial}</span>
    </div>
  )
}

export default function LoadingScreen({ onOpen }) {
  const btnRef = useRef(null)
  const { bride, groom, copy, date } = wedding
  const cardDate = `${date.day} ${date.monthUpper} ${date.year}`

  const handleClick = (e) => {
    if (btnRef.current) createRipple(e, btnRef.current)
    setTimeout(onOpen, 280)
  }

  const scrollToEnvelope = () => {
    document.getElementById('invite-envelope')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.section
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="invite-stage">
        <section className="invite-page front-card">
          <div className="front-paper" />
          <CornerFlourish className="front-corner front-corner-tl" />
          <CornerFlourish className="front-corner front-corner-tr" />
          <CornerFlourish className="front-corner front-corner-bl" />
          <CornerFlourish className="front-corner front-corner-br" />
          <SideOrnaments side="left" />
          <SideOrnaments side="right" />

          <div className="front-card-inner">
            <motion.div
              className="front-card-top"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TempleMotif />
              <Jewel />
            </motion.div>

            <motion.p
              className="front-mono font-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.75 }}
            >
              {bride.initial} & {groom.initial}
            </motion.p>

            <motion.h2
              className="front-names font-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8 }}
            >
              {bride.firstName} <span>&</span> {groom.firstName}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
            >
              <Jewel />
            </motion.div>

            <motion.p
              className="front-date"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.7 }}
            >
              {cardDate}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.64 }}
            >
              <LotusMark className="front-lotus" />
            </motion.div>
          </div>

          <button
            type="button"
            className="invite-scroll-hint"
            aria-label="See envelope"
            onClick={scrollToEnvelope}
          >
            <span />
          </button>
        </section>

        <section id="invite-envelope" className="invite-page front-envelope">
          <div className="front-paper" />
          <CornerFlourish className="front-corner front-corner-bl" />
          <CornerFlourish className="front-corner front-corner-br" />

          <svg
            className="front-flap-line"
            viewBox="0 0 1000 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M36 28 C36 28, 500 318, 500 318 C500 318, 964 28, 964 28"
              fill="none"
              stroke="#5C2430"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="36" cy="28" r="5.2" fill="#5C2430" />
            <circle cx="964" cy="28" r="5.2" fill="#5C2430" />
          </svg>

          <FlapMonogram
            brideInitial={bride.initial}
            groomInitial={groom.initial}
          />

          <div className="front-seal-anchor">
            <motion.button
              type="button"
              onClick={handleClick}
              className="wax-seal"
              aria-label={copy.openInvitation}
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="wax-seal-ring" aria-hidden="true" />
              <span className="wax-seal-ring wax-seal-ring-delay" aria-hidden="true" />
              <span ref={btnRef} className="wax-seal-face">
                <span className="wax-seal-text font-heading">
                  {bride.initial}&{groom.initial}
                </span>
              </span>
            </motion.button>
          </div>
        </section>
      </div>
    </motion.section>
  )
}
