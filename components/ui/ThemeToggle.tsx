'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return (
      <button className="bg-bg-card border border-border-light rounded-full px-4 py-2 flex items-center gap-2 shadow-card text-text-primary">
        <Moon size={18} />
        <span className="text-sm font-medium">Тема</span>
      </button>
    )
  }

  const isLight = theme === 'light'

  return (
    <button
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className="bg-bg-card border border-border-light rounded-full px-4 py-2 flex items-center gap-2 shadow-card text-text-primary hover:bg-bg-secondary transition-colors"
      aria-label="Переключить тему"
    >
      {isLight ? <Sun size={18} /> : <Moon size={18} />}
      <span className="text-sm font-medium">Тема</span>
    </button>
  )
}