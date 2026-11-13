import type { Metadata } from 'next'
import { getReadingTime, getWritingsData } from '@/utils/writings'
import { formatDate, toISODate } from '@/utils/date'
import ShareLink from './shareLink'
import './xcode.min.css' // syntax highlighting styles

export const dynamicParams = false

const Writing = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const { default: Content, details } = await import(`@/content/${slug}.mdx`)

  const readingTime = getReadingTime(slug)
  const copyrightYear = formatDate(details.date, {
    includeMonth: false,
    includeDay: false,
  })

  return (
    <article id={slug} className="mb-16 md:mb-8">
      <h1 className="text-4xl font-semibold my-0 mt-6">{details.title}</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 opacity-80">
          <time className="inline-block" dateTime={toISODate(details.date)}>
            {formatDate(details.date, { includeDay: true })}
          </time>
          · <span>{`${readingTime} min read`}</span>
        </div>
        <ShareLink slug={slug} title={details.title} />
      </div>
      <div className="writing-content">
        <Content />
      </div>
      <div className="mt-16 text-center text-xs xs:text-sm opacity-80">
        © {copyrightYear} Aram Petrosyan · licensed under{' '}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          className="tlink"
          target="_blank"
          rel="noopener noreferrer license"
        >
          CC BY 4.0
        </a>{' '}
        ·{' '}
        <a
          href="/feed.xml"
          className="tlink"
          type="application/atom+xml"
          rel="alternate feed"
        >
          feed
        </a>
      </div>
    </article>
  )
}

export default Writing

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const { details } = await import(`@/content/${slug}.mdx`)

  return {
    title: details.title,
    description: details.description,
    keywords: ['Writing', 'Article', 'Tech'],
    alternates: {
      canonical: `/writings/${slug}`,
    },
    openGraph: {
      url: `/writings/${slug}`,
      type: 'article',
    },
  }
}

export const generateStaticParams = async () => {
  const writings = await getWritingsData()

  return writings.map(({ slug }) => ({ slug }))
}
