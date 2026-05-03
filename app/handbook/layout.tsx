'use client'
import { HandbookPager } from '@/components/ui/handbook-pager'
import { HandbookSidebar } from '@/components/ui/handbook-sidebar'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export default function HandbookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed top-12 left-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-12 z-[60] h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />
      <div className="mt-8 pb-8 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:items-start md:gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-10">
        <HandbookSidebar />
        <main id="top">
          <article
            data-blog-article
            className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium max-w-none"
          >
            {children}
            <HandbookPager />
          </article>
        </main>
      </div>
    </>
  )
}
