'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Users, MapPin, Shield, BookOpen } from 'lucide-react'
import CulturalProtocolQuiz from '@/components/CulturalProtocolQuiz'

// This would typically come from Sanity CMS
const experienceDetails: Record<string, any> = {
  'matobo-sacred-climb': {
    title: 'Matobo Sacred Mountain Climb',
    type: 'Mountain Climbing',
    description: 'Experience the spiritual significance of Matobo Hills through a guided climb with community elders who share the oral histories and cultural protocols associated with these sacred peaks.',
    fullDescription: `The Matobo Hills hold deep spiritual significance for the Shona and Ndebele people. This experience takes you on a journey through ancient paths, guided by elders who understand the sacred protocols required to respectfully visit these mountains.

You'll learn about the spiritual significance of each peak, the ceremonies that have taken place here for generations, and the proper ways to honor the land and ancestors. This is not just a climb—it's a spiritual journey that requires respect, humility, and cultural awareness.`,
    duration: 'Full Day (8 hours)',
    price: '$150 USD',
    includes: [
      'Elder guide with deep cultural knowledge',
      'Sacred site permits and permissions',
      'Traditional blessing ceremony',
      'Traditional lunch with community',
      'Cultural protocol briefing',
      'Transportation from meeting point',
    ],
    requirements: [
      'Moderate fitness level required',
      'Respectful attire (guidelines provided)',
      'Cultural protocol quiz completion',
      'Photography permissions obtained',
    ],
    guide: {
      name: 'Elder Mufaro',
      lineage: 'Third-generation keeper of Matobo oral histories',
      bio: 'Elder Mufaro has guided visitors to Matobo for over 30 years, sharing the stories passed down from his ancestors while ensuring cultural protocols are honored.',
    },
  },
}

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const experience = experienceDetails[params.id]

  if (!experience) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <Link href="/experiences" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Experiences</span>
          </Link>
          <div className="max-w-3xl">
            <span className="text-ochre-200 text-sm font-semibold uppercase tracking-wide mb-2 block">
              {experience.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{experience.title}</h1>
            <p className="text-xl opacity-90">{experience.description}</p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Description */}
            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-earth-900 mb-4">About This Experience</h2>
              <p className="text-earth-700 leading-relaxed whitespace-pre-line">
                {experience.fullDescription}
              </p>
            </section>

            {/* Meet Your Guide */}
            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-earth-900 mb-4">Meet Your Guide</h2>
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 rounded-full bg-ochre-100 flex items-center justify-center text-ochre-600 text-2xl font-bold">
                  {experience.guide.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-earth-900 mb-1">{experience.guide.name}</h3>
                  <p className="text-ochre-600 text-sm mb-2">{experience.guide.lineage}</p>
                  <p className="text-earth-600">{experience.guide.bio}</p>
                </div>
              </div>
            </section>

            {/* Cultural Protocols */}
            <section className="bg-white rounded-xl p-8 shadow-lg border-2 border-ochre-200">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="text-ochre-600" size={24} />
                <h2 className="text-2xl font-bold text-earth-900">Cultural Protocols</h2>
              </div>
              <p className="text-earth-700 mb-4">
                Before booking, please review our cultural respect guidelines. This experience involves sacred sites 
                and requires understanding of proper protocols.
              </p>
              <Link 
                href="/cultural-protocols" 
                className="text-ochre-600 hover:text-ochre-700 font-semibold inline-flex items-center space-x-2"
              >
                <BookOpen size={18} />
                <span>Read Cultural Protocols</span>
              </Link>
            </section>

            {/* Cultural Protocol Quiz */}
            <CulturalProtocolQuiz />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-lg sticky top-24">
              <div className="mb-6">
                <div className="text-4xl font-bold text-ochre-600 mb-2">{experience.price}</div>
                <div className="text-earth-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-earth-700">
                  <Calendar className="text-ochre-600" size={20} />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center space-x-3 text-earth-700">
                  <Users className="text-ochre-600" size={20} />
                  <span>Small groups (max 8)</span>
                </div>
                <div className="flex items-center space-x-3 text-earth-700">
                  <MapPin className="text-ochre-600" size={20} />
                  <span>Matobo Hills, Zimbabwe</span>
                </div>
              </div>

              <Link 
                href={`/booking?experience=${params.id}`}
                className="btn-primary w-full text-center block mb-4"
              >
                Book This Experience
              </Link>

              <div className="border-t border-earth-200 pt-6">
                <h3 className="font-semibold text-earth-900 mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {experience.includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-earth-600">
                      <span className="text-ochre-600 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-earth-200 pt-6 mt-6">
                <h3 className="font-semibold text-earth-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {experience.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-earth-600">
                      <span className="text-ochre-600 mt-1">•</span>
                      <span>{req}</span>
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

