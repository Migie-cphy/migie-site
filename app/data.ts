type Project = {
  slug: string
  name: string
  description: string
  link: string
  id: string
  start: string
  end: string
  problem: string
  method: string
  contribution: string[]
  result: string
  researchPath?: string[]
  ai4sHighlights?: string[]
  publicationItems?: Array<{
    title: string
    venue: string
    year: number
    status: 'Published' | 'Under Review'
    doi?: string
    pdf: string
    takeaway: string
  }>
  relatedLinks?: Array<{
    label: string
    href: string
  }>
}

type Experience = {
  organization: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  category: 'AI4S' | '计算材料' | '科研工程' | '工具与环境'
}

type SocialLink = {
  label: string
  link: string
}

type Publication = {
  order: number
  title: string
  authors: string
  journal: string
  year: number
  volume?: number
  issue?: number
  pages?: string
  doi?: string
  pdf?: string
  group: 'first_author' | 'co_author'
}

export const PROJECTS: Project[] = [
  {
    slug: 'ocp-catalyst-screening',
    name: 'OCP/SiTM 晶体表面高潜力筛选',
    description:
      '基于 Open Catalyst Project 的高通量筛选流程，面向 SiTM 晶体表面候选构建“预训练势 + DFT 精修”工作流，作为硕博曲率研究主线的工程化延伸。',
    link: '/projects/ocp-catalyst-screening',
    id: 'project1',
    start: '2024.09',
    end: '至今',
    problem:
      'SiTM 晶体表面候选规模大，若完全依赖 DFT 弛豫将导致筛选效率和迭代速度受限。',
    method:
      '构建 OCP 势函数预优化 + DFT 精修双阶段流程，先用 EquiformerV2 做粗筛，再对候选结构做高精度计算。',
    contribution: [
      '实现候选结构的批量预优化脚本与失败任务重试流程。',
      '建立从预优化结果到 DFT 输入文件的自动转换接口。',
      '将关键指标统一为可追踪表格，便于后续模型训练、实验对比与候选回溯。',
    ],
    result:
      '显著减少大规模候选体系进入 DFT 精修前的无效计算，提升筛选流程吞吐量与可复现性。',
    relatedLinks: [{ label: 'CHGNet 结构预优化', href: '/blog/chgnet' }],
  },
  {
    slug: 'physics-descriptor-screening',
    name: '曲率调控与电子结构耦合驱动的 CO2 电还原催化机理及可预测设计研究',
    description:
      '研究路径从 SiFe 双原子位点增强 CO2 活化出发，逐步推进到过渡金属与配位环境系统筛选、单轴曲率调控，再到完备曲率理论框架，形成 4 篇一作论文（含 JACS 在审稿件）。',
    link: '/projects/physics-descriptor-screening',
    id: 'project2',
    start: '2022.09',
    end: '至今',
    problem:
      'CO2RR 中活性来源同时受元素组合、配位环境与曲率形貌耦合影响，传统单一经验描述符难以统一解释与预测。',
    method:
      '以 DFT 与常电位自由能计算为底座，结合 GBR/SISSO 等可解释建模方法，构建“元素-配位-曲率-电子结构-活性”递进式描述符框架。',
    contribution: [
      '主导从 SiFe-DAC 机制验证到广义 SiTM 配位筛选的连续研究设计与计算实施。',
      '主导曲率调控研究从单轴场景扩展到完备曲率描述，建立可解释的几何-电子-活性关联。',
      '完成核心机理分析、模型验证与论文写作，形成连续一作成果链。',
    ],
    result:
      '已形成 4 篇一作成果（3 篇已发表，1 篇 JACS 在审），并沉淀出可迁移的 AI4S 催化建模范式；当前 OCP/SiTM 表面高通量筛选即为该主线的工程化延伸。',
    researchPath: [
      '阶段 1：SiFe-DAC 设计与 CO2 活化机理确认（双原子协同位点）。',
      '阶段 2：扩展到 SiTM 与配位环境，引入 GBR 做候选筛选与规律提炼。',
      '阶段 3：引入单轴曲率调控，建立曲率-活性响应关系。',
      '阶段 4：发展完备曲率框架，构建可解释几何描述符并形成 JACS 在审稿件。',
      '阶段 5（延伸）：OCP/SiTM 晶体表面高潜力筛选与工程化工作流。',
    ],
    ai4sHighlights: [
      '以科学问题分阶段建模，不是单次拟合，而是从机理到筛选到理论闭环的连续推进。',
      '融合 DFT、电子结构特征与可解释 ML（GBR/SISSO），强调可解释与可迁移。',
      '既有科研深度（机制与理论）也有工程化落地（OCP 高通量筛选流程）。',
    ],
    publicationItems: [
      {
        title:
          'A Geometric-Electronic Principle for Curvature-Driven Catalysis',
        venue: 'J. Am. Chem. Soc.',
        year: 2026,
        status: 'Under Review',
        pdf: '/paper/manuscript.pdf',
        takeaway:
          '面向任意各向异性形貌提出统一曲率定量框架，以几何描述符 phi 打通几何-力学-电子-活性因果链。',
      },
      {
        title:
          'Curvature Engineering of SiFe Dual-Atom Catalysts for Enhanced CO2 Electroreduction',
        venue: 'J. Phys. Chem. Lett.',
        year: 2026,
        status: 'Published',
        doi: '10.1021/acs.jpclett.5c03896',
        pdf: '/paper/curvature-engineering.pdf',
        takeaway:
          '证明曲率是独立有效的调控旋钮，揭示倒火山型曲率-活性关系，并给出可解释描述符（R2 = 0.92）。',
      },
      {
        title:
          'p-d Orbital Coupling in Silicon-Based Dual-Atom Catalysts for Enhanced CO2 Reduction',
        venue: 'J. Mater. Chem. A',
        year: 2024,
        status: 'Published',
        doi: '10.1039/D4TA06642A',
        pdf: '/paper/p_d_orbital.pdf',
        takeaway:
          '系统筛选 27 + 336 个候选，建立 p-d 耦合与配位环境协同机制，突破仅靠 d-d 协同的设计局限。',
      },
      {
        title:
          'SiFeN6-Graphene: A Promising Dual-Atom Catalyst for Enhanced CO2-to-CH4 Conversion',
        venue: 'Appl. Surf. Sci.',
        year: 2024,
        status: 'Published',
        doi: '10.1016/j.apsusc.2023.158724',
        pdf: '/paper/SiFeN6_graphene.pdf',
        takeaway:
          '验证 Si-Fe 异核位点可同时增强 CO2 活化并优化关键中间体吸附，给出 CO2 到 CH4 的可行反应路径。',
      },
    ],
    relatedLinks: [
      { label: 'JACS（在审）manuscript', href: '/paper/manuscript.pdf' },
      {
        label: 'J. Phys. Chem. Lett. 2026',
        href: '/paper/curvature-engineering.pdf',
      },
      { label: 'J. Mater. Chem. A 2024', href: '/paper/p_d_orbital.pdf' },
      { label: 'Appl. Surf. Sci. 2024', href: '/paper/SiFeN6_graphene.pdf' },
    ],
  },
  {
    slug: 'liquid-spectrum-recognition',
    name: '神经网络液体光谱识别',
    description: '基于吸收光谱与神经网络实现液体种类判别，并获得发明专利。',
    link: '/projects/liquid-spectrum-recognition',
    id: 'project3',
    start: '2020.05',
    end: '2020.11',
    problem:
      '面向低成本场景，验证是否可以用简化硬件与神经网络实现可用的液体种类识别，而不只是“是否安全”的二分类判断。',
    method:
      '以 Arduino 控制多波长 LED 采集液体透射光电压特征，在树莓派端用 Python 构建并训练神经网络进行分类识别。',
    contribution: [
      '在团队协作中主导完成方案设计、硬件联调、程序实现与测试验证。',
      '主导实现数据采集流程与神经网络训练/查询逻辑，打通“采集-识别-输出”的完整闭环。',
      '参与竞赛报告撰写与技术沉淀，并推进获得发明专利。',
    ],
    result:
      '作为本科竞赛 demo，验证了方案可行性；在实验条件下识别正确率约 80%，并支撑发明专利授权。',
    relatedLinks: [
      {
        label: '发明专利：ZL 2021 1 0042048.9',
        href: 'http://epub.cnipa.gov.cn/cred/CN112729465B',
      },
    ],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    organization: '深度原理 (Deep Principle)',
    title: 'AI4S 算法工程师（实习）',
    start: '2026.01',
    end: '至今',
    link: 'https://www.deepprinciple.com',
    id: 'exp1',
  },
  {
    organization: '厦门大学',
    title: '凝聚态物理 · 硕博连读',
    start: '2022.09',
    end: '至今',
    link: 'https://www.xmu.edu.cn',
    id: 'exp2',
  },
  {
    organization: '杭州师范大学',
    title: '物理学 · 理学学士',
    start: '2018.09',
    end: '2022.06',
    link: 'https://www.hznu.edu.cn',
    id: 'exp3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'JDFTx 电化学计算指南',
    description: 'Brillouin zone、溶剂化模型、恒电位计算详解',
    link: '/blog/jdftx',
    uid: 'blog-jdftx',
    category: 'AI4S',
  },
  {
    title: 'CHGNet 结构预优化',
    description: '用预训练势模型加速 DFT 前的结构优化',
    link: '/blog/chgnet',
    uid: 'blog-chgnet',
    category: 'AI4S',
  },
  {
    title: 'MACE 结构预优化',
    description: '用 MACE-MP 预训练模型配合 ASE 快速优化结构',
    link: '/blog/mace',
    uid: 'blog-mace',
    category: 'AI4S',
  },
  {
    title: 'Materials Project API 数据抓取',
    description: '基于 mp_api 批量获取晶体结构数据',
    link: '/blog/mp-api',
    uid: 'blog-mp-api',
    category: 'AI4S',
  },
  {
    title: 'Python 科学计算加速',
    description: 'Numba JIT、多进程与 NumPy 向量化实战',
    link: '/blog/numpy-accelerate',
    uid: 'blog-numpy',
    category: '科研工程',
  },
  {
    title: 'Matplotlib 科研绘图',
    description: '态密度可视化与多面板图表',
    link: '/blog/matplotlib',
    uid: 'blog-matplotlib',
    category: '计算材料',
  },
  {
    title: 'Linux 服务器配置指南',
    description: 'Zsh、SSH、文件传输与插件配置',
    link: '/blog/linux',
    uid: 'blog-linux',
    category: '科研工程',
  },
  {
    title: 'macOS 开发环境搭建',
    description: 'Homebrew、iTerm2、Oh My Zsh 全套配置',
    link: '/blog/macos',
    uid: 'blog-macos',
    category: '工具与环境',
  },
  {
    title: 'Shell 常用命令手册',
    description: '文件操作、文本处理、批量任务与通配符',
    link: '/blog/shell',
    uid: 'blog-shell',
    category: '工具与环境',
  },
  {
    title: 'VESTA 命令行批处理',
    description: '格式转换、批量渲染与结构信息提取',
    link: '/blog/vesta-cmd',
    uid: 'blog-vesta-cmd',
    category: '计算材料',
  },
  {
    title: 'VESTA 原子配色方案',
    description: '从默认配色切换到 CPK 方案',
    link: '/blog/vesta-color',
    uid: 'blog-vesta-color',
    category: '计算材料',
  },
  {
    title: 'Oh My Zsh 无 root 安装',
    description: '从源码编译 Zsh 与 ncurses 依赖',
    link: '/blog/ohmyzsh',
    uid: 'blog-ohmyzsh',
    category: '工具与环境',
  },
  {
    title: '远程 Jupyter Notebook',
    description: '通过 SSH 隧道连接服务器 Jupyter',
    link: '/blog/remote-jupyter',
    uid: 'blog-remote-jupyter',
    category: '科研工程',
  },
  {
    title: '并行计算工具集',
    description: 'pigz 多线程压缩、aria2 下载与并行执行',
    link: '/blog/parallel',
    uid: 'blog-parallel',
    category: '科研工程',
  },
  {
    title: 'Linux 科学计算服务器搭建',
    description: 'SLURM、CUDA、JDFTx 完整部署指南',
    link: '/blog/root',
    uid: 'blog-root',
    category: '科研工程',
  },
]

