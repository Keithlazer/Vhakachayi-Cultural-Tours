// Cultural calendar - significant dates to avoid for bookings
export const CULTURAL_RESTRICTED_DATES: Array<{
  date: string // Format: MM-DD
  name: string
  description: string
}> = [
  {
    date: '04-18',
    name: 'Independence Day',
    description: 'National holiday - ceremonies may be restricted',
  },
  {
    date: '08-12',
    name: 'Heroes Day',
    description: 'National holiday - ceremonies may be restricted',
  },
  // Add more culturally significant dates
]

// Experience types
export const EXPERIENCE_TYPES = {
  CULTURAL: 'cultural',
  MOUNTAIN: 'mountain',
  NATURE: 'nature',
  FOOD: 'food',
} as const

// Languages
export const LANGUAGES = {
  ENGLISH: 'en',
  SHONA: 'sn',
  NDEBELE: 'nd',
} as const

// Currency codes
export const CURRENCIES = {
  USD: 'USD',
  ZWL: 'ZWL',
} as const

// Payment methods
export const PAYMENT_METHODS = {
  STRIPE: 'stripe',
  ECOCASH: 'ecocash',
  ONEMONEY: 'onemoney',
} as const

