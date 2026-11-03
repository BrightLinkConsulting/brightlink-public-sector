'use client'

import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/ui/ContactModal'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Section wrapper with scroll reveal ──────────────────────────────────────
function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Hero animated words ──────────────────────────────────────────────────────
const heroWords = ['Curriculum', 'Into', 'Courses.', 'Platform', 'Into', 'Production.', 'Team', 'Into', 'Trainers.']

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSource, setModalSource] = useState<string>('general')
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const openModal = (source?: string) => {
    setModalSource(source ?? 'general')
    setModalOpen(true)
  }

  return (
    <>
      <Nav onOpenModal={openModal} />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-screen bg-[#04080B] flex flex-col justify-center overflow-hidden"
        >
          {/* Grain overlay */}
          <div className="absolute inset-0 grain-overlay pointer-events-none" />

          {/* Gradient radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,88,51,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Fine grid lines - decorative */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-32 pb-24"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FF5833] mb-10"
            >
              Online Learning &amp; Digital Infrastructure
            </motion.p>

            {/* Animated headline */}
            <div className="overflow-hidden mb-10">
              <motion.h1
                className="font-display font-black text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] tracking-tight text-white"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: '100%' },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, delay: 0.3 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="inline-block mr-[0.2em] last:mr-0"
                    style={{ color: word === 'Production.' ? '#FF5833' : undefined }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Sub + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
            >
              <p className="text-white/55 text-lg leading-relaxed max-w-sm">
                We build online training courses and learning management systems — then set up the platform, and train your team to run it. Design. Build. Hand Off.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/public"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[#1E3A5F] text-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-[#2a5080] transition-colors duration-200 min-h-[52px] group"
                >
                  Public Sector
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/private"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[#FF5833] text-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-[#e84d2d] transition-colors duration-200 min-h-[52px] group"
                >
                  Subject Matter Experts
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="absolute bottom-10 left-5 sm:left-10 flex items-center gap-3"
            >
              <div className="w-px h-12 bg-white/20 relative overflow-hidden">
                <motion.div
                  className="w-full bg-[#FF5833]"
                  initial={{ height: 0, top: 0 }}
                  animate={{ height: '100%', top: 0 }}
                  transition={{ delay: 1.8, duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
                  style={{ position: 'absolute' }}
                />
              </div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/30">Scroll</span>
            </motion.div>
          </motion.div>
        </section>

        {/* ── TWO PATHS ────────────────────────────────────────────────── */}
        <section className="bg-[#F7F5F0] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <Reveal className="mb-16">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-[#FF5833]" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#FF5833]">Two paths</span>
              </div>
              <h2 className="font-display font-black text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-tight text-[#04080B]">
                Where do you fit?
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Public sector card */}
              <Reveal delay={0.05}>
                <Link href="/public" className="group block bg-[#04080B] rounded-sm overflow-hidden relative min-h-[420px] flex flex-col hover:scale-[1.01] transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#1E3A5F]" />
                  <div className="p-10 md:p-12 flex flex-col flex-1">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-[#1E3A5F] font-semibold mb-6">
                      Track 01
                    </span>
                    <h3 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-5">
                      Government &amp;<br />Public Sector
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-auto">
                      SAM-registered. SCORM-compliant. Section 508 accessible. We build training programs and operational systems for federal agencies, SBDC networks, and government contractors.
                    </p>
                    <div className="mt-10 flex items-center gap-3 text-[#1E3A5F] text-sm font-semibold tracking-wide uppercase group-hover:gap-5 transition-all duration-300">
                      Explore Services
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 text-[160px] font-black text-white/[0.03] leading-none select-none pointer-events-none pr-6 pb-2">
                    01
                  </div>
                </Link>
              </Reveal>

              {/* Private / SME card */}
              <Reveal delay={0.1}>
                <Link href="/private" className="group block bg-white border border-gray-200 rounded-sm overflow-hidden relative min-h-[420px] flex flex-col hover:scale-[1.01] transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#FF5833]" />
                  <div className="p-10 md:p-12 flex flex-col flex-1">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-[#FF5833] font-semibold mb-6">
                      Track 02
                    </span>
                    <h3 className="font-display font-black text-3xl md:text-4xl text-[#04080B] leading-tight mb-5">
                      Subject Matter<br />Experts
                    </h3>
                    <p className="text-[#04080B]/50 text-sm leading-relaxed mb-auto">
                      You have deep expertise. We build the digital infrastructure — courses, communities, funnels, and platforms — that turns what you know into a scalable business.
                    </p>
                    <div className="mt-10 flex items-center gap-3 text-[#FF5833] text-sm font-semibold tracking-wide uppercase group-hover:gap-5 transition-all duration-300">
                      Explore Services
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 text-[160px] font-black text-[#04080B]/[0.03] leading-none select-none pointer-events-none pr-6 pb-2">
                    02
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── FOUNDER ──────────────────────────────────────────────────── */}
        <section className="bg-[#04080B] py-24 md:py-32 grain-overlay">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Left: image placeholder with graphic treatment */}
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-[#FF5833]/20 to-[#1E3A5F]/20" />
                  <div className="relative rounded-sm overflow-hidden aspect-[4/5] border border-white/[0.06]">
                    <Image
                      src="https://mikegwalker.com/assets/mike-boardroom-1280.webp"
                      alt="Mike Walker"
                      fill
                      className="object-cover object-center"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04080B]/90 via-[#04080B]/20 to-transparent" />
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="font-display font-black text-3xl text-white leading-tight mb-1">
                        Mike Walker
                      </p>
                      <p className="text-[#FF5833] text-xs font-semibold tracking-widest uppercase">
                        Founder &amp; Principal
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right: copy */}
              <div>
                <Reveal>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px bg-[#FF5833]" />
                    <span className="text-[11px] tracking-[0.25em] uppercase text-[#FF5833]">About BrightLink</span>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="font-display font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95] tracking-tight text-white mb-8">
                    Built by people who have done this work.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-white/55 text-lg leading-relaxed mb-8">
                    BrightLink was founded in 2015 by Mike Walker — investor, operator, author, and speaker — with a simple belief: organizations deserve a partner who can design, build, and hand off a fully operational learning environment. Not just set up a platform and disappear.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="text-white/55 text-base leading-relaxed mb-10">
                    Mike is a two-time Amazon bestselling author with books on systems thinking, business operations, and customer experience. The U.S.-based BrightLink team has served 300+ clients, certified 1,400+ students, and placed 1,000+ into jobs. That&apos;s the difference.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      { label: 'Founded', detail: '2015' },
                      { label: 'U.S.-Based Team', detail: 'SAM.gov Registered' },
                      { label: 'Amazon Bestselling', detail: 'Author × 2' },
                      { label: 'CA SBE Certified', detail: '#2051043' },
                    ].map(({ label, detail }) => (
                      <div key={label} className="border border-white/[0.08] p-4 rounded-sm">
                        <p className="text-white text-xs font-semibold tracking-wide mb-1">{label}</p>
                        <p className="text-white/40 text-xs">{detail}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <button
                    onClick={() => openModal('general')}
                    className="inline-flex items-center gap-3 text-[#FF5833] text-sm font-semibold tracking-wide uppercase border-b border-[#FF5833] pb-1 hover:gap-5 transition-all duration-200 group"
                  >
                    Work With Us
                    <ArrowUpRight size={15} />
                  </button>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ──────────────────────────────────────────────── */}
        <section className="bg-[#FF5833] py-24 md:py-32 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px)',
            }}
          />
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative">
            <Reveal>
              <h2 className="font-display font-black text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-tight text-white mb-10 max-w-4xl">
                Ready to build something that actually works?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <button
                onClick={() => openModal('general')}
                className="inline-flex items-center gap-3 px-9 py-5 bg-[#04080B] text-white text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-black transition-colors duration-200 min-h-[56px] group"
              >
                Start the Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Reveal>
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
