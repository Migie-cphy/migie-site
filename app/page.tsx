'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faOrcid,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGraduationCap, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  EXPERIENCE,
  BLOG_POSTS,
  PUBLICATIONS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const FEATURED_PUBLICATIONS = PUBLICATIONS.filter(
  (publication) => publication.group === 'first_author'
).sort((a, b) => b.order - a.order)

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

const SOCIAL_ICONS: Record<string, IconDefinition> = {
  GitHub: faGithub,
  ORCID: faOrcid,
  Email: faEnvelope,
  Scholar: faGraduationCap,
  'Google Scholar': faGraduationCap,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  const iconKey = typeof children === 'string' ? children : undefined
  const icon = iconKey ? SOCIAL_ICONS[iconKey] : undefined
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
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            className="h-4 w-4 shrink-0"
            style={isBrandIcon ? { color: '#A6CE39' } : undefined}
          />
        ) : null}
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
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
              <img
                src="/avatar.jpg"
                alt="王美杰"
                className="relative z-10 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </div>

          <div className="flex max-w-2xl flex-1 flex-col items-start text-left">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
              王美洁
            </h1>
            <p className="mt-2 text-xl text-zinc-600 dark:text-zinc-400">
              AI4S 算法工程师（实习）
            </p>

            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 [&_p]:mb-4 [&_p:last-child]:mb-0">
              <p>
                厦门大学凝聚态物理博士生（博二在读），研究聚焦 AI for
                Science，致力于将机器学习方法应用于材料体系的建模与预测问题。目前在
                DeepPrinciple
                实习，围绕原子尺度体系的性质预测与模拟，构建数据驱动的建模与分析
                pipeline。
              </p>
              <p>
                <strong className="font-semibold text-zinc-950 dark:text-zinc-50">
                  研究方向：
                </strong>
                <br />
                - <strong>Computational Materials & Catalysis</strong>
                ：基于第一性原理计算（DFT）和机器学习，系统研究材料结构—电子结构—催化性能之间的关系，聚焦单原子/双原子催化体系（
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
                ）。
                <br />
                - <strong>AI for Science</strong>
                ：构建 OCP → DFT 的 Δ-learning 框架，结合 GNN 与 LLM
                表征，探索低高精度模拟之间的误差修正与泛化能力，逐步形成面向原子尺度体系的建模与预测
                pipeline。
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-start gap-3">
              {SOCIAL_LINKS.map((link) => (
                <MagneticSocialLink key={link.label} link={link.link}>
                  {link.label}
                </MagneticSocialLink>
              ))}
              <Link
                href="/MeijieWang_CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-sm text-zinc-50 transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
              >
                <FontAwesomeIcon icon={faNewspaper} className="h-3.5 w-3.5" />
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Selected Projects */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="flex flex-col space-y-2">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <h4 className="font-normal dark:text-zinc-100">
                  {project.name}
                </h4>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-2">
          {EXPERIENCE.map((exp) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={exp.link}
              target={exp.link.startsWith('http') ? '_blank' : undefined}
              rel={
                exp.link.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              key={exp.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {exp.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {exp.organization}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.start} - {exp.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Publications */}
      <motion.section
        id="publications"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Publications</h3>
        <div className="flex flex-col space-y-3">
          {FEATURED_PUBLICATIONS.map((pub, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <h4 className="text-sm leading-snug font-medium dark:text-zinc-100">
                {pub.title}
              </h4>
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
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            完整论文列表
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </motion.section>

      {/* Blog */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
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
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
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
            完整博客列表
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </motion.section>
    </motion.main>
  )
}
