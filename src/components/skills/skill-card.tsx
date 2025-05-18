
"use client"; // This component will now handle icon lookup, better as client

import type { Skill } from '@/constants/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import * as Icons from 'lucide-react'; // Import all icons
import type { LucideIcon } from 'lucide-react';
import { Info } from 'lucide-react'; // Default icon

export function SkillCard({ skill }: SkillProps) {
  const IconComponent = skill.iconName ? (Icons[skill.iconName as keyof typeof Icons] as LucideIcon || Info) : Info;

  return (
    <Card className="shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-accent/20 hover:border-accent/50 transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4 md:p-6">
        <CardTitle className="text-lg font-medium text-primary">{skill.name}</CardTitle>
        <div className="p-2 bg-primary/10 rounded-md">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0">
        {skill.description && (
           <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="text-xs text-muted-foreground mb-3 h-10 line-clamp-2 cursor-help">{skill.description}</p>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="start">
                <p className="max-w-xs">{skill.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardContent>
    </Card>
  );
}

interface SkillProps {
  skill: Skill;
}
