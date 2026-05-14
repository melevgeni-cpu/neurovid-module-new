import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика рассылок | NeuroVid',
  description: 'Условия получения маркетинговых рассылок NeuroVid',
}

export default function SubscriptionPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-20 text-text-primary">
      <h1 className="text-3xl font-bold mb-8">Политика обработки данных для маркетинговых рассылок</h1>
      <div className="space-y-6 text-text-secondary leading-relaxed">
        <h2 className="text-xl font-semibold text-text-primary mt-8">1. Что такое рассылка и зачем она нужна</h2>
        <p>Маркетинговая рассылка от <strong>NeuroVid</strong> – это периодические сообщения (email, Telegram, WhatsApp, Viber), содержащие:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>информацию о новых услугах и акциях;</li>
          <li>примеры выполненных работ (кейсы);</li>
          <li>полезные статьи по реставрации, ИИ, работе с семейным архивом;</li>
          <li>приглашения на вебинары и конкурсы.</li>
        </ul>

        <h2 className="text-xl font-semibold text-text-primary mt-8">2. Какие данные собираются и зачем</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border-light">
            <thead>
              <tr className="bg-bg-secondary">
                <th className="border border-border-light px-4 py-2 text-left">Данные</th>
                <th className="border border-border-light px-4 py-2 text-left">Цель</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border-light px-4 py-2">Имя (или псевдоним)</td>
                <td className="border border-border-light px-4 py-2">Чтобы обращаться лично</td>
              </tr>
              <tr>
                <td className="border border-border-light px-4 py-2">Адрес электронной почты</td>
                <td className="border border-border-light px-4 py-2">Отправка рассылки</td>
              </tr>
              <tr>
                <td className="border border-border-light px-4 py-2">Номер телефона (если выбран мессенджер)</td>
                <td className="border border-border-light px-4 py-2">Доставка сообщений в Telegram/Viber</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-text-primary mt-8">3. Правовое основание</h2>
        <p><strong>Ваше добровольное согласие</strong> – путём отметки чекбокса «Я согласен на получение рассылки» при подписке. Предварительная галочка НЕ ставится.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">4. Права подписантов</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>отказаться от рассылки (кнопка «Отписаться» в каждом письме; в мессенджере – отправить слово <strong>СТОП</strong>);</li>
          <li>потребовать удалить все ваши данные из базы, написав на <a href="mailto:legal@neurovid.com" className="text-accent-warm underline">legal@neurovid.com</a>.</li>
        </ul>
        <p>После отписки ваши данные хранятся не более <strong>30 дней</strong> для технической обработки.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">5. Передача третьим лицам</h2>
        <p>Мы используем сервисы рассылки (например, Unisender, SendPulse, Telegram-бот). Эти сервисы обрабатывают ваши данные в объёме, необходимом для доставки сообщений, и не используют их для своих целей. Продажа адресов третьим лицам запрещена.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">6. Типовая форма согласия (чекбокс)</h2>
        <p>☐ Я даю согласие на получение информационных и рекламных сообщений от <strong>NeuroVid / Иванов Иван Иванович</strong>. Я ознакомлен с Политикой обработки данных для рассылок.</p>

        <h2 className="text-xl font-semibold text-text-primary mt-8">7. Контакты для жалоб на спам</h2>
        <p>Если вы считаете, что получили сообщение без вашего согласия, сообщите: <a href="mailto:legal@neurovid.com" className="text-accent-warm underline">legal@neurovid.com</a><br />
        Также вы можете обратиться в <strong>Оперативно-аналитический центр при Президенте Республики Беларусь</strong> (уполномоченный орган по защите прав потребителей в сфере связи).</p>
      </div>
    </main>
  )
}