export const PUBLICATIONS: Publication[] = [
  {
    order: 6,
    title: 'A geometric-electronic principle for curvature-driven catalysis',
    authors:
      '**Meijie Wang**, Yuxing Lin, Zhulin Huang, Yang Sun, Zi-zhong Zhu, Shunqing Wu, Xinrui Cao',
    journal: 'J. Am. Chem. Soc.',
    year: 2026,
    pages: 'In Peer Review',
    group: 'first_author',
  },
  {
    order: 4,
    title:
      'Curvature Engineering of SiFe Dual-Atom Catalysts for Enhanced CO₂ Electroreduction',
    authors:
      '**Meijie Wang**, Yuxing Lin, Yaowei Xiang, Yang Sun, Zi-zhong Zhu, Shunqing Wu, Xinrui Cao',
    journal: 'J. Phys. Chem. Lett.',
    year: 2026,
    volume: 17,
    pages: '1227-1234',
    doi: '10.1021/acs.jpclett.5c03896',
    pdf: 'curvature-engineering.pdf',
    group: 'first_author',
  },
  {
    order: 3,
    title:
      'p-d Orbital coupling in silicon-based dual-atom catalysts for enhanced CO₂ reduction',
    authors:
      '**Meijie Wang**, Yaowei Xiang, Yuxing Lin, Yang Sun, Zi-zhong Zhu, Shunqing Wu, Xinrui Cao',
    journal: 'J. Mater. Chem. A',
    year: 2024,
    volume: 12,
    issue: 46,
    pages: '31902-31913',
    doi: '10.1039/D4TA06642A',
    pdf: 'p_d_orbital.pdf',
    group: 'first_author',
  },
  {
    order: 2,
    title:
      'SiFeN₆-graphene: A Promising Dual-Atom Catalyst for Enhanced CO₂-to-CH₄ Conversion',
    authors:
      '**Meijie Wang**, Yaowei Xiang, Wengeng Chen, Shunqing Wu, Zi-Zhong Zhu, Xinrui Cao',
    journal: 'Appl. Surf. Sci.',
    year: 2024,
    volume: 643,
    pages: '158724',
    doi: '10.1016/j.apsusc.2023.158724',
    pdf: 'SiFeN6_graphene.pdf',
    group: 'first_author',
  },
  {
    order: 6,
    title:
      'MoS2 Grain Boundary-Supported Single-Atom Catalysts for Efficient Electrocatalytic CO2 Conversion to CO',
    authors:
      'Yuxing Lin, **Meijie Wang**, Yaowei Xiang, Lei Li, Xing Chen, Yameng Li, Rao Huang, Yuhua Wen',
    journal: 'J. Phys. Chem. Lett.',
    year: 2026,
    volume: 17,
    pages: '1805-1814',
    doi: '10.1021/acs.jpclett.5c03749',
    pdf: 'mos2-grain.pdf',
    group: 'co_author',
  },
  {
    order: 5,
    title:
      'Theoretical Investigation of Two-Dimensional FeC4 Structures with Surface Van Hove Singularity for Electrochemical Nitric Oxide Reduction Reaction',
    authors:
      'Yaowei Xiang, **Meijie Wang**, Yuxing Lin, Yaxin Zhao, Shunqing Wu, Yang Sun, Zi-Zhong Zhu, Xinrui Cao',
    journal: 'J. Phys. Chem. Lett.',
    year: 2025,
    volume: 16,
    issue: 2,
    pages: '475-482',
    doi: '10.1021/acs.jpclett.4c03349',
    pdf: 'FeC4_NO_Reduction.pdf.pdf',
    group: 'co_author',
  },
  {
    order: 4,
    title:
      'Electrochemical synthesis of urea at cooperative active sites on Mo2C grain boundary',
    authors:
      'Yuxing Lin, Weihua Yang, **Meijie Wang**, Lei Li, Yameng Li, Xing Chen, Rao Huang, Yuhua Wen',
    journal: 'J. Catal.',
    year: 2025,
    volume: 447,
    pages: '116139',
    doi: '10.1016/j.jcat.2025.116139',
    pdf: 'Electrochemical_synthesis.pdf',
    group: 'co_author',
  },
  {
    order: 3,
    title:
      '2D-Mn2C12: An Optimal Electrocatalyst with Nonbonding Multiple Single Centers for CO2-to-CH4 Conversion',
    authors:
      'Yaowei Xiang, Wengeng Chen, **Meijie Wang**, Zi-Zhong Zhu, Shunqing Wu, Xinrui Cao',
    journal: 'ACS Appl. Mater. Interfaces',
    year: 2024,
    volume: 16,
    pages: '23199-23208',
    doi: '10.1021/acsami.4c00973',
    pdf: '2D_Mn2C12_CO2_to_CH4.pdf',
    group: 'co_author',
  },
  {
    order: 2,
    title:
      'NiB Monolayer: A Topological Metal with High NORR Electrocatalytic Performance',
    authors:
      'Wengeng Chen, Yaowei Xiang, Zepeng Wu, **Meijie Wang**, Yimei Fang, Zi-Zhong Zhu, Shunqing Wu, Xinrui Cao',
    journal: 'Appl. Surf. Sci.',
    year: 2023,
    volume: 637,
    pages: '157887',
    doi: '10.1016/j.apsusc.2023.157887',
    pdf: 'NiB_Monolayer_NORR.pdf',
    group: 'co_author',
  },
  {
    order: 1,
    title:
      'Room-temperature ferromagnetism in a beta-prime FeB monolayer with pentacoordinate boron',
    authors:
      'YaoWei Xiang, Yimei Fang, Ruotong Zhang, **Meijie Wang**, Zi-Zhong Zhu, Shunqing Wu, Xinrui Cao',
    journal: 'Phys. Rev. B',
    year: 2025,
    volume: 111,
    pages: '104406',
    doi: '10.1103/PhysRevB.111.104406',
    pdf: 'Room_temperature.pdf',
    group: 'co_author',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/Migie-cphy',
  },
  {
    label: 'ORCID',
    link: 'https://orcid.org/0009-0008-2000-5438',
  },
  {
    label: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=dqEWMxgAAAAJ&hl',
  },
  {
    label: 'Email',
    link: 'mailto:wangmeijie@stu.xmu.edu.cn',
  },
]

export const EMAIL = 'wangmeijie@stu.xmu.edu.cn'
