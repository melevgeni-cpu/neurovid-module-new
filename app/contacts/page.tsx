import { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Контакты | NeuroVid',
  description: 'Контактная информация NeuroVid',
}

export default function ContactsPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-20 text-text-primary">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      <div className="space-y-6 text-text-secondary leading-relaxed">
        <div className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-accent-warm mt-1 shrink-0" />
          <div>
            <strong className="text-text-primary">Адрес:</strong><br />
            Самозанятое лицо Иванов Иван Иванович<br />
            [адрес регистрации], Республика Беларусь
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-6 h-6 text-accent-warm mt-1 shrink-0" />
          <div>
            <strong className="text-text-primary">Телефон:</strong><br />
            <a href="tel:+375291234567" className="text-accent-warm underline">+375 (29) 123-45-67</a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-6 h-6 text-accent-warm mt-1 shrink-0" />
          <div>
            <strong className="text-text-primary">Email:</strong><br />
            <a href="mailto:info@neurovid.com" className="text-accent-warm underline">info@neurovid.com</a>
          </div>
        </div>
        <p className="mt-4">Свяжитесь с нами удобным способом или воспользуйтесь <a href="/" className="text-accent-warm underline">формой заявки</a>.</p>
      </div>
    </main>
  )
}
