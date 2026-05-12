'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Play, Pause } from 'lucide-react'

interface SlideData {
  before: string
  after: string
  video?: string
}

interface ComparisonSliderProps {
  slides: SlideData[]
  className?: string
  aspectRatio?: string
}

export default function ComparisonSlider({
  slides,
  className = '',
  aspectRatio = '4 / 3',
}: ComparisonSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mode, setMode] = useState<'photo' | 'video'>('photo')
  const [sliderValue, setSliderValue] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [isPaused, setIsPaused] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Остановка видео при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        setIsVideoPlaying(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const startAutoMove = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (!isPaused && mode === 'photo') {
        setSliderValue((prev) => {
          if (prev >= 100) { setDirection(-1); return 99 }
          if (prev <= 0) { setDirection(1); return 1 }
          return prev + direction * 1.5
        })
      }
    }, 40)
  }, [isPaused, mode, direction])

  useEffect(() => {
    startAutoMove()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [startAutoMove])

  useEffect(() => {
    setSliderValue(0)
    setDirection(1)
  }, [currentIndex])

  const handleModeChange = (newMode: 'photo' | 'video') => {
    setMode(newMode)
    setIsPaused(false)
    if (newMode === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  const handleDotClick = (idx: number) => setCurrentIndex(idx)

  const togglePlayPause = () => {
    if (mode === 'video' && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsVideoPlaying(true)
      } else {
        videoRef.current.pause()
        setIsVideoPlaying(false)
      }
    }
  }

  const currentSlide = slides[currentIndex] || slides[0]

  return (
    <div className="space-y-4">
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-white/10 ${className}`}
        style={{ aspectRatio, maxWidth: '100%' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          {mode === 'photo' && (
            <motion.div key={`photo-${currentIndex}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
              <div className="relative w-full h-full">
                <Image src={currentSlide.before} alt="До реставрации" fill className="object-cover" priority unoptimized />
                <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}>
                  <Image src={currentSlide.after} alt="После реставрации" fill className="object-cover" unoptimized />
                </div>
                <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-10" style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }} />
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold z-20">ДО</div>
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold z-20">ПОСЛЕ</div>
                <input type="range" min="0" max="100" value={sliderValue} onChange={(e) => { setSliderValue(Number(e.target.value)); setIsPaused(true) }} onMouseUp={() => setIsPaused(false)} onTouchEnd={() => setIsPaused(false)} className="absolute bottom-4 left-[10%] w-[80%] z-20 cursor-grab accent-accent-warm opacity-0" aria-label="Ползунок сравнения" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {mode === 'video' && currentSlide.video && (
            <motion.div key={`video-${currentIndex}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
              <video
                ref={videoRef}
                src={currentSlide.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                playsInline
                muted={false}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
              <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                <button onClick={() => { if (videoRef.current) { videoRef.current.muted = !videoRef.current.muted; if (!videoRef.current.muted) videoRef.current.play().catch(() => {}) } }} className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition" aria-label="Включить/выключить звук">🔊</button>
                <button onClick={togglePlayPause} className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition" aria-label={isVideoPlaying ? 'Пауза' : 'Воспроизвести'}>{isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => handleDotClick(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-accent-warm scale-125 shadow-[0_0_10px_var(--accent-warm)]' : 'bg-white/30 border border-white/50'}`} aria-label={`Слайд ${idx + 1}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleModeChange('photo')} className={`px-5 py-2 rounded-full font-semibold text-sm transition ${mode === 'photo' ? 'bg-accent-warm text-black' : 'bg-transparent border border-white/30 text-text-primary hover:border-accent-warm'}`}>📸 Фото</button>
          <button onClick={() => handleModeChange('video')} className={`px-5 py-2 rounded-full font-semibold text-sm transition ${mode === 'video' ? 'bg-accent-warm text-black' : 'bg-transparent border border-white/30 text-text-primary hover:border-accent-warm'}`}>🎬 Видео</button>
        </div>
      </div>
    </div>
  )
}
