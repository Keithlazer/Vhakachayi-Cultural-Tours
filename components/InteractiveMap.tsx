'use client'

import { MapPin } from 'lucide-react'

interface Location {
  id: string
  name: string
  type: 'sacred-site' | 'community' | 'meeting-point'
  coordinates: [number, number] // [lat, lng]
  description: string
  requiresPermission?: boolean
}

const locations: Location[] = [
  {
    id: 'matobo',
    name: 'Matobo Hills',
    type: 'sacred-site',
    coordinates: [-20.5, 28.5],
    description: 'Sacred mountains requiring permits and elder guidance',
    requiresPermission: true,
  },
  {
    id: 'great-zimbabwe',
    name: 'Great Zimbabwe',
    type: 'sacred-site',
    coordinates: [-20.27, 30.93],
    description: 'Ancient ruins with deep cultural significance',
    requiresPermission: true,
  },
  {
    id: 'harare',
    name: 'Harare Office',
    type: 'meeting-point',
    coordinates: [-17.83, 31.05],
    description: 'Main meeting point for experiences',
    requiresPermission: false,
  },
]

export default function InteractiveMap() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-earth-900 mb-6">Experience Locations</h2>
      <p className="text-earth-600 mb-6">
        Our experiences take place in partnership with communities across Zimbabwe. 
        Sacred sites require proper permits and elder guidance.
      </p>

      {/* Placeholder for actual map integration (Google Maps, Mapbox, etc.) */}
      <div className="bg-earth-100 rounded-lg h-96 flex items-center justify-center mb-6 relative overflow-hidden">
        <div className="text-center z-10">
          <MapPin className="mx-auto text-ochre-600 mb-4" size={48} />
          <p className="text-earth-700 font-semibold mb-2">Interactive Map</p>
          <p className="text-earth-600 text-sm">
            Integrate with Google Maps or Mapbox to show locations
          </p>
        </div>
        
        {/* Location markers overlay */}
        <div className="absolute inset-0">
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute"
              style={{
                left: `${((location.coordinates[1] + 35) / 10) * 100}%`,
                top: `${((location.coordinates[0] + 25) / 10) * 100}%`,
              }}
            >
              <div className="relative">
                <div className={`w-4 h-4 rounded-full ${
                  location.type === 'sacred-site' ? 'bg-ochre-600' :
                  location.type === 'community' ? 'bg-deep-green-600' :
                  'bg-terracotta-600'
                } border-2 border-white shadow-lg`} />
                {location.requiresPermission && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border border-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location list */}
      <div className="space-y-4">
        {locations.map((location) => (
          <div
            key={location.id}
            className="flex items-start space-x-4 p-4 bg-earth-50 rounded-lg border border-ochre-200"
          >
            <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
              location.type === 'sacred-site' ? 'bg-ochre-600' :
              location.type === 'community' ? 'bg-deep-green-600' :
              'bg-terracotta-600'
            }`} />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-earth-900">{location.name}</h3>
                {location.requiresPermission && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Permission Required
                  </span>
                )}
              </div>
              <p className="text-sm text-earth-600">{location.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-ochre-50 border border-ochre-200 rounded-lg">
        <p className="text-sm text-earth-700">
          <strong>Note:</strong> Sacred sites are marked with special indicators. 
          All visits require proper permits and elder guidance. Specific meeting points 
          are provided upon booking confirmation.
        </p>
      </div>
    </div>
  )
}

