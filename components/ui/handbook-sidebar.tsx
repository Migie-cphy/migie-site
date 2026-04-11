'use client'

import { TUTORIAL_PHASES } from '@/app/tutorials'
import { cn } from '@/lib/utils'
import { ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function HandbookSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  function getPhaseLabel(title: string) {
    return title.replace(/^Phase\s+\d+\s+·\s+/, '')
  }

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed right-4 bottom-5 z-40 inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-zinc-50/90 px-3.5 py-2 text-[13px] font-medium text-zinc-700 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] backdrop-blur md:hidden dark:border-zinc-800 dark:bg-zinc-950/85 dark:text-zinc-200"
      >
        <MenuIcon className="h-3.5 w-3.5" />
        <span>目录</span>
      </button>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-zinc-950/40 transition-opacity md:hidden',
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-[min(84vw,320px)] border-r border-zinc-200/80 bg-zinc-50 px-4 pb-6 transition-transform duration-300 ease-out md:hidden dark:border-zinc-800 dark:bg-zinc-950',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800">
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
            目录
          </p>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
            aria-label="Close handbook navigation"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        <nav
          aria-label="Handbook navigation"
          className="mt-4 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1"
        >
          <SidebarContent pathname={pathname} getPhaseLabel={getPhaseLabel} />
        </nav>
      </aside>

      <aside className="hidden md:block">
        <nav
          aria-label="Handbook navigation"
          className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"
        >
          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
            <p className="mb-4 px-2 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-100">
              手册
            </p>
            <SidebarContent pathname={pathname} getPhaseLabel={getPhaseLabel} />
          </div>
        </nav>
      </aside>
    </>
  )
}

function SidebarContent({
  pathname,
  getPhaseLabel,
}: {
  pathname: string
  getPhaseLabel: (title: string) => string
}) {
  return (
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
  )
}
