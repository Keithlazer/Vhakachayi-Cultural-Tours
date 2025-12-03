'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Users, MapPin, CheckCircle } from 'lucide-react'

const itineraryDetails: Record<string, any> = {
  'spirit-of-matobo': {
    title: 'Spirit of Matobo',
    duration: '3 Days',
    price: '$450',
    description: 'A transformative journey through the sacred Matobo Hills, connecting with ancient spiritual traditions and breathtaking landscapes.',
    fullDescription: `This 3-day journey takes you deep into the spiritual heart of Matobo Hills, one of Zimbabwe's most sacred landscapes. Guided by community elders who have maintained oral histories for generations, you'll experience authentic ceremonies, climb sacred peaks, and connect with the land in ways that honor tradition.

Each day is carefully designed to balance spiritual connection with physical adventure, ensuring you leave with a deeper understanding of Zimbabwean culture and your own place in the world.`,
    highlights: [
      'Sacred mountain climbs with elder guidance',
      'Traditional ceremonies and blessings',
      'Ancient rock art exploration',
      'Community meals with local families',
      'Sunset meditation at sacred sites',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Orientation',
        activities: [
          'Welcome ceremony with community elders',
          'Cultural protocol briefing',
          'Traditional meal with host family',
          'Evening storytelling session',
        ],
      },
      {
        day: 2,
        title: 'Sacred Mountain Climb',
        activities: [
          'Early morning blessing ceremony',
          'Guided climb with elder',
          'Lunch at sacred site',
          'Oral history sharing',
          'Sunset meditation',
        ],
      },
      {
        day: 3,
        title: 'Rock Art and Departure',
        activities: [
          'Ancient rock art exploration',
          'Traditional craft workshop',
          'Farewell ceremony',
          'Departure',
        ],
      },
    ],
  },
}

export default function ItineraryDetailPage({ params }: { params: { id: string } }) {
  const itinerary = itineraryDetails[params.id]

  if (!itinerary) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <Link href="/itineraries" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Itineraries</span>
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{itinerary.title}</h1>
            <p className="text-xl opacity-90">{itinerary.description}</p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Description */}
            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-earth-900 mb-4">About This Journey</h2>
              <p className="text-earth-700 leading-relaxed whitespace-pre-line">
                {itinerary.fullDescription}
              </p>
            </section>

            {/* Daily Itinerary */}
            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-earth-900 mb-6">Daily Itinerary</h2>
              <div className="space-y-6">
                {itinerary.itinerary.map((day: any) => (
                  <div key={day.day} className="border-l-4 border-ochre-600 pl-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-ochre-100 text-ochre-600 flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-semibold text-earth-900">{day.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {day.activities.map((activity: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2 text-earth-700">
                          <CheckCircle className="text-ochre-600 mt-1 flex-shrink-0" size={18} />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-lg sticky top-24">
              <div className="mb-6">
                <div className="text-4xl font-bold text-ochre-600 mb-2">{itinerary.price}</div>
                <div className="text-earth-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-earth-700">
                  <Calendar className="text-ochre-600" size={20} />
                  <span>{itinerary.duration}</span>
                </div>
                <div className="flex items-center space-x-3 text-earth-700">
                  <Users className="text-ochre-600" size={20} />
                  <span>Small groups (max 8)</span>
                </div>
                <div className="flex items-center space-x-3 text-earth-700">
                  <MapPin className="text-ochre-600" size={20} />
                  <span>Multiple locations</span>
                </div>
              </div>

              <Link 
                href={`/booking?itinerary=${params.id}`}
                className="btn-primary w-full text-center block mb-4"
              >
                Book This Journey
              </Link>

              <div className="border-t border-earth-200 pt-6">
                <h3 className="font-semibold text-earth-900 mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {itinerary.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-earth-600">
                      <span className="text-ochre-600 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

