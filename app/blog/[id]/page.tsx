'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'

const blogPosts: Record<string, any> = {
  'climbing-the-sacred': {
    title: 'Climbing the Sacred: 5 Mountains Where Spirit Meets Summit',
    author: 'Elder Mufaro',
    date: '2024-03-15',
    category: 'Sacred Sites',
    content: `The mountains of Zimbabwe are not just geological formations—they are living, breathing entities that hold the stories of our ancestors. As a third-generation keeper of Matobo oral histories, I have spent my life learning the sacred protocols required to respectfully visit these powerful places.

In this article, I share five sacred mountains where spirit truly meets summit, and the cultural protocols that must be honored when visiting each one.

## 1. Matobo Hills

The Matobo Hills hold deep spiritual significance for both Shona and Ndebele people. These ancient granite formations are believed to be the dwelling place of ancestral spirits. Climbing here requires:

- Elder guidance (mandatory)
- Proper permits from traditional authorities
- Respectful attire and behavior
- Understanding of ceremonial protocols

## 2. Mount Nyangani

Zimbabwe's highest peak, Mount Nyangani, is considered a place of great spiritual power. Traditional beliefs hold that the mountain is protected by ancestral spirits, and visitors must approach with humility and respect.

[Continue reading...]`,
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ochre-600 to-terracotta-600 text-white section-padding">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Stories</span>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 text-sm mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div className="text-earth-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

