import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика в отношении cookie-файлов | NeuroVid',
  description: 'Политика обработки cookie-файлов NeuroVid',
}

export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-20 text-text-primary">
      <h1 className="text-3xl font-bold mb-8">Политика в отношении обработки cookie-файлов</h1>
      <div className="space-y-4 text-text-secondary">
        <p><strong>1. Общие положения</strong></p>
        <p>Настоящая Политика разъясняет, как NeuroVid использует файлы cookie на сайте neurovid.ai.</p>
        <p><strong>2. Категории cookie-файлов</strong></p>
        <ul className="list-disc pl-5">
          <li><strong>Необходимые:</strong> обеспечивают работу сайта (сеансовые и постоянные, до 1 года).</li>
          <li><strong>Аналитические:</strong> сбор обобщённой статистики (1 год).</li>
        </ul>
        <p><strong>3. Правовые основания</strong></p>
        <p>Необходимые cookie обрабатываются без согласия пользователя. Аналитические — с согласия, предоставляемого через cookie-баннер.</p>
        <p><strong>4. Отключение cookie</strong></p>
        <p>Вы можете отключить cookie в настройках браузера. Инструкции доступны на сайтах: Google Chrome, Mozilla Firefox, Safari.</p>
      </div>
    </main>
  )
}