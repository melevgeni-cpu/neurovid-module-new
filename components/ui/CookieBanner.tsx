'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all')
    setVisible(false)
  }

  const rejectOptional = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[3000] bg-bg-card border-t border-border-light p-4 md:p-6 shadow-xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-text-primary text-sm leading-relaxed flex-1">
          Мы используем файлы cookie для улучшения работы сайта. Принимая условия, вы соглашаетесь с{' '}
          <Link href="/cookies" className="text-accent-warm underline hover:no-underline">
            Политикой cookie
          </Link>.
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={acceptAll}
            className="px-5 py-2 rounded-full bg-accent-warm text-black font-semibold text-sm hover:bg-accent-warm/90 transition"
          >
            Принять все
          </button>
          <button
            onClick={rejectOptional}
            className="px-5 py-2 rounded-full border border-border-light text-text-primary font-semibold text-sm hover:bg-bg-secondary transition"
          >
            Отказаться от необязательных
          </button>
          <Link
            href="/cookies"
            className="px-5 py-2 rounded-full border border-border-light text-text-primary font-semibold text-sm hover:bg-bg-secondary transition"
          >
            Настроить
          </Link>
        </div>
      </div>
    </div>
  )
}
