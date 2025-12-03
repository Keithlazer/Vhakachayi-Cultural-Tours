import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Currency conversion utilities
export function convertCurrency(amount: number, from: string, to: string): number {
  // This would integrate with a live currency API
  // Placeholder for now
  if (from === 'USD' && to === 'ZWL') {
    // Example rate - should be fetched from API
    return amount * 30 // Approximate rate
  }
  if (from === 'ZWL' && to === 'USD') {
    return amount / 30
  }
  return amount
}

// Date utilities for cultural calendar
export function isCulturalRestrictedDate(date: Date): boolean {
  // This would check against a cultural calendar
  // Placeholder implementation
  return false
}

export function getCulturalCalendarNotes(date: Date): string[] {
  // Returns notes about cultural significance of dates
  return []
}

