import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkEmoji from 'remark-emoji'
import rehypeHighlight from 'rehype-highlight'

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['mdx', 'ts', 'tsx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkEmoji],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX(nextConfig)
