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
          { title: '命令行日常使用', href: '/blog/command-line' },
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
    title: 'Phase 2 · 服务器、集群与任务管理',
    description: '围绕队列系统、集群边界和实际计算任务管理组织内容。',
    topics: [
      {
        slug: '02-servers-clusters/01-cluster-basics',
        title: '2.1 集群基础与使用边界',
        summary:
          '先知道 login node、compute node、home/work/scratch 各自是干什么的。',
        phase: 'Phase 2 · 服务器、集群与任务管理',
      },
      {
        slug: '02-servers-clusters/02-job-management',
        title: '2.2 计算任务管理',
        summary: '聚焦 SLURM、批量投递、失败任务重启和结果目录规范。',
        phase: 'Phase 2 · 服务器、集群与任务管理',
        relatedPosts: [
          { title: 'Linux 科学计算服务器搭建', href: '/blog/root' },
          { title: '并行计算工具集', href: '/blog/parallel' },
          { title: '远程 Jupyter Notebook', href: '/blog/remote-jupyter' },
        ],
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
        slug: '03-dft/02-dft-pre-post',
        title: '3.2 DFT 前后处理',
        summary: '整理结构生成、吸附模型、DOS/PDOS、Bader 和可视化流程。',
        phase: 'Phase 3 · DFT 与电化学计算',
        relatedPosts: [
          { title: 'ASE 原子模拟环境', href: '/blog/ase' },
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
        relatedPosts: [{ title: 'JDFTx 电化学计算指南', href: '/blog/jdftx' }],
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
        relatedPosts: [{ title: 'JDFTx 电化学计算指南', href: '/blog/jdftx' }],
      },
    ],
  },
  {
    title: 'Phase 4 · Python 与科研脚本',
    description: '聚焦科研里真正会用到的 Python、数据处理和绘图能力。',
    topics: [
      {
        slug: '04-python-scripts/01-python-basics',
        title: '4.1 科研里的 Python：先会这几点就够了',
        summary: '围绕科研脚本、数据处理、绘图和 Notebook 的最小能力集。',
        phase: 'Phase 4 · Python 与科研脚本',
        relatedPosts: [
          { title: 'Python 科学计算加速', href: '/blog/numpy-accelerate' },
          { title: 'Matplotlib 科研绘图', href: '/blog/matplotlib' },
        ],
      },
    ],
  },
  {
    title: 'Phase 5 · 开发、环境与协作',
    description: '围绕 Git、环境管理、LaTeX 和工程协作建立最小工作流。',
    topics: [
      {
        slug: '05-dev-collab/01-dev-collab-tools',
        title: '5.1 开发与协作工具',
        summary: '包含 Git、环境管理、编译基础、Docker 和 LaTeX。',
        phase: 'Phase 5 · 开发、环境与协作',
        relatedPosts: [
          { title: 'Conda 环境管理', href: '/blog/conda' },
          { title: 'macOS 开发环境搭建', href: '/blog/macos' },
          { title: 'Oh My Zsh 无 root 安装', href: '/blog/ohmyzsh' },
        ],
      },
      {
        slug: '05-dev-collab/02-environment-management',
        title: '5.2 环境管理',
        summary: '先理解 module、conda、venv 在服务器和本地分别解决什么问题。',
        phase: 'Phase 5 · 开发、环境与协作',
      },
    ],
  },
  {
    title: 'Phase 6 · 机器学习与 AI4S',
    description: '从经典机器学习过渡到可解释模型、深度学习和 AI4S 专题。',
    topics: [
      {
        slug: '06-ml-ai4s/01-classical-ml',
        title: '6.1 传统机器学习',
        summary: '面向回归、分类、特征工程、交叉验证与误差分析。',
        phase: 'Phase 6 · 机器学习与 AI4S',
      },
      {
        slug: '06-ml-ai4s/02-interpretable-ml',
        title: '6.2 可解释机器学习',
        summary: '围绕 SISSO、特征重要性与描述符构建思路。',
        phase: 'Phase 6 · 机器学习与 AI4S',
      },
      {
        slug: '06-ml-ai4s/03-deep-learning',
        title: '6.3 深度学习',
        summary: '以 PyTorch 为主线，覆盖训练循环、调参与 GPU 基础。',
        phase: 'Phase 6 · 机器学习与 AI4S',
      },
      {
        slug: '06-ml-ai4s/04-ai4s-modeling',
        title: '6.4 AI4S 建模专题',
        summary: '串起材料数据、图神经网络、Δ-learning 和预训练势模型。',
        phase: 'Phase 6 · 机器学习与 AI4S',
        relatedPosts: [{ title: 'CHGNet 结构预优化', href: '/blog/chgnet' }],
      },
      {
        slug: '06-ml-ai4s/05-llm-for-research',
        title: '6.5 LLM 与科研应用',
        summary: '覆盖 prompt、RAG、fine-tune 和科研场景中的边界判断。',
        phase: 'Phase 6 · 机器学习与 AI4S',
      },
    ],
  },
]

export const TUTORIAL_TOPICS = TUTORIAL_PHASES.flatMap((phase) => phase.topics)
