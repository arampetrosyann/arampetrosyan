import { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-4xl font-semibold pt-2 my-0" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-2xl font-medium mt-10 mb-4" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-xl font-medium mt-8 mb-3" {...props} />
  ),
  h4: (props: ComponentPropsWithoutRef<'h4'>) => (
    <h4 className="text-lg font-medium" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="border-none h-0.5 mx-1 my-4 bg-text opacity-60" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="my-4.5 text-text leading-snug" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium italic" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className=" pl-4 my-6 border-l-3 border-gray-400" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal text-text pl-5 space-y-2" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc text-text pl-5 space-y-2" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => <li className="pl-1" {...props} />,
  img: (props: ComponentPropsWithoutRef<'img'>) => (
    // eslint-disable-next-line
    <img className="max-w-full mx-auto" {...props} />
  ),
  Table: ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
    <table className="w-full border-b">
      <thead className="border-y">
        <tr>
          {headers.map((header, ind) => (
            <th key={ind} className="px-2 py-1 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ind) => (
          <tr key={ind}>
            {row.map((cell, cellInd) => (
              <td key={cellInd} className="px-2 py-1">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  a: ({ href, children, ...props }: ComponentPropsWithoutRef<'a'>) => {
    const className = 'text-secondary hover:underline'

    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      )
    }

    if (href?.startsWith('#') || href?.startsWith('/')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      )
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    )
  },
}

export const useMDXComponents = (): MDXComponents => components
