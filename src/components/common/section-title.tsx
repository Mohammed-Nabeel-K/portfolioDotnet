import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionTitle({ title, subtitle, className, titleClassName, subtitleClassName }: SectionTitleProps) {
  return (
    <div className={cn("mb-6 text-center md:text-left", className)}>
      <h2 className={cn("text-2xl font-semibold tracking-tight text-primary sm:text-3xl", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-1 text-md text-muted-foreground", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
