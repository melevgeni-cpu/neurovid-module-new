'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ContactForm from './ContactForm'

export type ModalType = 'contact' | 'upload' | 'business' | 'order'

interface ModalProps {
  isOpen: boolean
  type: ModalType | null
  onClose: () => void
}

export default function Modal({ isOpen, type, onClose }: ModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  const getModalContent = () => {
    switch (type) {
      case 'contact':
        return (
          <div className="bg-modal-bg p-8 rounded-3xl max-w-sm w-full text-text-primary">
            <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://t.me/neurovid_bot" target="_blank" rel="noopener noreferrer" className="bg-[#2AABEE] p-4 rounded-xl text-center text-white hover:opacity-90 transition"><span className="text-2xl">✈️</span><span className="block mt-1 font-medium">Telegram</span></a>
              <a href="https://wa.me/375XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-4 rounded-xl text-center text-white hover:opacity-90 transition"><span className="text-2xl">💬</span><span className="block mt-1 font-medium">WhatsApp</span></a>
              <a href="viber://chat?number=%2B375XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-[#7360F2] p-4 rounded-xl text-center text-white hover:opacity-90 transition"><span className="text-2xl">📞</span><span className="block mt-1 font-medium">Viber</span></a>
              <a href="mailto:hello@neurovid.ai" className="bg-gray-600 p-4 rounded-xl text-center text-white hover:opacity-90 transition"><span className="text-2xl">📧</span><span className="block mt-1 font-medium">Email</span></a>
            </div>
            <button onClick={onClose} className="mt-6 w-full border border-white/20 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition">Закрыть</button>
          </div>
        )
      case 'upload':
        return (
          <div className="bg-modal-bg p-8 rounded-3xl max-w-md w-full text-text-primary">
            <h3 className="text-2xl font-bold mb-4">Оценить сложность</h3>
            <p className="text-sm mb-4 opacity-70">Загрузите фото или видео для предварительной оценки</p>
            <input type="file" accept="image/*,video/*" className="mb-4 w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent-warm file:text-black" />
            <input type="text" placeholder="Telegram / WhatsApp / Email" className="w-full p-3 border border-border-light rounded-xl mb-4 bg-input-bg text-input-text focus:outline-none focus:ring-2 focus:ring-accent-warm" />
            <button onClick={onClose} className="w-full bg-accent-warm text-black py-3 rounded-xl font-bold hover:opacity-90 transition">Отправить</button>
            <button onClick={onClose} className="w-full mt-3 text-sm text-text-secondary hover:text-text-primary transition">Отмена</button>
          </div>
        )
      case 'business':
        return (
          <div className="bg-modal-bg p-8 rounded-3xl max-w-md w-full text-text-primary">
            <h3 className="text-2xl font-bold mb-4">Презентация для руководства</h3>
            <input type="text" placeholder="Имя" className="w-full p-3 border border-border-light rounded-xl mb-3 bg-input-bg text-input-text focus:outline-none focus:ring-2 focus:ring-accent-warm" />
            <input type="text" placeholder="Компания" className="w-full p-3 border border-border-light rounded-xl mb-3 bg-input-bg text-input-text focus:outline-none focus:ring-2 focus:ring-accent-warm" />
            <input type="text" placeholder="Telegram / Email" className="w-full p-3 border border-border-light rounded-xl mb-4 bg-input-bg text-input-text focus:outline-none focus:ring-2 focus:ring-accent-warm" />
            <button onClick={onClose} className="w-full bg-accent-business text-white py-3 rounded-xl font-bold hover:opacity-90 transition">Получить</button>
            <button onClick={onClose} className="w-full mt-3 text-sm text-text-secondary hover:text-text-primary transition">Отмена</button>
          </div>
        )
      case 'order':
        return (
          <div className="bg-modal-bg p-6 md:p-8 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto text-text-primary">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Оставить заявку</h3>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-bg-secondary transition" aria-label="Закрыть"><X size={22} /></button>
            </div>
            <ContactForm onSuccess={onClose} onClose={onClose} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            {getModalContent()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}