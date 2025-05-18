
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData, type Project } from '@/constants/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Github, ExternalLink, CheckCircle, Tag as TagIcon } from 'lucide-react';
import * as Icons from 'lucide-react'; // Import all icons
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: { id: string };
}

// Helper function to parse simple markdown-like bold text
function SimpleMarkdownRenderer({ text }: { text: string | undefined }) {
  if (!text) return null;

  // Split the text by the bold pattern, keeping the delimiters
  // e.g., "Some **bold** text" -> ["Some ", "**bold**", " text"]
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Remove the asterisks and wrap with <strong>
          return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
        }
        // Render non-bold parts as plain text
        return part;
      })}
    </>
  );
}


export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Basic handling for newline-separated paragraphs in description
  const descriptionParagraphs = (project.longDescription || project.description)
    .split('\n')
    .filter(p => p.trim() !== '');

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <article className="space-y-10">
        <header className="space-y-4">
          <Link href="/projects" passHref>
            <Button variant="ghost" className="text-sm text-muted-foreground px-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{project.title}</h1>
          <Badge variant="secondary" className="text-md inline-flex items-center">
            <TagIcon className="mr-2 h-4 w-4" /> {project.category}
          </Badge>
        </header>

        {project.imageUrl && (
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl border border-border">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint={project.dataAiHint}
            />
          </div>
        )}

        {(project.longDescription || project.description) && (
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">About This Project</h2>
            <div className="prose dark:prose-invert lg:prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>
                  <SimpleMarkdownRenderer text={paragraph} />
                </p>
              ))}
            </div>
          </section>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => {
                const IconComponent = tech.iconName ? (Icons[tech.iconName as keyof typeof Icons] as LucideIcon) : undefined;
                return (
                  <Badge key={tech.name} variant="outline" className="text-sm px-4 py-2 border-primary/60 text-primary/90 flex items-center gap-2 shadow-sm rounded-md">
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    {tech.name}
                  </Badge>
                );
              })}
            </div>
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Key Features</h2>
            <ul className="space-y-3 list-inside">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-foreground/90">
                  <CheckCircle className="mr-3 h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
        
        {(project.repoUrl || project.liveUrl) && (
          <section className="pt-8 mt-8 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Project Links</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full">
                    <Github className="mr-2 h-5 w-5" /> View Code on GitHub
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="default" size="lg" className="w-full">
                    <ExternalLink className="mr-2 h-5 w-5" /> View Live Demo
                  </Button>
                </a>
              )}
            </div>
          </section>
        )}

        <Separator className="my-12" />

        <footer className="text-center">
          <Link href="/projects" passHref>
            <Button variant="ghost" className="text-accent font-medium px-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
            </Button>
          </Link>
        </footer>
      </article>
    </div>
  );
}
