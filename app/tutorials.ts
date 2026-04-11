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
    title: 'Phase 1 · Linux 与命令行',
    description:
      '先让新人具备独立使用服务器、处理文件、看日志和批量操作的能力。',
    topics: [
      {
        slug: '01_01-linux-command-line',
        title: '1.1 命令行',
        summary: '作为 Linux 教程的前言和总入口，按任务场景组织后续文档。',
        phase: 'Phase 1 · Linux 与命令行',
        relatedPosts: [
          { title: 'Linux 服务器配置指南', href: '/blog/linux' },
          { title: 'Shell 常用命令手册', href: '/blog/shell' },
          { title: '命令行日常使用', href: '/blog/command-line' },
        ],
      },
      {
        slug: '01_02-server-connection',
        title: '1.2 服务器连接',
        summary: '聚焦 SSH、别名配置、密钥登录以及常见连接工具。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_03-file-directory-management',
        title: '1.3 文件与目录管理',
        summary: '整理路径概念、常见文件命令、Tab 补全和删除风险。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_04-file-viewing-logs',
        title: '1.4 查看文件、搜索与日志',
        summary: '围绕 cat、less、head、tail、grep 和最基础的日志排查习惯。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_05-file-transfer',
        title: '1.5 文件传输',
        summary: '整理 scp、rsync、rz/sz、图形化工具与常见传输脚本。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_06-permissions',
        title: '1.6 权限',
        summary: '理解 Linux 权限、chmod 和数字权限的最小工作原理。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_07-environment-variables',
        title: '1.7 环境变量',
        summary: '理解 PATH、export、shell 配置文件和最常见的环境变量问题。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_08-process-task-management',
        title: '1.8 进程和任务管理',
        summary: '认识 ps、top、kill、jobs 各自在解决什么问题。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_09-long-running-tasks',
        title: '1.9 退出服务器后，任务怎么继续跑',
        summary: '理解 screen、tmux、nohup 和队列系统各自适合什么场景。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_10-redirection-pipes',
        title: '1.10 重定向和管道',
        summary: '理解 >、>>、| 这三个符号在命令行里的基本作用。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_11-tar-basics',
        title: '1.11 压缩、解压与 tar',
        summary: '先掌握 tar 的基本压缩解压，再知道 pigz 什么时候值得用。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_12-find-xargs-glob',
        title: '1.12 通配符、正则和脚本参数',
        summary:
          '先建立通配符、最常见正则表达式和 $1 $2 这类脚本参数的基本直觉。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_13-awk-sed',
        title: '1.13 文本处理：awk 和 sed',
        summary: '先知道 awk 擅长取列，sed 擅长替换文本。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_14-shell-for-loops',
        title: '1.14 批处理脚本：for',
        summary: '开始建立“重复劳动通常可以写成循环”的感觉。',
        phase: 'Phase 1 · Linux 与命令行',
      },
      {
        slug: '01_15-terminal-setup',
        title: '1.15 终端环境优化',
        summary: '用 alias、.zshrc、oh-my-zsh 和 fzf 提高日常终端效率。',
        phase: 'Phase 1 · Linux 与命令行',
      },
    ],
  },
  {
    title: 'Phase 2 · Python 与科研脚本',
    description: '聚焦科研里真正会用到的 Python、数据处理和绘图能力。',
    topics: [
      {
        slug: '02_01-python-basics',
        title: '2.1 科研里的 Python：先会这几点就够了',
        summary: '围绕科研脚本、数据处理、绘图和 Notebook 的最小能力集。',
        phase: 'Phase 2 · Python 与科研脚本',
        relatedPosts: [
          { title: 'Python 科学计算加速', href: '/blog/numpy-accelerate' },
          { title: 'Matplotlib 科研绘图', href: '/blog/matplotlib' },
        ],
      },
    ],
  },
  {
    title: 'Phase 3 · 科研写作与协作',
    description: '围绕 Git、LaTeX、环境管理和工程协作建立最小工作流。',
    topics: [
      {
        slug: '03_01-dev-collab-tools',
        title: '3.1 开发与协作工具',
        summary: '包含 Git、环境管理、编译基础、Docker 和 LaTeX。',
        phase: 'Phase 3 · 科研写作与协作',
        relatedPosts: [
          { title: 'Conda 环境管理', href: '/blog/conda' },
          { title: 'macOS 开发环境搭建', href: '/blog/macos' },
          { title: 'Oh My Zsh 无 root 安装', href: '/blog/ohmyzsh' },
        ],
      },
    ],
  },
  {
    title: 'Phase 4 · DFT 基础',
    description: '先建立 DFT 计算本身的基础概念、输入设置和任务管理直觉。',
    topics: [
      {
        slug: '04_01-dft-basics',
        title: '4.1 DFT 基础',
        summary: '从结构优化、静态计算到 k 点和截断能收敛测试。',
        phase: 'Phase 4 · DFT 基础',
      },
      {
        slug: '04_02-job-management',
        title: '4.2 计算任务管理',
        summary: '聚焦 SLURM、批量投递、失败任务重启和结果目录规范。',
        phase: 'Phase 4 · DFT 基础',
        relatedPosts: [
          { title: 'Linux 科学计算服务器搭建', href: '/blog/root' },
          { title: '并行计算工具集', href: '/blog/parallel' },
          { title: '远程 Jupyter Notebook', href: '/blog/remote-jupyter' },
        ],
      },
    ],
  },
  {
    title: 'Phase 5 · DFT 前后处理与常用工具',
    description: '围绕结构构建、前后处理、可视化和专用工具组织 DFT 工作流。',
    topics: [
      {
        slug: '05_01-dft-pre-post',
        title: '5.1 DFT 前后处理',
        summary: '整理结构生成、吸附模型、DOS/PDOS、Bader 和可视化流程。',
        phase: 'Phase 5 · DFT 前后处理与常用工具',
        relatedPosts: [
          { title: 'ASE 原子模拟环境', href: '/blog/ase' },
          { title: 'VESTA 命令行批处理', href: '/blog/vesta-cmd' },
          { title: 'VESTA 原子配色方案', href: '/blog/vesta-color' },
          { title: 'Materials Project API 数据抓取', href: '/blog/mp-api' },
        ],
      },
      {
        slug: '05_02-constant-potential-principles',
        title: '5.2 恒电势计算原理',
        summary: '整理恒电势计算的基本概念、适用场景和常见误区。',
        phase: 'Phase 5 · DFT 前后处理与常用工具',
        relatedPosts: [{ title: 'JDFTx 电化学计算指南', href: '/blog/jdftx' }],
      },
      {
        slug: '05_03-vaspsol-plus-plus',
        title: '5.3 Vaspsol++',
        summary: '整理 Vaspsol++ 的使用场景、输入参数和恒电势计算工作流。',
        phase: 'Phase 5 · DFT 前后处理与常用工具',
      },
      {
        slug: '05_04-jdftx',
        title: '5.4 JDFTx',
        summary: '整理 JDFTx 在电化学界面、隐式溶剂和恒电势计算中的基本用法。',
        phase: 'Phase 5 · DFT 前后处理与常用工具',
        relatedPosts: [{ title: 'JDFTx 电化学计算指南', href: '/blog/jdftx' }],
      },
    ],
  },
  {
    title: 'Phase 6 · 机器学习与 AI4S',
    description: '从经典机器学习过渡到可解释模型、深度学习和 AI4S 专题。',
    topics: [
      {
        slug: '06_01-classical-ml',
        title: '6.1 传统机器学习',
        summary: '面向回归、分类、特征工程、交叉验证与误差分析。',
        phase: 'Phase 6 · 机器学习与 AI4S',
      },
      {
        slug: '06_02-interpretable-ml',
        title: '6.2 可解释机器学习',
        summary: '围绕 SISSO、特征重要性与描述符构建思路。',
        phase: 'Phase 6 · 机器学习与 AI4S',
      },
      {
        slug: '06_03-deep-learning',
        title: '6.3 深度学习',
        summary: '以 PyTorch 为主线，覆盖训练循环、调参与 GPU 基础。',
        phase: 'Phase 6 · 机器学习与 AI4S',
      },
      {
        slug: '06_04-ai4s-modeling',
        title: '6.4 AI4S 建模专题',
        summary: '串起材料数据、图神经网络、Δ-learning 和预训练势模型。',
        phase: 'Phase 6 · 机器学习与 AI4S',
        relatedPosts: [{ title: 'CHGNet 结构预优化', href: '/blog/chgnet' }],
      },
      {
        slug: '06_05-llm-for-research',
        title: '6.5 LLM 与科研应用',
        summary: '覆盖 prompt、RAG、fine-tune 和科研场景中的边界判断。',
        phase: 'Phase 6 · 机器学习与 AI4S',
      },
    ],
  },
]

export const TUTORIAL_TOPICS = TUTORIAL_PHASES.flatMap((phase) => phase.topics)
