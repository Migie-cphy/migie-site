import type { Metadata } from 'next'
import Link from 'next/link'
import { PUBLICATIONS } from '../data'

export const metadata: Metadata = {
  title: '论文',
  description: '王美洁的学术论文列表，包括一作与合作文章。',
}

const firstAuthorPublications = PUBLICATIONS.filter(
  (publication) => publication.group === 'first_author'
).sort((a, b) => b.order - a.order)

const coAuthorPublications = PUBLICATIONS.filter(
  (publication) => publication.group === 'co_author'
).sort((a, b) => b.order - a.order)

function PublicationCard({
  title,
  authors,
  journal,
  year,
  volume,
  pages,
  doi,
}: (typeof PUBLICATIONS)[number]) {
  return (
    <article className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-base leading-snug font-medium text-zinc-950 dark:text-zinc-50">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {authors.replace(/\*\*/g, '')}
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
        <span className="italic">{journal}</span>
        {volume ? `, ${volume}` : ''}
        {pages ? `, ${pages}` : ''} ({year})
        {doi ? (
          <>
            {' '}
            ·{' '}
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
            >
              DOI
            </a>
          </>
        ) : null}
      </p>
    </article>
  )
}

export default function PublicationsPage() {
  return (
    <main className="space-y-10 pb-8">
      <section className="space-y-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">Publications</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          论文
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          这里汇总我的一作与合作文章。论文信息将随着投稿、接收与发表状态持续更新。
        </p>
        <Link
          href="/"
          className="inline-flex text-sm text-zinc-600 underline underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          返回主页
        </Link>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            一作文章
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-500">
            {firstAuthorPublications.length} 篇
          </span>
        </div>
        <div className="space-y-3">
          {firstAuthorPublications.map((publication, index) => (
            <PublicationCard key={`${publication.title}-${index}`} {...publication} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            合作文章
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-500">
            {coAuthorPublications.length} 篇
          </span>
        </div>
        {coAuthorPublications.length > 0 ? (
          <div className="space-y-3">
            {coAuthorPublications.map((publication, index) => (
              <PublicationCard
                key={`${publication.title}-${index}`}
                {...publication}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
            目前仓库数据里还没有录入非一作文章。后续只需在
            <span className="mx-1 font-mono text-xs">app/data.ts</span>
            中把对应论文标记为
            <span className="mx-1 font-mono text-xs">'co_author'</span>
            ，这里会自动显示。
          </p>
        )}
      </section>
    </main>
  )
}
