'use client'

import { useLanguage } from './LanguageProvider'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-gradient-to-r from-ochre-600 to-terracotta-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Begin Your Return Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Walk with elders. Climb sacred mountains. Taste the old ways. Reconnect with roots.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/booking" 
            className="bg-white text-ochre-600 hover:bg-earth-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
          >
            <span>{t('cta.begin')}</span>
            <ArrowRight size={20} />
          </Link>
          <Link 
            href="/itineraries" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ochre-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
          >
            View Itineraries
          </Link>
        </div>
      </div>
    </section>
  )
}

