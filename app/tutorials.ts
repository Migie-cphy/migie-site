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
    title: 'Phase 1 · 入门基础',
    description: '先让新人具备独立使用服务器、写脚本、管理环境和协作的能力。',
    topics: [
      {
        slug: '01_01-linux-command-line',
        title: '1.1 Linux 与命令行：前言',
        summary: '作为 Linux 教程的前言和总入口，按任务场景组织后续文档。',
        phase: 'Phase 1 · 入门基础',
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
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_03-file-directory-management',
        title: '1.3 文件与目录管理',
        summary: '整理路径概念、常见文件命令、Tab 补全和删除风险。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_04-file-viewing-logs',
        title: '1.4 查看文件与日志',
        summary: '围绕 cat、less、head、tail 和最基础的日志查看习惯。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_05-file-transfer',
        title: '1.5 文件传输',
        summary: '整理 scp、rsync、rz/sz、图形化工具与常见传输脚本。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_06-permissions-environment',
        title: '1.6 权限和环境变量',
        summary: '理解 Linux 权限、数字权限和环境变量的最小工作原理。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_07-search-logs-diagnostics',
        title: '1.7 搜索、日志和报错排查',
        summary: '用 grep 和 tail 建立最基础的日志排查习惯。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_08-process-task-management',
        title: '1.8 进程和任务管理',
        summary: '认识 ps、top、kill、jobs 各自在解决什么问题。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_09-long-running-tasks',
        title: '1.9 退出服务器后，任务怎么继续跑',
        summary: '理解 screen、tmux、nohup 和队列系统各自适合什么场景。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_10-redirection-pipes',
        title: '1.10 重定向和管道',
        summary: '理解 >、>>、| 这三个符号在命令行里的基本作用。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_11-tar-basics',
        title: '1.11 最常见的压缩与解压：tar',
        summary: '先掌握 tar 的最基本压缩和解压操作。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_12-find-xargs-glob',
        title: '1.12 批量查找与处理文件',
        summary: '认识 find、xargs 和通配符在批量处理里的作用。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_13-awk-sed',
        title: '1.13 文本处理：awk 和 sed',
        summary: '先知道 awk 擅长取列，sed 擅长替换文本。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_14-shell-for-loops',
        title: '1.14 批处理脚本：for',
        summary: '开始建立“重复劳动通常可以写成循环”的感觉。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_15-terminal-setup',
        title: '1.15 终端环境优化',
        summary: '用 alias、.zshrc、oh-my-zsh 和 fzf 提高日常终端效率。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_16-disk-usage',
        title: '1.16 磁盘空间查看',
        summary: '用 du 和 df 判断目录和磁盘空间是不是快满了。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_17-compression-pigz',
        title: '1.17 压缩、解压和并行压缩',
        summary: '在 tar 基础上认识 pigz 和并行压缩的用途。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_18-soft-links',
        title: '1.18 软链接',
        summary: '把软链接先理解成 Linux 里的快捷方式。',
        phase: 'Phase 1 · 入门基础',
      },
      {
        slug: '01_19-python-basics',
        title: '1.19 科研里的 Python：先会这几点就够了',
        summary: '围绕科研脚本、数据处理、绘图和 Notebook 的最小能力集。',
        phase: 'Phase 1 · 入门基础',
        relatedPosts: [
          { title: 'Python 科学计算加速', href: '/blog/numpy-accelerate' },
          { title: 'Matplotlib 科研绘图', href: '/blog/matplotlib' },
        ],
      },
      {
        slug: '01_20-dev-collab-tools',
        title: '1.20 开发与协作工具',
        summary: '包含 Git、环境管理、编译基础、Docker 和 LaTeX。',
        phase: 'Phase 1 · 入门基础',
        relatedPosts: [
          { title: 'Conda 环境管理', href: '/blog/conda' },
          { title: 'macOS 开发环境搭建', href: '/blog/macos' },
          { title: 'Oh My Zsh 无 root 安装', href: '/blog/ohmyzsh' },
        ],
      },
    ],
  },
  {
    title: 'Phase 2 · 科研计算基础',
    description: '建立 DFT 工作流、前后处理和作业系统的完整概念。',
    topics: [
      {
        slug: '02_01-dft-basics',
        title: '2.1 DFT 基础',
        summary: '从结构优化、静态计算到 k 点和截断能收敛测试。',
        phase: 'Phase 2 · 科研计算基础',
      },
      {
        slug: '02_02-dft-pre-post',
        title: '2.2 DFT 前后处理',
        summary: '整理结构生成、吸附模型、DOS/PDOS、Bader 和可视化流程。',
        phase: 'Phase 2 · 科研计算基础',
        relatedPosts: [
          { title: 'ASE 原子模拟环境', href: '/blog/ase' },
          { title: 'VESTA 命令行批处理', href: '/blog/vesta-cmd' },
          { title: 'VESTA 原子配色方案', href: '/blog/vesta-color' },
          { title: 'Materials Project API 数据抓取', href: '/blog/mp-api' },
        ],
      },
      {
        slug: '02_03-job-management',
        title: '2.3 计算任务管理',
        summary: '聚焦 SLURM、批量投递、失败任务重启和结果目录规范。',
        phase: 'Phase 2 · 科研计算基础',
        relatedPosts: [
          { title: 'Linux 科学计算服务器搭建', href: '/blog/root' },
          { title: '并行计算工具集', href: '/blog/parallel' },
          { title: '远程 Jupyter Notebook', href: '/blog/remote-jupyter' },
        ],
      },
    ],
  },
  {
    title: 'Phase 3 · 恒电势与电催化专题',
    description: '把组内特色方向单独做成专题路线，方便持续积累。',
    topics: [
      {
        slug: '03_01-constant-potential-dft',
        title: '3.1 DFT 恒电势计算',
        summary: '围绕 JDFTx、Vaspsol++、电势标定和 CHE 对比形成专题入口。',
        phase: 'Phase 3 · 恒电势与电催化专题',
        relatedPosts: [{ title: 'JDFTx 电化学计算指南', href: '/blog/jdftx' }],
      },
    ],
  },
  {
    title: 'Phase 4 · 机器学习与 AI4S',
    description: '从经典机器学习过渡到可解释模型、深度学习和 AI4S 专题。',
    topics: [
      {
        slug: '04_01-classical-ml',
        title: '4.1 传统机器学习',
        summary: '面向回归、分类、特征工程、交叉验证与误差分析。',
        phase: 'Phase 4 · 机器学习与 AI4S',
      },
      {
        slug: '04_02-interpretable-ml',
        title: '4.2 可解释机器学习',
        summary: '围绕 SISSO、特征重要性与描述符构建思路。',
        phase: 'Phase 4 · 机器学习与 AI4S',
      },
      {
        slug: '04_03-deep-learning',
        title: '4.3 深度学习',
        summary: '以 PyTorch 为主线，覆盖训练循环、调参与 GPU 基础。',
        phase: 'Phase 4 · 机器学习与 AI4S',
      },
      {
        slug: '04_04-ai4s-modeling',
        title: '4.4 AI4S 建模专题',
        summary: '串起材料数据、图神经网络、Δ-learning 和预训练势模型。',
        phase: 'Phase 4 · 机器学习与 AI4S',
        relatedPosts: [{ title: 'CHGNet 结构预优化', href: '/blog/chgnet' }],
      },
      {
        slug: '04_05-llm-for-research',
        title: '4.5 LLM 与科研应用',
        summary: '覆盖 prompt、RAG、fine-tune 和科研场景中的边界判断。',
        phase: 'Phase 4 · 机器学习与 AI4S',
      },
    ],
  },
  {
    title: 'Phase 5 · 项目实战',
    description: '把科研问题、工程流程和复现实践收束成可执行的方法论。',
    topics: [
      {
        slug: '05_01-research-engineering',
        title: '5.1 科研工程化实践',
        summary: '聚焦批量 workflow、输入生成、结果提取和异常检测。',
        phase: 'Phase 5 · 项目实战',
      },
      {
        slug: '05_02-paper-to-reproduction',
        title: '5.2 从论文到复现',
        summary: '整理如何读论文、拆流程、做复现笔记和搭脚手架。',
        phase: 'Phase 5 · 项目实战',
      },
      {
        slug: '05_03-research-to-model',
        title: '5.3 从科研问题到模型问题',
        summary: '把研究问题抽象成标签、特征、基线和解释框架。',
        phase: 'Phase 5 · 项目实战',
      },
    ],
  },
]

export const TUTORIAL_TOPICS = TUTORIAL_PHASES.flatMap((phase) => phase.topics)
