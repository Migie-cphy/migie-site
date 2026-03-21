type Project = {
  name: string
  description: string
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
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
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
    name: 'OCP 催化剂高通量筛选',
    description:
      '基于 Open Catalyst Project 的催化剂高通量筛选工作流，利用 EquiformerV2 预训练势函数替代 DFT 进行结构弛豫。',
    link: '/blog/chgnet',
    id: 'project1',
  },
  {
    name: '物理特征驱动的 ML 描述符',
    description:
      '针对双原子催化剂构建 GBR 预测模型，提出曲率描述符解决传统几何指纹失效问题。',
    link: '/blog/matplotlib',
    id: 'project2',
  },
  {
    name: '神经网络液体光谱识别',
    description:
      '基于 NumPy 独立实现多层感知机，完成矩阵乘法、激活函数及梯度下降算法，获得专利授权。',
    link: '#',
    id: 'project3',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    organization: '深度原理 (DeepPrinciple)',
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
  },
  {
    title: 'CHGNet 结构预优化',
    description: '用预训练势模型加速 DFT 前的结构优化',
    link: '/blog/chgnet',
    uid: 'blog-chgnet',
  },
  {
    title: 'Materials Project API 数据抓取',
    description: '基于 mp_api 批量获取晶体结构数据',
    link: '/blog/mp-api',
    uid: 'blog-mp-api',
  },
  {
    title: 'Python 科学计算加速',
    description: 'Numba JIT、多进程与 NumPy 向量化实战',
    link: '/blog/numpy-accelerate',
    uid: 'blog-numpy',
  },
  {
    title: 'Matplotlib 科研绘图',
    description: '态密度可视化与多面板图表',
    link: '/blog/matplotlib',
    uid: 'blog-matplotlib',
  },
  {
    title: 'ASE 原子模拟环境',
    description: 'ASE 安装与结构读写基础',
    link: '/blog/ase',
    uid: 'blog-ase',
  },
  {
    title: 'Linux 服务器配置指南',
    description: 'Zsh、SSH、文件传输与插件配置',
    link: '/blog/linux',
    uid: 'blog-linux',
  },
  {
    title: 'macOS 开发环境搭建',
    description: 'Homebrew、iTerm2、Oh My Zsh 全套配置',
    link: '/blog/macos',
    uid: 'blog-macos',
  },
  {
    title: 'Shell 常用命令手册',
    description: '文件操作、文本处理、批量任务与通配符',
    link: '/blog/shell',
    uid: 'blog-shell',
  },
  {
    title: 'VESTA 命令行批处理',
    description: '格式转换、批量渲染与结构信息提取',
    link: '/blog/vesta-cmd',
    uid: 'blog-vesta-cmd',
  },
  {
    title: 'VESTA 原子配色方案',
    description: '从默认配色切换到 CPK 方案',
    link: '/blog/vesta-color',
    uid: 'blog-vesta-color',
  },
  {
    title: 'Conda 环境管理',
    description: '默认路径与安装目录配置',
    link: '/blog/conda',
    uid: 'blog-conda',
  },
  {
    title: 'Oh My Zsh 无 root 安装',
    description: '从源码编译 Zsh 与 ncurses 依赖',
    link: '/blog/ohmyzsh',
    uid: 'blog-ohmyzsh',
  },
  {
    title: '远程 Jupyter Notebook',
    description: '通过 SSH 隧道连接服务器 Jupyter',
    link: '/blog/remote-jupyter',
    uid: 'blog-remote-jupyter',
  },
  {
    title: '并行计算工具集',
    description: 'pigz 多线程压缩、aria2 下载与并行执行',
    link: '/blog/parallel',
    uid: 'blog-parallel',
  },
  {
    title: 'Linux 科学计算服务器搭建',
    description: 'SLURM、CUDA、JDFTx 完整部署指南',
    link: '/blog/root',
    uid: 'blog-root',
  },
  {
    title: 'CP2K 编译安装',
    description: 'CP2K 安装命令与编译步骤',
    link: '/blog/cp2k',
    uid: 'blog-cp2k',
  },
  {
    title: '命令行日常使用',
    description: 'Mac OS 与 Linux 常用命令整理',
    link: '/blog/command-line',
    uid: 'blog-command-line',
  },
]

export const PUBLICATIONS: Publication[] = [
  {
    order: 6,
    title: 'A geometric-electronic principle for curvature-driven catalysis',
    authors: '**Meijie Wang** et al.',
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
    link: 'https://scholar.google.com/citations?user=YOUR_ID',
  },
  {
    label: 'Email',
    link: 'mailto:wangmeijie@stu.xmu.edu.cn',
  },
]

export const EMAIL = 'wangmeijie@stu.xmu.edu.cn'
