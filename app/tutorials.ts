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
  {
    title: 'Phase 4 · DFT 计算入门（吴泽鹏）',
    description:
      '厦门大学计算凝聚态物理研究组吴泽鹏编写的 VASP 入门手册（第三版），经作者同意收录。',
    topics: [
      {
        slug: '04-dft-intro/01-preface',
        title: '前言',
        summary: '手册的定位、需要的基础，以及怎样使用这份手册。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/02-theory',
        title: '1 DFT 计算的理论框架',
        summary: 'Kohn-Sham 方程、SCF 迭代求解，以及从 DFT 到 TD-DFT。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/03-vasp-io',
        title: '2 VASP 计算的输入输出文件',
        summary: '四个输入文件、金刚石 Si 静态自洽计算的完整流程与输出文件。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/04-convergence',
        title: '3.1 截断能和 k-mesh 收敛性测试',
        summary: 'ENCUT 与 k 点的收敛性测试。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/05-vaspkit',
        title: '3.2 用 vaspkit 生成输入文件',
        summary: '借助 vaspkit 生成 KPOINTS、POTCAR 等输入文件。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/06-relax',
        title: '3.3 结构优化',
        summary: '结构优化参数、初始构型依赖、限制优化与不收敛的处理。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/07-charge-bonding',
        title: '3.4 电荷密度与成键分析',
        summary: '电荷密度、差分电荷、Bader 电荷、ELF 与 COHP。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/08-band-dos',
        title: '3.5 能带结构和电子态密度',
        summary: '能带、费米面、态密度、投影能带与投影态密度的计算和分析。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/09-magnetism',
        title: '3.6 磁性体系',
        summary: '磁基态的确定、铁磁/反铁磁能带、初始磁矩与高低自旋。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/10-phonon',
        title: '3.7 声子谱与声子态密度',
        summary: '有限位移法、DFPT、振动自由能、振动可视化与消除虚频。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/11-aimd',
        title: '3.8 从头算分子动力学',
        summary: 'NVT/NPT 系综 AIMD、热稳定性判断与 on-the-fly 机器学习力场。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/12-hybrid-gw',
        title: '3.9 杂化泛函与 GW 方法',
        summary: '杂化泛函与 GW 计算的设置与适用场景。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/13-dft-u',
        title: '3.10 强关联效应（DFT+U）',
        summary: 'DFT+U 的设置与 U 值选取。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/14-vdw',
        title: '3.11 范德瓦尔斯相互作用',
        summary: 'vdW 修正方法的选择与设置。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/15-soc',
        title: '3.12 自旋轨道耦合',
        summary: 'SOC 计算的设置与注意事项。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/16-faq',
        title: '3.13 DFT 计算常见问题',
        summary: '不同任务的输入文件、泛函设置、常见报错与快捷命令。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
      {
        slug: '04-dft-intro/17-references',
        title: '4 参考资料与总结',
        summary: '进一步学习的网站、教程，以及手册总结。',
        phase: 'Phase 4 · DFT 计算入门（吴泽鹏）',
      },
    ],
  },
]

export const TUTORIAL_TOPICS = TUTORIAL_PHASES.flatMap((phase) => phase.topics)
