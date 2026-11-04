import type { Metadata } from 'next'
import TestimonialsClient from './TestimonialsClient'

export const metadata: Metadata = {
  title: 'Client Reviews | BrightLink Consulting',
  description:
    'Read what clients say about working with Mike Walker and BrightLink Consulting — from business coaches and CEOs to founders building scalable digital platforms.',
  openGraph: {
    title: 'Client Reviews | BrightLink Consulting',
    description:
      'What clients say about Mike Walker and BrightLink Consulting. Real testimonials from coaches, founders, and executives who have transformed their businesses.',
    url: 'https://brightlinkconsulting.com/testimonials',
  },
  alternates: {
    canonical: 'https://brightlinkconsulting.com/testimonials',
  },
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'BrightLink Consulting Client Reviews',
  itemListElement: [
    {
      '@type': 'Review',
      position: 1,
      author: { '@type': 'Person', name: 'Kim OHara', jobTitle: 'Book Coach to Best Sellers' },
      reviewBody:
        "Mike Walker is one of the most brilliant people I've ever met. He sees around corners and helped me understand and love the business side of my business. Working with Mike is like having a business genius in your corner.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      itemReviewed: { '@type': 'Organization', name: 'BrightLink Consulting' },
    },
    {
      '@type': 'Review',
      position: 2,
      author: { '@type': 'Person', name: 'Marley Jaxx', jobTitle: 'CEO, Jaxx Productions' },
      reviewBody:
        'Working with Mike was incredible. He gave me clarity and direction that completely shifted how I operate. If you get the chance to work with him, take it.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      itemReviewed: { '@type': 'Organization', name: 'BrightLink Consulting' },
    },
    {
      '@type': 'Review',
      position: 3,
      author: { '@type': 'Person', name: 'Jackie Woodside', jobTitle: 'NY Times Best Selling Author, CPC MSW' },
      reviewBody:
        "Mike Walker is a master at systems thinking. His ability to see the big picture while working out the details is truly remarkable. I would not hesitate to recommend him to anyone.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      itemReviewed: { '@type': 'Organization', name: 'BrightLink Consulting' },
    },
    {
      '@type': 'Review',
      position: 4,
      author: { '@type': 'Person', name: 'Yousef Badou', jobTitle: 'Founder, Emergence LLC' },
      reviewBody:
        "Mike has an incredible gift for synthesizing complex ideas and creating elegant solutions. His depth of knowledge is matched only by his genuine desire to see you win.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      itemReviewed: { '@type': 'Organization', name: 'BrightLink Consulting' },
    },
    {
      '@type': 'Review',
      position: 5,
      author: { '@type': 'Person', name: 'Iggy Odighizuwa', jobTitle: 'CEO, Charlie.ai' },
      reviewBody:
        "Mike Walker is a category of one. His insight into business systems, customer experience, and operational efficiency is unmatched. He helped us see our business in an entirely new way.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      itemReviewed: { '@type': 'Organization', name: 'BrightLink Consulting' },
    },
    {
      '@type': 'Review',
      position: 6,
      author: { '@type': 'Person', name: 'Aleric Heck', jobTitle: 'CEO, AdOutreach' },
      reviewBody:
        "Mike is one of the rare consultants who actually understands both the strategy AND the execution. The frameworks he built for us are still running our growth today.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      itemReviewed: { '@type': 'Organization', name: 'BrightLink Consulting' },
    },
    {
      '@type': 'Review',
      position: 7,
      author: { '@type': 'Person', name: 'Byron Rodgers', jobTitle: 'CEO, Bravo Research Group' },
      reviewBody:
        "Mike Walker is the real deal. He cares deeply about the people he works with and brings an extraordinary level of excellence to everything he does.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      itemReviewed: { '@type': 'Organization', name: 'BrightLink Consulting' },
    },
  ],
}

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BrightLink Consulting',
  url: 'https://brightlinkconsulting.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '7',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <TestimonialsClient />
    </>
  )
}
