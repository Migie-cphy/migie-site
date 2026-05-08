import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '../data'

export const metadata: Metadata = {
  title: '博客',
  description: '自由文章、工具记录与单点经验归档。',
}

export default function BlogIndexPage() {
  return (
    <main className="space-y-8 pb-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          博客
        </h1>
      </section>

      <section className="space-y-3">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.uid}
            href={post.link}
            className="block rounded-2xl border border-zinc-200/80 bg-zinc-50 px-5 py-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                {post.category}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
