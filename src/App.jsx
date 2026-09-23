import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import wedding from './config/wedding'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Countdown from './components/Countdown'
import Details from './components/Details'
import Blessing from './components/Blessing'
import Map from './components/Map'
import Gallery from './components/Gallery'
import Quote from './components/Quote'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import MusicPlayer from './components/MusicPlayer'
import FloatingLeaves from './components/FloatingLeaves'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    document.title = wedding.seo.title
  }, [])

  const handleOpen = useCallback(() => {
    setUserInteracted(true)
    setMusicPlaying(true)
    setOpened(true)
  }, [])

  const toggleMusic = useCallback(() => {
    setUserInteracted(true)
    setMusicPlaying((prev) => !prev)
  }, [])

  return (
    <div className="relative min-h-screen bg-offwhite text-text overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!opened ? (
          <LoadingScreen key="loading" onOpen={handleOpen} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <FloatingLeaves />
            <Hero />
            <Invitation />
            <Countdown />
            <Details />
            <Blessing />
            <Gallery />
            <Quote />
            <Map />
            <Contact />
            <Footer />
            <FloatingButtons
              musicPlaying={musicPlaying}
              onToggleMusic={toggleMusic}
            />
            <MusicPlayer
              playing={musicPlaying}
              enabled={userInteracted}
              onPlayingChange={setMusicPlaying}
            />
          </motion.main>
        )}
      </AnimatePresence>

      {/* SEO / accessibility landmark */}
      <h1 className="sr-only">
        {wedding.bride.fullName} & {wedding.groom.fullName} Wedding Invitation
      </h1>
    </div>
  )
}
