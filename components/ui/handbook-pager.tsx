'use client'

import { TUTORIAL_TOPICS } from '@/app/tutorials'
import { cn } from '@/lib/utils'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HANDBOOK_PAGES = [
  {
    slug: 'preface',
    title: '前言',
  },
  ...TUTORIAL_TOPICS,
]

export function HandbookPager() {
  const pathname = usePathname()
  const currentSlug = pathname.replace(/^\/handbook\/?/, '') || 'preface'
  const currentIndex = HANDBOOK_PAGES.findIndex(
    (page) => page.slug === currentSlug,
  )

  if (currentIndex === -1) {
    return null
  }

  const previous = HANDBOOK_PAGES[currentIndex - 1]
  const next = HANDBOOK_PAGES[currentIndex + 1]

  if (!previous && !next) {
    return null
  }

  function renderLink(
    page: (typeof HANDBOOK_PAGES)[number] | undefined,
    direction: 'previous' | 'next',
  ) {
    if (!page) {
      return <div />
    }

    const href = `/handbook/${page.slug}`
    const isPrevious = direction === 'previous'

    return (
      <Link
        href={href}
        className={cn(
          'group flex min-h-24 rounded-2xl border border-zinc-200/80 bg-zinc-50 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-100/70 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900',
          isPrevious ? 'items-start text-left' : 'items-end text-right',
        )}
      >
        <div className="space-y-2">
          <p
            className={cn(
              'flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400',
              !isPrevious && 'justify-end',
            )}
          >
            {isPrevious ? (
              <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
            ) : null}
            <span>{isPrevious ? '上一篇' : '下一篇'}</span>
            {!isPrevious ? (
              <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
            ) : null}
          </p>
          <p className="text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-white">
            {page.title}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <nav
      aria-label="Handbook pagination"
      className="not-prose mt-16 grid gap-3 border-t border-zinc-200/80 pt-8 sm:grid-cols-2 dark:border-zinc-800"
    >
      {renderLink(previous, 'previous')}
      {renderLink(next, 'next')}
    </nav>
  )
}
