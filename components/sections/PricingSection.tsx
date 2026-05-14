'use client'

import { motion } from 'framer-motion'
import { Heart, Briefcase, Zap, Check, Clock, ImagePlus, MessageCircle } from 'lucide-react'
import { useModal } from '@/hooks/useModal'
import { useCurrency } from '@/components/ui/CurrencyToggle'
import CurrencyToggleComponent from '@/components/ui/CurrencyToggle'
import { convertPrice, PACKAGE_PRICES } from '@/lib/pricing'

const plans = [
  {
    icon: Heart,
    color: 'text-accent-warm',
    title: 'Семейная реликвия',
    subtitle: 'Реставрация и оживление',
    priceKey: 'family',
    features: [
      '3 фото (восстановление)',
      'Ручная ретушь',
      'Оживление мимики',
    ],
  },
  {
    icon: Briefcase,
    color: 'text-accent-business',
    title: 'Бизнес-кейс',
    subtitle: 'HR-бренд и мероприятия',
    priceKey: 'business',
    features: [
      'До 3-х фото/видео',
      'NDA и договор',
      'Презентация для руководства',
    ],
  },
  {
    icon: Zap,
    color: 'text-accent-creator',
    title: 'Виральный Reels',
    subtitle: 'Нейро-продакшн',
    priceKey: 'creators',
    features: [
      '1 рилс (до 30 сек)',
      'Цветкор + музыка',
      'Нейро-эффекты',
    ],
  },
]

export default function PricingSection() {
  const { openModal } = useModal()
  const { currency, toggleCurrency } = useCurrency()

  return (
    <section id="pricing" className="py-20 px-5 bg-bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Цены / Тарифы
        </motion.h2>
        <p className="text-text-secondary mb-6">
          Выберите направление. Все услуги включают постобработку и конфиденциальность.
        </p>

        <CurrencyToggleComponent currency={currency} onToggle={toggleCurrency} />

        {/* Тарифы */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 relative ring-2 ring-accent-warm"
            >
              <plan.icon className={`text-3xl mb-3 mx-auto ${plan.color}`} />
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="text-sm opacity-70 mb-3">{plan.subtitle}</div>
              <div className="text-3xl font-bold text-accent-warm mb-4">
                {convertPrice(PACKAGE_PRICES[plan.priceKey], currency)}
              </div>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openModal('order')}
                className="w-full bg-accent-warm hover:bg-accent-warm/80 text-black py-3 rounded-full font-bold transition"
              >
                Заказать
              </button>
            </motion.div>
          ))}
        </div>

        {/* Дополнительные услуги */}
        <div className="mt-12 glass-card rounded-2xl p-6 max-w-2xl mx-auto text-left">
          <h3 className="text-xl font-bold mb-4 text-text-primary">Дополнительные услуги</h3>
          <div className="space-y-3 text-text-secondary">
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-accent-warm shrink-0 mt-0.5" />
              <span><strong>Срочное выполнение</strong> - <strong className="text-accent-warm">+50%</strong> к стоимости пакета</span>
            </div>
            <div className="flex items-start gap-3">
              <ImagePlus size={20} className="text-accent-warm shrink-0 mt-0.5" />
              <span><strong>Каждое дополнительное фото</strong> - <strong className="text-accent-warm">+15%</strong> от цены пакета</span>
            </div>
          </div>
        </div>

        {/* Индивидуальный подход */}
        <div className="mt-6 flex items-center justify-center gap-2 text-text-secondary">
          <MessageCircle size={18} className="text-accent-warm" />
          <span>
            Каждый проект уникален.{' '}
            <button
              onClick={() => openModal('contact')}
              className="text-accent-warm hover:underline font-medium"
            >
              Свяжитесь с нами,
            </button>
            {' '} обсудим индивидуальные условия, объёмы и сроки.
          </span>
        </div>

        {currency === 'RUB' && (
          <p className="text-xs text-text-secondary mt-6 max-w-md mx-auto">
            Цены в RUB указаны по ознакомительному курсу ~28 ₽ за 1 BYN. Точную стоимость уточняйте при заказе.
          </p>
        )}
      </div>
    </section>
  )
}
