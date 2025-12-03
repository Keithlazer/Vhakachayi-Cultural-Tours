// Type definitions for the application

export type Language = 'en' | 'sn' | 'nd'

export type ExperienceType = 'cultural' | 'mountain' | 'nature' | 'food'

export type Currency = 'USD' | 'ZWL'

export type PaymentMethod = 'stripe' | 'ecocash' | 'onemoney'

export interface Experience {
  id: string
  title: string
  type: ExperienceType
  description: string
  fullDescription?: string
  duration: string
  price: number
  currency: Currency
  image?: string
  featured: boolean
  includes?: string[]
  requirements?: string[]
  guide?: {
    name: string
    lineage: string
    bio: string
  }
}

export interface Itinerary {
  id: string
  title: string
  duration: string
  price: number
  currency: Currency
  description: string
  highlights: string[]
  featured: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  category: string
  featured: boolean
  image?: string
}

export interface Elder {
  id: string
  name: string
  lineage: string
  bio: string
  expertise: string[]
  image?: string
  video?: string
}

export interface Booking {
  id: string
  experience: string
  date: string
  participants: number
  name: string
  email: string
  phone: string
  specialRequests?: string
  currency: Currency
  protocolQuizPassed: boolean
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

