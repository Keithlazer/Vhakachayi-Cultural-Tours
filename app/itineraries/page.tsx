'use client'

import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

const itineraries = [
  {
    id: 'spirit-of-matobo',
    title: 'Spirit of Matobo',
    duration: '3 Days',
    price: '$450',
    description: 'A transformative journey through the sacred Matobo Hills, connecting with ancient spiritual traditions and breathtaking landscapes.',
    highlights: [
      'Sacred mountain climbs with elder guidance',
      'Traditional ceremonies and blessings',
      'Ancient rock art exploration',
      'Community meals with local families',
      'Sunset meditation at sacred sites',
    ],
    featured: true,
  },
  {
    id: 'great-zimbabwe-rediscovery',
    title: 'Great Zimbabwe Rediscovery',
    duration: '5 Days',
    price: '$850',
    description: 'Explore the ancient ruins of Great Zimbabwe with guides who share oral histories passed down through generations.',
    highlights: [
      'Guided tours of Great Zimbabwe ruins',
      'Traditional storytelling sessions',
      'Cultural immersion in nearby communities',
      'Traditional food preparation workshops',
      'Heritage preservation discussions',
    ],
    featured: true,
  },
  {
    id: 'diaspora-homecoming',
    title: 'Diaspora Homecoming Journey',
    duration: '7 Days',
    price: '$1,200',
    description: 'A deeply personal journey designed for those returning to reconnect with ancestral roots and rediscover their heritage.',
    highlights: [
      'Ancestral village visits',
      'Family lineage research assistance',
      'Traditional naming ceremonies',
      'Extended time with community elders',
      'Heritage documentation support',
      'Reconnection rituals',
    ],
    featured: true,
  },
]

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Signature Itineraries</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Carefully crafted journeys that honor tradition while creating transformative experiences of connection and discovery.
          </p>
        </div>
      </section>

      {/* Itineraries */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-earth-200"
              >
                {itinerary.featured && (
                  <div className="bg-ochre-600 text-white px-4 py-2 text-center text-sm font-semibold">
                    Featured Itinerary
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-earth-900">{itinerary.title}</h2>
                    <div className="text-3xl font-bold text-ochre-600">{itinerary.price}</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-earth-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>Small Groups</span>
                    </div>
                  </div>

                  <p className="text-earth-700 mb-6 leading-relaxed">{itinerary.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-earth-900 mb-3">Highlights:</h3>
                    <ul className="space-y-2">
                      {itinerary.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-earth-600">
                          <span className="text-ochre-600 mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/itineraries/${itinerary.id}`}
                    className="btn-primary w-full text-center inline-flex items-center justify-center space-x-2"
                  >
                    <span>View Details</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

