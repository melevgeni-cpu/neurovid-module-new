import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика cookie | NeuroVid',
  description: 'Политика обработки cookie-файлов NeuroVid',
}

export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-20 text-text-primary">
      <h1 className="text-3xl font-bold mb-8">Политика в отношении cookie-файлов</h1>
      <div className="space-y-6 text-text-secondary leading-relaxed">
        <p>Сайт <strong>NeuroVid (neurovid.com)</strong> использует файлы cookie, чтобы сделать работу сайта удобнее и собирать статистику посещений.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">1. Что такое cookie?</h2>
        <p>Cookie – это небольшой текстовый файл, который сохраняется на вашем устройстве при первом посещении сайта.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">2. Какие cookie мы используем</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border-light">
            <thead>
              <tr className="bg-bg-secondary">
                <th className="border border-border-light px-4 py-2 text-left">Тип</th>
                <th className="border border-border-light px-4 py-2 text-left">Назначение</th>
                <th className="border border-border-light px-4 py-2 text-left">Обязательность</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border-light px-4 py-2"><strong>Технические</strong></td>
                <td className="border border-border-light px-4 py-2">Обеспечивают работу сайта (запоминают язык, сессию)</td>
                <td className="border border-border-light px-4 py-2">✅ Обязательные</td>
              </tr>
              <tr>
                <td className="border border-border-light px-4 py-2"><strong>Аналитические</strong></td>
                <td className="border border-border-light px-4 py-2">Яндекс.Метрика / Google Analytics – собирают данные о действиях пользователя для улучшения сайта</td>
                <td className="border border-border-light px-4 py-2">❌ Необязательные (требуют вашего согласия)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-text-primary mt-8">3. Управление cookie</h2>
        <p>При первом посещении вы увидите баннер, где можете:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Принять <strong>все cookie</strong>;</li>
          <li>Отказаться от <strong>необязательных</strong> (аналитических);</li>
          <li>Настроить параметры в браузере.</li>
        </ul>
        <p>Отказ от необязательных cookie не повлияет на работу сайта, но лишит нас возможности анализировать трафик.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">4. Согласие</h2>
        <p>Продолжая использовать сайт без нажатия «Отказаться» на баннере, вы соглашаетесь с использованием cookie в соответствии с настоящей Политикой (только технические). Для использования аналитических cookie мы запрашиваем явное разрешение.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">5. Контакты</h2>
        <p>По вопросам использования cookie: <a href="mailto:legal@neurovid.com" className="text-accent-warm underline">legal@neurovid.com</a></p>
      </div>
    </main>
  )
}
