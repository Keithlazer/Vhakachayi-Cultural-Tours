'use client'

import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Diaspora - London, UK',
    type: 'Diaspora',
    quote: 'Returning to Zimbabwe after 20 years, VHAKACHAYI helped me reconnect with my ancestral roots in ways I never imagined. The elders\' stories brought tears to my eyes—I finally understood where I came from.',
    rating: 5,
  },
  {
    name: 'James K.',
    location: 'International Traveler - USA',
    type: 'International',
    quote: 'This wasn\'t just a tour—it was a spiritual awakening. Climbing the sacred mountains with elder guidance transformed my understanding of Africa. The old ways truly carry the deepest magic.',
    rating: 5,
  },
  {
    name: 'Tendai M.',
    location: 'Local - Harare, Zimbabwe',
    type: 'Local',
    quote: 'As a Zimbabwean, I thought I knew my culture. VHAKACHAYI showed me depths I never knew existed. The traditional food journey with my grandmother\'s generation was unforgettable.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-ochre-50 to-terracotta-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">
            Stories of Transformation
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Hear from those who have walked the path of reconnection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-ochre-200"
            >
              <Quote className="text-ochre-400 mb-4" size={32} />
              <p className="text-earth-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-earth-900">{testimonial.name}</div>
                  <div className="text-sm text-earth-600">{testimonial.location}</div>
                  <div className="text-xs text-ochre-600 mt-1 font-medium">
                    {testimonial.type} Traveler
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-ochre-400 text-ochre-400" size={16} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

