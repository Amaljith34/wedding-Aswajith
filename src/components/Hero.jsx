import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import wedding from '../config/wedding'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2])

  const { bride, groom, date, copy, images } = wedding

  const scrollToInvitation = () => {
    document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={images.hero}
          alt=""
          className="h-full w-full object-cover object-[center_30%] scale-110"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-cream/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/25 via-cream/50 to-cream" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-2xl px-6 py-20 text-center"
      >
        <motion.p
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {copy.heroEyebrow}
        </motion.p>

        <motion.p
          className="font-heading text-xl sm:text-2xl text-text-soft italic mb-8"
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          {copy.heroInvite}
        </motion.p>

        <motion.h2
          className="font-heading text-5xl sm:text-7xl font-medium text-text tracking-wide"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {bride.firstName}
        </motion.h2>
        <motion.p
          className="font-script text-4xl sm:text-5xl text-accent my-1 leading-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          &
        </motion.p>
        <motion.h2
          className="font-heading text-5xl sm:text-7xl font-medium text-text tracking-wide mb-10"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {groom.firstName}
        </motion.h2>

        <motion.div
          className="ornament-line mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
        >
          <span className="text-accent text-lg">✦</span>
        </motion.div>

        <motion.div
          className="space-y-1 text-text-soft"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
        >
          <p className="font-heading text-2xl sm:text-3xl text-text">
            {date.weekday}
          </p>
          <p className="font-heading text-xl sm:text-2xl tracking-[0.18em] uppercase">
            {date.displayUpper}
          </p>
          <p className="text-sm tracking-[0.2em] uppercase text-accent mt-2">
            {date.muhurtham}
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={scrollToInvitation}
          className="btn-glow mt-12 rounded-full px-8 py-3 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-transform duration-300"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {copy.joinCelebration}
        </motion.button>
      </motion.div>
    </section>
  )
}
