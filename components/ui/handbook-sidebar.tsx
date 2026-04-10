'use client'

import { TUTORIAL_PHASES } from '@/app/tutorials'
import { cn } from '@/lib/utils'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function HandbookSidebar() {
  const pathname = usePathname()

  function getPhaseLabel(title: string) {
    return title.replace(/^Phase\s+\d+\s+·\s+/, '')
  }

  return (
    <aside className="hidden md:block">
      <nav
        aria-label="Handbook navigation"
        className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"
      >
        <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="mb-4 px-2 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-100">
            手册
          </p>

          <div className="space-y-5">
            <div className="space-y-1">
              <Link
                href="/handbook/preface"
                className={cn(
                  'block rounded-lg px-2 py-1.5 text-[13px] leading-snug transition-colors',
                  pathname === '/handbook/preface'
                    ? 'bg-zinc-200/70 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50'
                    : 'text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50',
                )}
              >
                前言
              </Link>
            </div>

            {TUTORIAL_PHASES.map((phase) => {
              const phaseHasActiveTopic = phase.topics.some(
                (topic) => pathname === `/handbook/${topic.slug}`,
              )

              return (
                <details
                  key={phase.title}
                  open={phaseHasActiveTopic}
                  className="group/phase"
                >
                  <summary className="mb-2 flex cursor-pointer list-none items-center justify-between gap-2 rounded-lg px-2 py-1 text-xs font-medium tracking-wide text-zinc-500 uppercase transition-colors marker:content-none hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-100">
                    <span>{getPhaseLabel(phase.title)}</span>
                    <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-open/phase:rotate-90" />
                  </summary>
                  <ol className="space-y-1">
                    {phase.topics.map((topic) => {
                      const href = `/handbook/${topic.slug}`
                      const isActive = pathname === href

                      return (
                        <li key={topic.slug}>
                          <Link
                            href={href}
                            className={cn(
                              'block rounded-lg px-2 py-1.5 text-[13px] leading-snug transition-colors',
                              isActive
                                ? 'bg-zinc-200/70 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50'
                                : 'text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50',
                            )}
                          >
                            {topic.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ol>
                </details>
              )
            })}
          </div>
        </div>
      </nav>
    </aside>
  )
}
