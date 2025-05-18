
import { PageHeader } from '@/components/common/page-header';
import { SectionTitle } from '@/components/common/section-title';
import { SkillCard } from '@/components/skills/skill-card';
import { skillsData, skillCategories } from '@/constants/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Added Card for nav styling
import { Button } from '@/components/ui/button'; // For potential link styling

// Helper function to generate URL-friendly IDs from category names
const slugify = (str: string) => 
  str
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, ''); // Remove all non-word chars

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="My Skills"
        description="A detailed overview of my technical skills and proficiencies across various domains, with a focus on the .NET ecosystem."
      />
      <div className="container mx-auto px-4">
        {/* In-Page Category Navigation */}
        <Card className="mb-12 shadow-md sticky top-16 z-40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80"> {/* Made nav sticky */}
          <CardHeader className="p-3 sm:p-4">
            <CardTitle className="text-md sm:text-lg font-semibold text-primary">Quick Navigation</CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 pt-0">
            <nav className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4">
              {skillCategories.map(category => (
                <a 
                  key={category} 
                  href={`#${slugify(category)}`}
                  className="text-sm sm:text-base text-accent hover:text-accent/80 hover:underline transition-colors py-1"
                >
                  {category}
                </a>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Skills Sections */}
        <div className="space-y-12">
          {skillCategories.map(category => (
            <section 
              key={category} 
              id={slugify(category)} 
              className="scroll-mt-32 sm:scroll-mt-36" // Increased scroll margin-top to account for sticky nav + header
            >
              <SectionTitle 
                title={category} 
                className="mb-6 text-left" 
                titleClassName="text-2xl" 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
