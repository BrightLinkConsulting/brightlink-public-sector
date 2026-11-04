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
        text: 'BrightLink Consulting operates under NAICS codes 611430 (Professional & Management Development Training), 611710 (Educational Support Services), 611699 (All Other Miscellaneous Schools & Instruction), and 611420 (Computer Training).',
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

export default function PublicClient() {
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
                Government · Cities · Enterprise
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                Online Training Built for Public Programs.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
                BrightLink designs online training courses, learning management systems, and procurement-ready curriculum for government agencies, cities, enterprise organizations, and mission-driven programs. We turn your curriculum into online courses, set up the platform, and train your staff to run it.
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
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5833] text-white font-semibold rounded-md hover:bg-[#e84d2d] transition-colors text-base min-h-[52px]"
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </button>
                <a
                  href="/BrightLink-Capability-Statement.pdf"
                  download="BrightLink-Capability-Statement.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-md hover:border-white/60 hover:bg-white/5 transition-colors text-base min-h-[52px]"
                >
                  <FileText size={18} />
                  Download Capability Statement
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CREDENTIAL MARQUEE ───────────────────────────────────── */}
        <CredentialMarquee />

        {/* ── PROBLEM SECTION ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <h2
                className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                We handle the full build — curriculum, platform, documentation, and handoff.
              </h2>
              <p
                className="text-gray-500 text-lg leading-relaxed"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Every engagement is scoped to your requirements, your mandate, and your learners. You receive a fully operational learning environment — ready to run on day one.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Curriculum Designed for Your Program',
                  body: 'We design from your requirements, your mandate, and your learner outcomes. Everything is built for your specific population — not repurposed from somewhere else.',
                },
                {
                  icon: FileText,
                  title: 'Platform Setup and Configuration',
                  body: 'We set up the LMS or delivery platform, configure the experience, and make sure your team knows how to run it. The system is yours to operate from day one.',
                },
                {
                  icon: Zap,
                  title: 'Full Documentation and Handoff',
                  body: 'Every deliverable is documented for compliance, accessibility review, and long-term usability. You receive a complete package — not just files.',
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
                <h3 className="font-display font-bold text-2xl mb-4">Online Education Programs</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  We build the online courses, learning environment, and staff training your program needs to operate. You bring the subject matter. We build the system that delivers it.
                </p>
                <ul className="space-y-2.5">
                  {[
                    'Course design and curriculum development',
                    'Learning platform setup and configuration',
                    'Staff training and train-the-trainer',
                    'Full documentation and deliverable handoff',
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
            <div className="max-w-3xl">
              <div className="bg-[#04080B] text-white rounded-xl p-8 md:p-10">
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
                If you run programs, train people, or need a compliant, scalable learning environment — we work with you.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Building, title: 'Federal Agencies', desc: 'GSA, SBA, HHS, DoD sub-contractors and federally-funded programs' },
                { icon: Globe, title: 'State & Local Government', desc: 'Departments of Labor, Health, Education, Housing, and Social Services' },
                { icon: Briefcase, title: 'SBDC & WBC Networks', desc: 'SBA-funded small business development centers and women\'s business centers' },
                { icon: Shield, title: 'Cities & Municipalities', desc: 'City departments, county programs, and urban workforce and civic initiatives' },
                { icon: Heart, title: 'Large Enterprise & Nonprofits', desc: 'Organizations that need a learning infrastructure at scale — from onboarding to certification' },
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
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">NAICS Codes</p>
                  <div className="space-y-2">
                    {[
                      { code: '611430', desc: 'Professional & Management Development Training' },
                      { code: '611710', desc: 'Educational Support Services' },
                      { code: '611699', desc: 'All Other Miscellaneous Schools & Instruction' },
                      { code: '611420', desc: 'Computer Training' },
                    ].map(({ code, desc }) => (
                      <div key={code} className="flex items-baseline gap-3 py-2 border-b border-gray-50">
                        <span className="font-mono text-sm font-semibold text-[#04080B] min-w-[64px]">{code}</span>
                        <span className="text-sm text-gray-500">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">UNSPSC Codes</p>
                  <div className="space-y-2">
                    {[
                      { code: '86132000', desc: 'Vocational training' },
                      { code: '86101700', desc: 'Business and management training' },
                      { code: '86101601', desc: 'Curriculum development' },
                      { code: '86111600', desc: 'Online education' },
                    ].map(({ code, desc }) => (
                      <div key={code} className="flex items-baseline gap-3 py-2 border-b border-gray-50">
                        <span className="font-mono text-sm font-semibold text-[#04080B] min-w-[80px]">{code}</span>
                        <span className="text-sm text-gray-500">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">PSC Codes</p>
                  <div className="space-y-2">
                    {[
                      { code: 'U008', desc: 'Training — Curriculum Development' },
                      { code: 'U009', desc: 'Training — Other' },
                      { code: 'U099', desc: 'Education & Training — Other' },
                    ].map(({ code, desc }) => (
                      <div key={code} className="flex items-baseline gap-3 py-2 border-b border-gray-50">
                        <span className="font-mono text-sm font-semibold text-[#04080B] min-w-[64px]">{code}</span>
                        <span className="text-sm text-gray-500">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">NIGP Codes</p>
                  <div className="space-y-2">
                    {[
                      { code: '924-35', desc: 'Training & Education — Online' },
                      { code: '924-86', desc: 'Training & Education — Workforce Development' },
                    ].map(({ code, desc }) => (
                      <div key={code} className="flex items-baseline gap-3 py-2 border-b border-gray-50">
                        <span className="font-mono text-sm font-semibold text-[#04080B] min-w-[64px]">{code}</span>
                        <span className="text-sm text-gray-500">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Registrations & Certifications</p>
                  <div className="space-y-2">
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
                  a: 'Primary NAICS codes: 611430 (Professional & Management Development Training), 611710 (Educational Support Services), 611699 (All Other Miscellaneous Schools & Instruction), 611420 (Computer Training). PSC codes: U008, U009, U099. Full list in our capability statement.',
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

        {/* ── Capability Statement ─────────────────────────────────── */}
        <section className="bg-[#F7F5F0] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">

              {/* Real PDF preview */}
              <div className="flex-shrink-0 w-full md:w-64">
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
                  <img
                    src="/images/capability-statement-preview.jpg"
                    alt="BrightLink Consulting Capability Statement"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* Copy + download */}
              <div className="flex-1 pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-3">Capability Statement</p>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#04080B] leading-tight mb-4">
                  BrightLink Consulting LLC
                </h2>
                <p className="text-gray-500 leading-relaxed mb-2">
                  NAICS · PSC · UNSPSC · NIGP codes, past performance, differentiators, and contact information.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400 mb-8">
                  <span>CAGE · 1A8D6</span>
                  <span>UEI · HPP7BBEYCQG5</span>
                  <span>CA SBE · #2051043</span>
                  <span>SAM.gov Active</span>
                </div>
                <a
                  href="/BrightLink-Capability-Statement.pdf"
                  download="BrightLink-Capability-Statement.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#04080B] text-white font-semibold rounded-md hover:bg-[#1E3A5F] transition-colors text-sm"
                >
                  <FileText size={16} />
                  Download Capability Statement
                </a>
                <p className="text-gray-400 text-xs mt-3">PDF · No form required</p>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white py-20 md:py-28 grain-overlay">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="h-0.5 w-8 bg-[#1E3A5F] mx-auto mb-8" />
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-10">
              Ready to scope your project?
            </h2>
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
