'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useModal } from '@/hooks/useModal'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { label: 'Семье', href: '/#family' },
  { label: 'HR-брендам', href: '/#business' },
  { label: 'Блогерам', href: '/#creators' },
  { label: 'Цены/Тарифы', href: '/#pricing' },
  { label: 'Портфолио', href: '/#portfolio' },
  { label: 'Отзывы', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Контакты', href: '/#footer' },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openModal } = useModal()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1100] flex flex-col"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-4xl z-10 p-2 rounded-full bg-bg-card text-text-primary shadow-md border border-border-light"
            aria-label="Закрыть меню"
          >
            <X size={28} />
          </button>

          <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-2xl px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-text-primary hover:text-accent-warm transition-colors font-semibold"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 pb-10 px-6">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => { onClose(); openModal('contact') }}
                className="bg-bg-card border border-border-light px-6 py-3 rounded-full text-lg flex items-center gap-2 text-text-primary shadow-md font-medium hover:bg-bg-secondary transition-colors"
              >
                <MessageCircle size={22} />
                Связаться
              </button>
            </div>
            <button
              onClick={() => { onClose(); openModal('order') }}
              className="w-full max-w-xs bg-accent-warm text-gray-900 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-accent-warm/90 transition-colors"
            >
              Оставить заявку
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
