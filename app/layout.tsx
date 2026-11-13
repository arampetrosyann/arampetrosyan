import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { baseUrl } from '@/utils/common'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const gaId = process.env.NEXT_PUBLIC_GA_ID

const ogImage = {
  url: '/media/og.png',
  alt: 'Aram Petrosyan',
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Aram Petrosyan',
    template: '%s | Aram Petrosyan',
  },
  keywords: [
    'Aram Petrosyan',
    'Software Engineer',
    'Developer',
    'Blog',
    'Writings',
    'Articles',
    'Tech',
  ],
  description: 'Articles by Aram Petrosyan',
  authors: [{ name: 'Aram Petrosyan' }],
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'Aram Petrosyan',
    images: [ogImage],
  },
}

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html
    lang="en"
    data-scroll-behavior="smooth"
    className={clsx(inter.variable, 'font-sans')}
  >
    <body className="max-w-180 mx-auto antialiased">
      {gaId ? (
        <>
          <Script async src={`https://www.googletagmanager.com/gtm.js?id=${gaId}`} />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `}
          </Script>
        </>
      ) : null}
      <Header />
      <main className="px-6 py-2 md:p-4">{children}</main>
    </body>
  </html>
)

const Header = () => (
  <header className="flex justify-between items-center px-6 py-6 md:p-4">
    <Link href="/" className="py-2">
      <span className="py-1 text-secondary font-semibold text-2xl">
        Aram Petrosyan
      </span>
    </Link>
    <nav className="*:not-last:mr-4">
      <Link
        href="/writings"
        className="py-2 transition-colors align-middle hover:text-secondary"
      >
        Writings
      </Link>
    </nav>
  </header>
)

export default Layout
