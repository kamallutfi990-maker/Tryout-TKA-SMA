import React from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface MathMarkdownProps {
  content: string;
  className?: string;
}

export function preprocessLaTeX(text: string): string {
  if (!text) return '';
  let processed = text
    .replace(/\\\[/g, '$$$$')
    .replace(/\\\]/g, '$$$$')
    .replace(/\\\(/g, '$')
    .replace(/\\\)/g, '$');

  // Auto-wrap string if it contains LaTeX math commands but is missing $ delimiters
  if (
    !processed.includes('$') &&
    /\\(frac|sqrt|lim|begin|end|vec|int|det|pmatrix|bmatrix|matrix|log|sin|cos|tan|theta|pi|ge|le|neq|implies|to|rightarrow|leftarrow|cdot|infty|sum|omega|mu|rho|eta|times|Delta|Sigma|varepsilon|Omega|approx|pm|vert|text)/i.test(processed)
  ) {
    processed = `$${processed}$`;
  }

  return processed;
}

export default function MathMarkdown({ content, className = '' }: MathMarkdownProps) {
  const processed = preprocessLaTeX(content || '');

  return (
    <div className={`prose prose-xs sm:prose-sm max-w-none leading-[1.85] tracking-wide break-words [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:my-2.5 [&_ol]:my-2.5 [&_li]:my-1.5 [&_h1]:mb-3 [&_h2]:mb-2.5 [&_h3]:mb-2 [&_.katex-display]:my-3.5 [&_.katex-display]:overflow-x-auto [&_.katex-display]:py-1.5 [&_.katex]:text-xs sm:[&_.katex]:text-sm [&_.katex]:inline-block [&_.katex]:py-0.5 ${className}`}>
      <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {processed}
      </Markdown>
    </div>
  );
}
