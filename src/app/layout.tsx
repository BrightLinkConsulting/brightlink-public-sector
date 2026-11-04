import type { Metadata } from 'next'
import { Space_Grotesk, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://brightlinkconsulting.com'),
  title: {
    default: 'BrightLink Consulting | Online Learning & Government Training',
    template: '%s | BrightLink Consulting',
  },
  description:
    'BrightLink Consulting designs online learning environments, government training programs, and digital ecosystems for public sector organizations and subject matter experts. SAM.gov registered. CA SBE certified.',
  keywords: [
    'online training for government agencies',
    'subject matter expert online course development',
    'government LMS vendor',
    'SAM registered training vendor',
    'BrightLink Consulting',
    'Mike Walker consultant',
    'online learning consulting',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brightlinkconsulting.com',
    siteName: 'BrightLink Consulting',
    title: 'BrightLink Consulting | Online Learning & Government Training',
    description:
      'We design online learning environments, government training programs, and digital ecosystems that work. SAM.gov registered. CA SBE certified.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BrightLink Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightLink Consulting',
    description:
      'Online learning environments and government training programs. SAM.gov registered. CA SBE certified.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        {clarityId && (
          <Script
            id="clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
            }}
          />
        )}
      </head>
      <body>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
