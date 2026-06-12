import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'
import { BLOG_POSTS } from './data'
import { TUTORIAL_PHASES } from './tutorials'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/publications',
    '/handbook',
    '/handbook/preface',
    '/blog',
  ]
  const handbookPaths = TUTORIAL_PHASES.flatMap((phase) =>
    phase.topics.map((topic) => `/handbook/${topic.slug}`),
  )
  const blogPaths = BLOG_POSTS.map((post) => post.link)

  return [...staticPaths, ...handbookPaths, ...blogPaths].map((path) => ({
    url: `${WEBSITE_URL}${path}`,
  }))
}
