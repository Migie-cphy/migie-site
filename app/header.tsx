'use client'
import {
  BookOpenIcon,
  BriefcaseBusinessIcon,
  HouseIcon,
  NotebookPenIcon,
} from 'lucide-react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: '主页', href: '/', icon: HouseIcon },
  { label: '经历', href: '/#experience', icon: BriefcaseBusinessIcon },
  { label: '论文', href: '/publications', icon: BookOpenIcon },
  { label: '博客', href: '/blog', icon: NotebookPenIcon },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 -mx-2 mb-6 flex items-center justify-between gap-2 border-b border-zinc-200/70 bg-white/85 px-2 py-3 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/85">
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
    </header>
  )
}
