

import { HeroSection } from '@/components/home/hero-section';
import { SectionTitle } from '@/components/common/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Code2, Server, Cloud, Database, Briefcase, GraduationCap } from 'lucide-react'; 
import Image from 'next/image';
import { projectsData, resumeData } from '@/constants/mock-data'; 
import { ContactForm } from '@/components/contact/contact-form';
import { FeaturedProjectCard } from '@/components/home/featured-project-card'; // Added import

const featuredProjects = projectsData.slice(0, 2); 

const skillsOverview = [
  { name: 'C# & .NET', Icon: Code2 }, 
  { name: 'ASP.NET Core', Icon: Server }, 
  { name: 'Azure', Icon: Cloud }, 
  { name: 'SQL Server', Icon: Database }, 
];

export default function HomePage() {
  const latestExperience = resumeData.find(item => item.type === 'experience');
  const latestEducation = resumeData.find(item => item.type === 'education');

  return (
    <div className="space-y-16">
      <HeroSection />

      <section id="about-me" className="container mx-auto py-12">
        <SectionTitle title="About me" subtitle="My professional summary" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:justify-self-center md:col-span-4 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="https://placehold.co/400x400.png?text=Mohammed+Nabeel+K" 
              alt="Mohammed Nabeel K, .NET Developer" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="developer portrait professional"
            />
          </div>
          <div className="text-left md:col-span-8">
            <p className="text-lg text-muted-foreground mb-4">
              .NET Developer with hands-on experience in building scalable and secure web applications using .NET Core, ASP.NET Core, and C#. Skilled in developing microservices, creating RESTful APIs, implementing authentication mechanisms, and integrating cloud services. 
            </p>
            <p className="text-lg text-muted-foreground">
              Experienced with backend performance optimization and writing production-ready code with a focus on testing. Familiar with agile methodologies and able to deliver high-quality solutions efficiently.
            </p>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="container mx-auto">
        <SectionTitle title="Featured Projects" subtitle="A glimpse into my recent work with .NET" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/projects" passHref>
            <Button variant="ghost" className="text-primary">
              Explore All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section id="skills-overview" className="container mx-auto">
        <SectionTitle title="Core Competencies" subtitle="Key .NET and related technologies I work with" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsOverview.map((skill) => (
            <Card key={skill.name} className="text-center p-6 shadow-md hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                 <skill.Icon className="h-6 w-6" /> 
              </div>
              <h3 className="text-lg font-medium text-foreground mb-1">{skill.name}</h3>
            </Card>
          ))}
        </div>
         <div className="text-center mt-8">
          <Link href="/skills" passHref>
            <Button variant="ghost" className="text-primary">
              Discover All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section id="career-highlights" className="container mx-auto py-12">
        <SectionTitle title="Career Highlights" subtitle="Key milestones in my professional journey" />
        <div className="space-y-8 max-w-3xl mx-auto">
          {latestExperience && (
            <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-border transform hover:-translate-y-1">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary">{latestExperience.title}</h3>
                  <p className="text-md text-muted-foreground">{latestExperience.subtitle}</p>
                  <p className="text-sm text-muted-foreground/80 mb-2">{latestExperience.dateRange}</p>
                  {latestExperience.descriptionPoints.length > 0 && (
                    <p className="text-sm text-muted-foreground line-clamp-2">{latestExperience.descriptionPoints[0]}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          {latestEducation && (
            <Card className="overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 border border-border transform hover:-translate-y-1">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-accent">{latestEducation.title}</h3>
                  <p className="text-md text-muted-foreground">{latestEducation.subtitle}</p>
                  <p className="text-sm text-muted-foreground/80 mb-2">{latestEducation.dateRange}</p>
                  {latestEducation.descriptionPoints.length > 0 && (
                    <p className="text-sm text-muted-foreground line-clamp-2">{latestEducation.descriptionPoints[0]}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        <div className="text-center mt-10">
          <Link href="/resume" passHref>
            <Button variant="outline" size="lg" className="bg-transparent hover:bg-accent/10 hover:text-accent border-primary text-primary hover:border-accent">
              View Full Timeline <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      
      <section id="latest-blog" className="container mx-auto">
        <SectionTitle title="Latest Thoughts" subtitle="Insights and articles on .NET development and the Microsoft ecosystem" />
        <div className="text-center p-8 border border-dashed rounded-lg">
          <p className="text-muted-foreground">Latest blog posts will appear here. Stay tuned!</p>
          <Link href="/blog" passHref>
            <Button variant="link" className="mt-4 text-primary">
              Read The Blog <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section id="contact-me" className="container mx-auto py-12">
        <SectionTitle title="Send Me a Message" subtitle="Fill out the form and I'll get back to you." className="text-center" />
        <div className="max-w-2xl mx-auto"> {/* Centering the form */}
          <ContactForm />
        </div>
      </section>

    </div>
  );
}

