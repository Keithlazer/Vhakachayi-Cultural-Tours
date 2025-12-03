'use client'

import { TrendingUp, Users, DollarSign, Heart, Award } from 'lucide-react'

const impactMetrics = [
  {
    icon: Users,
    title: 'Elders Employed',
    value: '24',
    description: 'Community elders directly employed as guides and cultural advisors',
  },
  {
    icon: DollarSign,
    title: 'Community Benefits',
    value: '$45,000',
    description: 'Total tourism dollars distributed to partner communities this year',
  },
  {
    icon: Heart,
    title: 'Villages Supported',
    value: '12',
    description: 'Rural communities receiving direct economic benefits',
  },
  {
    icon: Award,
    title: 'Cultural Preservation',
    value: '100%',
    description: 'Of experiences designed with elder advisory board approval',
  },
]

const distributionBreakdown = [
  { category: 'Elder Guide Fees', percentage: 40, color: 'ochre' },
  { category: 'Community Development', percentage: 30, color: 'deep-green' },
  { category: 'Cultural Preservation', percentage: 20, color: 'terracotta' },
  { category: 'Operational Costs', percentage: 10, color: 'earth' },
]

export default function CommunityImpactPage() {
  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Impact</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Transparent breakdown of how your journey directly supports communities and preserves culture.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">Our Impact</h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Every booking creates measurable positive impact for communities and cultural preservation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div
                  key={index}
                  className="bg-earth-50 rounded-xl p-6 border border-ochre-200 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-ochre-100 text-ochre-600 flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <div className="text-4xl font-bold text-ochre-600 mb-2">{metric.value}</div>
                  <h3 className="font-semibold text-earth-900 mb-2">{metric.title}</h3>
                  <p className="text-sm text-earth-600">{metric.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Distribution Breakdown */}
      <section className="section-padding bg-earth-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-earth-900 mb-8 text-center">
              How Your Payment is Distributed
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                {distributionBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-earth-900">{item.category}</span>
                      <span className="text-ochre-600 font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-earth-200 rounded-full h-3">
                      <div
                        className={`bg-${item.color}-600 h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-earth-200">
                <h3 className="font-semibold text-earth-900 mb-4">What This Means</h3>
                <ul className="space-y-3 text-earth-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-ochre-600 mt-1">•</span>
                    <span>
                      <strong>Elder Guide Fees:</strong> Direct payment to community elders who share their knowledge and guide experiences.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ochre-600 mt-1">•</span>
                    <span>
                      <strong>Community Development:</strong> Funds for infrastructure, education, and economic development in partner villages.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ochre-600 mt-1">•</span>
                    <span>
                      <strong>Cultural Preservation:</strong> Support for documenting oral histories, preserving traditional knowledge, and maintaining sacred sites.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ochre-600 mt-1">•</span>
                    <span>
                      <strong>Operational Costs:</strong> Essential business operations, permits, and sustainable tourism management.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-earth-900 mb-8 text-center">Impact Stories</h2>
            <div className="space-y-6">
              <div className="bg-earth-50 rounded-xl p-6 border border-ochre-200">
                <p className="text-earth-700 leading-relaxed mb-4">
                  "The income from guiding has allowed me to send my grandchildren to school. But more importantly, 
                  it has given me a platform to share the stories my ancestors told me. These stories must not be lost."
                </p>
                <p className="text-ochre-600 font-semibold">— Elder Mufaro, Matobo Hills Guide</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 border border-ochre-200">
                <p className="text-earth-700 leading-relaxed mb-4">
                  "The community development fund helped us build a new classroom for our village school. Our children 
                  now have a proper place to learn, and we're preserving our culture by teaching traditional knowledge alongside modern education."
                </p>
                <p className="text-ochre-600 font-semibold">— Village Head, Great Zimbabwe Community</p>
              </div>

              <div className="bg-earth-50 rounded-xl p-6 border border-ochre-200">
                <p className="text-earth-700 leading-relaxed mb-4">
                  "Working with VHAKACHAYI has created sustainable income for our community. We're not dependent on 
                  handouts—we're earning through sharing our culture respectfully. This is the right way."
                </p>
                <p className="text-ochre-600 font-semibold">— Community Coordinator, Traditional Food Journey Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Commitment */}
      <section className="section-padding bg-gradient-to-r from-deep-green-600 to-deep-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Our Transparency Commitment</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We believe in complete transparency about how tourism dollars benefit communities. 
            Quarterly impact reports are available upon request, and we welcome questions about our distribution model.
          </p>
          <a href="/contact" className="btn-primary bg-white text-deep-green-600 hover:bg-earth-50 inline-block">
            Ask About Our Impact
          </a>
        </div>
      </section>
    </div>
  )
}

