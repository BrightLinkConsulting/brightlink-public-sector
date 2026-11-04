import type { Metadata } from 'next'
import PublicClient from './PublicClient'

export const metadata: Metadata = {
  title: 'Government Training & Online Learning Programs | BrightLink Consulting',
  description:
    'BrightLink Consulting designs SCORM-compliant, Section 508 accessible online training programs for government agencies, SBDC networks, and federal contractors. SAM.gov registered. CAGE 1A8D6.',
  openGraph: {
    title: 'Government Training & Online Learning Programs | BrightLink Consulting',
    description:
      'Online training programs and digital learning systems for federal agencies, state and local government, and mission-driven organizations. SAM.gov registered. CA SBE certified.',
    url: 'https://brightlinkconsulting.com/public',
  },
  alternates: {
    canonical: 'https://brightlinkconsulting.com/public',
  },
}

export default function PublicSectorPage() {
  return <PublicClient />
}
