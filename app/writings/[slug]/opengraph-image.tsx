import { readFile } from 'node:fs/promises'
import { ImageResponse } from 'next/og'
import { join } from 'node:path'

export const dynamic = 'force-static'
export const alt = 'Aram Petrosyan'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

const interSemiBold = await readFile(
  join(process.cwd(), 'assets/fonts/Inter-SemiBold.ttf'),
)

const Image = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const { details } = await import(`@/content/${slug}.mdx`)

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        padding: 40,
        backgroundColor: '#01205A',
        color: '#fafafa',
        fontFamily: 'Inter',
        fontWeight: 600,
      }}
    >
      <div
        style={{
          fontSize: 36,
        }}
      >
        Aram Petrosyan
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          fontSize: 90,
          lineHeight: 1.2,
          paddingBottom: 32,
        }}
      >
        {details.title}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  )
}

export default Image

export { generateStaticParams } from './page'
