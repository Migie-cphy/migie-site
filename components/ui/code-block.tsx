'use client'

import { useEffect, useRef, useState } from 'react'

function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="5" y="3" width="8" height="10" rx="1.5" />
      <path d="M3 10.5V5a2 2 0 0 1 2-2h4" strokeLinecap="round" />
    </svg>
  )
}

export function CodeBlock({
  code,
  language,
  children,
}: {
  code: string
  language?: string
  children: React.ReactNode
}) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (!copied) {
      return
    }

    const timeout = window.setTimeout(() => {
      setCopied(false)
    }, 1500)

    return () => window.clearTimeout(timeout)
  }, [copied])

  const handleCopy = async () => {
    // Prefer the explicit code prop; fall back to DOM textContent
    const text = code || preRef.current?.textContent || ''
    try {
      await navigator.clipboard.writeText(text.trimEnd())
      setCopied(true)
    } catch {
      // Fallback for non-secure contexts or older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text.trimEnd()
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 px-2.5 py-2 sm:px-3 dark:border-zinc-800">
        <span className="min-w-0 truncate text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:text-[11px] dark:text-zinc-400">
          {language || 'code'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-zinc-300/80 bg-white/90 px-2 py-1 text-[11px] text-zinc-600 transition-colors hover:text-zinc-950 sm:text-xs dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:text-zinc-100"
          aria-label="Copy code"
          title={copied ? 'Copied' : 'Copy'}
        >
          <CopyIcon copied={copied} />
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre ref={preRef}>{children}</pre>
    </div>
  )
}
