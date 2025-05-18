interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  // Basic styling for now. For proper syntax highlighting,
  // a library like 'react-syntax-highlighter' or 'prism-react-renderer' would be used.
  // This would involve additional setup and potentially client-side rendering.
  return (
    <div className="my-4 rounded-md bg-muted/50 overflow-hidden shadow-inner">
      {language && (
        <div className="px-4 py-2 text-xs text-muted-foreground bg-border/50">
          {language}
        </div>
      )}
      <pre className={`p-4 text-sm overflow-x-auto ${className}`}>
        <code className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}
