'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'sn' | 'nd'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.experiences': 'Experiences',
    'nav.itineraries': 'Itineraries',
    'nav.about': 'About',
    'nav.stories': 'Stories',
    'nav.contact': 'Contact',
    'hero.title': 'VHAKACHAYI: Where Ancient Stories Meet Modern Adventure',
    'hero.subtitle': 'Rediscover Zimbabwe\'s soul through authentic cultural journeys, sacred mountain climbs, and traditional food encounters. We reconnect you to the land, the elders, and the spirit of Africa—honoring heritage, empowering communities, and proving the old ways still carry the deepest magic.',
    'cta.begin': 'Begin Your Return Journey',
    'cta.walk': 'Walk with Elders',
    'cta.book': 'Book a Sacred Experience',
    'cta.reconnect': 'Reconnect with Roots',
  },
  sn: {
    'nav.home': 'Musha',
    'nav.experiences': 'Zviitiko',
    'nav.itineraries': 'Nzira',
    'nav.about': 'Nezvedu',
    'nav.stories': 'Nyaya',
    'nav.contact': 'Taura Nesu',
    'hero.title': 'VHAKACHAYI: Kwesakare Nyaya Dzinosangana Nezvinoitika Zvemazuva Ano',
    'hero.subtitle': 'Tsvaga zvakare mweya weZimbabwe kuburikidza nerwendo rwechokwadi rwetsika, kukwira makomo anoyera, uye kusangana nechikafu chechinyakare. Tinokubatanidza zvakare nenyika, vakuru, uye mweya weAfrica—kukudza nhaka, kusimbisa nharaunda, uye kuratidza kuti nzira dzekare dzichiri kutakura mashiripiti akadzama.',
    'cta.begin': 'Tanga Rwendo Rwako Rwekudzoka',
    'cta.walk': 'Famba NeVakuru',
    'cta.book': 'Bhuka Chiitiko Chinoera',
    'cta.reconnect': 'Batanidza Zvakare NeMidzi',
  },
  nd: {
    'nav.home': 'Ekhaya',
    'nav.experiences': 'Okwenzekayo',
    'nav.itineraries': 'Izindlela',
    'nav.about': 'Ngathi',
    'nav.stories': 'Izindaba',
    'nav.contact': 'Xhumana Nathi',
    'hero.title': 'VHAKACHAYI: Lapho Izindaba Zasendulo Zihlangana Nezokwenzeka Zesimanje',
    'hero.subtitle': 'Phinda uthole umoya weZimbabwe ngokuhamba okungokoqobo kwamasiko, ukukhuphuka izintaba ezingcwele, nokuhlangana nokudla kwendabuko. Siyakubuyisela emhlabeni, abadala, nomoya wase-Afrika—sihlonipha amagugu, sinikeza amandla imiphakathi, futhi sibonise ukuthi izindlela zasendulo zisathwala umlingo ojulile.',
    'cta.begin': 'Qala Uhambo Lwakho Lokubuyela',
    'cta.walk': 'Hamba Nabadala',
    'cta.book': 'Bhuka Isenzo Esingcwele',
    'cta.reconnect': 'Xhumana Kabusha Nezimpande',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

