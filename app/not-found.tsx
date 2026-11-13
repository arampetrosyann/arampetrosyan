import type { Metadata } from 'next'
import Link from 'next/link'
import ArrowRightIcon from '@/assets/arrow-right.svg'

export const metadata: Metadata = {
  title: 'Not Found',
}

const NotFound = () => (
  <section className="flex flex-col items-center justify-center gap-4 h-main-screen">
    <h1 className="text-4xl font-semibold">404 - Not Found</h1>
    <p>It appears you have strayed from the path.</p>
    <Link
      className="mt-2 p-2 transition-colors hover:text-secondary hover:[&_*_path]:stroke-secondary"
      href="/"
    >
      <span className="inline-flex flex-row items-center gap-1">
        Return home
        <ArrowRightIcon />
      </span>
    </Link>
  </section>
)

export default NotFound
