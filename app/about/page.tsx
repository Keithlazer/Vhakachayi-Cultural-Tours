'use client'

import { Heart, Users, Award, MapPin } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Heart,
    title: 'Cultural Respect',
    description: 'Every decision honors tradition first. Cultural protocols guide all experiences.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Transparent benefit distribution ensures tourism dollars directly support local communities.',
  },
  {
    icon: Award,
    title: 'Authentic Experiences',
    description: 'No staged performances. Only genuine encounters that honor the old ways.',
  },
  {
    icon: MapPin,
    title: 'Elder Guidance',
    description: 'Learn from those who carry generations of traditional knowledge and wisdom.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About VHAKACHAYI</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            The old ways carry the deepest magic. This is our story.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-6">
                Why VHAKACHAYI?
              </h2>
              <div className="space-y-4 text-lg text-earth-700 leading-relaxed">
                <p>
                  <strong>VHAKACHAYI</strong> means "The Return Journey" in Shona. Our founder, after spending years 
                  in the diaspora, returned to Zimbabwe seeking reconnection with ancestral roots. What began as a 
                  personal journey of rediscovery became the foundation for creating authentic experiences that honor 
                  both tradition and transformation.
                </p>
                <p>
                  During this return journey, the founder discovered that many sacred sites, traditional knowledge, 
                  and cultural practices were at risk of being lost or misunderstood. At the same time, there was a 
                  growing desire from diaspora communities and international travelers to experience authentic Zimbabwean 
                  culture—not staged performances, but genuine connections with the land, the elders, and the spirit of Africa.
                </p>
                <p>
                  VHAKACHAYI was born from this need: to create respectful, authentic cultural experiences that honor 
                  tradition while empowering communities and reconnecting people to their heritage.
                </p>
              </div>
            </div>
            <div className="bg-earth-100 rounded-xl p-8 border-2 border-ochre-200">
              <div className="text-6xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold text-earth-900 mb-4">Our Mission</h3>
              <p className="text-earth-700 leading-relaxed mb-4">
                To reconnect people with Zimbabwe's soul through authentic cultural journeys that honor heritage, 
                empower communities, and prove the old ways still carry the deepest magic.
              </p>
              <h3 className="text-2xl font-bold text-earth-900 mb-4 mt-6">Our Vision</h3>
              <p className="text-earth-700 leading-relaxed">
                A world where cultural tourism preserves and celebrates traditional knowledge while creating 
                meaningful connections between travelers and the communities they visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">Our Values</h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              These principles guide every decision we make, ensuring cultural respect and community empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-ochre-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-earth-900 mb-2">{value.title}</h3>
                  <p className="text-earth-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">Our Team</h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Local elders, experienced guides, and passionate community members who make every journey possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-ochre-100 flex items-center justify-center text-ochre-600 text-3xl font-bold mx-auto mb-4">
                EM
              </div>
              <h3 className="text-xl font-semibold text-earth-900 mb-2">Elder Mufaro</h3>
              <p className="text-ochre-600 text-sm mb-2">Matobo Hills Guide</p>
              <p className="text-earth-600 text-sm">
                Third-generation keeper of Matobo oral histories with over 30 years of guiding experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-deep-green-100 flex items-center justify-center text-deep-green-600 text-3xl font-bold mx-auto mb-4">
                SM
              </div>
              <h3 className="text-xl font-semibold text-earth-900 mb-2">Sekai M.</h3>
              <p className="text-ochre-600 text-sm mb-2">Cultural Coordinator</p>
              <p className="text-earth-600 text-sm">
                Ensures all experiences honor cultural protocols and benefit local communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-terracotta-100 flex items-center justify-center text-terracotta-600 text-3xl font-bold mx-auto mb-4">
                TM
              </div>
              <h3 className="text-xl font-semibold text-earth-900 mb-2">Tendai M.</h3>
              <p className="text-ochre-600 text-sm mb-2">Community Liaison</p>
              <p className="text-earth-600 text-sm">
                Connects travelers with communities and manages transparent benefit distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-ochre-600 to-terracotta-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Return Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join us in honoring tradition, empowering communities, and reconnecting with the spirit of Africa.
          </p>
          <Link href="/booking" className="btn-primary bg-white text-ochre-600 hover:bg-earth-50 inline-block">
            Book Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}

