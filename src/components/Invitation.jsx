import { motion } from 'framer-motion'
import wedding from '../config/wedding'

export default function Invitation() {
  const { images, copy, bride, groom, date, locations } = wedding

  return (
    <section id="invitation" className="section-pad relative z-10">
      <div className="mx-auto max-w-xl px-1">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
            Our Invitation
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-text">
            You Are Invited
          </h2>
          <div className="ornament-line mt-4">
            <span className="text-accent">✦</span>
          </div>
        </motion.div>

        <motion.figure
          className="wedding-card"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={images.invitation}
            alt={`Wedding invitation of ${bride.fullName} ${bride.family} and ${groom.fullName} ${groom.family}. ${copy.invitationBlessing} ${date.displayLong} at ${locations.ceremony.name}. Reception at ${date.receptionTime}, ${locations.reception.name}, ${locations.reception.lines.join(', ')}. ${copy.invitationClosing}`}
            className="wedding-card-art"
            width={1100}
            height={1650}
          />
          <figcaption className="sr-only">
            || Om Ganapathaye Namah || {copy.invitationBlessing} {bride.firstName},{' '}
            {bride.family}, and {groom.firstName}, {groom.family}. Wedding on{' '}
            {date.dayOrdinal} {date.month} {date.year} at {locations.ceremony.name}.
            Muhurtham at {date.time}. Reception at {date.receptionTime},{' '}
            {locations.reception.name}, Thaikkad, Guruvayur, Thrissur, Kerala.{' '}
            {copy.invitationClosing}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
