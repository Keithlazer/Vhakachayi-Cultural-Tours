'use client'

import Link from 'next/link'
import { MapPin, Users, Heart, Award } from 'lucide-react'

const values = [
  {
    icon: MapPin,
    title: 'Sacred Sites',
    description: 'Access to mountains and places of spiritual significance with proper protocols and elder blessings.',
  },
  {
    icon: Users,
    title: 'Elder Guidance',
    description: 'Learn directly from community elders who carry generations of traditional knowledge.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'Every journey directly supports local communities through transparent benefit distribution.',
  },
  {
    icon: Award,
    title: 'Authentic Experience',
    description: 'No staged performances—only genuine cultural encounters that honor tradition.',
  },
]

export default function CulturalJourney() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-6">
              Why VHAKACHAYI?
            </h2>
            <p className="text-lg text-earth-700 mb-6 leading-relaxed">
              <strong>VHAKACHAYI</strong> means "The Return Journey" in Shona. Our founder, after years in the diaspora, 
              returned to Zimbabwe seeking reconnection with ancestral roots. This personal journey became the foundation 
              for creating authentic experiences that honor both tradition and transformation.
            </p>
            <p className="text-lg text-earth-700 mb-8 leading-relaxed">
              We believe the old ways carry the deepest magic. Every experience is designed with cultural protocols at the 
              center, ensuring respect for sacred sites, elders, and communities while creating meaningful connections 
              between travelers and the land.
            </p>
            <Link href="/about" className="btn-primary inline-flex items-center space-x-2">
              <span>Learn Our Story</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-earth-50 rounded-xl p-6 border border-ochre-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-earth-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-earth-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

