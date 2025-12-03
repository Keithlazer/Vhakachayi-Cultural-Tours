'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import LanguageSelector from './LanguageSelector'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isJourneyMenuOpen, setIsJourneyMenuOpen] = useState(false)

  const journeyTypes = [
    { name: 'Cultural Immersion', href: '/experiences?type=cultural' },
    { name: 'Mountain Climbing', href: '/experiences?type=mountain' },
    { name: 'Nature Adventures', href: '/experiences?type=nature' },
    { name: 'Traditional Food Journeys', href: '/experiences?type=food' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient">VHAKACHAYI</div>
            <span className="text-sm text-earth-600 hidden sm:inline">Cultural Tours</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-earth-700 hover:text-ochre-600 transition-colors">
              Home
            </Link>
            
            {/* Journey Types Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsJourneyMenuOpen(true)}
              onMouseLeave={() => setIsJourneyMenuOpen(false)}
            >
              <button className="text-earth-700 hover:text-ochre-600 transition-colors flex items-center">
                Journey Types
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isJourneyMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2">
                  {journeyTypes.map((type) => (
                    <Link
                      key={type.name}
                      href={type.href}
                      className="block px-4 py-2 text-earth-700 hover:bg-ochre-50 hover:text-ochre-600 transition-colors"
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/experiences" className="text-earth-700 hover:text-ochre-600 transition-colors">
              Experiences
            </Link>
            <Link href="/itineraries" className="text-earth-700 hover:text-ochre-600 transition-colors">
              Itineraries
            </Link>
            <Link href="/about" className="text-earth-700 hover:text-ochre-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-earth-700 hover:text-ochre-600 transition-colors">
              Stories
            </Link>
            <Link 
              href="/contact" 
              className="bg-ochre-600 text-white px-4 py-2 rounded-lg hover:bg-ochre-700 transition-colors"
            >
              Contact
            </Link>
            
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-earth-700 hover:text-ochre-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            <Link href="/" className="block text-earth-700 hover:text-ochre-600">
              Home
            </Link>
            <div className="space-y-2 pl-4">
              <div className="text-earth-500 text-sm font-semibold">Journey Types</div>
              {journeyTypes.map((type) => (
                <Link
                  key={type.name}
                  href={type.href}
                  className="block text-earth-700 hover:text-ochre-600 pl-4"
                >
                  {type.name}
                </Link>
              ))}
            </div>
            <Link href="/experiences" className="block text-earth-700 hover:text-ochre-600">
              Experiences
            </Link>
            <Link href="/itineraries" className="block text-earth-700 hover:text-ochre-600">
              Itineraries
            </Link>
            <Link href="/about" className="block text-earth-700 hover:text-ochre-600">
              About
            </Link>
            <Link href="/blog" className="block text-earth-700 hover:text-ochre-600">
              Stories
            </Link>
            <Link 
              href="/contact" 
              className="block bg-ochre-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

