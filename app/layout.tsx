import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { RouteScrollTop } from '@/components/ui/route-scroll-top'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

const SITE_TITLE = 'Meijie Wang | AI4S Algorithm Intern'
const SITE_DESCRIPTION =
  '王美洁（Meijie Wang）的个人主页：厦门大学凝聚态物理博士生，Deep Principle AI4S 算法实习生，研究方向为材料性质预测基础模型与计算催化。'

export const metadata: Metadata = {
  metadataBase: new URL('https://migie.top/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: SITE_TITLE,
    template: '%s | Meijie Wang',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: 'https://migie.top',
    siteName: 'Meijie Wang',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="overflow-x-hidden bg-white tracking-tight antialiased dark:bg-zinc-950">
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <RouteScrollTop />
          <div className="font-sans-apple">
            <div className="relative mx-auto w-full max-w-5xl px-6 pt-14">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
