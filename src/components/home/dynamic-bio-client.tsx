"use client";

import { useEffect, useState } from 'react';
import { generateConciseAboutMe } from '@/ai/flows/dynamic-bio-entry';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles } from 'lucide-react';

interface DynamicBioClientProps {
  visitorProfessionalBackground: string;
}

export function DynamicBioClient({ visitorProfessionalBackground }: DynamicBioClientProps) {
  const [bio, setBio] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBio() {
      try {
        setLoading(true);
        setError(null);
        const result = await generateConciseAboutMe({ visitorProfessionalBackground });
        setBio(result.conciseAboutMe);
      } catch (err) {
        console.error("Failed to generate bio:", err);
        setError("Could not load personalized greeting. Showing default introduction.");
        // Fallback bio or message
        setBio("Experienced .NET developer passionate about creating robust and scalable solutions. Explore my work to see how I can contribute to your projects.");
      } finally {
        setLoading(false);
      }
    }
    fetchBio();
  }, [visitorProfessionalBackground]);

  return (
    <Card className="bg-card shadow-xl rounded-lg overflow-hidden">
      <CardHeader className="bg-primary/10 p-6">
        <CardTitle className="text-2xl font-bold text-primary flex items-center">
          <Sparkles className="mr-2 h-6 w-6 text-accent" />
          Personalized Introduction
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {loading && (
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        )}
        {error && !loading && <p className="text-muted-foreground leading-relaxed">{bio}</p>}
        {bio && !loading && !error && <p className="text-foreground/90 leading-relaxed">{bio}</p>}
      </CardContent>
    </Card>
  );
}
