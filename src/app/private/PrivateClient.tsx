'use client'

import { useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
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

export default function PrivateClient() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Nav onOpenModal={openModal} />

      <main>
        {/* ── HERO + VIDEO ─────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white grain-overlay">
          {/* Orange accent strip */}
          <div className="h-1 w-full bg-[#FF5833]" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 md:pt-28 md:pb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-8">
              Subject Matter Experts
            </p>
            <h1 className="font-display font-black text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.0] tracking-tight text-white mb-8">
              We help you turn your<br className="hidden md:block" />{' '}
              <span className="text-[#FF5833]">likes and follows</span> into<br className="hidden md:block" />{' '}
              dollars and cents.
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              We build the online courses, platforms, and marketing systems that turn your expertise into revenue. Your business should fund your life — not consume it.
            </p>
          </div>

          {/* Video */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div
              id="vidalytics_embed_uXrkFzChcqK_vwVm"
              style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}
            />
            <Script
              id="vidalytics-embed"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_uXrkFzChcqK_vwVm', 'https://fast.vidalytics.com/embeds/56hJ9E4N/uXrkFzChcqK_vwVm/');`,
              }}
            />
          </div>

          {/* CTA below video */}
          <div className="text-center pb-20 md:pb-28 px-4">
            <p className="text-white/40 text-sm mb-6 uppercase tracking-widest font-semibold">
              A Quick Introduction &mdash; 10 minutes
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5833] text-white font-semibold rounded-md hover:bg-[#e84d2d] transition-colors text-base min-h-[52px]"
            >
              Let&apos;s Build It
              <ArrowRight size={18} />
            </button>
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

        {/* ── THE GAP ──────────────────────────────────────────────── */}
        <section className="bg-[#04080B] text-white grain-overlay py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-8">The Gap We Close</p>
            <h2 className="font-display font-black text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-white mb-8">
              You&rsquo;ve built the audience.<br className="hidden md:block" />{' '}
              Now build the system that converts it into income.
            </h2>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              More content won&rsquo;t close this gap. The right system will.
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
              {[
                { label: 'You have', value: 'The Audience' },
                { label: 'You need', value: 'The Infrastructure' },
                { label: 'We build', value: 'The Bridge' },
              ].map(({ label, value }, i) => (
                <div key={i} className="bg-[#04080B] px-8 py-10 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">{label}</p>
                  <p className="font-display font-bold text-2xl text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE SERVE ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-5">Who We Serve</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-[#04080B] leading-tight mb-6">
                  You've put in the work. The world knows it. Now let's build the business.
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  The people we serve aren't beginners. They've spent years — sometimes decades — building credibility and authority in their space. They have books. They've spoken on stages. They have a strong social presence and a loyal following.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  But likes and follows don't pay the bills. And they haven't cracked the code on how to turn their intellectual property into a scalable digital business that runs without them trading time for money.
                </p>
                <p className="text-gray-700 font-medium text-lg leading-relaxed">
                  That's exactly the gap we close — monetizing your message, packaging your mission, and building the infrastructure that lets you scale without burning out.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Sound familiar?</p>
                {[
                  { check: true,  text: 'You\'ve been in your industry for years and have genuine authority' },
                  { check: true,  text: 'You have a book, a speaking career, or a strong following' },
                  { check: true,  text: 'Your social content gets attention — but it\'s not translating to consistent revenue' },
                  { check: true,  text: 'You know what you want to teach — you just don\'t know how to package and sell it' },
                  { check: true,  text: 'You\'ve looked at Kajabi, Skool, or Teachable but don\'t know where to start' },
                  { check: true,  text: 'You\'re ready to stop trading time for money and build something that scales' },
                ].map(({ check, text }, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl px-6 py-5 border border-gray-100">
                    <div className="w-5 h-5 rounded-full bg-[#FF5833] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
                  </div>
                ))}
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


        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-display font-bold text-4xl text-[#04080B] mb-3">What clients say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
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
                  quote: "Mike is one of the rare consultants who actually understands both the strategy AND the execution. The frameworks he built for us are still running our growth today.",
                  name: 'Aleric Heck',
                  role: 'CEO, AdOutreach',
                  initials: 'AH',
                  color: '#B45309',
                },
              ].map(({ quote, name, role, initials, color }, i) => (
                <div key={i} className="bg-[#F7F5F0] rounded-xl p-7 border border-gray-100">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-[#FF5833] fill-[#FF5833]" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-gray-700 leading-relaxed mb-5 italic">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: color }}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#04080B]">{name}</p>
                      <p className="text-xs text-gray-400">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a href="/testimonials" className="text-sm font-semibold text-[#FF5833] hover:text-[#e84d2d] transition-colors inline-flex items-center gap-1.5">
              Read all client reviews
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
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              {/* Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-white/[0.06] order-2 md:order-1">
                <img
                  src="https://mikegwalker.com/assets/mike-stage-1280.webp"
                  alt="Mike Walker, Founder of BrightLink Consulting"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: '50% 12%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04080B]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://mikegwalker.com/assets/signature-480.webp"
                      alt="Mike Walker signature"
                      className="h-8 opacity-60"
                    />
                  </div>
                  <blockquote>
                    <p className="text-white/65 text-sm italic leading-relaxed">
                      &ldquo;Mike Walker is a straight-up genius when it comes to business.&rdquo;
                    </p>
                    <p className="text-white/35 text-xs mt-2">— Marley Jaxx, CEO · Jaxx Productions</p>
                  </blockquote>
                </div>
              </div>
              {/* Text */}
              <div className="order-1 md:order-2 pt-0 md:pt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5833] mb-6">Who You&rsquo;re Working With</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
                  You&rsquo;re not hiring an agency.<br />You&rsquo;re working with Mike.
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-5">
                  I&rsquo;ve been building businesses for 30+ years — online courses, communities, coaching programs, digital products, and the marketing systems that sell them. I know what works because I&rsquo;ve built it, failed at it, and rebuilt it.
                </p>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  When you work with BrightLink, you get me in the room — not a junior account manager, not a template playbook. Me, with a team executing behind it.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    'The Exceptional Experience',
                    'The Systems-Thinking Visionary',
                    'The SOS Methodology',
                  ].map((book) => (
                    <span key={book} className="px-3 py-1.5 border border-white/[0.12] text-white/50 text-xs rounded font-medium">
                      {book}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Mike Walker</p>
                  <p className="text-white/40 text-xs mt-0.5">Founder &amp; Principal · BrightLink Consulting</p>
                </div>
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
