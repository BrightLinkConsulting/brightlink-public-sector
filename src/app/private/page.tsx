import type { Metadata } from 'next'
import PrivateClient from './PrivateClient'

export const metadata: Metadata = {
  title: 'For Subject Matter Experts | BrightLink Consulting',
  description:
    'BrightLink helps subject matter experts turn their likes and follows into dollars and cents — building online courses, communities, and marketing ecosystems that monetize your intellectual property at scale.',
  openGraph: {
    title: 'For Subject Matter Experts | BrightLink Consulting',
    description:
      'You have the audience. We build the business. Online courses, LMS, communities, and marketing systems for established experts with authority, books, stages, and a following ready to monetize.',
    url: 'https://brightlinkconsulting.com/private',
  },
  alternates: {
    canonical: 'https://brightlinkconsulting.com/private',
  },
}

export default function PrivateSectorPage() {
  return <PrivateClient />
}
