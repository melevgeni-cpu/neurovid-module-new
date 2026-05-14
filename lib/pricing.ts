export type Currency = 'BYN' | 'RUB'

export const EXCHANGE_RATE = 28

export const PACKAGE_PRICES: Record<string, number> = {
  family: 149,
  business: 599,
  creators: 249,
}

export function convertPrice(amountBYN: number, currency: Currency): string {
  if (currency === 'RUB') {
    const rub = amountBYN * EXCHANGE_RATE
    const rounded = Math.round(rub / 100) * 100
    return `${rounded.toLocaleString('ru-RU')} ₽`
  }
  return `${amountBYN} BYN`
}
