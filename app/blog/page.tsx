import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'
import { BLOG_POSTS } from '../data'

export const metadata: Metadata = {
  title: '博客归档',
  description: '自由文章、工具记录与单点经验归档。',
}

const BLOG_GROUPS = [
  { title: 'AI4S', description: '研究问题、材料建模与科学机器学习。' },
  { title: '计算材料', description: 'DFT、催化体系与材料计算方法。' },
  { title: '科研工程', description: '自动化、算力环境与可复现工作流。' },
  { title: '工具与环境', description: '开发环境、命令行工具与日常配置。' },
] as const

function SectionDirectory({
  title,
  description,
  count,
  defaultOpen = false,
  children,
}: {
  title: string
  description: string
  count: number
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-2xl border border-zinc-200/80 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 marker:content-none">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            {title}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 pt-0.5">
          <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
            {count} 篇
          </span>
          <ChevronRightIcon className="h-4 w-4 text-zinc-500 transition-transform duration-200 group-open:rotate-90 dark:text-zinc-400" />
        </div>
      </summary>
      <div className="space-y-3 border-t border-zinc-200/80 px-5 py-4 dark:border-zinc-800">
        {children}
      </div>
    </details>
  )
}

export default function BlogIndexPage() {
  return (
    <main className="space-y-8 pb-8">
      <section className="space-y-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">Archive</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          博客归档
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          这里保留自由文章、工具记录和单点经验。体系化学习路径已经迁到手册。
        </p>
        <Link
          href="/handbook"
          className="block max-w-3xl rounded-2xl border border-zinc-200/80 bg-zinc-50/80 px-5 py-4 text-sm leading-relaxed text-zinc-600 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-zinc-700"
        >
          <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
            手册
          </h2>
          <p className="mt-1">
            如果你想按阶段系统学习
            Linux、DFT、机器学习和科研工作流，可以从这里进入。
          </p>
        </Link>
      </section>

      <section className="space-y-3">
        {BLOG_GROUPS.map((group) => {
          const posts = BLOG_POSTS.filter(
            (post) => post.category === group.title,
          )

          if (!posts.length) {
            return null
          }

          return (
            <SectionDirectory
              key={group.title}
              title={group.title}
              description={group.description}
              count={posts.length}
              defaultOpen={false}
            >
              {posts.map((post) => (
                <Link
                  key={post.uid}
                  href={post.link}
                  className="block rounded-xl border border-zinc-200/80 bg-zinc-50 px-4 py-3 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
                >
                  <h3 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {post.description}
                  </p>
                </Link>
              ))}
            </SectionDirectory>
          )
        })}
      </section>
    </main>
  )
}
