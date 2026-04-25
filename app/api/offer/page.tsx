import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Публичная оферта | NeuroVid',
  description: 'Публичная оферта NeuroVid',
}

export default function OfferPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-20 text-text-primary">
      <h1 className="text-3xl font-bold mb-8">Публичная оферта</h1>
      <div className="space-y-4 text-text-secondary">
        <p><strong>1. Общие положения</strong></p>
        <p>Настоящий документ является публичной офертой NeuroVid на оказание услуг по нейро-реставрации и созданию AI-видео.</p>
        <p><strong>2. Акцепт оферты</strong></p>
        <p>Акцептом оферты считается оформление заявки на сайте neurovid.ai и её подтверждение со стороны NeuroVid.</p>
        <p><strong>3. Услуги</strong></p>
        <p>Реставрация фото, оживление изображений, создание Reels для соцсетей.</p>
        <p><strong>4. Порядок оплаты</strong></p>
        <p>50% предоплата, 50% после утверждения результата.</p>
        <p><strong>5. Сроки оказания услуг</strong></p>
        <p>От 1 до 7 рабочих дней в зависимости от сложности.</p>
      </div>
    </main>
  )
}