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
        slug: 'linux-command-line',
        title: 'Linux 与命令行',
        summary: '覆盖 shell、权限、环境变量、SSH、tmux 与常见文本处理命令。',
        phase: 'Phase 1 · 入门基础',
        relatedPosts: [
          { title: 'Linux 服务器配置指南', href: '/blog/linux' },
          { title: 'Shell 常用命令手册', href: '/blog/shell' },
          { title: '命令行日常使用', href: '/blog/command-line' },
        ],
      },
      {
        slug: 'python-basics',
        title: 'Python 基础',
        summary: '围绕科研脚本、数据处理、绘图和 Notebook 的最小能力集。',
        phase: 'Phase 1 · 入门基础',
        relatedPosts: [
          { title: 'Python 科学计算加速', href: '/blog/numpy-accelerate' },
          { title: 'Matplotlib 科研绘图', href: '/blog/matplotlib' },
        ],
      },
      {
        slug: 'dev-collab-tools',
        title: '开发与协作工具',
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
        slug: 'dft-basics',
        title: 'DFT 基础',
        summary: '从结构优化、静态计算到 k 点和截断能收敛测试。',
        phase: 'Phase 2 · 科研计算基础',
      },
      {
        slug: 'dft-pre-post',
        title: 'DFT 前后处理',
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
        slug: 'job-management',
        title: '计算任务管理',
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
        slug: 'constant-potential-dft',
        title: 'DFT 恒电势计算',
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
        slug: 'classical-ml',
        title: '传统机器学习',
        summary: '面向回归、分类、特征工程、交叉验证与误差分析。',
        phase: 'Phase 4 · 机器学习与 AI4S',
      },
      {
        slug: 'interpretable-ml',
        title: '可解释机器学习',
        summary: '围绕 SISSO、特征重要性与描述符构建思路。',
        phase: 'Phase 4 · 机器学习与 AI4S',
      },
      {
        slug: 'deep-learning',
        title: '深度学习',
        summary: '以 PyTorch 为主线，覆盖训练循环、调参与 GPU 基础。',
        phase: 'Phase 4 · 机器学习与 AI4S',
      },
      {
        slug: 'ai4s-modeling',
        title: 'AI4S 建模专题',
        summary: '串起材料数据、图神经网络、Δ-learning 和预训练势模型。',
        phase: 'Phase 4 · 机器学习与 AI4S',
        relatedPosts: [{ title: 'CHGNet 结构预优化', href: '/blog/chgnet' }],
      },
      {
        slug: 'llm-for-research',
        title: 'LLM 与科研应用',
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
        slug: 'research-engineering',
        title: '科研工程化实践',
        summary: '聚焦批量 workflow、输入生成、结果提取和异常检测。',
        phase: 'Phase 5 · 项目实战',
      },
      {
        slug: 'paper-to-reproduction',
        title: '从论文到复现',
        summary: '整理如何读论文、拆流程、做复现笔记和搭脚手架。',
        phase: 'Phase 5 · 项目实战',
      },
      {
        slug: 'research-to-model',
        title: '从科研问题到模型问题',
        summary: '把研究问题抽象成标签、特征、基线和解释框架。',
        phase: 'Phase 5 · 项目实战',
      },
    ],
  },
]

export const TUTORIAL_TOPICS = TUTORIAL_PHASES.flatMap((phase) => phase.topics)
