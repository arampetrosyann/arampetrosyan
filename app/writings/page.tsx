import type { Metadata } from 'next'
import Articles from '@/components/writings'

export const metadata: Metadata = {
  title: 'Writings',
  keywords: ['Writings', 'Articles', 'Blog', 'Tech'],
  alternates: {
    canonical: '/writings',
    types: {
      'application/atom+xml': '/feed.xml',
      'application/rss+xml': '/rss.xml',
    },
  },
}

const Writings = () => <Articles />

export default Writings
