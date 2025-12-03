'use client'

import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface PackingItem {
  id: string
  name: string
  required: boolean
  category: 'clothing' | 'footwear' | 'accessories' | 'essentials'
}

const packingItems: PackingItem[] = [
  { id: '1', name: 'Modest clothing (shoulders and knees covered)', required: true, category: 'clothing' },
  { id: '2', name: 'Comfortable walking shoes', required: true, category: 'footwear' },
  { id: '3', name: 'Hat for sun protection', required: true, category: 'accessories' },
  { id: '4', name: 'Sunscreen (SPF 30+)', required: true, category: 'essentials' },
  { id: '5', name: 'Water bottle', required: true, category: 'essentials' },
  { id: '6', name: 'Traditional attire (if provided)', required: false, category: 'clothing' },
  { id: '7', name: 'Rain jacket (seasonal)', required: false, category: 'clothing' },
  { id: '8', name: 'Camera (with permission protocols)', required: false, category: 'accessories' },
  { id: '9', name: 'Respectful jewelry (minimal)', required: false, category: 'accessories' },
  { id: '10', name: 'Notebook for learning', required: false, category: 'essentials' },
]

export default function PackingListGenerator() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newSelected = new Set(selectedItems)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedItems(newSelected)
  }

  const categories = ['clothing', 'footwear', 'accessories', 'essentials'] as const

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-earth-900 mb-6">Culturally Appropriate Packing List</h2>
      <p className="text-earth-600 mb-6">
        Use this checklist to ensure you pack respectfully for your cultural journey.
      </p>

      <div className="space-y-6">
        {categories.map((category) => {
          const categoryItems = packingItems.filter(item => item.category === category)
          if (categoryItems.length === 0) return null

          return (
            <div key={category}>
              <h3 className="font-semibold text-earth-900 mb-3 capitalize">{category}</h3>
              <div className="space-y-2">
                {categoryItems.map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedItems.has(item.id)
                        ? 'border-ochre-600 bg-ochre-50'
                        : 'border-earth-200 hover:border-ochre-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedItems.has(item.id)}
                      onChange={() => toggleItem(item.id)}
                      className="sr-only"
                    />
                    <div className={`flex-shrink-0 ${selectedItems.has(item.id) ? 'text-ochre-600' : 'text-earth-400'}`}>
                      {selectedItems.has(item.id) ? (
                        <CheckCircle size={20} />
                      ) : (
                        <XCircle size={20} />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className={`${selectedItems.has(item.id) ? 'text-earth-900' : 'text-earth-600'}`}>
                        {item.name}
                      </span>
                      {item.required && (
                        <span className="ml-2 text-xs text-ochre-600 font-semibold">Required</span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-ochre-50 border border-ochre-200 rounded-lg">
        <p className="text-sm text-earth-700">
          <strong>Note:</strong> Some items may be provided by the community. Specific requirements 
          will be confirmed upon booking. Always prioritize respectful, modest attire.
        </p>
      </div>
    </div>
  )
}

