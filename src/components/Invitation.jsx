import { motion } from 'framer-motion'
import wedding from '../config/wedding'

export default function Invitation() {
  const { images, copy, bride, groom, date, locations } = wedding

  return (
    <section id="invitation" className="section-pad relative z-10">
      <div className="mx-auto max-w-lg">
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

        <motion.div
          className="group relative mx-auto"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="glass-strong relative overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(62,58,54,0.12)] golden-border p-3 sm:p-4 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={images.invitation}
              alt={`Wedding invitation of ${bride.fullName} and ${groom.fullName}`}
              className="w-full rounded-xl object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="px-4 pt-6 pb-5 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-accent mb-3">
                {copy.invitationCardLead}
              </p>
              <p className="font-heading text-3xl sm:text-4xl text-text">
                {bride.firstName}
              </p>
              <p className="font-script text-3xl text-accent leading-none my-1">
                &
              </p>
              <p className="font-heading text-3xl sm:text-4xl text-text mb-4">
                {groom.firstName}
              </p>
              <div className="ornament-line mb-4">
                <span className="text-accent text-xs">✦</span>
              </div>
              <p className="font-heading text-lg text-text tracking-wide">
                {date.displayUpper}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-text-soft">
                {locations.ceremony.name} · {date.time}
              </p>
            </div>
          </div>
          <p className="mt-6 text-center font-heading italic text-text-soft text-lg">
            {copy.receptionNote}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
