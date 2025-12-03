'use client'

import { useLanguage } from './LanguageProvider'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pattern-overlay bg-gradient-to-br from-earth-100 via-ochre-50 to-deep-green-50">
      <div className="container-custom section-padding text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-earth-900 leading-tight">
            <span className="text-gradient">VHAKACHAYI</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl mt-4 block">
              Where Ancient Stories Meet Modern Adventure
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-earth-700 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/booking" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group">
              <span>{t('cta.begin')}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <Link href="/experiences" className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
              <Play size={20} />
              <span>Watch Elder Stories</span>
            </Link>
          </div>

          {/* Cultural/Adventure Dichotomy Visual */}
          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-ochre-200">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="font-semibold text-xl text-earth-900 mb-2">Sacred Mountains</h3>
              <p className="text-earth-600">Climb where spirit meets summit, guided by elders who know the old paths.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-deep-green-200">
              <div className="text-4xl mb-3">🍲</div>
              <h3 className="font-semibold text-xl text-earth-900 mb-2">Traditional Foodways</h3>
              <p className="text-earth-600">Taste the unbroken thread of Shona and Ndebele culinary heritage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

