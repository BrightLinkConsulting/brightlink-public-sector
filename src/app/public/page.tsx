'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/ui/ContactModal'
import CredentialMarquee from '@/components/ui/CredentialMarquee'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { ArrowRight, FileText, Shield, Zap, Building, Globe, Users, Heart, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react'

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Government Training & Online Learning Programs',
  provider: {
    '@type': 'Organization',
    name: 'BrightLink Consulting',
    url: 'https://brightlinkconsulting.com',
  },
  description:
    'BrightLink designs SCORM-compliant, Section 508 accessible online training programs and operational systems for government agencies, federal contractors, and mission-driven organizations. SAM.gov registered. CAGE 1A8D6.',
  areaServed: 'US',
  serviceType: 'Government Training & eLearning Development',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is BrightLink Consulting registered in SAM.gov?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BrightLink Consulting is registered in SAM.gov with CAGE Code 1A8D6 and UEI HPP7BBEYCQG5. We are also certified as a California Small Business Enterprise (SBE) #2051043.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of government training programs does BrightLink design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BrightLink designs SCORM-compliant, Section 508 accessible online training programs for federal agencies, state and local government, SBDC networks, defense contractors, and federally-funded workforce development programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What NAICS codes does BrightLink Consulting use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BrightLink Consulting operates under NAICS codes 611430 (Professional Development), 611710 (Educational Support Services), 541611 (Administrative Management Consulting), 611420 (Computer Training), and 611519 (Other Technical/Trade Schools).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can BrightLink work with SBA-funded programs like SBDCs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BrightLink has past performance with the Inland Empire SBDC Network, where we developed the full operational infrastructure and digital learning environment for one of California\'s most active SBDC programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does BrightLink build Section 508 compliant training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All BrightLink training deliverables are designed to meet Section 508 accessibility standards, ensuring equitable access for all learners including those with disabilities.',
      },
    },
  ],
}

