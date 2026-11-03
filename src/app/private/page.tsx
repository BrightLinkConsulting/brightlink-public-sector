'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/ui/ContactModal'
import { ArrowRight, BookOpen, Users, Megaphone, Server, CheckCircle2, Star } from 'lucide-react'

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Online Course Development & Digital Business Infrastructure for Subject Matter Experts',
  provider: {
    '@type': 'Organization',
    name: 'BrightLink Consulting',
    url: 'https://brightlinkconsulting.com',
  },
  description:
    'BrightLink builds online learning environments, marketing ecosystems, and digital platforms that turn subject matter experts into scalable businesses. Online courses, communities, LMS, and marketing systems.',
  serviceType: 'Online Learning Development & Digital Business Infrastructure',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does BrightLink build for subject matter experts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BrightLink designs and builds online courses, community platforms, marketing ecosystems, and LMS infrastructure for subject matter experts who want to monetize their intellectual property and build a scalable digital business.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an online course with BrightLink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full course build—including curriculum design, platform setup, and launch infrastructure—typically takes 8–16 weeks depending on scope and your content readiness. We work in phases so you see progress throughout.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platforms does BrightLink build on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BrightLink builds on platforms that fit your audience and business model—including Circle, Skool, Kajabi, Thinkific, and custom-built LMS solutions. We help you choose the right platform, not just set one up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can BrightLink help with marketing an online course?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BrightLink designs full marketing ecosystems—including email sequences, social content frameworks, lead magnets, and launch strategies. We build systems that bring people in and keep them moving toward purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of subject matter experts does BrightLink work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BrightLink works with consultants, coaches, healthcare and clinical professionals, law enforcement and military trainers, financial and legal advisors, educators, and skilled trades experts—anyone with real knowledge worth packaging.',
      },
    },
  ],
}

