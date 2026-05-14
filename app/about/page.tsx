import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О компании | NeuroVid',
  description: 'Информация о NeuroVid',
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-20 text-text-primary">
      <h1 className="text-3xl font-bold mb-8">О компании NeuroVid</h1>
      <div className="space-y-6 text-text-secondary leading-relaxed">
        <p><strong>NeuroVid</strong> — это профессиональная нейро-реставрация и оживление фотографий с помощью искусственного интеллекта. Мы помогаем сохранить семейные архивы, создать WOW-контент для HR-брендов и запустить виральные Reels для блогеров.</p>
        <p>Основатель и исполнитель — <strong>Иванов Иван Иванович</strong>, самозанятый, работает с 2023 года. За это время выполнено более 500 проектов для клиентов из Беларуси, России и других стран.</p>
        <p>Мы используем только лицензионные нейросети и ручную постобработку, гарантируя высокое качество и конфиденциальность. Работаем официально, предоставляем документы (чеки, договор, NDA).</p>
        <p>Наша миссия — дарить эмоции и помогать людям увидеть прошлое живым.</p>
      </div>
    </main>
  )
}
