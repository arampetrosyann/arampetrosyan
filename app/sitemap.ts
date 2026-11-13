import type { MetadataRoute } from 'next'
import { baseUrl } from '@/utils/common'
import { getWritingsData } from '@/utils/writings'

export const dynamic = 'force-static'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const writingsData = await getWritingsData()

  return [
    ...['', '/writings'].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    })),
    ...writingsData.map(({ slug }) => ({
      url: `${baseUrl}/writings/${slug}`,
      lastModified: new Date().toISOString(),
    })),
  ]
}

export default sitemap
