import fs from 'fs'
import path from 'path'

export type WritingData = {
  title: string
  description?: string
  date: string
  published: boolean
  tags?: string[]
  Content?: React.ComponentType
  slug: string
}

const WORDS_PER_MINUTE = 200

const contentDir = path.join(process.cwd(), 'content')

const getMDXFiles = () =>
  fs.readdirSync(contentDir).filter((fn) => fn.endsWith('.mdx'))

const processMDXFile = (file: string) => file.replace(/\.mdx$/, '')

const stripExports = (source: string) =>
  source.replace(/export\s+const\s+\w+\s*=\s*\{[\s\S]*?\}/g, '')

const stripMarkdown = (source: string) =>
  source
    .replace(/^(-\s??|_\s??){3,}/gm, '') // hr
    .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, '$1') // images alt text
    .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1') // links label
    .replace(/(^|\n)>+/g, ' ') // blockquotes
    .replace(/<[^>]*>/g, '') // html tags
    .replace(/(^|\n)[#]{1,6}\s*/g, ' ') // headings
    .replace(/\s+/g, ' ') // replace multiple spaces with one
    .trim()

export const getReadingTime = (slug: string): number => {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const text = stripMarkdown(stripExports(source))

  const words = text ? text.split(/\s+/g).length : 0

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

export const getWritingsData = async ({
  includeContent = false,
}: { includeContent?: boolean } = {}): Promise<WritingData[]> => {
  const files = getMDXFiles()

  const writingsData = []

  for (const file of files) {
    const { default: Content, details } = await import(`@/content/${file}`)

    if (details.published) {
      writingsData.push({
        ...details,
        ...(includeContent && { Content }),
        slug: processMDXFile(file),
      })
    }
  }

  return writingsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}
