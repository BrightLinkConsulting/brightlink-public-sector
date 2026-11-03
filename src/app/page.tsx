'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/ui/ContactModal'
import CredentialMarquee from '@/components/ui/CredentialMarquee'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { ArrowRight, Building2, GraduationCap, CheckCircle2 } from 'lucide-react'

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BrightLink Consulting',
  url: 'https://brightlinkconsulting.com',
  logo: 'https://brightlinkconsulting.com/logo.png',
  description:
    'BrightLink Consulting designs online learning environments, government training programs, and digital ecosystems for public sector organizations and subject matter experts.',
  founder: {
    '@type': 'Person',
    name: 'Mike Walker',
    url: 'https://mikegwalker.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  sameAs: ['https://mikegwalker.com'],
}

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSource, setModalSource] = useState('general')

  const openModal = (source = 'general') => {
    setModalSource(source)
    setModalOpen(true)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Nav onOpenModal={openModal} />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white grain-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-6">
                BrightLink Consulting
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                We Build What Organizations Actually Need.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                Whether you're navigating government procurement or building a business around your expertise, we design the systems, programs, and infrastructure that make it real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/public"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#1E3A5F] text-white font-semibold rounded-md hover:bg-[#2a5080] transition-colors text-base min-h-[52px]"
                >
                  Public Sector & Government
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/private"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#FF5833] text-white font-semibold rounded-md hover:bg-[#e84d2d] transition-colors text-base min-h-[52px]"
                >
                  Subject Matter Experts
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CREDENTIAL MARQUEE ───────────────────────────────────── */}
        <CredentialMarquee />

        {/* ── STATS ────────────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-gray-200">
              {[
                { value: 20, suffix: '+', label: 'Years in the Field' },
                { value: 100, suffix: '+', label: 'Programs Designed' },
                { value: 9, suffix: '', label: 'Client Testimonials' },
                { value: 3, suffix: '', label: 'Active Verticals' },
              ].map(({ value, suffix, label }, i) => (
                <div key={i} className="text-center px-4 md:px-8">
                  <p className="font-display font-bold text-4xl md:text-5xl text-[#04080B] mb-1">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER BIO ──────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-5">
                  Founder
                </p>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-6">
                  Mike Walker
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Mike Walker has spent 30 years building things that work—from Walker Surfboards in 1996 to systems, training programs, and digital ecosystems for organizations across the public and private sector.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  He built BrightLink Consulting around a simple belief: the right infrastructure changes everything. Whether it's a government training program or a subject matter expert's first online course, the architecture underneath determines the outcome.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Today, BrightLink serves government agencies, federally-funded programs, and subject matter experts who are ready to build something that lasts.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Systems Architecture',
                    'Government Training',
                    'Online Learning',
                    'Digital Products',
                  ].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle2, text: 'SAM.gov Registered · CAGE 1A8D6 · UEI HPP7BBEYCQG5' },
                  { icon: CheckCircle2, text: 'CA SBE Certified Vendor #2051043' },
                  { icon: CheckCircle2, text: 'Published Author on Systems Architecture' },
                  { icon: CheckCircle2, text: '20+ years building mission-driven programs' },
                  { icon: CheckCircle2, text: 'Past performance: SBDC, Bravo! Media, Emergence' },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                    <Icon size={18} className="text-[#FF5833] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PATH SELECTOR ────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                Where do you fit?
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                We work in two distinct worlds. Each has its own page because the problem—and the solution—is different.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Public sector card */}
              <Link href="/public" className="group">
                <div className="bg-[#04080B] text-white rounded-xl p-8 md:p-10 h-full flex flex-col hover:ring-2 hover:ring-[#1E3A5F] transition-all duration-200 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-[#1E3A5F] flex items-center justify-center mb-6">
                    <Building2 size={22} className="text-white" />
                  </div>
                  <div className="h-0.5 w-8 bg-[#1E3A5F] mb-6" />
                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
                    Public Sector & Government
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-8 flex-1">
                    Training programs, operational systems, and procurement-ready curriculum for agencies, contractors, and federally-funded programs. SAM.gov registered. CA SBE certified.
                  </p>
                  <div className="flex items-center gap-2 text-[#1E3A5F] group-hover:text-white transition-colors font-semibold">
                    <span>Explore Public Sector</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Private sector card */}
              <Link href="/private" className="group">
                <div className="bg-[#F7F5F0] rounded-xl p-8 md:p-10 h-full flex flex-col hover:ring-2 hover:ring-[#FF5833] transition-all duration-200 hover:-translate-y-1 border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-[#FF5833] flex items-center justify-center mb-6">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                  <div className="h-0.5 w-8 bg-[#FF5833] mb-6" />
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-[#04080B] mb-4 leading-tight">
                    Subject Matter Experts
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                    Online courses, communities, marketing ecosystems, and LMS infrastructure for experts who are ready to monetize their intellectual property and build a scalable digital business.
                  </p>
                  <div className="flex items-center gap-2 text-[#FF5833] font-semibold">
                    <span>Explore SME Services</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ──────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white py-20 md:py-28 grain-overlay">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
              Ready to build something that actually works?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              We respond to every inquiry within one business day. Tell us what you're working on.
            </p>
            <button
              onClick={() => openModal('general')}
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
        source={modalSource}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
