import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef, isValidElement } from 'react'
import { highlight } from 'sugar-high'
import { CodeBlock } from '@/components/ui/code-block'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return (
        <code
          data-raw={children as string}
          dangerouslySetInnerHTML={{ __html: codeHTML }}
          {...props}
        />
      )
    },
    pre: ({ children }) => {
      const rawCode =
        isValidElement<{ 'data-raw'?: string }>(children) &&
        typeof children.props['data-raw'] === 'string'
          ? children.props['data-raw']
          : ''

      return <CodeBlock code={rawCode}>{children}</CodeBlock>
    },
  }
}
