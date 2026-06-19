'use client'
import { PUBLICATIONS } from '../data'
import { PUB, t } from '../i18n'
import { useLanguage } from '../language-provider'

const firstAuthorPublications = PUBLICATIONS.filter(
  (publication) => publication.group === 'first_author',
).sort((a, b) => b.order - a.order)

const coAuthorPublications = PUBLICATIONS.filter(
  (publication) => publication.group === 'co_author',
).sort((a, b) => b.order - a.order)

function PublicationCard({
  title,
  authors,
  journal,
  year,
  volume,
  pages,
  doi,
  pdf,
  link,
  reportLabel,
}: (typeof PUBLICATIONS)[number] & { reportLabel: string }) {
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
        {pdf ? (
          <>
            {' '}
            ·{' '}
            <a
              href={pdf.startsWith('/') ? pdf : `/paper/${pdf}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
            >
              PDF
            </a>
          </>
        ) : null}
        {link ? (
          <>
            {' '}
            ·{' '}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
            >
              {reportLabel}
            </a>
          </>
        ) : null}
      </p>
    </article>
  )
}

export function PublicationsContent() {
  const { lang } = useLanguage()
  const reportLabel = t(PUB.report, lang)

  return (
    <main className="space-y-10 pb-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {t(PUB.title, lang)}
        </h1>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            {t(PUB.firstAuthor, lang)}
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-500">
            {firstAuthorPublications.length} {t(PUB.countSuffix, lang)}
          </span>
        </div>
        <div className="space-y-3">
          {firstAuthorPublications.map((publication, index) => (
            <PublicationCard
              key={`${publication.title}-${index}`}
              {...publication}
              reportLabel={reportLabel}
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            {t(PUB.coAuthor, lang)}
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-500">
            {coAuthorPublications.length} {t(PUB.countSuffix, lang)}
          </span>
        </div>
        {coAuthorPublications.length > 0 ? (
          <div className="space-y-3">
            {coAuthorPublications.map((publication, index) => (
              <PublicationCard
                key={`${publication.title}-${index}`}
                {...publication}
                reportLabel={reportLabel}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
            {t(PUB.empty, lang)}
          </p>
        )}
      </section>
    </main>
  )
}
