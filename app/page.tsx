'use client'
import {
  ArrowUpRightIcon,
  FileTextIcon,
  GithubIcon,
  GraduationCapIcon,
  MailIcon,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  EDUCATION,
  EXPERIENCE,
  BLOG_POSTS,
  PUBLICATIONS,
  SOCIAL_LINKS,
} from './data'
import { HOME, HANDBOOK_HIGHLIGHTS, t } from './i18n'
import { useLanguage } from './language-provider'

const FEATURED_PUBLICATIONS = PUBLICATIONS.filter(
  (publication) => publication.featured || publication.group === 'first_author',
).sort((a, b) => {
  // Featured (non-first-author) items float to the top.
  const aFeatured = a.featured && a.group !== 'first_author'
  const bFeatured = b.featured && b.group !== 'first_author'
  if (aFeatured !== bFeatured) return aFeatured ? -1 : 1
  return b.order - a.order
})

const FEATURED_BLOG_POSTS = BLOG_POSTS.slice(0, 5)

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function OrcidIcon({ className, style }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M294.7 188.2l-45.9 0 0 153.8 47.5 0c67.6 0 83.1-51.3 83.1-76.9 0-41.6-26.5-76.9-84.7-76.9zM256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM175.2 368.8l-29.8 0 0-207.5 29.8 0 0 207.5zM160.3 98.5a19.6 19.6 0 1 1 0 39.2 19.6 19.6 0 1 1 0-39.2zM300 369l-81 0 0-207.7 80.6 0c76.7 0 110.4 54.8 110.4 103.9 0 53.3-41.7 103.9-110 103.9z" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

const SOCIAL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  GitHub: GithubIcon,
  ORCID: OrcidIcon,
  Email: MailIcon,
  Scholar: GraduationCapIcon,
  'Google Scholar': GraduationCapIcon,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  const iconKey = typeof children === 'string' ? children : undefined
  const Icon = iconKey ? SOCIAL_ICONS[iconKey] : undefined
  const isBrandIcon = iconKey === 'ORCID'

  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={iconKey}
        title={iconKey}
        className="group relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {Icon ? (
          <Icon
            className="h-4 w-4 shrink-0"
            style={isBrandIcon ? { color: '#A6CE39' } : undefined}
          />
        ) : null}
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const prefersReducedMotion = useReducedMotion()
  const { lang } = useLanguage()

  return (
    <motion.main
      className="space-y-16"
      variants={VARIANTS_CONTAINER}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate="visible"
    >
      {/* Intro */}
      <motion.section
        id="home"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-10">
          <div className="relative shrink-0">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 shadow-sm sm:h-36 sm:w-36 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(228,228,231,0.72)_45%,_rgba(212,212,216,0.95)_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(63,63,70,0.85),_rgba(39,39,42,0.92)_55%,_rgba(24,24,27,1)_100%)]" />
              <div
                className="absolute inset-0 flex items-center justify-center text-4xl font-semibold tracking-tight text-zinc-500 dark:text-zinc-400"
                id="avatar-fallback"
              >
                王
              </div>
              <Image
                src="/avatar.jpg"
                alt="王美洁"
                fill
                priority
                sizes="(max-width: 640px) 128px, 144px"
                className="relative z-10 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </div>

          <div className="flex max-w-2xl flex-1 flex-col items-start text-left">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              {lang === 'en' ? 'Meijie Wang' : '王美洁'}
            </h1>
            <p className="mt-2 text-xl text-zinc-600 dark:text-zinc-400">
              {t(HOME.subtitle, lang)}
            </p>

            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 [&_p]:mb-4 [&_p:last-child]:mb-0">
              {lang === 'en' ? (
                <>
                  <p>
                    Ph.D. student in Condensed Matter Physics at Xiamen
                    University, currently working on AI for Science research at
                    Deep Principle. My recent work focuses on the materials
                    property-prediction foundation model (
                    <a
                      href="https://doi.org/10.5281/zenodo.20521216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      MPA
                    </a>
                    ), where I develop large-scale training and evaluation
                    infrastructure, design the mid-/post-training pipelines, and
                    support distributed model training, benchmarking, and
                    iteration.
                  </p>
                  <p>
                    My background combines scientific computing and machine
                    learning for materials science. Previously, I worked on
                    structure–electronic-structure–activity relationships in
                    single-atom and dual-atom catalytic systems using DFT and ML
                    methods (
                    <a
                      href="https://doi.org/10.1016/j.apsusc.2023.158724"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      Appl. Surf. Sci. 2024
                    </a>
                    ,{' '}
                    <a
                      href="https://doi.org/10.1039/D4TA06642A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      J. Mater. Chem. A 2024
                    </a>
                    ,{' '}
                    <a
                      href="https://doi.org/10.1021/acs.jpclett.5c03896"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      J. Phys. Chem. Lett. 2026
                    </a>
                    ,{' '}
                    <a
                      href="https://doi.org/10.1021/acscatal.6c02847"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      ACS Catal. 2026
                    </a>
                    ).
                  </p>
                </>
              ) : (
                <>
                  <p>
                    厦门大学凝聚态物理博士生（博二在读），现于 Deep Principle
                    从事 AI for Science 方向研究。近期聚焦材料性质预测基础模型（
                    <a
                      href="https://doi.org/10.5281/zenodo.20521216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      MPA
                    </a>
                    ）的研发，负责训练与评测基础设施建设、Mid-training 与
                    Post-training 流程开发，以及大规模模型训练和实验评估工作。
                  </p>
                  <p>
                    此前主要基于第一性原理计算（DFT）和机器学习，系统研究材料结构—电子结构—催化性能之间的关系，聚焦单原子/双原子催化体系（
                    <a
                      href="https://doi.org/10.1016/j.apsusc.2023.158724"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      Appl. Surf. Sci. 2024
                    </a>
                    ,{' '}
                    <a
                      href="https://doi.org/10.1039/D4TA06642A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      J. Mater. Chem. A 2024
                    </a>
                    ,{' '}
                    <a
                      href="https://doi.org/10.1021/acs.jpclett.5c03896"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      J. Phys. Chem. Lett. 2026
                    </a>
                    ,{' '}
                    <a
                      href="https://doi.org/10.1021/acscatal.6c02847"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                    >
                      ACS Catal. 2026
                    </a>
                    ）。
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-start gap-3">
              {SOCIAL_LINKS.map((link) => (
                <MagneticSocialLink key={link.label} link={link.link}>
                  {link.label}
                </MagneticSocialLink>
              ))}
              <Link
                href={lang === 'en' ? '/cv_en.pdf' : '/cv_zh.pdf'}
                className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-sm text-zinc-50 transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
              >
                <FileTextIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {t(HOME.downloadCv, lang)}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">{t(HOME.education, lang)}</h2>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((edu) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              key={edu.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h3 className="inline-flex items-center gap-1 font-normal dark:text-zinc-100">
                      {t(edu.organization, lang)}
                      <ArrowUpRightIcon
                        className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {t(edu.degree, lang)}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-600 dark:text-zinc-400">
                    {t(edu.start, lang)} - {t(edu.end, lang)}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">{t(HOME.experience, lang)}</h2>
        <div className="flex flex-col space-y-2">
          {EXPERIENCE.map((exp) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={exp.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between gap-3">
                  <div>
                    <h3 className="font-normal dark:text-zinc-100">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {t(exp.organization, lang)}
                      </a>
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {t(exp.title, lang)}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-600 dark:text-zinc-400">
                    {t(exp.start, lang)} - {t(exp.end, lang)}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {exp.bullets.map((item, i) => (
                    <li key={i}>{t(item, lang)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Publications */}
      <motion.section
        id="publications"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">
          {t(HOME.selectedPublications, lang)}
        </h2>
        <div className="flex flex-col space-y-3">
          {FEATURED_PUBLICATIONS.map((pub, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <h3 className="text-sm leading-snug font-medium dark:text-zinc-100">
                {pub.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {pub.authors.replace(/\*\*/g, '')}
              </p>
              <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                <span className="italic">{pub.journal}</span>
                {pub.volume && `, ${pub.volume}`}
                {pub.pages && `, ${pub.pages}`} ({pub.year})
                {pub.doi && (
                  <>
                    {' '}
                    ·{' '}
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      DOI
                    </a>
                  </>
                )}
                {pub.link && (
                  <>
                    {' '}
                    ·{' '}
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      {lang === 'en' ? 'Report' : '技术报告'}
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            {t(HOME.allPublications, lang)}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.section>

      {/* Handbook */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="mb-4 space-y-2">
          <h2 className="text-lg font-medium">{t(HOME.handbook, lang)}</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t(HOME.handbookDesc, lang)}
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {HANDBOOK_HIGHLIGHTS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-zinc-200/80 bg-zinc-50 px-4 py-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
            >
              <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                {t(item.title, lang)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t(item.description, lang)}
              </p>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Blog */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-3 text-lg font-medium">{t(HOME.blog, lang)}</h2>
        <div className="flex flex-col space-y-2">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {FEATURED_BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="rounded-xl border border-zinc-200 px-4 py-3 dark:border-zinc-800"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h3 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
        <div className="mt-5 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            {t(HOME.allPosts, lang)}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.section>
    </motion.main>
  )
}
