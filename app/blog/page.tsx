import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '../data'

export const metadata: Metadata = {
  title: '博客',
  description: '王美洁的完整博客列表。',
}

export default function BlogIndexPage() {
  return (
    <main className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">Blog</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          博客
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          这里汇总我在计算材料、AI4S、科研工具链与开发环境方面的完整博客文章。
        </p>
      </section>

      <section className="space-y-3">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.uid}
            href={post.link}
            className="block rounded-2xl border border-zinc-200/80 bg-white px-5 py-4 transition-colors duration-200 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
              {post.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  )
}
