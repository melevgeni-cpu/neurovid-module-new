'use client'

import { Heart, Briefcase, Zap } from 'lucide-react'

const directions = [
  { id: 'family', label: 'Семье', icon: Heart, color: '#D4A373' },
  { id: 'business', label: 'HR-брендам', icon: Briefcase, color: '#457B9D' },
  { id: 'creators', label: 'Блогерам', icon: Zap, color: '#E63946' },
]

export default function DirectionNav() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-6 md:py-10">
      <div className="grid grid-cols-3 gap-3 md:gap-6">
        {directions.map((dir) => (
          <button
            key={dir.id}
            onClick={() => handleScroll(dir.id)}
            className="flex flex-col items-center gap-2 p-4 md:p-6 rounded-2xl bg-bg-card border border-border-light hover:scale-105 transition-transform shadow-md"
          >
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: dir.color }}
            >
              <dir.icon size={20} className="text-white" />
            </div>
            <span className="text-sm md:text-base font-semibold text-text-primary text-center">
              {dir.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
