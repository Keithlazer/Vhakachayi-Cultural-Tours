'use client'

import { Shield, Camera, Users, Heart, BookOpen } from 'lucide-react'

const protocols = [
  {
    icon: Shield,
    title: 'Respect for Sacred Sites',
    content: [
      'Sacred sites are places of deep spiritual significance. Approach with humility and respect.',
      'Follow elder guidance at all times. They understand the protocols required for each location.',
      'Some areas may be restricted or require special permissions. Always ask before entering.',
      'Do not remove any objects, plants, or stones from sacred sites.',
      'Maintain quiet and respectful behavior. These are places of prayer and ceremony.',
    ],
  },
  {
    icon: Camera,
    title: 'Photography Guidelines',
    content: [
      'Always ask for explicit permission before photographing elders, ceremonies, or community members.',
      'Respect "no" immediately and without question. Some moments are not meant to be photographed.',
      'Sacred ceremonies may have photography restrictions. Follow all guidelines provided.',
      'Do not use flash photography during ceremonies or in sacred spaces.',
      'Watermark or protect images of sacred sites to prevent misuse.',
      'Share images respectfully and with proper context when posting on social media.',
    ],
  },
  {
    icon: Users,
    title: 'Interacting with Elders',
    content: [
      'Elders are the keepers of traditional knowledge. Show respect through proper greetings.',
      'Use appropriate titles and greetings (learn these during your orientation).',
      'Listen more than you speak. Traditional knowledge is shared through stories and observation.',
      'Do not interrupt or challenge elder guidance, even if you have questions.',
      'Ask questions respectfully and at appropriate times.',
      'Follow dress codes and behavioral guidelines provided by elders.',
    ],
  },
  {
    icon: Heart,
    title: 'Community Respect',
    content: [
      'You are a guest in these communities. Act with humility and gratitude.',
      'Participate in community activities when invited, but do not impose.',
      'Respect local customs, even if they differ from your own.',
      'Support local economies by purchasing from community vendors when appropriate.',
      'Do not make promises you cannot keep regarding future support or assistance.',
      'Understand that your visit directly impacts the community. Act accordingly.',
    ],
  },
  {
    icon: BookOpen,
    title: 'Cultural Learning',
    content: [
      'Approach cultural learning with an open mind and heart.',
      'Do not compare or judge traditions against your own cultural background.',
      'Traditional knowledge is often passed orally. Respect the oral tradition.',
      'Some knowledge may be considered sacred and not for public sharing. Respect boundaries.',
      'Ask before sharing stories or knowledge you learn during your journey.',
      'Remember: you are learning, not teaching. Listen and observe.',
    ],
  },
]

export default function CulturalProtocolsPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-4">
            <Shield size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">Cultural Protocols</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl">
            Guidelines for respectful engagement with Zimbabwean culture, sacred sites, and communities.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-ochre-50 border-l-4 border-ochre-600 p-6 mb-8">
              <p className="text-earth-900 leading-relaxed">
                <strong>Cultural Sensitivity Override:</strong> Any design, development, or visitor decision that 
                conflicts with cultural protocols (determined by our elder advisory board) takes precedence over 
                technical or business requirements. The website and all experiences must first honor tradition, 
                then optimize for conversion.
              </p>
            </div>

            <p className="text-lg text-earth-700 mb-6 leading-relaxed">
              These protocols are not suggestions—they are essential requirements for participating in VHAKACHAYI 
              experiences. They ensure that we honor tradition, respect communities, and protect sacred knowledge 
              while creating meaningful connections between travelers and the land.
            </p>

            <p className="text-lg text-earth-700 leading-relaxed">
              Before booking any experience, please read these guidelines carefully. Understanding and following 
              these protocols is mandatory for all participants.
            </p>
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {protocols.map((protocol, index) => {
              const Icon = protocol.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-ochre-200">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-earth-900">{protocol.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {protocol.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3 text-earth-700">
                        <span className="text-ochre-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-earth-900 mb-6">Dress Code Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-deep-green-50 border border-deep-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-earth-900 mb-3">✓ Appropriate Attire</h3>
                <ul className="space-y-2 text-sm text-earth-700">
                  <li>• Shoulders and knees covered</li>
                  <li>• Modest, respectful clothing</li>
                  <li>• Comfortable walking shoes</li>
                  <li>• Traditional or culturally appropriate attire when provided</li>
                </ul>
              </div>
              <div className="bg-ochre-50 border border-ochre-200 rounded-lg p-6">
                <h3 className="font-semibold text-earth-900 mb-3">✗ Inappropriate Attire</h3>
                <ul className="space-y-2 text-sm text-earth-700">
                  <li>• Revealing or tight clothing</li>
                  <li>• Clothing with offensive imagery</li>
                  <li>• Excessive jewelry or accessories</li>
                  <li>• Inappropriate footwear for sacred sites</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-ochre-600 to-terracotta-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book with Respect?</h2>
          <p className="text-xl mb-8 opacity-90">
            Understanding these protocols is the first step in your return journey.
          </p>
          <a href="/booking" className="btn-primary bg-white text-ochre-600 hover:bg-earth-50 inline-block">
            Begin Your Journey
          </a>
        </div>
      </section>
    </div>
  )
}

