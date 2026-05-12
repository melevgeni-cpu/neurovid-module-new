export type Currency = 'BYN' | 'RUB'

export const EXCHANGE_RATE = 28

export const BASE_PRICES: Record<string, number> = {
  family: 8,
  business: 280,
  creators: 95,
}

export function convertPrice(amountBYN: number, currency: Currency): string {
  if (currency === 'RUB') {
    const rub = amountBYN * EXCHANGE_RATE
    const rounded = Math.round(rub / 100) * 100
    return `${rounded.toLocaleString('ru-RU')} ₽`
  }
  return `${amountBYN} BYN`
}
