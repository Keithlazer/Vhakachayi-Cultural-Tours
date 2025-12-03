import { CULTURAL_RESTRICTED_DATES } from './constants'

export function isCulturalRestrictedDate(date: Date): boolean {
  const monthDay = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  
  return CULTURAL_RESTRICTED_DATES.some(
    (restricted) => restricted.date === monthDay
  )
}

export function getCulturalCalendarNotes(date: Date): string[] {
  const monthDay = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  
  const matchingDates = CULTURAL_RESTRICTED_DATES.filter(
    (restricted) => restricted.date === monthDay
  )
  
  return matchingDates.map((d) => `${d.name}: ${d.description}`)
}

export function formatDateForDisplay(date: Date, locale: string = 'en'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function getAvailableDates(startDate: Date, endDate: Date): Date[] {
  const available: Date[] = []
  const current = new Date(startDate)
  
  while (current <= endDate) {
    if (!isCulturalRestrictedDate(current)) {
      available.push(new Date(current))
    }
    current.setDate(current.getDate() + 1)
  }
  
  return available
}

