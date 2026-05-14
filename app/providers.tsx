'use client'

import { ThemeProvider } from 'next-themes'
import { ReactLenis } from 'lenis/react'
import Modal from '@/components/ui/Modal'
import { useModal } from '@/hooks/useModal'
import CookieBanner from '@/components/ui/CookieBanner'

function ModalWrapper() {
  const { isOpen, type, closeModal } = useModal()
  return <Modal isOpen={isOpen} type={type} onClose={closeModal} />
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
        <ModalWrapper />
        <CookieBanner />
      </ReactLenis>
    </ThemeProvider>
  )
}
