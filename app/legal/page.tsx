import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Юридическая информация | NeuroVid',
  description: 'Отказ от ответственности (Disclaimer)',
}

export default function LegalPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-20 text-text-primary">
      <h1 className="text-3xl font-bold mb-8">Отказ от ответственности (Disclaimer)</h1>
      <div className="space-y-6 text-text-secondary leading-relaxed">
        <h2 className="text-xl font-semibold text-text-primary mt-8">1. Общая информация</h2>
        <p>Материалы, размещённые на сайте <strong>neurovid.com</strong> (включая статьи, кейсы, описания услуг, примеры работ, видео-инструкции), предоставляются строго в <strong>информационных и ознакомительных целях</strong>. Они не являются юридической или профессиональной консультацией.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">2. Ограничение ответственности</h2>
        <p>Исполнитель (Иванов Иван Иванович) не несёт ответственности за:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>любые убытки (реальные или косвенные), возникшие в результате использования информации с сайта или блога;</li>
          <li>решения, принятые вами на основе материалов сайта;</li>
          <li>содержание внешних сайтов, на которые ведут ссылки с нашего сайта.</li>
        </ul>

        <h2 className="text-xl font-semibold text-text-primary mt-8">3. ИИ-технологии</h2>
        <p>Исполнитель использует лицензионные модели искусственного интеллекта. Однако полностью гарантировать 100% «похожесть» (особенно для сильно повреждённых снимков) невозможно — об этом предупреждается в договоре. Случайное сходство с реальными персонажами — совпадение.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">4. Авторские права</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Все готовые работы (результаты) передаются Заказчику, и он может использовать их по своему усмотрению.</li>
          <li>Исполнитель сохраняет право демонстрировать результат в своём портфолио (кейсах, социальных сетях) с согласия Заказчика или без указания имени, если иное не оговорено NDA.</li>
        </ul>

        <h2 className="text-xl font-semibold text-text-primary mt-8">5. Изменения</h2>
        <p>Настоящий Disclaimer может быть изменён в одностороннем порядке. Актуальная версия всегда находится на этой странице.</p>
      </div>
    </main>
  )
}
