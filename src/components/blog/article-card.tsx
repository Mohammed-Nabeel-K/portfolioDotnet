import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/constants/mock-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Button } from '../ui/button';
import { format } from 'date-fns';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} passHref legacyBehavior>
      <a className="block group">
        <Card className="flex flex-col h-full overflow-hidden shadow-lg rounded-xl border border-border hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1">
          {article.imageUrl && (
            <div className="relative w-full h-48">
              <Image
                src={article.imageUrl}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={article.dataAiHint || 'technology blog'}
              />
            </div>
          )}
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2">
              {article.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 flex-grow">
            <div className="flex items-center text-xs text-muted-foreground mb-2">
              <CalendarDays className="mr-1.5 h-4 w-4" />
              <span>{format(new Date(article.date), 'MMMM d, yyyy')}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{article.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0,3).map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 md:p-6 bg-muted/30 border-t border-border">
            <Button variant="link" size="sm" className="text-accent p-0 h-auto">
              Read More <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}
