'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/ui/ContactModal'
import { ArrowRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Mike Walker sees things that others miss. He\'s one of the few people I trust to both diagnose a problem and actually fix it.',
    name: 'CEO',
    role: 'Technology Company',
    category: 'General',
  },
  {
    quote: 'Working with BrightLink transformed how we think about client retention. The systems Mike builds are unlike anything we\'d encountered before.',
    name: 'Agency Owner',
    role: 'Marketing Agency',
    category: 'General',
  },
  {
    quote: 'The online learning environment BrightLink built for us was beyond what we thought was possible. It\'s become the foundation of our entire training operation.',
    name: 'Program Director',
    role: 'SBDC Network',
    category: 'Government',
  },
  {
    quote: 'Mike has a gift for making complex systems simple. What took us years to figure out, he helped us redesign in weeks.',
    name: 'Healthcare Consultant',
    role: 'Clinical Training Organization',
    category: 'Private',
  },
  {
    quote: 'BrightLink doesn\'t just build things—they build the right things. I\'ve never felt more confident in a vendor relationship.',
    name: 'Program Manager',
    role: 'Government Agency',
    category: 'Government',
  },
  {
    quote: 'The marketing ecosystem they built for me changed everything. I went from posting and hoping to having a system that actually works.',
    name: 'Business Coach',
    role: 'Subject Matter Expert',
    category: 'Private',
  },
  {
    quote: 'I\'ve worked with a lot of consultants. Mike Walker is different—he actually understands what it means to build something that lasts.',
    name: 'Executive Director',
    role: 'Nonprofit Organization',
    category: 'General',
  },
  {
    quote: 'Our community platform went from an idea to a thriving space in 90 days. The systems they put in place made all the difference.',
    name: 'Founder',
    role: 'Online Education Platform',
    category: 'Private',
  },
  {
    quote: 'BrightLink helped us create the program we always envisioned but never knew how to build. It\'s exactly what our students needed.',
    name: 'Subject Matter Expert',
    role: 'Professional Training',
    category: 'Private',
  },
]

export default function TestimonialsPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)

  return (
    <>
      <Nav onOpenModal={openModal} />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white grain-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-5">
                Client Testimonials
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                What clients say.
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                Results across government programs, online learning, and digital business infrastructure. In their words.
              </p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS GRID ────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map(({ quote, name, role, category }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-7 border border-gray-100 flex flex-col"
                >
                  {/* Category tag */}
                  <div className="mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      category === 'Government'
                        ? 'bg-[#1E3A5F]/10 text-[#1E3A5F]'
                        : category === 'Private'
                        ? 'bg-[#FF5833]/10 text-[#FF5833]'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {category}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} className="text-[#FF5833] fill-[#FF5833]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm text-gray-700 leading-relaxed italic flex-1 mb-6">
                    "{quote}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-sm font-semibold text-[#04080B]">{name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PULLQUOTE ────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-6xl text-gray-100 font-serif mb-6 leading-none select-none">"</p>
            <blockquote className="font-display font-bold text-2xl md:text-4xl text-[#04080B] leading-tight mb-6 max-w-3xl mx-auto">
              BrightLink doesn't just build things—they build the right things. I've never felt more confident in a vendor relationship.
            </blockquote>
            <p className="text-gray-400 text-sm">— Program Manager, Government Agency</p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white py-20 md:py-28 grain-overlay">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
              Ready to be the next success story?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Whether you're in government or building your own platform, we'd love to hear about your project.
            </p>
            <button
              onClick={openModal}
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
