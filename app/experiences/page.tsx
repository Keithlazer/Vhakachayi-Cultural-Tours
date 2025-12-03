'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Mountain, Users, UtensilsCrossed, Trees, Filter, X } from 'lucide-react'

type ExperienceType = 'all' | 'cultural' | 'mountain' | 'nature' | 'food'

interface Experience {
  id: string
  title: string
  type: ExperienceType
  description: string
  duration: string
  price: string
  image: string
  featured: boolean
}

const experiences: Experience[] = [
  {
    id: 'matobo-sacred-climb',
    title: 'Matobo Sacred Mountain Climb',
    type: 'mountain',
    description: 'Climb the sacred hills of Matobo with elder guidance, learning the spiritual significance of each peak.',
    duration: 'Full Day',
    price: '$150',
    image: '/images/matobo.jpg',
    featured: true,
  },
  {
    id: 'shona-ceremony',
    title: 'Traditional Shona Ceremony Experience',
    type: 'cultural',
    description: 'Participate in authentic ceremonies with community elders, understanding the deep spiritual traditions.',
    duration: 'Half Day',
    price: '$120',
    image: '/images/ceremony.jpg',
    featured: true,
  },
  {
    id: 'traditional-cooking',
    title: 'Traditional Food Journey',
    type: 'food',
    description: 'Learn to prepare traditional dishes with community elders, from sadza to traditional stews.',
    duration: 'Half Day',
    price: '$100',
    image: '/images/cooking.jpg',
    featured: false,
  },
  {
    id: 'great-zimbabwe-walk',
    title: 'Great Zimbabwe Heritage Walk',
    type: 'cultural',
    description: 'Explore the ancient ruins with guides who share the oral histories passed down through generations.',
    duration: 'Full Day',
    price: '$140',
    image: '/images/great-zimbabwe.jpg',
    featured: true,
  },
  {
    id: 'nature-trail',
    title: 'Elder-Guided Nature Trail',
    type: 'nature',
    description: 'Discover medicinal plants and traditional ecological knowledge on a guided walk through pristine landscapes.',
    duration: 'Half Day',
    price: '$90',
    image: '/images/nature.jpg',
    featured: false,
  },
  {
    id: 'diaspora-homecoming',
    title: 'Diaspora Homecoming Journey',
    type: 'cultural',
    description: 'A special 7-day experience designed for those returning to reconnect with ancestral roots.',
    duration: '7 Days',
    price: '$1,200',
    image: '/images/homecoming.jpg',
    featured: true,
  },
]

const typeIcons = {
  cultural: Users,
  mountain: Mountain,
  nature: Trees,
  food: UtensilsCrossed,
}

function ExperiencesContent() {
  const searchParams = useSearchParams()
  const [selectedType, setSelectedType] = useState<ExperienceType>(
    (searchParams.get('type') as ExperienceType) || 'all'
  )

  const filteredExperiences = selectedType === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === selectedType)

  const types: { value: ExperienceType; label: string }[] = [
    { value: 'all', label: 'All Experiences' },
    { value: 'cultural', label: 'Cultural Immersion' },
    { value: 'mountain', label: 'Mountain Climbing' },
    { value: 'nature', label: 'Nature Adventures' },
    { value: 'food', label: 'Food Journeys' },
  ]

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Experiences</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Each journey is carefully crafted to honor tradition while creating transformative moments of connection.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-earth-200 sticky top-20 z-40">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-2">
            {types.map((type) => {
              const Icon = type.value !== 'all' ? typeIcons[type.value] : Filter
              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    selectedType === type.value
                      ? 'bg-ochre-600 text-white shadow-md'
                      : 'bg-earth-100 text-earth-700 hover:bg-earth-200'
                  }`}
                >
                  {type.value !== 'all' && <Icon size={18} />}
                  <span>{type.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredExperiences.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-earth-600 text-lg">No experiences found for this filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExperiences.map((experience) => {
                const Icon = typeIcons[experience.type]
                return (
                  <Link
                    key={experience.id}
                    href={`/experiences/${experience.id}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-earth-200"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-ochre-400 to-terracotta-500 flex items-center justify-center">
                      <Icon className="text-white opacity-50" size={64} />
                      {experience.featured && (
                        <div className="absolute top-4 right-4 bg-ochre-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-ochre-600 uppercase tracking-wide">
                          {experience.type}
                        </span>
                        <span className="text-2xl font-bold text-earth-900">{experience.price}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-earth-900 mb-2 group-hover:text-ochre-600 transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-earth-600 mb-4 text-sm leading-relaxed">
                        {experience.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-earth-500">
                        <span>Duration: {experience.duration}</span>
                        <span className="text-ochre-600 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-earth-50 flex items-center justify-center">Loading...</div>}>
      <ExperiencesContent />
    </Suspense>
  )
}

