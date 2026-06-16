import type { Metadata } from 'next'
import { BlogContent } from './blog-content'

export const metadata: Metadata = {
  title: 'Blog',
  description: '自由文章、工具记录与单点经验归档。',
}

export default function BlogIndexPage() {
  return <BlogContent />
}
