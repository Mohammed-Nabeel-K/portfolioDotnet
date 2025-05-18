
import { PageHeader } from '@/components/common/page-header';
import { SectionTitle } from '@/components/common/section-title';
import { ResumeItemCard } from '@/components/resume/resume-item-card';
import { resumeData, ResumeItem } from '@/constants/mock-data';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const monthMap: { [key: string]: number } = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function getSortableDate(dateRange: string): Date {
  const parts = dateRange.split(' – ');
  let dateStrToParse = parts[0];

  if (dateRange.toLowerCase().startsWith('completed ')) {
    dateStrToParse = dateRange.substring('completed '.length);
  } else if (dateRange.toLowerCase().startsWith('present') && parts.length === 1) { 
    // Handle cases like "Present" if it's the only part (should not happen with "Month Year - Present")
    return new Date(new Date().getFullYear() + 100, new Date().getMonth(), 1);
  }


  const dateParts = dateStrToParse.trim().split(' ');
  const monthStr = dateParts[0];
  const yearStr = dateParts.length > 1 ? dateParts[dateParts.length - 1] : dateParts[0]; // Handle "Year" only or "Month Year"
  
  const month = monthMap[monthStr];
  const year = parseInt(yearStr, 10);

  if (parts.length > 1 && parts[1].toLowerCase() === 'present') {
    return new Date(new Date().getFullYear() + 100, month !== undefined ? month : 0, 1);
  }
  
  if (!isNaN(year)) {
    return new Date(year, month !== undefined ? month : 0, 1);
  }
  
  return new Date(0); // Absolute fallback for unparseable dates
}


export default function TimelinePage() {
  const allItems = [...resumeData].sort((a, b) => {
    const dateA = getSortableDate(a.dateRange);
    const dateB = getSortableDate(b.dateRange);
    return dateB.getTime() - dateA.getTime(); // Sort descending (most recent first)
  });

  return (
    <div className="space-y-12">
      <PageHeader
        title="My Timeline"
        description="A chronological overview of my professional journey, education, and certifications."
      >
        <Button variant="default">
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </PageHeader>

      <div className="container mx-auto px-4">
        <section id="timeline-content">
          <SectionTitle title="Career & Education Path" />
          <div className="relative py-4">
            {/* Central Line for DESKTOP */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-primary/30 h-full" aria-hidden="true"></div>
            
            {/* Line for MOBILE */}
            <div className="md:hidden absolute top-0 bottom-0 left-[11px] -translate-x-1/2 w-0.5 bg-primary/30 h-full" aria-hidden="true"></div>

            <div className="space-y-8">
              {allItems.map((item, index) => {
                let borderColorClass = 'border-primary';
                let iconColorClass = 'text-primary';
                let IconComponent = item.icon || Briefcase;

                if (item.type === 'education') {
                  borderColorClass = 'border-accent';
                  iconColorClass = 'text-accent';
                  IconComponent = item.icon || GraduationCap;
                } else if (item.type === 'certification') {
                  borderColorClass = 'border-green-500'; // Using a distinct color for certifications
                  iconColorClass = 'text-green-500';
                  IconComponent = item.icon || Award;
                }

                const isRightSideCardOnDesktop = index % 2 !== 0;

                return (
                  <div key={item.id} className="relative"> {/* Each item container */}
                    {/* Marker */}
                    <div className={cn(
                      "absolute z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-card shadow-md",
                      "top-0 left-[11px] -translate-x-1/2", // Mobile: positioned relative to the mobile line
                      "md:left-1/2", // Desktop: centered on the main line
                      borderColorClass
                    )}>
                      <IconComponent className={cn("h-5 w-5", iconColorClass)} />
                    </div>

                    {/* Content Area for the Card */}
                    <div className={cn(
                      "ml-[35px] pt-1", // Mobile: margin to clear marker and small top padding
                      "md:ml-0 md:grid md:grid-cols-2 md:gap-x-10 md:pt-0", // Desktop: uses grid
                      isRightSideCardOnDesktop ? "md:grid-flow-col-dense" : "" // Ensure right side card is in the second column visually
                    )}>
                      <div className={cn(
                        isRightSideCardOnDesktop 
                          ? 'md:col-start-2 md:pl-5' // Right card on desktop
                          : 'md:col-start-1 md:pr-5'  // Left card on desktop
                      )}>
                        <ResumeItemCard 
                          item={item} 
                          alignment={isRightSideCardOnDesktop ? 'left' : 'right'} 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
