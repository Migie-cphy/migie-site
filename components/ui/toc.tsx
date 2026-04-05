'use client'

import { useEffect, useState } from 'react'

type HeadingItem = {
  id: string
  level: 2 | 3 | 4
  text: string
}

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .replace(/\s+/g, '-')
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<HeadingItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [showH4, setShowH4] = useState(false)

  useEffect(() => {
    const article = document.querySelector('[data-blog-article]')
    if (!article) return

    const headingElements = Array.from(
      article.querySelectorAll<HTMLHeadingElement>('h2, h3, h4')
    )

    const nextHeadings = headingElements
      .map((element) => {
        const text = element.textContent?.trim() ?? ''
        if (!text) return null

        if (!element.id) {
          element.id = slugifyHeading(text)
        }

        return {
          id: element.id,
          level: Number(element.tagName[1]) as 2 | 3 | 4,
          text,
        }
      })
      .filter((item): item is HeadingItem => item !== null)

    setHeadings(nextHeadings)
    setActiveId(nextHeadings[0]?.id ?? '')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          )

        if (visibleHeadings[0]) {
          setActiveId((visibleHeadings[0].target as HTMLElement).id)
        }
      },
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: 1,
      }
    )

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  if (headings.length < 2) return null

  const hasH4 = headings.some((heading) => heading.level === 4)

  function renderHeadingLink(heading: HeadingItem) {
    const levelClass =
      heading.level === 2 ? '' : heading.level === 3 ? 'pl-4' : 'pl-8'
    const hiddenClass = heading.level === 4 && !showH4 ? 'hidden' : ''
    const activeClass =
      activeId === heading.id
        ? 'border-zinc-900 text-zinc-950 dark:border-zinc-100 dark:text-zinc-50'
        : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'

    return (
      <li key={heading.id} className={hiddenClass}>
        <a
          href={`#${heading.id}`}
          className={`block border-l pl-3 text-sm transition-colors ${levelClass} ${activeClass}`}
        >
          {heading.text}
        </a>
      </li>
    )
  }

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <nav
          aria-label="Table of contents"
          className="rounded-2xl border border-zinc-200/80 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
          <p className="mb-3 text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            目录
          </p>
          <ol className="space-y-2">
            {headings.map(renderHeadingLink)}
          </ol>
          {hasH4 ? (
            <button
              type="button"
              onClick={() => setShowH4((value) => !value)}
              className="mt-3 text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {showH4 ? '收起四级标题' : '展开四级标题'}
            </button>
          ) : null}
          <a
            href="#top"
            className="mt-3 block text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            返回顶部
          </a>
        </nav>
      </div>
    </aside>
  )
}
