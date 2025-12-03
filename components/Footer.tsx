import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-100">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">VHAKACHAYI</h3>
            <p className="text-earth-300 mb-4">
              The old ways carry the deepest magic. Reconnecting you to Zimbabwe's soul through authentic cultural journeys.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-400 hover:text-ochre-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-earth-400 hover:text-ochre-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-earth-400 hover:text-ochre-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Journey Types</h4>
            <ul className="space-y-2 text-earth-300">
              <li><Link href="/experiences?type=cultural" className="hover:text-ochre-400 transition-colors">Cultural Immersion</Link></li>
              <li><Link href="/experiences?type=mountain" className="hover:text-ochre-400 transition-colors">Mountain Climbing</Link></li>
              <li><Link href="/experiences?type=nature" className="hover:text-ochre-400 transition-colors">Nature Adventures</Link></li>
              <li><Link href="/experiences?type=food" className="hover:text-ochre-400 transition-colors">Food Journeys</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-earth-300">
              <li><Link href="/cultural-protocols" className="hover:text-ochre-400 transition-colors">Cultural Protocols</Link></li>
              <li><Link href="/community-impact" className="hover:text-ochre-400 transition-colors">Community Impact</Link></li>
              <li><Link href="/blog" className="hover:text-ochre-400 transition-colors">Stories & Blog</Link></li>
              <li><Link href="/about" className="hover:text-ochre-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-earth-300">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@vhakachayi.com" className="hover:text-ochre-400 transition-colors">
                  info@vhakachayi.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+263771234567" className="hover:text-ochre-400 transition-colors">
                  +263 77 123 4567
                </a>
              </li>
              <li className="mt-4">
                <a 
                  href="https://wa.me/263771234567" 
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-800 pt-8 flex flex-col md:flex-row justify-between items-center text-earth-400 text-sm">
          <p>&copy; {new Date().getFullYear()} VHAKACHAYI Cultural Tours. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-ochre-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ochre-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

