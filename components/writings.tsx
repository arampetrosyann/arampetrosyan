import Link from 'next/link'
import PageSection from '@/components/pageSection'
import { getWritingsData } from '@/utils/writings'
import { formatDate, toISODate } from '@/utils/date'

const Writings = async () => {
  const data = await getWritingsData()

  return (
    <PageSection title="Writings">
      <div className="flex flex-col gap-8">
        {data.map(({ slug, title, description, date }) => (
          <Link
            key={slug}
            href={`/writings/${slug}`}
            className="relative block before:absolute before:-left-3 before:top-0 before:h-full before:w-0.5 before:bg-secondary before:opacity-0 before:transition-opacity hover:before:opacity-100 active:before:opacity-0"
          >
            <article>
              <h2 className="text-lg text-secondary font-medium">{title}</h2>
              <time className="text-sm opacity-80" dateTime={toISODate(date)}>
                {formatDate(date)}
              </time>
              {description && <p className="mt-2">{description}</p>}
            </article>
          </Link>
        ))}
      </div>
    </PageSection>
  )
}

export default Writings
