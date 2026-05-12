'use client'

import { useState, useEffect } from 'react'

type Currency = 'BYN' | 'RUB'

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>('BYN')

  useEffect(() => {
    const saved = localStorage.getItem('currency') as Currency | null
    if (saved === 'BYN' || saved === 'RUB') {
      setCurrency(saved)
    }
  }, [])

  const toggleCurrency = () => {
    setCurrency(prev => {
      const next = prev === 'BYN' ? 'RUB' : 'BYN'
      localStorage.setItem('currency', next)
      return next
    })
  }

  return { currency, toggleCurrency }
}

export default function CurrencyToggle({
  currency,
  onToggle,
}: {
  currency: Currency
  onToggle: () => void
}) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <button
        onClick={currency === 'RUB' ? onToggle : undefined}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
          currency === 'BYN'
            ? 'bg-accent-warm text-black'
            : 'bg-white/10 text-text-secondary hover:bg-white/20'
        }`}
      >
        BYN
      </button>
      <button
        onClick={currency === 'BYN' ? onToggle : undefined}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
          currency === 'RUB'
            ? 'bg-accent-warm text-black'
            : 'bg-white/10 text-text-secondary hover:bg-white/20'
        }`}
      >
        RUB
      </button>
    </div>
  )
}
