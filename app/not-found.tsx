import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-start py-24">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
        404
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        页面不存在或已被移动。
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full bg-zinc-950 px-4 py-2 text-sm text-zinc-50 transition-colors duration-200 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
      >
        返回主页
      </Link>
    </main>
  )
}
