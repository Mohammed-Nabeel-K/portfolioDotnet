
import { ResumeItem } from '@/constants/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResumeItemCardProps {
  item: ResumeItem;
  alignment?: 'left' | 'right'; // New prop for alignment control
  className?: string; // Allow passing additional classes
}

export function ResumeItemCard({ item, alignment = 'left', className }: ResumeItemCardProps) {
  return (
    <Card className={cn(
      "shadow-lg rounded-xl border border-border transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 transform hover:-translate-y-1",
      className
    )}>
      <CardHeader className="p-4 md:p-6">
        <div className={cn(
           "flex flex-col sm:justify-between items-start mb-1",
           alignment === 'right' ? "sm:flex-row-reverse" : "sm:flex-row sm:items-start" 
         )}>
          <CardTitle className={cn(
            "tracking-tight text-xl font-semibold text-primary sm:flex-1",
            alignment === 'right' && "sm:text-right"
          )}>{item.title}</CardTitle>
          <span className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0 font-medium bg-secondary px-2 py-1 rounded whitespace-nowrap">
            {item.dateRange}
          </span>
        </div>
        <CardDescription className={cn(
          "text-md font-medium text-foreground/80",
          alignment === 'right' && "md:text-right" 
        )}>{item.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        {item.descriptionPoints && item.descriptionPoints.length > 0 && (
          <ul className="space-y-2">
            {item.descriptionPoints.slice(0, 5).map((point, index) => (
              <li 
                key={index} 
                className={cn(
                  "flex items-start text-sm text-muted-foreground",
                  alignment === 'right' && "md:flex-row-reverse" 
                )}
              >
                <CheckCircle className={cn(
                  "mt-0.5 h-4 w-4 shrink-0 text-accent",
                  alignment === 'right' ? "md:ml-2" : "mr-2" 
                )} />
                <span className={cn(
                  "flex-1",
                  alignment === 'right' && "md:text-right" 
                )}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
