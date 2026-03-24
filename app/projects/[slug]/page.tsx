import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS } from '@/app/data'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((item) => item.slug === slug)

  if (!project) {
    return { title: '项目未找到' }
  }

  return {
    title: `${project.name} | 项目详情`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = PROJECTS.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="space-y-8 pb-8">
      <section className="space-y-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">Project</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {project.name}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {project.start} - {project.end}
        </p>
        <p className="max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </section>

      <section className="space-y-4">
        <article className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
            问题
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.problem}
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
            方法
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.method}
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
            我的贡献
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
            结果
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.result}
          </p>
        </article>
      </section>

      {project.researchPath ? (
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            研究路径
          </h2>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.researchPath.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {project.ai4sHighlights ? (
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            AI4S 重点
          </h2>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.ai4sHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {project.publicationItems ? (
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            论文成果
          </h2>
          <div className="space-y-3">
            {project.publicationItems.map((paper) => (
              <article
                key={`${paper.title}-${paper.year}`}
                className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                    {paper.title}
                  </h3>
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${
                      paper.status === 'Under Review'
                        ? 'border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300'
                        : 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300'
                    }`}
                  >
                    {paper.status}
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                  {paper.venue} ({paper.year})
                </p>
                <p className="mt-2 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                  摘要 / 引言要点
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {paper.takeaway}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {paper.doi ? (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      DOI
                    </a>
                  ) : null}
                  <a
                    href={paper.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          返回主页
        </Link>
        {project.relatedLinks?.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {item.label}
          </Link>
        ))}
      </section>
    </main>
  )
}
