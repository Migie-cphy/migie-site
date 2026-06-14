import type { Lang } from './language-provider'

type Bilingual = { en: string; zh: string }

export const NAV: { key: string; label: Bilingual }[] = [
  { key: 'home', label: { en: 'Home', zh: '主页' } },
  { key: 'publications', label: { en: 'Publications', zh: '论文' } },
  { key: 'handbook', label: { en: 'Handbook', zh: '手册' } },
  { key: 'blog', label: { en: 'Blog', zh: '博客' } },
]

export const HOME: Record<string, Bilingual> = {
  subtitle: {
    en: 'AI4S Algorithm Intern, Deep Principle',
    zh: 'Deep Principle | AI4S 算法实习生',
  },
  education: { en: 'Education', zh: '教育经历' },
  experience: { en: 'Experience', zh: '工作经历' },
  selectedPublications: { en: 'Selected Publications', zh: '代表论文' },
  handbook: { en: 'Handbook', zh: '手册' },
  handbookDesc: {
    en: 'A structured handbook for new group members, covering the most-used parts of Linux, research tooling, and DFT workflows.',
    zh: '面向组内新人的结构化手册，整理 Linux、科研工具和 DFT 工作流中最常用的内容。',
  },
  blog: { en: 'Blog', zh: '博客' },
  allPublications: { en: 'All publications', zh: '完整论文列表' },
  allPosts: { en: 'All posts', zh: '完整博客列表' },
  downloadCv: { en: 'Download CV', zh: '下载简历' },
}

export const HANDBOOK_HIGHLIGHTS: {
  title: Bilingual
  description: Bilingual
  href: string
}[] = [
  {
    title: { en: 'Linux & Terminal', zh: 'Linux 和终端' },
    description: {
      en: 'Command-line basics, file operations, logs, and working on remote servers.',
      zh: '命令行基础、文件操作、日志查看与远程服务器使用。',
    },
    href: '/handbook/01-linux-terminal/01-command-line',
  },
  {
    title: { en: 'Research Tools', zh: '科研工具' },
    description: {
      en: 'Scientific writing, figures, and the software used day to day.',
      zh: '科研写作、绘图，以及日常会反复用到的软件工具。',
    },
    href: '/handbook/02-research-tools/01-tools',
  },
  {
    title: { en: 'DFT & Electrochemistry', zh: 'DFT 与电化学计算' },
    description: {
      en: 'DFT basics, structure visualization, and constant-potential methods.',
      zh: 'DFT 基础、结构可视化工具，以及恒电势相关方法。',
    },
    href: '/handbook/03-dft/01-dft-basics',
  },
]

export function t(value: Bilingual, lang: Lang) {
  return value[lang]
}
