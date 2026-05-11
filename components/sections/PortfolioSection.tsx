'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Wand2 } from 'lucide-react'
import { useModal } from '@/hooks/useModal'
import ComparisonSlider from '@/components/ui/ComparisonSlider'

const portfolioItems = [
  // Первый элемент — слайдер сравнения (квадратный)
  // Можно добавить отдельный элемент или заменить одну из ячеек
  // Для примера поместим слайдер на место первого элемента
]

// Пример слайдера с одной парой (без видео)
const sliderSlide = [
  {
    before: '/images/Foto-Rosa1.webp',
    after: '/images/Foto-Rosa2.webp',
    // video отсутствует, поэтому вкладка "Видео" будет скрыта
  },
]

export default function PortfolioSection() {
  const { openModal } = useModal()

  return (
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
          {/* Слайдер сравнения (квадратный) — занимает одну ячейку */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-gray-800 rounded-xl overflow-hidden"
          >
            <ComparisonSlider
              slides={sliderSlide}
              className="border-none" // убираем рамку, если не нужна
              aspectRatio="1 / 1"
            />
          </motion.div>

          {/* Остальные элементы портфолио (фото и видео) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="aspect-square bg-gray-800 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Foto-Rosa1.webp"
              alt="Работа 1"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-square bg-gray-800 rounded-xl overflow-hidden"
          >
            <video
              src="/videos/reels/reel1.mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="aspect-square bg-gray-800 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Foto-Rosa2.webp"
              alt="Работа 2"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square bg-gray-800 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/portfolio/3.jpg"
              alt="Работа 3"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </motion.div>
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
  )
}
