"use client";

import Image from 'next/image';
import type { Project, Technology } from '@/constants/mock-data'; 
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import * as Icons from 'lucide-react'; 
import type { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const router = useRouter();

  return (
    <Card
      className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <Image 
        src={project.imageUrl} 
        alt={project.title} 
        width={600} height={300} 
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        data-ai-hint={project.dataAiHint}
      />
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-3 text-sm line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map(tech => {
            const IconComponent = tech.iconName ? (Icons[tech.iconName as keyof typeof Icons] as LucideIcon) : undefined;
            return (
              <span key={tech.name} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full flex items-center gap-1">
                {IconComponent && <IconComponent className="h-3 w-3" />}
                {tech.name}
              </span>
            );
          })}
          {project.technologies.length > 5 && <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">...</span>}
        </div>
      </CardContent>
      <CardFooter className="border-t mt-auto p-4">
        <div className="flex flex-col sm:flex-row gap-2 justify-start w-full">
          {project.repoUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full sm:w-auto"
              asChild
              onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
            >
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="w-full sm:w-auto"
              asChild
              onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
