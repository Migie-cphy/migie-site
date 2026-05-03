'use client'
import {
  BookOpenIcon,
  BookMarkedIcon,
  HouseIcon,
  NotebookPenIcon,
} from 'lucide-react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: '主页', href: '/', icon: HouseIcon },
  { label: '论文', href: '/publications', icon: BookOpenIcon },
  { label: '手册', href: '/handbook', icon: BookMarkedIcon },
  { label: '博客', href: '/blog', icon: NotebookPenIcon },
]

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/85">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-6 py-3">
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            王美洁
          </Link>
        </div>
        <nav className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-zinc-950 dark:hover:text-zinc-100"
            >
              <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
