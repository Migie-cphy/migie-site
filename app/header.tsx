'use client'
import {
  BookOpenIcon,
  BookMarkedIcon,
  HouseIcon,
  NotebookPenIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV, t } from './i18n'
import { useLanguage, type Lang } from './language-provider'

const NAV_ICONS: Record<string, typeof HouseIcon> = {
  home: HouseIcon,
  publications: BookOpenIcon,
  handbook: BookMarkedIcon,
  blog: NotebookPenIcon,
}

const NAV_HREFS: Record<string, string> = {
  home: '/',
  publications: '/publications',
  handbook: '/handbook',
  blog: '/blog',
}

function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const options: { id: Lang; label: string }[] = [
    { id: 'en', label: 'EN' },
    { id: 'zh', label: '中' },
  ]

  return (
    <div className="flex items-center rounded-full border border-zinc-200/80 p-0.5 text-xs dark:border-zinc-800">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setLang(option.id)}
          aria-pressed={lang === option.id}
          className={`rounded-full px-2 py-0.5 transition-colors ${
            lang === option.id
              ? 'bg-zinc-950 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950'
              : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const pathname = usePathname()
  const { lang } = useLanguage()

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/85">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-6 py-3">
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Meijie Wang
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-5">
          <nav className="flex items-center gap-4 text-sm text-zinc-600 sm:gap-5 dark:text-zinc-400">
            {NAV.map((item) => {
              const href = NAV_HREFS[item.key]
              const Icon = NAV_ICONS[item.key]
              const label = t(item.label, lang)
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href)

              return (
                <Link
                  key={item.key}
                  href={href}
                  aria-label={label}
                  aria-current={isActive ? 'page' : undefined}
                  className={`-m-1 inline-flex items-center gap-1.5 p-1 transition-colors duration-200 ${
                    isActive
                      ? 'font-medium text-zinc-950 dark:text-zinc-100'
                      : 'hover:text-zinc-950 dark:hover:text-zinc-100'
                  }`}
                >
                  <Icon
                    className="h-4 w-4 sm:h-3.5 sm:w-3.5"
                    aria-hidden="true"
                  />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              )
            })}
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
