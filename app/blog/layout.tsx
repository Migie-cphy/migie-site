'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { TableOfContents } from '@/components/ui/toc'
import { usePathname } from 'next/navigation'

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isIndexPage = pathname === '/blog'

  if (isIndexPage) {
    return <main className="pb-8">{children}</main>
  }

  return (
    <>
      <div className="pointer-events-none fixed top-14 left-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-14 z-40 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />
      <div className="mt-24 pb-20 lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_240px] xl:gap-12">
        <main id="top">
          <article
            data-blog-article
            className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium max-w-none"
          >
            {children}
          </article>
        </main>
        <TableOfContents />
      </div>
    </>
  )
}
