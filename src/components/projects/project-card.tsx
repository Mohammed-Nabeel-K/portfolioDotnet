"use client";

import Image from 'next/image';
import type { Project } from '@/constants/mock-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      id={project.id}
      className="flex flex-col h-full overflow-hidden shadow-lg rounded-xl border border-border hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Link only the image + title area */}
      <Link href={`/projects/${project.id}`} passHref legacyBehavior>
        <a className="group block relative w-full cursor-pointer">
          <div className="relative w-full h-48 md:h-56">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 group-hover:scale-105 rounded-t-xl"
              data-ai-hint={project.dataAiHint}
              priority
            />
            <Badge variant="secondary" className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm text-card-foreground">
              {project.category}
            </Badge>
          </div>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>
        </a>
      </Link>

      <CardContent className="p-4 md:p-6 flex-grow">
        <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-3">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => {
              const IconComponent = tech.iconName ? (Icons[tech.iconName as keyof typeof Icons] as LucideIcon) : undefined;
              return (
                <Badge key={tech.name} variant="outline" className="text-xs border-primary/50 text-primary/90 flex items-center gap-1">
                  {IconComponent && <IconComponent className="h-3 w-3" />}
                  {tech.name}
                </Badge>
              );
            })}
            {project.technologies.length > 5 && <Badge variant="outline">...</Badge>}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 md:p-6 bg-muted/30 border-t border-border flex flex-col sm:flex-row gap-2 justify-start mt-auto">
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
      </CardFooter>
    </Card>
  );
}
