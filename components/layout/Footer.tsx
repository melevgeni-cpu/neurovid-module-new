'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-bg-card pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <div className="text-2xl font-bold mb-3">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Neuro</span>
            <span className="text-text-primary">Vid</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">Искусство оживлять воспоминания и взрывать алгоритмы</p>
          <p className="text-sm mt-2 flex items-center gap-2 text-text-secondary">
            <Mail size={16} className="text-accent-warm" />
            hello@neurovid.ai
          </p>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-3 text-base">Услуги</h4>
          <ul className="space-y-2">
            <li><Link href="#family" className="text-text-secondary hover:text-accent-warm transition-colors">Семье</Link></li>
            <li><Link href="#business" className="text-text-secondary hover:text-accent-business transition-colors">HR-брендам</Link></li>
            <li><Link href="#creators" className="text-text-secondary hover:text-accent-creator transition-colors">Блогерам</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-3 text-base">Мессенджеры</h4>
          <div className="flex gap-5">
            <a href="https://t.me/neurovid" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-text-secondary hover:text-[#2AABEE] transition-colors group" aria-label="Telegram">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.51.26l.19-3.17 5.765-5.215c.254-.226-.06-.334-.38-.12L8.67 14.3l-3.08-1.06c-.67-.21-.68-.67.14-1l11.96-4.6c.54-.22 1.04.14.2.58z"/></svg>
              <span className="text-xs font-medium group-hover:text-[#2AABEE]">Telegram</span>
            </a>
            <a href="https://wa.me/375XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-text-secondary hover:text-[#25D366] transition-colors group" aria-label="WhatsApp">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="text-xs font-medium group-hover:text-[#25D366]">WhatsApp</span>
            </a>
            <a href="viber://chat?number=%2B375XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-text-secondary hover:text-[#7360F2] transition-colors group" aria-label="Viber">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.518 6.765.397 9.323c-.17 3.574-.068 7.326-.01 10.932.04 2.448 1.78 4.178 4.21 3.99 2.294-.177 4.574-.22 6.878-.196 3.954.041 7.834.192 11.626-.44 1.496-.25 2.563-1.448 2.628-3.005.108-2.548.068-5.104.068-7.657 0-2.097-.154-4.347-.68-6.367C24.17 3.074 21.353.377 17.86.114c-2.152-.162-4.302-.085-6.462-.112zM6.08 7.228c.036-.014.086-.028.108.012.283.49.59.97.84 1.473.127.255.058.476-.098.68-.39.51-1.524 1.639-1.524 1.639s.646 2.07 2.33 3.547c1.472 1.292 3.082 1.93 3.082 1.93s.927-1.226 1.302-1.586c.19-.182.388-.229.646-.104.608.296 1.234.57 1.85.857.136.063.208.17.19.32-.06.51-.57 1.934-.75 2.412-.088.232-.184.289-.446.345-1.066.222-2.117.33-3.202.196-2.485-.308-4.49-1.476-5.952-3.212-1.152-1.368-1.828-2.96-2.06-4.724-.132-1.006-.04-2.01.386-2.958.302-.674.866-1.06 1.574-1.183.53-.092 1.066-.09 1.6-.136.08-.007.14.04.188.108z"/></svg>
              <span className="text-xs font-medium group-hover:text-[#7360F2]">Viber</span>
            </a>
            <a href="https://max.ru" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-text-secondary hover:text-[#07C] transition-colors group" aria-label="MAX">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="20" height="16" rx="3" /><text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">MAX</text></svg>
              <span className="text-xs font-medium group-hover:text-[#07C]">MAX</span>
            </a>
          </div>
          <p className="text-sm mt-5 flex items-center gap-2 text-text-secondary">
            <Mail size={16} className="text-accent-warm" />
            support@neurovid.ai
          </p>
        </div>

        <div>
          <h4 className="text-text-primary font-semibold mb-3 text-base">Соцсети</h4>
          <div className="flex gap-5">
            <a href="https://instagram.com/neurovid" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-text-secondary hover:text-[#E4405F] transition-colors group" aria-label="Instagram">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <span className="text-xs font-medium group-hover:text-[#E4405F]">Instagram</span>
            </a>
            <a href="https://tiktok.com/@neurovid" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-text-secondary hover:text-[#69C9D0] transition-colors group" aria-label="TikTok">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              <span className="text-xs font-medium group-hover:text-[#69C9D0]">TikTok</span>
            </a>
            <a href="https://vk.com/neurovid" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-text-secondary hover:text-[#0077FF] transition-colors group" aria-label="ВКонтакте">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C3.736 0 0 3.736 0 8.316v7.368C0 20.264 3.736 24 8.316 24h7.368C20.264 24 24 20.264 24 15.684V8.316C24 3.736 20.264 0 15.684 0zm3.692 17.123h-1.994c-.66 0-.862-.523-2.044-1.721-1.031-1.007-1.487-1.142-1.74-1.142-.354 0-.456.103-.456.6v1.575c0 .428-.14.685-1.288.685-1.906 0-4.011-1.164-5.495-3.311-2.23-3.21-2.84-5.61-2.84-6.105 0-.27.103-.515.603-.515h1.993c.45 0 .617.206.79.686.874 2.55 2.33 4.783 2.93 4.783.228 0 .33-.103.33-.674V9.358c-.07-1.204-.71-1.306-.71-1.73 0-.148.122-.308.326-.308h3.139c.275 0 .375.147.375.472v2.931c0 .275.122.372.207.372.176 0 .317-.103.636-.44.994-1.113 1.705-2.834 1.705-2.834.09-.18.258-.432.694-.432h1.994c.497 0 .6.257.497.635-.206 1.167-2.675 4.573-2.675 4.573-.212.35-.297.507 0 .9.215.305.926.92 1.397 1.482.86 1.06 1.518 1.956 1.697 2.546.155.537-.125.814-.59.814z"/></svg>
              <span className="text-xs font-medium group-hover:text-[#0077FF]">ВКонтакте</span>
            </a>
            <a href="https://ok.ru/neurovid" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-text-secondary hover:text-[#EE8208] transition-colors group" aria-label="Одноклассники">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M11.917 9.5c1.886 0 3.416-1.54 3.416-3.437 0-1.897-1.53-3.438-3.416-3.438-1.887 0-3.417 1.54-3.417 3.438 0 1.897 1.53 3.437 3.417 3.437zm0-4.917c.814 0 1.473.663 1.473 1.48 0 .813-.659 1.48-1.473 1.48-.815 0-1.474-.667-1.474-1.48 0-.817.659-1.48 1.474-1.48zm3.211 5.265c1.495-.17 3.34-.405 4.656-.616.532-.085.952-.422 1.124-.943.175-.525.055-1.096-.325-1.527-.382-.434-.932-.65-1.47-.577-2.04.307-4.53.612-7.152.613h-.006c-2.624 0-5.114-.306-7.153-.613-.538-.073-1.088.143-1.47.577-.38.43-.5 1.002-.325 1.527.172.521.592.858 1.124.943 1.316.21 3.161.446 4.656.616-.423.358-.986.82-1.575 1.306-1.117.922-1.876 1.738-1.876 3.033 0 1.47 1.19 2.667 2.656 2.667.65 0 1.224-.233 1.688-.654.63-.573 1.16-1.346 1.731-2.12.572.774 1.101 1.547 1.731 2.12.464.421 1.039.654 1.688.654 1.467 0 2.656-1.197 2.656-2.667 0-1.295-.76-2.111-1.876-3.033-.59-.485-1.152-.948-1.575-1.306z"/></svg>
              <span className="text-xs font-medium group-hover:text-[#EE8208]">Одноклассники</span>
            </a>
          </div>
        </div>

        <div className="sm:col-span-2 lg:col-span-4 mt-6 pt-6 border-t border-border-light">
          <h4 className="text-text-primary font-semibold mb-3 text-base text-center lg:text-left">Правовая информация</h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
            <Link href="/privacy" className="text-text-secondary hover:text-accent-warm transition-colors underline underline-offset-2">Политика обработки персональных данных</Link>
            <Link href="/cookies" className="text-text-secondary hover:text-accent-warm transition-colors underline underline-offset-2">Политика cookie</Link>
            <Link href="/offer" className="text-text-secondary hover:text-accent-warm transition-colors underline underline-offset-2">Публичная оферта</Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-text-secondary mt-12 pt-6 border-t border-border-light">
        © NeuroVid, {currentYear}
      </div>
    </footer>
  )
}