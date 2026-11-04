'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/ui/ContactModal'
import { ArrowRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Mike Walker is one of the most brilliant people I've ever met. He sees around corners and helped me understand and love the business side of my business. Working with Mike is like having a business genius in your corner.",
    name: 'Kim OHara',
    role: 'Book Coach to Best Sellers',
    initials: 'KO',
    color: '#1E3A5F',
  },
  {
    quote: "Working with Mike was incredible. He gave me clarity and direction that completely shifted how I operate. If you get the chance to work with him, take it.",
    name: 'Marley Jaxx',
    role: 'CEO, Jaxx Productions',
    initials: 'MJ',
    color: '#FF5833',
  },
  {
    quote: "Mike Walker is a master at systems thinking. His ability to see the big picture while working out the details is truly remarkable. I would not hesitate to recommend him to anyone.",
    name: 'Jackie Woodside',
    role: 'NY Times Best Selling Author, CPC MSW',
    initials: 'JW',
    color: '#2D7D46',
  },
  {
    quote: "Mike has an incredible gift for synthesizing complex ideas and creating elegant solutions. His depth of knowledge is matched only by his genuine desire to see you win.",
    name: 'Yousef Badou',
    role: 'Founder, Emergence LLC',
    initials: 'YB',
    color: '#7C3AED',
  },
  {
    quote: "Mike Walker is a category of one. His insight into business systems, customer experience, and operational efficiency is unmatched. He helped us see our business in an entirely new way.",
    name: 'Iggy Odighizuwa',
    role: 'CEO, Charlie.ai',
    initials: 'IO',
    color: '#1E3A5F',
  },
  {
    quote: "Mike is one of the rare consultants who actually understands both the strategy AND the execution. The frameworks he built for us are still running our growth today.",
    name: 'Aleric Heck',
    role: 'CEO, AdOutreach',
    initials: 'AH',
    color: '#B45309',
  },
  {
    quote: "Mike Walker is the real deal. He cares deeply about the people he works with and brings an extraordinary level of excellence to everything he does.",
    name: 'Byron Rodgers',
    role: 'CEO, Bravo Research Group',
    initials: 'BR',
    color: '#374151',
  },
]

export default function TestimonialsPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Nav onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white grain-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-5">
                Client Reviews
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                What clients say.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                In their words — from the people who have worked with Mike and BrightLink directly.
              </p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS GRID ────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map(({ quote, name, role, initials, color }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-7 border border-gray-100 flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} className="text-[#FF5833] fill-[#FF5833]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm text-gray-700 leading-relaxed italic flex-1 mb-6">
                    &ldquo;{quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: color }}
                      aria-label={name}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#04080B]">{name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PULLQUOTE ────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-6xl text-gray-100 font-serif mb-6 leading-none select-none">&ldquo;</p>
            <blockquote className="font-display font-bold text-2xl md:text-4xl text-[#04080B] leading-tight mb-6 max-w-3xl mx-auto">
              Mike Walker is a category of one. His insight into business systems, customer experience, and operational efficiency is unmatched.
            </blockquote>
            <p className="text-gray-400 text-sm">— Iggy Odighizuwa, CEO, Charlie.ai</p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white py-20 md:py-28 grain-overlay">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
              Ready to be the next success story?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Whether you&apos;re in government or building your own platform, we&apos;d love to hear about your project.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5833] text-white font-semibold rounded-md hover:bg-[#e84d2d] transition-colors text-base min-h-[52px]"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={modalOpen}
        source="general"
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
