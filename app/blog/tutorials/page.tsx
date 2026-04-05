import type { Metadata } from 'next'
import Link from 'next/link'
import { TUTORIAL_PHASES } from '@/app/tutorials'

export const metadata: Metadata = {
  title: '教程目录',
  description: '面向组内师弟师妹的教程路线图与文章目录。',
}

export default function TutorialIndexPage() {
  return (
    <main className="space-y-10 pb-8">
      <section className="space-y-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">Tutorials</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          教程目录
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          这里按学习路径整理组内教程。旧博客内容继续保留，新教程优先按专题目录归档，后续可以在对应主题下持续扩写。
        </p>
      </section>

      {TUTORIAL_PHASES.map((phase) => (
        <section key={phase.title} className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
              {phase.title}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {phase.description}
            </p>
          </div>

          <div className="space-y-3">
            {phase.topics.map((topic) => (
              <article
                key={topic.slug}
                className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
                      <Link
                        href={`/blog/tutorials/${topic.slug}`}
                        className="underline-offset-4 hover:underline"
                      >
                        {topic.title}
                      </Link>
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {topic.summary}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                    目录已建
                  </span>
                </div>

                {topic.relatedPosts?.length ? (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-500">
                      可整合的已有文章
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {topic.relatedPosts.map((post) => (
                        <Link
                          key={post.href}
                          href={post.href}
                          className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                        >
                          {post.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
