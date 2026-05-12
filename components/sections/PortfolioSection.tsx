'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Wand2, Volume2, VolumeX, Play, Pause, X } from 'lucide-react'
import { useModal } from '@/hooks/useModal'
import ComparisonSlider from '@/components/ui/ComparisonSlider'

const sliderSlide = [
  {
    before: '/images/Inna-2.jpg',
    after: '/images/Inna-1.jpg',
  },
]

const portfolioItems = [
  { type: 'slider' as const },
  { type: 'video' as const, src: '/videos/Rosa.mp4', poster: '/images/Family-1.webp' },
  { type: 'image' as const, src: '/images/Family-1.webp', alt: 'Работа 2' },
  { type: 'image' as const, src: '/images/Family-2.webp', alt: 'Работа 3' },
]

export default function PortfolioSection() {
  const { openModal } = useModal()
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const openPlayer = (src: string) => {
    setExpandedVideo(src)
    setIsPlaying(false)
  }

  const closePlayer = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setExpandedVideo(null)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <>
      <section id="portfolio" className="py-20 px-5 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Наши работы
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="aspect-square bg-gray-800 rounded-xl overflow-hidden relative"
              >
                {item.type === 'slider' && (
                  <ComparisonSlider
                    slides={sliderSlide}
                    className="border-none"
                    aspectRatio="1 / 1"
                  />
                )}

                {item.type === 'video' && (
                  <div
                    className="w-full h-full cursor-pointer group"
                    onClick={() => openPlayer(item.src)}
                  >
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Кнопка Play по центру (видна всегда, поверх автоиграющего видео) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-black/50 rounded-full p-3">
                        <Play size={24} className="text-white" fill="currentColor" />
                      </div>
                    </div>
                    {/* Иконка динамика (показывает, что звук выключен) */}
                    <div className="absolute bottom-3 right-3 bg-black/50 rounded-full p-2">
                      <VolumeX size={16} className="text-white" />
                    </div>
                  </div>
                )}

                {item.type === 'image' && (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => openModal('order')}
              className="btn-primary px-8 py-3 rounded-full text-lg inline-flex items-center gap-2"
            >
              <Wand2 size={20} /> Хочу так же
            </button>
          </div>
        </div>
      </section>

      {/* Полноэкранный плеер */}
      <AnimatePresence>
        {expandedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/95 flex items-center justify-center p-4"
            onClick={closePlayer}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={expandedVideo}
                className="w-full h-full object-contain"
                autoPlay
                controls={false}
                muted={isMuted}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Контролы */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/70 rounded-full px-6 py-3">
                <button onClick={togglePlayPause} className="text-white hover:text-gray-300 transition">
                  {isPlaying ? <Pause size={28} /> : <Play size={28} fill="currentColor" />}
                </button>
                <button onClick={toggleMute} className="text-white hover:text-gray-300 transition">
                  {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
                </button>
              </div>

              {/* Кнопка закрытия */}
              <button
                onClick={closePlayer}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                aria-label="Закрыть"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
