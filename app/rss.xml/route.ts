import { NextResponse } from 'next/server'
import { generateFeed } from '@/utils/feed'

export const dynamic = 'force-static'

const GET = async () => {
  const feed = await generateFeed()

  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}

export { GET }
