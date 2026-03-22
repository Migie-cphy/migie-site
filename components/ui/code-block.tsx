'use client'

import { useEffect, useRef, useState } from 'react'

export function CodeBlock({
  code,
  children,
}: {
  code: string
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
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 rounded-md border border-zinc-300/80 bg-white/90 px-2 py-1 text-xs text-zinc-600 backdrop-blur transition-colors hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:text-zinc-100"
        aria-label="Copy code"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre ref={preRef}>{children}</pre>
    </div>
  )
}
