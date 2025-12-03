'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Have questions about your journey? We're here to help you plan your return to Zimbabwe.
          </p>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-earth-900 mb-6">Get in Touch</h2>
              <p className="text-earth-700 mb-8 leading-relaxed">
                Whether you're planning your first journey or have questions about cultural protocols, 
                our team is ready to assist you. We respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-900 mb-1">Email</h3>
                  <a href="mailto:info@vhakachayi.com" className="text-ochre-600 hover:text-ochre-700">
                    info@vhakachayi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-900 mb-1">Phone</h3>
                  <a href="tel:+263771234567" className="text-ochre-600 hover:text-ochre-700">
                    +263 77 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-900 mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/263771234567" 
                    className="text-ochre-600 hover:text-ochre-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-ochre-100 text-ochre-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-900 mb-1">Office</h3>
                  <p className="text-earth-600">
                    Harare, Zimbabwe<br />
                    (By appointment only)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-ochre-50 border border-ochre-200 rounded-xl p-6">
              <h3 className="font-semibold text-earth-900 mb-2">Community Partner Locations</h3>
              <p className="text-sm text-earth-700 leading-relaxed">
                Our experiences take place in partnership with communities across Zimbabwe, including 
                Matobo Hills, Great Zimbabwe, and various rural villages. Specific meeting points 
                are provided upon booking confirmation.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-earth-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-earth-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-earth-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-earth-900 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-earth-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

