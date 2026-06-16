import type { Metadata } from 'next'
import { PublicationsContent } from './publications-content'

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Publications by Meijie Wang, including first-author and co-authored papers.',
}

export default function PublicationsPage() {
  return <PublicationsContent />
}
