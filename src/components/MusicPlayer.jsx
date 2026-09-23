import { useEffect, useRef } from 'react'
import wedding from '../config/wedding'

/**
 * Plays background music after user interaction.
 * Drop a file at public/music/wedding.mp3 (or update wedding.music.src).
 */
export default function MusicPlayer({ playing, enabled, onPlayingChange }) {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio(wedding.music.src)
    audio.loop = true
    audio.volume = 0.45
    audio.preload = 'auto'
    audioRef.current = audio

    const onError = () => {
      // Missing audio file is fine — player stays silent
      console.info(
        '[MusicPlayer] Add an audio file at public/music/wedding.mp3 to enable music.',
      )
    }
    audio.addEventListener('error', onError)

    return () => {
      audio.removeEventListener('error', onError)
      audio.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !enabled) return

    if (playing) {
      const playPromise = audio.play()
      if (playPromise?.catch) {
        playPromise.catch(() => {
          onPlayingChange?.(false)
        })
      }
    } else {
      audio.pause()
    }
  }, [playing, enabled, onPlayingChange])

  return null
}
