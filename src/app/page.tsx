import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'BrightLink Consulting | Online Learning & Government Training',
  description:
    'BrightLink Consulting designs online courses, government training programs, and digital learning ecosystems — then hands them off to your team. SAM.gov registered. CA SBE certified.',
  openGraph: {
    title: 'BrightLink Consulting | Online Learning & Government Training',
    description:
      'We build online training programs and digital learning environments for government agencies and subject matter experts. Design. Build. Hand Off.',
    url: 'https://brightlinkconsulting.com',
  },
  alternates: {
    canonical: 'https://brightlinkconsulting.com',
  },
}

export default function HomePage() {
  return <HomeClient />
}
