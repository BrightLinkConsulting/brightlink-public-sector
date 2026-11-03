'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavProps {
  onOpenModal: (source?: string) => void
}

const links = [
  { href: '/public', label: 'Public Sector' },
  { href: '/private', label: 'For Experts' },
  { href: '/testimonials', label: 'Reviews' },
]

export default function Nav({ onOpenModal }: NavProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isPublic = pathname === '/public'
  const isPrivate = pathname === '/private'

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#04080B]/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        )}
        aria-label="Main navigation"
      >
        {/* Page accent strip */}
        {isPublic && <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1E3A5F] to-transparent" />}
        {isPrivate && <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF5833] to-transparent" />}

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-85 transition-opacity duration-200 group"
              aria-label="BrightLink Consulting — Home"
            >
              <Image
                src="/images/brightlink-icon.png"
                alt="BrightLink"
                width={34}
                height={34}
                className="object-contain"
                priority
              />
              <span className="font-display font-bold text-white text-[15px] tracking-wide uppercase hidden sm:block">
                BrightLink <span className="text-white/40 font-normal">Consulting</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-9">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-[13px] font-medium tracking-wider uppercase transition-colors duration-200',
                    pathname === link.href
                      ? 'text-white'
                      : 'text-white/50 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA + mobile menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenModal('nav')}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-[#FF5833] text-[#FF5833] text-[13px] font-semibold tracking-wide uppercase rounded-sm hover:bg-[#FF5833] hover:text-white transition-all duration-200 min-h-[44px] group"
              >
                Start a Project
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#04080B] border-t border-white/[0.08] px-5 pb-8 pt-5">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3.5 text-sm font-medium tracking-wider uppercase transition-colors duration-200 min-h-[44px] flex items-center border-b border-white/[0.05]',
                    pathname === link.href
                      ? 'text-white'
                      : 'text-white/50 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onOpenModal('nav') }}
                className="mt-5 w-full px-5 py-4 border border-[#FF5833] text-[#FF5833] text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-[#FF5833] hover:text-white transition-all duration-200 min-h-[44px]"
              >
                Start a Project
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
