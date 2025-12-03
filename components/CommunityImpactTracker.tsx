'use client'

import { TrendingUp, Users, DollarSign, Heart } from 'lucide-react'

interface ImpactMetric {
  icon: typeof TrendingUp
  label: string
  value: string
  change?: string
}

const metrics: ImpactMetric[] = [
  {
    icon: Users,
    label: 'Elders Employed',
    value: '24',
    change: '+3 this month',
  },
  {
    icon: DollarSign,
    label: 'Community Benefits',
    value: '$45,000',
    change: '+$5,200 this month',
  },
  {
    icon: Heart,
    label: 'Villages Supported',
    value: '12',
    change: '+1 this quarter',
  },
  {
    icon: TrendingUp,
    label: 'Growth Rate',
    value: '35%',
    change: 'Year over year',
  },
]

export default function CommunityImpactTracker() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-earth-900 mb-6">Real-Time Community Impact</h2>
      <p className="text-earth-600 mb-8">
        See how your journey directly supports communities and cultural preservation.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div
              key={index}
              className="bg-earth-50 rounded-lg p-6 border border-ochre-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center">
                  <Icon size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-ochre-600 mb-1">{metric.value}</div>
              <div className="text-sm font-semibold text-earth-900 mb-1">{metric.label}</div>
              {metric.change && (
                <div className="text-xs text-earth-600">{metric.change}</div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 p-4 bg-deep-green-50 border border-deep-green-200 rounded-lg">
        <p className="text-sm text-deep-green-800">
          <strong>Transparency Promise:</strong> All impact metrics are updated monthly and verified 
          by our community partners. Quarterly reports available upon request.
        </p>
      </div>
    </div>
  )
}

