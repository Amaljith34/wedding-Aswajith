import Countdown from 'react-countdown'
import { motion } from 'framer-motion'
import wedding from '../config/wedding'

function TimeBox({ value, label }) {
  return (
    <div className="glass flex flex-col items-center rounded-2xl px-3 py-4 sm:px-5 sm:py-5 min-w-[4.5rem] sm:min-w-[5.5rem] shadow-sm">
      <span className="font-heading text-3xl sm:text-4xl text-primary font-medium tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-text-soft">
        {label}
      </span>
    </div>
  )
}

function CountdownDisplay({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return (
      <motion.p
        className="font-heading text-3xl sm:text-4xl text-primary"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {wedding.copy.todayIsWedding}
      </motion.p>
    )
  }

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <TimeBox value={days} label="Days" />
      <TimeBox value={hours} label="Hours" />
      <TimeBox value={minutes} label="Minutes" />
      <TimeBox value={seconds} label="Seconds" />
    </motion.div>
  )
}

export default function CountdownSection() {
  const { weddingDate, date, copy } = wedding

  return (
    <section
      id="countdown"
      className="section-pad relative z-10 bg-gradient-to-b from-transparent via-[#F3EEE4]/70 to-transparent"
    >
      <div className="mx-auto max-w-2xl text-center px-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
            Save the Date
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text mb-8">
            {copy.ceremonyHeading}
          </h2>
        </motion.div>

        <motion.div
          className="glass-strong golden-border mx-auto mb-10 max-w-sm rounded-3xl px-6 py-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-1">
            {date.monthUpper}
          </p>
          <p className="text-xs tracking-[0.3em] uppercase text-text-soft mb-3">
            {date.weekdayUpper}
          </p>
          <p className="font-heading text-7xl sm:text-8xl text-primary font-medium leading-none">
            {date.day}
          </p>
          <div className="ornament-line my-4">
            <span className="text-accent text-sm">✦</span>
          </div>
          <p className="text-sm tracking-[0.25em] uppercase text-text">
            {date.time}
          </p>
        </motion.div>

        <Countdown
          date={weddingDate}
          renderer={CountdownDisplay}
        />
      </div>
    </section>
  )
}
