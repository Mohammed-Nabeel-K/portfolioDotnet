
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articlesData, Article } from '@/constants/mock-data';
import { PageHeader } from '@/components/common/page-header';
import { CodeBlock } from '@/components/blog/code-block';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Tag, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

// This is a server component, so we can directly process markdown or use a library here.
// For simplicity, we'll render the string content which includes basic markdown and code block syntax.
// A more robust solution would use a markdown parser like 'marked' or 'react-markdown'.

function parseMarkdownToReact(markdown: string) {
  const lines = markdown.split('\n');
  const elements: JSX.Element[] = [];
  let inCodeBlock = false;
  let currentCode = '';
  let currentLang = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(<CodeBlock key={`code-${elements.length}`} code={currentCode} language={currentLang} />);
        currentCode = '';
        currentLang = '';
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        currentLang = line.substring(3).trim();
      }
    } else if (inCodeBlock) {
      currentCode += line + '\n';
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={`h2-${elements.length}`} className="text-2xl font-semibold mt-6 mb-3 text-primary">{line.substring(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={`h3-${elements.length}`} className="text-xl font-semibold mt-4 mb-2 text-primary/80">{line.substring(4)}</h3>);
    } else if (line.trim() === '') {
      // elements.push(<br key={`br-${elements.length}`} />);
    } else if (line.startsWith('- ')) {
       // Rudimentary list parsing - for proper lists, a markdown library is better
      elements.push(<li key={`li-${elements.length}`} className="ml-5 list-disc">{line.substring(2)}</li>);
    }
    else {
      elements.push(<p key={`p-${elements.length}`} className="my-3 leading-relaxed text-foreground/90">{line}</p>);
    }
  }
  if (inCodeBlock && currentCode) { // Close any unclosed code block at the end
    elements.push(<CodeBlock key={`code-${elements.length}`} code={currentCode} language={currentLang} />);
  }
  return elements;
}


export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

interface ArticlePageProps {
  params: { slug: string };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const parsedContent = parseMarkdownToReact(article.content);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose dark:prose-invert lg:prose-xl prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-foreground/90">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{article.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>Published on {format(new Date(article.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
          {article.imageUrl && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg my-6">
              <Image
                src={article.imageUrl}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint={article.dataAiHint || 'technology abstract'}
              />
            </div>
          )}
        </header>
        
        <div className="text-lg leading-relaxed text-foreground/90">
          {/* This is a simplified markdown renderer. For full markdown support, use react-markdown or similar. */}
          {parsedContent}
        </div>
        
        <Separator className="my-12" />

        <footer className="text-center">
          <Link href="/blog" passHref>
            <Button variant="ghost" className="text-accent font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </footer>
      </article>
    </div>
  );
}
