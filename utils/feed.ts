import { Feed } from 'feed'
import { baseUrl } from '@/utils/common'
import { getWritingsData } from '@/utils/writings'

export const generateFeed = async () => {
  const allWritings = await getWritingsData()

  const author = {
    name: 'Aram Petrosyan',
    link: baseUrl,
  }

  const feed = new Feed({
    title: 'Articles by Aram Petrosyan',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    favicon: `${baseUrl}/favicon.ico`,
    feedLinks: {
      atom: `${baseUrl}/feed.xml`,
      rss: `${baseUrl}/rss.xml`,
    },
    author,
  })

  allWritings.forEach(({ title, description, date, slug }) => {
    feed.addItem({
      title,
      id: `${baseUrl}/writings/${slug}`,
      link: `${baseUrl}/writings/${slug}`,
      description,
      author: [author],
      date: new Date(date),
    })
  })

  return feed
}
