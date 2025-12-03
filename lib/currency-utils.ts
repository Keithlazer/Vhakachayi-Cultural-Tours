// Currency conversion utilities
// TODO: Integrate with live currency API

const EXCHANGE_RATES: Record<string, number> = {
  'USD_ZWL': 30, // Approximate - should be fetched from API
  'ZWL_USD': 1 / 30,
}

export function convertCurrency(
  amount: number,
  from: string,
  to: string
): number {
  if (from === to) return amount
  
  const rateKey = `${from}_${to}`
  const rate = EXCHANGE_RATES[rateKey]
  
  if (!rate) {
    console.warn(`Exchange rate not found for ${from} to ${to}`)
    return amount
  }
  
  return amount * rate
}

export function formatCurrency(amount: number, currency: string): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  
  return formatter.format(amount)
}

export async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  // TODO: Integrate with currency API
  // Example: https://api.exchangerate-api.com/v4/latest/${from}
  
  const rateKey = `${from}_${to}`
  return EXCHANGE_RATES[rateKey] || 1
}

