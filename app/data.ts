type Education = {
  organization: string
  degree: string
  start: string
  end: string
  link: string
  id: string
}

type Experience = {
  organization: string
  title: string
  start: string
  end: string
  link: string
  id: string
  bullets: string[]
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
  link?: string
  group: 'first_author' | 'co_author'
  featured?: boolean
}

export const EDUCATION: Education[] = [
  {
    organization: '厦门大学',
    degree: '凝聚态物理 · 硕博连读',
    start: '2022.09',
    end: '2028.06（预计）',
    link: 'https://www.xmu.edu.cn',
    id: 'edu1',
  },
  {
    organization: '杭州师范大学',
    degree: '物理学 · 理学学士',
    start: '2018.09',
    end: '2022.06',
    link: 'https://www.hznu.edu.cn',
    id: 'edu2',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    organization: 'Deep Principle',
    title: 'AI4S 算法实习生',
    start: '2026.01',
    end: '至今',
    link: 'https://www.deepprinciple.com',
    id: 'exp1',
    bullets: [
      '材料基座模型 MPA：将 LLM 式多阶段训练（pre-/mid-/post-training）引入实验性质预测；40 项任务中 35 项达到 SOTA，scaffold（OOD）划分下 MAE 较直接微调降低 14.6%，超越 Uni-Mol2、Suiren、ChemProp。',
      '负责 mid-training（基于大规模第一性原理数据的物理对齐）与 post-training 全部流程实现，含 Hybrid Readout 读出头（注意力池化 + 原子加和）；搭建训练/评测基础设施、完成全部大规模训练。',
    ],
  },
  {
    organization: '厦门大学',
    title: '博士研究生',
    start: '2022.09',
    end: '至今',
    link: 'https://www.xmu.edu.cn',
    id: 'exp2',
    bullets: [
      '双原子催化剂设计与机理：设计 Si 基双原子催化剂用于 CO₂ 还原（Appl. Surf. Sci. 2024）；揭示 p–d 轨道耦合机制并用 GBR pipeline 筛选 360+ 候选（J. Mater. Chem. A 2024）。',
      '曲率驱动催化：确立曲率为独立的活性调控旋钮（倒火山关系，可解释描述符；J. Phys. Chem. Lett. 2026），并推广为统一的几何-电子原理（ACS Catal. 2026）。',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'SISSO 与 pysisso',
    description: '从 SISSO 本体、传统使用方式，到 pysisso 这个 Python 包装层',
    link: '/blog/sisso',
    uid: 'blog-sisso',
    category: 'AI4S',
  },
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
    journal: 'ACS Catal.',
    year: 2026,
    pages: 'ASAP',
    doi: '10.1021/acscatal.6c02847',
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
    order: 9,
    title:
      'High-Density Chain-like Fe Atoms in Two-Dimensional α-FeC₄ Enable Synergistic and Strain-Tunable ORR Activity',
    authors:
      'Yaowei Xiang, Yuxing Lin, **Meijie Wang**, Zhulin Huang, Shunqing Wu, Xinrui Cao',
    journal: 'Int. J. Hydrogen Energy',
    year: 2026,
    volume: 245,
    pages: '155698',
    doi: '10.1016/j.ijhydene.2026.155698',
    group: 'co_author',
  },
  {
    order: 8,
    title:
      'Synergistic surface engineering of BCN catalysts: Boosting NO electroreduction to NH₃ via compositional tuning and electron-rich edge stabilization',
    authors:
      'Yaxin Zhao, Yaowei Xiang, **Meijie Wang**, Yuxing Lin, Zi-Zhong Zhu, Shunqing Wu, Xinrui Cao',
    journal: 'Chin. Chem. Lett.',
    year: 2026,
    pages: '112768',
    doi: '10.1016/j.cclet.2026.112768',
    group: 'co_author',
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
  {
    order: 7,
    title:
      'Materials Property Axiom: Adapting Foundation Models to Experimental Property Prediction via Multi-phase Training',
    authors: 'Deep Principle Team and SciClaw',
    journal: 'Technical Report · Deep Principle',
    year: 2026,
    link: 'https://www.deepprinciple.com/papers/mpa.pdf',
    group: 'co_author',
    featured: true,
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
