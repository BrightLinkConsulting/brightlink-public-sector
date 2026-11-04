import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#04080B] text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" aria-label="BrightLink Consulting — Home">
              <Image
                src="/images/brightlink-logo-full.png"
                alt="BrightLink Consulting"
                width={180}
                height={72}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              We design online learning environments, government training programs, and digital ecosystems that work.
            </p>
            <div className="text-xs text-white/40 space-y-1 pt-2">
              <p>SAM.gov Registered</p>
              <p>CAGE Code: 1A8D6 &nbsp;·&nbsp; UEI: HPP7BBEYCQG5</p>
              <p>CA SBE Certified #2051043</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/public', label: 'Public Sector' },
                { href: '/private', label: 'Subject Matter Experts' },
                { href: '/testimonials', label: 'Reviews' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Contact</p>
            <div className="space-y-2">
              <p className="text-sm text-white/60">
                Mike Walker, Founder
              </p>
              <a
                href="https://mikegwalker.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors block"
              >
                mikegwalker.com →
              </a>
              <p className="text-xs text-white/40 pt-3 leading-relaxed">
                NAICS: 611430 · 611710 · 541611<br />
                PSC: U099 · R499 · B599
              </p>
            </div>
          </div>
        </div>

        {/* Credential badge strip */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6 text-center">Registered &amp; Certified With</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">

            {/* SBA */}
            <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-80 transition-opacity">
              <div className="bg-[#1b4f9c] rounded px-3 py-1.5 text-center">
                <p className="text-white font-bold text-lg leading-none tracking-wide">SBA</p>
                <p className="text-white/70 text-[6px] leading-none mt-0.5 tracking-widest uppercase">Small Business Administration</p>
              </div>
            </div>

            {/* America's SBDC */}
            <div className="flex flex-col items-center gap-0.5 opacity-50 hover:opacity-80 transition-opacity">
              <p className="text-[#5a9e5a] text-xs italic leading-none">america's</p>
              <p className="text-[#f47920] font-bold text-xl leading-none tracking-wide">SBDC</p>
            </div>

            {/* SAM.gov */}
            <div className="flex flex-col items-center gap-0.5 opacity-50 hover:opacity-80 transition-opacity">
              <p className="text-[#5b9fd4] font-bold text-xl leading-none">SAM.gov</p>
              <p className="text-white/40 text-[9px] uppercase tracking-widest leading-none">Active Registration</p>
            </div>

            {/* CA SBE */}
            <div className="flex flex-col items-center gap-0.5 opacity-50 hover:opacity-80 transition-opacity border border-white/20 rounded px-3 py-1.5 text-center">
              <p className="text-white/60 text-[7px] font-bold uppercase tracking-widest leading-none">California</p>
              <p className="text-white font-bold text-sm leading-none">SBE Certified</p>
              <p className="text-white/40 text-[8px] leading-none mt-0.5">#2051043</p>
            </div>

          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>© {year} BrightLink Consulting. All rights reserved.</p>
            <p>Designed and built to deliver.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