export default function PublicSectorPage() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Nav onOpenModal={openModal} />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white grain-overlay">
          {/* Blue accent strip — public sector identifier */}
          <div className="h-1 w-full bg-[#1E3A5F]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mb-4">
                Public Sector & Government
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                Built for Government. Designed to Deliver.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
                BrightLink designs online training programs, operational systems, and procurement-ready curriculum for agencies, contractors, and mission-driven organizations.
              </p>
              {/* Credentials bar */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'SAM.gov Registered',
                  'CAGE: 1A8D6',
                  'UEI: HPP7BBEYCQG5',
                  'CA SBE #2051043',
                ].map((cred) => (
                  <span key={cred} className="px-3 py-1.5 bg-white/10 border border-white/20 text-xs font-medium text-white/80 rounded-md">
                    {cred}
                  </span>
                ))}
              </div>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5833] text-white font-semibold rounded-md hover:bg-[#e84d2d] transition-colors text-base min-h-[52px]"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ── CREDENTIAL MARQUEE ───────────────────────────────────── */}
        <CredentialMarquee />

        {/* ── PROBLEM SECTION ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                Government training shouldn't feel like government bureaucracy.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Most training vendors don't understand the compliance layer. We built our entire practice around it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Procurement Complexity',
                  body: 'Most vendors don\'t understand the compliance requirements that come with government contracts. SAM registration, accessibility mandates, documentation standards—we do.',
                },
                {
                  icon: FileText,
                  title: 'Rigid, Outdated Curriculum',
                  body: 'Off-the-shelf training doesn\'t account for your agency\'s specific mandates, populations, or outcomes. We design from your requirements, not from a template.',
                },
                {
                  icon: Zap,
                  title: 'No Clear Starting Point',
                  body: 'You need a qualified vendor who can move from contract to delivery without handholding. We\'ve done this before—we know exactly how to scope, build, and document.',
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <div key={i} className="bg-white rounded-xl p-8 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#04080B] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#04080B] mb-3">{title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                What We Build
              </h2>
              <p className="text-gray-500 text-lg">
                Everything we deliver is built for the compliance, documentation, and delivery standards the government demands.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-[#04080B] text-white rounded-xl p-8 md:p-10">
                <div className="h-0.5 w-8 bg-[#FF5833] mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">Government Training Programs</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  SCORM-compliant, Section 508 accessible, mandate-aligned curriculum for agencies, contractors, and federally-funded programs. Delivered on time, documented for compliance.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'SCORM 1.2 & 2004 compliant packages',
                    'Section 508 / WCAG 2.1 AA accessible',
                    'Mandate and outcome aligned',
                    'Full documentation and deliverable binder',
                    'Instructor-led and self-paced formats',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckCircle2 size={15} className="text-[#FF5833] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F7F5F0] rounded-xl p-8 md:p-10 border border-gray-100">
                <div className="h-0.5 w-8 bg-[#1E3A5F] mb-6" />
                <h3 className="font-display font-bold text-2xl text-[#04080B] mb-4">Operational Systems & Infrastructure</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Program design, workflow documentation, and operational systems that bring structure to complex government initiatives—from onboarding systems to performance tracking.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Program design and workflow documentation',
                    'Onboarding systems and process maps',
                    'Performance tracking frameworks',
                    'Advisor and staff training materials',
                    'SOPs and operational playbooks',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="text-[#1E3A5F] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PAST PERFORMANCE ─────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-4">Past Performance</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight">
                Work that speaks for itself.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Featured */}
              <div className="md:col-span-2 bg-[#04080B] text-white rounded-xl p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-4">Featured</p>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
                  Inland Empire SBDC Network
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Developed the full operational infrastructure and digital learning environment for one of California's most active SBDC programs—supporting small business counselors, advisors, and program administrators across the region.
                </p>
                <p className="text-sm text-white/40">
                  SBA-funded · Operational infrastructure · Digital learning · Advisor training
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-100 flex-1">
                  <h3 className="font-display font-bold text-lg text-[#04080B] mb-2">Bravo! Media Academy</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Training infrastructure for a youth media organization serving Title I schools. Full curriculum design and delivery system.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 flex-1">
                  <h3 className="font-display font-bold text-lg text-[#04080B] mb-2">Emergence</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Learning ecosystem for first-generation college students. Program architecture and digital learning environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ──────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                How We Work
              </h2>
              <p className="text-gray-500">
                Government contracting has a process. We know it, and we work inside it.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Scope & Compliance Review',
                  body: 'We start with your contract requirements, agency mandates, and procurement constraints. Everything is scoped to your specific deliverables before design begins.',
                },
                {
                  step: '02',
                  title: 'Design & Build',
                  body: 'We design the curriculum, systems, or training infrastructure around your requirements—not around what\'s convenient for us. Milestones are documented throughout.',
                },
                {
                  step: '03',
                  title: 'Deliver & Document',
                  body: 'Every deliverable is documented for compliance, accessibility, and long-term usability. You receive a complete package, ready for audits and performance reviews.',
                },
              ].map(({ step, title, body }, i) => (
                <div key={i} className="relative">
                  <p className="font-display font-bold text-6xl text-gray-100 mb-4 leading-none select-none">{step}</p>
                  <h3 className="font-display font-bold text-xl text-[#04080B] mb-3 -mt-2">{title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE SERVE ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                Who We Serve
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                We work across the full spectrum of government-adjacent organizations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Building, title: 'Federal Agencies', desc: 'GSA, SBA, HHS, DoD sub-contractors and federally-funded programs' },
                { icon: Globe, title: 'State & Local Government', desc: 'Departments of Labor, Health, Education, Housing, and Social Services' },
                { icon: Briefcase, title: 'SBDC & WBC Networks', desc: 'SBA-funded small business development centers and women\'s business centers' },
                { icon: Shield, title: 'Defense & Gov Contractors', desc: 'Prime and sub-contractors navigating procurement and training requirements' },
                { icon: Heart, title: 'Healthcare Systems', desc: 'Federally-funded community health programs and clinical training orgs' },
                { icon: GraduationCap, title: 'Workforce Development', desc: 'Title I, WIOA-funded training programs and adult education providers' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <Icon size={20} className="text-[#1E3A5F] mb-3" />
                  <h3 className="font-semibold text-[#04080B] text-sm mb-1.5">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPLIANCE CODES ─────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-[#04080B] mb-8">
              Procurement & Compliance Codes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">NAICS Codes</p>
                <div className="space-y-2">
                  {[
                    { code: '611430', desc: 'Professional & Management Development Training' },
                    { code: '611710', desc: 'Educational Support Services' },
                    { code: '541611', desc: 'Administrative Management Consulting' },
                    { code: '611420', desc: 'Computer Training' },
                    { code: '611519', desc: 'Other Technical & Trade Schools' },
                  ].map(({ code, desc }) => (
                    <div key={code} className="flex items-baseline gap-3 py-2 border-b border-gray-50">
                      <span className="font-mono text-sm font-semibold text-[#04080B] min-w-[64px]">{code}</span>
                      <span className="text-sm text-gray-500">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">PSC Codes & Certifications</p>
                <div className="space-y-2">
                  {[
                    { code: 'U099', desc: 'Education & Training — Other' },
                    { code: 'R499', desc: 'Professional Support Services — Other' },
                    { code: 'B599', desc: 'Special Studies & Analysis — Other' },
                  ].map(({ code, desc }) => (
                    <div key={code} className="flex items-baseline gap-3 py-2 border-b border-gray-50">
                      <span className="font-mono text-sm font-semibold text-[#04080B] min-w-[64px]">{code}</span>
                      <span className="text-sm text-gray-500">{desc}</span>
                    </div>
                  ))}
                  <div className="mt-6 space-y-2">
                    {[
                      { label: 'SAM.gov', value: 'Active Registration' },
                      { label: 'CAGE Code', value: '1A8D6' },
                      { label: 'UEI', value: 'HPP7BBEYCQG5' },
                      { label: 'CA SBE', value: '#2051043' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center gap-3 py-2 border-b border-gray-50">
                        <span className="text-sm text-gray-400 min-w-[90px]">{label}</span>
                        <span className="text-sm font-semibold text-[#04080B]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-[#F7F5F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-4xl text-gray-200 font-serif mb-6 leading-none">"</p>
            <blockquote className="font-display font-bold text-2xl md:text-3xl text-[#04080B] leading-tight mb-6">
              BrightLink helped us build something we didn't know was possible in a government context. The systems they designed have made our entire operation run smoother.
            </blockquote>
            <p className="text-gray-500 text-sm font-medium">— Program Director, SBDC Network</p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#04080B] mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Is BrightLink Consulting registered in SAM.gov?',
                  a: 'Yes. BrightLink Consulting is registered in SAM.gov with CAGE Code 1A8D6 and UEI HPP7BBEYCQG5. We are also certified as a California Small Business Enterprise (SBE) #2051043.',
                },
                {
                  q: 'Can BrightLink work directly on government contracts?',
                  a: 'Yes. BrightLink operates as a registered prime or subcontractor. We\'re experienced with the full procurement lifecycle—from SOW review to final deliverable documentation.',
                },
                {
                  q: 'Are your training programs Section 508 compliant?',
                  a: 'Yes. All BrightLink training deliverables are designed to meet Section 508 accessibility standards, ensuring equitable access for all learners including those with disabilities.',
                },
                {
                  q: 'How long does a typical government training project take?',
                  a: 'Scope and timeline vary by contract requirements. A standard eLearning module typically takes 6–12 weeks from SOW to delivery. Full program builds run 3–6 months. We work within your contract timeline.',
                },
                {
                  q: 'What NAICS codes does BrightLink use?',
                  a: 'Primary codes: 611430 (Professional Development), 611710 (Educational Support Services), 541611 (Administrative Management Consulting). Full code list available in our capability statement.',
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-[#04080B] text-base mb-2">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white py-20 md:py-28 grain-overlay">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="h-0.5 w-8 bg-[#1E3A5F] mx-auto mb-8" />
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
              Ready to scope your project?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Whether you have a contract in hand or are still in the planning phase, let's talk about what you're building.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5833] text-white font-semibold rounded-md hover:bg-[#e84d2d] transition-colors text-base min-h-[52px]"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </button>
            <p className="text-white/30 text-xs mt-5">
              SAM.gov Registered · CAGE 1A8D6 · UEI HPP7BBEYCQG5 · CA SBE #2051043
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={modalOpen}
        source="public"
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