export default function PrivateSectorPage() {
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
          {/* Orange accent strip — private sector identifier */}
          <div className="h-1 w-full bg-[#FF5833]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-4">
                Subject Matter Experts
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                Your Business Should Fund Your Life. Not Consume It.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                We build online courses, learning management systems, and digital platforms that turn your expertise into a scalable business. You bring the knowledge — we design, build, and hand off the infrastructure that delivers it.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5833] text-white font-semibold rounded-md hover:bg-[#e84d2d] transition-colors text-base min-h-[52px]"
              >
                Let's Build It
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ── PROBLEM SECTION ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                You didn't spend years building expertise just to piece together a business from scratch.
              </h2>
              <p className="text-gray-500 text-lg">
                The gap isn't knowledge — it's infrastructure. We build the systems that turn what you know into what you sell.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Your Knowledge is Valuable. Your Business Isn\'t Built Yet.',
                  body: 'You\'ve spent years developing real expertise. But expertise alone doesn\'t create revenue—infrastructure does. The gap isn\'t knowledge, it\'s the system that delivers it.',
                },
                {
                  title: 'You\'re Doing Everything Yourself.',
                  body: 'You\'re recording content, posting to social, answering DMs, and trying to figure out funnels—all while trying to serve existing clients. That\'s not a business. That\'s a burnout in progress.',
                },
                {
                  title: 'You\'ve Tried Platforms. They Don\'t Fit.',
                  body: 'Kajabi, Teachable, Skool—they\'re tools, not strategies. Without the right architecture, any platform is just a login page. We design the system first, then pick the tool.',
                },
              ].map(({ title, body }, i) => (
                <div key={i} className="bg-white rounded-xl p-8 border border-gray-100">
                  <div className="h-0.5 w-6 bg-[#FF5833] mb-5" />
                  <h3 className="font-display font-bold text-lg text-[#04080B] mb-3 leading-snug">{title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                Four things. All of them together.
              </h2>
              <p className="text-gray-500 text-lg">
                We don't just build a course. We build the whole ecosystem that makes it work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: 'Online Courses & Digital Products',
                  body: 'We design and build courses that deliver transformation—not just content. From curriculum architecture to production-ready modules, every course is built around outcomes.',
                  items: ['Curriculum architecture', 'Module and lesson design', 'Video production frameworks', 'Assessment and certification', 'Launch-ready packaging'],
                },
                {
                  icon: Users,
                  title: 'Online Communities',
                  body: 'Circle, Skool, or custom-built. We design the experience, onboarding, and engagement systems that keep members active—not just present.',
                  items: ['Platform selection and setup', 'Onboarding sequence design', 'Engagement programming', 'Community management systems', 'Revenue model integration'],
                },
                {
                  icon: Megaphone,
                  title: 'Marketing Ecosystems',
                  body: 'Email sequences, social frameworks, lead magnets, and content systems that bring people in and keep them moving toward purchase. Not tactics—systems.',
                  items: ['Email nurture sequences', 'Lead magnet design', 'Social content frameworks', 'Launch campaign architecture', 'Funnel build and optimization'],
                },
                {
                  icon: Server,
                  title: 'LMS & Learning Infrastructure',
                  body: 'For organizations that need more than a course—a full learning management system built around your audience, delivery model, and business requirements.',
                  items: ['LMS platform build', 'Custom course environments', 'Progress tracking systems', 'Credential and certification delivery', 'Integration with your existing tools'],
                },
              ].map(({ icon: Icon, title, body, items }, i) => (
                <div key={i} className="bg-[#F7F5F0] rounded-xl p-8 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#FF5833] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#04080B] mb-3">{title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-5">{body}</p>
                  <ul className="space-y-1.5">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                        <CheckCircle2 size={13} className="text-[#FF5833] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#04080B] text-white grain-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-4">Case Studies</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
                Built from scratch. Running today.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-8 md:p-10 border border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-4">Case Study</p>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
                  S.A.F.E. — Sexual Assault Forensic Examiners
                </h3>
                <p className="text-white/60 leading-relaxed mb-6 text-sm">
                  We built a full online learning environment and professional development platform for Sexual Assault Forensic Examiners—a highly specialized professional audience with strict credentialing requirements. This included curriculum design, LMS build, and a marketing system to reach the right professionals nationally.
                </p>
                <div className="pt-5 border-t border-white/10">
                  <p className="text-xs text-white/40 mb-2">Outcome</p>
                  <p className="text-sm text-white/70 font-medium">
                    A fully operational online training business serving a national audience of forensic health professionals.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['LMS Build', 'Curriculum Design', 'Marketing System', 'Credentialing'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/10 text-white/60 text-xs rounded-md">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-8 md:p-10 border border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-4">Case Study</p>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
                  Protector Nation
                </h3>
                <p className="text-white/60 leading-relaxed mb-6 text-sm">
                  Protector Nation needed to monetize years of real-world expertise in personal protection training. We built the course infrastructure, community platform, and marketing ecosystem from the ground up—turning deep tactical knowledge into a scalable digital business.
                </p>
                <div className="pt-5 border-t border-white/10">
                  <p className="text-xs text-white/40 mb-2">Outcome</p>
                  <p className="text-sm text-white/70 font-medium">
                    A complete digital business—courses, community, and content—ready to scale.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Course Build', 'Community Platform', 'Marketing Ecosystem', 'Launch'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/10 text-white/60 text-xs rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                How We Work Together
              </h2>
              <p className="text-gray-500">
                Four phases. No surprises. We stay in until it's running.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  phase: '01',
                  title: 'Discovery',
                  body: 'We spend time understanding your expertise, audience, business goals, and what you\'ve already tried. Everything starts here.',
                },
                {
                  phase: '02',
                  title: 'Architecture',
                  body: 'We map your curriculum, platform structure, marketing ecosystem, and revenue model. You see the whole picture before we build anything.',
                },
                {
                  phase: '03',
                  title: 'Build',
                  body: 'We build the whole thing—LMS, community, course pages, marketing sequences. You\'re involved at every milestone.',
                },
                {
                  phase: '04',
                  title: 'Launch',
                  body: 'We launch with you—not to you. We stay in through launch and the early weeks after, so you\'re not left figuring it out alone.',
                },
              ].map(({ phase, title, body }, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="font-display font-bold text-5xl text-gray-100 mb-3 leading-none select-none">{phase}</p>
                  <h3 className="font-display font-bold text-xl text-[#04080B] mb-2 -mt-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE WORK WITH ─────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-4">
                You've put in the years. Now let's build the business.
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                We work with experts across fields—the common thread is real expertise worth packaging.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Consultants & Coaches', desc: 'Experts who\'ve built client businesses but have no digital product yet' },
                { title: 'Healthcare & Clinical', desc: 'Nurses, therapists, forensic specialists with CPD needs and certification authority' },
                { title: 'Law Enforcement & Military', desc: 'Training expertise that needs a digital delivery channel and scalable model' },
                { title: 'Financial & Legal Advisors', desc: 'Knowledge monetization for regulated professionals with compliance-aware content' },
                { title: 'Educators & Academics', desc: 'Professors and teachers building beyond the institution' },
                { title: 'Skilled Trades & Technical', desc: 'Certifiable skills that translate directly to online training and credentialing' },
              ].map(({ title, desc }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="h-0.5 w-5 bg-[#FF5833] mb-3" />
                  <h3 className="font-semibold text-[#04080B] text-sm mb-1.5">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-display font-bold text-4xl text-[#04080B] mb-3">What clients say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  quote: 'The online learning environment BrightLink built for us was beyond what we thought was possible. It\'s become the foundation of our entire training operation.',
                  name: 'Program Director',
                  role: 'Online Education Organization',
                },
                {
                  quote: 'The marketing ecosystem they built for me changed everything. I went from posting and hoping to having a system that actually works.',
                  name: 'Business Coach',
                  role: 'Subject Matter Expert',
                },
                {
                  quote: 'Our community platform went from an idea to a thriving space in 90 days. The systems they put in place made all the difference.',
                  name: 'Founder',
                  role: 'Online Education Platform',
                },
              ].map(({ quote, name, role }, i) => (
                <div key={i} className="bg-[#F7F5F0] rounded-xl p-7 border border-gray-100">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-[#FF5833] fill-[#FF5833]" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-gray-700 leading-relaxed mb-5 italic">
                    "{quote}"
                  </blockquote>
                  <div>
                    <p className="text-sm font-semibold text-[#04080B]">{name}</p>
                    <p className="text-xs text-gray-400">{role}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/testimonials" className="text-sm font-semibold text-[#FF5833] hover:text-[#e84d2d] transition-colors inline-flex items-center gap-1.5">
              Read all client testimonials
              <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#04080B] mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What does BrightLink actually build for subject matter experts?',
                  a: 'We build online courses, community platforms, marketing ecosystems, and LMS infrastructure. The difference from other vendors is that we don\'t just set up a platform—we design the whole system: curriculum architecture, platform selection, content structure, marketing sequences, and launch strategy.',
                },
                {
                  q: 'Do I need to have my content ready before we start?',
                  a: 'No. We start with Discovery, which helps us understand your expertise and what content you have. We then design the curriculum around your knowledge—you don\'t need to show up with a finished course.',
                },
                {
                  q: 'Which platforms do you build on?',
                  a: 'We build on platforms that fit your audience and business model—including Circle, Skool, Kajabi, Thinkific, and custom LMS solutions. We help you choose the right platform for your specific situation, not just the one that\'s trending.',
                },
                {
                  q: 'How is BrightLink different from a course coach or agency?',
                  a: 'Most course coaches help you structure content. Most agencies build what you tell them to. We do both: we help you architect the entire digital business—curriculum, platform, marketing, community, and launch—and then we build it.',
                },
                {
                  q: 'What\'s the investment for a full build?',
                  a: 'Investment varies depending on scope—a single course build is different from a full ecosystem with community, marketing, and LMS. The best way to find out what\'s right for your situation is to start a conversation.',
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-[#04080B] text-base mb-2">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MIKE WALKER SECTION ──────────────────────────────────── */}
        <section className="bg-[#04080B] py-20 md:py-28 grain-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-6">The Founder</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
                  Mike Walker has been building since 1996.
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  Investor, operator, author, and speaker — Mike built BrightLink on a belief that most people trade their life for their business when it should be the other way around. The systems he teaches and the infrastructure BrightLink builds are designed around one principle: your business should fund your life, not consume it.
                </p>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  He&apos;s a two-time Amazon bestselling author — The Exceptional Experience, The Systems-Thinking Visionary, The SOS Methodology — and has led organizations through hundreds of digital builds, training programs, and platform launches. BrightLink is what happens when that experience gets applied to your project.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    'The Exceptional Experience',
                    'The Systems-Thinking Visionary',
                    'The SOS Methodology',
                  ].map((book) => (
                    <span key={book} className="px-3 py-1.5 border border-white/[0.12] text-white/50 text-xs rounded-sm font-medium">
                      {book}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#0d1419] rounded-sm p-10 border border-white/[0.06]">
                <p className="font-display font-black text-5xl text-white leading-tight mb-3">Mike<br />Walker</p>
                <p className="text-[#FF5833] text-sm font-semibold tracking-widest uppercase mb-8">Founder &amp; Principal</p>
                <div className="flex flex-col gap-3">
                  {[
                    'Two-time Amazon bestselling author',
                    'Investor, Operator, Author &amp; Speaker',
                    'Building since 1996',
                    '300+ clients · 1,400+ students certified',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5833] mt-1.5 shrink-0" />
                      <p className="text-white/50 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
                <blockquote className="mt-8 pt-8 border-t border-white/[0.08]">
                  <p className="text-white/40 text-sm italic leading-relaxed">
                    &ldquo;Mike Walker is a straight-up genius when it comes to business.&rdquo;
                  </p>
                  <p className="text-white/25 text-xs mt-2">— Marley Jaxx</p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-[#FF5833] text-white py-20 md:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px)',
            }}
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">
              Ready to build the business that funds your life?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Tell us what you&apos;re working on. We&apos;ll show you how we&apos;d build it — no jargon, no pitch deck.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#04080B] text-white font-semibold rounded-md hover:bg-black transition-colors text-base min-h-[52px]"
            >
              Start the Conversation
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={modalOpen}
        source="private"
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
