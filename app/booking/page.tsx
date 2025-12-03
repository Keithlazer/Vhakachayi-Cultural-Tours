'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Calendar, Users, DollarSign, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import CulturalProtocolQuiz from '@/components/CulturalProtocolQuiz'

function BookingContent() {
  const searchParams = useSearchParams()
  const experienceId = searchParams.get('experience')
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    experience: experienceId || '',
    date: '',
    participants: 1,
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    currency: 'USD',
    protocolQuizPassed: false,
  })

  const experiences = [
    { id: 'matobo-sacred-climb', name: 'Matobo Sacred Mountain Climb', price: 150 },
    { id: 'shona-ceremony', name: 'Traditional Shona Ceremony Experience', price: 120 },
    { id: 'traditional-cooking', name: 'Traditional Food Journey', price: 100 },
  ]

  const selectedExperience = experiences.find(e => e.id === formData.experience)
  const totalPrice = selectedExperience ? selectedExperience.price * formData.participants : 0

  const handleNext = () => {
    if (step === 2 && !formData.protocolQuizPassed) {
      alert('Please complete the cultural protocol quiz before proceeding.')
      return
    }
    setStep(step + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', formData)
    alert('Thank you for your booking! We will confirm your journey details via email within 24 hours.')
  }

  // Get restricted dates (cultural ceremonies/seasons)
  const getRestrictedDates = () => {
    const today = new Date()
    const restricted: string[] = []
    // Add logic to calculate culturally significant dates
    return restricted
  }

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sacred Journey Planner</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Plan your return journey with dates aligned to cultural ceremonies and seasons.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step >= s ? 'bg-ochre-600 border-ochre-600 text-white' : 'border-earth-300 text-earth-400'
                }`}>
                  {step > s ? <CheckCircle size={20} /> : s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > s ? 'bg-ochre-600' : 'bg-earth-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            {/* Step 1: Experience Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-earth-900 mb-6">Select Your Experience</h2>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <label
                      key={exp.id}
                      className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.experience === exp.id
                          ? 'border-ochre-600 bg-ochre-50'
                          : 'border-earth-200 hover:border-ochre-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="experience"
                        value={exp.id}
                        checked={formData.experience === exp.id}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-earth-900">{exp.name}</div>
                          <div className="text-sm text-earth-600">${exp.price} per person</div>
                        </div>
                        <div className="text-2xl font-bold text-ochre-600">${exp.price}</div>
                      </div>
                    </label>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={!formData.experience}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Cultural Protocol Quiz */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="text-ochre-600" size={24} />
                  <h2 className="text-2xl font-bold text-earth-900">Cultural Protocol Quiz</h2>
                </div>
                <p className="text-earth-700 mb-6">
                  Before booking, please complete our cultural protocol quiz to ensure you understand 
                  the respect and protocols required for this experience.
                </p>
                <CulturalProtocolQuiz />
                <div className="flex space-x-4">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, protocolQuizPassed: true })
                      handleNext()
                    }}
                    className="btn-primary flex-1"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Date & Details */}
            {step === 3 && (
              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6">
                <h2 className="text-2xl font-bold text-earth-900 mb-6">Journey Details</h2>
                
                <div>
                  <label className="block text-sm font-semibold text-earth-900 mb-2">
                    <Calendar className="inline mr-2" size={18} />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none"
                  />
                  <p className="text-xs text-earth-600 mt-1">
                    We'll confirm availability and check for cultural ceremony conflicts.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-earth-900 mb-2">
                    <Users className="inline mr-2" size={18} />
                    Number of Participants
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="8"
                    value={formData.participants}
                    onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) })}
                    required
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-earth-900 mb-2">
                    Currency
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="ZWL">ZWL (Z$)</option>
                  </select>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Contact & Payment */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-earth-900 mb-6">Contact Information & Payment</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-earth-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-earth-900 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-earth-900 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-earth-900 mb-2">Special Requests</label>
                    <input
                      type="text"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none"
                      placeholder="Dietary requirements, accessibility needs, etc."
                    />
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-earth-50 rounded-lg p-6 border border-ochre-200">
                  <h3 className="font-semibold text-earth-900 mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-earth-600">Experience:</span>
                      <span className="text-earth-900">{selectedExperience?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-earth-600">Participants:</span>
                      <span className="text-earth-900">{formData.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-earth-600">Date:</span>
                      <span className="text-earth-900">{formData.date || 'To be confirmed'}</span>
                    </div>
                    <div className="border-t border-earth-300 pt-2 mt-2 flex justify-between font-bold text-lg">
                      <span className="text-earth-900">Total:</span>
                      <span className="text-ochre-600">
                        {formData.currency === 'USD' ? '$' : 'Z$'}{totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-ochre-50 border border-ochre-200 rounded-lg p-4 text-sm text-earth-700">
                  <strong>Payment Options:</strong> We accept Stripe (international) and EcoCash/OneMoney (local/diaspora). 
                  Payment instructions will be sent upon booking confirmation.
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                  >
                    Complete Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-earth-50 flex items-center justify-center">Loading...</div>}>
      <BookingContent />
    </Suspense>
  )
}

