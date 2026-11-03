'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavProps {
  onOpenModal: (source?: string) => void
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/public', label: 'Public Sector' },
  { href: '/private', label: 'Subject Matter Experts' },
  { href: '/testimonials', label: 'Testimonials' },
]

export default function Nav({ onOpenModal }: NavProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Determine nav accent based on page
  const isPublic = pathname === '/public'
  const isPrivate = pathname === '/private'

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-[#04080B]/95 backdrop-blur-sm shadow-lg' : 'bg-[#04080B]'
        )}
        aria-label="Main navigation"
      >
        {/* Page accent strip */}
        {isPublic && (
          <div className="h-0.5 w-full bg-[#1E3A5F]" />
        )}
        {isPrivate && (
          <div className="h-0.5 w-full bg-[#FF5833]" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-display font-bold text-white text-lg tracking-tight hover:opacity-90 transition-opacity"
              aria-label="BrightLink Consulting — Home"
            >
              <span className="text-[#FF5833]">B</span>
              <span>BrightLink</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA + mobile menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenModal('nav')}
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#FF5833] text-white text-sm font-semibold rounded-md hover:bg-[#e84d2d] transition-colors min-h-[44px]"
              >
                Let's Talk
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#04080B] border-t border-white/10 px-4 pb-6 pt-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-3 rounded-md text-base font-medium transition-colors min-h-[44px] flex items-center',
                    pathname === link.href
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onOpenModal('nav')
                }}
                className="mt-3 w-full px-5 py-3.5 bg-[#FF5833] text-white text-base font-semibold rounded-md hover:bg-[#e84d2d] transition-colors min-h-[44px]"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16 md:h-18" />
    </>
  )
}
