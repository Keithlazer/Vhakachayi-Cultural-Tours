'use client'

import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 'climbing-the-sacred',
    title: 'Climbing the Sacred: 5 Mountains Where Spirit Meets Summit',
    excerpt: 'Discover the spiritual significance of Zimbabwe\'s sacred mountains and learn about the cultural protocols required to respectfully visit these powerful places.',
    author: 'Elder Mufaro',
    date: '2024-03-15',
    category: 'Sacred Sites',
    featured: true,
  },
  {
    id: 'unbroken-thread',
    title: 'The Unbroken Thread: Traditional Foodways of the Shona People',
    excerpt: 'Explore the rich culinary heritage of the Shona people, from traditional preparation methods to the cultural significance of each dish.',
    author: 'Sekai M.',
    date: '2024-03-10',
    category: 'Culture',
    featured: true,
  },
  {
    id: 'diaspora-homecoming',
    title: 'Diaspora Homecoming: Returning to Ancestral Lands',
    excerpt: 'Stories from diaspora travelers who returned to Zimbabwe seeking reconnection with their roots and the transformative power of coming home.',
    author: 'Tendai M.',
    date: '2024-03-05',
    category: 'Stories',
    featured: false,
  },
  {
    id: 'elders-as-guides',
    title: 'Elders as Guides: Why Wisdom is Our Best Compass',
    excerpt: 'Learn why we work exclusively with community elders and how their traditional knowledge enriches every journey.',
    author: 'Elder Mufaro',
    date: '2024-02-28',
    category: 'Philosophy',
    featured: false,
  },
  {
    id: 'community-first',
    title: 'Community First: How Your Journey Empowers Villages',
    excerpt: 'A transparent look at how tourism dollars directly support local communities through our benefit distribution system.',
    author: 'Tendai M.',
    date: '2024-02-20',
    category: 'Impact',
    featured: false,
  },
  {
    id: 'two-worlds',
    title: 'Between Two Worlds: Modern Zimbabwe Honors Ancient Traditions',
    excerpt: 'How contemporary Zimbabweans balance modern life with deep respect for traditional practices and cultural protocols.',
    author: 'Sekai M.',
    date: '2024-02-15',
    category: 'Culture',
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stories & The Old Ways</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Explore our blog series featuring elder interviews, diaspora reconnection stories, and deep dives into Zimbabwean culture.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-earth-900 mb-6">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-earth-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-ochre-300"
                >
                  <div className="flex items-center space-x-2 text-sm text-ochre-600 mb-3">
                    <span className="font-semibold">{post.category}</span>
                    {post.featured && (
                      <span className="bg-ochre-100 text-ochre-700 px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-earth-900 mb-3 group-hover:text-ochre-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-earth-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-earth-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <ArrowRight className="text-ochre-600 group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-earth-900 mb-6">All Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-earth-200"
              >
                <div className="flex items-center space-x-2 text-xs text-ochre-600 mb-3">
                  <span className="font-semibold">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-earth-900 mb-2 group-hover:text-ochre-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-earth-600 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-earth-500">
                  <div className="flex items-center space-x-2">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                  <ArrowRight className="text-ochre-600 group-hover:translate-x-1 transition-transform" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

