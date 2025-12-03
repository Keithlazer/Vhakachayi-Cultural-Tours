'use client'

import { useLanguage } from './LanguageProvider'
import { Globe } from 'lucide-react'
import { useState } from 'react'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'sn' as const, name: 'ChiShona', flag: '🇿🇼' },
    { code: 'nd' as const, name: 'isiNdebele', flag: '🇿🇼' },
  ]

  const currentLang = languages.find(l => l.code === language) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-earth-700 hover:text-ochre-600 transition-colors"
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
        <span className="sm:hidden">{currentLang.flag}</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 flex items-center space-x-2 transition-colors ${
                  language === lang.code
                    ? 'bg-ochre-50 text-ochre-600'
                    : 'text-earth-700 hover:bg-earth-50'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

