'use client'

import { useEffect, useState } from 'react'
import {
  baseUrl,
  canNativeShare,
  nativeShare,
  copyTextToClipboard,
} from '@/utils/common'
import LinkIcon from '@/assets/link.svg'

const ShareLink = ({ slug, title }: { slug: string; title: string }) => {
  const [copied, setCopied] = useState(false)

  const url = `${baseUrl}/writings/${slug}`

  useEffect(() => {
    if (!copied) return

    const timeout = setTimeout(() => setCopied(false), 3000)

    return () => clearTimeout(timeout)
  }, [copied])

  const onClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (canNativeShare()) {
      await nativeShare({ title, url })
      return
    }

    const isCopied = await copyTextToClipboard(url)
    if (isCopied) setCopied(true)
  }

  return (
    <div className="relative">
      <a className="p-2" href={url} onClick={onClick}>
        <LinkIcon />
      </a>
      {copied && (
        <span
          role="status"
          className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap text-sm text-secondary"
        >
          Link copied
        </span>
      )}
    </div>
  )
}

export default ShareLink
