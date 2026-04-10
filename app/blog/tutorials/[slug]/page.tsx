import { redirect } from 'next/navigation'

export default async function TutorialSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  redirect(`/handbook/${slug}`)
}
