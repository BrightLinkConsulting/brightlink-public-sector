'use client'

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactModalProps {
  isOpen: boolean
  source: string
  onClose: () => void
}

export default function ContactModal({ isOpen, source, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // Determine modal label based on source
  const isPublicSource = source === 'public'
  const ctaLabel = isPublicSource ? 'Start a Conversation' : "Let's Talk"
  const subLabel = isPublicSource
    ? "Government contracts, training programs, and procurement—let's talk about your project."
    : "Whether you're building something new or scaling what you have, we'd love to hear about it."

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact BrightLink Consulting"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl animate-slide-up overflow-hidden">
        {/* Top accent bar */}
        <div className={cn(
          'h-1 w-full',
          isPublicSource ? 'bg-[#1E3A5F]' : 'bg-[#FF5833]'
        )} />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#04080B] leading-tight">
                {ctaLabel}
              </h2>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-sm">
                {subLabel}
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center flex-shrink-0"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Success state */}
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-[#04080B] mb-2">Message received.</h3>
              <p className="text-gray-500 text-sm mb-6">
                We'll be in touch shortly. Looking forward to it.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#04080B] text-white text-sm font-semibold rounded-md hover:bg-[#1a1a1a] transition-colors min-h-[44px]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    First Name <span className="text-[#FF5833]">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5833] focus:border-transparent transition-shadow min-h-[44px]"
                    placeholder="Mike"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5833] focus:border-transparent transition-shadow min-h-[44px]"
                    placeholder="Walker"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email <span className="text-[#FF5833]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5833] focus:border-transparent transition-shadow min-h-[44px]"
                  placeholder="you@organization.gov"
                />
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5833] focus:border-transparent transition-shadow min-h-[44px]"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5833] focus:border-transparent transition-shadow min-h-[44px]"
                    placeholder="Agency / Company"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  What are you working on?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5833] focus:border-transparent transition-shadow resize-none"
                  placeholder="Brief description of your project or what you're trying to build..."
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-md">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={cn(
                  'w-full py-3.5 text-sm font-semibold rounded-md transition-colors min-h-[44px]',
                  status === 'submitting'
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#04080B] text-white hover:bg-[#1a1a1a]'
                )}
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message →'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                No spam. We respond to every inquiry within one business day.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
