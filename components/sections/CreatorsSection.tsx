'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Video, Wand2, Volume2, VolumeX, Play } from 'lucide-react'
import { useModal } from '@/hooks/useModal'

const reels = [
  {
    id: 1,
    src: '/videos/reels/Seva-vertical-8-Mb.mp4',
    poster: '/images/reels/Seva-poster.jpg',
    label: 'Ожившие фото → НейроВид',
  },
  {
    id: 2,
    src: '/videos/reels/reels2.mp4',
    poster: '/images/reels/reels2-poster.jpg',
    label: 'Вау-эффекты → НейроВид',
  },
  {
    id: 3,
    src: '/videos/reels/reels3.mp4',
    poster: '/images/reels/reels3-poster.jpg',
    label: 'Ожившая классика → НейроВид',
  },
]

export default function CreatorsSection() {
  const { openModal } = useModal()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [mutedStates, setMutedStates] = useState<boolean[]>([false, false, false])
  const [playingStates, setPlayingStates] = useState<boolean[]>([false, false, false])

  useEffect(() => {
    const handleScroll = () => {
      videoRefs.current.forEach((video, idx) => {
        if (video && !video.paused) {
          video.pause()
          video.currentTime = 0
          setPlayingStates(prev => prev.map((v, i) => (i === idx ? false : v)))
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePlayPause = (index: number) => {
    const targetVideo = videoRefs.current[index]
    if (!targetVideo) return

    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== index) {
        video.pause()
        video.currentTime = 0
        setPlayingStates(prev => prev.map((v, i) => (i === idx ? false : v)))
      }
    })

    if (targetVideo.paused) {
      targetVideo.play()
      setPlayingStates(prev => prev.map((v, i) => (i === index ? true : v)))
    } else {
      targetVideo.pause()
      targetVideo.currentTime = 0
      setPlayingStates(prev => prev.map((v, i) => (i === index ? false : v)))
    }
  }

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return
    video.muted = !video.muted
    setMutedStates(prev => prev.map((v, i) => (i === index ? !v : v)))
  }

  return (
    <section id="creators" className="py-20 px-5 relative" style={{ background: '#0F0C0E' }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#f1d3d6' }}>
          Статичные посты мертвы.{' '}
          <span className="text-accent-creator">Превращаем контент в виральные Reels</span>
        </motion.h2>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl">
          Вы получаете не просто генерацию, а нейро-продакшн под ключ: цветкор, музыка, удержание внимания с первой секунды.
        </p>

        <div id="creators-reels" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-20">
          {reels.map((reel, idx) => (
            <div key={reel.id}>
              <div className="bg-black/40 rounded-2xl p-1 aspect-[9/16] relative group overflow-hidden cursor-pointer" onClick={() => handlePlayPause(idx)}>
                <video
                  ref={(el) => { videoRefs.current[idx] = el }}
                  src={reel.src}
                  className="w-full h-full object-cover rounded-xl"
                  loop
                  playsInline
                  muted={mutedStates[idx]}
                  onPlay={() => setPlayingStates(prev => prev.map((v, i) => (i === idx ? true : v)))}
                  onPause={() => setPlayingStates(prev => prev.map((v, i) => (i === idx ? false : v)))}
                />
                {!playingStates[idx] && (
                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <Image src={reel.poster} alt={reel.label} fill className="object-cover" unoptimized />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  <span className="text-sm flex items-center gap-1 text-white drop-shadow-lg"><Video size={16} /> {reel.label}</span>
                </div>
                {!playingStates[idx] && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/50 rounded-full p-4"><Play size={32} className="text-white" fill="currentColor" /></div>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition z-20" onClick={e => e.stopPropagation()}>
                  <button onClick={e => { e.stopPropagation(); toggleMute(idx) }} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition" aria-label={mutedStates[idx] ? 'Включить звук' : 'Выключить звук'}>
                    {mutedStates[idx] ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>
              </div>
              <button onClick={() => openModal('order')} className="btn-primary w-full mt-3 py-2 rounded-full text-sm flex items-center justify-center gap-1"><Wand2 size={16} /> Хочу так же</button>
            </div>
          ))}
        </div>

        <div id="creators-order" className="flex flex-wrap gap-4 mt-10 scroll-mt-20">
          <button onClick={() => alert('Каталог отправлен в Telegram (демо)')} className="bg-accent-creator text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-accent-creator/80 transition">
            <Download size={20} /> Скачать каталог виральных нейро-стилей (15+)
          </button>
          <button onClick={() => openModal('order')} className="bg-transparent border border-accent-creator text-accent-creator px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-accent-creator hover:text-white transition">
            <Video size={20} /> Заказать Reels
          </button>
        </div>
      </div>
    </section>
  )
}
