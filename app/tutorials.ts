export type TutorialLink = {
  title: string
  href: string
}

export type TutorialTopic = {
  slug: string
  title: string
  summary: string
  phase: string
  relatedPosts?: TutorialLink[]
}

export const TUTORIAL_PHASES: Array<{
  title: string
  description: string
  topics: TutorialTopic[]
}> = [
  {
    title: 'Phase 1 · Linux 与终端',
    description: '系统整理命令行、文件、权限、日志、批处理和终端工作流。',
    topics: [
      {
        slug: '01-linux-terminal/01-command-line',
        title: '1.1 命令行',
        summary:
          '作为 Linux 教程的总入口，先知道 CLI 是什么、为什么科研里离不开它。',
        phase: 'Phase 1 · Linux 与终端',
        relatedPosts: [
          { title: 'Linux 服务器配置指南', href: '/blog/linux' },
          { title: 'Shell 常用命令手册', href: '/blog/shell' },
        ],
      },
      {
        slug: '01-linux-terminal/02-server-connection',
        title: '1.2 服务器连接',
        summary: '聚焦 SSH、别名配置、密钥登录以及常见连接工具。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/03-file-directory-management',
        title: '1.3 文件与目录管理',
        summary: '整理路径概念、常见文件命令、Tab 补全和删除风险。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/04-file-viewing-logs',
        title: '1.4 查看文件、搜索与日志',
        summary:
          '围绕 cat、less、head、tail、grep，以及最常用的重定向和管道来组织日志查看。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/05-file-transfer',
        title: '1.5 文件传输',
        summary: '整理 scp、rsync、rz/sz、图形化工具与常见传输脚本。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/06-permissions',
        title: '1.6 权限',
        summary: '理解 Linux 权限、chmod 和数字权限的最小工作原理。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/07-environment-variables',
        title: '1.7 环境变量',
        summary: '理解 PATH、export、shell 配置文件和最常见的环境变量问题。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/08-process-background-long-running-tasks',
        title: '1.8 进程、后台与长任务',
        summary:
          '把 ps、top、kill、jobs 和 nohup、screen、tmux 放到一个完整问题里来理解。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/09-compression-and-tar',
        title: '1.9 压缩、解压与 tar',
        summary: '先掌握 tar 的基本压缩解压，再知道 zip 什么时候更合适。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/10-glob-regex-shell-params',
        title: '1.10 通配符、正则和脚本参数',
        summary:
          '先建立通配符、最常见正则表达式和 $1 $2 这类脚本参数的基本直觉。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/11-awk-sed',
        title: '1.11 文本处理：awk 和 sed',
        summary: '先知道 awk 擅长取列，sed 擅长替换文本。',
        phase: 'Phase 1 · Linux 与终端',
      },
      {
        slug: '01-linux-terminal/12-shell-for-loops',
        title: '1.12 批处理脚本：for',
        summary: '开始建立“重复劳动通常可以写成循环”的感觉。',
        phase: 'Phase 1 · Linux 与终端',
      },
    ],
  },
  {
    title: 'Phase 2 · 科研工具',
    description: '围绕科研中常用的软件工具、计算环境和配套工作流组织内容。',
    topics: [
      {
        slug: '02-research-tools/01-tools',
        title: '2.1 常用工具',
        summary: '整理科研里常会用到的编辑器、下载工具、远程工具和效率软件。',
        phase: 'Phase 2 · 科研工具',
        relatedPosts: [
          { title: 'macOS 开发环境搭建', href: '/blog/macos' },
          { title: 'Oh My Zsh 无 root 安装', href: '/blog/ohmyzsh' },
        ],
      },
      {
        slug: '02-research-tools/02-scientific-illustration',
        title: '2.2 科研绘图与 matplotlib',
        summary: '聚焦科研里最常见的折线图、散点图、多面板图和出图习惯。',
        phase: 'Phase 2 · 科研工具',
        relatedPosts: [
          { title: 'Matplotlib 科研绘图', href: '/blog/matplotlib' },
        ],
      },
      {
        slug: '02-research-tools/03-scientific-writting',
        title: '2.3 科研写作与 LaTeX',
        summary: '先建立论文写作、公式排版、文献管理和协作修改的最小直觉。',
        phase: 'Phase 2 · 科研工具',
      },
    ],
  },
  {
    title: 'Phase 3 · DFT 与电化学计算',
    description: '把 DFT 基础、前后处理和恒电势相关内容放在同一章里统一组织。',
    topics: [
      {
        slug: '03-dft/01-dft-basics',
        title: '3.1 DFT 基础',
        summary: '从 DFT 的最小理论直觉、SCF 迭代到一个最小 VASP 例子。',
        phase: 'Phase 3 · DFT 与电化学计算',
      },
      {
        slug: '03-dft/02-structure-visualization-tools',
        title: '3.2 常用结构处理与可视化工具',
        summary:
          '简要认识 VASPkit、VESTA、OVITO、ASE、pymatgen 和在线结构编辑工具。',
        phase: 'Phase 3 · DFT 与电化学计算',
        relatedPosts: [
          { title: 'VESTA 命令行批处理', href: '/blog/vesta-cmd' },
          { title: 'VESTA 原子配色方案', href: '/blog/vesta-color' },
          { title: 'Materials Project API 数据抓取', href: '/blog/mp-api' },
        ],
      },
      {
        slug: '03-dft/03-constant-potential-principles',
        title: '3.3 恒电势计算原理',
        summary: '整理恒电势计算的基本概念、适用场景和常见误区。',
        phase: 'Phase 3 · DFT 与电化学计算',
      },
      {
        slug: '03-dft/04-vaspsol-plus-plus',
        title: '3.4 Vaspsol++',
        summary: '整理 Vaspsol++ 的使用场景、输入参数和恒电势计算工作流。',
        phase: 'Phase 3 · DFT 与电化学计算',
      },
      {
        slug: '03-dft/05-jdftx',
        title: '3.5 JDFTx',
        summary: '整理 JDFTx 在电化学界面、隐式溶剂和恒电势计算中的基本用法。',
        phase: 'Phase 3 · DFT 与电化学计算',
      },
    ],
  },
]

export const TUTORIAL_TOPICS = TUTORIAL_PHASES.flatMap((phase) => phase.topics)
