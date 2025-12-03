'use client'

import Link from 'next/link'
import { Mountain, Users, UtensilsCrossed, Trees } from 'lucide-react'

const experiences = [
  {
    id: 'cultural',
    title: 'Cultural Immersion',
    description: 'Deep connection with Shona and Ndebele traditions through elder-guided ceremonies and community participation.',
    icon: Users,
    href: '/experiences?type=cultural',
    color: 'ochre',
  },
  {
    id: 'mountain',
    title: 'Mountain Climbing',
    description: 'Sacred summit experiences where spirit meets adventure, with proper permits and elder blessings.',
    icon: Mountain,
    href: '/experiences?type=mountain',
    color: 'terracotta',
  },
  {
    id: 'nature',
    title: 'Nature Adventures',
    description: 'Explore Zimbabwe\'s pristine landscapes while learning traditional ecological knowledge.',
    icon: Trees,
    href: '/experiences?type=nature',
    color: 'deep-green',
  },
  {
    id: 'food',
    title: 'Traditional Food Journeys',
    description: 'Taste the unbroken thread of culinary heritage through hands-on cooking with community elders.',
    icon: UtensilsCrossed,
    href: '/experiences?type=food',
    color: 'earth',
  },
]

export default function ExperienceGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
            Choose Your Journey
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Each experience is designed to honor tradition while creating transformative moments of connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => {
            const Icon = exp.icon
            return (
              <Link
                key={exp.id}
                href={exp.href}
                className="group bg-earth-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-ochre-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-${exp.color}-100 text-${exp.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-earth-900 mb-2 group-hover:text-ochre-600 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-earth-600 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

